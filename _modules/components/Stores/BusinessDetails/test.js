"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _orderingComponentsAdmin = require("ordering-components-admin");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessDetails = exports.BusinessDetails = function BusinessDetails(props) {
  var asDashboard = props.asDashboard,
    business = props.business,
    businessId = props.businessId,
    propsToFetch = props.propsToFetch,
    UIComponent = props.UIComponent,
    handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
    handleSucessRemoveBusiness = props.handleSucessRemoveBusiness,
    handleSucessAddBusiness = props.handleSucessAddBusiness;
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      business: null,
      loading: true,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessState = _useState2[0],
    setBusinessState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    actionStatus = _useState4[0],
    setActionStatus = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    formState = _useState6[0],
    setFormState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      key: '',
      result: {
        error: false
      }
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    spoonityKeyState = _useState8[0],
    setSpoonityKeyState = _useState8[1];
  var _useState9 = (0, _react.useState)({
      site: null,
      loading: false,
      error: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    siteState = _useState10[0],
    setSiteState = _useState10[1];

  /**
   * Clean formState
   */
  var cleanFormState = function cleanFormState(values) {
    return setFormState(_objectSpread(_objectSpread({}, formState), values));
  };

  /**
   * Method to get business from API
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var fetchEndpoint, _yield$fetchEndpoint$, result, _business2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            fetchEndpoint = asDashboard ? ordering.setAccessToken(session.token).businesses(businessId).asDashboard().select(propsToFetch) : ordering.setAccessToken(session.token).businesses(businessId).select(propsToFetch);
            _context.next = 5;
            return fetchEndpoint.get();
          case 5:
            _yield$fetchEndpoint$ = _context.sent;
            result = _yield$fetchEndpoint$.content.result;
            _business2 = Array.isArray(result) ? null : result;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              business: _business2
            }));
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function getBusinesses() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to change business enable/disable or featured/not featured
   * @param {Boolean} enabled business enable state
   * @param {Boolean} isFeatured state to check enable or featured
   */

  var handleChangeActiveBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(enabled) {
      var isFeatured,
        changes,
        _yield$ordering$setAc,
        _yield$ordering$setAc2,
        error,
        result,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            isFeatured = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
            _context2.prev = 1;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            changes = isFeatured ? {
              featured: enabled
            } : {
              enabled: enabled
            };
            _context2.next = 7;
            return ordering.setAccessToken(session.token).businesses(businessId).save(changes);
          case 7:
            _yield$ordering$setAc = _context2.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: error ? result : null
            }));
            if (!error) {
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: _objectSpread(_objectSpread({}, businessState.business), result)
              }));
              showToast(_orderingComponentsAdmin.ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'));
            }
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](1);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 15]]);
    }));
    return function handleChangeActiveBusiness(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to delete business from API
   */
  var handleDeleteBusiness = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            _context3.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(businessId), requestOptions);
          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return response.json();
          case 9:
            content = _context3.sent;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: content.error ? content.result : null
            }));
            if (!content.error) {
              showToast(_orderingComponentsAdmin.ToastType.Success, t('BUSINESS_DELETED', 'Business deleted'));
              handleSucessRemoveBusiness && handleSucessRemoveBusiness(businessId);
              props.onClose && props.onClose();
            }
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 14]]);
    }));
    return function handleDeleteBusiness() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to duplicate business from API
   */
  var handleDuplicateBusiness = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            _context4.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(businessId, "/duplicate"), requestOptions);
          case 6:
            response = _context4.sent;
            _context4.next = 9;
            return response.json();
          case 9:
            content = _context4.sent;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: content.error ? content.result : null
            }));
            if (!content.error) {
              handleSucessAddBusiness && handleSucessAddBusiness(content === null || content === void 0 ? void 0 : content.result);
              showToast(_orderingComponentsAdmin.ToastType.Success, t('BUSINESS_DUPLICATED', 'Business duplicated'));
            }
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 14]]);
    }));
    return function handleDuplicateBusiness() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to delet the business owner
   */
  var handleDeleteBusinessOwner = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(owners) {
      var _yield$ordering$setAc3, _yield$ordering$setAc4, error, result, _businessState$busine, _owners, _business;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context5.next = 5;
            return ordering.setAccessToken(session.token).businesses(businessId).save({
              owners: owners
            });
          case 5:
            _yield$ordering$setAc3 = _context5.sent;
            _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
            error = _yield$ordering$setAc4.error;
            result = _yield$ordering$setAc4.result;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: error ? result : null
            }));
            if (!error) {
              _owners = businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.owners.filter(function (owner) {
                return owners.includes(owner.id);
              });
              _business = _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
                owners: _owners
              });
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: _business
              }));
              showToast(_orderingComponentsAdmin.ToastType.Success, t('BUSINESS_OWNER_DELETED', 'Business owner deleted'));
            }
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function handleDeleteBusinessOwner(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to delet the business owner
   */
  var handleAddBusinessOwner = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(owners, newOwner) {
      var _yield$ordering$setAc5, _yield$ordering$setAc6, error, result, _businessState$busine2, _owners, _business;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context6.next = 5;
            return ordering.setAccessToken(session.token).businesses(businessId).save({
              owners: owners
            });
          case 5:
            _yield$ordering$setAc5 = _context6.sent;
            _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
            error = _yield$ordering$setAc6.error;
            result = _yield$ordering$setAc6.result;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: error ? result : null
            }));
            if (!error) {
              _owners = [].concat(_toConsumableArray(businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.owners), [newOwner]);
              _business = _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
                owners: _owners
              });
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: _business
              }));
              showToast(_orderingComponentsAdmin.ToastType.Success, t('BUSINESS_OWNER_ADDED', 'Business owner added'));
            }
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context6.t0.message]
            }));
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function handleAddBusinessOwner(_x3, _x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to update the business from the API
   */
  var handleUpdateBusinessClick = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var response;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            _context7.next = 5;
            return ordering.businesses(businessId).save(formState.changes, {
              accessToken: session.token
            });
          case 5:
            response = _context7.sent;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: response.content.error ? formState.changes : {},
              result: response.content,
              loading: false
            }));
            if (!response.content.error) {
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: _objectSpread(_objectSpread({}, businessState.business), response.content.result)
              }));
              showToast(_orderingComponentsAdmin.ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'));
            }
            _context7.next = 13;
            break;
          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](0);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _context7.t0.message
              },
              loading: false
            }));
          case 13:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 10]]);
    }));
    return function handleUpdateBusinessClick() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Method to set Spoonity key
   */
  var handleUpdateSpoonityKey = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(key, config) {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            setSpoonityKeyState(_objectSpread(_objectSpread({}, spoonityKeyState), {}, {
              loading: true
            }));
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                value: key
              })
            };
            _context8.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(businessId, "/configs/").concat(config), requestOptions);
          case 6:
            response = _context8.sent;
            _context8.next = 9;
            return response.json();
          case 9:
            content = _context8.sent;
            if (content) {
              showToast(_orderingComponentsAdmin.ToastType.Success, t('SPOONITY_KEY_UPDATED', 'Spoonity key updated'));
              setSpoonityKeyState(_objectSpread(_objectSpread({}, spoonityKeyState), {}, {
                key: content.result.value,
                result: content.result,
                loading: false
              }));
            }
            _context8.next = 17;
            break;
          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](0);
            showToast(_orderingComponentsAdmin.ToastType.Error, t('SPOONITY_KEY_ERROR', 'Spoonity key error'));
            setSpoonityKeyState(_objectSpread(_objectSpread({}, spoonityKeyState), {}, {
              result: {
                error: true,
                result: _context8.t0.message
              },
              loading: false
            }));
          case 17:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 13]]);
    }));
    return function handleUpdateSpoonityKey(_x5, _x6) {
      return _ref8.apply(this, arguments);
    };
  }();

  /**
   * Method to add the business fields when new busines item is added
   */
  var handleSuccessAddBusinessItem = function handleSuccessAddBusinessItem(name, result) {
    var params = [].concat(_toConsumableArray(businessState === null || businessState === void 0 ? void 0 : businessState.business[name]), [result]);
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, _defineProperty({}, name, params))
    }));
  };
  /**
   * Method to delete the business item from business
   */
  var handleSuccessDeleteBusinessItem = function handleSuccessDeleteBusinessItem(name, id) {
    var params = businessState === null || businessState === void 0 ? void 0 : businessState.business[name].filter(function (item) {
      return item.id !== id;
    });
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, _defineProperty({}, name, params))
    }));
  };

  /**
   * Method to update the business
   */
  var handleUpdateBusinessState = function handleUpdateBusinessState(result) {
    var business = _objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business);
    Object.assign(business, result);
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: business
    }));
  };
  var handleUpdatePreorderConfigs = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(params, configId) {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                value: params
              })
            };
            _context9.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat((business === null || business === void 0 ? void 0 : business.id) || businessId, "/configs/").concat(configId), requestOptions);
          case 6:
            response = _context9.sent;
            _context9.next = 9;
            return response.json();
          case 9:
            content = _context9.sent;
            if (!content.error) {
              setActionStatus({
                loading: false,
                error: null
              });
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: _objectSpread(_objectSpread({}, businessState.business), {}, {
                  configs: businessState.business.configs.map(function (config) {
                    return config.id === configId ? content.result : config;
                  })
                })
              }));
              showToast(_orderingComponentsAdmin.ToastType.Success, t('CHANGES_SAVED', 'Changes saved'));
            } else {
              setActionStatus({
                loading: false,
                error: content.result
              });
            }
            _context9.next = 16;
            break;
          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](0);
            setActionStatus({
              loading: false,
              error: [_context9.t0.message]
            });
          case 16:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 13]]);
    }));
    return function handleUpdatePreorderConfigs(_x7, _x8) {
      return _ref9.apply(this, arguments);
    };
  }();

  /**
   * Method to get the themes from API
   */
  var getSites = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var requestOptions, response, _yield$response$json, error, result, site;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            _context10.next = 5;
            return fetch("".concat(ordering.root, "/sites"), requestOptions);
          case 5:
            response = _context10.sent;
            _context10.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context10.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              site = result.find(function (site) {
                return site.code === 'website';
              });
              setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
                loading: false,
                site: site
              }));
            } else {
              setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
                loading: false,
                error: result
              }));
            }
            _context10.next = 17;
            break;
          case 14:
            _context10.prev = 14;
            _context10.t0 = _context10["catch"](0);
            setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
              loading: false,
              error: [_context10.t0.message]
            }));
          case 17:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 14]]);
    }));
    return function getSites() {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleSyncEvent = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var event,
        _businessState$busine3,
        response,
        _yield$response$json2,
        result,
        error,
        _args11 = arguments;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            event = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : 'business';
            _context11.prev = 1;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            _context11.next = 5;
            return fetch("https://integrations.ordering.co/pulseposdps/api/sync_".concat(event, ".php?store_id=").concat(businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.external_id), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            });
          case 5:
            response = _context11.sent;
            _context11.next = 8;
            return response.json();
          case 8:
            _yield$response$json2 = _context11.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (!error) {
              showToast(_orderingComponentsAdmin.ToastType.Success, (result === null || result === void 0 ? void 0 : result[0]) || t('OK', 'OK'));
            }
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false
            }));
            _context11.next = 19;
            break;
          case 15:
            _context11.prev = 15;
            _context11.t0 = _context11["catch"](1);
            console.log(_context11.t0);
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              error: [_context11.t0.message],
              loading: false
            }));
          case 19:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[1, 15]]);
    }));
    return function handleSyncEvent() {
      return _ref11.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!(businessState !== null && businessState !== void 0 && businessState.business)) return;
    handleSucessUpdateBusiness && handleSucessUpdateBusiness(businessState === null || businessState === void 0 ? void 0 : businessState.business);
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.business]);
  (0, _react.useEffect)(function () {
    if (business) {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        loading: false,
        business: business
      }));
    } else {
      getBusinesses();
    }
  }, [businessId, business]);
  (0, _react.useEffect)(function () {
    getSites();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessState: businessState,
    actionStatus: actionStatus,
    formState: formState,
    setFormState: setFormState,
    cleanFormState: cleanFormState,
    handleChangeActiveBusiness: handleChangeActiveBusiness,
    handleDuplicateBusiness: handleDuplicateBusiness,
    handleDeleteBusiness: handleDeleteBusiness,
    handleDeleteBusinessOwner: handleDeleteBusinessOwner,
    handleAddBusinessOwner: handleAddBusinessOwner,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    handleUpdateBusinessState: handleUpdateBusinessState,
    handleSuccessAddBusinessItem: handleSuccessAddBusinessItem,
    handleSuccessDeleteBusinessItem: handleSuccessDeleteBusinessItem,
    handleUpdatePreorderConfigs: handleUpdatePreorderConfigs,
    handleUpdateSpoonityKey: handleUpdateSpoonityKey,
    handleSyncEvent: handleSyncEvent,
    spoonityKeyState: spoonityKeyState,
    siteState: siteState
  })));
};
BusinessDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
  * This must be contains businessId to fetch
  */
  businessId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
  * Business, this must be contains an object with all business info
  */
  business: _propTypes.default.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
  * Components types after order details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
  * Elements before order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
  * Elements after order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'email', 'slug', 'schedule', 'description', 'about', 'logo', 'header', 'phone', 'cellphone', 'owner_id', 'city_id', 'address', 'address_notes', 'zipcode', 'location', 'featured', 'timezone', 'currency', 'food', 'alcohol', 'groceries', 'laundry', 'use_printer', 'printer_id', 'minimum', 'delivery_price', 'always_deliver', 'tax_type', 'tax', 'delivery_time', 'pickup_time', 'service_fee', 'fixed_usage_fee', 'percentage_usage_fee', 'order_default_priority', 'cancel_order_after_minutes', 'enabled', 'preorder_time', 'maximum', 'schedule_ranges', 'franchise_id', 'external_id', 'front_layout', 'seo_image', 'seo_title', 'seo_description', 'eta_status_times', 'eta_variation_time', 'price_level', 'facebook_profile', 'instagram_profile', 'tiktok_profile', 'snapchat_profile', 'pinterest_profile', 'whatsapp_number', 'delivery_tax_rate', 'delivery_tax_type', 'disabled_reason', 'menus_count', 'available_menus_count', 'menus_shared_count', 'available_menus_shared_count', 'professionals', 'configs', 'checkoutfields', 'reviews', 'open', 'today', 'lazy_load_products_recommended', 'available_products_count', 'valid_service', 'num_zones', 'types', 'metafields', 'owners', 'gallery', 'city', 'webhooks', 'maximums', 'paymethods', 'ribbon', 'offers']
};