import { i as e, o as t, r as n } from "./useRouter-BOAPZDg1.js";
import { r, t as i } from "./utils-BRQOfKs2.js";
import { n as a } from "./bottom-nav-CLnfULtP.js";
import { t as o } from "./check-BcBWAkuM.js";
import { n as s, t as c } from "./search-Chz-Itbg.js";
import { t as l } from "./circle-alert-Dh70wjVo.js";
import { t as u } from "./landmark-B9xFa1A-.js";
import { a as d, i as f, o as p, r as m } from "./dist-BrOQi9H-.js";
import { c as h, d as g, l as _, p as v, s as y, u as b, x } from "./index-BYWLTDn2.js";
import { r as S, t as C } from "./app-page-MUDM_FSj.js";
import { n as w, r as T } from "./format-CtfZ39sT.js";
import { t as E } from "./request-processing-CNJfMb9w.js";
import { n as D, t as O } from "./dist-BiSzFNY_.js";
import { a as k, i as A, n as j, o as M, r as N, t as P } from "./dist-siKjq6-N.js";
var F = t(e(), 1),
  ee = 1,
  I = .9,
  te = .8,
  L = .17,
  ne = .1,
  R = .999,
  re = .9999,
  ie = .99,
  ae = /[\\\/_+.#"@\[\(\{&]/,
  oe = /[\\\/_+.#"@\[\(\{&]/g,
  se = /[\s-]/,
  ce = /[\s-]/g;

function le(e, t, n, r, i, a, o) { if (a === t.length) return i === e.length ? ee : ie; var s = `${i},${a}`; if (o[s] !== void 0) return o[s]; for (var c = r.charAt(a), l = n.indexOf(c, i), u = 0, d, f, p, m; l >= 0;) d = le(e, t, n, r, l + 1, a + 1, o), d > u && (l === i ? d *= ee : ae.test(e.charAt(l - 1)) ? (d *= te, p = e.slice(i, l - 1).match(oe), p && i > 0 && (d *= R ** +p.length)) : se.test(e.charAt(l - 1)) ? (d *= I, m = e.slice(i, l - 1).match(ce), m && i > 0 && (d *= R ** +m.length)) : (d *= L, i > 0 && (d *= R ** +(l - i))), e.charAt(l) !== t.charAt(a) && (d *= re)), (d < ne && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (f = le(e, t, n, r, l + 1, a + 2, o), f * ne > d && (d = f * ne)), d > u && (u = d), l = n.indexOf(c, l + 1); return o[s] = u, u }

function ue(e) { return e.toLowerCase().replace(ce, ` `) }

function de(e, t, n) { return e = n && n.length > 0 ? `${e+` `+n.join(` `)}` : e, le(e, t, ue(e), ue(t), 0, 0, {}) }
var fe = Object.defineProperty,
  pe = (e, t) => fe(e, `name`, { value: t, configurable: !0 }),
  me = F.useId || (() => void 0),
  he = 0;

function z(e) { let [t, n] = F.useState(me()); return A(() => { e || n(e => e ?? String(he++)) }, [e]), e || (t ? `radix-${t}` : ``) } pe(z, `useId`);
var ge = Object.defineProperty,
  _e = (e, t) => ge(e, `name`, { value: t, configurable: !0 });

function ve(e) { let t = F.useRef(e); return F.useEffect(() => { t.current = e }), F.useMemo(() => ((...e) => t.current?.(...e)), []) } _e(ve, `useCallbackRef`);
var B = n(),
  ye = Object.defineProperty,
  V = (e, t) => ye(e, `name`, { value: t, configurable: !0 }),
  be = `dismissableLayer.update`,
  xe = `dismissableLayer.pointerDownOutside`,
  Se = `dismissableLayer.focusOutside`,
  Ce, we = F.createContext({ layers: new Set, layersWithOutsidePointerEventsDisabled: new Set, branches: new Set, dismissableSurfaces: new Set }),
  Te = F.forwardRef(V(function(e, t) {
    let { disableOutsidePointerEvents: n = !1, deferPointerDownOutside: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = e, u = F.useContext(we), [f, p] = F.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = F.useState({}), g = d(t, p), _ = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v ? _.indexOf(v) : -1, b = f ? _.indexOf(f) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= y, C = F.useRef(!1), w = Oe(e => { a?.(e), s?.(e), e.defaultPrevented || c?.() }, { ownerDocument: m, deferPointerDownOutside: r, isDeferredPointerDownOutsideRef: C, dismissableSurfaces: u.dismissableSurfaces, shouldHandlePointerDownOutside: F.useCallback(e => { if (!(e instanceof Node)) return !1; let t = [...u.branches].some(t => t.contains(e)); return S && !t }, [u.branches, S]) }), T = ke(e => {
      if (r && C.current) return;
      let t = e.target;
      [...u.branches].some(e => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.())
    }, m), E = f ? b === _.length - 1 : !1, D = ve(e => { e.key === `Escape` && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c())) });
    return F.useEffect(() => { if (E) return m.addEventListener(`keydown`, D, { capture: !0 }), () => m.removeEventListener(`keydown`, D, { capture: !0 }) }, [m, E, D]), F.useEffect(() => { if (f) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ce = m.body.style.pointerEvents, m.body.style.pointerEvents = `none`), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Ae(), () => { n && (u.layersWithOutsidePointerEventsDisabled.delete(f), u.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = Ce)) } }, [f, m, n, u]), F.useEffect(() => () => { f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Ae()) }, [f, u]), F.useEffect(() => { let e = V(() => h({}), `handleUpdate`); return document.addEventListener(be, e), () => document.removeEventListener(be, e) }, []), (0, B.jsx)(O.div, { ...l, ref: g, style: { pointerEvents: x ? S ? `auto` : `none` : void 0, ...e.style }, onFocusCapture: k(e.onFocusCapture, T.onFocusCapture), onBlurCapture: k(e.onBlurCapture, T.onBlurCapture), onPointerDownCapture: k(e.onPointerDownCapture, w.onPointerDownCapture) })
  }, `DismissableLayer`));

function Ee() {
  let e = F.useContext(we),
    [t, n] = F.useState(null);
  return F.useEffect(() => { if (t) return e.dismissableSurfaces.add(t), () => { e.dismissableSurfaces.delete(t) } }, [t, e.dismissableSurfaces]), n
}
V(Ee, `useDismissableLayerSurface`);
var De = V(() => !0, `IS_TRUE`);

function Oe(e, t) {
  let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: o = De } = t, s = ve(e), c = F.useRef(!1), l = F.useRef(!1), u = F.useRef(new Map), d = F.useRef(() => {});
  return F.useEffect(() => {
    function e() { l.current = !1, i.current = !1, u.current.clear() } V(e, `resetOutsideInteraction`);
    
    function t() { return Array.from(u.current.values()).some(Boolean) } V(t, `isOutsideInteractionIntercepted`);
    
    function f(e) {
      if (!l.current) return;
      let t = e.target;
      t instanceof Node && [...a].some(e => e.contains(t)) || u.current.set(e.type, !0), e.type === `click` && window.setTimeout(() => { l.current && d.current() }, 0)
    }
    V(f, `handleInteractionCapture`);
    
    function p(e) { l.current && u.current.set(e.type, !1) } V(p, `handleInteractionBubble`);
    let m = V(a => {
        if (a.target && !c.current) {
          let f = function() {
            n.removeEventListener(`click`, d.current);
            let r = t();
            e(), r || je(xe, s, p, { discrete: !0 })
          };
          if (V(f, `handleAndDispatchPointerDownOutsideEvent`), !o(a.target)) { n.removeEventListener(`click`, d.current), e(), c.current = !1; return }
          let p = { originalEvent: a };
          l.current = !0, i.current = r && a.button === 0, u.current.clear(), !r || a.button !== 0 ? f() : (n.removeEventListener(`click`, d.current), d.current = f, n.addEventListener(`click`, d.current, { once: !0 }))
        } else n.removeEventListener(`click`, d.current), e();
        c.current = !1
      }, `handlePointerDown`),
      h = [`pointerup`, `mousedown`, `mouseup`, `touchstart`, `touchend`, `click`];
    for (let e of h) n.addEventListener(e, f, !0), n.addEventListener(e, p);
    let g = window.setTimeout(() => { n.addEventListener(`pointerdown`, m) }, 0);
    return () => { window.clearTimeout(g), n.removeEventListener(`pointerdown`, m), n.removeEventListener(`click`, d.current); for (let e of h) n.removeEventListener(e, f, !0), n.removeEventListener(e, p) }
  }, [n, s, r, i, a, o]), { onPointerDownCapture: V(() => c.current = !0, `onPointerDownCapture`) }
}
V(Oe, `usePointerDownOutside`);

function ke(e, t = globalThis?.document) {
  let n = ve(e),
    r = F.useRef(!1);
  return F.useEffect(() => { let e = V(e => { e.target && !r.current && je(Se, n, { originalEvent: e }, { discrete: !1 }) }, `handleFocus`); return t.addEventListener(`focusin`, e), () => t.removeEventListener(`focusin`, e) }, [t, n]), { onFocusCapture: V(() => r.current = !0, `onFocusCapture`), onBlurCapture: V(() => r.current = !1, `onBlurCapture`) }
}
V(ke, `useFocusOutside`);

function Ae() {
  let e = new CustomEvent(be);
  document.dispatchEvent(e)
}
V(Ae, `dispatchUpdate`);

function je(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), r ? D(i, a) : i.dispatchEvent(a)
}
V(je, `handleAndDispatchCustomEvent`);
var Me = Object.defineProperty,
  H = (e, t) => Me(e, `name`, { value: t, configurable: !0 }),
  Ne = `focusScope.autoFocusOnMount`,
  Pe = `focusScope.autoFocusOnUnmount`,
  Fe = { bubbles: !1, cancelable: !0 },
  Ie = F.forwardRef(H(function(e, t) {
    let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = F.useState(null), l = ve(i), u = ve(a), f = F.useRef(null), p = d(t, c), m = F.useRef({ paused: !1, pause() { this.paused = !0 }, resume() { this.paused = !1 } }).current;
    F.useEffect(() => {
      if (r) {
        let e = function(e) {
            if (m.paused || !s) return;
            let t = e.target;
            s.contains(t) ? f.current = t : U(f.current, { select: !0 })
          },
          t = function(e) {
            if (m.paused || !s) return;
            let t = e.relatedTarget;
            t !== null && (s.contains(t) || U(f.current, { select: !0 }))
          },
          n = function(e) {
            if (document.activeElement === document.body)
              for (let t of e) t.removedNodes.length > 0 && U(s)
          };
        H(e, `handleFocusIn`), H(t, `handleFocusOut`), H(n, `handleMutations`), document.addEventListener(`focusin`, e), document.addEventListener(`focusout`, t);
        let r = new MutationObserver(n);
        return s && r.observe(s, { childList: !0, subtree: !0 }), () => { document.removeEventListener(`focusin`, e), document.removeEventListener(`focusout`, t), r.disconnect() }
      }
    }, [r, s, m.paused]), F.useEffect(() => {
      if (s) {
        Ue.add(m);
        let e = document.activeElement;
        if (!s.contains(e)) {
          let t = new CustomEvent(Ne, Fe);
          s.addEventListener(Ne, l), s.dispatchEvent(t), t.defaultPrevented || (Le(Ke(ze(s)), { select: !0 }), document.activeElement === e && U(s))
        }
        return () => {
          s.removeEventListener(Ne, l), setTimeout(() => {
            let t = new CustomEvent(Pe, Fe);
            s.addEventListener(Pe, u), s.dispatchEvent(t), t.defaultPrevented || U(e ?? document.body, { select: !0 }), s.removeEventListener(Pe, u), Ue.remove(m)
          }, 0)
        }
      }
    }, [s, l, u, m]);
    let h = F.useCallback(e => {
      if (!n && !r || m.paused) return;
      let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
        i = document.activeElement;
      if (t && i) {
        let t = e.currentTarget,
          [r, a] = Re(t);
        r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && U(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && U(a, { select: !0 })) : i === t && e.preventDefault()
      }
    }, [n, r, m.paused]);
    return (0, B.jsx)(O.div, { tabIndex: -1, ...o, ref: p, onKeyDown: h })
  }, `FocusScope`));

function Le(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e)
    if (U(r, { select: t }), document.activeElement !== n) return
}
H(Le, `focusFirst`);

function Re(e) { let t = ze(e); return [Be(t, e), Be(t.reverse(), e)] } H(Re, `getTabbableEdges`);

function ze(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: H(e => { let t = e.tagName === `INPUT` && e.type === `hidden`; return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP }, `acceptNode`) });
  for (; n.nextNode();) t.push(n.currentNode);
  return t
}
H(ze, `getTabbableCandidates`);

function Be(e, t) {
  let n = typeof t.checkVisibility == `function` && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (let r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Ve(r, { upTo: t }))) return r
}
H(Be, `findVisible`);

