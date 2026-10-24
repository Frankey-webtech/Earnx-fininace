import { i as e, o as t, r as n } from "./useRouter-BOAPZDg1.js";
import { r, t as i } from "./utils-BRQOfKs2.js";
import { a } from "./bottom-nav-CLnfULtP.js";
import { t as o } from "./check-BcBWAkuM.js";
import { t as s } from "./clock-DQCeg9jj.js";
import { t as c } from "./target-CSBlZ-8c.js";
import { t as l } from "./trending-up-Xxl_9IZ4.js";
import { t as u } from "./wallet-BEHLfVea.js";
import { t as d } from "./zap-C7gVU_r7.js";
import { c as f, o as p, p as m } from "./index-BYWLTDn2.js";
import { r as h, t as g } from "./app-page-MUDM_FSj.js";
import { r as _ } from "./format-CtfZ39sT.js";
var v = p(`lock`, [
        [`rect`, { width: `18`, height: `11`, x: `3`, y: `11`, rx: `2`, ry: `2`, key: `1w4ew1` }],
        [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4`, key: `fwvmzm` }]
    ]),
    y = t(e()),
    b = n();

function x() {
    let e = m(),
        [t, n] = (0, y.useState)(!0),
        [p, x] = (0, y.useState)([]),
        [C, w] = (0, y.useState)(0),
        [T, E] = (0, y.useState)(0),
        [D, O] = (0, y.useState)(`not_activated`),
        [k, A] = (0, y.useState)(null),
        [j, M] = (0, y.useState)(null),
        N = async () => {
            let { data: t } = await f.auth.getUser();
            if (!t.user) { e({ to: `/login`, replace: !0 }); return }
            let [{ data: r }, { data: i }, { data: a }] = await Promise.all([f.from(`levels`).select(`*`).eq(`active`, !0).order(`level`), f.from(`profiles`).select(`level, balance, activation`).eq(`id`, t.user.id).maybeSingle(), f.from(`upgrade_requests`).select(`to_level, created_at`).eq(`user_id`, t.user.id).eq(`status`, `pending`).order(`created_at`, { ascending: !1 }).limit(1).maybeSingle()]);
            x(r ?? []), w(i?.level ?? 0), E(i?.balance ?? 0), O(i?.activation ?? `not_activated`), A(a ?? null), n(!1)
        };
    if ((0, y.useEffect)(() => { N() }, []), t) return (0, b.jsx)(h, {});
    let P = C + 1;
    return (0, b.jsxs)(g, {
        title: `Upgrade Plan`,
        subtitle: `Balance: ${_(T)}`,
        children: [k && (0, b.jsxs)(`div`, { className: `animate-fade-up rounded-2xl border border-gold/40 bg-gold/10 p-4`, children: [(0, b.jsx)(`p`, { className: `text-xs font-bold text-gold`, children: `Upgrade request pending` }), (0, b.jsxs)(`p`, { className: `mt-1 text-[11px] text-foreground/80`, children: [`Your request to move to Level `, k.to_level, ` is being reviewed. You can't start another upgrade until it's approved or rejected.`] }), (0, b.jsx)(r, { to: `/requests`, className: `mt-2.5 inline-flex rounded-full border border-gold/50 px-3 py-1.5 text-[10px] font-semibold text-gold`, children: `Track this request` })] }), (0, b.jsxs)(`p`, { className: `rounded-xl bg-secondary/60 px-3 py-2 text-[10px] leading-relaxed text-muted-foreground`, children: [`Upgrades are sequential — you can only move up one level at a time, so Level `, P, ` must be unlocked before Level `, P + 1, `.`] }), (0, b.jsx)(`div`, {
            className: `space-y-4`,
            children: p.map(e => {
                let t = e.level === C,
                    n = e.level <= C,
                    f = e.level === P,
                    m = !n && !f,
                    h = !!k && f;
                return (0, b.jsxs)(`article`, { className: i(`animate-fade-up rounded-2xl border p-4 shadow-soft`, t ? `border-gold/60 bg-gold/5 shadow-gold-glow` : f ? `border-royal/50 bg-card` : `border-border bg-card`, m && `opacity-70`), children: [(0, b.jsxs)(`div`, { className: `flex items-start justify-between gap-3`, children: [(0, b.jsxs)(`div`, { className: `min-w-0`, children: [(0, b.jsx)(`p`, { className: `text-sm font-bold`, children: e.name }), (0, b.jsxs)(`p`, { className: `text-[10px] text-muted-foreground`, children: [`Level `, e.level] })] }), (0, b.jsxs)(`div`, { className: `text-right`, children: [(0, b.jsx)(`p`, { className: `font-display text-lg font-extrabold text-gold`, children: Number(e.upgrade_fee ?? e.upgrade_price ?? 0) > 0 ? _(Number(e.upgrade_fee ?? e.upgrade_price)) : `Free` }), (0, b.jsxs)(`p`, { className: `mt-0.5 text-[10px] font-semibold text-royal`, children: [`Activation: `, e.activation_fee > 0 ? _(e.activation_fee) : `Not configured`] }), t && (0, b.jsx)(`p`, { className: `text-[10px] font-semibold text-success`, children: `Current plan` }), f && !k && (0, b.jsx)(`p`, { className: `text-[10px] font-semibold text-royal`, children: `Next step` })] })] }), (0, b.jsx)(`p`, { className: `mt-3 text-[9px] font-semibold tracking-[0.2em] text-muted-foreground`, children: `TAP & EARN BENEFITS` }), (0, b.jsxs)(`div`, { className: `mt-1.5 grid grid-cols-2 gap-2 text-[10px]`, children: [(0, b.jsx)(S, { icon: d, label: `Reward per tap`, value: _(e.reward_per_tap) }), (0, b.jsx)(S, { icon: c, label: `Taps per session`, value: e.unlimited_battery || e.unlimited_taps ? `Unlimited` : Number(e.battery_capacity ?? e.session_max_taps ?? 0).toLocaleString(`en-NG`) }), (0, b.jsx)(S, { icon: l, label: `Daily tap limit`, value: e.daily_tap_limit > 0 ? e.daily_tap_limit.toLocaleString(`en-NG`) : `Unlimited` }), (0, b.jsx)(S, { icon: s, label: `Session cooldown`, value: e.cooldown_minutes > 0 ? `${e.cooldown_minutes} min` : `None` }), (0, b.jsx)(S, { icon: l, label: `Daily earning cap`, value: e.daily_earnings_limit > 0 ? _(e.daily_earnings_limit) : `Unlimited` }), (0, b.jsx)(S, { icon: u, label: `Max withdrawal`, value: e.max_withdrawal > 0 ? _(e.max_withdrawal) : `—` })] }), !n && (0, b.jsxs)(`div`, { className: `mt-3 rounded-xl border border-border bg-secondary/40 p-2.5`, children: [(0, b.jsx)(`p`, { className: `text-[9px] font-semibold tracking-[0.2em] text-muted-foreground`, children: `REQUIREMENTS` }), (0, b.jsx)(`ul`, { className: `mt-1.5 space-y-1 text-[10px] text-foreground/80`, children: [{ ok: e.level - 1 <= C, text: `Complete Level ${e.level-1} first` }, { ok: !1, text: `Pay upgrade fee: ${Number(e.upgrade_fee ?? e.upgrade_price ?? 0)>0?_(Number(e.upgrade_fee ?? e.upgrade_price)): `Free`}` }, { ok: !1, text: `Activate after upgrade: ${e.activation_fee>0?_(e.activation_fee):`Not configured`}` }].map(e => (0, b.jsxs)(`li`, { className: `flex items-start gap-1.5`, children: [(0, b.jsx)(o, { className: i(`mt-0.5 h-3 w-3 shrink-0`, e.ok ? `text-success` : `text-muted-foreground/50`) }), e.text] }, e.text)) })] }), (0, b.jsxs)(`div`, { className: i(`mt-3 flex items-start gap-2 rounded-xl border p-2.5 text-[10px]`, t && D === `activated` ? `border-success/30 bg-success/10 text-success` : t ? `border-destructive/30 bg-destructive/10 text-destructive` : `border-border bg-secondary/50 text-muted-foreground`), children: [(0, b.jsx)(a, { className: `mt-0.5 h-3.5 w-3.5 shrink-0` }), (0, b.jsxs)(`span`, { children: [(0, b.jsx)(`strong`, { children: t && D === `activated` ? `Current level activated` : `Activation required separately` }), (0, b.jsx)(`br`, {}), t && D === `activated` ? `Withdrawal eligibility can now be checked against the remaining limits.` : `Admin approval of an upgrade never activates the new level automatically.`] })] }), e.benefits?.length > 0 && (0, b.jsx)(`ul`, { className: `mt-3 space-y-1`, children: e.benefits.map(e => (0, b.jsxs)(`li`, { className: `flex items-start gap-1.5 text-[11px] text-muted-foreground`, children: [(0, b.jsx)(o, { className: `mt-0.5 h-3 w-3 shrink-0 text-success` }), ` `, e] }, e)) }), n ? (0, b.jsx)(`span`, { className: `mt-3 flex w-full items-center justify-center rounded-xl border border-border bg-secondary py-2.5 text-xs font-bold text-muted-foreground`, children: t ? `Your current plan` : `Unlocked` }) : m || h ? (0, b.jsxs)(`button`, { type: `button`, onClick: () => M(h ? `You already have an upgrade request to Level ${k?.to_level} awaiting review. Wait for it to be approved or rejected before starting another upgrade.` : `Upgrades follow the order Level 1 → 2 → 3. Unlock ${p.find(e=>e.level===P)?.name??`Level ${P}`} first before you can move to ${e.name}.`), className: `mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary py-2.5 text-xs font-bold text-muted-foreground transition active:scale-[0.98]`, children: [(0, b.jsx)(v, { className: `h-3.5 w-3.5` }), ` `, h ? `Request pending` : `Locked`] }) : (0, b.jsxs)(r, { to: `/upgrade/$level`, params: { level: String(e.level) }, className: `mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient py-2.5 text-xs font-bold text-gold-foreground transition active:scale-[0.98]`, children: [`Upgrade to `, e.name] })] }, e.level)
            })
        }), j && (0, b.jsx)(`div`, { className: `fixed inset-0 z-[70] grid place-items-center bg-background/85 p-4 backdrop-blur`, children: (0, b.jsxs)(`div`, { className: `w-full max-w-sm rounded-2xl border border-gold/40 bg-card p-5 text-center shadow-gold-glow`, children: [(0, b.jsx)(`span`, { className: `mx-auto grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold`, children: (0, b.jsx)(v, { className: `h-5 w-5` }) }), (0, b.jsx)(`p`, { className: `mt-3 text-sm font-bold`, children: `Upgrade locked` }), (0, b.jsx)(`p`, { className: `mt-1.5 text-[11px] leading-relaxed text-foreground/80`, children: j }), (0, b.jsx)(`button`, { type: `button`, onClick: () => M(null), className: `mt-4 w-full rounded-xl bg-gold-gradient py-2.5 text-xs font-bold text-gold-foreground transition active:scale-[0.98]`, children: `Got it` })] }) })]
    })
}

function S({ icon: e, label: t, value: n }) { return (0, b.jsxs)(`div`, { className: `rounded-xl bg-secondary/60 p-2.5`, children: [(0, b.jsxs)(`p`, { className: `flex items-center gap-1 text-muted-foreground`, children: [(0, b.jsx)(e, { className: `h-3 w-3 text-gold` }), ` `, t] }), (0, b.jsx)(`p`, { className: `mt-0.5 text-[11px] font-semibold`, children: n })] }) }
export { x as component };