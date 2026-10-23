(function() {
 const config = window.BACK4APP_CONFIG || {};
 const appId = config.applicationId || localStorage.getItem("BACK4APP_APPLICATION_ID") || "jDMwnR6TBWGx0JFGCVNQqZEw7sVTMM63W7Jtqdxl";
 const jsKey = config.javascriptKey || localStorage.getItem("BACK4APP_JAVASCRIPT_KEY") || "13cZvAcRwJYFGclHCF27rPbLYygkyEY2Szcw0CKk";
 const serverURL = config.serverURL || localStorage.getItem("BACK4APP_SERVER_URL") || "https://parseapi.back4app.com";
 const classMap = {
  profiles: "Profile",
  platform_settings: "PlatformSettings",
  levels: "Level",
  activation_requests: "ActivationRequest",
  upgrade_requests: "UpgradeRequest",
  withdrawals: "Withdrawal",
  transactions: "Transaction",
  referrals: "Referral",
  notifications: "Notification",
  fraud_reports: "FraudReport",
  tasks: "Task",
  task_completions: "TaskCompletion",
  questionnaires: "Questionnaire",
  questionnaire_completions: "QuestionnaireCompletion",
  videos: "Video",
  video_completions: "VideoCompletion",
  promotions: "Promotion",
  support_tickets: "SupportTicket",
  receipts: "Receipt",
  media: "Media"
 };
 let parseReady;
 
 function loadParse() {
  if (window.Parse && window.Parse.User) return Promise.resolve(window.Parse);
  if (parseReady) return parseReady;
  parseReady = new Promise((resolve, reject) => {
   const script = document.createElement("script");
   script.src = "https://unpkg.com/parse@4.3.0/dist/parse.min.js";
   script.onload = () => {
    try {
     if (!appId || appId === "jDMwnR6TBWGx0JFGCVNQqZEw7sVTMM63W7Jtqdxl") throw new Error("Configure BACK4APP_APPLICATION_ID before using the app.");
     Parse.initialize(appId, jsKey);
     Parse.serverURL = serverURL;
     resolve(Parse);
    } catch (e) { reject(e) }
   };
   script.onerror = () => reject(new Error("Could not load the Back4App Parse SDK."));
   document.head.appendChild(script);
  });
  return parseReady;
 }
 
 function err(error) { return { message: error && error.message || String(error), code: error && error.code || "BACK4APP_ERROR" } }
 
 function plain(o) {
  if (!o) return null;
  const x = { id: o.id, objectId: o.id, created_at: o.createdAt, updated_at: o.updatedAt };
  Object.keys(o.attributes || {}).forEach(k => { const v = o.get(k);
   x[k] = v && v.className && v.id ? { id: v.id, objectId: v.id } : v });
  if (o.className === "Profile") { x.id = o.id;
   x.user_id = o.get("authUserId") || o.id }
  return x;
 }
 
 function queryObject(table) { return classMap[table] || table }
 
 function mapInput(table, row) {
  const x = { ...(row || {}) };
  delete x.id;
  delete x.objectId;
  delete x.createdAt;
  delete x.updatedAt;
  delete x.ACL;
  if (table === "profiles" && row && row.id && !row.authUserId) x.authUserId = row.id;
  return x;
 }
 
 function parseWhere(q, filters) {
  for (const f of filters) {
   const [key, op, value] = f;
   if (op === "eq") q.equalTo(key, value);
   else if (op === "neq") q.notEqualTo(key, value);
   else if (op === "gt") q.greaterThan(key, value);
   else if (op === "gte") q.greaterThanOrEqualTo(key, value);
   else if (op === "lt") q.lessThan(key, value);
   else if (op === "lte") q.lessThanOrEqualTo(key, value);
   else if (op === "in") q.containedIn(key, value);
   else if (op === "is") value === null ? q.doesNotExist(key) : q.equalTo(key, value);
   else if (op === "contains" && Array.isArray(value)) q.containedIn(key, value);
  }
  return q;
 }
 class Builder {
  constructor(table) { this.table = table;
   this.filters = [];
   this.sort = [];
   this.max = 1000;
   this.action = "select";
   this.payload = null;
   this.one = false;
   this.allowMissing = false;
   this.columns = "*" }
  select(columns = "*") { this.columns = columns; return this }
  eq(k, v) { this.filters.push([k, "eq", v]); return this }
  neq(k, v) { this.filters.push([k, "neq", v]); return this }
  gt(k, v) { this.filters.push([k, "gt", v]); return this }
  gte(k, v) { this.filters.push([k, "gte", v]); return this }
  lt(k, v) { this.filters.push([k, "lt", v]); return this }
  lte(k, v) { this.filters.push([k, "lte", v]); return this }
  in(k, v) { this.filters.push([k, "in", v]); return this }
  is(k, v) { this.filters.push([k, "is", v]); return this }
  contains(k, v) { this.filters.push([k, "contains", v]); return this }
  match(values) { Object.entries(values || {}).forEach(([k, v]) => this.eq(k, v)); return this }
  order(key, opts = {}) { this.sort.push([key, opts.ascending !== false]); return this }
  limit(n) { this.max = Math.max(0, Math.min(Number(n) || 1000, 1000)); return this }
  range(a, b) { this.skip = a;
   this.max = Math.max(0, b - a + 1); return this }
  single() { this.one = true; return this }
  maybeSingle() { this.one = true;
   this.allowMissing = true; return this }
  insert(data) { this.action = "insert";
   this.payload = data; return this }
  upsert(data) { this.action = "upsert";
   this.payload = data; return this }
  update(data) { this.action = "update";
   this.payload = data; return this }
  delete() { this.action = "delete"; return this }
  then(resolve, reject) { return this.run().then(resolve, reject) }
  async run() {
   try {
    const P = await loadParse(),
     current = P.User.current();
    const cls = queryObject(this.table),
     C = P.Object.extend(cls);
    if (this.action === "insert" || this.action === "upsert") {
     const rows = Array.isArray(this.payload) ? this.payload : [this.payload];
     const out = [];
     for (const row of rows) {
      const data = mapInput(this.table, row);
      let obj;
      if (this.action === "upsert" && row && row.id) obj = await new P.Query(C).get(row.id).catch(() => null);
      if (!obj) obj = new C();
      Object.entries(data).forEach(([k, v]) => obj.set(k, v));
      if (this.table === "profiles" && row && row.id && !obj.id) obj.set("authUserId", row.id);
      await obj.save();
      out.push(plain(obj));
     }
     return { data: Array.isArray(this.payload) ? out : out[0] || null, error: null, count: out.length };
    }
    let q = new P.Query(C);
    q = parseWhere(q, this.filters);
    if (this.sort.length)
     for (const [key, asc] of this.sort) { if (asc) q.addAscending(key);
      else q.addDescending(key) }
    else q.descending("createdAt");
    q.limit(this.max);
    if (this.skip) q.skip(this.skip);
    if (this.action === "select") {
     let rows = await q.find();
     let result = rows.map(plain);
     if (this.one) {
      if (result.length > 1) return { data: null, error: { message: "Multiple rows returned", code: "MULTIPLE_ROWS" }, count: result.length };
      if (!result.length && !this.allowMissing) return { data: null, error: { message: "No rows found", code: "NO_ROWS" }, count: 0 };
      return { data: result[0] || null, error: null, count: result.length };
     }
     return { data: result, error: null, count: result.length };
    }
    let rows = await q.find(),
     result = [];
    for (const obj of rows) {
     if (this.action === "update") Object.entries(mapInput(this.table, this.payload)).forEach(([k, v]) => obj.set(k, v));
     if (this.action === "delete") { await obj.destroy();
      result.push(plain(obj)) }
     else { await obj.save();
      result.push(plain(obj)) }
    }
    return { data: this.one ? (result[0] || null) : result, error: null, count: result.length };
   } catch (e) { return { data: null, error: err(e), count: null } }
  }
 }
 const auth = {
  async getSession() { try { const P = await loadParse(),
     u = P.User.current(); if (!u) return { data: { session: null }, error: null }; return { data: { session: { access_token: u.getSessionToken(), user: authUser(u), token_type: "bearer" } }, error: null } } catch (e) { return { data: { session: null }, error: err(e) } } },
  async getUser() { try { const P = await loadParse(),
     u = P.User.current(); return { data: { user: u ? authUser(u) : null }, error: null } } catch (e) { return { data: { user: null }, error: err(e) } } },
  async signUp({ email, password, options = {} }) { try { const P = await loadParse(),
     u = new P.User();
    u.set("username", email);
    u.set("email", email);
    u.set("password", password);
    Object.entries(options.data || {}).forEach(([k, v]) => u.set(k, v));
    await u.signUp(); return { data: { user: authUser(u), session: { user: authUser(u), access_token: u.getSessionToken() } }, error: null } } catch (e) { return { data: { user: null, session: null }, error: err(e) } } },
  async signInWithPassword({ email, password }) { try { const P = await loadParse(),
     u = await P.User.logIn(email, password); return { data: { user: authUser(u), session: { user: authUser(u), access_token: u.getSessionToken() } }, error: null } } catch (e) { return { data: { user: null, session: null }, error: err(e) } } },
  async signOut() { try { const P = await loadParse();
    await P.User.logOut(); return { error: null } } catch (e) { return { error: err(e) } } },
  async resetPasswordForEmail(email) { try { const P = await loadParse();
    await P.User.requestPasswordReset(email); return { data: {}, error: null } } catch (e) { return { data: null, error: err(e) } } },
  async updateUser({ password, attributes = {} }) { try { const P = await loadParse(),
     u = P.User.current(); if (!u) throw new Error("You must sign in first."); if (password) u.set("password", password);
    Object.entries(attributes || {}).forEach(([k, v]) => u.set(k, v));
    await u.save(); return { data: { user: authUser(u) }, error: null } } catch (e) { return { data: { user: null }, error: err(e) } } },
  async onAuthStateChange(callback) {
   try { const P = await loadParse(); const notify = () => callback("SIGNED_IN", P.User.current() ? { user: authUser(P.User.current()), access_token: P.User.current().getSessionToken() } : null);
    window.addEventListener("focus", notify); return { data: { subscription: { unsubscribe() { window.removeEventListener("focus", notify) } } } } } catch (e) { return { data: { subscription: { unsubscribe() {} } } } }
  },
  async signInWithOAuth() { return { data: { url: null }, error: { message: "OAuth login must be configured for Back4App separately." } } }
 };
 
 function authUser(u) { return { id: u.id, objectId: u.id, email: u.get("email"), user_metadata: { ...u.attributes }, app_metadata: {}, aud: "authenticated", role: "authenticated", created_at: u.createdAt, updated_at: u.updatedAt } }
 const storage = {
  from(bucket) { return { async upload(path, file) { return { data: null, error: { message: "Storage upload needs a Back4App file class or configured file hosting." } } }, async getPublicUrl(path) { return { data: { publicUrl: path } } } } }
 };
 const client = { auth, storage, from(table) { return new Builder(table) }, async rpc(name, params = {}) { try { const P = await loadParse(); const result = await P.Cloud.run(name, params); return { data: result, error: null } } catch (e) { return { data: null, error: err(e) } } } };
 window.__back4appClient = client;
 window.Back4AppCompat = { client, configure(values) { Object.assign(window.BACK4APP_CONFIG || {}, values); } };
})();