function Ve(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement
  }
  return !1
}
H(Ve, `isHidden`);

function He(e) { return e instanceof HTMLInputElement && `select` in e } H(He, `isSelectableInput`);

function U(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && He(e) && t && e.select()
  }
}
H(U, `focus`);
var Ue = We();

function We() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      t !== n && n?.pause(), e = Ge(e, t), e.unshift(t)
    },
    remove(t) { e = Ge(e, t), e[0]?.resume() }
  }
}
H(We, `createFocusScopesStack`);

function Ge(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n
}
H(Ge, `arrayRemove`);

function Ke(e) { return e.filter(e => e.tagName !== `A`) } H(Ke, `removeLinks`);
var qe = t(x(), 1),
  Je = Object.defineProperty,
  Ye = F.forwardRef(((e, t) => Je(e, `name`, { value: t, configurable: !0 }))(function(e, t) {
    let { container: n, ...r } = e, [i, a] = F.useState(!1);
    A(() => a(!0), []);
    let o = n || i && globalThis?.document?.body;
    return o ? qe.createPortal((0, B.jsx)(O.div, { ...r, ref: t }), o) : null
  }, `Portal`)),
  Xe = Object.defineProperty,
  Ze = (e, t) => Xe(e, `name`, { value: t, configurable: !0 }),
  Qe = 0,
  $e = null;

function et(e) { return tt(), e.children } Ze(et, `FocusGuards`);

function tt() { F.useEffect(() => { $e ||= { start: nt(), end: nt() }; let { start: e, end: t } = $e; return document.body.firstElementChild !== e && document.body.insertAdjacentElement(`afterbegin`, e), document.body.lastElementChild !== t && document.body.insertAdjacentElement(`beforeend`, t), Qe++, () => { Qe === 1 && ($e?.start.remove(), $e?.end.remove(), $e = null), Qe = Math.max(0, Qe - 1) } }, []) } Ze(tt, `useFocusGuards`);

function nt() { let e = document.createElement(`span`); return e.setAttribute(`data-radix-focus-guard`, ``), e.tabIndex = 0, e.style.outline = `none`, e.style.opacity = `0`, e.style.position = `fixed`, e.style.pointerEvents = `none`, e } Ze(nt, `createFocusGuard`);
var rt = `right-scroll-bar-position`,
  it = `width-before-scroll-bar`,
  at = `with-scroll-bars-hidden`,
  ot = `--removed-body-scroll-bar-size`;

function st(e, t) { return typeof e == `function` ? e(t) : e && (e.current = t), e }

function ct(e, t) {
  var n = (0, F.useState)(function() {
    return {
      value: e,
      callback: t,
      facade: {
        get current() { return n.value },
        set current(e) {
          var t = n.value;
          t !== e && (n.value = e, n.callback(e, t))
        }
      }
    }
  })[0];
  return n.callback = t, n.facade
}
var lt = typeof window < `u` ? F.useLayoutEffect : F.useEffect,
  ut = new WeakMap;

function dt(e, t) {
  var n = ct(t || null, function(t) { return e.forEach(function(e) { return st(e, t) }) });
  return lt(function() {
    var t = ut.get(n);
    if (t) {
      var r = new Set(t),
        i = new Set(e),
        a = n.current;
      r.forEach(function(e) { i.has(e) || st(e, null) }), i.forEach(function(e) { r.has(e) || st(e, a) })
    }
    ut.set(n, e)
  }, [e]), n
}

function ft(e) { return e }

function pt(e, t) {
  t === void 0 && (t = ft);
  var n = [],
    r = !1;
  return {
    read: function() { if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."); return n.length ? n[n.length - 1] : e },
    useMedium: function(e) {
      var i = t(e, r);
      return n.push(i),
        function() { n = n.filter(function(e) { return e !== i }) }
    },
    assignSyncMedium: function(e) {
      for (r = !0; n.length;) {
        var t = n;
        n = [], t.forEach(e)
      }
      n = { push: function(t) { return e(t) }, filter: function() { return n } }
    },
    assignMedium: function(e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(e), t = n
      }
      var a = function() {
          var n = t;
          t = [], n.forEach(e)
        },
        o = function() { return Promise.resolve().then(a) };
      o(), n = { push: function(e) { t.push(e), o() }, filter: function(e) { return t = t.filter(e), n } }
    }
  }
}

function mt(e) { e === void 0 && (e = {}); var t = pt(null); return t.options = _({ async: !0, ssr: !1 }, e), t }
var ht = function(e) {
  var t = e.sideCar,
    n = b(e, [`sideCar`]);
  if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw Error(`Sidecar medium not found`);
  return F.createElement(r, _({}, n))
};
ht.isSideCarExport = !0;

function gt(e, t) { return e.useMedium(t), ht }
var _t = mt(),
  vt = function() {},
  yt = F.forwardRef(function(e, t) {
    var n = F.useRef(null),
      r = F.useState({ onScrollCapture: vt, onWheelCapture: vt, onTouchMoveCapture: vt }),
      i = r[0],
      a = r[1],
      o = e.forwardProps,
      s = e.children,
      c = e.className,
      l = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      p = e.noRelative,
      m = e.noIsolation,
      h = e.inert,
      g = e.allowPinchZoom,
      v = e.as,
      y = v === void 0 ? `div` : v,
      x = e.gapMode,
      S = b(e, [`forwardProps`, `children`, `className`, `removeScrollBar`, `enabled`, `shards`, `sideCar`, `noRelative`, `noIsolation`, `inert`, `allowPinchZoom`, `as`, `gapMode`]),
      C = f,
      w = dt([n, t]),
      T = _(_({}, S), i);
    return F.createElement(F.Fragment, null, u && F.createElement(C, { sideCar: _t, removeScrollBar: l, shards: d, noRelative: p, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: x }), o ? F.cloneElement(F.Children.only(s), _(_({}, T), { ref: w })) : F.createElement(y, _({}, T, { className: c, ref: w }), s))
  });
yt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }, yt.classNames = { fullWidth: it, zeroRight: rt };
var bt = function() { if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__ };

function xt() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = bt();
  return t && e.setAttribute(`nonce`, t), e
}

function St(e, t) { e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)) }

function Ct(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e)
}
var wt = function() {
    var e = 0,
      t = null;
    return { add: function(n) { e == 0 && (t = xt()) && (St(t, n), Ct(t)), e++ }, remove: function() { e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null) } }
  },
  Tt = function() {
    var e = wt();
    return function(t, n) {
      F.useEffect(function() {
        return e.add(t),
          function() { e.remove() }
      }, [t && n])
    }
  },
  Et = function() {
    var e = Tt();
    return function(t) {
      var n = t.styles,
        r = t.dynamic;
      return e(n, r), null
    }
  },
  Dt = { left: 0, top: 0, right: 0, gap: 0 },
  Ot = function(e) { return parseInt(e || ``, 10) || 0 },
  kt = function(e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [Ot(n), Ot(r), Ot(i)]
  },
  At = function(e) {
    if (e === void 0 && (e = `margin`), typeof window > `u`) return Dt;
    var t = kt(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) }
  },
  jt = Et(),
  Mt = `data-scroll-locked`,
  Nt = function(e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return n === void 0 && (n = `margin`), `
  .${at} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Mt}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[t&&`position: relative ${r};`,n===`margin`&&`
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,n===`padding`&&`padding-right: ${s}px ${r};`].filter(Boolean).join(``)}
  }
  
  .${rt} {
    right: ${s}px ${r};
  }
  
  .${it} {
    margin-right: ${s}px ${r};
  }
  
  .${rt} .${rt} {
    right: 0 ${r};
  }
  
  .${it} .${it} {
    margin-right: 0 ${r};
  }
  
  body[${Mt}] {
    ${ot}: ${s}px;
  }
`
  },
  Pt = function() { var e = parseInt(document.body.getAttribute(`data-scroll-locked`) || `0`, 10); return isFinite(e) ? e : 0 },
  Ft = function() {
    F.useEffect(function() {
      return document.body.setAttribute(Mt, (Pt() + 1).toString()),
        function() {
          var e = Pt() - 1;
          e <= 0 ? document.body.removeAttribute(Mt) : document.body.setAttribute(Mt, e.toString())
        }
    }, [])
  },
  It = function(e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r;
    Ft();
    var a = F.useMemo(function() { return At(i) }, [i]);
    return F.createElement(jt, { styles: Nt(a, !t, i, n ? `` : `!important`) })
  },
  Lt = !1;
if (typeof window < `u`) try {
  var Rt = Object.defineProperty({}, "passive", { get: function() { return Lt = !0, !0 } });
  window.addEventListener(`test`, Rt, Rt), window.removeEventListener(`test`, Rt, Rt)
} catch { Lt = !1 }
var zt = Lt ? { passive: !1 } : !1,
  Bt = function(e) { return e.tagName === `TEXTAREA` },
  Vt = function(e, t) { if (!(e instanceof Element)) return !1; var n = window.getComputedStyle(e); return n[t] !== `hidden` && !(n.overflowY === n.overflowX && !Bt(e) && n[t] === `visible`) },
  Ht = function(e) { return Vt(e, `overflowY`) },
  Ut = function(e) { return Vt(e, `overflowX`) },
  Wt = function(e, t) {
    var n = t.ownerDocument,
      r = t;
    do { if (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host), qt(e, r)) { var i = Jt(e, r); if (i[1] > i[2]) return !0 } r = r.parentNode } while (r && r !== n.body);
    return !1
  },
  Gt = function(e) { return [e.scrollTop, e.scrollHeight, e.clientHeight] },
  Kt = function(e) { return [e.scrollLeft, e.scrollWidth, e.clientWidth] },
  qt = function(e, t) { return e === `v` ? Ht(t) : Ut(t) },
  Jt = function(e, t) { return e === `v` ? Gt(t) : Kt(t) },
  Yt = function(e, t) { return e === `h` && t === `rtl` ? -1 : 1 },
  Xt = function(e, t, n, r, i) {
    var a = Yt(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = Jt(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && qt(e, s) && (d += h, f += m);
      var g = s.parentNode;
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
    } while (!c && s !== document.body || c && (t.contains(s) || t === s));
    return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l
  },
  Zt = function(e) { return `changedTouches` in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0] },
  Qt = function(e) { return [e.deltaX, e.deltaY] },
  $t = function(e) { return e && `current` in e ? e.current : e },
  en = function(e, t) { return e[0] === t[0] && e[1] === t[1] },
  tn = function(e) { return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
` },
  nn = 0,
  rn = [];

function an(e) {
  var t = F.useRef([]),
    n = F.useRef([0, 0]),
    r = F.useRef(),
    i = F.useState(nn++)[0],
    a = F.useState(Et)[0],
    o = F.useRef(e);
  F.useEffect(function() { o.current = e }, [e]), F.useEffect(function() {
    if (e.inert) {
      document.body.classList.add(`block-interactivity-${i}`);
      var t = g([e.lockRef.current], (e.shards || []).map($t), !0).filter(Boolean);
      return t.forEach(function(e) { return e.classList.add(`allow-interactivity-${i}`) }),
        function() { document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) { return e.classList.remove(`allow-interactivity-${i}`) }) }
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = F.useCallback(function(e, t) {
      if (`touches` in e && e.touches.length === 2 || e.type === `wheel` && e.ctrlKey) return !o.current.allowPinchZoom;
      var i = Zt(e),
        a = n.current,
        s = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l, u = e.target,
        d = Math.abs(s) > Math.abs(c) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === u || p.contains(u))) return !1;
      var m = Wt(d, u);
      if (!m) return !0;
      if (m ? l = d : (l = d === `v` ? `h` : `v`, m = Wt(d, u)), !m) return !1;
      if (!r.current && `changedTouches` in e && (s || c) && (r.current = l), !l) return !0;
      var h = r.current || l;
      return Xt(h, t, e, h === `h` ? s : c, !0)
    }, []),
    c = F.useCallback(function(e) {
      var n = e;
      if (rn.length && rn[rn.length - 1] === a) {
        var r = `deltaY` in n ? Qt(n) : Zt(n),
          i = t.current.filter(function(e) { return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && en(e.delta, r) })[0];
        if (i && i.should) { n.cancelable && n.preventDefault(); return }
        if (!i) {
          var c = (o.current.shards || []).map($t).filter(Boolean).filter(function(e) { return e.contains(n.target) });
          (c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault()
        }
      }
    }, []),
    l = F.useCallback(function(e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: on(r) };
      t.current.push(a), setTimeout(function() { t.current = t.current.filter(function(e) { return e !== a }) }, 1)
    }, []),
    u = F.useCallback(function(e) { n.current = Zt(e), r.current = void 0 }, []),
    d = F.useCallback(function(t) { l(t.type, Qt(t), t.target, s(t, e.lockRef.current)) }, []),
    f = F.useCallback(function(t) { l(t.type, Zt(t), t.target, s(t, e.lockRef.current)) }, []);
  F.useEffect(function() {
    return rn.push(a), e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: f }), document.addEventListener(`wheel`, c, zt), document.addEventListener(`touchmove`, c, zt), document.addEventListener(`touchstart`, u, zt),
      function() { rn = rn.filter(function(e) { return e !== a }), document.removeEventListener(`wheel`, c, zt), document.removeEventListener(`touchmove`, c, zt), document.removeEventListener(`touchstart`, u, zt) }
  }, []);
  var p = e.removeScrollBar,
    m = e.inert;
  return F.createElement(F.Fragment, null, m ? F.createElement(a, { styles: tn(i) }) : null, p ? F.createElement(It, { noRelative: e.noRelative, gapMode: e.gapMode }) : null)
}

