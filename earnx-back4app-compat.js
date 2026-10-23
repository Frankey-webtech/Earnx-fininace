(function () {
  'use strict';
  const defaults = {
    applicationId: 'jDMwnR6TBWGx0JFGCVNQqZEw7sVTMM63W7Jtqdxl',
    javascriptKey: '13cZvAcRwJYFGclHCF27rPbLYygkyEY2Szcw0CKk',
    serverURL: 'https://parseapi.back4app.com'
  };
  const cfg = Object.assign({}, defaults, window.EARNX_BACK4APP_CONFIG || {});
  const subs = new Set();
  const fileURLs = new Map();
  let initialized = false;
  let currentClient = null;
  function errorObj(error) { return error ? { message: error.message || String(error), code: error.code || null } : null; }
  function userData(user) {
    if (!user) return null;
    const j = user.toJSON ? user.toJSON() : user;
    return { id: user.id || j.objectId, email: user.get ? user.get('email') : j.email,
      user_metadata: Object.assign({}, j, j.user_metadata || {}, { username: user.get ? user.get('username') : j.username }),
      app_metadata: j.app_metadata || {}, aud: 'authenticated', role: 'authenticated', created_at: j.createdAt, updated_at: j.updatedAt };
  }
  function notify(event) { const u = Parse.User.current(); const session = u ? { access_token: u.getSessionToken(), token_type: 'bearer', user: userData(u) } : null; subs.forEach(fn => { try { fn(event, session); } catch (_) {} }); }
  function toParseValue(value) { if (value && typeof value === 'object' && value.id && value.__type === 'Pointer') { const C = Parse.Object.extend(value.className); const o = new C(); o.id = value.id; return o; } return value; }
  function objectToRow(obj, table) {
    if (!obj) return null;
    const raw = obj.toJSON ? obj.toJSON() : obj;
    const out = Object.assign({}, raw, { id: table === 'profiles' ? (raw.user_id || raw.id || raw.objectId) : (raw.objectId || raw.id) });
    delete out.objectId; delete out.__type; delete out.className;
    Object.keys(out).forEach(k => { if (out[k] && typeof out[k] === 'object' && out[k].objectId) out[k] = out[k].objectId; });
    return out;
  }
  function mapField(table, field) { return table === 'profiles' && field === 'id' ? 'user_id' : field; }
  class QueryBuilder {
    constructor(table) { this.table = table; this.action = 'select'; this.columns = '*'; this.filters = []; this.sorts = []; this.max = 1000; this.singleMode = ''; this.countMode = null; this.head = false; this.payload = null; this.returning = false; }
    select(cols='*', opts={}) { this.columns = cols; this.returning = true; if (opts && opts.count) this.countMode = opts.count; if (opts && opts.head) this.head = true; return this; }
    eq(k,v) { this.filters.push([mapField(this.table,k),'eq',v]); return this; }
    neq(k,v) { this.filters.push([mapField(this.table,k),'neq',v]); return this; }
    gt(k,v) { this.filters.push([mapField(this.table,k),'gt',v]); return this; }
    gte(k,v) { this.filters.push([mapField(this.table,k),'gte',v]); return this; }
    lt(k,v) { this.filters.push([mapField(this.table,k),'lt',v]); return this; }
    lte(k,v) { this.filters.push([mapField(this.table,k),'lte',v]); return this; }
    is(k,v) { this.filters.push([mapField(this.table,k),v===null?'exists-null':'eq',v]); return this; }
    in(k,vs) { this.filters.push([mapField(this.table,k),'in',vs]); return this; }
    order(k,opts={}) { this.sorts.push([mapField(this.table,k),opts.ascending===false?-1:1]); return this; }
    limit(n) { this.max = Math.max(0,Number(n)||0); return this; }
    range(a,b) { this.skip = Math.max(0,Number(a)||0); this.max = Math.max(0,Number(b)-Number(a)+1); return this; }
    single() { this.singleMode='single'; return this; }
    maybeSingle() { this.singleMode='maybe'; return this; }
    insert(data) { this.action='insert'; this.payload=data; return this; }
    upsert(data) { this.action='upsert'; this.payload=data; return this; }
    update(data) { this.action='update'; this.payload=data; return this; }
    delete() { this.action='delete'; return this; }
    then(resolve,reject) { return this.exec().then(resolve,reject); }
    async exec() {
      try {
        if (!window.Parse || !Parse.applicationId) throw new Error('Back4App is not initialized. Set the Application ID and JavaScript Key in back4app-config.js.');
        const C = Parse.Object.extend(this.table);
        const query = new Parse.Query(C);
        for (const [k,op,v] of this.filters) {
          if (op==='eq') query.equalTo(k,v);
          else if (op==='neq') query.notEqualTo(k,v);
          else if (op==='gt') query.greaterThan(k,v);
          else if (op==='gte') query.greaterThanOrEqualTo(k,v);
          else if (op==='lt') query.lessThan(k,v);
          else if (op==='lte') query.lessThanOrEqualTo(k,v);
          else if (op==='in') query.containedIn(k,v || []);
          else if (op==='exists-null') query.doesNotExist(k);
        }
        this.sorts.forEach(([k,d]) => d < 0 ? query.addDescending(k) : query.addAscending(k));
        query.limit(Math.min(this.max,1000)); if (this.skip) query.skip(this.skip);
        if (this.action==='select') {
          const rows = await query.find();
          if (this.countMode) { const count = await query.count(); return {data:this.head?null:rows.map(o=>objectToRow(o,this.table)),count,error:null}; }
          if (this.head) return {data:null,count:await query.count(),error:null};
          const data = rows.map(o=>objectToRow(o,this.table));
          if (this.singleMode==='single' && data.length!==1) return {data:null,error:{message:`Expected one ${this.table} row, found ${data.length}`}};
          return {data:this.singleMode?data[0]||null:data,error:null};
        }
        if (this.action==='insert' || this.action==='upsert') {
          const list = Array.isArray(this.payload) ? this.payload : [this.payload];
          const out=[];
          for (const row of list) {
            let obj;
            if (this.action==='upsert' && row && row.id) { try { obj=await query.get(row.id); } catch (_) {} }
            if (!obj) obj = new C();
            for (const [k,v] of Object.entries(row||{})) if (k!=='id' || this.table==='profiles') obj.set(k==='id'&&this.table==='profiles'?'user_id':k,v);
            await obj.save(); out.push(objectToRow(obj,this.table));
          }
          return {data:this.returning?(Array.isArray(this.payload)?out:out[0]):null,error:null};
        }
        const rows = await query.find();
        if (this.action==='update') {
          for (const obj of rows) for (const [k,v] of Object.entries(this.payload||{})) obj.set(k,v);
          if (rows.length) await Parse.Object.saveAll(rows);
          return {data:this.returning?rows.map(o=>objectToRow(o,this.table)):null,error:null};
        }
        if (this.action==='delete') { if(rows.length) await Parse.Object.destroyAll(rows); return {data:null,error:null}; }
        return {data:null,error:{message:'Unsupported database operation'}};
      } catch (e) { return {data:null,error:errorObj(e)}; }
    }
  }
  const client = {
    auth: {
      async getUser() { const u = await Parse.User.currentAsync(); return {data:{user:userData(u)},error:null}; },
      async getSession() { const u = await Parse.User.currentAsync(); return {data:{session:u?{access_token:u.getSessionToken(),token_type:'bearer',user:userData(u)}:null},error:null}; },
      onAuthStateChange(fn) { subs.add(fn); return {data:{subscription:{unsubscribe:()=>subs.delete(fn)}}}; },
      async signInWithPassword({email,password}) { try { let loginName=email; try { const q=new Parse.Query(Parse.User); q.equalTo('email',email); const found=await q.first(); if(found&&found.get('username')) loginName=found.get('username'); } catch (_) {} const u=await Parse.User.logIn(loginName,password); notify('SIGNED_IN'); return {data:{user:userData(u),session:{access_token:u.getSessionToken(),user:userData(u)}},error:null}; } catch(e) { return {data:{user:null,session:null},error:errorObj(e)}; } },
      async signUp({email,password,options={}}) { try { const meta=options.data||{}; const u=new Parse.User(); u.set('username',meta.username||email); u.set('email',email); u.set('password',password); Object.entries(meta).forEach(([k,v])=>u.set(k,v)); await u.signUp(); try { await Parse.Cloud.run('ensure_profile'); } catch (profileError) { console.warn('[EarnX] ensure_profile did not complete after signup:', profileError.message); } notify('SIGNED_IN'); return {data:{user:userData(u),session:{access_token:u.getSessionToken(),user:userData(u)}},error:null}; } catch(e) { return {data:{user:null,session:null},error:errorObj(e)}; } },
      async signOut() { try { await Parse.User.logOut(); notify('SIGNED_OUT'); return {error:null}; } catch(e) { return {error:errorObj(e)}; } },
      async resetPasswordForEmail(email) { try { await Parse.User.requestPasswordReset(email); return {data:{},error:null}; } catch(e) { return {data:null,error:errorObj(e)}; } },
      async updateUser(attrs={}) { try { const u=await Parse.User.currentAsync(); if(!u) throw new Error('Not signed in'); Object.entries(attrs).forEach(([k,v])=>u.set(k,v)); await u.save(); return {data:{user:userData(u)},error:null}; } catch(e) { return {data:{user:null},error:errorObj(e)}; } },
      async signInWithOAuth() { return {data:{url:null},error:{message:'Google OAuth is not configured for this Back4App application. Configure a supported OAuth flow before using this button.'}}; }
    },
    from(table) { return new QueryBuilder(table); },
    async rpc(name,args={}) { try { const data=await Parse.Cloud.run(name,args); return {data,error:null}; } catch(e) { return {data:null,error:errorObj(e)}; } },
    functions: { async invoke(name,{body={}}={}) { try { return {data:await Parse.Cloud.run(name,body),error:null}; } catch(e) { return {data:null,error:errorObj(e)}; } } },
    storage: { from(bucket) { return {
      async upload(path,file,opts={}) { try { const f=new Parse.File(path,file,{type:opts.contentType||file.type||'application/octet-stream'}); await f.save(); fileURLs.set(`${bucket}/${path}`,f.url()); fileURLs.set(path,f.url()); return {data:{path,url:f.url(),fullPath:`${bucket}/${path}`},error:null}; } catch(e) { return {data:null,error:errorObj(e)}; } },
      async createSignedUrl(path) { try { const url=fileURLs.get(`${bucket}/${path}`)||fileURLs.get(path)||(/^https?:\/\//i.test(path)?path:path); return {data:{signedUrl:url},error:null}; } catch(e) { return {data:null,error:errorObj(e)}; } },
      async remove(paths=[]) { return {data:[],error:null}; },
      getPublicUrl(path) { return {data:{publicUrl:path}} }
    }; } }
  };
  window.EarnXBack4App = { createClient() { if (!initialized) { if (!cfg.applicationId || cfg.applicationId.startsWith('YOUR_') || !cfg.javascriptKey || cfg.javascriptKey.startsWith('YOUR_')) console.warn('[EarnX] Configure back4app-config.js before testing.'); Parse.initialize(cfg.applicationId,cfg.javascriptKey); Parse.serverURL=cfg.serverURL; initialized=true; } currentClient=client; return client; } };
})();
