import { i as e, o as t, r as n } from "./useRouter-BOAPZDg1.js";
import { a as r } from "./bottom-nav-CLnfULtP.js";
import { a as i, i as a, n as o, o as s, r as c, t as l } from "./payment-security-CoabBk_k.js";
import { t as u } from "./check-BcBWAkuM.js";
import { t as d } from "./receipt-upload-BGHIY-At.js";
import { o as f } from "./dist-BrOQi9H-.js";
import { t as p } from "./trending-up-Xxl_9IZ4.js";
import { t as m } from "./zap-C7gVU_r7.js";
import { c as h, h as g, o as _, p as v, s as y } from "./index-BYWLTDn2.js";
import { r as b, t as x } from "./app-page-MUDM_FSj.js";
import { r as S } from "./format-CtfZ39sT.js";
import { t as C } from "./request-processing-CNJfMb9w.js";
var w = _(`battery-charging`, [
        [`path`, { d: `m11 7-3 5h4l-3 5`, key: `b4a64w` }],
        [`path`, { d: `M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935`, key: `lre1cr` }],
        [`path`, { d: `M22 14v-4`, key: `14q9d5` }],
        [`path`, { d: `M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936`, key: `13q5k0` }]
    ]),
    T = t(e()),
    E = n(),
    D = e => {
        switch (e.reason) {
            case `not_activated`:
                return `Activate your account before upgrading.`;
            case `account_restricted`:
                return `Your account is restricted. Please contact support.`;
            case `pending_exists`:
                return `You already have an upgrade request to Level ${e.pending_level} awaiting review. Wait for it to be approved or rejected first.`;
            case `not_sequential`:
                return `Upgrades are sequential. Your next available step is Level ${e.next_level}.`;
            case `already_at_level`:
                return `You're already on this plan or higher.`;
            case `level_unavailable`:
                return `That plan isn't available right now.`;
            default:
                return `Upgrade not possible right now. Please try again.`
        }
    };