function on(e) { for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode; return t }
var sn = gt(_t, an),
  cn = F.forwardRef(function(e, t) { return F.createElement(yt, _({}, e, { ref: t, sideCar: sn })) });
cn.classNames = yt.classNames;
var ln = function(e) { return typeof document > `u` ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body },
  un = new WeakMap,
  dn = new WeakMap,
  fn = {},
  pn = 0,
  mn = function(e) { return e && (e.host || mn(e.parentNode)) },
  hn = function(e, t) { return t.map(function(t) { if (e.contains(t)) return t; var n = mn(t); return n && e.contains(n) ? n : (console.error(`aria-hidden`, t, `in not contained inside`, e, `. Doing nothing`), null) }).filter(function(e) { return !!e }) },
  gn = function(e, t, n, r) {
    var i = hn(t, Array.isArray(e) ? e : [e]);
    fn[n] || (fn[n] = new WeakMap);
    var a = fn[n],
      o = [],
      s = new Set,
      c = new Set(i),
      l = function(e) { e && !s.has(e) && (s.add(e), l(e.parentNode)) };
    i.forEach(l);
    var u = function(e) {
      e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
        if (s.has(e)) u(e);
        else try {
          var t = e.getAttribute(r),
            i = t !== null && t !== `false`,
            c = (un.get(e) || 0) + 1,
            l = (a.get(e) || 0) + 1;
          un.set(e, c), a.set(e, l), o.push(e), c === 1 && i && dn.set(e, !0), l === 1 && e.setAttribute(n, `true`), i || e.setAttribute(r, `true`)
        } catch (t) { console.error(`aria-hidden: cannot operate on `, e, t) }
      })
    };
    return u(t), s.clear(), pn++,
      function() {
        o.forEach(function(e) {
          var t = un.get(e) - 1,
            i = a.get(e) - 1;
          un.set(e, t), a.set(e, i), t || (dn.has(e) || e.removeAttribute(r), dn.delete(e)), i || e.removeAttribute(n)
        }), pn--, pn || (un = new WeakMap, un = new WeakMap, dn = new WeakMap, fn = {})
      }
  },
  _n = function(e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || ln(e);
    return i ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))), gn(r, i, n, `aria-hidden`)) : function() { return null }
  },
  vn = Object.defineProperty,
  W = (e, t) => vn(e, `name`, { value: t, configurable: !0 }),
  yn = `Dialog`,
  [bn, xn] = M(yn),
  [Sn, Cn] = bn(yn),
  wn = W(e => { let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = F.useRef(null), c = F.useRef(null), [l, u] = N({ prop: r, defaultProp: i ?? !1, onChange: a, caller: yn }), [d, f] = F.useState(0), [p, m] = F.useState(0); return (0, B.jsx)(Sn, { scope: t, triggerRef: s, contentRef: c, contentId: z(), titleId: z(), descriptionId: z(), titlePresent: d > 0, descriptionPresent: p > 0, setTitleCount: f, setDescriptionCount: m, open: l, onOpenChange: u, onOpenToggle: F.useCallback(() => u(e => !e), [u]), modal: o, children: n }) }, `Dialog`),
  Tn = `DialogPortal`,
  [En, Dn] = bn(Tn, { forceMount: void 0 }),
  On = W(e => { let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = Cn(Tn, t); return (0, B.jsx)(En, { scope: t, forceMount: n, children: F.Children.map(r, e => (0, B.jsx)(P, { present: n || a.open, children: (0, B.jsx)(Ye, { asChild: !0, container: i, children: e }) })) }) }, `DialogPortal`),
  kn = `DialogOverlay`,
  An = F.forwardRef(W(function(e, t) {
    let n = Dn(kn, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...i } = e,
      a = Cn(kn, e.__scopeDialog);
    return a.modal ? (0, B.jsx)(P, { present: r || a.open, children: (0, B.jsx)(Mn, { ...i, ref: t }) }) : null
  }, `DialogOverlay`)),
  jn = m(`DialogOverlay.RemoveScroll`),
  Mn = F.forwardRef(W(function(e, t) { let { __scopeDialog: n, ...r } = e, i = Cn(kn, n), a = Ee(), o = d(t, a); return (0, B.jsx)(cn, { as: jn, allowPinchZoom: !0, shards: [i.contentRef], children: (0, B.jsx)(O.div, { "data-state": Rn(i.open), ...r, ref: o, style: { pointerEvents: `auto`, ...r.style } }) }) }, `DialogOverlayImpl`)),
  Nn = `DialogContent`,
  Pn = F.forwardRef(W(function(e, t) {
    let n = Dn(Nn, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...i } = e,
      a = Cn(Nn, e.__scopeDialog);
    return (0, B.jsx)(P, { present: r || a.open, children: a.modal ? (0, B.jsx)(Fn, { ...i, ref: t }) : (0, B.jsx)(In, { ...i, ref: t }) })
  }, `DialogContent`)),
  Fn = F.forwardRef(W(function(e, t) {
    let n = Cn(Nn, e.__scopeDialog),
      r = F.useRef(null),
      i = d(t, n.contentRef, r);
    return F.useEffect(() => { let e = r.current; if (e) return _n(e) }, []), (0, B.jsx)(Ln, {
      ...e,
      ref: i,
      trapFocus: n.open,
      disableOutsidePointerEvents: n.open,
      onCloseAutoFocus: k(e.onCloseAutoFocus, e => { e.preventDefault(), n.triggerRef.current?.focus() }),
      onPointerDownOutside: k(e.onPointerDownOutside, e => {
        let t = e.detail.originalEvent,
          n = t.button === 0 && t.ctrlKey === !0;
        (t.button === 2 || n) && e.preventDefault()
      }),
      onFocusOutside: k(e.onFocusOutside, e => e.preventDefault())
    })
  }, `DialogContentModal`)),
  In = F.forwardRef(W(function(e, t) {
    let n = Cn(Nn, e.__scopeDialog),
      r = F.useRef(!1),
      i = F.useRef(!1);
    return (0, B.jsx)(Ln, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: t => { e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1 },
      onInteractOutside: t => {
        e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === `pointerdown` && (i.current = !0));
        let a = t.target;
        n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === `focusin` && i.current && t.preventDefault()
      }
    })
  }, `DialogContentNonModal`)),
  Ln = F.forwardRef(W(function(e, t) { let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o } = e, s = Cn(Nn, n); return tt(), (0, B.jsx)(B.Fragment, { children: (0, B.jsx)(Ie, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: i, onUnmountAutoFocus: a, children: (0, B.jsx)(Te, { role: `dialog`, id: s.contentId, "aria-describedby": s.descriptionPresent ? s.descriptionId : void 0, "aria-labelledby": s.titlePresent ? s.titleId : void 0, "data-state": Rn(s.open), ...o, ref: t, deferPointerDownOutside: !0, onDismiss: () => s.onOpenChange(!1) }) }) }) }, `DialogContentImpl`));

