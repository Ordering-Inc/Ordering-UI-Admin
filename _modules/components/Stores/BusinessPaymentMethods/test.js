"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPaymethods = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _orderingComponentsAdmin = require("ordering-components-admin");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var paymethodsNotAllowed = ['paypal_express', 'authorize'];
var BusinessPaymethods = exports.BusinessPaymethods = function BusinessPaymethods(props) {
  var _configState$configs, _configState$configs2, _configState$configs3;
  var business = props.business,
    UIComponent = props.UIComponent,
    defaultSandboxRequiredGateways = props.defaultSandboxRequiredGateways,
    handleSuccessUpdate = props.handleSuccessUpdate;
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      paymethods: [],
      loading: true,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessPaymethodsState = _useState2[0],
    setBusinessPaymethodsState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      sites: [],
      loading: true,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    sitesState = _useState4[0],
    setSitesState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      devices: [],
      loading: true,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    deviceState = _useState6[0],
    setDeviceState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      paymethods: [],
      loading: true,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    paymethodsList = _useState8[0],
    setPaymethodsList = _useState8[1];
  var sandboxRequiredGateways = defaultSandboxRequiredGateways || ['paypal', 'stripe_direct', 'paypal_express', 'stripe_connect', 'stripe_redirect', 'carlos_payment', 'ivr'];
  var _useState9 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    actionState = _useState10[0],
    setActionState = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    changesState = _useState12[0],
    setChangesState = _useState12[1];
  var _useState13 = (0, _react.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    stripeConnectData = _useState14[0],
    setStripeConnectData = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isSuccessDeleted = _useState16[0],
    setIsSuccessDeleted = _useState16[1];
  var stripeClientId = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.stripe_connect_sandbox) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value) === '1' ? configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.stripe_connect_client_id_sandbox) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value : configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.stripe_connect_client_id) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value;

  /**
   * Clean formState
   */
  var cleanChangesState = function cleanChangesState(values) {
    return setChangesState(_objectSpread({}, values));
  };
  var parsePaymethods = function parsePaymethods(paymethods) {
    var _paymethods = paymethods && paymethods.filter(function (paymethod) {
      return !paymethodsNotAllowed.includes(paymethod === null || paymethod === void 0 ? void 0 : paymethod.gateway);
    });
    return _paymethods;
  };

  /**
   * Method to get paymethods from API
   */
  var getBusinessPaymethods = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, _yield$response$json, result, response2, _yield$response2$json, sitesResult;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods?params=sites,devices"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
              }
            });
          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();
          case 6:
            _yield$response$json = _context.sent;
            result = _yield$response$json.result;
            _context.prev = 8;
            _context.next = 11;
            return fetch("".concat(ordering.root, "/sites"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
              }
            });
          case 11:
            response2 = _context.sent;
            _context.next = 14;
            return response2.json();
          case 14:
            _yield$response2$json = _context.sent;
            sitesResult = _yield$response2$json.result;
            setSitesState(_objectSpread(_objectSpread({}, sitesState), {}, {
              loading: false,
              sites: sitesResult
            }));
            _context.next = 22;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](8);
            setSitesState(_objectSpread(_objectSpread({}, sitesState), {}, {
              loading: false,
              sites: _context.t0.message
            }));
          case 22:
            setBusinessPaymethodsState(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: false,
              paymethods: result
            }));
            _context.next = 28;
            break;
          case 25:
            _context.prev = 25;
            _context.t1 = _context["catch"](0);
            setBusinessPaymethodsState(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: false,
              error: _context.t1.message
            }));
          case 28:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 25], [8, 19]]);
    }));
    return function getBusinessPaymethods() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get devices from API
   */
  var getDevices = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, _yield$response$json2, result, devices;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("".concat(ordering.root, "/devices"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            });
          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();
          case 6:
            _yield$response$json2 = _context2.sent;
            result = _yield$response$json2.result;
            devices = result.filter(function (item) {
              return item.business_id === (business === null || business === void 0 ? void 0 : business.id);
            });
            setDeviceState(_objectSpread(_objectSpread({}, deviceState), {}, {
              loading: false,
              devices: devices
            }));
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            setDeviceState(_objectSpread(_objectSpread({}, deviceState), {}, {
              loading: false,
              error: _context2.t0.message
            }));
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function getDevices() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get paymethods from API
   */
  var getAllPaymethods = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response, _yield$response$json3, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch("".concat(ordering.root, "/paymethods?where=[{%22attribute%22:%22enabled%22,%22value%22:true}]"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
              }
            });
          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return response.json();
          case 6:
            _yield$response$json3 = _context3.sent;
            result = _yield$response$json3.result;
            setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: false,
              paymethods: parsePaymethods(result)
            }));
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: false,
              error: _context3.t0.message
            }));
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function getAllPaymethods() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to create the business paymethod option from API
   * @param {*} paymethodId paymethod id to create
   */
  var handleCreateBusinessPaymentOption = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(paymethodId) {
      var paymethod, params, requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            paymethod = paymethodsList.paymethods.find(function (_paymethod) {
              return _paymethod.id === paymethodId;
            });
            params = {
              enabled: true,
              paymethod_id: paymethodId,
              sandbox: sandboxRequiredGateways.includes(paymethod.gateway)
            };
            _context4.prev = 2;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
              },
              body: JSON.stringify(params)
            };
            _context4.next = 8;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods"), requestOptions);
          case 8:
            response = _context4.sent;
            _context4.next = 11;
            return response.json();
          case 11:
            content = _context4.sent;
            if (!content.error) {
              setBusinessPaymethodsState(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  paymethods: [].concat(_toConsumableArray(prevState.paymethods), [_objectSpread(_objectSpread({}, content.result), {}, {
                    paymethod: paymethod
                  })])
                });
              });
              setActionState({
                loading: false,
                result: {
                  error: false
                }
              });
              showToast(_orderingComponentsAdmin.ToastType.Success, t('PAYMETHOD_SAVED', 'Payment method saved'));
            }
            _context4.next = 18;
            break;
          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](2);
            setActionState({
              result: {
                error: true,
                result: _context4.t0.message
              },
              loading: false
            });
          case 18:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[2, 15]]);
    }));
    return function handleCreateBusinessPaymentOption(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to update the business paymethod option
   * @param {Number} paymethodId business paymethod id to delete
   * @param {Object} options parameters to update
   */
  var handleUpdateBusinessPaymethodOpton = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(paymethodId, options) {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
              },
              body: JSON.stringify(options)
            };
            _context5.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods/").concat(paymethodId), requestOptions);
          case 6:
            response = _context5.sent;
            _context5.next = 9;
            return response.json();
          case 9:
            content = _context5.sent;
            setChangesState(content.error ? changesState : {});
            if (!content.error) {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false
              }));
              setBusinessPaymethodsState(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  paymethods: prevState.paymethods.filter(function (paymethod) {
                    if (paymethod.id === paymethodId) {
                      Object.assign(paymethod, content.result);
                    }
                    return true;
                  })
                });
              });
              showToast(_orderingComponentsAdmin.ToastType.Success, t('PAYMETHOD_SAVED', 'Payment method saved'));
            }
            _context5.next = 17;
            break;
          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            setActionState({
              result: {
                error: true,
                result: _context5.t0.message
              },
              loading: false
            });
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 14]]);
    }));
    return function handleUpdateBusinessPaymethodOpton(_x2, _x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to update the business paymethod option
   */
  var handleUpdateBusiness = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
              },
              body: JSON.stringify(changesState)
            };
            _context6.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id), requestOptions);
          case 6:
            response = _context6.sent;
            _context6.next = 9;
            return response.json();
          case 9:
            content = _context6.sent;
            setChangesState(content.error ? changesState : {});
            if (!content.error) {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false
              }));
              handleSuccessUpdate && handleSuccessUpdate(content.result);
            }
            _context6.next = 17;
            break;
          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            setActionState({
              result: {
                error: true,
                result: _context6.t0.message
              },
              loading: false
            });
          case 17:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 14]]);
    }));
    return function handleUpdateBusiness() {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the business paymethod option from API
   * @param {Number} paymethodId id to delete the business paymethod
   */
  var handleDeleteBusinessPaymethodOption = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(paymethodId) {
      var businessPaymethodId, requestOptions, response, content, updatedPaymethods;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            businessPaymethodId = businessPaymethodsState.paymethods.find(function (paymethod) {
              return paymethod.paymethod_id === paymethodId;
            }).id;
            _context7.prev = 1;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
              }
            };
            _context7.next = 7;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods/").concat(businessPaymethodId), requestOptions);
          case 7:
            response = _context7.sent;
            _context7.next = 10;
            return response.json();
          case 10:
            content = _context7.sent;
            if (!content.error) {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false
              }));
              updatedPaymethods = businessPaymethodsState.paymethods.filter(function (paymethod) {
                return paymethod.paymethod_id !== paymethodId;
              });
              setBusinessPaymethodsState(_objectSpread(_objectSpread({}, businessPaymethodsState), {}, {
                paymethods: updatedPaymethods
              }));
              showToast(_orderingComponentsAdmin.ToastType.Success, t('PAYMETHOD_DELETED', 'Payment method deleted'));
              setIsSuccessDeleted(true);
            }
            _context7.next = 17;
            break;
          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](1);
            setActionState({
              result: {
                error: true,
                result: _context7.t0.message
              },
              loading: false
            });
          case 17:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[1, 14]]);
    }));
    return function handleDeleteBusinessPaymethodOption(_x4) {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Method to handle payment enabled state
   * @param {Number} paymethodId id of payment method
   */
  var handleClickPayment = function handleClickPayment(paymethodId) {
    var found = businessPaymethodsState.paymethods.find(function (paymethod) {
      return paymethod.paymethod_id === paymethodId;
    });
    if (found) {
      handleUpdateBusinessPaymethodOpton(found.id, {
        enabled: !found.enabled
      });
    } else {
      handleCreateBusinessPaymentOption(paymethodId);
    }
  };

  /**
   * Method to allow all paymethods
   */
  var handleSelectAllPaymethods = function handleSelectAllPaymethods() {
    var _iterator = _createForOfIteratorHelper(paymethodsList.paymethods),
      _step;
    try {
      var _loop = function _loop() {
        var paymethod = _step.value;
        var found = businessPaymethodsState.paymethods.find(function (_paymethod) {
          return _paymethod.paymethod_id === paymethod.id;
        });
        if (found) {
          if (!(found !== null && found !== void 0 && found.enabled)) {
            handleUpdateBusinessPaymethodOpton(found.id, {
              enabled: true
            });
          }
        } else {
          handleCreateBusinessPaymentOption(paymethod.id);
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  /**
   * Method to disable all paymethods
   */
  var handleSelectNonePaymethods = function handleSelectNonePaymethods() {
    var _iterator2 = _createForOfIteratorHelper(businessPaymethodsState.paymethods),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var paymethod = _step2.value;
        if (paymethod !== null && paymethod !== void 0 && paymethod.enabled) {
          handleUpdateBusinessPaymethodOpton(paymethod.id, {
            enabled: false
          });
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   * @param {Boolean} sandbox value if sandbox data is or not
   */
  var handleChangeInput = function handleChangeInput(e, sandbox) {
    if (sandbox) {
      setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
        data_sandbox: _objectSpread(_objectSpread({}, changesState === null || changesState === void 0 ? void 0 : changesState.data_sandbox), {}, _defineProperty({}, e.target.name, e.target.value))
      }));
    } else {
      setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
        data: _objectSpread(_objectSpread({}, changesState === null || changesState === void 0 ? void 0 : changesState.data), {}, _defineProperty({}, e.target.name, e.target.value))
      }));
    }
  };
  /**
   * Method to control the sanbox enable state
   */
  var handleChangeSandbox = function handleChangeSandbox(checked) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      sandbox: checked !== null && checked !== void 0 ? checked : !(changesState !== null && changesState !== void 0 && changesState.sandbox)
    }));
  };

  /**
   * Method to connect with stripe
   */
  var handleStripeConnect = function handleStripeConnect() {
    var connect = window.open("https://connect.stripe.com/oauth/authorize?response_type=code&client_id=".concat(stripeClientId, "&scope=read_write&state=").concat(token), '_blank', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,clearcache=yes');
    var interval = setInterval(function () {
      if (!connect.closed) {
        connect.postMessage('data', ordering.url);
      } else {
        clearInterval(interval);
      }
    }, 200);
    var timeout = null;
    window.addEventListener('message', function (e) {
      if (e.origin.indexOf('.ordering.co') === -1) {
        return;
      }
      clearInterval(interval);
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(function () {
        connect.postMessage('close', ordering.url);
        if (!e.data.error && e.data.result) {
          var data = e.data.result;
          var stripeData = {
            sandbox: data.livemode,
            data: {
              token: data.access_token,
              publishable: data.stripe_publishable_key,
              user: data.stripe_user_id,
              refresh_token: data.refresh_token
            }
          };
          setStripeConnectData(stripeData);
        } else if (e.data.error) {
          setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
            loading: false,
            error: e.data.error
          }));
        }
      }, 1000);
    });
  };

  /**
   * Method to save the stripe connect data
   * @param {Number} paymethodId id of payment method
   */
  var handleStripeSave = function handleStripeSave(paymethodId) {
    var _requestionOptions, _requestionOptions2, _requestionOptions3;
    var requestionOptions = _objectSpread(_objectSpread({}, stripeConnectData), {}, {
      sandbox: stripeConnectData === null || stripeConnectData === void 0 ? void 0 : stripeConnectData.sandbox,
      data: JSON.stringify(stripeConnectData === null || stripeConnectData === void 0 ? void 0 : stripeConnectData.data),
      data_sandbox: JSON.stringify(stripeConnectData === null || stripeConnectData === void 0 ? void 0 : stripeConnectData.data)
    });
    if ((_requestionOptions = requestionOptions) !== null && _requestionOptions !== void 0 && _requestionOptions.allowed_order_types) {
      requestionOptions = _objectSpread(_objectSpread({}, requestionOptions), {}, {
        allowed_order_types: requestionOptions.allowed_order_types.length > 0 ? JSON.stringify(requestionOptions.allowed_order_types) : null
      });
    }
    if ((_requestionOptions2 = requestionOptions) !== null && _requestionOptions2 !== void 0 && _requestionOptions2.sites) {
      requestionOptions = _objectSpread(_objectSpread({}, requestionOptions), {}, {
        sites: JSON.stringify(requestionOptions.sites)
      });
    }
    if ((_requestionOptions3 = requestionOptions) !== null && _requestionOptions3 !== void 0 && _requestionOptions3.devices) {
      requestionOptions = _objectSpread(_objectSpread({}, requestionOptions), {}, {
        devices: JSON.stringify(requestionOptions.devices)
      });
    }
    if (Object.keys(stripeConnectData).length) {
      handleUpdateBusinessPaymethodOpton(paymethodId, requestionOptions);
    }
    handleUpdateBusiness();
  };

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeStripeInput = function handleChangeStripeInput(e) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  var handleChangeBusinessPaymentState = function handleChangeBusinessPaymentState(values) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), values));
  };
  var handleChangeStripeConnectData = function handleChangeStripeConnectData(values) {
    setStripeConnectData(_objectSpread(_objectSpread({}, stripeConnectData), values));
  };

  /**
   * Method to save the form state
   * @param {Number} paymethodId id to save the change state
   */
  var handleSaveClick = function handleSaveClick(paymethodId) {
    var _changes, _changes2, _changes3, _changes4, _changes5;
    var changes = _objectSpread({}, changesState);
    if ((_changes = changes) !== null && _changes !== void 0 && _changes.data) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        data: JSON.stringify(changes.data)
      });
    }
    if ((_changes2 = changes) !== null && _changes2 !== void 0 && _changes2.data_sandbox) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        data_sandbox: JSON.stringify(changes.data_sandbox)
      });
    }
    if ((_changes3 = changes) !== null && _changes3 !== void 0 && _changes3.allowed_order_types) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        allowed_order_types: changes.allowed_order_types.length > 0 ? JSON.stringify(changes.allowed_order_types) : null
      });
    }
    if ((_changes4 = changes) !== null && _changes4 !== void 0 && _changes4.sites) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        sites: JSON.stringify(changes.sites)
      });
    }
    if ((_changes5 = changes) !== null && _changes5 !== void 0 && _changes5.devices) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        devices: JSON.stringify(changes.devices)
      });
    }
    handleUpdateBusinessPaymethodOpton(paymethodId, changes);
  };
  var handleSuccessPaymethodUpdate = function handleSuccessPaymethodUpdate(updatedPaymethods) {
    setBusinessPaymethodsState(_objectSpread(_objectSpread({}, businessPaymethodsState), {}, {
      paymethods: updatedPaymethods
    }));
  };
  (0, _react.useEffect)(function () {
    getAllPaymethods();
    getBusinessPaymethods();
    getDevices();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessPaymethodsState: businessPaymethodsState,
    paymethodsList: paymethodsList,
    handleClickPayment: handleClickPayment,
    actionState: actionState,
    sitesState: sitesState,
    handleDeleteBusinessPaymethodOption: handleDeleteBusinessPaymethodOption,
    changesState: changesState,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    stripeConnectData: stripeConnectData,
    handleChangeStripeConnectData: handleChangeStripeConnectData,
    cleanChangesState: cleanChangesState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleStripeConnect: handleStripeConnect,
    handleChangeStripeInput: handleChangeStripeInput,
    handleStripeSave: handleStripeSave,
    isSuccessDeleted: isSuccessDeleted,
    setIsSuccessDeleted: setIsSuccessDeleted,
    deviceState: deviceState,
    handleSelectAllPaymethods: handleSelectAllPaymethods,
    handleSelectNonePaymethods: handleSelectNonePaymethods,
    handleSuccessPaymethodUpdate: handleSuccessPaymethodUpdate
  })));
};
BusinessPaymethods.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessPaymethods.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};