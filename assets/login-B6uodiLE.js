import { i as e, o as t, r as n } from "./useRouter-BOAPZDg1.js";
import { r } from "./utils-BRQOfKs2.js";
import { n as i, t as a } from "./checkbox-DEhouI7v.js";
import { n as o, t as s } from "./eye-CMaouVOT.js";
import { o as c } from "./dist-BrOQi9H-.js";
import { _ as l, b as u, c as d, g as f, p, s as m, v as h, y as g } from "./index-BYWLTDn2.js";
import { i as _, n as v, o as y, r as b, s as x, t as S } from "./label-BD_1bcg8.js";

function C(e) { if (Array.isArray(e)) return e.flatMap(e => C(e)); if (typeof e != `string`) return []; let t = [],
        n = 0,
        r, i, a, o, s, c = () => { for (; n < e.length && /\s/.test(e.charAt(n));) n += 1; return n < e.length },
        l = () => (i = e.charAt(n), i !== `=` && i !== `;` && i !== `,`); for (; n < e.length;) { for (r = n, s = !1; c();)
            if (i = e.charAt(n), i === `,`) { for (a = n, n += 1, c(), o = n; n < e.length && l();) n += 1;
                n < e.length && e.charAt(n) === `=` ? (s = !0, n = o, t.push(e.slice(r, a)), r = n) : n = a + 1 } else n += 1;
        (!s || n >= e.length) && t.push(e.slice(r)) } return t }

function w(e) { return e instanceof Headers ? e : Array.isArray(e) || typeof e == `object` ? new Headers(e) : null }

function T(...e) { return e.reduce((e, t) => { let n = w(t); if (!n) return e; for (let [t, r] of n.entries()) t === `set-cookie` ? C(r).forEach(t => e.append(`set-cookie`, t)) : e.set(t, r); return e }, new Headers) }

function E(e) { return e !== `__proto__` && e !== `constructor` && e !== `prototype` }

function D(e, t) { let n = Object.create(null); if (e)
        for (let t of Object.keys(e)) E(t) && (n[t] = e[t]); if (t && typeof t == `object`)
        for (let e of Object.keys(t)) E(e) && (n[e] = t[e]); return n }

function O(e) { if (!e) return Object.create(null); let t = Object.create(null); for (let n of Object.keys(e)) E(n) && (t[n] = e[n]); return t }
var k = () => { throw Error(`createServerOnlyFn() functions can only be called on the server!`) },
    A = (e, t) => { let n = t || e || {};
        n.method === void 0 && (n.method = `GET`); let r = e => A(void 0, { ...n, validator: e, inputValidator: e }); return Object.assign(e => A(void 0, { ...n, ...e }), { options: n, middleware: e => { let t = [...n.middleware || []];
                e.forEach(e => { u in e ? e.options.middleware && t.push(...e.options.middleware) : t.push(e) }); let r = A(void 0, { ...n, middleware: t }); return r[u] = !0, r }, validator: r, inputValidator: r, handler: (...e) => { let [t, r] = e, i = { ...n, extractedFn: t, serverFn: r }, a = [...i.middleware || [], P(i)]; return t.method = n.method, Object.assign(async e => { let n = await j(a, `client`, { ...t, ...i, data: e?.data, headers: e?.headers, signal: e?.signal, fetch: e?.fetch, context: O() }),
                        r = h(n.error); if (r) throw r; if (n.error) throw n.error; return n.result }, { ...t, method: n.method, __executeServer: async e => { let r = k(),
                            i = r.contextAfterGlobalMiddlewares; return await j(a, `server`, { ...t, data: e.data, method: e.method ?? n.method, serverFnMeta: t.serverFnMeta, context: D(e.context, i), request: r.request }).then(e => ({ result: e.result, error: e.error, context: e.sendContext })) } }) } }) };
