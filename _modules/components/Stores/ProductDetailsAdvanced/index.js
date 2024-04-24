"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDetailsAdvanced = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _EditTaxManager = require("../EditTaxManager");
var _styles = require("../../../styles");
var _reactHookForm = require("react-hook-form");
var _styles2 = require("./styles");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _Shared = require("../../Shared");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductDetailsAdvancedUI = function ProductDetailsAdvancedUI(props) {
  var _formState$changes10, _productState$estimat, _taxSelected$value, _fesSelected$value, _productState$cost_pr, _productState$cost_of, _productState$minimum, _productState$maximum, _productState$calorie, _productState$weight, _productState$weight_;
  var formState = props.formState,
    productState = props.productState,
    handleClickProperty = props.handleClickProperty,
    business = props.business,
    taxes = props.taxes,
    taxToEdit = props.taxToEdit,
    setTaxToEdit = props.setTaxToEdit,
    handleSaveTax = props.handleSaveTax,
    handleChangeTax = props.handleChangeTax,
    formTaxChanges = props.formTaxChanges,
    handleDeleteTax = props.handleDeleteTax,
    setAlertState = props.setAlertState,
    alertState = props.alertState,
    fees = props.fees,
    handleUpdateClick = props.handleUpdateClick;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSku = _useState2[0],
    setIsSku = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShowPriceByWeight = _useState4[0],
    setIsShowPriceByWeight = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    taxesOption = _useState6[0],
    setTaxesOption = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    feesOptions = _useState8[0],
    setFeesOptions = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    fesSelected = _useState10[0],
    setFeeSelected = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    taxSelected = _useState12[0],
    setTaxSelected = _useState12[1];
  var _useState13 = (0, _react.useState)({
      action: null,
      id: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    taxToDelete = _useState14[0],
    setTaxToDelete = _useState14[1];
  var estimatedPersons = [{
    value: 'no_apply',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('NO_APPLY', 'No apply')),
    showOnSelected: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('NO_APPLY', 'No apply'))
  }].concat(_toConsumableArray(_toConsumableArray(Array(10)).map(function (item, i) {
    return {
      value: i + 1,
      content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, i + 1)
    };
  })));
  var weightUnitOptions = [{
    value: 'grams',
    content: t('WEIGHT_UNIT_GRAM', 'grams'),
    ratio: 1
  }, {
    value: 'kg',
    content: t('WEIGHT_UNIT_KILOGRAM', 'kilograms'),
    ratio: 0.001
  }, {
    value: 'ounces',
    content: t('WEIGHT_UNIT_OUNCE', 'ounces'),
    ratio: 0.035274
  }, {
    value: 'pounds',
    content: t('WEIGHT_UNIT_POUND', 'pounds'),
    ratio: 0.00220462
  }];
  var getTaxOrFeeString = function getTaxOrFeeString(string) {
    return string === 'taxes' ? 'tax' : 'fee';
  };
  var handleAddTax = function handleAddTax(action) {
    setTaxToEdit({
      action: action,
      payload: true
    });
    if (action === 'taxes') handleChangeTax('type', 1);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setTaxToDelete({
      action: null,
      payload: null
    });
  };
  var getTaxes = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var inheritOption, addTaxOption, taxesOptions;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            inheritOption = {
              name: t('INHERIT_FROM_BUSINESS', 'Inherit from business'),
              value: 'inherit',
              content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " (", business.tax, "% ", business.tax_type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")"),
              showOnSelected: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " (", business.tax, "% ", business.tax_type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")")
            };
            addTaxOption = {
              name: t('ADD_NEW_TAX', 'Add new tax'),
              value: null,
              content: /*#__PURE__*/_react.default.createElement(_styles2.OptionCenter, {
                onClick: function onClick() {
                  return handleAddTax('taxes');
                }
              }, t('ADD_NEW_TAX', 'Add new tax'))
            };
            taxesOptions = [inheritOption].concat(_toConsumableArray(Object.values(taxes).map(function (tax) {
              return {
                value: tax.id,
                name: tax.name,
                content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, tax.name, " (", tax.rate, "% ", tax.type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")"),
                showOnSelected: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, tax.name, " (", tax.rate, "% ", tax.type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")"),
                editFunctionality: (user === null || user === void 0 ? void 0 : user.level) === 0,
                deleteFunctionality: (user === null || user === void 0 ? void 0 : user.level) === 0,
                rate: tax.rate,
                type: tax.type,
                description: tax.description
              };
            })), [addTaxOption]);
            setTaxesOption(taxesOptions);
            setTaxSelected(taxesOptions.find(function (tax) {
              return tax.value === (productState === null || productState === void 0 ? void 0 : productState.tax_id);
            }) || inheritOption);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getTaxes() {
      return _ref.apply(this, arguments);
    };
  }();
  var getFees = function getFees() {
    var inheritOption = {
      name: t('INHERIT_FROM_BUSINESS', 'Inherit from business'),
      value: 'inherit',
      content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " (0$ + ", business.service_fee, "%)"),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " (0$ + ", business.service_fee, "%)")
    };
    var addFeeOption = {
      name: t('ADD_NEW_FEE', 'Add new fee'),
      value: null,
      content: /*#__PURE__*/_react.default.createElement(_styles2.OptionCenter, {
        onClick: function onClick() {
          return handleAddTax('fees');
        }
      }, t('ADD_NEW_FEE', 'Add new fee'))
    };
    var feesOptions = [inheritOption].concat(_toConsumableArray(Object.values(fees).map(function (fee) {
      return {
        value: fee.id,
        name: fee.name,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, fee.name, " (", parsePrice(fee.fixed), " + ", fee.percentage, "%)"),
        showOnSelected: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, fee.name, " (", parsePrice(fee.fixed), " + ", fee.percentage, "%)"),
        editFunctionality: (user === null || user === void 0 ? void 0 : user.level) === 0,
        deleteFunctionality: (user === null || user === void 0 ? void 0 : user.level) === 0,
        fixed: fee.fixed,
        percentage: fee.percentage,
        description: fee.description
      };
    })), [addFeeOption]);
    setFeesOptions(feesOptions);
    setFeeSelected(feesOptions.find(function (fee) {
      return fee.value === (productState === null || productState === void 0 ? void 0 : productState.fee_id);
    }) || inheritOption);
  };
  var deleteTax = function deleteTax(data) {
    handleDeleteTax(data.id, data.action);
    closeAlert();
  };
  var handleEnableSKU = function handleEnableSKU(enabled) {
    setIsSku(enabled);
    if (!enabled) {
      handleClickProperty('sku', -1);
    }
  };
  var handleEnablePriceWeight = function handleEnablePriceWeight(enabled) {
    setIsShowPriceByWeight(enabled);
    if (!enabled) {
      handleClickProperty('weight', null);
    }
  };
  (0, _react.useEffect)(function () {
    if (taxes) getTaxes();
  }, [JSON.stringify(taxes)]);
  (0, _react.useEffect)(function () {
    if (fees) getFees();
  }, [JSON.stringify(fees)]);
  (0, _react.useEffect)(function () {
    if (taxToDelete.action) {
      setAlertState({
        open: true,
        content: t("ARE_YOUR_SURE_DELETE_".concat(getTaxOrFeeString(taxToDelete.action).toUpperCase()), "Are you sure do you want delete this ".concat(getTaxOrFeeString(taxToDelete.action), "?"))
      });
    }
  }, [taxToDelete]);
  var onSubmit = function onSubmit() {
    var valid = checkValidate();
    if (Object.keys(formState.changes).length > 0 && valid) {
      handleUpdateClick();
    }
  };
  var checkValidate = function checkValidate() {
    var _formState$changes, _formState$changes2, _formState$changes3, _formState$changes4, _formState$changes5;
    var valid = true;
    if ((formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.maximum_per_order) === '0') {
      valid = false;
      setAlertState({
        open: true,
        content: t('REMOVE_MAXIMUM_QUANTITY_RESTRICTION', 'To remove the maximum quantity restriction, leave the Maximum quantity to order space empty')
      });
    }
    if (formState !== null && formState !== void 0 && (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.minimum_per_order && formState !== null && formState !== void 0 && (_formState$changes3 = formState.changes) !== null && _formState$changes3 !== void 0 && _formState$changes3.maximum_per_order && !((formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.maximum_per_order) === null || (formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.maximum_per_order) === '0')) {
      var _formState$changes6, _formState$changes7;
      if (Number(formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.minimum_per_order) > Number(formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.maximum_per_order)) {
        valid = false;
        setAlertState({
          open: true,
          content: t('MINIMUM_QUANTITY_MUST_SMALL_MAXIMUM_QUANTITY', 'The minimum quantity must be small than the maximum quantity')
        });
      }
    }
    return valid;
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    var _formState$result;
    if (formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: formState === null || formState === void 0 || (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.result]);
  (0, _react.useEffect)(function () {
    if (parseInt(productState === null || productState === void 0 ? void 0 : productState.sku) === -1 || !(productState !== null && productState !== void 0 && productState.sku)) {
      setIsSku(false);
    } else {
      setIsSku(true);
    }
  }, [productState]);
  (0, _react.useEffect)(function () {
    if (productState !== null && productState !== void 0 && productState.weight) {
      setIsShowPriceByWeight(true);
    } else {
      setIsShowPriceByWeight(false);
    }
  }, [productState === null || productState === void 0 ? void 0 : productState.weight]);
  (0, _react.useEffect)(function () {
    var _formState$changes8, _formState$changes9;
    if (formState !== null && formState !== void 0 && (_formState$changes8 = formState.changes) !== null && _formState$changes8 !== void 0 && _formState$changes8.weight && !(formState !== null && formState !== void 0 && (_formState$changes9 = formState.changes) !== null && _formState$changes9 !== void 0 && _formState$changes9.weight_unit)) {
      handleClickProperty('weight_unit', 'grams');
    }
  }, [formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.weight]);
  (0, _react.useEffect)(function () {
    var _formState$changes11, _formState$changes12, _formState$changes13, _formState$changes14, _formState$changes15, _formState$changes16;
    if (formState !== null && formState !== void 0 && (_formState$changes11 = formState.changes) !== null && _formState$changes11 !== void 0 && _formState$changes11.minimum_per_order && !(formState !== null && formState !== void 0 && (_formState$changes12 = formState.changes) !== null && _formState$changes12 !== void 0 && _formState$changes12.maximum_per_order || (formState === null || formState === void 0 || (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.maximum_per_order) === null)) {
      handleClickProperty('maximum_per_order', productState === null || productState === void 0 ? void 0 : productState.maximum_per_order);
    }
    if ((formState !== null && formState !== void 0 && (_formState$changes14 = formState.changes) !== null && _formState$changes14 !== void 0 && _formState$changes14.maximum_per_order || (formState === null || formState === void 0 || (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.maximum_per_order) === null) && !(formState !== null && formState !== void 0 && (_formState$changes16 = formState.changes) !== null && _formState$changes16 !== void 0 && _formState$changes16.minimum_per_order)) {
      handleClickProperty('minimum_per_order', productState === null || productState === void 0 ? void 0 : productState.minimum_per_order);
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.changes]);
  return /*#__PURE__*/_react.default.createElement(_styles2.PropertiesContainer, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, isSku && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "sku"
  }, "SKU"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "sku",
    id: "sku",
    placeholder: t('SKU', 'Stock Keeping Unit (SKU)'),
    defaultValue: parseInt(productState === null || productState === void 0 ? void 0 : productState.sku) !== -1 ? productState === null || productState === void 0 ? void 0 : productState.sku : '',
    onChange: function onChange(e) {
      var _e$target$value;
      return handleClickProperty('sku', (_e$target$value = e.target.value) !== null && _e$target$value !== void 0 ? _e$target$value : null);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "estimated"
  }, t('ESTIMATED_PERSON', 'Estimated person')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    notAsync: true,
    defaultValue: (_productState$estimat = productState === null || productState === void 0 ? void 0 : productState.estimated_person) !== null && _productState$estimat !== void 0 ? _productState$estimat : 'no_apply',
    options: estimatedPersons,
    onChange: function onChange(val) {
      return handleClickProperty('estimated_person', val === 'no_apply' ? null : val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "tax"
  }, t('TAX', 'Tax')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, taxSelected && /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    placeholder: taxSelected.showOnSelected,
    defaultValue: (_taxSelected$value = taxSelected === null || taxSelected === void 0 ? void 0 : taxSelected.value) !== null && _taxSelected$value !== void 0 ? _taxSelected$value : 'inherit',
    options: taxesOption,
    onChange: function onChange(val) {
      return handleClickProperty('tax_id', val === 'inherit' ? null : val);
    },
    onEdit: function onEdit(val) {
      return setTaxToEdit({
        action: 'taxes',
        payload: val
      });
    },
    onDelete: function onDelete(val) {
      return setTaxToDelete({
        action: 'taxes',
        id: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "fees"
  }, t('FEES', 'Fees')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, fesSelected && /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    placeholder: fesSelected.showOnSelected,
    defaultValue: (_fesSelected$value = fesSelected === null || fesSelected === void 0 ? void 0 : fesSelected.value) !== null && _fesSelected$value !== void 0 ? _fesSelected$value : 'inherit',
    options: feesOptions,
    onChange: function onChange(val) {
      return handleClickProperty('fee_id', val === 'inherit' ? null : val);
    },
    onEdit: function onEdit(val) {
      return setTaxToEdit({
        action: 'fees',
        payload: val
      });
    },
    onDelete: function onDelete(val) {
      return setTaxToDelete({
        action: 'fees',
        id: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "external_id"
  }, t('EXTERNAL_ID', 'External Id')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "external_id",
    placeholder: t('EXTERNAL_ID', 'External Id'),
    defaultValue: productState === null || productState === void 0 ? void 0 : productState.external_id,
    onChange: function onChange(e) {
      var _e$target$value2;
      return handleClickProperty('external_id', (_e$target$value2 = e.target.value) !== null && _e$target$value2 !== void 0 ? _e$target$value2 : null);
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "cost_price"
  }, t('PRODUCT_COST', 'Product cost')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "cost_price",
    id: "cost_price",
    placeholder: "0.00",
    defaultValue: (_productState$cost_pr = productState === null || productState === void 0 ? void 0 : productState.cost_price) !== null && _productState$cost_pr !== void 0 ? _productState$cost_pr : '',
    onChange: function onChange(e) {
      var _e$target$value3;
      return handleClickProperty('cost_price', (_e$target$value3 = e.target.value) !== null && _e$target$value3 !== void 0 ? _e$target$value3 : null);
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "cost_offer_price"
  }, t('PRODUCT_REGULAR_COST', 'Product cost - regular price')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "cost_offer_price",
    id: "cost_offer_price",
    placeholder: "0.00",
    defaultValue: (_productState$cost_of = productState === null || productState === void 0 ? void 0 : productState.cost_offer_price) !== null && _productState$cost_of !== void 0 ? _productState$cost_of : '',
    onChange: function onChange(e) {
      var _e$target$value4;
      return handleClickProperty('cost_offer_price', (_e$target$value4 = e.target.value) !== null && _e$target$value4 !== void 0 ? _e$target$value4 : null);
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "minimum_per_order"
  }, t('MINIMUM_QUANTITY_ORDER', 'Minimum quantity to order')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "minimum_per_order",
    id: "minimum_per_order",
    placeholder: "0",
    defaultValue: (_productState$minimum = productState === null || productState === void 0 ? void 0 : productState.minimum_per_order) !== null && _productState$minimum !== void 0 ? _productState$minimum : '',
    ref: formMethods.register({
      required: t('MINIMUM_QUANTITY_REQUIRED', 'The minimum quantity is required')
    }),
    onChange: function onChange(e) {
      var _e$target$value5;
      return handleClickProperty('minimum_per_order', (_e$target$value5 = e.target.value) !== null && _e$target$value5 !== void 0 ? _e$target$value5 : null);
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "maximum_per_order"
  }, t('MAXIMUM_QUANTITY_ORDER', 'Maximum quantity to order')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "maximum_per_order",
    id: "maximum_per_order",
    placeholder: t('NO_LIMITS_IN_MAX_QUANTITY_TO_ORDER', 'No limits in max quantity to order'),
    defaultValue: (_productState$maximum = productState === null || productState === void 0 ? void 0 : productState.maximum_per_order) !== null && _productState$maximum !== void 0 ? _productState$maximum : '',
    onChange: function onChange(e) {
      handleClickProperty('maximum_per_order', e.target.value === '' ? null : e.target.value);
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, {
    className: "".concat(isShowPriceByWeight ? 'growUnset showWeight' : 'growUnset')
  }, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "calories"
  }, t('CALORIES', 'Calories')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "calories",
    id: "calories",
    placeholder: "0.00",
    defaultValue: (_productState$calorie = productState === null || productState === void 0 ? void 0 : productState.calories) !== null && _productState$calorie !== void 0 ? _productState$calorie : '',
    onChange: function onChange(e) {
      var _e$target$value6;
      return handleClickProperty('calories', (_e$target$value6 = e.target.value) !== null && _e$target$value6 !== void 0 ? _e$target$value6 : null);
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), isShowPriceByWeight && /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "weight"
  }, t('PRODUCT_WEIGHT', 'Product weight')), /*#__PURE__*/_react.default.createElement(_styles2.WeightWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "weight",
    id: "weight",
    placeholder: "0.00",
    defaultValue: (_productState$weight = productState === null || productState === void 0 ? void 0 : productState.weight) !== null && _productState$weight !== void 0 ? _productState$weight : '',
    onChange: function onChange(e) {
      var _e$target$value7;
      return handleClickProperty('weight', (_e$target$value7 = e.target.value) !== null && _e$target$value7 !== void 0 ? _e$target$value7 : null);
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    notAsync: true,
    defaultValue: (_productState$weight_ = productState === null || productState === void 0 ? void 0 : productState.weight_unit) !== null && _productState$weight_ !== void 0 ? _productState$weight_ : 'grams',
    options: weightUnitOptions,
    onChange: function onChange(val) {
      return handleClickProperty('weight_unit', val !== null && val !== void 0 ? val : 'grams');
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOptionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('FEATURED', 'Featured')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (productState === null || productState === void 0 ? void 0 : productState.featured) || false,
    onChange: function onChange(enabled) {
      return handleClickProperty('featured', enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('UPSELLING', 'Upselling')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (productState === null || productState === void 0 ? void 0 : productState.upselling) || false,
    onChange: function onChange(enabled) {
      return handleClickProperty('upselling', enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('SKU', 'Stock Keeping Unit (SKU)')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: isSku,
    onChange: function onChange(enabled) {
      return handleEnableSKU(enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('HIDE_SPECIAL_INSTRUCTIONS', 'Hide special instructions')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: productState === null || productState === void 0 ? void 0 : productState.hide_special_instructions,
    onChange: function onChange(enabled) {
      return handleClickProperty('hide_special_instructions', enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('SHOW_PRICE_BY_WEIGHT', 'Show price by weight')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: isShowPriceByWeight,
    onChange: function onChange(enabled) {
      return handleEnablePriceWeight(enabled);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "7.6px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    open: !!(taxToEdit !== null && taxToEdit !== void 0 && taxToEdit.action),
    width: "80%",
    padding: "30px",
    title: typeof (taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.payload) === 'boolean' ? t("ADD_".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action).toUpperCase()), "Add ".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action))) : t("EDIT_".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action).toUpperCase()), "Edit ".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action))),
    onClose: function onClose() {
      return setTaxToEdit({
        action: null,
        payload: null
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_EditTaxManager.EditTaxManager, {
    type: taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action,
    data: taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.payload,
    onChange: handleChangeTax,
    formChanges: formTaxChanges,
    onClose: function onClose() {
      return setTaxToEdit({
        action: null,
        payload: null
      });
    },
    handleSave: handleSaveTax
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: taxToDelete.action ? t("DELETE_".concat(getTaxOrFeeString(taxToDelete === null || taxToDelete === void 0 ? void 0 : taxToDelete.action).toUpperCase()), "Delete ".concat(getTaxOrFeeString(taxToDelete === null || taxToDelete === void 0 ? void 0 : taxToDelete.action))) : t('ERROR'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return taxToDelete.action ? deleteTax(taxToDelete) : closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var ProductDetailsAdvanced = exports.ProductDetailsAdvanced = function ProductDetailsAdvanced(props) {
  var productAdvancedProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductDetailsAdvancedUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductDetailsAdvanced, productAdvancedProps);
};