/*!
 * Tiny PowerPaste plugin
 *
 * Copyright 2010-2021 Tiny Technologies, Inc. All rights reserved.
 *
 * Version: 5.6.1-517
 */
!function() {
  "use strict";
  function e(r) {
      return function(e) {
          return n = typeof (t = e),
          (null === t ? "null" : "object" == n && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == n && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : n) === r;
          var t, n
      }
  }
  function t(t) {
      return function(e) {
          return typeof e === t
      }
  }
  function c(e) {
      return null == e
  }
  function v(e) {
      return !c(e)
  }
  function S() {}
  function s(n, r) {
      return function() {
          for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
          return n(r.apply(null, e))
      }
  }
  function b(e) {
      return function() {
          return e
      }
  }
  function o(e) {
      return e
  }
  function r(e, t) {
      return e === t
  }
  var n, O = e("string"), d = e("object"), l = e("array"), i = t("boolean"), I = function(e) {
      return n === e
  }, g = t("function"), a = t("number");
  function A(r) {
      for (var o = [], e = 1; e < arguments.length; e++)
          o[e - 1] = arguments[e];
      return function() {
          for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
          var n = o.concat(e);
          return r.apply(null, n)
      }
  }
  function C(e) {
      return function() {
          throw new Error(e)
      }
  }
  function D(e) {
      return e()
  }
  function u(e) {
      return parseInt(e, 10)
  }
  function f(e, t) {
      var n = e - t;
      return 0 == n ? 0 : 0 < n ? 1 : -1
  }
  function m(e, t, n) {
      return {
          major: e,
          minor: t,
          patch: n
      }
  }
  function p(e) {
      var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(e);
      return t ? m(u(t[1]), u(t[2]), u(t[3])) : m(0, 0, 0)
  }
  function h(e) {
      return p([e.majorVersion, e.minorVersion].join(".").split(".").slice(0, 3).join("."))
  }
  function k(e, t) {
      return e && -1 === function(e, t) {
          var n = f(e.major, t.major);
          if (0 !== n)
              return n;
          var r = f(e.minor, t.minor);
          if (0 !== r)
              return r;
          var o = f(e.patch, t.patch);
          return 0 !== o ? o : 0
      }(h(e), p(t))
  }
  function y() {
      return T
  }
  var x = b(!1)
    , w = b(!(n = void 0))
    , T = {
      fold: function(e, t) {
          return e()
      },
      isSome: x,
      isNone: w,
      getOr: o,
      getOrThunk: L,
      getOrDie: function(e) {
          throw new Error(e || "error: getOrDie called on none.")
      },
      getOrNull: b(null),
      getOrUndefined: b(void 0),
      or: o,
      orThunk: L,
      map: y,
      each: S,
      bind: y,
      exists: x,
      forall: w,
      filter: function() {
          return T
      },
      toArray: function() {
          return []
      },
      toString: b("none()")
  };
  function L(e) {
      return e()
  }
  function E(e, t) {
      return -1 < ie.call(e, t)
  }
  function _(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
          if (t(e[n], n))
              return !0;
      return !1
  }
  function N(e, t) {
      for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
          var i = e[o];
          r[o] = t(i, o)
      }
      return r
  }
  function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
          t(e[n], n)
  }
  function R(e, t) {
      for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
          var a = e[o];
          (t(a, o) ? n : r).push(a)
      }
      return {
          pass: n,
          fail: r
      }
  }
  function M(e, t) {
      for (var n = [], r = 0, o = e.length; r < o; r++) {
          var i = e[r];
          t(i, r) && n.push(i)
      }
      return n
  }
  function F(e, n, r) {
      return P(e, function(e, t) {
          r = n(r, e, t)
      }),
      r
  }
  function j(e, t) {
      return function(e, t, n) {
          for (var r = 0, o = e.length; r < o; r++) {
              var i = e[r];
              if (t(i, r))
                  return re.some(i);
              if (n(i, r))
                  break
          }
          return re.none()
      }(e, t, x)
  }
  function U(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
          if (t(e[n], n))
              return re.some(n);
      return re.none()
  }
  function H(e) {
      for (var t = [], n = 0, r = e.length; n < r; ++n) {
          if (!l(e[n]))
              throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
          ae.apply(t, e[n])
      }
      return t
  }
  function W(e, t) {
      return H(N(e, t))
  }
  function B(e, t) {
      for (var n = 0, r = e.length; n < r; ++n)
          if (!0 !== t(e[n], n))
              return !1;
      return !0
  }
  function z(e, t) {
      for (var n = {}, r = 0, o = e.length; r < o; r++) {
          var i = e[r];
          n[String(i)] = t(i, r)
      }
      return n
  }
  function $(e) {
      return 0 < e.length ? re.some(e[0]) : re.none()
  }
  function q(e, t) {
      for (var n = 0; n < e.length; n++) {
          var r = t(e[n], n);
          if (r.isSome())
              return r
      }
      return re.none()
  }
  function V(e) {
      return O(e) && E(["clean", "merge", "prompt"], e)
  }
  function G(e, t, n) {
      var r = e.getParam(t, n);
      return g(r) || V(r) ? r : n
  }
  function K(e) {
      return e.getParam("images_upload_url")
  }
  function X(e) {
      return e.getParam("automatic_uploads", !0, "boolean")
  }
  function J(e) {
      return e.getParam("paste_preprocess")
  }
  function Y(e) {
      return G(e, "powerpaste_word_import", "prompt")
  }
  function Z(e) {
      return G(e, "powerpaste_html_import", "clean")
  }
  function Q(e) {
      return !1 !== e.getParam("paste_merge_formats")
  }
  function ee(e) {
      return tinymce.explode(e.getParam("images_file_types", "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp", "string"))
  }
  function te(e, t) {
      e.dom.bind(t, "drop dragstart dragend dragover dragenter dragleave dragdrop draggesture", function(e) {
          e.preventDefault(),
          e.stopImmediatePropagation()
      })
  }
  var ne = function(n) {
      function e() {
          return o
      }
      function t(e) {
          return e(n)
      }
      var r = b(n)
        , o = {
          fold: function(e, t) {
              return t(n)
          },
          isSome: w,
          isNone: x,
          getOr: r,
          getOrThunk: r,
          getOrDie: r,
          getOrNull: r,
          getOrUndefined: r,
          or: e,
          orThunk: e,
          map: function(e) {
              return ne(e(n))
          },
          each: function(e) {
              e(n)
          },
          bind: t,
          exists: t,
          forall: t,
          filter: function(e) {
              return e(n) ? o : T
          },
          toArray: function() {
              return [n]
          },
          toString: function() {
              return "some(" + n + ")"
          }
      };
      return o
  }
    , re = {
      some: ne,
      none: y,
      from: function(e) {
          return null == e ? T : ne(e)
      }
  }
    , oe = Array.prototype.slice
    , ie = Array.prototype.indexOf
    , ae = Array.prototype.push
    , ue = function() {
      return (ue = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in t = arguments[n])
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
      }
      ).apply(this, arguments)
  };
  function ce(e, t, n) {
      if (n || 2 === arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
              !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
      return e.concat(r || t)
  }
  function se(e, t) {
      for (var n = be(e), r = 0, o = n.length; r < o; r++) {
          var i = n[r];
          t(e[i], i)
      }
  }
  function le(e, n) {
      return we(e, function(e, t) {
          return {
              k: t,
              v: n(e, t)
          }
      })
  }
  function fe(e, t) {
      var n = {}
        , r = t
        , o = n
        , i = function(e, t) {
          o[t] = e
      }
        , a = S;
      return se(e, function(e, t) {
          (r(e, t) ? i : a)(e, t)
      }),
      n
  }
  function de(e, n) {
      var r = [];
      return se(e, function(e, t) {
          r.push(n(e, t))
      }),
      r
  }
  function me(e) {
      return be(e).length
  }
  function pe(e, t) {
      return Te(e, t) ? re.from(e[t]) : re.none()
  }
  function ge(a) {
      if (!l(a))
          throw new Error("cases must be an array");
      if (0 === a.length)
          throw new Error("there must be at least one case");
      var u = []
        , n = {};
      return P(a, function(e, r) {
          var t = be(e);
          if (1 !== t.length)
              throw new Error("one and only one name per case");
          var o = t[0]
            , i = e[o];
          if (void 0 !== n[o])
              throw new Error("duplicate key detected:" + o);
          if ("cata" === o)
              throw new Error("cannot have a case named cata (sorry)");
          if (!l(i))
              throw new Error("case arguments must be an array");
          u.push(o),
          n[o] = function() {
              for (var n = [], e = 0; e < arguments.length; e++)
                  n[e] = arguments[e];
              var t = n.length;
              if (t !== i.length)
                  throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + t);
              return {
                  fold: function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t];
                      if (e.length !== a.length)
                          throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + e.length);
                      return e[r].apply(null, n)
                  },
                  match: function(e) {
                      var t = be(e);
                      if (u.length !== t.length)
                          throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
                      if (!B(u, function(e) {
                          return E(t, e)
                      }))
                          throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
                      return e[o].apply(null, n)
                  },
                  log: function(e) {
                      console.log(e, {
                          constructors: u,
                          constructor: o,
                          params: n
                      })
                  }
              }
          }
      }),
      n
  }
  var ve, he, ye, be = Object.keys, xe = Object.hasOwnProperty, we = function(e, r) {
      var o = {};
      return se(e, function(e, t) {
          var n = r(e, t);
          o[n.k] = n.v
      }),
      o
  }, Te = function(e, t) {
      return xe.call(e, t)
  }, Ie = ge([{
      blob: ["id", "imageresult", "objurl"]
  }, {
      url: ["id", "url", "raw"]
  }]), Se = ue({
      cata: function(e, t, n) {
          return e.fold(t, n)
      }
  }, Ie), Oe = {}, Ae = {
      exports: Oe
  };
  function Ce(e) {
      setTimeout(function() {
          throw e
      }, 0)
  }
  function De(e) {
      return a = e,
      ze(function(r) {
          var o = []
            , i = 0;
          0 === a.length ? r([]) : P(a, function(e, t) {
              var n;
              e.get((n = t,
              function(e) {
                  o[n] = e,
                  ++i >= a.length && r(o)
              }
              ))
          })
      });
      var a
  }
  function ke(e) {
      var t = (new Date).getTime();
      return e + "_" + Math.floor(1e9 * Math.random()) + ++qe + String(t)
  }
  function Le(e, t) {
      return Ge(document.createElement("canvas"), e, t)
  }
  function Ee(e) {
      var t = Le(e.width, e.height);
      return Ve(t).drawImage(e, 0, 0),
      t
  }
  function _e(e) {
      return e.naturalWidth || e.width
  }
  function Ne(e) {
      return e.naturalHeight || e.height
  }
  ve = Oe,
  he = Ae,
  ye = void 0,
  function(e) {
      "object" == typeof ve && void 0 !== he ? he.exports = e() : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EphoxContactWrapper = e()
  }(function() {
      return function i(a, u, c) {
          function s(t, e) {
              if (!u[t]) {
                  if (!a[t]) {
                      var n = "function" == typeof ye;
                      if (!e && n)
                          return n(t, !0);
                      if (l)
                          return l(t, !0);
                      var r = new Error("Cannot find module '" + t + "'");
                      throw r.code = "MODULE_NOT_FOUND",
                      r
                  }
                  var o = u[t] = {
                      exports: {}
                  };
                  a[t][0].call(o.exports, function(e) {
                      return s(a[t][1][e] || e)
                  }, o, o.exports, i, a, u, c)
              }
              return u[t].exports
          }
          for (var l = "function" == typeof ye, e = 0; e < c.length; e++)
              s(c[e]);
          return s
      }({
          1: [function(e, t, n) {
              var r, o, i = t.exports = {};
              function a() {
                  throw new Error("setTimeout has not been defined")
              }
              function u() {
                  throw new Error("clearTimeout has not been defined")
              }
              function c(t) {
                  if (r === setTimeout)
                      return setTimeout(t, 0);
                  if ((r === a || !r) && setTimeout)
                      return r = setTimeout,
                      setTimeout(t, 0);
                  try {
                      return r(t, 0)
                  } catch (e) {
                      try {
                          return r.call(null, t, 0)
                      } catch (e) {
                          return r.call(this, t, 0)
                      }
                  }
              }
              !function() {
                  try {
                      r = "function" == typeof setTimeout ? setTimeout : a
                  } catch (e) {
                      r = a
                  }
                  try {
                      o = "function" == typeof clearTimeout ? clearTimeout : u
                  } catch (e) {
                      o = u
                  }
              }();
              var s, l = [], f = !1, d = -1;
              function m() {
                  f && s && (f = !1,
                  s.length ? l = s.concat(l) : d = -1,
                  l.length && p())
              }
              function p() {
                  if (!f) {
                      var e = c(m);
                      f = !0;
                      for (var t = l.length; t; ) {
                          for (s = l,
                          l = []; ++d < t; )
                              s && s[d].run();
                          d = -1,
                          t = l.length
                      }
                      s = null,
                      f = !1,
                      function(t) {
                          if (o === clearTimeout)
                              return clearTimeout(t);
                          if ((o === u || !o) && clearTimeout)
                              return o = clearTimeout,
                              clearTimeout(t);
                          try {
                              o(t)
                          } catch (e) {
                              try {
                                  return o.call(null, t)
                              } catch (e) {
                                  return o.call(this, t)
                              }
                          }
                      }(e)
                  }
              }
              function g(e, t) {
                  this.fun = e,
                  this.array = t
              }
              function v() {}
              i.nextTick = function(e) {
                  var t = new Array(arguments.length - 1);
                  if (1 < arguments.length)
                      for (var n = 1; n < arguments.length; n++)
                          t[n - 1] = arguments[n];
                  l.push(new g(e,t)),
                  1 !== l.length || f || c(p)
              }
              ,
              g.prototype.run = function() {
                  this.fun.apply(null, this.array)
              }
              ,
              i.title = "browser",
              i.browser = !0,
              i.env = {},
              i.argv = [],
              i.version = "",
              i.versions = {},
              i.on = v,
              i.addListener = v,
              i.once = v,
              i.off = v,
              i.removeListener = v,
              i.removeAllListeners = v,
              i.emit = v,
              i.prependListener = v,
              i.prependOnceListener = v,
              i.listeners = function(e) {
                  return []
              }
              ,
              i.binding = function(e) {
                  throw new Error("process.binding is not supported")
              }
              ,
              i.cwd = function() {
                  return "/"
              }
              ,
              i.chdir = function(e) {
                  throw new Error("process.chdir is not supported")
              }
              ,
              i.umask = function() {
                  return 0
              }
          }
          , {}],
          2: [function(e, f, t) {
              !function(t) {
                  function r() {}
                  function i(e) {
                      if ("object" != typeof this)
                          throw new TypeError("Promises must be constructed via new");
                      if ("function" != typeof e)
                          throw new TypeError("not a function");
                      this._state = 0,
                      this._handled = !1,
                      this._value = void 0,
                      this._deferreds = [],
                      l(e, this)
                  }
                  function o(n, r) {
                      for (; 3 === n._state; )
                          n = n._value;
                      0 !== n._state ? (n._handled = !0,
                      i._immediateFn(function() {
                          var e, t = 1 === n._state ? r.onFulfilled : r.onRejected;
                          if (null !== t) {
                              try {
                                  e = t(n._value)
                              } catch (e) {
                                  return void u(r.promise, e)
                              }
                              a(r.promise, e)
                          } else
                              (1 === n._state ? a : u)(r.promise, n._value)
                      })) : n._deferreds.push(r)
                  }
                  function a(t, e) {
                      try {
                          if (e === t)
                              throw new TypeError("A promise cannot be resolved with itself.");
                          if (e && ("object" == typeof e || "function" == typeof e)) {
                              var n = e.then;
                              if (e instanceof i)
                                  return t._state = 3,
                                  t._value = e,
                                  void c(t);
                              if ("function" == typeof n)
                                  return void l((r = n,
                                  o = e,
                                  function() {
                                      r.apply(o, arguments)
                                  }
                                  ), t)
                          }
                          t._state = 1,
                          t._value = e,
                          c(t)
                      } catch (e) {
                          u(t, e)
                      }
                      var r, o
                  }
                  function u(e, t) {
                      e._state = 2,
                      e._value = t,
                      c(e)
                  }
                  function c(e) {
                      2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                          e._handled || i._unhandledRejectionFn(e._value)
                      });
                      for (var t = 0, n = e._deferreds.length; t < n; t++)
                          o(e, e._deferreds[t]);
                      e._deferreds = null
                  }
                  function s(e, t, n) {
                      this.onFulfilled = "function" == typeof e ? e : null,
                      this.onRejected = "function" == typeof t ? t : null,
                      this.promise = n
                  }
                  function l(e, t) {
                      var n = !1;
                      try {
                          e(function(e) {
                              n || (n = !0,
                              a(t, e))
                          }, function(e) {
                              n || (n = !0,
                              u(t, e))
                          })
                      } catch (e) {
                          if (n)
                              return;
                          n = !0,
                          u(t, e)
                      }
                  }
                  var n = setTimeout;
                  i.prototype.catch = function(e) {
                      return this.then(null, e)
                  }
                  ,
                  i.prototype.then = function(e, t) {
                      var n = new this.constructor(r);
                      return o(this, new s(e,t,n)),
                      n
                  }
                  ,
                  i.all = function(e) {
                      var u = Array.prototype.slice.call(e);
                      return new i(function(o, i) {
                          if (0 === u.length)
                              return o([]);
                          for (var a = u.length, e = 0; e < u.length; e++)
                              !function t(n, e) {
                                  try {
                                      if (e && ("object" == typeof e || "function" == typeof e)) {
                                          var r = e.then;
                                          if ("function" == typeof r)
                                              return r.call(e, function(e) {
                                                  t(n, e)
                                              }, i),
                                              0
                                      }
                                      u[n] = e,
                                      0 == --a && o(u)
                                  } catch (e) {
                                      i(e)
                                  }
                              }(e, u[e])
                      }
                      )
                  }
                  ,
                  i.resolve = function(t) {
                      return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
                          e(t)
                      }
                      )
                  }
                  ,
                  i.reject = function(n) {
                      return new i(function(e, t) {
                          t(n)
                      }
                      )
                  }
                  ,
                  i.race = function(o) {
                      return new i(function(e, t) {
                          for (var n = 0, r = o.length; n < r; n++)
                              o[n].then(e, t)
                      }
                      )
                  }
                  ,
                  i._immediateFn = "function" == typeof t ? function(e) {
                      t(e)
                  }
                  : function(e) {
                      n(e, 0)
                  }
                  ,
                  i._unhandledRejectionFn = function(e) {
                      "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                  }
                  ,
                  i._setImmediateFn = function(e) {
                      i._immediateFn = e
                  }
                  ,
                  i._setUnhandledRejectionFn = function(e) {
                      i._unhandledRejectionFn = e
                  }
                  ,
                  void 0 !== f && f.exports ? f.exports = i : this.Promise || (this.Promise = i)
              }
              .call(this, e("timers").setImmediate)
          }
          , {
              timers: 3
          }],
          3: [function(c, e, s) {
              !function(e, t) {
                  var r = c("process/browser.js").nextTick
                    , n = Function.prototype.apply
                    , o = Array.prototype.slice
                    , i = {}
                    , a = 0;
                  function u(e, t) {
                      this._id = e,
                      this._clearFn = t
                  }
                  s.setTimeout = function() {
                      return new u(n.call(setTimeout, window, arguments),clearTimeout)
                  }
                  ,
                  s.setInterval = function() {
                      return new u(n.call(setInterval, window, arguments),clearInterval)
                  }
                  ,
                  s.clearTimeout = s.clearInterval = function(e) {
                      e.close()
                  }
                  ,
                  u.prototype.unref = u.prototype.ref = function() {}
                  ,
                  u.prototype.close = function() {
                      this._clearFn.call(window, this._id)
                  }
                  ,
                  s.enroll = function(e, t) {
                      clearTimeout(e._idleTimeoutId),
                      e._idleTimeout = t
                  }
                  ,
                  s.unenroll = function(e) {
                      clearTimeout(e._idleTimeoutId),
                      e._idleTimeout = -1
                  }
                  ,
                  s._unrefActive = s.active = function(e) {
                      clearTimeout(e._idleTimeoutId);
                      var t = e._idleTimeout;
                      0 <= t && (e._idleTimeoutId = setTimeout(function() {
                          e._onTimeout && e._onTimeout()
                      }, t))
                  }
                  ,
                  s.setImmediate = "function" == typeof e ? e : function(e) {
                      var t = a++
                        , n = !(arguments.length < 2) && o.call(arguments, 1);
                      return i[t] = !0,
                      r(function() {
                          i[t] && (n ? e.apply(null, n) : e.call(null),
                          s.clearImmediate(t))
                      }),
                      t
                  }
                  ,
                  s.clearImmediate = "function" == typeof t ? t : function(e) {
                      delete i[e]
                  }
              }
              .call(this, c("timers").setImmediate, c("timers").clearImmediate)
          }
          , {
              "process/browser.js": 1,
              timers: 3
          }],
          4: [function(e, t, n) {
              var r = e("promise-polyfill")
                , o = "undefined" != typeof window ? window : Function("return this;")();
              t.exports = {
                  boltExport: o.Promise || r
              }
          }
          , {
              "promise-polyfill": 2
          }]
      }, {}, [4])(4)
  });
  var Pe, Re, Me, Fe, je, Ue = Ae.exports.boltExport, He = function(e) {
      function r(e) {
          o() ? i(e) : t.push(e)
      }
      var n = re.none()
        , t = []
        , o = function() {
          return n.isSome()
      }
        , i = function(t) {
          n.each(function(e) {
              setTimeout(function() {
                  t(e)
              }, 0)
          })
      };
      return e(function(e) {
          o() || (n = re.some(e),
          P(t, i),
          t = [])
      }),
      {
          get: r,
          map: function(n) {
              return He(function(t) {
                  r(function(e) {
                      t(n(e))
                  })
              })
          },
          isReady: o
      }
  }, We = {
      nu: He,
      pure: function(t) {
          return He(function(e) {
              e(t)
          })
      }
  }, Be = function(n) {
      function e(e) {
          n().then(e, Ce)
      }
      return {
          map: function(e) {
              return Be(function() {
                  return n().then(e)
              })
          },
          bind: function(t) {
              return Be(function() {
                  return n().then(function(e) {
                      return t(e).toPromise()
                  })
              })
          },
          anonBind: function(e) {
              return Be(function() {
                  return n().then(function() {
                      return e.toPromise()
                  })
              })
          },
          toLazy: function() {
              return We.nu(e)
          },
          toCached: function() {
              var e = null;
              return Be(function() {
                  return e = null === e ? n() : e
              })
          },
          toPromise: n,
          get: e
      }
  }, ze = function(e) {
      return Be(function() {
          return new Ue(e)
      })
  }, $e = function(e) {
      return Be(function() {
          return Ue.resolve(e)
      })
  }, qe = 0, Ve = function(e) {
      return e.getContext("2d")
  }, Ge = function(e, t, n) {
      return e.width = t,
      e.height = n,
      e
  }, Ke = window.Promise || (Pe = window,
  Re = Xe.immediateFn || "function" == typeof Pe.setImmediate && Pe.setImmediate || function(e) {
      return setTimeout(e, 1)
  }
  ,
  Me = function(n, r) {
      return function() {
          for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
          return n.apply(r, e)
      }
  }
  ,
  Fe = Array.isArray || function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
  }
  ,
  je = function(e, t, n) {
      var r = !1;
      try {
          e(function(e) {
              r || (r = !0,
              t(e))
          }, function(e) {
              r || (r = !0,
              n(e))
          })
      } catch (e) {
          if (r)
              return;
          r = !0,
          n(e)
      }
  }
  ,
  Xe.prototype.catch = function(e) {
      return this.then(null, e)
  }
  ,
  Xe.prototype.then = function(n, r) {
      var o = this;
      return new Xe(function(e, t) {
          Je.call(o, new et(n,r,e,t))
      }
      )
  }
  ,
  Xe.all = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
          e[t] = arguments[t];
      var u = Array.prototype.slice.call(1 === e.length && Fe(e[0]) ? e[0] : e);
      return new Xe(function(r, o) {
          if (0 === u.length)
              return r([]);
          for (var i = u.length, a = function(t, e) {
              try {
                  if (e && ("object" == typeof e || "function" == typeof e)) {
                      var n = e.then;
                      if ("function" == typeof n)
                          return void n.call(e, function(e) {
                              a(t, e)
                          }, o)
                  }
                  u[t] = e,
                  0 == --i && r(u)
              } catch (e) {
                  o(e)
              }
          }, e = 0; e < u.length; e++)
              a(e, u[e])
      }
      )
  }
  ,
  Xe.resolve = function(t) {
      return t && "object" == typeof t && t.constructor === Xe ? t : new Xe(function(e) {
          e(t)
      }
      )
  }
  ,
  Xe.reject = function(n) {
      return new Xe(function(e, t) {
          t(n)
      }
      )
  }
  ,
  Xe.race = function(o) {
      return new Xe(function(e, t) {
          for (var n = 0, r = o; n < r.length; n++)
              r[n].then(e, t)
      }
      )
  }
  ,
  Xe);
  function Xe(e) {
      if ("object" != typeof this)
          throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof e)
          throw new TypeError("not a function");
      this._state = null,
      this._value = null,
      this._deferreds = [],
      je(e, Me(Ye, this), Me(Ze, this))
  }
  function Je(n) {
      var r = this;
      null !== this._state ? Re(function() {
          var e, t = r._state ? n.onFulfilled : n.onRejected;
          if (null !== t) {
              try {
                  e = t(r._value)
              } catch (e) {
                  return void n.reject(e)
              }
              n.resolve(e)
          } else
              (r._state ? n.resolve : n.reject)(r._value)
      }) : this._deferreds.push(n)
  }
  function Ye(e) {
      try {
          if (e === this)
              throw new TypeError("A promise cannot be resolved with itself.");
          if (e && ("object" == typeof e || "function" == typeof e)) {
              var t = e.then;
              if ("function" == typeof t)
                  return void je(Me(t, e), Me(Ye, this), Me(Ze, this))
          }
          this._state = !0,
          this._value = e,
          Qe.call(this)
      } catch (e) {
          Ze.call(this, e)
      }
  }
  function Ze(e) {
      this._state = !1,
      this._value = e,
      Qe.call(this)
  }
  function Qe() {
      for (var e = 0, t = this._deferreds; e < t.length; e++) {
          var n = t[e];
          Je.call(this, n)
      }
      this._deferreds = []
  }
  function et(e, t, n, r) {
      this.onFulfilled = "function" == typeof e ? e : null,
      this.onRejected = "function" == typeof t ? t : null,
      this.resolve = n,
      this.reject = r
  }
  function tt(e) {
      var t = e.split(",")
        , n = /data:([^;]+)/.exec(t[0]);
      if (!n)
          return re.none();
      for (var r = n[1], o = t[1], i = atob(o), a = i.length, u = Math.ceil(a / 1024), c = new Array(u), s = 0; s < u; ++s) {
          for (var l = 1024 * s, f = Math.min(1024 + l, a), d = new Array(f - l), m = l, p = 0; m < f; ++p,
          ++m)
              d[p] = i[m].charCodeAt(0);
          c[s] = new Uint8Array(d)
      }
      return re.some(new Blob(c,{
          type: r
      }))
  }
  function nt(e, r, o) {
      return r = r || "image/png",
      g(HTMLCanvasElement.prototype.toBlob) ? new Ke(function(t, n) {
          e.toBlob(function(e) {
              e ? t(e) : n()
          }, r, o)
      }
      ) : Mt(e.toDataURL(r, o))
  }
  function rt(e) {
      return u = e,
      new Ke(function(e, t) {
          function n() {
              o.removeEventListener("load", i),
              o.removeEventListener("error", a)
          }
          var r = URL.createObjectURL(u)
            , o = new Image
            , i = function() {
              n(),
              e(o)
          }
            , a = function() {
              n(),
              t("Unable to load data of type " + u.type + ": " + r)
          };
          o.addEventListener("load", i),
          o.addEventListener("error", a),
          o.src = r,
          o.complete && setTimeout(i, 0)
      }
      ).then(function(e) {
          Ft(e);
          var t = Le(_e(e), Ne(e));
          return Ve(t).drawImage(e, 0, 0),
          t
      });
      var u
  }
  function ot(n) {
      return new Ke(function(e) {
          var t = new FileReader;
          t.onloadend = function() {
              e(t.result)
          }
          ,
          t.readAsDataURL(n)
      }
      )
  }
  function it(e, t, n) {
      function r(t, n) {
          return e.then(function(e) {
              return e.toDataURL(t || "image/png", n)
          })
      }
      return {
          getType: b(t.type),
          toBlob: function() {
              return Ke.resolve(t)
          },
          toDataURL: b(n),
          toBase64: function() {
              return n.split(",")[1]
          },
          toAdjustedBlob: function(t, n) {
              return e.then(function(e) {
                  return nt(e, t, n)
              })
          },
          toAdjustedDataURL: r,
          toAdjustedBase64: function(e, t) {
              return r(e, t).then(function(e) {
                  return e.split(",")[1]
              })
          },
          toCanvas: function() {
              return e.then(Ee)
          }
      }
  }
  function at(t, e) {
      return nt(t, e).then(function(e) {
          return it(Ke.resolve(t), e, t.toDataURL())
      })
  }
  function ut(e, t) {
      return r = t,
      it(rt(n = e), n, r);
      var n, r
  }
  function ct(e) {
      return (0 === (t = e.src).indexOf("data:") ? Mt : Rt)(t).then(function(e) {
          return ot(t = e).then(function(e) {
              return it(rt(t), t, e)
          });
          var t
      });
      var t
  }
  function st(e, t, n) {
      return void 0 === t && void 0 === n ? Ht(e) : e.toAdjustedBlob(t, n)
  }
  function lt(e) {
      return e.toDataURL()
  }
  function ft(e) {
      var t = URL.createObjectURL(e);
      return Wt(e, t)
  }
  function dt(e) {
      return De(N(e, ft))
  }
  function mt(e, t, n) {
      return "" === t || e.length >= t.length && e.substr(n, n + t.length) === t
  }
  function pt(e, t) {
      return Bt(e, t) ? (n = t.length,
      e.substring(n)) : e;
      var n
  }
  function gt(e, t) {
      return zt(e, t) ? (n = t.length,
      e.substring(0, e.length - n)) : e;
      var n
  }
  function vt(e, t) {
      return -1 !== e.indexOf(t)
  }
  function ht(e, i) {
      return function(e) {
          for (var t, n, r = void 0 !== i ? i : qt, o = 0; o < e.length; ++o)
              void 0 !== (t = r)[n = e[o]] && null !== t[n] || (t[n] = {}),
              r = t[n];
          return r
      }(e.split("."))
  }
  function yt(e) {
      return e.dom.nodeName.toLowerCase()
  }
  function bt(e) {
      return e.dom.nodeType
  }
  function xt(t) {
      return function(e) {
          return bt(e) === t
      }
  }
  function wt(e) {
      return 8 === bt(e) || "#comment" === yt(e)
  }
  function Tt(t) {
      return function(e) {
          return Vt(e) && yt(e) === t
      }
  }
  function It(e, t, n) {
      if (!(O(n) || i(n) || a(n)))
          throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e),
          new Error("Attribute value was not simple");
      e.setAttribute(t, n + "")
  }
  function St(e, t, n) {
      It(e.dom, t, n)
  }
  function Ot(e, t) {
      var n = e.dom;
      se(t, function(e, t) {
          It(n, t, e)
      })
  }
  function At(e, t) {
      var n = e.dom.getAttribute(t);
      return null === n ? void 0 : n
  }
  function Ct(e, t) {
      return re.from(At(e, t))
  }
  function Dt(e, t) {
      var n = e.dom;
      return !(!n || !n.hasAttribute) && n.hasAttribute(t)
  }
  function kt(e, t) {
      e.dom.removeAttribute(t)
  }
  function Lt() {
      return 'Safari does not support direct paste of images. <a href="https://support.ephox.com/entries/88543243-Safari-Direct-paste-of-images-does-not-work" style="text-decoration: underline">More information on image pasting for Safari</a>'
  }
  function Et(e) {
      return tinymce.translate(Yt[e])
  }
  function _t(e) {
      if (null == e)
          throw new Error("Node cannot be null or undefined");
      return {
          dom: e
      }
  }
  var Nt, Pt, Rt = function(r) {
      return new Ke(function(e, t) {
          var n = new XMLHttpRequest;
          n.open("GET", r, !0),
          n.responseType = "blob",
          n.onload = function() {
              200 === this.status && e(this.response)
          }
          ,
          n.onerror = function() {
              var e;
              t(0 === this.status ? ((e = new Error("No access to download image")).code = 18,
              e.name = "SecurityError",
              e) : new Error("Error " + this.status + " downloading image"))
          }
          ,
          n.send()
      }
      )
  }, Mt = function(n) {
      return new Ke(function(e, t) {
          tt(n).fold(function() {
              t("uri is not base64: " + n)
          }, e)
      }
      )
  }, Ft = function(e) {
      URL.revokeObjectURL(e.src)
  }, jt = ot, Ut = tt, Ht = function(e) {
      return e.toBlob()
  }, Wt = function(i, a) {
      return ze(function(o) {
          jt(i).then(function(e) {
              var t = ut(i, e)
                , n = ke("image")
                , r = Se.blob(n, t, a);
              o(r)
          })
      })
  }, Bt = function(e, t) {
      return mt(e, t, 0)
  }, zt = function(e, t) {
      return mt(e, t, e.length - t.length)
  }, $t = (Nt = /^\s+|\s+$/g,
  function(e) {
      return e.replace(Nt, "")
  }
  ), qt = "undefined" != typeof window ? window : Function("return this;")(), Vt = xt(1), Gt = xt(3), Kt = xt(9), Xt = xt(11), Jt = {
      fromHtml: function(e, t) {
          var n = (t || document).createElement("div");
          if (n.innerHTML = e,
          !n.hasChildNodes() || 1 < n.childNodes.length)
              throw console.error("HTML does not have a single root node", e),
              new Error("HTML must have a single root node");
          return _t(n.childNodes[0])
      },
      fromTag: function(e, t) {
          var n = (t || document).createElement(e);
          return _t(n)
      },
      fromText: function(e, t) {
          var n = (t || document).createTextNode(e);
          return _t(n)
      },
      fromDom: _t,
      fromPoint: function(e, t, n) {
          return re.from(e.dom.elementFromPoint(t, n)).map(_t)
      }
  }, Yt = {
      "cement.dialog.paste.title": "Paste Formatting Options",
      "cement.dialog.paste.instructions": "Choose to keep or remove formatting in the pasted content.",
      "cement.dialog.paste.merge": "Keep formatting",
      "cement.dialog.paste.clean": "Remove formatting",
      "safari.imagepaste": Lt(),
      "webview.imagepaste": Lt(),
      "error.code.images.not.found": "The images service was not found: (",
      "error.imageupload": "Image failed to upload: (",
      "error.full.stop": ").",
      "errors.local.images.disallowed": "Local image paste has been disabled. Local images have been removed from pasted content.",
      "errors.imageimport.failed": "Some images failed to import.",
      "errors.imageimport.unsupported": "Unsupported image type.",
      "errors.imageimport.invalid": "Image is invalid."
  }, Zt = Object.hasOwnProperty, Qt = Object.setPrototypeOf, en = Object.isFrozen, tn = Object.getPrototypeOf, nn = Object.getOwnPropertyDescriptor, rn = Object.freeze, on = Object.seal, an = Object.create, un = "undefined" != typeof Reflect && Reflect, cn = un.apply || function(e, t, n) {
      return e.apply(t, n)
  }
  , rn = rn || function(e) {
      return e
  }
  , on = on || function(e) {
      return e
  }
  , sn = un.construct || function(e, t) {
      return new (Function.prototype.bind.apply(e, [null].concat(function(e) {
          if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                  n[t] = e[t];
              return n
          }
          return Array.from(e)
      }(t))))
  }
  , ln = xn(Array.prototype.forEach), fn = xn(Array.prototype.pop), dn = xn(Array.prototype.push), mn = xn(String.prototype.toLowerCase), pn = xn(String.prototype.match), gn = xn(String.prototype.replace), vn = xn(String.prototype.indexOf), hn = xn(String.prototype.trim), yn = xn(RegExp.prototype.test), bn = (Pt = TypeError,
  function() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
      return sn(Pt, t)
  }
  );
  function xn(o) {
      return function(e) {
          for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
              n[r - 1] = arguments[r];
          return cn(o, e, n)
      }
  }
  function wn(e, t) {
      Qt && Qt(e, null);
      for (var n = t.length; n--; ) {
          var r, o = t[n];
          "string" != typeof o || (r = mn(o)) !== o && (en(t) || (t[n] = r),
          o = r),
          e[o] = !0
      }
      return e
  }
  function Tn(e) {
      var t = an(null)
        , n = void 0;
      for (n in e)
          cn(Zt, e, [n]) && (t[n] = e[n]);
      return t
  }
  function In(e, t) {
      for (; null !== e; ) {
          var n = nn(e, t);
          if (n) {
              if (n.get)
                  return xn(n.get);
              if ("function" == typeof n.value)
                  return xn(n.value)
          }
          e = tn(e)
      }
      return function(e) {
          return console.warn("fallback value for", e),
          null
      }
  }
  var Sn = rn(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"])
    , On = rn(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"])
    , An = rn(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"])
    , Cn = rn(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"])
    , Dn = rn(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"])
    , kn = rn(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"])
    , Ln = rn(["#text"])
    , En = rn(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"])
    , _n = rn(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"])
    , Nn = rn(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"])
    , Pn = rn(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"])
    , Rn = on(/\{\{[\s\S]*|[\s\S]*\}\}/gm)
    , Mn = on(/<%[\s\S]*|[\s\S]*%>/gm)
    , Fn = on(/^data-[\-\w.\u00B7-\uFFFF]/)
    , jn = on(/^aria-[\-\w]+$/)
    , Un = on(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i)
    , Hn = on(/^(?:\w+script|data):/i)
    , Wn = on(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)
    , Bn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
  }
  : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }
  ;
  function zn(e) {
      if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++)
              n[t] = e[t];
          return n
      }
      return Array.from(e)
  }
  function $n(n) {
      return {
          sanitizeHtml: function(e, t) {
              return n(e) ? e : function(e) {
                  Tr.addHook("uponSanitizeElement", function(e, t) {
                      E(Ir, t.tagName) || Te(t.allowedTags, t.tagName) || (t.allowedTags[t.tagName] = !0)
                  }),
                  Tr.addHook("uponSanitizeAttribute", function(e, t) {
                      0 === t.attrName.indexOf("on") || Te(t.allowedAttributes, t.attrName) || (t.allowedAttributes[t.attrName] = !0),
                      t.attrValue && -1 !== t.attrValue.indexOf("\n") && (t.attrValue = t.attrValue.replace(/\r?\n/g, ""))
                  });
                  var t = Bt($t(e), "<!")
                    , n = t ? "<body>" + e + "</body>" : e.replace(/^[\S\s]*?(<!DOCTYPE|<html)/i, "$1")
                    , r = Tr.sanitize(n, {
                      ALLOW_UNKNOWN_PROTOCOLS: !0,
                      FORBID_TAGS: Ir,
                      WHOLE_DOCUMENT: -1 !== e.lastIndexOf("</html>")
                  });
                  return Tr.removeHook("uponSanitizeElement"),
                  Tr.removeHook("uponSanitizeAttribute"),
                  t ? gt(pt(r, "<body>"), "</body>") : r
              }(e)
          },
          sanitizeText: o
      }
  }
  function qn(e) {
      return -1 !== e.indexOf(Cr)
  }
  function Vn(e, t) {
      var n = new tinymce.html.DomParser({},e.schema).parse(t, {
          forced_root_block: !1,
          isRootContent: !0
      });
      return new tinymce.html.Serializer({
          validate: !0
      },e.schema).serialize(n)
  }
  function Gn(e) {
      var n = $n(qn)
        , r = {
          sanitizeHtml: A(Vn, e),
          sanitizeText: o
      };
      return {
          sanitizeText: n.sanitizeText,
          sanitizeHtml: function(e, t) {
              return (qn(e) ? r : n).sanitizeHtml(e, t)
          }
      }
  }
  function Kn(e) {
      (n = document.createElement("div")).appendChild(e.cloneNode(!0));
      var t = n.innerHTML
        , n = e = null;
      return t
  }
  function Xn(e, t) {
      return function() {
          return e.apply(t, arguments)
      }
  }
  function Jn(e) {
      "undefined" != typeof console && console.log && console.log(e)
  }
  function Yn(t, e, n) {
      return function(n) {
          for (var e = [], t = 1; t < arguments.length; t++)
              e[t - 1] = arguments[t];
          return tinymce.each(Array.prototype.slice.call(arguments, 1), function(e) {
              for (var t in e)
                  n[t] = e[t]
          }),
          n
      }(function(e) {
          if (t && "string" != typeof t)
              return t;
          switch (t) {
          case "clean":
              return Lr;
          case "merge":
              return Er;
          default:
              return e
          }
      }(e), {
          base_64_images: n
      })
  }
  function Zn(e) {
      return e.replace(/-(.)/g, function(e, t) {
          return t.toUpperCase()
      })
  }
  function Qn(i, e, t) {
      var n, r, o, a, u, c, s, l, f, d;
      switch (i.nodeType) {
      case 1:
          e ? n = Nr : (n = _r,
          a = Mr(i),
          u = {},
          c = i,
          s = function(e, t) {
              u[e] = t
          }
          ,
          null != (d = t || c.getAttribute("style")) && d.split || (d = c.style.cssText),
          Dr(d.split(";"), function(e) {
              var t = e.indexOf(":");
              0 < t && (l = (l = (l = kr(e.substring(0, t))).toUpperCase() === l ? l.toLowerCase() : l).replace(/([A-Z])/g, function(e, t) {
                  return "-" + t.toLowerCase()
              }),
              f = kr(e.substring(t + 1)),
              Fr = Fr || 0 === l.indexOf("mso-"),
              s(l, f))
          }),
          Fr || (f = c.style["mso-list"]) && s("mso-list", f)),
          r = "HTML" !== i.scopeName && i.scopeName && i.tagName && i.tagName.indexOf(":") <= 0 ? (i.scopeName + ":" + i.tagName).toUpperCase() : i.tagName;
          break;
      case 3:
          n = Pr,
          o = i.nodeValue;
          break;
      case 8:
          n = Rr,
          o = i.nodeValue;
          break;
      default:
          Jn("WARNING: Unsupported node type encountered: " + i.nodeType)
      }
      function m(e) {
          n === _r && a.filter(e)
      }
      return {
          getNode: function() {
              return a && a.getAttributes(),
              i
          },
          tag: function() {
              return r
          },
          type: function() {
              return n
          },
          text: function() {
              return o
          },
          toString: function() {
              return "Type: " + n + ", Tag: " + r + " Text: " + o
          },
          getAttribute: function(e) {
              return a.get(e.toLowerCase())
          },
          filterAttributes: m,
          filterStyles: function(r) {
              var o;
              n === _r && (o = "",
              Dr(u, function(e, t) {
                  var n = r(t, e);
                  null === n ? (i.style.removeProperty ? i.style.removeProperty(Zn(t)) : i.style.removeAttribute(Zn(t)),
                  delete u[t]) : (o += t + ": " + n + "; ",
                  u[t] = n)
              }),
              o = o || null,
              m(function(e, t) {
                  return "style" === e ? o : t
              }),
              i.style.cssText = o)
          },
          getAttributeCount: function() {
              return a.getAttributeCount()
          },
          attributes: function(e) {
              a.each(e)
          },
          getStyle: function(e) {
              return u[e]
          },
          styles: function(n) {
              Dr(u, function(e, t) {
                  n(t, e)
              })
          },
          getComputedStyle: function() {
              return (e = i).ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle || {};
              var e
          },
          isWhitespace: function() {
              return n === Pr && /^[\s\u00A0]*$/.test(o)
          }
      }
  }
  function er(e, t, n, r) {
      var o = r.createElement(e)
        , i = "";
      return Dr(t, function(e, t) {
          o.setAttribute(t, e)
      }),
      Dr(n, function(e, t) {
          i += t + ":" + e + ";",
          o.style[Zn(t)] = e
      }),
      Qn(o, !1, "" !== i ? i : null)
  }
  function tr(e, t) {
      return Qn(t.createElement(e), !0)
  }
  function nr(o) {
      function i(e) {
          a.appendChild(e)
      }
      var a = o.createDocumentFragment();
      return {
          dom: a,
          receive: function(e) {
              var t, n, r;
              switch (e.type()) {
              case _r:
                  r = e.getNode().cloneNode(!1),
                  i(n = r),
                  a = n;
                  break;
              case Pr:
                  t = o.createTextNode(e.text()),
                  i(t);
                  break;
              case Nr:
                  a = a.parentNode;
                  break;
              case Rr:
                  break;
              default:
                  throw {
                      message: "Unsupported token type: " + e.type()
                  }
              }
          }
      }
  }
  function rr(p, g) {
      return function(t, e, n) {
          function r() {
              g && g(m),
              l = !1,
              c = [],
              s = []
          }
          function o(e) {
              Dr(e, function(e) {
                  t.receive(e)
              })
          }
          function i(e) {
              l ? s.push(e) : t.receive(e)
          }
          function a() {
              f(),
              o(s),
              r()
          }
          var u, c, s, l = !1, f = function() {
              Dr(u, function(e) {
                  i(e)
              }),
              d()
          }, d = function() {
              u = []
          }, m = {
              document: n || window.document,
              settings: e || {},
              emit: i,
              receive: function(e) {
                  g && c.push(e),
                  p(m, e),
                  e === jr && a()
              },
              startTransaction: function() {
                  l = !0
              },
              rollback: function() {
                  o(c),
                  r()
              },
              commit: a,
              defer: function(e) {
                  (u = u || []).push(e)
              },
              hasDeferred: function() {
                  return u && 0 < u.length
              },
              emitDeferred: f,
              dropDeferred: d
          };
          return r(),
          m
      }
  }
  function or(n) {
      return rr(function(e, t) {
          t.filterAttributes(Xn(n, e)),
          e.emit(t)
      })
  }
  function ir(e) {
      return "A" === e.tag() || "SPAN" === e.tag()
  }
  function ar(e) {
      var t = e.getStyle("mso-list");
      return t && "skip" !== t
  }
  function ur(e, t) {
      return e.type() === _r ? 0 === e.getAttributeCount() || t && 1 === e.getAttributeCount() && null !== e.getAttribute("style") && void 0 !== e.getAttribute("style") : e.type() === Nr
  }
  function cr(e) {
      if (Jr)
          for (var t = void 0, n = Kr.length, o = void 0, o = 0; o < n; o++)
              (t = Kr[o]) && (t.type() === _r && "SPAN" === t.tag() && ur(t) ? function(e) {
                  for (var t, n = 1, r = o + 1; r < e; r++)
                      if ((t = Kr[r]) && "SPAN" === t.tag())
                          if (t.type() === _r)
                              n++;
                          else if (t.type() === Nr && 0 == --n)
                              return Kr[r] = null
              }(n) : e.emit(t));
      Kr = [],
      Jr = !(Xr = [])
  }
  function sr(e, t) {
      Kr.push(t),
      Xr = Xr || [],
      t.type() === _r ? Xr.push(t) : t.type() === Nr && (Xr.pop(),
      0 === Xr.length && cr(e))
  }
  function lr(e) {
      return !ur(e) && !/^OLE_LINK/.test(e.getAttribute("name"))
  }
  function fr(e, t) {
      var n = {
          tag: e.tag,
          type: e.type,
          variant: t
      };
      return e.start && (n.start = e.start),
      e.type || delete n.type,
      n
  }
  function dr(e, t, n) {
      var r, o, i, a = null;
      return e && (r = e.text,
      o = e.symbolFont),
      r = kr(r),
      (a = po[r]) ? a = fr(a, r) : o ? a = (a = mo[r]) ? fr(a, r) : {
          tag: "UL",
          variant: r
      } : (Dr(fo, function(e) {
          if (e.regex.test(r)) {
              if (t && go(e.type, t, !0))
                  return (a = e.type).start = parseInt(r, 10),
                  !1;
              (a = a || e.type).start = parseInt(r, 10)
          }
      }),
      a && !a.variant && (i = "(" === r.charAt(0) ? "()" : ")" === r.charAt(r.length - 1) ? ")" : ".",
      a = fr(a, i))),
      a = a && "OL" === a.tag && n && ("P" !== n.tag() || /^MsoHeading/.test(n.getAttribute("class"))) ? null : a
  }
  function mr(e, t) {
      function n(e) {
          var t = e.style.fontFamily;
          t && (a = "Wingdings" === t || "Symbol" === t)
      }
      var r, o, i, a = !1;
      if (e.type() === _r && t.openedTag && "SPAN" === e.tag()) {
          for (n(r = t.openedTag.getNode()),
          1 < r.childNodes.length && "A" === r.firstChild.tagName && "" === r.firstChild.textContent && (r = r.childNodes[1]); r.firstChild && ("SPAN" === r.firstChild.tagName || "A" === r.firstChild.tagName); )
              n(r = r.firstChild);
          return (r = r.firstChild) && 3 === r.nodeType ? (o = r.value,
          kr(o) || (o = (r = r.parentNode.nextSibling) ? r.value : ""),
          r && kr(r.parentNode.textContent) == o && ((i = dr({
              text: o,
              symbolFont: a
          }, null, t.originalToken)) && (r.nextSibling && "SPAN" === r.nextSibling.tagName && /^[\u00A0\s]/.test(r.nextSibling.firstChild.value) && ("P" === t.openedTag.tag() || "UL" === i.tag)))) : r && "IMG" === r.tagName
      }
  }
  function pr(i, a) {
      function u(e, t) {
          var n = {}
            , r = {};
          m++,
          t && e.type && (n = {
              "list-style-type": e.type
          }),
          e.start && 1 < e.start && (r = {
              start: e.start
          }),
          o.push(e),
          i.emit(er(e.tag, r, n, a)),
          f = e
      }
      function c() {
          i.emit(tr(o.pop().tag, a)),
          m--,
          f = o[o.length - 1]
      }
      function s(e, t, n) {
          var r, o = {};
          e ? void 0 !== (r = e.getStyle("margin-left")) && (o["margin-left"] = r) : o["list-style-type"] = "none",
          f && !go(f, t) && (c(),
          n && (i.emit(er("P", {}, {}, a)),
          i.emit(Qn(a.createTextNode("\xa0"))),
          i.emit(tr("P", a))),
          u(t, !0)),
          i.emit(er("LI", {}, o, a)),
          e && "P" !== e.tag() ? (d.push(e.tag()),
          e.filterStyles(function() {
              return null
          }),
          i.emit(e)) : d.push("P")
      }
      function l() {
          var e = d ? d.pop() : "P";
          "P" !== e && i.emit(tr(e, a)),
          i.emit(tr("LI", a))
      }
      var f, o = [], d = [], m = 0;
      return {
          openList: u,
          closelist: c,
          closeAllLists: function() {
              for (; 0 < m; )
                  l(),
                  c();
              i.commit()
          },
          closeItem: l,
          openLI: s,
          openItem: function(e, t, n, r) {
              if (n) {
                  for (m = m || 0; e < m; )
                      l(),
                      c();
                  var o;
                  if (n = o = "UL" === (o = n).tag && ho[e - 1] === o.type ? {
                      tag: "UL"
                  } : o,
                  m === e)
                      l(),
                      s(t, n, r);
                  else
                      for (1 < e && 0 < d.length && "P" !== d[d.length - 1] && (i.emit(tr(d[d.length - 1], a)),
                      d[d.length - 1] = "P"); m < e; )
                          u(n, m === e - 1),
                          s(m === e ? t : void 0, n)
              }
          },
          getCurrentListType: function() {
              return f
          },
          getCurrentLevel: function() {
              return m
          }
      }
  }
  function gr(e, t) {
      Jn("Unexpected token in list conversion: " + t.toString()),
      e.rollback()
  }
  function vr(e, t, n) {
      n.type() === Pr && "" === kr(n.text()) ? e.defer(n) : t.skippedPara || n.type() !== _r || "P" !== n.tag() || ar(n) ? bo(e, t, n) : (t.openedTag = n,
      e.defer(n),
      t.nextFilter = yo)
  }
  function hr(e, t, n) {
      n.type() === Nr && t.originalToken.tag() === n.tag() && (t.nextFilter = vr,
      t.styleLevelAdjust = -1),
      e.emit(n)
  }
  function yr(e) {
      var a, u, t;
      Co.nextFilter = Ao,
      Co.itemLevel = 0,
      Co.originalToken = null,
      Co.commentMode = !1,
      Co.openedTag = null,
      Co.symbolFont = !1,
      Co.listType = null,
      Co.indentGuesser = {
          guessIndentLevel: function(e, t, n, r) {
              var o, i;
              return r && /^([0-9]+\.)+[0-9]+\.?$/.test(r.text) ? r.text.replace(/([0-9]+|\.$)/g, "").length + 1 : (o = u || parseInt(vo(n, t.getAttribute("class"))),
              i = function(e, t) {
                  for (var n = 0, r = e.parentNode; null != r && r !== t.parentNode; )
                      n += r.offsetLeft,
                      r = r.offsetParent;
                  return n
              }(e.getNode(), t.getNode()),
              o ? a ? i += a : 0 === i && (i += a = o) : o = 48,
              u = o = Math.min(i, o),
              Math.max(1, Math.floor(i / o)) || 1)
          }
      },
      Co.emitter = pr(e, e.document),
      Co.styles = (t = !1,
      {
          check: function(e) {
              return t && e.type() === Pr ? (e.text(),
              !0) : e.type() === _r && "STYLE" === e.tag() ? t = !0 : e.type() === Nr && "STYLE" === e.tag() && !(t = !1)
          }
      }),
      Co.spanCount = [],
      Co.skippedPara = !1,
      Co.styleLevelAdjust = 0,
      Co.bulletInfo = void 0
  }
  var br, xr, wr, Tr = function t(e) {
      function s(e) {
          return t(e)
      }
      var l = 0 < arguments.length && void 0 !== e ? e : "undefined" == typeof window ? null : window;
      if (s.version = "2.2.8",
      s.removed = [],
      !l || !l.document || 9 !== l.document.nodeType)
          return s.isSupported = !1,
          s;
      var n, f = l.document, a = l.document, d = l.DocumentFragment, r = l.HTMLTemplateElement, m = l.Node, u = l.Element, o = l.NodeFilter, i = l.NamedNodeMap, c = void 0 === i ? l.NamedNodeMap || l.MozNamedAttrMap : i, p = l.Text, g = l.Comment, v = l.DOMParser, h = l.trustedTypes, y = u.prototype, b = In(y, "cloneNode"), x = In(y, "nextSibling"), w = In(y, "childNodes"), T = In(y, "parentNode");
      "function" != typeof r || (n = a.createElement("template")).content && n.content.ownerDocument && (a = n.content.ownerDocument);
      var I = function(e, t) {
          if ("object" !== (void 0 === e ? "undefined" : Bn(e)) || "function" != typeof e.createPolicy)
              return null;
          var n = null
            , r = "data-tt-policy-suffix"
            , o = "dompurify" + ((n = t.currentScript && t.currentScript.hasAttribute(r) ? t.currentScript.getAttribute(r) : n) ? "#" + n : "");
          try {
              return e.createPolicy(o, {
                  createHTML: function(e) {
                      return e
                  }
              })
          } catch (e) {
              return console.warn("TrustedTypes policy " + o + " could not be created."),
              null
          }
      }(h, f)
        , S = I && re ? I.createHTML("") : ""
        , O = a
        , A = O.implementation
        , C = O.createNodeIterator
        , D = O.createDocumentFragment
        , k = f.importNode
        , L = {};
      try {
          L = Tn(a).documentMode ? a.documentMode : {}
      } catch (e) {}
      var E = {};
      function _(e) {
          ve && ve === e || (e = Tn(e = e && "object" === (void 0 === e ? "undefined" : Bn(e)) ? e : {}),
          W = "ALLOWED_TAGS"in e ? wn({}, e.ALLOWED_TAGS) : B,
          z = "ALLOWED_ATTR"in e ? wn({}, e.ALLOWED_ATTR) : $,
          le = "ADD_URI_SAFE_ATTR"in e ? wn(Tn(fe), e.ADD_URI_SAFE_ATTR) : fe,
          ce = "ADD_DATA_URI_TAGS"in e ? wn(Tn(se), e.ADD_DATA_URI_TAGS) : se,
          q = "FORBID_TAGS"in e ? wn({}, e.FORBID_TAGS) : {},
          V = "FORBID_ATTR"in e ? wn({}, e.FORBID_ATTR) : {},
          N = "USE_PROFILES"in e && e.USE_PROFILES,
          G = !1 !== e.ALLOW_ARIA_ATTR,
          K = !1 !== e.ALLOW_DATA_ATTR,
          X = e.ALLOW_UNKNOWN_PROTOCOLS || !1,
          J = e.SAFE_FOR_TEMPLATES || !1,
          Y = e.WHOLE_DOCUMENT || !1,
          ee = e.RETURN_DOM || !1,
          te = e.RETURN_DOM_FRAGMENT || !1,
          ne = !1 !== e.RETURN_DOM_IMPORT,
          re = e.RETURN_TRUSTED_TYPE || !1,
          Q = e.FORCE_BODY || !1,
          oe = !1 !== e.SANITIZE_DOM,
          ie = !1 !== e.KEEP_CONTENT,
          ae = e.IN_PLACE || !1,
          H = e.ALLOWED_URI_REGEXP || H,
          ge = e.NAMESPACE || ge,
          J && (K = !1),
          te && (ee = !0),
          N && (W = wn({}, [].concat(zn(Ln))),
          z = [],
          !0 === N.html && (wn(W, Sn),
          wn(z, En)),
          !0 === N.svg && (wn(W, On),
          wn(z, _n),
          wn(z, Pn)),
          !0 === N.svgFilters && (wn(W, An),
          wn(z, _n),
          wn(z, Pn)),
          !0 === N.mathMl && (wn(W, Dn),
          wn(z, Nn),
          wn(z, Pn))),
          e.ADD_TAGS && wn(W = W === B ? Tn(W) : W, e.ADD_TAGS),
          e.ADD_ATTR && wn(z = z === $ ? Tn(z) : z, e.ADD_ATTR),
          e.ADD_URI_SAFE_ATTR && wn(le, e.ADD_URI_SAFE_ATTR),
          ie && (W["#text"] = !0),
          Y && wn(W, ["html", "head", "body"]),
          W.table && (wn(W, ["tbody"]),
          delete q.tbody),
          rn && rn(e),
          ve = e)
      }
      s.isSupported = "function" == typeof T && A && void 0 !== A.createHTMLDocument && 9 !== L;
      var N, P = Rn, R = Mn, M = Fn, F = jn, j = Hn, U = Wn, H = Un, W = null, B = wn({}, [].concat(zn(Sn), zn(On), zn(An), zn(Dn), zn(Ln))), z = null, $ = wn({}, [].concat(zn(En), zn(_n), zn(Nn), zn(Pn))), q = null, V = null, G = !0, K = !0, X = !1, J = !1, Y = !1, Z = !1, Q = !1, ee = !1, te = !1, ne = !0, re = !1, oe = !0, ie = !0, ae = !1, ue = wn({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ce = null, se = wn({}, ["audio", "video", "img", "source", "image", "track"]), le = null, fe = wn({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]), de = "http://www.w3.org/1998/Math/MathML", me = "http://www.w3.org/2000/svg", pe = "http://www.w3.org/1999/xhtml", ge = pe, ve = null, he = a.createElement("form"), ye = wn({}, ["mi", "mo", "mn", "ms", "mtext"]), be = wn({}, ["foreignobject", "desc", "title", "annotation-xml"]), xe = wn({}, On);
      wn(xe, An),
      wn(xe, Cn);
      var we = wn({}, Dn);
      function Te(t) {
          dn(s.removed, {
              element: t
          });
          try {
              t.parentNode.removeChild(t)
          } catch (e) {
              try {
                  t.outerHTML = S
              } catch (e) {
                  t.remove()
              }
          }
      }
      function Ie(e, t) {
          try {
              dn(s.removed, {
                  attribute: t.getAttributeNode(e),
                  from: t
              })
          } catch (e) {
              dn(s.removed, {
                  attribute: null,
                  from: t
              })
          }
          if (t.removeAttribute(e),
          "is" === e && !z[e])
              if (ee || te)
                  try {
                      Te(t)
                  } catch (e) {}
              else
                  try {
                      t.setAttribute(e, "")
                  } catch (e) {}
      }
      function Se(e) {
          var t, n = void 0, r = void 0;
          Q ? e = "<remove></remove>" + e : r = (t = pn(e, /^[\r\n\t ]+/)) && t[0];
          var o = I ? I.createHTML(e) : e;
          if (ge === pe)
              try {
                  n = (new v).parseFromString(o, "text/html")
              } catch (e) {}
          n && n.documentElement || ((n = A.createDocument(ge, "template", null)).documentElement.innerHTML = o);
          var i = n.body || n.documentElement;
          return e && r && i.insertBefore(a.createTextNode(r), i.childNodes[0] || null),
          Y ? n.documentElement : i
      }
      function Oe(e) {
          return C.call(e.ownerDocument || e, e, o.SHOW_ELEMENT | o.SHOW_COMMENT | o.SHOW_TEXT, function() {
              return o.FILTER_ACCEPT
          }, !1)
      }
      function Ae(e) {
          return "object" === (void 0 === m ? "undefined" : Bn(m)) ? e instanceof m : e && "object" === (void 0 === e ? "undefined" : Bn(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
      }
      function Ce(e, t, n) {
          E[e] && ln(E[e], function(e) {
              e.call(s, t, n, ve)
          })
      }
      function De(e) {
          var t;
          if (Ce("beforeSanitizeElements", e, null),
          !(e instanceof p || e instanceof g || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof c && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI && "function" == typeof e.insertBefore))
              return Te(e),
              1;
          if (pn(e.nodeName, /[\u0080-\uFFFF]/))
              return Te(e),
              1;
          var n = mn(e.nodeName);
          if (Ce("uponSanitizeElement", e, {
              tagName: n,
              allowedTags: W
          }),
          !Ae(e.firstElementChild) && (!Ae(e.content) || !Ae(e.content.firstElementChild)) && yn(/<[/\w]/g, e.innerHTML) && yn(/<[/\w]/g, e.textContent))
              return Te(e),
              1;
          if (W[n] && !q[n])
              return e instanceof u && !function(e) {
                  var t = T(e);
                  t && t.tagName || (t = {
                      namespaceURI: pe,
                      tagName: "template"
                  });
                  var n = mn(e.tagName)
                    , r = mn(t.tagName);
                  if (e.namespaceURI === me)
                      return t.namespaceURI === pe ? "svg" === n : t.namespaceURI === de ? "svg" === n && ("annotation-xml" === r || ye[r]) : Boolean(xe[n]);
                  if (e.namespaceURI === de)
                      return t.namespaceURI === pe ? "math" === n : t.namespaceURI === me ? "math" === n && be[r] : Boolean(we[n]);
                  if (e.namespaceURI === pe && (t.namespaceURI !== me || be[r]) && (t.namespaceURI !== de || ye[r])) {
                      var o = wn({}, ["title", "style", "font", "a", "script"]);
                      return !we[n] && (o[n] || !xe[n])
                  }
              }(e) || ("noscript" === n || "noembed" === n) && yn(/<\/no(script|embed)/i, e.innerHTML) ? (Te(e),
              1) : (J && 3 === e.nodeType && (t = e.textContent,
              t = gn(t, P, " "),
              t = gn(t, R, " "),
              e.textContent !== t && (dn(s.removed, {
                  element: e.cloneNode()
              }),
              e.textContent = t)),
              Ce("afterSanitizeElements", e, null),
              0);
          if (ie && !ue[n]) {
              var r = T(e) || e.parentNode
                , o = w(e) || e.childNodes;
              if (o && r)
                  for (var i = o.length - 1; 0 <= i; --i)
                      r.insertBefore(b(o[i], !0), x(e))
          }
          return Te(e),
          1
      }
      function ke(e, t, n) {
          if (oe && ("id" === t || "name" === t) && (n in a || n in he))
              return !1;
          if (!(K && yn(M, t) || G && yn(F, t))) {
              if (!z[t] || V[t])
                  return !1;
              if (!le[t] && !yn(H, gn(n, U, "")) && ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== vn(n, "data:") || !ce[e]) && (!X || yn(j, gn(n, U, ""))) && n)
                  return !1
          }
          return !0
      }
      function Le(e) {
          var t, n = void 0, r = void 0;
          Ce("beforeSanitizeAttributes", e, null);
          var o = e.attributes;
          if (o) {
              for (var i = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: z
              }, r = o.length; r--; ) {
                  var a = (t = o[r]).name
                    , u = t.namespaceURI
                    , n = hn(t.value)
                    , c = mn(a);
                  if (i.attrName = c,
                  i.attrValue = n,
                  i.keepAttr = !0,
                  i.forceKeepAttr = void 0,
                  Ce("uponSanitizeAttribute", e, i),
                  n = i.attrValue,
                  !i.forceKeepAttr && (Ie(a, e),
                  i.keepAttr))
                      if (yn(/\/>/i, n))
                          Ie(a, e);
                      else if (J && (n = gn(n, P, " "),
                      n = gn(n, R, " ")),
                      ke(e.nodeName.toLowerCase(), c, n))
                          try {
                              u ? e.setAttributeNS(u, a, n) : e.setAttribute(a, n),
                              fn(s.removed)
                          } catch (e) {}
              }
              Ce("afterSanitizeAttributes", e, null)
          }
      }
      return wn(we, kn),
      s.sanitize = function(e, t) {
          var n, r, o = void 0, i = void 0, a = void 0;
          if ("string" != typeof (e = e || "\x3c!--\x3e") && !Ae(e)) {
              if ("function" != typeof e.toString)
                  throw bn("toString is not a function");
              if ("string" != typeof (e = e.toString()))
                  throw bn("dirty is not a string, aborting")
          }
          if (!s.isSupported) {
              if ("object" === Bn(l.toStaticHTML) || "function" == typeof l.toStaticHTML) {
                  if ("string" == typeof e)
                      return l.toStaticHTML(e);
                  if (Ae(e))
                      return l.toStaticHTML(e.outerHTML)
              }
              return e
          }
          if (Z || _(t),
          s.removed = [],
          !(ae = "string" != typeof e && ae))
              if (e instanceof m)
                  1 === (n = (o = Se("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === n.nodeName || "HTML" === n.nodeName ? o = n : o.appendChild(n);
              else {
                  if (!ee && !J && !Y && -1 === e.indexOf("<"))
                      return I && re ? I.createHTML(e) : e;
                  if (!(o = Se(e)))
                      return ee ? null : S
              }
          o && Q && Te(o.firstChild);
          for (var u = Oe(ae ? e : o); r = u.nextNode(); )
              3 === r.nodeType && r === i || De(r) || (r.content instanceof d && function e(t) {
                  var n, r = Oe(t);
                  for (Ce("beforeSanitizeShadowDOM", t, null); n = r.nextNode(); )
                      Ce("uponSanitizeShadowNode", n, null),
                      De(n) || (n.content instanceof d && e(n.content),
                      Le(n));
                  Ce("afterSanitizeShadowDOM", t, null)
              }(r.content),
              Le(r),
              i = r);
          if (i = null,
          ae)
              return e;
          if (ee) {
              if (te)
                  for (a = D.call(o.ownerDocument); o.firstChild; )
                      a.appendChild(o.firstChild);
              else
                  a = o;
              return ne ? k.call(f, a, !0) : a
          }
          var c = Y ? o.outerHTML : o.innerHTML;
          return J && (c = gn(c, P, " "),
          c = gn(c, R, " ")),
          I && re ? I.createHTML(c) : c
      }
      ,
      s.setConfig = function(e) {
          _(e),
          Z = !0
      }
      ,
      s.clearConfig = function() {
          ve = null,
          Z = !1
      }
      ,
      s.isValidAttribute = function(e, t, n) {
          return ve || _({}),
          ke(mn(e), mn(t), n)
      }
      ,
      s.addHook = function(e, t) {
          "function" == typeof t && (E[e] = E[e] || [],
          dn(E[e], t))
      }
      ,
      s.removeHook = function(e) {
          E[e] && fn(E[e])
      }
      ,
      s.removeHooks = function(e) {
          E[e] && (E[e] = [])
      }
      ,
      s.removeAllHooks = function() {
          E = {}
      }
      ,
      s
  }(), Ir = ["script", "svg"], Sr = {
      sanitizeHtml: o,
      sanitizeText: o
  }, Or = "x-tinymce/html", Ar = b(Or), Cr = "\x3c!-- " + Or + " --\x3e", Dr = tinymce.each, kr = tinymce.trim, Lr = {
      strip_class_attributes: "all",
      retain_style_properties: "none"
  }, Er = {
      strip_class_attributes: "none",
      retain_style_properties: "valid"
  }, _r = "startElement", Nr = "endElement", Pr = "text", Rr = "comment", Mr = function(o) {
      function t() {
          return a
      }
      function i(n) {
          Dr(l(), function(e, t) {
              n(t, e)
          })
      }
      var a, u, c, s = 0, l = function() {
          return a = {},
          s = 0,
          Dr(o.attributes, function(e) {
              var t = e.nodeName
                , n = e.value;
              !1 === e.specified && ("name" !== e.nodeName || "" === e.value) || null != n && (a[t] = n,
              s++)
          }),
          void 0 === a.style && o.style.cssText && (a.style = o.style.cssText,
          s++),
          l = t,
          a
      };
      return {
          get: function(e) {
              return l()[e]
          },
          each: i,
          filter: function(e) {
              var n, r;
              u || (c = l),
              r = e,
              u = (n = u) && r ? function(e, t) {
                  return r(e, n(e, t))
              }
              : n || r,
              l = function() {
                  return l = c,
                  i(function(e, t) {
                      var n = u(e, t);
                      null === n ? (o.removeAttribute(e),
                      delete a[e],
                      s--) : n !== t && ("class" === e ? o.className = n : o.setAttribute(e, n),
                      a[e] = n)
                  }),
                  l = t,
                  a
              }
          },
          getAttributes: function() {
              return l()
          },
          getAttributeCount: function() {
              return l(),
              s
          }
      }
  }, Fr = !1, jr = tr("HTML", window.document), Ur = [function(e) {
      var t = e;
      return 65279 === t.charCodeAt(t.length - 1) ? t.substring(0, t.length - 1) : e
  }
  ], Hr = tinymce.isIE && 9 <= document.documentMode ? [function(e) {
      return e.replace(/<BR><BR>/g, "<br>")
  }
  , function(e) {
      return e.replace(/<br>/g, " ")
  }
  , function(e) {
      return e.replace(/<br><br>/g, "<BR><BR>")
  }
  , function(e) {
      return /<(h[1-6r]|p|div|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|caption|blockquote|center|dl|dt|dd|dir|fieldset)/.test(e) ? e.replace(/(?:<br>&nbsp;[\s\r\n]+|<br>)*(<\/?(h[1-6r]|p|div|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|caption|blockquote|center|dl|dt|dd|dir|fieldset)[^>]*>)(?:<br>&nbsp;[\s\r\n]+|<br>)*/g, "$1") : e
  }
  ].concat(Ur) : Ur, Wr = (br = Array.prototype.slice.call(Hr).reverse(),
  function(e) {
      for (var t = e, n = 0; n < br.length; n++)
          t = (0,
          br[n])(t);
      return t
  }
  ), Br = /^(mso-.*|tab-stops|tab-interval|language|text-underline|text-effect|text-line-through|font-color|horiz-align|list-image-[0-9]+|separator-image|table-border-color-(dark|light)|vert-align|vnd\..*)$/, zr = rr(function(e, t) {
      var r, n = e.settings.get("retain_style_properties");
      t.filterStyles((r = n,
      function(e, t) {
          var n = !1;
          switch (r) {
          case "all":
          case "*":
              n = !0;
              break;
          case "valid":
              n = !Br.test(e);
              break;
          case void 0:
          case "none":
              n = "list-style-type" === e;
              break;
          default:
              n = 0 <= ("," + r + ",").indexOf("," + e + ",")
          }
          return n ? t : null
      }
      )),
      e.emit(t)
  }), $r = rr(function(e, t) {
      e.seenList || (e.inferring ? "LI" === t.tag() && (t.type() === _r ? e.inferring++ : (e.inferring--,
      e.inferring || (e.needsClosing = !0))) : ("OL" === t.tag() || "UL" === t.tag() ? e.seenList = !0 : "LI" === t.tag() && (e.inferring = 1,
      e.needsClosing || e.emit(er("UL", {}, {}, e.document))),
      !e.needsClosing || e.inferring || t.isWhitespace() || (e.needsClosing = !1,
      e.emit(tr("UL", e.document))))),
      e.emit(t)
  }), qr = or(function(e, t) {
      return "name" === e || "id" === e ? null : t
  }), Vr = or(function(e, t) {
      if ("class" === e)
          switch (this.settings.get("strip_class_attributes")) {
          case "mso":
              return 0 === t.indexOf("Mso") ? null : t;
          case "none":
              return t;
          default:
              return null
          }
      return t
  }), Gr = function() {
      if (0 < navigator.userAgent.indexOf("Gecko") && navigator.userAgent.indexOf("WebKit") < 0)
          return !1;
      var e = document.createElement("div");
      try {
          e.innerHTML = '<p style="mso-list: Ignore;">&nbsp;</p>'
      } catch (e) {
          return !1
      }
      return "Ignore" === Qn(e.firstChild).getStyle("mso-list")
  }(), Kr = [], Xr = [], Jr = !1, Yr = rr(function(e, t) {
      function n(e) {
          return !(0 <= ",FONT,EM,STRONG,SAMP,ACRONYM,CITE,CODE,DFN,KBD,TT,B,I,U,S,SUB,SUP,INS,DEL,VAR,SPAN,".indexOf("," + e.tag() + ",") && ur(e, !0))
      }
      0 === (Kr = Kr || []).length ? t.type() !== _r || n(t) ? e.emit(t) : sr(e, t) : (Jr = Jr || n(t),
      sr(e, t))
  }), Zr = or(function(e, t) {
      return "style" === e && "" === t ? null : t
  }), Qr = or(function(e, t) {
      return "lang" === e ? null : t
  }), eo = rr(function(e, t) {
      if ("IMG" === t.tag()) {
          if (t.type() === Nr && e.skipEnd)
              return e.skipEnd = !1;
          if (t.type() === _r) {
              if (/^file:/.test(t.getAttribute("src")))
                  return e.skipEnd = !0,
                  0;
              if (e.settings.get("base_64_images") && /^data:image\/.*;base64/.test(t.getAttribute("src")))
                  return e.skipEnd = !0,
                  0
          }
      }
      e.emit(t)
  }), to = rr(function(e, t) {
      "META" !== t.tag() && "LINK" !== t.tag() && e.emit(t)
  }), no = [], ro = rr(function(e, t) {
      t.type() === _r && "A" === t.tag() ? (no.push(t),
      lr(t) && e.defer(t)) : t.type() === Nr && "A" === t.tag() ? (lr(no.pop()) && e.defer(t),
      0 === no.length && e.emitDeferred()) : e.hasDeferred() ? e.defer(t) : e.emit(t)
  }), oo = !1, io = [rr(function(e, t) {
      "SCRIPT" === t.tag() ? oo = t.type() === _r : oo || (t.filterAttributes(function(e, t) {
          return /^on/.test(e) || "language" === e ? null : t
      }),
      e.emit(t))
  }), qr, eo, zr, Qr, Zr, Vr, ro, Yr, to, $r], ao = rr(function(e, n) {
      n.filterAttributes(function(e, t) {
          return "align" !== e && ("UL" !== n.tag() && "OL" !== n.tag() || "type" !== e) ? t : null
      }),
      e.emit(n)
  }), uo = or(function(e, t) {
      return /^xmlns(:|$)/.test(e) ? null : t
  }), co = rr(function(e, t) {
      t.tag && /^([OVWXP]|U[0-9]+|ST[0-9]+):/.test(t.tag()) || e.emit(t)
  }), so = or(function(e, t) {
      return "href" === e && (0 <= t.indexOf("#_Toc") || 0 <= t.indexOf("#_mso")) ? null : t
  }), lo = or(function(e, t) {
      return /^v:/.test(e) ? null : t
  }), fo = [{
      regex: /^\(?[dc][\.\)]$/,
      type: {
          tag: "OL",
          type: "lower-alpha"
      }
  }, {
      regex: /^\(?[DC][\.\)]$/,
      type: {
          tag: "OL",
          type: "upper-alpha"
      }
  }, {
      regex: /^\(?M*(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})[\.\)]$/,
      type: {
          tag: "OL",
          type: "upper-roman"
      }
  }, {
      regex: /^\(?m*(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})[\.\)]$/,
      type: {
          tag: "OL",
          type: "lower-roman"
      }
  }, {
      regex: /^\(?[0-9]+[\.\)]$/,
      type: {
          tag: "OL"
      }
  }, {
      regex: /^([0-9]+\.)*[0-9]+\.?$/,
      type: {
          tag: "OL",
          variant: "outline"
      }
  }, {
      regex: /^\(?[a-z]+[\.\)]$/,
      type: {
          tag: "OL",
          type: "lower-alpha"
      }
  }, {
      regex: /^\(?[A-Z]+[\.\)]$/,
      type: {
          tag: "OL",
          type: "upper-alpha"
      }
  }], mo = {
      "\u2022": {
          tag: "UL",
          type: "disc"
      },
      "\xb7": {
          tag: "UL",
          type: "disc"
      },
      "\xa7": {
          tag: "UL",
          type: "square"
      }
  }, po = {
      o: {
          tag: "UL",
          type: "circle"
      },
      "-": {
          tag: "UL",
          type: "disc"
      },
      "\u25cf": {
          tag: "UL",
          type: "disc"
      }
  }, go = function(e, t, n) {
      return e === t || e && t && e.tag === t.tag && e.type === t.type && (n || e.variant === t.variant)
  }, vo = (xr = function(e, t) {
      var n, r = /([^{]+){([^}]+)}/g;
      for (r.lastIndex = 0; null !== (n = r.exec(e)); )
          Dr(n[1].split(","), function() {
              var e = (void 0).indexOf(".");
              if (0 <= e && void 0 === kr((void 0).substring(e + 1)))
                  return !1
          }());
      return !1
  }
  ,
  wr = {},
  function(e, t) {
      var n, r = e + "," + t;
      return wr.hasOwnProperty(r) ? wr[r] : (n = xr.call(null, e, t),
      wr[r] = n)
  }
  ), ho = ["disc", "circle", "square"], yo = function(e, t, n) {
      n.type() !== _r || "SPAN" !== n.tag() || 0 !== t.spanCount.length || !Gr && mr(n, t) || ar(n) ? n.type() === Nr ? "SPAN" === n.tag() ? (e.defer(n),
      t.spanCount.pop()) : "P" === n.tag() ? (e.defer(n),
      t.skippedPara = !0,
      t.openedTag = null,
      t.nextFilter = vr) : (t.nextFilter = bo,
      t.nextFilter(e, t, n)) : n.isWhitespace() ? e.defer(n) : (t.nextFilter = bo,
      t.nextFilter(e, t, n)) : (e.defer(n),
      t.spanCount.push(n))
  }, bo = function(e, t, n) {
      function r() {
          t.emitter.closeAllLists(),
          e.emitDeferred(),
          t.openedTag = null,
          e.emit(n),
          t.nextFilter = bo
      }
      var o;
      n.type() === _r && ar(n) && "LI" !== n.tag() ? (o = / level([0-9]+)/.exec(n.getStyle("mso-list"))) && o[1] ? (t.itemLevel = parseInt(o[1], 10) + t.styleLevelAdjust,
      t.nextFilter === bo ? e.emitDeferred() : e.dropDeferred(),
      t.nextFilter = xo,
      e.startTransaction(),
      t.originalToken = n,
      t.commentMode = !1) : r() : !Gr && (n.type() === Rr && "[if !supportLists]" === n.text() || mr(n, e)) ? (n.type() === _r && "SPAN" === n.tag() && t.spanCount.push(n),
      t.nextFilter = xo,
      e.startTransaction(),
      t.originalToken = t.openedTag,
      t.commentMode = !0,
      t.openedTag = null,
      e.dropDeferred()) : n.type() === Nr && ir(n) ? (e.defer(n),
      t.spanCount.pop()) : n.type() === _r ? ir(n) ? (e.defer(n),
      t.spanCount.push(n)) : (t.openedTag && (t.emitter.closeAllLists(),
      e.emitDeferred()),
      t.openedTag = n,
      e.defer(n)) : r()
  }, xo = function(e, t, n) {
      var r, o;
      n.type() === _r && "Ignore" === n.getStyle("mso-list") && (t.nextFilter = wo),
      n.type() === _r && "SPAN" === n.tag() ? (t.spanCount.push(n),
      (t.commentMode && "" === n.getAttribute("style") || null === n.getAttribute("style")) && (t.nextFilter = wo)) : "A" === n.tag() ? n.type() === _r ? t.spanCount.push(n) : t.spanCount.pop() : n.type() === Pr ? t.commentMode ? (t.nextFilter = wo,
      t.nextFilter(e, t, n)) : (r = t.originalToken,
      o = t.spanCount,
      t.emitter.closeAllLists(),
      e.emit(r),
      Dr(o, Xn(e.emit, e)),
      e.emit(n),
      e.commit(),
      t.originalToken = r,
      t.nextFilter = hr) : !t.commentMode && n.type() === Rr || gr(e, n)
  }, wo = function(e, t, n) {
      n.type() === Pr ? n.isWhitespace() || (t.nextFilter = To,
      t.bulletInfo = {
          text: n.text(),
          symbolFont: t.symbolFont
      }) : ir(n) ? n.type() === _r ? t.spanCount.push(n) : t.spanCount.pop() : n.type() === _r && "IMG" === n.tag() ? (t.nextFilter = To,
      t.bulletInfo = {
          text: "\u2202",
          symbolFont: !0
      }) : gr(e, n)
  }, To = function(e, t, n) {
      n.type() === _r && ir(n) ? (t.spanCount.push(n),
      t.nextFilter = Io) : n.type() === Nr && ir(n) ? (t.spanCount.pop(),
      t.nextFilter = So) : n.type() === Nr && "IMG" === n.tag() || gr(e, n)
  }, Io = function(e, t, n) {
      n.type() === Nr && (ir(n) && t.spanCount.pop(),
      t.nextFilter = So)
  }, So = function(n, r, o) {
      function e(e) {
          var t;
          if (r.nextFilter = Oo,
          r.commentMode && (r.itemLevel = r.indentGuesser.guessIndentLevel(o, r.originalToken, r.styles.styles, r.bulletInfo)),
          r.listType = dr(r.bulletInfo, (t = r.emitter.getCurrentListType(),
          r.emitter.getCurrentLevel() === r.itemLevel ? t : null), r.originalToken),
          r.listType) {
              for (r.emitter.openItem(r.itemLevel, r.originalToken, r.listType, r.skippedPara),
              n.emitDeferred(); 0 < r.spanCount.length; )
                  n.emit(r.spanCount.shift());
              e && n.emit(o)
          } else
              Jn("Unknown list type: " + r.bulletInfo.text + " Symbol font? " + r.bulletInfo.symbolFont),
              n.rollback()
      }
      o.type() === Pr || o.type() === _r ? e(!0) : o.type() === Rr ? e("[endif]" !== o.text()) : o.type() === Nr ? ir(o) && r.spanCount.pop() : gr(n, o)
  }, Oo = function(e, t, n) {
      n.type() === Nr && n.tag() === t.originalToken.tag() ? (t.nextFilter = vr,
      t.skippedPara = !1) : e.emit(n)
  }, Ao = bo, Co = {};
  function Do(e, t, n) {
      var r = Wr(e)
        , o = fi(r);
      t.setWordContent(o);
      var i = io;
      return function(e, t, n, r) {
          for (var i = nr(n), o = function(e, n) {
              var r;
              n = n || window.document,
              r = n.createElement("div"),
              n.body.appendChild(r),
              r.style.position = "absolute",
              r.style.left = "-10000px",
              r.innerHTML = e;
              var o = r.firstChild || jr
                , i = []
                , a = !1;
              return {
                  hasNext: function() {
                      return void 0 !== o
                  },
                  next: function() {
                      var e = o
                        , t = a;
                      return !a && o.firstChild ? (i.push(o),
                      o = o.firstChild) : a = !a && 1 === o.nodeType || (o.nextSibling ? (o = o.nextSibling,
                      !1) : (o = i.pop(),
                      !0)),
                      e === jr || o || (n.body.removeChild(r),
                      o = jr),
                      e === jr ? e : e ? Qn(e, t) : void 0
                  }
              }
          }(e, n), a = function(e, t, n) {
              for (var r = i, o = e.length - 1; 0 <= o; o--)
                  r = e[o](r, t, n);
              return r
          }(r, t, n); o.hasNext(); )
              a.receive(o.next());
          return i.dom
      }(r, t, n, i = o ? li.concat(io) : i)
  }
  function ko(c, i, a) {
      return {
          showDialog: function(u) {
              function n(e) {
                  var t, n, r, o, i, a = Gn(c).sanitizeHtml(u);
                  0 < a.length && (c.fire("PastePreProcess", {
                      content: {
                          content: a
                      },
                      internal: !1
                  }),
                  n = Yn(t = e, Lr, !0),
                  r = Yn(t, Er, !0),
                  o = r,
                  i = Do(a, {
                      setWordContent: function(e) {
                          o = e ? n : r
                      },
                      get: function(e) {
                          return o[e]
                      }
                  }, c.getDoc()),
                  c.fire("PastePostProcess", {
                      node: i,
                      internal: !1
                  }),
                  c.undoManager.transact(function() {
                      var e = Kn(i);
                      c.insertContent(e)
                  }))
              }
              var e, t = Y(c), r = Z(c), o = fi(u) ? t : r;
              (g(e = o) ? e() : Ue.resolve(e)).then(function(e) {
                  var t = V(e) ? e : "clean";
                  "prompt" === t ? (a ? mi : di).openDialog(c, i, n) : n(t)
              }, function(e) {
                  console.error(e),
                  n("clean")
              })
          }
      }
  }
  function Lo(e, t) {
      return e.hasEventListeners(t)
  }
  function Eo(e, t, n, r, o) {
      var i, a, u, c, s, l, f, d, m, p = t.replace(Cr, ""), g = n, v = r, h = o, y = Lo(m = i = e, "PastePreProcess") ? m.fire("PastePreProcess", {
          internal: g,
          content: p,
          source: v,
          mode: h
      }).content : p, b = n, x = r, w = o;
      return Lo(i, "PastePostProcess") ? (u = y,
      c = b,
      s = x,
      l = w,
      f = (a = i).dom.add(a.getBody(), "div", {
          style: "display:none"
      }, u),
      d = a.fire("PastePostProcess", {
          internal: c,
          node: f,
          source: s,
          mode: l
      }).node.innerHTML,
      a.dom.remove(f),
      d) : y
  }
  function _o(e) {
      return e.plugins.powerpaste
  }
  function No(c, e, s, l) {
      var f;
      function d(e, t) {
          return t in e && 0 < e[t].length
      }
      c.on("dragstart dragend", function(e) {
          f = "dragstart" === e.type
      }),
      c.on("dragover dragend dragleave", function(e) {
          f || e.preventDefault()
      });
      c.on("drop", function(e) {
          if (!f) {
              var t, n = tinymce.dom.RangeUtils;
              n && n.getCaretRangeFromPoint && (v(t = n.getCaretRangeFromPoint(e.clientX || 0, e.clientY || 0, c.getDoc())) && c.selection.setRng(t));
              var r = M(e.target.files || e.dataTransfer.files, (a = ee(c),
              function(r) {
                  return Bt(r.type, "image/") && _(a, function(e) {
                      return t = e.toLowerCase(),
                      (Te(n = {
                          jpg: "jpeg",
                          jpe: "jpeg",
                          jfi: "jpeg",
                          jif: "jpeg",
                          jfif: "jpeg",
                          pjpeg: "jpeg",
                          pjp: "jpeg",
                          svg: "svg+xml"
                      }, t) ? "image/" + n[t] : "image/" + t) === r.type;
                      var t, n
                  })
              }
              ));
              if (0 < r.length)
                  return dt(r).get(function(e) {
                      var t = N(e, function(e) {
                          var t = Jt.fromTag("img");
                          return St(t, "src", Se.cata(e, s.getLocalURL, function(e, t, n) {
                              return t
                          })),
                          t.dom.outerHTML
                      }).join("");
                      c.insertContent(Eo(c, t, !1, "imagedrop", "auto"), {
                          merge: Q(c)
                      }),
                      X(c) && s.uploadImages(e)
                  }),
                  void e.preventDefault();
              var o = function(e) {
                  var t, n = {};
                  if (e && (!e.getData || (t = e.getData("Text")) && 0 < t.length && (n["text/plain"] = t),
                  e.types))
                      for (var r = 0; r < e.types.length; r++) {
                          var o = e.types[r];
                          n[o] = e.getData(o)
                      }
                  return n
              }(e.dataTransfer);
              u = o,
              !!(i = u["text/plain"]) && 0 === i.indexOf("file://") || !d(u, "text/html") && !d(u, "text/plain") || (ko(c, Et, l).showDialog(o["text/html"] || o["text/plain"]),
              e.preventDefault())
          }
          var i, a, u
      })
  }
  function Po() {
      function n(e) {
          URL.revokeObjectURL(e.objurl())
      }
      var o = {};
      return {
          add: function(e, t, n) {
              var r = {
                  id: b(e),
                  imageresult: b(t),
                  objurl: b(n)
              };
              return o[e] = r
          },
          get: function(e) {
              return pe(o, e)
          },
          remove: function(e) {
              var t = o[e];
              delete o[e],
              void 0 !== t && n(t)
          },
          lookupByData: function(a) {
              return function(e) {
                  for (var t = be(e), n = 0, r = t.length; n < r; n++) {
                      var o = t[n]
                        , i = e[o];
                      if (lt(i.imageresult()) === a)
                          return re.some(i)
                  }
                  return re.none()
              }(o)
          },
          destroy: function() {
              se(o, n),
              o = {}
          }
      }
  }
  function Ro(t) {
      var o = [];
      return {
          bind: function(e) {
              if (void 0 === e)
                  throw new Error("Event bind error: undefined handler");
              o.push(e)
          },
          unbind: function(t) {
              o = M(o, function(e) {
                  return e !== t
              })
          },
          trigger: function() {
              for (var n = [], e = 0; e < arguments.length; e++)
                  n[e] = arguments[e];
              var r = {};
              P(t, function(e, t) {
                  r[e] = n[t]
              }),
              P(o, function(e) {
                  e(r)
              })
          }
      }
  }
  function Mo(e) {
      return {
          registry: le(e, function(e) {
              return {
                  bind: e.bind,
                  unbind: e.unbind
              }
          }),
          trigger: le(e, function(e) {
              return e.trigger
          })
      }
  }
  function Fo(n) {
      var r, o = !1;
      return function() {
          for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
          return o || (o = !0,
          r = n.apply(null, e)),
          r
      }
  }
  function jo(e, t) {
      var n = String(t).toLowerCase();
      return j(e, function(e) {
          return e.search(n)
      })
  }
  function Uo(t) {
      return function(e) {
          return vt(e, t)
      }
  }
  function Ho(e) {
      return window.matchMedia(e).matches
  }
  function Wo(e, t) {
      var n = e.dom;
      if (1 !== n.nodeType)
          return !1;
      var r = n;
      if (void 0 !== r.matches)
          return r.matches(t);
      if (void 0 !== r.msMatchesSelector)
          return r.msMatchesSelector(t);
      if (void 0 !== r.webkitMatchesSelector)
          return r.webkitMatchesSelector(t);
      if (void 0 !== r.mozMatchesSelector)
          return r.mozMatchesSelector(t);
      throw new Error("Browser lacks native selectors")
  }
  function Bo(e) {
      return 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount
  }
  function zo(e, t) {
      var n = void 0 === t ? document : t.dom;
      return Bo(n) ? [] : N(n.querySelectorAll(e), Jt.fromDom)
  }
  function $o(e, t) {
      return e.dom === t.dom
  }
  function qo(e) {
      return Jt.fromDom(e.dom.ownerDocument)
  }
  function Vo(e) {
      return Kt(e) ? e : qo(e)
  }
  function Go(e) {
      return Jt.fromDom(Vo(e).dom.defaultView)
  }
  function Ko(e) {
      return re.from(e.dom.parentNode).map(Jt.fromDom)
  }
  function Xo(e) {
      return re.from(e.dom.previousSibling).map(Jt.fromDom)
  }
  function Jo(e) {
      return re.from(e.dom.nextSibling).map(Jt.fromDom)
  }
  function Yo(o) {
      return e = function(t) {
          for (var n = [], e = function(e) {
              return n.push(e),
              t(e)
          }, r = t(o); (r = r.bind(e)).isSome(); )
              ;
          return n
      }(Xo),
      (t = oe.call(e, 0)).reverse(),
      t;
      var e, t
  }
  function Zo(e) {
      return N(e.dom.childNodes, Jt.fromDom)
  }
  function Qo(e) {
      return Jt.fromDom(e.dom.host)
  }
  function ei(e, t) {
      return zo(t, e)
  }
  function ti(e) {
      var t = e.replace(/\./g, "-");
      return {
          resolve: function(e) {
              return N(e.split(" "), function(e) {
                  return t + "-" + e
              }).join(" ")
          }
      }
  }
  function ni(e, t) {
      return ei(e, "img[" + ji + '="' + t + '"]')
  }
  function ri(e) {
      return ei(e, "img:not([" + ji + "])[" + Fi.blobId() + "]")
  }
  function oi() {
      function o() {
          return 0 < i.length
      }
      var i = []
        , a = []
        , u = Mo({
          complete: Ro(["response"])
      });
      return {
          findById: ni,
          findAll: ri,
          register: function(e, t) {
              St(e, ji, t),
              i.push(t)
          },
          report: function(e, t, n) {
              var r;
              P(t, function(e) {
                  kt(e, ji),
                  a.push({
                      success: n,
                      element: e.dom
                  })
              }),
              r = e,
              i = M(i, function(e) {
                  return e !== r
              }),
              o() || (u.trigger.complete(a),
              a = [])
          },
          inProgress: o,
          isActive: function(e) {
              return E(i, e)
          },
          events: u.registry
      }
  }
  yr({});
  function ii() {
      return pi(0, 0)
  }
  function ai(e) {
      function t(e) {
          return function() {
              return n === e
          }
      }
      var n = e.current
        , r = e.version;
      return {
          current: n,
          version: r,
          isEdge: t("Edge"),
          isChrome: t("Chrome"),
          isIE: t("IE"),
          isOpera: t("Opera"),
          isFirefox: t(yi),
          isSafari: t("Safari")
      }
  }
  function ui(e) {
      function t(e) {
          return function() {
              return n === e
          }
      }
      var n = e.current
        , r = e.version;
      return {
          current: n,
          version: r,
          isWindows: t(wi),
          isiOS: t("iOS"),
          isAndroid: t(Ti),
          isOSX: t("OSX"),
          isLinux: t("Linux"),
          isSolaris: t(Ii),
          isFreeBSD: t(Si),
          isChromeOS: t(Oi)
      }
  }
  var ci, si, li = [co, rr(function(e, t) {
      var n, r, o;
      Co.styles.check(t) || (Co.symbolFont = (r = Co.symbolFont,
      (n = t).type() === _r && ((o = n.getStyle("font-family")) ? r = "Wingdings" === o || "Symbol" === o : /^(P|H[1-6]|DIV)$/.test(n.tag()) && (r = !1)),
      r),
      Co.nextFilter(e, Co, t))
  }, function(e) {
      yr(e)
  }), so, lo, uo, ao], fi = function(e) {
      return 0 <= e.indexOf("<o:p>") || 0 <= e.indexOf("p.MsoNormal, li.MsoNormal, div.MsoNormal") || 0 <= e.indexOf("MsoListParagraphCxSpFirst") || 0 <= e.indexOf("<w:WordDocument>")
  }, di = Object.freeze({
      __proto__: null,
      openDialog: function(e, t, n) {
          var r = t("cement.dialog.paste.clean")
            , o = t("cement.dialog.paste.merge")
            , i = [{
              text: r,
              ariaLabel: r,
              onclick: function() {
                  u.close(),
                  n("clean")
              }
          }, {
              text: o,
              ariaLabel: o,
              onclick: function() {
                  u.close(),
                  n("merge")
              }
          }]
            , a = {
              title: t("cement.dialog.paste.title"),
              spacing: 10,
              padding: 10,
              items: [{
                  type: "container",
                  html: t("cement.dialog.paste.instructions")
              }],
              buttons: i
          }
            , u = e.windowManager.open(a);
          setTimeout(function() {
              u && u.getEl().focus()
          }, 1)
      }
  }), mi = Object.freeze({
      __proto__: null,
      openDialog: function(e, t, n) {
          var r = t("cement.dialog.paste.clean")
            , o = t("cement.dialog.paste.merge")
            , i = {
              title: t("cement.dialog.paste.title"),
              body: {
                  type: "panel",
                  items: [{
                      type: "htmlpanel",
                      name: "instructions",
                      html: t("cement.dialog.paste.instructions")
                  }]
              },
              buttons: [{
                  text: r,
                  type: "custom",
                  name: "clean"
              }, {
                  text: o,
                  type: "custom",
                  name: "merge"
              }],
              onAction: function(e, t) {
                  switch (t.name) {
                  case "clean":
                      e.close(),
                      n("clean");
                      break;
                  case "merge":
                      e.close(),
                      n("merge")
                  }
              }
          };
          e.windowManager.open(i)
      }
  }), pi = function(e, t) {
      return {
          major: e,
          minor: t
      }
  }, gi = {
      nu: pi,
      detect: function(e, t) {
          var n, r, o = String(t).toLowerCase();
          return 0 === e.length ? ii() : (r = function(e, t) {
              for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  if (r.test(t))
                      return r
              }
          }(e, n = o)) ? pi(i(1), i(2)) : {
              major: 0,
              minor: 0
          };
          function i(e) {
              return Number(n.replace(r, "$" + e))
          }
      },
      unknown: ii
  }, vi = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, hi = {
      browsers: b([{
          name: "Edge",
          versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
          search: function(e) {
              return vt(e, "edge/") && vt(e, "chrome") && vt(e, "safari") && vt(e, "applewebkit")
          }
      }, {
          name: "Chrome",
          brand: "Chromium",
          versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, vi],
          search: function(e) {
              return vt(e, "chrome") && !vt(e, "chromeframe")
          }
      }, {
          name: "IE",
          versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
          search: function(e) {
              return vt(e, "msie") || vt(e, "trident")
          }
      }, {
          name: "Opera",
          versionRegexes: [vi, /.*?opera\/([0-9]+)\.([0-9]+).*/],
          search: Uo("opera")
      }, {
          name: "Firefox",
          versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
          search: Uo("firefox")
      }, {
          name: "Safari",
          versionRegexes: [vi, /.*?cpu os ([0-9]+)_([0-9]+).*/],
          search: function(e) {
              return (vt(e, "safari") || vt(e, "mobile/")) && vt(e, "applewebkit")
          }
      }]),
      oses: b([{
          name: "Windows",
          search: Uo("win"),
          versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
      }, {
          name: "iOS",
          search: function(e) {
              return vt(e, "iphone") || vt(e, "ipad")
          },
          versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
      }, {
          name: "Android",
          search: Uo("android"),
          versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
      }, {
          name: "OSX",
          search: Uo("mac os x"),
          versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
      }, {
          name: "Linux",
          search: Uo("linux"),
          versionRegexes: []
      }, {
          name: "Solaris",
          search: Uo("sunos"),
          versionRegexes: []
      }, {
          name: "FreeBSD",
          search: Uo("freebsd"),
          versionRegexes: []
      }, {
          name: "ChromeOS",
          search: Uo("cros"),
          versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
      }])
  }, yi = "Firefox", bi = function() {
      return ai({
          current: void 0,
          version: gi.unknown()
      })
  }, xi = ai, wi = (b("Edge"),
  b("Chrome"),
  b("IE"),
  b("Opera"),
  b(yi),
  b("Safari"),
  "Windows"), Ti = "Android", Ii = "Solaris", Si = "FreeBSD", Oi = "ChromeOS", Ai = function() {
      return ui({
          current: void 0,
          version: gi.unknown()
      })
  }, Ci = ui, Di = (b(wi),
  b("iOS"),
  b(Ti),
  b("Linux"),
  b("OSX"),
  b(Ii),
  b(Si),
  b(Oi),
  Fo(function() {
      return e = navigator.userAgent,
      t = re.from(navigator.userAgentData),
      n = Ho,
      g = hi.browsers(),
      v = hi.oses(),
      h = t.bind(function(e) {
          return r = g,
          q(e.brands, function(t) {
              var n = t.brand.toLowerCase();
              return j(r, function(e) {
                  var t;
                  return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase())
              }).map(function(e) {
                  return {
                      current: e.name,
                      version: gi.nu(parseInt(t.version, 10), 0)
                  }
              })
          });
          var r
      }).orThunk(function() {
          return jo(g, n = e).map(function(e) {
              var t = gi.detect(e.versionRegexes, n);
              return {
                  current: e.name,
                  version: t
              }
          });
          var n
      }).fold(bi, xi),
      y = jo(v, r = e).map(function(e) {
          var t = gi.detect(e.versionRegexes, r);
          return {
              current: e.name,
              version: t
          }
      }).fold(Ai, Ci),
      {
          browser: h,
          os: y,
          deviceType: (i = h,
          a = e,
          u = n,
          c = (o = y).isiOS() && !0 === /ipad/i.test(a),
          s = o.isiOS() && !c,
          f = (l = o.isiOS() || o.isAndroid()) || u("(pointer:coarse)"),
          d = c || !s && l && u("(min-device-width:768px)"),
          m = s || l && !d,
          p = i.isSafari() && o.isiOS() && !1 === /safari/i.test(a),
          {
              isiPad: b(c),
              isiPhone: b(s),
              isTablet: b(d),
              isPhone: b(m),
              isTouch: b(f),
              isAndroid: o.isAndroid,
              isiOS: o.isiOS,
              isWebView: b(p),
              isDesktop: b(!m && !d && !p)
          })
      };
      var e, t, n, r, o, i, a, u, c, s, l, f, d, m, p, g, v, h, y
  })), ki = Wo, Li = g(Element.prototype.attachShadow) && g(Node.prototype.getRootNode), Ei = b(Li), _i = Li ? function(e) {
      return Jt.fromDom(e.dom.getRootNode())
  }
  : Vo, Ni = function(e) {
      return v(e.dom.shadowRoot)
  }, Pi = function(e) {
      var t = Gt(e) ? e.dom.parentNode : e.dom;
      if (null == t || null === t.ownerDocument)
          return !1;
      var n, r, o, i, a, u = t.ownerDocument;
      return o = Jt.fromDom(t),
      a = _i(o),
      (Xt(i = a) && v(i.dom.host) ? re.some(a) : re.none()).fold(function() {
          return u.body.contains(t)
      }, (n = Pi,
      r = Qo,
      function(e) {
          return n(r(e))
      }
      ))
  }, Ri = function(e, t) {
      var n = [];
      return P(Zo(e), function(e) {
          n = (n = t(e) ? n.concat([e]) : n).concat(Ri(e, t))
      }),
      n
  }, Mi = ti("ephox-salmon").resolve, Fi = {
      uploadInProgress: b(Mi("upload-image-in-progress")),
      blobId: b("data-" + Mi("image-blob")),
      trackedImage: b("data-" + Mi("image-upload"))
  }, ji = Fi.trackedImage();
  function Ui(t) {
      return ze(function(n) {
          var e = new FileReader;
          e.onload = function(e) {
              var t = e.target ? e.target.result : "";
              n(t)
          }
          ,
          e.readAsText(t)
      })
  }
  function Hi(e) {
      try {
          var t = JSON.parse(e);
          return Ji.value(t)
      } catch (e) {
          return Ji.error("Response was not JSON.")
      }
  }
  function Wi(e) {
      return $e(e.response)
  }
  function Bi(e, t) {
      function n(e) {
          return ea({
              message: e,
              status: t.status,
              responseText: t.responseText
          })
      }
      switch (e) {
      case ci.JSON:
          return Hi(t.response).fold(n, Qi);
      case ci.Blob:
      case ci.Text:
          return Qi(t.response);
      default:
          return n("unknown data type")
      }
  }
  function zi(p) {
      return Zi(function(r) {
          var o, i = new XMLHttpRequest;
          i.open(p.method, (o = p.url,
          re.from(p.query).map(function(e) {
              var t = de(e, function(e, t) {
                  return encodeURIComponent(t) + "=" + encodeURIComponent(e)
              })
                , n = vt(o, "?") ? "&" : "?";
              return 0 < t.length ? o + n + t.join("&") : o
          }).getOr(o)), !0);
          var n, e, t, a, u, c, s, l, f, d = (a = (t = p).body,
          u = re.from(a).bind(function(e) {
              switch (e.type) {
              case ci.JSON:
                  return re.some("application/json");
              case ci.FormData:
                  return re.some("application/x-www-form-urlencoded; charset=UTF-8");
              case ci.MultipartFormData:
                  return re.none();
              default:
                  return ci.Text,
                  re.some("text/plain")
              }
          }),
          c = !0 === t.credentials ? re.some(!0) : re.none(),
          s = function() {
              switch (t.responseType) {
              case ci.Blob:
                  return "application/octet-stream";
              case ci.JSON:
                  return "application/json, text/javascript";
              case ci.Text:
                  return "text/plain";
              default:
                  return ""
              }
          }() + ", */*; q=0.01",
          l = void 0 !== t.headers ? t.headers : {},
          {
              contentType: u,
              responseType: function() {
                  switch (t.responseType) {
                  case ci.JSON:
                      return re.none();
                  case ci.Blob:
                      return re.some("blob");
                  case ci.Text:
                      return re.some("text");
                  default:
                      return re.none()
                  }
              }(),
              credentials: c,
              accept: s,
              headers: l,
              progress: g(t.progress) ? re.some(t.progress) : re.none()
          });
          function m() {
              var t, n = p.url;
              (function(e, t) {
                  switch (e) {
                  case ci.JSON:
                      return Hi(t.response).fold(function() {
                          return Wi(t)
                      }, $e);
                  case ci.Blob:
                      return re.from(t.response).map(Ui).getOr($e("no response content"));
                  default:
                      return ci.Text,
                      Wi(t)
                  }
              }
              )(p.responseType, t = i).map(function(e) {
                  return {
                      message: 0 === t.status ? "Unknown HTTP error (possible cross-domain request)" : "Could not load url " + n + ": " + t.statusText,
                      status: t.status,
                      responseText: e
                  }
              }).get(function(e) {
                  return r(Ji.error(e))
              })
          }
          n = i,
          (e = d).contentType.each(function(e) {
              return n.setRequestHeader("Content-Type", e)
          }),
          n.setRequestHeader("Accept", e.accept),
          e.credentials.each(function(e) {
              return n.withCredentials = e
          }),
          e.responseType.each(function(e) {
              return n.responseType = e
          }),
          e.progress.each(function(t) {
              return n.upload.addEventListener("progress", function(e) {
                  return t(e.loaded, e.total)
              })
          }),
          se(e.headers, function(e, t) {
              return n.setRequestHeader(t, e)
          }),
          i.onerror = m,
          i.onload = function() {
              0 === i.status && !Bt(p.url, "file:") || i.status < 100 || 400 <= i.status ? m() : Bi(p.responseType, i).get(r)
          }
          ,
          f = p.body,
          re.from(f).map(function(e) {
              return e.type === ci.JSON ? JSON.stringify(e.data) : e.type === ci.FormData || e.type === ci.MultipartFormData ? (t = e.data,
              n = new FormData,
              se(t, function(e, t) {
                  n.append(t, e)
              }),
              n) : e.data;
              var t, n
          }).fold(function() {
              return i.send()
          }, function(e) {
              i.send(e)
          })
      })
  }
  function $i(e, t) {
      var n, r, o, i;
      return r = null !== (n = (t = void 0 === t ? {} : t).strictMode) && void 0 !== n && n,
      o = (r ? ta : na).exec(e),
      i = z(["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], function(e, t) {
          var n;
          return null !== (n = o[t]) && void 0 !== n ? n : ""
      }),
      ue(ue({}, i), {
          queryKey: function(e) {
              for (var t = {}; ; ) {
                  var n = ra.exec(e);
                  if (null === n)
                      return t;
                  t[n[1]] = n[2]
              }
          }(i.query)
      })
  }
  function qi(e) {
      return gt(e, oa(e))
  }
  function Vi(e) {
      for (var t, n = e, r = ""; "" !== n; )
          Bt(n, "../") ? n = pt(n, "../") : Bt(n, "./") ? n = pt(n, "./") : Bt(n, "/./") ? n = "/" + pt(n, "/./") : "/." === n ? n = "/" : Bt(n, "/../") ? (n = "/" + pt(n, "/../"),
          r = qi(r)) : "/.." === n ? (n = "/",
          r = qi(r)) : "." === n || ".." === n ? n = "" : (n = pt(n, t = /(^\/?.*?)(\/|$)/.exec(n)[1]),
          r += t);
      return r
  }
  function Gi(e, t, n) {
      return {
          message: b(e),
          status: b(t),
          contents: b(n)
      }
  }
  (si = ci = ci || {}).JSON = "json",
  si.Blob = "blob",
  si.Text = "text",
  si.FormData = "formdata",
  si.MultipartFormData = "multipart/form-data";
  var Ki = function(n) {
      return {
          isValue: w,
          isError: x,
          getOr: b(n),
          getOrThunk: b(n),
          getOrDie: b(n),
          or: function(e) {
              return Ki(n)
          },
          orThunk: function(e) {
              return Ki(n)
          },
          fold: function(e, t) {
              return t(n)
          },
          map: function(e) {
              return Ki(e(n))
          },
          mapError: function(e) {
              return Ki(n)
          },
          each: function(e) {
              e(n)
          },
          bind: function(e) {
              return e(n)
          },
          exists: function(e) {
              return e(n)
          },
          forall: function(e) {
              return e(n)
          },
          toOptional: function() {
              return re.some(n)
          }
      }
  }
    , Xi = function(n) {
      return {
          isValue: x,
          isError: w,
          getOr: o,
          getOrThunk: function(e) {
              return e()
          },
          getOrDie: function() {
              return C(String(n))()
          },
          or: o,
          orThunk: function(e) {
              return e()
          },
          fold: function(e, t) {
              return e(n)
          },
          map: function(e) {
              return Xi(n)
          },
          mapError: function(e) {
              return Xi(e(n))
          },
          each: S,
          bind: function(e) {
              return Xi(n)
          },
          exists: x,
          forall: w,
          toOptional: re.none
      }
  }
    , Ji = {
      value: Ki,
      error: Xi,
      fromOption: function(e, t) {
          return e.fold(function() {
              return Xi(t)
          }, Ki)
      }
  }
    , Yi = function(i) {
      return ue(ue({}, i), {
          toCached: function() {
              return Yi(i.toCached())
          },
          bindFuture: function(t) {
              return Yi(i.bind(function(e) {
                  return e.fold(function(e) {
                      return $e(Ji.error(e))
                  }, function(e) {
                      return t(e)
                  })
              }))
          },
          bindResult: function(t) {
              return Yi(i.map(function(e) {
                  return e.bind(t)
              }))
          },
          mapResult: function(t) {
              return Yi(i.map(function(e) {
                  return e.map(t)
              }))
          },
          mapError: function(t) {
              return Yi(i.map(function(e) {
                  return e.mapError(t)
              }))
          },
          foldResult: function(t, n) {
              return i.map(function(e) {
                  return e.fold(t, n)
              })
          },
          withTimeout: function(e, o) {
              return Yi(ze(function(t) {
                  var n = !1
                    , r = setTimeout(function() {
                      n = !0,
                      t(Ji.error(o()))
                  }, e);
                  i.get(function(e) {
                      n || (clearTimeout(r),
                      t(e))
                  })
              }))
          }
      })
  }
    , Zi = function(e) {
      return Yi(ze(e))
  }
    , Qi = function(e) {
      return Yi($e(Ji.value(e)))
  }
    , ea = function(e) {
      return Yi($e(Ji.error(e)))
  }
    , ta = /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
    , na = /^(?:(?![^:@\/]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    , ra = /(?:^|&)([^&=]+)=?([^&]*)/g
    , oa = function(e) {
      return e.substring(e.lastIndexOf("/"))
  }
    , ia = ["jpg", "png", "gif", "jpeg"];
  function aa(e, t) {
      var n = At(e, t);
      return void 0 === n || "" === n ? [] : n.split(" ")
  }
  function ua(e) {
      return void 0 !== e.dom.classList
  }
  function ca(e) {
      return aa(e, "class")
  }
  function sa(e, t) {
      var n, r, o;
      ua(e) ? e.dom.classList.add(t) : (r = t,
      o = aa(n = e, "class").concat([r]),
      St(n, "class", o.join(" ")))
  }
  function la(e, t) {
      var n, r, o, i;
      ua(e) ? e.dom.classList.remove(t) : (o = t,
      0 < (i = M(aa(r = e, "class"), function(e) {
          return e !== o
      })).length ? St(r, "class", i.join(" ")) : kt(r, "class")),
      0 === (ua(n = e) ? n.dom.classList : ca(n)).length && kt(n, "class")
  }
  function fa(e, t) {
      return ua(e) && e.dom.classList.contains(t)
  }
  function da(t) {
      return function(e) {
          return fa(e, t)
      }
  }
  var ma = function(m) {
      function p(e, t) {
          var n, r, o, i, a, u, c = e.split(/\s+/), s = 1 === c.length && "" !== c[0] ? c[0] : t;
          return r = s,
          i = $i(l, o = {
              strictMode: !0
          }),
          a = $i(r, o),
          u = {},
          "" !== a.protocol ? (u.protocol = a.protocol,
          u.authority = a.authority,
          u.path = Vi(a.path),
          u.query = a.query) : ("" !== a.authority ? (u.authority = a.authority,
          u.path = Vi(a.path),
          u.query = a.query) : ("" === a.path ? (u.path = i.path,
          "" !== a.query ? u.query = a.query : u.query = i.query) : (Bt(a.path, "/") ? u.path = Vi(a.path) : (u.path = function(e, t) {
              if ("" !== i.authority && "" === e)
                  return "/" + t;
              var n = e.substring(e.lastIndexOf("/") + 1);
              return gt(e, n) + t
          }(i.path, a.path),
          u.path = Vi(u.path)),
          u.query = a.query),
          u.authority = i.authority),
          u.protocol = i.protocol),
          u.anchor = a.anchor,
          (n = "") !== u.protocol && (n += u.protocol,
          n += ":"),
          "" !== u.authority && (n += "//",
          n += u.authority),
          n += u.path,
          "" !== u.query && (n += "?",
          n += u.query),
          "" !== u.anchor && (n += "#",
          n += u.anchor),
          n
      }
      function r(e, t, o) {
          var n, r, i, a, u, c, s, l = (c = t,
          s = (u = e).name,
          O(s) && !zt(s, ".tmp") ? s : function(e, t) {
              if (O(e.type) && Bt(e.type, "image/")) {
                  var n = e.type.substr("image/".length);
                  return E(ia, n) ? t + "." + n : t
              }
              return t
          }(u, c)), f = (r = e,
          i = l,
          (a = new FormData).append("image", r, i),
          n = a.get("image"),
          {
              type: ci.Blob,
              data: n
          }), d = {
              url: m.url,
              body: f,
              responseType: ci.Text,
              credentials: !0 === m.credentials
          };
          zi(ue(ue({}, d), {
              method: "post"
          })).get(function(e) {
              e.fold(function(e) {
                  o(Ji.error(Gi(e.message, e.status, e.responseText)))
              }, function(t) {
                  var n;
                  try {
                      var e = JSON.parse(t);
                      if (!O(e.location))
                          return void o(Ji.error(Gi("JSON response did not contain a string location", 500, t)));
                      n = e.location
                  } catch (e) {
                      n = t
                  }
                  var r = p(n, l);
                  o(Ji.value({
                      location: r
                  }))
              })
          })
      }
      var e, t, n, o, l = (n = 0 < (t = (e = m.url).lastIndexOf("/")) ? e.substr(0, t) : e,
      o = void 0 === m.basePath ? n : m.basePath,
      zt(o, "/") ? o : o + "/");
      return {
          upload: function(e, t, n) {
              st(e.imageresult()).then(function(e) {
                  r(e, t, n)
              })
          }
      }
  };
  function pa(e, t, n) {
      for (var r = e.dom, o = g(n) ? n : x; r.parentNode; ) {
          var r = r.parentNode
            , i = Jt.fromDom(r);
          if (t(i))
              return re.some(i);
          if (o(i))
              break
      }
      return re.none()
  }
  function ga(e, t) {
      return j(e.dom.childNodes, function(e) {
          return t(Jt.fromDom(e))
      }).map(Jt.fromDom)
  }
  function va(e, o) {
      var i = function(e) {
          for (var t = 0; t < e.childNodes.length; t++) {
              var n = Jt.fromDom(e.childNodes[t]);
              if (o(n))
                  return re.some(n);
              var r = i(e.childNodes[t]);
              if (r.isSome())
                  return r
          }
          return re.none()
      };
      return i(e.dom)
  }
  function ha(e, t, n) {
      return pa(e, function(e) {
          return Wo(e, t)
      }, n)
  }
  function ya(e, t) {
      return n = t,
      Bo(r = void 0 === e ? document : e.dom) ? re.none() : re.from(r.querySelector(n)).map(Jt.fromDom);
      var n, r
  }
  function ba(e, t, n) {
      var r, o, i = ha, a = n;
      return Wo(r = e, o = t) ? re.some(r) : g(a) && a(r) ? re.none() : i(r, o, a)
  }
  function xa(e, t) {
      return {
          image: b(e),
          blobInfo: b(t)
      }
  }
  function wa(e, t) {
      var n = (t || document).createElement("div");
      return n.innerHTML = e,
      Zo(Jt.fromDom(n))
  }
  function Ta(t, n) {
      Ko(t).each(function(e) {
          e.dom.insertBefore(n.dom, t.dom)
      })
  }
  function Ia(e, t) {
      Jo(e).fold(function() {
          Ko(e).each(function(e) {
              za(e, t)
          })
      }, function(e) {
          Ta(e, t)
      })
  }
  function Sa(t, n) {
      var e;
      e = t.dom.childNodes,
      re.from(e[0]).map(Jt.fromDom).fold(function() {
          za(t, n)
      }, function(e) {
          t.dom.insertBefore(n.dom, e.dom)
      })
  }
  function Oa(e, t) {
      Ta(e, t),
      za(t, e)
  }
  function Aa(t, e) {
      P(e, function(e) {
          za(t, e)
      })
  }
  function Ca(e) {
      la(e, Fi.uploadInProgress())
  }
  function Da(l) {
      return {
          importImages: function(e) {
              return De(W(e, function(e) {
                  return Se.cata(e, function(e, t, n) {
                      var u, r, c, s, o = lt(t);
                      return [(u = e,
                      r = t,
                      c = o,
                      s = n,
                      ze(function(a) {
                          Ht(r).then(function(e) {
                              var t, n, r, o, i;
                              l.editorUpload.blobCache.add({
                                  id: b(u),
                                  name: b(u),
                                  filename: (t = u,
                                  n = e.type,
                                  b(4 === (i = h(tinymce)).major && i.minor < 6 ? t : t + "." + (r = n.toLowerCase(),
                                  Te(o = {
                                      "image/jpeg": "jpg",
                                      "image/jpg": "jpg",
                                      "image/gif": "gif",
                                      "image/png": "png"
                                  }, r) ? o[r] : "dat"))),
                                  blob: b(e),
                                  base64: b(c.split(",")[1]),
                                  blobUri: b(s),
                                  uri: b(null)
                              }),
                              a(e)
                          })
                      }))]
                  }, b([]))
              }))
          },
          uploadImages: function() {
              l.uploadImages()
          },
          prepareImages: S,
          getLocalURL: function(e, t, n) {
              return lt(t)
          }
      }
  }
  function ka(r, e) {
      function m() {
          return Jt.fromDom(r.getBody())
      }
      function p(t, e, n) {
          P(e, function(e) {
              St(e, "data-mce-src", t.location)
          }),
          function(e, t, n) {
              for (var r = 0; r < e.undoManager.data.length; r++)
                  e.undoManager.data[r].content = e.undoManager.data[r].content.split(t.objurl()).join(n.location)
          }(r, n, t)
      }
      var o, t, i, g = Po(), v = oi(), s = (o = r,
      t = e.url,
      i = $a,
      {
          instance: function() {
              return Fo(n)
          }
      }), h = ma(e);
      function a() {
          return Et("error.code.images.not.found") + t + Et("error.full.stop")
      }
      function u() {
          return Et("error.imageupload") + t + Et("error.full.stop")
      }
      function n(e) {
          var t = e.status()
            , n = 0 === t || 400 <= t || t < 500 ? a : u;
          i.showDialog(o, n())
      }
      function l(f, d) {
          var e = v
            , t = f.blobInfo().id()
            , n = f.image()
            , r = e.isActive(t);
          e.register(n, t),
          sa(n, Fi.uploadInProgress()),
          (r ? re.none() : re.some(t)).each(function(e) {
              var t, n, r, o, i, a, u, c, s;
              function l() {
                  var e = "Internal error with blob cache";
                  console.error(e, c),
                  s(Wa.failure(Gi(e, 666, c)))
              }
              t = e,
              n = f.blobInfo(),
              r = d,
              o = h,
              i = v,
              a = g,
              u = m(),
              c = t,
              s = function(e) {
                  e.fold(r, p)
              }
              ,
              o.upload(n, c, function(e) {
                  var t, o = i.findById(u, c);
                  P(o, (t = Fi.uploadInProgress(),
                  function(e) {
                      la(e, t)
                  }
                  )),
                  e.fold(function(e) {
                      s(Wa.failure(e))
                  }, function(t) {
                      var e = a
                        , n = c
                        , r = t;
                      P(o, function(e) {
                          St(e, "src", r.location),
                          kt(e, Fi.blobId())
                      }),
                      Ba(e, n).fold(l, function(e) {
                          s(Wa.success(t, o, e))
                      })
                  }),
                  i.report(c, o, e.isValue())
              })
          })
      }
      return v.events.complete.bind(function(e) {
          !function(e) {
              for (var t = 0; t < e.undoManager.data.length; t++) {
                  var n = e.undoManager.data[t].content
                    , r = Jt.fromTag("div");
                  Aa(r, wa(n)),
                  P(ei(r, "." + Fi.uploadInProgress()), Ca),
                  e.undoManager.data[t].content = r.dom.innerHTML
              }
          }(r)
      }),
      {
          importImages: function() {
              return $e([])
          },
          uploadImages: function(e) {
              var t, n, f, r, o, i, a, u, c = s.instance();
              o = v,
              i = g,
              a = m(),
              u = o.findAll(a),
              P(o.inProgress() ? [] : N(u, function(e) {
                  return t = i,
                  r = At(n = e, Fi.blobId()),
                  t.get(r).fold(function() {
                      return Ji.error(r)
                  }, function(e) {
                      return Ji.value(xa(n, e))
                  });
                  var t, n, r
              }), function(e) {
                  e.fold(function(e) {
                      v.report(e, [], !1)
                  }, function(e) {
                      l(e, c)
                  })
              }),
              t = e,
              n = s.instance(),
              f = g,
              r = m(),
              P(W(t, function(e) {
                  return Se.cata(e, function(c, s, l) {
                      return ya(r, 'img[src="' + l + '"]').fold(function() {
                          return [Ji.error("Image that was just inserted could not be found: " + l)]
                      }, function(e) {
                          return [Ji.value((t = f,
                          n = c,
                          o = l,
                          i = e,
                          a = lt(r = s),
                          u = t.lookupByData(a).getOrThunk(function() {
                              return t.add(n, r, o)
                          }),
                          St(i, Fi.blobId(), u.id()),
                          xa(i, u)))];
                          var t, n, r, o, i, a, u
                      })
                  }, b([]))
              }), function(e) {
                  e.fold(function(e) {
                      console.error(e)
                  }, function(e) {
                      l(e, n)
                  })
              })
          },
          prepareImages: S,
          getLocalURL: function(e, t, n) {
              return n
          }
      }
  }
  function La(t, r, e, n) {
      var o, i, a, u = t.selection, c = t.dom, s = t.getBody(), l = e.isText();
      if (e.reset(),
      n.clipboardData && n.clipboardData.getData("text/html")) {
          n.preventDefault();
          var f = n.clipboardData.getData("text/html")
            , d = f.match(/<html[\s\S]+<\/html>/i)
            , m = null === d ? f : d[0];
          return r(m)
      }
      if (!c.get("_mcePaste")) {
          if (o = c.add(s, "div", {
              id: "_mcePaste",
              class: "mcePaste"
          }, '\ufeff<br _mce_bogus="1">'),
          a = s !== t.getDoc().body ? c.getPos(t.selection.getStart(), s).y : s.scrollTop,
          c.setStyles(o, {
              position: "absolute",
              left: -1e4,
              top: a,
              width: 1,
              height: 1,
              overflow: "hidden"
          }),
          tinymce.isIE)
              return (g = c.doc.body.createTextRange()).moveToElementText(o),
              g.execCommand("Paste"),
              c.remove(o),
              "\ufeff" === o.innerHTML ? (t.execCommand("mcePasteWord"),
              void n.preventDefault()) : (r(l ? o.innerText : o.innerHTML),
              tinymce.dom.Event.cancel(n));
          var p, g, v = function(e) {
              e.preventDefault()
          };
          c.bind(t.getDoc(), "mousedown", v),
          c.bind(t.getDoc(), "keydown", v),
          tinymce.isGecko && ((g = t.selection.getRng(!0)).startContainer !== g.endContainer || 3 !== g.startContainer.nodeType || 1 === (p = c.select("p,h1,h2,h3,h4,h5,h6,pre", o)).length && c.remove(p.reverse(), !0)),
          i = t.selection.getRng(),
          o = o.firstChild,
          (g = t.getDoc().createRange()).setStart(o, 0),
          g.setEnd(o, 1),
          u.setRng(g),
          window.setTimeout(function() {
              var n = ""
                , e = c.select("div.mcePaste");
              Dr(e, function(e) {
                  var t = e.firstChild;
                  t && "DIV" === t.nodeName && t.style.marginTop && t.style.backgroundColor && c.remove(t, 1),
                  Dr(c.select("div.mcePaste", e), function(e) {
                      c.remove(e, 1)
                  }),
                  Dr(c.select("span.Apple-style-span", e), function(e) {
                      c.remove(e, 1)
                  }),
                  Dr(c.select("br[_mce_bogus]", e), function(e) {
                      c.remove(e)
                  }),
                  n += e.innerHTML
              }),
              Dr(e, function(e) {
                  c.remove(e)
              }),
              i && u.setRng(i),
              r(n),
              c.unbind(t.getDoc(), "mousedown", v),
              c.unbind(t.getDoc(), "keydown", v)
          }, 0)
      }
  }
  function Ea(e) {
      var t = e;
      return {
          get: function() {
              return t
          },
          set: function(e) {
              t = e
          }
      }
  }
  function _a(e) {
      function t() {
          return n.get().each(e)
      }
      var n = Ea(re.none());
      return {
          clear: function() {
              t(),
              n.set(re.none())
          },
          isSet: function() {
              return n.get().isSome()
          },
          get: function() {
              return n.get()
          },
          set: function(e) {
              t(),
              n.set(re.some(e))
          }
      }
  }
  function Na() {
      var t = _a(S);
      return ue(ue({}, t), {
          on: function(e) {
              return t.get().each(e)
          }
      })
  }
  function Pa(e, t, n, r, o) {
      var i, a, u = (i = n,
      a = r,
      function(e) {
          function t() {
              return r.stopPropagation()
          }
          function n() {
              return r.preventDefault()
          }
          var r, o;
          i(e) && a((r = e,
          o = s(n, t),
          {
              target: Jt.fromDom(function(e) {
                  if (Ei() && v(e.target)) {
                      var t = Jt.fromDom(e.target);
                      if (Vt(t) && Ni(t) && e.composed && e.composedPath) {
                          var n = e.composedPath();
                          if (n)
                              return $(n)
                      }
                  }
                  return re.from(e.target)
              }(r).getOr(r.target)),
              x: r.clientX,
              y: r.clientY,
              stop: t,
              prevent: n,
              kill: o,
              raw: r
          }))
      }
      );
      return e.dom.addEventListener(t, u, o),
      {
          unbind: A(qa, e, t, u, o)
      }
  }
  function Ra(e, t, n) {
      return Pa(e, t, Va, n, !1)
  }
  function Ma(n, r) {
      function t(e) {
          return n(e) ? re.from(e.dom.nodeValue) : re.none()
      }
      return {
          get: function(e) {
              if (!n(e))
                  throw new Error("Can only get " + r + " value of a " + r + " node");
              return t(e).getOr("")
          },
          getOption: t,
          set: function(e, t) {
              if (!n(e))
                  throw new Error("Can only set raw " + r + " value of a " + r + " node");
              e.dom.nodeValue = t
          }
      }
  }
  function Fa(e) {
      return Ga.get(e)
  }
  function ja(e, t, n) {
      var r, o = e.document.createRange(), i = o;
      return t.fold(function(e) {
          i.setStartBefore(e.dom)
      }, function(e, t) {
          i.setStart(e.dom, t)
      }, function(e) {
          i.setStartAfter(e.dom)
      }),
      r = o,
      n.fold(function(e) {
          r.setEndBefore(e.dom)
      }, function(e, t) {
          r.setEnd(e.dom, t)
      }, function(e) {
          r.setEndAfter(e.dom)
      }),
      o
  }
  function Ua(e, t, n, r, o) {
      var i = e.document.createRange();
      return i.setStart(t.dom, n),
      i.setEnd(r.dom, o),
      i
  }
  function Ha(e, t, n) {
      return t(Jt.fromDom(n.startContainer), n.startOffset, Jt.fromDom(n.endContainer), n.endOffset)
  }
  var Wa = ge([{
      failure: ["error"]
  }, {
      success: ["result", "images", "blob"]
  }])
    , Ba = function(t, n) {
      return t.get(n).fold(function() {
          return Ji.error("Internal error with blob cache")
      }, function(e) {
          return t.remove(n),
          Ji.value(e)
      })
  }
    , za = function(e, t) {
      e.dom.appendChild(t.dom)
  }
    , $a = Object.freeze({
      __proto__: null,
      showDialog: function(e, t) {
          var n = e.windowManager.open({
              title: "Error",
              spacing: 10,
              padding: 10,
              items: [{
                  type: "container",
                  html: t
              }],
              buttons: [{
                  text: "Ok",
                  onclick: function() {
                      n.close()
                  }
              }]
          })
      }
  })
    , qa = function(e, t, n, r) {
      e.dom.removeEventListener(t, n, r)
  }
    , Va = w
    , Ga = Ma(wt, "comment")
    , Ka = Di()
    , Xa = b({
      isSupported: !1,
      cleanDocument: function() {
          return Ue.reject("not supported")
      }
  })
    , Ja = Ka.deviceType.isiOS() || Ka.deviceType.isAndroid() ? Xa : function(e, t, n) {
      var r = t + "/wordimport.min.js" + re.from(n || "v=8.0.1").filter(function(e) {
          return 0 !== e.length
      }).map(function(e) {
          return (-1 === e.indexOf("?") ? "?" : "") + e
      }).getOr("")
        , o = e.loadScript("ephox.wimp", r);
      return o.catch(function(e) {
          console.error("Unable to load word import: ", e)
      }),
      {
          isSupported: !0,
          cleanDocument: function(t, n, r) {
              return o.then(function(e) {
                  return e.cleanDocument(t, n, r.cleanFilteredInlineElements)
              })
          }
      }
  }
    , Ya = ge([{
      ltr: ["start", "soffset", "finish", "foffset"]
  }, {
      rtl: ["start", "soffset", "finish", "foffset"]
  }]);
  function Za(e) {
      return Cu.get(e)
  }
  function Qa(e, t) {
      var n = yt(e);
      return "input" === n ? ku.after(e) : E(["br", "img"], n) ? 0 === t ? ku.before(e) : ku.after(e) : ku.on(e, t)
  }
  function eu(e, t, n, r) {
      var o = qo(e).dom.createRange();
      return o.setStart(e.dom, t),
      o.setEnd(n.dom, r),
      o
  }
  function tu(e) {
      return re.from(e.getSelection())
  }
  function nu(e, t, n, r, o) {
      var i = Ua(e, t, n, r, o);
      tu(e).each(function(e) {
          e.removeAllRanges(),
          e.addRange(i)
      })
  }
  function ru(c, e) {
      return o = c,
      r = e.match({
          domRange: function(e) {
              return {
                  ltr: b(e),
                  rtl: re.none
              }
          },
          relative: function(e, t) {
              return {
                  ltr: Fo(function() {
                      return ja(o, e, t)
                  }),
                  rtl: Fo(function() {
                      return re.some(ja(o, t, e))
                  })
              }
          },
          exact: function(e, t, n, r) {
              return {
                  ltr: Fo(function() {
                      return Ua(o, e, t, n, r)
                  }),
                  rtl: Fo(function() {
                      return re.some(Ua(o, n, r, e, t))
                  })
              }
          }
      }),
      ((n = (t = r).ltr()).collapsed ? t.rtl().filter(function(e) {
          return !1 === e.collapsed
      }).map(function(e) {
          return Ya.rtl(Jt.fromDom(e.endContainer), e.endOffset, Jt.fromDom(e.startContainer), e.startOffset)
      }).getOrThunk(function() {
          return Ha(0, Ya.ltr, n)
      }) : Ha(0, Ya.ltr, n)).match({
          ltr: function(e, t, n, r) {
              nu(c, e, t, n, r)
          },
          rtl: function(o, i, a, u) {
              tu(c).each(function(e) {
                  if (e.setBaseAndExtent)
                      e.setBaseAndExtent(o.dom, i, a.dom, u);
                  else if (e.extend)
                      try {
                          n = a,
                          r = u,
                          (t = e).collapse(o.dom, i),
                          t.extend(n.dom, r)
                      } catch (e) {
                          nu(c, a, u, o, i)
                      }
                  else
                      nu(c, a, u, o, i);
                  var t, n, r
              })
          }
      });
      var o, t, n, r
  }
  function ou(e) {
      if (0 < e.rangeCount) {
          var t = e.getRangeAt(0)
            , n = e.getRangeAt(e.rangeCount - 1);
          return re.some(Au(Jt.fromDom(t.startContainer), t.startOffset, Jt.fromDom(n.endContainer), n.endOffset))
      }
      return re.none()
  }
  function iu(e) {
      if (null === e.anchorNode || null === e.focusNode)
          return ou(e);
      var t = Jt.fromDom(e.anchorNode)
        , n = Jt.fromDom(e.focusNode)
        , r = t
        , o = e.anchorOffset
        , i = n
        , a = e.focusOffset
        , u = eu(r, o, i, a)
        , c = $o(r, i) && o === a;
      return u.collapsed && !c ? re.some(Au(t, e.anchorOffset, n, e.focusOffset)) : ou(e)
  }
  function au(e) {
      return tu(e).filter(function(e) {
          return 0 < e.rangeCount
      }).bind(iu)
  }
  function uu(e) {
      e.dom.textContent = "",
      P(Zo(e), function(e) {
          _u(e)
      })
  }
  function cu(e) {
      var t, n = Zo(e);
      0 < n.length && (t = e,
      P(n, function(e) {
          Ta(t, e)
      })),
      _u(e)
  }
  function su(e, t, n, r) {
      return {
          startContainer: b(e),
          startOffset: b(t),
          endContainer: b(n),
          endOffset: b(r),
          collapsed: b($o(e, n) && t === r)
      }
  }
  function lu(n) {
      var e, r = (e = !1,
      {
          isBlocked: function() {
              return e
          },
          block: function() {
              e = !0
          },
          unblock: function() {
              e = !1
          }
      });
      return {
          control: r,
          instance: function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              r.isBlocked() || n.apply(void 0, e)
          }
      }
  }
  function fu(e, t, n) {
      return void 0 === n && (n = r),
      e.exists(function(e) {
          return n(e, t)
      })
  }
  function du(e, t) {
      return e ? re.some(t) : re.none()
  }
  function mu(e) {
      return void 0 !== e.style && g(e.style.getPropertyValue)
  }
  function pu(e, t, n) {
      if (!O(n))
          throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e),
          new Error("CSS value must be a string: " + n);
      mu(e) && e.style.setProperty(t, n)
  }
  function gu(e, t) {
      mu(e) && e.style.removeProperty(t)
  }
  function vu(e, t, n) {
      pu(e.dom, t, n)
  }
  function hu(e, t) {
      var n = e.dom;
      se(t, function(e, t) {
          pu(n, t, e)
      })
  }
  function yu(e, t) {
      var n = e.dom
        , r = window.getComputedStyle(n).getPropertyValue(t);
      return "" !== r || Pi(e) ? r : Nu(n, t)
  }
  function bu(e, t) {
      var n = e.dom
        , r = Nu(n, t);
      return re.from(r).filter(function(e) {
          return 0 < e.length
      })
  }
  function xu(e) {
      var t = {}
        , n = e.dom;
      if (mu(n))
          for (var r = 0; r < n.style.length; r++) {
              var o = n.style.item(r);
              t[o] = n.style[o]
          }
      return t
  }
  function wu(e, t) {
      gu(e.dom, t),
      fu(Ct(e, "style").map($t), "") && kt(e, "style")
  }
  function Tu(e) {
      return e.dom.innerHTML
  }
  function Iu(t, e) {
      var n, r = Jt.fromTag("div");
      function o(e) {
          return fa(e, ju)
      }
      return Ot(r, e),
      Ot(r, {
          contenteditable: "true",
          "aria-hidden": "true"
      }),
      hu(r, {
          position: "fixed",
          top: "0px",
          width: "100px",
          height: "100px",
          overflow: "hidden",
          opacity: "0"
      }),
      n = r,
      P([Fu, ju], function(e) {
          sa(n, e)
      }),
      {
          attach: function(e) {
              uu(r),
              vu(r, "left", Uu(e)),
              za(e, r)
          },
          focus: function() {
              ha(r, "body").each(function(e) {
                  t.toOff(e, r)
              })
          },
          contents: function() {
              var n, e = o;
              return Jo(n = r).filter(e).each(function(e) {
                  var t = Zo(e);
                  Aa(n, t),
                  _u(e)
              }),
              Mu(n, e),
              P(Zo(n), function(e) {
                  var t;
                  Vt(t = e) && !t.dom.hasChildNodes() && E(Ru, yt(t)) && _u(e)
              }),
              {
                  elements: Zo(r),
                  html: Tu(r),
                  offscreen: r
              }
          },
          container: b(r),
          detach: function() {
              _u(r)
          }
      }
  }
  function Su(e) {
      var t = $o(e.start, e.finish) && e.soffset === e.foffset;
      return {
          startContainer: b(e.start),
          startOffset: b(e.soffset),
          endContainer: b(e.finish),
          endOffset: b(e.foffset),
          collapsed: b(t)
      }
  }
  Ya.ltr,
  Ya.rtl;
  function Ou(e) {
      return "rtl" === yu(e, "direction") ? "rtl" : "ltr"
  }
  var Au = function(e, t, n, r) {
      return {
          start: e,
          soffset: t,
          finish: n,
          foffset: r
      }
  }
    , Cu = Ma(Gt, "text")
    , Du = ge([{
      before: ["element"]
  }, {
      on: ["element", "offset"]
  }, {
      after: ["element"]
  }])
    , ku = {
      before: Du.before,
      on: Du.on,
      after: Du.after,
      cata: function(e, t, n, r) {
          return e.fold(t, n, r)
      },
      getStart: function(e) {
          return e.fold(o, o, o)
      }
  }
    , Lu = ge([{
      domRange: ["rng"]
  }, {
      relative: ["startSitu", "finishSitu"]
  }, {
      exact: ["start", "soffset", "finish", "foffset"]
  }])
    , Eu = {
      domRange: Lu.domRange,
      relative: Lu.relative,
      exact: Lu.exact,
      exactFromRange: function(e) {
          return Lu.exact(e.start, e.soffset, e.finish, e.foffset)
      },
      getWin: function(e) {
          return Go(e.match({
              domRange: function(e) {
                  return Jt.fromDom(e.startContainer)
              },
              relative: function(e, t) {
                  return ku.getStart(e)
              },
              exact: function(e, t, n, r) {
                  return e
              }
          }))
      },
      range: Au
  }
    , _u = function(e) {
      var t = e.dom;
      null !== t.parentNode && t.parentNode.removeChild(t)
  }
    , Nu = function(e, t) {
      return mu(e) ? e.style.getPropertyValue(t) : ""
  }
    , Pu = b((0,
  ti("ephox-sloth").resolve)("bin"))
    , Ru = ["b", "i", "u", "sub", "sup", "strike"]
    , Mu = function(e, o) {
      P(Zo(e), function(e) {
          var t, n, r;
          o(e) && (n = Zo(t = e),
          Aa(r = Jt.fromTag("div", qo(t).dom), n),
          Ta(t, r),
          _u(t))
      })
  }
    , Fu = Pu()
    , ju = Fu + ke("")
    , Uu = function(e) {
      return "rtl" === Ou(e) ? "100000px" : "-100000px"
  }
    , Hu = Di()
    , Wu = b(Hu.browser.isIE() && Hu.browser.version.major <= 10)
    , Bu = Wu() ? function(e, t, n) {
      t.control.block(),
      e.dom.execCommand("paste"),
      n(),
      t.control.unblock()
  }
  : function(e, t, n) {
      setTimeout(n, 1)
  }
    , zu = {
      set: function(e, t) {
          var n, r, o, i, a, u, c, s, l;
          n = e,
          r = t.startContainer(),
          o = t.startOffset(),
          i = t.endContainer(),
          a = t.endOffset(),
          ru(n, (u = i,
          c = a,
          s = Qa(r, o),
          l = Qa(u, c),
          Eu.relative(s, l)))
      },
      get: function(e) {
          return au(e).map(Su)
      }
  };
  function $u(p) {
      return function(t) {
          var u, r, o, c, n, i, a, s, l, f = Mo({
              after: Ro(["container"])
          }), d = (u = zu,
          r = Jt.fromTag("br"),
          o = re.none(),
          c = function(e) {
              return Go(e).dom
          }
          ,
          {
              cleanup: function() {
                  _u(r)
              },
              toOn: function(i, e) {
                  var a = c(e);
                  o.each(function(e) {
                      var t = i.dom.childNodes.length
                        , n = $o(i, e.startContainer()) && t < e.startOffset() ? t : e.startOffset()
                        , r = $o(i, e.endContainer()) && t < e.endOffset() ? t : e.endOffset()
                        , o = su(e.startContainer(), n, e.endContainer(), r);
                      u.set(a, o)
                  })
              },
              toOff: function(e, t) {
                  var n = c(t);
                  za(t, r),
                  o = u.get(n),
                  u.set(n, su(r, 0, r, 0))
              }
          }), e = (i = t,
          a = Iu(n = d, p),
          s = lu(function() {
              var e;
              l.trigger.before(),
              a.attach(i),
              a.focus(),
              e = qo(i),
              Bu(e, s, m)
          }),
          {
              instance: b(function() {
                  s.instance()
              }),
              destroy: S,
              events: (l = Mo({
                  before: Ro([]),
                  after: Ro(["elements", "html", "container"])
              })).registry
          });
          function m() {
              n.cleanup();
              var e = a.contents();
              a.detach(),
              l.trigger.after(e.elements, e.html, a.container())
          }
          return e.events.after.bind(function(e) {
              d.toOn(t, e.container),
              f.trigger.after(e.container)
          }),
          {
              run: function() {
                  e.instance()()
              },
              events: f.registry
          }
      }
  }
  function qu(l, f) {
      return We.nu(function(t) {
          function n(e) {
              P(s, function(e) {
                  e.unbind()
              }),
              t(e.fold(function(e) {
                  return Ji.error(e + 'Unable to download editor stylesheets from "' + l + '"')
              }, Ji.value))
          }
          var e, r, o, i, a, u, c = (e = l,
          r = Jt.fromDom(document),
          Ot(o = Jt.fromTag("link", r.dom), {
              rel: "stylesheet",
              type: "text/css",
              href: e
          }),
          i = r,
          a = o,
          u = function() {
              var e = i.dom.head;
              if (null == e)
                  throw new Error("Head is not available yet");
              return Jt.fromDom(e)
          }(),
          za(u, a),
          o), s = [Ra(c, "load", function(e) {
              !function(e) {
                  try {
                      var t = e.target.dom.sheet.cssRules;
                      return d(t) && 0 === t.length
                  } catch (e) {}
              }(e) ? f(n) : n(Ji.error(""))
          }), Ra(c, "error", A(n, Ji.error("")))]
      })
  }
  function Vu(e, t, n, r, o) {
      return e.fold(t, n, r, o)
  }
  function Gu(e, n) {
      var r = {};
      return P(Lc, function(t) {
          n[t].or(e[t]).each(function(e) {
              r[t] = e
          })
      }),
      Ec(r)
  }
  function Ku(e) {
      return {
          response: Ac(e),
          bundle: Ec({})
      }
  }
  function Xu(e) {
      return Ue.resolve(Ku(e))
  }
  function Ju(e) {
      return v(e.then)
  }
  function Yu(e, t, n, r) {
      return {
          steps: e,
          input: t,
          label: n,
          capture: r
      }
  }
  function Zu(e, t) {
      var n, r, o = Gu(e.bundle, t.bundle);
      return {
          response: (n = e.response,
          r = t.response,
          Vu(n, re.none, re.none, re.none, function(e, t, n) {
              return Vu(r, re.none, function(e, t) {
                  return re.some(Oc.incomplete(e, t, n))
              }, re.none, re.none)
          }).getOr(r)),
          bundle: o
      }
  }
  function Qu(t, n, r) {
      function e() {
          return t
      }
      function o() {
          var e = r(n, t);
          return Ju(e) ? e.then(function(e) {
              return Zu(t, e)
          }) : Zu(t, e)
      }
      return Vu(t.response, e, o, e, o)
  }
  function ec(e, t) {
      var n = yt(e)
        , r = t.name
        , o = void 0 !== t.condition ? t.condition : w;
      return Mc.matches(r, n) && o(e)
  }
  function tc(e, t, n) {
      var r, o, i = e.dom.getAttribute("style"), a = (o = {},
      P(v(r = i) ? r.split(";") : [], function(e) {
          var t = e.split(":");
          2 === t.length && (o[$t(t[0])] = $t(t[1]))
      }),
      o), u = {};
      return P(t, function(e) {
          var t = a[e];
          void 0 === t || n(t, e) || (u[e] = t)
      }),
      u
  }
  function nc(t) {
      return N(be(t), function(e) {
          return e + ": " + t[e]
      }).join("; ")
  }
  function rc(e, t) {
      var n, r, o, i, a, u = tc(e, Fc, t);
      !function(n, e, t) {
          St(n, "style", "");
          var r, o, i = me(e), a = me(t);
          0 === i && 0 === a ? kt(n, "style") : 0 === i ? St(n, "style", nc(t)) : (se(e, function(e, t) {
              vu(n, t, e)
          }),
          r = At(n, "style"),
          o = 0 < a ? nc(t) + "; " : "",
          St(n, "style", o + r))
      }(e, (r = t,
      i = c(o = (n = e).dom.style) ? [] : o,
      a = {},
      P(i, function(t) {
          bu(n, t).each(function(e) {
              r(e, t) || (a[t] = e)
          })
      }),
      a), u)
  }
  function oc(e, t) {
      var n, r, o, i, a, u, c, s = (n = t,
      r = {},
      P(e.dom.attributes, function(e) {
          n(e.value, e.name) || (r[e.name] = e.value)
      }),
      r);
      i = s,
      c = N((o = e).dom.attributes, function(e) {
          return e.name
      }),
      me(i) !== c.length && (a = o,
      u = i,
      P(c, function(e) {
          kt(a, e)
      }),
      se(u, function(e, t) {
          St(a, t, e)
      }))
  }
  function ic(e, t, s) {
      e(s, function(u, c) {
          return _(t, function(e) {
              return t = s,
              n = u,
              r = c,
              o = e.name,
              i = void 0 !== e.condition ? e.condition : w,
              a = void 0 !== e.value ? e.value : Mc.all(),
              Mc.matches(o, r) && Mc.matches(a, n) && i(t);
              var t, n, r, o, i, a
          })
      })
  }
  function ac(e, t, n) {
      var r, o, i = Jt.fromDom(e);
      switch (e.nodeType) {
      case 1:
          t ? r = Uc : (r = jc,
          hu(i, n || {}));
          var a = e
            , u = ("HTML" !== a.scopeName && a.scopeName && a.tagName && a.tagName.indexOf(":") <= 0 ? a.scopeName + ":" + a.tagName : a.tagName).toLowerCase();
          break;
      case 3:
          r = Hc,
          o = e.nodeValue;
          break;
      case 8:
          r = Wc,
          o = e.nodeValue;
          break;
      default:
          console.log("WARNING: Unsupported node type encountered: " + e.nodeType)
      }
      return {
          getNode: b(e),
          tag: function() {
              return u
          },
          type: function() {
              return r
          },
          text: function() {
              return o
          }
      }
  }
  function uc(e, t, n, r) {
      var o = r.createElement(e);
      return se(t, function(e, t) {
          o.setAttribute(t, e + "")
      }),
      ac(o, !1, n)
  }
  function cc(e, t) {
      return ac(t.createElement(e), !0)
  }
  function sc(i) {
      function a(e) {
          c.appendChild(e)
      }
      var u = i.createDocumentFragment()
        , c = u;
      return {
          dom: u,
          receive: function(e) {
              var t, n, r, o;
              switch (e.type()) {
              case jc:
                  o = e.getNode().cloneNode(!1),
                  a(r = o),
                  c = r;
                  break;
              case Hc:
                  n = i.createTextNode(e.text()),
                  a(n);
                  break;
              case Uc:
                  t = c.parentNode,
                  c = null === t ? u : t;
                  break;
              case Wc:
                  break;
              default:
                  throw new Error("Unsupported token type: " + e.type())
              }
          },
          label: "SERIALISER"
      }
  }
  function lc(n) {
      return function(e) {
          var t, r;
          t = e,
          r = Nc({
              styles: [],
              attributes: [],
              classes: [],
              tags: []
          }, n),
          P(ei(t, "*"), function(n) {
              ic(rc, r.styles, n),
              ic(oc, r.attributes, n),
              P(r.classes, function(t) {
                  P(Dt(n, "class") ? (ua(n) ? function(e) {
                      for (var t = e.dom.classList, n = new Array(t.length), r = 0; r < t.length; r++) {
                          var o = t.item(r);
                          null !== o && (n[r] = o)
                      }
                      return n
                  }
                  : ca)(n) : [], function(e) {
                      Mc.matches(t.name, e) && la(n, e)
                  })
              })
          }),
          P(ei(t, "*"), function(e) {
              _(r.tags, A(ec, e)) && _u(e)
          })
      }
  }
  function fc(r) {
      return function(e) {
          var t = e
            , n = Nc({
              tags: []
          }, r);
          P(ei(t, "*"), function(e) {
              _(n.tags, A(ec, e)) && cu(e)
          })
      }
  }
  function dc(r) {
      return function(e) {
          var t = e
            , n = Nc({
              tags: []
          }, r);
          P(ei(t, "*"), function(t) {
              j(n.tags, A(ec, t)).each(function(e) {
                  e.mutate(t)
              })
          })
      }
  }
  function mc(r) {
      return function(e) {
          var t = Tu(e)
            , n = function(e, t, n) {
              for (var o = sc(e), r = function(e, r) {
                  var o = (r = void 0 === r ? window.document : r).createElement("div");
                  r.body.appendChild(o),
                  o.style.position = "absolute",
                  o.style.left = "-10000px",
                  o.innerHTML = e;
                  var i = o.firstChild || Bc
                    , a = []
                    , u = !1;
                  return {
                      hasNext: function() {
                          return void 0 !== i
                      },
                      next: function() {
                          var e = i
                            , t = i
                            , n = u;
                          return !u && e.firstChild ? (a.push(e),
                          i = e.firstChild) : u = !u && 1 === e.nodeType || (e.nextSibling ? (i = e.nextSibling,
                          !1) : (i = a.pop(),
                          !0)),
                          t === Bc || i || (r.body.removeChild(o),
                          i = Bc),
                          t === Bc ? t : t ? ac(t, n) : void 0
                      }
                  }
              }(t, e), i = function(e, t) {
                  for (var n = o, r = t.length - 1; 0 <= r; r--)
                      n = t[r](n, {}, e);
                  return n
              }(e, n); r.hasNext(); ) {
                  var a = r.next();
                  i.receive(a)
              }
              return o.dom
          }(qo(e).dom, t, r);
          uu(e),
          e.dom.appendChild(n)
      }
  }
  function pc(t, e, n) {
      var r = Jt.fromTag("div", t.dom);
      hu(r, {
          position: "fixed",
          left: "-100000px",
          top: "0px"
      }),
      za(function() {
          var e = t.dom.body;
          if (null == e)
              throw new Error("Body is not available yet");
          return Jt.fromDom(e)
      }(), r),
      r.dom.innerHTML = e,
      P(n, function(e) {
          e(r)
      });
      var o = Tu(r);
      return _u(r),
      o
  }
  function gc(i, e) {
      return function(t) {
          function n(e) {
              t.receive(e)
          }
          function r(e, t, n) {
              return ac(t, n = void 0 !== n ? n : e.type() === Uc, {})
          }
          var o = {
              emit: n,
              emitTokens: function(e) {
                  P(e, n)
              },
              receive: function(e) {
                  i(o, e, r)
              },
              document: window.document
          };
          return e(o),
          o
      }
  }
  function vc(e, t) {
      if (void 0 === e || void 0 === t)
          throw console.trace(),
          new Error("brick");
      e.nextFilter.set(t)
  }
  function hc(e, t, n, r) {
      var o = n.getCurrentListType()
        , i = n.getCurrentLevel() == r.level() ? o : null
        , a = r.emblems()
        , u = i;
      return j(a, function(e) {
          return "ul" === e.tag || v(u) && zc(e, u, !0)
      }).orThunk(function() {
          return $(a)
      }).filter(function(e) {
          return !("ol" === e.tag && function(e) {
              if (E(["p"], e.tag())) {
                  var t = At(Jt.fromDom(e.getNode()), "class");
                  return v(t) && /^MsoHeading/.test(t)
              }
              return 1
          }(t))
      })
  }
  function yc(e, t, n) {
      return {
          pred: e,
          action: t,
          label: b(n)
      }
  }
  var bc, xc, wc, Tc = function(a) {
      var u = A(ht, a);
      function t(n, r) {
          var e, t, o = u(), i = (t = "callback_" + (e = void 0 === o.count ? 0 : o.count),
          o.count = e + 1,
          t);
          return o.callbacks[i] = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              r || c(i),
              n.apply(void 0, e)
          }
          ,
          a + ".callbacks." + i
      }
      ht("callbacks", u());
      function c(e) {
          var t = e.substring(e.lastIndexOf(".") + 1)
            , n = u();
          void 0 !== n.callbacks[t] && delete n.callbacks[t]
      }
      return {
          ephemeral: function(e) {
              return t(e, !1)
          },
          permanent: function(e) {
              return t(e, !0)
          },
          unregister: c
      }
  }("ephox.henchman.features"), Ic = (wc = {},
  bc = {
      getOrSetIndexed: function(e, t) {
          return void 0 !== wc[e] ? wc[e] : (n = e,
          r = t(),
          wc[n] = r);
          var n, r
      },
      waitForLoad: function() {
          return De(de(wc, o))
      }
  },
  {
      preload: function() {
          xc().get(o)
      },
      addStylesheet: function(e, t) {
          return bc.getOrSetIndexed(e, function() {
              return qu(e, t)
          })
      },
      addScript: function(e, t) {
          return bc.getOrSetIndexed(e, function() {
              return i = e,
              We.nu(function(t) {
                  function e() {
                      r.unbind(),
                      o.unbind()
                  }
                  var n = Jt.fromTag("script");
                  St(n, "src", i),
                  St(n, "type", "text/javascript"),
                  St(n, "async", "async"),
                  St(n, "data-main", Tc.ephemeral(function(e) {
                      t(Ji.value(e))
                  }));
                  var r = Ra(n, "error", function() {
                      e(),
                      t(Ji.error("Error loading external script tag " + i))
                  })
                    , o = Ra(n, "load", e);
                  za(Jt.fromDom(document.head), n)
              }).map(t);
              var i
          })
      },
      waitForLoad: xc = function() {
          return bc.waitForLoad()
      }
  }), Sc = {
      loadScript: function(e, r) {
          return new Ue(function(t, n) {
              Ic.addScript(r, o).get(function(e) {
                  e.fold(n, t)
              })
          }
          )
      }
  }, Oc = ge([{
      error: ["message"]
  }, {
      paste: ["elements", "correlated"]
  }, {
      cancel: []
  }, {
      incomplete: ["elements", "correlated", "message"]
  }]), Ac = Oc.error, Cc = Oc.paste, Dc = Oc.cancel, kc = Oc.incomplete, Lc = ["officeStyles", "htmlStyles", "gdocsStyles", "isWord", "isGoogleDocs", "proxyBin", "isInternal", "backgroundAssets"], Ec = function(t) {
      return z(Lc, function(e) {
          return re.from(t[e])
      })
  }, _c = {
      response: Dc(),
      bundle: Ec({})
  }, Nc = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
          e[t] = arguments[t];
      if (0 === e.length)
          throw new Error("Can't merge zero objects");
      for (var n = {}, r = 0; r < e.length; r++) {
          var o, i = e[r];
          for (o in i)
              Te(i, o) && (n[o] = (n[o],
              i[o]))
      }
      return n
  }, Pc = ge([{
      starts: ["value", "f"]
  }, {
      pattern: ["regex", "f"]
  }, {
      contains: ["value", "f"]
  }, {
      exact: ["value", "f"]
  }, {
      all: []
  }, {
      not: ["stringMatch"]
  }]), Rc = function(e, n) {
      return e.fold(function(e, t) {
          return 0 === t(n).indexOf(t(e))
      }, function(e, t) {
          return e.test(t(n))
      }, function(e, t) {
          return 0 <= t(n).indexOf(t(e))
      }, function(e, t) {
          return t(n) === t(e)
      }, w, function(e) {
          return !Rc(e, n)
      })
  }, Mc = {
      starts: Pc.starts,
      pattern: Pc.pattern,
      contains: Pc.contains,
      exact: Pc.exact,
      all: Pc.all,
      not: Pc.not,
      cata: function(e, t, n, r, o, i, a) {
          return e.fold(t, n, r, o, i, a)
      },
      matches: Rc,
      caseSensitive: o,
      caseInsensitive: function(e) {
          return e.toLowerCase()
      }
  }, Fc = ["mso-list"], jc = "startElement", Uc = "endElement", Hc = "text", Wc = "comment", Bc = cc("html", window.document), zc = function(e, t, n) {
      return void 0 === n && (n = !1),
      e === t || v(e) && v(t) && e.tag === t.tag && e.type === t.type && (n || e.variant === t.variant)
  };
  function $c(e, r, o) {
      function t(e, t, n) {
          j(r, function(e) {
              return e.pred(t, n)
          }).fold(b(o), function(e) {
              return e.action
          })(e, t, n)
      }
      return t.toString = function() {
          return "Handlers for " + e
      }
      ,
      t
  }
  function qc(e, t) {
      return {
          state: b(e),
          result: b(t)
      }
  }
  function Vc(e, t) {
      return {
          state: b(e),
          value: b(t)
      }
  }
  function Gc(e, t, n, r) {
      return {
          level: b(e),
          type: b(t),
          types: b(n),
          items: b(r)
      }
  }
  function Kc(e) {
      var t = e.items().slice(0);
      if (0 < t.length && "p" !== t[t.length - 1]) {
          var n = t[t.length - 1];
          return t[t.length - 1] = "p",
          Vc(Gc(e.level(), e.type(), e.types(), t), re.some(n))
      }
      return Vc(e, re.none())
  }
  function Xc(e, t, n) {
      for (var r = [], o = e; t(o); )
          var i = n(o)
            , o = i.state()
            , r = r.concat(i.result());
      return qc(o, r)
  }
  function Jc(e, t, n) {
      var r = t.start && 1 < t.start ? {
          start: t.start
      } : {}
        , o = e.level() + 1
        , i = t
        , a = e.types().concat([t])
        , u = [A(uc, t.tag, r, n)];
      return qc(Gc(o, i, a, e.items()), u)
  }
  function Yc(e) {
      var t = e.types().slice(0)
        , n = [A(cc, t.pop().tag)];
      return qc(Gc(e.level() - 1, t[t.length - 1], t, e.items()), n)
  }
  function Zc(e, o, t) {
      var n, r, i, a, u, c, s, l, f = o ? v(l = yu(Jt.fromDom(o.getNode()), "margin-left")) && "0px" !== l ? {
          "margin-left": l
      } : {} : {
          "list-style-type": "none"
      }, d = e.type() && !zc(e.type(), t) ? (n = t,
      qc((i = Jc((r = Yc(e)).state(), n, n.type ? {
          "list-style-type": n.type
      } : {})).state(), r.result().concat(i.result()))) : qc(e, []), m = [A(uc, "li", {}, f)], p = (a = d.state(),
      u = o && o.tag(),
      c = a.items().slice(0),
      (s = void 0 !== u && "p" !== u ? re.some(u) : re.none()).fold(function() {
          c.push("p")
      }, function(e) {
          c.push(e)
      }),
      Vc(Gc(a.level(), a.type(), a.types(), c), s)), g = p.value().map(function(e) {
          var t = o
            , n = t.getNode()
            , r = w;
          return rc(Jt.fromDom(n), r),
          [b(t)]
      }).getOr([]);
      return qc(p.state(), d.result().concat(m).concat(g))
  }
  function Qc(e) {
      var t = A(cc, "li")
        , n = Kc(e)
        , r = n.value().fold(function() {
          return [t]
      }, function(e) {
          return [A(cc, e), t]
      });
      return qc(n.state(), r)
  }
  function es(e) {
      if (0 === e.length)
          throw new Error("Compose must have at least one element in the list");
      var t = e[e.length - 1]
        , n = W(e, function(e) {
          return e.result()
      });
      return qc(t.state(), n)
  }
  function ts(e) {
      var t = Qc(e)
        , n = Yc(t.state());
      return es([t, n])
  }
  function ns(e, t) {
      return n = t,
      Xc(e, function(e) {
          return e.level() > n
      }, ts);
      var n
  }
  function rs(e, t, n, r) {
      var o, i, a, u, c, s, l, f, d, m, p, g, v, h, y, b, x, w = e.level() > t ? ns(e, t) : qc(e, []), T = w.state().level() === t ? (d = r,
      m = n,
      g = Zc((p = 0 < (f = w.state()).level() ? Qc(f) : qc(f, [])).state(), m, d),
      es([p, g])) : (o = w.state(),
      i = r,
      u = n,
      s = (c = 1 < (a = t) ? Kc(o) : Vc(o, re.none())).value().map(function(e) {
          return [A(cc, e)]
      }).getOr([]),
      v = c.state(),
      h = i,
      b = u,
      x = y = a,
      qc((l = Xc(v, function(e) {
          return e.level() < x
      }, function(e) {
          return n = h,
          r = y,
          o = b,
          i = (t = e).level() === r - 1 && n.type ? {
              "list-style-type": n.type
          } : {},
          u = Zc((a = Jc(t, n, i)).state(), a.state().level() == r ? o : void 0, n),
          es([a, u]);
          var t, n, r, o, i, a, u
      })).state(), s.concat(l.result())));
      return es([w, T])
  }
  function os(e) {
      for (var t = []; null !== e.nextNode(); )
          t.push(Jt.fromDom(e.currentNode));
      return t
  }
  function is(e) {
      return e.dom.textContent
  }
  function as(e) {
      var t = tc(e, ["mso-list"], x)["mso-list"]
        , n = v(t) && / level([0-9]+)/.exec(t);
      return n && n[1] ? re.some(parseInt(n[1], 10)) : re.none()
  }
  function us(e, t) {
      var u, n, r, o, i, a = is(e).trim(), c = (r = js[u = a] ? [js[u]] : [],
      o = (n = t) && Fs[u] ? [Fs[u]] : n ? [{
          tag: "ul",
          variant: u
      }] : [],
      i = W(Ms, function(e) {
          return e.regex.test(u) ? [Nc(e.type, (o = (r = u).split("."),
          i = function() {
              if (0 === o.length)
                  return r;
              var e = o[o.length - 1];
              return 0 === e.length && 1 < o.length ? o[o.length - 2] : e
          }(),
          a = parseInt(i, 10),
          isNaN(a) ? {} : {
              start: a
          }), {
              variant: (t = e.type,
              n = u,
              I(t.variant) ? "(" === n.charAt(0) ? "()" : ")" === n.charAt(n.length - 1) ? ")" : "." : t.variant)
          })] : [];
          var t, n, r, o, i, a
      }),
      N(r.concat(o).concat(i), function(e) {
          return void 0 !== e.variant ? e : Nc(e, {
              variant: u
          })
      }));
      return 0 < c.length ? re.some(c) : re.none()
  }
  function cs(e) {
      return ga(e, wt).bind(Jo).filter(Tt("span"))
  }
  function ss(e) {
      return va(e, function(e) {
          return (Vt(e) ? tc(e, ["mso-list"], x) : {})["mso-list"]
      })
  }
  function ls(e) {
      P(function(e) {
          var t = re.none().fold(Rs, function(t) {
              return function(e) {
                  return t(e.nodeValue)
              }
          });
          t.acceptNode = t;
          var n, r, o = document.createTreeWalker(e.dom, NodeFilter.SHOW_COMMENT, t, !1);
          return n = o,
          ((r = Di().browser).isIE() || r.isEdge() ? function(e) {
              try {
                  return os(e)
              } catch (e) {
                  return []
              }
          }
          : os)(n)
      }(e), _u)
  }
  function fs(e, t, n, r) {
      var o, i;
      i = n,
      St(o = e, "data-list-level", t),
      St(o, "data-list-emblems", JSON.stringify(i)),
      ls(e),
      P(r, _u),
      kt(e, "style"),
      kt(e, "class")
  }
  function ds(e) {
      return as(r = e).bind(function(n) {
          return ga(r, Us).bind(function(t) {
              return us(t, !0).map(function(e) {
                  return {
                      mutate: function() {
                          fs(r, n, e, [t])
                      }
                  }
              })
          })
      }).orThunk(function() {
          return as(r = e).bind(function(n) {
              return cs(r).bind(function(t) {
                  return us(t, Us(t)).map(function(e) {
                      return {
                          mutate: function() {
                              fs(r, n, e, [t])
                          }
                      }
                  })
              })
          });
          var r
      }).orThunk(function() {
          return as(r = e).bind(function(n) {
              return cs(r).bind(function(t) {
                  return us(t, Us(t)).map(function(e) {
                      return {
                          mutate: function() {
                              fs(r, n, e, [t])
                          }
                      }
                  })
              })
          });
          var r
      }).orThunk(function() {
          return "p" !== yt(r = e) ? re.none() : as(r).bind(function(n) {
              return ss(r).bind(function(t) {
                  return us(t, !1).map(function(e) {
                      return {
                          mutate: function() {
                              fs(r, n, e, [Ko(t).getOr(t)])
                          }
                      }
                  })
              })
          });
          var r
      }).orThunk(function() {
          return "p" !== yt(r = e) ? re.none() : ss(r).bind(function(e) {
              var n = Ko(e).getOr(e);
              return us(e, Us(n)).bind(function(t) {
                  return bu(r, "margin-left").bind(function(e) {
                      var t = parseInt(e, 10);
                      return isNaN(t) ? re.none() : re.some(Math.max(1, Math.ceil(t / 18)))
                  }).map(function(e) {
                      return {
                          mutate: function() {
                              fs(r, e, t, [n])
                          }
                      }
                  })
              })
          });
          var r
      });
      var r
  }
  function ms(e) {
      return (wt(t = e) ? (r = "v:shape",
      re.from(t.dom.nodeValue).bind(function(e) {
          var t = e.indexOf("]>")
            , n = function(t) {
              try {
                  return (new DOMParser).parseFromString(t, "text/html").body
              } catch (e) {
                  var n = document.implementation.createHTMLDocument("").body;
                  return n.innerHTML = t,
                  n
              }
          }("<div>" + e.slice(t + "]>".length, e.lastIndexOf("<![")) + "</div>");
          return va(Jt.fromDom(n), function(e) {
              return yt(e) === r
          })
      })) : re.none()).map(function(e) {
          var t, n, r, o = At(e, "o:spid"), i = void 0 === o ? Ct(e, "id").getOr("") : o, a = Jt.fromTag("img");
          return sa(a, "rtf-data-image"),
          St(a, "data-image-id", i.substr("_x0000_".length)),
          St(a, "data-image-type", "code"),
          t = a,
          n = {
              width: bu(e, "width"),
              height: bu(e, "height")
          },
          r = t.dom,
          se(n, function(e, t) {
              e.fold(function() {
                  gu(r, t)
              }, function(e) {
                  pu(r, t, e)
              })
          }),
          a
      });
      var r, t
  }
  function ps(e) {
      if (Tt("img")(e)) {
          var t = At(e, "src");
          if (null != t && Bt(t, "file://")) {
              var n = Jt.fromDom(e.dom.cloneNode(!1))
                , r = t.split(/[\/\\]/);
              return St(n, "data-image-id", r[r.length - 1]),
              kt(n, "src"),
              St(n, "data-image-type", "local"),
              sa(n, "rtf-data-image"),
              re.some(n)
          }
          return re.none()
      }
      return re.none()
  }
  var gs, vs, hs, ys, bs, xs, ws, Ts, Is, Ss, Os = ns, As = ["disc", "circle", "square"], Cs = {
      getCurrentListType: function() {
          return Ds().getCurrentListType()
      },
      getCurrentLevel: function() {
          return Ds().getCurrentLevel()
      },
      closeAllLists: function() {
          return Ds().closeAllLists()
      },
      openItem: function(e, t, n) {
          return Ds().openItem(e, t, n)
      }
  }, Ds = function() {
      return {
          getCurrentListType: b({}),
          getCurrentLevel: b(1),
          closeAllLists: S,
          openItem: o
      }
  }, ks = {
      inside: function() {
          return Es
      },
      outside: function() {
          return _s
      }
  }, Ls = (gs = !1,
  {
      check: function(e) {
          return !(!gs || e.type() !== Hc) || (e.type() === jc && "style" === e.tag() ? gs = !0 : e.type() === Uc && "style" === e.tag() && !(gs = !1))
      }
  }), Es = (vs = ks,
  $c("Inside.List.Item", [yc(function(e, t) {
      var n = e.originalToken.get();
      return t.type() === Uc && null !== n && t.tag() === n.tag()
  }, function(e, t) {
      vc(t, vs.outside())
  }, "Closing open tag")], function(e, t, n) {
      e.emit(n)
  })), _s = $c("Outside.List.Item", [yc(function(e, t) {
      return Dt(Jt.fromDom(t.getNode()), "data-list-level")
  }, (Ss = hs = ks,
  function(e, t, n) {
      var r, o, i, a, u = n, c = (r = Jt.fromDom(u.getNode()),
      o = parseInt(At(r, "data-list-level"), 10),
      a = v(i = At(r, "data-list-emblems")) ? JSON.parse(i) : [],
      kt(r, "data-list-level"),
      kt(r, "data-list-emblems"),
      {
          level: b(o),
          emblems: b(a)
      });
      t.originalToken.set(u);
      var s, l, f, d = (s = u,
      l = c,
      hc((f = t).listType.get(), s, f.emitter, l).each(f.listType.set),
      {
          level: b(l.level()),
          token: b(f.originalToken.get()),
          type: b(f.listType.get())
      });
      t.emitter.openItem(d.level(), d.token(), d.type()),
      vc(t, Ss.inside())
  }
  ), "Data List ****"), yc(function(e, t) {
      return t.type() === Hc && (n = t).type() === Hc && /^[\s\u00A0]*$/.test(n.text());
      var n
  }, function(e, t, n) {
      e.emit(n)
  }, "Whitespace")], function(e, t, n) {
      t.emitter.closeAllLists(),
      e.emit(n),
      vc(t, hs.outside())
  }), Ns = (bs = Ea(ys = _s),
  xs = Ea(null),
  ws = Ea(null),
  {
      reset: function(e) {
          function i(e) {
              P(e.result(), function(e) {
                  var t = e(r);
                  n.emit(t)
              })
          }
          var n, r, a;
          bs.set(ys),
          xs.set(null),
          ws.set(null),
          Ds = b((r = (n = e).document,
          a = Gc(0, void 0, [], []),
          {
              closeAllLists: function() {
                  var e = Os(a, 0);
                  a = e.state(),
                  i(e)
              },
              openItem: function(e, t, n) {
                  var r, o;
                  n && (r = "ul" === n.tag && As[e - 1] === n.type ? {
                      tag: "ul"
                  } : n,
                  o = rs(a, e, t, r),
                  a = o.state(),
                  i(o))
              },
              getCurrentListType: function() {
                  return a.type()
              },
              getCurrentLevel: function() {
                  return a.level()
              }
          }))
      },
      nextFilter: bs,
      originalToken: xs,
      listType: ws,
      emitter: Cs
  }), Ps = gc(function(e, t, n) {
      var r, o, i;
      Ls.check(t) || (r = e,
      i = t,
      (o = Ns).nextFilter.get()(r, o, i))
  }, Ns.reset), Rs = b(w), Ms = [{
      regex: /^\(?[dc][\.\)]$/,
      type: {
          tag: "ol",
          type: "lower-alpha"
      }
  }, {
      regex: /^\(?[DC][\.\)]$/,
      type: {
          tag: "ol",
          type: "upper-alpha"
      }
  }, {
      regex: /^\(?M*(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})[\.\)]$/,
      type: {
          tag: "ol",
          type: "upper-roman"
      }
  }, {
      regex: /^\(?m*(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})[\.\)]$/,
      type: {
          tag: "ol",
          type: "lower-roman"
      }
  }, {
      regex: /^\(?[0-9]+[\.\)]$/,
      type: {
          tag: "ol"
      }
  }, {
      regex: /^([0-9]+\.)*[0-9]+\.?$/,
      type: {
          tag: "ol",
          variant: "outline"
      }
  }, {
      regex: /^\(?[a-z]+[\.\)]$/,
      type: {
          tag: "ol",
          type: "lower-alpha"
      }
  }, {
      regex: /^\(?[A-Z]+[\.\)]$/,
      type: {
          tag: "ol",
          type: "upper-alpha"
      }
  }], Fs = {
      "\u2022": {
          tag: "ul",
          type: "disc"
      },
      "\xb7": {
          tag: "ul",
          type: "disc"
      },
      "\xa7": {
          tag: "ul",
          type: "square"
      }
  }, js = {
      o: {
          tag: "ul",
          type: "circle"
      },
      "-": {
          tag: "ul",
          type: "disc"
      },
      "\u25cf": {
          tag: "ul",
          type: "disc"
      },
      "\ufffd": {
          tag: "ul",
          type: "circle"
      }
  }, Us = function(e) {
      return Vt(e) && bu(e, "font-family").exists(function(e) {
          return E(["wingdings", "symbol"], e.toLowerCase())
      })
  }, Hs = dc({
      tags: [{
          name: Mc.pattern(/^(p|h\d+)$/, Mc.caseInsensitive),
          mutate: function(e) {
              ds(e).each(function(e) {
                  e.mutate()
              })
          }
      }]
  }), Ws = Ps;
  function Bs(o) {
      return function(r) {
          Ct(r, o.attrName).each(function(e) {
              var t, n = v(o.styleName) ? o.styleName : o.attrName;
              bu(r, n).isNone() && (t = o.mapValue(e),
              vu(r, n, t)),
              kt(r, o.attrName)
          })
      }
  }
  function zs(e) {
      var t = e.toString(16);
      return (1 === t.length ? "0" + t : t).toUpperCase()
  }
  function $s(e) {
      return {
          value: zs(e.red) + zs(e.green) + zs(e.blue)
      }
  }
  function qs(e, t, n, r) {
      return {
          red: e,
          green: t,
          blue: n,
          alpha: r
      }
  }
  function Vs(e, t, n, r) {
      return qs(parseInt(e, 10), parseInt(t, 10), parseInt(n, 10), parseFloat(r))
  }
  function Gs(r) {
      return "currentcolor" === r || "transparent" === r ? r : "#" + (e = pt(r, "#").toUpperCase(),
      (il.test(t = e) || al.test(t) ? re.some({
          value: pt(e, "#").toUpperCase()
      }) : re.none()).orThunk(function() {
          return function(e) {
              if ("transparent" === e)
                  return re.some(qs(0, 0, 0, 0));
              var t = ul.exec(e);
              if (null !== t)
                  return re.some(Vs(t[1], t[2], t[3], "1"));
              var n = cl.exec(e);
              return null !== n ? re.some(Vs(n[1], n[2], n[3], n[4])) : re.none()
          }(r).map($s)
      }).getOrThunk(function() {
          var e = document.createElement("canvas");
          e.height = 1,
          e.width = 1;
          var t = e.getContext("2d");
          t.clearRect(0, 0, e.width, e.height),
          t.fillStyle = "#FFFFFF",
          t.fillStyle = r,
          t.fillRect(0, 0, 1, 1);
          var n = t.getImageData(0, 0, 1, 1).data;
          return $s(qs(n[0], n[1], n[2], n[3]))
      }).value);
      var e, t
  }
  function Ks(e, t) {
      switch (t) {
      case "color":
          return Gs(e);
      case "font-family":
          return e.replace(/['"]/g, "");
      case "font-weight":
          return function(e) {
              switch (e) {
              case "bold":
                  return "700";
              case "normal":
                  return "400";
              default:
                  return e
              }
          }(e);
      default:
          return zt(t, "-color") ? Gs(e) : e.replace(/^0(pt|px|pc|in|cm|mm|Q|cap|ch|ic|em|ex|lh|rlh|rem|vw|vh|vb|vi|vmax|vmin|%)$/, "0")
      }
  }
  function Xs(n) {
      return dc({
          tags: [{
              name: Mc.exact(n.matchTag, Mc.caseInsensitive),
              mutate: function(t) {
                  pe(xu(t), n.key).exists(function(e) {
                      return E(n.values, e)
                  }) && (Oa(t, Jt.fromTag(n.newTag)),
                  wu(t, n.key),
                  l(n.removeExtra) && P(n.removeExtra, function(e) {
                      return wu(t, e),
                      0
                  }))
              }
          }]
      })
  }
  function Js(e, t) {
      return va(e, t).isSome()
  }
  function Ys(e, t) {
      var n = Jt.fromTag(e);
      Ta(t, n),
      P(t.dom.attributes, function(e) {
          n.dom.setAttribute(e.name, e.value)
      });
      var r = Zo(t);
      return Aa(n, r),
      _u(t),
      n
  }
  function Zs(e) {
      var i = Ys("span", e)
        , a = {
          "font-size": {
              1: "8pt",
              2: "10pt",
              3: "12pt",
              4: "14pt",
              5: "18pt",
              6: "24pt",
              7: "36pt"
          }
      };
      se({
          face: "font-family",
          size: "font-size",
          color: "color"
      }, function(r, o) {
          Ct(i, o).each(function(e) {
              var t = a[r]
                , n = void 0 !== t && void 0 !== t[e] ? t[e] : e;
              vu(i, r, n),
              kt(i, o)
          })
      })
  }
  function Qs(e) {
      var t = Ys("span", e);
      sa(t, "ephox-limbo-transform"),
      vu(t, "text-decoration", "underline")
  }
  (Is = Ts = Ts || {})[Is.Word = 0] = "Word",
  Is[Is.GoogleDocs = 1] = "GoogleDocs",
  Is[Is.Html = 2] = "Html";
  function el(e) {
      var t = yt(e);
      return "td" === t || "tr" === t || "col" === t || "th" === t
  }
  function tl(e) {
      var t = e.dom.attributes;
      return null == t || 0 === t.length || 1 === t.length && "style" === t[0].name
  }
  var nl, rl, ol, il = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, al = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, ul = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)/, cl = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d?(?:\.\d+)?)\)/, sl = dc({
      tags: [{
          name: Mc.pattern(/^(p|div)$/, Mc.caseInsensitive),
          mutate: function(t) {
              var e = "ltr" === Ou(t)
                , n = e ? "margin-left" : "margin-right"
                , r = e ? "padding-left" : "padding-right";
              bu(t, n).each(function() {
                  var e = yu(t, n);
                  vu(t, r, e),
                  wu(t, n)
              })
          }
      }]
  }), ll = fc({
      tags: [{
          name: Mc.exact("b", Mc.caseInsensitive),
          condition: function(e) {
              return Ct(e, "id").exists(function(e) {
                  return Bt(e, "docs-internal-guid")
              })
          }
      }]
  }), fl = lc({
      attributes: [{
          name: Mc.exact("id", Mc.caseInsensitive),
          value: Mc.starts("docs-internal-guid", Mc.caseInsensitive)
      }]
  }), dl = [dc({
      tags: [{
          name: Mc.exact("col", Mc.caseInsensitive),
          mutate: Bs({
              attrName: "width",
              mapValue: function(e) {
                  return e.replace(/^(\d+)$/, "$1px")
              }
          })
      }]
  })], ml = [Xs({
      matchTag: "span",
      key: "font-weight",
      values: ["700", "bold"],
      newTag: "strong"
  }), Xs({
      matchTag: "span",
      key: "font-style",
      values: ["italic"],
      newTag: "em"
  }), Xs({
      matchTag: "span",
      key: "vertical-align",
      values: ["sub"],
      newTag: "sub",
      removeExtra: ["font-size"]
  }), Xs({
      matchTag: "span",
      key: "vertical-align",
      values: ["super"],
      newTag: "sup",
      removeExtra: ["font-size"]
  })], pl = ["p", "div", "article", "aside", "details", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"], gl = lc({
      styles: [{
          name: Mc.exact("background-color", Mc.caseInsensitive),
          value: Mc.exact("transparent", Mc.caseInsensitive)
      }, {
          name: Mc.exact("white-space", Mc.caseInsensitive),
          value: Mc.starts("pre", Mc.caseInsensitive)
      }, {
          name: Mc.pattern(/^overflow(-[xy])?$/, Mc.caseInsensitive),
          condition: function(e) {
              return el(e) && fu(bu(e, "overflow"), "hidden")
          }
      }, {
          name: Mc.exact("overflow-wrap", Mc.caseInsensitive),
          condition: el
      }, {
          name: Mc.exact("table-layout", Mc.caseInsensitive),
          value: Mc.exact("fixed", Mc.caseInsensitive),
          condition: Tt("table")
      }, {
          name: Mc.exact("line-height", Mc.caseInsensitive),
          value: Mc.exact("1.38", Mc.caseInsensitive)
      }, {
          name: Mc.exact("vertical-align", Mc.caseInsensitive),
          value: Mc.exact("baseline", Mc.caseInsensitive)
      }, {
          name: Mc.exact("font-style", Mc.caseInsensitive),
          value: Mc.exact("normal", Mc.caseInsensitive)
      }, {
          name: Mc.exact("font-variant", Mc.caseInsensitive),
          value: Mc.exact("normal", Mc.caseInsensitive)
      }, {
          name: Mc.exact("background-color", Mc.caseInsensitive),
          value: Mc.exact("transparent", Mc.caseInsensitive)
      }, {
          name: Mc.starts("padding", Mc.caseInsensitive),
          condition: el
      }, {
          name: Mc.pattern(/^text-decoration(-(line|thickness|style|color))?$/, Mc.caseInsensitive),
          condition: function(e) {
              return !Tt("a")(e) && fu(bu(e, "text-decoration"), "none")
          }
      }],
      attributes: [{
          name: Mc.exact("aria-level", Mc.caseInsensitive),
          condition: Tt("li")
      }, {
          name: Mc.exact("dir", Mc.caseInsensitive),
          value: Mc.exact("ltr", Mc.caseInsensitive),
          condition: function(e) {
              return E(pl, yt(e))
          }
      }, {
          name: Mc.exact("role", Mc.caseInsensitive),
          value: Mc.exact("presentation", Mc.caseInsensitive),
          condition: function(e) {
              return Tt("p")(e) && Ko(e).exists(Tt("li"))
          }
      }]
  }), vl = lc({
      styles: [{
          name: Mc.exact("text-align", Mc.caseInsensitive),
          value: Mc.exact("right", Mc.caseInsensitive),
          condition: function(e) {
              return "rtl" === Ou(e)
          }
      }]
  }), hl = dc({
      tags: [{
          name: Mc.exact("p", Mc.caseInsensitive),
          condition: function(t) {
              function e(e) {
                  return bu(t, e).map(function(e) {
                      return parseInt(e, 10)
                  }).filter(function(e) {
                      return !isNaN(e)
                  }).getOr(0)
              }
              var n = Ou(t);
              return e("text-indent") + e("rtl" === n ? "padding-right" : "padding-left") === 0
          },
          mutate: function(e) {
              var t = Ou(e);
              wu(e, "text-indent"),
              wu(e, "rtl" === t ? "padding-right" : "padding-left")
          }
      }]
  }), yl = Tt("li"), bl = function(e) {
      return Xo(e).bind(function(e) {
          return Gt(e) && 0 === Za(e).trim().length ? bl(e) : yl(e) ? re.some(e) : re.none()
      })
  }, xl = lc({
      tags: [{
          name: Mc.exact("script", Mc.caseInsensitive)
      }, {
          name: Mc.exact("link", Mc.caseInsensitive)
      }, {
          name: Mc.exact("style", Mc.caseInsensitive),
          condition: function(e) {
              return 0 === Tu(e).length
          }
      }],
      attributes: [{
          name: Mc.starts("on", Mc.caseInsensitive)
      }, {
          name: Mc.exact('"', Mc.caseInsensitive)
      }, {
          name: Mc.exact("lang", Mc.caseInsensitive)
      }, {
          name: Mc.exact("language", Mc.caseInsensitive)
      }],
      styles: [{
          name: Mc.all(),
          value: Mc.pattern(/OLE_LINK/i, Mc.caseInsensitive)
      }]
  }), wl = lc({
      tags: [{
          name: Mc.exact("meta", Mc.caseInsensitive)
      }]
  }), Tl = lc({
      tags: [{
          name: Mc.exact("style", Mc.caseInsensitive)
      }]
  }), Il = lc({
      styles: [{
          name: Mc.not(Mc.pattern(/^(width|height|list-style-type)$/, Mc.caseInsensitive)),
          condition: function(e) {
              return !fa(e, "ephox-limbo-transform")
          }
      }, {
          name: Mc.pattern(/^(width|height)$/, Mc.caseInsensitive),
          condition: function(e) {
              return "img" !== yt(e) && !("table" === yt(t = e) || el(t));
              var t
          }
      }]
  }), Sl = lc({
      classes: [{
          name: Mc.not(Mc.exact("rtf-data-image", Mc.caseInsensitive))
      }]
  }), Ol = lc({
      styles: [{
          name: Mc.pattern(/^(mso-.*|tab-stops|tab-interval|language|text-underline|text-effect|text-line-through|font-color|horiz-align|list-image-[0-9]+|separator-image|table-border-color-(dark|light)|vert-align|vnd\..*)$/, Mc.caseInsensitive)
      }]
  }), Al = lc({
      classes: [{
          name: Mc.pattern(/mso/i, Mc.caseInsensitive)
      }]
  }), Cl = fc({
      tags: [{
          name: Mc.exact("img", Mc.caseInsensitive),
          condition: function(e) {
              var t = At(e, "src");
              return O(t) && /^file:/.test(t)
          }
      }]
  }), Dl = fc({
      tags: [{
          name: Mc.exact("a", Mc.caseInsensitive),
          condition: tl
      }]
  }), kl = lc({
      attributes: [{
          name: Mc.exact("style", Mc.caseInsensitive),
          value: Mc.exact("", Mc.caseInsensitive)
      }]
  }), Ll = lc({
      attributes: [{
          name: Mc.exact("class", Mc.caseInsensitive),
          value: Mc.exact("", Mc.caseInsensitive)
      }]
  }), El = fc({
      tags: [{
          name: Mc.pattern(/^(font|em|strong|samp|acronym|cite|code|dfn|kbd|tt|b|i|u|s|sub|sup|ins|del|var|span)$/, Mc.caseInsensitive),
          condition: (nl = function(e) {
              return !tl(e) || (n = null != (t = e.dom.attributes) && 0 < t.length,
              ("span" !== yt(e) || n) && Js(e, function(e) {
                  var t = !tl(e)
                    , n = !E(["font", "em", "strong", "samp", "acronym", "cite", "code", "dfn", "kbd", "tt", "b", "i", "u", "s", "sub", "sup", "ins", "del", "var", "span"], yt(e));
                  return Gt(e) || t || n
              }));
              var t, n
          }
          ,
          function(e) {
              return !nl(e)
          }
          )
      }]
  }), _l = dc({
      tags: [{
          name: Mc.exact("p", Mc.caseInsensitive),
          mutate: function(e) {
              0 === Tu(e).length && za(e, Jt.fromTag("br"))
          }
      }]
  }), Nl = dc({
      tags: [{
          name: Mc.pattern(/ol|ul/, Mc.caseInsensitive),
          mutate: function(t) {
              Ko(t).each(function(e) {
                  E(["ol", "ul"], yt(e)) && bl(t).fold(function() {
                      var e = Jt.fromTag("li");
                      vu(e, "list-style-type", "none"),
                      Oa(t, e)
                  }, function(e) {
                      za(e, t)
                  })
              })
          }
      }]
  }), Pl = lc({
      classes: [{
          name: Mc.exact("ephox-limbo-transform", Mc.caseInsensitive)
      }]
  }), Rl = lc({
      tags: [{
          name: Mc.exact("br", Mc.caseInsensitive),
          condition: da("Apple-interchange-newline")
      }]
  }), Ml = lc({
      styles: [{
          name: Mc.pattern(/^-/, Mc.caseInsensitive)
      }, {
          name: Mc.all(),
          value: Mc.exact("initial", Mc.caseInsensitive)
      }, {
          name: Mc.exact("background-color", Mc.caseInsensitive),
          value: Mc.exact("transparent", Mc.caseInsensitive)
      }, {
          name: Mc.exact("font-style", Mc.caseInsensitive),
          value: Mc.exact("normal", Mc.caseInsensitive)
      }, {
          name: Mc.pattern(/font-variant.*/, Mc.caseInsensitive)
      }, {
          name: Mc.exact("letter-spacing", Mc.caseInsensitive)
      }, {
          name: Mc.exact("font-weight", Mc.caseInsensitive),
          value: Mc.pattern(/400|normal/, Mc.caseInsensitive)
      }, {
          name: Mc.exact("orphans", Mc.caseInsensitive)
      }, {
          name: Mc.exact("text-decoration", Mc.caseInsensitive),
          value: Mc.exact("none", Mc.caseInsensitive)
      }, {
          name: Mc.exact("text-size-adjust", Mc.caseInsensitive)
      }, {
          name: Mc.exact("text-indent", Mc.caseInsensitive),
          value: Mc.exact("0px", Mc.caseInsensitive)
      }, {
          name: Mc.exact("text-transform", Mc.caseInsensitive),
          value: Mc.exact("none", Mc.caseInsensitive)
      }, {
          name: Mc.exact("white-space", Mc.caseInsensitive),
          value: Mc.exact("normal", Mc.caseInsensitive)
      }, {
          name: Mc.exact("widows", Mc.caseInsensitive)
      }, {
          name: Mc.exact("word-spacing", Mc.caseInsensitive),
          value: Mc.exact("0px", Mc.caseInsensitive)
      }, {
          name: Mc.exact("text-align", Mc.caseInsensitive),
          value: Mc.pattern(/start|end/, Mc.caseInsensitive)
      }, {
          name: Mc.exact("font-weight", Mc.caseInsensitive),
          value: Mc.pattern(/700|bold/, Mc.caseInsensitive),
          condition: function(e) {
              return /^h\d$/.test(yt(e))
          }
      }]
  }), Fl = (rl = jl(Xo, zt),
  ol = jl(Jo, Bt),
  dc({
      tags: [{
          name: Mc.exact("span", Mc.caseInsensitive),
          condition: da("Apple-converted-space"),
          mutate: function(e) {
              "\xa0" === is(e) && (rl(e) || ol(e) ? cu(e) : (Ta(e, Jt.fromText(" ")),
              _u(e)))
          }
      }]
  }));
  function jl(e, n) {
      return function(t) {
          return e(t).filter(function(e) {
              return Gt(t) && n(is(e) || "", " ")
          }).isSome()
      }
  }
  var Ul, Hl = (Ul = /^file:\/\/\/[^#]+(#[^#]+)$/,
  dc({
      tags: [{
          name: Mc.exact("a", Mc.caseInsensitive),
          condition: function(e) {
              var t = At(e, "href");
              return !!t && Ul.test(t)
          },
          mutate: function(t) {
              Ct(t, "href").each(function(e) {
                  St(t, "href", e.replace(Ul, "$1"))
              })
          }
      }]
  })), Wl = lc({
      attributes: [{
          name: Mc.exact("href", Mc.caseInsensitive),
          value: Mc.starts("file:///", Mc.caseInsensitive)
      }]
  }), Bl = dc({
      tags: [zl("a", "data-ephox-href", "href"), zl("img", "data-ephox-src", "src")]
  });
  function zl(e, n, r) {
      return {
          name: Mc.exact(e, Mc.caseInsensitive),
          condition: function(e) {
              return Dt(e, n)
          },
          mutate: function(t) {
              Ct(t, n).each(function(e) {
                  St(t, r, e),
                  kt(t, n)
              })
          }
      }
  }
  function $l(a) {
      var u = ["table", "thead", "tbody", "tfoot", "th", "tr", "td", "ul", "ol", "li"]
        , e = Ri(a, wt)
        , t = j(e, function(e) {
          return vt(Fa(e), "StartFragment")
      })
        , n = j(e, function(e) {
          return vt(Fa(e), "EndFragment")
      });
      t.each(function(i) {
          n.each(function(e) {
              for (var t, n = i, r = [], o = (t = eu(i, 0, e, 0),
              Jt.fromDom(t.commonAncestorContainer)); void 0 !== o && !$o(o, a); )
                  E(u, yt(o)) ? n = o : r.push(o),
                  o = Ko(o).getOrUndefined();
              P(r, cu),
              P(Yo(n), _u)
          }),
          _u(i)
      }),
      n.each(_u)
  }
  function ql(e, t) {
      return Cu.getOption(e).exists(function(e) {
          return 0 === t(e).length
      })
  }
  function Vl(e) {
      return P(Zo(e), function(e) {
          ql(e, $t) && _u(e)
      })
  }
  var Gl = dc({
      tags: [{
          name: Mc.pattern(/^(img|table)$/, Mc.caseInsensitive),
          mutate: function(e) {
              bu(e, "margin-left").exists(function(e) {
                  return Bt(e, "-")
              }) && wu(e, "margin-left"),
              Bt(yu(e, "margin-left"), "-") && (vu(e, "margin-top", yu(e, "margin-top")),
              vu(e, "margin-bottom", yu(e, "margin-bottom")),
              vu(e, "margin-right", yu(e, "margin-right")),
              wu(e, "margin"))
          }
      }]
  })
    , Kl = dc({
      tags: [{
          name: Mc.exact("p", Mc.caseInsensitive),
          mutate: Bs({
              attrName: "align",
              styleName: "text-align",
              mapValue: o
          })
      }]
  })
    , Xl = lc({
      tags: [{
          name: Mc.exact("font", Mc.caseInsensitive),
          condition: function(e) {
              function t(e) {
                  return e.replace(/[ \r\n\uFEFF]+/g, "")
              }
              var n = Zo(e);
              return 0 === n.length || B(n, function(e) {
                  return ql(e, t)
              })
          }
      }]
  })
    , Jl = dc({
      tags: [{
          name: Mc.exact("ol", Mc.caseInsensitive),
          mutate: Vl
      }, {
          name: Mc.exact("ul", Mc.caseInsensitive),
          mutate: Vl
      }]
  })
    , Yl = fc({
      tags: [{
          name: Mc.pattern(/^([OVWXP]|U[0-9]+|ST[0-9]+):/i, Mc.caseInsensitive)
      }]
  })
    , Zl = [mc([Ws])]
    , Ql = lc({
      attributes: [{
          name: Mc.exact("height", Mc.caseInsensitive),
          condition: Tt("table")
      }]
  })
    , ef = lc({
      attributes: [{
          name: Mc.pattern(/^(width|height)$/, Mc.caseInsensitive),
          condition: el
      }]
  })
    , tf = dc({
      tags: [{
          name: Mc.exact("table", Mc.caseInsensitive),
          mutate: Bs({
              attrName: "width",
              mapValue: function(e) {
                  return e.replace(/^(\d+)$/, "$1px")
              }
          })
      }]
  })
    , nf = lc({
      styles: [{
          name: Mc.exact("height", Mc.caseInsensitive),
          condition: Tt("td")
      }, {
          name: Mc.exact("width", Mc.caseInsensitive),
          condition: Tt("tr")
      }, {
          name: Mc.exact("height", Mc.caseInsensitive),
          condition: Tt("col")
      }]
  })
    , rf = lc({
      attributes: [{
          name: Mc.pattern(/^v:/, Mc.caseInsensitive)
      }, {
          name: Mc.exact("href", Mc.caseInsensitive),
          value: Mc.contains("#_toc", Mc.caseInsensitive)
      }, {
          name: Mc.exact("href", Mc.caseInsensitive),
          value: Mc.contains("#_mso", Mc.caseInsensitive)
      }, {
          name: Mc.pattern(/^xmlns(:|$)/, Mc.caseInsensitive)
      }, {
          name: Mc.exact("type", Mc.caseInsensitive),
          condition: function(e) {
              return "ol" === yt(e) || "ul" === yt(e)
          }
      }]
  })
    , of = fc({
      tags: [{
          name: Mc.exact("p", Mc.caseInsensitive),
          condition: function(e) {
              return Ko(e).exists(function(e) {
                  return "li" === yt(e) && 1 === Zo(e).length
              })
          }
      }]
  });
  function af(e) {
      return e.browser.isIE() && 11 <= e.browser.version.major
  }
  function uf(n, r) {
      var e, t, o, i, a, u, c, s, l, f, d, m, p, g, v, h, y, b, x, w = r.merge, T = (e = r,
      i = (o = (t = n).browser.isFirefox() || t.browser.isEdge()) ? ps : ms,
      a = !o,
      u = af(t) ? S : mc([(l = i,
      f = a,
      gc(function(e, t) {
          var r, o, n = (r = t,
          o = f,
          l(Jt.fromDom(r.getNode())).fold(function() {
              return [r]
          }, function(e) {
              var t = r.type() === Uc
                , n = [ac(e.dom, t)];
              return !t && o && n.push(ac(e.dom, !0)),
              n
          }));
          e.emitTokens(n)
      }, S))]),
      {
          annotate: [e.type === Ts.Word ? u : S],
          local: [o ? S : Cl]
      });
      return H([T.local, (s = r,
      af(n) || s.type !== Ts.Word ? [] : [Hs]), r.type === Ts.GoogleDocs ? [ll] : [], T.annotate, (b = w ? [] : r.cleanFilteredInlineElements,
      [Xl, Jl, (x = b,
      dc({
          tags: M([{
              name: "b",
              transform: {
                  mutate: A(Ys, "strong")
              }
          }, {
              name: "i",
              transform: {
                  mutate: A(Ys, "em")
              }
          }, {
              name: "u",
              transform: {
                  mutate: Qs
              }
          }, {
              name: "s",
              transform: {
                  mutate: A(Ys, "strike")
              }
          }, {
              name: "font",
              transform: {
                  mutate: Zs,
                  debug: !0
              }
          }], function(e) {
              return !E(x, e.name)
          }).map(function(e) {
              return ue({
                  name: Mc.exact(e.name, Mc.caseInsensitive)
              }, e.transform)
          })
      }))]), function() {
          if (r.type !== Ts.Word)
              return [];
          var e = [Yl]
            , t = af(n) ? [] : Zl;
          return e.concat(t).concat([rf])
      }(), (h = n,
      (v = r).type === Ts.GoogleDocs ? ce(ce(ce(ce([gl], ml), dl), [(y = h,
      function(e) {
          var r = []
            , i = {
              border: y.browser.isFirefox() ? "medium none" : "none",
              "text-decoration": "none"
          }
            , o = function(t, e) {
              var n;
              I(e) || (n = Jt.fromTag(yt(t)),
              za(e, n),
              r.push({
                  me: t,
                  fake: n
              })),
              P(M(Zo(t), Vt), function(e) {
                  return o(e, t)
              })
          };
          o(e),
          P(N(r, function(e) {
              var r = e.fake
                , n = e.me
                , t = fe(xu(n), function(e, t) {
                  var n = yu(r, t);
                  return Ks(e, t) === Ks(n, t)
              })
                , o = fe(i, function(e, t) {
                  return fu(bu(n, t), e)
              });
              return {
                  fake: r,
                  me: n,
                  toRemove: t,
                  toPreserve: o
              }
          }), function(e) {
              var n = e.me
                , t = e.toRemove
                , r = e.toPreserve
                , o = e.fake;
              se(t, function(e, t) {
                  wu(n, t)
              }),
              se(r, function(e, t) {
                  vu(n, t, e)
              }),
              _u(o)
          })
      }
      ), vl, hl]), v.type !== Ts.GoogleDocs || v.indentUseMargin ? [] : [sl]) : []), [fl], [Nl], [xl], [wl], (p = [Kl, Ol, Al],
      g = [Kl, Il, fc({
          tags: N(m = void 0 === (m = (d = r).cleanFilteredInlineElements) ? [] : m, function(e) {
              return {
                  name: Mc.exact(e, Mc.caseInsensitive)
              }
          })
      }), Sl],
      d.merge ? p : g), [Hl, Wl, Dl, Bl], [kl], [Ll], [El], [Rl], r.type === Ts.Html && r.merge ? [Ml] : [], [Fl], [_l], (c = r,
      af(n) && c.type === Ts.Word ? [of] : []), [Gl], r.type === Ts.Word ? [nf, tf, ef, Ql] : [], [Pl], [Tl]])
  }
  function cf(e, t) {
      void 0 === t && (t = 2);
      var n = Math.pow(10, t)
        , r = Math.round(e * n);
      return Math.ceil(r / n)
  }
  function sf(e, t, n, r, o) {
      return a = t,
      u = n,
      c = r,
      s = o,
      (i = e).toCanvas().then(function(e) {
          return yf(e, i.getType(), a, u, c, s)
      });
      var i, a, u, c, s
  }
  function lf(e) {
      return parseInt(e, 10)
  }
  function ff(e) {
      return e.isPx && (e.cropWidth !== e.width || e.cropHeight !== e.height)
  }
  function df(o, i) {
      return function(r) {
          return e = yu(i, "transform"),
          re.from(bf.exec(e)).map(function(e) {
              return Math.round(parseFloat(e[1]) * (180 / Math.PI))
          }).fold(function() {
              return Ue.resolve(r)
          }, function(e) {
              return n = e,
              (t = r).toCanvas().then(function(e) {
                  return hf(e, t.getType(), n)
              }).then(function(e) {
                  return wu(i, "transform"),
                  kt(o, "width"),
                  kt(o, "height"),
                  e
              });
              var t, n
          });
          var e
      }
  }
  function mf(n, e, t) {
      return ct(n.dom).then((a = e,
      function(e) {
          return t = a.width,
          n = a.height,
          o = t,
          i = n,
          (r = e).toCanvas().then(function(e) {
              return gf(e, o, i).then(function(e) {
                  return at(e, r.getType())
              })
          });
          var t, n, r, o, i
      }
      )).then((r = n,
      o = e,
      function(e) {
          if (ff(o)) {
              var t = -1 * lf(yu(r, "margin-top"));
              return sf(e, -1 * lf(yu(r, "margin-left")), t, o.cropWidth, o.cropHeight).then(function(e) {
                  return Ot(r, {
                      width: o.cropWidth,
                      height: o.cropHeight
                  }),
                  e
              })
          }
          return Ue.resolve(e)
      }
      )).then(df(n, t)).then(function(e) {
          var t = lt(e);
          return St(n, "src", t),
          Ue.resolve()
      });
      var r, o, a
  }
  function pf(f) {
      return Ko(f).filter(Tt("span")).map(function(i) {
          function e() {
              var r, o, e, t, n = i;
              wu(t = f, "margin-top"),
              wu(t, "margin-left"),
              wu(n, "width"),
              wu(n, "height"),
              wu(n, "overflow"),
              wu(n, "display"),
              o = t,
              e = ["transform"],
              Vt(r = n) && Vt(o) && P(e, function(e) {
                  var t, n = o;
                  bu(r, t = e).each(function(e) {
                      bu(n, t).isNone() && vu(n, t, e)
                  })
              }),
              wu(n, "transform")
          }
          var t, n, r, o, a, u, c, s = (t = f,
          r = yu(n = i, "width"),
          o = yu(n, "height"),
          a = l(t, "width"),
          u = l(t, "height"),
          {
              isPx: (c = /^\d+px$/).test(r) && c.test(o),
              cropWidth: lf(r),
              cropHeight: lf(o),
              width: a,
              height: u
          });
          function l(e, t) {
              return Ct(e, t).map(lf).filter(function(e) {
                  return !isNaN(e)
              }).getOr(0)
          }
          return (ff(s) || bf.test(yu(i, "transform")) ? mf(f, s, i) : Ue.resolve()).then(e, e)
      }).getOrThunk(function() {
          return Ue.resolve()
      })
  }
  dc({
      tags: [{
          name: Mc.pattern(/^(img|table)$/, Mc.caseInsensitive),
          mutate: function(e) {
              bu(e, "margin-left").exists(function(e) {
                  return Bt(e, "-")
              }) && wu(e, "margin-left"),
              Bt(yu(e, "margin-left"), "-") && (vu(e, "margin-top", yu(e, "margin-top")),
              vu(e, "margin-bottom", yu(e, "margin-bottom")),
              vu(e, "margin-right", yu(e, "margin-right")),
              wu(e, "margin"))
          }
      }]
  }),
  ge([{
      bothErrors: ["error1", "error2"]
  }, {
      firstError: ["error1", "value2"]
  }, {
      secondError: ["value1", "error2"]
  }, {
      bothValues: ["value1", "value2"]
  }]);
  var gf = function(e, t, n) {
      var r = _e(e)
        , o = Ne(e)
        , i = t / r
        , a = n / o
        , u = !1;
      (i < .5 || 2 < i) && (i = i < .5 ? .5 : 2,
      u = !0),
      (a < .5 || 2 < a) && (a = a < .5 ? .5 : 2,
      u = !0);
      var c = vf(e, i, a);
      return u ? c.then(function(e) {
          return gf(e, t, n)
      }) : c
  }
    , vf = function(a, u, c) {
      return new Ke(function(e) {
          var t = _e(a)
            , n = Ne(a)
            , r = Math.floor(t * u)
            , o = Math.floor(n * c)
            , i = Le(r, o);
          Ve(i).drawImage(a, 0, 0, t, n, 0, 0, r, o),
          e(i)
      }
      )
  }
    , hf = function(e, t, n) {
      var r = (n < 0 ? 360 + n : n) * Math.PI / 180
        , o = e.width
        , i = e.height
        , a = Math.sin(r)
        , u = Math.cos(r)
        , c = cf(Math.abs(o * u) + Math.abs(i * a))
        , s = cf(Math.abs(o * a) + Math.abs(i * u))
        , l = Le(c, s)
        , f = Ve(l);
      return f.translate(c / 2, s / 2),
      f.rotate(r),
      f.drawImage(e, -o / 2, -i / 2),
      at(l, t)
  }
    , yf = function(e, t, n, r, o, i) {
      var a = Le(o, i);
      return Ve(a).drawImage(e, -n, -r),
      at(a, t)
  }
    , bf = /rotate\((\d\.\d+)rad\)/
    , xf = ["body", "p", "div", "article", "aside", "figcaption", "figure", "footer", "header", "nav", "section", "ol", "ul", "li", "table", "thead", "tbody", "tfoot", "caption", "tr", "td", "th", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "address"];
  function wf(e, t) {
      return U(e, function(e) {
          return e.start === t
      })
  }
  function Tf(e, t, n) {
      return {
          element: e,
          start: t,
          finish: n
      }
  }
  function If(e) {
      return ue(ue({}, e), {
          isBoundary: function() {
              return e.fold(ud, ad, ad, ad)
          },
          toText: function() {
              return e.fold(re.none, re.none, function(e) {
                  return re.some(e)
              }, re.none)
          },
          is: function(n) {
              return e.fold(ad, ad, function(e, t) {
                  return t.eq(e, n)
              }, ad)
          },
          len: function() {
              return e.fold(cd, sd, function(e, t) {
                  return t.property().getText(e).length
              }, sd)
          }
      })
  }
  function Sf(c, e, t) {
      var n, i, a, r = W(t, function(e) {
          return [e.start, e.finish]
      }), s = (n = e,
      a = function(e, t) {
          return function(r, e, t) {
              var n = r.property().getText(e)
                , o = M(function(r, e) {
                  if (0 === e.length)
                      return [r];
                  var t = F(e, function(e, t) {
                      if (0 === t)
                          return e;
                      var n = r.substring(e.prev, t);
                      return {
                          prev: t,
                          values: e.values.concat([n])
                      }
                  }, {
                      prev: 0,
                      values: []
                  })
                    , n = e[e.length - 1];
                  return n < r.length ? t.values.concat(r.substring(n)) : t.values
              }(n, t), function(e) {
                  return 0 < e.length
              });
              if (o.length <= 1)
                  return [Tf(e, 0, n.length)];
              r.property().setText(e, o[0]);
              var i = ed(o.slice(1), function(e, t) {
                  var n = Tf(r.create().text(e), t, t + e.length);
                  return re.some(n)
              }, o[0].length)
                , a = N(i, function(e) {
                  return e.element
              });
              return r.insert().afterAll(e, a),
              [Tf(e, 0, o[0].length)].concat(i)
          }(c, e.element, t)
      }
      ,
      0 === (i = r).length ? n : W(n, function(t) {
          var e, n, r, o = W(i, function(e) {
              return e >= t.start && e <= t.finish ? [e - t.start] : []
          });
          return 0 < o.length ? (n = a(e = t, o),
          r = e.start,
          N(n, function(e) {
              return ue(ue({}, e), {
                  start: e.start + r,
                  finish: e.finish + r
              })
          })) : [t]
      }));
      return N(t, function(e) {
          var n, t, r, o, i, a = N((n = s,
          t = e.start,
          r = e.finish,
          o = wf(n, t),
          i = wf(n, r),
          o.bind(function(e) {
              var t = i.getOr(n[n.length - 1] && n[n.length - 1].finish === r ? n.length + 1 : -1);
              return -1 < t ? re.some(n.slice(e, t)) : re.none()
          }).getOr([])), function(e) {
              return e.element
          }), u = N(a, c.property().getText).join("");
          return {
              elements: a,
              word: e.word,
              exact: u
          }
      })
  }
  function Of(e) {
      return !ba(e, "a", void 0).isSome()
  }
  function Af(e) {
      var t, n;
      P((t = e,
      n = {
          word: "__INTERNAL__",
          pattern: nd(vd)
      },
      pd(gd, t, [n], void 0)), function(e) {
          var n, t = e.exact;
          (t.indexOf("@") < 0 || hd(t)) && (n = e.elements,
          re.from(n[0]).filter(Of).map(function(e) {
              var t = Jt.fromTag("a");
              return Ta(e, t),
              Aa(t, n),
              St(t, "href", is(t)),
              t
          }))
      })
  }
  function Cf(e) {
      P(e, function(e) {
          Vt(e) && bu(e, "position").isSome() && wu(e, "position")
      })
  }
  function Df(e) {
      var t, n, r, o = M(e, Tt("li"));
      0 < o.length && (t = Yo(o[0]),
      n = Jt.fromTag("ul"),
      Ta(e[0], n),
      0 < t.length && (r = Jt.fromTag("li"),
      za(n, r),
      Aa(r, t)),
      Aa(n, o))
  }
  function kf(e) {
      var t = Zo(e);
      P([Af, Cf, Df], function(e) {
          e(t)
      })
  }
  function Lf(e) {
      return void 0 !== e && void 0 !== e.types && null !== e.types
  }
  function Ef(t) {
      return function(e) {
          return {
              discriminator: t,
              data: e
          }
      }
  }
  function _f(t) {
      return function(e) {
          return e.discriminator === t ? re.some(e.data) : re.none()
      }
  }
  function Nf(e) {
      return vt(t = e, "<html") && (vt(t, 'xmlns:o="urn:schemas-microsoft-com:office:office"') || vt(t, 'xmlns:x="urn:schemas-microsoft-com:office:excel"')) || vt(e, 'meta name="ProgId" content="Word.Document"');
      var t
  }
  function Pf(e) {
      return vt(e, 'id="docs-internal-guid-')
  }
  function Rf(e) {
      return 0 < e.length
  }
  function Mf(t, e) {
      return Id(t.types, e).map(function(e) {
          return t.getData(e.type)
      }).filter(Rf)
  }
  function Ff(e) {
      return Mf(e, "html")
  }
  function jf(e) {
      return Ff(e).filter(Pf)
  }
  function Uf(e) {
      return Md ? re.from(e.clipboardData).filter(Lf) : re.none()
  }
  function Hf(e) {
      var t, n = Jt.fromTag("div"), r = pc(qo(n), e, [$l]), o = qo(t = n).dom, i = Jt.fromDom(o.createDocumentFragment());
      return Aa(i, wa(r, o)),
      uu(t),
      za(t, i),
      Od({
          container: n
      })
  }
  function Wf(e) {
      return N(e, function(e) {
          return e.asset
      })
  }
  function Bf(d, m, u) {
      function c(e, t, n) {
          p.trigger.block(!0);
          var r, o, i, a = (r = m,
          i = o = e,
          q(d, function(t) {
              return t.getAvailable(i).map(function(e) {
                  return Yu(t.steps, e, t.label, t.capture())
              })
          }).getOrThunk(function() {
              var e = r.getAvailable(o);
              return Yu(r.steps, e, r.label, r.capture())
          }));
          a.capture && n();
          var u, c, s = a.steps, l = (u = a.input,
          c = F(s, function(e, t) {
              return Ju(e) ? e.then(function(e) {
                  return Qu(e, u, t)
              }) : Qu(e, u, t)
          }, {
              response: Cc([], []),
              bundle: Ec({})
          }),
          Ju(c) ? c : Ue.resolve(c)), f = Ud.getLabelForApi(a.label);
          l.then(function(e) {
              var r = e.bundle.isInternal.getOr(!1)
                , o = e.bundle.officeStyles.fold(b("auto"), function(e) {
                  return e ? "merge" : "clean"
              });
              p.trigger.block(!1),
              Vu(e.response, function(e) {
                  p.trigger.error(e)
              }, function(e, t) {
                  p.trigger.insert(e, Wf(t), t, r, f, o)
              }, function() {
                  p.trigger.cancel()
              }, function(e, t, n) {
                  p.trigger.insert(e, Wf(t), t, r, f, o),
                  p.trigger.error(n)
              })
          })
      }
      var p = Mo({
          cancel: Ro([]),
          error: Ro(["message"]),
          insert: Ro(["elements", "assets", "correlated", "isInternal", "source", "mode"]),
          block: Ro(["state"])
      })
        , s = lu(function(a) {
          au(Go(Jt.fromDom(a.target)).dom).each(function(e) {
              var t, n, r;
              function o(r) {
                  return void 0 === r.items ? re.none() : (t = r.types,
                  q(Fd, function(e) {
                      return Id(t, e)
                  }).map(function(e) {
                      for (var t = [], n = 0; n < r.items.length; n++)
                          t.push(r.items[n]);
                      return Ad({
                          images: t
                      })
                  }));
                  var t
              }
              function i(t) {
                  return q(t.types, function(e) {
                      return "text/plain" === e ? re.some(t.getData(e)).map(function(e) {
                          return Dd({
                              text: r.sanitizeText(e)
                          })
                      }) : re.none()
                  })
              }
              fa(e.start, Pu()) || (n = a,
              void 0 === (r = u) && (r = Sr),
              t = {
                  getWordData: function() {
                      return Uf(n).bind(function(n) {
                          return Ff(n).filter(Nf).map(function(e) {
                              var t = Mf(n, "rtf");
                              return Cd({
                                  html: e,
                                  rtf: t.fold(function() {
                                      return wd()
                                  }, function(e) {
                                      return Td(e)
                                  })
                              })
                          })
                      })
                  },
                  getGoogleDocsData: function() {
                      return Uf(n).bind(jf).map(function(e) {
                          return r.sanitizeHtml(e, "googledocs")
                      }).map(Hf)
                  },
                  getImage: function() {
                      return Uf(n).bind(o)
                  },
                  getText: function() {
                      return Uf(n).fold(function() {
                          var e = window.clipboardData;
                          return void 0 !== e ? re.some(Dd({
                              text: r.sanitizeText(e.getData("text"))
                          })) : re.none()
                      }, i)
                  },
                  getHtml: function() {
                      return Uf(n).bind(Ff).map(r.sanitizeHtml).map(Hf)
                  },
                  getOnlyText: function() {
                      return Uf(n).bind(function(e) {
                          return 1 === (t = e.types).length && "text/plain" === t[0] ? i(e) : re.none();
                          var t
                      })
                  },
                  getNative: function() {
                      return Sd({
                          nativeEvent: n
                      })
                  },
                  getVoid: function() {
                      return kd({})
                  }
              },
              Wu() && (s.control.block(),
              a.preventDefault()),
              c(t, s.control, function() {
                  a.preventDefault()
              }))
          })
      });
      return {
          paste: s.instance,
          pasteCustom: function(e, t) {
              c(e, lu(S).control, t = void 0 === t ? S : t)
          },
          isBlocked: s.control.isBlocked,
          destroy: S,
          events: p.registry
      }
  }
  function zf() {
      var t = re.none();
      return {
          convert: function(e) {
              t = Hd(e)
          },
          listen: function(e) {
              t.getOrThunk(function() {
                  return Ue.resolve([])
              }).then(e)
          },
          clear: function() {
              t = re.none()
          }
      }
  }
  function $f(e, t) {
      return {
          asset: e,
          image: t
      }
  }
  function qf(e, r) {
      return Se.cata(e, function(e, t, n) {
          return St(r, "src", n),
          !0
      }, x)
  }
  function Vf(e, r) {
      var o = [];
      return P(e, function(e, t) {
          var n = r[t];
          qf(e, n) && o.push($f(e, n))
      }),
      o
  }
  function Gf(e) {
      return ft(e).toPromise()
  }
  function Kf(e, t) {
      return {
          asyncAsset: e.then(Ji.value, Ji.error),
          image: t
      }
  }
  function Xf(e) {
      var t = Jt.fromTag("div");
      return Aa(t, e),
      ei(t, "img[src]")
  }
  function Jf(e) {
      return 0 === e.indexOf("data:") && -1 < e.indexOf("base64")
  }
  function Yf(e) {
      return 0 === e.indexOf("blob:")
  }
  function Zf(e) {
      return Ct(e, "src").exists(function(e) {
          return Jf(e) || Yf(e)
      })
  }
  function Qf(e) {
      return W(Xf(e), function(e) {
          var t, n, r, o = Ct(e, "src").getOr("");
          return Jf(o) ? (n = e,
          Ut(o).map(function(e) {
              return Kf(Gf(e), n)
          }).toArray()) : Yf(o) ? (t = e,
          re.from(0 === (r = o).indexOf("blob:") ? Rt(r) : 0 === r.indexOf("data:") ? Mt(r) : null).map(function(e) {
              return Kf(e.then(Gf), t)
          }).toArray()) : []
      })
  }
  function ed(e, n, t) {
      return F(e, function(t, e) {
          return n(e, t.len).fold(b(t), function(e) {
              return {
                  len: e.finish,
                  list: t.list.concat([e])
              }
          })
      }, {
          len: t = void 0 === t ? 0 : t,
          list: []
      }).list
  }
  function td(t, e, n) {
      var r, o, i, a = W(e, function(e) {
          return md(t, e, n)
      });
      return M((r = function(e) {
          return e.match({
              boundary: function() {
                  return od.excludeWithout(e)
              },
              empty: function() {
                  return od.excludeWith(e)
              },
              text: function() {
                  return od.include(e)
              },
              nonEditable: function() {
                  return od.excludeWithout(e)
              }
          })
      }
      ,
      o = [],
      i = [],
      P(a, function(e) {
          var t = r(e);
          od.cata(t, function() {
              i.push(e)
          }, function() {
              0 < i.length && o.push(i),
              o.push([e]),
              i = []
          }, function() {
              0 < i.length && o.push(i),
              i = []
          })
      }),
      0 < i.length && o.push(i),
      o), function(e) {
          return 0 < e.length
      })
  }
  var nd = function(e) {
      return t = e,
      n = b(0),
      r = b(0),
      o = re.none(),
      {
          term: function() {
              return new RegExp(t,o.getOr("g"))
          },
          prefix: n,
          suffix: r
      };
      var t, n, r, o
  }
    , rd = ge([{
      include: ["item"]
  }, {
      excludeWith: ["item"]
  }, {
      excludeWithout: ["item"]
  }])
    , od = {
      include: rd.include,
      excludeWith: rd.excludeWith,
      excludeWithout: rd.excludeWithout,
      cata: function(e, t, n, r) {
          return e.fold(t, n, r)
      }
  }
    , id = ge([{
      boundary: ["item", "universe"]
  }, {
      empty: ["item", "universe"]
  }, {
      text: ["item", "universe"]
  }, {
      nonEditable: ["item", "universe"]
  }])
    , ad = x
    , ud = w
    , cd = b(0)
    , sd = b(1)
    , ld = {
      text: s(If, id.text),
      boundary: s(If, id.boundary),
      empty: s(If, id.empty),
      nonEditable: s(If, id.empty),
      cata: function(e, t, n, r, o) {
          return e.fold(t, n, r, o)
      }
  }
    , fd = b([])
    , dd = function(t, e, n) {
      if (t.property().isText(e))
          return [ld.text(e, t)];
      if (t.property().isEmptyTag(e))
          return [ld.empty(e, t)];
      if (t.property().isNonEditable(e))
          return [];
      if (t.property().isElement(e)) {
          var r = t.property().children(e)
            , o = t.property().isBoundary(e) ? [ld.boundary(e, t)] : []
            , i = void 0 !== n && n(e) ? [] : W(r, function(e) {
              return dd(t, e, n)
          });
          return o.concat(i).concat(o)
      }
      return []
  }
    , md = dd
    , pd = function(s, e, l, t) {
      return W(td(s, e, t), function(e) {
          var r, n, t, o, i = W(e, function(e) {
              return e.fold(fd, fd, function(e) {
                  return [e]
              }, fd)
          }), a = N(i, s.property().getText).join(""), u = (n = a,
          o = W(l, function(t) {
              return N(function(e, t) {
                  for (var n = t.term(), r = [], o = n.exec(e); o; ) {
                      var i = o.index + t.prefix(o)
                        , a = o[0].length - t.prefix(o) - t.suffix(o);
                      r.push({
                          start: i,
                          finish: i + a
                      }),
                      n.lastIndex = i + a,
                      o = n.exec(e)
                  }
                  return r
              }(n, t.pattern), function(e) {
                  return ue(ue({}, t), e)
              })
          }),
          (t = Array.prototype.slice.call(o, 0)).sort(function(e, t) {
              return e.start < t.start ? -1 : t.start < e.start ? 1 : 0
          }),
          t), c = (r = s,
          ed(i, function(e, t) {
              var n = t + r.property().getText(e).length;
              return re.from(Tf(e, t, n))
          }));
          return Sf(s, c, u)
      })
  }
    , gd = {
      up: b({
          selector: ha,
          closest: ba,
          predicate: pa,
          all: function(e, t) {
              for (var n = g(t) ? t : x, r = e.dom, o = []; null !== r.parentNode && void 0 !== r.parentNode; ) {
                  var i = r.parentNode
                    , a = Jt.fromDom(i);
                  if (o.push(a),
                  !0 === n(a))
                      break;
                  r = i
              }
              return o
          }
      }),
      down: b({
          selector: ei,
          predicate: Ri
      }),
      styles: b({
          get: yu,
          getRaw: bu,
          set: vu,
          remove: wu
      }),
      attrs: b({
          get: At,
          set: St,
          remove: kt,
          copyTo: function(e, t) {
              Ot(t, F(e.dom.attributes, function(e, t) {
                  return e[t.name] = t.value,
                  e
              }, {}))
          }
      }),
      insert: b({
          before: Ta,
          after: Ia,
          afterAll: function(n, r) {
              P(r, function(e, t) {
                  Ia(0 === t ? n : r[t - 1], e)
              })
          },
          append: za,
          appendAll: Aa,
          prepend: Sa,
          wrap: Oa
      }),
      remove: b({
          unwrap: cu,
          remove: _u
      }),
      create: b({
          nu: Jt.fromTag,
          clone: function(e) {
              return Jt.fromDom(e.dom.cloneNode(!1))
          },
          text: Jt.fromText
      }),
      query: b({
          comparePosition: function(e, t) {
              return e.dom.compareDocumentPosition(t.dom)
          },
          prevSibling: Xo,
          nextSibling: Jo
      }),
      property: b({
          children: Zo,
          name: yt,
          parent: Ko,
          document: function(e) {
              return Vo(e).dom
          },
          isText: Gt,
          isComment: wt,
          isElement: Vt,
          isSpecial: function(e) {
              return E(["script", "noscript", "iframe", "noframes", "noembed", "title", "style", "textarea", "xmp"], yt(e))
          },
          getLanguage: function(e) {
              return Vt(e) ? Ct(e, "lang") : re.none()
          },
          getText: Za,
          setText: function(e, t) {
              return Cu.set(e, t)
          },
          isBoundary: function(e) {
              return !!Vt(e) && ("body" === yt(e) || E(xf, yt(e)))
          },
          isEmptyTag: function(e) {
              return !!Vt(e) && E(["br", "img", "hr", "input"], yt(e))
          },
          isNonEditable: function(e) {
              return Vt(e) && "false" === At(e, "contenteditable")
          }
      }),
      eq: $o,
      is: ki
  }
    , vd = /(?:[A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?|www\.|[-;:&=+$,.\w]+@)[A-Za-z\d-]+(?:\.[A-Za-z\d-]+)*(?::\d+)?(?:\/(?:[-+~=.,%()\/\w]*[-+~=%()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?/g.source
    , hd = function(e) {
      var t = e.indexOf("://");
      return 3 <= t && t <= 9
  }
    , yd = function(e, t) {
      return pc(e, t, [wl, Bl])
  }
    , bd = {
      disabled: function() {
          return {
              discriminator: "disabled",
              data: {}
          }
      },
      fromClipboard: function(e) {
          return {
              discriminator: "fromClipboard",
              data: {
                  rtf: e
              }
          }
      }
  }
    , xd = be(bd)
    , wd = bd.disabled
    , Td = bd.fromClipboard
    , Id = function(e, t) {
      var n = new RegExp(t,"i");
      return q(e, function(e) {
          return du(null !== n.exec(e), {
              type: e,
              flavor: t
          })
      })
  }
    , Sd = Ef("event")
    , Od = Ef("html")
    , Ad = Ef("images")
    , Cd = Ef("word")
    , Dd = Ef("text")
    , kd = Ef("void")
    , Ld = _f("event")
    , Ed = _f("html")
    , _d = _f("images")
    , Nd = _f("word")
    , Pd = _f("text")
    , Rd = Di().browser
    , Md = !(Rd.isIE() || Rd.isEdge() && Rd.version.major < 16)
    , Fd = ["^image/", "file"]
    , jd = {
      native: "Outside of Textbox.io pasting HTML5 API (could be internal)",
      fallback: "Outside of Textbox.io pasting offscreen (could be internal)",
      msoffice: "Word Import pasting",
      googledocs: "Google Docs pasting",
      image: "Image pasting",
      plaintext: "Only plain text is available to paste",
      text: "Plain text pasting",
      none: "There is no valid way to paste",
      discard: "There is no valid way to paste, discarding content"
  }
    , Ud = ue({
      getLabelForApi: function(t) {
          return j(be(jd), function(e) {
              return jd[e] === t
          }).fold(b("unknown"), function(e) {
              switch (e) {
              case "native":
              case "fallback":
                  return "html";
              case "none":
              case "discard":
                  return "invalid";
              default:
                  return e
              }
          })
      }
  }, jd)
    , Hd = function(n) {
      var e, r, t = function(e) {
          for (var t = null != r ? r : qt, n = 0; n < e.length && null != t; ++n)
              t = t[e[n]];
          return t
      }("window.clipboardData.files".split(".")), o = v((e = n).convertURL) ? e.convertURL : v(e.msConvertURL) ? e.msConvertURL : void 0;
      if (void 0 !== t && void 0 !== Hd && 0 < t.length) {
          var i = Ue.all(N(t, function(e) {
              var t = URL.createObjectURL(e);
              return o.apply(n, [e, "specified", t]),
              Wt(e, t).toPromise()
          }));
          return re.some(i)
      }
      return re.none()
  };
  function Wd(f) {
      return function(e, s) {
          function l() {
              return Ue.resolve(s)
          }
          function t(e, t) {
              return !1 === f.allowLocalImages ? (P(c = M(Xf(o = e), Zf), _u),
              Ue.resolve({
                  response: 0 < c.length ? (u = M(o, function(e) {
                      return !Tt("img")(e) || !Zf(e)
                  }),
                  kc(u, [], "errors.local.images.disallowed")) : s.response,
                  bundle: s.bundle
              })) : 0 === t.length ? (n = Qf(i = e),
              r = Ue.all(N(n, function(e) {
                  return e.asyncAsset
              })),
              a = N(n, function(e) {
                  return e.image
              }),
              r.then(function(e) {
                  var t, n, r = (t = [],
                  n = [],
                  P(e, function(e) {
                      e.fold(function(e) {
                          t.push(e)
                      }, function(e) {
                          n.push(e)
                      })
                  }),
                  {
                      errors: t,
                      values: n
                  }), o = Vf(r.values, a);
                  return {
                      response: 0 < r.errors.length ? kc(i, o, "errors.imageimport.failed") : Cc(i, o),
                      bundle: s.bundle
                  }
              })) : l();
              var i, n, r, a, o, u, c
          }
          return Vu(s.response, Xu, t, l, t)
      }
  }
  function Bd(t, r, o) {
      return void 0 === o && (o = !1),
      new Ke(function(e) {
          var n = new XMLHttpRequest;
          n.onreadystatechange = function() {
              4 === n.readyState && e({
                  status: n.status,
                  blob: n.response
              })
          }
          ,
          n.open("GET", t, !0),
          n.withCredentials = o,
          se(r, function(e, t) {
              n.setRequestHeader(t, e)
          }),
          n.responseType = "blob",
          n.send()
      }
      )
  }
  function zd(e) {
      var t, n = (t = e,
      "ImageProxy HTTP error: " + j(om, function(e) {
          return t === e.code
      }).fold(b("Unknown ImageProxy error"), function(e) {
          return e.message
      }));
      return Ke.reject(n)
  }
  function $d(t) {
      return j(im, function(e) {
          return e.type === t
      }).fold(b("Unknown service error"), function(e) {
          return e.message
      })
  }
  function qd(e) {
      return r = e,
      new Ke(function(e, t) {
          var n = new FileReader;
          n.onload = function() {
              e(n.result)
          }
          ,
          n.onerror = function(e) {
              t(e)
          }
          ,
          n.readAsText(r)
      }
      ).then(function(e) {
          var t = "ImageProxy Service error: " + function(e) {
              try {
                  return re.some(JSON.parse(e))
              } catch (e) {
                  return re.none()
              }
          }(e).bind(function(e) {
              return t = F(["error", "type"], function(e, t) {
                  return v(e) ? e[t] : void 0
              }, e),
              re.from(t).map($d);
              var t
          }).getOr("Invalid JSON in service error message");
          return Ke.reject(t)
      });
      var r
  }
  function Vd(e) {
      return e < 200 || 300 <= e
  }
  function Gd(e, t, n) {
      return void 0 === n && (n = !1),
      t ? (a = {
          "Content-Type": "application/json;charset=UTF-8",
          "tiny-api-key": t
      },
      Bd((o = t,
      i = -1 === (r = e).indexOf("?") ? "?" : "&",
      /[?&]apiKey=/.test(r) ? r : r + i + "apiKey=" + encodeURIComponent(o)), a).then(function(e) {
          return Vd(e.status) ? (t = e.status,
          "application/json" !== (null == (n = e.blob) ? void 0 : n.type) || 400 !== t && 403 !== t && 404 !== t && 500 !== t ? zd(t) : qd(n)) : Ke.resolve(e.blob);
          var t, n
      })) : Bd(e, {}, n).then(function(e) {
          return Vd(e.status) ? zd(e.status) : Ke.resolve(e.blob)
      });
      var r, o, i, a
  }
  function Kd(e, a) {
      function t() {
          return Ue.resolve({
              response: a.response,
              bundle: a.bundle
          })
      }
      function u(o) {
          return jt(o).then(function(e) {
              var t = ke("image")
                , n = ut(o, e)
                , r = URL.createObjectURL(o);
              return Se.blob(t, n, r)
          })
      }
      function c(e, t) {
          return Se.url(ke("image"), t, e)
      }
      function n(n, r) {
          var o = !1
            , i = W(n, function(e) {
              return ei(e, "img")
          });
          return Ue.all(N(i, function(e) {
              var t = e.dom.src
                , n = $i(t);
              return vt(n.host, "google") && !Bt(n.path, "/drawings/") ? Gd(e.dom.src).then(u, function() {
                  return o = !0,
                  c(e, t)
              }) : c(e, t)
          })).then(function(e) {
              var t = r.concat(Vf(e, i));
              return {
                  response: o ? kc(n, t, "errors.imageimport.failed") : Cc(n, t),
                  bundle: a.bundle
              }
          }, function() {
              return {
                  response: Ac("errors.imageimport.invalid"),
                  bundle: a.bundle
              }
          })
      }
      return Vu(a.response, t, n, t, n)
  }
  function Xd(e) {
      var t = cm(e);
      return t && am(e) || !t && um(e)
  }
  function Jd(e) {
      return e.isInternal.getOr(!1)
  }
  function Yd(e) {
      return cm(e) ? Ts.Word : e.isGoogleDocs.getOr(!1) ? Ts.GoogleDocs : Ts.Html
  }
  function Zd(e, t) {
      var u, r, c, o = (u = e,
      c = (r = t).translations,
      {
          get: function(e) {
              var t = function() {
                  switch (e) {
                  case Ts.Word:
                      return "officeStyles";
                  case Ts.GoogleDocs:
                      return "gdocsStyles";
                  default:
                      return "htmlStyles"
                  }
              }()
                , n = r[t];
              return g(n) ? n().then(function(e) {
                  return s("merge" === e)
              }, function(e) {
                  return console.error(e),
                  s(!1)
              }) : "clean" === n ? Ue.resolve(s(!1)) : "merge" === n ? Ue.resolve(s(!0)) : new Ue(function(e) {
                  var t = Jt.fromTag("div");
                  sa(t, sm("styles-dialog-content"));
                  var n = Jt.fromTag("p");
                  Aa(n, wa(c("cement.dialog.paste.instructions"))),
                  za(t, n);
                  var r = {
                      text: c("cement.dialog.paste.clean"),
                      tabindex: 0,
                      className: sm("clean-styles"),
                      click: function() {
                          i(),
                          e(s(!1))
                      }
                  }
                    , o = {
                      text: c("cement.dialog.paste.merge"),
                      tabindex: 1,
                      className: sm("merge-styles"),
                      click: function() {
                          i(),
                          e(s(!0))
                      }
                  }
                    , i = function() {
                      a.destroy()
                  }
                    , a = u();
                  a.setTitle(c("cement.dialog.paste.title")),
                  a.setContent(t),
                  a.setButtons([r, o]),
                  a.events.close.bind(function() {
                      i(),
                      e(re.none())
                  }),
                  a.show()
              }
              )
          },
          destroy: S
      });
      function s(e) {
          return re.some(Nc(r, {
              officeStyles: e,
              gdocsStyles: e,
              htmlStyles: e
          }))
      }
      return function(e, t) {
          var n = t.bundle
            , r = t.response;
          return o.get(Yd(n)).then(function(e) {
              return e.fold(function() {
                  return {
                      response: Dc(),
                      bundle: t.bundle
                  }
              }, function(e) {
                  return {
                      response: r,
                      bundle: Ec({
                          officeStyles: e.officeStyles,
                          gdocsStyles: e.gdocsStyles,
                          htmlStyles: e.htmlStyles
                      })
                  }
              })
          })
      }
  }
  function Qd(n, r) {
      return function(e, t) {
          return Jd(t.bundle) ? Ue.resolve({
              response: t.response,
              bundle: Ec({
                  officeStyles: !0,
                  gdocsStyles: !0,
                  htmlStyles: !0
              })
          }) : Zd(n, r)(e, t)
      }
  }
  function em(e, t) {
      if (!Pi(e))
          throw new Error("Internal error: attempted to write to an iframe that is not in the DOM");
      var n, r = function(e) {
          var t = e.dom;
          try {
              var n = t.contentWindow ? t.contentWindow.document : t.contentDocument
                , r = Jt.fromDom;
              return null != n ? re.some(r(n)) : re.none()
          } catch (e) {
              return console.log("Error reading iframe: ", t),
              console.log("Error was: " + e),
              re.none()
          }
      }(n = e).getOrThunk(function() {
          return qo(n)
      }).dom;
      r.open("text/html", "replace"),
      r.writeln(t),
      r.close()
  }
  var tm, nm, rm, om = [{
      code: 404,
      message: "Could not find Image Proxy"
  }, {
      code: 403,
      message: "Rejected request"
  }, {
      code: 0,
      message: "Incorrect Image Proxy URL"
  }], im = [{
      type: "not_found",
      message: "Failed to load image."
  }, {
      type: "key_missing",
      message: "The request did not include an api key."
  }, {
      type: "key_not_found",
      message: "The provided api key could not be found."
  }, {
      type: "domain_not_trusted",
      message: "The api key is not valid for the request origins."
  }], am = function(e) {
      return e.officeStyles.getOr(!0)
  }, um = function(e) {
      return e.htmlStyles.getOr(!1)
  }, cm = function(e) {
      return e.isWord.getOr(!1)
  }, sm = ti("ephox-cement").resolve, lm = {}, fm = {
      exports: lm
  };
  function dm(e) {
      return W(e, Fm)
  }
  function mm(e, t, n) {
      function r(e) {
          return -1 !== e.selector.indexOf(",")
      }
      var i, o, a, u = W(M(e, r), function(t) {
          return N(t.selector.split(","), function(e) {
              return {
                  selector: e.trim(),
                  raw: t.raw
              }
          })
      }), c = M(e, function(e) {
          return !r(e)
      }).concat(u);
      c.sort(function(e, t) {
          return Mm.compare(e.selector, t.selector)
      }).reverse(),
      i = t,
      o = n,
      a = W(c, function(o) {
          var e = ei(i, o.selector);
          return P(e, function(e) {
              var t, n, r;
              hu(e, (t = o.raw,
              n = e,
              r = {},
              P(t, function(e) {
                  void 0 !== t[e] && (E(n.dom.style, e) || (r[e] = t[e]))
              }),
              r))
          }),
          e
      }),
      o && P(a, function(e) {
          kt(e, "class")
      })
  }
  function pm(e, t, n, r) {
      mm(dm(Rm(e)).map(function(e) {
          var t = e.selector;
          return {
              selector: n.hasOwnProperty(t) ? n[t] : t,
              raw: e.raw
          }
      }), t, r)
  }
  function gm(e, t, n, r) {
      mm(M(dm(Rm(e)), function(e) {
          return Bt(e.selector, n)
      }), t, r)
  }
  function vm(e, t, n, r) {
      mm(M(dm(Rm(e)), function(e) {
          return E(n, e.selector)
      }), t, r)
  }
  function hm(a) {
      var e, n = (e = Jt.fromDom(document.body),
      {
          play: function(a, u, c) {
              var s = Jt.fromTag("div")
                , l = Jt.fromTag("iframe");
              hu(s, {
                  display: "none"
              });
              var f = Ra(l, "load", function() {
                  var e;
                  f.unbind(),
                  em(l, a);
                  var t = null === (e = l.dom.contentWindow) || void 0 === e ? void 0 : e.document;
                  if (void 0 === t)
                      throw new Error("sandbox iframe load event did not fire correctly");
                  var n = Jt.fromDom(t)
                    , r = n.dom.body;
                  if (void 0 === r)
                      throw new Error("sandbox iframe does not have a body");
                  var o = Jt.fromDom(r)
                    , i = u(n, o);
                  _u(s),
                  setTimeout(A(c, i), 0)
              });
              za(s, l),
              za(e, s)
          }
      });
      return function(t) {
          return new Ue(function(e) {
              n.play(t, function(e, t) {
                  return n = e,
                  r = t,
                  o = {
                      mergeInline: b(a)
                  },
                  (i = o.mergeInline()) && (Um.inlineStyles(n, r, Hm),
                  Gl(r)),
                  Wm(r, i),
                  Tu(t);
                  var n, r, o, i
              }, e)
          }
          )
      }
  }
  function ym(e, t, u, n) {
      function c(e) {
          return {
              response: e,
              bundle: Ec({})
          }
      }
      var r = n.sanitizeHtml(t, "word");
      return hm(e)(r).then(function(e) {
          function t(e) {
              return c(Cc(n, e))
          }
          var n = wa(e)
            , r = Jt.fromTag("div");
          Aa(r, n);
          var o = M(zo("img[src]", r), function(e) {
              return Ct(e, "src").exists(function(e) {
                  return Bt(e, "blob:") || Bt(e, "data:")
              })
          })
            , i = zo("img[data-image-src]", r);
          if (0 === o.length && 0 === i.length)
              return t([]);
          if (u)
              return P(o, function(e) {
                  return kt(e, "id"),
                  0
              }),
              Ue.all(N(o, function(a) {
                  var u = a.dom;
                  return ct(u).then(function(i) {
                      return i.toBlob().then(function(e) {
                          return t = i,
                          n = e,
                          r = Bt(u.src, "blob:") ? u.src : URL.createObjectURL(n),
                          o = ke("image"),
                          $f(Se.blob(o, t, r), a);
                          var t, n, r, o
                      })
                  })
              })).then(t);
          P(o, _u),
          P(i, _u);
          var a = Zo(r);
          return c(kc(a, [], "errors.local.images.disallowed"))
      })
  }
  function bm(e) {
      try {
          var t = e()
            , n = null != t && 0 < t.length ? wa(t) : [];
          return Ji.value(n)
      } catch (e) {
          return console.error("PowerPaste error code: PT01. Message: ", e),
          Ji.error("errors.paste.process.failure")
      }
  }
  function xm(e) {
      return e.fold(Ku, function(e) {
          return {
              response: Cc(e, []),
              bundle: Ec({})
          }
      })
  }
  function wm(u, c, s, l, f) {
      return bm(function() {
          var e, t, n, r, o, i, a = {
              type: l,
              merge: s,
              cleanFilteredInlineElements: null !== (e = f.cleanFilteredInlineElements) && void 0 !== e ? e : [],
              indentUseMargin: null !== (t = f.indentUseMargin) && void 0 !== t && t
          };
          return n = u,
          r = zm,
          i = a,
          kf(o = c),
          pc(n, Tu(o), uf(r, i))
      })
  }
  function Tm(e) {
      function t(e) {
          return {
              response: Cc([e], []),
              bundle: Ec({})
          }
      }
      return r = ei(n = e, "img"),
      Ue.all(N(r, pf)).then(function() {
          return n
      }).then(t).catch(function() {
          return t(e)
      });
      var n, r
  }
  function Im(e, t, n, r, o, i) {
      return wm(e, t, r, n, i).fold(Xu, function(r) {
          return o.then(function(e) {
              var t, o, i, n = (t = e,
              o = [],
              i = W(r, function(e) {
                  return Tt("img")(e) ? [e] : ei(e, "img")
              }),
              P(t, function(r) {
                  Se.cata(r, function(e, t, n) {
                      P(i, function(e) {
                          At(e, "src") === n && o.push($f(r, e))
                      })
                  }, S)
              }),
              o);
              return {
                  response: Cc(r, n),
                  bundle: Ec({})
              }
          })
      })
  }
  function Sm(e) {
      return "\n" === e || "\r" === e
  }
  function Om(e, t) {
      var n, r, o, i, a, u = (n = e,
      (r = Jt.fromTag("div")).dom.textContent = n,
      Tu(r)), c = wa((i = t,
      1 === (o = N(F(a = u.replace(/\t/g, i <= 0 ? "" : new Array(i + 1).join(" ")), function(e, t) {
          return -1 !== " \f\t\v".indexOf(t) || "\xa0" === t ? e.pcIsSpace || "" === e.str || e.str.length === a.length - 1 || (n = e.str.length + 1) < a.length && 0 <= n && Sm(a[n]) ? {
              pcIsSpace: !1,
              str: e.str + "\xa0"
          } : {
              pcIsSpace: !0,
              str: e.str + " "
          } : {
              pcIsSpace: Sm(t),
              str: e.str + t
          };
          var n
      }, {
          pcIsSpace: !1,
          str: ""
      }).str.replace(/^[\r\n]*|[\r\n]*$/g, "").split(/(?:\r?\n){2}/), function(e) {
          return e.split(/\n|\r\n/).join("<br />")
      })).length ? o[0] : N(o, function(e) {
          return "<p>" + e + "</p>"
      }).join("")));
      return Cc(c, [])
  }
  function Am(o) {
      return function(e, t) {
          return n = o,
          {
              response: 0 < (r = Pd(e).getOrDie("Required text input for Text Handler")).text.length ? Om(r.text, n) : Dc(),
              bundle: Ec({})
          };
          var n, r
      }
  }
  function Cm(e, o) {
      function t(e, t) {
          var n = Jt.fromTag("div");
          Aa(n, e),
          kf(n);
          var r = Zo(n);
          return {
              response: Cc(r, t),
              bundle: o.bundle
          }
      }
      var n = b(o);
      return Vu(o.response, n, t, n, t)
  }
  function Dm(u, c, s) {
      return function(e, t) {
          var n, r, o = Ed(e).getOrDie("Wrong input type for HTML handler").container, i = qo(c), a = t.bundle;
          return Jd(a) ? (n = i,
          r = o,
          xm(bm(function() {
              return yd(n, Tu(r))
          }))) : (u(o),
          xm(wm(i, o, Xd(a), Yd(a), s)))
      }
  }
  function km(c, s, l) {
      return function(e, t) {
          var u = t.bundle;
          return u.proxyBin.fold(function() {
              return console.error("There was no proxy bin setup. Ensure you have run proxyStep first."),
              Ue.resolve({
                  response: Dc(),
                  bundle: Ec({})
              })
          }, function(e) {
              var n, t = Xd(u), r = Yd(u), o = Jd(u), i = (n = u,
              new Ue(function(t) {
                  n.backgroundAssets.fold(function() {
                      t([])
                  }, function(e) {
                      e.listen(t)
                  })
              }
              )), a = qo(c);
              return o ? function(e, t, n, r) {
                  var o = Ts.Html
                    , i = t.findClipboardTags(Zo(n)).getOr([]);
                  P(i, _u);
                  var a = Ue.resolve([]);
                  return Im(e, n, o, !0, a, r)
              }(a, s, e, l) : Im(a, e, r, t, i, l)
          })
      }
  }
  function Lm(e, t) {
      return _c
  }
  function Em(r) {
      return function(e, t) {
          var n = Gu(t.bundle, Ec(r));
          return {
              response: t.response,
              bundle: n
          }
      }
  }
  function _m(e, t) {
      return Tm(Ed(e).getOrDie("Wrong input type for HTML handler").container)
  }
  function Nm(e, t) {
      return Js(e, function(e) {
          return Vt(e) && Ct(e, "style").exists(function(e) {
              return -1 < e.indexOf("mso-")
          })
      })
  }
  function Pm(e, t) {
      var n, r = t;
      return 0 <= (n = Tu(e)).indexOf("<o:p>") || r.browser.isEdge() && 0 <= n.indexOf('v:shapes="') || r.browser.isEdge() && 0 <= n.indexOf("mso-") || 0 <= n.indexOf("mso-list") || 0 <= n.indexOf("p.MsoNormal, li.MsoNormal, div.MsoNormal") || 0 <= n.indexOf("MsoListParagraphCxSpFirst") || 0 <= n.indexOf("<w:WordDocument>")
  }
  tm = lm,
  nm = fm,
  rm = void 0,
  function(e) {
      "object" == typeof tm && void 0 !== nm ? nm.exports = e() : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EphoxContactWrapper = e()
  }(function() {
      return function i(a, u, c) {
          function s(t, e) {
              if (!u[t]) {
                  if (!a[t]) {
                      var n = "function" == typeof rm;
                      if (!e && n)
                          return n(t, !0);
                      if (l)
                          return l(t, !0);
                      var r = new Error("Cannot find module '" + t + "'");
                      throw r.code = "MODULE_NOT_FOUND",
                      r
                  }
                  var o = u[t] = {
                      exports: {}
                  };
                  a[t][0].call(o.exports, function(e) {
                      return s(a[t][1][e] || e)
                  }, o, o.exports, i, a, u, c)
              }
              return u[t].exports
          }
          for (var l = "function" == typeof rm, e = 0; e < c.length; e++)
              s(c[e]);
          return s
      }({
          1: [function(e, t, n) {
              var r, a, o = (r = function(e) {
                  for (var t, n = [], r = e.split(","), o = 0, i = r.length; o < i; o += 1)
                      0 < (t = r[o]).length && n.push(a(t));
                  return n
              }
              ,
              a = function(c) {
                  var e, t, s = c, l = {
                      a: 0,
                      b: 0,
                      c: 0
                  }, f = [];
                  function n(e) {
                      var t, n, r, o;
                      if (e.test(s))
                          for (n = 0,
                          r = (t = s.match(e)).length; n < r; n += 1)
                              o = t[n],
                              s = s.replace(o, Array(o.length + 1).join("A"))
                  }
                  return e = function(e, t) {
                      var n, r, o, i, a, u;
                      if (e.test(s))
                          for (r = 0,
                          o = (n = s.match(e)).length; r < o; r += 1)
                              l[t] += 1,
                              i = n[r],
                              a = s.indexOf(i),
                              u = i.length,
                              f.push({
                                  selector: c.substr(a, u),
                                  type: t,
                                  index: a,
                                  length: u
                              }),
                              s = s.replace(i, Array(u + 1).join(" "))
                  }
                  ,
                  n(/\\[0-9A-Fa-f]{6}\s?/g),
                  n(/\\[0-9A-Fa-f]{1,5}\s/g),
                  n(/\\./g),
                  (t = /:not\(([^\)]*)\)/g).test(s) && (s = s.replace(t, "     $1 ")),
                  function() {
                      var e, t, n, r, o = /{[^]*/gm;
                      if (o.test(s))
                          for (t = 0,
                          n = (e = s.match(o)).length; t < n; t += 1)
                              r = e[t],
                              s = s.replace(r, Array(r.length + 1).join(" "))
                  }(),
                  e(/(\[[^\]]+\])/g, "b"),
                  e(/(#[^\#\s\+>~\.\[:]+)/g, "a"),
                  e(/(\.[^\s\+>~\.\[:]+)/g, "b"),
                  e(/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, "c"),
                  e(/(:[\w-]+\([^\)]*\))/gi, "b"),
                  e(/(:[^\s\+>~\.\[:]+)/g, "b"),
                  s = (s = s.replace(/[\*\s\+>~]/g, " ")).replace(/[#\.]/g, " "),
                  e(/([^\s\+>~\.\[:]+)/g, "c"),
                  f.sort(function(e, t) {
                      return e.index - t.index
                  }),
                  {
                      selector: c,
                      specificity: "0," + l.a.toString() + "," + l.b.toString() + "," + l.c.toString(),
                      specificityArray: [0, l.a, l.b, l.c],
                      parts: f
                  }
              }
              ,
              {
                  calculate: r,
                  compare: function(e, t) {
                      var n, r, o;
                      if ("string" == typeof e) {
                          if (-1 !== e.indexOf(","))
                              throw "Invalid CSS selector";
                          n = a(e).specificityArray
                      } else {
                          if (!Array.isArray(e))
                              throw "Invalid CSS selector or specificity array";
                          if (4 !== e.filter(function(e) {
                              return "number" == typeof e
                          }).length)
                              throw "Invalid specificity array";
                          n = e
                      }
                      if ("string" == typeof t) {
                          if (-1 !== t.indexOf(","))
                              throw "Invalid CSS selector";
                          r = a(t).specificityArray
                      } else {
                          if (!Array.isArray(t))
                              throw "Invalid CSS selector or specificity array";
                          if (4 !== t.filter(function(e) {
                              return "number" == typeof e
                          }).length)
                              throw "Invalid specificity array";
                          r = t
                      }
                      for (o = 0; o < 4; o += 1) {
                          if (n[o] < r[o])
                              return -1;
                          if (n[o] > r[o])
                              return 1
                      }
                      return 0
                  }
              });
              void 0 !== n && (n.calculate = o.calculate,
              n.compare = o.compare)
          }
          , {}],
          2: [function(e, t, n) {
              var r = e("specificity");
              t.exports = {
                  boltExport: r
              }
          }
          , {
              specificity: 1
          }]
      }, {}, [2])(2)
  });
  function Rm(e) {
      var t = e.dom.styleSheets;
      return Array.prototype.slice.call(t)
  }
  var Mm = fm.exports.boltExport
    , Fm = function(e) {
      return W(e.cssRules, function(e) {
          return e.type === window.CSSRule.IMPORT_RULE ? Fm(e.styleSheet) : e.type === window.CSSRule.STYLE_RULE ? [function(e) {
              var t = e.selectorText
                , n = e.style.cssText;
              if (void 0 === n)
                  throw new Error("WARNING: Browser does not support cssText property");
              return {
                  selector: t,
                  style: n,
                  raw: e.style
              }
          }(e)] : []
      })
  }
    , jm = {
      inlineStyles: function(e, t, n) {
          pm(e, t, n, !0)
      },
      inlineStylesKeepClasses: function(e, t, n) {
          pm(e, t, n, !1)
      },
      inlinePrefixedStyles: function(e, t, n) {
          gm(e, t, n, !0)
      },
      inlinePrefixedStylesKeepClasses: function(e, t, n) {
          gm(e, t, n, !1)
      },
      inlineSelectorsStyles: function(e, t, n) {
          vm(e, t, n, !0)
      },
      inlineSelectorsStylesKeepClasses: function(e, t, n) {
          vm(e, t, n, !1)
      }
  }
    , Um = {
      inlineStyles: jm.inlineStyles,
      inlineStylesKeepClasses: jm.inlineStylesKeepClasses,
      inlinePrefixedStyles: jm.inlinePrefixedStyles,
      inlinePrefixedStylesKeepClasses: jm.inlinePrefixedStylesKeepClasses,
      inlineSelectorsStyles: jm.inlineSelectorsStyles,
      inlineSelectorsStylesKeepClasses: jm.inlineSelectorsStylesKeepClasses
  }
    , Hm = {
      p: "p, li[data-converted-paragraph]"
  }
    , Wm = function(s, e) {
      P(ei(s, "li[data-converted-paragraph]"), function(e) {
          kt(e, "data-converted-paragraph")
      }),
      e && (P(ei(s, "li"), function(e) {
          var t, n, r, o, i, a = (Sa(s, o = Jt.fromTag("span")),
          i = o,
          {
              convertToPx: function(e) {
                  var t;
                  return vu(i, "margin-left", e),
                  t = yu(i, "margin-left"),
                  parseFloat(/-?\d+\.?\d*/.exec(t)[0])
              },
              destroy: function() {
                  return _u(i)
              }
          }), u = (t = a,
          n = Ct(s, "data-tab-interval").getOr("36pt"),
          t.convertToPx(n)), c = Bm(e, u, a).getOr({});
          kt(r = e, "data-list-level"),
          kt(r, "data-text-indent-alt"),
          kt(r, "data-border-margin"),
          wu(r, "margin-left"),
          wu(r, "text-indent"),
          se(xu(r), function(e, t) {
              !Bt(t, "border") || "border-image" !== t && "none" !== e.trim() && "initial" !== e.trim() || wu(r, t)
          }),
          a.destroy(),
          hu(e, c)
      }),
      P(ei(s, "ol,ul"), function(t) {
          var e = ei(t, "li");
          bu(t, "margin-top").isNone() && re.from(e[0]).each(function(e) {
              vu(t, "margin-top", yu(e, "margin-top"))
          }),
          bu(t, "margin-bottom").isNone() && re.from(e[e.length - 1]).each(function(e) {
              vu(t, "margin-bottom", yu(e, "margin-bottom"))
          })
      })),
      kt(s, "data-tab-interval")
  }
    , Bm = function(d, m, p) {
      function g(e) {
          return Ct(e, "data-list-level").map(function(e) {
              return parseInt(e, 10)
          }).getOr(1)
      }
      return bu(d, "text-indent").bind(function(f) {
          return bu(d, "margin-left").map(function(e) {
              var t = bu(d, "list-style").exists(function(e) {
                  return vt(e, "none")
              })
                , n = Ct(d, "data-border-margin").getOr("0px")
                , r = t ? g(d) + 1 : g(d)
                , o = p.convertToPx(e) + p.convertToPx(n)
                , i = m * r
                , a = Ct(d, "data-text-indent-alt").getOr(f)
                , u = p.convertToPx(a)
                , c = {}
                , s = m / 2 * -1 - u;
              0 < s && (c["text-indent"] = s + "px");
              var l = o - i - s;
              return c["margin-left"] = 0 < l ? l + "px" : "0px",
              c
          })
      })
  }
    , zm = Di()
    , $m = b(sm("smartpaste-eph-bin"))
    , qm = Di();
  function Vm(e, t, n) {
      return t.indexOf(e, n)
  }
  function Gm(e, t, n, r, o, i, a) {
      return -1 === e || -1 === t ? re.none() : re.some({
          start: e,
          end: t,
          bower: n,
          regex: r,
          idRef: o,
          isEquation: i,
          attrs: a
      })
  }
  function Km(e, t, n) {
      return e.substring(t, n)
  }
  function Xm(e, t) {
      if (-1 === t)
          return t;
      var n = 0
        , r = e.length;
      do {
          var o = e.indexOf("{", t)
            , i = e.indexOf("}", t);
          if (o < i && -1 !== o ? (t = o + 1,
          ++n) : (i < o || o < 0) && -1 !== i && (t = i + 1,
          --n),
          r < t || -1 === i)
              return -1
      } while (0 < n);
      return t
  }
  function Jm(e, t, n, r, o) {
      var i, a, u;
      return Gm(n, r, Km(e, n, r), /[^a-fA-F0-9]([a-fA-F0-9]+)\}$/, "i", o, (a = Vm("\\picscalex", i = e, n),
      u = Vm("\\bliptag", i, a),
      -1 < a && a < u ? re.from(i.substring(a, u)) : re.none()))
  }
  function Ym(e, t, n, r, o) {
      return Gm(n, r, Km(e, n, r), /([a-fA-F0-9]{64,})(?:\}.*)/, "s", o, re.none())
  }
  function Zm(e) {
      for (var c = [], t = function() {
          return e.length
      }, n = function(e) {
          var r, o, i, a, u, t, n = (o = (r = e).bower,
          i = r.regex,
          a = r.isEquation,
          u = r.attrs,
          (null !== (t = /\\shplid(\d+)/.exec(o)) ? re.some(t[1]) : re.none()).map(function(e) {
              var t, n = r.idRef + e;
              return (0 <= (t = o).indexOf("\\pngblip") ? Ji.value("image/png") : 0 <= t.indexOf("\\jpegblip") ? Ji.value("image/jpeg") : Ji.error("errors.imageimport.unsupported")).fold(function(e) {
                  return up.unsupported(n, e, a, u)
              }, function(t) {
                  return ((e = o.match(i)) && e[1] && e[1].length % 2 == 0 ? Ji.value(e[1]) : Ji.error("errors.imageimport.invalid")).fold(function(e) {
                      return up.unsupported(n, e, a, u)
                  }, function(e) {
                      return up.supported(n, t, function(e, t) {
                          if (0 === e.length)
                              throw new Error("Zero length content passed to Hex conversion");
                          var n = function(e) {
                              for (var t = new Array(e.length / 2), n = 0; n < e.length; n += 2) {
                                  var r = e.substr(n, 2);
                                  t[Math.floor(n / 2)] = parseInt(r, 16)
                              }
                              return t
                          }(e)
                            , r = new Uint8Array(n);
                          return new Blob([r],{
                              type: t
                          })
                      }(e, t), a, u)
                  });
                  var e
              })
          }));
          return c = c.concat(n.toArray()),
          e.end
      }, r = 0; r < e.length; )
          r = cp(e, r).fold(t, n);
      return c
  }
  function Qm(e) {
      return up.cata(e, function(e, t, n) {
          return e
      }, function(e, t, n, r, o) {
          return e
      })
  }
  function ep(e) {
      return up.cata(e, function(e, t, n) {
          return n
      }, function(e, t, n, r, o) {
          return r
      })
  }
  function tp(e) {
      return up.cata(e, function(e, t, n) {
          return Ji.error(t)
      }, function(e, t, n, r, o) {
          return Ji.value(n)
      })
  }
  function np(e, t) {
      var n = new RegExp("\\\\pic" + t + "(\\-?\\d+)\\\\").exec(e)[1];
      return parseInt(n, 10)
  }
  function rp(e, t, i, a, u) {
      var c = []
        , s = []
        , l = !1;
      return {
          blobs: W(e, function(n, r) {
              var o = At(n, "data-image-id");
              return kt(n, "rtf-data-image"),
              kt(n, "data-image-id"),
              kt(n, "data-ms-equation"),
              u || kt(n, "data-image-src"),
              "unsupported" === o ? (l = !0,
              St(n, "alt", i("errors.imageimport.unsupported")),
              []) : j(t, function(e, t) {
                  return a(e, t, o, r)
              }).fold(function() {
                  return console.log("WARNING: unable to find data for image ", n.dom),
                  l = !0,
                  St(n, "alt", i("errors.imageimport.unsupported")),
                  []
              }, function(t) {
                  return tp(t).fold(function(e) {
                      return l = !0,
                      console.error("PowerPaste error code: RTF04"),
                      St(n, "alt", i(e)),
                      []
                  }, function(e) {
                      return c.push(n),
                      s.push(up.cata(t, function(e, t, n) {
                          return re.none()
                      }, function(e, t, n, r, o) {
                          return o
                      })),
                      u && kt(n, "data-image-src"),
                      [e]
                  })
              })
          }),
          filteredImages: c,
          imageAttrs: s,
          failedImage: l
      }
  }
  function op(e, t, r, n, o) {
      var i = F(t, function(t, n) {
          var r = Qm(n)
            , o = ep(n);
          return U(t, function(e) {
              return !o && !ep(e) && Qm(e) === r
          }).fold(function() {
              return t.concat([n])
          }, function(e) {
              return tp(t[e]).isValue() ? t : t.slice(0, e).concat(t.slice(e + 1)).concat([n])
          })
      }, [])
        , a = o.keepSrc || !1
        , u = R(i, function(e) {
          return !ep(e)
      })
        , c = u.pass
        , s = u.fail
        , l = R(e, function(e) {
          return "true" !== At(e, "data-ms-equation")
      })
        , f = l.pass
        , d = l.fail
        , m = rp(f, c, n, function(e, t, n, r) {
          return Qm(e) === n
      }, a)
        , p = rp(d, s, n, function(e, t, n, r) {
          return t === r
      }, a)
        , g = m.filteredImages.concat(p.filteredImages)
        , v = m.imageAttrs.concat(p.imageAttrs)
        , h = m.blobs.concat(p.blobs)
        , y = m.failedImage || p.failedImage;
      dt(h).get(function(e) {
          var t, n = v;
          ((t = e).length === n.length ? Ue.all(N(t, function(e, t) {
              return y = e,
              n[t].fold(function() {
                  return Ue.resolve(y)
              }, function(h) {
                  return Se.cata(y, function(p, g, v) {
                      return g.toCanvas().then(function(e) {
                          var t, n, r, o, i, a, u, c, s, l = Jt.fromDom(e), f = Ct(l, "width").map(function(e) {
                              return parseInt(e, 10)
                          }).getOr(1), d = Ct(l, "height").map(function(e) {
                              return parseInt(e, 10)
                          }).getOr(1), m = (t = f,
                          n = d,
                          a = (o = (r = A(np, h))("wgoal")) / t,
                          u = (i = r("hgoal")) / n,
                          {
                              cropl: (c = r("cropl")) / a,
                              cropt: (s = r("cropt")) / u,
                              cropw: (o - c - r("cropr")) / a,
                              croph: (i - s - r("cropb")) / u
                          });
                          return f === m.cropw && d === m.croph && 0 === m.cropl && 0 === m.cropt ? Ue.resolve(y) : sf(g, m.cropl, m.cropt, m.cropw, m.croph).then(function(n) {
                              return n.toBlob().then(function(e) {
                                  URL.revokeObjectURL(v);
                                  var t = URL.createObjectURL(e);
                                  return Se.blob(p, n, t)
                              })
                          })
                      })
                  }, function(e, t, n) {
                      return Ue.resolve(y)
                  })
              });
              var y
          })) : Ue.resolve(t)).then(function(e) {
              var t = Vf(e, g);
              r(t, y)
          })
      })
  }
  function ip(e) {
      return ei(e, "[rtf-data-image]")
  }
  var ap = ge([{
      unsupported: ["id", "message", "isEquation", "attrs"]
  }, {
      supported: ["id", "contentType", "blob", "isEquation", "attrs"]
  }])
    , up = {
      unsupported: ap.unsupported,
      supported: ap.supported,
      cata: function(e, t, n) {
          return e.fold(t, n)
      }
  }
    , cp = function(e, t) {
      var n = Vm("{\\pict{", e, t)
        , r = Xm(e, n)
        , o = Vm("{\\shp{", e, t)
        , i = Xm(e, o)
        , a = Vm("{\\mmathPict{", e, t)
        , u = Xm(e, a)
        , c = -1 !== a && (a < n && r < u || a < o && i < u)
        , s = A(Ym, e, t, o, i, c)
        , l = A(Jm, e, t, n, r, c);
      return -1 === n && -1 === o ? re.none() : -1 === n ? s() : -1 === o || o < n && r < i ? l() : n < o && i < r ? s() : n < o ? l() : o < n ? s() : re.none()
  }
    , sp = function(e) {
      return Zm(e.replace(/\r/g, "").replace(/\n/g, ""))
  };
  function lp(s) {
      return function(u, c) {
          return new Ue(function(t, e) {
              function o(e) {
                  return t({
                      response: e,
                      bundle: Ec({})
                  })
              }
              var r, a, i = (r = s.translations,
              {
                  events: (a = Mo({
                      insert: Ro(["elements", "correlated"]),
                      incomplete: Ro(["elements", "correlated", "message"])
                  })).registry,
                  processRtf: function(o, i, e, t) {
                      var n = sp(e);
                      op(ip(o), n, function(e, t) {
                          var n = Zo(o)
                            , r = e.concat(i);
                          t ? (console.error("PowerPaste error code: RTF01"),
                          a.trigger.incomplete(n, r, "errors.imageimport.failed")) : a.trigger.insert(n, r)
                      }, r, t)
                  }
              });
              function n(t) {
                  function e() {
                      return Ue.resolve(c)
                  }
                  function n(e, n) {
                      var r = Jt.fromTag("div");
                      return Aa(r, e),
                      t.fold(function() {
                          var e, t = ip(r);
                          return 0 < t.length ? function() {
                              P(t, _u);
                              var e = Zo(r);
                              return console.error("PowerPaste error code: RTF03"),
                              o(kc(e, n, "errors.imageimport.failed"))
                          }() : (e = Zo(r),
                          o(Cc(e, n)))
                      }, function(e) {
                          i.processRtf(r, n, e, s)
                      })
                  }
                  return Vu(c.response, e, n, e, n)
              }
              i.events.insert.bind(function(e) {
                  o(Cc(e.elements, e.correlated))
              }),
              i.events.incomplete.bind(function(e) {
                  console.error("PowerPaste error code: RTF02"),
                  o(kc(e.elements, e.correlated, e.message))
              }),
              function(t, n) {
                  var e = be(n);
                  if (e.length !== xd.length)
                      throw new Error("Partial match");
                  q(e, function(e) {
                      return du(t.discriminator === e, n[e])
                  }).getOrDie("Must find branch for constructor: " + t.discriminator)(t.data)
              }(Nd(u).getOrDie("Word input required for rtf data").rtf, {
                  disabled: function() {
                      n(re.none())
                  },
                  fromClipboard: function(e) {
                      n(!0 === s.allowLocalImages ? re.some(e.rtf) : re.none())
                  }
              })
          }
          )
      }
  }
  function fp(r) {
      function o() {
          return Ue.resolve(r)
      }
      return Se.cata(r.asset, function(e, t, n) {
          return /tiff$/.test(t.getType()) ? st(t, "image/png").then(function(e) {
              return ft(e).toPromise()
          }).then(re.some).catch(function(e) {
              return console.warn(e),
              re.none()
          }).then(function(e) {
              return e.map(function(e) {
                  var t = r.image;
                  return URL.revokeObjectURL(n),
                  qf(e, t),
                  $f(e, t)
              }).getOr(r)
          }) : o()
      }, o)
  }
  function dp(e, n) {
      function r(e, t) {
          return Ue.all(N(e, fp)).then(function(e) {
              return {
                  response: t(e),
                  bundle: n.bundle
              }
          })
      }
      return Vu(n.response, Xu, function(t, e) {
          return r(e, function(e) {
              return Cc(t, e)
          })
      }, function() {
          return Ue.resolve(n)
      }, function(t, e, n) {
          return r(e, function(e) {
              return console.error("PowerPaste error code:  IMG01"),
              kc(t, e, n)
          })
      })
  }
  function mp(e, t) {
      return e.isSupported ? t.getWordData() : re.none()
  }
  function pp(e) {
      return e.getNative()
  }
  function gp(e) {
      return e.getImage()
  }
  function vp(e) {
      return e.getHtml()
  }
  function hp(e) {
      return e.getText()
  }
  function yp(e) {
      return e.getOnlyText()
  }
  function bp(e) {
      return e.getGoogleDocsData()
  }
  function xp(e) {
      return e.getVoid()
  }
  function wp(e, t, n, r) {
      return {
          label: e,
          getAvailable: t,
          steps: n,
          capture: b(r)
      }
  }
  function Tp(e, t, n, r) {
      return {
          label: e,
          getAvailable: t,
          steps: n,
          capture: b(r)
      }
  }
  function Ip(e, t, n) {
      return wp(Ud.msoffice, A(mp, e), [Em({
          isWord: !0
      }), Zd(t, n), (u = e,
      function(e, t) {
          var n, r, o, i = Nd(e).getOrDie("Wrong input type for Word Import handler"), a = am(t.bundle);
          return n = a,
          r = c,
          o = i.html,
          u.cleanDocument(o, n, r).then(function(e) {
              if (null == e || 0 === e.length)
                  return {
                      response: Cc([], []),
                      bundle: Ec({})
                  };
              var t = void 0 === r.sanitizer ? $n(r.intraFlag.isMarked) : r.sanitizer;
              return ym(n, e, r.allowLocalImages, t)
          }, function(e) {
              return console.error("PowerPaste error code: WIM01"),
              {
                  response: Ac("errors.paste.process.failure"),
                  bundle: Ec({})
              }
          })
      }
      ), lp(c = n), dp], !0);
      var u, c
  }
  function Sp(e) {
      return wp(Ud.image, gp, [!1 === e.allowLocalImages ? function(e, t) {
          return Xu("errors.local.images.disallowed")
      }
      : function(e, t) {
          var n = _d(e).getOrDie("Must have image data for images handler");
          return dt(F(M(n.images, function(e) {
              return "file" === e.kind && /image/.test(e.type)
          }), function(e, t) {
              var n = t.getAsFile();
              return null !== n ? e.concat(n) : e
          }, [])).toPromise().then(function(e) {
              var i, a;
              return {
                  response: (i = [],
                  a = [],
                  P(e, function(o) {
                      return Se.cata(o, function(e, t, n) {
                          var r = Jt.fromTag("img");
                          St(r, "src", n),
                          i.push(r),
                          a.push($f(o, r))
                      }, function(e, t, n) {
                          console.error("Internal error: Paste operation produced an image URL instead of a Data URI: ", t)
                      })
                  }),
                  Cc(i, a)),
                  bundle: Ec({})
              }
          })
      }
      , dp], !0)
  }
  function Op(e) {
      return wp(Ud.text, hp, [Am(e = void 0 === e ? 4 : e), Cm], !0)
  }
  function Ap(e, t, n, r, o) {
      var i, a, m, u, p, c, s, l = Ja(o = void 0 === o ? Sc : o, r.baseUrl, r.cacheSuffix), f = $u(void 0 !== r.pasteBinAttrs ? r.pasteBinAttrs : {}), d = void 0 === r.sanitizer ? $n(r.intraFlag.isMarked) : r.sanitizer, g = Di().browser.isIE();
      return Bf(ce([(i = re.from(r.tabSpaces).getOr(4),
      wp(Ud.plaintext, yp, [Am(i), Cm], !0)), Ip(l, t, r), wp(Ud.googledocs, bp, [Em({
          isGoogleDocs: !0
      }), Zd(t, r), _m, Dm(n, e, r), Kd, Wd(r), dp], !0), wp(Ud.native, vp, [(s = r.intraFlag,
      function(e, t) {
          var n = Ed(e).getOrDie("Wrong input type for HTML handler")
            , r = s.findClipboardTags(Zo(n.container));
          r.each(function(e) {
              P(e, _u)
          });
          var o = r.isSome();
          return {
              response: t.response,
              bundle: Ec({
                  isInternal: o
              })
          }
      }
      ), Qd(t, r), Dm(n, e, r), Wd(r), dp], !0), Sp(r)], g ? [] : [Op(r.tabSpaces)]), Tp(Ud.fallback, pp, [(a = f,
      m = n,
      u = e,
      p = r.intraFlag,
      c = zf,
      function(e, t) {
          var n = Ld(e).getOrDie("Must pass through event type").nativeEvent
            , f = c()
            , d = t.response;
          return new Ue(function(l, e) {
              var t = a(u);
              t.events.after.bind(function(e) {
                  var t, n, r, o, i, a, u, c, s = e.container;
                  qm.browser.isSafari() && ya(s, 'img[src^="webkit-fake-url"]').isSome() ? (t = qm.deviceType.isWebView() ? "webview.imagepaste" : "safari.imagepaste",
                  l({
                      response: Ac(t),
                      bundle: Ec({})
                  })) : (m(s),
                  sa(s, $m()),
                  u = s,
                  n = ((c = (a = qm).browser).isIE() && 11 <= c.version.major ? Nm : Pm)(u, a),
                  r = _(ei(s, "*[id]"), function(e) {
                      return Ct(e, "id").exists(function(e) {
                          return Bt(e, "docs-internal-guid-")
                      })
                  }),
                  o = Zo(s),
                  i = p.findClipboardTags(o).isSome(),
                  l({
                      response: d,
                      bundle: Ec({
                          isWord: n,
                          isGoogleDocs: r,
                          isInternal: i,
                          proxyBin: s,
                          backgroundAssets: f
                      })
                  }))
              }),
              f.convert(n),
              t.run()
          }
          )
      }
      ), Qd(t, r), km(e, r.intraFlag, r), Wd(r), dp], !1), d)
  }
  function Cp() {
      var n = {}
        , u = {};
      tinymce.Resource = {
          add: function(e, t) {
              u[e] && (u[e](t),
              delete u[e]),
              n[e] = Ue.resolve(t)
          },
          load: function(r, o) {
              var i = 'Script at URL "' + o + '" failed to load'
                , a = 'Script at URL "' + o + "\" did not call `tinymce.Resource.add('" + r + "', data)` within 1 second";
              if (void 0 !== n[r])
                  return n[r];
              var e = new Ue(function(e, t) {
                  var n = function(e, t, n) {
                      function r(n) {
                          return function() {
                              for (var e = [], t = 0; t < arguments.length; t++)
                                  e[t] = arguments[t];
                              o || (o = !0,
                              null !== i && (clearTimeout(i),
                              i = null),
                              n.apply(void 0, e))
                          }
                      }
                      void 0 === n && (n = 1e3);
                      var o = !1
                        , i = null
                        , a = r(e)
                        , u = r(t);
                      return {
                          reject: u,
                          resolve: a,
                          start: function() {
                              for (var e = [], t = 0; t < arguments.length; t++)
                                  e[t] = arguments[t];
                              o || (i = setTimeout(function() {
                                  return u.apply(void 0, e)
                              }, n))
                          }
                      }
                  }(e, t);
                  u[r] = n.resolve,
                  tinymce.ScriptLoader.loadScripts([o], function() {
                      return n.start(a)
                  }, function() {
                      return n.reject(i)
                  })
              }
              );
              return n[r] = e
          }
      }
  }
  function Dp(e, t, n, r) {
      !function(e, t, n) {
          if (!1 === tinymce.Env.iOS && "function" == typeof (null == e ? void 0 : e.setData))
              try {
                  return e.clearData(),
                  e.setData("text/html", t),
                  e.setData("text/plain", n),
                  e.setData(Ar(), t),
                  1
              } catch (e) {
                  return
              }
      }(e.clipboardData, t.html, t.text) ? n(t.html, r) : (e.preventDefault(),
      r())
  }
  function kp(a) {
      return function(e, t) {
          var n = a.dom.create("div", {
              contenteditable: "false",
              "data-mce-bogus": "all"
          })
            , r = a.dom.create("div", {
              contenteditable: "true",
              "data-mce-bogus": "all"
          }, e);
          a.dom.setStyles(n, {
              position: "fixed",
              top: "50%",
              left: "-3000px",
              width: "1000px",
              overflow: "hidden"
          }),
          n.appendChild(r),
          a.dom.add(a.getBody(), n);
          var o = a.selection.getRng();
          r.focus();
          var i = a.dom.createRng();
          i.selectNodeContents(r),
          a.selection.setRng(i),
          setTimeout(function() {
              var e;
              a.selection.setRng(o),
              null !== (e = n.parentNode) && void 0 !== e && e.removeChild(n),
              t()
          }, 0)
      }
  }
  function Lp(e) {
      var t = e.selection.getContent({
          contextual: !0
      }).replace(/ contenteditable="([^"]+)"/g, ' data-mce-contenteditable="$1"');
      return {
          html: Cr + t,
          text: e.selection.getContent({
              format: "text"
          })
      }
  }
  function Ep(e) {
      return !e.selection.isCollapsed() || null !== (t = e).dom.getParent(t.selection.getStart(), "td[data-mce-selected],th[data-mce-selected]", t.getBody());
      var t
  }
  function _p(e) {
      return /^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e)
  }
  function Np(n) {
      var e = /^<a href="([^"]+)">([^<]+)<\/a>$/.exec(n);
      return re.from(e).bind(function(e) {
          var t = {
              url: e[1],
              html: n
          };
          return du(e[1] === e[2], t)
      })
  }
  function Pp(e, t, n) {
      return "extra"in e.undoManager ? (e.undoManager.extra(function() {
          Bp(e, t)
      }, n),
      re.some(!0)) : re.none()
  }
  function Rp(r, e) {
      return Np(e).bind(function(e) {
          var t, n;
          return !1 === r.selection.isCollapsed() && _p(e.url) ? Pp(t = r, (n = e).html, function() {
              t.execCommand("mceInsertLink", !1, n.url)
          }) : re.none()
      })
  }
  function Mp(a, e) {
      return Np(e).bind(function(e) {
          return r = e.url,
          o = ee(a),
          _p(i = r.toLowerCase()) && _(o, function(e) {
              return zt(i, "." + e.toLowerCase())
          }) ? Pp(t = a, (n = e).html, function() {
              t.insertContent('<img src="' + n.url + '">')
          }) : re.none();
          var t, n, r, o, i
      })
  }
  function Fp(m, p, e, t, g, v) {
      function h(e, t, n) {
          var r, o = e.getParam("smart_paste", !0, "boolean") ? [Rp, Mp] : [], i = e, a = t;
          q(o.concat([(r = n,
          function(e, t) {
              return e.undoManager.transact(function() {
                  Bp(e, t),
                  P(N(e.getBody().getElementsByTagName("*"), Jt.fromDom), function(t) {
                      Dt(t, "data-mce-style") && !Dt(t, "style") && Ct(t, "data-mce-style").each(function(e) {
                          return St(t, "style", e)
                      })
                  }),
                  g.prepareImages(r)
              }),
              re.some(!0)
          }
          )]), function(e) {
              return e(i, a)
          })
      }
      function y() {
          x.on(function(e) {
              return m.selection.moveToBookmark(e)
          }),
          x.clear()
      }
      var b = _a(function(e) {
          return e.unbind()
      })
        , x = Na()
        , w = (t ? t.jsUrl : e).replace(/\/$/, "") + "/" + "/js".replace(/^\//, "")
        , T = Gn(m)
        , I = m.getParam("paste_tab_spaces", 4, "number");
      m.on("init", function() {
          var e, c, t, s, n = {
              baseUrl: w,
              cacheSuffix: m.getParam("cache_suffix"),
              officeStyles: Y(m),
              htmlStyles: Z(m),
              gdocsStyles: G(m, "powerpaste_googledocs_import", "prompt"),
              translations: Et,
              allowLocalImages: m.getParam("powerpaste_allow_local_images", !0, "boolean"),
              pasteBinAttrs: {
                  "data-mce-bogus": "all",
                  class: "mce-pastebin"
              },
              intraFlag: {
                  isMarked: qn,
                  findClipboardTags: function(e) {
                      var t = M(e, function(e) {
                          return wt(e) && vt(Fa(e), Ar())
                      });
                      return t.length ? re.some(t) : re.none()
                  }
              },
              keepSrc: m.getParam("powerpaste_keep_unsupported_src", !1, "boolean"),
              cleanFilteredInlineElements: (e = m.getParam("powerpaste_clean_filtered_inline_elements"),
              O(e) ? N(e.split(","), function(e) {
                  return e.trim()
              }) : []),
              indentUseMargin: m.getParam("indent_use_margin", !1),
              sanitizer: T,
              tabSpaces: I
          }, r = v ? (s = m,
          {
              createDialog: function() {
                  function r() {
                      e.trigger.close()
                  }
                  var o, i, a = "", t = Na(), u = (o = Ea([{
                      text: "Close",
                      name: "close",
                      type: "custom",
                      primary: !0
                  }]),
                  i = Ea({}),
                  {
                      setButtons: function(e) {
                          var n = {}
                            , t = N(e, function(e) {
                              var t = e.text;
                              return n[t.toLowerCase()] = e.click,
                              {
                                  text: t,
                                  name: t.toLowerCase(),
                                  type: "custom"
                              }
                          });
                          i.set(n),
                          o.set(t)
                      },
                      getButtons: o.get,
                      getAction: function(e) {
                          var t = i.get();
                          return Te(t, e) ? re.some(t[e]) : re.none()
                      }
                  }), e = Mo({
                      close: Ro([])
                  });
                  return {
                      events: e.registry,
                      setTitle: function(e) {
                          return a = e
                      },
                      setContent: function(e) {
                          return t.set(e)
                      },
                      setButtons: function(e) {
                          u.setButtons(e)
                      },
                      show: function() {
                          t.on(function(e) {
                              var t = Kn(e.dom)
                                , n = {
                                  title: a,
                                  body: {
                                      type: "panel",
                                      items: [{
                                          type: "htmlpanel",
                                          html: t
                                      }]
                                  },
                                  initialData: {},
                                  buttons: u.getButtons(),
                                  onCancel: r,
                                  onAction: function(e, t) {
                                      u.getAction(t.name).each(D),
                                      e.close()
                                  }
                              };
                              s.windowManager.open(n)
                          })
                      },
                      hide: S,
                      destroy: function() {
                          t.clear()
                      },
                      reflow: S
                  }
              }
          }) : (c = m,
          {
              createDialog: function() {
                  function t() {
                      n.trigger.close()
                  }
                  function e() {
                      r.off("close", t),
                      r.close("close")
                  }
                  var r, o = "", i = [], a = [], u = Na(), n = Mo({
                      close: Ro([])
                  });
                  return {
                      events: n.registry,
                      setTitle: function(e) {
                          o = e
                      },
                      setContent: function(e) {
                          var t = Kn(e.dom);
                          i = [{
                              type: "container",
                              html: t
                          }],
                          u.set(e)
                      },
                      setButtons: function(e) {
                          var t = [];
                          e.forEach(function(e) {
                              t.push({
                                  text: e.text,
                                  ariaLabel: e.text,
                                  onclick: e.click
                              })
                          }),
                          a = t
                      },
                      show: function() {
                          0 === a.length && (a = [{
                              text: "Close",
                              onclick: function() {
                                  r.close()
                              }
                          }]);
                          var e = {
                              title: o,
                              spacing: 10,
                              padding: 10,
                              minWidth: 300,
                              minHeight: 100,
                              layout: "flex",
                              items: i,
                              buttons: a
                          };
                          r = c.windowManager.open(e);
                          var n = Jt.fromDom(r.getEl());
                          u.on(function(e) {
                              var t = ya(n, "." + At(e, "class")).getOrDie("We must find this element or we cannot continue");
                              Ta(t, e),
                              _u(t)
                          }),
                          r.on("close", t)
                      },
                      hide: function() {
                          e()
                      },
                      destroy: function() {
                          e()
                      },
                      reflow: S
                  }
              }
          }), o = Jt.fromDom(m.getBody()), a = Ap(o, r.createDialog, S, n, Up), u = (t = T,
          Bf([Op(I)], Tp(Ud.discard, xp, [Lm], !0), t = void 0 === T ? Sr : t));
          P([a, u], function(e) {
              e.events.cancel.bind(function() {
                  y()
              }),
              e.events.error.bind(function(e) {
                  y(),
                  m.notificationManager ? m.notificationManager.open({
                      text: Et(e.message),
                      type: "error"
                  }) : (v ? zp : $a).showDialog(m, Et(e.message))
              }),
              e.events.insert.bind(function(e) {
                  var t = N(e.elements, function(e) {
                      return Kn(e.dom)
                  }).join("").replace(/ data-mce-contenteditable="([^"]+)"/g, ' contenteditable="$1"');
                  m.focus(),
                  g.importImages(e.assets).get(function() {
                      y(),
                      h(m, Eo(m, t, e.isInternal, e.source, e.mode), e.assets),
                      X(m) && g.uploadImages(e.assets)
                  })
              }),
              k(tinymce, "5.7.0") || e.events.block.bind(function(e) {
                  m.setProgressState(e.state)
              })
          }),
          m.addCommand("mceInsertClipboardContent", function(e, t) {
              var n, r, o, i;
              void 0 !== t.content ? a.pasteCustom((o = t.content,
              i = void 0 === T ? Sr : T,
              {
                  getWordData: function() {
                      return re.some(Cd({
                          html: i.sanitizeHtml(o),
                          rtf: wd()
                      }))
                  },
                  getGoogleDocsData: re.none,
                  getImage: re.none,
                  getHtml: re.none,
                  getText: re.none,
                  getNative: C("There is no native event"),
                  getOnlyText: re.none,
                  getVoid: C("There is no paste event")
              })) : void 0 !== t.text && u.pasteCustom((n = t.text,
              r = void 0 === T ? Sr : T,
              {
                  getWordData: re.none,
                  getGoogleDocsData: re.none,
                  getImage: re.none,
                  getHtml: re.none,
                  getText: function() {
                      return re.some(Dd({
                          text: r.sanitizeText(n)
                      }))
                  },
                  getNative: C("There is no native event"),
                  getOnlyText: re.none,
                  getVoid: C("There is no paste event")
              }))
          });
          var i, l, f, d = Ra(o, "paste", function(e) {
              var t;
              m.readonly || (t = e.raw,
              (Wp ? re.from(t.clipboardData).bind(function(e) {
                  return re.from(e.getData("text/html"))
              }) : re.none()).bind(function(e) {
                  return vt(e, "<google-sheets-html-origin") ? re.some("googlesheets") : vt(n = e, " data-ccp-props=") && vt(n, " paraid=") && /font-family:.+?_MSFontService(&quot;)?[,;]/.test(n) ? re.some("mswordonline") : vt(t = e, "<meta name=ProgId content=Excel.Sheet>") && !vt(t, '="urn:schemas-microsoft-com:office:') ? re.some("msexcelonline") : re.none();
                  var t, n
              }).each(function(e) {
                  m.fire("PowerPasteTempStats", {
                      source: e
                  })
              }),
              x.isSet() || x.set(m.selection.getBookmark(1)),
              (p.isText() ? u : a).paste(e.raw),
              p.reset())
          });
          b.set(d),
          (i = m).on("cut", (l = i,
          function(e) {
              Ep(l) && Dp(e, Lp(l), kp(l), function() {
                  var e, t = Di().browser;
                  t.isChrome() || t.isFirefox() ? (e = l.selection.getRng(),
                  tinymce.util.Delay.setEditorTimeout(l, function() {
                      l.selection.setRng(e),
                      l.execCommand("Delete")
                  }, 0)) : l.execCommand("Delete")
              })
          }
          )),
          i.on("copy", (f = i,
          function(e) {
              Ep(f) && Dp(e, Lp(f), kp(f), S)
          }
          ))
      }),
      m.on("remove", function() {
          b.clear()
      })
  }
  function jp(n, r) {
      var o = Ea(n.getParam("paste_as_text", !1, "boolean"))
        , i = Ea(!1);
      n.on("keydown", function(e) {
          var t = e;
          tinymce.util.VK.metaKeyPressed(t) && 86 === t.keyCode && t.shiftKey && (i.set(!0),
          tinymce.Env.ie && tinymce.Env.ie < 10 && (e.preventDefault(),
          n.fire("paste", {})))
      });
      function a() {
          var e = !o.get();
          o.set(e),
          n.fire("PastePlainTextToggle", {
              state: e
          }),
          n.focus()
      }
      return {
          buttonToggle: function(e) {
              var t = !o.get();
              r ? e.setActive(t) : this.active(t),
              a()
          },
          toggle: a,
          reset: function() {
              i.set(!1)
          },
          isText: function() {
              return i.get() || o.get()
          }
      }
  }
  var Up = Object.freeze({
      __proto__: null,
      loadScript: function(e, t) {
          return tinymce.Resource || Cp(),
          tinymce.Resource.load(e, t)
      }
  })
    , Hp = Di().browser
    , Wp = !(Hp.isIE() || Hp.isEdge() && Hp.version.major < 16)
    , Bp = function(e, t) {
      return e.insertContent(t, {
          merge: Q(e),
          paste: !0
      }),
      re.some(!0)
  }
    , zp = Object.freeze({
      __proto__: null,
      showDialog: function(e, t) {
          e.windowManager.open({
              title: "Error",
              body: {
                  type: "panel",
                  items: [{
                      type: "htmlpanel",
                      html: t
                  }]
              },
              initialData: {},
              buttons: [{
                  text: "OK",
                  type: "cancel",
                  name: "ok",
                  primary: !0
              }]
          })
      }
  });
  tinymce.PluginManager.requireLangPack("powerpaste", "ar,bg_BG,ca,cs,da,de,el,es,eu,fa,fi,fr_FR,he_IL,hr,hu_HU,id,it,ja,kk,ko_KR,nb_NO,nl,pl,pt_BR,pt_PT,ro,ru,sk,sl_SI,sv_SE,th_TH,tr,uk,zh_CN,zh_TW"),
  tinymce.PluginManager.add("powerpaste", k(tinymce, "4.0.28") ? (console.error('The "powerpaste" plugin requires at least 4.0.28 version of TinyMCE.'),
  S) : function(n, e) {
      function t(t) {
          function e(e) {
              t.setActive(e.state)
          }
          return t.setActive(f.isText()),
          n.on("PastePlainTextToggle", e),
          function() {
              return n.off("PastePlainTextToggle", e)
          }
      }
      function r() {
          var t = this;
          t.active(f.isText()),
          n.on("PastePlainTextToggle", function(e) {
              t.active(e.state)
          })
      }
      var o, i, a, u, c, s, l = !k(tinymce, "5.0.0"), f = jp(n, l);
      tinymce.Env.ie && tinymce.Env.ie < 10 ? function(t, e) {
          function n(t) {
              return function(e) {
                  t(e)
              }
          }
          var r, o, i, a = this, u = ko(t, Et, !1), c = (o = u.showDialog,
          i = e,
          function(e) {
              La(r, o, i, e)
          }
          );
          (r = t).on("paste", n(c));
          var s, l, f, d = (l = u.showDialog,
          f = e,
          function(e) {
              (tinymce.isOpera || 0 < navigator.userAgent.indexOf("Firefox/2")) && ((tinymce.isMac ? e.metaKey : e.ctrlKey) && 86 === e.keyCode || e.shiftKey && 45 === e.keyCode) && La(s, l, f, e)
          }
          );
          (s = t).on("keydown", n(d)),
          t.addCommand("mceInsertClipboardContent", function(e, t) {
              u.showDialog(t.content || t)
          }),
          J(t) && t.on("PastePreProcess", function(e) {
              J(t).call(a, a, e)
          })
      }(n, f) : (s = (void 0 !== n.uploadImages ? Da : function(e) {
          if (O(K(e))) {
              var t = {
                  url: K(e),
                  basePath: e.getParam("images_upload_base_path"),
                  credentials: e.getParam("images_upload_credentials", !1)
              };
              return ka(e, t)
          }
          var o;
          return {
              importImages: function() {
                  return $e([])
              },
              uploadImages: S,
              prepareImages: function(e) {
                  P(e, function(e) {
                      Se.cata(e, function(e, t, n) {
                          var r = lt(t);
                          P(o.dom.select('img[src="' + n + '"]'), function(e) {
                              o.dom.setAttrib(e, "src", r)
                          })
                      }, S)
                  })
              },
              getLocalURL: Da(o = e).getLocalURL
          }
      }
      )(n),
      Fp(n, f, e, void 0, s, l),
      n.getParam("powerpaste_block_drop", !1, "boolean") ? (c = n).on("init", function() {
          te(c, c.getBody()),
          c.inline || te(c, c.getDoc())
      }) : No(n, 0, s, l)),
      i = J(o = n),
      a = o.getParam("paste_postprocess"),
      i && o.on("PastePreProcess", function(e) {
          return i.call(o, _o(o), e)
      }),
      a && o.on("PastePostProcess", function(e) {
          return a.call(o, _o(o), e)
      }),
      l ? (n.ui.registry.addToggleButton("pastetext", {
          icon: "paste-text",
          tooltip: "Paste as text",
          onAction: f.buttonToggle,
          onSetup: t
      }),
      n.ui.registry.addToggleMenuItem("pastetext", {
          icon: "paste-text",
          text: "Paste as text",
          onAction: f.buttonToggle,
          onSetup: t
      })) : (n.addButton("pastetext", {
          icon: "pastetext",
          tooltip: "Paste as text",
          onclick: f.buttonToggle,
          onPostRender: r
      }),
      n.addMenuItem("pastetext", {
          text: "Paste as text",
          selectable: !0,
          onclick: f.buttonToggle,
          onPostRender: r
      })),
      u = f,
      n.addCommand("mceTogglePlainTextPaste", u.toggle)
  }
  )
}();
