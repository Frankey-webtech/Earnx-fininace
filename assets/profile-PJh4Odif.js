import { i as e, o as t, r as n } from "./useRouter-BOAPZDg1.js";
import { a as r, d as i, r as a } from "./bottom-nav-CLnfULtP.js";
import { t as o } from "./bell-Cf6T3yOj.js";
import { i as s } from "./payment-security-CoabBk_k.js";
import { t as c } from "./copy-FEYI7obA.js";
import { t as l } from "./landmark-B9xFa1A-.js";
import { t as u } from "./life-buoy-BmXfHFJF.js";
import { t as d } from "./log-out-Ct2AtKll.js";
import { t as f } from "./receipt-DWy_urwu.js";
import { t as p } from "./trending-up-Xxl_9IZ4.js";
import { t as m } from "./users-CGkU7euU.js";
import { c as h, p as g, s as _ } from "./index-BYWLTDn2.js";
import { r as v, t as y } from "./app-page-MUDM_FSj.js";
import { r as b } from "./format-CtfZ39sT.js";

const ADMIN_EMAILS = [
    "akachukwu2027@gmail.com",
    "frankey2027@gmail.com",
    "chioma2027@gmail.com"
];

function hasAdminEmail(user) {
    return !!user && ADMIN_EMAILS.includes(String(user.email ?? "").trim().toLowerCase());
}

var x = t(e()),
    S = n(),
    C = [
        { to: `/activate`, icon: r, label: `Account Activation`, hint: `Unlock earning` },
        { to: `/upgrade`, icon: p, label: `Upgrade Plan`, hint: `Earn more per tap` },
        { to: `/withdraw`, icon: l, label: `Withdraw Funds`, hint: `Cash out to your bank` },
        { to: `/referrals`, icon: m, label: `Referral & Earn`, hint: `Invite friends` },
        { to: `/transactions`, icon: f, label: `Transaction History`, hint: `All activity` },
        { to: `/notifications`, icon: o, label: `Notifications`, hint: `Updates & alerts` },
        { to: `/support`, icon: u, label: `Help & Support`, hint: `We're here to help` }
    ];

