import {
  CommonModule,
  NgIf,
  NgStyle
} from "./chunk-YBCPKXH5.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵtemplate
} from "./chunk-JSFEMK6X.js";
import "./chunk-E5ECCKE6.js";
import {
  __commonJS
} from "./chunk-3OV72XIM.js";

// node_modules/@canvasjs/charts/canvasjs.min.js
var require_canvasjs_min = __commonJS({
  "node_modules/@canvasjs/charts/canvasjs.min.js"(exports, module) {
    (function() {
      function ra(h, E) {
        h.prototype = fb(E.prototype);
        h.prototype.constructor = h;
        h.base = E.prototype;
      }
      function fb(h) {
        function E() {
        }
        E.prototype = h;
        return new E();
      }
      function Ta(h, E, m2) {
        "millisecond" === m2 ? h.setMilliseconds(h.getMilliseconds() + 1 * E) : "second" === m2 ? h.setSeconds(h.getSeconds() + 1 * E) : "minute" === m2 ? h.setMinutes(h.getMinutes() + 1 * E) : "hour" === m2 ? h.setHours(h.getHours() + 1 * E) : "day" === m2 ? h.setDate(h.getDate() + 1 * E) : "week" === m2 ? h.setDate(h.getDate() + 7 * E) : "month" === m2 ? h.setMonth(h.getMonth() + 1 * E) : "year" === m2 && h.setFullYear(h.getFullYear() + 1 * E);
        return h;
      }
      function ia(h, E) {
        var m2 = false;
        0 > h && (m2 = true, h *= -1);
        h = "" + h;
        for (E = E ? E : 1; h.length < E; ) h = "0" + h;
        return m2 ? "-" + h : h;
      }
      function Ia(h) {
        if (!h) return h;
        h = h.replace(/^\s\s*/, "");
        for (var E = /\s/, m2 = h.length; E.test(h.charAt(--m2)); ) ;
        return h.slice(0, m2 + 1);
      }
      function Aa(h) {
        h.roundRect = function(h2, m2, u2, V, qa, A, s2, x2) {
          s2 && (this.fillStyle = s2);
          x2 && (this.strokeStyle = x2);
          "undefined" === typeof qa && (qa = 5);
          qa = Math.min(qa, Math.min(u2, V) / 2);
          this.lineWidth = A;
          this.beginPath();
          this.moveTo(h2 + qa, m2);
          this.lineTo(h2 + u2 - qa, m2);
          this.quadraticCurveTo(h2 + u2, m2, h2 + u2, m2 + qa);
          this.lineTo(h2 + u2, m2 + V - qa);
          this.quadraticCurveTo(h2 + u2, m2 + V, h2 + u2 - qa, m2 + V);
          this.lineTo(h2 + qa, m2 + V);
          this.quadraticCurveTo(h2, m2 + V, h2, m2 + V - qa);
          this.lineTo(h2, m2 + qa);
          this.quadraticCurveTo(h2, m2, h2 + qa, m2);
          this.closePath();
          s2 && this.fill();
          x2 && 0 < A && this.stroke();
        };
      }
      function Ua(h, E) {
        return h - E;
      }
      function X(h) {
        var E = ((h & 16711680) >> 16).toString(16), m2 = ((h & 65280) >> 8).toString(16);
        h = ((h & 255) >> 0).toString(16);
        E = 2 > E.length ? "0" + E : E;
        m2 = 2 > m2.length ? "0" + m2 : m2;
        h = 2 > h.length ? "0" + h : h;
        return "#" + E + m2 + h;
      }
      function gb(h, E) {
        var m2 = this.length >>> 0, u2 = Number(E) || 0, u2 = 0 > u2 ? Math.ceil(u2) : Math.floor(u2);
        for (0 > u2 && (u2 += m2); u2 < m2; u2++) if (u2 in this && this[u2] === h) return u2;
        return -1;
      }
      function m(h) {
        return null === h || "undefined" === typeof h;
      }
      function Ba(h) {
        h.indexOf || (h.indexOf = gb);
        return h;
      }
      function hb(h) {
        if (S.fSDec) h[na("`eeDwdouMhrudods")](na("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
          S._fTWm && S._fTWm(h);
        });
      }
      function $a(h, E, m2) {
        m2 = m2 || "normal";
        var u2 = h + "_" + E + "_" + m2, V = ab[u2];
        if (isNaN(V)) {
          try {
            if (!ta) {
              var qa = document.body;
              ta = document.createElement("span");
              ta.innerHTML = "";
              var A = document.createTextNode("Mpgyi");
              ta.appendChild(A);
              qa.appendChild(ta);
            }
            ta.style.display = "";
            Q(ta, { position: "absolute", left: "0px", top: "-20000px", padding: "0px", margin: "0px", border: "none", whiteSpace: "pre", lineHeight: "normal", fontFamily: h, fontSize: E + "px", fontWeight: m2 });
            V = Math.round(ta.offsetHeight);
            ta.style.display = "none";
          } catch (s2) {
            V = Math.ceil(1.1 * E);
          }
          V = Math.max(V, E);
          ab[u2] = V;
        }
        return V;
      }
      function J(h, E) {
        var m2 = [];
        if (m2 = {
          solid: [],
          shortDash: [3, 1],
          shortDot: [1, 1],
          shortDashDot: [3, 1, 1, 1],
          shortDashDotDot: [3, 1, 1, 1, 1, 1],
          dot: [1, 2],
          dash: [4, 2],
          dashDot: [4, 2, 1, 2],
          longDash: [8, 2],
          longDashDot: [8, 2, 1, 2],
          longDashDotDot: [8, 2, 1, 2, 1, 2]
        }[h || "solid"]) for (var u2 = 0; u2 < m2.length; u2++) m2[u2] *= E;
        else m2 = [];
        return m2;
      }
      function K(h, E, ya, u2, V) {
        u2 = u2 || [];
        V = m(V) ? ib ? { passive: false, capture: false } : false : V;
        u2.push([h, E, ya, V]);
        return h.addEventListener ? (h.addEventListener(E, ya, V), ya) : h.attachEvent ? (u2 = function(E2) {
          E2 = E2 || window.event;
          E2.preventDefault = E2.preventDefault || function() {
            E2.returnValue = false;
          };
          E2.stopPropagation = E2.stopPropagation || function() {
            E2.cancelBubble = true;
          };
          ya.call(
            h,
            E2
          );
        }, h.attachEvent("on" + E, u2), u2) : false;
      }
      function jb(h) {
        if (h._menuButton) h.exportEnabled ? (Q(h._menuButton, { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor }), Na(h._menuButton), va(h, h._menuButton, "menu"), 0 >= navigator.userAgent.search("MSIE") && h._menuButton.childNodes[0] && Q(h._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" })) : wa(h._menuButton);
        else if (h.exportEnabled && u) {
          var E = false;
          h._menuButton = document.createElement("button");
          va(h, h._menuButton, "menu");
          h._toolBar.appendChild(h._menuButton);
          K(h._menuButton, "touchstart", function(h2) {
            E = true;
          }, h.allDOMEventHandlers);
          K(h._menuButton, "click", function() {
            "none" !== h._dropdownMenu.style.display || h._dropDownCloseTime && 500 >= (/* @__PURE__ */ new Date()).getTime() - h._dropDownCloseTime.getTime() || (h._dropdownMenu.style.display = "block", h._menuButton.blur(), h._dropdownMenu.focus());
          }, h.allDOMEventHandlers, true);
          K(h._menuButton, "mousemove", function() {
            E || (Q(h._menuButton, { backgroundColor: h.toolbar.itemBackgroundColorOnHover, color: h.toolbar.fontColorOnHover }), 0 >= navigator.userAgent.search("MSIE") && Q(h._menuButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
          }, h.allDOMEventHandlers, true);
          K(h._menuButton, "mouseout", function() {
            E || (Q(h._menuButton, { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && Q(h._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
          }, h.allDOMEventHandlers, true);
        }
        if (h.exportEnabled && h._dropdownMenu) {
          var m2 = h.theme && -1 !== h.theme.indexOf("dark") ? "black" : "#888888";
          Q(
            h._dropdownMenu,
            { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor, boxShadow: "2px 2px 10px " + m2 }
          );
          for (var m2 = h._dropdownMenu.childNodes, B = [h._cultureInfo.printText, h._cultureInfo.saveJPGText, h._cultureInfo.savePNGText], V = 0; V < B.length; V++) Q(m2[V], { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor }), m2[V].innerHTML = B[V];
        } else !h._dropdownMenu && (h.exportEnabled && u) && (E = false, h._dropdownMenu = document.createElement("div"), h._dropdownMenu.setAttribute("tabindex", -1), m2 = h.theme && -1 !== h.theme.indexOf("dark") ? "black" : "#888888", Q(h._dropdownMenu, { position: "absolute", zIndex: 1, userSelect: "none", MozUserSeelct: "none", WebkitUserSelect: "none", msUserSelect: "none", cursor: "pointer", right: "0px", top: "25px", minWidth: "120px", outline: 0, fontSize: "14px", fontFamily: "Arial, Helvetica, sans-serif", padding: "5px 0px 5px 0px", textAlign: "left", lineHeight: "10px", backgroundColor: h.toolbar.itemBackgroundColor, boxShadow: "2px 2px 10px " + m2 }), h._dropdownMenu.style.display = "none", h._toolBar.appendChild(h._dropdownMenu), K(
          h._dropdownMenu,
          "blur",
          function() {
            wa(h._dropdownMenu);
            h._dropDownCloseTime = /* @__PURE__ */ new Date();
          },
          h.allDOMEventHandlers,
          true
        ), m2 = document.createElement("div"), Q(m2, { padding: "12px 8px 12px 8px" }), m2.innerHTML = h._cultureInfo.printText, m2.style.backgroundColor = h.toolbar.itemBackgroundColor, m2.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(m2), K(m2, "touchstart", function(h2) {
          E = true;
        }, h.allDOMEventHandlers), K(
          m2,
          "mousemove",
          function() {
            E || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
          },
          h.allDOMEventHandlers,
          true
        ), K(m2, "mouseout", function() {
          E || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor);
        }, h.allDOMEventHandlers, true), K(m2, "click", function() {
          h.print();
          wa(h._dropdownMenu);
        }, h.allDOMEventHandlers, true), m2 = document.createElement("div"), Q(m2, { padding: "12px 8px 12px 8px" }), m2.innerHTML = h._cultureInfo.saveJPGText, m2.style.backgroundColor = h.toolbar.itemBackgroundColor, m2.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(m2), K(m2, "touchstart", function(h2) {
          E = true;
        }, h.allDOMEventHandlers), K(m2, "mousemove", function() {
          E || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
        }, h.allDOMEventHandlers, true), K(m2, "mouseout", function() {
          E || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor);
        }, h.allDOMEventHandlers, true), K(m2, "click", function() {
          h.exportChart({ format: "jpeg", fileName: h.exportFileName });
          wa(h._dropdownMenu);
        }, h.allDOMEventHandlers, true), m2 = document.createElement("div"), Q(m2, { padding: "12px 8px 12px 8px" }), m2.innerHTML = h._cultureInfo.savePNGText, m2.style.backgroundColor = h.toolbar.itemBackgroundColor, m2.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(m2), K(m2, "touchstart", function(h2) {
          E = true;
        }, h.allDOMEventHandlers), K(m2, "mousemove", function() {
          E || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
        }, h.allDOMEventHandlers, true), K(m2, "mouseout", function() {
          E || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor);
        }, h.allDOMEventHandlers, true), K(m2, "click", function() {
          h.exportChart({ format: "png", fileName: h.exportFileName });
          wa(h._dropdownMenu);
        }, h.allDOMEventHandlers, true));
      }
      function bb(h, E, m2) {
        h *= la;
        E *= la;
        h = m2.getImageData(h, E, 2, 2).data;
        E = true;
        for (m2 = 0; 4 > m2; m2++) if (h[m2] !== h[m2 + 4] | h[m2] !== h[m2 + 8] | h[m2] !== h[m2 + 12]) {
          E = false;
          break;
        }
        return E ? h[0] << 16 | h[1] << 8 | h[2] : 0;
      }
      function W(h, E, m2) {
        return h in E ? E[h] : m2[h];
      }
      function Oa(h, E, ya, B) {
        u && cb ? (B = !m(B) && B ? h.getContext("2d", { willReadFrequently: true }) : h.getContext("2d"), Pa = B.webkitBackingStorePixelRatio || B.mozBackingStorePixelRatio || B.msBackingStorePixelRatio || B.oBackingStorePixelRatio || B.backingStorePixelRatio || 1, la = Va / Pa, h.width = E * la, h.height = ya * la, Va !== Pa && (h.style.width = E + "px", h.style.height = ya + "px", B.scale(la, la))) : (h.width = E, h.height = ya);
      }
      function kb(h) {
        if (!lb) {
          var E = false, m2 = false;
          "undefined" === typeof sa.Chart.creditHref ? (h.creditHref = na("iuuqr;..b`ow`rkr/bnl."), h.creditText = na("B`ow`rKR/bnl")) : (E = h.updateOption("creditText"), m2 = h.updateOption("creditHref"));
          if (h.creditHref && h.creditText) {
            h._creditLink || (h._creditLink = document.createElement("a"), h._creditLink.setAttribute("class", "canvasjs-chart-credit"), h._creditLink.setAttribute("title", "JavaScript Charts"), Q(h._creditLink, { outline: "none", margin: "0px", position: "absolute", right: "2px", top: h.height - 14 + "px", color: "dimgrey", textDecoration: "none", fontSize: "11px", fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" }), h._creditLink.setAttribute("tabIndex", -1), h._creditLink.setAttribute("target", "_blank"));
            if (0 === h.renderCount || E || m2) h._creditLink.setAttribute("href", h.creditHref), h._creditLink.innerHTML = h.creditText;
            h._creditLink && h.creditHref && h.creditText ? (h._creditLink.parentElement || h._canvasJSContainer.appendChild(h._creditLink), h._creditLink.style.top = h.height - 14 + "px") : h._creditLink.parentElement && h._canvasJSContainer.removeChild(h._creditLink);
          }
        }
      }
      function xa(h, E, m2) {
        Ja && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var B = document.createElement("canvas");
        B.setAttribute("class", "canvasjs-chart-canvas");
        Oa(B, h, E, m2);
        u || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(B);
        return B;
      }
      function Q(h, E) {
        for (var m2 in E) h.style[m2] = E[m2];
      }
      function db(h) {
        return h.currentStyle ? h.currentStyle : window && window.getComputedStyle ? window.getComputedStyle(h, null) : h.style;
      }
      function va(h, E, m2) {
        E.getAttribute("state") || (E.style.backgroundColor = h.toolbar.itemBackgroundColor, E.style.color = h.toolbar.fontColor, E.style.border = "none", Q(E, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
        E.getAttribute("state") !== m2 && (E.setAttribute("state", m2), E.setAttribute("type", "button"), Q(E, { padding: "5px 12px", cursor: "pointer", "float": "left", width: 2 * h.toolbar.buttonBorderThickness + 40 + "px", height: 2 * h.toolbar.buttonBorderThickness + 25 + "px", outline: "0px", verticalAlign: "baseline", lineHeight: "0" }), E.innerHTML = "<img src='" + mb[m2].image + "' alt='" + h._cultureInfo[m2 + "Text"] + "' />", Q(E.childNodes[0], { height: "95%", pointerEvents: "none" }));
        E.setAttribute("title", h._cultureInfo[m2 + "Text"]);
      }
      function Na() {
        for (var h = null, m2 = 0; m2 < arguments.length; m2++) h = arguments[m2], h.style && (h.style.display = "inline");
      }
      function wa() {
        for (var h = null, m2 = 0; m2 < arguments.length; m2++) (h = arguments[m2]) && h.style && (h.style.display = "none");
      }
      function Wa(h, m2, u2, B, V) {
        if (null === h || "undefined" === typeof h) return "undefined" === typeof u2 ? m2 : u2;
        h = parseFloat(h.toString()) * (0 <= h.toString().indexOf("%") ? m2 / 100 : 1);
        "undefined" !== typeof B && (h = Math.min(B, h), "undefined" !== typeof V && (h = Math.max(V, h)));
        return !isNaN(h) && h <= m2 && 0 <= h ? h : "undefined" === typeof u2 ? m2 : u2;
      }
      function T(h, E, u2, B, V) {
        this._defaultsKey = h;
        this._themeOptionsKey = E;
        this._index = B;
        this.parent = V;
        this._eventListeners = [];
        h = {};
        this.theme && m(this.parent) && m(E) && m(B) ? h = m(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[E]) && (null === B ? h = this.parent.themeOptions[E] : 0 < this.parent.themeOptions[E].length && (B = Math.min(this.parent.themeOptions[E].length - 1, B), h = this.parent.themeOptions[E][B]));
        this.themeOptions = h;
        this.options = u2 ? u2 : { _isPlaceholder: true };
        this.setOptions(this.options, h);
      }
      function Ga(h, m2, u2, B, V) {
        "undefined" === typeof V && (V = 0);
        this._padding = V;
        this._x1 = h;
        this._y1 = m2;
        this._x2 = u2;
        this._y2 = B;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      }
      function ma(h, m2) {
        ma.base.constructor.call(this, "TextBlock", null, m2, null, null);
        this.ctx = h;
        this._isDirty = true;
        this._wrappedText = null;
        this._initialize();
      }
      function Xa(h, m2) {
        Xa.base.constructor.call(this, "Toolbar", "toolbar", m2, null, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar";
      }
      function Ca(h, E) {
        Ca.base.constructor.call(this, "Title", "title", E, null, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (m(this.options.margin) && h.options.subtitles) {
          for (var u2 = h.options.subtitles, B = 0; B < u2.length; B++) if ((m(u2[B].horizontalAlign) && "center" === this.horizontalAlign || u2[B].horizontalAlign === this.horizontalAlign) && (m(u2[B].verticalAlign) && "top" === this.verticalAlign || u2[B].verticalAlign === this.verticalAlign) && !u2[B].dockInsidePlotArea === !this.dockInsidePlotArea) {
            this.margin = 0;
            break;
          }
        }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
      }
      function Ka(h, m2, u2) {
        Ka.base.constructor.call(this, "Subtitle", "subtitles", m2, u2, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = true;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
      }
      function Ya() {
        this.pool = [];
      }
      function La(h) {
        var m2;
        h && Ma[h] && (m2 = Ma[h]);
        La.base.constructor.call(this, "CultureInfo", null, m2, null, null);
      }
      var Ja = false, S = {}, u = !!document.createElement("canvas").getContext, sa = {
        Chart: {
          width: 500,
          height: 400,
          zoomEnabled: false,
          zoomType: "x",
          backgroundColor: "white",
          theme: "light1",
          animationEnabled: false,
          animationDuration: 1200,
          dataPointWidth: null,
          dataPointMinWidth: null,
          dataPointMaxWidth: null,
          colorSet: "colorSet1",
          culture: "en",
          creditText: "CanvasJS",
          interactivityEnabled: true,
          exportEnabled: false,
          exportFileName: "Chart",
          rangeChanging: null,
          rangeChanged: null,
          publicProperties: { title: "readWrite", subtitles: "readWrite", toolbar: "readWrite", toolTip: "readWrite", legend: "readWrite", axisX: "readWrite", axisY: "readWrite", axisX2: "readWrite", axisY2: "readWrite", data: "readWrite", options: "readWrite", bounds: "readOnly", container: "readOnly", selectedColorSet: "readOnly" }
        },
        Title: {
          padding: 0,
          text: null,
          verticalAlign: "top",
          horizontalAlign: "center",
          fontSize: 20,
          fontFamily: "Calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: u ? "transparent" : null,
          margin: 5,
          wrap: true,
          maxWidth: null,
          textAlign: "center",
          dockInsidePlotArea: false,
          publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
        },
        Subtitle: {
          padding: 0,
          text: null,
          verticalAlign: "top",
          horizontalAlign: "center",
          fontSize: 14,
          fontFamily: "Calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: null,
          margin: 2,
          wrap: true,
          maxWidth: null,
          textAlign: "center",
          dockInsidePlotArea: false,
          publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
        },
        Toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white", publicProperties: { options: "readWrite", chart: "readOnly" } },
        Legend: {
          name: null,
          verticalAlign: "center",
          horizontalAlign: "right",
          fontSize: 14,
          fontFamily: "calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          cursor: "default",
          itemmouseover: null,
          itemmouseout: null,
          itemmousemove: null,
          itemclick: null,
          dockInsidePlotArea: false,
          reversed: false,
          backgroundColor: u ? "transparent" : null,
          borderColor: u ? "transparent" : null,
          borderThickness: 0,
          cornerRadius: 0,
          maxWidth: null,
          maxHeight: null,
          markerMargin: null,
          itemMaxWidth: null,
          itemWidth: null,
          itemWrap: true,
          itemTextAlign: "left",
          itemTextFormatter: null,
          publicProperties: {
            options: "readWrite",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        ToolTip: { enabled: true, shared: false, animationEnabled: true, content: null, contentFormatter: null, reversed: false, backgroundColor: u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", borderColor: null, borderThickness: 2, cornerRadius: 5, fontSize: 14, fontColor: "black", fontFamily: "Calibri, Arial, Georgia, serif;", fontWeight: "normal", fontStyle: "italic", updated: null, hidden: null, publicProperties: { options: "readWrite", chart: "readOnly" } },
        Axis: {
          minimum: null,
          maximum: null,
          viewportMinimum: null,
          viewportMaximum: null,
          interval: null,
          intervalType: null,
          reversed: false,
          logarithmic: false,
          logarithmBase: 10,
          title: null,
          titleFontColor: "black",
          titleFontSize: 20,
          titleFontFamily: "arial",
          titleFontWeight: "normal",
          titleFontStyle: "normal",
          titleWrap: true,
          titleMaxWidth: null,
          titleBackgroundColor: u ? "transparent" : null,
          titleBorderColor: u ? "transparent" : null,
          titleBorderThickness: 0,
          titleCornerRadius: 0,
          titleTextAlign: "left",
          titlePadding: 0,
          labelAngle: 0,
          labelFontFamily: "arial",
          labelFontColor: "black",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelAutoFit: true,
          labelWrap: true,
          labelMaxWidth: null,
          labelFormatter: null,
          labelBackgroundColor: u ? "transparent" : null,
          labelBorderColor: u ? "transparent" : null,
          labelBorderThickness: 0,
          labelPadding: 0,
          labelCornerRadius: 0,
          labelPlacement: "outside",
          labelTextAlign: "left",
          prefix: "",
          suffix: "",
          includeZero: false,
          tickLength: 5,
          tickColor: "black",
          tickThickness: 1,
          tickPlacement: "outside",
          lineColor: "black",
          lineThickness: 1,
          lineDashType: "solid",
          gridColor: "#A0A0A0",
          gridThickness: 0,
          gridDashType: "solid",
          interlacedColor: u ? "transparent" : null,
          valueFormatString: null,
          margin: 2,
          publicProperties: { options: "readWrite", stripLines: "readWrite", scaleBreaks: "readWrite", crosshair: "readWrite", bounds: "readOnly", chart: "readOnly" }
        },
        StripLine: {
          value: null,
          startValue: null,
          endValue: null,
          color: "orange",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelPlacement: "inside",
          labelAlign: "far",
          labelWrap: true,
          labelMaxWidth: null,
          labelBackgroundColor: null,
          labelBorderColor: u ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: "arial",
          labelFontColor: "orange",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          labelTextAlign: "left",
          labelPadding: 0,
          tickColor: null,
          tickThickness: null,
          tickLength: null,
          showOnTop: false,
          publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        ScaleBreaks: { autoCalculate: false, collapsibleThreshold: "25%", maxNumberOfAutoBreaks: 2, spacing: 8, type: "straight", color: "#FFFFFF", fillOpacity: 0.9, lineThickness: 2, lineColor: "#E16E6E", lineDashType: "solid", publicProperties: {
          options: "readWrite",
          customBreaks: "readWrite",
          axis: "readOnly",
          autoBreaks: "readOnly",
          bounds: "readOnly",
          chart: "readOnly"
        } },
        Break: { startValue: null, endValue: null, spacing: 8, type: "straight", color: "#FFFFFF", fillOpacity: 0.9, lineThickness: 2, lineColor: "#E16E6E", lineDashType: "solid", publicProperties: { options: "readWrite", scaleBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" } },
        Crosshair: {
          enabled: false,
          snapToDataPoint: false,
          color: "grey",
          opacity: 1,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelWrap: true,
          labelMaxWidth: null,
          labelTextAlign: "left",
          labelBackgroundColor: u ? "grey" : null,
          labelBorderColor: u ? "grey" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
          labelFontSize: 12,
          labelPadding: { top: 2, right: 3, bottom: 2, left: 4 },
          labelFontColor: "#fff",
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          valueFormatString: null,
          updated: null,
          hidden: null,
          publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        DataSeries: {
          name: null,
          dataPoints: null,
          label: "",
          bevelEnabled: false,
          highlightEnabled: true,
          cursor: "default",
          indexLabel: "",
          indexLabelPlacement: "auto",
          indexLabelOrientation: "horizontal",
          indexLabelTextAlign: "left",
          indexLabelFontColor: "black",
          indexLabelFontSize: 12,
          indexLabelFontStyle: "normal",
          indexLabelFontFamily: "Arial",
          indexLabelFontWeight: "normal",
          indexLabelPadding: 0,
          indexLabelBackgroundColor: null,
          indexLabelBorderColor: u ? "transparent" : null,
          indexLabelBorderThickness: 0,
          indexLabelLineColor: "gray",
          indexLabelLineThickness: 1,
          indexLabelLineDashType: "solid",
          indexLabelMaxWidth: null,
          indexLabelWrap: true,
          indexLabelFormatter: null,
          lineThickness: 2,
          lineDashType: "solid",
          connectNullData: false,
          nullDataLineDashType: "dash",
          color: null,
          lineColor: null,
          risingColor: "white",
          fallingColor: "red",
          fillOpacity: null,
          startAngle: 0,
          radius: null,
          innerRadius: null,
          explodeOnClick: true,
          neckHeight: null,
          neckWidth: null,
          reversed: false,
          valueRepresents: null,
          linkedDataSeriesIndex: null,
          whiskerThickness: 2,
          whiskerDashType: "solid",
          whiskerColor: null,
          whiskerLength: null,
          stemThickness: 2,
          stemColor: null,
          stemDashType: "solid",
          upperBoxColor: "white",
          lowerBoxColor: "white",
          type: "column",
          xValueType: "number",
          axisXType: "primary",
          axisYType: "primary",
          axisXIndex: 0,
          axisYIndex: 0,
          xValueFormatString: null,
          yValueFormatString: null,
          zValueFormatString: null,
          percentFormatString: null,
          showInLegend: false,
          legendMarkerType: null,
          legendMarkerColor: null,
          legendText: null,
          legendMarkerBorderColor: u ? "transparent" : null,
          legendMarkerBorderThickness: 0,
          markerType: "circle",
          markerColor: null,
          markerSize: null,
          markerBorderColor: u ? "transparent" : null,
          markerBorderThickness: 0,
          mouseover: null,
          mouseout: null,
          mousemove: null,
          click: null,
          toolTipContent: null,
          visible: true,
          publicProperties: { options: "readWrite", axisX: "readWrite", axisY: "readWrite", chart: "readOnly" }
        },
        TextBlock: { x: 0, y: 0, width: null, height: null, maxWidth: null, maxHeight: null, padding: 0, angle: 0, text: "", horizontalAlign: "center", textAlign: "left", fontSize: 12, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, textBaseline: "top" },
        CultureInfo: { decimalSeparator: ".", digitGroupSeparator: ",", zoomText: "Zoom", panText: "Pan", resetText: "Reset", menuText: "More Options", saveJPGText: "Save as JPEG", savePNGText: "Save as PNG", printText: "Print", days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "), months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ") }
      }, Ma = { en: {} }, s = u ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", Ha = u ? "Impact, Charcoal, sans-serif" : "Arial", Da = { colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "), colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "), colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ") }, F, ca, U, ea, ja;
      ca = "#333333";
      U = "#000000";
      F = "#666666";
      ja = ea = "#000000";
      var ga = 20, x = 14, Za = { colorSet: "colorSet1", backgroundColor: "#FFFFFF", title: { fontFamily: Ha, fontSize: 32, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: Ha, fontSize: x, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{ indexLabelFontFamily: s, indexLabelFontSize: x, indexLabelFontColor: ca, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
        titleFontFamily: s,
        titleFontSize: ga,
        titleFontColor: ca,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: U,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: F,
        tickThickness: 1,
        tickColor: F,
        gridThickness: 0,
        gridColor: F,
        stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: s, labelFontSize: x, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ea, thickness: 1, lineDashType: "dash" },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], axisX2: [{ titleFontFamily: s, titleFontSize: ga, titleFontColor: ca, titleFontWeight: "normal", labelFontFamily: s, labelFontSize: x, labelFontColor: U, labelFontWeight: "normal", lineThickness: 1, lineColor: F, tickThickness: 1, tickColor: F, gridThickness: 0, gridColor: F, stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ea,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{ titleFontFamily: s, titleFontSize: ga, titleFontColor: ca, titleFontWeight: "normal", labelFontFamily: s, labelFontSize: x, labelFontColor: U, labelFontWeight: "normal", lineThickness: 1, lineColor: F, tickThickness: 1, tickColor: F, gridThickness: 1, gridColor: F, stripLines: [{
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: s, labelFontSize: x, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ea, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY2: [{
        titleFontFamily: s,
        titleFontSize: ga,
        titleFontColor: ca,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: U,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: F,
        tickThickness: 1,
        tickColor: F,
        gridThickness: 1,
        gridColor: F,
        stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: s, labelFontSize: x, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ea, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], legend: { fontFamily: s, fontSize: 14, fontColor: ca, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: s, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" } };
      U = ca = "#F5F5F5";
      F = "#FFFFFF";
      ea = "#40BAF1";
      ja = "#F5F5F5";
      var ga = 20, x = 14, eb = { colorSet: "colorSet2", title: {
        fontFamily: s,
        fontSize: 33,
        fontColor: "#3A3A3A",
        fontWeight: "bold",
        verticalAlign: "top",
        margin: 5
      }, subtitles: [{ fontFamily: s, fontSize: x, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{ indexLabelFontFamily: s, indexLabelFontSize: x, indexLabelFontColor: "#666666", indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
        titleFontFamily: s,
        titleFontSize: ga,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: "#BBBBBB",
        tickThickness: 1,
        tickColor: "#BBBBBB",
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: s, labelFontSize: x, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], axisX2: [{ titleFontFamily: s, titleFontSize: ga, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: s, labelFontSize: x, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 1, lineColor: "#BBBBBB", tickColor: "#BBBBBB", tickThickness: 1, gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }], crosshair: {
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: "black",
        color: "black",
        thickness: 1,
        lineDashType: "dot"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{
        titleFontFamily: s,
        titleFontSize: ga,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: "#BBBBBB",
        tickColor: "#BBBBBB",
        tickThickness: 1,
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: s, labelFontSize: x, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], axisY2: [{
        titleFontFamily: s,
        titleFontSize: ga,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: "#BBBBBB",
        tickColor: "#BBBBBB",
        tickThickness: 1,
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: s, labelFontSize: x, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], legend: { fontFamily: s, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: s, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" } };
      U = ca = "#F5F5F5";
      F = "#FFFFFF";
      ea = "#40BAF1";
      ja = "#F5F5F5";
      ga = 20;
      x = 14;
      Ha = { colorSet: "colorSet1", backgroundColor: "#2A2A2A", title: { fontFamily: Ha, fontSize: 32, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: Ha, fontSize: x, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }], toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" }, data: [{
        indexLabelFontFamily: s,
        indexLabelFontSize: x,
        indexLabelFontColor: U,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }], axisX: [{ titleFontFamily: s, titleFontSize: ga, titleFontColor: U, titleFontWeight: "normal", labelFontFamily: s, labelFontSize: x, labelFontColor: U, labelFontWeight: "normal", lineThickness: 1, lineColor: F, tickThickness: 1, tickColor: F, gridThickness: 0, gridColor: F, stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ea,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisX2: [{ titleFontFamily: s, titleFontSize: ga, titleFontColor: U, titleFontWeight: "normal", labelFontFamily: s, labelFontSize: x, labelFontColor: U, labelFontWeight: "normal", lineThickness: 1, lineColor: F, tickThickness: 1, tickColor: F, gridThickness: 0, gridColor: F, stripLines: [{
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: s, labelFontSize: x, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ea, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY: [{
        titleFontFamily: s,
        titleFontSize: ga,
        titleFontColor: U,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: U,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: F,
        tickThickness: 1,
        tickColor: F,
        gridThickness: 1,
        gridColor: F,
        stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: s, labelFontSize: x, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ea, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }], axisY2: [{ titleFontFamily: s, titleFontSize: ga, titleFontColor: U, titleFontWeight: "normal", labelFontFamily: s, labelFontSize: x, labelFontColor: U, labelFontWeight: "normal", lineThickness: 1, lineColor: F, tickThickness: 1, tickColor: F, gridThickness: 1, gridColor: F, stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ea,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], legend: { fontFamily: s, fontSize: 14, fontColor: ca, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: s, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: U, backgroundColor: "rgba(0, 0, 0, .7)" } };
      F = "#FFFFFF";
      U = ca = "#FAFAFA";
      ea = "#40BAF1";
      ja = "#F5F5F5";
      var ga = 20, x = 14, Qa = { light1: Za, light2: eb, dark1: Ha, dark2: { colorSet: "colorSet2", backgroundColor: "#32373A", title: { fontFamily: s, fontSize: 32, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: s, fontSize: x, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }], toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" }, data: [{
        indexLabelFontFamily: s,
        indexLabelFontSize: x,
        indexLabelFontColor: U,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }], axisX: [{ titleFontFamily: s, titleFontSize: ga, titleFontColor: U, titleFontWeight: "normal", labelFontFamily: s, labelFontSize: x, labelFontColor: U, labelFontWeight: "normal", lineThickness: 1, lineColor: F, tickThickness: 1, tickColor: F, gridThickness: 0, gridColor: F, stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ea,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisX2: [{ titleFontFamily: s, titleFontSize: ga, titleFontColor: U, titleFontWeight: "normal", labelFontFamily: s, labelFontSize: x, labelFontColor: U, labelFontWeight: "normal", lineThickness: 1, lineColor: F, tickThickness: 1, tickColor: F, gridThickness: 0, gridColor: F, stripLines: [{
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: s, labelFontSize: x, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ea, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY: [{
        titleFontFamily: s,
        titleFontSize: ga,
        titleFontColor: U,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: U,
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: F,
        tickThickness: 1,
        tickColor: F,
        gridThickness: 1,
        gridColor: F,
        stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: s, labelFontSize: x, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ea, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }], axisY2: [{ titleFontFamily: s, titleFontSize: ga, titleFontColor: U, titleFontWeight: "normal", labelFontFamily: s, labelFontSize: x, labelFontColor: U, labelFontWeight: "normal", lineThickness: 0, lineColor: F, tickThickness: 1, tickColor: F, gridThickness: 1, gridColor: F, stripLines: [{ labelFontFamily: s, labelFontSize: x, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: s,
        labelFontSize: x,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ea,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], legend: { fontFamily: s, fontSize: 14, fontColor: ca, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: s, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: U, backgroundColor: "rgba(0, 0, 0, .7)" } }, theme1: Za, theme2: eb, theme3: Za }, R = {
        numberDuration: 1,
        yearDuration: 314496e5,
        monthDuration: 2592e6,
        weekDuration: 6048e5,
        dayDuration: 864e5,
        hourDuration: 36e5,
        minuteDuration: 6e4,
        secondDuration: 1e3,
        millisecondDuration: 1,
        dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
      };
      (function() {
        S.fSDec = function(h) {
          for (var m2 = "", u2 = 0; u2 < h.length; u2++) m2 += String.fromCharCode(Math.ceil(h.length / 57 / 5) ^ h.charCodeAt(u2));
          return m2;
        };
        delete sa[S.fSDec("Bi`su")][S.fSDec("bsdehuIsdg")];
        S.pro = { sCH: sa[S.fSDec("Bi`su")][S.fSDec("bsdehuIsdg")] };
        S._fTWm = function(h) {
          if ("undefined" === typeof S.pro.sCH && !nb) try {
            var m2, u2 = h[S.fSDec("buy")];
            u2[S.fSDec("udyuC`rdmhod")] = S.fSDec("unq");
            u2[S.fSDec("gnou")] = 11 + S.fSDec("qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg");
            m2 = h.height - 11;
            u2[S.fSDec("bmd`sSdbu")](0, m2, u2[S.fSDec("ld`rtsdUdyu")](S.fSDec("Ono,Bnlldsbh`m!Wdsrhno")).width, 11);
            u2[S.fSDec("ghmmRuxmd")] = h.backgroundColor;
            u2[S.fSDec("ghmmSdbu")](0, m2, u2[S.fSDec("ld`rtsdUdyu")](S.fSDec("Ono,Bnlldsbh`m!Wdsrhno")).width, 11);
            u2[S.fSDec("ghmmRuxmd")] = S.fSDec("fsdx");
            u2[S.fSDec("ghmmUdyu")](S.fSDec("Ono,Bnlldsbh`m!Wdsrhno"), 0, m2);
          } catch (B) {
          }
        };
      })();
      var ib = function() {
        var h = false;
        try {
          var m2 = Object.defineProperty && Object.defineProperty({}, "passive", { get: function() {
            h = true;
            return false;
          } });
          window.addEventListener && (window.addEventListener("test", null, m2), window.removeEventListener("test", null, m2));
        } catch (u2) {
          h = false;
        }
        return h;
      }(), ab = {}, ta = null, ob = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(
          0,
          0,
          this.width,
          this.height
        ));
      }, za = function(h) {
        h.width = 1;
        h.height = 1;
        h.getContext("2d") && h.getContext("2d").clearRect(0, 0, 1, 1);
      }, pb = function(h, m2, u2) {
        m2 = Math.min(this.width, this.height);
        return Math.max("theme4" === this.theme ? 0 : 300 <= m2 ? 12 : 11, Math.round(m2 * (h / 400)));
      }, Ea = function() {
        var h = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g, m2 = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), u2 = "Sun Mon Tue Wed Thu Fri Sat".split(" "), B = "January February March April May June July August September October November December".split(" "), V = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), s2 = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, A = /[^-+\dA-Z]/g;
        return function(x2, J2, F2) {
          var X2 = F2 ? F2.days : m2, Q2 = F2 ? F2.months : B, R2 = F2 ? F2.shortDays : u2, K2 = F2 ? F2.shortMonths : V;
          F2 = "";
          var S2 = false;
          x2 = x2 && x2.getTime ? x2 : x2 ? new Date(x2) : /* @__PURE__ */ new Date();
          if (isNaN(x2)) throw SyntaxError("invalid date");
          "UTC:" === J2.slice(0, 4) && (J2 = J2.slice(4), S2 = true);
          F2 = S2 ? "getUTC" : "get";
          var T2 = x2[F2 + "Date"](), M = x2[F2 + "Day"](), Y = x2[F2 + "Month"](), a = x2[F2 + "FullYear"](), e = x2[F2 + "Hours"](), c = x2[F2 + "Minutes"](), b = x2[F2 + "Seconds"](), d = x2[F2 + "Milliseconds"](), f = S2 ? 0 : x2.getTimezoneOffset();
          return F2 = J2.replace(h, function(n) {
            switch (n) {
              case "D":
                return T2;
              case "DD":
                return ia(T2, 2);
              case "DDD":
                return R2[M];
              case "DDDD":
                return X2[M];
              case "M":
                return Y + 1;
              case "MM":
                return ia(Y + 1, 2);
              case "MMM":
                return K2[Y];
              case "MMMM":
                return Q2[Y];
              case "Y":
                return parseInt(String(a).slice(-2));
              case "YY":
                return ia(String(a).slice(-2), 2);
              case "YYY":
                return ia(
                  String(a).slice(-3),
                  3
                );
              case "YYYY":
                return ia(a, 4);
              case "h":
                return e % 12 || 12;
              case "hh":
                return ia(e % 12 || 12, 2);
              case "H":
                return e;
              case "HH":
                return ia(e, 2);
              case "m":
                return c;
              case "mm":
                return ia(c, 2);
              case "s":
                return b;
              case "ss":
                return ia(b, 2);
              case "f":
                return ia(String(d), 3).slice(0, 1);
              case "ff":
                return ia(String(d), 3).slice(0, 2);
              case "fff":
                return ia(String(d), 3).slice(0, 3);
              case "t":
                return 12 > e ? "a" : "p";
              case "tt":
                return 12 > e ? "am" : "pm";
              case "T":
                return 12 > e ? "A" : "P";
              case "TT":
                return 12 > e ? "AM" : "PM";
              case "K":
                return S2 ? "UTC" : (String(x2).match(s2) || [""]).pop().replace(A, "");
              case "z":
                return (0 < f ? "-" : "+") + Math.floor(Math.abs(f) / 60);
              case "zz":
                return (0 < f ? "-" : "+") + ia(Math.floor(Math.abs(f) / 60), 2);
              case "zzz":
                return (0 < f ? "-" : "+") + ia(Math.floor(Math.abs(f) / 60), 2) + ia(Math.abs(f) % 60, 2);
              default:
                return n.slice(1, n.length - 1);
            }
          });
        };
      }(), qb = function(h) {
        var m2 = 0 > h;
        if (1 > Math.abs(h)) {
          var u2 = parseInt(h.toString().split("e-")[1]);
          u2 && (h = (m2 ? -1 * h : h) * Math.pow(10, u2 - 1), h = "0." + Array(u2).join("0") + h.toString().substring(2), h = m2 ? "-" + h : h);
        } else u2 = parseInt(h.toString().split("+")[1]), 20 < u2 && (u2 -= 20, h /= Math.pow(10, u2), h = h.toString() + Array(u2 + 1).join("0"));
        return String(h);
      }, fa = function(h, m2, u2) {
        if (null === h) return "";
        if (!isFinite(h)) return h;
        h = Number(h);
        var B = 0 > h ? true : false;
        B && (h *= -1);
        var V = u2 ? u2.decimalSeparator : ".", s2 = u2 ? u2.digitGroupSeparator : ",", A = "";
        m2 = String(m2);
        var A = 1, x2 = u2 = "", F2 = -1, J2 = [], X2 = [], Q2 = 0, R2 = 0, K2 = 0, S2 = false, T2 = 0, x2 = m2.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        m2 = null;
        for (var M = 0; x2 && M < x2.length; M++) if (m2 = x2[M], "." === m2 && 0 > F2) F2 = M;
        else {
          if ("%" === m2) A *= 100;
          else if ("‰" === m2) {
            A *= 1e3;
            continue;
          } else if ("," === m2[0] && "." === m2[m2.length - 1]) {
            A /= Math.pow(1e3, m2.length - 1);
            F2 = M + m2.length - 1;
            continue;
          } else "E" !== m2[0] && "e" !== m2[0] || "0" !== m2[m2.length - 1] || (S2 = true);
          0 > F2 ? (J2.push(m2), "#" === m2 || "0" === m2 ? Q2++ : "," === m2 && K2++) : (X2.push(m2), "#" !== m2 && "0" !== m2 || R2++);
        }
        S2 && (m2 = Math.floor(h), x2 = -Math.floor(Math.log(h) / Math.LN10 + 1), T2 = 0 === h ? 0 : 0 === m2 ? -(Q2 + x2) : qb(m2).length - Q2, A /= Math.pow(10, T2));
        0 > F2 && (F2 = M);
        A = (h * A).toFixed(R2);
        m2 = A.split(".");
        A = (m2[0] + "").split("");
        h = (m2[1] + "").split("");
        A && "0" === A[0] && A.shift();
        for (S2 = x2 = M = R2 = F2 = 0; 0 < J2.length; ) if (m2 = J2.pop(), "#" === m2 || "0" === m2) if (F2++, F2 === Q2) {
          var Y = A, A = [];
          if ("0" === m2) for (m2 = Q2 - R2 - (Y ? Y.length : 0); 0 < m2; ) Y.unshift("0"), m2--;
          for (; 0 < Y.length; ) u2 = Y.pop() + u2, S2++, 0 === S2 % x2 && (M === K2 && 0 < Y.length) && (u2 = s2 + u2);
        } else 0 < A.length ? (u2 = A.pop() + u2, R2++, S2++) : "0" === m2 && (u2 = "0" + u2, R2++, S2++), 0 === S2 % x2 && (M === K2 && 0 < A.length) && (u2 = s2 + u2);
        else "E" !== m2[0] && "e" !== m2[0] || "0" !== m2[m2.length - 1] || !/[eE][+-]*[0]+/.test(m2) ? "," === m2 ? (M++, x2 = S2, S2 = 0, 0 < A.length && (u2 = s2 + u2)) : u2 = 1 < m2.length && ('"' === m2[0] && '"' === m2[m2.length - 1] || "'" === m2[0] && "'" === m2[m2.length - 1]) ? m2.slice(1, m2.length - 1) + u2 : m2 + u2 : (m2 = 0 > T2 ? m2.replace(
          "+",
          ""
        ).replace("-", "") : m2.replace("-", ""), u2 += m2.replace(/[0]+/, function(a) {
          return ia(T2, a.length);
        }));
        s2 = "";
        for (J2 = false; 0 < X2.length; ) m2 = X2.shift(), "#" === m2 || "0" === m2 ? 0 < h.length && 0 !== Number(h.join("")) ? (s2 += h.shift(), J2 = true) : "0" === m2 && (s2 += "0", J2 = true) : 1 < m2.length && ('"' === m2[0] && '"' === m2[m2.length - 1] || "'" === m2[0] && "'" === m2[m2.length - 1]) ? s2 += m2.slice(1, m2.length - 1) : "E" !== m2[0] && "e" !== m2[0] || "0" !== m2[m2.length - 1] || !/[eE][+-]*[0]+/.test(m2) ? s2 += m2 : (m2 = 0 > T2 ? m2.replace("+", "").replace("-", "") : m2.replace("-", ""), s2 += m2.replace(/[0]+/, function(a) {
          return ia(
            T2,
            a.length
          );
        }));
        u2 += (J2 ? V : "") + s2;
        return B ? "-" + u2 : u2;
      }, Ra = function(h) {
        var m2 = 0, u2 = 0;
        h = h || window.event;
        h.offsetX || 0 === h.offsetX ? (m2 = h.offsetX, u2 = h.offsetY) : h.layerX || 0 == h.layerX ? (m2 = h.layerX, u2 = h.layerY) : (m2 = h.pageX - h.target.offsetLeft, u2 = h.pageY - h.target.offsetTop);
        return { x: m2, y: u2 };
      }, cb = true, Va = window.devicePixelRatio || 1, Pa = 1, la = cb ? Va / Pa : 1, aa = function(h, m2, u2, B, s2, x2, A, F2, J2, X2, S2, R2, Q2) {
        "undefined" === typeof Q2 && (Q2 = 1);
        A = A || 0;
        F2 = F2 || "black";
        var K2 = 15 < B - m2 && 15 < s2 - u2 ? 8 : 0.35 * Math.min(B - m2, s2 - u2);
        h.beginPath();
        h.moveTo(m2, u2);
        h.save();
        h.fillStyle = x2;
        h.globalAlpha = Q2;
        h.fillRect(m2, u2, B - m2, s2 - u2);
        h.globalAlpha = 1;
        0 < A && (Q2 = 0 === A % 2 ? 0 : 0.5, h.beginPath(), h.lineWidth = A, h.strokeStyle = F2, h.moveTo(m2, u2), h.rect(m2 - Q2, u2 - Q2, B - m2 + 2 * Q2, s2 - u2 + 2 * Q2), h.stroke());
        h.restore();
        true === J2 && (h.save(), h.beginPath(), h.moveTo(m2, u2), h.lineTo(m2 + K2, u2 + K2), h.lineTo(B - K2, u2 + K2), h.lineTo(B, u2), h.closePath(), A = h.createLinearGradient((B + m2) / 2, u2 + K2, (B + m2) / 2, u2), A.addColorStop(0, x2), A.addColorStop(1, "rgba(255, 255, 255, .4)"), h.fillStyle = A, h.fill(), h.restore());
        true === X2 && (h.save(), h.beginPath(), h.moveTo(m2, s2), h.lineTo(m2 + K2, s2 - K2), h.lineTo(B - K2, s2 - K2), h.lineTo(B, s2), h.closePath(), A = h.createLinearGradient((B + m2) / 2, s2 - K2, (B + m2) / 2, s2), A.addColorStop(0, x2), A.addColorStop(1, "rgba(255, 255, 255, .4)"), h.fillStyle = A, h.fill(), h.restore());
        true === S2 && (h.save(), h.beginPath(), h.moveTo(m2, u2), h.lineTo(m2 + K2, u2 + K2), h.lineTo(m2 + K2, s2 - K2), h.lineTo(m2, s2), h.closePath(), A = h.createLinearGradient(m2 + K2, (s2 + u2) / 2, m2, (s2 + u2) / 2), A.addColorStop(0, x2), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = A, h.fill(), h.restore());
        true === R2 && (h.save(), h.beginPath(), h.moveTo(
          B,
          u2
        ), h.lineTo(B - K2, u2 + K2), h.lineTo(B - K2, s2 - K2), h.lineTo(B, s2), A = h.createLinearGradient(B - K2, (s2 + u2) / 2, B, (s2 + u2) / 2), A.addColorStop(0, x2), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = A, A.addColorStop(0, x2), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = A, h.fill(), h.closePath(), h.restore());
      }, na = function(m2) {
        for (var u2 = "", s2 = 0; s2 < m2.length; s2++) u2 += String.fromCharCode(Math.ceil(m2.length / 57 / 5) ^ m2.charCodeAt(s2));
        return u2;
      }, nb = (s = window && window[na("mnb`uhno")] && window[na("mnb`uhno")].href) && (-1 !== s.indexOf(na("b`ow`rkr/bnl")) || -1 !== s.indexOf(na("gdonqhy/bnl")) || -1 !== s.indexOf(na("gheemd")) || -1 !== s.indexOf(na("bnedqdo")) || -1 !== s.indexOf(na("beqo"))), lb = s && (-1 !== s.indexOf(na("b`ow`rkr/bnl")) || -1 !== s.indexOf(na("gdonqhy/bnl"))), mb = {
        reset: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==" },
        pan: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC" },
        zoom: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=" },
        menu: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC" }
      };
      T.prototype.setOptions = function(m2, u2) {
        if (sa[this._defaultsKey]) {
          var s2 = sa[this._defaultsKey], B;
          for (B in s2) "publicProperties" !== B && s2.hasOwnProperty(B) && (this[B] = m2 && B in m2 ? m2[B] : u2 && B in u2 ? u2[B] : s2[B]);
        } else Ja && window.console && console.log("defaults not set");
      };
      T.prototype.get = function(m2) {
        var u2 = sa[this._defaultsKey];
        if ("options" === m2) return this.options && this.options._isPlaceholder ? null : this.options;
        if (u2.hasOwnProperty(m2) || u2.publicProperties && u2.publicProperties.hasOwnProperty(m2)) return this[m2];
        window.console && window.console.log('Property "' + m2 + `" doesn't exist. Please check for typo.`);
      };
      T.prototype.set = function(m2, u2, s2) {
        s2 = "undefined" === typeof s2 ? true : s2;
        var B = sa[this._defaultsKey];
        if ("options" === m2) this.createUserOptions(u2);
        else if (B.hasOwnProperty(m2) || B.publicProperties && B.publicProperties.hasOwnProperty(m2) && "readWrite" === B.publicProperties[m2]) this.options._isPlaceholder && this.createUserOptions(), this.options[m2] = u2;
        else {
          window.console && (B.publicProperties && B.publicProperties.hasOwnProperty(m2) && "readOnly" === B.publicProperties[m2] ? window.console.log('Property "' + m2 + '" is read-only.') : window.console.log('Property "' + m2 + `" doesn't exist. Please check for typo.`));
          return;
        }
        s2 && (this.stockChart || (this.chart ? this.chart.stockChart || this.chart : this)).render();
      };
      T.prototype.addTo = function(m2, u2, s2, B) {
        B = "undefined" === typeof B ? true : B;
        var x2 = sa[this._defaultsKey];
        x2.hasOwnProperty(m2) || x2.publicProperties && x2.publicProperties.hasOwnProperty(m2) && "readWrite" === x2.publicProperties[m2] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[m2] && (this.options[m2] = []), m2 = this.options[m2], s2 = "undefined" === typeof s2 || null === s2 ? m2.length : s2, m2.splice(s2, 0, u2), B && (this.stockChart || (this.chart ? this.chart.stockChart || this.chart : this)).render()) : window.console && (x2.publicProperties && x2.publicProperties.hasOwnProperty(m2) && "readOnly" === x2.publicProperties[m2] ? window.console.log('Property "' + m2 + '" is read-only.') : window.console.log('Property "' + m2 + `" doesn't exist. Please check for typo.`));
      };
      T.prototype.createUserOptions = function(m2) {
        if ("undefined" !== typeof m2 || this.options._isPlaceholder) if (this.parent && this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
          this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
          var u2 = this.parent.options[this.optionsName], s2 = u2.length;
          this.options._isPlaceholder || (Ba(u2), s2 = u2.indexOf(this.options));
          this.options = "undefined" === typeof m2 ? {} : m2;
          u2[s2] = this.options;
        } else this.options = "undefined" === typeof m2 ? {} : m2, this.parent && (m2 = this.parent.options, this.optionsName ? u2 = this.optionsName : (u2 = this._defaultsKey) && 0 !== u2.length ? (s2 = u2.charAt(0).toLowerCase(), 1 < u2.length && (s2 = s2.concat(u2.slice(1))), u2 = s2) : u2 = void 0, m2[u2] = this.options);
      };
      T.prototype.remove = function(m2) {
        m2 = "undefined" === typeof m2 ? true : m2;
        if (this.isOptionsInArray) {
          var u2 = this.parent.options[this.optionsName];
          Ba(u2);
          var s2 = u2.indexOf(this.options);
          0 <= s2 && u2.splice(s2, 1);
        } else delete this.parent.options[this.optionsName];
        m2 && (this.stockChart || (this.chart ? this.chart.stockChart || this.chart : this)).render();
      };
      T.prototype.updateOption = function(h) {
        !sa[this._defaultsKey] && (Ja && window.console) && console.log("defaults not set");
        var u2 = sa[this._defaultsKey], s2 = {}, B = this[h], x2 = this._themeOptionsKey, F2 = this._index;
        this.theme && m(this.parent) && m(x2) && m(F2) ? s2 = m(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && this.parent.themeOptions && (this.options.theme ? "Chart" === this._defaultsKey && Qa[this.options.theme] ? s2 = Qa[this.options.theme] : stockThemes[this.options.theme] && (s2 = stockThemes[this.options.theme][x2]) : this.parent.themeOptions[x2] && (null === F2 ? s2 = this.parent.themeOptions[x2] : 0 < this.parent.themeOptions[x2].length && (s2 = Math.min(this.parent.themeOptions[x2].length - 1, F2), s2 = this.parent.themeOptions[x2][s2])));
        this.themeOptions = s2;
        h in u2 && (B = h in this.options ? this.options[h] : s2 && h in s2 ? s2[h] : u2[h]);
        if (B === this[h]) return false;
        this[h] = B;
        return true;
      };
      T.prototype.trackChanges = function(m2) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[m2] = this.options[m2];
      };
      T.prototype.isBeingTracked = function(m2) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[m2] ? true : false;
      };
      T.prototype.hasOptionChanged = function(m2) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        return this.sessionVariables[m2] !== this.options[m2];
      };
      T.prototype.addEventListener = function(m2, u2, s2) {
        m2 && u2 && (this._eventListeners[m2] = this._eventListeners[m2] || [], this._eventListeners[m2].push({ context: s2 || this, eventHandler: u2 }));
      };
      T.prototype.removeEventListener = function(m2, u2) {
        if (m2 && u2 && this._eventListeners[m2]) {
          for (var s2 = this._eventListeners[m2], B = 0; B < s2.length; B++) if (s2[B].eventHandler === u2) {
            s2[B].splice(B, 1);
            break;
          }
        }
      };
      T.prototype.removeAllEventListeners = function() {
        this._eventListeners = [];
      };
      T.prototype.dispatchEvent = function(m2, u2, s2) {
        if (m2 && this._eventListeners[m2]) {
          u2 = u2 || {};
          for (var B = this._eventListeners[m2], x2 = 0; x2 < B.length; x2++) B[x2].eventHandler.call(B[x2].context, u2);
        }
        "function" === typeof this[m2] && this[m2].call(s2 || this.chart, u2);
      };
      Ga.prototype.registerSpace = function(m2, u2) {
        "top" === m2 ? this._topOccupied += u2.height : "bottom" === m2 ? this._bottomOccupied += u2.height : "left" === m2 ? this._leftOccupied += u2.width : "right" === m2 && (this._rightOccupied += u2.width);
      };
      Ga.prototype.unRegisterSpace = function(m2, u2) {
        "top" === m2 ? this._topOccupied -= u2.height : "bottom" === m2 ? this._bottomOccupied -= u2.height : "left" === m2 ? this._leftOccupied -= u2.width : "right" === m2 && (this._rightOccupied -= u2.width);
      };
      Ga.prototype.getFreeSpace = function() {
        return {
          x1: this._x1 + this._leftOccupied,
          y1: this._y1 + this._topOccupied,
          x2: this._x2 - this._rightOccupied,
          y2: this._y2 - this._bottomOccupied,
          width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
          height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        };
      };
      Ga.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      };
      ra(ma, T);
      ma.prototype._initialize = function() {
        m(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = m(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = m(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = m(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = m(this.padding.left) ? 0 : Number(this.padding.left) | 0);
      };
      ma.prototype.render = function(m2) {
        if (0 !== this.fontSize) {
          m2 && this.ctx.save();
          var u2 = this.ctx.font;
          this.ctx.textBaseline = this.textBaseline;
          var s2 = 0;
          this._isDirty && this.measureText(this.ctx);
          this.ctx.translate(this.x, this.y + s2);
          "middle" === this.textBaseline && (s2 = -this._lineHeight / 2);
          this.ctx.font = this._getFontString();
          this.ctx.rotate(Math.PI / 180 * this.angle);
          var B = 0, x2 = this.topPadding, F2 = null;
          this.ctx.roundRect || Aa(this.ctx);
          this.borderDashType = this.borderDashType || "solid";
          this.ctx.setLineDash && this.ctx.setLineDash(J(this.borderDashType, this.borderThickness));
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, s2, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          this.ctx.fillStyle = this.fontColor;
          for (s2 = 0; s2 < this._wrappedText.lines.length; s2++) F2 = this._wrappedText.lines[s2], "right" === this.textAlign ? B = this.width - F2.width - this.rightPadding : "left" === this.textAlign ? B = this.leftPadding : "center" === this.textAlign && (B = (this.width - (this.leftPadding + this.rightPadding)) / 2 - F2.width / 2 + this.leftPadding), this.ctx.fillText(F2.text, B, x2), x2 += F2.height;
          this.ctx.font = u2;
          m2 && this.ctx.restore();
        }
      };
      ma.prototype.setText = function(m2) {
        this.text = m2;
        this._isDirty = true;
        this._wrappedText = null;
      };
      ma.prototype.measureText = function() {
        this._lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = false;
        return { width: this.width, height: this.height };
      };
      ma.prototype._getLineWithWidth = function(m2, u2, s2) {
        m2 = String(m2);
        if (!m2) return { text: "", width: 0 };
        var B = s2 = 0, x2 = m2.length - 1, F2 = Infinity;
        for (this.ctx.font = this._getFontString(); B <= x2; ) {
          var F2 = Math.floor((B + x2) / 2), A = m2.substr(0, F2 + 1);
          s2 = this.ctx.measureText(A).width;
          if (s2 < u2) B = F2 + 1;
          else if (s2 > u2) x2 = F2 - 1;
          else break;
        }
        s2 > u2 && 1 < A.length && (A = A.substr(0, A.length - 1), s2 = this.ctx.measureText(A).width);
        u2 = true;
        if (A.length === m2.length || " " === m2[A.length]) u2 = false;
        u2 && (m2 = A.split(" "), 1 < m2.length && m2.pop(), A = m2.join(" "), s2 = this.ctx.measureText(A).width);
        return { text: A, width: s2 };
      };
      ma.prototype._wrapText = function() {
        var m2 = new String(Ia(String(this.text))), u2 = [], s2 = this.ctx.font, B = 0, x2 = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize) x2 = B = 0;
        else for (; 0 < m2.length; ) {
          var F2 = this.maxHeight - (this.topPadding + this.bottomPadding), A = this._getLineWithWidth(m2, this.maxWidth - (this.leftPadding + this.rightPadding), false);
          A.height = this._lineHeight;
          u2.push(A);
          var J2 = x2, x2 = Math.max(x2, A.width), B = B + A.height, m2 = Ia(m2.slice(A.text.length, m2.length));
          F2 && B > F2 && (A = u2.pop(), B -= A.height, x2 = J2);
        }
        this._wrappedText = { lines: u2, width: x2, height: B };
        this.width = x2 + (this.leftPadding + this.rightPadding);
        this.height = B + (this.topPadding + this.bottomPadding);
        this.ctx.font = s2;
      };
      ma.prototype._getFontString = function() {
        var m2;
        m2 = this.fontStyle ? this.fontStyle + " " : "";
        m2 += this.fontWeight ? this.fontWeight + " " : "";
        m2 += this.fontSize ? this.fontSize + "px " : "";
        var E = this.fontFamily ? this.fontFamily + "" : "";
        !u && E && (E = E.split(",")[0], "'" !== E[0] && '"' !== E[0] && (E = "'" + E + "'"));
        return m2 += E;
      };
      ra(Xa, T);
      ra(Ca, T);
      Ca.prototype.setLayout = function() {
        var h = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, u2 = h.layoutManager.getFreeSpace(), s2 = u2.x1, B = u2.y1, x2 = 0, B = 0, s2 = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 40 : 0, F2;
        this.textAlign = m(this.options.textAlign) ? this.horizontalAlign : this.textAlign;
        "center" === this.verticalAlign ? "left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = u2.height - 4), B = 0.5 * u2.width - this.margin - 2) : (null === this.maxWidth && (this.maxWidth = u2.width - 4), B = 0.5 * u2.height - 4) : (null === this.maxWidth && (this.maxWidth = u2.width - 4 - s2 * ("center" === this.horizontalAlign ? 2 : 1)), B = 0.5 * u2.height - this.margin - 2, x2 = 0);
        if (this.text) {
          m(this.padding) || "number" !== typeof this.padding ? m(this.padding) || "object" !== typeof this.padding || (F2 = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, F2 += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : F2 = 2 * this.padding;
          this.wrap || (B = Math.min(B, 1.5 * this.fontSize + F2));
          var A = new ma(this.ctx, { fontSize: this.fontSize, fontFamily: this.fontFamily, fontColor: this.fontColor, fontStyle: this.fontStyle, fontWeight: this.fontWeight, textAlign: this.textAlign, verticalAlign: this.verticalAlign, borderColor: this.borderColor, borderThickness: this.borderThickness, backgroundColor: this.backgroundColor, maxWidth: this.maxWidth, maxHeight: B, cornerRadius: this.cornerRadius, text: this.text, padding: this.padding, textBaseline: "middle" }), J2 = A.measureText();
          "center" === this.verticalAlign ? ("left" === this.horizontalAlign ? (s2 = u2.x1 + 2 + A._lineHeight / 2, B = u2.y2 - 2 - (this.maxWidth / 2 - J2.width / 2), x2 = -90, F2 = "left", this.width = J2.height, this.height = J2.width) : "right" === this.horizontalAlign ? (s2 = u2.x2 - 2 - A._lineHeight / 2, B = u2.y1 + 2 + (this.maxWidth / 2 - J2.width / 2), x2 = 90, F2 = "right", this.width = J2.height, this.height = J2.width) : (B = u2.y1 + 2 + (u2.height / 2 - J2.height / 2) + A._lineHeight / 2, s2 = u2.x1 + 2 + (u2.width / 2 - J2.width / 2), F2 = "center", this.width = J2.width, this.height = J2.height), u2 = "center") : ("bottom" === this.verticalAlign ? (B = u2.y2 - 2 - J2.height + A._lineHeight / 2, F2 = "bottom") : (B = u2.y1 + 2 + A._lineHeight / 2, F2 = "top"), s2 = "left" === this.horizontalAlign ? u2.x1 + 2 : "right" === this.horizontalAlign ? u2.x2 - 2 - J2.width - s2 : u2.x1 + u2.width / 2 - J2.width / 2, u2 = this.horizontalAlign, this.width = J2.width, this.height = J2.height);
          A.x = s2;
          A.y = B;
          A.angle = x2;
          A.horizontalAlign = u2;
          this._textBlock = A;
          h.layoutManager.registerSpace(F2, { width: this.width + ("left" === F2 || "right" === F2 ? this.margin + 2 : 0), height: this.height + ("top" === F2 || "bottom" === F2 ? this.margin + 2 : 0) });
          this.bounds = { x1: s2, y1: B - A._lineHeight / 2, x2: s2 + this.width, y2: B + this.height - A._lineHeight / 2 };
          "center" === this.verticalAlign && ("left" === this.horizontalAlign && (this.bounds = { x1: s2 - A._lineHeight / 2, y1: B - this.height, x2: s2 + this.width - A._lineHeight / 2, y2: B }), "right" === this.horizontalAlign && (this.bounds = { x1: s2 - A._lineHeight / 2, y1: B, x2: s2 + this.width - A._lineHeight / 2, y2: B + this.height }));
          this.ctx.textBaseline = "top";
        }
      };
      Ca.prototype.render = function() {
        this._textBlock && this._textBlock.render(true);
      };
      ra(Ka, T);
      Ka.prototype.setLayout = Ca.prototype.setLayout;
      Ka.prototype.render = Ca.prototype.render;
      Ya.prototype.get = function(m2, u2) {
        var s2 = null;
        0 < this.pool.length ? (s2 = this.pool.pop(), Oa(s2, m2, u2)) : s2 = xa(m2, u2);
        return s2;
      };
      Ya.prototype.release = function(m2) {
        this.pool.push(m2);
      };
      ra(La, T);
      var Sa = { addTheme: function(m2, u2) {
        Qa[m2] = u2;
      }, addColorSet: function(m2, u2) {
        Da[m2] = u2;
      }, addCultureInfo: function(m2, u2) {
        Ma[m2] = u2;
      }, formatNumber: function(m2, u2, s2) {
        s2 = s2 || "en";
        if (Ma[s2]) return fa(m2, u2 || "#,##0.##", new La(s2));
        throw "Unknown Culture Name";
      }, formatDate: function(m2, u2, s2) {
        s2 = s2 || "en";
        if (Ma[s2]) return Ea(m2, u2 || "DD MMM YYYY", new La(s2));
        throw "Unknown Culture Name";
      } };
      "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports = Sa : "function" === typeof define && define.amd ? define([], function() {
        return Sa;
      }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Sa);
      s = Sa.Chart = function() {
        function h(a, e) {
          return a.x - e.x;
        }
        function s2(a, e, c) {
          e = e || {};
          m(c) ? (this.predefinedThemes = Qa, this.optionsName = this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
          this.theme = m(e.theme) || m(this.predefinedThemes[e.theme]) ? "light1" : e.theme;
          s2.base.constructor.call(this, "Chart", this.optionsName, e, this.index, this.parent);
          var b = this;
          this._containerId = a;
          this._objectsInitialized = false;
          this.overlaidCanvasCtx = this.ctx = null;
          this._indexLabels = [];
          this._panTimerId = 0;
          this._lastTouchEventType = "";
          this._lastTouchData = null;
          this.isAnimating = false;
          this.renderCount = 0;
          this.disableToolTip = this.animatedRender = false;
          this.canvasPool = new Ya();
          this.allDOMEventHandlers = [];
          this.panEnabled = false;
          this._defaultCursor = "default";
          this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
          this._dataInRenderedOrder = [];
          (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", e = a = 0, e = db(this.container), a = this.options.width ? this.width : 0 < this.container.clientWidth - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight) ? this.container.clientWidth - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight) : this.width, e = c && c.height ? c.height : this.options.height ? this.height : 0 < this.container.clientHeight - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom) ? this.container.clientHeight - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom) : this.height, this.width = a, this.height = e, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof Da[this.colorSet] ? Da[this.colorSet] : Da.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", this._canvasJSContainer.style.WebkitUserSelect = "none", u || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = xa(a, e), this._preRenderCanvas = xa(a, e), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Aa(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Aa(this._preRenderCtx), u ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = xa(a, e), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = xa(a, e), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Aa(this.overlaidCanvasCtx)), this._eventManager = new ja2(this), this.windowResizeHandler = K(window, "resize", function() {
            b._updateSize() && (b.render(), b.isNavigator && (b.stockChart && b.stockChart.navigator && b.stockChart.navigator.enabled) && b.stockChart.navigator._updateSlider(b.stockChart._axisXMin, b.stockChart._axisXMax));
          }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), Q(this._toolBar, { position: "absolute", right: "1px", top: "1px", webkitTapHighlightColor: "transparent" }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
            x1: 0,
            y1: 0,
            x2: this.width,
            y2: this.height
          }, K(this.overlaidCanvas, "click", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), K(this.overlaidCanvas, "mousemove", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), K(this.overlaidCanvas, "mouseup", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), K(this.overlaidCanvas, "mousedown", function(a2) {
            b._mouseEventHandler(a2);
            wa(b._dropdownMenu);
            b.stockChart && b.stockChart._dropdownMenu && wa(b.stockChart._dropdownMenu);
          }, this.allDOMEventHandlers), K(
            this.overlaidCanvas,
            "mouseout",
            function(a2) {
              b._mouseEventHandler(a2);
            },
            this.allDOMEventHandlers
          ), K(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), K(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), K(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), K(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), this.toolTip = new oa(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
        }
        function x2(a, e) {
          for (var c = [], b, d = 0; d < a.length; d++) if (0 == d) c.push(a[0]);
          else {
            var f, n, l;
            l = d - 1;
            f = 0 === l ? 0 : l - 1;
            n = l === a.length - 1 ? l : l + 1;
            b = Math.abs((a[n].x - a[f].x) / (0 === a[n].x - a[l].x ? 0.01 : a[n].x - a[l].x)) * (e - 1) / 2 + 1;
            var m2 = (a[n].x - a[f].x) / b;
            b = (a[n].y - a[f].y) / b;
            c[c.length] = a[l].x > a[f].x && 0 < m2 || a[l].x < a[f].x && 0 > m2 ? { x: a[l].x + m2 / 3, y: a[l].y + b / 3 } : { x: a[l].x, y: a[l].y + (1 === c.length ? 0 : b / 9) };
            l = d;
            f = 0 === l ? 0 : l - 1;
            n = l === a.length - 1 ? l : l + 1;
            b = Math.abs((a[n].x - a[f].x) / (0 === a[l].x - a[f].x ? 0.01 : a[l].x - a[f].x)) * (e - 1) / 2 + 1;
            m2 = (a[n].x - a[f].x) / b;
            b = (a[n].y - a[f].y) / b;
            c[c.length] = a[l].x > a[f].x && 0 < m2 || a[l].x < a[f].x && 0 > m2 ? { x: a[l].x - m2 / 3, y: a[l].y - b / 3 } : { x: a[l].x, y: a[l].y - b / 9 };
            c[c.length] = a[d];
          }
          return c;
        }
        function B(a, e, c, b, d, f, n, l, m2, k) {
          var q = 0;
          k ? (n.color = f, l.color = f) : k = 1;
          q = m2 ? Math.abs(d - c) : Math.abs(b - e);
          q = 0 < n.trimLength ? Math.abs(q * n.trimLength / 100) : Math.abs(q - n.length);
          m2 ? (c += q / 2, d -= q / 2) : (e += q / 2, b -= q / 2);
          var q = 1 === Math.round(n.thickness) % 2 ? 0.5 : 0, p = 1 === Math.round(l.thickness) % 2 ? 0.5 : 0;
          a.save();
          a.globalAlpha = k;
          a.strokeStyle = l.color || f;
          a.lineWidth = l.thickness || 2;
          a.setLineDash && a.setLineDash(J(l.dashType, l.thickness));
          a.beginPath();
          m2 && 0 < l.thickness ? (a.moveTo(b - n.thickness / 2, Math.round((c + d) / 2) - p), a.lineTo(e + n.thickness / 2, Math.round((c + d) / 2) - p)) : 0 < l.thickness && (a.moveTo(Math.round((e + b) / 2) - p, c + n.thickness / 2), a.lineTo(Math.round((e + b) / 2) - p, d - n.thickness / 2));
          a.stroke();
          a.strokeStyle = n.color || f;
          a.lineWidth = n.thickness || 2;
          a.setLineDash && a.setLineDash(J(n.dashType, n.thickness));
          a.beginPath();
          m2 && 0 < n.thickness ? (a.moveTo(b - q, c), a.lineTo(b - q, d), a.moveTo(e + q, c), a.lineTo(e + q, d)) : 0 < n.thickness && (a.moveTo(e, c + q), a.lineTo(
            b,
            c + q
          ), a.moveTo(e, d - q), a.lineTo(b, d - q));
          a.stroke();
          a.restore();
        }
        function F2(a, e) {
          F2.base.constructor.call(this, "Legend", "legend", e, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.ghostCtx = this.chart._eventManager.ghostCtx;
          this.items = [];
          this.optionsName = "legend";
          this.height = this.width = 0;
          this.orientation = null;
          this.dataSeries = [];
          this.bounds = { x1: null, y1: null, x2: null, y2: null };
          "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
          this.lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
          this.horizontalSpacing = this.fontSize;
        }
        function U2(a, e, c, b) {
          U2.base.constructor.call(this, "DataSeries", "data", e, c, a);
          this.chart = a;
          this.canvas = a.canvas;
          this._ctx = a.canvas.ctx;
          this.index = c;
          this.noDataPointsInPlotArea = 0;
          this.id = b;
          this.chart._eventManager.objectMap[b] = { id: b, objectType: "dataSeries", dataSeriesIndex: c };
          a = e.dataPoints ? e.dataPoints.length : 0;
          this.dataPointEOs = [];
          for (e = 0; e < a; e++) this.dataPointEOs[e] = {};
          this.dataPointIds = [];
          this.plotUnit = [];
          this.axisY = this.axisX = null;
          this.optionsName = "data";
          this.isOptionsInArray = true;
          null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
          this.axisPlacement = this.getDefaultAxisPlacement();
          "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
        }
        function A(a, e, c, b, d, f) {
          A.base.constructor.call(this, "Axis", e, c, b, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = a.ctx;
          this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
          this.labels = [];
          this.dataSeries = [];
          this._stripLineLabels = this._ticks = this._labels = null;
          this.dataInfo = { min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity };
          this.isOptionsInArray = true;
          "axisX" === d ? ("left" === f || "bottom" === f ? (this.optionsName = "axisX", m(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", m(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" === f || "bottom" === f ? (this.optionsName = "axisY", m(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", m(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
          "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
          "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
          this.type = d;
          "axisX" !== d || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
          this._position = f;
          this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
          this.labelAngle = (this.labelAngle % 360 + 360) % 360;
          90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
          this.options.scaleBreaks && (this.scaleBreaks = new ga2(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
          this.stripLines = [];
          if (this.options.stripLines && 0 < this.options.stripLines.length) for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new ia2(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
          this.options.crosshair && (this.crosshair = new ea2(this.chart, this.options.crosshair, this), this.crosshair._updatedValue = m(this.sessionVariables.crosshairValue) ? null : this.sessionVariables.crosshairValue);
          this._titleTextBlock = null;
          this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
          this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
          this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
          this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
          null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(
            this.viewportMinimum,
            this.minimum
          ));
          null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
          this.trackChanges("viewportMinimum");
          this.trackChanges("viewportMaximum");
          m(this.options.tickLength) && (this.tickLength = "left" === f || "right" === f ? Math.min(this.tickLength, 0.3 * this.chart.width) : Math.min(this.tickLength, 0.3 * this.chart.height));
        }
        function ga2(a, e, c, b) {
          ga2.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", e, null, b);
          this.id = c;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = b;
          this.optionsName = "scaleBreaks";
          this.isOptionsInArray = false;
          this._appliedBreaks = [];
          this.customBreaks = [];
          this.autoBreaks = [];
          "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
          this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
          if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
            for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new ca2(
              this.chart,
              "customBreaks",
              this.options.customBreaks[a],
              a,
              ++this.chart._eventManager.lastObjectId,
              this
            )), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
            this._appliedBreaks.sort(function(a2, b2) {
              return a2.startValue - b2.startValue;
            });
            for (a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--);
          }
        }
        function ca2(a, e, c, b, d, f) {
          ca2.base.constructor.call(this, "Break", e, c, b, f);
          this.id = d;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.scaleBreaks = f;
          this.optionsName = e;
          this.isOptionsInArray = true;
          this.type = c.type ? this.type : f.type;
          this.fillOpacity = m(c.fillOpacity) ? f.fillOpacity : this.fillOpacity;
          this.lineThickness = m(c.lineThickness) ? f.lineThickness : this.lineThickness;
          this.color = c.color ? this.color : f.color;
          this.lineColor = c.lineColor ? this.lineColor : f.lineColor;
          this.lineDashType = c.lineDashType ? this.lineDashType : f.lineDashType;
          !m(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
          !m(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
          "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
          this.spacing = "undefined" === typeof c.spacing ? f.spacing : c.spacing;
          "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = f.spacing);
          this.size = f.parent.logarithmic ? 1 : 0;
        }
        function ia2(a, e, c, b, d) {
          ia2.base.constructor.call(this, "StripLine", "stripLines", e, c, d);
          this.id = b;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.label = this.label;
          this.axis = d;
          this.optionsName = "stripLines";
          this.isOptionsInArray = true;
          this._thicknessType = "pixel";
          null !== this.startValue && null !== this.endValue && (this.value = d.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null);
          this.tickLength = m(e.tickLength) ? d.tickLength : e.tickLength;
        }
        function ea2(a, e, c) {
          ea2.base.constructor.call(this, "Crosshair", "crosshair", e, null, c);
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = c;
          this.optionsName = "crosshair";
          this._thicknessType = "pixel";
        }
        function oa(a, e) {
          oa.base.constructor.call(this, "ToolTip", "toolTip", e, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.currentDataPointIndex = this.currentSeriesIndex = -1;
          this._prevY = this._prevX = NaN;
          this.containerTransitionDuration = 0.1;
          this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
          this.optionsName = "toolTip";
          this._initialize();
        }
        function ja2(a) {
          this.chart = a;
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.ghostCanvas = xa(this.chart.width, this.chart.height, true);
          this.ghostCtx = this.ghostCanvas.getContext("2d");
          this.mouseoveredObjectMaps = [];
        }
        function na2(a) {
          this.chart = a;
          this.ctx = this.chart.plotArea.ctx;
          this.animations = [];
          this.animationRequestId = null;
        }
        ra(s2, T);
        s2.prototype.destroy = function() {
          var a = this.allDOMEventHandlers;
          this._animator && this._animator.cancelAllAnimations();
          this._panTimerId && clearTimeout(this._panTimerId);
          for (var e = 0; e < a.length; e++) {
            var c = a[e][0], b = a[e][1], d = a[e][2], f = a[e][3], f = f || false;
            c.removeEventListener ? c.removeEventListener(b, d, f) : c.detachEvent && c.detachEvent("on" + b, d);
          }
          this.allDOMEventHandlers = [];
          for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); ) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
          for (; this.container && this.container.hasChildNodes(); ) this.container.removeChild(this.container.lastChild);
          for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); ) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
          this.container = this._canvasJSContainer = null;
          this.toolTip.container = null;
          this.canvas && za(this.canvas);
          this.overlaidCanvas && za(this.overlaidCanvas);
          this._preRenderCanvas && za(this._preRenderCanvas);
          this._breaksCanvas && za(this._breaksCanvas);
          this._eventManager && this._eventManager.ghostCanvas && za(this._eventManager.ghostCanvas);
          this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = null;
        };
        s2.prototype._updateOptions = function() {
          var a = this;
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("dataPointWidth");
          this.updateOption("dataPointMinWidth");
          this.updateOption("dataPointMaxWidth");
          this.updateOption("interactivityEnabled");
          this.updateOption("theme");
          this.stockChart && this.stockChart.options && "undefined" !== typeof this.stockChart.options.theme && m(this.options.theme) ? this.theme = this.stockChart.theme : m(this.stockChart) && m(this.theme) && (this.theme = "light1");
          this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof Da[this.colorSet] ? Da[this.colorSet] : Da.colorSet1);
          this.updateOption("backgroundColor");
          this.stockChart && (this.stockChart.options && "undefined" !== typeof this.stockChart.options.backgroundColor && m(this.options.backgroundColor)) && (this.backgroundColor = this.stockChart.backgroundColor);
          this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
          this.updateOption("culture");
          this.stockChart && m(this.options.culture) && (this.culture = this.stockChart.culture);
          this._cultureInfo = new La(this.culture);
          this.updateOption("animationEnabled");
          this.animationEnabled = this.animationEnabled && u;
          this.updateOption("animationDuration");
          this.stockChart && (this.stockChart.options && !m(this.stockChart.options.animationEnabled)) && (this.animationEnabled = this.stockChart.animationEnabled && u);
          this.stockChart && (this.stockChart.options && !m(this.stockChart.options.animationDuration)) && (this.animationDuration = this.stockChart.animationDuration);
          this.updateOption("rangeChanging");
          this.updateOption("rangeChanged");
          this.updateOption("exportEnabled");
          this.updateOption("exportFileName");
          this.updateOption("zoomType");
          this.toolbar = new Xa(this, this.options.toolbar);
          if (this.stockChart && this.stockChart.options && this.stockChart.options.toolbar && !this.options.toolbar) for (var e in this.stockChart.options.toolbar) this.toolbar[e] = this.stockChart.options.toolbar[e];
          !m(this.options.zoomEnabled) && this.hasOptionChanged("zoomEnabled") && (this.panEnabled = this.options.zoomEnabled ? false : this.panEnabled, this.sessionVariables.zoomEnabled = this.options.zoomEnabled);
          if (this.options.zoomEnabled || this.panEnabled) {
            if (this._zoomButton) Q(this._zoomButton, { border: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, height: 2 * this.toolbar.buttonBorderThickness + 25 + "px", width: 2 * this.toolbar.buttonBorderThickness + 40 + "px", backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && this._zoomButton.childNodes[0] && Q(
              this._zoomButton.childNodes[0],
              { WebkitFilter: "invert(0%)", filter: "invert(0%)" }
            );
            else {
              var c = false;
              wa(this._zoomButton = document.createElement("button"));
              va(this, this._zoomButton, "pan");
              this._toolBar.appendChild(this._zoomButton);
              Q(this._zoomButton, { border: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, height: 2 * this.toolbar.buttonBorderThickness + 25 + "px", width: 2 * this.toolbar.buttonBorderThickness + 40 + "px", backgroundClip: "padding-box" });
              K(this._zoomButton, "touchstart", function(a2) {
                c = true;
              }, this.allDOMEventHandlers);
              K(this._zoomButton, "click", function() {
                a.zoomEnabled ? (a.zoomEnabled = false, a.panEnabled = true, va(a, a._zoomButton, "zoom")) : (a.zoomEnabled = true, a.panEnabled = false, va(a, a._zoomButton, "pan"));
                a.render();
              }, this.allDOMEventHandlers);
              K(this._zoomButton, "mousemove", function() {
                c ? c = false : (Q(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && Q(a._zoomButton.childNodes[0], {
                  WebkitFilter: "invert(100%)",
                  filter: "invert(100%)"
                }));
              }, this.allDOMEventHandlers);
              K(this._zoomButton, "mouseout", function() {
                c || (Q(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && Q(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
              }, this.allDOMEventHandlers);
            }
            this._resetButton ? (Q(this._resetButton, {
              border: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
              borderLeft: "none",
              height: 2 * this.toolbar.buttonBorderThickness + 25 + "px",
              width: this.toolbar.buttonBorderThickness + 40 + "px",
              backgroundColor: a.toolbar.itemBackgroundColor,
              color: a.toolbar.fontColor
            }), 0 >= navigator.userAgent.search("MSIE") && this._resetButton.childNodes[0] && Q(this._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }), this._resetButton.title = this._cultureInfo.resetText) : (c = false, wa(this._resetButton = document.createElement("button")), va(this, this._resetButton, "reset"), Q(
              this._resetButton,
              { border: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, borderLeft: "none", height: 2 * this.toolbar.buttonBorderThickness + 25 + "px", width: this.toolbar.buttonBorderThickness + 40 + "px", backgroundClip: "padding-box" }
            ), this._toolBar.appendChild(this._resetButton), K(this._resetButton, "touchstart", function(a2) {
              c = true;
            }, this.allDOMEventHandlers), K(this._resetButton, "click", function() {
              a.toolTip.hide();
              a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent(
                "hidden",
                { chart: a, toolTip: a.toolTip },
                a.toolTip
              );
              a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = true, a.panEnabled = false, va(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = false, a.panEnabled = false);
              if (a.sessionVariables.axisX) for (var b = 0; b < a.sessionVariables.axisX.length; b++) a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum = null;
              if (a.sessionVariables.axisX2) for (b = 0; b < a.sessionVariables.axisX2.length; b++) a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY) for (b = 0; b < a.sessionVariables.axisY.length; b++) a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY2) for (b = 0; b < a.sessionVariables.axisY2.length; b++) a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
              a.resetOverlayedCanvas();
              0 >= navigator.userAgent.search("MSIE") && Q(
                a._resetButton.childNodes[0],
                { WebkitFilter: "invert(0%)", filter: "invert(0%)" }
              );
              wa(a._zoomButton, a._resetButton);
              a.stockChart && (a.stockChart._rangeEventParameter = { stockChart: a.stockChart, source: "chart", index: a.stockChart.charts.indexOf(a), minimum: null, maximum: null });
              a._dispatchRangeEvent("rangeChanging", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
              a.render();
              a.syncCharts && a.stockChart && (a.stockChart.rangeUpdatedBy = !a.stockChart.navigator.slider || m(a.stockChart.navigator.slider.options.minimum) && m(a.stockChart.navigator.slider.options.maximum) ? !a.stockChart.rangeSelector.enabled || !a.stockChart.rangeSelector.inputFields.enabled || m(a.stockChart.rangeSelector.inputFields.options.startValue) && m(a.stockChart.rangeSelector.inputFields.options.endValue) ? null : "inputFields" : "navigator", a.stockChart.rangeUpdatedBy = null, a.stockChart.rangeSelector.sessionVariables._clickedRangeButtonIndex = null, a.syncCharts(null, null), !m(a.stockChart._selectedRangeButtonIndex) && a.stockChart._selectedRangeButtonIndex < a.stockChart.rangeSelector.buttons.length && (b = a.stockChart.rangeSelector.buttons[a.stockChart._selectedRangeButtonIndex], b.enabled && (b.state = "on", b.textBlock.fontWeight = "bold", b.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, b.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect, b.render())), a.stockChart.rangeSelector && a.stockChart.rangeSelector.enabled && a.stockChart.rangeSelector.render());
              a._dispatchRangeEvent("rangeChanged", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart));
            }, this.allDOMEventHandlers), K(this._resetButton, "mousemove", function() {
              c || (Q(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && Q(a._resetButton.childNodes[0], {
                WebkitFilter: "invert(100%)",
                filter: "invert(100%)"
              }));
            }, this.allDOMEventHandlers), K(this._resetButton, "mouseout", function() {
              c || (Q(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && Q(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
            }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
            this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = true, this.zoomEnabled = false) : (this.zoomEnabled = true, this.panEnabled = false), Na(a._zoomButton, a._resetButton)) : (this.zoomEnabled = true, this.panEnabled = false));
          } else this.panEnabled = this.zoomEnabled = false;
          jb(this);
          this._toolBar && (this._zoomButton && this._zoomButton.parentNode === this._toolBar && this._toolBar.appendChild(this._zoomButton), this._resetButton && this._resetButton.parentNode === this._toolBar && this._toolBar.appendChild(this._resetButton), this._menuButton && this._menuButton.parentNode === this._toolBar && this._toolBar.appendChild(this._menuButton));
          "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? va(a, a._zoomButton, "zoom") : va(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && va(a, a._resetButton, "reset"));
          this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
          for (e in this.toolTip.options) this.toolTip.options.hasOwnProperty(e) && this.toolTip.updateOption(e);
        };
        s2.prototype._updateSize = function() {
          var a;
          a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
          var e = 0, c = 0, b = db(this.container);
          this.options.width ? e = this.width : this.width = e = 0 < this.container.clientWidth - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) ? this.container.clientWidth - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) : this.width;
          m(this.stockChart) || m(this.index) ? this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) ? this.container.clientHeight - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) : this.height : c = this.height = this.stockChart._chartsHeight[this.index];
          if (this.canvas.width !== e * la || this.canvas.height !== c * la) {
            for (b = 0; b < a.length; b++) Oa(a[b], e, c);
            this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height, width: this.width, height: this.height };
            a = true;
          } else a = false;
          return a;
        };
        s2.prototype._initialize = function() {
          this.isNavigator = m(this.parent) || m(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? false : true;
          this._animator ? this._animator.cancelAllAnimations() : this._animator = new na2(this);
          this.removeAllEventListeners();
          this.disableToolTip = this.sessionVariables.disableToolTip || false;
          this._axes = [];
          this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
          this._updateOptions();
          this.animatedRender = u && this.animationEnabled && 0 === this.renderCount;
          this._updateSize();
          this.clearCanvas();
          this.ctx.beginPath();
          this.axisX = [];
          this.axisX2 = [];
          this.axisY = [];
          this.axisY2 = [];
          this._indexLabels = [];
          this._dataInRenderedOrder = [];
          this._events = [];
          this._eventManager && this._eventManager.reset();
          this.plotInfo = { axisPlacement: null, plotTypes: [] };
          this.layoutManager = new Ga(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
          this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
          this.data = [];
          this.title = null;
          this.subtitles = [];
          var a = 0, e = null;
          if (this.options.data) {
            for (var c = 0; c < this.options.data.length; c++) if (a++, !this.options.data[c].type || 0 <= s2._supportedChartTypes.indexOf(this.options.data[c].type)) {
              var b = new U2(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
              if (!m(b) && b.dataPoints) {
                for (var d = 0; d < b.dataPoints.length; d++) if (b.dataPoints[d].x && b.dataPoints[d].x.getTime) {
                  b.xValueType = "dateTime";
                  break;
                }
              }
              "error" === b.type && (b.linkedDataSeriesIndex = m(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null);
              null === b.name && (b.name = "DataSeries " + a);
              null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]], b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? (b._colorSet = [this.selectedColorSet[0]], b.color = this.selectedColorSet[0]) : b._colorSet = this.selectedColorSet : b._colorSet = [b.color];
              if ("boxAndWhisker" === b.type || "error" === b.type) b.whiskerColor = null === b.whiskerColor ? b.color : b.whiskerColor, b.stemColor = null === b.stemColor ? b.color : b.stemColor;
              null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
              "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a2) {
                return a2.x;
              }) && b.dataPoints.sort(h) : b.dataPoints.sort(h));
              this.data.push(b);
              var d = b.axisPlacement, e = e || d, f;
              "normal" === d ? "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === d ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === d ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === d && "none" === this.plotInfo.axisPlacement && (f = 'You cannot combine "' + b.type + '" with pie chart');
              if (f && window.console) {
                window.console.log(f);
                return;
              }
            }
            for (c = 0; c < this.data.length; c++) {
              if ("none" == e && "error" === this.data[c].type && window.console) {
                window.console.log('You cannot combine "' + b.type + '" with error chart');
                return;
              }
              "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = e || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex]);
            }
          }
          this._objectsInitialized = true;
          this._plotAreaElements = [];
          this._dataPointWidths = [];
          this._dataPointMinWidths = [];
          this._dataPointMaxWidths = [];
        };
        s2._supportedChartTypes = Ba("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        s2.prototype.setLayout = function() {
          for (var a = this._plotAreaElements, e = 0; e < this.data.length; e++) if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
            if (!this.data[e].axisYType || "primary" === this.data[e].axisYType) if (this.options.axisY && 0 < this.options.axisY.length) {
              if (!this.axisY.length) for (var c = 0; c < this.options.axisY.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new A(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new A(
                this,
                "axisY",
                this.options.axisY[c],
                c,
                "axisY",
                "bottom"
              ));
              this.data[e].axisY = this.axisY[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY.length ? this.data[e].axisYIndex : 0];
              this.axisY[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY.length ? this.data[e].axisYIndex : 0].dataSeries.push(this.data[e]);
            } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new A(this, "axisY", this.options.axisY, 0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new A(
              this,
              "axisY",
              this.options.axisY,
              0,
              "axisY",
              "bottom"
            ))), this.data[e].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[e]);
            if ("secondary" === this.data[e].axisYType) if (this.options.axisY2 && 0 < this.options.axisY2.length) {
              if (!this.axisY2.length) for (c = 0; c < this.options.axisY2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new A(this, "axisY2", this.options.axisY2[c], c, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new A(
                this,
                "axisY2",
                this.options.axisY2[c],
                c,
                "axisY",
                "top"
              ));
              this.data[e].axisY = this.axisY2[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY2.length ? this.data[e].axisYIndex : 0];
              this.axisY2[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY2.length ? this.data[e].axisYIndex : 0].dataSeries.push(this.data[e]);
            } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[e].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[e]);
            if (!this.data[e].axisXType || "primary" === this.data[e].axisXType) if (this.options.axisX && 0 < this.options.axisX.length) {
              if (!this.axisX.length) for (c = 0; c < this.options.axisX.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] = new A(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new A(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
              this.data[e].axisX = this.axisX[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX.length ? this.data[e].axisXIndex : 0];
              this.axisX[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX.length ? this.data[e].axisXIndex : 0].dataSeries.push(this.data[e]);
            } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new A(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new A(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[e].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[e]);
            if ("secondary" === this.data[e].axisXType) if (this.options.axisX2 && 0 < this.options.axisX2.length) {
              if (!this.axisX2.length) for (c = 0; c < this.options.axisX2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] = new A(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new A(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
              this.data[e].axisX = this.axisX2[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX2.length ? this.data[e].axisXIndex : 0];
              this.axisX2[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX2.length ? this.data[e].axisXIndex : 0].dataSeries.push(this.data[e]);
            } else this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new A(
              this,
              "axisX2",
              this.options.axisX2,
              0,
              "axisX",
              "top"
            )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new A(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[e].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[e]);
          }
          if (this.axisY) {
            for (c = 1; c < this.axisY.length; c++) "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
            for (c = 0; c < this.axisY.length - 1; c++) "undefined" === typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10);
          }
          if (this.axisY2) {
            for (c = 1; c < this.axisY2.length; c++) "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
            for (c = 0; c < this.axisY2.length - 1; c++) "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10);
          }
          if (this.axisY && 0 < this.axisY.length && this.axisY2 && 0 < this.axisY2.length) {
            if (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness) {
              c = false;
              for (e = 0; e < this.data.length; e++) if ("primary" === this.data[e].axisYType && this.data[e].visible) {
                c = true;
                break;
              }
              c && (this.axisY2[0].gridThickness = 0);
            } else if (0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness) {
              c = false;
              for (e = 0; e < this.data.length; e++) if ("secondary" === this.data[e].axisYType && this.data[e].visible) {
                c = true;
                break;
              }
              c && (this.axisY[0].gridThickness = 0);
            }
          }
          if (this.axisX) for (c = 0; c < this.axisX.length; c++) "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
          if (this.axisX2) for (c = 0; c < this.axisX2.length; c++) "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
          this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
          c = false;
          if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled)) {
            for (e = 0; e < this._axes.length; e++) if (!m(this._axes[e].viewportMinimum) || !m(this._axes[e].viewportMaximum)) {
              c = true;
              break;
            }
          }
          c ? (this._menuButton && Q(this._menuButton, { border: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, borderLeft: "none", height: 2 * this.toolbar.buttonBorderThickness + 25 + "px", width: this.toolbar.buttonBorderThickness + 40 + "px", backgroundClip: "padding-box" }), Na(this._zoomButton, this._resetButton), this._toolBar.style.border = "none") : (this._menuButton && Q(this._menuButton, { border: "none", height: "25px", width: "40px" }), wa(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = true), this.stockChart || (this.panEnabled = false));
          hb(this);
          this._processData();
          this.title = new Ca(this, this.options.title);
          this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout();
          if (this.options.subtitles) for (e = 0; e < this.options.subtitles.length; e++) c = new Ka(this, this.options.subtitles[e], e), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
          this.legend = new F2(this, this.options.legend);
          for (e = 0; e < this.data.length; e++) (this.data[e].showInLegend || "pie" === this.data[e].type || "doughnut" === this.data[e].type || "funnel" === this.data[e].type || "pyramid" === this.data[e].type) && this.legend.dataSeries.push(this.data[e]);
          this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
          for (e = 0; e < this._axes.length; e++) if (this._axes[e].scaleBreaks && this._axes[e].scaleBreaks._appliedBreaks.length) {
            u ? (this._breaksCanvas = xa(this.width, this.height, true), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
            break;
          }
          this._preRenderCanvas = xa(this.width, this.height);
          this._preRenderCtx = this._preRenderCanvas.getContext("2d");
          "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || A.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        };
        s2.prototype.renderElements = function() {
          if (this.height && this.width) {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var e = 0; e < this.subtitles.length; e++) this.subtitles[e].dockInsidePlotArea || this.subtitles[e].render();
            this.legend.dockInsidePlotArea || this.legend.render();
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) A.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
            else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
            else return;
            for (e = 0; e < a.length; e++) a[e].setLayout(), a[e].render();
            var c = [];
            if (this.animatedRender) {
              var b = xa(this.width, this.height);
              b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
            }
            kb(this);
            var a = this.ctx.miterLimit, d;
            this.ctx.miterLimit = 3;
            u && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (e = 0; e < this.plotInfo.plotTypes.length; e++) for (var f = this.plotInfo.plotTypes[e], n = 0; n < f.plotUnits.length; n++) {
              var l = f.plotUnits[n], L = null;
              l.targetCanvas && za(l.targetCanvas);
              l.targetCanvas = null;
              this.animatedRender && (l.targetCanvas = xa(this.width, this.height), l.targetCanvasCtx = l.targetCanvas.getContext("2d"), d = l.targetCanvasCtx.miterLimit, l.targetCanvasCtx.miterLimit = 3);
              "line" === l.type ? L = this.renderLine(l) : "stepLine" === l.type ? L = this.renderStepLine(l) : "spline" === l.type ? L = this.renderSpline(l) : "column" === l.type ? L = this.renderColumn(l) : "bar" === l.type ? L = this.renderBar(l) : "area" === l.type ? L = this.renderArea(l) : "stepArea" === l.type ? L = this.renderStepArea(l) : "splineArea" === l.type ? L = this.renderSplineArea(l) : "stackedColumn" === l.type ? L = this.renderStackedColumn(l) : "stackedColumn100" === l.type ? L = this.renderStackedColumn100(l) : "stackedBar" === l.type ? L = this.renderStackedBar(l) : "stackedBar100" === l.type ? L = this.renderStackedBar100(l) : "stackedArea" === l.type ? L = this.renderStackedArea(l) : "stackedArea100" === l.type ? L = this.renderStackedArea100(l) : "bubble" === l.type ? L = L = this.renderBubble(l) : "scatter" === l.type ? L = this.renderScatter(l) : "pie" === l.type ? this.renderPie(l) : "doughnut" === l.type ? this.renderPie(l) : "funnel" === l.type ? L = this.renderFunnel(l) : "pyramid" === l.type ? L = this.renderFunnel(l) : "candlestick" === l.type ? L = this.renderCandlestick(l) : "ohlc" === l.type ? L = this.renderCandlestick(l) : "rangeColumn" === l.type ? L = this.renderRangeColumn(l) : "error" === l.type ? L = this.renderError(l) : "rangeBar" === l.type ? L = this.renderRangeBar(l) : "rangeArea" === l.type ? L = this.renderRangeArea(l) : "rangeSplineArea" === l.type ? L = this.renderRangeSplineArea(l) : "waterfall" === l.type ? L = this.renderWaterfall(l) : "boxAndWhisker" === l.type && (L = this.renderBoxAndWhisker(l));
              for (var k = 0; k < l.dataSeriesIndexes.length; k++) this._dataInRenderedOrder.push(this.data[l.dataSeriesIndexes[k]]);
              this.animatedRender && (l.targetCanvasCtx.miterLimit = d, L && c.push(L));
            }
            this._dataPointWidths && (this.dataPointWidth = this._dataPointWidths[this._dataPointWidths.length - 1], this.dataPointMinWidth = this._dataPointMinWidths[this._dataPointMinWidths.length - 1], this.dataPointMaxWidth = this._dataPointMaxWidths[this._dataPointMaxWidths.length - 1]);
            this.ctx.miterLimit = a;
            this.animatedRender && this._breaksCanvasCtx && c.push({ source: this._breaksCanvasCtx, dest: this.plotArea.ctx, animationCallback: M.fadeInAnimation, easingFunction: M.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 });
            this.animatedRender && 0 < this._indexLabels.length && (d = xa(this.width, this.height).getContext("2d"), Aa(d), c.push(this.renderIndexLabels(d)));
            var q = this;
            if (0 < c.length) q.disableToolTip = true, q._animator.animate(200, q.animationDuration, function(a2) {
              q.ctx.clearRect(0, 0, q.width, q.height);
              q.ctx.drawImage(b, 0, 0, Math.floor(q.width * la), Math.floor(q.height * la), 0, 0, q.width, q.height);
              for (var d2 = 0; d2 < c.length; d2++) L = c[d2], 1 > a2 && "undefined" !== typeof L.startTimePercent ? a2 >= L.startTimePercent && L.animationCallback(L.easingFunction(a2 - L.startTimePercent, 0, 1, 1 - L.startTimePercent), L) : L.animationCallback(L.easingFunction(
                a2,
                0,
                1,
                1
              ), L);
              q.dispatchEvent("dataAnimationIterationEnd", { chart: q });
            }, function() {
              c = [];
              for (var a2 = 0; a2 < q.plotInfo.plotTypes.length; a2++) for (var d2 = q.plotInfo.plotTypes[a2], e2 = 0; e2 < d2.plotUnits.length; e2++) {
                var f2 = d2.plotUnits[e2];
                f2.targetCanvas && za(f2.targetCanvas);
                f2.targetCanvas = null;
              }
              b = null;
              q.disableToolTip = false;
              q.dispatchEvent("dataAnimationEnd", { chart: q });
            });
            else {
              if (q._breaksCanvas) if (u) q.plotArea.ctx.drawImage(q._breaksCanvas, 0, 0, this.width, this.height);
              else for (k = 0; k < q._axes.length; k++) q._axes[k].createMask();
              0 < q._indexLabels.length && q.renderIndexLabels();
              q.dispatchEvent("dataAnimationIterationEnd", { chart: q });
              q.dispatchEvent("dataAnimationEnd", { chart: q });
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || wa(this._zoomButton, this._resetButton);
            m(this.toolTip._xValue) || m(this.toolTip._dataSeriesIndex) || this.toolTip.showAtX(this.toolTip._xValue, this.toolTip._dataSeriesIndex);
            this.toolTip._updateToolTip();
            this.toolTip.enabled && this.toolTip._updatedEventParameters && !isNaN(this.toolTip._prevX) && !isNaN(this.toolTip._prevY) && this.toolTip.container && this.toolTip.container.style && this.toolTip.dispatchEvent("none" === this.toolTip.container.style.display ? "hidden" : "updated", this.toolTip._updatedEventParameters, this.toolTip);
            this.renderCount++;
            Ja && (q = this, setTimeout(function() {
              var a2 = document.getElementById("ghostCanvasCopy");
              a2 && (Oa(a2, q.width, q.height), a2.getContext("2d").drawImage(q._eventManager.ghostCanvas, 0, 0));
            }, 2e3));
            this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
            for (k = 0; k < this._axes.length; k++) this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
          }
        };
        s2.prototype.render = function(a) {
          a && (this.options = a);
          this._initialize();
          this.setLayout();
          this.renderElements();
          this._preRenderCanvas && za(this._preRenderCanvas);
        };
        s2.prototype.attachPlotAreaEventHandlers = function() {
          this.attachEvent({
            context: this,
            chart: this,
            mousedown: this._plotAreaMouseDown,
            mouseup: this._plotAreaMouseUp,
            mousemove: this._plotAreaMouseMove,
            cursor: this.panEnabled ? "move" : "default",
            capture: true,
            bounds: this.plotArea
          });
        };
        s2.prototype.categoriseDataSeries = function() {
          for (var a = "", e = 0; e < this.data.length; e++) if (a = this.data[e], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= s2._supportedChartTypes.indexOf(a.type)) {
            for (var c = null, b = false, d = null, f = false, n = 0; n < this.plotInfo.plotTypes.length; n++) if (this.plotInfo.plotTypes[n].type === a.type) {
              b = true;
              c = this.plotInfo.plotTypes[n];
              break;
            }
            b || (c = { type: a.type, totalDataSeries: 0, plotUnits: [] }, this.plotInfo.plotTypes.push(c));
            for (n = 0; n < c.plotUnits.length; n++) if (c.plotUnits[n].axisYType === a.axisYType && c.plotUnits[n].axisXType === a.axisXType && c.plotUnits[n].axisYIndex === a.axisYIndex && c.plotUnits[n].axisXIndex === a.axisXIndex) {
              f = true;
              d = c.plotUnits[n];
              break;
            }
            f || (d = { type: a.type, previousDataSeriesCount: 0, index: c.plotUnits.length, plotType: c, axisXType: a.axisXType, axisYType: a.axisYType, axisYIndex: a.axisYIndex, axisXIndex: a.axisXIndex, axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0], axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0], dataSeriesIndexes: [], yTotals: [], yAbsTotals: [] }, c.plotUnits.push(d));
            c.totalDataSeries++;
            d.dataSeriesIndexes.push(e);
            a.plotUnit = d;
          }
          for (e = 0; e < this.plotInfo.plotTypes.length; e++) for (c = this.plotInfo.plotTypes[e], n = a = 0; n < c.plotUnits.length; n++) c.plotUnits[n].previousDataSeriesCount = a, a += c.plotUnits[n].dataSeriesIndexes.length;
        };
        s2.prototype.assignIdToDataPoints = function() {
          for (var a = 0; a < this.data.length; a++) {
            var e = this.data[a];
            if (e.dataPoints) for (var c = e.dataPoints.length, b = 0; b < c; b++) e.dataPointIds[b] = ++this._eventManager.lastObjectId;
          }
        };
        s2.prototype._processData = function() {
          this.assignIdToDataPoints();
          this.categoriseDataSeries();
          for (var a = 0; a < this.plotInfo.plotTypes.length; a++) for (var e = this.plotInfo.plotTypes[a], c = 0; c < e.plotUnits.length; c++) {
            var b = e.plotUnits[c];
            "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b);
          }
          this.calculateAutoBreaks();
        };
        s2.prototype._processMultiseriesPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var e = a.axisY.dataInfo, c = a.axisX.dataInfo, b, d, f = false, n = [], l = {}, m2 = 0; m2 < a.dataSeriesIndexes.length; m2++) {
              var k = this.data[a.dataSeriesIndexes[m2]], q = 0, p = false, r = false, g;
              if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement) {
                var N = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, C = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
                N > C && (N = -Infinity, C = Infinity);
              }
              if (k.dataPoints[q].x && k.dataPoints[q].x.getTime || "dateTime" === k.xValueType) f = true;
              for (q = 0; q < k.dataPoints.length; q++) {
                "undefined" === typeof k.dataPoints[q].x && (k.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
                k.dataPoints[q].x.getTime ? (f = true, b = k.dataPoints[q].x.getTime()) : b = k.dataPoints[q].x;
                d = k.dataPoints[q].y;
                l[b] || (n.push(b), l[b] = true);
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                d < e.min && "number" === typeof d && (e.min = d);
                d > e.max && "number" === typeof d && (e.max = d);
                if (0 < q && null !== d && null !== k.dataPoints[q - 1].y) if (a.axisY.logarithmic) {
                  var h2 = d / k.dataPoints[q - 1].y;
                  1 > h2 && (h2 = 1 / h2);
                  e.minDiff > h2 && 1 !== h2 && (e.minDiff = h2);
                } else h2 = d - k.dataPoints[q - 1].y, 0 > h2 && (h2 *= -1), e.minDiff > h2 && 0 !== h2 && (e.minDiff = h2);
                if (b < N && !p) null !== d && (g = b);
                else {
                  if (!p && (p = true, 0 < q)) {
                    q -= 2;
                    continue;
                  }
                  if (b > C && !r) r = true;
                  else if (b > C && r) continue;
                  k.dataPoints[q].label && (a.axisX.labels[b] = k.dataPoints[q].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === d ? c.viewPortMin === b && g < b && (c.viewPortMin = g) : (d < e.viewPortMin && "number" === typeof d && (e.viewPortMin = d), d > e.viewPortMax && "number" === typeof d && (e.viewPortMax = d));
                }
              }
              k.axisX.valueType = k.xValueType = f ? "dateTime" : "number";
            }
            n.sort(function(a2, b2) {
              return a2 - b2;
            });
            for (q = 1; q < n.length; q++) e = a.axisX.logarithmic ? n[q] / n[q - 1] : n[q] - n[q - 1], c.minDiff > e && (c.minDiff = e);
          }
        };
        s2.prototype._processStackedPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var e = a.axisY.dataInfo, c = a.axisX.dataInfo, b, d, f = false, n = [], l = [], L = Infinity, k = -Infinity, q = {}, p = [], r = {}, g = 0; g < a.dataSeriesIndexes.length; g++) {
              var N = this.data[a.dataSeriesIndexes[g]], C = 0, h2 = false, t = false, u2;
              if ("normal" === N.axisPlacement || "xySwapped" === N.axisPlacement) var v = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, s3 = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (N.dataPoints[C].x && N.dataPoints[C].x.getTime || "dateTime" === N.xValueType) f = true;
              for (C = 0; C < N.dataPoints.length; C++) {
                "undefined" === typeof N.dataPoints[C].x && (N.dataPoints[C].x = C + (a.axisX.logarithmic ? 1 : 0));
                N.dataPoints[C].x.getTime ? (f = true, b = N.dataPoints[C].x.getTime()) : b = N.dataPoints[C].x;
                r[b] || (p.push(b), r[b] = true);
                d = m(N.dataPoints[C].y) ? 0 : N.dataPoints[C].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < C && null !== d && null !== N.dataPoints[C - 1].y) if (a.axisY.logarithmic) {
                  if (0 < d) {
                    var z = d / N.dataPoints[C - 1].y;
                    1 > z && (z = 1 / z);
                    e.minDiff > z && 1 !== z && (e.minDiff = z);
                  }
                } else z = d - N.dataPoints[C - 1].y, 0 > z && (z *= -1), e.minDiff > z && 0 !== z && (e.minDiff = z);
                if (b < v && !h2) null !== N.dataPoints[C].y && (u2 = b);
                else {
                  if (!h2 && (h2 = true, 0 < C)) {
                    C -= 2;
                    continue;
                  }
                  if (b > s3 && !t) t = true;
                  else if (b > s3 && t) continue;
                  N.dataPoints[C].label && (a.axisX.labels[b] = N.dataPoints[C].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === N.dataPoints[C].y ? c.viewPortMin === b && u2 < b && (c.viewPortMin = u2) : (q[b] = (q[b] || 0) + N.dataPoints[C].y, N.dataPointEOs[C].cumulativeY = q[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + d, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(d), 0 <= d ? n[b] ? n[b] += d : (n[b] = d, L = Math.min(d, L)) : l[b] ? l[b] += d : (l[b] = d, k = Math.max(d, k)));
                }
              }
              a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (e.dataPointYPositiveSums ? (e.dataPointYPositiveSums.push.apply(
                e.dataPointYPositiveSums,
                n
              ), e.dataPointYNegativeSums.push.apply(e.dataPointYPositiveSums, l)) : (e.dataPointYPositiveSums = n, e.dataPointYNegativeSums = l));
              N.axisX.valueType = N.xValueType = f ? "dateTime" : "number";
            }
            p.sort(function(a2, b2) {
              return a2 - b2;
            });
            for (C = 1; C < p.length; C++) b = a.axisX.logarithmic ? p[C] / p[C - 1] : p[C] - p[C - 1], c.minDiff > b && (c.minDiff = b);
            for (C in n) n.hasOwnProperty(C) && !isNaN(C) && (a = n[C], a < e.min && (e.min = Math.min(a, L)), a > e.max && (e.max = a), C < c.viewPortMin || C > c.viewPortMax || (a < e.viewPortMin && (e.viewPortMin = Math.min(a, L)), a > e.viewPortMax && (e.viewPortMax = a)));
            for (C in l) l.hasOwnProperty(C) && !isNaN(C) && (a = l[C], a < e.min && (e.min = a), a > e.max && (e.max = Math.max(a, k)), C < c.viewPortMin || C > c.viewPortMax || (a < e.viewPortMin && (e.viewPortMin = a), a > e.viewPortMax && (e.viewPortMax = Math.max(a, k))));
          }
        };
        s2.prototype._processStacked100PlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var e = a.axisY.dataInfo, c = a.axisX.dataInfo, b, d, f = false, n = false, l = false, L = {}, k = [], q = 0; q < a.dataSeriesIndexes.length; q++) {
              var p = this.data[a.dataSeriesIndexes[q]], r = 0, g = false, N = false, C;
              if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement) var h2 = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, t = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (p.dataPoints[r].x && p.dataPoints[r].x.getTime || "dateTime" === p.xValueType) f = true;
              for (r = 0; r < p.dataPoints.length; r++) {
                "undefined" === typeof p.dataPoints[r].x && (p.dataPoints[r].x = r + (a.axisX.logarithmic ? 1 : 0));
                p.dataPoints[r].x.getTime ? (f = true, b = p.dataPoints[r].x.getTime()) : b = p.dataPoints[r].x;
                d = m(p.dataPoints[r].y) ? null : p.dataPoints[r].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < r) {
                  if (a.axisX.logarithmic) {
                    var u2 = b / p.dataPoints[r - 1].x;
                    1 > u2 && (u2 = 1 / u2);
                    c.minDiff > u2 && 1 !== u2 && (c.minDiff = u2);
                  } else u2 = b - p.dataPoints[r - 1].x, 0 > u2 && (u2 *= -1), c.minDiff > u2 && 0 !== u2 && (c.minDiff = u2);
                  m(d) || null === p.dataPoints[r - 1].y || (a.axisY.logarithmic ? 0 < d && (u2 = d / p.dataPoints[r - 1].y, 1 > u2 && (u2 = 1 / u2), e.minDiff > u2 && 1 !== u2 && (e.minDiff = u2)) : (u2 = d - p.dataPoints[r - 1].y, 0 > u2 && (u2 *= -1), e.minDiff > u2 && 0 !== u2 && (e.minDiff = u2)));
                }
                k[b] = k[b] ? k[b] + Math.abs(d) : Math.abs(d);
                if (b < h2 && !g) null !== d && (C = b);
                else {
                  if (!g && (g = true, 0 < r)) {
                    k[b] -= Math.abs(d);
                    k[f && p.dataPoints[r - 1].x.getTime ? p.dataPoints[r - 1].x.getTime() : p.dataPoints[r - 1].x] -= Math.abs(p.dataPoints[r - 1].y || 0);
                    r -= 2;
                    continue;
                  }
                  if (b > t && !N) N = true;
                  else if (b > t && N) continue;
                  p.dataPoints[r].label && (a.axisX.labels[b] = p.dataPoints[r].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === d ? c.viewPortMin === b && C < b && (c.viewPortMin = C) : (L[b] = (L[b] || 0) + p.dataPoints[r].y, p.dataPointEOs[r].cumulativeY = L[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + d, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(d), 0 <= d ? n = true : 0 > d && (l = true));
                }
              }
              p.axisX.valueType = p.xValueType = f ? "dateTime" : "number";
            }
            a.axisY.logarithmic ? (e.max = m(e.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(e.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), e.min = m(e.viewPortMin) ? 1 : Math.min(e.viewPortMin, 1)) : n && !l ? (e.max = m(e.viewPortMax) ? 99 : Math.max(e.viewPortMax, 99), e.min = m(e.viewPortMin) ? 1 : Math.min(e.viewPortMin, 1)) : n && l ? (e.max = m(e.viewPortMax) ? 99 : Math.max(e.viewPortMax, 99), e.min = m(e.viewPortMin) ? -99 : Math.min(e.viewPortMin, -99)) : !n && l && (e.max = m(e.viewPortMax) ? -1 : Math.max(e.viewPortMax, -1), e.min = m(e.viewPortMin) ? -99 : Math.min(
              e.viewPortMin,
              -99
            ));
            e.viewPortMin = e.min;
            e.viewPortMax = e.max;
            a.dataPointYSums = k;
          }
        };
        s2.prototype._processMultiYPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) for (var e = a.axisY.dataInfo, c = a.axisX.dataInfo, b, d, f, n, l = false, m2 = 0; m2 < a.dataSeriesIndexes.length; m2++) {
            var k = this.data[a.dataSeriesIndexes[m2]], q = 0, p = false, r = false, g, N, C;
            if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement) var u2 = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, t = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
            if (k.dataPoints[q].x && k.dataPoints[q].x.getTime || "dateTime" === k.xValueType) l = true;
            for (q = 0; q < k.dataPoints.length; q++) {
              "undefined" === typeof k.dataPoints[q].x && (k.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
              k.dataPoints[q].x.getTime ? (l = true, b = k.dataPoints[q].x.getTime()) : b = k.dataPoints[q].x;
              if ((d = k.dataPoints[q].y) && d.length) {
                f = Math.min.apply(null, d);
                n = Math.max.apply(null, d);
                N = true;
                for (var h2 = 0; h2 < d.length; h2++) null === d.k && (N = false);
                N && (p || (C = g), g = b);
              }
              b < c.min && (c.min = b);
              b > c.max && (c.max = b);
              f < e.min && (e.min = f);
              n > e.max && (e.max = n);
              0 < q && (a.axisX.logarithmic ? (N = b / k.dataPoints[q - 1].x, 1 > N && (N = 1 / N), c.minDiff > N && 1 !== N && (c.minDiff = N)) : (N = b - k.dataPoints[q - 1].x, 0 > N && (N *= -1), c.minDiff > N && 0 !== N && (c.minDiff = N)), d && (null !== d[0] && k.dataPoints[q - 1].y && null !== k.dataPoints[q - 1].y[0]) && (a.axisY.logarithmic ? (N = d[0] / k.dataPoints[q - 1].y[0], 1 > N && (N = 1 / N), e.minDiff > N && 1 !== N && (e.minDiff = N)) : (N = d[0] - k.dataPoints[q - 1].y[0], 0 > N && (N *= -1), e.minDiff > N && 0 !== N && (e.minDiff = N))));
              if (!(b < u2) || p) {
                if (!p && (p = true, 0 < q)) {
                  q -= 2;
                  g = C;
                  continue;
                }
                if (b > t && !r) r = true;
                else if (b > t && r) continue;
                k.dataPoints[q].label && (a.axisX.labels[b] = k.dataPoints[q].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                if (c.viewPortMin === b && d) {
                  for (h2 = 0; h2 < d.length; h2++) if (null === d[h2] && g < b) {
                    c.viewPortMin = g;
                    break;
                  }
                }
                null === d ? c.viewPortMin === b && g < b && (c.viewPortMin = g) : (f < e.viewPortMin && (e.viewPortMin = f), n > e.viewPortMax && (e.viewPortMax = n));
              }
            }
            k.axisX.valueType = k.xValueType = l ? "dateTime" : "number";
          }
        };
        s2.prototype._processSpecificPlotUnit = function(a) {
          if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) for (var e = a.axisY.dataInfo, c = a.axisX.dataInfo, b, d, f = false, n = 0; n < a.dataSeriesIndexes.length; n++) {
            var l = this.data[a.dataSeriesIndexes[n]], m2 = 0, k = false, q = false, p = b = 0;
            if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement) var r = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
            if (l.dataPoints[m2].x && l.dataPoints[m2].x.getTime || "dateTime" === l.xValueType) f = true;
            for (m2 = 0; m2 < l.dataPoints.length; m2++) "undefined" !== typeof l.dataPoints[m2].isCumulativeSum && true === l.dataPoints[m2].isCumulativeSum ? (l.dataPointEOs[m2].cumulativeSumYStartValue = 0, l.dataPointEOs[m2].cumulativeSum = 0 === m2 ? 0 : l.dataPointEOs[m2 - 1].cumulativeSum, l.dataPoints[m2].y = 0 === m2 ? 0 : l.dataPointEOs[m2 - 1].cumulativeSum) : "undefined" !== typeof l.dataPoints[m2].isIntermediateSum && true === l.dataPoints[m2].isIntermediateSum ? (l.dataPointEOs[m2].cumulativeSumYStartValue = p, l.dataPointEOs[m2].cumulativeSum = 0 === m2 ? 0 : l.dataPointEOs[m2 - 1].cumulativeSum, l.dataPoints[m2].y = 0 === m2 ? 0 : b, p = 0 === m2 ? 0 : l.dataPointEOs[m2 - 1].cumulativeSum, b = 0) : (d = "number" !== typeof l.dataPoints[m2].y ? 0 : l.dataPoints[m2].y, l.dataPointEOs[m2].cumulativeSumYStartValue = 0 === m2 ? 0 : l.dataPointEOs[m2 - 1].cumulativeSum, l.dataPointEOs[m2].cumulativeSum = 0 === m2 ? d : l.dataPointEOs[m2 - 1].cumulativeSum + d, b += d);
            for (m2 = 0; m2 < l.dataPoints.length; m2++) if ("undefined" === typeof l.dataPoints[m2].x && (l.dataPoints[m2].x = m2 + (a.axisX.logarithmic ? 1 : 0)), l.dataPoints[m2].x.getTime ? (f = true, b = l.dataPoints[m2].x.getTime()) : b = l.dataPoints[m2].x, d = l.dataPoints[m2].y, b < c.min && (c.min = b), b > c.max && (c.max = b), l.dataPointEOs[m2].cumulativeSum < e.min && (e.min = l.dataPointEOs[m2].cumulativeSum), l.dataPointEOs[m2].cumulativeSum > e.max && (e.max = l.dataPointEOs[m2].cumulativeSum), 0 < m2 && (a.axisX.logarithmic ? (p = b / l.dataPoints[m2 - 1].x, 1 > p && (p = 1 / p), c.minDiff > p && 1 !== p && (c.minDiff = p)) : (p = b - l.dataPoints[m2 - 1].x, 0 > p && (p *= -1), c.minDiff > p && 0 !== p && (c.minDiff = p)), null !== d && null !== l.dataPoints[m2 - 1].y && (a.axisY.logarithmic ? (d = l.dataPointEOs[m2].cumulativeSum / l.dataPointEOs[m2 - 1].cumulativeSum, 1 > d && (d = 1 / d), e.minDiff > d && 1 !== d && (e.minDiff = d)) : (d = l.dataPointEOs[m2].cumulativeSum - l.dataPointEOs[m2 - 1].cumulativeSum, 0 > d && (d *= -1), e.minDiff > d && 0 !== d && (e.minDiff = d)))), !(b < r) || k) {
              if (!k && (k = true, 0 < m2)) {
                m2 -= 2;
                continue;
              }
              if (b > g && !q) q = true;
              else if (b > g && q) continue;
              l.dataPoints[m2].label && (a.axisX.labels[b] = l.dataPoints[m2].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              0 < m2 && (l.dataPointEOs[m2 - 1].cumulativeSum < e.viewPortMin && (e.viewPortMin = l.dataPointEOs[m2 - 1].cumulativeSum), l.dataPointEOs[m2 - 1].cumulativeSum > e.viewPortMax && (e.viewPortMax = l.dataPointEOs[m2 - 1].cumulativeSum));
              l.dataPointEOs[m2].cumulativeSum < e.viewPortMin && (e.viewPortMin = l.dataPointEOs[m2].cumulativeSum);
              l.dataPointEOs[m2].cumulativeSum > e.viewPortMax && (e.viewPortMax = l.dataPointEOs[m2].cumulativeSum);
            }
            l.axisX.valueType = l.xValueType = f ? "dateTime" : "number";
          }
        };
        s2.prototype.calculateAutoBreaks = function() {
          function a(a2, b2, c2, d2) {
            if (d2) return c2 = Math.pow(Math.min(c2 * a2 / b2, b2 / a2), 0.2), 1 >= c2 && (c2 = Math.pow(1 > a2 ? 1 / a2 : Math.min(b2 / a2, a2), 0.25)), { startValue: a2 * c2, endValue: b2 / c2 };
            c2 = 0.2 * Math.min(c2 - b2 + a2, b2 - a2);
            0 >= c2 && (c2 = 0.25 * (0 < a2 ? Math.min(b2 - a2, Math.abs(a2)) : b2 - a2));
            return { startValue: a2 + c2, endValue: b2 - c2 };
          }
          function e(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length)) {
              var b2 = a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks, c2 = a2.axisY.scaleBreaks && a2.axisY.scaleBreaks.autoCalculate && 1 <= a2.axisY.scaleBreaks.maxNumberOfAutoBreaks;
              if (b2 || c2) for (var e2 = a2.axisY.dataInfo, g2 = a2.axisX.dataInfo, f2, n2 = g2.min, k2 = g2.max, l2 = e2.min, p2 = e2.max, g2 = g2._dataRanges, e2 = e2._dataRanges, q2, r2 = 0, L2 = 0; L2 < a2.dataSeriesIndexes.length; L2++) {
                var h2 = d.data[a2.dataSeriesIndexes[L2]];
                if (!(4 > h2.dataPoints.length)) {
                  for (r2 = 0; r2 < h2.dataPoints.length; r2++) if (b2 && (q2 = (k2 + 1 - n2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, f2 = h2.dataPoints[r2].x.getTime ? h2.dataPoints[r2].x.getTime() : h2.dataPoints[r2].x, q2 = Math.floor((f2 - n2) / q2), f2 < g2[q2].min && (g2[q2].min = f2), f2 > g2[q2].max && (g2[q2].max = f2)), c2) {
                    var u2 = (p2 + 1 - l2) * Math.max(parseFloat(a2.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                    if ((f2 = "waterfall" === a2.type ? h2.dataPointEOs[r2].cumulativeSum : h2.dataPoints[r2].y) && f2.length) for (var s3 = 0; s3 < f2.length; s3++) q2 = Math.floor((f2[s3] - l2) / u2), f2[s3] < e2[q2].min && (e2[q2].min = f2[s3]), f2[s3] > e2[q2].max && (e2[q2].max = f2[s3]);
                    else m(f2) || (q2 = Math.floor((f2 - l2) / u2), f2 < e2[q2].min && (e2[q2].min = f2), f2 > e2[q2].max && (e2[q2].max = f2));
                  }
                }
              }
            }
          }
          function c(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length) && a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks) for (var b2 = a2.axisX.dataInfo, c2 = b2.min, e2 = b2.max, g2 = b2._dataRanges, f2, n2 = 0, k2 = 0; k2 < a2.dataSeriesIndexes.length; k2++) {
              var l2 = d.data[a2.dataSeriesIndexes[k2]];
              if (!(4 > l2.dataPoints.length)) for (n2 = 0; n2 < l2.dataPoints.length; n2++) f2 = (e2 + 1 - c2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b2 = l2.dataPoints[n2].x.getTime ? l2.dataPoints[n2].x.getTime() : l2.dataPoints[n2].x, f2 = Math.floor((b2 - c2) / f2), b2 < g2[f2].min && (g2[f2].min = b2), b2 > g2[f2].max && (g2[f2].max = b2);
            }
          }
          for (var b, d = this, f = false, n = 0; n < this._axes.length; n++) if (this._axes[n].scaleBreaks && this._axes[n].scaleBreaks.autoCalculate && 1 <= this._axes[n].scaleBreaks.maxNumberOfAutoBreaks) {
            f = true;
            this._axes[n].dataInfo._dataRanges = [];
            for (var l = 0; l < 100 / Math.max(parseFloat(this._axes[n].scaleBreaks.collapsibleThreshold) || 10, 10); l++) this._axes[n].dataInfo._dataRanges.push({ min: Infinity, max: -Infinity });
          }
          if (f) {
            for (n = 0; n < this.plotInfo.plotTypes.length; n++) for (f = this.plotInfo.plotTypes[n], l = 0; l < f.plotUnits.length; l++) b = f.plotUnits[l], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? e(b) : 0 <= b.type.indexOf("stacked") && c(b);
            for (n = 0; n < this._axes.length; n++) if (this._axes[n].dataInfo._dataRanges) {
              var L = this._axes[n].dataInfo.min;
              b = (this._axes[n].dataInfo.max + 1 - L) * Math.max(parseFloat(this._axes[n].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
              var k = this._axes[n].dataInfo._dataRanges, q, p, f = [];
              if (this._axes[n].dataInfo.dataPointYPositiveSums) {
                var r = this._axes[n].dataInfo.dataPointYPositiveSums;
                q = k;
                for (l in r) if (r.hasOwnProperty(l) && !isNaN(l) && (p = r[l], !m(p))) {
                  var g = Math.floor((p - L) / b);
                  p < q[g].min && (q[g].min = p);
                  p > q[g].max && (q[g].max = p);
                }
                delete this._axes[n].dataInfo.dataPointYPositiveSums;
              }
              if (this._axes[n].dataInfo.dataPointYNegativeSums) {
                r = this._axes[n].dataInfo.dataPointYNegativeSums;
                q = k;
                for (l in r) r.hasOwnProperty(l) && !isNaN(l) && (p = -1 * r[l], m(p) || (g = Math.floor((p - L) / b), p < q[g].min && (q[g].min = p), p > q[g].max && (q[g].max = p)));
                delete this._axes[n].dataInfo.dataPointYNegativeSums;
              }
              for (l = 0; l < k.length - 1; l++) if (q = k[l].max, isFinite(q)) for (; l < k.length - 1; ) if (L = k[l + 1].min, isFinite(L)) {
                p = L - q;
                p > b && f.push({ diff: p, start: q, end: L });
                break;
              } else l++;
              if (this._axes[n].scaleBreaks.customBreaks) {
                for (l = 0; l < this._axes[n].scaleBreaks.customBreaks.length; l++) for (b = 0; b < f.length; b++) if (this._axes[n].scaleBreaks.customBreaks[l].startValue <= f[b].start && f[b].start <= this._axes[n].scaleBreaks.customBreaks[l].endValue || this._axes[n].scaleBreaks.customBreaks[l].startValue <= f[b].start && f[b].start <= this._axes[n].scaleBreaks.customBreaks[l].endValue || f[b].start <= this._axes[n].scaleBreaks.customBreaks[l].startValue && this._axes[n].scaleBreaks.customBreaks[l].startValue <= f[b].end || f[b].start <= this._axes[n].scaleBreaks.customBreaks[l].endValue && this._axes[n].scaleBreaks.customBreaks[l].endValue <= f[b].end) f.splice(b, 1), b--;
              }
              f.sort(function(a2, b2) {
                return b2.diff - a2.diff;
              });
              for (l = 0; l < Math.min(f.length, this._axes[n].scaleBreaks.maxNumberOfAutoBreaks); l++) b = a(f[l].start, f[l].end, this._axes[n].logarithmic ? this._axes[n].dataInfo.max / this._axes[n].dataInfo.min : this._axes[n].dataInfo.max - this._axes[n].dataInfo.min, this._axes[n].logarithmic), this._axes[n].scaleBreaks.autoBreaks.push(new ca2(this, "autoBreaks", b, l, ++this._eventManager.lastObjectId, this._axes[n].scaleBreaks)), this._axes[n].scaleBreaks._appliedBreaks.push(this._axes[n].scaleBreaks.autoBreaks[this._axes[n].scaleBreaks.autoBreaks.length - 1]);
              this._axes[n].scaleBreaks._appliedBreaks.sort(function(a2, b2) {
                return a2.startValue - b2.startValue;
              });
            }
          }
        };
        s2.prototype.renderCrosshairs = function(a, e) {
          for (var c, b = 0; b < this.axisX.length; b++) if (c = this.axisX[b].sessionVariables.crosshairShownByPixel, this.axisX[b] != a && this.axisX[b].crosshair && this.axisX[b].crosshair.enabled && !this.axisX[b].sessionVariables._crosshairHidden) if (c && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2) {
            if (this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisX[b].crosshair.render(null, this.sessionVariables.mouseY, this.axisX[b].convertPixelToValue(this.sessionVariables.mouseY)) : this.axisX[b].crosshair.render(this.sessionVariables.mouseX, null, this.axisX[b].convertPixelToValue(this.sessionVariables.mouseX)), m(e) || e) c = { chart: this, crosshair: this.axisX[b].crosshair.options, axis: this.axisX[b], value: this.axisX[b].crosshair.value }, this.axisX[b].crosshair.dispatchEvent(
              "updated",
              c,
              this.axisX[b]
            );
          } else m(c) || c || this.axisX[b].showCrosshair(this.axisX[b].crosshair._updatedValue);
          for (b = 0; b < this.axisX2.length; b++) if (c = this.axisX2[b].sessionVariables.crosshairShownByPixel, this.axisX2[b] != a && this.axisX2[b].crosshair && this.axisX2[b].crosshair.enabled && !this.axisX2[b].sessionVariables._crosshairHidden) if (c && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2) {
            if (this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisX2[b].crosshair.render(null, this.sessionVariables.mouseY, this.axisX2[b].convertPixelToValue(this.sessionVariables.mouseY)) : this.axisX2[b].crosshair.render(this.sessionVariables.mouseX, null, this.axisX2[b].convertPixelToValue(this.sessionVariables.mouseX)), m(e) || e) c = { chart: this, crosshair: this.axisX2[b].crosshair.options, axis: this.axisX2[b], value: this.axisX2[b].crosshair.value }, this.axisX2[b].crosshair.dispatchEvent("updated", c, this.axisX2[b]);
          } else m(c) || c || this.axisX2[b].showCrosshair(this.axisX2[b].crosshair._updatedValue);
          for (b = 0; b < this.axisY.length; b++) if (c = this.axisY[b].sessionVariables.crosshairShownByPixel, this.axisY[b] != a && this.axisY[b].crosshair && this.axisY[b].crosshair.enabled && !this.axisY[b].sessionVariables._crosshairHidden) if (c && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2) {
            if (this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisY[b].crosshair.render(this.sessionVariables.mouseX, null, this.axisY[b].convertPixelToValue(this.sessionVariables.mouseX)) : this.axisY[b].crosshair.render(null, this.sessionVariables.mouseY, this.axisY[b].convertPixelToValue(this.sessionVariables.mouseY)), m(e) || e) c = { chart: this, crosshair: this.axisY[b].crosshair.options, axis: this.axisY[b], value: this.axisY[b].crosshair.value }, this.axisY[b].crosshair.dispatchEvent("updated", c, this.axisY[b]);
          } else m(c) || c || this.axisY[b].showCrosshair(this.axisY[b].crosshair._updatedValue);
          for (b = 0; b < this.axisY2.length; b++) if (c = this.axisY2[b].sessionVariables.crosshairShownByPixel, this.axisY2[b] != a && this.axisY2[b].crosshair && this.axisY2[b].crosshair.enabled && !this.axisY2[b].sessionVariables._crosshairHidden) if (c && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2) {
            if (this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisY2[b].crosshair.render(
              this.sessionVariables.mouseX,
              null,
              this.axisY2[b].convertPixelToValue(this.sessionVariables.mouseX)
            ) : this.axisY2[b].crosshair.render(null, this.sessionVariables.mouseY, this.axisY2[b].convertPixelToValue(this.sessionVariables.mouseY)), m(e) || e) c = { chart: this, crosshair: this.axisY2[b].crosshair.options, axis: this.axisY2[b], value: this.axisY2[b].crosshair.value }, this.axisY2[b].crosshair.dispatchEvent("updated", c, this.axisY2[b]);
          } else m(c) || c || this.axisY2[b].showCrosshair(this.axisY2[b].crosshair._updatedValue);
        };
        s2.prototype.getDataPointAtXY = function(a, e, c) {
          c = c || false;
          for (var b = [], d = this._dataInRenderedOrder.length - 1; 0 <= d; d--) {
            var f = null;
            (f = this._dataInRenderedOrder[d].getDataPointAtXY(a, e, c)) && b.push(f);
          }
          a = null;
          e = false;
          for (c = 0; c < b.length; c++) if ("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type) {
            if (d = W("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= d / 2) {
              e = true;
              break;
            }
          }
          for (c = 0; c < b.length; c++) e && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
          return a;
        };
        s2.prototype.getObjectAtXY = function(a, e, c) {
          var b = null;
          if (c = this.getDataPointAtXY(a, e, c || false)) b = c.dataSeries.dataPointIds[c.dataPointIndex];
          else if (u) b = bb(a, e, this._eventManager.ghostCtx);
          else for (c = 0; c < this.legend.items.length; c++) {
            var d = this.legend.items[c];
            a >= d.x1 && (a <= d.x2 && e >= d.y1 && e <= d.y2) && (b = d.id);
          }
          return b;
        };
        s2.prototype.getAutoFontSize = pb;
        s2.prototype.resetOverlayedCanvas = function() {
          this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
        };
        s2.prototype.clearCanvas = ob;
        s2.prototype.attachEvent = function(a) {
          this._events.push(a);
        };
        s2.prototype._touchEventHandler = function(a) {
          if (a.changedTouches && this.interactivityEnabled) {
            var e = [], c = a.changedTouches, b = c ? c[0] : a, d = null;
            switch (a.type) {
              case "touchstart":
              case "MSPointerDown":
                e = ["mousemove", "mousedown"];
                this._lastTouchData = Ra(b);
                this._lastTouchData.time = /* @__PURE__ */ new Date();
                break;
              case "touchmove":
              case "MSPointerMove":
                e = ["mousemove"];
                break;
              case "touchend":
              case "MSPointerUp":
                var f = this._lastTouchData && this._lastTouchData.time ? /* @__PURE__ */ new Date() - this._lastTouchData.time : 0, e = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > f ? ["mouseup", "click"] : ["mouseup"];
                break;
              default:
                return;
            }
            if (!(c && 1 < c.length)) {
              d = Ra(b);
              d.time = /* @__PURE__ */ new Date();
              try {
                var n = d.y - this._lastTouchData.y, f = d.time - this._lastTouchData.time;
                if (1 < Math.abs(n) && this._lastTouchData.scroll || 5 < Math.abs(n) && 250 > f) this._lastTouchData.scroll = true, this.stockChart && (this.stockChart._chartScroll = true);
              } catch (l) {
              }
              this._lastTouchEventType = a.type;
              if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = false;
              else for (c = 0; c < e.length; c++) if (d = e[c], n = document.createEvent("MouseEvent"), n.initMouseEvent(d, true, true, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, false, false, false, false, 0, null), b.target.dispatchEvent(n), !m(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < f || "click" === d) a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault(), this.stockChart && (this.stockChart._chartScroll = null);
            }
          }
        };
        s2.prototype._dispatchRangeEvent = function(a, e) {
          var c = { chart: this };
          c.type = a;
          c.trigger = e;
          var b = [];
          this.axisX && 0 < this.axisX.length && b.push("axisX");
          this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
          this.axisY && 0 < this.axisY.length && b.push("axisY");
          this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
          for (var d = 0; d < b.length; d++) if (m(c[b[d]]) && (c[b[d]] = []), "axisY" === b[d]) for (var f = 0; f < this.axisY.length; f++) c[b[d]].push({
            viewportMinimum: this[b[d]][f].sessionVariables.newViewportMinimum,
            viewportMaximum: this[b[d]][f].sessionVariables.newViewportMaximum
          });
          else if ("axisY2" === b[d]) for (f = 0; f < this.axisY2.length; f++) c[b[d]].push({ viewportMinimum: this[b[d]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[b[d]][f].sessionVariables.newViewportMaximum });
          else if ("axisX" === b[d]) for (f = 0; f < this.axisX.length; f++) c[b[d]].push({ viewportMinimum: this[b[d]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[b[d]][f].sessionVariables.newViewportMaximum });
          else if ("axisX2" === b[d]) for (f = 0; f < this.axisX2.length; f++) c[b[d]].push({ viewportMinimum: this[b[d]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[b[d]][f].sessionVariables.newViewportMaximum });
          this.dispatchEvent(a, c, this);
        };
        s2.prototype._mouseEventHandler = function(a) {
          function e() {
            s2.capturedEventParam && (d = s2.capturedEventParam, n = d.bounds, "mouseup" === b && (s2.capturedEventParam = null, d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener(
              "mouseup",
              d.chart._mouseEventHandler,
              false
            )), d.hasOwnProperty(b) && ("mouseup" !== b || d.chart.overlaidCanvas.releaseCapture ? a.target !== d.chart.overlaidCanvas && u || d[b].call(d.context, c.x, c.y) : a.target !== d.chart.overlaidCanvas && (d.chart.isDrag = false)));
          }
          "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
          var c = Ra(a), b = a.type, d, f;
          a.which ? f = 3 == a.which : a.button && (f = 2 == a.button);
          if (this._ignoreNextEvent) e(), this._ignoreNextEvent = false;
          else if (e(), this.interactivityEnabled) {
            a.preventManipulation && a.preventManipulation();
            a.preventDefault && a.preventDefault();
            var n;
            Ja && window.console && (window.console.log(b + " --> x: " + c.x + "; y:" + c.y), f && window.console.log(a.which), "mouseup" === b && window.console.log("mouseup"));
            if (!f) {
              if (!s2.capturedEventParam && this._events) {
                for (f = 0; f < this._events.length; f++) if (this._events[f].hasOwnProperty(b)) if (d = this._events[f], n = d.bounds, c.x >= n.x1 && c.x <= n.x2 && c.y >= n.y1 && c.y <= n.y2) {
                  d[b].call(d.context, c.x, c.y);
                  "mousedown" === b && true === d.capture ? (s2.capturedEventParam = d, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, false)) : "mouseup" === b && (d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, false));
                  break;
                } else d = null;
                a.target.style.cursor = d && d.cursor ? d.cursor : this._defaultCursor;
              }
              f = this.plotArea;
              if (c.x < f.x1 || c.x > f.x2 || c.y < f.y1 || c.y > f.y2 || "mouseout" === b) {
                this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent(
                  "hidden",
                  { chart: this, toolTip: this.toolTip },
                  this.toolTip
                )) : (this.resetOverlayedCanvas(), this.sessionVariables._dataHighlighted = false);
                for (f = 0; f < this.axisX.length; f++) this.axisX[f].crosshair && this.axisX[f].crosshair.enabled && (this.axisX[f].crosshair.hide(), this.axisX[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[f].options }, this.axisX[f].crosshair));
                for (f = 0; f < this.axisX2.length; f++) this.axisX2[f].crosshair && this.axisX2[f].crosshair.enabled && (this.axisX2[f].crosshair.hide(), this.axisX2[f].crosshair.dispatchEvent(
                  "hidden",
                  { chart: this, axis: this.axisX2[f].options },
                  this.axisX2[f].crosshair
                ));
                for (f = 0; f < this.axisY.length; f++) this.axisY[f].crosshair && this.axisY[f].crosshair.enabled && (this.axisY[f].crosshair.hide(), this.axisY[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[f].options }, this.axisY[f].crosshair));
                for (f = 0; f < this.axisY2.length; f++) this.axisY2[f].crosshair && this.axisY2[f].crosshair.enabled && (this.axisY2[f].crosshair.hide(), this.axisY2[f].crosshair.dispatchEvent(
                  "hidden",
                  { chart: this, axis: this.axisY2[f].options },
                  this.axisY2[f].crosshair
                ));
              }
              this.sessionVariables.mouseX = c.x;
              this.sessionVariables.mouseY = c.y;
              this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a);
              if (("mouseout" === b || "mouseleave" === b) && this._eventManager) {
                for (f = 0; f < this._eventManager.mouseoveredObjectMaps.length; f++) this._eventManager.fireEvent(this._eventManager.mouseoveredObjectMaps[f], "mouseout", a);
                this._eventManager.mouseoveredObjectMaps = [];
              }
            }
          }
        };
        s2.prototype._plotAreaMouseDown = function(a, e) {
          this.isDrag = true;
          this.dragStartPoint = { x: a, y: e };
        };
        s2.prototype._plotAreaMouseUp = function(a, e) {
          if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var c = e - this.dragStartPoint.y, b = a - this.dragStartPoint.x, d = 0 <= this.zoomType.indexOf("x"), f = 0 <= this.zoomType.indexOf("y"), n = false;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement) var l = f, f = d, d = l;
            if (this.panEnabled || this.zoomEnabled) {
              if (this.panEnabled) for (d = f = 0; d < this._axes.length; d++) c = this._axes[d], c.logarithmic ? c.viewportMinimum < c.minimum ? (f = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * f, c.sessionVariables.newViewportMaximum = c.viewportMaximum * f, n = true) : c.viewportMaximum > c.maximum && (f = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum / f, c.sessionVariables.newViewportMaximum = c.viewportMaximum / f, n = true) : c.viewportMinimum < c.minimum ? (f = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + f, c.sessionVariables.newViewportMaximum = c.viewportMaximum + f, n = true) : c.viewportMaximum > c.maximum && (f = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - f, c.sessionVariables.newViewportMaximum = c.viewportMaximum - f, n = true);
              else if ((!d || 2 < Math.abs(b)) && (!f || 2 < Math.abs(c)) && this.zoomEnabled) {
                if (!this.dragStartPoint) return;
                c = d ? this.dragStartPoint.x : this.plotArea.x1;
                b = f ? this.dragStartPoint.y : this.plotArea.y1;
                d = d ? a : this.plotArea.x2;
                f = f ? e : this.plotArea.y2;
                2 < Math.abs(c - d) && 2 < Math.abs(b - f) && this._zoomPanToSelectedRegion(
                  c,
                  b,
                  d,
                  f,
                  "xy" !== this.zoomType && "y" !== this.zoomType
                ) && (n = true);
              }
              n && (this._ignoreNextEvent = true, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: this.stockChart.sessionVariables._axisXMin, maximum: this.stockChart.sessionVariables._axisXMax }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent(
                "rangeChanging",
                this.stockChart._rangeEventParameter,
                this.stockChart
              )), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.rangeUpdatedBy = "chart", this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)), n && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Na(this._zoomButton, this._resetButton), va(this, this._zoomButton, "pan"), va(this, this._resetButton, "reset")));
            }
          }
          this.isDrag = false;
          if ("none" !== this.plotInfo.axisPlacement) {
            this.resetOverlayedCanvas();
            if (this.axisX && 0 < this.axisX.length) for (n = 0; n < this.axisX.length; n++) this.axisX[n].crosshair && this.axisX[n].crosshair.enabled && this.axisX[n].renderCrosshair(a, e);
            if (this.axisX2 && 0 < this.axisX2.length) for (n = 0; n < this.axisX2.length; n++) this.axisX2[n].crosshair && this.axisX2[n].crosshair.enabled && this.axisX2[n].renderCrosshair(a, e);
            if (this.axisY && 0 < this.axisY.length) for (n = 0; n < this.axisY.length; n++) this.axisY[n].crosshair && this.axisY[n].crosshair.enabled && this.axisY[n].renderCrosshair(a, e);
            if (this.axisY2 && 0 < this.axisY2.length) for (n = 0; n < this.axisY2.length; n++) this.axisY2[n].crosshair && this.axisY2[n].crosshair.enabled && this.axisY2[n].renderCrosshair(a, e);
            if (this.axisX && 0 < this.axisX.length) for (n = 0; n < this.axisX.length; n++) this.axisX[n].crosshair && this.axisX[n].crosshair.enabled && this.axisX[n].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length) for (n = 0; n < this.axisX2.length; n++) this.axisX2[n].crosshair && this.axisX2[n].crosshair.enabled && this.axisX2[n].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length) for (n = 0; n < this.axisY.length; n++) this.axisY[n].crosshair && this.axisY[n].crosshair.enabled && this.axisY[n].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length) for (n = 0; n < this.axisY2.length; n++) this.axisY2[n].crosshair && this.axisY2[n].crosshair.enabled && this.axisY2[n].crosshair.renderLabel();
          }
        };
        s2.prototype._plotAreaMouseMove = function(a, e) {
          if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var c = 0, b = 0, d = c = null, d = 0 <= this.zoomType.indexOf("x"), f = 0 <= this.zoomType.indexOf("y"), n = this;
            "xySwapped" === this.plotInfo.axisPlacement && (c = f, f = d, d = c);
            c = this.dragStartPoint.x - a;
            b = this.dragStartPoint.y - e;
            if (2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled)) {
              this.toolTip.hide();
              this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
              for (var l = 0; l < this.axisX.length; l++) this.axisX[l].crosshair && this.axisX[l].crosshair.enabled && (this.axisX[l].crosshair.hide(), this.axisX[l].crosshair.dispatchEvent("hidden", {
                chart: this,
                axis: this.axisX[l].options
              }, this.axisX[l].crosshair));
              for (l = 0; l < this.axisX2.length; l++) this.axisX2[l].crosshair && this.axisX2[l].crosshair.enabled && (this.axisX2[l].crosshair.hide(), this.axisX2[l].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[l].options }, this.axisX2[l].crosshair));
              for (l = 0; l < this.axisY.length; l++) this.axisY[l].crosshair && this.axisY[l].crosshair.enabled && (this.axisY[l].crosshair.hide(), this.axisY[l].crosshair.dispatchEvent(
                "hidden",
                { chart: this, axis: this.axisY[l].options },
                this.axisY[l].crosshair
              ));
              for (l = 0; l < this.axisY2.length; l++) this.axisY2[l].crosshair && this.axisY2[l].crosshair.enabled && (this.axisY2[l].crosshair.hide(), this.axisY2[l].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[l].options }, this.axisY2[l].crosshair));
            } else if (!this.panEnabled && !this.zoomEnabled && (this.toolTip.mouseMoveHandler(a, e), "none" !== this.plotInfo.axisPlacement)) {
              this.sessionVariables._dataHighlighted || this.resetOverlayedCanvas();
              if (this.axisX && 0 < this.axisX.length) for (l = 0; l < this.axisX.length; l++) this.axisX[l].crosshair && this.axisX[l].crosshair.enabled && (this.axisX[l].sessionVariables.crosshairShownByPixel = true, this.axisX[l].renderCrosshair(a, e));
              if (this.axisX2 && 0 < this.axisX2.length) for (l = 0; l < this.axisX2.length; l++) this.axisX2[l].crosshair && this.axisX2[l].crosshair.enabled && (this.axisX2[l].sessionVariables.crosshairShownByPixel = true, this.axisX2[l].renderCrosshair(a, e));
              if (this.axisY && 0 < this.axisY.length) for (l = 0; l < this.axisY.length; l++) this.axisY[l].crosshair && this.axisY[l].crosshair.enabled && (this.axisY[l].sessionVariables.crosshairShownByPixel = true, this.axisY[l].renderCrosshair(a, e));
              if (this.axisY2 && 0 < this.axisY2.length) for (l = 0; l < this.axisY2.length; l++) this.axisY2[l].crosshair && this.axisY2[l].crosshair.enabled && (this.axisY2[l].sessionVariables.crosshairShownByPixel = true, this.axisY2[l].renderCrosshair(a, e));
              if (this.axisX && 0 < this.axisX.length) for (l = 0; l < this.axisX.length; l++) this.axisX[l].crosshair && this.axisX[l].crosshair.enabled && this.axisX[l].crosshair.renderLabel();
              if (this.axisX2 && 0 < this.axisX2.length) for (l = 0; l < this.axisX2.length; l++) this.axisX2[l].crosshair && this.axisX2[l].crosshair.enabled && this.axisX2[l].crosshair.renderLabel();
              if (this.axisY && 0 < this.axisY.length) for (l = 0; l < this.axisY.length; l++) this.axisY[l].crosshair && this.axisY[l].crosshair.enabled && this.axisY[l].crosshair.renderLabel();
              if (this.axisY2 && 0 < this.axisY2.length) for (l = 0; l < this.axisY2.length; l++) this.axisY2[l].crosshair && this.axisY2[l].crosshair.enabled && this.axisY2[l].crosshair.renderLabel();
            }
            if ((!d || 2 < Math.abs(c) || !f || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled)) {
              if (this.panEnabled) d = { x1: d ? this.plotArea.x1 + c : this.plotArea.x1, y1: f ? this.plotArea.y1 + b : this.plotArea.y1, x2: d ? this.plotArea.x2 + c : this.plotArea.x2, y2: f ? this.plotArea.y2 + b : this.plotArea.y2 }, clearTimeout(n._panTimerId), n._panTimerId = setTimeout(/* @__PURE__ */ function(b2, c2, d2, f2) {
                return function() {
                  if (n._zoomPanToSelectedRegion(b2, c2, d2, f2, true)) {
                    n.sessionVariables.disableToolTip = true;
                    n.resetOverlayedCanvas();
                    n._dispatchRangeEvent("rangeChanging", "pan");
                    n.stockChart && (n.stockChart._rangeEventParameter.type = "rangeChanging", n.stockChart.dispatchEvent("rangeChanging", n.stockChart._rangeEventParameter, n.stockChart));
                    n.render();
                    n._dispatchRangeEvent("rangeChanged", "pan");
                    if (n.stockChart) {
                      var k2 = n.stockChart.rangeSelector.sessionVariables, l2 = n.stockChart.rangeSelector.buttons;
                      l2 && (0 < l2.length && (l2[k2._clickedRangeButtonIndex] && "ytd" === l2[k2._clickedRangeButtonIndex].rangeType || l2[k2.selectedRangeButtonIndex] && "ytd" === l2[k2.selectedRangeButtonIndex].rangeType)) && (n.stockChart.rangeUpdatedBy = "navigator", n.stockChart.rangeSelector.resetRangeButtons());
                      n.stockChart._rangeEventParameter.type = "rangeChanged";
                      n.stockChart.dispatchEvent("rangeChanged", n.stockChart._rangeEventParameter, n.stockChart);
                    }
                    n.dragStartPoint.x = a;
                    n.dragStartPoint.y = e;
                    n.sessionVariables.disableToolTip = n.disableToolTip = false;
                  }
                };
              }(d.x1, d.y1, d.x2, d.y2), 0);
              else if (this.zoomEnabled) {
                this.resetOverlayedCanvas();
                c = this.overlaidCanvasCtx.globalAlpha;
                this.overlaidCanvasCtx.fillStyle = "#A89896";
                var b = d ? this.dragStartPoint.x : this.plotArea.x1, l = f ? this.dragStartPoint.y : this.plotArea.y1, m2 = d ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, k = f ? e - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                this.validateRegion(b, l, d ? a : this.plotArea.x2 - this.plotArea.x1, f ? e : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType && "y" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                this.overlaidCanvasCtx.globalAlpha = 0.7;
                this.overlaidCanvasCtx.fillRect(b, l, m2, k);
                this.overlaidCanvasCtx.globalAlpha = c;
              }
            }
          } else if (this.toolTip.mouseMoveHandler(a, e), "none" !== this.plotInfo.axisPlacement) {
            this.sessionVariables._dataHighlighted || this.resetOverlayedCanvas();
            if (this.axisX && 0 < this.axisX.length) for (l = 0; l < this.axisX.length; l++) this.axisX[l].crosshair && this.axisX[l].crosshair.enabled && (this.axisX[l].sessionVariables.crosshairShownByPixel = true, this.axisX[l].renderCrosshair(a, e));
            if (this.axisX2 && 0 < this.axisX2.length) for (l = 0; l < this.axisX2.length; l++) this.axisX2[l].crosshair && this.axisX2[l].crosshair.enabled && (this.axisX2[l].sessionVariables.crosshairShownByPixel = true, this.axisX2[l].renderCrosshair(a, e));
            if (this.axisY && 0 < this.axisY.length) for (l = 0; l < this.axisY.length; l++) this.axisY[l].crosshair && this.axisY[l].crosshair.enabled && (this.axisY[l].sessionVariables.crosshairShownByPixel = true, this.axisY[l].renderCrosshair(a, e));
            if (this.axisY2 && 0 < this.axisY2.length) for (l = 0; l < this.axisY2.length; l++) this.axisY2[l].crosshair && this.axisY2[l].crosshair.enabled && (this.axisY2[l].sessionVariables.crosshairShownByPixel = true, this.axisY2[l].renderCrosshair(a, e));
            if (this.axisX && 0 < this.axisX.length) for (l = 0; l < this.axisX.length; l++) this.axisX[l].crosshair && this.axisX[l].crosshair.enabled && this.axisX[l].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length) for (l = 0; l < this.axisX2.length; l++) this.axisX2[l].crosshair && this.axisX2[l].crosshair.enabled && this.axisX2[l].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length) for (l = 0; l < this.axisY.length; l++) this.axisY[l].crosshair && this.axisY[l].crosshair.enabled && this.axisY[l].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length) for (l = 0; l < this.axisY2.length; l++) this.axisY2[l].crosshair && this.axisY2[l].crosshair.enabled && this.axisY2[l].crosshair.renderLabel();
          }
        };
        s2.prototype._zoomPanToSelectedRegion = function(a, e, c, b, d) {
          a = this.validateRegion(a, e, c, b, d);
          e = a.axesWithValidRange;
          c = a.axesRanges;
          if (a.isValid) for (b = 0; b < e.length; b++) {
            d = e[b];
            var f = c[b];
            d.setViewPortRange(f.val1, f.val2);
            this.syncCharts && ("axisX" === d.type && "y" != this.zoomType) && this.syncCharts(f.val1, f.val2);
            this.stockChart && (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: f.val1, maximum: f.val2 });
          }
          return a.isValid;
        };
        s2.prototype.validateRegion = function(a, e, c, b, d) {
          d = d || false;
          for (var f = 0 <= this.zoomType.indexOf("x"), n = 0 <= this.zoomType.indexOf("y"), l = false, m2 = [], k = [], q = [], p = 0; p < this._axes.length; p++) ("axisX" === this._axes[p].type && f || "axisY" === this._axes[p].type && n) && k.push(this._axes[p]);
          for (n = 0; n < k.length; n++) {
            var p = k[n], f = false, r = p.convertPixelToValue({ x: a, y: e }), g = p.convertPixelToValue({ x: c, y: b });
            if (r > g) var N = g, g = r, r = N;
            if (p.scaleBreaks) for (N = 0; !f && N < p.scaleBreaks._appliedBreaks.length; N++) f = p.scaleBreaks._appliedBreaks[N].startValue <= r && p.scaleBreaks._appliedBreaks[N].endValue >= g;
            if (isFinite(p.dataInfo.minDiff)) {
              if (N = p.getApparentDifference(r, g, null, true), !(f || !(this.panEnabled && p.scaleBreaks && p.scaleBreaks._appliedBreaks.length) && (p.logarithmic && N < Math.pow(p.dataInfo.minDiff, 3) || !p.logarithmic && N < 3 * Math.abs(p.dataInfo.minDiff)) || r < p.minimum || g > p.maximum)) m2.push(p), q.push({ val1: r, val2: g }), l = true;
              else if (!d) {
                l = false;
                break;
              }
            }
          }
          return { isValid: l, axesWithValidRange: m2, axesRanges: q };
        };
        s2.prototype.preparePlotArea = function() {
          var a = this.plotArea;
          !u && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
          if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
            var e = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
            if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
              var c = this.axisY[0];
              a.x1 = e.x1 < c.lineCoordinates.x2 ? e.x1 : c.lineCoordinates.x1;
              a.y1 = e.y1 < c.lineCoordinates.y1 ? e.y1 : c.lineCoordinates.y1;
              a.x2 = e.x2 > c.lineCoordinates.x2 ? e.x2 : c.lineCoordinates.x2;
              a.y2 = e.y1 > c.lineCoordinates.y2 ? e.y1 : c.lineCoordinates.y2;
              a.width = a.x2 - a.x1;
              a.height = a.y2 - a.y1;
            }
            this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = e.x1 < c.lineCoordinates.x2 ? e.x1 : c.lineCoordinates.x1, a.y1 = e.y1 < c.lineCoordinates.y1 ? e.y1 : c.lineCoordinates.y1, a.x2 = e.x2 > c.lineCoordinates.x2 ? e.x2 : c.lineCoordinates.x2, a.y2 = e.y2 > c.lineCoordinates.y2 ? e.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1);
          } else e = this.layoutManager.getFreeSpace(), a.x1 = e.x1, a.x2 = e.x2, a.y1 = e.y1, a.y2 = e.y2, a.width = e.width, a.height = e.height;
          u || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
          a.layoutManager = new Ga(a.x1, a.y1, a.x2, a.y2, 2);
        };
        s2.prototype.renderIndexLabels = function(a) {
          var e = a || this.plotArea.ctx, c = this.plotArea, b = 0, d = 0, f = 0, n = d = f = 0, l = 0, L = b = 0, k = 0;
          for (a = 0; a < this._indexLabels.length; a++) {
            var q = this._indexLabels[a], p = q.chartType.toLowerCase(), r, g, l = W("indexLabelFontColor", q.dataPoint, q.dataSeries), N = W("indexLabelFontSize", q.dataPoint, q.dataSeries), L = W("indexLabelFontFamily", q.dataPoint, q.dataSeries), k = W("indexLabelFontStyle", q.dataPoint, q.dataSeries);
            r = W("indexLabelFontWeight", q.dataPoint, q.dataSeries);
            var h2 = W("indexLabelBackgroundColor", q.dataPoint, q.dataSeries);
            g = W("indexLabelBorderColor", q.dataPoint, q.dataSeries);
            var f = W("indexLabelBorderThickness", q.dataPoint, q.dataSeries), d = W("indexLabelMaxWidth", q.dataPoint, q.dataSeries), n = W("indexLabelWrap", q.dataPoint, q.dataSeries), y = W("indexLabelLineDashType", q.dataPoint, q.dataSeries), t = W("indexLabelLineColor", q.dataPoint, q.dataSeries), w = m(q.dataPoint.indexLabelLineThickness) ? m(q.dataSeries.options.indexLabelLineThickness) ? 0 : q.dataSeries.options.indexLabelLineThickness : q.dataPoint.indexLabelLineThickness, b = 0 < w ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0, v = W("indexLabelPadding", q.dataPoint, q.dataSeries), s3 = { percent: null, total: null }, z = null;
            if (0 <= q.dataSeries.type.indexOf("stacked") || "pie" === q.dataSeries.type || "doughnut" === q.dataSeries.type) s3 = this.getPercentAndTotal(q.dataSeries, q.dataPoint);
            if (q.dataSeries.indexLabelFormatter || q.dataPoint.indexLabelFormatter) z = { chart: this, dataSeries: q.dataSeries, dataPoint: q.dataPoint, index: q.indexKeyword, total: s3.total, percent: s3.percent };
            var D = q.dataPoint.indexLabelFormatter ? q.dataPoint.indexLabelFormatter(z) : q.dataPoint.indexLabel ? this.replaceKeywordsWithValue(q.dataPoint.indexLabel, q.dataPoint, q.dataSeries, null, q.indexKeyword) : q.dataSeries.indexLabelFormatter ? q.dataSeries.indexLabelFormatter(z) : q.dataSeries.indexLabel ? this.replaceKeywordsWithValue(
              q.dataSeries.indexLabel,
              q.dataPoint,
              q.dataSeries,
              null,
              q.indexKeyword
            ) : null;
            if (!m(D) && "" !== D) {
              var s3 = W("indexLabelPlacement", q.dataPoint, q.dataSeries), z = W("indexLabelOrientation", q.dataPoint, q.dataSeries), A2 = W("indexLabelTextAlign", q.dataPoint, q.dataSeries), x3 = q.direction, O = q.dataSeries.axisX, P = q.dataSeries.axisY, ba = false, h2 = new ma(e, {
                x: 0,
                y: 0,
                maxWidth: d ? d : 0.5 * this.width,
                maxHeight: (n ? 5 * N : 1.5 * N) + ("object" === typeof v ? (v.top || 0) + (v.bottom || 0) : 2 * v),
                angle: "horizontal" === z ? 0 : -90,
                text: D,
                padding: v,
                backgroundColor: h2,
                borderColor: g,
                borderThickness: f,
                textAlign: A2,
                fontSize: N,
                fontFamily: L,
                fontWeight: r,
                fontColor: l,
                fontStyle: k,
                textBaseline: "middle"
              });
              h2.measureText();
              q.dataSeries.indexLabelMaxWidth = h2.maxWidth;
              if ("stackedarea100" === p) {
                if (q.point.x < c.x1 || q.point.x > c.x2 || q.point.y < c.y1 - 1 || q.point.y > c.y2 + 1) continue;
              } else if ("rangearea" === p || "rangesplinearea" === p) {
                if (q.dataPoint.x < O.viewportMinimum || q.dataPoint.x > O.viewportMaximum || Math.max.apply(null, q.dataPoint.y) < P.viewportMinimum || Math.min.apply(null, q.dataPoint.y) > P.viewportMaximum) continue;
              } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) {
                if (q.dataPoint.x < O.viewportMinimum || q.dataPoint.x > O.viewportMaximum || q.dataPoint.y < P.viewportMinimum || q.dataPoint.y > P.viewportMaximum) continue;
              } else if (0 <= p.indexOf("column")) {
                if (q.dataPoint.x < O.viewportMinimum || q.dataPoint.x > O.viewportMaximum || (0 < q.dataPoint.y.length ? Math.max.apply(null, q.dataPoint.y) : q.cumulativeY ? q.cumulativeY : q.dataPoint.y) < P.viewportMinimum || (0 < q.dataPoint.y.length ? Math.min.apply(null, q.dataPoint.y) : q.cumulativeY ? q.cumulativeY - q.dataPoint.y : 0) > P.viewportMaximum) continue;
              } else if ("waterfall" === p || "error" === p && !q.axisSwapped) {
                if (q.dataPoint.x < O.viewportMinimum || q.dataPoint.x > O.viewportMaximum || q.bounds.y1 > c.y2 || q.bounds.y2 < c.y1) continue;
              } else if (0 <= p.indexOf("bar") || "error" === p) {
                if (q.dataPoint.x < O.viewportMinimum || q.dataPoint.x > O.viewportMaximum || q.bounds.x1 > c.x2 || q.bounds.x2 < c.x1) continue;
              } else if ("candlestick" === p || "ohlc" === p) {
                if (q.dataPoint.x < O.viewportMinimum || q.dataPoint.x > O.viewportMaximum || Math.max.apply(
                  null,
                  q.dataPoint.y
                ) < P.viewportMinimum || Math.min.apply(null, q.dataPoint.y) > P.viewportMaximum) continue;
              } else if (q.dataPoint.x < O.viewportMinimum || q.dataPoint.x > O.viewportMaximum) continue;
              n = l = 2;
              "horizontal" === z ? (L = h2.width, k = h2.height) : (k = h2.width, L = h2.height);
              if ("normal" === this.plotInfo.axisPlacement) {
                if (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) s3 = "auto", l = 4;
                else if (0 <= p.indexOf("stacked")) "auto" === s3 && (s3 = "inside");
                else if ("bubble" === p || "scatter" === p) s3 = "inside";
                r = q.point.x - L / 2 + ("horizontal" === z ? 0 : h2._lineHeight / 2);
                if ("inside" !== s3) d = c.y1, f = c.y2, 0 < x3 ? (g = q.point.y + h2._lineHeight / 2 - k - l - b, g < d && (g = "auto" === s3 ? Math.max(q.point.y, d) + h2._lineHeight / 2 + l + b : d + h2._lineHeight / 2 + l + b, ba = g + ("horizontal" === z ? k - h2._lineHeight / 2 : 0) > q.point.y, !ba || (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) || (g -= b))) : (g = q.point.y + h2._lineHeight / 2 + l + b, g > f - k + h2._lineHeight / 2 - l && (g = "auto" === s3 ? Math.min(q.point.y, f) + h2._lineHeight / 2 - k - l - b : f + h2._lineHeight / 2 - k - l - b, ba = g - ("horizontal" === z ? h2._lineHeight / 2 : k) < q.point.y, !ba || (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) || (g += b)));
                else {
                  Math.max(q.bounds.y1, c.y1);
                  f = Math.min(q.bounds.y2, c.y2) - k + h2._lineHeight / 2;
                  b = 0 <= p.indexOf("range") || "error" === p ? 0 < x3 ? Math.max(q.bounds.y1, c.y1) + h2._lineHeight / 2 + l : Math.min(q.bounds.y2, c.y2) + h2._lineHeight / 2 - k - l : (Math.max(q.bounds.y1, c.y1) + Math.min(q.bounds.y2, c.y2)) / 2 - k / 2 + h2._lineHeight / 2;
                  if (0 < x3) {
                    if (g = b, "bubble" === p || "scatter" === p) g = q.point.y - k / 2 + h2._lineHeight / 2, k > q.bounds.y2 - q.bounds.y1 && (g -= k / 2 + l), 0 > g - h2._lineHeight / 2 && (g += Math.abs(g - h2._lineHeight / 2) <= (q.bounds.y2 - q.bounds.y1) / 2 + l ? Math.abs(g - h2._lineHeight / 2) : (q.bounds.y2 - q.bounds.y1) / 2 + l);
                  } else g = Math.min(q.point.y, b), g > f - k - l && ("bubble" === p || "scatter" === p) && (g = Math.min(q.point.y + l, c.y2 - k - l));
                  g = Math.min(g, f);
                }
              } else 0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("scatter") ? (s3 = "auto", n = 4) : 0 <= p.indexOf("stacked") ? "auto" === s3 && (s3 = "inside") : "bubble" === p && (s3 = "inside"), g = q.point.y + h2._lineHeight / 2 - k / 2, "inside" !== s3 ? (f = c.x1, d = c.x2, 0 > x3 ? (r = q.point.x - L + ("horizontal" === z ? 0 : h2._lineHeight / 2) - n - b, ("horizontal" === z ? r : r - h2._lineHeight / 2) < f && (r = "auto" === s3 ? Math.max(q.point.x, f) + ("horizontal" === z ? 0 : h2._lineHeight / 2) + l + b : f + ("horizontal" === z ? 0 : h2._lineHeight / 2) + n, (ba = r + L - ("horizontal" === z ? 0 : h2._lineHeight / 2) > q.point.x) && (r -= b))) : (r = q.point.x + ("horizontal" === z ? 0 : h2._lineHeight / 2) + n + b, ("horizontal" === z ? r : r - h2._lineHeight / 2) > d - L - n - b && (r = "auto" === s3 ? Math.min(q.point.x, d) - ("horizontal" === z ? L : L - h2._lineHeight / 2) - n - b : d - L - n + ("horizontal" === z ? 0 : h2._lineHeight / 2), (ba = r - ("horizontal" === z ? 0 : h2._lineHeight / 2) < q.point.x) && (r += b)))) : (f = Math.max(q.bounds.x1, c.x1), Math.min(
                q.bounds.x2,
                c.x2
              ), b = 0 <= p.indexOf("range") || "error" === p ? 0 > x3 ? Math.max(q.bounds.x1, c.x1) : Math.min(q.bounds.x2, c.x2) - L - n + ("horizontal" === z ? 0 : h2._lineHeight / 2) : (Math.max(q.bounds.x1, c.x1) + Math.min(q.bounds.x2, c.x2)) / 2 - L / 2 + ("horizontal" === z ? 0 : h2._lineHeight / 2), r = 0 > x3 ? b : Math.min(q.point.x, b), r = Math.max(r, f + ("horizontal" === z ? 0 : h2._lineHeight / 2 + l)));
              "vertical" === z && (g += k - h2._lineHeight / 2, 0 <= "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(p) && (ba = 0 < x3 ? g + ("horizontal" === z ? k - h2._lineHeight / 2 : 0) > q.point.y : g - ("horizontal" === z ? h2._lineHeight / 2 : k) < q.point.y), "bubble" === p || "scatter" === p) && (r += h2._lineHeight / 2 - N / 2);
              h2.x = r;
              h2.y = g;
              h2.render(true);
              w && ("inside" !== s3 && (0 > p.indexOf("bar") && ("error" !== p || !q.axisSwapped) && q.point.x > c.x1 && q.point.x < c.x2 || !ba) && (-1 === "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(p) && ("error" !== p || q.axisSwapped) && q.point.y > c.y1 && q.point.y < c.y2 || !ba)) && (e.lineWidth = w, e.strokeStyle = t ? t : "gray", e.setLineDash && e.setLineDash(J(y, w)), e.beginPath(), e.moveTo(q.point.x, q.point.y), 0 <= p.indexOf("bar") || "error" === p && q.axisSwapped ? e.lineTo(r + (0 < q.direction ? 0 : L) + ("vertical" === z ? -h2._lineHeight / 2 : 0), g + ("vertical" === z ? -k / 2 : k / 2 - h2._lineHeight / 2)) : 0 <= p.indexOf("column") || "error" === p && !q.axisSwapped ? e.lineTo(r + L / 2 - ("horizontal" === z ? 0 : h2._lineHeight / 2), g + ("vertical" === z ? g - k < q.point.y ? 0 : -k : (g - h2._lineHeight / 2 < q.point.y ? k : 0) - h2._lineHeight / 2)) : 0 <= p.indexOf("waterfall") ? e.lineTo(r + L / 2 - ("horizontal" === z ? 0 : h2._lineHeight / 2), "vertical" === z ? 0 < x3 && g < q.point.y ? g : 0 > x3 && g - k > q.point.y ? g - k : q.point.y : 0 < x3 && g + k - h2._lineHeight / 2 < q.point.y ? g + k - h2._lineHeight / 2 : 0 > x3 && g - h2._lineHeight / 2 > q.point.y ? g - h2._lineHeight / 2 : q.point.y) : e.lineTo(r + L / 2 - ("horizontal" === z ? 0 : h2._lineHeight / 2), g + ("vertical" === z ? g - k < q.point.y ? 0 : -k : (g + k - h2._lineHeight / 2 < q.point.y ? k : 0) - h2._lineHeight / 2)), e.stroke());
            }
          }
          e = { source: e, dest: this.plotArea.ctx, animationCallback: M.fadeInAnimation, easingFunction: M.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 };
          for (a = 0; a < this._indexLabels.length; a++) q = this._indexLabels[a], h2 = W("indexLabelBackgroundColor", q.dataPoint, q.dataSeries), q.dataSeries.indexLabelBackgroundColor = m(h2) ? u ? "transparent" : null : h2;
          return e;
        };
        s2.prototype.renderLine = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var d = this.plotArea;
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            for (var f = [], n, l = 0; l < a.dataSeriesIndexes.length; l++) {
              var m2 = a.dataSeriesIndexes[l], k = this.data[m2];
              c.lineWidth = k.lineThickness;
              var q = k.dataPoints, p = "solid";
              if (c.setLineDash) {
                var r = J(k.nullDataLineDashType, k.lineThickness), p = k.lineDashType, g = J(p, k.lineThickness);
                c.setLineDash(g);
              }
              var h2 = k.id;
              this._eventManager.objectMap[h2] = { objectType: "dataSeries", dataSeriesIndex: m2 };
              h2 = X(h2);
              b.strokeStyle = h2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var h2 = k._colorSet, C = h2 = k.lineColor = k.options.lineColor ? k.options.lineColor : h2[0];
              c.strokeStyle = h2;
              var y = true, t = 0, w, v;
              c.beginPath();
              if (0 < q.length) {
                for (var s3 = false, t = 0; t < q.length; t++) if (w = q[t].x.getTime ? q[t].x.getTime() : q[t].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !s3))) if ("number" !== typeof q[t].y) 0 < t && !(k.connectNullData || s3 || y) && (c.stroke(), u && b.stroke()), s3 = true;
                else {
                  w = a.axisX.convertValueToPixel(w);
                  v = a.axisY.convertValueToPixel(q[t].y);
                  var z = k.dataPointIds[t];
                  this._eventManager.objectMap[z] = { id: z, objectType: "dataPoint", dataSeriesIndex: m2, dataPointIndex: t, x1: w, y1: v };
                  y || s3 ? (!y && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(n.x, n.y), p = k.nullDataLineDashType, c.setLineDash(r)), c.lineTo(w, v), u && b.lineTo(w, v)) : (c.beginPath(), c.moveTo(w, v), u && (b.beginPath(), b.moveTo(w, v))), s3 = y = false) : (c.lineTo(w, v), u && b.lineTo(w, v), 0 == t % 500 && (c.stroke(), c.beginPath(), c.moveTo(w, v), u && (b.stroke(), b.beginPath(), b.moveTo(w, v))));
                  n = { x: w, y: v };
                  t < q.length - 1 && (C !== (q[t].lineColor || h2) || p !== (q[t].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(w, v), C = q[t].lineColor || h2, c.strokeStyle = C, c.setLineDash && (q[t].lineDashType ? (p = q[t].lineDashType, c.setLineDash(J(p, k.lineThickness))) : (p = k.lineDashType, c.setLineDash(g))));
                  if (0 !== q[t].markerSize && (0 < q[t].markerSize || 0 < k.markerSize)) {
                    var D = k.getMarkerProperties(t, w, v, c);
                    f.push(D);
                    z = X(z);
                    u && f.push({ x: w, y: v, ctx: b, type: D.type, size: D.size, color: z, borderColor: z, borderThickness: D.borderThickness });
                  }
                  (q[t].indexLabel || k.indexLabel || q[t].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "line", dataPoint: q[t], dataSeries: k, point: { x: w, y: v }, direction: 0 > q[t].y === a.axisY.reversed ? 1 : -1, color: h2 });
                }
                c.stroke();
                u && b.stroke();
              }
            }
            Y.drawMarkers(f);
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(d.x1, d.y1, d.width, d.height), b.beginPath());
            c.restore();
            c.beginPath();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.xClipAnimation, easingFunction: M.easing.linear, animationBase: 0 };
          }
        };
        s2.prototype.renderStepLine = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var d = this.plotArea;
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            for (var f = [], n, l = 0; l < a.dataSeriesIndexes.length; l++) {
              var m2 = a.dataSeriesIndexes[l], k = this.data[m2];
              c.lineWidth = k.lineThickness;
              var q = k.dataPoints, p = "solid";
              if (c.setLineDash) {
                var r = J(k.nullDataLineDashType, k.lineThickness), p = k.lineDashType, g = J(p, k.lineThickness);
                c.setLineDash(g);
              }
              var h2 = k.id;
              this._eventManager.objectMap[h2] = { objectType: "dataSeries", dataSeriesIndex: m2 };
              h2 = X(h2);
              b.strokeStyle = h2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var h2 = k._colorSet, C = h2 = k.lineColor = k.options.lineColor ? k.options.lineColor : h2[0];
              c.strokeStyle = h2;
              var y = true, t = 0, w, v;
              c.beginPath();
              if (0 < q.length) {
                for (var s3 = false, t = 0; t < q.length; t++) if (w = q[t].getTime ? q[t].x.getTime() : q[t].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !s3))) if ("number" !== typeof q[t].y) 0 < t && !(k.connectNullData || s3 || y) && (c.stroke(), u && b.stroke()), s3 = true;
                else {
                  var z = v;
                  w = a.axisX.convertValueToPixel(w);
                  v = a.axisY.convertValueToPixel(q[t].y);
                  var D = k.dataPointIds[t];
                  this._eventManager.objectMap[D] = {
                    id: D,
                    objectType: "dataPoint",
                    dataSeriesIndex: m2,
                    dataPointIndex: t,
                    x1: w,
                    y1: v
                  };
                  y || s3 ? (!y && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(n.x, n.y), p = k.nullDataLineDashType, c.setLineDash(r)), c.lineTo(w, z), c.lineTo(w, v), u && (b.lineTo(w, z), b.lineTo(w, v))) : (c.beginPath(), c.moveTo(w, v), u && (b.beginPath(), b.moveTo(w, v))), s3 = y = false) : (c.lineTo(w, z), u && b.lineTo(w, z), c.lineTo(w, v), u && b.lineTo(w, v), 0 == t % 500 && (c.stroke(), c.beginPath(), c.moveTo(w, v), u && (b.stroke(), b.beginPath(), b.moveTo(w, v))));
                  n = { x: w, y: v };
                  t < q.length - 1 && (C !== (q[t].lineColor || h2) || p !== (q[t].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(w, v), C = q[t].lineColor || h2, c.strokeStyle = C, c.setLineDash && (q[t].lineDashType ? (p = q[t].lineDashType, c.setLineDash(J(p, k.lineThickness))) : (p = k.lineDashType, c.setLineDash(g))));
                  0 !== q[t].markerSize && (0 < q[t].markerSize || 0 < k.markerSize) && (z = k.getMarkerProperties(t, w, v, c), f.push(z), D = X(D), u && f.push({
                    x: w,
                    y: v,
                    ctx: b,
                    type: z.type,
                    size: z.size,
                    color: D,
                    borderColor: D,
                    borderThickness: z.borderThickness
                  }));
                  (q[t].indexLabel || k.indexLabel || q[t].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepLine", dataPoint: q[t], dataSeries: k, point: { x: w, y: v }, direction: 0 > q[t].y === a.axisY.reversed ? 1 : -1, color: h2 });
                }
                c.stroke();
                u && b.stroke();
              }
            }
            Y.drawMarkers(f);
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), b.beginPath());
            c.restore();
            c.beginPath();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.xClipAnimation, easingFunction: M.easing.linear, animationBase: 0 };
          }
        };
        s2.prototype.renderSpline = function(a) {
          function e(a2) {
            a2 = x2(a2, 2);
            if (0 < a2.length) {
              b.beginPath();
              u && d.beginPath();
              b.moveTo(
                a2[0].x,
                a2[0].y
              );
              a2[0].newStrokeStyle && (b.strokeStyle = a2[0].newStrokeStyle);
              a2[0].newLineDashArray && b.setLineDash(a2[0].newLineDashArray);
              u && d.moveTo(a2[0].x, a2[0].y);
              for (var c2 = 0; c2 < a2.length - 3; c2 += 3) if (b.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), u && d.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), 0 < c2 && 0 === c2 % 3e3 || a2[c2 + 3].newStrokeStyle || a2[c2 + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(a2[c2 + 3].x, a2[c2 + 3].y), a2[c2 + 3].newStrokeStyle && (b.strokeStyle = a2[c2 + 3].newStrokeStyle), a2[c2 + 3].newLineDashArray && b.setLineDash(a2[c2 + 3].newLineDashArray), u && (d.stroke(), d.beginPath(), d.moveTo(a2[c2 + 3].x, a2[c2 + 3].y));
              b.stroke();
              u && d.stroke();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx;
            b.save();
            var f = this.plotArea;
            b.beginPath();
            b.rect(f.x1, f.y1, f.width, f.height);
            b.clip();
            for (var n = [], l = 0; l < a.dataSeriesIndexes.length; l++) {
              var m2 = a.dataSeriesIndexes[l], k = this.data[m2];
              b.lineWidth = k.lineThickness;
              var q = k.dataPoints, p = "solid";
              if (b.setLineDash) {
                var r = J(k.nullDataLineDashType, k.lineThickness), p = k.lineDashType, g = J(p, k.lineThickness);
                b.setLineDash(g);
              }
              var h2 = k.id;
              this._eventManager.objectMap[h2] = { objectType: "dataSeries", dataSeriesIndex: m2 };
              h2 = X(h2);
              d.strokeStyle = h2;
              d.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var h2 = k._colorSet, C = h2 = k.lineColor = k.options.lineColor ? k.options.lineColor : h2[0];
              b.strokeStyle = h2;
              var y = 0, t, w, v = [];
              b.beginPath();
              if (0 < q.length) {
                for (w = false, y = 0; y < q.length; y++) if (t = q[y].getTime ? q[y].x.getTime() : q[y].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !w))) if ("number" !== typeof q[y].y) 0 < y && !w && (k.connectNullData ? b.setLineDash && (0 < v.length && (k.options.nullDataLineDashType || !q[y - 1].lineDashType)) && (v[v.length - 1].newLineDashArray = r, p = k.nullDataLineDashType) : (e(v), v = [])), w = true;
                else {
                  t = a.axisX.convertValueToPixel(t);
                  w = a.axisY.convertValueToPixel(q[y].y);
                  var s3 = k.dataPointIds[y];
                  this._eventManager.objectMap[s3] = {
                    id: s3,
                    objectType: "dataPoint",
                    dataSeriesIndex: m2,
                    dataPointIndex: y,
                    x1: t,
                    y1: w
                  };
                  v[v.length] = { x: t, y: w };
                  y < q.length - 1 && (C !== (q[y].lineColor || h2) || p !== (q[y].lineDashType || k.lineDashType)) && (C = q[y].lineColor || h2, v[v.length - 1].newStrokeStyle = C, b.setLineDash && (q[y].lineDashType ? (p = q[y].lineDashType, v[v.length - 1].newLineDashArray = J(p, k.lineThickness)) : (p = k.lineDashType, v[v.length - 1].newLineDashArray = g)));
                  if (0 !== q[y].markerSize && (0 < q[y].markerSize || 0 < k.markerSize)) {
                    var z = k.getMarkerProperties(y, t, w, b);
                    n.push(z);
                    s3 = X(s3);
                    u && n.push({
                      x: t,
                      y: w,
                      ctx: d,
                      type: z.type,
                      size: z.size,
                      color: s3,
                      borderColor: s3,
                      borderThickness: z.borderThickness
                    });
                  }
                  (q[y].indexLabel || k.indexLabel || q[y].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "spline", dataPoint: q[y], dataSeries: k, point: { x: t, y: w }, direction: 0 > q[y].y === a.axisY.reversed ? 1 : -1, color: h2 });
                  w = false;
                }
              }
              e(v);
            }
            Y.drawMarkers(n);
            u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(f.x1, f.y1, f.width, f.height), d.beginPath());
            b.restore();
            b.beginPath();
            return { source: c, dest: this.plotArea.ctx, animationCallback: M.xClipAnimation, easingFunction: M.easing.linear, animationBase: 0 };
          }
        };
        s2.prototype.renderColumn = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, f = 0, n, l, m2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0, p = a.axisX.dataInfo.minDiff, r = a.axisX.conversionParameters.range ? a.axisX.conversionParameters.range : a.axisX.range;
            isFinite(p) || (p = 0.3 * Math.abs(r));
            p = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(r) : Math.abs(p) / Math.abs(r)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && f > q && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && q < f) && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
            p < f && (p = f);
            p > q && (p = q);
            this._dataPointWidths.push(p);
            this._dataPointMinWidths.push(f);
            this._dataPointMaxWidths.push(q);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (q = 0; q < a.dataSeriesIndexes.length; q++) {
              var r = a.dataSeriesIndexes[q], g = this.data[r], h2 = g.dataPoints;
              if (0 < h2.length) {
                for (var C = 5 < p && g.bevelEnabled ? true : false, f = 0; f < h2.length; f++) if (h2[f].getTime ? m2 = h2[f].x.getTime() : m2 = h2[f].x, !(m2 < a.axisX.dataInfo.viewPortMin || m2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof h2[f].y) {
                  n = a.axisX.convertValueToPixel(m2);
                  l = a.axisY.convertValueToPixel(h2[f].y);
                  n = a.axisX.reversed ? n + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + q) * p << 0 : n - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + q) * p << 0;
                  var y = a.axisX.reversed ? n - p << 0 : n + p << 0, t;
                  if (0 <= h2[f].y) {
                    if (t = k, l > t) {
                      var w = l;
                      l = t;
                      t = w;
                    }
                  } else t = l, l = k, l > t && (w = l, l = t, t = w);
                  var w = Math.max(l, d.y1), v = Math.min(t, d.y2), b = h2[f].color ? h2[f].color : g._colorSet[f % g._colorSet.length];
                  aa(
                    c,
                    a.axisX.reversed ? y : n,
                    w,
                    a.axisX.reversed ? n : y,
                    v,
                    b,
                    0,
                    null,
                    C && (a.axisY.reversed ? 0 > h2[f].y : 0 <= h2[f].y),
                    (a.axisY.reversed ? 0 <= h2[f].y : 0 > h2[f].y) && C,
                    false,
                    false,
                    g.fillOpacity
                  );
                  b = g.dataPointIds[f];
                  this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: f, x1: n, y1: w, x2: y, y2: v };
                  b = X(b);
                  u && aa(this._eventManager.ghostCtx, a.axisX.reversed ? y : n, w, a.axisX.reversed ? n : y, v, b, 0, null, false, false, false, false);
                  (h2[f].indexLabel || g.indexLabel || h2[f].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "column",
                    dataPoint: h2[f],
                    dataSeries: g,
                    point: { x: n + (y - n) / 2, y: 0 > h2[f].y === a.axisY.reversed ? l : t },
                    direction: 0 > h2[f].y === a.axisY.reversed ? 1 : -1,
                    bounds: { x1: n, y1: Math.min(l, t), x2: y, y2: Math.max(l, t) },
                    color: b
                  });
                }
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.yScaleAnimation, easingFunction: M.easing.easeOutQuart, animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k };
          }
        };
        s2.prototype.renderStackedColumn = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, f = [], n = [], l = [], m2 = [], k = 0, q, p, r, g = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, h2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, C = a.axisX.dataInfo.minDiff, y = a.axisX.conversionParameters.range ? a.axisX.conversionParameters.range : a.axisX.range;
            isFinite(C) || (C = 0.3 * Math.abs(y));
            C = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(C) / Math.log(y) : Math.abs(C) / Math.abs(y)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > h2 && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, h2));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h2 < k) && (h2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            C < k && (C = k);
            C > h2 && (C = h2);
            this._dataPointWidths.push(C);
            this._dataPointMinWidths.push(k);
            this._dataPointMaxWidths.push(h2);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (h2 = 0; h2 < a.dataSeriesIndexes.length; h2++) {
              var y = a.dataSeriesIndexes[h2], t = this.data[y], w = t.dataPoints;
              if (0 < w.length) {
                var v = 5 < C && t.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < w.length; k++) if (r = w[k].x.getTime ? w[k].x.getTime() : w[k].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax) && "number" === typeof w[k].y) {
                  q = a.axisX.convertValueToPixel(r);
                  q = q - a.plotType.plotUnits.length * C / 2 + a.index * C << 0;
                  var s3 = q + C << 0, z;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < w[k].y) l[r] = w[k].y + (l[r] ? l[r] : 0), 0 < l[r] && (p = a.axisY.convertValueToPixel(l[r]), z = "undefined" !== typeof f[r] ? f[r] : g, f[r] = p);
                  else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= w[k].y) m2[r] = w[k].y + (m2[r] ? m2[r] : 0), z = a.axisY.convertValueToPixel(m2[r]), p = "undefined" !== typeof n[r] ? n[r] : g, n[r] = z;
                  else if (p = a.axisY.convertValueToPixel(w[k].y), 0 <= w[k].y) {
                    var D = "undefined" !== typeof f[r] ? f[r] : 0;
                    p -= D;
                    z = g - D;
                    f[r] = D + (z - p);
                  } else D = n[r] ? n[r] : 0, z = p + D, p = g + D, n[r] = D + (z - p);
                  b = w[k].color ? w[k].color : t._colorSet[k % t._colorSet.length];
                  r = Math.max(p, d.y1);
                  D = Math.min(z, d.y2);
                  aa(c, q, a.axisY.reversed ? D : r, s3, a.axisY.reversed ? r : D, b, 0, null, v && (a.axisY.reversed ? 0 > w[k].y : 0 <= w[k].y), (a.axisY.reversed ? 0 <= w[k].y : 0 > w[k].y) && v, false, false, t.fillOpacity);
                  b = t.dataPointIds[k];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: y,
                    dataPointIndex: k,
                    x1: q,
                    y1: r,
                    x2: s3,
                    y2: D
                  };
                  b = X(b);
                  u && aa(this._eventManager.ghostCtx, q, r, s3, D, b, 0, null, false, false, false, false);
                  (w[k].indexLabel || t.indexLabel || w[k].indexLabelFormatter || t.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn", dataPoint: w[k], dataSeries: t, point: { x: q + (s3 - q) / 2, y: 0 <= w[k].y ? p : z }, direction: 0 > w[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: q, y1: Math.min(p, z), x2: s3, y2: Math.max(p, z) }, color: b, cumulativeY: t.dataPointEOs[k].cumulativeY });
                }
              }
            }
            u && (e.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: M.yScaleAnimation,
              easingFunction: M.easing.easeOutQuart,
              animationBase: g < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : g > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : g
            };
          }
        };
        s2.prototype.renderStackedColumn100 = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, f = [], n = [], l = [], m2 = [], k = 0, q, p, r, g = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
            var h2 = a.axisX.dataInfo.minDiff, C = a.axisX.conversionParameters.range ? a.axisX.conversionParameters.range : a.axisX.range;
            isFinite(h2) || (h2 = 0.3 * Math.abs(C));
            h2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(h2) / Math.log(C) : Math.abs(h2) / Math.abs(C)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > r && (k = Math.min(
              this.options.dataPointWidth ? this.dataPointWidth : Infinity,
              r
            ));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && r < k) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            h2 < k && (h2 = k);
            h2 > r && (h2 = r);
            this._dataPointWidths.push(h2);
            this._dataPointMinWidths.push(k);
            this._dataPointMaxWidths.push(r);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (C = 0; C < a.dataSeriesIndexes.length; C++) {
              var y = a.dataSeriesIndexes[C], t = this.data[y], w = t.dataPoints;
              if (0 < w.length) {
                for (var v = 5 < h2 && t.bevelEnabled ? true : false, k = 0; k < w.length; k++) if (r = w[k].x.getTime ? w[k].x.getTime() : w[k].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax) && "number" === typeof w[k].y) {
                  q = a.axisX.convertValueToPixel(r);
                  p = 0 !== a.dataPointYSums[r] ? 100 * (w[k].y / a.dataPointYSums[r]) : 0;
                  q = q - a.plotType.plotUnits.length * h2 / 2 + a.index * h2 << 0;
                  var s3 = q + h2 << 0, z;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < w[k].y) {
                    l[r] = p + ("undefined" !== typeof l[r] ? l[r] : 0);
                    if (0 >= l[r]) continue;
                    p = a.axisY.convertValueToPixel(l[r]);
                    z = f[r] ? f[r] : g;
                    f[r] = p;
                  } else a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= w[k].y ? (m2[r] = p + ("undefined" !== typeof m2[r] ? m2[r] : 0), z = a.axisY.convertValueToPixel(m2[r]), p = n[r] ? n[r] : g, n[r] = z) : (p = a.axisY.convertValueToPixel(p), 0 <= w[k].y ? (b = "undefined" !== typeof f[r] ? f[r] : 0, p -= b, z = g - b, a.dataSeriesIndexes.length - 1 === C && 1 >= Math.abs(d.y1 - p) && (p = d.y1), f[r] = b + (z - p)) : (b = "undefined" !== typeof n[r] ? n[r] : 0, z = p + b, p = g + b, a.dataSeriesIndexes.length - 1 === C && 1 >= Math.abs(d.y2 - z) && (z = d.y2), n[r] = b + (z - p)));
                  b = w[k].color ? w[k].color : t._colorSet[k % t._colorSet.length];
                  aa(c, q, a.axisY.reversed ? z : p, s3, a.axisY.reversed ? p : z, b, 0, null, v && (a.axisY.reversed ? 0 > w[k].y : 0 <= w[k].y), (a.axisY.reversed ? 0 <= w[k].y : 0 > w[k].y) && v, false, false, t.fillOpacity);
                  b = t.dataPointIds[k];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: y,
                    dataPointIndex: k,
                    x1: q,
                    y1: p,
                    x2: s3,
                    y2: z
                  };
                  b = X(b);
                  u && aa(this._eventManager.ghostCtx, q, p, s3, z, b, 0, null, false, false, false, false);
                  (w[k].indexLabel || t.indexLabel || w[k].indexLabelFormatter || t.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn100", dataPoint: w[k], dataSeries: t, point: { x: q + (s3 - q) / 2, y: 0 <= w[k].y ? p : z }, direction: 0 > w[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: q, y1: Math.min(p, z), x2: s3, y2: Math.max(p, z) }, color: b, yCumulative: 100 * (t.dataPointEOs[k].cumulativeY / a.dataPointYSums[r]) });
                }
              }
            }
            u && (e.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: M.yScaleAnimation,
              easingFunction: M.easing.easeOutQuart,
              animationBase: g < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : g > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : g
            };
          }
        };
        s2.prototype.renderBar = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, f = 0, n, l, m2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0, p = a.axisX.dataInfo.minDiff, r = a.axisX.conversionParameters.range ? a.axisX.conversionParameters.range : a.axisX.range;
            isFinite(p) || (p = 0.3 * Math.abs(r));
            p = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(r) : Math.abs(p) / Math.abs(r)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && f > q && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && q < f) && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
            p < f && (p = f);
            p > q && (p = q);
            this._dataPointWidths.push(p);
            this._dataPointMinWidths.push(f);
            this._dataPointMaxWidths.push(q);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (q = 0; q < a.dataSeriesIndexes.length; q++) {
              var r = a.dataSeriesIndexes[q], g = this.data[r], h2 = g.dataPoints;
              if (0 < h2.length) {
                var C = 5 < p && g.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (f = 0; f < h2.length; f++) if (h2[f].getTime ? m2 = h2[f].x.getTime() : m2 = h2[f].x, !(m2 < a.axisX.dataInfo.viewPortMin || m2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof h2[f].y) {
                  l = a.axisX.convertValueToPixel(m2);
                  n = a.axisY.convertValueToPixel(h2[f].y);
                  l = a.axisX.reversed ? l + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + q) * p << 0 : l - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + q) * p << 0;
                  var y = a.axisX.reversed ? l - p << 0 : l + p << 0, t;
                  0 <= h2[f].y ? t = k : (t = n, n = k);
                  b = h2[f].color ? h2[f].color : g._colorSet[f % g._colorSet.length];
                  aa(c, a.axisY.reversed ? n : t, a.axisX.reversed ? y : l, a.axisY.reversed ? t : n, a.axisX.reversed ? l : y, b, 0, null, C, false, false, false, g.fillOpacity);
                  b = g.dataPointIds[f];
                  this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: f, x1: t, y1: l, x2: n, y2: y };
                  b = X(b);
                  u && aa(this._eventManager.ghostCtx, t, a.axisX.reversed ? y : l, n, a.axisX.reversed ? l : y, b, 0, null, false, false, false, false);
                  (h2[f].indexLabel || g.indexLabel || h2[f].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({ chartType: "bar", dataPoint: h2[f], dataSeries: g, point: { x: 0 <= h2[f].y ? n : t, y: l + (y - l) / 2 }, direction: 0 > h2[f].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(t, n), y1: l, x2: Math.max(t, n), y2: y }, color: b });
                }
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.xScaleAnimation, easingFunction: M.easing.easeOutQuart, animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k };
          }
        };
        s2.prototype.renderStackedBar = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, f = [], n = [], l = [], m2 = [], k = 0, q, p, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, h2 = a.axisX.dataInfo.minDiff, C = a.axisX.conversionParameters.range ? a.axisX.conversionParameters.range : a.axisX.range;
            isFinite(h2) || (h2 = 0.3 * Math.abs(C));
            h2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(h2) / Math.log(C) : Math.abs(h2) / Math.abs(C)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > g && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && g < k) && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            h2 < k && (h2 = k);
            h2 > g && (h2 = g);
            this._dataPointWidths.push(h2);
            this._dataPointMinWidths.push(k);
            this._dataPointMaxWidths.push(g);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (g = 0; g < a.dataSeriesIndexes.length; g++) {
              var C = a.dataSeriesIndexes[g], y = this.data[C], t = y.dataPoints;
              if (0 < t.length) {
                var w = 5 < h2 && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < t.length; k++) if (b = t[k].x.getTime ? t[k].x.getTime() : t[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[k].y) {
                  p = a.axisX.convertValueToPixel(b);
                  p = p - a.plotType.plotUnits.length * h2 / 2 + a.index * h2 << 0;
                  var v = p + h2 << 0, s3;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[k].y) l[b] = t[k].y + (l[b] ? l[b] : 0), 0 < l[b] && (s3 = f[b] ? f[b] : r, f[b] = q = a.axisY.convertValueToPixel(l[b]));
                  else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[k].y) m2[b] = t[k].y + (m2[b] ? m2[b] : 0), q = n[b] ? n[b] : r, n[b] = s3 = a.axisY.convertValueToPixel(m2[b]);
                  else if (q = a.axisY.convertValueToPixel(t[k].y), 0 <= t[k].y) {
                    var z = f[b] ? f[b] : 0;
                    s3 = r + z;
                    q += z;
                    f[b] = z + (q - s3);
                  } else z = n[b] ? n[b] : 0, s3 = q - z, q = r - z, n[b] = z + (q - s3);
                  b = t[k].color ? t[k].color : y._colorSet[k % y._colorSet.length];
                  aa(c, a.axisY.reversed ? q : s3, p, a.axisY.reversed ? s3 : q, v, b, 0, null, w, false, false, false, y.fillOpacity);
                  b = y.dataPointIds[k];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: C,
                    dataPointIndex: k,
                    x1: s3,
                    y1: p,
                    x2: q,
                    y2: v
                  };
                  b = X(b);
                  u && aa(this._eventManager.ghostCtx, s3, p, q, v, b, 0, null, false, false, false, false);
                  (t[k].indexLabel || y.indexLabel || t[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar", dataPoint: t[k], dataSeries: y, point: { x: 0 <= t[k].y ? q : s3, y: p + (v - p) / 2 }, direction: 0 > t[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(s3, q), y1: p, x2: Math.max(s3, q), y2: v }, color: b });
                }
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.xScaleAnimation, easingFunction: M.easing.easeOutQuart, animationBase: r < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : r > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : r };
          }
        };
        s2.prototype.renderStackedBar100 = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, f = [], n = [], l = [], m2 = [], k = 0, q, p, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, h2 = a.axisX.dataInfo.minDiff, C = a.axisX.conversionParameters.range ? a.axisX.conversionParameters.range : a.axisX.range;
            isFinite(h2) || (h2 = 0.3 * Math.abs(C));
            h2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(h2) / Math.log(C) : Math.abs(h2) / Math.abs(C)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > g && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && g < k) && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            h2 < k && (h2 = k);
            h2 > g && (h2 = g);
            this._dataPointWidths.push(h2);
            this._dataPointMinWidths.push(k);
            this._dataPointMaxWidths.push(g);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (g = 0; g < a.dataSeriesIndexes.length; g++) {
              var C = a.dataSeriesIndexes[g], y = this.data[C], t = y.dataPoints;
              if (0 < t.length) {
                var w = 5 < h2 && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < t.length; k++) if (b = t[k].x.getTime ? t[k].x.getTime() : t[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[k].y) {
                  p = a.axisX.convertValueToPixel(b);
                  var v;
                  v = 0 !== a.dataPointYSums[b] ? 100 * (t[k].y / a.dataPointYSums[b]) : 0;
                  p = p - a.plotType.plotUnits.length * h2 / 2 + a.index * h2 << 0;
                  var s3 = p + h2 << 0;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[k].y) {
                    l[b] = v + (l[b] ? l[b] : 0);
                    if (0 >= l[b]) continue;
                    v = f[b] ? f[b] : r;
                    f[b] = q = a.axisY.convertValueToPixel(l[b]);
                  } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[k].y) m2[b] = v + (m2[b] ? m2[b] : 0), q = n[b] ? n[b] : r, n[b] = v = a.axisY.convertValueToPixel(m2[b]);
                  else if (q = a.axisY.convertValueToPixel(v), 0 <= t[k].y) {
                    var z = f[b] ? f[b] : 0;
                    v = r + z;
                    q += z;
                    a.dataSeriesIndexes.length - 1 === g && 1 >= Math.abs(d.x2 - q) && (q = d.x2);
                    f[b] = z + (q - v);
                  } else z = n[b] ? n[b] : 0, v = q - z, q = r - z, a.dataSeriesIndexes.length - 1 === g && 1 >= Math.abs(d.x1 - v) && (v = d.x1), n[b] = z + (q - v);
                  b = t[k].color ? t[k].color : y._colorSet[k % y._colorSet.length];
                  aa(c, a.axisY.reversed ? q : v, p, a.axisY.reversed ? v : q, s3, b, 0, null, w, false, false, false, y.fillOpacity);
                  b = y.dataPointIds[k];
                  this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: C, dataPointIndex: k, x1: v, y1: p, x2: q, y2: s3 };
                  b = X(b);
                  u && aa(this._eventManager.ghostCtx, v, p, q, s3, b, 0, null, false, false, false, false);
                  (t[k].indexLabel || y.indexLabel || t[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stackedBar100",
                    dataPoint: t[k],
                    dataSeries: y,
                    point: { x: 0 <= t[k].y ? q : v, y: p + (s3 - p) / 2 },
                    direction: 0 > t[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: { x1: Math.min(v, q), y1: p, x2: Math.max(v, q), y2: s3 },
                    color: b
                  });
                }
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.xScaleAnimation, easingFunction: M.easing.easeOutQuart, animationBase: r < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : r > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : r };
          }
        };
        s2.prototype.renderArea = function(a) {
          var e, c;
          function b() {
            z && (0 < g.lineThickness && f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? s3 = v : 0 > a.axisY.viewportMaximum ? s3 = l.y1 : 0 < a.axisY.viewportMinimum && (s3 = v), f.lineTo(y, s3), f.lineTo(z.x, s3), f.closePath(), f.globalAlpha = g.fillOpacity, f.fill(), f.globalAlpha = 1, u && (n.lineTo(y, s3), n.lineTo(z.x, s3), n.closePath(), n.fill()), f.beginPath(), f.moveTo(y, t), n.beginPath(), n.moveTo(y, t), z = { x: y, y: t });
          }
          var d = a.targetCanvasCtx || this.plotArea.ctx, f = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var n = this._eventManager.ghostCtx, l = a.axisY.lineCoordinates, m2 = [], k = this.plotArea, q;
            f.save();
            u && n.save();
            f.beginPath();
            f.rect(
              k.x1,
              k.y1,
              k.width,
              k.height
            );
            f.clip();
            u && (n.beginPath(), n.rect(k.x1, k.y1, k.width, k.height), n.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
              var r = a.dataSeriesIndexes[p], g = this.data[r], h2 = g.dataPoints, m2 = g.id;
              this._eventManager.objectMap[m2] = { objectType: "dataSeries", dataSeriesIndex: r };
              m2 = X(m2);
              n.fillStyle = m2;
              m2 = [];
              e = true;
              var C = 0, y, t, w, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), s3, z = null;
              if (0 < h2.length) {
                var D = g._colorSet[C % g._colorSet.length], A2 = g.lineColor = g.options.lineColor || D, x3 = A2;
                f.fillStyle = D;
                f.strokeStyle = A2;
                f.lineWidth = g.lineThickness;
                c = "solid";
                if (f.setLineDash) {
                  var O = J(g.nullDataLineDashType, g.lineThickness);
                  c = g.lineDashType;
                  var P = J(c, g.lineThickness);
                  f.setLineDash(P);
                }
                for (var ba = true; C < h2.length; C++) if (w = h2[C].x.getTime ? h2[C].x.getTime() : h2[C].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !ba))) if ("number" !== typeof h2[C].y) g.connectNullData || (ba || e) || b(), ba = true;
                else {
                  y = a.axisX.convertValueToPixel(w);
                  t = a.axisY.convertValueToPixel(h2[C].y);
                  e || ba ? (!e && g.connectNullData ? (f.setLineDash && (g.options.nullDataLineDashType || c === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (e = y, c = t, y = q.x, t = q.y, b(), f.moveTo(q.x, q.y), y = e, t = c, z = q, c = g.nullDataLineDashType, f.setLineDash(O)), f.lineTo(y, t), u && n.lineTo(y, t)) : (f.beginPath(), f.moveTo(y, t), u && (n.beginPath(), n.moveTo(y, t)), z = { x: y, y: t }), ba = e = false) : (f.lineTo(y, t), u && n.lineTo(y, t), 0 == C % 250 && b());
                  q = { x: y, y: t };
                  C < h2.length - 1 && (x3 !== (h2[C].lineColor || A2) || c !== (h2[C].lineDashType || g.lineDashType)) && (b(), x3 = h2[C].lineColor || A2, f.strokeStyle = x3, f.setLineDash && (h2[C].lineDashType ? (c = h2[C].lineDashType, f.setLineDash(J(c, g.lineThickness))) : (c = g.lineDashType, f.setLineDash(P))));
                  var Z = g.dataPointIds[C];
                  this._eventManager.objectMap[Z] = { id: Z, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: C, x1: y, y1: t };
                  0 !== h2[C].markerSize && (0 < h2[C].markerSize || 0 < g.markerSize) && (w = g.getMarkerProperties(C, y, t, f), m2.push(w), Z = X(Z), u && m2.push({ x: y, y: t, ctx: n, type: w.type, size: w.size, color: Z, borderColor: Z, borderThickness: w.borderThickness }));
                  (h2[C].indexLabel || g.indexLabel || h2[C].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({ chartType: "area", dataPoint: h2[C], dataSeries: g, point: { x: y, y: t }, direction: 0 > h2[C].y === a.axisY.reversed ? 1 : -1, color: D });
                }
                b();
                Y.drawMarkers(m2);
              }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            f.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: M.xClipAnimation, easingFunction: M.easing.linear, animationBase: 0 };
          }
        };
        s2.prototype.renderSplineArea = function(a) {
          function e() {
            var c2 = x2(w, 2);
            if (0 < c2.length) {
              if (0 < q.lineThickness) {
                b.beginPath();
                b.moveTo(c2[0].x, c2[0].y);
                c2[0].newStrokeStyle && (b.strokeStyle = c2[0].newStrokeStyle);
                c2[0].newLineDashArray && b.setLineDash(c2[0].newLineDashArray);
                for (var e2 = 0; e2 < c2.length - 3; e2 += 3) if (b.bezierCurveTo(c2[e2 + 1].x, c2[e2 + 1].y, c2[e2 + 2].x, c2[e2 + 2].y, c2[e2 + 3].x, c2[e2 + 3].y), u && d.bezierCurveTo(c2[e2 + 1].x, c2[e2 + 1].y, c2[e2 + 2].x, c2[e2 + 2].y, c2[e2 + 3].x, c2[e2 + 3].y), c2[e2 + 3].newStrokeStyle || c2[e2 + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(c2[e2 + 3].x, c2[e2 + 3].y), c2[e2 + 3].newStrokeStyle && (b.strokeStyle = c2[e2 + 3].newStrokeStyle), c2[e2 + 3].newLineDashArray && b.setLineDash(c2[e2 + 3].newLineDashArray);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(
                c2[0].x,
                c2[0].y
              );
              u && (d.beginPath(), d.moveTo(c2[0].x, c2[0].y));
              for (e2 = 0; e2 < c2.length - 3; e2 += 3) b.bezierCurveTo(c2[e2 + 1].x, c2[e2 + 1].y, c2[e2 + 2].x, c2[e2 + 2].y, c2[e2 + 3].x, c2[e2 + 3].y), u && d.bezierCurveTo(c2[e2 + 1].x, c2[e2 + 1].y, c2[e2 + 2].x, c2[e2 + 2].y, c2[e2 + 3].x, c2[e2 + 3].y);
              a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? s3 = C : 0 > a.axisY.viewportMaximum ? s3 = f.y1 : 0 < a.axisY.viewportMinimum && (s3 = C);
              t = { x: c2[0].x, y: c2[0].y };
              b.lineTo(c2[c2.length - 1].x, s3);
              b.lineTo(t.x, s3);
              b.closePath();
              b.globalAlpha = q.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              u && (d.lineTo(c2[c2.length - 1].x, s3), d.lineTo(t.x, s3), d.closePath(), d.fill());
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx, f = a.axisY.lineCoordinates, n = [], l = this.plotArea;
            b.save();
            u && d.save();
            b.beginPath();
            b.rect(l.x1, l.y1, l.width, l.height);
            b.clip();
            u && (d.beginPath(), d.rect(l.x1, l.y1, l.width, l.height), d.clip());
            for (var m2 = 0; m2 < a.dataSeriesIndexes.length; m2++) {
              var k = a.dataSeriesIndexes[m2], q = this.data[k], p = q.dataPoints, n = q.id;
              this._eventManager.objectMap[n] = { objectType: "dataSeries", dataSeriesIndex: k };
              n = X(n);
              d.fillStyle = n;
              var n = [], r = 0, g, h2, C = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), s3, t = null, w = [];
              if (0 < p.length) {
                var v = q._colorSet[r % q._colorSet.length], A2 = q.lineColor = q.options.lineColor || v, z = A2;
                b.fillStyle = v;
                b.strokeStyle = A2;
                b.lineWidth = q.lineThickness;
                var D = "solid";
                if (b.setLineDash) {
                  var B2 = J(q.nullDataLineDashType, q.lineThickness), D = q.lineDashType, E = J(D, q.lineThickness);
                  b.setLineDash(E);
                }
                for (h2 = false; r < p.length; r++) if (g = p[r].x.getTime ? p[r].x.getTime() : p[r].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!q.connectNullData || !h2))) if ("number" !== typeof p[r].y) 0 < r && !h2 && (q.connectNullData ? b.setLineDash && (0 < w.length && (q.options.nullDataLineDashType || !p[r - 1].lineDashType)) && (w[w.length - 1].newLineDashArray = B2, D = q.nullDataLineDashType) : (e(), w = [])), h2 = true;
                else {
                  g = a.axisX.convertValueToPixel(g);
                  h2 = a.axisY.convertValueToPixel(p[r].y);
                  var O = q.dataPointIds[r];
                  this._eventManager.objectMap[O] = { id: O, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: r, x1: g, y1: h2 };
                  w[w.length] = { x: g, y: h2 };
                  r < p.length - 1 && (z !== (p[r].lineColor || A2) || D !== (p[r].lineDashType || q.lineDashType)) && (z = p[r].lineColor || A2, w[w.length - 1].newStrokeStyle = z, b.setLineDash && (p[r].lineDashType ? (D = p[r].lineDashType, w[w.length - 1].newLineDashArray = J(D, q.lineThickness)) : (D = q.lineDashType, w[w.length - 1].newLineDashArray = E)));
                  if (0 !== p[r].markerSize && (0 < p[r].markerSize || 0 < q.markerSize)) {
                    var P = q.getMarkerProperties(r, g, h2, b);
                    n.push(P);
                    O = X(O);
                    u && n.push({ x: g, y: h2, ctx: d, type: P.type, size: P.size, color: O, borderColor: O, borderThickness: P.borderThickness });
                  }
                  (p[r].indexLabel || q.indexLabel || p[r].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({ chartType: "splineArea", dataPoint: p[r], dataSeries: q, point: { x: g, y: h2 }, direction: 0 > p[r].y === a.axisY.reversed ? 1 : -1, color: v });
                  h2 = false;
                }
                e();
                Y.drawMarkers(n);
              }
            }
            u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(
              a.axisX.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: M.xClipAnimation, easingFunction: M.easing.linear, animationBase: 0 };
          }
        };
        s2.prototype.renderStepArea = function(a) {
          var e, c;
          function b() {
            z && (0 < g.lineThickness && f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? A2 = v : 0 > a.axisY.viewportMaximum ? A2 = l.y1 : 0 < a.axisY.viewportMinimum && (A2 = v), f.lineTo(s3, A2), f.lineTo(z.x, A2), f.closePath(), f.globalAlpha = g.fillOpacity, f.fill(), f.globalAlpha = 1, u && (n.lineTo(s3, A2), n.lineTo(z.x, A2), n.closePath(), n.fill()), f.beginPath(), f.moveTo(s3, t), n.beginPath(), n.moveTo(s3, t), z = { x: s3, y: t });
          }
          var d = a.targetCanvasCtx || this.plotArea.ctx, f = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var n = this._eventManager.ghostCtx, l = a.axisY.lineCoordinates, m2 = [], k = this.plotArea, q;
            f.save();
            u && n.save();
            f.beginPath();
            f.rect(k.x1, k.y1, k.width, k.height);
            f.clip();
            u && (n.beginPath(), n.rect(k.x1, k.y1, k.width, k.height), n.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
              var r = a.dataSeriesIndexes[p], g = this.data[r], h2 = g.dataPoints, m2 = g.id;
              this._eventManager.objectMap[m2] = { objectType: "dataSeries", dataSeriesIndex: r };
              m2 = X(m2);
              n.fillStyle = m2;
              m2 = [];
              e = true;
              var C = 0, s3, t, w, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), A2, z = null;
              c = false;
              if (0 < h2.length) {
                var D = g._colorSet[C % g._colorSet.length], x3 = g.lineColor = g.options.lineColor || D, B2 = x3;
                f.fillStyle = D;
                f.strokeStyle = x3;
                f.lineWidth = g.lineThickness;
                var O = "solid";
                if (f.setLineDash) {
                  var P = J(g.nullDataLineDashType, g.lineThickness), O = g.lineDashType, ba = J(O, g.lineThickness);
                  f.setLineDash(ba);
                }
                for (; C < h2.length; C++) if (w = h2[C].x.getTime ? h2[C].x.getTime() : h2[C].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !c))) {
                  var Z = t;
                  "number" !== typeof h2[C].y ? (g.connectNullData || (c || e) || b(), c = true) : (s3 = a.axisX.convertValueToPixel(w), t = a.axisY.convertValueToPixel(h2[C].y), e || c ? (!e && g.connectNullData ? (f.setLineDash && (g.options.nullDataLineDashType || O === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (e = s3, c = t, s3 = q.x, t = q.y, b(), f.moveTo(q.x, q.y), s3 = e, t = c, z = q, O = g.nullDataLineDashType, f.setLineDash(P)), f.lineTo(s3, Z), f.lineTo(s3, t), u && (n.lineTo(s3, Z), n.lineTo(s3, t))) : (f.beginPath(), f.moveTo(s3, t), u && (n.beginPath(), n.moveTo(s3, t)), z = { x: s3, y: t }), c = e = false) : (f.lineTo(s3, Z), u && n.lineTo(
                    s3,
                    Z
                  ), f.lineTo(s3, t), u && n.lineTo(s3, t), 0 == C % 250 && b()), q = { x: s3, y: t }, C < h2.length - 1 && (B2 !== (h2[C].lineColor || x3) || O !== (h2[C].lineDashType || g.lineDashType)) && (b(), B2 = h2[C].lineColor || x3, f.strokeStyle = B2, f.setLineDash && (h2[C].lineDashType ? (O = h2[C].lineDashType, f.setLineDash(J(O, g.lineThickness))) : (O = g.lineDashType, f.setLineDash(ba)))), w = g.dataPointIds[C], this._eventManager.objectMap[w] = { id: w, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: C, x1: s3, y1: t }, 0 !== h2[C].markerSize && (0 < h2[C].markerSize || 0 < g.markerSize) && (Z = g.getMarkerProperties(C, s3, t, f), m2.push(Z), w = X(w), u && m2.push({ x: s3, y: t, ctx: n, type: Z.type, size: Z.size, color: w, borderColor: w, borderThickness: Z.borderThickness })), (h2[C].indexLabel || g.indexLabel || h2[C].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepArea", dataPoint: h2[C], dataSeries: g, point: { x: s3, y: t }, direction: 0 > h2[C].y === a.axisY.reversed ? 1 : -1, color: D }));
                }
                b();
                Y.drawMarkers(m2);
              }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            f.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: M.xClipAnimation, easingFunction: M.easing.linear, animationBase: 0 };
          }
        };
        s2.prototype.renderStackedArea = function(a) {
          function e() {
            if (!(1 > k.length)) {
              for (0 < D.lineThickness && b.stroke(); 0 < k.length; ) {
                var a2 = k.pop();
                b.lineTo(a2.x, a2.y);
                u && s3.lineTo(a2.x, a2.y);
              }
              b.closePath();
              b.globalAlpha = D.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              b.beginPath();
              u && (s3.closePath(), s3.fill(), s3.beginPath());
              k = [];
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, f = null, n = [], l = this.plotArea, m2 = [], k = [], q = [], p = [], r = 0, g, h2, C = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), s3 = this._eventManager.ghostCtx, t, w, v;
            u && s3.beginPath();
            b.save();
            u && s3.save();
            b.beginPath();
            b.rect(l.x1, l.y1, l.width, l.height);
            b.clip();
            u && (s3.beginPath(), s3.rect(l.x1, l.y1, l.width, l.height), s3.clip());
            for (var d = [], A2 = 0; A2 < a.dataSeriesIndexes.length; A2++) {
              var z = a.dataSeriesIndexes[A2], D = this.data[z], x3 = D.dataPoints;
              D.dataPointIndexes = [];
              for (r = 0; r < x3.length; r++) z = x3[r].x.getTime ? x3[r].x.getTime() : x3[r].x, D.dataPointIndexes[z] = r, d[z] || (q.push(z), d[z] = true);
              q.sort(Ua);
            }
            for (A2 = 0; A2 < a.dataSeriesIndexes.length; A2++) {
              z = a.dataSeriesIndexes[A2];
              D = this.data[z];
              x3 = D.dataPoints;
              w = true;
              k = [];
              r = D.id;
              this._eventManager.objectMap[r] = { objectType: "dataSeries", dataSeriesIndex: z };
              r = X(r);
              s3.fillStyle = r;
              if (0 < q.length) {
                var d = D._colorSet[0], B2 = D.lineColor = D.options.lineColor || d, O = B2;
                b.fillStyle = d;
                b.strokeStyle = B2;
                b.lineWidth = D.lineThickness;
                v = "solid";
                if (b.setLineDash) {
                  var P = J(D.nullDataLineDashType, D.lineThickness);
                  v = D.lineDashType;
                  var ba = J(v, D.lineThickness);
                  b.setLineDash(ba);
                }
                for (var Z = true, r = 0; r < q.length; r++) {
                  var f = q[r], ha = null, ha = 0 <= D.dataPointIndexes[f] ? x3[D.dataPointIndexes[f]] : { x: f, y: null };
                  if (!(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!D.connectNullData || !Z))) if ("number" !== typeof ha.y) D.connectNullData || (Z || w) || e(), Z = true;
                  else {
                    g = a.axisX.convertValueToPixel(f);
                    var pa = m2[f] ? m2[f] : 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                      p[f] = ha.y + (p[f] ? p[f] : 0);
                      if (0 >= p[f] && a.axisY.logarithmic) continue;
                      h2 = a.axisY.convertValueToPixel(p[f]);
                    } else h2 = a.axisY.convertValueToPixel(ha.y), h2 -= pa;
                    k.push({ x: g, y: C - pa });
                    m2[f] = C - h2;
                    w || Z ? (!w && D.connectNullData ? (b.setLineDash && (D.options.nullDataLineDashType || v === D.lineDashType && D.lineDashType !== D.nullDataLineDashType) && (w = k.pop(), v = k[k.length - 1], e(), b.moveTo(t.x, t.y), k.push(v), k.push(w), v = D.nullDataLineDashType, b.setLineDash(P)), b.lineTo(g, h2), u && s3.lineTo(g, h2)) : (b.beginPath(), b.moveTo(g, h2), u && (s3.beginPath(), s3.moveTo(g, h2))), Z = w = false) : (b.lineTo(g, h2), u && s3.lineTo(g, h2), 0 == r % 250 && (e(), b.moveTo(g, h2), u && s3.moveTo(g, h2), k.push({ x: g, y: C - pa })));
                    t = { x: g, y: h2 };
                    r < x3.length - 1 && (O !== (x3[r].lineColor || B2) || v !== (x3[r].lineDashType || D.lineDashType)) && (e(), b.beginPath(), b.moveTo(g, h2), k.push({ x: g, y: C - pa }), O = x3[r].lineColor || B2, b.strokeStyle = O, b.setLineDash && (x3[r].lineDashType ? (v = x3[r].lineDashType, b.setLineDash(J(v, D.lineThickness))) : (v = D.lineDashType, b.setLineDash(ba))));
                    if (0 <= D.dataPointIndexes[f]) {
                      var da = D.dataPointIds[D.dataPointIndexes[f]];
                      this._eventManager.objectMap[da] = { id: da, objectType: "dataPoint", dataSeriesIndex: z, dataPointIndex: D.dataPointIndexes[f], x1: g, y1: h2 };
                    }
                    0 <= D.dataPointIndexes[f] && 0 !== ha.markerSize && (0 < ha.markerSize || 0 < D.markerSize) && (pa = D.getMarkerProperties(D.dataPointIndexes[f], g, h2, b), n.push(pa), f = X(da), u && n.push({ x: g, y: h2, ctx: s3, type: pa.type, size: pa.size, color: f, borderColor: f, borderThickness: pa.borderThickness }));
                    (ha.indexLabel || D.indexLabel || ha.indexLabelFormatter || D.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea", dataPoint: ha, dataSeries: D, point: { x: g, y: h2 }, direction: 0 > ha.y === a.axisY.reversed ? 1 : -1, color: d });
                  }
                }
                e();
                b.moveTo(g, h2);
                u && s3.moveTo(g, h2);
              }
              delete D.dataPointIndexes;
            }
            Y.drawMarkers(n);
            u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l.x1, l.y1, l.width, l.height), s3.restore());
            b.restore();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: M.xClipAnimation,
              easingFunction: M.easing.linear,
              animationBase: 0
            };
          }
        };
        s2.prototype.renderStackedArea100 = function(a) {
          function e() {
            for (0 < D.lineThickness && b.stroke(); 0 < k.length; ) {
              var a2 = k.pop();
              b.lineTo(a2.x, a2.y);
              u && v.lineTo(a2.x, a2.y);
            }
            b.closePath();
            b.globalAlpha = D.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            u && (v.closePath(), v.fill(), v.beginPath());
            k = [];
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, f = null, n = this.plotArea, l = [], m2 = [], k = [], q = [], p = [], r = 0, g, h2, s3, y, t, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), v = this._eventManager.ghostCtx;
            b.save();
            u && v.save();
            b.beginPath();
            b.rect(n.x1, n.y1, n.width, n.height);
            b.clip();
            u && (v.beginPath(), v.rect(n.x1, n.y1, n.width, n.height), v.clip());
            for (var d = [], A2 = 0; A2 < a.dataSeriesIndexes.length; A2++) {
              var z = a.dataSeriesIndexes[A2], D = this.data[z], x3 = D.dataPoints;
              D.dataPointIndexes = [];
              for (r = 0; r < x3.length; r++) z = x3[r].x.getTime ? x3[r].x.getTime() : x3[r].x, D.dataPointIndexes[z] = r, d[z] || (q.push(z), d[z] = true);
              q.sort(Ua);
            }
            for (A2 = 0; A2 < a.dataSeriesIndexes.length; A2++) {
              z = a.dataSeriesIndexes[A2];
              D = this.data[z];
              x3 = D.dataPoints;
              y = true;
              d = D.id;
              this._eventManager.objectMap[d] = { objectType: "dataSeries", dataSeriesIndex: z };
              d = X(d);
              v.fillStyle = d;
              k = [];
              if (0 < q.length) {
                var d = D._colorSet[r % D._colorSet.length], B2 = D.lineColor = D.options.lineColor || d, O = B2;
                b.fillStyle = d;
                b.strokeStyle = B2;
                b.lineWidth = D.lineThickness;
                t = "solid";
                if (b.setLineDash) {
                  var P = J(D.nullDataLineDashType, D.lineThickness);
                  t = D.lineDashType;
                  var ba = J(t, D.lineThickness);
                  b.setLineDash(ba);
                }
                for (var Z = true, r = 0; r < q.length; r++) {
                  var f = q[r], ha = null, ha = 0 <= D.dataPointIndexes[f] ? x3[D.dataPointIndexes[f]] : { x: f, y: null };
                  if (!(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!D.connectNullData || !Z))) if ("number" !== typeof ha.y) D.connectNullData || (Z || y) || e(), Z = true;
                  else {
                    var pa;
                    pa = 0 !== a.dataPointYSums[f] ? 100 * (ha.y / a.dataPointYSums[f]) : 0;
                    g = a.axisX.convertValueToPixel(f);
                    var da = m2[f] ? m2[f] : 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                      p[f] = pa + (p[f] ? p[f] : 0);
                      if (0 >= p[f] && a.axisY.logarithmic) continue;
                      h2 = a.axisY.convertValueToPixel(p[f]);
                    } else h2 = a.axisY.convertValueToPixel(pa), h2 -= da;
                    k.push({ x: g, y: w - da });
                    m2[f] = w - h2;
                    y || Z ? (!y && D.connectNullData ? (b.setLineDash && (D.options.nullDataLineDashType || t === D.lineDashType && D.lineDashType !== D.nullDataLineDashType) && (y = k.pop(), t = k[k.length - 1], e(), b.moveTo(s3.x, s3.y), k.push(t), k.push(y), t = D.nullDataLineDashType, b.setLineDash(P)), b.lineTo(g, h2), u && v.lineTo(g, h2)) : (b.beginPath(), b.moveTo(g, h2), u && (v.beginPath(), v.moveTo(
                      g,
                      h2
                    ))), Z = y = false) : (b.lineTo(g, h2), u && v.lineTo(g, h2), 0 == r % 250 && (e(), b.moveTo(g, h2), u && v.moveTo(g, h2), k.push({ x: g, y: w - da })));
                    s3 = { x: g, y: h2 };
                    r < x3.length - 1 && (O !== (x3[r].lineColor || B2) || t !== (x3[r].lineDashType || D.lineDashType)) && (e(), b.beginPath(), b.moveTo(g, h2), k.push({ x: g, y: w - da }), O = x3[r].lineColor || B2, b.strokeStyle = O, b.setLineDash && (x3[r].lineDashType ? (t = x3[r].lineDashType, b.setLineDash(J(t, D.lineThickness))) : (t = D.lineDashType, b.setLineDash(ba))));
                    if (0 <= D.dataPointIndexes[f]) {
                      var G = D.dataPointIds[D.dataPointIndexes[f]];
                      this._eventManager.objectMap[G] = { id: G, objectType: "dataPoint", dataSeriesIndex: z, dataPointIndex: D.dataPointIndexes[f], x1: g, y1: h2 };
                    }
                    0 <= D.dataPointIndexes[f] && 0 !== ha.markerSize && (0 < ha.markerSize || 0 < D.markerSize) && (da = D.getMarkerProperties(D.dataPointIndexes[f], g, h2, b), l.push(da), f = X(G), u && l.push({ x: g, y: h2, ctx: v, type: da.type, size: da.size, color: f, borderColor: f, borderThickness: da.borderThickness }));
                    (ha.indexLabel || D.indexLabel || ha.indexLabelFormatter || D.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "stackedArea100",
                      dataPoint: ha,
                      dataSeries: D,
                      point: { x: g, y: h2 },
                      direction: 0 > ha.y === a.axisY.reversed ? 1 : -1,
                      color: d
                    });
                  }
                }
                e();
                b.moveTo(g, h2);
                u && v.moveTo(g, h2);
              }
              delete D.dataPointIndexes;
            }
            Y.drawMarkers(l);
            u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), b.clearRect(n.x1, n.y1, n.width, n.height), v.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: M.xClipAnimation, easingFunction: M.easing.linear, animationBase: 0 };
          }
        };
        s2.prototype.renderBubble = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, d = 0, f, n;
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var l = -Infinity, m2 = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++) for (var q = a.dataSeriesIndexes[k], p = this.data[q], r = p.dataPoints, g = 0, d = 0; d < r.length; d++) f = r[d].getTime ? f = r[d].x.getTime() : f = r[d].x, f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax || "undefined" === typeof r[d].z || (g = r[d].z, g > l && (l = g), g < m2 && (m2 = g));
            for (var h2 = 25 * Math.PI, s3 = Math.max(
              Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI,
              h2
            ), k = 0; k < a.dataSeriesIndexes.length; k++) if (q = a.dataSeriesIndexes[k], p = this.data[q], r = p.dataPoints, 0 < r.length) {
              for (c.strokeStyle = "#4572A7 ", d = 0; d < r.length; d++) if (f = r[d].getTime ? f = r[d].x.getTime() : f = r[d].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[d].y) {
                f = a.axisX.convertValueToPixel(f);
                n = a.axisY.convertValueToPixel(r[d].y);
                var g = r[d].z, y = 2 * Math.max(Math.sqrt((l === m2 ? s3 / 2 : h2 + (s3 - h2) / (l - m2) * (g - m2)) / Math.PI) << 0, 1), g = p.getMarkerProperties(d, c);
                g.size = y;
                c.globalAlpha = p.fillOpacity;
                Y.drawMarker(f, n, c, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                c.globalAlpha = 1;
                var t = p.dataPointIds[d];
                this._eventManager.objectMap[t] = { id: t, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: d, x1: f, y1: n, size: y };
                y = X(t);
                u && Y.drawMarker(f, n, this._eventManager.ghostCtx, g.type, g.size, y, y, g.borderThickness);
                (r[d].indexLabel || p.indexLabel || r[d].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                  chartType: "bubble",
                  dataPoint: r[d],
                  dataSeries: p,
                  point: { x: f, y: n },
                  direction: 1,
                  bounds: { x1: f - g.size / 2, y1: n - g.size / 2, x2: f + g.size / 2, y2: n + g.size / 2 },
                  color: null
                });
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.fadeInAnimation, easingFunction: M.easing.easeInQuad, animationBase: 0 };
          }
        };
        s2.prototype.renderScatter = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, d = 0, f, n;
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
              b.x1,
              b.y1,
              b.width,
              b.height
            ), this._eventManager.ghostCtx.clip());
            for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
              var m2 = a.dataSeriesIndexes[l], k = this.data[m2], q = k.dataPoints;
              if (0 < q.length) {
                c.strokeStyle = "#4572A7 ";
                Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                for (var p = 0, r = 0, d = 0; d < q.length; d++) if (f = q[d].getTime ? f = q[d].x.getTime() : f = q[d].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[d].y) {
                  f = a.axisX.convertValueToPixel(f);
                  n = a.axisY.convertValueToPixel(q[d].y);
                  var g = k.getMarkerProperties(
                    d,
                    f,
                    n,
                    c
                  );
                  c.globalAlpha = k.fillOpacity;
                  Y.drawMarker(g.x, g.y, g.ctx, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                  c.globalAlpha = 1;
                  Math.sqrt((p - f) * (p - f) + (r - n) * (r - n)) < Math.min(g.size, 5) && q.length > Math.min(this.plotArea.width, this.plotArea.height) || (p = k.dataPointIds[d], this._eventManager.objectMap[p] = { id: p, objectType: "dataPoint", dataSeriesIndex: m2, dataPointIndex: d, x1: f, y1: n }, p = X(p), u && Y.drawMarker(g.x, g.y, this._eventManager.ghostCtx, g.type, g.size, p, p, g.borderThickness), (q[d].indexLabel || k.indexLabel || q[d].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "scatter", dataPoint: q[d], dataSeries: k, point: { x: f, y: n }, direction: 1, bounds: { x1: f - g.size / 2, y1: n - g.size / 2, x2: f + g.size / 2, y2: n + g.size / 2 }, color: null }), p = f, r = n);
                }
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.fadeInAnimation, easingFunction: M.easing.easeInQuad, animationBase: 0 };
          }
        };
        s2.prototype.renderCandlestick = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, f = null, n = this.plotArea, l = 0, h2, k, q, p, r, g, d = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, s3 = a.axisX.dataInfo.minDiff;
            isFinite(s3) || (s3 = 0.3 * Math.abs(a.axisX.range));
            s3 = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * n.width * (a.axisX.logarithmic ? Math.log(s3) / Math.log(a.axisX.range) : Math.abs(s3) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && d > f && (d = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < d) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, d));
            s3 < d && (s3 = d);
            s3 > f && (s3 = f);
            this._dataPointWidths.push(s3);
            this._dataPointMinWidths.push(d);
            this._dataPointMaxWidths.push(f);
            c.save();
            u && b.save();
            c.beginPath();
            c.rect(n.x1, n.y1, n.width, n.height);
            c.clip();
            u && (b.beginPath(), b.rect(n.x1, n.y1, n.width, n.height), b.clip());
            for (var C = 0; C < a.dataSeriesIndexes.length; C++) {
              var y = a.dataSeriesIndexes[C], t = this.data[y], w = t.dataPoints;
              if (0 < w.length) {
                for (var v = 5 < s3 && t.bevelEnabled ? true : false, l = 0; l < w.length; l++) if (w[l].getTime ? g = w[l].x.getTime() : g = w[l].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !m(w[l].y) && w[l].y.length && "number" === typeof w[l].y[0] && "number" === typeof w[l].y[1] && "number" === typeof w[l].y[2] && "number" === typeof w[l].y[3]) {
                  h2 = a.axisX.convertValueToPixel(g);
                  k = a.axisY.convertValueToPixel(w[l].y[0]);
                  q = a.axisY.convertValueToPixel(w[l].y[1]);
                  p = a.axisY.convertValueToPixel(w[l].y[2]);
                  r = a.axisY.convertValueToPixel(w[l].y[3]);
                  var A2 = h2 - s3 / 2 << 0, z = A2 + s3 << 0, f = t.options.fallingColor ? t.fallingColor : t._colorSet[0], d = w[l].color ? w[l].color : t._colorSet[0], D = Math.round(Math.max(1, 0.15 * s3)), x3 = 0 === D % 2 ? 0 : 0.5, B2 = t.dataPointIds[l];
                  this._eventManager.objectMap[B2] = { id: B2, objectType: "dataPoint", dataSeriesIndex: y, dataPointIndex: l, x1: A2, y1: k, x2: z, y2: q, x3: h2, y3: p, x4: h2, y4: r, borderThickness: D, color: d };
                  c.strokeStyle = d;
                  c.beginPath();
                  c.lineWidth = D;
                  b.lineWidth = Math.max(D, 4);
                  "candlestick" === t.type ? (c.moveTo(h2 - x3, q), c.lineTo(h2 - x3, Math.min(k, r)), c.stroke(), c.moveTo(h2 - x3, Math.max(k, r)), c.lineTo(h2 - x3, p), c.stroke(), aa(c, A2, Math.min(k, r), z, Math.max(k, r), w[l].y[0] <= w[l].y[3] ? t.risingColor : f, D, d, v, v, false, false, t.fillOpacity), u && (d = X(B2), b.strokeStyle = d, b.beginPath(), b.moveTo(h2 - x3, q), b.lineTo(h2 - x3, Math.min(k, r)), b.stroke(), b.moveTo(h2 - x3, Math.max(k, r)), b.lineTo(h2 - x3, p), b.stroke(), aa(b, A2, Math.min(k, r), z, Math.max(k, r), d, 0, null, false, false, false, false))) : "ohlc" === t.type && (c.moveTo(h2 - x3, q), c.lineTo(h2 - x3, p), c.stroke(), c.beginPath(), c.moveTo(h2, k), c.lineTo(A2, k), c.stroke(), c.beginPath(), c.moveTo(h2, r), c.lineTo(z, r), c.stroke(), u && (b.beginPath(), d = X(B2), b.strokeStyle = d, b.moveTo(h2 - x3, q), b.lineTo(h2 - x3, p), b.stroke(), b.beginPath(), b.moveTo(h2, k), b.lineTo(A2, k), b.stroke(), b.beginPath(), b.moveTo(h2, r), b.lineTo(z, r), b.stroke()));
                  (w[l].indexLabel || t.indexLabel || w[l].indexLabelFormatter || t.indexLabelFormatter) && this._indexLabels.push({
                    chartType: t.type,
                    dataPoint: w[l],
                    dataSeries: t,
                    point: { x: A2 + (z - A2) / 2, y: a.axisY.reversed ? p : q },
                    direction: 1,
                    bounds: { x1: A2, y1: Math.min(q, p), x2: z, y2: Math.max(q, p) },
                    color: d
                  });
                }
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(n.x1, n.y1, n.width, n.height), b.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: M.fadeInAnimation,
              easingFunction: M.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        s2.prototype.renderBoxAndWhisker = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, f = this.plotArea, n = 0, l, h2, k, q, p, r, g, d = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, s3 = a.axisX.dataInfo.minDiff;
            isFinite(s3) || (s3 = 0.3 * Math.abs(a.axisX.range));
            s3 = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * f.width * (a.axisX.logarithmic ? Math.log(s3) / Math.log(a.axisX.range) : Math.abs(s3) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && d > n && (d = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < d) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, d));
            s3 < d && (s3 = d);
            s3 > n && (s3 = n);
            this._dataPointWidths.push(s3);
            this._dataPointMinWidths.push(d);
            this._dataPointMaxWidths.push(n);
            c.save();
            u && b.save();
            c.beginPath();
            c.rect(f.x1, f.y1, f.width, f.height);
            c.clip();
            u && (b.beginPath(), b.rect(f.x1, f.y1, f.width, f.height), b.clip());
            for (var C = false, C = !!a.axisY.reversed, y = 0; y < a.dataSeriesIndexes.length; y++) {
              var t = a.dataSeriesIndexes[y], w = this.data[t], v = w.dataPoints;
              w.whiskerLength = m(w.options.whiskerLength) ? s3 : w.options.whiskerLength;
              if (0 < v.length) {
                for (var A2 = 5 < s3 && w.bevelEnabled ? true : false, n = 0; n < v.length; n++) if (v[n].getTime ? g = v[n].x.getTime() : g = v[n].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !m(v[n].y) && v[n].y.length && "number" === typeof v[n].y[0] && "number" === typeof v[n].y[1] && "number" === typeof v[n].y[2] && "number" === typeof v[n].y[3] && "number" === typeof v[n].y[4] && 5 === v[n].y.length) {
                  l = a.axisX.convertValueToPixel(g);
                  h2 = a.axisY.convertValueToPixel(v[n].y[0]);
                  k = a.axisY.convertValueToPixel(v[n].y[1]);
                  q = a.axisY.convertValueToPixel(v[n].y[2]);
                  p = a.axisY.convertValueToPixel(v[n].y[3]);
                  r = a.axisY.convertValueToPixel(v[n].y[4]);
                  var z = l - s3 / 2 << 0, D = l + s3 / 2 << 0, d = v[n].color ? v[n].color : w._colorSet[0], x3 = Math.round(Math.max(1, 0.15 * s3)), B2 = 0 === x3 % 2 ? 0 : 0.5, O = v[n].whiskerColor ? v[n].whiskerColor : v[n].color ? w.whiskerColor ? w.whiskerColor : v[n].color : w.whiskerColor ? w.whiskerColor : d, P = "number" === typeof v[n].whiskerThickness ? v[n].whiskerThickness : "number" === typeof w.options.whiskerThickness ? w.whiskerThickness : x3, ba = v[n].whiskerDashType ? v[n].whiskerDashType : w.whiskerDashType, Z = m(v[n].whiskerLength) ? m(w.options.whiskerLength) ? s3 : w.whiskerLength : v[n].whiskerLength, Z = "number" === typeof Z ? 0 >= Z ? 0 : Z >= s3 ? s3 : Z : "string" === typeof Z ? parseInt(Z) * s3 / 100 > s3 ? s3 : parseInt(Z) * s3 / 100 : s3, ha = 1 === Math.round(P) % 2 ? 0.5 : 0, pa = v[n].stemColor ? v[n].stemColor : v[n].color ? w.stemColor ? w.stemColor : v[n].color : w.stemColor ? w.stemColor : d, da = "number" === typeof v[n].stemThickness ? v[n].stemThickness : "number" === typeof w.options.stemThickness ? w.stemThickness : x3, G = 1 === Math.round(da) % 2 ? 0.5 : 0, E = v[n].stemDashType ? v[n].stemDashType : w.stemDashType, F3 = v[n].lineColor ? v[n].lineColor : v[n].color ? w.lineColor ? w.lineColor : v[n].color : w.lineColor ? w.lineColor : d, K2 = "number" === typeof v[n].lineThickness ? v[n].lineThickness : "number" === typeof w.options.lineThickness ? w.lineThickness : x3, Q2 = v[n].lineDashType ? v[n].lineDashType : w.lineDashType, $ = 1 === Math.round(K2) % 2 ? 0.5 : 0, S2 = w.upperBoxColor, R2 = w.lowerBoxColor, ua = m(w.options.fillOpacity) ? 1 : w.fillOpacity, V = w.dataPointIds[n];
                  this._eventManager.objectMap[V] = {
                    id: V,
                    objectType: "dataPoint",
                    dataSeriesIndex: t,
                    dataPointIndex: n,
                    x1: z,
                    y1: h2,
                    x2: D,
                    y2: k,
                    x3: l,
                    y3: q,
                    x4: l,
                    y4: p,
                    y5: r,
                    borderThickness: x3,
                    color: d,
                    stemThickness: da,
                    stemColor: pa,
                    whiskerThickness: P,
                    whiskerLength: Z,
                    whiskerColor: O,
                    lineThickness: K2,
                    lineColor: F3
                  };
                  c.save();
                  0 < da && (c.beginPath(), c.strokeStyle = pa, c.lineWidth = da, c.setLineDash && c.setLineDash(J(E, da)), c.moveTo(l - G, k), c.lineTo(l - G, h2), c.stroke(), c.moveTo(l - G, p), c.lineTo(l - G, q), c.stroke());
                  c.restore();
                  b.lineWidth = Math.max(x3, 4);
                  c.beginPath();
                  aa(c, z, Math.max(Math.min(r, k), f.y1 - x3 / 2), D, Math.min(Math.max(k, r), f.y2 + x3 / 2), R2, 0, d, C ? A2 : false, C ? false : A2, false, false, ua);
                  c.beginPath();
                  aa(c, z, Math.max(Math.min(q, r), f.y1 - x3 / 2), D, Math.min(Math.max(r, q), f.y2 + x3 / 2), S2, 0, d, C ? false : A2, C ? A2 : false, false, false, ua);
                  c.beginPath();
                  c.lineWidth = x3;
                  c.strokeStyle = d;
                  c.rect(z - B2, Math.max(Math.min(k, q) - B2, f.y1 - x3 / 2), D - z + 2 * B2, Math.min(Math.max(k, q), f.y2 + x3 / 2) - Math.max(Math.min(k, q) - B2, f.y1 - x3 / 2) + 2 * B2);
                  c.stroke();
                  c.save();
                  0 < K2 && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(J(Q2, K2)), c.strokeStyle = F3, c.lineWidth = K2, c.moveTo(z, r - $), c.lineTo(D, r - $), c.stroke());
                  c.restore();
                  c.save();
                  0 < P && (c.beginPath(), c.setLineDash && c.setLineDash(J(
                    ba,
                    P
                  )), c.strokeStyle = O, c.lineWidth = P, c.moveTo(l - Z / 2 << 0, p - ha), c.lineTo(l + Z / 2 << 0, p - ha), c.stroke(), c.moveTo(l - Z / 2 << 0, h2 + ha), c.lineTo(l + Z / 2 << 0, h2 + ha), c.stroke());
                  c.restore();
                  u && (d = X(V), b.strokeStyle = d, b.lineWidth = da, 0 < da && (b.beginPath(), b.moveTo(l - B2 - G, k), b.lineTo(l - B2 - G, Math.max(h2, p)), b.stroke(), b.moveTo(l - B2 - G, Math.min(h2, p)), b.lineTo(l - B2 - G, q), b.stroke()), aa(b, z, Math.max(k, q), D, Math.min(k, q), d, 0, null, false, false, false, false), 0 < P && (b.beginPath(), b.lineWidth = P, b.moveTo(l + Z / 2, p - ha), b.lineTo(l - Z / 2, p - ha), b.stroke(), b.moveTo(l + Z / 2, h2 + ha), b.lineTo(l - Z / 2, h2 + ha), b.stroke()));
                  (v[n].indexLabel || w.indexLabel || v[n].indexLabelFormatter || w.indexLabelFormatter) && this._indexLabels.push({ chartType: w.type, dataPoint: v[n], dataSeries: w, point: { x: z + (D - z) / 2, y: a.axisY.reversed ? h2 : p }, direction: 1, bounds: { x1: z, y1: Math.min(h2, p), x2: D, y2: Math.max(h2, p) }, color: d });
                }
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(f.x1, f.y1, f.width, f.height), b.restore());
            c.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.fadeInAnimation, easingFunction: M.easing.easeInQuad, animationBase: 0 };
          }
        };
        s2.prototype.renderRangeColumn = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, f = 0, n, l, h2, f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var k = a.axisX.dataInfo.minDiff;
            isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
            k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && f > n && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < f) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
            k < f && (k = f);
            k > n && (k = n);
            this._dataPointWidths.push(k);
            this._dataPointMinWidths.push(f);
            this._dataPointMaxWidths.push(n);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var q = 0; q < a.dataSeriesIndexes.length; q++) {
              var p = a.dataSeriesIndexes[q], r = this.data[p], g = r.dataPoints;
              if (0 < g.length) {
                for (var s3 = 5 < k && r.bevelEnabled ? true : false, f = 0; f < g.length; f++) if (g[f].getTime ? h2 = g[f].x.getTime() : h2 = g[f].x, !(h2 < a.axisX.dataInfo.viewPortMin || h2 > a.axisX.dataInfo.viewPortMax) && !m(g[f].y) && g[f].y.length && "number" === typeof g[f].y[0] && "number" === typeof g[f].y[1]) {
                  b = a.axisX.convertValueToPixel(h2);
                  n = a.axisY.convertValueToPixel(g[f].y[0]);
                  l = a.axisY.convertValueToPixel(g[f].y[1]);
                  var C = a.axisX.reversed ? b + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + q) * k << 0 : b - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + q) * k << 0, y = a.axisX.reversed ? C - k << 0 : C + k << 0, b = g[f].color ? g[f].color : r._colorSet[f % r._colorSet.length];
                  if (n > l) {
                    var t = n;
                    n = l;
                    l = t;
                  }
                  var t = Math.max(n, d.y1), w = Math.min(l, d.y2), v = r.dataPointIds[f];
                  this._eventManager.objectMap[v] = {
                    id: v,
                    objectType: "dataPoint",
                    dataSeriesIndex: p,
                    dataPointIndex: f,
                    x1: C,
                    y1: t,
                    x2: y,
                    y2: w
                  };
                  aa(c, a.axisX.reversed ? y : C, t, a.axisX.reversed ? C : y, w, b, 0, b, s3, s3, false, false, r.fillOpacity);
                  b = X(v);
                  u && aa(this._eventManager.ghostCtx, a.axisX.reversed ? y : C, t, a.axisX.reversed ? C : y, w, b, 0, null, false, false, false, false);
                  if (g[f].indexLabel || r.indexLabel || g[f].indexLabelFormatter || r.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeColumn", dataPoint: g[f], dataSeries: r, indexKeyword: 0, point: { x: C + (y - C) / 2, y: g[f].y[1] >= g[f].y[0] ? l : n }, direction: g[f].y[1] >= g[f].y[0] ? -1 : 1, bounds: {
                    x1: C,
                    y1: Math.min(n, l),
                    x2: y,
                    y2: Math.max(n, l)
                  }, color: b }), this._indexLabels.push({ chartType: "rangeColumn", dataPoint: g[f], dataSeries: r, indexKeyword: 1, point: { x: C + (y - C) / 2, y: g[f].y[1] >= g[f].y[0] ? n : l }, direction: g[f].y[1] >= g[f].y[0] ? 1 : -1, bounds: { x1: C, y1: Math.min(n, l), x2: y, y2: Math.max(n, l) }, color: b });
                }
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(
              a.axisY.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.fadeInAnimation, easingFunction: M.easing.easeInQuad, animationBase: 0 };
          }
        };
        s2.prototype.renderError = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e, b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? false : true : false;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, f = false, n = this.plotArea, l = 0, h2, k, q, p, r, g, s3, C = a.axisX.dataInfo.minDiff;
            isFinite(C) || (C = 0.3 * Math.abs(a.axisX.range));
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(n.x1, n.y1, n.width, n.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(n.x1, n.y1, n.width, n.height), this._eventManager.ghostCtx.clip());
            for (var y = 0, t = 0; t < this.data.length; t++) !this.data[t].type.match(/(bar|column)/ig) || !this.data[t].visible || this.data[t].type.match(/(stacked)/ig) && y || y++;
            for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
              var v = a.dataSeriesIndexes[w], x3 = this.data[v], z = x3.dataPoints, D = m(x3._linkedSeries) ? false : x3._linkedSeries.type.match(/(bar|column)/ig) && x3._linkedSeries.visible ? true : false, A2 = 0;
              if (D) for (d = x3._linkedSeries.id, t = 0; t < d; t++) !this.data[t].type.match(/(bar|column)/ig) || !this.data[t].visible || this.data[t].type.match(/(stacked)/ig) && A2 || (this.data[t].type.match(/(range)/ig) && (f = true), A2++);
              d = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (D ? y : 1))) << 0 : 0.3 * this.width;
              f && (l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (D ? y : 1))) << 0 : 0.03 * this.width);
              t = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? n.height : n.width) * (a.axisX.logarithmic ? Math.log(C) / Math.log(a.axisX.range) : Math.abs(C) / Math.abs(a.axisX.range)) / (D ? y : 1)) << 0;
              this.dataPointMaxWidth && d > l && (d = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && l < d) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, d));
              t < d && (t = d);
              t > l && (t = l);
              this._dataPointWidths.push(t);
              this._dataPointMinWidths.push(d);
              this._dataPointMaxWidths.push(l);
              x3.whiskerLength = m(x3.options.whiskerLength) ? t : x3.options.whiskerLength;
              if (0 < z.length) for (var E = x3._colorSet, l = 0; l < z.length; l++) {
                var d = x3.lineColor = x3.options.color ? x3.options.color : E[0], O = {
                  color: z[l].whiskerColor ? z[l].whiskerColor : z[l].color ? x3.whiskerColor ? x3.whiskerColor : z[l].color : x3.whiskerColor ? x3.whiskerColor : d,
                  thickness: m(z[l].whiskerThickness) ? x3.whiskerThickness : z[l].whiskerThickness,
                  dashType: z[l].whiskerDashType ? z[l].whiskerDashType : x3.whiskerDashType,
                  length: m(z[l].whiskerLength) ? m(x3.options.whiskerLength) ? t : x3.options.whiskerLength : z[l].whiskerLength,
                  trimLength: m(z[l].whiskerLength) ? m(x3.options.whiskerLength) ? 50 : 0 : 0
                };
                O.length = "number" === typeof O.length ? 0 >= O.length ? 0 : O.length >= t ? t : O.length : "string" === typeof O.length ? parseInt(O.length) * t / 100 > t ? t : parseInt(O.length) * t / 100 > t : t;
                O.thickness = "number" === typeof O.thickness ? 0 > O.thickness ? 0 : Math.round(O.thickness) : 2;
                var P = { color: z[l].stemColor ? z[l].stemColor : z[l].color ? x3.stemColor ? x3.stemColor : z[l].color : x3.stemColor ? x3.stemColor : d, thickness: z[l].stemThickness ? z[l].stemThickness : x3.stemThickness, dashType: z[l].stemDashType ? z[l].stemDashType : x3.stemDashType };
                P.thickness = "number" === typeof P.thickness ? 0 > P.thickness ? 0 : Math.round(P.thickness) : 2;
                z[l].getTime ? s3 = z[l].x.getTime() : s3 = z[l].x;
                if (!(s3 < a.axisX.dataInfo.viewPortMin || s3 > a.axisX.dataInfo.viewPortMax) && !m(z[l].y) && z[l].y.length && "number" === typeof z[l].y[0] && "number" === typeof z[l].y[1]) {
                  var ba = a.axisX.convertValueToPixel(s3);
                  b ? k = ba : h2 = ba;
                  ba = a.axisY.convertValueToPixel(z[l].y[0]);
                  b ? q = ba : r = ba;
                  ba = a.axisY.convertValueToPixel(z[l].y[1]);
                  b ? p = ba : g = ba;
                  b ? (r = a.axisX.reversed ? k + (D ? y : 1) * t / 2 - (D ? A2 - 1 : 0) * t << 0 : k - (D ? y : 1) * t / 2 + (D ? A2 - 1 : 0) * t << 0, g = a.axisX.reversed ? r - t << 0 : r + t << 0) : (q = a.axisX.reversed ? h2 + (D ? y : 1) * t / 2 - (D ? A2 - 1 : 0) * t << 0 : h2 - (D ? y : 1) * t / 2 + (D ? A2 - 1 : 0) * t << 0, p = a.axisX.reversed ? q - t << 0 : q + t << 0);
                  !b && r > g && (ba = r, r = g, g = ba);
                  b && q > p && (ba = q, q = p, p = ba);
                  ba = x3.dataPointIds[l];
                  this._eventManager.objectMap[ba] = { id: ba, objectType: "dataPoint", dataSeriesIndex: v, dataPointIndex: l, x1: Math.min(q, p), y1: Math.min(r, g), x2: Math.max(p, q), y2: Math.max(g, r), isXYSwapped: b, stemProperties: P, whiskerProperties: O };
                  B(
                    c,
                    Math.min(q, p),
                    Math.min(r, g),
                    Math.max(p, q),
                    Math.max(g, r),
                    d,
                    O,
                    P,
                    b
                  );
                  u && B(this._eventManager.ghostCtx, q, r, p, g, d, O, P, b);
                  if (z[l].indexLabel || x3.indexLabel || z[l].indexLabelFormatter || x3.indexLabelFormatter) this._indexLabels.push({ chartType: "error", dataPoint: z[l], dataSeries: x3, indexKeyword: 0, point: { x: b ? z[l].y[1] >= z[l].y[0] ? q : p : q + (p - q) / 2, y: b ? r + (g - r) / 2 : z[l].y[1] >= z[l].y[0] ? g : r }, direction: z[l].y[1] >= z[l].y[0] ? -1 : 1, bounds: { x1: b ? Math.min(q, p) : q, y1: b ? r : Math.min(r, g), x2: b ? Math.max(q, p) : p, y2: b ? g : Math.max(r, g) }, color: d, axisSwapped: b }), this._indexLabels.push({ chartType: "error", dataPoint: z[l], dataSeries: x3, indexKeyword: 1, point: { x: b ? z[l].y[1] >= z[l].y[0] ? p : q : q + (p - q) / 2, y: b ? r + (g - r) / 2 : z[l].y[1] >= z[l].y[0] ? r : g }, direction: z[l].y[1] >= z[l].y[0] ? 1 : -1, bounds: { x1: b ? Math.min(q, p) : q, y1: b ? r : Math.min(r, g), x2: b ? Math.max(q, p) : p, y2: b ? g : Math.max(r, g) }, color: d, axisSwapped: b });
                }
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(n.x1, n.y1, n.width, n.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.fadeInAnimation, easingFunction: M.easing.easeInQuad, animationBase: 0 };
          }
        };
        s2.prototype.renderRangeBar = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, f = 0, n, l, h2, k, f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            var q = a.axisX.dataInfo.minDiff;
            isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
            q = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && f > n && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < f) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
            q < f && (q = f);
            q > n && (q = n);
            this._dataPointWidths.push(q);
            this._dataPointMinWidths.push(f);
            this._dataPointMaxWidths.push(n);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
              var r = a.dataSeriesIndexes[p], g = this.data[r], s3 = g.dataPoints;
              if (0 < s3.length) {
                var C = 5 < q && g.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (f = 0; f < s3.length; f++) if (s3[f].getTime ? k = s3[f].x.getTime() : k = s3[f].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !m(s3[f].y) && s3[f].y.length && "number" === typeof s3[f].y[0] && "number" === typeof s3[f].y[1]) {
                  n = a.axisY.convertValueToPixel(s3[f].y[0]);
                  l = a.axisY.convertValueToPixel(s3[f].y[1]);
                  h2 = a.axisX.convertValueToPixel(k);
                  h2 = a.axisX.reversed ? h2 + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + p) * q << 0 : h2 - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + p) * q << 0;
                  var y = a.axisX.reversed ? h2 - q << 0 : h2 + q << 0;
                  n > l && (b = n, n = l, l = b);
                  b = s3[f].color ? s3[f].color : g._colorSet[f % g._colorSet.length];
                  aa(c, n, a.axisX.reversed ? y : h2, l, a.axisX.reversed ? h2 : y, b, 0, null, C, false, false, false, g.fillOpacity);
                  b = g.dataPointIds[f];
                  this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: f, x1: n, y1: h2, x2: l, y2: y };
                  b = X(b);
                  u && aa(this._eventManager.ghostCtx, n, a.axisX.reversed ? y : h2, l, a.axisX.reversed ? h2 : y, b, 0, null, false, false, false, false);
                  if (s3[f].indexLabel || g.indexLabel || s3[f].indexLabelFormatter || g.indexLabelFormatter) this._indexLabels.push({
                    chartType: "rangeBar",
                    dataPoint: s3[f],
                    dataSeries: g,
                    indexKeyword: 0,
                    point: { x: s3[f].y[1] >= s3[f].y[0] ? n : l, y: h2 + (y - h2) / 2 },
                    direction: s3[f].y[1] >= s3[f].y[0] ? -1 : 1,
                    bounds: { x1: Math.min(n, l), y1: h2, x2: Math.max(n, l), y2: y },
                    color: b
                  }), this._indexLabels.push({ chartType: "rangeBar", dataPoint: s3[f], dataSeries: g, indexKeyword: 1, point: { x: s3[f].y[1] >= s3[f].y[0] ? l : n, y: h2 + (y - h2) / 2 }, direction: s3[f].y[1] >= s3[f].y[0] ? 1 : -1, bounds: { x1: Math.min(n, l), y1: h2, x2: Math.max(n, l), y2: y }, color: b });
                }
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(
              a.axisX.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.fadeInAnimation, easingFunction: M.easing.easeInQuad, animationBase: 0 };
          }
        };
        s2.prototype.renderRangeArea = function(a) {
          function e() {
            if (w) {
              for (var a2 = null, c2 = m2.length - 1; 0 <= c2; c2--) a2 = m2[c2], b.lineTo(a2.x, a2.y2), d.lineTo(a2.x, a2.y2);
              b.closePath();
              b.globalAlpha = q.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              d.fill();
              if (0 < q.lineThickness) {
                b.beginPath();
                b.moveTo(a2.x, a2.y2);
                for (c2 = 0; c2 < m2.length; c2++) a2 = m2[c2], b.lineTo(a2.x, a2.y2);
                b.moveTo(m2[0].x, m2[0].y1);
                for (c2 = 0; c2 < m2.length; c2++) a2 = m2[c2], b.lineTo(a2.x, a2.y1);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(h2, s3);
              d.beginPath();
              d.moveTo(h2, s3);
              w = { x: h2, y: s3 };
              m2 = [];
              m2.push({ x: h2, y1: s3, y2: y });
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx, f = [], n = this.plotArea;
            b.save();
            u && d.save();
            b.beginPath();
            b.rect(n.x1, n.y1, n.width, n.height);
            b.clip();
            u && (d.beginPath(), d.rect(n.x1, n.y1, n.width, n.height), d.clip());
            for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
              var m2 = [], k = a.dataSeriesIndexes[l], q = this.data[k], p = q.dataPoints, f = q.id;
              this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: k };
              f = X(f);
              d.fillStyle = f;
              var f = [], r = true, g = 0, h2, s3, y, t, w = null;
              if (0 < p.length) {
                var v = q._colorSet[g % q._colorSet.length], x3 = q.lineColor = q.options.lineColor || v, z = x3;
                b.fillStyle = v;
                b.strokeStyle = x3;
                b.lineWidth = q.lineThickness;
                var D = "solid";
                if (b.setLineDash) {
                  var A2 = J(q.nullDataLineDashType, q.lineThickness), D = q.lineDashType, B2 = J(D, q.lineThickness);
                  b.setLineDash(B2);
                }
                for (var O = true; g < p.length; g++) if (t = p[g].x.getTime ? p[g].x.getTime() : p[g].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!q.connectNullData || !O))) if (null !== p[g].y && p[g].y.length && "number" === typeof p[g].y[0] && "number" === typeof p[g].y[1]) {
                  h2 = a.axisX.convertValueToPixel(t);
                  s3 = a.axisY.convertValueToPixel(p[g].y[0]);
                  y = a.axisY.convertValueToPixel(p[g].y[1]);
                  r || O ? (q.connectNullData && !r ? (b.setLineDash && (q.options.nullDataLineDashType || D === q.lineDashType && q.lineDashType !== q.nullDataLineDashType) && (m2[m2.length - 1].newLineDashArray = B2, D = q.nullDataLineDashType, b.setLineDash(A2)), b.lineTo(h2, s3), u && d.lineTo(h2, s3), m2.push({ x: h2, y1: s3, y2: y })) : (b.beginPath(), b.moveTo(h2, s3), w = { x: h2, y: s3 }, m2 = [], m2.push({ x: h2, y1: s3, y2: y }), u && (d.beginPath(), d.moveTo(h2, s3))), O = r = false) : (b.lineTo(h2, s3), m2.push({ x: h2, y1: s3, y2: y }), u && d.lineTo(h2, s3), 0 == g % 250 && e());
                  t = q.dataPointIds[g];
                  this._eventManager.objectMap[t] = { id: t, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: g, x1: h2, y1: s3, y2: y };
                  g < p.length - 1 && (z !== (p[g].lineColor || x3) || D !== (p[g].lineDashType || q.lineDashType)) && (e(), z = p[g].lineColor || x3, m2[m2.length - 1].newStrokeStyle = z, b.strokeStyle = z, b.setLineDash && (p[g].lineDashType ? (D = p[g].lineDashType, m2[m2.length - 1].newLineDashArray = J(D, q.lineThickness), b.setLineDash(m2[m2.length - 1].newLineDashArray)) : (D = q.lineDashType, m2[m2.length - 1].newLineDashArray = B2, b.setLineDash(B2))));
                  if (0 !== p[g].markerSize && (0 < p[g].markerSize || 0 < q.markerSize)) {
                    var P = q.getMarkerProperties(g, h2, y, b);
                    f.push(P);
                    var ba = X(t);
                    u && f.push({ x: h2, y, ctx: d, type: P.type, size: P.size, color: ba, borderColor: ba, borderThickness: P.borderThickness });
                    P = q.getMarkerProperties(g, h2, s3, b);
                    f.push(P);
                    ba = X(t);
                    u && f.push({ x: h2, y: s3, ctx: d, type: P.type, size: P.size, color: ba, borderColor: ba, borderThickness: P.borderThickness });
                  }
                  if (p[g].indexLabel || q.indexLabel || p[g].indexLabelFormatter || q.indexLabelFormatter) this._indexLabels.push({
                    chartType: "rangeArea",
                    dataPoint: p[g],
                    dataSeries: q,
                    indexKeyword: 0,
                    point: { x: h2, y: s3 },
                    direction: p[g].y[0] > p[g].y[1] === a.axisY.reversed ? -1 : 1,
                    color: v
                  }), this._indexLabels.push({ chartType: "rangeArea", dataPoint: p[g], dataSeries: q, indexKeyword: 1, point: { x: h2, y }, direction: p[g].y[0] > p[g].y[1] === a.axisY.reversed ? 1 : -1, color: v });
                } else O || r || e(), O = true;
                e();
                Y.drawMarkers(f);
              }
            }
            u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(
              a.axisX.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(n.x1, n.y1, n.width, n.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: M.xClipAnimation, easingFunction: M.easing.linear, animationBase: 0 };
          }
        };
        s2.prototype.renderRangeSplineArea = function(a) {
          function e(a2, c2) {
            var e2 = x2(s3, 2);
            if (0 < e2.length) {
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(e2[0].x, e2[0].y);
                for (var f2 = 0; f2 < e2.length - 3; f2 += 3) {
                  if (e2[f2].newStrokeStyle || e2[f2].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(e2[f2].x, e2[f2].y), e2[f2].newStrokeStyle && (b.strokeStyle = e2[f2].newStrokeStyle), e2[f2].newLineDashArray && b.setLineDash(e2[f2].newLineDashArray);
                  b.bezierCurveTo(e2[f2 + 1].x, e2[f2 + 1].y, e2[f2 + 2].x, e2[f2 + 2].y, e2[f2 + 3].x, e2[f2 + 3].y);
                }
              }
              b.beginPath();
              b.moveTo(e2[0].x, e2[0].y);
              u && (d.beginPath(), d.moveTo(e2[0].x, e2[0].y));
              for (f2 = 0; f2 < e2.length - 3; f2 += 3) b.bezierCurveTo(e2[f2 + 1].x, e2[f2 + 1].y, e2[f2 + 2].x, e2[f2 + 2].y, e2[f2 + 3].x, e2[f2 + 3].y), u && d.bezierCurveTo(e2[f2 + 1].x, e2[f2 + 1].y, e2[f2 + 2].x, e2[f2 + 2].y, e2[f2 + 3].x, e2[f2 + 3].y);
              e2 = x2(y, 2);
              b.lineTo(y[y.length - 1].x, y[y.length - 1].y);
              for (f2 = e2.length - 1; 2 < f2; f2 -= 3) b.bezierCurveTo(e2[f2 - 1].x, e2[f2 - 1].y, e2[f2 - 2].x, e2[f2 - 2].y, e2[f2 - 3].x, e2[f2 - 3].y), u && d.bezierCurveTo(e2[f2 - 1].x, e2[f2 - 1].y, e2[f2 - 2].x, e2[f2 - 2].y, e2[f2 - 3].x, e2[f2 - 3].y);
              b.closePath();
              b.globalAlpha = k.fillOpacity;
              b.fill();
              u && (d.closePath(), d.fill());
              b.globalAlpha = 1;
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(e2[0].x, e2[0].y);
                for (var g2 = f2 = 0; f2 < e2.length - 3; f2 += 3, g2++) {
                  if (s3[g2].newStrokeStyle || s3[g2].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(e2[f2].x, e2[f2].y), s3[g2].newStrokeStyle && (b.strokeStyle = s3[g2].newStrokeStyle), s3[g2].newLineDashArray && b.setLineDash(s3[g2].newLineDashArray);
                  b.bezierCurveTo(e2[f2 + 1].x, e2[f2 + 1].y, e2[f2 + 2].x, e2[f2 + 2].y, e2[f2 + 3].x, e2[f2 + 3].y);
                }
                e2 = x2(s3, 2);
                b.moveTo(e2[0].x, e2[0].y);
                for (g2 = f2 = 0; f2 < e2.length - 3; f2 += 3, g2++) {
                  if (s3[g2].newStrokeStyle || s3[g2].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(e2[f2].x, e2[f2].y), s3[g2].newStrokeStyle && (b.strokeStyle = s3[g2].newStrokeStyle), s3[g2].newLineDashArray && b.setLineDash(s3[g2].newLineDashArray);
                  b.bezierCurveTo(e2[f2 + 1].x, e2[f2 + 1].y, e2[f2 + 2].x, e2[f2 + 2].y, e2[f2 + 3].x, e2[f2 + 3].y);
                }
                b.stroke();
              }
              b.beginPath();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx, f = [], n = this.plotArea;
            b.save();
            u && d.save();
            b.beginPath();
            b.rect(n.x1, n.y1, n.width, n.height);
            b.clip();
            u && (d.beginPath(), d.rect(n.x1, n.y1, n.width, n.height), d.clip());
            for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
              var m2 = a.dataSeriesIndexes[l], k = this.data[m2], q = k.dataPoints, f = k.id;
              this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: m2 };
              f = X(f);
              d.fillStyle = f;
              var f = [], p = 0, r, g, h2, s3 = [], y = [];
              if (0 < q.length) {
                var t = k._colorSet[p % k._colorSet.length], w = k.lineColor = k.options.lineColor || t, v = w;
                b.fillStyle = t;
                b.lineWidth = k.lineThickness;
                var A2 = "solid", z;
                if (b.setLineDash) {
                  var D = J(k.nullDataLineDashType, k.lineThickness), A2 = k.lineDashType;
                  z = J(A2, k.lineThickness);
                }
                for (g = false; p < q.length; p++) if (r = q[p].x.getTime ? q[p].x.getTime() : q[p].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !g))) if (null !== q[p].y && q[p].y.length && "number" === typeof q[p].y[0] && "number" === typeof q[p].y[1]) {
                  r = a.axisX.convertValueToPixel(r);
                  g = a.axisY.convertValueToPixel(q[p].y[0]);
                  h2 = a.axisY.convertValueToPixel(q[p].y[1]);
                  var B2 = k.dataPointIds[p];
                  this._eventManager.objectMap[B2] = {
                    id: B2,
                    objectType: "dataPoint",
                    dataSeriesIndex: m2,
                    dataPointIndex: p,
                    x1: r,
                    y1: g,
                    y2: h2
                  };
                  s3[s3.length] = { x: r, y: g };
                  y[y.length] = { x: r, y: h2 };
                  p < q.length - 1 && (v !== (q[p].lineColor || w) || A2 !== (q[p].lineDashType || k.lineDashType)) && (v = q[p].lineColor || w, s3[s3.length - 1].newStrokeStyle = v, b.setLineDash && (q[p].lineDashType ? (A2 = q[p].lineDashType, s3[s3.length - 1].newLineDashArray = J(A2, k.lineThickness)) : (A2 = k.lineDashType, s3[s3.length - 1].newLineDashArray = z)));
                  if (0 !== q[p].markerSize && (0 < q[p].markerSize || 0 < k.markerSize)) {
                    var E = k.getMarkerProperties(p, r, g, b);
                    f.push(E);
                    var O = X(B2);
                    u && f.push({
                      x: r,
                      y: g,
                      ctx: d,
                      type: E.type,
                      size: E.size,
                      color: O,
                      borderColor: O,
                      borderThickness: E.borderThickness
                    });
                    E = k.getMarkerProperties(p, r, h2, b);
                    f.push(E);
                    O = X(B2);
                    u && f.push({ x: r, y: h2, ctx: d, type: E.type, size: E.size, color: O, borderColor: O, borderThickness: E.borderThickness });
                  }
                  if (q[p].indexLabel || k.indexLabel || q[p].indexLabelFormatter || k.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: q[p], dataSeries: k, indexKeyword: 0, point: { x: r, y: g }, direction: q[p].y[0] <= q[p].y[1] ? -1 : 1, color: t }), this._indexLabels.push({
                    chartType: "rangeSplineArea",
                    dataPoint: q[p],
                    dataSeries: k,
                    indexKeyword: 1,
                    point: { x: r, y: h2 },
                    direction: q[p].y[0] <= q[p].y[1] ? 1 : -1,
                    color: t
                  });
                  g = false;
                } else 0 < p && !g && (k.connectNullData ? b.setLineDash && (0 < s3.length && (k.options.nullDataLineDashType || !q[p - 1].lineDashType)) && (s3[s3.length - 1].newLineDashArray = D, A2 = k.nullDataLineDashType) : (e(z, w), s3 = [], y = [])), g = true;
                e(z, w);
                Y.drawMarkers(f);
              }
            }
            u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(
              a.axisX.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(n.x1, n.y1, n.width, n.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: M.xClipAnimation, easingFunction: M.easing.linear, animationBase: 0 };
          }
        };
        s2.prototype.renderWaterfall = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx, d = null, f = this.plotArea, n = 0, l, m2, k, q, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), n = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            m2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
            var r = a.axisX.dataInfo.minDiff;
            isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
            r = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (f.width * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && n > m2 && (n = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m2));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m2 < n) && (m2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, n));
            r < n && (r = n);
            r > m2 && (r = m2);
            this._dataPointWidths.push(r);
            this._dataPointMinWidths.push(n);
            this._dataPointMaxWidths.push(m2);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(f.x1, f.y1, f.width, f.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(f.x1, f.y1, f.width, f.height), this._eventManager.ghostCtx.clip());
            for (var g = 0; g < a.dataSeriesIndexes.length; g++) {
              var h2 = a.dataSeriesIndexes[g], s3 = this.data[h2], y = s3.dataPoints, d = s3._colorSet[0];
              s3.risingColor = s3.options.risingColor ? s3.options.risingColor : d;
              s3.fallingColor = s3.options.fallingColor ? s3.options.fallingColor : "#e40a0a";
              var t = "number" === typeof s3.options.lineThickness ? Math.round(s3.lineThickness) : 1, w = 1 === Math.round(t) % 2 ? -0.5 : 0;
              if (0 < y.length) for (var v = 5 < r && s3.bevelEnabled ? true : false, x3 = false, z = null, A2 = null, n = 0; n < y.length; n++) if (y[n].getTime ? q = y[n].x.getTime() : q = y[n].x, "number" !== typeof y[n].y) {
                if (0 < n && !x3 && s3.connectNullData) var B2 = s3.options.nullDataLineDashType || !y[n - 1].lineDashType ? s3.nullDataLineDashType : y[n - 1].lineDashType;
                x3 = true;
              } else {
                l = a.axisX.convertValueToPixel(q);
                m2 = 0 === s3.dataPointEOs[n].cumulativeSum ? p : a.axisY.convertValueToPixel(s3.dataPointEOs[n].cumulativeSum);
                k = 0 === s3.dataPointEOs[n].cumulativeSumYStartValue ? p : a.axisY.convertValueToPixel(s3.dataPointEOs[n].cumulativeSumYStartValue);
                l = a.axisX.reversed ? l + a.plotType.totalDataSeries * r / 2 - (a.previousDataSeriesCount + g) * r << 0 : l - a.plotType.totalDataSeries * r / 2 + (a.previousDataSeriesCount + g) * r << 0;
                var E = a.axisX.reversed ? l - r << 0 : l + r << 0;
                m2 > k && (d = m2, m2 = k, k = d);
                a.axisY.reversed && (d = m2, m2 = k, k = d);
                d = s3.dataPointIds[n];
                this._eventManager.objectMap[d] = { id: d, objectType: "dataPoint", dataSeriesIndex: h2, dataPointIndex: n, x1: l, y1: m2, x2: E, y2: k };
                var O = y[n].color ? y[n].color : 0 < y[n].y ? s3.risingColor : s3.fallingColor;
                aa(c, a.axisX.reversed ? E : l, a.axisY.reversed ? k : m2, a.axisX.reversed ? l : E, a.axisY.reversed ? m2 : k, O, 0, O, v, v, false, false, s3.fillOpacity);
                d = X(d);
                u && aa(this._eventManager.ghostCtx, a.axisX.reversed ? E : l, m2, a.axisX.reversed ? l : E, k, d, 0, null, false, false, false, false);
                var P, O = l;
                P = "undefined" !== typeof y[n].isIntermediateSum && true === y[n].isIntermediateSum || "undefined" !== typeof y[n].isCumulativeSum && true === y[n].isCumulativeSum ? 0 < y[n].y ? m2 : k : 0 < y[n].y ? k : m2;
                0 < n && z && (!x3 || s3.connectNullData) && (x3 && c.setLineDash && c.setLineDash(J(B2, t)), c.beginPath(), c.moveTo(z, A2 - w), c.lineTo(O, P - w), 0 < t && c.stroke(), u && (b.beginPath(), b.moveTo(z, A2 - w), b.lineTo(O, P - w), 0 < t && b.stroke()));
                x3 = false;
                z = E;
                A2 = 0 < y[n].y ? m2 : k;
                O = y[n].lineDashType ? y[n].lineDashType : s3.options.lineDashType ? s3.options.lineDashType : "shortDash";
                c.strokeStyle = y[n].lineColor ? y[n].lineColor : s3.options.lineColor ? s3.options.lineColor : "#9e9e9e";
                c.lineWidth = t;
                c.setLineDash && (O = J(O, t), c.setLineDash(O));
                (y[n].indexLabel || s3.indexLabel || y[n].indexLabelFormatter || s3.indexLabelFormatter) && this._indexLabels.push({ chartType: "waterfall", dataPoint: y[n], dataSeries: s3, point: { x: l + (E - l) / 2, y: 0 <= y[n].y ? m2 : k }, direction: 0 > y[n].y === a.axisY.reversed ? 1 : -1, bounds: { x1: l, y1: Math.min(m2, k), x2: E, y2: Math.max(m2, k) }, color: d });
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(f.x1, f.y1, f.width, f.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: M.fadeInAnimation, easingFunction: M.easing.easeInQuad, animationBase: 0 };
          }
        };
        var sa2 = function(a, e, c, b, d, f, n, m2, h2) {
          if (!(0 > c)) {
            "undefined" === typeof m2 && (m2 = 1);
            if (!u) {
              var k = Number((n % (2 * Math.PI)).toFixed(8));
              Number((f % (2 * Math.PI)).toFixed(8)) === k && (n -= 1e-4);
            }
            a.save();
            a.globalAlpha = m2;
            "pie" === d ? (a.beginPath(), a.moveTo(e.x, e.y), a.arc(e.x, e.y, c, f, n, false), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === d && (a.beginPath(), a.arc(e.x, e.y, c, f, n, false), 0 <= h2 && a.arc(e.x, e.y, h2 * c, n, f, true), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
            a.globalAlpha = 1;
            a.restore();
          }
        };
        s2.prototype.renderPie = function(a) {
          function e() {
            if (k && q) {
              var a2 = 0, b2 = 0, c2 = 0, d2 = 0;
              m(k.options.indexLabelMaxWidth) && (k.indexLabelMaxWidth = 0.33 * r.width);
              for (var e2 = 0; e2 < q.length; e2++) {
                var f2 = q[e2], n2 = k.dataPointIds[e2];
                g[e2].id = n2;
                g[e2].objectType = "dataPoint";
                g[e2].dataPointIndex = e2;
                g[e2].dataSeriesIndex = 0;
                var l2 = g[e2], p2 = { percent: null, total: null }, s4 = null, p2 = h2.getPercentAndTotal(k, f2);
                if (k.indexLabelFormatter || f2.indexLabelFormatter) s4 = { chart: h2, dataSeries: k, dataPoint: f2, total: p2.total, percent: p2.percent };
                p2 = (p2 = f2.indexLabelFormatter ? f2.indexLabelFormatter(s4) : f2.indexLabel ? h2.replaceKeywordsWithValue(
                  f2.indexLabel,
                  f2,
                  k,
                  e2
                ) : k.indexLabelFormatter ? k.indexLabelFormatter(s4) : k.indexLabel ? h2.replaceKeywordsWithValue(k.indexLabel, f2, k, e2) : f2.label) || "";
                h2._eventManager.objectMap[n2] = l2;
                l2.center = { x: v.x, y: v.y };
                l2.y = f2.y;
                l2.radius = A2;
                l2.percentInnerRadius = E;
                l2.indexLabelText = p2;
                l2.indexLabelPlacement = k.indexLabelPlacement;
                l2.indexLabelLineColor = f2.indexLabelLineColor ? f2.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : f2.color ? f2.color : k._colorSet[e2 % k._colorSet.length];
                l2.indexLabelLineThickness = m(f2.indexLabelLineThickness) ? k.indexLabelLineThickness : f2.indexLabelLineThickness;
                l2.indexLabelLineDashType = f2.indexLabelLineDashType ? f2.indexLabelLineDashType : k.indexLabelLineDashType;
                l2.indexLabelFontColor = f2.indexLabelFontColor ? f2.indexLabelFontColor : k.indexLabelFontColor;
                l2.indexLabelFontStyle = f2.indexLabelFontStyle ? f2.indexLabelFontStyle : k.indexLabelFontStyle;
                l2.indexLabelFontWeight = f2.indexLabelFontWeight ? f2.indexLabelFontWeight : k.indexLabelFontWeight;
                l2.indexLabelFontSize = m(f2.indexLabelFontSize) ? k.indexLabelFontSize : f2.indexLabelFontSize;
                l2.indexLabelFontFamily = f2.indexLabelFontFamily ? f2.indexLabelFontFamily : k.indexLabelFontFamily;
                l2.indexLabelBackgroundColor = f2.indexLabelBackgroundColor ? f2.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                l2.indexLabelBorderColor = f2.indexLabelBorderColor ? f2.indexLabelBorderColor : k.options.indexLabelBorderColor ? k.options.indexLabelBorderColor : k.indexLabelBorderColor;
                l2.indexLabelBorderThickness = f2.indexLabelBorderThickness ? f2.indexLabelBorderThickness : k.options.indexLabelBorderThickness ? k.options.indexLabelBorderThickness : k.indexLabelBorderThickness;
                l2.indexLabelPadding = f2.indexLabelPadding ? f2.indexLabelPadding : k.options.indexLabelPadding ? k.options.indexLabelPadding : k.indexLabelPadding;
                l2.indexLabelMaxWidth = f2.indexLabelMaxWidth ? f2.indexLabelMaxWidth : k.indexLabelMaxWidth;
                l2.indexLabelWrap = "undefined" !== typeof f2.indexLabelWrap ? f2.indexLabelWrap : k.indexLabelWrap;
                l2.indexLabelTextAlign = f2.indexLabelTextAlign ? f2.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
                l2.startAngle = 0 === e2 ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : g[e2 - 1].endAngle;
                l2.startAngle = (l2.startAngle + 2 * Math.PI) % (2 * Math.PI);
                l2.endAngle = l2.startAngle + 2 * Math.PI / x3 * Math.abs(f2.y);
                f2 = (l2.endAngle + l2.startAngle) / 2;
                f2 = (f2 + 2 * Math.PI) % (2 * Math.PI);
                l2.midAngle = f2;
                if (l2.midAngle > Math.PI / 2 - t && l2.midAngle < Math.PI / 2 + t) {
                  if (0 === a2 || g[c2].midAngle > l2.midAngle) c2 = e2;
                  a2++;
                } else if (l2.midAngle > 3 * Math.PI / 2 - t && l2.midAngle < 3 * Math.PI / 2 + t) {
                  if (0 === b2 || g[d2].midAngle > l2.midAngle) d2 = e2;
                  b2++;
                }
                l2.hemisphere = f2 > Math.PI / 2 && f2 <= 3 * Math.PI / 2 ? "left" : "right";
                l2.indexLabelTextBlock = new ma(h2.plotArea.ctx, {
                  fontSize: l2.indexLabelFontSize,
                  fontFamily: l2.indexLabelFontFamily,
                  fontColor: l2.indexLabelFontColor,
                  fontStyle: l2.indexLabelFontStyle,
                  fontWeight: l2.indexLabelFontWeight,
                  textAlign: l2.indexLabelTextAlign,
                  backgroundColor: l2.indexLabelBackgroundColor,
                  borderColor: l2.indexLabelBorderColor,
                  borderThickness: l2.indexLabelBorderThickness,
                  maxWidth: l2.indexLabelMaxWidth,
                  maxHeight: l2.indexLabelWrap ? 5 * l2.indexLabelFontSize : 1.5 * l2.indexLabelFontSize,
                  text: l2.indexLabelText,
                  padding: l2.indexLabelPadding,
                  textBaseline: "middle"
                });
                l2.indexLabelTextBlock.measureText();
              }
              n2 = f2 = 0;
              p2 = false;
              for (e2 = 0; e2 < q.length; e2++) l2 = g[(c2 + e2) % q.length], 1 < a2 && (l2.midAngle > Math.PI / 2 - t && l2.midAngle < Math.PI / 2 + t) && (f2 <= a2 / 2 && !p2 ? (l2.hemisphere = "right", f2++) : (l2.hemisphere = "left", p2 = true));
              p2 = false;
              for (e2 = 0; e2 < q.length; e2++) l2 = g[(d2 + e2) % q.length], 1 < b2 && (l2.midAngle > 3 * Math.PI / 2 - t && l2.midAngle < 3 * Math.PI / 2 + t) && (n2 <= b2 / 2 && !p2 ? (l2.hemisphere = "left", n2++) : (l2.hemisphere = "right", p2 = true));
            }
          }
          function c(a2, b2) {
            var c2 = h2.plotArea.ctx;
            c2.clearRect(r.x1, r.y1, r.width, r.height);
            c2.fillStyle = h2.backgroundColor;
            c2.fillRect(r.x1, r.y1, r.width, r.height);
            for (c2 = 0; c2 < q.length; c2++) {
              var d2 = g[c2].startAngle, e2 = g[c2].endAngle;
              if (e2 > d2) {
                var f2 = 0.07 * A2 * Math.cos(g[c2].midAngle), n2 = 0.07 * A2 * Math.sin(g[c2].midAngle), l2 = false;
                if (q[c2].exploded) {
                  if (1e-9 < Math.abs(g[c2].center.x - (v.x + f2)) || 1e-9 < Math.abs(g[c2].center.y - (v.y + n2))) g[c2].center.x = v.x + f2 * a2, g[c2].center.y = v.y + n2 * a2, l2 = true;
                } else if (0 < Math.abs(g[c2].center.x - v.x) || 0 < Math.abs(g[c2].center.y - v.y)) g[c2].center.x = v.x + f2 * (1 - a2), g[c2].center.y = v.y + n2 * (1 - a2), l2 = true;
                l2 && b2 && (f2 = {}, f2.dataSeries = k, f2.dataPoint = k.dataPoints[c2], f2.index = c2, h2.toolTip.highlightObjects([f2]));
                sa2(h2.plotArea.ctx, g[c2].center, g[c2].radius, q[c2].color ? q[c2].color : k._colorSet[c2 % k._colorSet.length], k.type, d2, e2, k.fillOpacity, g[c2].percentInnerRadius);
              }
            }
            c2 = h2.plotArea.ctx;
            c2.save();
            c2.fillStyle = "black";
            c2.strokeStyle = "grey";
            c2.textBaseline = "middle";
            c2.lineJoin = "round";
            for (d2 = d2 = 0; d2 < q.length; d2++) e2 = g[d2], e2.indexLabelText && (e2.indexLabelTextBlock.y -= e2.indexLabelTextBlock.height / 2 - e2.indexLabelTextBlock._lineHeight / 2, f2 = 0, f2 = "left" === e2.hemisphere ? "inside" !== k.indexLabelPlacement ? -(e2.indexLabelTextBlock.width + p) : -e2.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? p : -e2.indexLabelTextBlock.width / 2, e2.indexLabelTextBlock.x += f2, e2.indexLabelTextBlock.render(true), e2.indexLabelTextBlock.x -= f2, e2.indexLabelTextBlock.y += e2.indexLabelTextBlock.height / 2 - e2.indexLabelTextBlock._lineHeight / 2, "inside" !== e2.indexLabelPlacement && 0 < e2.indexLabelLineThickness && (f2 = e2.center.x + A2 * Math.cos(e2.midAngle), n2 = e2.center.y + A2 * Math.sin(e2.midAngle), c2.strokeStyle = e2.indexLabelLineColor, c2.lineWidth = e2.indexLabelLineThickness, c2.setLineDash && c2.setLineDash(J(e2.indexLabelLineDashType, e2.indexLabelLineThickness)), c2.beginPath(), c2.moveTo(f2, n2), c2.lineTo(e2.indexLabelTextBlock.x, e2.indexLabelTextBlock.y), c2.lineTo(e2.indexLabelTextBlock.x + ("left" === e2.hemisphere ? -p : p), e2.indexLabelTextBlock.y), c2.stroke()), c2.lineJoin = "miter");
            c2.save();
          }
          function b(a2, b2) {
            var c2 = 0, c2 = a2.indexLabelTextBlock.y - a2.indexLabelTextBlock.height / 2, d2 = a2.indexLabelTextBlock.y + a2.indexLabelTextBlock.height / 2, e2 = b2.indexLabelTextBlock.y - b2.indexLabelTextBlock.height / 2, f2 = b2.indexLabelTextBlock.y + b2.indexLabelTextBlock.height / 2;
            return c2 = b2.indexLabelTextBlock.y > a2.indexLabelTextBlock.y ? e2 - d2 : c2 - f2;
          }
          function d(a2) {
            for (var c2 = null, d2 = 1; d2 < q.length; d2++) if (c2 = (a2 + d2 + g.length) % g.length, g[c2].hemisphere !== g[a2].hemisphere) {
              c2 = null;
              break;
            } else if (g[c2].indexLabelText && c2 !== a2 && (0 > b(g[c2], g[a2]) || ("right" === g[a2].hemisphere ? g[c2].indexLabelTextBlock.y >= g[a2].indexLabelTextBlock.y : g[c2].indexLabelTextBlock.y <= g[a2].indexLabelTextBlock.y))) break;
            else c2 = null;
            return c2;
          }
          function f(a2, c2, e2) {
            e2 = (e2 || 0) + 1;
            if (1e3 < e2) return 0;
            c2 = c2 || 0;
            var n2 = 0, k2 = v.y - 1 * u2, l2 = v.y + 1 * u2;
            if (0 <= a2 && a2 < q.length) {
              var m2 = g[a2];
              if (0 > c2 && m2.indexLabelTextBlock.y < k2 || 0 < c2 && m2.indexLabelTextBlock.y > l2) return 0;
              var p2 = 0, h3 = 0, h3 = p2 = p2 = 0;
              0 > c2 ? m2.indexLabelTextBlock.y - m2.indexLabelTextBlock.height / 2 > k2 && m2.indexLabelTextBlock.y - m2.indexLabelTextBlock.height / 2 + c2 < k2 && (c2 = -(k2 - (m2.indexLabelTextBlock.y - m2.indexLabelTextBlock.height / 2 + c2))) : m2.indexLabelTextBlock.y + m2.indexLabelTextBlock.height / 2 < k2 && m2.indexLabelTextBlock.y + m2.indexLabelTextBlock.height / 2 + c2 > l2 && (c2 = m2.indexLabelTextBlock.y + m2.indexLabelTextBlock.height / 2 + c2 - l2);
              c2 = m2.indexLabelTextBlock.y + c2;
              k2 = 0;
              k2 = "right" === m2.hemisphere ? v.x + Math.sqrt(Math.pow(u2, 2) - Math.pow(c2 - v.y, 2)) : v.x - Math.sqrt(Math.pow(u2, 2) - Math.pow(c2 - v.y, 2));
              h3 = v.x + A2 * Math.cos(m2.midAngle);
              p2 = v.y + A2 * Math.sin(m2.midAngle);
              p2 = Math.sqrt(Math.pow(k2 - h3, 2) + Math.pow(c2 - p2, 2));
              h3 = Math.acos(A2 / u2);
              p2 = Math.acos((u2 * u2 + A2 * A2 - p2 * p2) / (2 * A2 * u2));
              c2 = p2 < h3 ? c2 - m2.indexLabelTextBlock.y : 0;
              k2 = null;
              for (l2 = 1; l2 < q.length; l2++) if (k2 = (a2 - l2 + g.length) % g.length, g[k2].hemisphere !== g[a2].hemisphere) {
                k2 = null;
                break;
              } else if (g[k2].indexLabelText && g[k2].hemisphere === g[a2].hemisphere && k2 !== a2 && (0 > b(g[k2], g[a2]) || ("right" === g[a2].hemisphere ? g[k2].indexLabelTextBlock.y <= g[a2].indexLabelTextBlock.y : g[k2].indexLabelTextBlock.y >= g[a2].indexLabelTextBlock.y))) break;
              else k2 = null;
              h3 = k2;
              p2 = d(a2);
              l2 = k2 = 0;
              0 > c2 ? (l2 = "right" === m2.hemisphere ? h3 : p2, n2 = c2, null !== l2 && (h3 = -c2, c2 = m2.indexLabelTextBlock.y - m2.indexLabelTextBlock.height / 2 - (g[l2].indexLabelTextBlock.y + g[l2].indexLabelTextBlock.height / 2), c2 - h3 < s3 && (k2 = -h3, l2 = f(l2, k2, e2 + 1), +l2.toFixed(w) > +k2.toFixed(w) && (n2 = c2 > s3 ? -(c2 - s3) : -(h3 - (l2 - k2)))))) : 0 < c2 && (l2 = "right" === m2.hemisphere ? p2 : h3, n2 = c2, null !== l2 && (h3 = c2, c2 = g[l2].indexLabelTextBlock.y - g[l2].indexLabelTextBlock.height / 2 - (m2.indexLabelTextBlock.y + m2.indexLabelTextBlock.height / 2), c2 - h3 < s3 && (k2 = h3, l2 = f(l2, k2, e2 + 1), +l2.toFixed(w) < +k2.toFixed(w) && (n2 = c2 > s3 ? c2 - s3 : h3 - (k2 - l2)))));
              n2 && (e2 = m2.indexLabelTextBlock.y + n2, c2 = 0, c2 = "right" === m2.hemisphere ? v.x + Math.sqrt(Math.pow(u2, 2) - Math.pow(e2 - v.y, 2)) : v.x - Math.sqrt(Math.pow(u2, 2) - Math.pow(e2 - v.y, 2)), m2.midAngle > Math.PI / 2 - t && m2.midAngle < Math.PI / 2 + t ? (k2 = (a2 - 1 + g.length) % g.length, k2 = g[k2], a2 = g[(a2 + 1 + g.length) % g.length], "left" === m2.hemisphere && "right" === k2.hemisphere && c2 > k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x - 15 : "right" === m2.hemisphere && ("left" === a2.hemisphere && c2 < a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x + 15)) : m2.midAngle > 3 * Math.PI / 2 - t && m2.midAngle < 3 * Math.PI / 2 + t && (k2 = (a2 - 1 + g.length) % g.length, k2 = g[k2], a2 = g[(a2 + 1 + g.length) % g.length], "right" === m2.hemisphere && "left" === k2.hemisphere && c2 < k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x + 15 : "left" === m2.hemisphere && ("right" === a2.hemisphere && c2 > a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x - 15)), m2.indexLabelTextBlock.y = e2, m2.indexLabelTextBlock.x = c2, m2.indexLabelAngle = Math.atan2(m2.indexLabelTextBlock.y - v.y, m2.indexLabelTextBlock.x - v.x));
            }
            return n2;
          }
          function n() {
            var a2 = h2.plotArea.ctx;
            a2.fillStyle = "grey";
            a2.strokeStyle = "grey";
            a2.font = "16px Arial";
            a2.textBaseline = "middle";
            for (var c2 = a2 = 0, e2 = 0, n2 = true, c2 = 0; 10 > c2 && (1 > c2 || 0 < e2); c2++) {
              if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && A2 - e2 <= B2) n2 = false;
              n2 && (A2 -= e2);
              e2 = 0;
              if ("inside" !== k.indexLabelPlacement) {
                u2 = A2 * y;
                for (a2 = 0; a2 < q.length; a2++) {
                  var l2 = g[a2];
                  l2.indexLabelTextBlock.x = v.x + u2 * Math.cos(l2.midAngle);
                  l2.indexLabelTextBlock.y = v.y + u2 * Math.sin(l2.midAngle);
                  l2.indexLabelAngle = l2.midAngle;
                  l2.radius = A2;
                  l2.percentInnerRadius = E;
                }
                for (var m2, t2, a2 = 0; a2 < q.length; a2++) {
                  var l2 = g[a2], z2 = d(a2);
                  if (null !== z2) {
                    m2 = g[a2];
                    t2 = g[z2];
                    var x4 = 0, x4 = b(m2, t2) - s3;
                    if (0 > x4) {
                      for (var F3 = t2 = 0, J2 = 0; J2 < q.length; J2++) J2 !== a2 && g[J2].hemisphere === l2.hemisphere && (g[J2].indexLabelTextBlock.y < l2.indexLabelTextBlock.y ? t2++ : F3++);
                      t2 = x4 / (t2 + F3 || 1) * F3;
                      var F3 = -1 * (x4 - t2), M2 = J2 = 0;
                      "right" === l2.hemisphere ? (J2 = f(a2, t2), F3 = -1 * (x4 - J2), M2 = f(z2, F3), +M2.toFixed(w) < +F3.toFixed(w) && +J2.toFixed(w) <= +t2.toFixed(w) && f(a2, -(F3 - M2))) : (J2 = f(z2, t2), F3 = -1 * (x4 - J2), M2 = f(a2, F3), +M2.toFixed(w) < +F3.toFixed(w) && +J2.toFixed(w) <= +t2.toFixed(w) && f(z2, -(F3 - M2)));
                    }
                  }
                }
              } else for (a2 = 0; a2 < q.length; a2++) l2 = g[a2], u2 = "pie" === k.type ? 0.7 * A2 : 0.85 * A2, z2 = v.x + u2 * Math.cos(l2.midAngle), t2 = v.y + u2 * Math.sin(l2.midAngle), l2.indexLabelTextBlock.x = z2, l2.indexLabelTextBlock.y = t2;
              for (a2 = 0; a2 < q.length; a2++) if (l2 = g[a2], z2 = l2.indexLabelTextBlock.measureText(), 0 !== z2.height && 0 !== z2.width) z2 = z2 = 0, "right" === l2.hemisphere ? (z2 = r.x2 - (l2.indexLabelTextBlock.x + l2.indexLabelTextBlock.width + p), z2 *= -1) : z2 = r.x1 - (l2.indexLabelTextBlock.x - l2.indexLabelTextBlock.width - p), 0 < z2 && (!n2 && l2.indexLabelText && (t2 = "right" === l2.hemisphere ? r.x2 - l2.indexLabelTextBlock.x : l2.indexLabelTextBlock.x - r.x1, 0.3 * l2.indexLabelTextBlock.maxWidth > t2 ? l2.indexLabelText = "" : l2.indexLabelTextBlock.maxWidth = 0.85 * t2, 0.3 * l2.indexLabelTextBlock.maxWidth < t2 && (l2.indexLabelTextBlock.x -= "right" === l2.hemisphere ? 2 : -2)), Math.abs(l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 - v.y) < A2 || Math.abs(l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2 - v.y) < A2) && (z2 /= Math.abs(Math.cos(l2.indexLabelAngle)), 9 < z2 && (z2 *= 0.3), z2 > e2 && (e2 = z2)), z2 = z2 = 0, 0 < l2.indexLabelAngle && l2.indexLabelAngle < Math.PI ? (z2 = r.y2 - (l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2 + 5), z2 *= -1) : z2 = r.y1 - (l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 - 5), 0 < z2 && (!n2 && l2.indexLabelText && (t2 = 0 < l2.indexLabelAngle && l2.indexLabelAngle < Math.PI ? -1 : 1, 0 === f(a2, z2 * t2) && f(a2, 2 * t2)), Math.abs(l2.indexLabelTextBlock.x - v.x) < A2 && (z2 /= Math.abs(Math.sin(l2.indexLabelAngle)), 9 < z2 && (z2 *= 0.3), z2 > e2 && (e2 = z2)));
              var K2 = function(a3, b2, c3) {
                for (var e3 = [], d2 = 0; e3.push(g[b2]), b2 !== c3; b2 = (b2 + 1 + q.length) % q.length) ;
                e3.sort(function(a4, b3) {
                  return a4.y - b3.y;
                });
                for (b2 = 0; b2 < e3.length; b2++) if (c3 = e3[b2], d2 < 0.7 * a3) d2 += c3.indexLabelTextBlock.height, c3.indexLabelTextBlock.text = "", c3.indexLabelText = "", c3.indexLabelTextBlock.measureText();
                else break;
              };
              (function() {
                for (var a3 = -1, c3 = -1, e3 = 0, f2 = false, l3 = 0; l3 < q.length; l3++) if (f2 = false, m2 = g[l3], m2.indexLabelText) {
                  var k2 = d(l3);
                  if (null !== k2) {
                    var n3 = g[k2];
                    x4 = 0;
                    x4 = b(m2, n3);
                    var h3;
                    if (h3 = 0 > x4) {
                      h3 = m2.indexLabelTextBlock.x;
                      var r2 = m2.indexLabelTextBlock.y - m2.indexLabelTextBlock.height / 2, s4 = m2.indexLabelTextBlock.y + m2.indexLabelTextBlock.height / 2, t3 = n3.indexLabelTextBlock.y - n3.indexLabelTextBlock.height / 2, u3 = n3.indexLabelTextBlock.x + n3.indexLabelTextBlock.width, v2 = n3.indexLabelTextBlock.y + n3.indexLabelTextBlock.height / 2;
                      h3 = m2.indexLabelTextBlock.x + m2.indexLabelTextBlock.width < n3.indexLabelTextBlock.x - p || h3 > u3 + p || r2 > v2 + p || s4 < t3 - p ? false : true;
                    }
                    h3 ? (0 > a3 && (a3 = l3), k2 !== a3 && (c3 = k2, e3 += -x4), 0 === l3 % Math.max(q.length / 10, 3) && (f2 = true)) : f2 = true;
                    f2 && (0 < e3 && 0 <= a3 && 0 <= c3) && (K2(e3, a3, c3), c3 = a3 = -1, e3 = 0);
                  }
                }
                0 < e3 && K2(e3, a3, c3);
              })();
            }
          }
          function l() {
            h2.plotArea.layoutManager.reset();
            h2.title && (h2.title.dockInsidePlotArea || "center" === h2.title.horizontalAlign && "center" === h2.title.verticalAlign) && h2.title.render();
            if (h2.subtitles) for (var a2 = 0; a2 < h2.subtitles.length; a2++) {
              var b2 = h2.subtitles[a2];
              (b2.dockInsidePlotArea || "center" === b2.horizontalAlign && "center" === b2.verticalAlign) && b2.render();
            }
            h2.legend && (h2.legend.dockInsidePlotArea || "center" === h2.legend.horizontalAlign && "center" === h2.legend.verticalAlign) && (h2.legend.setLayout(), h2.legend.render());
          }
          var h2 = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var k = this.data[a.dataSeriesIndexes[0]], q = k.dataPoints, p = 10, r = this.plotArea, g = k.dataPointEOs, s3 = 2, u2, y = 1.3, t = 20 / 180 * Math.PI, w = 6, v = { x: (r.x2 + r.x1) / 2, y: (r.y2 + r.y1) / 2 }, x3 = 0;
            a = false;
            for (var z = 0; z < q.length; z++) x3 += Math.abs(q[z].y), !a && ("undefined" !== typeof q[z].indexLabel && null !== q[z].indexLabel && 0 < q[z].indexLabel.toString().length) && (a = true), !a && ("undefined" !== typeof q[z].label && null !== q[z].label && 0 < q[z].label.toString().length) && (a = true);
            if (0 !== x3) {
              a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
              var A2 = "inside" !== k.indexLabelPlacement && a ? 0.75 * Math.min(r.width, r.height) / 2 : 0.92 * Math.min(r.width, r.height) / 2;
              k.radius && (A2 = Wa(k.radius, A2));
              var B2 = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Wa(k.innerRadius, A2, 0.7 * A2) : 0.7 * A2, E = Math.min(B2 / A2, (A2 - 1) / A2);
              this.pieDoughnutClickHandler = function(a2) {
                h2.isAnimating || !m(this.explodeOnClick) && !this.explodeOnClick || (a2 = a2.dataPoint, a2.exploded = a2.exploded ? false : true, 1 < this.dataPoints.length && h2._animator.animate(0, 500, function(a3) {
                  c(a3, true);
                  l();
                  h2.dispatchEvent(
                    "dataAnimationIterationEnd",
                    { chart: h2 }
                  );
                  h2.dispatchEvent("dataAnimationEnd", { chart: h2 });
                }));
              };
              e();
              n();
              n();
              n();
              n();
              this.disableToolTip = true;
              this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a2) {
                var b2 = h2.plotArea.ctx;
                b2.clearRect(r.x1, r.y1, r.width, r.height);
                b2.fillStyle = h2.backgroundColor;
                b2.fillRect(r.x1, r.y1, r.width, r.height);
                for (var b2 = g[0].startAngle + 2 * Math.PI * a2, c2 = 0; c2 < q.length; c2++) {
                  var e2 = 0 === c2 ? g[c2].startAngle : d2, d2 = e2 + (g[c2].endAngle - g[c2].startAngle), f2 = false;
                  d2 > b2 && (d2 = b2, f2 = true);
                  var n2 = q[c2].color ? q[c2].color : k._colorSet[c2 % k._colorSet.length];
                  d2 > e2 && sa2(h2.plotArea.ctx, g[c2].center, g[c2].radius, n2, k.type, e2, d2, k.fillOpacity, g[c2].percentInnerRadius);
                  if (f2) break;
                }
                l();
                h2.dispatchEvent("dataAnimationIterationEnd", { chart: h2 });
                1 <= a2 && h2.dispatchEvent("dataAnimationEnd", { chart: h2 });
              }, function() {
                h2.disableToolTip = false;
                h2._animator.animate(0, h2.animatedRender ? 500 : 0, function(a2) {
                  c(a2, false);
                  l();
                  h2.dispatchEvent("dataAnimationIterationEnd", { chart: h2 });
                });
                h2.dispatchEvent("dataAnimationEnd", { chart: h2 });
              });
              k.radius = A2;
              "doughnut" === k.type && (k.innerRadius = B2);
            }
          }
        };
        var ta2 = function(a, e, c, b) {
          "undefined" === typeof c && (c = 1);
          0 >= Math.round(e.y4 - e.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(e.x1), Math.round(e.y1)), a.lineTo(Math.round(e.x2), Math.round(e.y2)), a.lineTo(Math.round(e.x3), Math.round(e.y3)), a.lineTo(Math.round(e.x4), Math.round(e.y4)), "undefined" !== e.x5 && (a.lineTo(Math.round(e.x5), Math.round(e.y5)), a.lineTo(Math.round(e.x6), Math.round(e.y6))), a.closePath(), a.fillStyle = b ? b : e.color, a.fill(), a.globalAplha = 1, a.restore());
        };
        s2.prototype.renderFunnel = function(a) {
          function e() {
            for (var a2 = 0, b2 = [], c2 = 0; c2 < w.length; c2++) {
              if ("undefined" === typeof w[c2].y) return -1;
              w[c2].y = "number" === typeof w[c2].y ? w[c2].y : 0;
              a2 += Math.abs(w[c2].y);
            }
            if (0 === a2) return -1;
            for (c2 = b2[0] = 0; c2 < w.length; c2++) b2.push(Math.abs(w[c2].y) * B2 / a2);
            return b2;
          }
          function c() {
            var a2 = V, b2 = U3, c2 = $, e2 = Y2, d2, f2;
            d2 = Z;
            f2 = Q2 - da;
            e2 = Math.abs((f2 - d2) * (b2 - a2 + (e2 - c2)) / 2);
            c2 = Y2 - $;
            d2 = f2 - d2;
            f2 = c2 * (f2 - Q2);
            f2 = Math.abs(f2);
            f2 = e2 + f2;
            for (var e2 = [], g2 = 0, l2 = 0; l2 < w.length; l2++) {
              if ("undefined" === typeof w[l2].y) return -1;
              w[l2].y = "number" === typeof w[l2].y ? w[l2].y : 0;
              g2 += Math.abs(w[l2].y);
            }
            if (0 === g2) return -1;
            for (var n2 = e2[0] = 0, k2 = 0, m2, h3, b2 = b2 - a2, n2 = false, l2 = 0; l2 < w.length; l2++) a2 = Math.abs(w[l2].y) * f2 / g2, n2 ? m2 = 0 == Number(c2.toFixed(3)) ? 0 : a2 / c2 : (h3 = ea3 * ea3 * b2 * b2 - 4 * Math.abs(ea3) * a2, 0 > h3 ? (h3 = c2, n2 = (b2 + h3) * (d2 - k2) / 2, a2 -= n2, m2 = d2 - k2, k2 += d2 - k2, m2 += 0 == h3 ? 0 : a2 / h3, k2 += a2 / h3, n2 = true) : (m2 = (Math.abs(ea3) * b2 - Math.sqrt(h3)) / 2, h3 = b2 - 2 * m2 / Math.abs(ea3), k2 += m2, k2 > d2 && (k2 -= m2, h3 = c2, n2 = (b2 + h3) * (d2 - k2) / 2, a2 -= n2, m2 = d2 - k2, k2 += d2 - k2, m2 += a2 / h3, k2 += a2 / h3, n2 = true), b2 = h3)), e2.push(m2);
            return e2;
          }
          function b() {
            if (t && w) {
              for (var a2, b2, c2, e2, d2, f2, l2, k2, n2, h3, p2, q2, r2, s4, v2, C2, z2, x4, L = [], A3 = [], B3 = { percent: null, total: null }, N = null, D = 0; D < w.length; D++) x4 = I[D], x4 = "undefined" !== typeof x4.x5 ? (x4.y2 + x4.y4) / 2 : (x4.y2 + x4.y3) / 2, x4 = g(x4).x2 + 1, L[D] = K2 - (isNaN(x4) ? 0 : x4) - X2;
              x4 = 0.5 * X2;
              for (var D = 0, E2 = w.length - 1; D < w.length || 0 <= E2; D++, E2--) {
                b2 = t.reversed ? w[E2] : w[D];
                a2 = b2.color ? b2.color : t.reversed ? t._colorSet[(w.length - 1 - D) % t._colorSet.length] : t._colorSet[D % t._colorSet.length];
                c2 = b2.indexLabelPlacement || t.indexLabelPlacement || "outside";
                z2 = b2.indexLabelTextAlign || t.indexLabelTextAlign || "left";
                e2 = b2.indexLabelBackgroundColor || t.indexLabelBackgroundColor || (u ? "transparent" : null);
                d2 = b2.indexLabelBorderColor || t.indexLabelBorderColor || (u ? "transparent" : null);
                f2 = m(b2.indexLabelBorderThickness) ? t.indexLabelBorderThickness : b2.indexLabelBorderThickness;
                l2 = m(b2.indexLabelPadding) ? t.options.indexLabelPadding ? t.options.indexLabelPadding : t.indexLabelPadding : b2.indexLabelPadding;
                k2 = b2.indexLabelFontColor || t.indexLabelFontColor || "#979797";
                n2 = m(b2.indexLabelFontSize) ? t.indexLabelFontSize : b2.indexLabelFontSize;
                h3 = b2.indexLabelFontStyle || t.indexLabelFontStyle || "normal";
                p2 = b2.indexLabelFontFamily || t.indexLabelFontFamily || "arial";
                q2 = b2.indexLabelFontWeight || t.indexLabelFontWeight || "normal";
                a2 = b2.indexLabelLineColor || t.options.indexLabelLineColor || a2;
                r2 = "number" === typeof b2.indexLabelLineThickness ? b2.indexLabelLineThickness : "number" === typeof t.indexLabelLineThickness ? t.indexLabelLineThickness : 2;
                s4 = b2.indexLabelLineDashType || t.indexLabelLineDashType || "solid";
                v2 = "undefined" !== typeof b2.indexLabelWrap ? b2.indexLabelWrap : "undefined" !== typeof t.indexLabelWrap ? t.indexLabelWrap : true;
                C2 = t.dataPointIds[D];
                y._eventManager.objectMap[C2] = {
                  id: C2,
                  objectType: "dataPoint",
                  dataPointIndex: D,
                  dataSeriesIndex: 0,
                  funnelSection: I[t.reversed ? w.length - 1 - D : D]
                };
                "inside" === t.indexLabelPlacement && (L[D] = D !== fa2 ? t.reversed ? I[D].x2 - I[D].x1 : I[D].x3 - I[D].x4 : I[D].x3 - I[D].x6, 20 > L[D] && (L[D] = D !== fa2 ? t.reversed ? I[D].x3 - I[D].x4 : I[D].x2 - I[D].x1 : I[D].x2 - I[D].x1, L[D] /= 2));
                C2 = b2.indexLabelMaxWidth ? b2.indexLabelMaxWidth : t.options.indexLabelMaxWidth ? t.indexLabelMaxWidth : L[D];
                if (C2 > L[D] || 0 > C2) C2 = L[D];
                A3[D] = "inside" === t.indexLabelPlacement ? v2 ? Math.max(I[D].height, n2) : 1.5 * n2 + ("object" === typeof l2 ? (l2.top || 0) + (l2.bottom || 0) : 2 * l2) : false;
                B3 = y.getPercentAndTotal(t, b2);
                if (t.indexLabelFormatter || b2.indexLabelFormatter) N = { chart: y, dataSeries: t, dataPoint: b2, total: B3.total, percent: B3.percent };
                b2 = b2.indexLabelFormatter ? b2.indexLabelFormatter(N) : b2.indexLabel ? y.replaceKeywordsWithValue(b2.indexLabel, b2, t, D) : t.indexLabelFormatter ? t.indexLabelFormatter(N) : t.indexLabel ? y.replaceKeywordsWithValue(t.indexLabel, b2, t, D) : b2.label ? b2.label : "";
                0 >= r2 && (r2 = 0);
                1e3 > C2 && 1e3 - C2 < x4 && (C2 += 1e3 - C2);
                m(t.options.indexLabelMaxWidth) && (t.indexLabelMaxWidth = m(t.indexLabelMaxWidth) ? C2 : Math.max(C2, t.indexLabelMaxWidth));
                R2.roundRect || Aa(R2);
                c2 = new ma(R2, { fontSize: n2, fontFamily: p2, fontColor: k2, fontStyle: h3, fontWeight: q2, horizontalAlign: c2, textAlign: z2, backgroundColor: e2, borderColor: d2, borderThickness: f2, maxWidth: C2, maxHeight: false === A3[D] ? (v2 ? 4.28571429 * n2 : 1.5 * n2) + ("object" === typeof l2 ? (l2.top || 0) + (l2.bottom || 0) : 2 * l2) : A3[D], text: b2, padding: l2, textBaseline: "middle" });
                c2.measureText();
                c2.height = c2.height === 2 * c2.padding ? 0 : c2.height;
                c2.width = c2.width === 2 * c2.padding ? 0 : c2.width;
                H.push({
                  textBlock: c2,
                  id: t.reversed ? E2 : D,
                  isDirty: false,
                  lineColor: a2,
                  lineThickness: r2,
                  lineDashType: s4,
                  height: c2.height < c2.maxHeight ? c2.height : c2.maxHeight,
                  width: c2.width < c2.maxWidth ? c2.width : c2.maxWidth
                });
              }
            }
          }
          function d() {
            var a2, b2, c2, e2, d2, f2 = [];
            d2 = false;
            c2 = 0;
            for (var g2, l2 = K2 - U3 - X2 / 2, l2 = t.options.indexLabelMaxWidth ? t.indexLabelMaxWidth > l2 ? l2 : t.indexLabelMaxWidth : l2, k2 = H.length - 1; 0 <= k2; k2--) {
              g2 = w[H[k2].id];
              c2 = H[k2];
              e2 = c2.textBlock;
              b2 = (a2 = r(k2) < I.length ? H[r(k2)] : null) ? a2.textBlock : null;
              c2 = c2.height;
              a2 && e2.y + c2 + ga3 > b2.y && (d2 = true);
              c2 = g2.indexLabelMaxWidth || l2;
              if (c2 > l2 || 0 > c2) c2 = l2;
              f2.push(c2);
            }
            if (d2) for (k2 = H.length - 1; 0 <= k2; k2--) a2 = I[k2], H[k2].textBlock.maxWidth = f2[f2.length - (k2 + 1)], H[k2].textBlock.measureText(), H[k2].textBlock.height = H[k2].textBlock.height === 2 * H[k2].textBlock.padding ? 0 : H[k2].textBlock.height, H[k2].textBlock.width = H[k2].textBlock.width === 2 * H[k2].textBlock.padding ? 0 : H[k2].textBlock.width, H[k2].textBlock.x = K2 - l2, c2 = H[k2].textBlock.height < H[k2].textBlock.maxHeight ? H[k2].textBlock.height : H[k2].textBlock.maxHeight, d2 = H[k2].textBlock.width < H[k2].textBlock.maxWidth ? H[k2].textBlock.width : H[k2].textBlock.maxWidth, H[k2].height = c2, H[k2].width = d2, c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, H[k2].textBlock.y = c2 - H[k2].height / 2, t.reversed ? (H[k2].textBlock.y + H[k2].height > T2 + x3 && (H[k2].textBlock.y = T2 + x3 - H[k2].height), H[k2].textBlock.y < ua - x3 && (H[k2].textBlock.y = ua - x3)) : (H[k2].textBlock.y < T2 - x3 && (H[k2].textBlock.y = T2 - x3), H[k2].textBlock.y + H[k2].height > ua + x3 && (H[k2].textBlock.y = ua + x3 - H[k2].height));
          }
          function f() {
            var a2, b2, c2, e2;
            if ("inside" !== t.indexLabelPlacement) for (var d2 = 0; d2 < I.length; d2++) m(H[d2].textBlock) || (m(H[d2].textBlock.text) || 0 != H[d2].textBlock.text.length) && !m(H[d2].textBlock.text) ? (a2 = I[d2], c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, b2 = t.reversed ? "undefined" !== typeof a2.x5 ? c2 > Fa ? g(c2).x2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : "undefined" !== typeof a2.x5 ? c2 < Fa ? g(c2).x2 + 1 : (a2.x4 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1, H[d2].textBlock.x = b2 + X2, H[d2].textBlock.y = c2 - H[d2].height / 2, t.reversed ? (H[d2].textBlock.y + H[d2].height > T2 + x3 && (H[d2].textBlock.y = T2 + x3 - H[d2].height), H[d2].textBlock.y < ua - x3 && (H[d2].textBlock.y = ua - x3)) : (H[d2].textBlock.y < T2 - x3 && (H[d2].textBlock.y = T2 - x3), H[d2].textBlock.y + H[d2].height > ua + x3 && (H[d2].textBlock.y = ua + x3 - H[d2].height))) : H[d2].isDirty = true;
            else for (d2 = 0; d2 < I.length; d2++) m(H[d2].textBlock) || (m(H[d2].textBlock.text) || 0 != H[d2].textBlock.text.length) && !m(H[d2].textBlock.text) ? (a2 = I[d2], b2 = a2.height, c2 = H[d2].height, e2 = H[d2].width, b2 >= c2 ? (b2 = d2 != fa2 ? (a2.x4 + a2.x3) / 2 - e2 / 2 : (a2.x5 + a2.x4) / 2 - e2 / 2, c2 = d2 != fa2 ? (a2.y1 + a2.y3) / 2 - c2 / 2 : (a2.y1 + a2.y4) / 2 - c2 / 2, H[d2].textBlock.x = b2, H[d2].textBlock.y = c2) : H[d2].isDirty = true) : H[d2].isDirty = true;
          }
          function n() {
            function a2(b3, c3) {
              var d3;
              if (0 > b3 || b3 >= H.length) return 0;
              var e3, f3 = H[b3].textBlock;
              if (0 > c3) {
                c3 *= -1;
                e3 = p(b3);
                d3 = l(e3, b3);
                if (d3 >= c3) return f3.y -= c3, c3;
                if (0 == b3) return 0 < d3 && (f3.y -= d3), d3;
                d3 += a2(e3, -(c3 - d3));
                0 < d3 && (f3.y -= d3);
                return d3;
              }
              e3 = r(b3);
              d3 = l(b3, e3);
              if (d3 >= c3) return f3.y += c3, c3;
              if (b3 == I.length - 1) return 0 < d3 && (f3.y += d3), d3;
              d3 += a2(e3, c3 - d3);
              0 < d3 && (f3.y += d3);
              return d3;
            }
            function b2() {
              var a3, d3, e3, f3, g3 = 0, k3;
              f3 = (Q2 - Z + 2 * x3) / m2;
              k3 = m2;
              for (var l2, n3 = 1; n3 < k3; n3++) {
                e3 = n3 * f3;
                for (var h4 = H.length - 1; 0 <= h4; h4--) !H[h4].isDirty && (H[h4].textBlock.y < e3 && H[h4].textBlock.y + H[h4].height > e3) && (l2 = r(h4), !(l2 >= H.length - 1) && H[h4].textBlock.y + H[h4].height + ga3 > H[l2].textBlock.y && (H[h4].textBlock.y = H[h4].textBlock.y + H[h4].height - e3 > e3 - H[h4].textBlock.y ? e3 + 1 : e3 - H[h4].height - 1));
              }
              for (l2 = I.length - 1; 0 < l2; l2--) if (!H[l2].isDirty) {
                e3 = p(l2);
                if (0 > e3 && (e3 = 0, H[e3].isDirty)) break;
                if (H[l2].textBlock.y < H[e3].textBlock.y + H[e3].height) {
                  d3 = d3 || l2;
                  f3 = l2;
                  for (k3 = 0; H[f3].textBlock.y < H[e3].textBlock.y + H[e3].height + ga3; ) {
                    a3 = a3 || H[f3].textBlock.y + H[f3].height;
                    k3 += H[f3].height;
                    k3 += ga3;
                    f3 = e3;
                    if (0 >= f3) {
                      f3 = 0;
                      k3 += H[f3].height;
                      break;
                    }
                    e3 = p(f3);
                    if (0 > e3) {
                      f3 = 0;
                      k3 += H[f3].height;
                      break;
                    }
                  }
                  if (f3 != l2) {
                    g3 = H[f3].textBlock.y;
                    a3 -= g3;
                    a3 = k3 - a3;
                    g3 = c2(a3, d3, f3);
                    break;
                  }
                }
              }
              return g3;
            }
            function c2(a3, b3, d3) {
              var e3 = [], f3 = 0, g3 = 0;
              for (a3 = Math.abs(a3); d3 <= b3; d3++) e3.push(I[d3]);
              e3.sort(function(a4, b4) {
                return a4.height - b4.height;
              });
              for (d3 = 0; d3 < e3.length; d3++) if (b3 = e3[d3], f3 < a3) g3++, f3 += H[b3.id].height + ga3, H[b3.id].textBlock.text = "", H[b3.id].indexLabelText = "", H[b3.id].isDirty = true, H[b3.id].textBlock.measureText();
              else break;
              return g3;
            }
            for (var d2, e2, f2, g2, k2, n2, m2 = 1, h3 = 0; h3 < 2 * m2; h3++) {
              for (var q2 = H.length - 1; 0 <= q2 && !(0 <= p(q2) && p(q2), f2 = H[q2], g2 = f2.textBlock, n2 = (k2 = r(q2) < I.length ? H[r(q2)] : null) ? k2.textBlock : null, d2 = +f2.height.toFixed(6), e2 = +g2.y.toFixed(6), !f2.isDirty && (k2 && e2 + d2 + ga3 > +n2.y.toFixed(6)) && (d2 = g2.y + d2 + ga3 - n2.y, e2 = a2(q2, -d2), e2 < d2 && (0 < e2 && (d2 -= e2), e2 = a2(r(q2), d2), e2 != d2))); q2--) ;
              b2();
            }
          }
          function l(a2, b2) {
            return (b2 < I.length ? H[b2].textBlock.y : t.reversed ? T2 + x3 : ua + x3) - (0 > a2 ? t.reversed ? ua - x3 : T2 - x3 : H[a2].textBlock.y + H[a2].height + ga3);
          }
          function h2(a2, b2, c2) {
            var d2, e2, g2, l2 = [], n2 = x3, m2 = [];
            -1 !== b2 && (0 <= W2.indexOf(b2) ? (e2 = W2.indexOf(b2), W2.splice(e2, 1)) : (W2.push(b2), W2 = W2.sort(function(a3, b3) {
              return a3 - b3;
            })));
            if (0 === W2.length) l2 = la2;
            else {
              e2 = x3 * (1 != W2.length || 0 != W2[0] && W2[0] != I.length - 1 ? 2 : 1) / k();
              for (var p2 = 0; p2 < I.length; p2++) {
                if (1 == W2.length && 0 == W2[0]) {
                  if (0 === p2) {
                    l2.push(la2[p2]);
                    d2 = n2;
                    continue;
                  }
                } else 0 === p2 && (d2 = -1 * n2);
                l2.push(la2[p2] + d2);
                if (0 <= W2.indexOf(p2) || p2 < I.length && 0 <= W2.indexOf(p2 + 1)) d2 += e2;
              }
            }
            g2 = function() {
              for (var a3 = [], b3 = 0; b3 < I.length; b3++) a3.push(l2[b3] - I[b3].y1);
              return a3;
            }();
            var r2 = { startTime: (/* @__PURE__ */ new Date()).getTime(), duration: c2 || 500, easingFunction: function(a3, b3, c3, d3) {
              return M.easing.easeOutQuart(a3, b3, c3, d3);
            }, changeSection: function(a3) {
              for (var b3, c3, d3 = 0; d3 < I.length; d3++) b3 = g2[d3], c3 = I[d3], b3 *= a3, "undefined" === typeof m2[d3] && (m2[d3] = 0), 0 > m2 && (m2 *= -1), c3.y1 += b3 - m2[d3], c3.y2 += b3 - m2[d3], c3.y3 += b3 - m2[d3], c3.y4 += b3 - m2[d3], c3.y5 && (c3.y5 += b3 - m2[d3], c3.y6 += b3 - m2[d3]), m2[d3] = b3;
            } };
            a2._animator.animate(0, c2, function(c3) {
              var d3 = a2.plotArea.ctx || a2.ctx;
              ja3 = true;
              d3.clearRect(v.x1, v.y1, v.x2 - v.x1, v.y2 - v.y1);
              d3.fillStyle = a2.backgroundColor;
              d3.fillRect(v.x1, v.y1, v.width, v.height);
              r2.changeSection(c3, b2);
              var e3 = {};
              e3.dataSeries = t;
              e3.dataPoint = t.reversed ? t.dataPoints[w.length - 1 - b2] : t.dataPoints[b2];
              e3.index = t.reversed ? w.length - 1 - b2 : b2;
              a2.toolTip.highlightObjects([e3]);
              for (e3 = 0; e3 < I.length; e3++) ta2(d3, I[e3], t.fillOpacity);
              C(d3);
              F3 && ("inside" !== t.indexLabelPlacement ? q(d3) : f(), s3(d3));
              1 <= c3 && (ja3 = false);
            }, null, M.easing.easeOutQuart);
          }
          function k() {
            for (var a2 = 0, b2 = 0; b2 < I.length - 1; b2++) (0 <= W2.indexOf(b2) || 0 <= W2.indexOf(b2 + 1)) && a2++;
            return a2;
          }
          function q(a2) {
            for (var b2, c2, d2, e2, f2 = 0; f2 < I.length; f2++) e2 = 1 === H[f2].lineThickness % 2 ? 0.5 : 0, c2 = ((I[f2].y2 + I[f2].y4) / 2 << 0) + e2, b2 = g(c2).x2 - 1, isNaN(b2) && (Math.round(I[f2].x1) === Math.round(I[f2].x4) && Math.round(I[f2].x2) === Math.round(I[f2].x3)) && (b2 = I[f2].x2), d2 = H[f2].textBlock.x, e2 = (H[f2].textBlock.y + H[f2].height / 2 << 0) + e2, H[f2].isDirty || 0 == H[f2].lineThickness || (a2.strokeStyle = H[f2].lineColor, a2.lineWidth = H[f2].lineThickness, a2.setLineDash && a2.setLineDash(J(H[f2].lineDashType, H[f2].lineThickness)), a2.beginPath(), a2.moveTo(b2, c2), a2.lineTo(d2, e2), a2.stroke());
          }
          function p(a2) {
            for (a2 -= 1; -1 <= a2 && -1 != a2 && H[a2].isDirty; a2--) ;
            return a2;
          }
          function r(a2) {
            for (a2 += 1; a2 <= I.length && a2 != I.length && H[a2].isDirty; a2++) ;
            return a2;
          }
          function g(a2) {
            for (var b2, c2 = 0; c2 < w.length; c2++) if (I[c2].y1 < a2 && I[c2].y4 > a2) {
              b2 = I[c2];
              break;
            }
            return b2 ? (a2 = b2.y6 ? a2 > b2.y6 ? b2.x3 + (b2.x4 - b2.x3) / (b2.y4 - b2.y3) * (a2 - b2.y3) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2), { x1: a2, x2: a2 }) : -1;
          }
          function s3(a2) {
            for (var b2 = 0; b2 < I.length; b2++) H[b2].isDirty || (a2 && (H[b2].textBlock.ctx = a2), H[b2].textBlock.y += H[b2].textBlock._lineHeight / 2, H[b2].textBlock.render(true), H[b2].textBlock.y -= H[b2].textBlock._lineHeight / 2);
          }
          function C(a2) {
            y.plotArea.layoutManager.reset();
            a2.roundRect || Aa(a2);
            y.title && (y.title.dockInsidePlotArea || "center" === y.title.horizontalAlign && "center" === y.title.verticalAlign) && (y.title.ctx = a2, y.title.render());
            if (y.subtitles) for (var b2 = 0; b2 < y.subtitles.length; b2++) {
              var c2 = y.subtitles[b2];
              if (c2.dockInsidePlotArea || "center" === c2.horizontalAlign && "center" === c2.verticalAlign) y.subtitles.ctx = a2, c2.render();
            }
            y.legend && (y.legend.dockInsidePlotArea || "center" === y.legend.horizontalAlign && "center" === y.legend.verticalAlign) && (y.legend.ctx = a2, y.legend.setLayout(), y.legend.render());
            S.fNg && S.fNg(y);
          }
          var y = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            for (var t = this.data[a.dataSeriesIndexes[0]], w = t.dataPoints, v = this.plotArea, x3 = 0.025 * v.width, z = 0.01 * v.width, A2 = 0, B2 = v.height - 2 * x3 - 4, E = Math.min(v.width - 2 * z, 2.8 * v.height), F3 = false, P = 0; P < w.length; P++) if (!F3 && ("undefined" !== typeof w[P].indexLabel && null !== w[P].indexLabel && 0 < w[P].indexLabel.toString().length) && (F3 = true), !F3 && ("undefined" !== typeof w[P].label && null !== w[P].label && 0 < w[P].label.toString().length) && (F3 = true), !F3 && "function" === typeof t.indexLabelFormatter || "function" === typeof w[P].indexLabelFormatter) F3 = true;
            F3 = F3 || "undefined" !== typeof t.indexLabel && null !== t.indexLabel && 0 < t.indexLabel.toString().length;
            "inside" !== t.indexLabelPlacement && F3 || (z = (v.width - 0.75 * E) / 2);
            var P = v.x1 + z, K2 = v.x2 - z, Z = v.y1 + x3 + 2, Q2 = v.y2 - x3 - 2, R2 = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
            if (0 != t.length && (t.dataPoints && t.visible) && 0 !== w.length) {
              var da, G;
              a = 75 * E / 100;
              var X2 = 30 * (K2 - a) / 100;
              "funnel" === t.type ? (da = m(t.options.neckHeight) ? 0.35 * B2 : t.neckHeight, G = m(t.options.neckWidth) ? 0.25 * a : t.neckWidth, "string" === typeof da && da.match(/%$/) ? (da = parseInt(da), da = da * B2 / 100) : da = parseInt(da), "string" === typeof G && G.match(/%$/) ? (G = parseInt(G), G = G * a / 100) : G = parseInt(G), da > B2 ? da = B2 : 0 >= da && (da = 0), G > a ? G = a - 0.5 : 0 >= G && (G = 0)) : "pyramid" === t.type && (G = da = 0, t.reversed = t.reversed ? false : true);
              var E = P + a / 2, V = P, U3 = P + a, T2 = t.reversed ? Q2 : Z, $ = E - G / 2, Y2 = E + G / 2, Fa = t.reversed ? Z + da : Q2 - da, ua = t.reversed ? Z : Q2;
              G = t.valueRepresents = t.valueRepresents ? t.valueRepresents : "height";
              var aa2, P = [], E = [], I = [], ka = [], ca3 = Z, fa2, ea3 = (Fa - T2) / ($ - V), ia3 = -ea3;
              aa2 = "area" === G ? c() : e();
              if (-1 !== aa2) {
                if (t.reversed) for (ka.push(ca3), G = aa2.length - 1; 0 < G; G--) ca3 += aa2[G], ka.push(Math.round(ca3));
                else for (G = 0; G < aa2.length; G++) ca3 += aa2[G], ka.push(Math.round(ca3));
                if (t.reversed) for (G = 0; G < aa2.length; G++) ka[G] < Fa ? (P.push($), E.push(Y2), fa2 = G) : (P.push((ka[G] - T2 + ea3 * V) / ea3), E.push((ka[G] - T2 + ia3 * U3) / ia3));
                else for (G = 0; G < aa2.length; G++) ka[G] < Fa ? (P.push((ka[G] - T2 + ea3 * V) / ea3), E.push((ka[G] - T2 + ia3 * U3) / ia3), fa2 = G) : (P.push($), E.push(Y2));
                for (G = 0; G < aa2.length - 1; G++) ca3 = t.reversed ? w[w.length - 1 - G].color ? w[w.length - 1 - G].color : t._colorSet[(w.length - 1 - G) % t._colorSet.length] : w[G].color ? w[G].color : t._colorSet[G % t._colorSet.length], G === fa2 ? I.push({ x1: P[G], y1: ka[G], x2: E[G], y2: ka[G], x3: Y2, y3: Fa, x4: E[G + 1], y4: ka[G + 1], x5: P[G + 1], y5: ka[G + 1], x6: $, y6: Fa, id: G, height: ka[G + 1] - ka[G], color: ca3 }) : I.push({
                  x1: P[G],
                  y1: ka[G],
                  x2: E[G],
                  y2: ka[G],
                  x3: E[G + 1],
                  y3: ka[G + 1],
                  x4: P[G + 1],
                  y4: ka[G + 1],
                  id: G,
                  height: ka[G + 1] - ka[G],
                  color: ca3
                }), t.dataPointEOs[G] && I[G] && (t.dataPointEOs[G].sectionsofFunnel = I[G]);
                var ga3 = 2, H = [], ja3 = false, W2 = [], la2 = [], P = false;
                aa2 = aa2 = 0;
                Ba(W2);
                for (G = 0; G < w.length; G++) w[G].exploded && (P = true, t.reversed ? W2.push(w.length - 1 - G) : W2.push(G));
                R2.clearRect(v.x1, v.y1, v.width, v.height);
                R2.fillStyle = y.backgroundColor;
                R2.fillRect(v.x1, v.y1, v.width, v.height);
                if (F3 && t.visible && (b(), f(), "inside" !== t.indexLabelPlacement)) {
                  d();
                  n();
                  E = false;
                  ka = Infinity;
                  for (G = 0; G < w.length; G++) H[G].isDirty || (E = true, aa2 = H[G].textBlock.x + H[G].width, aa2 = (K2 - aa2) / 2, aa2 < ka && (ka = aa2));
                  Infinity !== ka && (A2 = ka);
                  E || (A2 = (v.width - a) / 2 - z);
                  for (G = 0; G < I.length; G++) I[G].x1 += A2, I[G].x2 += A2, I[G].x3 += A2, I[G].x4 += A2, I[G].x5 && (I[G].x5 += A2, I[G].x6 += A2), H[G].textBlock.x += A2;
                }
                for (G = 0; G < I.length; G++) z = I[G], ta2(R2, z, t.fillOpacity), la2.push(z.y1);
                C(R2);
                F3 && t.visible && ("inside" === t.indexLabelPlacement || y.animationEnabled || q(R2), y.animationEnabled || s3());
                if (!F3) for (G = 0; G < w.length; G++) z = t.dataPointIds[G], A2 = {
                  id: z,
                  objectType: "dataPoint",
                  dataPointIndex: G,
                  dataSeriesIndex: 0,
                  funnelSection: I[t.reversed ? w.length - 1 - G : G]
                }, y._eventManager.objectMap[z] = A2;
                !y.animationEnabled && P ? h2(y, -1, 0) : y.animationEnabled && !y.animatedRender && h2(y, -1, 0);
                this.funnelPyramidClickHandler = function(a2) {
                  var b2 = -1;
                  if (!ja3 && !y.isAnimating && (m(a2.dataSeries.explodeOnClick) || a2.dataSeries.explodeOnClick) && (b2 = t.reversed ? w.length - 1 - a2.dataPointIndex : a2.dataPointIndex, 0 <= b2)) {
                    a2 = b2;
                    if ("funnel" === t.type || "pyramid" === t.type) t.reversed ? w[w.length - 1 - a2].exploded = w[w.length - 1 - a2].exploded ? false : true : w[a2].exploded = w[a2].exploded ? false : true;
                    h2(y, b2, 500);
                  }
                };
                return { source: R2, dest: this.plotArea.ctx, animationCallback: function(a2, b2) {
                  M.fadeInAnimation(a2, b2);
                  1 <= a2 && (h2(y, -1, 500), C(y.plotArea.ctx || y.ctx));
                }, easingFunction: M.easing.easeInQuad, animationBase: 0 };
              }
            }
          }
        };
        s2.prototype.requestAnimFrame = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60);
          };
        }();
        s2.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        s2.prototype.set = function(a, e, c) {
          c = "undefined" === typeof c ? true : c;
          "options" === a ? (this.options = e, c && this.render()) : s2.base.set.call(this, a, e, c);
        };
        s2.prototype.exportChart = function(a) {
          a = "undefined" === typeof a ? {} : a;
          var e = a.format ? a.format : "png", c = a.fileName ? a.fileName : this.exportFileName;
          if (a.toDataURL) return this.canvas.toDataURL("image/" + e);
          var b = this.canvas;
          if (b && e && c) {
            c = c + "." + e;
            a = "image/" + e;
            var b = b.toDataURL(a), d = false, f = document.createElement("a");
            f.download = c;
            f.href = b;
            if ("undefined" !== typeof Blob && new Blob()) {
              for (var n = b.replace(/^data:[a-z\/]*;base64,/, ""), n = atob(n), l = new ArrayBuffer(n.length), l = new Uint8Array(l), m2 = 0; m2 < n.length; m2++) l[m2] = n.charCodeAt(m2);
              e = new Blob([l.buffer], { type: "image/" + e });
              try {
                window.navigator.msSaveBlob(e, c), d = true;
              } catch (k) {
                f.dataset.downloadurl = [a, f.download, f.href].join(":"), f.href = window.URL.createObjectURL(e);
              }
            }
            if (!d) try {
              event = document.createEvent("MouseEvents"), event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), f.dispatchEvent ? f.dispatchEvent(event) : f.fireEvent && f.fireEvent("onclick");
            } catch (h2) {
              e = window.open(), e.document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), e.document.close();
            }
          }
        };
        s2.prototype.print = function() {
          var a = this.exportChart({ toDataURL: true }), e = document.createElement("iframe");
          e.setAttribute("class", "canvasjs-chart-print-frame");
          Q(
            e,
            { position: "absolute", width: "100%", border: "0px", margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" }
          );
          e.style.height = this.height + "px";
          this._canvasJSContainer.appendChild(e);
          var c = this, b = e.contentWindow || e.contentDocument.document || e.contentDocument;
          b.document.open();
          b.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
          b.document.body && b.document.body.style && (b.document.body.style.margin = "0px 0px 0px 0px", b.document.body.style.padding = "0px 0px 0px 0px");
          b.document.close();
          setTimeout(function() {
            b.focus();
            b.print();
            setTimeout(function() {
              c._canvasJSContainer.removeChild(e);
            }, 1e3);
          }, 500);
        };
        s2.prototype.getPercentAndTotal = function(a, e) {
          var c = null, b = null, d = c = null;
          if (0 <= a.type.indexOf("stacked")) b = 0, c = e.x.getTime ? e.x.getTime() : e.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], c = a.plotUnit.yAbsTotals[c], d = isNaN(e.y) ? 0 : 0 === c ? 0 : 100 * (e.y / c));
          else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
            for (c = b = 0; c < a.dataPoints.length; c++) isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
            d = isNaN(e.y) ? 0 : 100 * (e.y / b);
          }
          return { percent: d, total: b };
        };
        s2.prototype.replaceKeywordsWithValue = function(a, e, c, b, d) {
          var f = this;
          d = "undefined" === typeof d ? 0 : d;
          if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var n = "#percent", l = "#total", m2 = this.getPercentAndTotal(c, e), l = isNaN(m2.total) ? l : m2.total, n = isNaN(m2.percent) ? n : m2.percent;
            do {
              m2 = "";
              if (c.percentFormatString) m2 = c.percentFormatString;
              else {
                var m2 = "#,##0.", k = Math.max(Math.ceil(Math.log(1 / Math.abs(n)) / Math.LN10), 2);
                if (isNaN(k) || !isFinite(k)) k = 2;
                for (var h2 = 0; h2 < k; h2++) m2 += "#";
                c.percentFormatString = m2;
              }
              a = a.replace("#percent", fa(n, m2, f._cultureInfo));
              a = a.replace("#total", fa(l, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", f._cultureInfo));
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
          }
          return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a2) {
            if ('"' === a2[0] && '"' === a2[a2.length - 1] || "'" === a2[0] && "'" === a2[a2.length - 1]) return a2.slice(
              1,
              a2.length - 1
            );
            a2 = Ia(a2.slice(1, a2.length - 1));
            a2 = a2.replace("#index", d);
            var k2 = null;
            try {
              var g = a2.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
              g && 0 < g.length && (k2 = Ia(g[2]), a2 = Ia(g[1]));
            } catch (l2) {
            }
            g = null;
            if ("color" === a2) return "waterfall" === c.type ? e.color ? e.color : 0 < e.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[k2 % c._colorSet.length] : e.color ? e.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
            if (e.hasOwnProperty(a2)) g = e;
            else if (c.hasOwnProperty(a2)) g = c;
            else return "";
            g = g[a2];
            null !== k2 && (g = g[k2]);
            return "x" === a2 ? (c.axisX && "dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || e.x && e.x.getTime) && !c.axisX.logarithmic ? Ea(g, e.xValueFormatString ? e.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = f.axisX && f.axisX.autoValueFormatString ? f.axisX.autoValueFormatString : "DD MMM YY", f._cultureInfo) : fa(g, e.xValueFormatString ? e.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", f._cultureInfo) : "y" === a2 ? fa(g, e.yValueFormatString ? e.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = c.axisY && c.axisY.logarithmic && "number" === typeof g && 0 < g && (1e-7 > Math.abs(g) || 1e7 < Math.abs(g)) ? "0.##E+0" : "#,##0.########", f._cultureInfo) : "z" === a2 ? fa(g, e.zValueFormatString ? e.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", f._cultureInfo) : g;
          });
        };
        ra(F2, T);
        F2.prototype.setLayout = function() {
          var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, e = a.layoutManager.getFreeSpace(), c = null, b = 0, d = 0, f = 0, n = 0, l = this.markerMargin = this.chart.options.legend && !m(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
          this.height = 0;
          var h2 = [], k = [];
          if ("top" === this.verticalAlign || "bottom" === this.verticalAlign) this.orientation = "horizontal", c = this.verticalAlign, f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : e.width, n = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * e.height;
          else if ("center" === this.verticalAlign) {
            this.orientation = "vertical";
            if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign) c = this.horizontalAlign;
            f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * e.width;
            n = this.maxHeight = null !== this.maxHeight ? this.maxHeight : e.height;
          }
          this.errorMarkerColor = [];
          for (var q = 0; q < this.dataSeries.length; q++) {
            var p = this.dataSeries[q];
            if (p.dataPoints && p.dataPoints.length) {
              if ("pie" !== p.type && "doughnut" !== p.type && "funnel" !== p.type && "pyramid" !== p.type) {
                var r = p.legendMarkerType = p.legendMarkerType ? p.legendMarkerType : "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type && "scatter" !== p.type && "bubble" !== p.type || !p.markerType ? "error" === p.type && p._linkedSeries ? p._linkedSeries.legendMarkerType ? p._linkedSeries.legendMarkerType : U2.getDefaultLegendMarker(p._linkedSeries.type) : U2.getDefaultLegendMarker(p.type) : p.markerType, g = p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: p, dataPoint: null }) : p.name, s3 = p.legendMarkerColor = p.legendMarkerColor ? p.legendMarkerColor : p.markerColor ? p.markerColor : "error" === p.type ? m(p.whiskerColor) ? p._colorSet[0] : p.whiskerColor : p._colorSet[0], u2 = p.markerSize || "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type ? 0.75 * this.lineHeight : 0, y = p.legendMarkerBorderColor ? p.legendMarkerBorderColor : p.markerBorderColor, t = p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : p.markerBorderThickness ? Math.max(1, Math.round(0.2 * u2)) : 0;
                "error" === p.type && this.errorMarkerColor.push(s3);
                g = p.legendText = this.chart.replaceKeywordsWithValue(
                  g,
                  p.dataPoints[0],
                  p,
                  q
                );
                r = { markerType: r, markerColor: s3, text: g, textBlock: null, chartType: p.type, markerSize: u2, lineColor: p._colorSet[0], dataSeriesIndex: p.index, dataPointIndex: null, markerBorderColor: y, markerBorderThickness: t };
                h2.push(r);
              } else {
                m(p.options.legendText) && (p.legendText = p.options.legendText);
                for (var w = 0; w < p.dataPoints.length; w++) {
                  var v = p.dataPoints[w], r = v.legendMarkerType ? v.legendMarkerType : p.legendMarkerType ? p.legendMarkerType : U2.getDefaultLegendMarker(p.type), g = v.legendText ? v.legendText : v.name ? v.name : p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: p, dataPoint: v }) : v.name ? v.name : "DataPoint: " + (w + 1), s3 = v.legendMarkerColor ? v.legendMarkerColor : p.legendMarkerColor ? p.legendMarkerColor : v.color ? v.color : p.color ? p.color : p._colorSet[w % p._colorSet.length], u2 = 0.75 * this.lineHeight, y = v.legendMarkerBorderColor ? v.legendMarkerBorderColor : p.legendMarkerBorderColor ? p.legendMarkerBorderColor : v.markerBorderColor ? v.markerBorderColor : p.markerBorderColor, t = v.legendMarkerBorderThickness ? v.legendMarkerBorderThickness : p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : v.markerBorderThickness || p.markerBorderThickness ? Math.max(1, Math.round(0.2 * u2)) : 0, g = this.chart.replaceKeywordsWithValue(g, v, p, w), r = { markerType: r, markerColor: s3, text: g, textBlock: null, chartType: p.type, markerSize: u2, dataSeriesIndex: q, dataPointIndex: w, markerBorderColor: y, markerBorderThickness: t };
                  (v.showInLegend || p.showInLegend && false !== v.showInLegend) && h2.push(r);
                }
              }
              m(p.legendText) && (p.legendText = p.name);
            }
          }
          true === this.reversed && h2.reverse();
          if (0 < h2.length) {
            p = null;
            g = v = w = 0;
            v = null !== this.itemWidth ? null !== this.itemMaxWidth ? this.itemWidth = Math.min(this.itemWidth, this.itemMaxWidth, f) : this.itemMaxWidth = Math.min(this.itemWidth, f) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, f) : this.itemMaxWidth = f;
            u2 = 0 === u2 ? 0.75 * this.lineHeight : u2;
            v -= u2 + l;
            for (q = 0; q < h2.length; q++) {
              r = h2[q];
              s3 = v;
              if ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType) s3 -= 2 * 0.1 * this.lineHeight;
              if (!(0 >= n || "undefined" === typeof n || 0 >= s3 || "undefined" === typeof s3)) if ("horizontal" === this.orientation) {
                r.textBlock = new ma(this.ctx, { x: 0, y: 0, maxWidth: s3, maxHeight: this.itemWrap ? n : this.lineHeight, angle: 0, text: r.text, textAlign: this.itemTextAlign, fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" });
                r.textBlock.measureText();
                null !== this.itemWidth ? r.textBlock.width = this.itemWidth - (u2 + l + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0)) : q === h2.length - 1 && (this.itemWidth = r.textBlock.width + (u2 + l + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                if (!p || p.width + Math.round(r.textBlock.width + u2 + l + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0)) > f) p = { items: [], width: 0 }, k.push(p), this.height += g, g = 0;
                g = Math.max(g, r.textBlock.height ? r.textBlock.height : this.lineHeight);
                r.textBlock.x = p.width;
                r.textBlock.y = 0;
                p.width += Math.round(r.textBlock.width + u2 + l + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0));
                p.items.push(r);
                this.width = Math.max(p.width, this.width);
              } else r.textBlock = new ma(this.ctx, { x: 0, y: 0, maxWidth: v, maxHeight: true === this.itemWrap ? n : 1.5 * this.fontSize, angle: 0, text: r.text, textAlign: this.itemTextAlign, fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" }), r.textBlock.measureText(), null !== this.itemWidth ? r.textBlock.width = this.itemWidth - (u2 + l + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0)) : q === h2.length - 1 && (this.itemWidth = r.textBlock.width + (u2 + l + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < n - this.lineHeight ? (p = { items: [], width: 0 }, k.push(p)) : (p = k[w], w = (w + 1) % k.length), p && (this.height += r.textBlock.height ? r.textBlock.height : this.lineHeight, r.textBlock.x = p.width, r.textBlock.y = 0, p.width += Math.round(r.textBlock.width + u2 + l + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0)), p.items.push(r), this.width = Math.max(p.width, this.width));
            }
            this.height = false === this.itemWrap ? k.length * this.lineHeight : this.height + g;
            this.height = Math.min(n, this.height) >= this.lineHeight ? Math.min(n, this.height) : 0;
            this.width = Math.min(f, this.width);
          }
          "top" === this.verticalAlign ? (d = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 - this.width - 2 : e.x1 + e.width / 2 - this.width / 2, b = e.y1) : "center" === this.verticalAlign ? (d = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 - this.width - 2 : e.x1 + e.width / 2 - this.width / 2, b = e.y1 + e.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (d = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 - this.width - 2 : e.x1 + e.width / 2 - this.width / 2, b = e.y2 - this.height);
          this.items = h2;
          for (q = 0; q < this.items.length; q++) r = h2[q], r.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[r.id] = { id: r.id, objectType: "legendItem", legendItemIndex: q, dataSeriesIndex: r.dataSeriesIndex, dataPointIndex: r.dataPointIndex };
          this.markerSize = u2;
          this.rows = k;
          0 < h2.length && 0 < this.height && a.layoutManager.registerSpace(c, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
          this.bounds = { x1: d, y1: b, x2: d + this.width, y2: b + this.height };
        };
        F2.prototype.render = function() {
          var a = this.bounds.x1, e = this.bounds.y1, c = this.markerMargin, b = this.maxWidth, d = this.maxHeight, f = this.markerSize, n = this.rows;
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, e, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          for (var l = 0, m2 = 0; m2 < n.length; m2++) {
            for (var k = n[m2], h2 = 0, p = 0; p < k.items.length; p++) {
              var r = k.items[p], g = r.textBlock.x + a + (0 === p ? 0.2 * f : this.horizontalSpacing), s3 = e + l, u2 = g;
              this.chart.data[r.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(a, e, b, Math.max(d - d % this.lineHeight, 0));
              this.ctx.clip();
              if ("line" === r.chartType || "stepLine" === r.chartType || "spline" === r.chartType) this.ctx.strokeStyle = r.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(g - 0.1 * this.lineHeight, s3 + this.lineHeight / 2), this.ctx.lineTo(g + 0.85 * this.lineHeight, s3 + this.lineHeight / 2), this.ctx.stroke(), u2 -= 0.1 * this.lineHeight;
              if ("error" === r.chartType) {
                this.ctx.strokeStyle = this.errorMarkerColor[0];
                this.ctx.lineWidth = f / 8;
                this.ctx.beginPath();
                var y = g - 0.08 * this.lineHeight + 0.1 * this.lineHeight, t = s3 + 0.15 * this.lineHeight, w = 0.7 * this.lineHeight, v = w + 0.02 * this.lineHeight;
                this.ctx.moveTo(y, t);
                this.ctx.lineTo(y + w, t);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(y + w / 2, t);
                this.ctx.lineTo(y + w / 2, t + v);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(y, t + v);
                this.ctx.lineTo(y + w, t + v);
                this.ctx.stroke();
                this.errorMarkerColor.shift();
              }
              Y.drawMarker(
                g + f / 2,
                s3 + this.lineHeight / 2,
                this.ctx,
                r.markerType,
                "error" === r.chartType || "line" === r.chartType || "spline" === r.chartType ? r.markerSize / 2 : r.markerSize,
                r.markerColor,
                r.markerBorderColor,
                r.markerBorderThickness
              );
              r.textBlock.x = g + c + f;
              if ("line" === r.chartType || "stepLine" === r.chartType || "spline" === r.chartType) r.textBlock.x += 0.1 * this.lineHeight;
              r.textBlock.y = Math.round(s3 + this.lineHeight / 2);
              r.textBlock.render(true);
              this.ctx.restore();
              h2 = 0 < p ? Math.max(h2, r.textBlock.height ? r.textBlock.height : this.lineHeight) : r.textBlock.height ? r.textBlock.height : this.lineHeight;
              this.chart.data[r.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
              g = X(r.id);
              this.ghostCtx.fillStyle = g;
              this.ghostCtx.beginPath();
              this.ghostCtx.fillRect(
                u2,
                r.textBlock.y - this.lineHeight / 2,
                r.textBlock.x + r.textBlock.width - u2,
                r.textBlock.height ? r.textBlock.height : this.lineHeight
              );
              r.x1 = this.chart._eventManager.objectMap[r.id].x1 = u2;
              r.y1 = this.chart._eventManager.objectMap[r.id].y1 = r.textBlock.y - this.lineHeight / 2;
              r.x2 = this.chart._eventManager.objectMap[r.id].x2 = r.textBlock.x + r.textBlock.width;
              r.y2 = this.chart._eventManager.objectMap[r.id].y2 = r.textBlock.y + (r.textBlock.height ? r.textBlock.height : this.lineHeight) - this.lineHeight / 2;
            }
            l += h2;
          }
        };
        ra(U2, T);
        U2.prototype.getDefaultAxisPlacement = function() {
          var a = this.type;
          if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
          if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
          if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
          "error" !== a && window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        U2.getDefaultLegendMarker = function(a) {
          if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "square";
          if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a) return "circle";
          if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
          if ("error" === a) return "none";
          window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        U2.prototype.getDataPointAtX = function(a, e, c) {
          if (!this.dataPoints || 0 === this.dataPoints.length) return null;
          var b = { dataPoint: null, distance: Infinity, index: NaN }, d = null, f = 0, n = 0, l = 1, h2 = Infinity, k = 0, q = 0, p = 0;
          "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (p = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), p = 1 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (p = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
          for (; ; ) {
            n = 0 < l ? p + f : p - f;
            if (0 <= n && n < this.dataPoints.length) {
              var d = this.dataPoints[n], r = this.axisX && this.axisX.logarithmic ? d.x > a ? d.x / a : a / d.x : Math.abs(d.x - a);
              r < b.distance && (m(c) || c && !m(d.y)) && (b.dataPoint = d, b.distance = r, b.index = n);
              d = r;
              d <= h2 ? h2 = d : 0 < l ? k++ : q++;
              if (1e3 < k && 1e3 < q) break;
            } else if (0 > p - f && p + f >= this.dataPoints.length) break;
            -1 === l ? (f++, l = 1) : l = -1;
          }
          return e || (b.dataPoint.x.getTime ? b.dataPoint.x.getTime() : b.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? e && null !== b.dataPoint ? b : null : b;
        };
        U2.prototype.getDataPointAtXY = function(a, e, c) {
          if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || e < this.chart.plotArea.y1 || e > this.chart.plotArea.y2) return null;
          c = c || false;
          var b = [], d = 0, f = 0, n = 1, l = false, h2 = Infinity, k = 0, q = 0, p = 0;
          if ("none" !== this.chart.plotInfo.axisPlacement) if (p = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: e }), this.axisX.logarithmic) var r = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), p = 1 < r ? Math.min(Math.max(
            (this.dataPoints.length - 1) / r * Math.log(p / this.dataPoints[0].x) >> 0,
            0
          ), this.dataPoints.length) : 0;
          else r = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < r ? Math.min(Math.max((this.dataPoints.length - 1) / r * (p - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
          for (; ; ) {
            f = 0 < n ? p + d : p - d;
            if (0 <= f && f < this.dataPoints.length) {
              var r = this.chart._eventManager.objectMap[this.dataPointIds[f]], g = this.dataPoints[f], s3 = null;
              if (r) {
                switch (this.type) {
                  case "column":
                  case "stackedColumn":
                  case "stackedColumn100":
                  case "bar":
                  case "stackedBar":
                  case "stackedBar100":
                  case "rangeColumn":
                  case "rangeBar":
                  case "waterfall":
                  case "error":
                    a >= r.x1 && (a <= r.x2 && e >= r.y1 && e <= r.y2) && (b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(r.x1 - a), Math.abs(r.x2 - a), Math.abs(r.y1 - e), Math.abs(r.y2 - e)) }), l = true);
                    break;
                  case "line":
                  case "stepLine":
                  case "spline":
                  case "area":
                  case "stepArea":
                  case "stackedArea":
                  case "stackedArea100":
                  case "splineArea":
                  case "scatter":
                    var u2 = W("markerSize", g, this) || 4, y = c ? 20 : u2, s3 = Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - e, 2));
                    s3 <= y && b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: s3 });
                    r = Math.abs(r.x1 - a);
                    r <= h2 ? h2 = r : 0 < n ? k++ : q++;
                    s3 <= u2 / 2 && (l = true);
                    break;
                  case "rangeArea":
                  case "rangeSplineArea":
                    u2 = W("markerSize", g, this) || 4;
                    y = c ? 20 : u2;
                    s3 = Math.min(Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - e, 2)), Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y2 - e, 2)));
                    s3 <= y && b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: s3 });
                    r = Math.abs(r.x1 - a);
                    r <= h2 ? h2 = r : 0 < n ? k++ : q++;
                    s3 <= u2 / 2 && (l = true);
                    break;
                  case "bubble":
                    u2 = r.size;
                    s3 = Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - e, 2));
                    s3 <= u2 / 2 && (b.push({
                      dataPoint: g,
                      dataPointIndex: f,
                      dataSeries: this,
                      distance: s3
                    }), l = true);
                    break;
                  case "pie":
                  case "doughnut":
                    u2 = r.center;
                    y = "doughnut" === this.type ? r.percentInnerRadius * r.radius : 0;
                    s3 = Math.sqrt(Math.pow(u2.x - a, 2) + Math.pow(u2.y - e, 2));
                    s3 < r.radius && s3 > y && (s3 = Math.atan2(e - u2.y, a - u2.x), 0 > s3 && (s3 += 2 * Math.PI), s3 = Number(((180 * (s3 / Math.PI) % 360 + 360) % 360).toFixed(12)), u2 = Number(((180 * (r.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), y = Number(((180 * (r.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === y && 1 < r.endAngle && (y = 360), u2 >= y && (0 !== g.y && !m(g.y)) && (y += 360, s3 < u2 && (s3 += 360)), s3 > u2 && s3 < y && (b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: 0 }), l = true));
                    break;
                  case "funnel":
                  case "pyramid":
                    s3 = r.funnelSection;
                    e >= s3.y1 && e < s3.y4 && (s3.y6 ? e >= s3.y6 ? (f = s3.x6 + (s3.x5 - s3.x6) / (s3.y5 - s3.y6) * (e - s3.y6), s3 = s3.x3 + (s3.x4 - s3.x3) / (s3.y4 - s3.y3) * (e - s3.y3)) : (f = s3.x1 + (s3.x6 - s3.x1) / (s3.y6 - s3.y1) * (e - s3.y1), s3 = s3.x2 + (s3.x3 - s3.x2) / (s3.y3 - s3.y2) * (e - s3.y2)) : (f = s3.x1 + (s3.x4 - s3.x1) / (s3.y4 - s3.y1) * (e - s3.y1), s3 = s3.x2 + (s3.x3 - s3.x2) / (s3.y3 - s3.y2) * (e - s3.y2)), a > f && a < s3 && (b.push({ dataPoint: g, dataPointIndex: r.dataPointIndex, dataSeries: this, distance: 0 }), l = true));
                    break;
                  case "boxAndWhisker":
                    if (a >= r.x1 - r.borderThickness / 2 && a <= r.x2 + r.borderThickness / 2 && e >= r.y4 - r.borderThickness / 2 && e <= r.y1 + r.borderThickness / 2 || Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness && e >= r.y1 && e <= r.y4) b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(r.x1 - a), Math.abs(r.x2 - a), Math.abs(r.y2 - e), Math.abs(r.y3 - e)) }), l = true;
                    break;
                  case "candlestick":
                    if (a >= r.x1 - r.borderThickness / 2 && a <= r.x2 + r.borderThickness / 2 && e >= r.y2 - r.borderThickness / 2 && e <= r.y3 + r.borderThickness / 2 || Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness && e >= r.y1 && e <= r.y4) b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(r.x1 - a), Math.abs(r.x2 - a), Math.abs(r.y2 - e), Math.abs(r.y3 - e)) }), l = true;
                    break;
                  case "ohlc":
                    if (Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness && e >= r.y2 && e <= r.y3 || a >= r.x1 && a <= (r.x2 + r.x1) / 2 && e >= r.y1 - r.borderThickness / 2 && e <= r.y1 + r.borderThickness / 2 || a >= (r.x1 + r.x2) / 2 && a <= r.x2 && e >= r.y4 - r.borderThickness / 2 && e <= r.y4 + r.borderThickness / 2) b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(r.x1 - a), Math.abs(r.x2 - a), Math.abs(r.y2 - e), Math.abs(r.y3 - e)) }), l = true;
                }
                if (l || 1e3 < k && 1e3 < q) break;
              }
            } else if (0 > p - d && p + d >= this.dataPoints.length) break;
            -1 === n ? (d++, n = 1) : n = -1;
          }
          a = null;
          for (e = 0; e < b.length; e++) a ? b[e].distance <= a.distance && (a = b[e]) : a = b[e];
          return a;
        };
        U2.prototype.getMarkerProperties = function(a, e, c, b) {
          var d = this.dataPoints, f = d[a].markerColor ? d[a].markerColor : this.markerColor ? this.markerColor : d[a].color ? d[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length], n = d[a].markerBorderColor ? d[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null, l = m(d[a].markerBorderThickness) ? this.markerBorderThickness ? this.markerBorderThickness : null : d[a].markerBorderThickness, h2 = d[a].markerType ? d[a].markerType : this.markerType;
          a = m(d[a].markerSize) ? this.markerSize : d[a].markerSize;
          return { x: e, y: c, ctx: b, type: h2, size: a, color: f, borderColor: n, borderThickness: l };
        };
        ra(A, T);
        A.prototype.createExtraLabelsForLog = function(a) {
          a = (a || 0) + 1;
          if (!(5 < a)) {
            var e = this.logLabelValues[0] || this.intervalStartPosition;
            if (Math.log(this.range) / Math.log(e / this.viewportMinimum) < this.noTicks - 1) {
              for (var c = A.getNiceNumber((e - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), true), b = Math.ceil(this.viewportMinimum / c) * c; b < e; b += c) b < this.viewportMinimum || this.logLabelValues.push(b);
              this.logLabelValues.sort(Ua);
              this.createExtraLabelsForLog(a);
            }
          }
        };
        A.prototype.createLabels = function() {
          var a, e, c = 0, b = 0, d, f = 0, n = 0, l = 0, b = this.interval, h2 = 0, k, q = 0.6 * this.chart.height, p;
          a = false;
          var r = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], g = r.length ? m(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
          if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
            d = this.viewportMaximum;
            if (this.labels && m(this.options.interval)) {
              a = Math.ceil(b);
              l = Math.ceil(this.intervalStartPosition);
              b = false;
              for (c = l; c < this.viewportMaximum; c += a) if (this.labels[c]) b = true;
              else {
                b = false;
                break;
              }
              b && (this.interval = a, this.intervalStartPosition = l);
            }
            if (this.logarithmic && !this.equidistantInterval) for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, l = g; b < this.logLabelValues.length; b++) if (c = this.logLabelValues[b], c < this.viewportMinimum) b++;
            else {
              for (; l < r.length && c > r[l].endValue; l++) ;
              a = l < r.length && c >= r[l].startValue && c <= r[l].endValue;
              p = c;
              a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: p, label: this.labels[p] ? this.labels[p] : null }) : "axisX" === this.type && this.labels[p] ? this.labels[p] : fa(p, this.valueFormatString, this.chart._cultureInfo), a = new ma(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: f,
                maxHeight: n,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                cornerRadius: this.labelCornerRadius,
                textAlign: this.labelTextAlign,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle",
                borderThickness: this.labelBorderThickness,
                padding: this.labelPadding
              }), this._labels.push({ position: p, textBlock: a, effectiveHeight: null }));
            }
            l = g;
            for (c = this.intervalStartPosition; c <= d; c = parseFloat(this.logarithmic && this.equidistantInterval ? 1e-12 > c * Math.pow(this.logarithmBase, this.interval) ? c * Math.pow(this.logarithmBase, this.interval) : (c * Math.pow(this.logarithmBase, this.interval)).toFixed(12) : 1e-12 > this.interval ? c + this.interval : (c + this.interval).toFixed(12))) {
              for (; l < r.length && c > r[l].endValue; l++) ;
              a = l < r.length && c >= r[l].startValue && c <= r[l].endValue;
              p = c;
              a ? (a = Math.floor((r[l].endValue - c) / this.interval), c = parseFloat(1e-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval * a) : c + this.interval * a : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval * a) : c + this.interval * a).toFixed(12))) : (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: p, label: this.labels[p] ? this.labels[p] : null }) : "axisX" === this.type && this.labels[p] ? this.labels[p] : fa(p, this.valueFormatString, this.chart._cultureInfo), a = new ma(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: f,
                maxHeight: n,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                textAlign: this.labelTextAlign,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle",
                padding: this.labelPadding
              }), this._labels.push({ position: p, textBlock: a, effectiveHeight: null }));
            }
          } else for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), d = Ta(new Date(this.viewportMaximum), this.interval, this.intervalType), l = g, c = this.intervalStartPosition; c < d; Ta(c, b, this.intervalType)) {
            for (g = c.getTime(); l < r.length && g > r[l].endValue; l++) ;
            p = g;
            (a = l < r.length && g >= r[l].startValue && g <= r[l].endValue) ? (a = b, 0 <= Ba("second minute hour day week month year".split(" ")).indexOf(this.intervalType) && (a *= R[this.intervalType + "Duration"]), Ta(c, a * Math.floor((r[l].endValue - g) / a), "millisecond")) : (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: new Date(p), label: this.labels[p] ? this.labels[p] : null }) : "axisX" === this.type && this.labels[p] ? this.labels[p] : Ea(p, this.valueFormatString, this.chart._cultureInfo), a = new ma(this.ctx, {
              x: 0,
              y: 0,
              maxWidth: f,
              backgroundColor: this.labelBackgroundColor,
              borderColor: this.labelBorderColor,
              borderThickness: this.labelBorderThickness,
              cornerRadius: this.labelCornerRadius,
              maxHeight: n,
              angle: this.labelAngle,
              text: this.prefix + a + this.suffix,
              textAlign: this.labelTextAlign,
              fontSize: this.labelFontSize,
              fontFamily: this.labelFontFamily,
              fontWeight: this.labelFontWeight,
              fontColor: this.labelFontColor,
              fontStyle: this.labelFontStyle,
              textBaseline: "middle",
              padding: this.labelPadding
            }), this._labels.push({ position: p, textBlock: a, effectiveHeight: null, breaksLabelType: void 0 }));
          }
          if ("bottom" === this._position || "top" === this._position) m(this.conversionParameters) && this.calculateValueToPixelConversionParameters(), c = this.conversionParameters && this.conversionParameters.range ? this.conversionParameters.range : this.range, h2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(c) / Math.log(this.logarithmBase) : Math.abs(c)) * R[this.intervalType + "Duration"] * this.interval, f = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (n = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize + ("object" === typeof this.labelPadding ? (this.labelPadding.top || 0) + (this.labelPadding.bottom || 0) : 2 * this.labelPadding));
          else if ("left" === this._position || "right" === this._position) h2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * R[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (f = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), n = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
          for (b = 0; b < this._labels.length; b++) {
            a = this._labels[b].textBlock;
            !this.labelAutoFit && 0 >= f && (f = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth);
            a.maxWidth = f;
            !this.labelAutoFit && 0 >= n && (n = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize + ("object" === typeof this.labelPadding ? (this.labelPadding.top || 0) + (this.labelPadding.bottom || 0) : 2 * this.labelPadding));
            a.maxHeight = n;
            var s3 = a.measureText();
            k = s3.height;
          }
          d = [];
          b = r = 0;
          if (this.labelAutoFit || this.options.labelAutoFit) {
            if (m(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position) if (f = Math.floor(0.9 * h2), g = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
              this.sessionVariables.labelFontSize = this.labelFontSize;
              this.sessionVariables.labelMaxWidth = f;
              this.sessionVariables.labelMaxHeight = n;
              this.sessionVariables.labelAngle = this.labelAngle;
              this.sessionVariables.labelWrap = this.labelWrap;
              for (c = 0; c < this._labels.length; c++) if (!this._labels[c].breaksLabelType) {
                a = this._labels[c].textBlock;
                for (var x3, l = a.text.split(" "), b = 0; b < l.length; b++) p = l[b], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, p = this.ctx.measureText(p), p.width > g && (x3 = c, g = p.width);
              }
              c = 0;
              for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++) if (!this._labels[c].breaksLabelType) {
                a = this._labels[c].textBlock;
                s3 = a.measureText();
                for (l = c + 1; l < this._labels.length; l++) if (!this._labels[l].breaksLabelType) {
                  e = this._labels[l].textBlock;
                  e = e.measureText();
                  break;
                }
                d.push(a.height);
                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, d);
                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                l = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (n - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                if (m(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle) if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? n : Math.min((l - f * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), l), p = (q - (k + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !m(this.options.labelWrap)) this.labelWrap ? m(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, g), p), this.sessionVariables.labelWrap = this.labelWrap, e && s3.width + e.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle) : m(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelMaxWidth = f, e && s3.width + e.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelWrap = this.labelWrap);
                else {
                  if (m(this.options.labelWrap)) {
                    if (!m(this.options.labelMaxWidth)) this.options.labelMaxWidth < f ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = l) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = n);
                    else if (!m(e)) {
                      if (l = s3.width + e.width >> 0, b = this.labelFontSize, g < f) l - 2 * f > r && (r = l - 2 * f, l >= 2 * f && l < 2.2 * f ? (this.sessionVariables.labelMaxWidth = f, m(this.options.labelFontSize) && 12 < b && (b = Math.floor(12 / 13 * b), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? b : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : l >= 2.2 * f && l < 2.8 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p, this.sessionVariables.labelFontSize = b) : l >= 2.8 * f && l < 3.2 * f ? (this.sessionVariables.labelMaxWidth = Math.max(f, g), this.sessionVariables.labelWrap = true, m(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? b : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : l >= 3.2 * f && l < 3.6 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = p, this.sessionVariables.labelFontSize = this.labelFontSize) : l > 3.6 * f && l < 5 * f ? (m(this.options.labelFontSize) && 12 < b && (b = Math.floor(12 / 13 * b), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? b : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p) : l > 5 * f && (this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelFontSize = b, this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelAngle = this.labelAngle));
                      else if (x3 === c && (0 === x3 && g + this._labels[x3 + 1].textBlock.measureText().width - 2 * f > r || x3 === this._labels.length - 1 && g + this._labels[x3 - 1].textBlock.measureText().width - 2 * f > r || 0 < x3 && x3 < this._labels.length - 1 && g + this._labels[x3 + 1].textBlock.measureText().width - 2 * f > r && g + this._labels[x3 - 1].textBlock.measureText().width - 2 * f > r)) r = 0 === x3 ? g + this._labels[x3 + 1].textBlock.measureText().width - 2 * f : g + this._labels[x3 - 1].textBlock.measureText().width - 2 * f, this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? b : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p;
                      else if (0 === r) for (this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? b : this.options.labelFontSize, this.sessionVariables.labelWrap = true, b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, g), p), s3 = a.measureText(), b < this._labels.length - 1 && (l = b + 1, e = this._labels[l].textBlock, e.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, g), p), e = e.measureText(), s3.width + e.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25));
                    }
                  }
                }
                else (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? n : Math.min((l - f * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), l), p = 0 != this.labelAngle ? (q - (k + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : f, this.sessionVariables.labelMaxHeight = this.labelWrap ? (q - p * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, m(this.options.labelWrap)) ? m(this.options.labelWrap) && (this.labelWrap && !m(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : p, this.sessionVariables.labelMaxHeight = n) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = p, this.sessionVariables.labelMaxHeight = Math.max(l, 0.9 * h2), this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : p) : (m(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : p, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = n);
              }
              this.sessionVariables.labelMaxHeight = Math.max(this.sessionVariables.labelMaxHeight, 1.5 * this.labelFontSize);
              for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
            } else for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = m(this.options.labelMaxWidth) ? m(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = m(this.options.labelFontSize) ? m(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = m(this.options.labelAngle) ? m(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = m(this.options.labelWrap) ? m(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = m(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = n : this.sessionVariables.labelMaxHeight, a.measureText();
            else if ("left" === this._position || "right" === this._position) if (f = m(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, n = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
              this.sessionVariables.labelFontSize = this.labelFontSize;
              this.sessionVariables.labelMaxWidth = f;
              this.sessionVariables.labelMaxHeight = n;
              this.sessionVariables.labelAngle = m(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
              this.sessionVariables.labelWrap = this.labelWrap;
              for (c = 0; c < this._labels.length; c++) if (!this._labels[c].breaksLabelType) {
                a = this._labels[c].textBlock;
                s3 = a.measureText();
                for (l = c + 1; l < this._labels.length; l++) if (!this._labels[l].breaksLabelType) {
                  e = this._labels[l].textBlock;
                  e = e.measureText();
                  break;
                }
                d.push(a.height);
                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, d);
                l = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (n - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                m(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? m(this.options.labelWrap) ? m(this.options.labelWrap) && (m(this.options.labelMaxWidth) ? m(e) || (k = s3.height + e.height >> 0, k - 2 * n > b && (b = k - 2 * n, k >= 2 * n && k < 2.4 * n ? (m(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : k >= 2.4 * n && k < 2.8 * n ? (this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = true) : k >= 2.8 * n && k < 3.2 * n ? (this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelWrap = true, m(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = m(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : k >= 3.2 * n && k < 3.6 * n ? (this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelWrap = true, this.sessionVariables.labelFontSize = this.labelFontSize) : k > 3.6 * n && k < 10 * n ? (m(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelAngle = m(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : k > 10 * n && k < 50 * n && (m(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelAngle = m(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = n) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? f : Math.min((l - n * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), n), m(this.options.labelWrap)) ? m(this.options.labelWrap) && (this.labelWrap && !m(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = l) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? n : l, m(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? n : l, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = f) : (this.sessionVariables.labelMaxHeight = n, m(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap);
              }
              for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
            } else for (m(this.chart.stockChart) || this.chart.isNavigator || (this.sessionVariables.labelMaxHeight = n), c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = m(this.options.labelMaxWidth) ? m(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = m(this.options.labelFontSize) ? m(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = m(this.options.labelAngle) ? m(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = m(this.options.labelWrap) ? m(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = m(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = n : this.sessionVariables.labelMaxHeight, a.measureText();
          }
          for (c = 0; c < this.stripLines.length; c++) {
            var n = this.stripLines[c], y;
            n.labelFontSize = "outside" === n.labelPlacement && m(n.options.labelFontSize) ? this.labelFontSize : n.labelFontSize;
            n.labelFontFamily = "outside" === n.labelPlacement && m(n.options.labelFontFamily) ? this.labelFontFamily : n.labelFontFamily;
            n.labelFontWeight = "outside" === n.labelPlacement && m(n.options.labelFontWeight) ? this.labelFontWeight : n.labelFontWeight;
            n.labelFontStyle = "outside" === n.labelPlacement && m(n.options.labelFontStyle) ? this.labelFontStyle : n.labelFontStyle;
            if ("outside" === n.labelPlacement) {
              e = this.sessionVariables.labelMaxWidth;
              if ("bottom" === this._position || "top" === this._position) m(n.options.labelWrap) && !m(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = n.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * n.labelFontSize + ("object" === typeof n.labelPadding ? (n.labelPadding.top || 0) + (n.labelPadding.bottom || 0) : 2 * n.labelPadding);
              if ("left" === this._position || "right" === this._position) m(n.options.labelWrap) && !m(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = n.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * n.labelFontSize + ("object" === typeof n.labelPadding ? (n.labelPadding.top || 0) + (n.labelPadding.bottom || 0) : 2 * n.labelPadding);
              m(n.labelBackgroundColor) && (n.labelBackgroundColor = "#EEEEEE");
            } else e = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, y = m(n.options.labelWrap) || n.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * n.labelFontSize + ("object" === typeof n.labelPadding ? (n.labelPadding.top || 0) + (n.labelPadding.bottom || 0) : 2 * n.labelPadding), m(n.labelBackgroundColor) && (m(n.startValue) && 0 !== n.startValue ? n.labelBackgroundColor = u ? "transparent" : null : n.labelBackgroundColor = "#EEEEEE");
            a = new ma(this.ctx, {
              x: 0,
              y: 0,
              backgroundColor: n.labelBackgroundColor,
              borderColor: n.labelBorderColor,
              borderThickness: n.labelBorderThickness,
              cornerRadius: n.labelCornerRadius,
              maxWidth: n.options.labelMaxWidth ? n.options.labelMaxWidth : e,
              maxHeight: y,
              angle: this.labelAngle,
              text: n.labelFormatter ? n.labelFormatter({ chart: this.chart, axis: this, stripLine: n.options }) : n.label,
              textAlign: n.labelTextAlign,
              fontSize: n.labelFontSize,
              fontFamily: n.labelFontFamily,
              fontWeight: n.labelFontWeight,
              fontColor: n.labelFontColor || n.color,
              fontStyle: n.labelFontStyle,
              textBaseline: "middle",
              padding: n.labelPadding
            });
            this._stripLineLabels.push({ position: n.value, textBlock: a, effectiveHeight: null, stripLine: n });
          }
        };
        A.prototype.createLabelsAndCalculateWidth = function() {
          var a = 0, e = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var c = 0, b = [], d = this.chart.isNavigator ? 0 : 5;
          this.labelEffectiveWidth = m(this.labelEffectiveWidth) ? 0 : this.labelEffectiveWidth;
          if ("left" === this._position || "right" === this._position) {
            this.createLabels();
            for (e = 0; e < this._labels.length; e++) if (!(this._labels[e].position < this.viewportMinimum || this._labels[e].position > this.viewportMaximum)) {
              var f = this._labels[e].textBlock, f = f.measureText(), n = 0, n = 0 === this.labelAngle ? f.width : f.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + f.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
              a <= n && (this.labelEffectiveWidth = a = n);
              this._labels[e].effectiveWidth = n;
            }
            for (e = 0; e < this._stripLineLabels.length; e++) "outside" === this._stripLineLabels[e].stripLine.labelPlacement && (this._stripLineLabels[e].stripLine.value >= this.viewportMinimum && this._stripLineLabels[e].stripLine.value <= this.viewportMaximum) && (f = this._stripLineLabels[e].textBlock, f = f.measureText(), n = 0 === this.labelAngle ? f.width : f.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + f.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c = Math.max(c, this._stripLineLabels[e].stripLine.tickLength), "inside" === this.labelPlacement && (a -= 0 < b.length ? Math.max.apply(null, b) : 0, a += Math.max(n, 0 < b.length ? Math.max.apply(
              null,
              b
            ) : n)), a <= n && (a = n), this.stripLineLabelEffectiveWidth = this._stripLineLabels[e].effectiveWidth = n, b.push(n));
            "inside" === this.labelPlacement && (a += d);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? c + this.tickLength : Math.max(c, this.tickLength)) + d;
        };
        A.prototype.createLabelsAndCalculateHeight = function() {
          var a = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var e = 0, c, b = 0, d = this.chart.isNavigator ? 0 : "bottom" === this._position && "inside" === this.labelPlacement || "top" === this._position && "outside" === this.labelPlacement ? 2 : 5;
          this.labelEffectiveHeight = m(this.labelEffectiveHeight) ? 0 : this.labelEffectiveHeight;
          var f = [];
          if ("bottom" === this._position || "top" === this._position) {
            this.createLabels();
            for (b = 0; b < this._labels.length; b++) if (!(this._labels[b].position < this.viewportMinimum || this._labels[b].position > this.viewportMaximum)) {
              c = this._labels[b].textBlock;
              c = c.measureText();
              var n = 0, n = 0 === this.labelAngle ? c.height : c.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + c.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
              a <= n && (this.labelEffectiveHeight = a = n);
              this._labels[b].effectiveHeight = n;
            }
            for (b = 0; b < this._stripLineLabels.length; b++) "outside" === this._stripLineLabels[b].stripLine.labelPlacement && (this._stripLineLabels[b].stripLine.value >= this.viewportMinimum && this._stripLineLabels[b].stripLine.value <= this.viewportMaximum) && (c = this._stripLineLabels[b].textBlock, c = c.measureText(), n = 0 === this.labelAngle ? c.height : c.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + c.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), e = Math.max(e, this._stripLineLabels[b].stripLine.tickLength), "inside" === this.labelPlacement && (a -= 0 < f.length ? Math.max.apply(null, f) : 0, a += Math.max(n, 0 < f.length ? Math.max.apply(null, f) : n)), a <= n && (a = n), this.stripLineLabelEffectiveHeight = this._stripLineLabels[b].effectiveHeight = n, f.push(n));
            "inside" === this.labelPlacement && (a += d);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? e + this.tickLength : Math.max(e, this.tickLength)) + d;
        };
        A.setLayout = function(a, e, c, b, d, f) {
          var n, l, h2, k, q = a[0] ? a[0].chart : e[0].chart, p = q.isNavigator ? 0 : 10, r = q._axes;
          if (a && 0 < a.length) for (var g = 0; g < a.length; g++) a[g] && a[g].calculateAxisParameters();
          if (e && 0 < e.length) for (g = 0; g < e.length; g++) e[g].calculateAxisParameters();
          if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateAxisParameters();
          if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateAxisParameters();
          for (g = 0; g < r.length; g++) if (r[g] && r[g].scaleBreaks && r[g].scaleBreaks._appliedBreaks.length) for (var s3 = r[g].scaleBreaks._appliedBreaks, u2 = 0; u2 < s3.length && !(s3[u2].startValue > r[g].viewportMaximum); u2++) s3[u2].endValue < r[g].viewportMinimum || (m(r[g].scaleBreaks.firstBreakIndex) && (r[g].scaleBreaks.firstBreakIndex = u2), s3[u2].startValue >= r[g].viewPortMinimum && (r[g].scaleBreaks.lastBreakIndex = u2));
          for (var y = u2 = 0, t = 0, w = 0, v = 0, x3 = 0, z = 0, A2, B2, E = l = 0, F3, J2, M2, s3 = F3 = J2 = M2 = false, g = 0; g < r.length; g++) r[g] && r[g].title && (r[g]._titleTextBlock = new ma(r[g].ctx, {
            text: r[g].title,
            fontSize: r[g].titleFontSize,
            fontFamily: r[g].titleFontFamily,
            fontWeight: r[g].titleFontWeight,
            fontColor: r[g].titleFontColor,
            fontStyle: r[g].titleFontStyle,
            borderColor: r[g].titleBorderColor,
            borderThickness: r[g].titleBorderThickness,
            backgroundColor: r[g].titleBackgroundColor,
            cornerRadius: r[g].titleCornerRadius,
            textBaseline: "middle",
            textAlign: r[g].titleTextAlign,
            padding: r[g].titlePadding
          }));
          for (g = 0; g < r.length; g++) if (r[g].title) {
            var K2 = 1.5 * r[g].titleFontSize + ("object" === typeof r[g].titlePadding ? (r[g].titlePadding.top || 0) + (r[g].titlePadding.bottom || 0) : 2 * r[g].titlePadding);
            r[g]._titleTextBlock.maxWidth = r[g].titleMaxWidth || f.height;
            r[g]._titleTextBlock.maxHeight = r[g].titleWrap ? 0.8 * f.width : Math.min(K2, 0.8 * f.width);
            switch (r[g]._position) {
              case "left":
                r[g]._titleTextBlock.angle = -90;
                break;
              case "right":
                r[g]._titleTextBlock.angle = 90;
                break;
              default:
                r[g]._titleTextBlock.maxWidth = r[g].titleMaxWidth || f.width, r[g]._titleTextBlock.maxHeight = r[g].titleWrap ? 0.8 * f.height : Math.min(K2, 0.8 * f.height), r[g]._titleTextBlock.angle = 0;
            }
          }
          if ("normal" === d) {
            for (var w = [], v = [], x3 = [], z = [], Q2 = [], R2 = [], T2 = [], G = []; 4 > u2; ) {
              var X2 = 0, V = 0, S2 = 0, U3 = 0, $ = K2 = d = 0, aa2 = 0, W2 = 0, Y2 = 0, ca3 = n = 0;
              if (c && 0 < c.length) for (x3 = [], g = n = 0; g < c.length; g++) x3.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateWidth() : 0)), n += x3[g], $ += c[g] && !q.isNavigator ? c[g].margin : 0;
              else x3.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
              T2.push(x3);
              if (b && 0 < b.length) for (z = [], g = ca3 = 0; g < b.length; g++) z.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateWidth() : 0)), ca3 += z[g], aa2 += b[g] ? b[g].margin : 0;
              else z.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
              G.push(z);
              n = Math.round(f.x1 + n + $ - (c[0] ? ("inside" === c[0].labelPlacement ? c[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === c[0].tickPlacement ? c[0].tickLength : 0) : 0)) + (!c.length || "inside" !== c[c.length - 1].labelPlacement || c[c.length - 1].title || c[c.length - 1].stripLineLabelEffectiveWidth || q.isNavigator ? 0 : 5);
              h2 = Math.round(Math.min(f.x2 - ca3 - aa2 + (b[0] ? ("inside" === b[0].labelPlacement ? b[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === b[0].tickPlacement ? b[0].tickLength : 0) : 0), q.width - p));
              if (a && 0 < a.length) for (w = [], g = W2 = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates = {}), a[g].lineCoordinates.width = Math.abs(h2 - n), a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.width ? a[g].titleMaxWidth : a[g].lineCoordinates.width), w.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateHeight() : 0)), W2 += w[g], d += a[g] && !q.isNavigator ? a[g].margin : 0;
              else w.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
              Q2.push(w);
              if (e && 0 < e.length) for (v = [], g = Y2 = 0; g < e.length; g++) e[g] && (e[g].lineCoordinates = {}), e[g].lineCoordinates.width = Math.abs(h2 - n), e[g].title && (e[g]._titleTextBlock.maxWidth = 0 < e[g].titleMaxWidth && e[g].titleMaxWidth < e[g].lineCoordinates.width ? e[g].titleMaxWidth : e[g].lineCoordinates.width), v.push(Math.ceil(e[g] ? e[g].createLabelsAndCalculateHeight() : 0)), Y2 += v[g], K2 += e[g] && !q.isNavigator ? e[g].margin : 0;
              else v.push(Math.ceil(e[0] ? e[0].createLabelsAndCalculateHeight() : 0));
              R2.push(v);
              if (a && 0 < a.length) {
                for (g = 0; g < a.length; g++) {
                  if (a[g]) {
                    a[g].lineCoordinates.x1 = n;
                    h2 = Math.round(Math.min(f.x2 - ca3 - aa2 + (b[0] ? ("inside" === b[0].labelPlacement ? b[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === b[0].tickPlacement ? b[0].tickLength : 0) : 0) - (!b.length || "inside" !== b[b.length - 1].labelPlacement || b[b.length - 1].title || b[b.length - 1].stripLineLabelEffectiveWidth || q.isNavigator ? 0 : 5), q.width - p));
                    if (a[g]._labels && 1 < a[g]._labels.length) {
                      var I = l = 0;
                      l = a[g]._labels[1];
                      I = "dateTime" === a[g].valueType ? a[g]._labels[a[g]._labels.length - 2] : a[g]._labels[a[g]._labels.length - 1];
                      y = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle));
                      t = I.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(I.textBlock.angle)) + I.textBlock.height * Math.sin(Math.PI / 180 * Math.abs(I.textBlock.angle));
                    }
                    !a[g] || (!a[g].labelAutoFit || m(A2) || m(B2) || q.isNavigator || q.stockChart) || (l = 0, 0 < a[g].labelAngle ? (k = t - (I.textBlock.height - I.textBlock._lineHeight / 2) * Math.sin(Math.PI / 180 * I.textBlock.angle), B2 + k > h2 && (a[g].convertPixelToValue(B2) >= a[g].viewportMinimum && a[g].convertPixelToValue(B2) <= a[g].viewportMaximum) && (l += B2 + k - h2 - ca3)) : 0 > a[g].labelAngle ? A2 - y < n && A2 - y < a[g].viewportMinimum && (E = n - ($ + a[g].tickLength + x3 + A2 - y + a[g].labelFontSize / 2)) : 0 === a[g].labelAngle && (B2 + t > h2 && (a[g].convertPixelToValue(B2) >= a[g].viewportMinimum && a[g].convertPixelToValue(B2) <= a[g].viewportMaximum) && (l = B2 + t / 2 - h2 - ca3), A2 - y < n && A2 - y < a[g].viewportMinimum && (E = n - $ - a[g].tickLength - x3 - A2 + y / 2)), a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 < a[g].labelAngle && 0 < l ? h2 -= l : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 > a[g].labelAngle && 0 < E ? n += E : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 === a[g].labelAngle && (0 < E && (n += E), 0 < l && (h2 -= l)));
                    q.panEnabled ? W2 = m(q.sessionVariables.axisX.height) || q.stockChart ? q.sessionVariables.axisX.height = W2 : q.sessionVariables.axisX.height : q.sessionVariables.axisX.height = W2;
                    l = Math.round(f.y2 - W2 - d + X2) - ("inside" !== a[a.length - 1].labelPlacement || a[a.length - 1].title || a[a.length - 1].stripLineLabelEffectiveHeight || q.isNavigator ? 0 : 5);
                    k = Math.round(f.y2) - ("inside" !== a[a.length - 1].labelPlacement || a[a.length - 1].title || a[a.length - 1].stripLineLabelEffectiveHeight || q.isNavigator ? 0 : 5);
                    a[g].lineCoordinates.x2 = h2;
                    a[g].lineCoordinates.width = h2 - n;
                    a[g].lineCoordinates.y1 = l;
                    a[g].lineCoordinates.y2 = l;
                    a[g].bounds = { x1: n, y1: l, x2: h2, y2: k - (W2 + d - w[g] - X2), width: h2 - n };
                    a[g].bounds.height = a[g].bounds.y2 - a[g].bounds.y1;
                    "inside" === a[g].labelPlacement && (a[g].lineCoordinates.y1 = a[0].bounds.y1 + X2 + (a[g].labelEffectiveHeight || 0) + (q.isNavigator ? 0 : 2), a[g].lineCoordinates.y2 = a[g].lineCoordinates.y1 + a[g].lineThickness / 2);
                    "inside" === a[g].tickPlacement && (a[g].lineCoordinates.y1 += a[g].tickLength, a[g].lineCoordinates.y2 = a[g].lineCoordinates.y1 + a[g].lineThickness / 2);
                  }
                  X2 += w[g] + a[g].margin;
                }
                $ = 0 === a[0].dataSeries.length;
                if (!$) for (g = 0; g < a[0].dataSeries.length; g++) {
                  if (a[0].dataSeries[g].dataPoints) {
                    $ = false;
                    break;
                  }
                  $ = true;
                }
                if ($) for ($ = false, g = 1; g < a.length; g++) 0 !== a[g].dataSeries.length && ($ ? a[g].lineCoordinates.x2 > a[0].lineCoordinates.x2 && (a[0].lineCoordinates.x2 = a[g].lineCoordinates.x2) : (a[0].lineCoordinates.x2 = a[g].lineCoordinates.x2, $ = true), a[0].lineCoordinates.width = a[0].lineCoordinates.x2 - a[0].lineCoordinates.x1);
              }
              if (e && 0 < e.length) for (g = 0; g < e.length; g++) e[g].lineCoordinates.x1 = n, e[g].lineCoordinates.x2 = h2, e[g].lineCoordinates.width = Math.abs(h2 - n), e[g]._labels && 1 < e[g]._labels.length && (l = e[g]._labels[1], I = "dateTime" === e[g].valueType ? e[g]._labels[e[g]._labels.length - 2] : e[g]._labels[e[g]._labels.length - 1], y = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - I.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)), t = I.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(I.textBlock.angle)) + (I.textBlock.height - I.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(I.textBlock.angle))), q.panEnabled ? Y2 = m(q.sessionVariables.axisX2.height) || q.stockChart ? q.sessionVariables.axisX2.height = Y2 : q.sessionVariables.axisX2.height : q.sessionVariables.axisX2.height = Y2, l = Math.round(f.y1) + ("inside" !== e[e.length - 1].labelPlacement || e[e.length - 1].title || e[e.length - 1].stripLineLabelEffectiveHeight || q.isNavigator ? 0 : 5), k = e[g].lineCoordinates.y1 = l + Y2 + K2 - V, e[g].lineCoordinates.y2 = l, e[g].bounds = { x1: n, y1: l + (Y2 + K2 - v[g] - V), x2: h2, y2: k, width: h2 - n }, e[g].bounds.height = e[g].bounds.y2 - e[g].bounds.y1, "inside" === e[g].labelPlacement && (e[g].lineCoordinates.y1 = e[0].bounds.y2 - V - (e[g].labelEffectiveHeight || 0) - 5), "inside" === e[g].tickPlacement && (e[g].lineCoordinates.y1 -= e[g].tickLength), V += v[g] + e[g].margin;
              if (c && 0 < c.length) for (g = 0; g < c.length; g++) $ = q.isNavigator ? 0 : 10, c[g] && (n = h2 = Math.round((a[0] ? a[0].lineCoordinates.x1 : e[0].lineCoordinates.x1) + (c[0] ? ("inside" === c[0].labelPlacement ? c[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === c[0].tickPlacement ? c[0].tickLength : 0) : 0)), $ = Math.max(c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[c[g]._labels.length - 1].textBlock._lineHeight / 2 : p, p), l = Math.round(Math.max(f.y1 + Y2 + K2 - (e[0] ? ("inside" === e[0].labelPlacement ? e[0].labelEffectiveHeight + 5 : 0) + ("inside" === e[0].tickPlacement ? e[0].tickLength : 0) : 0), 0 < e.length ? 0 : $)) + (!e.length || "inside" !== e[e.length - 1].labelPlacement || e[e.length - 1].title || e[e.length - 1].stripLineLabelEffectiveHeight || q.isNavigator ? 0 : 5), $ = 0 < a.length ? 0 : c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[0].textBlock.height / 2 : p, k = Math.round(f.y2 - W2 + (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveHeight + (q.isNavigator ? 0 : 2) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0) - d - $) - (!a.length || "inside" !== a[a.length - 1].labelPlacement || a[a.length - 1].title || a[a.length - 1].stripLineLabelEffectiveHeight || q.isNavigator ? 0 : 5), c[g].lineCoordinates = { x1: n - S2, y1: l, x2: h2 - S2, y2: k, height: Math.abs(k - l) }, c[g].bounds = { x1: n - (x3[g] + S2), y1: l, x2: h2 - S2, y2: k, height: k - l }, c[g].bounds.width = c[g].bounds.x2 - c[g].bounds.x1, "inside" === c[g].labelPlacement && (c[g].lineCoordinates.x1 = Math.round(c[0].bounds.x1 + x3[0] - S2 - (c[g].labelEffectiveWidth || 0) - 5), c[g].lineCoordinates.x2 = c[g].lineCoordinates.x1 + c[g].lineThickness / 2), "inside" === c[g].tickPlacement && (c[g].lineCoordinates.x1 -= c[g].tickLength, c[g].lineCoordinates.x2 = c[g].lineCoordinates.x1 + c[g].lineThickness / 2), c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.height ? c[g].titleMaxWidth : c[g].lineCoordinates.height), S2 += x3[g] + c[g].margin);
              if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g] && (n = h2 = Math.round((a[0] ? a[0].lineCoordinates.x2 : e[0].lineCoordinates.x2) - (b[0] ? ("inside" === b[0].labelPlacement ? b[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === b[0].tickPlacement ? b[0].tickLength : 0) : 0)), $ = Math.max(b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[b[g]._labels.length - 1].textBlock.height / 2 : 0, p), l = Math.round(Math.max(f.y1 + Y2 + K2 - (e[0] ? ("inside" === e[0].labelPlacement ? e[0].labelEffectiveHeight + (q.isNavigator ? 0 : 5) : 0) + ("inside" === e[0].tickPlacement ? e[0].tickLength : 0) : 0) + (!e.length || "inside" !== e[e.length - 1].labelPlacement || e[e.length - 1].title || e[e.length - 1].stripLineLabelEffectiveHeight || q.isNavigator ? 0 : 5), 0 < e.length ? 0 : $)), $ = 0 < a.length ? 0 : b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[0].textBlock.height / 2 : 0, k = Math.round(f.y2 - (W2 + d + $) + (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveHeight + (q.isNavigator ? 0 : 2) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0)) - (!a.length || "inside" !== a[a.length - 1].labelPlacement || a[a.length - 1].title || a[a.length - 1].stripLineLabelEffectiveHeight || q.isNavigator ? 0 : 5), b[g].lineCoordinates = { x1: n + U3, y1: l, x2: n + U3, y2: k, height: Math.abs(k - l) }, b[g].bounds = { x1: n + U3, y1: l, x2: h2 + z[g] + U3, y2: k, height: k - l }, b[g].bounds.width = b[g].bounds.x2 - b[g].bounds.x1, "inside" === b[g].labelPlacement && (b[g].lineCoordinates.x1 = Math.round(b[0].bounds.x1 + U3 + (b[g].labelEffectiveWidth || 0) + (q.isNavigator ? 0 : 5)), b[g].lineCoordinates.x2 = b[g].lineCoordinates.x1 + b[g].lineThickness / 2), "inside" === b[g].tickPlacement && (b[g].lineCoordinates.x1 += b[g].tickLength, b[g].lineCoordinates.x2 = b[g].lineCoordinates.x1 + b[g].lineThickness / 2), b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.height ? b[g].titleMaxWidth : b[g].lineCoordinates.height), U3 += z[g] + b[g].margin);
              if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g] && (a[g].calculateValueToPixelConversionParameters(), a[g].calculateBreaksSizeInValues(), a[g]._labels && 1 < a[g]._labels.length && (A2 = (a[g].logarithmic ? Math.log(a[g]._labels[1].position / a[g].viewportMinimum) / a[g].conversionParameters.lnLogarithmBase : a[g]._labels[1].position - a[g].viewportMinimum) * Math.abs(a[g].conversionParameters.pixelPerUnit) + a[g].lineCoordinates.x1, n = a[g]._labels[a[g]._labels.length - ("dateTime" === a[g].valueType ? 2 : 1)].position, n = a[g].getApparentDifference(a[g].viewportMinimum, n), B2 = a[g].logarithmic ? (1 < n ? Math.log(n) / a[g].conversionParameters.lnLogarithmBase * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1 : (0 < n ? n * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1));
              if (e && 0 < e.length) for (g = 0; g < e.length; g++) e[g].calculateValueToPixelConversionParameters(), e[g].calculateBreaksSizeInValues(), e[g]._labels && 1 < e[g]._labels.length && (A2 = (e[g].logarithmic ? Math.log(e[g]._labels[1].position / e[g].viewportMinimum) / e[g].conversionParameters.lnLogarithmBase : e[g]._labels[1].position - e[g].viewportMinimum) * Math.abs(e[g].conversionParameters.pixelPerUnit) + e[g].lineCoordinates.x1, n = e[g]._labels[e[g]._labels.length - ("dateTime" === e[g].valueType ? 2 : 1)].position, n = e[g].getApparentDifference(e[g].viewportMinimum, n), B2 = e[g].logarithmic ? (1 < n ? Math.log(n) / e[g].conversionParameters.lnLogarithmBase * Math.abs(e[g].conversionParameters.pixelPerUnit) : 0) + e[g].lineCoordinates.x1 : (0 < n ? n * Math.abs(e[g].conversionParameters.pixelPerUnit) : 0) + e[g].lineCoordinates.x1);
              for (g = 0; g < r.length; g++) "axisY" === r[g].type && (r[g].calculateValueToPixelConversionParameters(), r[g].calculateBreaksSizeInValues());
              if (0 < u2) {
                if (a && 0 < a.length) for (g = 0; g < a.length; g++) s3 = Q2[u2 - 1][g] === Q2[u2][g] ? true : false;
                else s3 = true;
                if (e && 0 < e.length) for (g = 0; g < e.length; g++) F3 = R2[u2 - 1][g] === R2[u2][g] ? true : false;
                else F3 = true;
                if (c && 0 < c.length) for (g = 0; g < c.length; g++) J2 = T2[u2 - 1][g] === T2[u2][g] ? true : false;
                else J2 = true;
                if (b && 0 < b.length) for (g = 0; g < b.length; g++) M2 = G[u2 - 1][g] === G[u2][g] ? true : false;
                else M2 = true;
              }
              if (s3 && F3 && J2 && M2) break;
              u2++;
            }
            if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), a[g].calculateBreaksInPixels();
            if (e && 0 < e.length) for (g = 0; g < e.length; g++) e[g].calculateStripLinesThicknessInValues(), e[g].calculateBreaksInPixels();
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels();
          } else {
            p = [];
            A2 = [];
            E = [];
            y = [];
            t = [];
            B2 = [];
            Q2 = [];
            for (R2 = []; 4 > u2; ) {
              W2 = U3 = S2 = aa2 = $ = K2 = d = G = T2 = V = Y2 = 0;
              if (a && 0 < a.length) for (E = [], g = U3 = 0; g < a.length; g++) E.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateWidth() : 0)), U3 += E[g], d += a[g] && !q.isNavigator ? a[g].margin : 0;
              else E.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
              Q2.push(E);
              if (e && 0 < e.length) for (y = [], g = W2 = 0; g < e.length; g++) y.push(Math.ceil(e[g] ? e[g].createLabelsAndCalculateWidth() : 0)), W2 += y[g], K2 += e[g] ? e[g].margin : 0;
              else y.push(Math.ceil(e[0] ? e[0].createLabelsAndCalculateWidth() : 0));
              R2.push(y);
              if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].lineCoordinates = {}, n = Math.round(f.x1 + U3 + d - (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0)) + (!a.length || "inside" !== a[a.length - 1].labelPlacement || a[a.length - 1].title || a[a.length - 1].stripLineLabelEffectiveWidth || q.isNavigator ? 0 : 5), h2 = Math.round(Math.min(f.x2 - W2 - K2 + (e[0] ? ("inside" === e[0].labelPlacement ? e[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === e[0].tickPlacement ? e[0].tickLength : 0) : 0) - (!e.length || "inside" !== e[e.length - 1].labelPlacement || e[e.length - 1].title || e[e.length - 1].stripLineLabelEffectiveWidth || q.isNavigator ? 0 : 5), q.width - 10)), c[g].labelAutoFit && !m(w) && (0 < !a.length && (n = 0 > c[g].labelAngle ? Math.max(n, w) : 0 === c[g].labelAngle ? Math.max(n, w / 2) : n), 0 < !e.length && (h2 = 0 < c[g].labelAngle ? h2 - v / 2 : 0 === c[g].labelAngle ? h2 - v / 2 : h2)), c[g].lineCoordinates.x1 = n, c[g].lineCoordinates.x2 = h2, c[g].lineCoordinates.width = Math.abs(h2 - n), c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width);
              if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].lineCoordinates = {}, n = Math.round(f.x1 + U3 + d - (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0)) + (!a.length || "inside" !== a[a.length - 1].labelPlacement || a[a.length - 1].title || a[a.length - 1].stripLineLabelEffectiveWidth || q.isNavigator ? 0 : 5), h2 = Math.round(Math.min(f.x2 - W2 - K2 + (e[0] ? ("inside" === e[0].labelPlacement ? e[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === e[0].tickPlacement ? e[0].tickLength : 0) : 0) - (!e.length || "inside" !== e[e.length - 1].labelPlacement || e[e.length - 1].title || e[e.length - 1].stripLineLabelEffectiveWidth || q.isNavigator ? 0 : 5), b[g].chart.width - 10)), b[g] && b[g].labelAutoFit && !m(x3) && (0 < !a.length && (n = 0 < b[g].labelAngle ? Math.max(n, x3) : 0 === b[g].labelAngle ? Math.max(n, x3 / 2) : n), 0 < !e.length && (h2 -= z / 2)), b[g].lineCoordinates.x1 = n, b[g].lineCoordinates.x2 = h2, b[g].lineCoordinates.width = Math.abs(h2 - n), b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width);
              if (c && 0 < c.length) for (p = [], g = S2 = 0; g < c.length; g++) p.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateHeight() : 0)), S2 += p[g] + c[g].margin, $ += c[g].margin;
              else p.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
              t.push(p);
              if (b && 0 < b.length) for (A2 = [], g = 0; g < b.length; g++) A2.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateHeight() : 0)), aa2 += b[g].margin;
              else A2.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
              B2.push(A2);
              if (c && 0 < c.length) for (g = 0; g < c.length; g++) 0 < c[g]._labels.length && (l = c[g]._labels[0], I = c[g]._labels[c[g]._labels.length - 1], w = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - I.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)), v = I.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(I.textBlock.angle)) + (I.textBlock.height - I.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(I.textBlock.angle)));
              if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g] && 0 < b[g]._labels.length && (l = b[g]._labels[0], I = b[g]._labels[b[g]._labels.length - 1], x3 = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - I.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)), z = I.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(I.textBlock.angle)) + (I.textBlock.height - I.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(I.textBlock.angle)));
              if (q.panEnabled) for (g = 0; g < c.length; g++) p[g] = m(q.sessionVariables.axisY[g].height) ? q.sessionVariables.axisY[g].height = p[g] : q.sessionVariables.axisY[g].height;
              else for (g = 0; g < c.length; g++) q.sessionVariables.axisY[g].height = p[g];
              if (c && 0 < c.length) for (g = c.length - 1; 0 <= g; g--) l = Math.round(f.y2) - ("inside" !== c[c.length - 1].labelPlacement || c[c.length - 1].title || c[c.length - 1].stripLineLabelEffectiveHeight || q.isNavigator ? 0 : 5), k = Math.round(f.y2 > c[g].chart.height ? c[g].chart.height : f.y2) - ("inside" !== c[c.length - 1].labelPlacement || c[c.length - 1].title || c[c.length - 1].stripLineLabelEffectiveHeight || q.isNavigator ? 0 : 5), c[g].lineCoordinates.y1 = l - (p[g] + c[g].margin + Y2), c[g].lineCoordinates.y2 = l - (p[g] + c[g].margin + Y2), "inside" === c[g].labelPlacement && (c[g].lineCoordinates.y1 = c[g].lineCoordinates.y1 + c[g].labelEffectiveHeight + (q.isNavigator ? 0 : 2), c[g].lineCoordinates.y2 = c[g].lineCoordinates.y1 + c[g].lineThickness / 2), "inside" === c[g].tickPlacement && (c[g].lineCoordinates.y1 += c[g].tickLength, c[g].lineCoordinates.y2 = c[g].lineCoordinates.y1 + c[g].lineThickness / 2), c[g].bounds = { x1: n, y1: l - (p[g] + Y2 + c[g].margin), x2: h2, y2: k - (Y2 + c[g].margin), width: h2 - n, height: p[g] }, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width), Y2 += p[g] + c[g].margin;
              if (b && 0 < b.length) for (g = b.length - 1; 0 <= g; g--) b[g] && (l = Math.round(f.y1) + ("inside" !== b[b.length - 1].labelPlacement || b[b.length - 1].title || b[b.length - 1].stripLineLabelEffectiveHeight || q.isNavigator ? 0 : 5), k = Math.round(f.y1 + (A2[g] + b[g].margin + V)) + ("inside" !== b[b.length - 1].labelPlacement || b[b.length - 1].title || b[b.length - 1].stripLineLabelEffectiveHeight || q.isNavigator ? 0 : 5), b[g].lineCoordinates.y1 = k, b[g].lineCoordinates.y2 = k, "inside" === b[g].labelPlacement && (b[g].lineCoordinates.y1 = k - b[g].labelEffectiveHeight - 5, b[g].lineCoordinates.y2 = b[g].lineCoordinates.y1 - b[g].lineThickness / 2), "inside" === b[g].tickPlacement && (b[g].lineCoordinates.y1 -= b[g].tickLength, b[g].lineCoordinates.y2 = b[g].lineCoordinates.y1 - b[g].lineThickness / 2), b[g].bounds = { x1: n, y1: l + (b[g].margin + V), x2: h2, y2: k, width: h2 - n }, b[g].bounds.height = b[g].bounds.y2 - b[g].bounds.y1, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width), V += A2[g] + b[g].margin);
              if (a && 0 < a.length) for (g = 0; g < a.length; g++) {
                $ = a[g]._labels && 0 < a[g]._labels.length ? a[g]._labels[0].textBlock.fontSize / 2 : 0;
                n = Math.round(f.x1 + d);
                l = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 < Math.max($, 10) ? Math.max($, 10) : f.y1) : f.y1 < Math.max($, 10) ? Math.max($, 10) : f.y1;
                h2 = Math.round(f.x1 + U3 + d);
                k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - S2 > q.height - Math.max($, 10) ? q.height - Math.max($, 10) : f.y2 - S2) : f.y2 > q.height - Math.max($, 10) ? q.height - Math.max($, 10) : f.y2;
                if (c && 0 < c.length) for (I = 0; I < c.length; I++) c[I] && c[I].labelAutoFit && (h2 = c[I].lineCoordinates.x1 + (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0), n = 0 > c[I].labelAngle || 0 === c[I].labelAngle ? h2 - U3 : n);
                if (b && 0 < b.length) for (I = 0; I < b.length; I++) b[I] && b[I].labelAutoFit && (h2 = b[I].lineCoordinates.x1 + (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0), n = h2 - U3);
                a[g].lineCoordinates = { x1: h2 - T2, y1: l, x2: h2 - T2, y2: k, height: Math.abs(k - l) };
                "inside" === a[g].labelPlacement && (a[g].lineCoordinates.x1 = a[g].lineCoordinates.x1 - a[g].labelEffectiveWidth - 5, a[g].lineCoordinates.x2 = a[g].lineCoordinates.x1 + a[g].lineThickness / 2);
                "inside" === a[g].tickPlacement && (a[g].lineCoordinates.x1 -= a[g].tickLength, a[g].lineCoordinates.x2 = a[g].lineCoordinates.x1 + a[g].lineThickness / 2);
                a[g].bounds = { x1: h2 - (E[g] + T2), y1: l, x2: h2 - T2, y2: k, height: k - l };
                a[g].bounds.width = a[g].bounds.x2 - a[g].bounds.x1;
                a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.height ? a[g].titleMaxWidth : a[g].lineCoordinates.height);
                a[g].calculateValueToPixelConversionParameters();
                a[g].calculateBreaksSizeInValues();
                T2 += E[g] + a[g].margin;
              }
              if (e && 0 < e.length) for (g = 0; g < e.length; g++) {
                $ = e[g]._labels && 0 < e[g]._labels.length ? e[g]._labels[0].textBlock.fontSize / 2 : 0;
                h2 = Math.round(f.x1 - K2);
                l = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 < Math.max($, 10) ? Math.max($, 10) : f.y1) : f.y1 < Math.max($, 10) ? Math.max($, 10) : f.y1;
                n = Math.round(f.x2 - W2 - K2);
                k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - S2 > q.height - Math.max($, 10) ? q.height - Math.max($, 10) : f.y2 - S2) : f.y2 > q.height - Math.max($, 10) ? q.height - Math.max($, 10) : f.y2;
                if (c && 0 < c.length) for (I = 0; I < c.length; I++) c[I] && c[I].labelAutoFit && (n = c[I].lineCoordinates.x2 - (e[0] ? ("inside" === e[0].labelPlacement ? e[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === e[0].tickPlacement ? e[0].tickLength : 0) : 0), h2 = 0 > c[I].labelAngle || 0 === c[I].labelAngle ? n + W2 : n);
                if (b && 0 < b.length) for (I = 0; I < b.length; I++) b[I] && b[I].labelAutoFit && (n = b[I].lineCoordinates.x2 - (e[0] ? ("inside" === e[0].labelPlacement ? e[0].labelEffectiveWidth + (q.isNavigator ? 0 : 5) : 0) + ("inside" === e[0].tickPlacement ? e[0].tickLength : 0) : 0), h2 = n + W2);
                e[g].lineCoordinates = { x1: n + G, y1: l, x2: n + G, y2: k, height: Math.abs(k - l) };
                "inside" === e[g].labelPlacement && (e[g].lineCoordinates.x1 = e[g].lineCoordinates.x1 + e[g].labelEffectiveWidth + (q.isNavigator ? 0 : 5), e[g].lineCoordinates.x2 = e[g].lineCoordinates.x1 + e[g].lineThickness / 2);
                "inside" === e[g].tickPlacement && (e[g].lineCoordinates.x1 += e[g].tickLength, e[g].lineCoordinates.x2 = e[g].lineCoordinates.x1 + e[g].lineThickness / 2);
                e[g].bounds = { x1: n + G, y1: l, x2: n + y[g] + G, y2: k, height: k - l };
                e[g].bounds.width = e[g].bounds.x2 - e[g].bounds.x1;
                e[g].title && (e[g]._titleTextBlock.maxWidth = 0 < e[g].titleMaxWidth && e[g].titleMaxWidth < e[g].lineCoordinates.height ? e[g].titleMaxWidth : e[g].lineCoordinates.height);
                e[g].calculateValueToPixelConversionParameters();
                e[g].calculateBreaksSizeInValues();
                G += y[g] + e[g].margin;
              }
              for (g = 0; g < r.length; g++) "axisY" === r[g].type && (r[g].calculateValueToPixelConversionParameters(), r[g].calculateBreaksSizeInValues());
              if (0 < u2) {
                if (a && 0 < a.length) for (g = 0; g < a.length; g++) s3 = Q2[u2 - 1][g] === Q2[u2][g] ? true : false;
                else s3 = true;
                if (e && 0 < e.length) for (g = 0; g < e.length; g++) F3 = R2[u2 - 1][g] === R2[u2][g] ? true : false;
                else F3 = true;
                if (c && 0 < c.length) for (g = 0; g < c.length; g++) J2 = t[u2 - 1][g] === t[u2][g] ? true : false;
                else J2 = true;
                if (b && 0 < b.length) for (g = 0; g < b.length; g++) M2 = B2[u2 - 1][g] === B2[u2][g] ? true : false;
                else M2 = true;
              }
              if (s3 && F3 && J2 && M2) break;
              u2++;
            }
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels();
            if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), a[g].calculateBreaksInPixels();
            if (e && 0 < e.length) for (g = 0; g < e.length; g++) e[g].calculateStripLinesThicknessInValues(), e[g].calculateBreaksInPixels();
          }
          for (g = 0; g < r.length; g++) r[g] && m(r[g].options.titleMaxWidth) && (r[g].titleMaxWidth = "left" === r[g]._position || "right" === r[g]._position ? r[g].bounds.height : r[g].bounds.width, r[g].title && (r[g]._titleTextBlock.maxWidth = r[g].titleMaxWidth || f.height));
        };
        A.render = function(a, e, c, b, d) {
          var f = a[0] ? a[0].chart : e[0].chart, n = f.ctx, l = [];
          l.push.apply(l, a);
          l.push.apply(l, e);
          l.push.apply(l, c);
          l.push.apply(l, b);
          f.alignVerticalAxes && f.alignVerticalAxes();
          n.save();
          "normal" === d && (n.beginPath(), a && a.length && n.rect(2, a[0].bounds.y1, a[0].chart.width - 4, a[a.length - 1].bounds.y2), e && e.length && n.rect(2, e[e.length - 1].bounds.y1, e[0].chart.width - 4, e[0].bounds.y2), n.clip());
          if (a && 0 < a.length) for (d = 0; d < a.length; d++) a[d].renderLabelsTicksAndTitle();
          if (e && 0 < e.length) for (d = 0; d < e.length; d++) e[d].renderLabelsTicksAndTitle();
          n.restore();
          if (c && 0 < c.length) for (d = 0; d < c.length; d++) c[d].renderLabelsTicksAndTitle();
          if (b && 0 < b.length) for (d = 0; d < b.length; d++) b[d].renderLabelsTicksAndTitle();
          f.preparePlotArea();
          a = f.plotArea;
          n.save();
          n.beginPath();
          n.rect(a.x1, a.y1, Math.abs(a.x2 - a.x1), Math.abs(a.y2 - a.y1));
          n.clip();
          if (l && 0 < l.length) {
            for (d = 0; d < l.length; d++) l[d].renderStripLinesOfThicknessType("value");
            for (d = 0; d < l.length; d++) l[d].renderInterlacedColors();
          }
          n.restore();
          n = false;
          if (l && 0 < l.length) {
            for (d = 0; d < l.length; d++) l[d].renderGrid(), u && (l[d].createMask(), l[d].renderBreaksBackground());
            for (d = 0; d < l.length; d++) l[d].renderAxisLine();
            for (d = 0; d < l.length; d++) l[d].renderStripLinesOfThicknessType("pixel"), l[d].crosshair && l[d].crosshair.enabled && (n = true, f.clearedOverlayedCanvas = l[d].type);
          }
          if (n || !n && f.clearedOverlayedCanvas && 0 <= f.clearedOverlayedCanvas.indexOf("axis")) f.resetOverlayedCanvas(), f.renderCrosshairs(null, true);
        };
        A.prototype.calculateStripLinesThicknessInValues = function() {
          for (var a = 0; a < this.stripLines.length; a++) if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
            var e = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue), c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue), b = this.getApparentDifference(e, c);
            this.stripLines[a].value = this.convertPixelToValue((this.convertValueToPixel(e) + this.convertValueToPixel(c)) / 2);
            this.stripLines[a].thickness = b;
            this.stripLines[a]._thicknessType = "value";
          }
        };
        A.prototype.calculateBreaksSizeInValues = function() {
          for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !m(this.scaleBreaks.options.spacing), d, f = 0; f < e.length; f++) d = b || !m(e[f].options.spacing), e[f].spacing = Wa(e[f].spacing, a, 8, d ? 0.1 * a : 8, d ? 0 : 3) << 0, e[f].size = 0 > e[f].spacing ? 0 : Math.abs(e[f].spacing / c), this.logarithmic && (e[f].size = Math.pow(this.logarithmBase, e[f].size));
        };
        A.prototype.calculateBreaksInPixels = function() {
          if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
            var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
            for (var e = 0; e < a.length && !(a[e].startValue > this.conversionParameters.maximum); e++) a[e].endValue < this.conversionParameters.minimum || (m(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = e), a[e].startValue >= this.conversionParameters.minimum && (a[e].startPixel = this.convertValueToPixel(a[e].startValue), this.scaleBreaks.lastBreakIndex = e), a[e].endValue <= this.conversionParameters.maximum && (a[e].endPixel = this.convertValueToPixel(a[e].endValue)));
          }
        };
        A.prototype.renderLabelsTicksAndTitle = function() {
          var a = this, e = false, c = 0, b = 0, d = 1, f = 0;
          0 !== this.labelAngle && 360 !== this.labelAngle && (d = 1.2);
          if ("undefined" === typeof this.options.interval) {
            if ("bottom" === this._position || "top" === this._position) if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
              for (var c = [], d = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, n, l = this.viewportMaximum, h2 = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                p = this._labels[k];
                if (p.position < this.viewportMinimum) break;
                p.position > this.viewportMaximum || !(k === this._labels.length - 1 || n < Math.log(l / p.position) * h2 / d) || (c.push(p), l = p.position, n = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
              }
              this._labels = c;
            } else {
              for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (n = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += n);
              c > this.lineCoordinates.width * d && this.labelAutoFit && (e = true);
            }
            if ("left" === this._position || "right" === this._position) if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
              for (var c = [], m2, l = this.viewportMaximum, h2 = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                p = this._labels[k];
                if (p.position < this.viewportMinimum) break;
                p.position > this.viewportMaximum || !(k === this._labels.length - 1 || m2 < Math.log(l / p.position) * h2) || (c.push(p), l = p.position, m2 = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
              }
              this._labels = c;
            } else {
              for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (m2 = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += m2);
              b > this.lineCoordinates.height * d && this.labelAutoFit && (e = true);
            }
          }
          this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a2, b2) {
            return a2.position - b2.position;
          });
          var k = 0, p, r;
          if ("bottom" === this._position) {
            for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, r.y << 0), this.ctx.lineTo(b, r.y + this.tickLength << 0), this.ctx.stroke()), e && 0 !== f++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (r.x -= p.textBlock.width / 2, r.y = "inside" === this.labelPlacement ? r.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + p.textBlock.height - p.textBlock._lineHeight / 2 + 2) : r.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock._lineHeight / 2 + 5) : 0 > this.labelAngle ? (r.x = r.x - ("inside" === this.labelPlacement ? 0 : p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), r.y = "inside" === this.labelPlacement ? r.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 2 - (p.textBlock.height - p.textBlock._lineHeight / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : r.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - p.textBlock._lineHeight / 2 * Math.cos(Math.PI / 180 * this.labelAngle))) : (r.x = r.x - ("inside" === this.labelPlacement ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) + p.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), r.y = "inside" === this.labelPlacement ? r.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 2 - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - (p.textBlock.height - p.textBlock._lineHeight / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : r.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(p.textBlock._lineHeight / 2 * Math.cos(Math.PI / 180 * this.labelAngle))), p.textBlock.x = r.x, p.textBlock.y = r.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++) if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b2 = 1 === a.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(b2, r.y << 0);
                a.ctx.lineTo(b2, r.y - a.tickLength << 0);
                a.ctx.stroke();
                a.ctx.restore();
              }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height + this._titleTextBlock._lineHeight / 2 - 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("top" === this._position) {
            for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, r.y << 0), this.ctx.lineTo(b, r.y - this.tickLength << 0), this.ctx.stroke()), e && 0 !== f++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (r.x -= p.textBlock.width / 2, r.y = "inside" === this.labelPlacement ? r.y + p.textBlock._lineHeight / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.height - p.textBlock._lineHeight / 2) - 2) : 0 > this.labelAngle ? (r.x = r.x - ("inside" === this.labelPlacement ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) + p.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), r.y = "inside" === this.labelPlacement ? r.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + p.textBlock._lineHeight / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : r.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - (p.textBlock.height - p.textBlock._lineHeight / 2) * Math.cos(Math.PI / 180 * this.labelAngle)) : (r.x = r.x - ("inside" === this.labelPlacement ? 0 : p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), r.y = "inside" === this.labelPlacement ? r.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 + p.textBlock._lineHeight / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : r.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - ((p.textBlock.height - p.textBlock._lineHeight / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle))), p.textBlock.x = r.x, p.textBlock.y = r.y));
            "inside" === this.tickPlacement && this.chart.addEventListener(
              "dataAnimationIterationEnd",
              function() {
                for (k = 0; k < a._labels.length; k++) if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b2, r.y << 0);
                  a.ctx.lineTo(b2, r.y + a.tickLength << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
              },
              this
            );
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + this._titleTextBlock._lineHeight / 2 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("left" === this._position) {
            for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0, this.ctx.beginPath(), this.ctx.moveTo(r.x << 0, b), this.ctx.lineTo(r.x - this.tickLength << 0, b), this.ctx.stroke()), e && 0 !== f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y = r.y - p.textBlock.topPadding, p.textBlock.x = "inside" === this.labelPlacement ? r.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : 0 > this.labelAngle ? (p.textBlock.y = ("inside" === this.labelPlacement ? r.y : r.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) - p.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? r.x - p.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (p.textBlock.y = ("inside" === this.labelPlacement ? r.y : r.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) - p.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? r.x + (p.textBlock.height - p.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - p.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++) if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b2 = 1 === a.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(r.x << 0, b2);
                a.ctx.lineTo(r.x + a.tickLength << 0, b2);
                a.ctx.stroke();
                a.ctx.restore();
              }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + this._titleTextBlock._lineHeight / 2, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("right" === this._position) {
            for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0, this.ctx.beginPath(), this.ctx.moveTo(r.x << 0, b), this.ctx.lineTo(r.x + this.tickLength << 0, b), this.ctx.stroke()), e && 0 !== f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y = r.y - p.textBlock.topPadding, p.textBlock.x = "inside" === this.labelPlacement ? r.x - p.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : r.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : 0 > this.labelAngle ? (p.textBlock.y = ("inside" === this.labelPlacement ? r.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : r.y) - p.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? r.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : r.x - p.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (p.textBlock.y = ("inside" === this.labelPlacement ? r.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : r.y) - p.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? r.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - p.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : r.x + (p.textBlock.height - p.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++) if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b2 = 1 === a.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(r.x << 0, b2);
                a.ctx.lineTo(r.x - a.tickLength << 0, b2);
                a.ctx.stroke();
                a.ctx.restore();
              }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - this._titleTextBlock._lineHeight / 2, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          }
          f = 0;
          if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationIterationEnd", function() {
            for (k = 0; k < a._labels.length; k++) p = a._labels[k], p.position < a.viewportMinimum || (p.position > a.viewportMaximum || e && 0 !== f++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), p.textBlock.render(true), a.ctx.restore());
          }, this);
          else for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || e && 0 !== f++ % 2 && this.labelAutoFit) || p.textBlock.render(true);
        };
        A.prototype.renderInterlacedColors = function() {
          var a = this.chart.plotArea.ctx, e, c, b = this.chart.plotArea, d = 0;
          e = true;
          if (("bottom" === this._position || "top" === this._position) && this.interlacedColor) for (a.fillStyle = this.interlacedColor, d = 0; d < this._labels.length; d++) e ? (e = this.getPixelCoordinatesOnAxis(this._labels[d].position), c = d + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[d + 1].position), a.fillRect(Math.min(c.x, e.x), b.y1, Math.abs(c.x - e.x), Math.abs(b.y1 - b.y2)), e = false) : e = true;
          else if (("left" === this._position || "right" === this._position) && this.interlacedColor) for (a.fillStyle = this.interlacedColor, d = 0; d < this._labels.length; d++) e ? (c = this.getPixelCoordinatesOnAxis(this._labels[d].position), e = d + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[d + 1].position), a.fillRect(b.x1, Math.min(c.y, e.y), Math.abs(b.x1 - b.x2), Math.abs(e.y - c.y)), e = false) : e = true;
          a.beginPath();
        };
        A.prototype.renderStripLinesOfThicknessType = function(a) {
          if (this.stripLines && 0 < this.stripLines.length && a) {
            var e = this, c, b, d = 0, f = 0, n = false;
            b = false;
            for (var l = [], h2 = [], k = false, q, d = 0; d < this.stripLines.length; d++) {
              var p = this.stripLines[d];
              p._thicknessType === a && ("pixel" === a && (p.value < this.viewportMinimum || p.value > this.viewportMaximum || m(p.value) || isNaN(this.range)) || "value" === a && (p.startValue <= this.viewportMinimum && p.endValue <= this.viewportMinimum || p.startValue >= this.viewportMaximum && p.endValue >= this.viewportMaximum || m(p.startValue) || m(p.endValue) || isNaN(this.range)) || l.push(p));
            }
            for (d = 0; d < this._stripLineLabels.length; d++) if (p = this.stripLines[d], c = this._stripLineLabels[d], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range))) if (b = this.getPixelCoordinatesOnAxis(c.position), "outside" === c.stripLine.labelPlacement) {
              p && (this.ctx.strokeStyle = p.tickColor ? p.tickColor : p.color, this.ctx.lineWidth = p.tickThickness = m(p.tickThickness) ? "pixel" === p._thicknessType ? p.thickness : this.thickness : p.tickThickness, m(p.opacity) || "pixel" !== p._thicknessType || (q = p.ctx.globalAlpha, p.ctx.globalAlpha = p.opacity), m(p.opacity) && (p.opacity = p.ctx.globalAlpha));
              if ("bottom" === this._position) {
                var r = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0;
                0 < p.tickThickness && (this.ctx.beginPath(), this.ctx.moveTo(r, b.y << 0), this.ctx.lineTo(r, b.y + p.tickLength << 0), this.ctx.stroke());
                0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y += p.tickLength + c.textBlock.fontSize / 2 + 5) : (b.x -= (0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) - c.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), b.y += p.tickLength + 5 + (0 > this.labelAngle ? Math.abs(c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - c.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle)) : Math.abs(c.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))));
              } else "top" === this._position ? (r = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, 0 < p.tickThickness && (this.ctx.beginPath(), this.ctx.moveTo(r, b.y << 0), this.ctx.lineTo(r, b.y - p.tickLength << 0), this.ctx.stroke()), 0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y -= p.tickLength + c.textBlock.height - c.textBlock.fontSize / 2) : (b.x -= (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) - c.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), b.y -= p.tickLength + 2 + (0 < this.labelAngle ? (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle)))) : "left" === this._position ? (r = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, 0 < p.tickThickness && (this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, r), this.ctx.lineTo(b.x - p.tickLength << 0, r), this.ctx.stroke()), 0 === this.labelAngle ? (b.x = b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - p.tickLength - 5, b.y -= c.textBlock.topPadding) : (b.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + c.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), b.x -= p.tickLength + 5 + (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + c.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) : c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle)))) : "right" === this._position && (r = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, 0 < p.tickThickness && (this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, r), this.ctx.lineTo(b.x + p.tickLength << 0, r), this.ctx.stroke()), 0 === this.labelAngle ? (b.x = b.x + p.tickLength + 5, b.y -= c.textBlock.topPadding) : (b.y -= c.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), b.x = p.tickLength + 5 + (0 < this.labelAngle ? b.x + (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) : b.x - c.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle))));
              q && (p.ctx.globalAlpha = q);
              c.textBlock.x = b.x;
              c.textBlock.y = b.y;
              h2.push(c);
            } else p._thicknessType === a && (m(p.opacity) && (p.opacity = p.ctx.globalAlpha), c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - p.thickness / 2 > this.chart.plotArea.x1 ? m(p.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, m(p.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - p.thickness / 2 > this.chart.plotArea.x1 ? m(p.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, m(p.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - p.thickness / 2 > this.chart.plotArea.y1 ? m(p.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : m(p.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.y += c.textBlock.height / 2 - c.textBlock.fontSize + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width - 3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - p.thickness / 2 > this.chart.plotArea.y1 ? m(p.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : m(p.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3), c.textBlock.x = b.x, c.textBlock.y = b.y, h2.push(c));
            if (!k) {
              b = false;
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
              this.ctx.clip();
              for (d = 0; d < l.length; d++) p = l[d], p.showOnTop ? n || (n = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                for (f = 0; f < l.length; f++) p = l[f], p.showOnTop && p.render();
                this.ctx.restore();
              }, p)) : p.render();
              for (d = 0; d < h2.length; d++) c = h2[d], c.stripLine.showOnTop ? b || (b = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                for (f = 0; f < h2.length; f++) c = h2[f], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (e.ctx.save(), e.ctx.beginPath(), e.ctx.rect(
                  e.chart.plotArea.x1,
                  e.chart.plotArea.y1,
                  e.chart.plotArea.width,
                  e.chart.plotArea.height
                ), e.ctx.clip(), c.textBlock.render(true), e.ctx.restore());
              }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(true);
              this.ctx.restore();
              k = true;
            }
            if (k) for (b = false, d = 0; d < h2.length; d++) c = h2[d], "outside" === c.stripLine.labelPlacement && c.textBlock.render(true);
          }
        };
        A.prototype.renderBreaksBackground = function() {
          this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore());
        };
        A.prototype.createMask = function() {
          if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
            var a = this.scaleBreaks._appliedBreaks;
            u ? (this.maskCanvas = xa(
              this.chart.width,
              this.chart.height
            ), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
            this.maskCtx.save();
            this.maskCtx.beginPath();
            this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.maskCtx.clip();
            for (var e = 0; e < a.length; e++) a[e].endValue < this.viewportMinimum || (a[e].startValue > this.viewportMaximum || isNaN(this.range)) || a[e].render(this.maskCtx);
            this.maskCtx.restore();
          }
        };
        A.prototype.renderCrosshair = function(a, e) {
          isFinite(this.minimum) && isFinite(this.maximum) && this.crosshair.render(a, e);
        };
        A.prototype.showCrosshair = function(a) {
          m(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a));
        };
        A.prototype.renderGrid = function() {
          if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx;
            a.save();
            var e, c = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(J(this.gridDashType, this.gridThickness));
            if ("bottom" === this._position || "top" === this._position) for (b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), e = this.getPixelCoordinatesOnAxis(this._labels[b].position), e = 1 === a.lineWidth % 2 ? (e.x << 0) + 0.5 : e.x << 0, a.moveTo(e, c.y1 << 0), a.lineTo(e, c.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position) for (var b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), e = this.getPixelCoordinatesOnAxis(this._labels[b].position), e = 1 === a.lineWidth % 2 ? (e.y << 0) + 0.5 : e.y << 0, a.moveTo(c.x1 << 0, e), a.lineTo(c.x2 << 0, e), a.stroke());
            a.restore();
          }
        };
        A.prototype.renderAxisLine = function() {
          var a = this.chart.ctx, e = u ? this.chart._preRenderCtx : a, c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)), b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)), d, f;
          e.save();
          if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
              this.reversed ? (d = this.lineCoordinates.x2, f = this.lineCoordinates.x1) : (d = this.lineCoordinates.x1, f = this.lineCoordinates.x2);
              e.lineWidth = this.lineThickness;
              e.strokeStyle = this.lineColor ? this.lineColor : "black";
              e.setLineDash && e.setLineDash(J(this.lineDashType, this.lineThickness));
              var n = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
              e.beginPath();
              if (this.scaleBreaks && !m(this.scaleBreaks.firstBreakIndex)) if (m(this.scaleBreaks.lastBreakIndex)) d = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
              else for (var l = this.scaleBreaks.firstBreakIndex; l <= this.scaleBreaks.lastBreakIndex; l++) e.moveTo(d, n), e.lineTo(this.scaleBreaks._appliedBreaks[l].startPixel + c, n), d = this.scaleBreaks._appliedBreaks[l].endPixel + b;
              d && (e.moveTo(d, n), e.lineTo(f, n));
              e.stroke();
            }
          } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
            this.reversed ? (d = this.lineCoordinates.y1, f = this.lineCoordinates.y2) : (d = this.lineCoordinates.y2, f = this.lineCoordinates.y1);
            e.lineWidth = this.lineThickness;
            e.strokeStyle = this.lineColor;
            e.setLineDash && e.setLineDash(J(this.lineDashType, this.lineThickness));
            n = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
            e.beginPath();
            if (this.scaleBreaks && !m(this.scaleBreaks.firstBreakIndex)) if (m(this.scaleBreaks.lastBreakIndex)) d = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
            else for (l = this.scaleBreaks.firstBreakIndex; l <= this.scaleBreaks.lastBreakIndex; l++) e.moveTo(n, d), e.lineTo(n, this.scaleBreaks._appliedBreaks[l].startPixel + b), d = this.scaleBreaks._appliedBreaks[l].endPixel + c;
            d && (e.moveTo(n, d), e.lineTo(n, f));
            e.stroke();
          }
          u && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), e.clearRect(
            0,
            0,
            this.chart.width,
            this.chart.height
          ));
          e.restore();
        };
        A.prototype.getPixelCoordinatesOnAxis = function(a) {
          var e = {};
          if ("bottom" === this._position || "top" === this._position) e.x = this.convertValueToPixel(a), e.y = this.lineCoordinates.y1;
          if ("left" === this._position || "right" === this._position) e.y = this.convertValueToPixel(a), e.x = this.lineCoordinates.x2;
          return e;
        };
        A.prototype.convertPixelToValue = function(a) {
          if ("undefined" === typeof a) return null;
          var e = 0, c = 0, b, e = true, d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
          if (this.logarithmic) {
            a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed) for (c = 0; c < d.length; c++) {
              if (!(d[c].endValue < this.conversionParameters.minimum)) if (e) if (d[c].startValue < this.conversionParameters.minimum) {
                if (1 < d[c].size && this.conversionParameters.minimum * Math.pow(d[c].endValue / d[c].startValue, Math.log(b) / Math.log(d[c].size)) < d[c].endValue) {
                  a = Math.pow(d[c].endValue / d[c].startValue, Math.log(b) / Math.log(d[c].size));
                  break;
                } else a *= d[c].endValue / this.conversionParameters.minimum / Math.pow(d[c].size, Math.log(d[c].endValue / this.conversionParameters.minimum) / Math.log(d[c].endValue / d[c].startValue)), b /= Math.pow(d[c].size, Math.log(d[c].endValue / this.conversionParameters.minimum) / Math.log(d[c].endValue / d[c].startValue));
                e = false;
              } else if (b > d[c].startValue / this.conversionParameters.minimum) {
                b /= d[c].startValue / this.conversionParameters.minimum;
                if (b < d[c].size) {
                  a *= Math.pow(d[c].endValue / d[c].startValue, 1 === d[c].size ? 1 : Math.log(b) / Math.log(d[c].size)) / b;
                  break;
                } else a *= d[c].endValue / d[c].startValue / d[c].size;
                b /= d[c].size;
                e = false;
              } else break;
              else if (b > d[c].startValue / d[c - 1].endValue) {
                b /= d[c].startValue / d[c - 1].endValue;
                if (b < d[c].size) {
                  a *= Math.pow(d[c].endValue / d[c].startValue, 1 === d[c].size ? 1 : Math.log(b) / Math.log(d[c].size)) / b;
                  break;
                } else a *= d[c].endValue / d[c].startValue / d[c].size;
                b /= d[c].size;
              } else break;
            }
            else for (c = d.length - 1; 0 <= c; c--) if (!(d[c].startValue > this.conversionParameters.minimum)) if (e) if (d[c].endValue > this.conversionParameters.minimum) {
              if (1 < d[c].size && this.conversionParameters.minimum * Math.pow(d[c].endValue / d[c].startValue, Math.log(b) / Math.log(d[c].size)) > d[c].startValue) {
                a = Math.pow(d[c].endValue / d[c].startValue, Math.log(b) / Math.log(d[c].size));
                break;
              } else a *= d[c].startValue / this.conversionParameters.minimum * Math.pow(d[c].size, Math.log(d[c].startValue / this.conversionParameters.minimum) / Math.log(d[c].endValue / d[c].startValue)) * b, b *= Math.pow(d[c].size, Math.log(this.conversionParameters.minimum / d[c].startValue) / Math.log(d[c].endValue / d[c].startValue));
              e = false;
            } else if (b < d[c].endValue / this.conversionParameters.minimum) {
              b /= d[c].endValue / this.conversionParameters.minimum;
              if (b > 1 / d[c].size) {
                a *= Math.pow(d[c].endValue / d[c].startValue, 1 >= d[c].size ? 1 : Math.log(b) / Math.log(d[c].size)) * b;
                break;
              } else a /= d[c].endValue / d[c].startValue / d[c].size;
              b *= d[c].size;
              e = false;
            } else break;
            else if (b < d[c].endValue / d[c + 1].startValue) {
              b /= d[c].endValue / d[c + 1].startValue;
              if (b > 1 / d[c].size) {
                a *= Math.pow(d[c].endValue / d[c].startValue, 1 >= d[c].size ? 1 : Math.log(b) / Math.log(d[c].size)) * b;
                break;
              } else a /= d[c].endValue / d[c].startValue / d[c].size;
              b *= d[c].size;
            } else break;
            e = a * this.viewportMinimum;
          } else {
            a = b = (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed) for (c = 0; c < d.length; c++) {
              if (!(d[c].endValue < this.conversionParameters.minimum)) if (e) if (d[c].startValue < this.conversionParameters.minimum) {
                if (d[c].size && this.conversionParameters.minimum + b * (d[c].endValue - d[c].startValue) / d[c].size < d[c].endValue) {
                  a = 0 >= d[c].size ? 0 : b * (d[c].endValue - d[c].startValue) / d[c].size;
                  break;
                } else a += d[c].endValue - this.conversionParameters.minimum - d[c].size * (d[c].endValue - this.conversionParameters.minimum) / (d[c].endValue - d[c].startValue), b -= d[c].size * (d[c].endValue - this.conversionParameters.minimum) / (d[c].endValue - d[c].startValue);
                e = false;
              } else if (b > d[c].startValue - this.conversionParameters.minimum) {
                b -= d[c].startValue - this.conversionParameters.minimum;
                if (b < d[c].size) {
                  a += (d[c].endValue - d[c].startValue) * (0 === d[c].size ? 1 : b / d[c].size) - b;
                  break;
                } else a += d[c].endValue - d[c].startValue - d[c].size;
                b -= d[c].size;
                e = false;
              } else break;
              else if (b > d[c].startValue - d[c - 1].endValue) {
                b -= d[c].startValue - d[c - 1].endValue;
                if (b < d[c].size) {
                  a += (d[c].endValue - d[c].startValue) * (0 === d[c].size ? 1 : b / d[c].size) - b;
                  break;
                } else a += d[c].endValue - d[c].startValue - d[c].size;
                b -= d[c].size;
              } else break;
            }
            else for (c = d.length - 1; 0 <= c; c--) if (!(d[c].startValue > this.conversionParameters.minimum)) if (e) if (d[c].endValue > this.conversionParameters.minimum) if (d[c].size && this.conversionParameters.minimum + b * (d[c].endValue - d[c].startValue) / d[c].size > d[c].startValue) {
              a = 0 >= d[c].size ? 0 : b * (d[c].endValue - d[c].startValue) / d[c].size;
              break;
            } else a += d[c].startValue - this.conversionParameters.minimum + d[c].size * (this.conversionParameters.minimum - d[c].startValue) / (d[c].endValue - d[c].startValue), b += d[c].size * (this.conversionParameters.minimum - d[c].startValue) / (d[c].endValue - d[c].startValue), e = false;
            else if (b < d[c].endValue - this.conversionParameters.minimum) {
              b -= d[c].endValue - this.conversionParameters.minimum;
              if (b > -1 * d[c].size) {
                a += (d[c].endValue - d[c].startValue) * (0 === d[c].size ? 1 : b / d[c].size) + b;
                break;
              } else a -= d[c].endValue - d[c].startValue - d[c].size;
              b += d[c].size;
              e = false;
            } else break;
            else if (b < d[c].endValue - d[c + 1].startValue) {
              b -= d[c].endValue - d[c + 1].startValue;
              if (b > -1 * d[c].size) {
                a += (d[c].endValue - d[c].startValue) * (0 === d[c].size ? 1 : b / d[c].size) + b;
                break;
              } else a -= d[c].endValue - d[c].startValue - d[c].size;
              b += d[c].size;
            } else break;
            e = this.conversionParameters.minimum + a;
          }
          return e;
        };
        A.prototype.convertValueToPixel = function(a) {
          a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
          return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5;
        };
        A.prototype.getApparentDifference = function(a, e, c, b) {
          var d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          if (this.logarithmic) {
            c = m(c) ? e / a : c;
            for (var f = 0; f < d.length && !(e < d[f].startValue); f++) a > d[f].endValue || (a <= d[f].startValue && e >= d[f].endValue ? c = c / d[f].endValue * d[f].startValue * d[f].size : a >= d[f].startValue && e >= d[f].endValue ? c = c / d[f].endValue * a * Math.pow(d[f].size, Math.log(d[f].endValue / a) / Math.log(d[f].endValue / d[f].startValue)) : a <= d[f].startValue && e <= d[f].endValue ? c = c / e * d[f].startValue * Math.pow(d[f].size, Math.log(e / d[f].startValue) / Math.log(d[f].endValue / d[f].startValue)) : !b && (a > d[f].startValue && e < d[f].endValue) && (c = a * Math.pow(d[f].size, Math.log(e / a) / Math.log(d[f].endValue / d[f].startValue))));
          } else for (c = m(c) ? Math.abs(e - a) : c, f = 0; f < d.length && !(e < d[f].startValue); f++) a > d[f].endValue || (a <= d[f].startValue && e >= d[f].endValue ? c = c - d[f].endValue + d[f].startValue + d[f].size : a > d[f].startValue && e >= d[f].endValue ? c = c - d[f].endValue + a + d[f].size * (d[f].endValue - a) / (d[f].endValue - d[f].startValue) : a <= d[f].startValue && e < d[f].endValue ? c = c - e + d[f].startValue + d[f].size * (e - d[f].startValue) / (d[f].endValue - d[f].startValue) : !b && (a > d[f].startValue && e < d[f].endValue) && (c = a + d[f].size * (e - a) / (d[f].endValue - d[f].startValue)));
          return c;
        };
        A.prototype.setViewPortRange = function(a, e) {
          for (var c = false, b = 0; b < this.dataSeries.length; b++) if (this.dataSeries[b].visible) {
            c = true;
            break;
          }
          this.sessionVariables.newViewportMinimum = this.viewportMinimum = c ? Math.min(a, e) : null;
          this.sessionVariables.newViewportMaximum = this.viewportMaximum = c ? Math.max(a, e) : null;
        };
        A.prototype.getXValueAt = function(a) {
          if (!a) return null;
          var e = null;
          "left" === this._position ? e = this.convertPixelToValue(a.y) : "bottom" === this._position && (e = this.convertPixelToValue(a.x));
          return e;
        };
        A.prototype.calculateValueToPixelConversionParameters = function(a) {
          a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          var e = { pixelPerUnit: null, minimum: null, reference: null }, c = this.lineCoordinates.width, b = this.lineCoordinates.height, c = "bottom" === this._position || "top" === this._position ? c : b, b = Math.abs(this.range);
          if (this.logarithmic) for (var d = 0; d < a.length && !(this.viewportMaximum < a[d].startValue); d++) this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <= a[d].endValue ? c = 0 : this.viewportMinimum <= a[d].startValue && this.viewportMaximum >= a[d].endValue ? (b = b / a[d].endValue * a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100) : c - Math.min(
            a[d].spacing,
            0.1 * c
          )) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (b = b / a[d].endValue * this.viewportMinimum, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100 * Math.log(a[d].endValue / this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * Math.log(a[d].endValue / this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum < a[d].endValue && (b = b / this.viewportMaximum * a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100 * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)));
          else for (d = 0; d < a.length && !(this.viewportMaximum < a[d].startValue); d++) this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <= a[d].endValue ? c = 0 : this.viewportMinimum <= a[d].startValue && this.viewportMaximum >= a[d].endValue ? (b = b - a[d].endValue + a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100) : c - Math.min(a[d].spacing, 0.1 * c)) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (b = b - a[d].endValue + this.viewportMinimum, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100 * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum < a[d].endValue && (b = b - this.viewportMaximum + a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100 * (this.viewportMaximum - a[d].startValue) / (a[d].endValue - a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * (this.viewportMaximum - a[d].startValue) / (a[d].endValue - a[d].startValue)));
          e.minimum = this.viewportMinimum;
          e.maximum = this.viewportMaximum;
          e.range = b;
          if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (e.lnLogarithmBase = Math.log(this.logarithmBase), e.pixelPerUnit = (this.reversed ? -1 : 1) * c * e.lnLogarithmBase / Math.log(Math.abs(b))) : e.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), e.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
          if ("left" === this._position || "right" === this._position) this.logarithmic ? (e.lnLogarithmBase = Math.log(this.logarithmBase), e.pixelPerUnit = (this.reversed ? 1 : -1) * c * e.lnLogarithmBase / Math.log(Math.abs(b))) : e.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), e.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
          this.conversionParameters = e;
        };
        A.prototype.calculateAxisParameters = function() {
          if (this.logarithmic) this.calculateLogarithmicAxisParameters();
          else {
            var a = this.chart.layoutManager.getFreeSpace(), e = false, c = false;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40, b = 4;
            "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
            var a = Math.max(b, Math.floor(this.maxWidth / a)), d, f, n, b = 0;
            !m(this.minimum) && (!m(this.maximum) && this.minimum > this.maximum) && (this.minimum = this.maximum = null);
            !m(this.viewportMinimum) && (!m(this.viewportMaximum) && this.viewportMinimum >= this.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
            if (m(this.options.viewportMinimum) && !m(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
            if (m(this.options.viewportMaximum) && !m(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            else if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            !m(this.minimum) && this.viewportMinimum < this.minimum && (this.viewportMinimum = this.minimum);
            !m(this.maximum) && this.viewportMaximum > this.maximum && (this.viewportMaximum = this.maximum);
            if (this.scaleBreaks) {
              for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++) if ((!m(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !m(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !m(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!m(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !m(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !m(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                this.scaleBreaks._appliedBreaks.splice(b, 1);
                break;
              }
            }
            if ("axisX" === this.type) {
              if (this.dataSeries && 0 < this.dataSeries.length) for (d = 0; d < this.dataSeries.length; d++) "dateTime" === this.dataSeries[d].xValueType && (c = true);
              d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
              f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
              0 === f - d && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, f += b, d -= b);
              Infinity !== this.dataInfo.minDiff ? n = this.dataInfo.minDiff : 1 < f - d ? n = 0.5 * Math.abs(f - d) : (n = this.dataInfo.min === this.dataInfo.max ? 1 : Math.abs(this.dataInfo.max - this.dataInfo.min), c && (e = true));
            } else "axisY" === this.type && (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, n = Math.pow(2, 50), isFinite(d) || isFinite(f) ? isFinite(d) ? isFinite(f) || (f = d) : d = f : (f = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === d && 0 === f ? (f += 9, d = 0) : 0 === f - d ? (b = Math.min(
              Math.abs(0.01 * Math.abs(f)),
              5
            ), f += b, d -= b) : d > f ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(f, d, null, true)), 5), 0 <= f ? d = f - b : f = isFinite(d) ? d + b : 0) : (d >= n || f >= n || d <= -n || f <= -n) && 10 > f - d ? f += 9 : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(d, f, null, true)), 0.05), 0 !== f && (f += b), 0 !== d && (d -= b)), n = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - d ? 0.5 * Math.abs(f - d) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < d && (d = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > f && (f = 0));
            b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? f : this.viewportMaximum, null, true);
            if ("axisX" === this.type && c) {
              this.valueType = "dateTime";
              this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * R.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * R.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * R.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * R.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : b / (15 * R.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * R.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * R.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * R.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * R.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * R.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * R.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : b / (15 * R.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * R.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * R.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * R.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * R.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * R.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * R.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : b / (1 * R.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * R.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * R.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * R.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * R.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * R.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * R.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * R.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : b / (3 * R.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * R.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * R.yearDuration) <= a ? 1 : b / (2 * R.yearDuration) <= a ? 2 : b / (4 * R.yearDuration) <= a ? 4 : Math.floor(A.getNiceNumber(b / (a - 1), true) / R.yearDuration), this.intervalType = "year"));
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = d - n / 2;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = f + n / 2;
              e ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
              this.valueFormatString || (this.valueFormatString = this.autoValueFormatString);
            } else {
              this.intervalType = "number";
              b = A.getNiceNumber(b, false);
              this.interval = this.options && 0 < this.options.interval ? this.options.interval : A.getNiceNumber(b / (a - 1), true);
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? d - n / 2 : Math.floor(d / this.interval) * this.interval;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? f + n / 2 : Math.ceil(f / this.interval) * this.interval;
              0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
            }
            if (null === this.minimum || null === this.maximum) if ("axisX" === this.type ? (d = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === f - d && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, f += b, d -= b), n = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - d ? 0.5 * Math.abs(f - d) : 1) : "axisY" === this.type && (d = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(d) || isFinite(f) ? 0 === d && 0 === f ? (f += 9, d = 0) : 0 === f - d ? (b = Math.min(Math.abs(0.01 * Math.abs(f)), 5), f += b, d -= b) : d > f ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(f, d, null, true)), 5), 0 <= f ? d = f - b : f = isFinite(d) ? d + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(d, f, null, true)), 0.05), 0 !== f && (f += b), 0 !== d && (d -= b)) : (f = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), n = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - d ? 0.5 * Math.abs(f - d) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < d && (d = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > f && (f = 0)), Math.abs(this.getApparentDifference(d, f, null, true)), "axisX" === this.type && c) {
              this.valueType = "dateTime";
              if (null === this.minimum || isNaN(this.minimum)) this.minimum = d - n / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
              if (null === this.maximum || isNaN(this.maximum)) this.maximum = f + n / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum);
            } else this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? d - n / 2 : Math.floor(d / this.interval) * this.interval, this.minimum = Math.min(this.minimum, m(this.sessionVariables.newViewportMinimum) || isNaN(this.sessionVariables.newViewportMinimum) ? m(this.sessionVariables.viewportMinimum) || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum : this.sessionVariables.newViewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? f + n / 2 : Math.ceil(f / this.interval) * this.interval, this.maximum = Math.max(this.maximum, m(this.sessionVariables.newViewportMaximum) || isNaN(this.sessionVariables.newViewportMaximum) ? m(this.sessionVariables.viewportMaximum) || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum : this.sessionVariables.newViewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
            m(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            m(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.range = this.viewportMaximum - this.viewportMinimum;
            this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
            this.valueFormatString || (this.valueFormatString = A.generateValueFormatString(this.range, 2));
          }
        };
        A.prototype.calculateLogarithmicAxisParameters = function() {
          var a = this.chart.layoutManager.getFreeSpace(), e = Math.log(this.logarithmBase), c;
          "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
          var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3), b, d, f, n;
          n = 1;
          !m(this.minimum) && (!m(this.maximum) && this.minimum > this.maximum) && (this.minimum = this.maximum = null);
          !m(this.viewportMinimum) && (!m(this.viewportMaximum) && this.viewportMinimum >= this.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
          if (this.scaleBreaks) {
            for (n = 0; n < this.scaleBreaks._appliedBreaks.length; n++) if ((!m(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[n].startValue || !m(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[n].startValue || !m(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[n].startValue) && (!m(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[n].endValue || !m(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[n].endValue || !m(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[n].endValue)) {
              this.scaleBreaks._appliedBreaks.splice(n, 1);
              break;
            }
          }
          "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === d / b && (n = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), d *= n, b /= n), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / b > this.logarithmBase ? d / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(d) ? (d = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1) : 0 >= b ? b = d : isFinite(d) || (d = b), 1 === b && 1 === d ? (d *= this.logarithmBase - 1 / this.logarithmBase, b = 1) : 1 === d / b ? (n = Math.min(d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), d *= n, b /= n) : b > d ? (n = Math.min(b / d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= d ? b = d / n : d = b * n) : (n = Math.min(d / b * Math.pow(
            this.logarithmBase,
            0.01
          ), Math.pow(this.logarithmBase, 0.04)), 1 !== d && (d *= n), 1 !== b && (b /= n)), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / b > this.logarithmBase ? d / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > d && (d = 1));
          n = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? d : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          var l = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? d : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          this.intervalType = "number";
          n = Math.pow(this.logarithmBase, A.getNiceNumber(Math.abs(Math.log(n) / e), false));
          this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = A.getNiceExponent(Math.log(n) / e / (a - 1), true), c = A.getNiceNumber(l / (a - 1), true));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / e / this.interval));
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? d * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(d) / e / this.interval));
          1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceExponent(Math.ceil(Math.log(n) / e) / (a - 1)), c = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
          if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === d / b && (n = Math.pow(
            this.logarithmBase,
            "undefined" === typeof this.options.interval ? 0.4 : this.options.interval
          ), d *= n, b /= n), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / b > this.logarithmBase ? d / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(d) ? 1 === b && 1 === d ? (d *= this.logarithmBase, b /= this.logarithmBase) : 1 === d / b ? (n = Math.pow(this.logarithmBase, this.interval), d *= n, b /= n) : b > d ? (n = Math.min(0.01 * (b / d), 5), 1 <= d ? b = d / n : d = b * n) : (n = Math.min(d / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== d && (d *= n), 1 !== b && (b /= n)) : (d = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / b > this.logarithmBase ? d / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > d && (d = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / e / this.interval)), m(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? d * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(d) / e / this.interval)), m(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
          this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
          this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
          this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
          b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (e * this.interval) + 0.2) * this.interval);
          this.range = this.viewportMaximum / this.viewportMinimum;
          this.noTicks = a;
          if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
            for (e = Math.floor(this.viewportMinimum / c + 0.5) * c; e < this.viewportMinimum; ) e += c;
            this.equidistantInterval = false;
            this.intervalStartPosition = e;
            this.interval = c;
          } else this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval && (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (e * this.interval) + 0.2) * this.interval))), this.equidistantInterval = true, this.intervalStartPosition = b;
          if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
            e = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
            if (isNaN(e) || !isFinite(e)) e = 2;
            if (2 < e) for (n = 0; n < e - 2; n++) this.valueFormatString += "#";
          }
        };
        A.generateValueFormatString = function(a, e) {
          var c = "#,##0.", b = e;
          1 > a && (b += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(b) || !isFinite(b)) && (b = e);
          for (var d = 0; d < b; d++) c += "#";
          return c;
        };
        A.getNiceExponent = function(a, e) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        A.getNiceNumber = function(a, e) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = e ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        A.prototype.getLabelStartPoint = function() {
          var a = R[this.intervalType + "Duration"] * this.interval, a = new Date(Math.floor(this.viewportMinimum / a) * a);
          if ("millisecond" !== this.intervalType) if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
          else if ("minute" === this.intervalType) {
            if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("hour" === this.intervalType) {
            if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("day" === this.intervalType) {
            if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("week" === this.intervalType) {
            if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("month" === this.intervalType) {
            if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
          return a;
        };
        ra(ga2, T);
        ra(ca2, T);
        ca2.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var e = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Ba(this.parent[this.optionsName]), e = this.parent.options[this.optionsName].indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options[this.optionsName][e] = this.options;
          }
        };
        ca2.prototype.render = function(a) {
          if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
            var e = this.ctx, c = this.ctx.globalAlpha;
            this.ctx = a || this.ctx;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.ctx.clip();
            var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue), d = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
            this.ctx.strokeStyle = this.lineColor;
            this.ctx.fillStyle = this.color;
            this.ctx.beginPath();
            this.ctx.globalAlpha = 1;
            X(this.id);
            var f, n, l, h2, k, m2;
            a = Math.max(this.spacing, 3);
            var p = Math.max(0, this.lineThickness);
            this.ctx.lineWidth = p;
            this.ctx.setLineDash && this.ctx.setLineDash(J(this.lineDashType, p));
            if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position) if (b = 1 === p % 2 ? (b.x << 0) + 0.5 : b.x << 0, n = 1 === p % 2 ? (d.x << 0) + 0.5 : d.x << 0, "top" === this.scaleBreaks.parent._position ? (d = this.chart.plotArea.y1, l = this.chart.plotArea.y2 + p / 2 + 0.5 << 0) : (d = this.chart.plotArea.y2, l = this.chart.plotArea.y1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b - p / 2, y1: d, x2: n + p / 2, y2: l }, this.ctx.moveTo(b, d), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(b, l), this.ctx.lineTo(n, l), this.ctx.lineTo(n, d);
            else if ("wavy" === this.type) {
              h2 = b;
              k = d;
              f = 0.5;
              m2 = (l - k) / a / 3;
              for (var r = 0; r < m2; r++) this.ctx.bezierCurveTo(h2 + f * a, k + a, h2 + f * a, k + 2 * a, h2, k + 3 * a), k += 3 * a, f *= -1;
              this.ctx.bezierCurveTo(h2 + f * a, k + a, h2 + f * a, k + 2 * a, h2, k + 3 * a);
              h2 = n;
              f *= -1;
              this.ctx.lineTo(h2, k);
              for (r = 0; r < m2; r++) this.ctx.bezierCurveTo(h2 + f * a, k - a, h2 + f * a, k - 2 * a, h2, k - 3 * a), k -= 3 * a, f *= -1;
            } else {
              if ("zigzag" === this.type) {
                f = -1;
                k = d + a;
                h2 = b + a;
                m2 = (l - k) / a / 2;
                for (r = 0; r < m2; r++) this.ctx.lineTo(h2, k), h2 += 2 * f * a, k += 2 * a, f *= -1;
                this.ctx.lineTo(h2, k);
                h2 += n - b;
                for (r = 0; r < m2 + 1; r++) this.ctx.lineTo(h2, k), h2 += 2 * f * a, k -= 2 * a, f *= -1;
                this.ctx.lineTo(h2 + f * a, k + a);
              }
            }
            else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position) {
              if (d = 1 === p % 2 ? (d.y << 0) + 0.5 : d.y << 0, l = 1 === p % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, n = this.chart.plotArea.x2 + p / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2, n = this.chart.plotArea.x1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b, y1: d - p / 2, x2: n, y2: l + p / 2 }, this.ctx.moveTo(b, d), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(n, d), this.ctx.lineTo(n, l), this.ctx.lineTo(b, l);
              else if ("wavy" === this.type) {
                h2 = b;
                k = d;
                f = 0.5;
                m2 = (n - h2) / a / 3;
                for (r = 0; r < m2; r++) this.ctx.bezierCurveTo(h2 + a, k + f * a, h2 + 2 * a, k + f * a, h2 + 3 * a, k), h2 += 3 * a, f *= -1;
                this.ctx.bezierCurveTo(h2 + a, k + f * a, h2 + 2 * a, k + f * a, h2 + 3 * a, k);
                k = l;
                f *= -1;
                this.ctx.lineTo(h2, k);
                for (r = 0; r < m2; r++) this.ctx.bezierCurveTo(h2 - a, k + f * a, h2 - 2 * a, k + f * a, h2 - 3 * a, k), h2 -= 3 * a, f *= -1;
              } else if ("zigzag" === this.type) {
                f = 1;
                k = d - a;
                h2 = b + a;
                m2 = (n - h2) / a / 2;
                for (r = 0; r < m2; r++) this.ctx.lineTo(h2, k), k += 2 * f * a, h2 += 2 * a, f *= -1;
                this.ctx.lineTo(h2, k);
                k += l - d;
                for (r = 0; r < m2 + 1; r++) this.ctx.lineTo(
                  h2,
                  k
                ), k += 2 * f * a, h2 -= 2 * a, f *= -1;
                this.ctx.lineTo(h2 + a, k + f * a);
              }
            }
            0 < p && this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.globalAlpha = this.fillOpacity;
            this.ctx.globalCompositeOperation = "destination-over";
            this.ctx.fill();
            this.ctx.restore();
            this.ctx.globalAlpha = c;
            this.ctx = e;
          }
        };
        ra(ia2, T);
        ia2.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var e = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Ba(this.parent.stripLines), e = this.parent.options.stripLines.indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options.stripLines[e] = this.options;
          }
        };
        ia2.prototype.render = function() {
          this.ctx.save();
          var a = this.parent.getPixelCoordinatesOnAxis(this.value), e = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
          if (0 < e) {
            var c = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var b = this.ctx.globalAlpha;
            this.ctx.globalAlpha = c;
            X(this.id);
            var d, f, h2, l;
            this.ctx.lineWidth = e;
            this.ctx.setLineDash && this.ctx.setLineDash(J(this.lineDashType, e));
            if ("bottom" === this.parent._position || "top" === this.parent._position) a = "pixel" === this._thicknessType ? a.x : (this.parent.convertValueToPixel(this.endValue) + this.parent.convertValueToPixel(this.startValue)) / 2, d = f = 1 === this.ctx.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, h2 = this.chart.plotArea.y1, l = this.chart.plotArea.y2, this.bounds = { x1: d - e / 2, y1: h2, x2: f + e / 2, y2: l };
            else if ("left" === this.parent._position || "right" === this.parent._position) a = "pixel" === this._thicknessType ? a.y : (this.parent.convertValueToPixel(this.endValue) + this.parent.convertValueToPixel(this.startValue)) / 2, h2 = l = 1 === this.ctx.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, d = this.chart.plotArea.x1, f = this.chart.plotArea.x2, this.bounds = { x1: d, y1: h2 - e / 2, x2: f, y2: l + e / 2 };
            this.ctx.moveTo(d, h2);
            this.ctx.lineTo(f, l);
            this.ctx.stroke();
            this.ctx.globalAlpha = b;
          }
          this.ctx.restore();
        };
        ra(ea2, T);
        ea2.prototype.showAt = function(a) {
          if (!this.enabled) return false;
          var e = this.chart, c = false;
          e.resetOverlayedCanvas();
          e.clearedOverlayedCanvas = this.parent.type;
          this.chart.renderCrosshairs(this.parent, false);
          var b, d = "xySwapped" === e.plotInfo.axisPlacement;
          "bottom" === this.parent._position ? b = d ? e.axisY : e.axisX : "top" === this.parent._position ? b = d ? e.axisY2 : e.axisX2 : "left" === this.parent._position ? b = d ? e.axisX : e.axisY : "right" === this.parent._position && (b = d ? e.axisX2 : e.axisY2);
          if (b) for (d = 0; d < b.length; d++) this.parent === b[d] && (b[d]._crosshairValue = a >= b[d].viewportMinimum && a <= b[d].viewportMaximum ? a : null);
          b = ["axisX", "axisX2", "axisY", "axisY2"];
          for (d = 0; d < b.length; d++) for (var f = b[d], h2 = 0; h2 < e[f].length; h2++) {
            var l = e[f][h2], s3 = l._crosshairValue;
            l.crosshair && l.crosshair.enabled && (this.parent === l && (l.sessionVariables.crosshairShownByPixel = false, l.sessionVariables.crosshairValue = l.crosshair._updatedValue = s3 || a), !m(s3) && s3 >= l.viewportMinimum && s3 <= l.viewportMaximum ? (l.showCrosshair(s3), this === l.crosshair && (c = true)) : void 0 !== s3 && (l.sessionVariables.crosshairValue = null, l.crosshair._updatedValue = null));
          }
          this.chart.toolTip && (this.chart.toolTip._entries && this.chart.sessionVariables._dataHighlighted) && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
          return c;
        };
        ea2.prototype.hide = function() {
          this.chart.resetOverlayedCanvas();
          this.chart.toolTip && (this.chart.toolTip._entries && this.chart.sessionVariables._dataHighlighted) && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
          this.chart.renderCrosshairs(this.parent, false);
          this.parent.sessionVariables._crosshairHidden = this._hidden = true;
        };
        ea2.prototype.render = function(a, e, c) {
          var b, d, f, h2, l = null, s3 = null, k = null, q = "";
          this.valueFormatString || ("dateTime" === this.parent.valueType ? this.valueFormatString = this.parent.valueFormatString : (k = 0, k = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0), this.valueFormatString = A.generateValueFormatString(this.parent.range, k)));
          var p = null === this.opacity ? 1 : this.opacity, r = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness), g = this.chart.overlaidCanvasCtx, u2 = g.globalAlpha;
          g.beginPath();
          g.strokeStyle = this.color;
          g.lineWidth = r;
          g.save();
          this.labelFontSize = Math.abs(m(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
          this.labelMaxWidth = m(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
          this.labelMaxHeight = m(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 1.5 * this.labelFontSize + ("object" === typeof this.labelPadding ? (this.labelPadding.top || 0) + (this.labelPadding.bottom || 0) : 2 * this.labelPadding);
          k = new ma(g, {
            x: 0,
            y: 0,
            backgroundColor: this.labelBackgroundColor,
            borderColor: this.labelBorderColor,
            borderThickness: this.labelBorderThickness,
            cornerRadius: this.labelCornerRadius,
            maxWidth: this.labelMaxWidth,
            maxHeight: this.labelMaxHeight,
            angle: this.labelAngle,
            text: q,
            textAlign: this.labelTextAlign,
            fontSize: this.labelFontSize,
            fontFamily: this.labelFontFamily,
            fontWeight: this.labelFontWeight,
            padding: this.labelPadding,
            fontColor: this.labelFontColor,
            fontStyle: this.labelFontStyle,
            textBaseline: "middle"
          });
          if (this.snapToDataPoint) {
            var x3 = 0, q = [];
            if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
              var y = null;
              if ("bottom" === this.parent._position || "top" === this.parent._position) x3 = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: this.parent.sessionVariables.crosshairShownByPixel ? this.chart.sessionVariables.mouseY : e });
              else if ("left" === this.parent._position || "right" === this.parent._position) x3 = this.parent.convertPixelToValue({ y: e });
              for (var t = 0; t < this.parent.dataSeries.length; t++) (y = this.parent.dataSeries[t].getDataPointAtX(x3, true, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[t], null !== y.dataPoint.y && y.dataSeries.visible && q.push(y));
              y = null;
              if (0 === q.length) return;
              q.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              var w = y = 0;
              yPercent = cumulativeY = 0;
              for (var x3 = Infinity, v, t = 0; t < q.length; t++) {
                if ("rangeBar" === q[t].dataSeries.type || "error" === q[t].dataSeries.type) {
                  if (q[t].dataPoint.y) for (var B2 = 0; B2 < q[t].dataPoint.y.length; B2++) w = Math.abs(a - this.parent.convertValueToPixel(q[t].dataPoint.y[B2])), w <= x3 && (x3 = w, y = t);
                } else "stackedBar" === q[t].dataSeries.type ? (cumulativeY = q[t].dataSeries.dataPointEOs[q[t].index].cumulativeY, w = Math.abs(a - this.parent.convertValueToPixel(cumulativeY)), w <= x3 && (x3 = w, y = t)) : "stackedBar100" === q[t].dataSeries.type ? (w = q[0].dataPoint.x.getTime ? q[0].dataPoint.x.getTime() : q[0].dataPoint.x, m(v) && (v = Math.abs(a - this.parent.convertValueToPixel(100 * (q[0].dataSeries.dataPointEOs[q[0].index].cumulativeY / q[0].dataSeries.plotUnit.dataPointYSums[w])))), cumulativeY = q[t].dataSeries.dataPointEOs[q[t].index].cumulativeY, w = q[t].dataPoint.x.getTime ? q[t].dataPoint.x.getTime() : q[t].dataPoint.x, yPercent = 100 * (cumulativeY / q[t].dataSeries.plotUnit.dataPointYSums[w]), w = Math.abs(a - this.parent.convertValueToPixel(yPercent)), w <= v && (v = w, y = t)) : (w = Math.abs(a - this.parent.convertValueToPixel(q[t].dataPoint.y)), w <= x3 && (x3 = w, y = t));
                m(v) || (x3 = Math.min(x3, v));
              }
              v = q[y];
              t = 0;
              if ("bottom" === this.parent._position || "top" === this.parent._position) {
                if ("rangeBar" === v.dataSeries.type || "error" === v.dataSeries.type) {
                  x3 = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                  for (q = 0; q < v.dataPoint.y.length; q++) w = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[q])), w < x3 && (x3 = w, t = q);
                  l = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[t]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[t]) << 0;
                  this.value = v.dataPoint.y[t];
                  0 !== v.dataPoint.y[t] % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0)));
                  k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: v.dataPoint.y[t] }) : m(this.options.label) ? fa(v.dataPoint.y[t], this.valueFormatString, this.chart._cultureInfo) : this.label;
                } else "stackedBar" === v.dataSeries.type ? (x3 = Math.abs(a - this.parent.convertValueToPixel(q[0].dataPoint.y)), cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY, l = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(cumulativeY) << 0) + 0.5 : this.parent.convertValueToPixel(cumulativeY) << 0, this.value = cumulativeY, 0 !== cumulativeY % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0))), k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: cumulativeY }) : m(this.options.label) ? fa(cumulativeY, this.valueFormatString, this.chart._cultureInfo) : this.label) : "stackedBar100" === v.dataSeries.type ? (x3 = Math.abs(a - this.parent.convertValueToPixel(q[0].dataPoint.y)), cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY, w = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, yPercent = 100 * (cumulativeY / v.dataSeries.plotUnit.dataPointYSums[w]), l = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(yPercent) << 0) + 0.5 : this.parent.convertValueToPixel(yPercent) << 0, this.value = yPercent, 0 !== yPercent % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0))), k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: yPercent }) : m(this.options.label) ? fa(yPercent, this.valueFormatString, this.chart._cultureInfo) : this.label) : (l = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y) << 0, this.value = v.dataPoint.y, 0 !== v.dataPoint.y % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0))), k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent,
                  crosshair: this.options,
                  value: v.dataPoint.y
                }) : m(this.options.label) ? fa(v.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label);
                b = d = l;
                f = this.chart.plotArea.y1;
                h2 = this.chart.plotArea.y2;
                this.bounds = { x1: b - r / 2, y1: f, x2: d + r / 2, y2: h2 };
                k.x = b - k.measureText().width / 2;
                k.x + k.width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.width : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
                k.y + k.height > this.chart.bounds.y2 ? k.y = this.chart.bounds.y2 - k.height : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
              } else if ("left" === this.parent._position || "right" === this.parent._position) {
                f = h2 = s3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
                b = this.chart.plotArea.x1;
                d = this.chart.plotArea.x2;
                this.bounds = { x1: b, y1: f - r / 2, x2: d, y2: h2 + r / 2 };
                t = false;
                if (this.parent.labels) for (x3 = Math.ceil(this.parent.interval), q = 0; q < this.parent.viewportMaximum; q += x3) if (this.parent.labels[q]) t = true;
                else {
                  t = false;
                  break;
                }
                if (t) {
                  if ("axisX" === this.parent.type) for (x3 = this.parent.convertPixelToValue({ y: e }), y = null, t = 0; t < this.parent.dataSeries.length; t++) (y = this.parent.dataSeries[t].getDataPointAtX(x3, true, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: v.dataPoint.x }) : m(this.options.label) ? y.dataPoint.label : this.label);
                } else "dateTime" !== this.parent.valueType || this.parent.logarithmic ? (0 !== v.dataPoint.x % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0))), k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: v.dataPoint.x }) : m(this.options.label) ? fa(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label) : k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent,
                  crosshair: this.options,
                  value: v.dataPoint.x
                }) : m(this.options.label) ? Ea(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = v.dataPoint.x;
                k.y = h2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              }
            } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              x3 = this.parent.convertPixelToValue({ x: a });
              for (t = 0; t < this.parent.dataSeries.length; t++) (y = this.parent.dataSeries[t].getDataPointAtX(x3, true, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[t], null !== y.dataPoint.y && y.dataSeries.visible && q.push(y));
              if (0 === q.length) return;
              q.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              v = q[0];
              b = d = l = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
              f = this.chart.plotArea.y1;
              h2 = this.chart.plotArea.y2;
              this.bounds = { x1: b - r / 2, y1: f, x2: d + r / 2, y2: h2 };
              t = false;
              if (this.parent.labels) for (x3 = Math.ceil(this.parent.interval), q = 0; q < this.parent.viewportMaximum; q += x3) if (this.parent.labels[q]) t = true;
              else {
                t = false;
                break;
              }
              if (t) {
                if ("axisX" === this.parent.type) for (x3 = this.parent.convertPixelToValue({ x: a }), y = null, t = 0; t < this.parent.dataSeries.length; t++) (y = this.parent.dataSeries[t].getDataPointAtX(x3, true, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: v.dataPoint.x }) : m(this.options.label) ? y.dataPoint.label : this.label);
              } else "dateTime" !== this.parent.valueType || this.parent.logarithmic ? (0 !== v % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0))), k.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent,
                crosshair: this.options,
                value: v.dataPoint.x
              }) : m(this.options.label) ? fa(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label) : k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: v.dataPoint.x }) : m(this.options.label) ? Ea(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = v.dataPoint.x;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position) {
              !m(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (x3 = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: this.parent.sessionVariables.crosshairShownByPixel ? this.chart.sessionVariables.mouseX : a }));
              for (t = 0; t < this.parent.dataSeries.length; t++) (y = this.parent.dataSeries[t].getDataPointAtX(x3, true, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[t], null !== y.dataPoint.y && y.dataSeries.visible && q.push(y));
              if (0 === q.length) return;
              q.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              w = y = 0;
              x3 = Infinity;
              for (t = 0; t < q.length; t++) {
                if ("rangeColumn" === q[t].dataSeries.type || "rangeArea" === q[t].dataSeries.type || "error" === q[t].dataSeries.type || "rangeSplineArea" === q[t].dataSeries.type || "candlestick" === q[t].dataSeries.type || "ohlc" === q[t].dataSeries.type || "boxAndWhisker" === q[t].dataSeries.type) {
                  if (q[t].dataPoint.y) for (B2 = 0; B2 < q[t].dataPoint.y.length; B2++) w = Math.abs(e - this.parent.convertValueToPixel(q[t].dataPoint.y[B2])), w <= x3 && (x3 = w, y = t);
                } else "stackedColumn" === q[t].dataSeries.type ? (a = q[t].dataSeries.dataPointEOs[q[t].index].cumulativeY, w = Math.abs(e - this.parent.convertValueToPixel(a)), w <= x3 && (x3 = w, y = t)) : "stackedArea" === q[t].dataSeries.type ? (a = q[t].dataSeries.dataPointEOs[q[t].index].cumulativeY, w = Math.abs(e - this.parent.convertValueToPixel(a)), w <= x3 && (x3 = w, y = t)) : "stackedColumn100" === q[t].dataSeries.type || "stackedArea100" === q[t].dataSeries.type ? (w = q[0].dataPoint.x.getTime ? q[0].dataPoint.x.getTime() : q[0].dataPoint.x, m(v) && (v = Math.abs(e - this.parent.convertValueToPixel(100 * (q[0].dataSeries.dataPointEOs[q[0].index].cumulativeY / q[0].dataSeries.plotUnit.dataPointYSums[w])))), "stackedColumn100" === q[t].dataSeries.type ? (s3 = q[t].dataSeries.dataPointEOs[q[t].index].cumulativeY, w = q[t].dataPoint.x.getTime ? q[t].dataPoint.x.getTime() : q[t].dataPoint.x, a = 100 * (s3 / q[t].dataSeries.plotUnit.dataPointYSums[w]), w = Math.abs(e - this.parent.convertValueToPixel(a)), w <= v && (v = w, y = t)) : "stackedArea100" === q[t].dataSeries.type && (s3 = q[t].dataSeries.dataPointEOs[q[t].index].cumulativeY, w = q[t].dataPoint.x.getTime ? q[t].dataPoint.x.getTime() : q[t].dataPoint.x, a = 100 * (s3 / q[t].dataSeries.plotUnit.dataPointYSums[w]), w = Math.abs(e - this.parent.convertValueToPixel(a)), w <= v && (v = w, y = t))) : "waterfall" === q[t].dataSeries.type ? (w = Math.abs(e - this.parent.convertValueToPixel(q[t].dataSeries.dataPointEOs[q[t].index].cumulativeSum)), w <= x3 && (v = x3 = w, y = t)) : (w = Math.abs(e - this.parent.convertValueToPixel(q[t].dataPoint.y)), w <= x3 && (x3 = w, y = t));
                m(v) || (x3 = Math.min(x3, v));
              }
              v = q[y];
              t = 0;
              if ("rangeColumn" === v.dataSeries.type || "rangeArea" === v.dataSeries.type || "error" === v.dataSeries.type || "rangeSplineArea" === v.dataSeries.type || "candlestick" === v.dataSeries.type || "ohlc" === v.dataSeries.type || "boxAndWhisker" === v.dataSeries.type) {
                x3 = Math.abs(e - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                for (q = 0; q < v.dataPoint.y.length; q++) w = Math.abs(e - this.parent.convertValueToPixel(v.dataPoint.y[q])), w < x3 && (x3 = w, t = q);
                s3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[t]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[t]) << 0;
                0 !== v.dataPoint.y[t] % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0)));
                k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: v.dataPoint.y[t] }) : m(this.options.label) ? fa(v.dataPoint.y[t], this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = v.dataPoint.y[t];
              } else "stackedColumn" === v.dataSeries.type ? (a = v.dataSeries.dataPointEOs[v.index].cumulativeY, s3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(a) << 0) + 0.5 : this.parent.convertValueToPixel(a) << 0, 0 !== a % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0))), k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: a }) : m(this.options.label) ? fa(a, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = a) : "stackedArea" === v.dataSeries.type ? (a = v.dataSeries.dataPointEOs[v.index].cumulativeY, s3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(a) << 0) + 0.5 : this.parent.convertValueToPixel(a) << 0, 0 !== a % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(
                this.parent.range,
                Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0)
              )), k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: a }) : m(this.options.label) ? fa(a, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = a) : "stackedColumn100" === v.dataSeries.type ? (s3 = v.dataSeries.dataPointEOs[v.index].cumulativeY, w = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, a = 100 * (s3 / v.dataSeries.plotUnit.dataPointYSums[w]), s3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(a) << 0) + 0.5 : this.parent.convertValueToPixel(a) << 0, 0 !== a % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0))), k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: a }) : m(this.options.label) ? fa(a, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = a) : "stackedArea100" === v.dataSeries.type ? (s3 = v.dataSeries.dataPointEOs[v.index].cumulativeY, w = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, a = 100 * (s3 / v.dataSeries.plotUnit.dataPointYSums[w]), s3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(a) << 0) + 0.5 : this.parent.convertValueToPixel(a) << 0, 0 !== a % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0))), k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: a }) : m(this.options.label) ? fa(a, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = a) : "waterfall" === v.dataSeries.type ? (s3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0, 0 !== v.dataSeries.dataPointEOs[v.index].cumulativeSum % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0))), k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: v.dataSeries.dataPointEOs[v.index].cumulativeSum }) : m(this.options.label) ? fa(v.dataSeries.dataPointEOs[v.index].cumulativeSum, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = v.dataSeries.dataPointEOs[v.index].cumulativeSum) : (s3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y) << 0, 0 !== v.dataPoint.y % 1 && m(this.options.valueFormatString) && (this.valueFormatString = A.generateValueFormatString(this.parent.range, Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0))), k.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent,
                crosshair: this.options,
                value: v.dataPoint.y
              }) : m(this.options.label) ? fa(v.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = v.dataPoint.y);
              f = h2 = s3;
              b = this.chart.plotArea.x1;
              d = this.chart.plotArea.x2;
              this.bounds = { x1: b, y1: f - r / 2, x2: d, y2: h2 + r / 2 };
              k.y = h2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
              k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
              "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            }
            q = null;
            g.globalAlpha = p;
            0 < r && g.setLineDash && g.setLineDash(J(this.lineDashType, r));
            if ("bottom" === this.parent._position || "top" === this.parent._position) "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2), this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < r && (g.moveTo(b, f), g.lineTo(d, h2), g.stroke(), this.parent.sessionVariables._crosshairHidden = this._hidden = false);
            if ("left" === this.parent._position || "right" === this.parent._position) "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width), this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < r && (g.moveTo(b, f), g.lineTo(d, h2), g.stroke(), this.parent.sessionVariables._crosshairHidden = this._hidden = false);
          } else {
            if ("bottom" === this.parent._position || "top" === this.parent._position) b = d = l = 1 === g.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, f = this.chart.plotArea.y1, h2 = this.chart.plotArea.y2, this.bounds = { x1: b - r / 2, y1: f, x2: d + r / 2, y2: h2 };
            else if ("left" === this.parent._position || "right" === this.parent._position) f = h2 = s3 = 1 === g.lineWidth % 2 ? (e << 0) + 0.5 : e << 0, b = this.chart.plotArea.x1, d = this.chart.plotArea.x2, this.bounds = { x1: b, y1: f - r / 2, x2: d, y2: h2 + r / 2 };
            if ("xySwapped" === this.chart.plotInfo.axisPlacement) if ("left" === this.parent._position || "right" === this.parent._position) {
              t = false;
              if (this.parent.labels) for (x3 = Math.ceil(this.parent.interval), q = 0; q < this.parent.viewportMaximum; q += x3) if (this.parent.labels[q]) t = true;
              else {
                t = false;
                break;
              }
              if (t) {
                if ("axisX" === this.parent.type) for (x3 = this.parent.convertPixelToValue({ y: e }), y = null, t = 0; t < this.parent.dataSeries.length; t++) (y = this.parent.dataSeries[t].getDataPointAtX(x3, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(a) : c }) : m(this.options.label) ? y.dataPoint.label : this.label);
              } else k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(e) : c }) : m(this.options.label) ? fa(m(c) ? this.parent.convertPixelToValue(e) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(e) : c }) : m(this.options.label) ? Ea(m(c) ? this.parent.convertPixelToValue(e) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              k.y = e + k.fontSize / 2 - k.measureText().height / 2 + 2;
              k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
              "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x1 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            } else {
              if ("bottom" === this.parent._position || "top" === this.parent._position) k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(a) : c }) : m(this.options.label) ? fa(m(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            }
            else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              t = false;
              q = "";
              if (this.parent.labels) for (x3 = Math.ceil(this.parent.interval), q = 0; q < this.parent.viewportMaximum; q += x3) if (this.parent.labels[q]) t = true;
              else {
                t = false;
                break;
              }
              if (t) {
                if ("axisX" === this.parent.type) for (x3 = this.parent.convertPixelToValue({ x: a }), y = null, t = 0; t < this.parent.dataSeries.length; t++) (y = this.parent.dataSeries[t].getDataPointAtX(x3, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(a) : c }) : m(this.options.label) ? m(c) ? y.dataPoint.label : c : this.label);
              } else k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: m(c) ? 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" : c }) : m(this.options.label) ? fa(m(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(a) : c }) : m(this.options.label) ? Ea(m(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position) k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(e) : c }) : m(this.options.label) ? fa(m(c) ? this.parent.convertPixelToValue(e) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.y = e + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            "left" === this.parent._position && k.x < this.chart.bounds.x1 ? k.x = this.chart.bounds.x1 : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.measureText().width : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
            g.globalAlpha = p;
            0 < r && ("bottom" !== this.parent._position || d <= this.parent.lineCoordinates.x2) && (g.setLineDash && g.setLineDash(J(
              this.lineDashType,
              r
            )), g.moveTo(b, f), g.lineTo(d, h2), g.stroke(), this.parent.sessionVariables._crosshairHidden = this._hidden = false);
            this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(e);
          }
          if ("bottom" === this.parent._position || "top" === this.parent._position) this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(l);
          if ("left" === this.parent._position || "right" === this.parent._position) this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(s3);
          this._textBlock = k;
          this._label = c;
          m(c) || this.renderLabel();
          g.restore();
          g.globalAlpha = u2;
        };
        ea2.prototype.renderLabel = function() {
          this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && (m(this._textBlock) || (m(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden) || this._textBlock.render(true), m(this._label) && this.dispatchEvent("updated", { chart: this.chart, crosshair: this.options, axis: this.parent, value: this.value }, this.parent));
        };
        ra(oa, T);
        oa.prototype._updateOptions = function() {
          this.updateOption("enabled");
          this.updateOption("shared");
          this.updateOption("animationEnabled");
          this.updateOption("content");
          this.updateOption("contentFormatter");
          this.updateOption("reversed");
          this.updateOption("backgroundColor");
          this.updateOption("borderColor");
          this.updateOption("borderThickness");
          this.updateOption("cornerRadius");
          this.updateOption("fontSize");
          this.updateOption("fontColor");
          this.updateOption("fontFamily");
          this.updateOption("fontWeight");
          this.updateOption("fontStyle");
        };
        oa.prototype._initialize = function() {
          this.updateOption("updated");
          this.updateOption("hidden");
          if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.pointerEvents = "none";
            this.container.style.display = "none";
            var a = document.createElement("div");
            a.style.width = "auto";
            a.style.height = "auto";
            a.style.minWidth = "50px";
            a.style.lineHeight = "normal";
            a.style.margin = "0px 0px 0px 0px";
            a.style.padding = "5px";
            a.style.fontFamily = "Calibri, Arial, Georgia, serif";
            a.style.fontWeight = "normal";
            a.style.fontStyle = u ? "italic" : "normal";
            a.style.fontSize = "14px";
            a.style.color = "#000000";
            a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
            a.style.textAlign = "left";
            a.style.border = "2px solid gray";
            a.style.background = u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
            a.style.textIndent = "0px";
            a.style.whiteSpace = "nowrap";
            a.style.borderRadius = "5px";
            a.style.MozUserSelect = "none";
            a.style.WebkitUserSelect = "none";
            a.style.msUserSelect = "none";
            a.style.userSelect = "none";
            u || (a.style.filter = "alpha(opacity = 90)", a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
            a.innerText = "Sample Tooltip";
            this.container.appendChild(a);
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container);
          }
        };
        oa.prototype.mouseMoveHandler = function(a, e) {
          this._lastUpdated && 4 > (/* @__PURE__ */ new Date()).getTime() - this._lastUpdated || (this._lastUpdated = (/* @__PURE__ */ new Date()).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, e), this.enabled && this._updatedEventParameters && !isNaN(this._prevX) && !isNaN(this._prevY) && this.container && this.container.style && this.dispatchEvent("none" === this.container.style.display ? "hidden" : "updated", this._updatedEventParameters, this));
        };
        oa.prototype._updateToolTip = function(a, e, c) {
          c = "undefined" === typeof c ? true : c;
          this._updateOptions();
          this.container || this._initialize();
          this.enabled || this.hide();
          if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof e) {
              if (isNaN(this._prevX) || isNaN(this._prevY)) return;
              a = this._prevX;
              e = this._prevY;
            } else this._prevX = a, this._prevY = e;
            var b = null, d = null, f = [], h2 = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
              var l = [];
              if (this.chart.axisX) for (var s3 = 0; s3 < this.chart.axisX.length; s3++) {
                for (var h2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[s3].convertPixelToValue({ y: e }) : this.chart.axisX[s3].convertPixelToValue({ x: a }), k = null, b = 0; b < this.chart.axisX[s3].dataSeries.length; b++) (k = this.chart.axisX[s3].dataSeries[b].getDataPointAtX(h2, c, true)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[s3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && l.push(k));
                k = null;
              }
              if (this.chart.axisX2) for (s3 = 0; s3 < this.chart.axisX2.length; s3++) {
                h2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[s3].convertPixelToValue({ y: e }) : this.chart.axisX2[s3].convertPixelToValue({ x: a });
                k = null;
                for (b = 0; b < this.chart.axisX2[s3].dataSeries.length; b++) (k = this.chart.axisX2[s3].dataSeries[b].getDataPointAtX(h2, c, true)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[s3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && l.push(k));
                k = null;
              }
              if (0 === l.length) return;
              l.sort(function(a2, b2) {
                return a2.dataSeries.axisX.logarithmic || b2.dataSeries.axisX.logarithmic ? a2.distance - b2.distance : a2.distance / a2.dataSeries.axisX.range - b2.distance / b2.dataSeries.axisX.range;
              });
              c = l[0];
              for (b = 0; b < l.length; b++) l[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && f.push(l[b]);
              l = null;
            } else {
              if (b = this.chart.getDataPointAtXY(a, e, c)) this.currentDataPointIndex = b.dataPointIndex, this.currentSeriesIndex = b.dataSeries.index;
              else if (u) if (b = bb(a, e, this.chart._eventManager.ghostCtx), 0 < b && "undefined" !== typeof this.chart._eventManager.objectMap[b]) {
                b = this.chart._eventManager.objectMap[b];
                if ("legendItem" === b.objectType) return;
                this.currentSeriesIndex = b.dataSeriesIndex;
                this.currentDataPointIndex = 0 <= b.dataPointIndex ? b.dataPointIndex : -1;
              } else this.currentDataPointIndex = -1;
              else this.currentDataPointIndex = -1;
              if (0 <= this.currentSeriesIndex) {
                d = this.chart.data[this.currentSeriesIndex];
                k = {};
                if (0 <= this.currentDataPointIndex) b = d.dataPoints[this.currentDataPointIndex], k.dataSeries = d, k.dataPoint = b, k.index = this.currentDataPointIndex, k.distance = Math.abs(b.x - h2), "waterfall" === d.type && (k.cumulativeSumYStartValue = d.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, k.cumulativeSum = d.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                else if (this.enabled && d && ("line" === d.type || "stepLine" === d.type || "spline" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "stackedArea" === d.type || "stackedArea100" === d.type || "rangeArea" === d.type || "rangeSplineArea" === d.type || "candlestick" === d.type || "ohlc" === d.type || "boxAndWhisker" === d.type)) h2 = d.axisX.convertPixelToValue({ x: a }), k = d.getDataPointAtX(h2, c, true), m(k) || (k.dataSeries = d, this.currentDataPointIndex = k.index, b = k.dataPoint);
                else {
                  "toolTip" === this.chart.clearedOverlayedCanvas && (this.chart.resetOverlayedCanvas(), this.chart.clearedOverlayedCanvas = null, this.chart.sessionVariables._dataHighlighted = false, this.container && (this.container.style.display = "none"));
                  return;
                }
                if (!m(k) && !m(k.dataPoint) && !m(k.dataPoint.y)) if (k.dataSeries.axisY) if (0 < k.dataPoint.y.length) {
                  for (b = c = 0; b < k.dataPoint.y.length; b++) k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ? c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                  c < k.dataPoint.y.length && c > -k.dataPoint.y.length && f.push(k);
                } else "column" === d.type || "bar" === d.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && f.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && f.push(k) : "bubble" === d.type ? (c = this.chart._eventManager.objectMap[d.dataPointIds[k.index]].size / 2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && f.push(k)) : "waterfall" === d.type ? (c = 0, k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++, k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && f.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === d.type || "stackedBar" === d.type || "stackedArea" === d.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && f.push(k);
                else f.push(k);
              }
            }
            if (0 < f.length) {
              if (this._entries = f, this.highlightObjects(f), this.enabled) {
                c = "";
                c = this.getToolTipInnerHTML({ entries: f });
                if (null !== c) {
                  this.contentDiv.innerHTML = c;
                  if (this.isToolTipDefinedInData && m(this.options.content) && m(this.options.contentFormatter)) for (h2 = this.contentDiv.getElementsByTagName("span"), b = 0; b < h2.length; b++) h2[b] && (h2[b].style.color = h2[b].getAttribute("data-color"));
                  h2 = false;
                  "none" === this.container.style.display && (h2 = true, this.container.style.display = "block");
                  try {
                    this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 < f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[d.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" : "normal";
                  } catch (q) {
                  }
                  "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type || "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                  0 > a && (a = Math.max(0, a + this.container.clientWidth + 20));
                  a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                  e = 1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !== f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !== f[0].dataSeries.type && "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type ? "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) : e : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
                  e = -e + 10;
                  0 < e + this.container.clientHeight + 5 && (e -= e + this.container.clientHeight + 5 - 0);
                  this.fixMozTransitionDelay(a, e);
                  !this.animationEnabled || h2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                  this.positionLeft = a;
                  this.positionBottom = e;
                  this.container.style.left = a + "px";
                  this.container.style.bottom = e + "px";
                } else this.hide(false), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
                e = [];
                for (b = 0; b < f.length; b++) e.push({ xValue: f[b].dataPoint.x, dataPoint: f[b].dataPoint, dataSeries: f[b].dataSeries, dataPointIndex: f[b].index, dataSeriesIndex: f[b].dataSeries._index });
                this._updatedEventParameters = {
                  chart: this.chart,
                  toolTip: this.options,
                  content: c,
                  entries: e
                };
              }
            } else this.hide(), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
            this._dataSeriesIndex = this._xValue = null;
          }
        };
        oa.prototype.highlightObjects = function(a) {
          var e = this.chart.overlaidCanvasCtx;
          m(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas ? (this.chart.resetOverlayedCanvas(), e.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip", this.chart.sessionVariables._dataHighlighted = false) : this.chart.clearedOverlayedCanvas = null;
          e.save();
          var c = this.chart.plotArea, b = 0;
          e.beginPath();
          e.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
          e.clip();
          for (c = 0; c < a.length; c++) {
            var d = a[c];
            if ((d = this.chart._eventManager.objectMap[d.dataSeries.dataPointIds[d.index]]) && d.objectType && "dataPoint" === d.objectType) {
              var b = this.chart.data[d.dataSeriesIndex], f = b.dataPoints[d.dataPointIndex], h2 = d.dataPointIndex;
              false === f.highlightEnabled || true !== b.highlightEnabled && true !== f.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (f = b.getMarkerProperties(h2, d.x1, d.y1, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), Y.drawMarkers([f]), "undefined" !== typeof d.y2 && (f = b.getMarkerProperties(h2, d.x1, d.y2, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), Y.drawMarkers([f])), this.chart.sessionVariables._dataHighlighted = true) : "bubble" === b.type ? (f = b.getMarkerProperties(h2, d.x1, d.y1, this.chart.overlaidCanvasCtx), f.size = d.size, f.color = "white", f.borderColor = "white", e.globalAlpha = 0.3, Y.drawMarkers([f]), e.globalAlpha = 1, this.chart.sessionVariables._dataHighlighted = true) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? (aa(e, d.x1, d.y1, d.x2, d.y2, "white", 0, null, false, false, false, false, 0.3), this.chart.sessionVariables._dataHighlighted = true) : "pie" === b.type || "doughnut" === b.type ? (sa2(e, d.center, d.radius, "white", b.type, d.startAngle, d.endAngle, 0.3, d.percentInnerRadius), this.chart.sessionVariables._dataHighlighted = true) : "funnel" === b.type || "pyramid" === b.type ? (ta2(e, d.funnelSection, 0.3, "white"), this.chart.sessionVariables._dataHighlighted = true) : "candlestick" === b.type ? (e.globalAlpha = 1, e.strokeStyle = d.color, e.lineWidth = 2 * d.borderThickness, b = 0 === e.lineWidth % 2 ? 0 : 0.5, e.beginPath(), e.moveTo(d.x3 - b, Math.min(d.y2, d.y3)), e.lineTo(d.x3 - b, Math.min(d.y1, d.y4)), e.stroke(), e.beginPath(), e.moveTo(d.x3 - b, Math.max(d.y1, d.y4)), e.lineTo(d.x3 - b, Math.max(d.y2, d.y3)), e.stroke(), aa(e, d.x1, Math.min(d.y1, d.y4), d.x2, Math.max(d.y1, d.y4), "transparent", 2 * d.borderThickness, d.color, false, false, false, false), e.globalAlpha = 1, this.chart.sessionVariables._dataHighlighted = true) : "ohlc" === b.type ? (e.globalAlpha = 1, e.strokeStyle = d.color, e.lineWidth = 2 * d.borderThickness, b = 0 === e.lineWidth % 2 ? 0 : 0.5, e.beginPath(), e.moveTo(d.x3 - b, d.y2), e.lineTo(d.x3 - b, d.y3), e.stroke(), e.beginPath(), e.moveTo(d.x3, d.y1), e.lineTo(d.x1, d.y1), e.stroke(), e.beginPath(), e.moveTo(d.x3, d.y4), e.lineTo(d.x2, d.y4), e.stroke(), e.globalAlpha = 1, this.chart.sessionVariables._dataHighlighted = true) : "boxAndWhisker" === b.type ? (e.save(), e.globalAlpha = 1, e.strokeStyle = d.stemColor, e.lineWidth = 2 * d.stemThickness, 0 < d.stemThickness && (e.beginPath(), e.moveTo(d.x3, d.y2 + d.borderThickness / 2), e.lineTo(d.x3, d.y1 + d.whiskerThickness / 2), e.stroke(), e.beginPath(), e.moveTo(d.x3, d.y4 - d.whiskerThickness / 2), e.lineTo(d.x3, d.y3 - d.borderThickness / 2), e.stroke()), e.beginPath(), aa(e, d.x1, Math.max(d.y2, d.y3), d.x2, Math.min(d.y2, d.y3), "transparent", 2 * d.borderThickness, d.color, false, false, false, false), e.globalAlpha = 1, e.strokeStyle = d.whiskerColor, e.lineWidth = 2 * d.whiskerThickness, 0 < d.whiskerThickness && (e.beginPath(), e.moveTo(Math.floor(d.x3 - d.whiskerLength / 2), d.y4), e.lineTo(Math.ceil(d.x3 + d.whiskerLength / 2), d.y4), e.stroke(), e.beginPath(), e.moveTo(Math.floor(d.x3 - d.whiskerLength / 2), d.y1), e.lineTo(Math.ceil(d.x3 + d.whiskerLength / 2), d.y1), e.stroke()), e.globalAlpha = 1, e.strokeStyle = d.lineColor, e.lineWidth = 2 * d.lineThickness, 0 < d.lineThickness && (e.beginPath(), e.moveTo(d.x1, d.y5), e.lineTo(d.x2, d.y5), e.stroke()), e.restore(), e.globalAlpha = 1, this.chart.sessionVariables._dataHighlighted = true) : "error" === b.type && (B(e, d.x1, d.y1, d.x2, d.y2, "white", d.whiskerProperties, d.stemProperties, d.isXYSwapped, 0.3), this.chart.sessionVariables._dataHighlighted = true));
            }
          }
          e.restore();
          e.globalAlpha = 1;
          e.beginPath();
        };
        oa.prototype.getToolTipInnerHTML = function(a) {
          var e = a.entries, c = null, b = null, d = null, f = 0;
          a = "";
          this.isToolTipDefinedInData = true;
          for (var h2 = 0; h2 < e.length; h2++) if (e[h2].dataSeries.toolTipContent || e[h2].dataPoint.toolTipContent) {
            this.isToolTipDefinedInData = false;
            break;
          }
          if (this.isToolTipDefinedInData && (this.content && "function" === typeof this.content || this.contentFormatter)) e = { chart: this.chart, toolTip: this.options, entries: e }, c = this.contentFormatter ? this.contentFormatter(e) : this.content(e);
          else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var l = null, m2 = "", h2 = 0; h2 < e.length; h2++) {
              b = e[h2].dataSeries;
              d = e[h2].dataPoint;
              f = e[h2].index;
              a = "";
              if (0 === h2 && this.isToolTipDefinedInData && !this.content) {
                this.chart.axisX && 0 < this.chart.axisX.length ? m2 += "undefined" !== typeof this.chart.axisX[0].labels[d.x] ? this.chart.axisX[0].labels[d.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (m2 += "undefined" !== typeof this.chart.axisX2[0].labels[d.x] ? this.chart.axisX2[0].labels[d.x] : "{x}");
                m2 += "</br>";
                if (!b.visible) continue;
                m2 = this.chart.replaceKeywordsWithValue(m2, d, b, f);
              }
              null === d.toolTipContent || "undefined" === typeof d.toolTipContent && null === b.options.toolTipContent || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (a += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), a += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}`, l = b.axisXIndex) : "bubble" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (a += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), a += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}`) : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (a += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), a += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}`) : "candlestick" === b.type || "ohlc" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (a += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), a += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}`) : "boxAndWhisker" === b.type && (this.chart.axisX && 1 < this.chart.axisX.length && (a += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), a += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}`), null === c && (c = ""), b.visible && (true === this.reversed ? (c = this.chart.replaceKeywordsWithValue(a, d, b, f) + c, h2 < e.length - 1 && (c = "</br>" + c)) : (c += this.chart.replaceKeywordsWithValue(a, d, b, f), h2 < e.length - 1 && (c += "</br>"))));
            }
            null !== c && (c = m2 + c);
          } else {
            b = e[0].dataSeries;
            d = e[0].dataPoint;
            f = e[0].index;
            if (null === d.toolTipContent || "undefined" === typeof d.toolTipContent && null === b.options.toolTipContent) return null;
            "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? a = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === b.type ? a = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type ? a = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (d.name ? "{name}:</span>&nbsp;&nbsp;" : d.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? a = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (d.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === b.type || "ohlc" === b.type ? a = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (d.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === b.type && (a = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (d.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
            null === c && (c = "");
            c += this.chart.replaceKeywordsWithValue(
              a,
              d,
              b,
              f
            );
          }
          this.content = a;
          return c;
        };
        oa.prototype.enableAnimation = function() {
          if (!this.container.style.WebkitTransition) {
            var a = this.getContainerTransition(this.containerTransitionDuration);
            this.container.style.WebkitTransition = a;
            this.container.style.MsTransition = a;
            this.container.style.transition = a;
            this.container.style.MozTransition = this.mozContainerTransition;
          }
        };
        oa.prototype.disableAnimation = function() {
          this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "");
        };
        oa.prototype.hide = function(a) {
          if (this.container) {
            var e = "undefined" === typeof a || -1 !== this.chart.clearedOverlayedCanvas.indexOf("axis");
            this.chart.sessionVariables._dataHighlighted = false;
            this.container.style.display = "none";
            this.currentSeriesIndex = -1;
            this._entries = this._dataSeriesIndex = this._xValue = null;
            this._prevY = this._prevX = NaN;
            this._updatedEventParameters = null;
            if ("undefined" === typeof a || a) this.chart.resetOverlayedCanvas(), e && this.chart.renderCrosshairs(null, false);
          }
        };
        oa.prototype.show = function(a, e, c) {
          this._updateToolTip(a, e, "undefined" === typeof c ? false : c);
        };
        oa.prototype.showAtIndex = function(a, e) {
        };
        oa.prototype.showAtX = function(a, e) {
          if (!this.enabled) return false;
          !m(this.chart.clearedOverlayedCanvas) && this.chart.clearedOverlayedCanvas.indexOf("axis") && (this.chart.clearedOverlayedCanvas = null);
          this._updateOptions();
          var c, b, d, f = [];
          d = false;
          e = !m(e) && 0 <= e && e < this.chart.data.length ? e : 0;
          if (this.shared) for (var h2 = 0; h2 < this.chart.data.length; h2++) c = this.chart.data[h2], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !m(b.dataPoint.y) && c.visible) && (b.dataSeries = c, this.chart.data[e].axisX.convertValueToPixel(a) === c.axisX.convertValueToPixel(b.dataPoint.x) && f.push(b));
          else this.chart.data && 0 < this.chart.data.length && (c = this.chart.data[e], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !m(b.dataPoint.y) && c.visible) && (b.dataSeries = c, f.push(b)));
          if (0 < f.length) {
            for (h2 = 0; h2 < f.length; h2++) if (b = f[h2], d = 0 <= b.dataSeries.type.indexOf("stacked") ? b.dataSeries.dataPointEOs[b.index].cumulativeY : b.dataPoint.y, (this.shared || 0 <= b.dataSeries.type.indexOf("100")) && b.dataSeries.axisX && b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum && b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum) {
              d = false;
              break;
            } else if (b.dataSeries.axisX && b.dataSeries.axisY && (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || d < b.dataSeries.axisY.viewportMinimum || d > b.dataSeries.axisY.viewportMaximum)) d = true;
            else {
              d = false;
              break;
            }
            if (d) return this.hide(), false;
            this.highlightObjects(f);
            "toolTip" === this.chart.clearedOverlayedCanvas && this.chart.renderCrosshairs(null, false);
            this._entries = f;
            h2 = "";
            h2 = this.getToolTipInnerHTML({ entries: f });
            if (null !== h2) {
              this.contentDiv.innerHTML = h2;
              if (this.isToolTipDefinedInData && m(this.options.content) && m(this.options.contentFormatter)) for (d = this.contentDiv.getElementsByTagName("span"), h2 = 0; h2 < d.length; h2++) d[h2] && (d[h2].style.color = d[h2].getAttribute("data-color"));
              h2 = false;
              "none" === this.container.style.display && (h2 = true, this.container.style.display = "block");
              try {
                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 < f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[c.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" : "normal";
              } catch (l) {
              }
              if ("pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type) c = f[0].dataSeries.dataPointEOs[f[0].index].center.x + f[0].dataSeries.radius * Math.cos(f[0].dataSeries.dataPointEOs[f[0].index].midAngle) + -("left" === f[0].dataSeries.dataPointEOs[f[0].index].hemisphere ? 0 : this.container.clientWidth);
              else if ("funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type) d = f[0].dataSeries.dataPointEOs[f[0].index].sectionsofFunnel, c = (d.x1 + d.x2 - this.container.clientWidth) / 2;
              else {
                if ("bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type) {
                  var s3 = f[0].dataPoint.x;
                  d = f[0].dataSeries.dataPointEOs[f[0].index].cumulativeY ? f[0].dataSeries.dataPointEOs[f[0].index].cumulativeY : f[0].dataPoint.y;
                  d = "stackedBar100" === f[0].dataSeries.type ? 100 * (d / f[0].dataSeries.plotUnit.dataPointYSums[s3]) : f[0].dataSeries.dataPointEOs[f[0].index].cumulativeY ? f[0].dataSeries.dataPointEOs[f[0].index].cumulativeY : f[0].dataPoint.y;
                  c = f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y.length ? f[0].dataPoint.y[f[0].dataPoint.y.length - 1] : d) - this.container.clientWidth << 0;
                } else c = f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth << 0;
                c -= 10;
              }
              0 > c && (c += this.container.clientWidth + 20);
              c + this.container.clientWidth > Math.max(
                this.chart.container.clientWidth,
                this.chart.width
              ) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
              1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !== f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !== f[0].dataSeries.type && "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type ? "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type ? (b = f[0].dataSeries.dataPointEOs[f[0].index].center.y + f[0].dataSeries.radius * Math.sin(f[0].dataSeries.dataPointEOs[f[0].index].midAngle), b < f[0].dataSeries.dataPointEOs[f[0].index].center.y && (b += this.container.clientHeight)) : "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type ? (d = f[0].dataSeries.dataPointEOs[f[0].dataSeries.reversed ? f[0].dataSeries.dataPointEOs.length - 1 - f[0].index : f[0].index].sectionsofFunnel, b = "undefined" !== typeof d.x5 ? (d.y2 + d.y4) / 2 : (d.y2 + d.y3) / 2 + this.container.clientHeight / 2) : "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? b = f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) : (s3 = f[0].dataPoint.x, d = f[0].dataSeries.dataPointEOs[f[0].index].cumulativeY ? f[0].dataSeries.dataPointEOs[f[0].index].cumulativeY : f[0].dataPoint.y, d = 0 <= b.dataSeries.type.indexOf("100") ? 100 * (d / f[0].dataSeries.plotUnit.dataPointYSums[s3]) : f[0].dataSeries.dataPointEOs[f[0].index].cumulativeY ? f[0].dataSeries.dataPointEOs[f[0].index].cumulativeY : f[0].dataPoint.y, b = f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y.length ? f[0].dataPoint.y[f[0].dataPoint.y.length - 1] : d)) : b = f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
              b = -b + 10;
              0 < b + this.container.clientHeight + 5 && (b -= b + this.container.clientHeight + 5 - 0);
              this.fixMozTransitionDelay(c, b);
              !this.animationEnabled || h2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
              this.container.style.left = c + "px";
              this.container.style.bottom = b + "px";
            } else return this.hide(false), false;
          } else return this.hide(), false;
          this._xValue = a;
          this._dataSeriesIndex = e;
          this._prevY = this._prevX = NaN;
          return true;
        };
        oa.prototype.fixMozTransitionDelay = function(a, e) {
          if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
          else {
            var c = parseFloat(this.container.style.left), c = isNaN(c) ? 0 : c, b = parseFloat(this.container.style.bottom), b = isNaN(b) ? 0 : b;
            10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - e, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0);
          }
        };
        oa.prototype.getContainerTransition = function(a) {
          return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
        };
        ja2.prototype.reset = function() {
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.eventObjects = [];
          u && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath());
        };
        ja2.prototype.getNewObjectTrackingId = function() {
          return ++this.lastObjectId;
        };
        ja2.prototype.mouseEventHandler = function(a) {
          if ("mousemove" === a.type || "click" === a.type) {
            var e = [], c = Ra(a), b = null;
            if ((b = this.chart.getObjectAtXY(c.x, c.y, false)) && "undefined" !== typeof this.objectMap[b]) if (b = this.objectMap[b], "dataPoint" === b.objectType) {
              var d = this.chart.data[b.dataSeriesIndex], f = d.dataPoints[b.dataPointIndex], h2 = b.dataPointIndex;
              b.eventParameter = { x: c.x, y: c.y, dataPoint: f, dataSeries: d.options, dataPointIndex: h2, dataSeriesIndex: d.index, chart: this.chart };
              b.eventContext = { context: f, userContext: f, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
              e.push(b);
              b = this.objectMap[d.id];
              b.eventParameter = { x: c.x, y: c.y, dataPoint: f, dataSeries: d.options, dataPointIndex: h2, dataSeriesIndex: d.index, chart: this.chart };
              b.eventContext = { context: d, userContext: d.options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
              e.push(this.objectMap[d.id]);
            } else "legendItem" === b.objectType && (d = this.chart.data[b.dataSeriesIndex], f = null !== b.dataPointIndex ? d.dataPoints[b.dataPointIndex] : null, b.eventParameter = {
              x: c.x,
              y: c.y,
              dataSeries: d.options,
              dataPoint: f,
              dataPointIndex: b.dataPointIndex,
              dataSeriesIndex: b.dataSeriesIndex,
              chart: this.chart
            }, b.eventContext = { context: this.chart.legend, userContext: this.chart.legend.options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick" }, e.push(b));
            d = [];
            for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
              f = true;
              for (b = 0; b < e.length; b++) if (e[b].id === this.mouseoveredObjectMaps[c].id) {
                f = false;
                break;
              }
              f ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : d.push(this.mouseoveredObjectMaps[c]);
            }
            this.mouseoveredObjectMaps = d;
            for (c = 0; c < e.length; c++) {
              d = false;
              for (b = 0; b < this.mouseoveredObjectMaps.length; b++) if (e[c].id === this.mouseoveredObjectMaps[b].id) {
                d = true;
                break;
              }
              d || (this.fireEvent(e[c], "mouseover", a), this.mouseoveredObjectMaps.push(e[c]));
              "click" === a.type ? this.fireEvent(e[c], "click", a) : "mousemove" === a.type && this.fireEvent(e[c], "mousemove", a);
            }
          }
        };
        ja2.prototype.fireEvent = function(a, e, c) {
          if (a && e) {
            var b = a.eventParameter, d = a.eventContext, f = a.eventContext.userContext;
            f && (d && f[d[e]]) && f[d[e]].call(f, b);
            "mouseout" !== e ? f.cursor && f.cursor !== c.target.style.cursor && (c.target.style.cursor = f.cursor) : (c.target.style.cursor = this.chart.panEnabled ? "itemmouseout" !== d.mouseout || f.dockInsidePlotArea ? "move" : this.chart._defaultCursor : this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
            "click" === e && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
            "click" === e && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(
              this.chart.data[a.dataSeriesIndex],
              b
            );
          }
        };
        na2.prototype.animate = function(a, e, c, b, d) {
          var f = this;
          this.chart.isAnimating = true;
          d = d || M.easing.linear;
          c && this.animations.push({ startTime: (/* @__PURE__ */ new Date()).getTime() + (a ? a : 0), duration: e, animationCallback: c, onComplete: b });
          for (a = []; 0 < this.animations.length; ) if (e = this.animations.shift(), c = (/* @__PURE__ */ new Date()).getTime(), b = 0, e.startTime <= c && (b = d(Math.min(c - e.startTime, e.duration), 0, 1, e.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(e), e.animationCallback(b), 1 <= b && e.onComplete) e.onComplete();
          this.animations = a;
          0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            f.animate.call(f);
          }) : this.chart.isAnimating = false;
        };
        na2.prototype.cancelAllAnimations = function() {
          this.animations = [];
          this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
          this.animationRequestId = null;
          this.chart.isAnimating = false;
        };
        var M = { yScaleAnimation: function(a, e) {
          if (0 !== a) {
            var c = e.dest, b = e.source.canvas, d = e.animationBase;
            c.drawImage(b, 0, 0, b.width, b.height, 0, d - d * a, c.canvas.width / la, a * c.canvas.height / la);
          }
        }, xScaleAnimation: function(a, e) {
          if (0 !== a) {
            var c = e.dest, b = e.source.canvas, d = e.animationBase;
            c.drawImage(b, 0, 0, b.width, b.height, d - d * a, 0, a * c.canvas.width / la, c.canvas.height / la);
          }
        }, xClipAnimation: function(a, e) {
          if (0 !== a) {
            var c = e.dest, b = e.source.canvas;
            c.save();
            0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / la, b.height / la);
            c.restore();
          }
        }, fadeInAnimation: function(a, e) {
          if (0 !== a) {
            var c = e.dest, b = e.source.canvas;
            c.save();
            c.globalAlpha = a;
            c.drawImage(
              b,
              0,
              0,
              b.width,
              b.height,
              0,
              0,
              c.canvas.width / la,
              c.canvas.height / la
            );
            c.restore();
          }
        }, easing: { linear: function(a, e, c, b) {
          return c * a / b + e;
        }, easeOutQuad: function(a, e, c, b) {
          return -c * (a /= b) * (a - 2) + e;
        }, easeOutQuart: function(a, e, c, b) {
          return -c * ((a = a / b - 1) * a * a * a - 1) + e;
        }, easeInQuad: function(a, e, c, b) {
          return c * (a /= b) * a + e;
        }, easeInQuart: function(a, e, c, b) {
          return c * (a /= b) * a * a * a + e;
        } } }, Y = { drawMarker: function(a, e, c, b, d, f, h2, l) {
          if (c) {
            var m2 = 1;
            c.fillStyle = f ? f : "#000000";
            c.strokeStyle = h2 ? h2 : "#000000";
            c.lineWidth = l ? l : 0;
            c.setLineDash && c.setLineDash(J(
              "solid",
              l
            ));
            "circle" === b ? (c.moveTo(a, e), c.beginPath(), c.arc(a, e, d / 2, 0, 2 * Math.PI, false), f && c.fill(), l && (h2 ? c.stroke() : (m2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = m2))) : "square" === b ? (c.beginPath(), c.rect(a - d / 2, e - d / 2, d, d), f && c.fill(), l && (h2 ? c.stroke() : (m2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = m2))) : "triangle" === b ? (c.beginPath(), c.moveTo(a - d / 2, e + d / 2), c.lineTo(a + d / 2, e + d / 2), c.lineTo(a, e - d / 2), c.closePath(), f && c.fill(), l && (h2 ? c.stroke() : (m2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = m2)), c.beginPath()) : "cross" === b && (c.strokeStyle = f, c.lineWidth = d / 4, c.beginPath(), c.moveTo(a - d / 2, e - d / 2), c.lineTo(a + d / 2, e + d / 2), c.stroke(), c.moveTo(a + d / 2, e - d / 2), c.lineTo(a - d / 2, e + d / 2), c.stroke());
          }
        }, drawMarkers: function(a) {
          for (var e = 0; e < a.length; e++) {
            var c = a[e];
            Y.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness);
          }
        } };
        return s2;
      }();
      s.version = "v3.15.22 GA";
      window.CanvasJS && (s && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = s);
    })();
    document.createElement("canvas").getContext || function() {
      function V() {
        return this.context_ || (this.context_ = new C(this));
      }
      function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
          return a.apply(b, g.concat(M.call(arguments)));
        };
      }
      function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      }
      function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}");
      }
      function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
          case "width":
            b.getContext().clearRect();
            b.style.width = b.attributes.width.nodeValue + "px";
            b.firstChild.style.width = b.clientWidth + "px";
            break;
          case "height":
            b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight + "px";
        }
      }
      function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px");
      }
      function D() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
      }
      function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++) for (var e = 0; 3 > e; e++) {
          for (var f = 0, d2 = 0; 3 > d2; d2++) f += a[g][d2] * b[d2][e];
          c[g][e] = f;
        }
        return c;
      }
      function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX = a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_;
      }
      function Q(a) {
        var b = a.indexOf("(", 3), c = a.indexOf(")", b + 1), b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b;
      }
      function E(a, b, c) {
        return Math.min(c, Math.max(b, a));
      }
      function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
      }
      function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
          c = Q(a);
          b = "#";
          for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
          c = +c[3];
        } else if (/^hsl/.test(a)) {
          e = c = Q(a);
          b = parseFloat(e[0]) / 360 % 360;
          0 > b && b++;
          g = E(parseFloat(e[1]) / 100, 0, 1);
          e = E(parseFloat(e[2]) / 100, 0, 1);
          if (0 == g) g = e = b = e;
          else {
            var f = 0.5 > e ? e * (1 + g) : e + g - e * g, d2 = 2 * e - f;
            g = F(d2, f, b + 1 / 3);
            e = F(d2, f, b);
            b = F(d2, f, b - 1 / 3);
          }
          b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
          c = c[3];
        } else b = Z[a] || a;
        return H[a] = { color: b, alpha: c };
      }
      function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute", c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(false);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
      }
      function R(a, b, c, g) {
        a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
        a.currentX_ = g.x;
        a.currentY_ = g.y;
      }
      function S(a, b) {
        var c = G(a.strokeStyle), g = c.color, c = c.alpha * a.globalAlpha, e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push(
          "<g_vml_:stroke",
          ' opacity="',
          c,
          '"',
          ' joinstyle="',
          a.lineJoin,
          '"',
          ' miterlimit="',
          a.miterLimit,
          '"',
          ' endcap="',
          $[a.lineCap] || "square",
          '"',
          ' weight="',
          e,
          'px"',
          ' color="',
          g,
          '" />'
        );
      }
      function T(a, b, c, g) {
        var e = a.fillStyle, f = a.arcScaleX_, d2 = a.arcScaleY_, k2 = g.x - c.x, n = g.y - c.y;
        if (e instanceof w) {
          var h = 0, l = g = 0, u = 0, m = 1;
          if ("gradient" == e.type_) {
            h = e.x1_ / f;
            c = e.y1_ / d2;
            var p = s(a, e.x0_ / f, e.y0_ / d2), h = s(a, h, c), h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
            0 > h && (h += 360);
            1e-6 > h && (h = 0);
          } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k2, l = (p.y - c.y) / n, k2 /= f * q, n /= d2 * q, m = x.max(k2, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
          f = e.colors_;
          f.sort(function(a2, b2) {
            return a2.offset - b2.offset;
          });
          d2 = f.length;
          p = f[0].color;
          c = f[d2 - 1].color;
          k2 = f[0].alpha * a.globalAlpha;
          a = f[d2 - 1].alpha * a.globalAlpha;
          for (var n = [], r2 = 0; r2 < d2; r2++) {
            var t2 = f[r2];
            n.push(t2.offset * m + u + " " + t2.color);
          }
          b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k2, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />');
        } else e instanceof I ? k2 && n && b.push("<g_vml_:fill", ' position="', -c.x / k2 * f * f, ",", -c.y / n * d2 * d2, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
      }
      function s(a, b, c) {
        a = a.m_;
        return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r };
      }
      function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
      }
      function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = [];
      }
      function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
          case "repeat":
          case null:
          case "":
            this.repetition_ = "repeat";
            break;
          case "repeat-x":
          case "repeat-y":
          case "no-repeat":
            this.repetition_ = b;
            break;
          default:
            throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height;
      }
      function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code;
      }
      var x = Math, k = x.round, J = x.sin, K = x.cos, ba = x.abs, aa = x.sqrt, q = 10, r = q / 2;
      navigator.userAgent.match(/MSIE ([\d.]+)?/);
      var M = Array.prototype.slice;
      O(document);
      var U = { init: function(a) {
        a = a || document;
        a.createElement("canvas");
        a.attachEvent("onreadystatechange", W(this.init_, this, a));
      }, init_: function(a) {
        a = a.getElementsByTagName("canvas");
        for (var b = 0; b < a.length; b++) this.initElement(a[b]);
      }, initElement: function(a) {
        if (!a.getContext) {
          a.getContext = V;
          O(a.ownerDocument);
          a.innerHTML = "";
          a.attachEvent("onpropertychange", X);
          a.attachEvent("onresize", Y);
          var b = a.attributes;
          b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
          b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight;
        }
        return a;
      } };
      U.init();
      for (var v = [], d = 0; 16 > d; d++) for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
      var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
      }, H = {}, L = {}, $ = { butt: "flat", round: "round" }, d = C.prototype;
      d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(true), this.textMeasureEl_ = null);
        this.element_.innerHTML = "";
      };
      d.beginPath = function() {
        this.currentPath_ = [];
      };
      d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.bezierCurveTo = function(a, b, c, g, e, f) {
        e = s(this, e, f);
        a = s(this, a, b);
        c = s(this, c, g);
        R(this, a, c, e);
      };
      d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) };
        R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c);
      };
      d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d2 = f ? "at" : "wa", k2 = a + K(g) * c - r, n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k2 != g || f || (k2 += 0.125);
        a = s(this, a, b);
        k2 = s(this, k2, n);
        g = s(this, g, e);
        this.currentPath_.push({
          type: d2,
          x: a.x,
          y: a.y,
          radius: c,
          xStart: k2.x,
          yStart: k2.y,
          xEnd: g.x,
          yEnd: g.y
        });
      };
      d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
      };
      d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e;
      };
      d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e;
      };
      d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e;
      };
      d.createRadialGradient = function(a, b, c, g, e, f) {
        var d2 = new w("gradientradial");
        d2.x0_ = a;
        d2.y0_ = b;
        d2.r0_ = c;
        d2.x1_ = g;
        d2.y1_ = e;
        d2.r1_ = f;
        return d2;
      };
      d.drawImage = function(a, b) {
        var c, g, e, d2, r2, y, n, h;
        e = a.runtimeStyle.width;
        d2 = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width, u = a.height;
        a.runtimeStyle.width = e;
        a.runtimeStyle.height = d2;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r2 = y = 0, n = e = l, h = d2 = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d2 = arguments[4], r2 = y = 0, n = l, h = u;
        else if (9 == arguments.length) r2 = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d2 = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g), p = [];
        p.push(
          " <g_vml_:group",
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' coordorigin="0,0"',
          ' style="width:',
          10,
          "px;height:",
          10,
          "px;position:absolute;"
        );
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
          var t2 = [];
          t2.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
          var v2 = s(this, c + e, g), w2 = s(this, c, g + d2);
          c = s(this, c + e, g + d2);
          m.x = x.max(m.x, v2.x, w2.x, c.x);
          m.y = x.max(m.y, v2.y, w2.y, c.y);
          p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t2.join(""), ", sizingmethod='clip');");
        } else p.push(
          "top:",
          k(m.y / q),
          "px;left:",
          k(m.x / q),
          "px;"
        );
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d2, 'px"', ' cropleft="', r2 / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r2 - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
      };
      d.stroke = function(a) {
        var b = [];
        b.push(
          "<g_vml_:shape",
          ' filled="',
          !!a,
          '"',
          ' style="position:absolute;width:',
          10,
          "px;height:",
          10,
          'px;"',
          ' coordorigin="0,0"',
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' stroked="',
          !a,
          '"',
          ' path="'
        );
        for (var c = { x: null, y: null }, d2 = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
          var f = this.currentPath_[e];
          switch (f.type) {
            case "moveTo":
              b.push(" m ", k(f.x), ",", k(f.y));
              break;
            case "lineTo":
              b.push(" l ", k(f.x), ",", k(f.y));
              break;
            case "close":
              b.push(" x ");
              f = null;
              break;
            case "bezierCurveTo":
              b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
              break;
            case "at":
            case "wa":
              b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ * f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd));
          }
          if (f) {
            if (null == c.x || f.x < c.x) c.x = f.x;
            if (null == d2.x || f.x > d2.x) d2.x = f.x;
            if (null == c.y || f.y < c.y) c.y = f.y;
            if (null == d2.y || f.y > d2.y) d2.y = f.y;
          }
        }
        b.push(' ">');
        a ? T(this, b, c, d2) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
      };
      d.fill = function() {
        this.stroke(true);
      };
      d.closePath = function() {
        this.currentPath_.push({ type: "close" });
      };
      d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_);
      };
      d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop());
      };
      d.translate = function(a, b) {
        z(this, t([[1, 0, 0], [0, 1, 0], [a, b, 1]], this.m_), false);
      };
      d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), false);
      };
      d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), true);
      };
      d.transform = function(a, b, c, d2, e, f) {
        z(this, t([[
          a,
          b,
          0
        ], [c, d2, 0], [e, f, 1]], this.m_), true);
      };
      d.setTransform = function(a, b, c, d2, e, f) {
        z(this, [[a, b, 0], [c, d2, 0], [e, f, 1]], true);
      };
      d.drawText_ = function(a, b, c, d2, e) {
        var f = this.m_;
        d2 = 0;
        var r2 = 1e3, t2 = 0, n = [], h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
          var l = document.createElement("div").style;
          try {
            l.font = h;
          } catch (u) {
          }
          h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" };
        }
        var l = h, m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
          case "left":
          case "center":
          case "right":
            break;
          case "end":
            l = "ltr" == m.direction ? "right" : "left";
            break;
          case "start":
            l = "rtl" == m.direction ? "right" : "left";
            break;
          default:
            l = "left";
        }
        switch (this.textBaseline) {
          case "hanging":
          case "top":
            t2 = h.size / 1.75;
            break;
          case "middle":
            break;
          default:
          case null:
          case "alphabetic":
          case "ideographic":
          case "bottom":
            t2 = -h.size / 2.25;
        }
        switch (l) {
          case "right":
            d2 = 1e3;
            r2 = 0.05;
            break;
          case "center":
            d2 = r2 = 500;
        }
        b = s(this, b + 0, c + t2);
        n.push('<g_vml_:line from="', -d2, ' 0" to="', r2, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(
          this,
          n,
          { x: -d2, y: 0 },
          { x: r2, y: h.size }
        );
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d2, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
      };
      d.fillText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, false);
      };
      d.strokeText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, true);
      };
      d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return { width: this.textMeasureEl_.offsetWidth };
      };
      d.clip = function() {
      };
      d.arcTo = function() {
      };
      d.createPattern = function(a, b) {
        return new I(a, b);
      };
      w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
      };
      d = A.prototype = Error();
      d.INDEX_SIZE_ERR = 1;
      d.DOMSTRING_SIZE_ERR = 2;
      d.HIERARCHY_REQUEST_ERR = 3;
      d.WRONG_DOCUMENT_ERR = 4;
      d.INVALID_CHARACTER_ERR = 5;
      d.NO_DATA_ALLOWED_ERR = 6;
      d.NO_MODIFICATION_ALLOWED_ERR = 7;
      d.NOT_FOUND_ERR = 8;
      d.NOT_SUPPORTED_ERR = 9;
      d.INUSE_ATTRIBUTE_ERR = 10;
      d.INVALID_STATE_ERR = 11;
      d.SYNTAX_ERR = 12;
      d.INVALID_MODIFICATION_ERR = 13;
      d.NAMESPACE_ERR = 14;
      d.INVALID_ACCESS_ERR = 15;
      d.VALIDATION_ERR = 16;
      d.TYPE_MISMATCH_ERR = 17;
      G_vmlCanvasManager = U;
      CanvasRenderingContext2D = C;
      CanvasGradient = w;
      CanvasPattern = I;
      DOMException = A;
    }();
  }
});

// node_modules/@canvasjs/angular-charts/fesm2015/canvasjs-angular-charts.js
function CanvasJSChart_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.chartContainerId);
    ɵɵproperty("ngStyle", ctx_r0.styles);
  }
}
if (typeof document === "object" && !!document) {
  CanvasJS = require_canvasjs_min();
}
var CanvasJS;
var CanvasJSChart = class _CanvasJSChart {
  constructor() {
    this.shouldUpdateChart = false;
    this.isDOMPresent = typeof document === "object" && !!document;
    this.chartInstance = new EventEmitter();
    this.options = this.options ? this.options : {};
    this.styles = this.styles ? this.styles : {
      width: "100%",
      position: "relative"
    };
    this.styles.height = this.options.height ? this.options.height + "px" : "400px";
    this.chartContainerId = "canvasjs-angular-chart-container-" + _CanvasJSChart._cjsChartContainerId++;
  }
  ngDoCheck() {
    if (this.prevChartOptions != this.options) {
      this.shouldUpdateChart = true;
    }
  }
  ngOnChanges() {
    if (this.shouldUpdateChart && this.chart) {
      this.chart.options = this.options;
      this.chart.render();
      this.shouldUpdateChart = false;
      this.prevChartOptions = this.options;
    }
  }
  ngAfterViewInit() {
    if (this.isDOMPresent) {
      this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
      this.chart.render();
      this.prevChartOptions = this.options;
      this.chartInstance.emit(this.chart);
    }
  }
  ngOnDestroy() {
    if (this.chart) this.chart.destroy();
  }
};
CanvasJSChart._cjsChartContainerId = 0;
CanvasJSChart.ɵfac = function CanvasJSChart_Factory(t) {
  return new (t || CanvasJSChart)();
};
CanvasJSChart.ɵcmp = ɵɵdefineComponent({
  type: CanvasJSChart,
  selectors: [["canvasjs-chart"]],
  inputs: {
    options: "options",
    styles: "styles"
  },
  outputs: {
    chartInstance: "chartInstance"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"]],
  template: function CanvasJSChart_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CanvasJSChart_div_0_Template, 1, 2, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isDOMPresent);
    }
  },
  dependencies: [NgIf, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSChart, [{
    type: Component,
    args: [{
      selector: "canvasjs-chart",
      template: '<div *ngIf="isDOMPresent" id="{{chartContainerId}}" [ngStyle]="styles"></div>'
    }]
  }], function() {
    return [];
  }, {
    options: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    chartInstance: [{
      type: Output
    }]
  });
})();
var CanvasJSAngularChartsModule = class {
};
CanvasJSAngularChartsModule.ɵfac = function CanvasJSAngularChartsModule_Factory(t) {
  return new (t || CanvasJSAngularChartsModule)();
};
CanvasJSAngularChartsModule.ɵmod = ɵɵdefineNgModule({
  type: CanvasJSAngularChartsModule,
  declarations: [CanvasJSChart],
  imports: [CommonModule],
  exports: [CanvasJSChart]
});
CanvasJSAngularChartsModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSAngularChartsModule, [{
    type: NgModule,
    args: [{
      declarations: [CanvasJSChart],
      imports: [CommonModule],
      exports: [CanvasJSChart]
    }]
  }], null, null);
})();
export {
  CanvasJS,
  CanvasJSAngularChartsModule,
  CanvasJSChart
};
//# sourceMappingURL=@canvasjs_angular-charts.js.map