async function j(e, t, n) { let r = M([...g()?.functionMiddleware || [], ...e]); if (t === `server`) { let e = k({ throwIfNotFound: !1 });
        e?.executedRequestMiddlewares && (r = r.filter(t => !e.executedRequestMiddlewares.has(t))) } let i = async e => { let n = r.shift(); if (!n) return e; try { let r = `validator` in n.options ? n.options.validator : void 0;!r && `inputValidator` in n.options && (r = n.options.inputValidator), r && t === `server` && (e.data = await N(r, e.data)); let a; if (t === `client` ? `client` in n.options && (a = n.options.client) : `server` in n.options && (a = n.options.server), a) { let t = async (t = {}) => { let n = await i({ ...e, ...t, context: D(e.context, t.context), sendContext: D(e.sendContext, t.sendContext), headers: T(e.headers, t.headers), _callSiteFetch: e._callSiteFetch, fetch: e._callSiteFetch ?? t.fetch ?? e.fetch, result: t.result === void 0 ? t instanceof Response ? t : e.result : t.result, error: t.error ?? e.error }); if (n.error) throw n.error; return n }, n = await a({ ...e, next: t }); if (l(n)) return { ...e, error: n }; if (n instanceof Response) return { ...e, result: n }; if (!n) throw Error(`User middleware returned undefined. You must call next() or return a result in your middlewares.`); return n } return i(e) } catch (t) { return { ...e, error: t } } }; return i({ ...n, headers: n.headers || {}, sendContext: n.sendContext || {}, context: n.context || O(), _callSiteFetch: n.fetch }) }

function M(e, t = 100) { let n = new Set,
        r = [],
        i = (e, a) => { if (a > t) throw Error(`Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`);
            e.forEach(e => { e.options.middleware && i(e.options.middleware, a + 1), n.has(e) || (n.add(e), r.push(e)) }) }; return i(e, 0), r } async function N(e, t) { if (e == null) return {}; if (`~standard` in e) { let n = await e[`~standard`].validate(t); if (n.issues) throw Error(JSON.stringify(n.issues, void 0, 2)); return n.value } if (`parse` in e) return e.parse(t); if (typeof e == `function`) return e(t); throw Error(`Invalid validator type!`) }

function P(e) { return { "~types": void 0, options: { inputValidator: e.validator ?? e.inputValidator, client: async ({ next: t, sendContext: n, fetch: r, ...i }) => { let a = { ...i, context: n, fetch: r }; return t(await e.extractedFn?.(a)) }, server: async ({ next: t, ...n }) => { let r = await e.serverFn?.(n); return t({ ...n, result: r }) } } } }
var F = t(e()),
    I = A({ method: `POST` }).handler(f(`e51f9039a94d74cdaf9c93d8548c59c11102b0b8b418e72d6555c8423733beb6`)),
    L = n(),
    R = y({ identifier: x().trim().min(3, `Enter your username or email address`).max(255), password: x().min(6, `Your password must be at least 6 characters`).max(128) });