function Rn(e) { return e ? `open` : `closed` } W(Rn, `getState`);
var zn = `[cmdk-group=""]`,
  Bn = `[cmdk-group-items=""]`,
  Vn = `[cmdk-group-heading=""]`,
  Hn = `[cmdk-item=""]`,
  Un = `${Hn}:not([aria-disabled="true"])`,
  Wn = `cmdk-item-select`,
  Gn = `data-value`,
  Kn = (e, t, n) => de(e, t, n),
  qn = F.createContext(void 0),
  Jn = () => F.useContext(qn),
  Yn = F.createContext(void 0),
  Xn = () => F.useContext(Yn),
  Zn = F.createContext(void 0),
  Qn = F.forwardRef((e, t) => {
    let n = dr(() => ({ search: ``, value: e.value ?? e.defaultValue ?? ``, selectedItemId: void 0, filtered: { count: 0, items: new Map, groups: new Set } })),
      r = dr(() => new Set),
      i = dr(() => new Map),
      a = dr(() => new Map),
      o = dr(() => new Set),
      s = lr(e),
      { label: c, children: l, value: u, onValueChange: d, filter: f, shouldFilter: p, loop: m, disablePointerSelection: h = !1, vimBindings: g = !0, ..._ } = e,
      v = z(),
      y = z(),
      b = z(),
      x = F.useRef(null),
      S = mr();
    ur(() => {
      if (u !== void 0) {
        let e = u.trim();
        n.current.value = e, C.emit()
      }
    }, [u]), ur(() => { S(6, A) }, []);
    let C = F.useMemo(() => ({
        subscribe: e => (o.current.add(e), () => o.current.delete(e)),
        snapshot: () => n.current,
        setState: (e, t, r) => {
          var i, a, o;
          if (!Object.is(n.current[e], t)) {
            if (n.current[e] = t, e === `search`) k(), E(), S(1, D);
            else if (e === `value`) {
              if (document.activeElement.hasAttribute(`cmdk-input`) || document.activeElement.hasAttribute(`cmdk-root`)) {
                let e = document.getElementById(b);
                e ? e.focus() : (i = document.getElementById(v)) == null || i.focus()
              }
              if (S(7, () => { n.current.selectedItemId = j()?.id, C.emit() }), r || S(5, A), s.current?.value !== void 0) {
                let e = t ?? ``;
                (o = (a = s.current).onValueChange) == null || o.call(a, e);
                return
              }
            }
            C.emit()
          }
        },
        emit: () => { o.current.forEach(e => e()) }
      }), []),
      w = F.useMemo(() => ({
        value: (e, t, r) => { t !== a.current.get(e)?.value && (a.current.set(e, { value: t, keywords: r }), n.current.filtered.items.set(e, T(t, r)), S(2, () => { E(), C.emit() })) },
        item: (e, t) => (r.current.add(e), t && (i.current.has(t) ? i.current.get(t).add(e) : i.current.set(t, new Set([e]))), S(3, () => { k(), E(), n.current.value || D(), C.emit() }), () => {
          a.current.delete(e), r.current.delete(e), n.current.filtered.items.delete(e);
          let t = j();
          S(4, () => { k(), t?.getAttribute(`id`) === e && D(), C.emit() })
        }),
        group: e => (i.current.has(e) || i.current.set(e, new Set), () => { a.current.delete(e), i.current.delete(e) }),
        filter: () => s.current.shouldFilter,
        label: c || e[`aria-label`],
        getDisablePointerSelection: () => s.current.disablePointerSelection,
        listId: v,
        inputId: b,
        labelId: y,
        listInnerRef: x
      }), []);
    
    function T(e, t) { let r = s.current?.filter ?? Kn; return e ? r(e, n.current.search, t) : 0 }
    
    function E() {
      if (!n.current.search || s.current.shouldFilter === !1) return;
      let e = n.current.filtered.items,
        t = [];
      n.current.filtered.groups.forEach(n => {
        let r = i.current.get(n),
          a = 0;
        r.forEach(t => {
          let n = e.get(t);
          a = Math.max(n, a)
        }), t.push([n, a])
      });
      let r = x.current;
      M().sort((t, n) => {
        let r = t.getAttribute(`id`),
          i = n.getAttribute(`id`);
        return (e.get(i) ?? 0) - (e.get(r) ?? 0)
      }).forEach(e => {
        let t = e.closest(Bn);
        t ? t.appendChild(e.parentElement === t ? e : e.closest(`${Bn} > *`)) : r.appendChild(e.parentElement === r ? e : e.closest(`${Bn} > *`))
      }), t.sort((e, t) => t[1] - e[1]).forEach(e => {
        let t = x.current?.querySelector(`${zn}[${Gn}="${encodeURIComponent(e[0])}"]`);
        t?.parentElement.appendChild(t)
      })
    }
    
    function D() {
      let e = M().find(e => e.getAttribute(`aria-disabled`) !== `true`)?.getAttribute(Gn);
      C.setState(`value`, e || void 0)
    }
    
    function k() {
      if (!n.current.search || s.current.shouldFilter === !1) { n.current.filtered.count = r.current.size; return } n.current.filtered.groups = new Set;
      let e = 0;
      for (let t of r.current) {
        let r = T(a.current.get(t)?.value ?? ``, a.current.get(t)?.keywords ?? []);
        n.current.filtered.items.set(t, r), r > 0 && e++
      }
      for (let [e, t] of i.current)
        for (let r of t)
          if (n.current.filtered.items.get(r) > 0) { n.current.filtered.groups.add(e); break } n.current.filtered.count = e
    }
    
    function A() {
      var e;
      let t = j();
      t && (t.parentElement?.firstChild === t && ((e = t.closest(zn)?.querySelector(Vn)) == null || e.scrollIntoView({ block: `nearest` })), t.scrollIntoView({ block: `nearest` }))
    }
    
    function j() { return x.current?.querySelector(`${Hn}[aria-selected="true"]`) }
    
    function M() { return Array.from(x.current?.querySelectorAll(Un) || []) }
    
    function N(e) {
      let t = M()[e];
      t && C.setState(`value`, t.getAttribute(Gn))
    }
    
    function P(e) {
      var t;
      let n = j(),
        r = M(),
        i = r.findIndex(e => e === n),
        a = r[i + e];
      (t = s.current) != null && t.loop && (a = i + e < 0 ? r[r.length - 1] : i + e === r.length ? r[0] : r[i + e]), a && C.setState(`value`, a.getAttribute(Gn))
    }
    
    function ee(e) {
      let t = j()?.closest(zn),
        n;
      for (; t && !n;) t = e > 0 ? sr(t, zn) : cr(t, zn), n = t?.querySelector(Un);
      n ? C.setState(`value`, n.getAttribute(Gn)) : P(e)
    }
    let I = () => N(M().length - 1),
      te = e => { e.preventDefault(), e.metaKey ? I() : e.altKey ? ee(1) : P(1) },
      L = e => { e.preventDefault(), e.metaKey ? N(0) : e.altKey ? ee(-1) : P(-1) };
    return F.createElement(O.div, {
      ref: t,
      tabIndex: -1,
      ..._,
      "cmdk-root": ``,
      onKeyDown: e => {
        var t;
        (t = _.onKeyDown) == null || t.call(_, e);
        let n = e.nativeEvent.isComposing || e.keyCode === 229;
        if (!(e.defaultPrevented || n)) switch (e.key) {
          case `n`:
          case `j`:
            g && e.ctrlKey && te(e);
            break;
          case `ArrowDown`:
            te(e);
            break;
          case `p`:
          case `k`:
            g && e.ctrlKey && L(e);
            break;
          case `ArrowUp`:
            L(e);
            break;
          case `Home`:
            e.preventDefault(), N(0);
            break;
          case `End`:
            e.preventDefault(), I();
            break;
          case `Enter`: {
            e.preventDefault();
            let t = j();
            if (t) {
              let e = new Event(Wn);
              t.dispatchEvent(e)
            }
          }
        }
      }
    }, F.createElement(`label`, { "cmdk-label": ``, htmlFor: w.inputId, id: w.labelId, style: _r }, c), gr(e, e => F.createElement(Yn.Provider, { value: C }, F.createElement(qn.Provider, { value: w }, e))))
  }),
  $n = F.forwardRef((e, t) => {
    let n = z(),
      r = F.useRef(null),
      i = F.useContext(Zn),
      a = Jn(),
      o = lr(e),
      s = o.current?.forceMount ?? i?.forceMount;
    ur(() => { if (!s) return a.item(n, i?.id) }, [s]);
    let c = pr(n, r, [e.value, e.children, r], e.keywords),
      l = Xn(),
      u = fr(e => e.value && e.value === c.current),
      d = fr(e => s || a.filter() === !1 ? !0 : !e.search || e.filtered.items.get(n) > 0);
    F.useEffect(() => { let t = r.current; if (t && !e.disabled) return t.addEventListener(Wn, p), () => t.removeEventListener(Wn, p) }, [d, e.onSelect, e.disabled]);
    
    function p() {
      var e, t;
      m(), (t = (e = o.current).onSelect) == null || t.call(e, c.current)
    }
    
    function m() { l.setState(`value`, c.current, !0) }
    if (!d) return null;
    let { disabled: h, value: g, onSelect: _, forceMount: v, keywords: y, ...b } = e;
    return F.createElement(O.div, { ref: f(r, t), ...b, id: n, "cmdk-item": ``, role: `option`, "aria-disabled": !!h, "aria-selected": !!u, "data-disabled": !!h, "data-selected": !!u, onPointerMove: h || a.getDisablePointerSelection() ? void 0 : m, onClick: h ? void 0 : p }, e.children)
  }),
  er = F.forwardRef((e, t) => {
    let { heading: n, children: r, forceMount: i, ...a } = e, o = z(), s = F.useRef(null), c = F.useRef(null), l = z(), u = Jn(), d = fr(e => i || u.filter() === !1 ? !0 : !e.search || e.filtered.groups.has(o));
    ur(() => u.group(o), []), pr(o, s, [e.value, e.heading, c]);
    let p = F.useMemo(() => ({ id: o, forceMount: i }), [i]);
    return F.createElement(O.div, { ref: f(s, t), ...a, "cmdk-group": ``, role: `presentation`, hidden: !d || void 0 }, n && F.createElement(`div`, { ref: c, "cmdk-group-heading": ``, "aria-hidden": !0, id: l }, n), gr(e, e => F.createElement(`div`, { "cmdk-group-items": ``, role: `group`, "aria-labelledby": n ? l : void 0 }, F.createElement(Zn.Provider, { value: p }, e))))
  }),
  tr = F.forwardRef((e, t) => { let { alwaysRender: n, ...r } = e, i = F.useRef(null), a = fr(e => !e.search); return !n && !a ? null : F.createElement(O.div, { ref: f(i, t), ...r, "cmdk-separator": ``, role: `separator` }) }),
  nr = F.forwardRef((e, t) => { let { onValueChange: n, ...r } = e, i = e.value != null, a = Xn(), o = fr(e => e.search), s = fr(e => e.selectedItemId), c = Jn(); return F.useEffect(() => { e.value != null && a.setState(`search`, e.value) }, [e.value]), F.createElement(O.input, { ref: t, ...r, "cmdk-input": ``, autoComplete: `off`, autoCorrect: `off`, spellCheck: !1, "aria-autocomplete": `list`, role: `combobox`, "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": s, id: c.inputId, type: `text`, value: i ? e.value : o, onChange: e => { i || a.setState(`search`, e.target.value), n?.(e.target.value) } }) }),
  rr = F.forwardRef((e, t) => {
    let { children: n, label: r = `Suggestions`, ...i } = e, a = F.useRef(null), o = F.useRef(null), s = fr(e => e.selectedItemId), c = Jn();
    return F.useEffect(() => {
      if (o.current && a.current) {
        let e = o.current,
          t = a.current,
          n, r = new ResizeObserver(() => {
            n = requestAnimationFrame(() => {
              let n = e.offsetHeight;
              t.style.setProperty(`--cmdk-list-height`, n.toFixed(1) + `px`)
            })
          });
        return r.observe(e), () => { cancelAnimationFrame(n), r.unobserve(e) }
      }
    }, []), F.createElement(O.div, { ref: f(a, t), ...i, "cmdk-list": ``, role: `listbox`, tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: c.listId }, gr(e, e => F.createElement(`div`, { ref: f(o, c.listInnerRef), "cmdk-list-sizer": `` }, e)))
  }),
  ir = F.forwardRef((e, t) => { let { open: n, onOpenChange: r, overlayClassName: i, contentClassName: a, container: o, ...s } = e; return F.createElement(wn, { open: n, onOpenChange: r }, F.createElement(On, { container: o }, F.createElement(An, { "cmdk-overlay": ``, className: i }), F.createElement(Pn, { "aria-label": e.label, "cmdk-dialog": ``, className: a }, F.createElement(Qn, { ref: t, ...s })))) }),
  ar = F.forwardRef((e, t) => fr(e => e.filtered.count === 0) ? F.createElement(O.div, { ref: t, ...e, "cmdk-empty": ``, role: `presentation` }) : null),
  or = F.forwardRef((e, t) => { let { progress: n, children: r, label: i = `Loading...`, ...a } = e; return F.createElement(O.div, { ref: t, ...a, "cmdk-loading": ``, role: `progressbar`, "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": i }, gr(e, e => F.createElement(`div`, { "aria-hidden": !0 }, e))) }),
  G = Object.assign(Qn, { List: rr, Item: $n, Input: nr, Group: er, Separator: tr, Dialog: ir, Empty: ar, Loading: or });

function sr(e, t) {
  let n = e.nextElementSibling;
  for (; n;) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling
  }
}

function cr(e, t) {
  let n = e.previousElementSibling;
  for (; n;) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling
  }
}

function lr(e) { let t = F.useRef(e); return ur(() => { t.current = e }), t }
var ur = typeof window > `u` ? F.useEffect : F.useLayoutEffect;

function dr(e) { let t = F.useRef(); return t.current === void 0 && (t.current = e()), t }

function fr(e) {
  let t = Xn(),
    n = () => e(t.snapshot());
  return F.useSyncExternalStore(t.subscribe, n, n)
}

function pr(e, t, n, r = []) {
  let i = F.useRef(),
    a = Jn();
  return ur(() => {
    var o;
    let s = (() => { for (let e of n) { if (typeof e == `string`) return e.trim(); if (typeof e == `object` && `current` in e) return e.current ? e.current.textContent?.trim() : i.current } })(),
      c = r.map(e => e.trim());
    a.value(e, s, c), (o = t.current) == null || o.setAttribute(Gn, s), i.current = s
  }), i
}
var mr = () => { let [e, t] = F.useState(), n = dr(() => new Map); return ur(() => { n.current.forEach(e => e()), n.current = new Map }, [e]), (e, r) => { n.current.set(e, r), t({}) } };

function hr(e) { let t = e.type; return typeof t == `function` ? t(e.props) : `render` in t ? t.render(e.props) : e }

function gr({ asChild: e, children: t }, n) { return e && F.isValidElement(t) ? F.cloneElement(hr(t), { ref: t.ref }, n(t.props.children)) : n(t) }
var _r = { position: `absolute`, width: `1px`, height: `1px`, padding: `0`, margin: `-1px`, overflow: `hidden`, clip: `rect(0, 0, 0, 0)`, whiteSpace: `nowrap`, borderWidth: `0` },
  vr = F.forwardRef(({ className: e, ...t }, n) => (0, B.jsx)(G, { ref: n, className: i(`flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground`, e), ...t }));
vr.displayName = G.displayName;
var yr = F.forwardRef(({ className: e, ...t }, n) => (0, B.jsxs)(`div`, { className: `flex items-center border-b px-3`, "cmdk-input-wrapper": ``, children: [(0, B.jsx)(c, { className: `mr-2 h-4 w-4 shrink-0 opacity-50` }), (0, B.jsx)(G.Input, { ref: n, className: i(`flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50`, e), ...t })] }));
yr.displayName = G.Input.displayName;
var br = F.forwardRef(({ className: e, ...t }, n) => (0, B.jsx)(G.List, { ref: n, className: i(`max-h-[300px] overflow-y-auto overflow-x-hidden`, e), ...t }));
br.displayName = G.List.displayName;
var xr = F.forwardRef((e, t) => (0, B.jsx)(G.Empty, { ref: t, className: `py-6 text-center text-sm`, ...e }));
xr.displayName = G.Empty.displayName;
var Sr = F.forwardRef(({ className: e, ...t }, n) => (0, B.jsx)(G.Group, { ref: n, className: i(`overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground`, e), ...t }));
Sr.displayName = G.Group.displayName;
var Cr = F.forwardRef(({ className: e, ...t }, n) => (0, B.jsx)(G.Separator, { ref: n, className: i(`-mx-1 h-px bg-border`, e), ...t }));
Cr.displayName = G.Separator.displayName;
var wr = F.forwardRef(({ className: e, ...t }, n) => (0, B.jsx)(G.Item, { ref: n, className: i(`relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`, e), ...t }));
wr.displayName = G.Item.displayName;
var Tr = [`top`, `right`, `bottom`, `left`],
  Er = Math.min,
  K = Math.max,
  Dr = Math.round,
  Or = Math.floor,
  q = e => ({ x: e, y: e }),
  kr = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };

function Ar(e, t, n) { return K(e, Er(t, n)) }

function J(e, t) { return typeof e == `function` ? e(t) : e }

function jr(e) { return e.split(`-`)[0] }

function Mr(e) { return e.split(`-`)[1] }

function Nr(e) { return e === `x` ? `y` : `x` }

function Pr(e) { return e === `y` ? `height` : `width` }

function Y(e) { let t = e[0]; return t === `t` || t === `b` ? `y` : `x` }

function Fr(e) { return Nr(Y(e)) }

function Ir(e, t, n) {
  n === void 0 && (n = !1);
  let r = Mr(e),
    i = Fr(e),
    a = Pr(i),
    o = i === `x` ? r === (n ? `end` : `start`) ? `right` : `left` : r === `start` ? `bottom` : `top`;
  return t.reference[a] > t.floating[a] && (o = Gr(o)), [o, Gr(o)]
}

