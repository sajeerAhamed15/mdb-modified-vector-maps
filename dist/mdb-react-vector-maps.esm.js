import e from "clsx";
import m, {
  useRef as a,
  useState as t,
  useCallback as z,
  useEffect as n,
} from "react";
import { MDBBtn as l, MDBIcon as r } from "mdb-react-ui-kit";
import { usePopper as d } from "react-popper";
var i = function () {
  return (
    (i =
      Object.assign ||
      function (e) {
        for (var m, a = 1, t = arguments.length; a < t; a++)
          for (var z in (m = arguments[a]))
            Object.prototype.hasOwnProperty.call(m, z) && (e[z] = m[z]);
        return e;
      }),
    i.apply(this, arguments)
  );
};
var c = {
    world: m.createElement(
      "svg",
      { viewBox: "-20 0 1060 800" },
      m.createElement("path", {
        d: "m 479.68275,331.6274 -0.077,0.025 -0.258,0.155 -0.147,0.054 -0.134,0.027 -0.105,-0.011 -0.058,-0.091 0.006,-0.139 -0.024,-0.124 -0.02,-0.067 0.038,-0.181 0.086,-0.097 0.119,-0.08 0.188,0.029 0.398,0.116 0.083,0.109 10e-4,0.072 -0.073,0.119 z",
        name: "Andorra",
        id: "AD",
      })
    )
  },
  h = function (e) {
    var m = Object.keys(c);
    return Object.values(c)[m.indexOf(e)];
  },
  E = function (e) {
    if (e.touches) {
      var m = e.touches[0];
      return { x: m.clientX, y: m.clientY };
    }
    return { x: e.clientX, y: e.clientY };
  },
  p = function (e, m) {
    return (
      void 0 === e && (e = 0),
      void 0 === m && (m = 0),
      function () {
        return {
          width: 0,
          height: 0,
          top: m + 20,
          right: e,
          bottom: m + 20,
          left: e,
        };
      }
    );
  },
  o = function (c) {
    var o = c.className,
      s = c.map,
      M = c.hoverFill,
      u = c.selectRegion,
      N = c.readonly,
      y = c.selectFill,
      S = c.mapRef,
      A = c.zoomMax,
      g = c.zoomMin,
      b = c.zoomStep,
      f = c.zoomEvents,
      C = c.scale,
      v = c.colorMap,
      B = c.hover,
      I = c.fill,
      x = c.width,
      G = c.height,
      T = c.fillOpacity,
      L = c.stroke,
      k = c.strokeOpacity,
      w = c.strokeWidth,
      R = c.strokeLinejoin,
      P = c.tooltips,
      D = c.markers,
      K = c.markerFill,
      O = c.markerStroke,
      F = c.markerInnerFill,
      W = c.markerStrokeWidth,
      U = c.btnClass,
      H = (function (e, m) {
        var a = {};
        for (var t in e)
          Object.prototype.hasOwnProperty.call(e, t) &&
            m.indexOf(t) < 0 &&
            (a[t] = e[t]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var z = 0;
          for (t = Object.getOwnPropertySymbols(e); z < t.length; z++)
            m.indexOf(t[z]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, t[z]) &&
              (a[t[z]] = e[t[z]]);
        }
        return a;
      })(c, [
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
      V = a(null),
      Z = S || V,
      Y = a(C),
      J = a({ x: 0, y: 0 }),
      Q = a(0),
      j = a(0),
      q = a(I),
      X = a(x),
      $ = a(G),
      _ = a(T),
      ee = a(L),
      me = a(k),
      ae = a(R),
      te = a(w),
      ze = t(null),
      ne = ze[0],
      le = ze[1],
      re = t("string" == typeof s ? h(s) : s),
      de = re[0],
      ie = re[1],
      ce = t(null),
      he = ce[0],
      Ee = ce[1],
      pe = t([]),
      oe = pe[0],
      se = pe[1],
      Me = t(Y.current === g),
      ue = Me[0],
      Ne = Me[1],
      ye = t(Y.current === A),
      Se = ye[0],
      Ae = ye[1],
      ge = t({ getBoundingClientRect: p(), contextElement: null }),
      be = ge[0],
      fe = ge[1],
      Ce = t(null),
      ve = Ce[0],
      Be = Ce[1],
      Ie = t(!1),
      xe = Ie[0],
      Ge = Ie[1],
      Te = t(""),
      Le = Te[0],
      ke = Te[1],
      we = t(""),
      Re = we[0],
      Pe = we[1],
      De = t(null),
      Ke = De[0],
      Oe = De[1],
      Fe = t(null),
      We = Fe[0],
      Ue = Fe[1],
      He = t(!1),
      Ve = He[0],
      Ze = He[1],
      Ye = t(""),
      Je = Ye[0],
      Qe = Ye[1],
      je = d(be, ve),
      qe = je.styles,
      Xe = je.attributes,
      $e = d(We, Ke),
      _e = $e.styles,
      em = $e.attributes,
      mm = a(null),
      am = e("vector-map", mm.current && "vector-map-dragged", o),
      tm = function (e, m) {
        var a = e.fill,
          t = e.x,
          z = e.y,
          n = e.r;
        void 0 === m && (m = !1);
        var l = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
          ),
          r = n / Y.current;
        return (
          l.setAttribute("cx", t),
          l.setAttribute("cy", z),
          l.setAttribute("r", "".concat(r)),
          l.setAttribute("strokeWidth", "0"),
          l.setAttribute("fill", a),
          l.setAttribute("opacity", m ? "0.3" : "1"),
          m &&
            (l.classList.add("animated-circle"),
            (l.innerHTML = '<animate attributeName="r" values="'
              .concat(r, ";")
              .concat(2 * r, ";")
              .concat(
                r,
                '" dur="4s" repeatCount="indefinite" />\n      <animate attributeName="opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite" />\n      '
              ))),
          l
        );
      },
      zm = function (e) {
        var m = e.height,
          a = e.radius,
          t = e.x,
          z = e.y,
          n = m - a,
          l = Math.acos(a / n),
          r = a * Math.sin(l),
          d = (m * (m - 2 * a)) / n;
        return "M "
          .concat(t, ",")
          .concat(z, " \n      l ")
          .concat(-r, ",")
          .concat(-d, "\n      A ")
          .concat(a, " ")
          .concat(a, " 1 1 1 ")
          .concat(t + r, ",")
          .concat(z - d, " \n      l 0,0 z");
      },
      nm = z(function (e) {
        var m = e.x,
          a = e.y,
          t = e.height,
          z = e.radius,
          n = e.stroke,
          l = e.strokeWidth,
          r = e.fill,
          d = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return (
          d.setAttribute("d", zm({ height: t, radius: z, x: m, y: a })),
          d.setAttribute("stroke", n),
          d.setAttribute("strokeWidth", "".concat(l / Y.current)),
          d.setAttribute("fill", r),
          d
        );
      }, []),
      lm = z(
        function (e) {
          var m = {
              height: 40 / Y.current,
              radius: 14 / Y.current,
              innerRadius: (14 / Y.current) * 0.5,
            },
            a = document.createElementNS("http://www.w3.org/2000/svg", "g"),
            t = (function (e) {
              var m = e.x,
                a = e.y,
                t = e.height,
                z = e.radius,
                n = e.innerRadius,
                l = e.stroke,
                r = e.innerFill,
                d = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "circle"
                );
              return (
                d.classList.add("pin-inner-circle"),
                d.setAttribute("strokeWidth", "0"),
                d.setAttribute("stroke", l),
                d.setAttribute("cx", m),
                d.setAttribute("cy", "".concat(a - (t + z) / 2)),
                d.setAttribute("r", n),
                d.setAttribute("fill", r),
                d
              );
            })(i(i({}, e), m)),
            z = nm(i(i({}, e), m)),
            n = (function (e) {
              var m = e.x,
                a = e.y,
                t = e.innerRadius,
                z = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "circle"
                );
              return (
                z.classList.add("pin-shadow-circle"),
                z.setAttribute("strokeWidth", "0"),
                z.setAttribute("cx", m),
                z.setAttribute("cy", a),
                z.setAttribute("r", "".concat(t / 2)),
                z.setAttribute("fill", "rgba(0, 0, 0, 0.2)"),
                z
              );
            })(i(i({}, e), m));
          return a.appendChild(n), a.appendChild(z), a.appendChild(t), a;
        },
        [nm]
      ),
      rm = z(
        function () {
          (null == D
            ? void 0
            : D.map(function (e) {
                var m = i(i({ r: 5, x: 0, y: 0 }, e), {
                  fill: e.fill || K,
                  stroke: e.stroke || O,
                  innerFill: e.innerFill || F,
                  strokeWidth: e.strokeWidth || W,
                });
                return (
                  "bullet" === e.type
                    ? ((m.node = tm(m)),
                      (m.tooltipNode = m.node),
                      (m.animationNode = tm(m, !0)))
                    : (m.node = lm(m)),
                  m.label &&
                    (m.node.addEventListener("mouseover", function () {
                      Qe(m.label), Ze(!0), Ue(m.node);
                    }),
                    m.node.addEventListener("mouseout", function () {
                      Ze(!1);
                    })),
                  m
                );
              })
          ).forEach(function (e) {
            "bullet" === e.type &&
              (null == ne || ne.appendChild(e.animationNode)),
              e.node.classList.add("vector-map-marker"),
              null == ne || ne.appendChild(e.node);
          });
        },
        [lm, K, F, O, W, D, ne]
      ),
      dm = function (e) {
        e.style.transform = "matrix("
          .concat(Y.current, ", 0, 0, ")
          .concat(Y.current, ", ")
          .concat(Q.current, ", ")
          .concat(j.current, ")");
      },
      im = function () {
        (Q.current = 0), (j.current = 0);
      },
      cm = function (e) {
        return !((Y.current === A && e > 0) || (Y.current === g && e < 0));
      },
      hm = z(
        function () {
          var e = Z.current.getBoundingClientRect(),
            m = Z.current.children[0].getBoundingClientRect();
          return {
            left: e.left - m.left,
            top: e.top - m.top,
            right: m.right - e.right,
            bottom: m.bottom - e.bottom,
          };
        },
        [Z]
      ),
      Em = z(
        function (e) {
          var m = e.x,
            a = e.y,
            t = hm(),
            z = Q.current,
            n = j.current;
          return (
            ((m < 0 && t.right > 0) || (m > 0 && t.left > 0)) && (z += m),
            ((a > 0 && t.top > 0) || (a < 0 && t.bottom > 0)) && (n += a),
            { x: z, y: n }
          );
        },
        [hm]
      ),
      pm = function (e, m) {
        if (cm(m) && f) {
          var a,
            t = Y.current + m;
          t <= g
            ? ((Y.current = g),
              Ne(!0),
              (J.current = Em({
                x: (a = Z.current.getBoundingClientRect()).width / 2,
                y: a.height / 2,
              })),
              dm(ne),
              dm(ne),
              im())
            : null !== A && t >= A
            ? ((Y.current = A), Ae(!0))
            : ((Y.current = t), Ae(!1), Ne(!1));
          var z = null == ne ? void 0 : ne.querySelectorAll(".animated-circle"),
            n =
              null == ne ? void 0 : ne.querySelectorAll("g.vector-map-marker");
          null == z ||
            z.forEach(function (e) {
              var m = e.nextSibling,
                a = 5 / Y.current;
              e.querySelector("animate").setAttribute(
                "values",
                ""
                  .concat(a, ";")
                  .concat(2 * a, ";")
                  .concat(a)
              ),
                e.setAttribute("r", a),
                m.setAttribute("r", a);
            }),
            null == n ||
              n.forEach(function (e, m) {
                var a = {
                    height: 40 / Y.current,
                    radius: 14 / Y.current,
                    innerRadius: (14 / Y.current) * 0.5,
                  },
                  t = D[m].strokeWidth || W,
                  z = e.querySelector("path"),
                  n = e.querySelector(".pin-inner-circle"),
                  l = e.querySelector(".pin-shadow-circle"),
                  r = D[m].x,
                  d = D[m].y;
                z.setAttribute(
                  "d",
                  zm({
                    height: 40 / Y.current,
                    radius: 14 / Y.current,
                    x: r,
                    y: d,
                  })
                ),
                  z.setAttribute("strokeWidth", t / Y.current),
                  n.setAttribute("cy", d - (a.height + a.radius) / 2),
                  n.setAttribute("r", a.innerRadius),
                  l.setAttribute("r", a.innerRadius / 2);
              }),
            dm(ne);
        }
      },
      om = function (e) {
        var m = E(e),
          a = (e.deltaY < 0 ? 1 : -1) * b;
        if (cm(a)) {
          var t,
            z,
            n,
            l,
            r,
            d,
            i =
              ((t = m),
              (z = Z.current.children[0].getBoundingClientRect()),
              (n = (t.x - z.x) / Y.current),
              (l = (t.y - z.y) / Y.current),
              (r = (n - J.current.x - Q.current) / Y.current),
              (d = (l - J.current.y - j.current) / Y.current),
              { x: J.current.x + r, y: J.current.y + d });
          (J.current = i),
            (ne.style.transformOrigin = ""
              .concat(J.current.x, "px ")
              .concat(J.current.y, "px")),
            im(),
            dm(ne),
            pm(0, a);
        }
      },
      sm = z(function (e) {
        (e.touches && e.touches.length > 1) || (mm.current = E(e));
      }, []),
      Mm = z(
        function (e) {
          if (!(e.touches && e.touches.length > 1) && mm.current) {
            e.preventDefault();
            var m,
              a,
              t = E(e),
              z = Em(
                ((m = t), (a = mm.current), { x: m.x - a.x, y: m.y - a.y })
              );
            (Q.current = z.x), (j.current = z.y), (mm.current = t), dm(ne);
          }
        },
        [ne, Em]
      ),
      um = z(function () {
        mm.current = null;
      }, []),
      Nm = z(function (e) {
        e.preventDefault();
      }, []);
    n(
      function () {
        var e;
        ne &&
          (((e = ne).style.transform = "matrix("
            .concat(Y.current, ", 0, 0, ")
            .concat(Y.current, ", ")
            .concat(Q.current, ", ")
            .concat(j.current, ")")),
          (e.style.width = X.current),
          (e.style.height = $.current),
          (e.style.fill = q.current),
          (e.style.fillOpacity = _.current),
          (e.style.stroke = ee.current),
          (e.style.strokeOpacity = me.current),
          (e.style.strokeWidth = te.current / Y.current),
          (e.style.strokeLinejoin = ae.current));
      },
      [ne]
    ),
      n(
        function () {
          var e = Object.values(oe).find(function (e) {
            return e.getAttribute("name") === u || e.getAttribute("id") === u;
          });
          e && Ee(e);
        },
        [oe, u]
      ),
      n(
        function () {
          oe.forEach(function (e) {
            return e.setAttribute("fill", null);
          }),
            he && he.setAttribute("fill", y);
        },
        [he, y, oe]
      ),
      n(
        function () {
          ie("string" == typeof s ? h(s) : s);
        },
        [s]
      ),
      n(
        function () {
          var e =
            null == ne ? void 0 : ne.querySelectorAll(".vector-map-marker");
          null == e ||
            e.forEach(function (e) {
              e.remove();
            }),
            D && D.length > 0 && rm();
        },
        [D, rm, ne]
      ),
      n(
        function () {
          var e = Z.current,
            m = e.children[0];
          return (
            le(m),
            e.addEventListener("wheel", Nm, { passive: !1 }),
            function () {
              e.removeEventListener("wheel", Nm);
            }
          );
        },
        [Z, Nm, sm]
      ),
      n(
        function () {
          oe.forEach(function (e) {
            var m,
              a = e.getAttribute("id");
            v &&
              v.forEach(function (t) {
                t.regions.includes(a) && (m = t.fill),
                  t.tooltip && e.setAttribute("");
              }),
              e.setAttribute("fill", m);
          });
        },
        [v, oe]
      );
    var ym = z(
        function (e, m, a) {
          if ((B && e.setAttribute("fill", m), P)) {
            Ge(a), ke(e.getAttribute("name"));
            var t = e.getAttribute("tooltip");
            t && Pe(t);
          }
        },
        [P, B]
      ),
      Sm = z(function (e, m) {
        fe({
          getBoundingClientRect: p(e.clientX, e.clientY),
          contextElement: m,
        });
      }, []);
    return (
      n(
        function () {
          return (
            oe.forEach(function (e) {
              var m = e.getAttribute("fill");
              e.addEventListener("mouseover", function () {
                return ym(e, M, !0);
              }),
                e.addEventListener("mouseout", function () {
                  return ym(e, m, !1);
                }),
                e.addEventListener("mousemove", function (m) {
                  return Sm(m, e);
                }),
                N ||
                  e.addEventListener("click", function () {
                    Ee(e);
                  });
            }),
            function () {
              oe.forEach(function (e) {
                var m = e.getAttribute("fill");
                e.removeEventListener("mouseover", function () {
                  return ym(e, M, !0);
                }),
                  e.removeEventListener("mousemove", function (m) {
                    return Sm(m, e);
                  }),
                  e.removeEventListener("mouseout", function () {
                    return ym(e, m, !1);
                  });
              });
            }
          );
        },
        [oe, M, u, he, y, N, v, Sm, ym]
      ),
      n(
        function () {
          var e = Z.current.querySelectorAll("path");
          se(e);
        },
        [Z]
      ),
      m.createElement(
        "div",
        i(
          {
            onMouseDown: function (e) {
              return sm(e);
            },
            onMouseMove: function (e) {
              return Mm(e);
            },
            onMouseUp: um,
            onWheel: function (e) {
              return om(e);
            },
            className: am,
            ref: Z,
          },
          H
        ),
        de,
        m.createElement(
          "div",
          { className: "vector-map-toolbar" },
          m.createElement(
            l,
            {
              onClick: function (e) {
                return pm(0, b);
              },
              disabled: Se,
              floating: !0,
              className: "zoom-in ".concat(U),
            },
            m.createElement(r, { fas: !0, icon: "plus" })
          ),
          m.createElement(
            l,
            {
              onClick: function (e) {
                return pm(0, -1 * b);
              },
              disabled: ue,
              floating: !0,
              className: "zoom-out ".concat(U),
            },
            m.createElement(r, { fas: !0, icon: "minus" })
          )
        ),
        m.createElement(
          "div",
          i(
            {
              className: "vector-map-tooltip ".concat(xe && ""),
              ref: Be,
              style: qe.popper,
            },
            Xe.popper
          ),
          m.createElement("strong", null, Le),
          Re || ""
        ),
        m.createElement(
          "div",
          i(
            {
              className: "vector-map-tooltip ".concat(Ve && ""),
              ref: Oe,
              style: _e.popper,
            },
            em.popper
          ),
          m.createElement("strong", null, Je)
        )
      )
    );
  };
o.defaultProps = {
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
};
export { o as MDBVectorMap };