function O() {
    let { level: e } = g({ from: `/upgrade_/$level` }), t = Number(e), n = v(), [_, O] = (0, T.useState)(!0), [A, j] = (0, T.useState)(null), [M, N] = (0, T.useState)(null), [P, ee] = (0, T.useState)(0), [F, I] = (0, T.useState)(0), [L, R] = (0, T.useState)(null), [z, B] = (0, T.useState)(!1), [V, H] = (0, T.useState)(!1), [U, W] = (0, T.useState)(``), [G, K] = (0, T.useState)(``), [q, J] = (0, T.useState)(``), [Y, X] = (0, T.useState)(!1), [te, Z] = (0, T.useState)(``), [ne, Q] = (0, T.useState)(null);
    (0, T.useEffect)(() => {
        (async () => {
            let { data: e } = await h.auth.getUser();
            if (!e.user) { n({ to: `/login`, replace: !0 }); return }
            let [{ data: r }, { data: i }, { data: a }, { data: o }] = await Promise.all([h.from(`levels`).select(`*`).order(`level`), h.from(`profiles`).select(`level, balance, first_name, other_names`).eq(`id`, e.user.id).maybeSingle(), h.rpc("getPlatformSettings"), h.from(`upgrade_requests`).select(`id, status, admin_note`).eq(`user_id`, e.user.id).order(`created_at`, { ascending: !1 }).limit(1).maybeSingle()]), s = r ?? [], c = i, l = c?.level ?? 0;
            j(s.find(e => e.level === t) ?? null), N(s.find(e => e.level === l) ?? null), ee(l), I(c?.balance ?? 0), W(`${c?.first_name??``} ${c?.other_names??``}`.trim()), R(a ?? null);
            let u = o;
            Z(u?.status ?? ``), Q(u?.admin_note ?? null), X(u?.status === `pending`), O(!1)
        })()
    }, [n, t]);
    let re = async () => {
        if (V) return;
        H(!0);
        let { data: e, error: r } = await h.rpc.bind(h)(`submit_upgrade_request`, { _level: t, _payer_name: U, _reference: G, _proof_url: q }), i = e ?? {};
        if (r) return H(!1), y.error(`Upgrade request failed`, { description: `Please check your connection and try again.` });
        if (!i.ok) return H(!1), i.reason === `pending_exists` && X(!0), y.error(D(i));
        X(!0), y.success(`Upgrade request submitted`, { description: `Your receipt is now under Admin review.` }), n({ to: `/upgrade-processing`, search: { level: String(t) }, replace: !0 })
    };
    if (_) return (0, E.jsx)(b, {});
    if (!A) return (0, E.jsx)(x, { title: `Level Upgrade`, subtitle: `Plan not found`, children: (0, E.jsx)(`p`, { className: `rounded-2xl border border-border bg-card p-6 text-center text-xs text-muted-foreground`, children: `This upgrade level isn't available. Go back and pick another plan.` }) });
    let $ = A.level <= P,
        ie = !$ && A.level !== P + 1;
    return (0, E.jsxs)(x, { title: `${A.name} Upgrade`, subtitle: `Level ${A.level} · Balance ${S(F)}`, children: [(0, E.jsx)(i, {}), (0, E.jsxs)(`section`, { className: `animate-fade-up rounded-2xl border border-gold/40 bg-gradient-to-br from-navy via-card to-navy-deep p-5 text-center shadow-gold-glow`, children: [(0, E.jsx)(`p`, { className: `text-[10px] tracking-[0.25em] text-muted-foreground`, children: `UPGRADE FEE` }), (0, E.jsx)(`p`, { className: `mt-1 font-display text-3xl font-extrabold`, children: A.upgrade_price > 0 ? S(A.upgrade_price) : `Free` }), (0, E.jsxs)(`p`, { className: `mt-2 text-[11px] text-muted-foreground`, children: [`Current: `, M?.name ?? `Level ${P}`, ` → Next: `, A.name] }), (0, E.jsxs)(`div`, { className: `mt-4 grid grid-cols-2 gap-2 text-left`, children: [(0, E.jsxs)(`div`, { className: `rounded-xl border border-gold/20 bg-gold/10 p-2.5`, children: [(0, E.jsx)(`p`, { className: `text-[9px] font-semibold uppercase tracking-wider text-muted-foreground`, children: `Upgrade payment` }), (0, E.jsx)(`p`, { className: `mt-1 text-xs font-bold text-gold`, children: A.upgrade_price > 0 ? S(A.upgrade_price) : `Free` })] }), (0, E.jsxs)(`div`, { className: `rounded-xl border border-royal/30 bg-royal/10 p-2.5`, children: [(0, E.jsx)(`p`, { className: `text-[9px] font-semibold uppercase tracking-wider text-muted-foreground`, children: `Later activation` }), (0, E.jsx)(`p`, { className: `mt-1 text-xs font-bold text-royal`, children: A.activation_fee > 0 ? S(A.activation_fee) : `Not configured` })] })] })] }), (0, E.jsxs)(`section`, { className: `flex items-start gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 p-3 text-[11px] text-destructive`, children: [(0, E.jsx)(r, { className: `mt-0.5 h-4 w-4 shrink-0` }), (0, E.jsxs)(`p`, { children: [(0, E.jsx)(`strong`, { children: `Important:` }), ` approving this upgrade moves you to Level `, A.level, `, but Level `, A.level, ` remains `, (0, E.jsx)(`strong`, { children: `Not Activated` }), ` until you submit a separate activation request and Admin approves it.`] })] }), (0, E.jsxs)(`section`, { className: `grid grid-cols-2 gap-2.5`, children: [(0, E.jsx)(k, { icon: m, label: `Reward per tap`, value: S(A.reward_per_tap) }), (0, E.jsx)(k, { icon: w, label: `Battery capacity`, value: A.unlimited_battery ? `Unlimited` : `${A.battery_capacity} taps` }), (0, E.jsx)(k, { icon: p, label: `Maximum daily taps`, value: A.daily_tap_limit > 0 ? A.daily_tap_limit.toLocaleString(`en-NG`) : `Unlimited` }), (0, E.jsx)(k, { icon: p, label: `Daily earnings limit`, value: A.daily_earnings_limit > 0 ? S(A.daily_earnings_limit) : `Unlimited` })] }), A.benefits?.length > 0 && (0, E.jsxs)(`section`, { className: `animate-fade-up rounded-2xl border border-border bg-card p-4`, children: [(0, E.jsx)(`p`, { className: `text-[10px] font-semibold tracking-[0.2em] text-muted-foreground`, children: `UPGRADE BENEFITS` }), (0, E.jsx)(`ul`, { className: `mt-2.5 space-y-1.5`, children: A.benefits.map(e => (0, E.jsxs)(`li`, { className: `flex items-start gap-1.5 text-[11px] text-muted-foreground`, children: [(0, E.jsx)(u, { className: `mt-0.5 h-3 w-3 shrink-0 text-success` }), ` `, e] }, e)) })] }), $ ? (0, E.jsx)(C, { kind: `upgrade`, status: `approved`, amount: A.upgrade_price, detail: `Congratulations! Your account is now on ${A.name}. The approved level benefits are active.` }) : ie ? (0, E.jsxs)(`div`, { className: `rounded-2xl border border-border bg-secondary/60 p-5 text-center`, children: [(0, E.jsx)(`p`, { className: `text-xs font-bold`, children: `Upgrade locked` }), (0, E.jsxs)(`p`, { className: `mt-1.5 text-[11px] text-foreground/80`, children: [`Upgrades are sequential. Unlock Level `, P + 1, ` first before moving to `, A.name, `.`] })] }) : Y ? (0, E.jsx)(C, { kind: `upgrade`, status: `pending`, amount: A.upgrade_price, detail: `Your Level ${t} bank-transfer upgrade request is under Admin review. No level change occurs until approval.` }) : (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(s, { settings: L }), (0, E.jsx)(o, { text: L?.security_notice }), (0, E.jsxs)(`section`, { className: `animate-fade-up space-y-3 rounded-2xl border border-border bg-card p-4`, children: [(0, E.jsx)(`p`, { className: `text-[10px] font-semibold tracking-[0.2em] text-muted-foreground`, children: `CONFIRM YOUR PAYMENT` }), (0, E.jsxs)(`label`, { className: `block`, children: [(0, E.jsx)(`span`, { className: `text-[11px] font-medium text-muted-foreground`, children: `Name used for payment` }), (0, E.jsx)(`input`, { value: U, onChange: e => W(e.target.value), className: `mt-1 w-full rounded-xl border border-border bg-secondary/50 px-3 py-2.5 text-xs outline-none transition focus:border-gold/60` })] }), (0, E.jsxs)(`label`, { className: `block`, children: [(0, E.jsx)(`span`, { className: `text-[11px] font-medium text-muted-foreground`, children: `Transfer reference / session ID` }), (0, E.jsx)(`input`, { value: G, placeholder: `e.g. 1029384756`, onChange: e => K(e.target.value), className: `mt-1 w-full rounded-xl border border-border bg-secondary/50 px-3 py-2.5 text-xs outline-none transition focus:border-gold/60` })] }), (0, E.jsxs)(`div`, { children: [(0, E.jsx)(`span`, { className: `text-[11px] font-medium text-muted-foreground`, children: `Payment receipt` }), (0, E.jsx)(`div`, { className: `mt-1.5`, children: (0, E.jsx)(d, { value: q, onChange: J, folder: `upgrade-${t}` }) })] }), (0, E.jsx)(c, { checked: z, onChange: B }), (0, E.jsxs)(`button`, { type: `button`, disabled: V || !z || !U.trim() || !q, onClick: re, className: `flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient py-3 text-xs font-bold text-gold-foreground transition active:scale-[0.98] disabled:opacity-60`, children: [V && (0, E.jsx)(f, { className: `h-3.5 w-3.5 animate-spin` }), ` Submit upgrade request`] }), (0, E.jsx)(`p`, { className: `text-center text-[10px] text-muted-foreground`, children: `Your level is upgraded once an admin approves your payment receipt.` })] })] }), (0, E.jsx)(l, { text: L?.anti_scam_reminder }), (0, E.jsx)(a, {})] })
}

function k({ icon: e, label: t, value: n }) { return (0, E.jsxs)(`div`, { className: `rounded-2xl border border-border bg-card p-3`, children: [(0, E.jsxs)(`p`, { className: `flex items-center gap-1 text-[10px] text-muted-foreground`, children: [(0, E.jsx)(e, { className: `h-3 w-3 text-gold` }), ` `, t] }), (0, E.jsx)(`p`, { className: `mt-1 text-xs font-bold`, children: n })] }) }
export { O as component };