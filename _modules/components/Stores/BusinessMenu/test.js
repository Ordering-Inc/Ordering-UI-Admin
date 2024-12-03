"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _orderingComponentsAdmin = require("ordering-components-admin");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessMenu = exports.BusinessMenu = function BusinessMenu(props) {
  var business = props.business,
    UIComponent = props.UIComponent,
    handleSuccessBusinessMenu = props.handleSuccessBusinessMenu,
    propsToFetch = props.propsToFetch,
    propsToFetchMenuChannel = props.propsToFetchMenuChannel;
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useState = (0, _react.useState)({
      menus: [],
      menusShared: [],
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessMenusState = _useState2[0],
    setBusinessMenusState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isSelectedSharedMenus = _useState4[0],
    setIsSelectedSharedMenus = _useState4[1];
  var _useState5 = (0, _react.useState)({
      sites: [],
      loading: true,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    sitesState = _useState6[0],
    setSitesState = _useState6[1];

  /**
  * Method to get the business menus from API
  */
  var getBusinessMenus = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$ordering$setAc, _yield$ordering$setAc2, error, result, _business;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
              loading: true
            }));
            _context.next = 4;
            return ordering.setAccessToken(token).businesses(business.id).select(propsToFetch).asDashboard().get();
          case 4:
            _yield$ordering$setAc = _context.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            _business = Array.isArray(result) ? null : result;
            if (!error) {
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: false
              }));
            } else {
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: false,
                error: result
              }));
            }
            handleSuccessBusinessMenu && handleSuccessBusinessMenu(_business);
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 13]]);
    }));
    return function getBusinessMenus() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to control business menu active state from API
   * @param {Number} menuId menu id to change the business menu state
   * @param {Boolean} enabled menu enabled to change the business menu state
   */
  var handleChangeBusinessMenuActiveState = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(menuId, enabled) {
      var requestOptions, endPoint, response, content, menus, menusShared;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                enabled: enabled
              })
            };
            endPoint = isSelectedSharedMenus ? "".concat(ordering.root, "/business/").concat(business.id, "/menus_shared/").concat(menuId) : "".concat(ordering.root, "/business/").concat(business.id, "/menus/").concat(menuId);
            _context2.next = 7;
            return fetch(endPoint, requestOptions);
          case 7:
            response = _context2.sent;
            _context2.next = 10;
            return response.json();
          case 10:
            content = _context2.sent;
            if (!content.error) {
              if (!isSelectedSharedMenus) {
                menus = businessMenusState.menus.filter(function (menu) {
                  if (menu.id === menuId) {
                    Object.assign(menu, content.result);
                  }
                  return true;
                });
                setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                  loading: false,
                  menus: menus
                }));
              } else {
                menusShared = businessMenusState.menusShared.map(function (menu) {
                  if (menu.id === menuId) {
                    return _objectSpread(_objectSpread(_objectSpread({}, menu), content.result), {}, {
                      id: menu === null || menu === void 0 ? void 0 : menu.id
                    });
                  }
                  return menu;
                });
                setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                  loading: false,
                  menusShared: menusShared
                }));
              }
              showToast(_orderingComponentsAdmin.ToastType.Success, t('MENU_SAVED', 'Products catalog saved'));
            } else {
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function handleChangeBusinessMenuActiveState(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the business menu from API
   * @param {Number} menuId menu id to delete the business menu
   */
  var handleDeleteBusinessMenu = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(menuId) {
      var requestOptions, endPoint, response, content, menus, menusShared;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            endPoint = isSelectedSharedMenus ? "".concat(ordering.root, "/business/").concat(business.id, "/menus_shared/").concat(menuId) : "".concat(ordering.root, "/business/").concat(business.id, "/menus/").concat(menuId);
            _context3.next = 7;
            return fetch(endPoint, requestOptions);
          case 7:
            response = _context3.sent;
            _context3.next = 10;
            return response.json();
          case 10:
            content = _context3.sent;
            if (!content.error) {
              if (!isSelectedSharedMenus) {
                menus = businessMenusState.menus.filter(function (menu) {
                  return menu.id !== menuId;
                });
                setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                  loading: false,
                  menus: menus
                }));
              } else {
                menusShared = businessMenusState.menusShared.filter(function (menu) {
                  return menu.id !== menuId;
                });
                setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                  loading: false,
                  menusShared: menusShared
                }));
              }
              showToast(_orderingComponentsAdmin.ToastType.Success, t('MENU_DELETED', 'Products catalog deleted'));
            } else {
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 14]]);
    }));
    return function handleDeleteBusinessMenu(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to get the business menus channels from API
   */
  var getBusinessMenuChannels = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var requestOptions, response, _yield$response$json, result, error, sites, response2, _yield$response2$json, sitesResult, menus, menusShared;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context4.next = 5;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/menus?params=").concat(propsToFetchMenuChannel.join(','), "&mode=dashboard"), requestOptions);
          case 5:
            response = _context4.sent;
            _context4.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context4.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context4.next = 33;
              break;
            }
            sites = {};
            result.forEach(function (menu) {
              sites = _objectSpread(_objectSpread({}, sites), {}, _defineProperty({}, menu.id, {
                id: menu.id,
                sites: menu.sites
              }));
            });
            _context4.prev = 14;
            _context4.next = 17;
            return fetch("".concat(ordering.root, "/sites"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
              }
            });
          case 17:
            response2 = _context4.sent;
            _context4.next = 20;
            return response2.json();
          case 20:
            _yield$response2$json = _context4.sent;
            sitesResult = _yield$response2$json.result;
            setSitesState(_objectSpread(_objectSpread({}, sitesState), {}, {
              loading: false,
              sites: sitesResult
            }));
            menus = result.filter(function (menu) {
              return (menu === null || menu === void 0 ? void 0 : menu.business_id) === (business === null || business === void 0 ? void 0 : business.id);
            });
            menusShared = result.filter(function (menu) {
              return (menu === null || menu === void 0 ? void 0 : menu.business_id) !== (business === null || business === void 0 ? void 0 : business.id);
            });
            setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
              loading: false,
              menus: menus,
              menusShared: menusShared,
              error: null
            }));
            _context4.next = 31;
            break;
          case 28:
            _context4.prev = 28;
            _context4.t0 = _context4["catch"](14);
            setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 31:
            _context4.next = 34;
            break;
          case 33:
            setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
              loading: false,
              error: result
            }));
          case 34:
            _context4.next = 39;
            break;
          case 36:
            _context4.prev = 36;
            _context4.t1 = _context4["catch"](0);
            setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
              loading: false,
              error: [_context4.t1.message]
            }));
          case 39:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 36], [14, 28]]);
    }));
    return function getBusinessMenuChannels() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var fetchMenus = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return getBusinessMenus();
            case 2:
              _context5.next = 4;
              return getBusinessMenuChannels();
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function fetchMenus() {
        return _ref5.apply(this, arguments);
      };
    }();
    fetchMenus();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessMenusState: businessMenusState,
    setBusinessMenusState: setBusinessMenusState,
    isSelectedSharedMenus: isSelectedSharedMenus,
    sitesState: sitesState,
    handleChangeBusinessMenuActiveState: handleChangeBusinessMenuActiveState,
    handleDeleteBusinessMenu: handleDeleteBusinessMenu,
    setIsSelectedSharedMenus: setIsSelectedSharedMenus
  })));
};
BusinessMenu.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of business menu props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
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
BusinessMenu.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'categories', 'categories_shared', 'header', 'logo', 'timezone'],
  propsToFetchMenuChannel: ['sites', 'products', 'businesses', 'enabled', 'business_id', 'name', 'comment', 'schedule', 'pickup', 'delivery', 'eatin', 'curbside', 'driver_thru', 'schedule_ranges', 'all_products', 'use_business_schedule', 'external_id', 'seat_delivery', 'catering_delivery', 'catering_pickup', 'snooze_until', 'reservation']
};