function Lr(e) { let t = Gr(e); return [Rr(e), t, Rr(t)] }

function Rr(e) { return e.includes(`start`) ? e.replace(`start`, `end`) : e.replace(`end`, `start`) }
var zr = [`left`, `right`],
  Br = [`right`, `left`],
  Vr = [`top`, `bottom`],
  Hr = [`bottom`, `top`];

function Ur(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? t ? Br : zr : t ? zr : Br;
    case `left`:
    case `right`:
      return t ? Vr : Hr;
    default:
      return []
  }
}

function Wr(e, t, n, r) {
  let i = Mr(e),
    a = Ur(jr(e), n === `start`, r);
  return i && (a = a.map(e => e + `-` + i), t && (a = a.concat(a.map(Rr)))), a
}

function Gr(e) { let t = jr(e); return kr[t] + e.slice(t.length) }

function Kr(e) { return { top: e.top ?? 0, right: e.right ?? 0, bottom: e.bottom ?? 0, left: e.left ?? 0 } }

function qr(e) { return typeof e == `number` ? { top: e, right: e, bottom: e, left: e } : Kr(e) }

function Jr(e) { let { x: t, y: n, width: r, height: i } = e; return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n } }

function Yr(e, t, n) {
  let { reference: r, floating: i } = e, a = Y(t), o = Fr(t), s = Pr(o), c = jr(t), l = a === `y`, u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
  switch (c) {
    case `top`:
      p = { x: u, y: r.y - i.height };
      break;
    case `bottom`:
      p = { x: u, y: r.y + r.height };
      break;
    case `right`:
      p = { x: r.x + r.width, y: d };
      break;
    case `left`:
      p = { x: r.x - i.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y }
  }
  let m = Mr(t);
  return m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)), p
}
async function Xr(e, t) { t === void 0 && (t = {}); let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = `clippingAncestors`, rootBoundary: l = `viewport`, elementContext: u = `floating`, altBoundary: d = !1, padding: f = 0 } = J(t, e), p = qr(f), m = o[d ? u === `floating` ? `reference` : `floating` : u], h = Jr(await i.getClippingRect({ element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)), boundary: c, rootBoundary: l, strategy: s })), g = u === `floating` ? { x: n, y: r, width: a.floating.width, height: a.floating.height } : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || { x: 1, y: 1 }, y = Jr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: o, rect: g, offsetParent: _, strategy: s }) : g); return { top: (h.top - y.top + p.top) / v.y, bottom: (y.bottom - h.bottom + p.bottom) / v.y, left: (h.left - y.left + p.left) / v.x, right: (y.right - h.right + p.right) / v.x } }
var Zr = 50,
  Qr = async (e, t, n) => {
    let { placement: r = `bottom`, strategy: i = `absolute`, middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : { ...o, detectOverflow: Xr }, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: u, y: d } = Yr(l, r, c), f = r, p = 0, m = {};
    for (let n = 0; n < a.length; n++) {
      let h = a[n];
      if (!h) continue;
      let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({ x: u, y: d, initialPlacement: r, placement: f, strategy: i, middlewareData: m, rects: l, platform: s, elements: { reference: e, floating: t } });
      u = v ?? u, d = y ?? d, m[g] = { ...m[g], ...b }, x && p < Zr && (p++, typeof x == `object` && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : x.rects), { x: u, y: d } = Yr(l, f, c)), n = -1)
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m }
  }, $r = e => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = J(e, t) || {};
      if (l == null) return {};
      let d = qr(u),
        f = { x: n, y: r },
        p = Fr(i),
        m = Pr(p),
        h = await o.getDimensions(l),
        g = p === `y`,
        _ = g ? `top` : `left`,
        v = g ? `bottom` : `right`,
        y = g ? `clientHeight` : `clientWidth`,
        b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
        x = f[p] - a.reference[p],
        S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)),
        C = S ? S[y] : 0;
      (!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
      let w = b / 2 - x / 2,
        T = C / 2 - h[m] / 2 - 1,
        E = Er(d[_], T),
        D = Er(d[v], T),
        O = C - h[m] - D,
        k = C / 2 - h[m] / 2 + w,
        A = Ar(E, k, O),
        j = !c.arrow && Mr(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0,
        M = j ? k < E ? k - E : k - O : 0;
      return {
        [p]: f[p] + M,
        data: {
          [p]: A,
          centerOffset: k - A - M,
          ...j && { alignmentOffset: M }
        },
        reset: j
      }
    }
  }), ei = function(e) {
    return e === void 0 && (e = {}), {
      name: `flip`,
      options: e,
      async fn(t) {
        var n;
        let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = `bestFit`, fallbackAxisSideDirection: p = `none`, flipAlignment: m = !0, ...h } = J(e, t);
        if ((n = i.arrow) != null && n.alignmentOffset) return {};
        let g = jr(r),
          _ = Y(o),
          v = jr(o) === o,
          y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
          b = d || (v || !m ? [Gr(o)] : Lr(o)),
          x = p !== `none`;
        !d && x && b.push(...Wr(o, m, p, y));
        let S = [o, ...b],
          C = await s.detectOverflow(t, h),
          w = [],
          T = i.flip?.overflows || [];
        if (l && w.push(C[g]), u) {
          let e = Ir(r, a, y);
          w.push(C[e[0]], C[e[1]])
        }
        if (T = [...T, { placement: r, overflows: w }], !w.every(e => e <= 0)) {
          let e = (i.flip?.index || 0) + 1,
            t = S[e];
          if (t && (u !== `alignment` || _ === Y(t) || T.every(e => Y(e.placement) !== _ || e.overflows[0] > 0))) return { data: { index: e, overflows: T }, reset: { placement: t } };
          let n = T.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
          if (!n) switch (f) {
            case `bestFit`: {
              let e = T.filter(e => { if (x) { let t = Y(e.placement); return t === _ || t === `y` } return !0 }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
              e && (n = e);
              break
            }
            case `initialPlacement`:
              n = o
          }
          if (r !== n) return { reset: { placement: n } }
        }
        return {}
      }
    }
  };

function ti(e, t) { return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width } }

function ni(e) { return Tr.some(t => e[t] >= 0) }
var ri = function(e) {
    return e === void 0 && (e = {}), {
      name: `hide`,
      options: e,
      async fn(t) {
        let { rects: n, platform: r } = t, { strategy: i = `referenceHidden`, ...a } = J(e, t);
        switch (i) {
          case `referenceHidden`: { let e = ti(await r.detectOverflow(t, { ...a, elementContext: `reference` }), n.reference); return { data: { referenceHiddenOffsets: e, referenceHidden: ni(e) } } }
          case `escaped`: { let e = ti(await r.detectOverflow(t, { ...a, altBoundary: !0 }), n.floating); return { data: { escapedOffsets: e, escaped: ni(e) } } }
          default:
            return {}
        }
      }
    }
  },
  ii = new Set([`left`, `top`]);
async function ai(e, t) { let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = jr(n), s = Mr(n), c = Y(n) === `y`, l = ii.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = J(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == `number` ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis }; return s && typeof m == `number` && (p = s === `end` ? m * -1 : m), c ? { x: p * u, y: f * l } : { x: f * l, y: p * u } }
var oi = function(e) { return e === void 0 && (e = 0), { name: `offset`, options: e, async fn(t) { var n; let { x: r, y: i, placement: a, middlewareData: o } = t, s = await ai(t, e); return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } } } } },
  si = function(e) {
    return e === void 0 && (e = {}), {
      name: `shift`,
      options: e,
      async fn(t) {
        let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: e => { let { x: t, y: n } = e; return { x: t, y: n } } }, ...l } = J(e, t), u = { x: n, y: r }, d = await a.detectOverflow(t, l), f = Y(i), p = Nr(f), m = u[p], h = u[f], g = (e, t) => Ar(t + d[e === `y` ? `top` : `left`], t, t - d[e === `y` ? `bottom` : `right`]);
        o && (m = g(p, m)), s && (h = g(f, h));
        let _ = c.fn({ ...t, [p]: m, [f]: h });
        return {
          ..._,
          data: {
            x: _.x - n,
            y: _.y - r,
            enabled: {
              [p]: o,
              [f]: s
            }
          }
        }
      }
    }
  },
  ci = function(e) {
    return e === void 0 && (e = {}), {
      options: e,
      fn(t) {
        let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = J(e, t), u = { x: n, y: r }, d = Y(i), f = Nr(d), p = u[f], m = u[d], h = J(s, t), g = typeof h == `number` ? { mainAxis: h, crossAxis: 0 } : { mainAxis: h.mainAxis ?? 0, crossAxis: h.crossAxis ?? 0 };
        if (c) {
          let e = f === `y` ? `height` : `width`,
            t = a.reference[f] - a.floating[e] + g.mainAxis,
            n = a.reference[f] + a.reference[e] - g.mainAxis;
          p < t ? p = t : p > n && (p = n)
        }
        if (l) {
          let e = f === `y` ? `width` : `height`,
            t = ii.has(jr(i)),
            n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis),
            r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
          m < n ? m = n : m > r && (m = r)
        }
        return {
          [f]: p,
          [d]: m
        }
      }
    }
  },
  li = function(e) {
    return e === void 0 && (e = {}), {
      name: `size`,
      options: e,
      async fn(t) {
        let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = J(e, t), c = await i.detectOverflow(t, s), l = jr(n), u = Mr(n), d = Y(n) === `y`, { width: f, height: p } = r.floating, m, h;
        l === `top` || l === `bottom` ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? `start` : `end`) ? `left` : `right`) : (h = l, m = u === `end` ? `top` : `bottom`);
        let g = p - c.top - c.bottom,
          _ = f - c.left - c.right,
          v = Er(p - c[m], g),
          y = Er(f - c[h], _),
          b = t.middlewareData.shift,
          x = !b,
          S = v,
          C = y;
        b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * K(c.left, c.right) : S = p - 2 * K(c.top, c.bottom)), await o({ ...t, availableWidth: C, availableHeight: S });
        let w = await i.getDimensions(a.floating);
        return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {}
      }
    }
  };

function ui() { return typeof window < `u` }

function di(e) { return fi(e) ? (e.nodeName || ``).toLowerCase() : `#document` }

function X(e) { var t; return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window }

function Z(e) { return ((fi(e) ? e.ownerDocument : e.document) || window.document)?.documentElement }

function fi(e) { return ui() ? e instanceof Node || e instanceof X(e).Node : !1 }

function Q(e) { return ui() ? e instanceof Element || e instanceof X(e).Element : !1 }

function pi(e) { return ui() ? e instanceof HTMLElement || e instanceof X(e).HTMLElement : !1 }

function mi(e) { return !ui() || typeof ShadowRoot > `u` ? !1 : e instanceof ShadowRoot || e instanceof X(e).ShadowRoot }

function hi(e) { let { overflow: t, overflowX: n, overflowY: r, display: i } = $(e); return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== `inline` && i !== `contents` }

function gi(e) { return /^(table|td|th)$/.test(di(e)) }

function _i(e) { try { if (e.matches(`:popover-open`)) return !0 } catch {} try { return e.matches(`:modal`) } catch { return !1 } }
var vi = /transform|translate|scale|rotate|perspective|filter/,
  yi = /paint|layout|strict|content/,
  bi = e => !!e && e !== `none`,
  xi;

function Si(e) { let t = Q(e) ? $(e) : e; return bi(t.transform) || bi(t.translate) || bi(t.scale) || bi(t.rotate) || bi(t.perspective) || !wi() && (bi(t.backdropFilter) || bi(t.filter)) || vi.test(t.willChange || ``) || yi.test(t.contain || ``) }

function Ci(e) {
  let t = Di(e);
  for (; pi(t) && !Ti(t);) {
    if (Si(t)) return t;
    if (_i(t)) return null;
    t = Di(t)
  }
  return null
}

function wi() { return xi ??= typeof CSS < `u` && CSS.supports && CSS.supports(`-webkit-backdrop-filter`, `none`), xi }

