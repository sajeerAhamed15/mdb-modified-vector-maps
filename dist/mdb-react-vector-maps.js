"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("clsx"),
  a = require("react"),
  m = require("mdb-react-ui-kit"),
  t = require("react-popper");
function l(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var z = l(e),
  d = l(a),
  n = function () {
    return (
      (n =
        Object.assign ||
        function (e) {
          for (var a, m = 1, t = arguments.length; m < t; m++)
            for (var l in (a = arguments[m]))
              Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
          return e;
        }),
      n.apply(this, arguments)
    );
  };
var r = {
    world: d.default.createElement(
      "svg",
      { viewBox: "-20 0 1060 800" },
      d.default.createElement("path", {
        d: "m 479.68275,331.6274 -0.077,0.025 -0.258,0.155 -0.147,0.054 -0.134,0.027 -0.105,-0.011 -0.058,-0.091 0.006,-0.139 -0.024,-0.124 -0.02,-0.067 0.038,-0.181 0.086,-0.097 0.119,-0.08 0.188,0.029 0.398,0.116 0.083,0.109 10e-4,0.072 -0.073,0.119 z",
        name: "Andorra",
        id: "AD",
      })
    )
  },
  i = function (e) {
    var a = Object.keys(r);
    return Object.values(r)[a.indexOf(e)];
  },
  c = function (e) {
    if (e.touches) {
      var a = e.touches[0];
      return { x: a.clientX, y: a.clientY };
    }
    return { x: e.clientX, y: e.clientY };
  },
  u = function (e, a) {
    return (
      void 0 === e && (e = 0),
      void 0 === a && (a = 0),
      function () {
        return {
          width: 0,
          height: 0,
          top: a + 20,
          right: e,
          bottom: a + 20,
          left: e,
        };
      }
    );
  },
  f = function (e) {
    var l = e.className,
      r = e.map,
      f = e.hoverFill,
      E = e.selectRegion,
      h = e.readonly,
      p = e.selectFill,
      o = e.mapRef,
      s = e.zoomMax,
      M = e.zoomMin,
      S = e.zoomStep,
      N = e.zoomEvents,
      y = e.scale,
      A = e.colorMap,
      g = e.hover,
      b = e.fill,
      C = e.width,
      v = e.height,
      B = e.fillOpacity,
      I = e.stroke,
      x = e.strokeOpacity,
      G = e.strokeWidth,
      k = e.strokeLinejoin,
      T = e.tooltips,
      L = e.markers,
      R = e.markerFill,
      w = e.markerStroke,
      D = e.markerInnerFill,
      P = e.markerStrokeWidth,
      K = e.btnClass,
      O = (function (e, a) {
        var m = {};
        for (var t in e)
          Object.prototype.hasOwnProperty.call(e, t) &&
            a.indexOf(t) < 0 &&
            (m[t] = e[t]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var l = 0;
          for (t = Object.getOwnPropertySymbols(e); l < t.length; l++)
            a.indexOf(t[l]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
              (m[t[l]] = e[t[l]]);
        }
        return m;
      })(e, [
        "className",
        "map",
        "hoverFill",
        "selectRegion",
        "readonly",
        "selectFill",
        "mapRef",
        "zoomMax",
        "zoomMin",
        "zoomStep",
        "zoomEvents",
        "scale",
        "colorMap",
        "hover",
        "fill",
        "width",
        "height",
        "fillOpacity",
        "stroke",
        "strokeOpacity",
        "strokeWidth",
        "strokeLinejoin",
        "tooltips",
        "markers",
        "markerFill",
        "markerStroke",
        "markerInnerFill",
        "markerStrokeWidth",
        "btnClass",
      ]),
      F = a.useRef(null),
      W = o || F,
      U = a.useRef(y),
      H = a.useRef({ x: 0, y: 0 }),
      V = a.useRef(0),
      Z = a.useRef(0),
      Y = a.useRef(b),
      J = a.useRef(C),
      Q = a.useRef(v),
      j = a.useRef(B),
      q = a.useRef(I),
      X = a.useRef(x),
      _ = a.useRef(k),
      $ = a.useRef(G),
      ee = a.useState(null),
      ae = ee[0],
      me = ee[1],
      te = a.useState("string" == typeof r ? i(r) : r),
      le = te[0],
      ze = te[1],
      de = a.useState(null),
      ne = de[0],
      re = de[1],
      ie = a.useState([]),
      ce = ie[0],
      ue = ie[1],
      fe = a.useState(U.current === M),
      Ee = fe[0],
      he = fe[1],
      pe = a.useState(U.current === s),
      oe = pe[0],
      se = pe[1],
      Me = a.useState({ getBoundingClientRect: u(), contextElement: null }),
      Se = Me[0],
      Ne = Me[1],
      ye = a.useState(null),
      Ae = ye[0],
      ge = ye[1],
      be = a.useState(!1),
      Ce = be[0],
      ve = be[1],
      Be = a.useState(""),
      Ie = Be[0],
      xe = Be[1],
      Ge = a.useState(""),
      ke = Ge[0],
      Te = Ge[1],
      Le = a.useState(null),
      Re = Le[0],
      we = Le[1],
      De = a.useState(null),
      Pe = De[0],
      Ke = De[1],
      Oe = a.useState(!1),
      Fe = Oe[0],
      We = Oe[1],
      Ue = a.useState(""),
      He = Ue[0],
      Ve = Ue[1],
      Ze = t.usePopper(Se, Ae),
      Ye = Ze.styles,
      Je = Ze.attributes,
      Qe = t.usePopper(Pe, Re),
      je = Qe.styles,
      qe = Qe.attributes,
      Xe = a.useRef(null),
      _e = z.default("vector-map", Xe.current && "vector-map-dragged", l),
      $e = function (e, a) {
        var m = e.fill,
          t = e.x,
          l = e.y,
          z = e.r;
        void 0 === a && (a = !1);
        var d = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
          ),
          n = z / U.current;
        return (
          d.setAttribute("cx", t),
          d.setAttribute("cy", l),
          d.setAttribute("r", "".concat(n)),
          d.setAttribute("strokeWidth", "0"),
          d.setAttribute("fill", m),
          d.setAttribute("opacity", a ? "0.3" : "1"),
          a &&
            (d.classList.add("animated-circle"),
            (d.innerHTML = '<animate attributeName="r" values="'
              .concat(n, ";")
              .concat(2 * n, ";")
              .concat(
                n,
                '" dur="4s" repeatCount="indefinite" />\n      <animate attributeName="opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite" />\n      '
              ))),
          d
        );
      },
      ea = function (e) {
        var a = e.height,
          m = e.radius,
          t = e.x,
          l = e.y,
          z = a - m,
          d = Math.acos(m / z),
          n = m * Math.sin(d),
          r = (a * (a - 2 * m)) / z;
        return "M "
          .concat(t, ",")
          .concat(l, " \n      l ")
          .concat(-n, ",")
          .concat(-r, "\n      A ")
          .concat(m, " ")
          .concat(m, " 1 1 1 ")
          .concat(t + n, ",")
          .concat(l - r, " \n      l 0,0 z");
      },
      aa = a.useCallback(function (e) {
        var a = e.x,
          m = e.y,
          t = e.height,
          l = e.radius,
          z = e.stroke,
          d = e.strokeWidth,
          n = e.fill,
          r = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return (
          r.setAttribute("d", ea({ height: t, radius: l, x: a, y: m })),
          r.setAttribute("stroke", z),
          r.setAttribute("strokeWidth", "".concat(d / U.current)),
          r.setAttribute("fill", n),
          r
        );
      }, []),
      ma = a.useCallback(
        function (e) {
          var a = {
              height: 40 / U.current,
              radius: 14 / U.current,
              innerRadius: (14 / U.current) * 0.5,
            },
            m = document.createElementNS("http://www.w3.org/2000/svg", "g"),
            t = (function (e) {
              var a = e.x,
                m = e.y,
                t = e.height,
                l = e.radius,
                z = e.innerRadius,
                d = e.stroke,
                n = e.innerFill,
                r = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "circle"
                );
              return (
                r.classList.add("pin-inner-circle"),
                r.setAttribute("strokeWidth", "0"),
                r.setAttribute("stroke", d),
                r.setAttribute("cx", a),
                r.setAttribute("cy", "".concat(m - (t + l) / 2)),
                r.setAttribute("r", z),
                r.setAttribute("fill", n),
                r
              );
            })(n(n({}, e), a)),
            l = aa(n(n({}, e), a)),
            z = (function (e) {
              var a = e.x,
                m = e.y,
                t = e.innerRadius,
                l = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "circle"
                );
              return (
                l.classList.add("pin-shadow-circle"),
                l.setAttribute("strokeWidth", "0"),
                l.setAttribute("cx", a),
                l.setAttribute("cy", m),
                l.setAttribute("r", "".concat(t / 2)),
                l.setAttribute("fill", "rgba(0, 0, 0, 0.2)"),
                l
              );
            })(n(n({}, e), a));
          return m.appendChild(z), m.appendChild(l), m.appendChild(t), m;
        },
        [aa]
      ),
      ta = a.useCallback(
        function () {
          (null == L
            ? void 0
            : L.map(function (e) {
                var a = n(n({ r: 5, x: 0, y: 0 }, e), {
                  fill: e.fill || R,
                  stroke: e.stroke || w,
                  innerFill: e.innerFill || D,
                  strokeWidth: e.strokeWidth || P,
                });
                return (
                  "bullet" === e.type
                    ? ((a.node = $e(a)),
                      (a.tooltipNode = a.node),
                      (a.animationNode = $e(a, !0)))
                    : (a.node = ma(a)),
                  a.label &&
                    (a.node.addEventListener("mouseover", function () {
                      Ve(a.label), We(!0), Ke(a.node);
                    }),
                    a.node.addEventListener("mouseout", function () {
                      We(!1);
                    })),
                  a
                );
              })
          ).forEach(function (e) {
            "bullet" === e.type &&
              (null == ae || ae.appendChild(e.animationNode)),
              e.node.classList.add("vector-map-marker"),
              null == ae || ae.appendChild(e.node);
          });
        },
        [ma, R, D, w, P, L, ae]
      ),
      la = function (e) {
        e.style.transform = "matrix("
          .concat(U.current, ", 0, 0, ")
          .concat(U.current, ", ")
          .concat(V.current, ", ")
          .concat(Z.current, ")");
      },
      za = function () {
        (V.current = 0), (Z.current = 0);
      },
      da = function (e) {
        return !((U.current === s && e > 0) || (U.current === M && e < 0));
      },
      na = a.useCallback(
        function () {
          var e = W.current.getBoundingClientRect(),
            a = W.current.children[0].getBoundingClientRect();
          return {
            left: e.left - a.left,
            top: e.top - a.top,
            right: a.right - e.right,
            bottom: a.bottom - e.bottom,
          };
        },
        [W]
      ),
      ra = a.useCallback(
        function (e) {
          var a = e.x,
            m = e.y,
            t = na(),
            l = V.current,
            z = Z.current;
          return (
            ((a < 0 && t.right > 0) || (a > 0 && t.left > 0)) && (l += a),
            ((m > 0 && t.top > 0) || (m < 0 && t.bottom > 0)) && (z += m),
            { x: l, y: z }
          );
        },
        [na]
      ),
      ia = function (e, a) {
        if (da(a) && N) {
          var m,
            t = U.current + a;
          t <= M
            ? ((U.current = M),
              he(!0),
              (H.current = ra({
                x: (m = W.current.getBoundingClientRect()).width / 2,
                y: m.height / 2,
              })),
              la(ae),
              la(ae),
              za())
            : null !== s && t >= s
            ? ((U.current = s), se(!0))
            : ((U.current = t), se(!1), he(!1));
          var l = null == ae ? void 0 : ae.querySelectorAll(".animated-circle"),
            z =
              null == ae ? void 0 : ae.querySelectorAll("g.vector-map-marker");
          null == l ||
            l.forEach(function (e) {
              var a = e.nextSibling,
                m = 5 / U.current;
              e.querySelector("animate").setAttribute(
                "values",
                ""
                  .concat(m, ";")
                  .concat(2 * m, ";")
                  .concat(m)
              ),
                e.setAttribute("r", m),
                a.setAttribute("r", m);
            }),
            null == z ||
              z.forEach(function (e, a) {
                var m = {
                    height: 40 / U.current,
                    radius: 14 / U.current,
                    innerRadius: (14 / U.current) * 0.5,
                  },
                  t = L[a].strokeWidth || P,
                  l = e.querySelector("path"),
                  z = e.querySelector(".pin-inner-circle"),
                  d = e.querySelector(".pin-shadow-circle"),
                  n = L[a].x,
                  r = L[a].y;
                l.setAttribute(
                  "d",
                  ea({
                    height: 40 / U.current,
                    radius: 14 / U.current,
                    x: n,
                    y: r,
                  })
                ),
                  l.setAttribute("strokeWidth", t / U.current),
                  z.setAttribute("cy", r - (m.height + m.radius) / 2),
                  z.setAttribute("r", m.innerRadius),
                  d.setAttribute("r", m.innerRadius / 2);
              }),
            la(ae);
        }
      },
      ca = function (e) {
        var a = c(e),
          m = (e.deltaY < 0 ? 1 : -1) * S;
        if (da(m)) {
          var t,
            l,
            z,
            d,
            n,
            r,
            i =
              ((t = a),
              (l = W.current.children[0].getBoundingClientRect()),
              (z = (t.x - l.x) / U.current),
              (d = (t.y - l.y) / U.current),
              (n = (z - H.current.x - V.current) / U.current),
              (r = (d - H.current.y - Z.current) / U.current),
              { x: H.current.x + n, y: H.current.y + r });
          (H.current = i),
            (ae.style.transformOrigin = ""
              .concat(H.current.x, "px ")
              .concat(H.current.y, "px")),
            za(),
            la(ae),
            ia(0, m);
        }
      },
      ua = a.useCallback(function (e) {
        (e.touches && e.touches.length > 1) || (Xe.current = c(e));
      }, []),
      fa = a.useCallback(
        function (e) {
          if (!(e.touches && e.touches.length > 1) && Xe.current) {
            e.preventDefault();
            var a,
              m,
              t = c(e),
              l = ra(
                ((a = t), (m = Xe.current), { x: a.x - m.x, y: a.y - m.y })
              );
            (V.current = l.x), (Z.current = l.y), (Xe.current = t), la(ae);
          }
        },
        [ae, ra]
      ),
      Ea = a.useCallback(function () {
        Xe.current = null;
      }, []),
      ha = a.useCallback(function (e) {
        e.preventDefault();
      }, []);
    a.useEffect(
      function () {
        var e;
        ae &&
          (((e = ae).style.transform = "matrix("
            .concat(U.current, ", 0, 0, ")
            .concat(U.current, ", ")
            .concat(V.current, ", ")
            .concat(Z.current, ")")),
          (e.style.width = J.current),
          (e.style.height = Q.current),
          (e.style.fill = Y.current),
          (e.style.fillOpacity = j.current),
          (e.style.stroke = q.current),
          (e.style.strokeOpacity = X.current),
          (e.style.strokeWidth = $.current / U.current),
          (e.style.strokeLinejoin = _.current));
      },
      [ae]
    ),
      a.useEffect(
        function () {
          var e = Object.values(ce).find(function (e) {
            return e.getAttribute("name") === E || e.getAttribute("id") === E;
          });
          e && re(e);
        },
        [ce, E]
      ),
      a.useEffect(
        function () {
          ce.forEach(function (e) {
            return e.setAttribute("fill", null);
          }),
            ne && ne.setAttribute("fill", p);
        },
        [ne, p, ce]
      ),
      a.useEffect(
        function () {
          ze("string" == typeof r ? i(r) : r);
        },
        [r]
      ),
      a.useEffect(
        function () {
          var e =
            null == ae ? void 0 : ae.querySelectorAll(".vector-map-marker");
          null == e ||
            e.forEach(function (e) {
              e.remove();
            }),
            L && L.length > 0 && ta();
        },
        [L, ta, ae]
      ),
      a.useEffect(
        function () {
          var e = W.current,
            a = e.children[0];
          return (
            me(a),
            e.addEventListener("wheel", ha, { passive: !1 }),
            function () {
              e.removeEventListener("wheel", ha);
            }
          );
        },
        [W, ha, ua]
      ),
      a.useEffect(
        function () {
          ce.forEach(function (e) {
            var a,
              m = e.getAttribute("id");
            A &&
              A.forEach(function (t) {
                t.regions.includes(m) && (a = t.fill),
                  t.tooltip && e.setAttribute("");
              }),
              e.setAttribute("fill", a);
          });
        },
        [A, ce]
      );
    var pa = a.useCallback(
        function (e, a, m) {
          if ((g && e.setAttribute("fill", a), T)) {
            ve(m), xe(e.getAttribute("name"));
            var t = e.getAttribute("tooltip");
            t && Te(t);
          }
        },
        [T, g]
      ),
      oa = a.useCallback(function (e, a) {
        Ne({
          getBoundingClientRect: u(e.clientX, e.clientY),
          contextElement: a,
        });
      }, []);
    return (
      a.useEffect(
        function () {
          return (
            ce.forEach(function (e) {
              var a = e.getAttribute("fill");
              e.addEventListener("mouseover", function () {
                return pa(e, f, !0);
              }),
                e.addEventListener("mouseout", function () {
                  return pa(e, a, !1);
                }),
                e.addEventListener("mousemove", function (a) {
                  return oa(a, e);
                }),
                h ||
                  e.addEventListener("click", function () {
                    re(e);
                  });
            }),
            function () {
              ce.forEach(function (e) {
                var a = e.getAttribute("fill");
                e.removeEventListener("mouseover", function () {
                  return pa(e, f, !0);
                }),
                  e.removeEventListener("mousemove", function (a) {
                    return oa(a, e);
                  }),
                  e.removeEventListener("mouseout", function () {
                    return pa(e, a, !1);
                  });
              });
            }
          );
        },
        [ce, f, E, ne, p, h, A, oa, pa]
      ),
      a.useEffect(
        function () {
          var e = W.current.querySelectorAll("path");
          ue(e);
        },
        [W]
      ),
      d.default.createElement(
        "div",
        n(
          {
            onMouseDown: function (e) {
              return ua(e);
            },
            onMouseMove: function (e) {
              return fa(e);
            },
            onMouseUp: Ea,
            onWheel: function (e) {
              return ca(e);
            },
            className: _e,
            ref: W,
          },
          O
        ),
        le,
        d.default.createElement(
          "div",
          { className: "vector-map-toolbar" },
          d.default.createElement(
            m.MDBBtn,
            {
              onClick: function (e) {
                return ia(0, S);
              },
              disabled: oe,
              floating: !0,
              className: "zoom-in ".concat(K),
            },
            d.default.createElement(m.MDBIcon, { fas: !0, icon: "plus" })
          ),
          d.default.createElement(
            m.MDBBtn,
            {
              onClick: function (e) {
                return ia(0, -1 * S);
              },
              disabled: Ee,
              floating: !0,
              className: "zoom-out ".concat(K),
            },
            d.default.createElement(m.MDBIcon, { fas: !0, icon: "minus" })
          )
        ),
        d.default.createElement(
          "div",
          n(
            {
              className: "vector-map-tooltip ".concat(Ce && ""),
              ref: ge,
              style: Ye.popper,
            },
            Je.popper
          ),
          d.default.createElement("strong", null, Ie),
          ke || ""
        ),
        d.default.createElement(
          "div",
          n(
            {
              className: "vector-map-tooltip ".concat(Fe && ""),
              ref: we,
              style: je.popper,
            },
            qe.popper
          ),
          d.default.createElement("strong", null, He)
        )
      )
    );
  };
(f.defaultProps = {
  map: "world",
  fill: "#E0E0E0",
  fillOpacity: 1,
  height: null,
  width: null,
  hoverFill: "#BDBDBD",
  stroke: "#000",
  strokeLinejoin: "round",
  strokeOpacity: 1,
  strokeWidth: 0.5,
  zoomEvents: !0,
  zoomMin: 1,
  zoomMax: null,
  zoomStep: 0.5,
  scale: 1,
  selectRegion: "",
  selectFill: "#B23CFD",
  hover: !0,
  tooltips: !0,
  markers: [],
  markerFill: "#757575",
  markerStroke: "#000",
  markerInnerFill: "rgba(0, 0, 0, 0.3)",
  markerStrokeWidth: 1.2,
  btnClass: "",
}),
  (exports.MDBVectorMap = f);
