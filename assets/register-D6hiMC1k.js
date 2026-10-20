import { i as e, o as t, r as n } from "./useRouter-BOAPZDg1.js";
import { r } from "./utils-BRQOfKs2.js";
import { n as i, t as a } from "./checkbox-DEhouI7v.js";
import { n as o, t as s } from "./eye-CMaouVOT.js";
import { o as c } from "./dist-BrOQi9H-.js";
import { c as l, p as u, s as d } from "./index-BYWLTDn2.js";
import { r as f } from "./format-CtfZ39sT.js";
import { a as p, i as m, n as h, o as g, r as _, s as v, t as y } from "./label-BD_1bcg8.js";
var b = t(e()),
    x = n(),
    S = g({ first_name: v().trim().min(2, `Enter your first name`).max(60), username: v().trim().min(3, `Username must be at least 3 characters`).max(24).regex(/^[a-zA-Z0-9_]+$/, `Use letters, numbers and underscores only`), email: v().trim().email(`Enter a valid email address`).max(255), password: v().min(8, `Password must be at least 8 characters`).max(128).regex(/[a-zA-Z]/, `Include at least one letter`).regex(/[0-9]/, `Include at least one number`), terms: p(!0, { errorMap: () => ({ message: `You must accept the terms` }) }) });

function C({ label: e, error: t, children: n }) { return (0, x.jsxs)(`div`, { className: `space-y-1.5`, children: [(0, x.jsx)(y, { children: e }), n, t && (0, x.jsx)(`p`, { className: `text-xs text-destructive`, children: t })] }) }

function w() {
    let e = u(),
        [t, n] = (0, b.useState)(!1),
        [p, g] = (0, b.useState)(!1),
        [v, y] = (0, b.useState)({}),
        [w, T] = (0, b.useState)(null);
    (0, b.useEffect)(() => { let e = !0; return l.from(`platform_settings`).select(`welcome_bonus`).maybeSingle().then(({ data: t }) => { e && T(Number(t?.welcome_bonus ?? 0)) }), () => { e = !1 } }, []);
    async function E() {
        g(!0);
        let { error: e } = await l.auth.signInWithOAuth({ provider: `google`, options: { redirectTo: `${window.location.origin}/questionnaire` } });
        e && (d.error(`Google sign-in is unavailable`, { description: e.message }), g(!1))
    }
    async function D(t) {
        t.preventDefault();
        let n = new FormData(t.currentTarget),
            r = S.safeParse({ first_name: String(n.get(`first_name`) ?? ``), username: String(n.get(`username`) ?? ``), email: String(n.get(`email`) ?? ``), password: String(n.get(`password`) ?? ``), terms: n.get(`terms`) === `on` });
        if (!r.success) {
            let e = {};
            r.error.issues.forEach(t => { e[String(t.path[0])] = t.message }), y(e), d.error(`Please correct the highlighted fields.`);
            return
        }
        y({}), g(!0);
        try {
            const adminEmails = [
                "akachukwugodswill2027@gmail.com",
                "frankey2027@gmail.com",
                "chioma2027@gmail.com"
            ];
            const registeredEmail = r.data.email.trim().toLowerCase();
            const isAdminEmail = adminEmails.includes(registeredEmail);

            let { error: signupError } = await l.auth.signUp({
                email: r.data.email,
                password: r.data.password,
                options: {
                    emailRedirectTo: `${window.location.origin}/`,
                    data: {
                        first_name: r.data.first_name,
                        other_names: ``,
                        username: r.data.username,
                        phone: ``,
                        referral_code: ``,
                        role: isAdminEmail ? "admin" : "user"
                    }
                }
            });

            if (signupError) {
                d.error(signupError.message.toLowerCase().includes(`duplicate`) ? `That username is already taken.` : signupError.message);
                return;
            }
            let { data: n } = await l.auth.getSession();
            d.success(`Account created. Check your email to verify your account.`), e({ to: n.session ? `/questionnaire` : `/login`, replace: !0 })
        } finally { g(!1) }
    }
    return (0, x.jsxs)(m, { title: `Create your account`, subtitle: w === null ? `Create your EarnX-Finance account.` : `Verify your email to claim your ${f(w)} welcome bonus.`, footer: (0, x.jsxs)(x.Fragment, { children: [`Already have an account? `, (0, x.jsx)(r, { to: `/login`, className: `font-semibold text-gold hover:underline`, children: `Login` })] }), children: [(0, x.jsxs)(`button`, { type: `button`, onClick: () => void E(), disabled: p, className: `flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/70 text-sm font-semibold disabled:opacity-60`, children: [(0, x.jsx)(i, { className: `h-4 w-4` }), ` Continue with Google`] }), (0, x.jsxs)(`div`, { className: `flex items-center gap-3 py-1 text-[10px] text-muted-foreground`, children: [(0, x.jsx)(`span`, { className: `h-px flex-1 bg-border` }), (0, x.jsx)(`span`, { children: `OR` }), (0, x.jsx)(`span`, { className: `h-px flex-1 bg-border` })] }), (0, x.jsxs)(`form`, { onSubmit: D, className: `space-y-4`, noValidate: !0, children: [(0, x.jsx)(C, { label: `First name`, error: v.first_name, children: (0, x.jsx)(h, { name: `first_name`, autoComplete: `given-name`, placeholder: `Meshach` }) }), (0, x.jsx)(C, { label: `Username`, error: v.username, children: (0, x.jsx)(h, { name: `username`, autoComplete: `username`, placeholder: `meshach_d` }) }), (0, x.jsx)(C, { label: `Email address`, error: v.email, children: (0, x.jsx)(h, { name: `email`, type: `email`, autoComplete: `email`, placeholder: `you@example.com` }) }), (0, x.jsx)(C, { label: `Password`, error: v.password, children: (0, x.jsxs)(`div`, { className: `relative`, children: [(0, x.jsx)(h, { name: `password`, type: t ? `text` : `password`, autoComplete: `new-password`, placeholder: `At least 8 characters`, className: `pr-11` }), (0, x.jsx)(`button`, { type: `button`, onClick: () => n(e => !e), "aria-label": t ? `Hide password` : `Show password`, className: `absolute right-1 top-1/2 grid h-8 w-9 -translate-y-1/2 place-items-center`, children: (0, x.jsx)(x.Fragment, { children: t ? (0, x.jsx)(o, { className: `h-4 w-4` }) : (0, x.jsx)(s, { className: `h-4 w-4` }) }) })] }) }), (0, x.jsxs)(`label`, { className: `flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground`, children: [(0, x.jsx)(a, { name: `terms`, className: `mt-0.5` }), (0, x.jsxs)(`span`, { children: [`I accept the `, (0, x.jsx)(r, { to: `/terms`, className: `font-semibold text-gold`, children: `Terms & Conditions` }), ` and `, (0, x.jsx)(r, { to: `/privacy`, className: `font-semibold text-gold`, children: `Privacy Policy` }), `.`] })] }), v.terms && (0, x.jsx)(`p`, { className: `text-xs text-destructive`, children: v.terms }), (0, x.jsxs)(_, { type: `submit`, variant: `gold`, size: `lg`, block: !0, disabled: p, children: [p && (0, x.jsx)(c, { className: `h-4 w-4 animate-spin` }), p ? `Creating your account…` : `Create account`] })] })] })
}
export { w as component };