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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ProductDetailsAdvancedUI = function ProductDetailsAdvancedUI(props) {
  var _formState$changes0, _productState$estimat, _taxSelected$value, _feesSelected$value, _productState$cost_pr, _productState$cost_of, _productState$minimum, _productState$maximum, _productState$calorie, _productState$weight, _productState$weight_;
  var formState = props.formState,
    productState = props.productState,
    handleClickProperty = props.handleClickProperty,
    business = props.business,
    taxes = props.taxes,
    taxToEdit = props.taxToEdit,
    setTaxToEdit = props.setTaxToEdit,
    handleSaveTax = props.handleSaveTax,
    handleChangeTax = props.handleChangeTax,
    handleDeleteTax = props.handleDeleteTax,
    setAlertState = props.setAlertState,
    alertState = props.alertState,
    fees = props.fees,
    handleUpdateClick = props.handleUpdateClick,
    formTaxChanges = props.formTaxChanges,
    setFormTaxChanges = props.setFormTaxChanges;
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
    _useState0 = _slicedToArray(_useState9, 2),
    feesSelected = _useState0[0],
    setFeeSelected = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    taxSelected = _useState10[0],
    setTaxSelected = _useState10[1];
  var _useState11 = (0, _react.useState)({
      action: null,
      id: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    taxToDelete = _useState12[0],
    setTaxToDelete = _useState12[1];
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
  var handleCloseModal = function handleCloseModal() {
    setTaxToEdit({
      action: null,
      payload: null
    });
    setFormTaxChanges({});
  };
  var getTaxes = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var inheritOption, addTaxOption, taxesOptions;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
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
                description: tax.description,
                order_type_rates: tax.order_type_rates
              };
            })), [addTaxOption]);
            setTaxesOption(taxesOptions);
            setTaxSelected(taxesOptions.find(function (tax) {
              return tax.value === (productState === null || productState === void 0 ? void 0 : productState.tax_id);
            }) || inheritOption);
          case 1:
            return _context.a(2);
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
  }, [JSON.stringify(taxes), productState === null || productState === void 0 ? void 0 : productState.tax_id]);
  (0, _react.useEffect)(function () {
    if (fees) getFees();
  }, [JSON.stringify(fees), productState === null || productState === void 0 ? void 0 : productState.fee_id]);
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
    if (formState !== null && formState !== void 0 && (_formState$changes8 = formState.changes) !== null && _formState$changes8 !== void 0 && _formState$changes8.weight && !(productState !== null && productState !== void 0 && productState.weight_unit) && !(formState !== null && formState !== void 0 && (_formState$changes9 = formState.changes) !== null && _formState$changes9 !== void 0 && _formState$changes9.weight_unit)) {
      handleClickProperty('weight_unit', 'grams');
    }
  }, [formState === null || formState === void 0 || (_formState$changes0 = formState.changes) === null || _formState$changes0 === void 0 ? void 0 : _formState$changes0.weight]);
  (0, _react.useEffect)(function () {
    var _formState$changes1, _formState$changes10, _formState$changes11, _formState$changes12, _formState$changes13, _formState$changes14;
    if (formState !== null && formState !== void 0 && (_formState$changes1 = formState.changes) !== null && _formState$changes1 !== void 0 && _formState$changes1.minimum_per_order && !(formState !== null && formState !== void 0 && (_formState$changes10 = formState.changes) !== null && _formState$changes10 !== void 0 && _formState$changes10.maximum_per_order || (formState === null || formState === void 0 || (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.maximum_per_order) === null)) {
      handleClickProperty('maximum_per_order', productState === null || productState === void 0 ? void 0 : productState.maximum_per_order);
    }
    if ((formState !== null && formState !== void 0 && (_formState$changes12 = formState.changes) !== null && _formState$changes12 !== void 0 && _formState$changes12.maximum_per_order || (formState === null || formState === void 0 || (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.maximum_per_order) === null) && !(formState !== null && formState !== void 0 && (_formState$changes14 = formState.changes) !== null && _formState$changes14 !== void 0 && _formState$changes14.minimum_per_order)) {
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
  }, t('FEES', 'Fees')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, feesSelected && /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    placeholder: feesSelected.showOnSelected,
    defaultValue: (_feesSelected$value = feesSelected === null || feesSelected === void 0 ? void 0 : feesSelected.value) !== null && _feesSelected$value !== void 0 ? _feesSelected$value : 'inherit',
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
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')), !!(taxToEdit !== null && taxToEdit !== void 0 && taxToEdit.action) && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    open: !!(taxToEdit !== null && taxToEdit !== void 0 && taxToEdit.action),
    width: "80%",
    padding: "30px",
    title: typeof (taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.payload) === 'boolean' ? t("ADD_".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action).toUpperCase()), "Add ".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action))) : t("EDIT_".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action).toUpperCase()), "Edit ".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action))),
    onClose: handleCloseModal
  }, /*#__PURE__*/_react.default.createElement(_EditTaxManager.EditTaxManager, {
    type: taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action,
    data: taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.payload,
    onChange: handleChangeTax,
    formChanges: formTaxChanges,
    onClose: handleCloseModal,
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