function z() { let e = p(),
        [t, n] = (0, F.useState)(!1),
        [l, u] = (0, F.useState)(!1),
        [f, h] = (0, F.useState)({});
    async function g() { u(!0); let { error: e } = await d.auth.signInWithOAuth({ provider: `google`, options: { redirectTo: `${window.location.origin}/questionnaire` } });
        e && (m.error(`Google sign-in is unavailable`, { description: e.message }), u(!1)) } async function y(t) { t.preventDefault(); let n = new FormData(t.currentTarget),
            r = R.safeParse({ identifier: String(n.get(`identifier`) ?? ``), password: String(n.get(`password`) ?? ``) }); if (!r.success) { let e = {};
            r.error.issues.forEach(t => { e[String(t.path[0])] = t.message }), h(e); return } h({}), u(!0); try { let { data: n, error: i } = await d.auth.signInWithPassword({ email: r.data.identifier, password: r.data.password }); if (i) { m.error(i.message.toLowerCase().includes(`invalid`) ? `Those details don't match an account. Please check and try again.` : i.message); return } let { data: a } = await d.auth.getSession(); if (!a.session && !n.session) { m.error(`Login succeeded, but your session was not saved. Please try again.`); return } let { data: o } = await d.from(`profiles`).select(`survey_completed, welcome_bonus_claimed`).eq(`id`, n.user?.id ?? a.session?.user.id ?? ``).maybeSingle();
            m.success(`Welcome back to EarnX-Finance.`), o && o.survey_completed === !1 && o.welcome_bonus_claimed === !1 ? e({ to: `/questionnaire`, replace: !0 }) : e({ to: `/dashboard`, replace: !0 }) } finally { u(!1) } }
    return (0, L.jsxs)(_, { title: `Welcome back`, subtitle: `Sign in with your username or email address to continue earning.`, footer: (0, L.jsxs)(L.Fragment, { children: [`Don't have an account?`, ` `, (0, L.jsx)(r, { to: `/register`, className: `font-semibold text-gold hover:underline`, children: `Create one` })] }), children: [(0, L.jsxs)(`button`, { type: `button`, onClick: () => void g(), disabled: l, className: `flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/70 text-sm font-semibold transition hover:border-gold/40 hover:bg-secondary/50 disabled:opacity-60`, children: [(0, L.jsx)(i, { className: `h-4 w-4` }), ` Continue with Google`] }), (0, L.jsxs)(`div`, { className: `flex items-center gap-3 py-1 text-[10px] text-muted-foreground`, children: [(0, L.jsx)(`span`, { className: `h-px flex-1 bg-border` }), (0, L.jsx)(`span`, { children: `OR` }), (0, L.jsx)(`span`, { className: `h-px flex-1 bg-border` })] }), (0, L.jsxs)(`form`, { onSubmit: y, className: `space-y-4`, noValidate: !0, children: [(0, L.jsxs)(`div`, { className: `space-y-1.5`, children: [(0, L.jsx)(S, { htmlFor: `identifier`, children: `Username or email` }), (0, L.jsx)(v, { id: `identifier`, name: `identifier`, autoComplete: `username`, placeholder: `you@example.com` }), f.identifier && (0, L.jsx)(`p`, { className: `text-xs text-destructive`, children: f.identifier })] }), (0, L.jsxs)(`div`, { className: `space-y-1.5`, children: [(0, L.jsx)(S, { htmlFor: `password`, children: `Password` }), (0, L.jsxs)(`div`, { className: `relative`, children: [(0, L.jsx)(v, { id: `password`, name: `password`, type: t ? `text` : `password`, autoComplete: `current-password`, placeholder: `••••••••`, className: `pr-11` }), (0, L.jsx)(`button`, { type: `button`, onClick: () => n(e => !e), "aria-label": t ? `Hide password` : `Show password`, className: `absolute right-1 top-1/2 grid h-8 w-9 -translate-y-1/2 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground`, children: t ? (0, L.jsx)(o, { className: `h-4 w-4` }) : (0, L.jsx)(s, { className: `h-4 w-4` }) })] }), f.password && (0, L.jsx)(`p`, { className: `text-xs text-destructive`, children: f.password })] }), (0, L.jsxs)(`div`, { className: `flex items-center justify-between gap-3`, children: [(0, L.jsxs)(`label`, { className: `flex items-center gap-2 text-xs text-muted-foreground`, children: [(0, L.jsx)(a, { name: `remember`, defaultChecked: !0 }), `Remember me`] }), (0, L.jsx)(r, { to: `/forgot-password`, className: `text-xs font-medium text-gold hover:underline`, children: `Forgot password?` })] }), (0, L.jsxs)(b, { type: `submit`, variant: `gold`, size: `lg`, block: !0, disabled: l, children: [l && (0, L.jsx)(c, { className: `h-4 w-4 animate-spin` }), l ? `Signing you in…` : `Login`] })] })] }) }
export { z as component };