function Ti(e) { return /^(html|body|#document)$/.test(di(e)) }

function $(e) { return X(e).getComputedStyle(e) }

function Ei(e) { return Q(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY } }

function Di(e) { if (di(e) === `html`) return e; let t = e.assignedSlot || e.parentNode || mi(e) && e.host || Z(e); return mi(t) ? t.host : t }

function Oi(e) { let t = Di(e); return Ti(t) ? (e.ownerDocument || e).body : pi(t) && hi(t) ? t : Oi(t) }

function ki(e, t, n) {
  t === void 0 && (t = []), n === void 0 && (n = !0);
  let r = Oi(e),
    i = r === e.ownerDocument?.body,
    a = X(r);
  if (i) { let e = Ai(a); return t.concat(a, a.visualViewport || [], hi(r) ? r : [], e && n ? ki(e) : []) }
  return t.concat(r, ki(r, [], n))
}

function Ai(e) { return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null }

function ji(e) {
  let t = $(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = pi(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = Dr(n) !== a || Dr(r) !== o;
  return s && (n = a, r = o), { width: n, height: r, $: s }
}

function Mi(e) { return Q(e) ? e : e.contextElement }

function Ni(e) {
  let t = Mi(e);
  if (!pi(t)) return q(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = ji(t),
    o = (a ? Dr(n.width) : n.width) / r,
    s = (a ? Dr(n.height) : n.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), { x: o, y: s }
}
var Pi = q(0);

function Fi(e) { let t = X(e); return !wi() || !t.visualViewport ? Pi : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } }

function Ii(e, t, n) { return t === void 0 && (t = !1), !!n && t && n === X(e) }

function Li(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  let i = e.getBoundingClientRect(),
    a = Mi(e),
    o = q(1);
  t && (r ? Q(r) && (o = Ni(r)) : o = Ni(e));
  let s = Ii(a, n, r) ? Fi(a) : q(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a && r) {
    let e = X(a),
      t = Q(r) ? X(r) : r,
      n = e,
      i = Ai(n);
    for (; i && t !== n;) {
      let e = Ni(i),
        t = i.getBoundingClientRect(),
        r = $(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = X(i), i = Ai(n)
    }
  }
  return Jr({ width: u, height: d, x: c, y: l })
}

function Ri(e, t) { let n = Ei(e).scrollLeft; return t ? t.left + n : Li(Z(e)).left + n }

function zi(e, t) { let n = e.getBoundingClientRect(); return { x: n.left + t.scrollLeft - Ri(e, n), y: n.top + t.scrollTop } }

function Bi(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === `fixed`, o = Z(r), s = t ? _i(t.floating) : !1;
  if (r === o || s && a) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = q(1),
    u = q(0),
    d = pi(r);
  if ((d || !a) && ((di(r) !== `body` || hi(o)) && (c = Ei(r)), d)) {
    let e = Li(r);
    l = Ni(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
  }
  let f = o && !d && !a ? zi(o, c) : q(0);
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x, y: n.y * l.y - c.scrollTop * l.y + u.y + f.y }
}

function Vi(e) { return e.getClientRects ? Array.from(e.getClientRects()) : [] }

function Hi(e) {
  let t = Ei(e),
    n = e.ownerDocument.body,
    r = K(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = K(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
    a = -t.scrollLeft + Ri(e),
    o = -t.scrollTop;
  return $(n).direction === `rtl` && (a += K(e.clientWidth, n.clientWidth) - r), { width: r, height: i, x: a, y: o }
}
var Ui = 25;

function Wi(e, t, n) {
  n === void 0 && (n = `viewport`);
  let r = n === `layoutViewport`,
    i = X(e),
    a = Z(e),
    o = i.visualViewport,
    s = a.clientWidth,
    c = a.clientHeight,
    l = 0,
    u = 0;
  if (o) {
    let e = !wi() || t === `fixed`;
    r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop))
  }
  if (Ri(a) <= 0) {
    let e = a.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      r = e.compatMode === `CSS1Compat` && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
      i = Math.abs(a.clientWidth - t.clientWidth - r),
      o = getComputedStyle(a).scrollbarGutter === `stable both-edges` ? i / 2 : i;
    o <= Ui && (s -= o)
  }
  return { width: s, height: c, x: l, y: u }
}

function Gi(e, t) {
  let n = Li(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = Ni(e);
  return { width: e.clientWidth * a.x, height: e.clientHeight * a.y, x: i * a.x, y: r * a.y }
}

function Ki(e, t, n) {
  let r;
  if (t === `viewport` || t === `layoutViewport`) r = Wi(e, n, t);
  else if (t === `document`) r = Hi(Z(e));
  else if (Q(t)) r = Gi(t, n);
  else {
    let n = Fi(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height }
  }
  return Jr(r)
}

function qi(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = ki(e, [], !1).filter(e => Q(e) && di(e) !== `body`),
    i = null,
    a = $(e).position === `fixed`,
    o = a ? Di(e) : e;
  for (; Q(o) && !Ti(o);) {
    let e = $(o),
      t = Si(o),
      n = i ? i.position : a ? `fixed` : ``;
    !t && (n === `fixed` || n === `absolute` && e.position === `static`) ? r = r.filter(e => e !== o) : i = e, o = Di(o)
  }
  return t.set(e, r), r
}

function Ji(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === `clippingAncestors` ? _i(t) ? [] : qi(t, this._c) : [].concat(n), r], o = Ki(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = Ki(t, a[e], i);
    s = K(n.top, s), c = Er(n.right, c), l = Er(n.bottom, l), u = K(n.left, u)
  }
  return { width: c - u, height: l - s, x: u, y: s }
}

function Yi(e) { let { width: t, height: n } = ji(e); return { width: t, height: n } }

function Xi(e, t, n) {
  let r = pi(t),
    i = Z(t),
    a = n === `fixed`,
    o = Li(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = q(0);
  if ((r || !a) && ((di(t) !== `body` || hi(i)) && (s = Ei(t)), r)) {
    let e = Li(t, !0, a, t);
    c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
  }!r && i && (c.x = Ri(i));
  let l = i && !r && !a ? zi(i, s) : q(0);
  return { x: o.left + s.scrollLeft - c.x - l.x, y: o.top + s.scrollTop - c.y - l.y, width: o.width, height: o.height }
}

function Zi(e) { return $(e).position === `static` }

function Qi(e, t) { if (!pi(e) || $(e).position === `fixed`) return null; if (t) return t(e); let n = e.offsetParent; return Z(e) === n && (n = n.ownerDocument.body), n }

function $i(e, t) {
  let n = X(e);
  if (_i(e)) return n;
  if (!pi(e)) {
    let t = Di(e);
    for (; t && !Ti(t);) {
      if (Q(t) && !Zi(t)) return t;
      t = Di(t)
    }
    return n
  }
  let r = Qi(e, t);
  for (; r && gi(r) && Zi(r);) r = Qi(r, t);
  return r && Ti(r) && Zi(r) && !Si(r) ? n : r || Ci(e) || n
}
var ea = async function(e) {
  let t = this.getOffsetParent || $i,
    n = this.getDimensions,
    r = await n(e.floating);
  return { reference: Xi(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } }
};

function ta(e) { return $(e).direction === `rtl` }
var na = { convertOffsetParentRelativeRectToViewportRelativeRect: Bi, getDocumentElement: Z, getClippingRect: Ji, getOffsetParent: $i, getElementRects: ea, getClientRects: Vi, getDimensions: Yi, getScale: Ni, isElement: Q, isRTL: ta };

function ra(e, t) { return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height }

function ia(e, t, n) {
  let r = null,
    i, a = Z(e);
  
  function o() {
    var e;
    clearTimeout(i), (e = r) == null || e.disconnect(), r = null
  }
  
  function s(n, c) {
    n === void 0 && (n = !1), c === void 0 && (c = 1), o();
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if (n || t(), !f || !p) return;
    let m = Or(d),
      h = Or(a.clientWidth - (u + f)),
      g = Or(a.clientHeight - (d + p)),
      _ = Or(u),
      v = { rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`, threshold: K(0, Er(1, c)) || 1 },
      y = !0;
    
    function b(t) {
      let n = t[0].intersectionRatio;
      if (!ra(l, e.getBoundingClientRect())) return s();
      if (n !== c) {
        if (!y) return s();
        n ? s(!1, n) : i = setTimeout(() => { s(!1, 1e-7) }, 1e3)
      }
      y = !1
    }
    try { r = new IntersectionObserver(b, { ...v, root: a.ownerDocument }) } catch { r = new IntersectionObserver(b, v) } r.observe(e)
  }
  let c = X(e),
    l = () => s(n);
  return c.addEventListener(`resize`, l), s(!0), () => { c.removeEventListener(`resize`, l), o() }
}

function aa(e, t, n, r) {
  r === void 0 && (r = {});
  let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == `function`, layoutShift: s = typeof IntersectionObserver == `function`, animationFrame: c = !1 } = r, l = Mi(e), u = i || a ? [...l ? ki(l) : [], ...t ? ki(t) : []] : [];
  u.forEach(e => { i && e.addEventListener(`scroll`, n), a && e.addEventListener(`resize`, n) });
  let d = l && s ? ia(l, n, a) : null,
    f = -1,
    p = null;
  o && (p = new ResizeObserver(e => {
    let [r] = e;
    r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var e;
      (e = p) == null || e.observe(t)
    })), n()
  }), l && !c && p.observe(l), t && p.observe(t));
  let m, h = c ? Li(e) : null;
  c && g();
  
  function g() {
    let t = Li(e);
    h && !ra(h, t) && n(), h = t, m = requestAnimationFrame(g)
  }
  return n(), () => {
    var e;
    u.forEach(e => { i && e.removeEventListener(`scroll`, n), a && e.removeEventListener(`resize`, n) }), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m)
  }
}
var oa = oi,
  sa = si,
  ca = ei,
  la = li,
  ua = ri,
  da = $r,
  fa = ci,
  pa = (e, t, n) => {
    let r = new Map,
      i = n ?? {},
      a = { ...na, ...i.platform, _c: r };
    return Qr(e, t, { ...i, platform: a })
  },
  ma = typeof document < `u` ? F.useLayoutEffect : function() {};

function ha(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0;)
        if (!ha(e[r], t[r])) return !1;
      return !0
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
    for (r = n; r-- !== 0;)
      if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0;) { let n = i[r]; if (!(n === `_owner` && e.$$typeof) && !ha(e[n], t[n])) return !1 }
    return !0
  }
  return e !== e && t !== t
}

function ga(e) { return typeof window > `u` ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1 }

function _a(e, t) { let n = ga(e); return Math.round(t * n) / n }

function va(e) { let t = F.useRef(e); return ma(() => { t.current = e }), t }

function ya(e) {
  e === void 0 && (e = {});
  let { placement: t = `bottom`, strategy: n = `absolute`, middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = F.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }), [f, p] = F.useState(r);
  ha(f, r) || p(r);
  let [m, h] = F.useState(null), [g, _] = F.useState(null), v = F.useCallback(e => { e !== S.current && (S.current = e, h(e)) }, []), y = F.useCallback(e => { e !== C.current && (C.current = e, _(e)) }, []), b = a || m, x = o || g, S = F.useRef(null), C = F.useRef(null), w = F.useRef(u), T = c != null, E = va(c), D = va(i), O = va(l), k = F.useCallback(() => {
    if (!S.current || !C.current) return;
    let e = { placement: t, strategy: n, middleware: f };
    D.current && (e.platform = D.current), pa(S.current, C.current, e).then(e => {
      let t = { ...e, isPositioned: O.current !== !1 };
      A.current && !ha(w.current, t) && (w.current = t, qe.flushSync(() => { d(t) }))
    })
  }, [f, t, n, D, O]);
  ma(() => { l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d(e => ({ ...e, isPositioned: !1 }))) }, [l]);
  let A = F.useRef(!1);
  ma(() => (A.current = !0, () => { A.current = !1 }), []), ma(() => {
    if (b && (S.current = b), x && (C.current = x), b && x) {
      if (E.current) return E.current(b, x, k);
      k()
    }
  }, [b, x, k, E, T]);
  let j = F.useMemo(() => ({ reference: S, floating: C, setReference: v, setFloating: y }), [v, y]),
    M = F.useMemo(() => ({ reference: b, floating: x }), [b, x]),
    N = F.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!M.floating) return e;
      let t = _a(M.floating, u.x),
        r = _a(M.floating, u.y);
      return s ? { ...e, transform: `translate(` + t + `px, ` + r + `px)`, ...ga(M.floating) >= 1.5 && { willChange: `transform` } } : { position: n, left: t, top: r }
    }, [n, s, M.floating, u.x, u.y]);
  return F.useMemo(() => ({ ...u, update: k, refs: j, elements: M, floatingStyles: N }), [u, k, j, M, N])
}
var ba = e => {
    function t(e) { return {}.hasOwnProperty.call(e, `current`) }
    return { name: `arrow`, options: e, fn(n) { let { element: r, padding: i } = typeof e == `function` ? e(n) : e; return r && t(r) ? r.current == null ? {} : da({ element: r.current, padding: i }).fn(n) : r ? da({ element: r, padding: i }).fn(n) : {} } }
  },
  xa = (e, t) => { let n = oa(e); return { name: n.name, fn: n.fn, options: [e, t] } },
  Sa = (e, t) => { let n = sa(e); return { name: n.name, fn: n.fn, options: [e, t] } },
  Ca = (e, t) => ({ fn: fa(e).fn, options: [e, t] }),
  wa = (e, t) => { let n = ca(e); return { name: n.name, fn: n.fn, options: [e, t] } },
  Ta = (e, t) => { let n = la(e); return { name: n.name, fn: n.fn, options: [e, t] } },
  Ea = (e, t) => { let n = ua(e); return { name: n.name, fn: n.fn, options: [e, t] } },
  Da = (e, t) => { let n = ba(e); return { name: n.name, fn: n.fn, options: [e, t] } },
  Oa = Object.defineProperty,
  ka = (e, t) => Oa(e, `name`, { value: t, configurable: !0 }),
  Aa = `Popper`,
  [ja, Ma] = M(Aa),
  [Na, Pa] = ja(Aa),
  Fa = ka(e => { let { __scopePopper: t, children: n } = e, [r, i] = F.useState(null), [a, o] = F.useState(void 0); return (0, B.jsx)(Na, { scope: t, anchor: r, onAnchorChange: i, placementState: a, setPlacementState: o, children: n }) }, `Popper`),
  Ia = `PopperAnchor`,
  La = F.forwardRef(ka(function(e, t) {
    let { __scopePopper: n, virtualRef: r, ...i } = e, a = Pa(Ia, n), o = F.useRef(null), s = a.onAnchorChange, c = F.useCallback(e => { o.current = e, e && s(e) }, [s]), l = d(t, c), u = F.useRef(null);
    F.useEffect(() => {
      if (!r) return;
      let e = u.current;
      u.current = r.current, e !== u.current && s(u.current)
    });
    let f = a.placementState && Wa(a.placementState),
      p = f?.[0],
      m = f?.[1];
    return r ? null : (0, B.jsx)(O.div, { "data-radix-popper-side": p, "data-radix-popper-align": m, ...i, ref: l })
  }, `PopperAnchor`)),
  Ra = `PopperContent`,
  [za, Ba] = ja(Ra),
  Va = F.forwardRef(ka(function(e, t) {
    let { __scopePopper: n, side: r = `bottom`, sideOffset: i = 0, align: a = `center`, alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: f = `partial`, hideWhenDetached: p = !1, updatePositionStrategy: m = `optimized`, onPlaced: h, ...g } = e, _ = Pa(Ra, n), [v, y] = F.useState(null), b = d(t, y), [x, S] = F.useState(null), C = j(x), w = C?.width ?? 0, T = C?.height ?? 0, E = r + (a === `center` ? `` : `-` + a), D = typeof u == `number` ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, k = Array.isArray(l) ? l : [l], M = k.length > 0, N = { padding: D, boundary: k.filter(Ha), altBoundary: M }, { refs: P, floatingStyles: ee, placement: I, isPositioned: te, middlewareData: L } = ya({
      strategy: `fixed`,
      placement: E,
      whileElementsMounted: ka((...e) => aa(...e, { animationFrame: m === `always` }), `whileElementsMounted`),
      elements: { reference: _.anchor },
      middleware: [xa({ mainAxis: i + T, alignmentAxis: o }), c && Sa({ mainAxis: !0, crossAxis: !1, limiter: f === `partial` ? Ca() : void 0, ...N }), c && wa({ ...N }), Ta({
        ...N,
        apply: ka(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
          let { width: i, height: a } = t.reference, o = e.floating.style;
          o.setProperty(`--radix-popper-available-width`, `${n}px`), o.setProperty(`--radix-popper-available-height`, `${r}px`), o.setProperty(`--radix-popper-anchor-width`, `${i}px`), o.setProperty(`--radix-popper-anchor-height`, `${a}px`)
        }, `apply`)
      }), x && Da({ element: x, padding: s }), Ua({ arrowWidth: w, arrowHeight: T }), p && Ea({ strategy: `referenceHidden`, ...N, boundary: M ? N.boundary : void 0 })]
    }), ne = _.setPlacementState;
    A(() => (ne(I), () => { ne(void 0) }), [I, ne]);
    let [R, re] = Wa(I), ie = ve(h);
    A(() => { te && ie?.() }, [te, ie]);
    let ae = L.arrow?.x,
      oe = L.arrow?.y,
      se = L.arrow?.centerOffset !== 0,
      [ce, le] = F.useState();
    return A(() => { v && le(window.getComputedStyle(v).zIndex) }, [v]), (0, B.jsx)(`div`, { ref: P.setFloating, "data-radix-popper-content-wrapper": ``, style: { ...ee, transform: te ? ee.transform : `translate(0, -200%)`, minWidth: `max-content`, zIndex: ce, "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(` `), ...L.hide?.referenceHidden && { visibility: `hidden`, pointerEvents: `none` } }, dir: e.dir, children: (0, B.jsx)(za, { scope: n, placedSide: R, placedAlign: re, onArrowChange: S, arrowX: ae, arrowY: oe, shouldHideArrow: se, children: (0, B.jsx)(O.div, { "data-side": R, "data-align": re, ...g, ref: b, style: { ...g.style, animation: te ? g.style?.animation : `none` } }) }) })
  }, `PopperContent`));

function Ha(e) { return e !== null } ka(Ha, `isNotNull`);
var Ua = ka(e => ({ name: `transformOrigin`, options: e, fn(t) { let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Wa(n), u = { start: `0%`, center: `50%`, end: `100%` } [l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = ``, m = ``; return c === `bottom` ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === `top` ? (p = a ? u : `${d}px`, m = `${r.floating.height+s}px`) : c === `right` ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === `left` && (p = `${r.floating.width+s}px`, m = a ? u : `${f}px`), { data: { x: p, y: m } } } }), `transformOrigin`);

function Wa(e) { let [t, n = `center`] = e.split(`-`); return [t, n] } ka(Wa, `getSideAndAlignFromPlacement`);
var Ga = Fa,
  Ka = La,
  qa = Va,
  Ja = Object.defineProperty,
  Ya = (e, t) => Ja(e, `name`, { value: t, configurable: !0 }),
  Xa = `Popover`,
  [Za, Qa] = M(Xa, [Ma]),
  $a = Ma(),
  [eo, to] = Za(Xa),
  no = Ya(e => { let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = $a(t), c = F.useRef(null), [l, u] = F.useState(!1), [d, f] = N({ prop: r, defaultProp: i ?? !1, onChange: a, caller: Xa }); return (0, B.jsx)(Ga, { ...s, children: (0, B.jsx)(eo, { scope: t, contentId: z(), triggerRef: c, open: d, onOpenChange: f, onOpenToggle: F.useCallback(() => f(e => !e), [f]), hasCustomAnchor: l, onCustomAnchorAdd: F.useCallback(() => u(!0), []), onCustomAnchorRemove: F.useCallback(() => u(!1), []), modal: o, children: n }) }) }, `Popover`),
  ro = `PopoverTrigger`,
  io = F.forwardRef(Ya(function(e, t) { let { __scopePopover: n, ...r } = e, i = to(ro, n), a = $a(n), o = d(t, i.triggerRef), s = (0, B.jsx)(O.button, { type: `button`, "aria-haspopup": `dialog`, "aria-expanded": i.open, "aria-controls": i.open ? i.contentId : void 0, "data-state": go(i.open), ...r, ref: o, onClick: k(e.onClick, i.onOpenToggle) }); return i.hasCustomAnchor ? s : (0, B.jsx)(Ka, { asChild: !0, ...a, children: s }) }, `PopoverTrigger`)),
  ao = `PopoverPortal`,
  [oo, so] = Za(ao, { forceMount: void 0 }),
  co = Ya(e => { let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = to(ao, t); return (0, B.jsx)(oo, { scope: t, forceMount: n, children: (0, B.jsx)(P, { present: n || a.open, children: (0, B.jsx)(Ye, { asChild: !0, container: i, children: r }) }) }) }, `PopoverPortal`),
  lo = `PopoverContent`,
  uo = F.forwardRef(Ya(function(e, t) {
    let n = so(lo, e.__scopePopover),
      { forceMount: r = n.forceMount, ...i } = e,
      a = to(lo, e.__scopePopover);
    return (0, B.jsx)(P, { present: r || a.open, children: a.modal ? (0, B.jsx)(po, { ...i, ref: t }) : (0, B.jsx)(mo, { ...i, ref: t }) })
  }, `PopoverContent`)),
  fo = m(`PopoverContent.RemoveScroll`),
  po = F.forwardRef(Ya(function(e, t) {
    let n = to(lo, e.__scopePopover),
      r = F.useRef(null),
      i = d(t, r),
      a = F.useRef(!1);
    return F.useEffect(() => { let e = r.current; if (e) return _n(e) }, []), (0, B.jsx)(cn, {
      as: fo,
      allowPinchZoom: !0,
      children: (0, B.jsx)(ho, {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: k(e.onCloseAutoFocus, e => { e.preventDefault(), a.current || n.triggerRef.current?.focus() }),
        onPointerDownOutside: k(e.onPointerDownOutside, e => {
          let t = e.detail.originalEvent,
            n = t.button === 0 && t.ctrlKey === !0,
            r = t.button === 2 || n;
          a.current = r
        }, { checkForDefaultPrevented: !1 }),
        onFocusOutside: k(e.onFocusOutside, e => e.preventDefault(), { checkForDefaultPrevented: !1 })
      })
    })
  }, `PopoverContentModal`)),
  mo = F.forwardRef(Ya(function(e, t) {
    let n = to(lo, e.__scopePopover),
      r = F.useRef(!1),
      i = F.useRef(!1);
    return (0, B.jsx)(ho, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: t => { e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1 },
      onInteractOutside: t => {
        e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === `pointerdown` && (i.current = !0));
        let a = t.target;
        n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === `focusin` && i.current && t.preventDefault()
      }
    })
  }, `PopoverContentNonModal`)),
  ho = F.forwardRef(Ya(function(e, t) { let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = to(lo, n), p = $a(n); return tt(), (0, B.jsx)(Ie, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: i, onUnmountAutoFocus: a, children: (0, B.jsx)(Te, { asChild: !0, disableOutsidePointerEvents: o, onInteractOutside: u, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onDismiss: () => f.onOpenChange(!1), deferPointerDownOutside: !0, children: (0, B.jsx)(qa, { "data-state": go(f.open), role: `dialog`, id: f.contentId, ...p, ...d, ref: t, style: { ...d.style, "--radix-popover-content-transform-origin": `var(--radix-popper-transform-origin)`, "--radix-popover-content-available-width": `var(--radix-popper-available-width)`, "--radix-popover-content-available-height": `var(--radix-popper-available-height)`, "--radix-popover-trigger-width": `var(--radix-popper-anchor-width)`, "--radix-popover-trigger-height": `var(--radix-popper-anchor-height)` } }) }) }) }, `PopoverContentImpl`));

function go(e) { return e ? `open` : `closed` } Ya(go, `getState`);
var _o = no,
  vo = io,
  yo = co,
  bo = uo,
  xo = _o,
  So = vo,
  Co = F.forwardRef(({ className: e, align: t = `center`, sideOffset: n = 4, ...r }, a) => (0, B.jsx)(yo, { children: (0, B.jsx)(bo, { ref: a, align: t, sideOffset: n, className: i(`z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)`, e), ...r }) }));
Co.displayName = bo.displayName;

function wo({ value: e, onValueChange: t, options: n, placeholder: r, searchPlaceholder: l = `Search…`, disabled: u, name: d, id: f }) { let [p, m] = F.useState(!1), h = n.find(t => t.value === e); return (0, B.jsxs)(`div`, { className: `relative`, children: [d && (0, B.jsx)(`input`, { type: `hidden`, name: d, value: e }), (0, B.jsxs)(xo, { open: p, onOpenChange: m, children: [(0, B.jsx)(So, { asChild: !0, children: (0, B.jsxs)(a, { id: f, type: `button`, variant: `outline`, disabled: u, "aria-expanded": p, className: `h-11 w-full justify-between rounded-xl border border-gold/20 bg-gradient-to-r from-background/70 via-secondary/30 to-background/70 px-3 font-normal shadow-sm backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-secondary/50 focus:ring-2 focus:ring-gold/20`, children: [(0, B.jsx)(`span`, { className: i(`flex min-w-0 items-center gap-2 truncate`, !h && `text-muted-foreground`), children: h ? (0, B.jsxs)(B.Fragment, { children: [(0, B.jsx)(`span`, { className: `grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-gold/10 text-[10px] font-bold text-gold`, children: h.label.slice(0, 1).toUpperCase() }), (0, B.jsx)(`span`, { className: `truncate`, children: h.label })] }) : (0, B.jsx)(`span`, { children: r }) }), (0, B.jsx)(s, { className: i(`h-4 w-4 shrink-0 opacity-60 transition-transform`, p && `rotate-180`) })] }) }), (0, B.jsx)(Co, { align: `start`, className: `w-[min(380px,calc(100vw-2rem))] overflow-hidden rounded-3xl border-gold/30 bg-card/98 p-0 shadow-[0_25px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl`, children: (0, B.jsxs)(vr, { children: [(0, B.jsxs)(`div`, { className: `relative border-b border-border/70`, children: [(0, B.jsx)(c, { className: `pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground` }), (0, B.jsx)(yr, { className: `pl-10 h-12 text-sm`, placeholder: l })] }), (0, B.jsxs)(br, { className: `max-h-64`, children: [(0, B.jsx)(xr, { children: `No matching option.` }), n.map(n => (0, B.jsxs)(wr, { value: n.label, onSelect: () => { t(n.value), m(!1) }, className: `min-h-11 cursor-pointer rounded-xl px-3 py-2.5 transition-colors data-[selected=true]:bg-gold/10 data-[selected=true]:text-foreground`, children: [(0, B.jsx)(o, { className: i(`h-4 w-4`, e === n.value ? `opacity-100 text-gold` : `opacity-0`) }), (0, B.jsx)(`span`, { className: `truncate`, children: n.label })] }, n.value))] })] }) })] })] }) }
var To = `Your withdrawal could not be processed. Please try again later.`;

function Eo(e, t, n) {
  if (e.message) return e.message;
  switch (e.reason) {
    case `disabled`:
      return `Withdrawals are temporarily disabled. Please try again later.`;
    case `unauthenticated`:
      return `Please sign in again to continue.`;
    case `no_profile`:
      return `Your profile could not be loaded. Please contact support.`;
    case `level_zero`:
      return `Level 0 accounts cannot withdraw. Please upgrade to Level 1 and activate Level 1 before you can withdraw.`;
    case `not_activated`:
      return `Please activate your ${t} level before you can withdraw.`;
    case `account_restricted`:
      return `Your account is currently restricted. Please contact support.`;
    case `below_minimum`:
      return `The withdrawal amount is below the minimum allowed amount.`;
    case `above_maximum`:
      return n ? `The withdrawal amount exceeds the maximum allowed for your level. Please upgrade to ${n} to withdraw more.` : `The withdrawal amount exceeds the maximum allowed for your level.`;
    case `insufficient_balance`:
      return `Your balance is insufficient for this withdrawal.`;
    case `daily_limit`:
      return `You have reached the daily withdrawal amount limit.`;
    case `daily_count_limit`:
      return `You have reached the maximum number of withdrawals allowed today.`;
    case `missing_bank_details`:
      return `Please provide valid bank details before withdrawing.`;
    case `invalid_amount`:
      return `Please enter a valid withdrawal amount.`;
    case `duplicate`:
      return `A similar withdrawal request was recently submitted.`;
    default:
      return To
  }
}

function Do() {
  let e = v(),
    [t, n] = (0, F.useState)(!0),
    [a, o] = (0, F.useState)(!1),
    [s, c] = (0, F.useState)(0),
    [d, f] = (0, F.useState)(0),
    [m, g] = (0, F.useState)(null),
    [_, b] = (0, F.useState)([]),
    [x, D] = (0, F.useState)([]),
    [O, k] = (0, F.useState)(0),
    [A, j] = (0, F.useState)(`not_activated`),
    [M, N] = (0, F.useState)(``),
    [P, ee] = (0, F.useState)(5e3),
    [I, te] = (0, F.useState)(0),
    [L, ne] = (0, F.useState)(null),
    [R, re] = (0, F.useState)(``),
    [ie, ae] = (0, F.useState)(``),
    [oe, se] = (0, F.useState)(``),
    [ce, le] = (0, F.useState)(``),
    [ue, de] = (0, F.useState)(null),
    fe = async () => {
      let { data: t } = await h.auth.getUser();
      if (!t.user) { e({ to: `/login`, replace: !0 }); return }
      let [{ data: r }, { data: i }, { data: a }, { data: o }] = await Promise.all([h.from(`profiles`).select(`balance, pending_balance, bank_name, bank_account_number, bank_account_name, level, activation, first_name`).eq(`id`, t.user.id).maybeSingle(), h.from(`platform_settings`).select(`*`).maybeSingle(), h.from(`withdrawals`).select(`id, reference, amount, status, bank_name, created_at`).eq(`user_id`, t.user.id).order(`created_at`, { ascending: !1 }).limit(10), h.from(`levels`).select(`level, name, min_withdrawal, max_withdrawal`).order(`level`)]), s = r, l = o ?? [], u = s?.level ?? 0;
      D(l), k(u), j(s?.activation ?? `not_activated`), N(s?.first_name ?? ``), c(s?.balance ?? 0), f(s?.pending_balance ?? 0), ae(s?.bank_name ?? ``), se(s?.bank_account_number ?? ``), le(s?.bank_account_name ?? ``), g(i), b(a ?? []);
      
      h.rpc("get_nigerian_banks", {}).then(({ data: result }) => {
        if (result?.ok && Array.isArray(result.banks)) {
          g({
            ...i,
            supported_banks: result.banks.map(bank => bank.name)
          });
        }
      }).catch(error => console.error("Could not load Nigerian banks", error));
      
      let d = l.find(e => e.level === u),
        p = Number(d?.min_withdrawal ?? 0),
        m = Number(d?.max_withdrawal ?? 0);
      ee(p > 0 ? p : Number(i?.min_withdrawal ?? 5e3)), te(m > 0 ? m : Number(i?.max_withdrawal ?? 0)), n(!1)
    };
  (0, F.useEffect)(() => { fe() }, []);
  let pe = async () => {
    if (!a) {
      o(!0), de(null);
      try {
        let t = h.rpc(`request_withdrawal`, { _amount: Number(R), _bank_name: ie, _account_number: oe, _account_name: ce }),
          { data: n, error: r } = await Promise.race([t, new Promise((e, t) => setTimeout(() => t(Error(`Withdrawal request timed out. Please try again.`)), 2e4))]),
          i = n ?? {};
        if (r) return o(!1), y.error(`Withdrawal failed`, { description: `Please check your connection and try again.` });
        let a = x.find(e => e.level === O)?.name ?? `Level ${O}`,
          s = x.find(e => e.level === O + 1)?.name ?? null;
        if (!i.ok) { let e = Eo(i, a, s); return de(e), o(!1), y.error(e) } y.success(`Withdrawal request submitted`, { description: `Your request is now being processed by Admin.` });
        let c = { id: String(i.id ?? ``), reference: String(i.reference ?? ``), amount: Number(R), status: `processing`, bank_name: ie, created_at: new Date().toISOString() };
        re(``), de(null), ne(c), e({ to: `/withdrawal-processing`, replace: !0 })
      } catch (e) { return console.error(`request_withdrawal timed out`, e), o(!1), y.error(`Withdrawal request timed out`, { description: `Please check your connection and try again.` }) }
    }
  };
  if (t) return (0, B.jsx)(S, {});
  let me = x.find(e => e.level === O)?.name ?? `Level ${O}`,
    he = M.trim() || `User`;
  return O < 1 && A !== `activated` || O < 1 ? `${he}` : A !== `activated` && (A === `pending` ? (`${he}`, `${me}`) : (`${he}`, `${me}`, `${me}`)), (0, B.jsxs)(C, { title: `Withdraw Funds`, subtitle: m?.withdrawal_processing_time, action: (0, B.jsx)(r, { to: `/requests`, className: `shrink-0 rounded-full border border-gold/40 px-3 py-1.5 text-[10px] font-semibold text-gold transition active:scale-95`, children: `Track requests` }), children: [(0, B.jsxs)(`section`, { className: `animate-fade-up rounded-2xl border border-gold/30 bg-gradient-to-br from-navy via-card to-navy-deep p-4`, children: [(0, B.jsx)(`p`, { className: `text-[10px] tracking-[0.25em] text-muted-foreground`, children: `AVAILABLE BALANCE` }), (0, B.jsx)(`p`, { className: `mt-1 font-display text-2xl font-extrabold`, children: T(s) }), (0, B.jsxs)(`p`, { className: `mt-1 text-[11px] text-muted-foreground`, children: [T(d), ` pending payout`] })] }), m?.withdrawals_enabled === !1 && (0, B.jsx)(`div`, { className: `rounded-2xl border border-destructive/40 bg-destructive/10 p-4 text-center text-xs font-semibold text-destructive`, children: `Withdrawals are temporarily paused.` }), L && (0, B.jsx)(E, { kind: `withdrawal`, status: L.status, amount: L.amount, reference: L.reference, detail: `Your withdrawal request has been received and is awaiting review.` }), (0, B.jsxs)(`section`, { className: `animate-fade-up space-y-3 rounded-2xl border border-border bg-card p-4`, children: [(0, B.jsxs)(`p`, { className: `flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] text-muted-foreground`, children: [(0, B.jsx)(u, { className: `h-3 w-3` }), ` PAYOUT DETAILS`] }), ue && (0, B.jsxs)(`div`, { className: `flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-[11px] leading-relaxed text-destructive`, children: [(0, B.jsx)(l, { className: `mt-0.5 h-4 w-4 shrink-0` }), (0, B.jsx)(`span`, { children: ue })] }), (0, B.jsxs)(`label`, { className: `block`, children: [(0, B.jsx)(`span`, { className: `text-[11px] font-medium text-muted-foreground`, children: `Amount (₦)` }), (0, B.jsx)(`input`, { inputMode: `decimal`, value: R, onChange: e => { re(e.target.value), ue && de(null) }, placeholder: `Min ${T(P)}${I>0?` · Max ${T(I)}`:``}`, className: `mt-1 w-full rounded-xl border border-border bg-secondary/50 px-3 py-2.5 text-sm font-semibold outline-none transition focus:border-gold/60` })] }), (0, B.jsxs)(`label`, { className: `block`, children: [(0, B.jsx)(`span`, { className: `text-[11px] font-medium text-muted-foreground`, children: `Bank` }), (0, B.jsx)(`div`, { className: `mt-1`, children: (0, B.jsx)(wo, { id: `withdraw-bank`, value: ie, onValueChange: e => { ae(e), ue && de(null) }, options: (m?.supported_banks ?? []).map(e => ({ value: e, label: e })), placeholder: `Select your bank`, searchPlaceholder: `Search banks…` }) })] }), (0, B.jsxs)(`label`, { className: `block`, children: [(0, B.jsx)(`span`, { className: `text-[11px] font-medium text-muted-foreground`, children: `Account number` }), (0, B.jsx)(`input`, { inputMode: `numeric`, value: oe, onChange: e => { se(e.target.value), ue && de(null) }, className: `mt-1 w-full rounded-xl border border-border bg-secondary/50 px-3 py-2.5 text-xs outline-none transition focus:border-gold/60` })] }), (0, B.jsxs)(`label`, { className: `block`, children: [(0, B.jsx)(`span`, { className: `text-[11px] font-medium text-muted-foreground`, children: `Account name` }), (0, B.jsx)(`input`, { value: ce, onChange: e => { le(e.target.value), ue && de(null) }, className: `mt-1 w-full rounded-xl border border-border bg-secondary/50 px-3 py-2.5 text-xs outline-none transition focus:border-gold/60` })] }), (0, B.jsxs)(`p`, { className: `text-[10px] leading-relaxed text-muted-foreground`, children: [`Minimum: `, T(P), I > 0 ? ` · Maximum per request: ${T(I)}` : ``, `. `, m?.withdrawal_instructions] }), (0, B.jsxs)(`button`, { type: `button`, disabled: a || !R, onClick: pe, className: `flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient py-3 text-xs font-bold text-gold-foreground transition active:scale-[0.98] disabled:opacity-60`, children: [a && (0, B.jsx)(p, { className: `h-3.5 w-3.5 animate-spin` }), ` Request withdrawal`] })] }), (0, B.jsxs)(`section`, { children: [(0, B.jsx)(`h2`, { className: `text-[10px] font-semibold tracking-[0.2em] text-muted-foreground`, children: `WITHDRAWAL HISTORY` }), (0, B.jsxs)(`div`, { className: `mt-3 rounded-2xl border border-border bg-card`, children: [_.length === 0 && (0, B.jsx)(`p`, { className: `p-6 text-center text-xs text-muted-foreground`, children: `No withdrawals yet.` }), _.map((e, t) => (0, B.jsxs)(`div`, { className: i(`flex items-center gap-3 p-3.5`, t > 0 && `border-t border-border`), children: [(0, B.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [(0, B.jsx)(`p`, { className: `truncate text-xs font-semibold`, children: e.reference }), (0, B.jsxs)(`p`, { className: `text-[10px] text-muted-foreground`, children: [e.bank_name, ` · `, w(e.created_at)] })] }), (0, B.jsxs)(`div`, { className: `text-right`, children: [(0, B.jsx)(`p`, { className: `text-xs font-bold`, children: T(e.amount) }), (0, B.jsx)(`p`, { className: i(`text-[10px] capitalize`, e.status === `completed` || e.status === `approved` ? `text-success` : e.status === `rejected` ? `text-destructive` : `text-gold`), children: e.status })] })] }, e.id))] })] })] })
}
export { Do as component };