function w() {
    let e = g(),
        [t, n] = (0, x.useState)(!0),
        [o, l] = (0, x.useState)(null),
        [u, f] = (0, x.useState)(!1);

    (0, x.useEffect)(() => {
        let active = true;
        (async () => {
            let { data: t, error: authError } = await h.auth.getUser();
            if (authError || !t.user) {
                e({ to: `/login`, replace: !0 });
                return;
            }

            let user = t.user;
            let { data: profile, error: profileError } = await h.from(`profiles`).select(`*`).eq(`id`, user.id).maybeSingle();

            if (!active) return;

            if (profileError) {
                console.error(`[Profile] Profile query failed:`, profileError);
                _.error(`We couldn't load your profile. Please refresh and try again.`);
            }

            l(profile ?? null);
            f(hasAdminEmail(user));
            n(!1);
        })();

        return () => {
            active = false;
        };
    }, [e]);

    let p = async () => {
        await h.auth.signOut();
        e({ to: `/login`, replace: !0 });
    };

    if (t) return (0, S.jsx)(v, {});

    let m = `${o?.first_name ?? ``} ${o?.other_names ?? ``}`.trim() || `Your account`;

    return (0, S.jsx)(S.Fragment, {
        children: (0, S.jsxs)(y, {
            nav: `profile`,
            title: `My Profile`,
            subtitle: `Account, bank details and settings`,
            children: [
                (0, S.jsxs)(`section`, {
                    className: `animate-fade-up rounded-2xl border border-gold/30 bg-gradient-to-br from-navy via-card to-navy-deep p-4 shadow-soft`,
                    children: [
                        (0, S.jsxs)(`div`, {
                            className: `flex items-center gap-3`,
                            children: [
                                o?.avatar_url
                                    ? (0, S.jsx)(`img`, { src: o.avatar_url, alt: m, className: `h-14 w-14 rounded-full border border-gold/60 object-cover` })
                                    : (0, S.jsx)(`span`, {
                                        className: `grid h-14 w-14 place-items-center rounded-full border border-gold/60 bg-card`,
                                        children: (0, S.jsx)(a, { className: `h-6 w-6 text-gold` })
                                    }),
                                (0, S.jsxs)(`div`, {
                                    className: `min-w-0`,
                                    children: [
                                        (0, S.jsx)(`p`, { className: `truncate text-sm font-bold`, children: m }),
                                        (0, S.jsxs)(`p`, { className: `truncate text-[11px] text-muted-foreground`, children: [`@`, o?.username] }),
                                        (0, S.jsx)(`p`, { className: `truncate text-[11px] text-muted-foreground`, children: o?.email })
                                    ]
                                })
                            ]
                        }),
                        (0, S.jsx)(`div`, {
                            className: `mt-4 grid grid-cols-3 gap-2 text-center`,
                            children: [
                                { label: `Balance`, value: b(o?.balance ?? 0) },
                                { label: `Level`, value: `L${o?.level ?? 1}` },
                                { label: `Status`, value: o?.activation === `activated` ? `Active` : `Inactive` }
                            ].map(e => (0, S.jsxs)(`div`, {
                                className: `rounded-xl bg-secondary/60 py-2`,
                                children: [
                                    (0, S.jsx)(`p`, { className: `text-[10px] text-muted-foreground`, children: e.label }),
                                    (0, S.jsx)(`p`, { className: `text-xs font-bold`, children: e.value })
                                ]
                            }, e.label))
                        })
                    ]
                }),
                (0, S.jsxs)(`section`, {
                    className: `animate-fade-up rounded-2xl border border-border bg-card p-4`,
                    children: [
                        (0, S.jsx)(`p`, { className: `text-[10px] font-semibold tracking-[0.2em] text-muted-foreground`, children: `REFERRAL CODE` }),
                        (0, S.jsxs)(`div`, {
                            className: `mt-2 flex items-center justify-between gap-3`,
                            children: [
                                (0, S.jsx)(`p`, { className: `font-display text-lg font-extrabold tracking-widest text-gold`, children: o?.referral_code }),
                                (0, S.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => {
                                        navigator.clipboard.writeText(o?.referral_code ?? ``);
                                        _.success(`Referral code copied`);
                                    },
                                    className: `flex items-center gap-1.5 rounded-full border border-gold/40 px-3 py-1.5 text-[11px] font-semibold text-gold transition active:scale-95`,
                                    children: [(0, S.jsx)(c, { className: `h-3 w-3` }), ` Copy`]
                                })
                            ]
                        })
                    ]
                }),
                (0, S.jsxs)(`section`, {
                    className: `animate-fade-up rounded-2xl border border-border bg-card p-4`,
                    children: [
                        (0, S.jsx)(`p`, { className: `text-[10px] font-semibold tracking-[0.2em] text-muted-foreground`, children: `BANK DETAILS` }),
                        o?.bank_account_number
                            ? (0, S.jsxs)(`div`, {
                                className: `mt-2 space-y-0.5 text-xs`,
                                children: [
                                    (0, S.jsx)(`p`, { className: `font-semibold`, children: o.bank_account_name }),
                                    (0, S.jsxs)(`p`, { className: `text-muted-foreground`, children: [o.bank_name, ` · `, o.bank_account_number] })
                                ]
                            })
                            : (0, S.jsx)(`p`, {
                                className: `mt-2 text-[11px] text-muted-foreground`,
                                children: `No bank account saved yet — add one when you withdraw.`
                            })
                    ]
                }),
                (0, S.jsxs)(`nav`, {
                    className: `animate-fade-up overflow-hidden rounded-2xl border border-border bg-card`,
                    children: [
                        C.map(({ to: t, icon: n, label: r, hint: a }, o) => (0, S.jsxs)(`button`, {
                            type: `button`,
                            onClick: () => e({ to: t }),
                            className: `flex w-full items-center gap-3 p-3.5 text-left transition active:scale-[0.99] ${o > 0 ? `border-t border-border` : ``}`,
                            children: [
                                (0, S.jsx)(`span`, {
                                    className: `grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-gold`,
                                    children: (0, S.jsx)(n, { className: `h-4 w-4` })
                                }),
                                (0, S.jsxs)(`span`, {
                                    className: `min-w-0 flex-1`,
                                    children: [
                                        (0, S.jsx)(`span`, { className: `block truncate text-xs font-semibold`, children: r }),
                                        (0, S.jsx)(`span`, { className: `block truncate text-[10px] text-muted-foreground`, children: a })
                                    ]
                                }),
                                (0, S.jsx)(i, { className: `h-4 w-4 shrink-0 text-muted-foreground` })
                            ]
                        }, t)),
                        u && (0, S.jsxs)(`button`, {
                            type: `button`,
                            onClick: () => e({ to: `/admin` }),
                            className: `flex w-full items-center gap-3 border-t border-border p-3.5 text-left transition active:scale-[0.99]`,
                            children: [
                                (0, S.jsx)(`span`, {
                                    className: `grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-royal/20 text-royal`,
                                    children: (0, S.jsx)(r, { className: `h-4 w-4` })
                                }),
                                (0, S.jsxs)(`span`, {
                                    className: `min-w-0 flex-1`,
                                    children: [
                                        (0, S.jsx)(`span`, { className: `block text-xs font-semibold`, children: `Admin Panel` }),
                                        (0, S.jsx)(`span`, { className: `block text-[10px] text-muted-foreground`, children: `Manage the platform` })
                                    ]
                                }),
                                (0, S.jsx)(i, { className: `h-4 w-4 shrink-0 text-muted-foreground` })
                            ]
                        })
                    ]
                }),
                (0, S.jsxs)(`button`, {
                    type: `button`,
                    onClick: p,
                    className: `flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/40 bg-destructive/10 py-3 text-xs font-bold text-destructive transition active:scale-[0.98]`,
                    children: [(0, S.jsx)(d, { className: `h-4 w-4` }), ` Sign out`]
                }),
                (0, S.jsx)(s, {})
            ]
        })
    });
}

export { w as component };
