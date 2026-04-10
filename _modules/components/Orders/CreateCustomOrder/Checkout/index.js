"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _VscWarning = _interopRequireDefault(require("@meronex/icons/vsc/VscWarning"));
var _PaymentOptions = require("../PaymentOptions");
var _PaymentOptionWallet = require("../PaymentOptionWallet");
var _DriverTips = require("../DriverTips");
var _CartBill = require("../CartBill");
var _Shared = require("../../../Shared");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var CheckoutUI = function CheckoutUI(props) {
  var _businessDetails$busi, _businessDetails$busi2, _configs$table_numer_, _businessConfigs$find, _businessConfigs$find2, _configs$cash_wallet, _configs$wallet_enabl, _validationFields$fie, _validationFields$fie2, _cart$comment, _validationFields$fie3, _validationFields$fie4, _paymethodSelected$da, _paymethodSelected$da2, _cardList$cards, _cartState$cart, _validationFields$fie5, _validationFields$fie6, _configs$driver_tip_o, _configs$driver_tip_o2, _configs$driver_tip_o3, _validationFields$fie7, _businessDetails$busi3, _businessDetails$busi4, _businessDetails$busi5, _configs$driver_tip_t, _configs$driver_tip_u, _configs$driver_tip_t2, _validationFields$fie10, _validationFields$fie11;
  var cart = props.cart,
    errors = props.errors,
    placing = props.placing,
    cartState = props.cartState,
    loyaltyPlansState = props.loyaltyPlansState,
    businessDetails = props.businessDetails,
    paymethodSelected = props.paymethodSelected,
    handlePaymethodChange = props.handlePaymethodChange,
    handlerClickPlaceOrder = props.handlerClickPlaceOrder,
    handleOrderRedirect = props.handleOrderRedirect,
    isCustomerMode = props.isCustomerMode,
    isResetPaymethod = props.isResetPaymethod,
    setIsResetPaymethod = props.setIsResetPaymethod,
    onPlaceOrderClick = props.onPlaceOrderClick,
    placeSpotNumber = props.placeSpotNumber;
  var _useValidationFields = (0, _orderingComponentsAdmin.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var _useOrder = (0, _orderingComponentsAdmin.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    _useOrder2$ = _useOrder2[0],
    options = _useOrder2$.options,
    loading = _useOrder2$.loading;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useCustomer = (0, _orderingComponentsAdmin.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    customerState = _useCustomer2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    errorCash = _useState2[0],
    setErrorCash = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    userErrors = _useState4[0],
    setUserErrors = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    requiredFields = _useState8[0],
    setRequiredFields = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    cardList = _useState0[0],
    setCardList = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    paymethodClicked = _useState10[0],
    setPaymethodClicked = _useState10[1];
  var cardsMethods = ['stripe', 'credomatic'];
  var businessConfigs = (_businessDetails$busi = businessDetails === null || businessDetails === void 0 || (_businessDetails$busi2 = businessDetails.business) === null || _businessDetails$busi2 === void 0 ? void 0 : _businessDetails$busi2.configs) !== null && _businessDetails$busi !== void 0 ? _businessDetails$busi : [];
  var isTableNumberEnabled = configs === null || configs === void 0 || (_configs$table_numer_ = configs.table_numer_enabled) === null || _configs$table_numer_ === void 0 ? void 0 : _configs$table_numer_.value;
  var isWalletCashEnabled = ((_businessConfigs$find = businessConfigs.find(function (config) {
    return config.key === 'wallet_cash_enabled';
  })) === null || _businessConfigs$find === void 0 ? void 0 : _businessConfigs$find.value) === '1';
  var isWalletCreditPointsEnabled = ((_businessConfigs$find2 = businessConfigs.find(function (config) {
    return config.key === 'wallet_credit_point_enabled';
  })) === null || _businessConfigs$find2 === void 0 ? void 0 : _businessConfigs$find2.value) === '1';
  var isWalletEnabled = (configs === null || configs === void 0 || (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 || (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && (isWalletCashEnabled || isWalletCreditPointsEnabled) && !isCustomerMode;
  var isGiftCardCart = !(cart !== null && cart !== void 0 && cart.business_id);
  var validateCommentsCartField = (validationFields === null || validationFields === void 0 || (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.checkout) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.comments) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.enabled) && (validationFields === null || validationFields === void 0 || (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.checkout) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.comments) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.required) && ((cart === null || cart === void 0 ? void 0 : cart.comment) === null || (cart === null || cart === void 0 || (_cart$comment = cart.comment) === null || _cart$comment === void 0 ? void 0 : _cart$comment.trim().length) === 0);
  var validateZipcodeCard = (validationFields === null || validationFields === void 0 || (_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 || (_validationFields$fie3 = _validationFields$fie3.card) === null || _validationFields$fie3 === void 0 || (_validationFields$fie3 = _validationFields$fie3.zipcode) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.enabled) && (validationFields === null || validationFields === void 0 || (_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 || (_validationFields$fie4 = _validationFields$fie4.card) === null || _validationFields$fie4 === void 0 || (_validationFields$fie4 = _validationFields$fie4.zipcode) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.required) && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'stripe' && (paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$da = paymethodSelected.data) === null || _paymethodSelected$da === void 0 ? void 0 : _paymethodSelected$da.card) && !(paymethodSelected !== null && paymethodSelected !== void 0 && (_paymethodSelected$da2 = paymethodSelected.data) !== null && _paymethodSelected$da2 !== void 0 && (_paymethodSelected$da2 = _paymethodSelected$da2.card) !== null && _paymethodSelected$da2 !== void 0 && _paymethodSelected$da2.zipcode);
  var isDisablePlaceOrderButton = !(cart !== null && cart !== void 0 && cart.valid) || !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.balance) > 0 || cardsMethods.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) && (cardList === null || cardList === void 0 || (_cardList$cards = cardList.cards) === null || _cardList$cards === void 0 ? void 0 : _cardList$cards.length) === 0 || placing || errorCash || loading || isTableNumberEnabled === '1' && (options === null || options === void 0 ? void 0 : options.type) === 3 && !(cartState !== null && cartState !== void 0 && (_cartState$cart = cartState.cart) !== null && _cartState$cart !== void 0 && _cartState$cart.spot_number || cart !== null && cart !== void 0 && cart.spot_number || placeSpotNumber) || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || options.type === 1 && (validationFields === null || validationFields === void 0 || (_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5.checkout) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5.driver_tip) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.enabled) && (validationFields === null || validationFields === void 0 || (_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6.checkout) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6.driver_tip) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.required) && Number(cart === null || cart === void 0 ? void 0 : cart.driver_tip) <= 0 || validateCommentsCartField || validateZipcodeCard;
  var driverTipsOptions = typeof (configs === null || configs === void 0 || (_configs$driver_tip_o = configs.driver_tip_options) === null || _configs$driver_tip_o === void 0 ? void 0 : _configs$driver_tip_o.value) === 'string' ? JSON.parse(configs === null || configs === void 0 || (_configs$driver_tip_o2 = configs.driver_tip_options) === null || _configs$driver_tip_o2 === void 0 ? void 0 : _configs$driver_tip_o2.value) || [] : (configs === null || configs === void 0 || (_configs$driver_tip_o3 = configs.driver_tip_options) === null || _configs$driver_tip_o3 === void 0 ? void 0 : _configs$driver_tip_o3.value) || [];
  var driverTipsField = !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.business_id) && options.type === 1 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (validationFields === null || validationFields === void 0 || (_validationFields$fie7 = validationFields.fields) === null || _validationFields$fie7 === void 0 || (_validationFields$fie7 = _validationFields$fie7.checkout) === null || _validationFields$fie7 === void 0 || (_validationFields$fie7 = _validationFields$fie7.driver_tip) === null || _validationFields$fie7 === void 0 ? void 0 : _validationFields$fie7.enabled) && driverTipsOptions.length > 0;
  var handlePlaceOrder = function handlePlaceOrder() {
    if (!userErrors.length && (!(requiredFields !== null && requiredFields !== void 0 && requiredFields.length) || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'cash' || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'card_delivery')) {
      var body = {};
      handlerClickPlaceOrder && handlerClickPlaceOrder(null, body);
      return;
    }
    setAlertState({
      open: true,
      content: Object.values(userErrors).map(function (error) {
        return error;
      })
    });
  };
  var checkValidationFields = function checkValidationFields() {
    var _validationFields$fie8, _validationFields$fie9, _validationFields$fie0, _configs$verification;
    setUserErrors([]);
    var errors = [];
    var notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes', 'comments'];
    var userSelected = isCustomerMode ? customerState.user : user;
    var _requiredFields = [];
    Object.values(validationFields === null || validationFields === void 0 || (_validationFields$fie8 = validationFields.fields) === null || _validationFields$fie8 === void 0 ? void 0 : _validationFields$fie8.checkout).map(function (field) {
      if (field !== null && field !== void 0 && field.enabled && field !== null && field !== void 0 && field.required && !notFields.includes(field.code)) {
        if (userSelected && !userSelected[field === null || field === void 0 ? void 0 : field.code]) {
          _requiredFields.push(field === null || field === void 0 ? void 0 : field.code);
        }
      }
    });
    if (userSelected && !(userSelected !== null && userSelected !== void 0 && userSelected.cellphone) && (validationFields !== null && validationFields !== void 0 && (_validationFields$fie9 = validationFields.fields) !== null && _validationFields$fie9 !== void 0 && (_validationFields$fie9 = _validationFields$fie9.checkout) !== null && _validationFields$fie9 !== void 0 && (_validationFields$fie9 = _validationFields$fie9.cellphone) !== null && _validationFields$fie9 !== void 0 && _validationFields$fie9.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie0 = validationFields.fields) !== null && _validationFields$fie0 !== void 0 && (_validationFields$fie0 = _validationFields$fie0.checkout) !== null && _validationFields$fie0 !== void 0 && (_validationFields$fie0 = _validationFields$fie0.cellphone) !== null && _validationFields$fie0 !== void 0 && _validationFields$fie0.required || (configs === null || configs === void 0 || (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1')) {
      _requiredFields.push('cellphone');
    }
    setRequiredFields(_requiredFields);
    if (userSelected && userSelected !== null && userSelected !== void 0 && userSelected.cellphone) {
      if (userSelected !== null && userSelected !== void 0 && userSelected.country_phone_code) {
        var phone = null;
        phone = "+".concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.country_phone_code).concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.cellphone.replace("+".concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.country_phone_code), ''));
        var phoneNumber = (0, _libphonenumberJs.default)(phone);
        if (!(phoneNumber !== null && phoneNumber !== void 0 && phoneNumber.isValid())) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_INVALID', 'The field Phone number is invalid.'));
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'));
      }
    }
    setUserErrors(errors);
  };
  (0, _react.useEffect)(function () {
    var _validationFields$fie1;
    if (validationFields && validationFields !== null && validationFields !== void 0 && (_validationFields$fie1 = validationFields.fields) !== null && _validationFields$fie1 !== void 0 && _validationFields$fie1.checkout) {
      checkValidationFields();
    }
  }, [validationFields, user, customerState]);
  (0, _react.useEffect)(function () {
    if (errors) {
      setAlertState({
        open: true,
        content: errors
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    if (isResetPaymethod) {
      handlePaymethodChange(null);
      setIsResetPaymethod(true);
    }
  }, [isResetPaymethod]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Conatiner, null, !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 2 && /*#__PURE__*/_react.default.createElement(_styles2.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page'))), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles2.PaymentMethodContainer, {
    className: "paymentsContainer"
  }, /*#__PURE__*/_react.default.createElement(_styles2.SectionTitleContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('PAYMENT_METHODS', 'Payment Methods')), /*#__PURE__*/_react.default.createElement(_styles2.Flag, null, t('REQUIRED', 'Required'))), !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 4 && /*#__PURE__*/_react.default.createElement(_styles2.WarningMessage, {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again'))), /*#__PURE__*/_react.default.createElement(_PaymentOptions.PaymentOptions, {
    cart: cart,
    isDisabled: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    businessId: !isGiftCardCart ? businessDetails === null || businessDetails === void 0 || (_businessDetails$busi3 = businessDetails.business) === null || _businessDetails$busi3 === void 0 ? void 0 : _businessDetails$busi3.id : -1,
    isLoading: !isGiftCardCart ? businessDetails.loading : false,
    paymethods: businessDetails === null || businessDetails === void 0 || (_businessDetails$busi4 = businessDetails.business) === null || _businessDetails$busi4 === void 0 ? void 0 : _businessDetails$busi4.paymethods,
    onPaymentChange: handlePaymethodChange,
    errorCash: errorCash,
    setErrorCash: setErrorCash,
    handleOrderRedirect: handleOrderRedirect,
    isCustomerMode: isCustomerMode,
    paySelected: paymethodSelected,
    handlePlaceOrder: handlePlaceOrder,
    onPlaceOrderClick: onPlaceOrderClick,
    setCardList: setCardList,
    requiredFields: requiredFields,
    paymethodClicked: paymethodClicked,
    setPaymethodClicked: setPaymethodClicked
  })), isWalletEnabled && !(businessDetails !== null && businessDetails !== void 0 && businessDetails.loading) && /*#__PURE__*/_react.default.createElement(_PaymentOptionWallet.PaymentOptionWallet, {
    cart: cart,
    loyaltyPlansState: loyaltyPlansState,
    businessConfigs: businessDetails === null || businessDetails === void 0 || (_businessDetails$busi5 = businessDetails.business) === null || _businessDetails$busi5 === void 0 ? void 0 : _businessDetails$busi5.configs
  }), driverTipsField && /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 1,
    isDriverTipUseCustom: !!parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10),
    driverTip: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t2 = configs.driver_tip_type) === null || _configs$driver_tip_t2 === void 0 ? void 0 : _configs$driver_tip_t2.value, 10) === 1 ? cart === null || cart === void 0 ? void 0 : cart.driver_tip : cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate,
    cart: cart,
    useOrderContext: true
  }), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_CartBill.CartBill, {
    cart: cart
  }), !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? 'secundary' : 'primary',
    disabled: isDisablePlaceOrderButton,
    onClick: function onClick() {
      return handlePlaceOrder();
    }
  }, !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order'))), !(cart !== null && cart !== void 0 && cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')), !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.balance) > 0 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')), !(cart !== null && cart !== void 0 && cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.')), isTableNumberEnabled === '1' && (options === null || options === void 0 ? void 0 : options.type) === 3 && !(cart !== null && cart !== void 0 && cart.spot_number || placeSpotNumber) && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_PLACE_SPOT', 'Please, select your spot to place order.')), options.type === 1 && (validationFields === null || validationFields === void 0 || (_validationFields$fie10 = validationFields.fields) === null || _validationFields$fie10 === void 0 || (_validationFields$fie10 = _validationFields$fie10.checkout) === null || _validationFields$fie10 === void 0 || (_validationFields$fie10 = _validationFields$fie10.driver_tip) === null || _validationFields$fie10 === void 0 ? void 0 : _validationFields$fie10.enabled) && (validationFields === null || validationFields === void 0 || (_validationFields$fie11 = validationFields.fields) === null || _validationFields$fie11 === void 0 || (_validationFields$fie11 = _validationFields$fie11.checkout) === null || _validationFields$fie11 === void 0 || (_validationFields$fie11 = _validationFields$fie11.driver_tip) === null || _validationFields$fie11 === void 0 ? void 0 : _validationFields$fie11.required) && Number(cart === null || cart === void 0 ? void 0 : cart.driver_tip) <= 0 && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_INVALID_DRIVER_TIP', 'Driver Tip is required.')), validateCommentsCartField && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_INVALID_CART_COMMENTS', 'Cart comments is required.')), validateZipcodeCard && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_CARD_ZIPCODE_REQUIRED', 'Your card selected has not zipcode')), (cart === null || cart === void 0 ? void 0 : cart.valid_preorder) !== undefined && !(cart !== null && cart !== void 0 && cart.valid_preorder) && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('INVALID_CART_MOMENT', 'Selected schedule time is invalid, please select a schedule into the business schedule interval.')), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('CUSTOMER_DETAILS', 'Customer Details'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var Checkout = exports.Checkout = function Checkout(props) {
  var _Object$values, _cartState$error, _cartState$cart2;
  var errors = props.errors,
    clearErrors = props.clearErrors,
    cartUuid = props.cartUuid,
    handleOrderRedirect = props.handleOrderRedirect,
    handleSearchRedirect = props.handleSearchRedirect,
    handleCheckoutListRedirect = props.handleCheckoutListRedirect,
    businessSlug = props.businessSlug;
  var _useOrder3 = (0, _orderingComponentsAdmin.useOrder)(),
    _useOrder4 = _slicedToArray(_useOrder3, 2),
    orderState = _useOrder4[0],
    confirmCart = _useOrder4[1].confirmCart;
  var _useSession3 = (0, _orderingComponentsAdmin.useSession)(),
    _useSession4 = _slicedToArray(_useSession3, 1),
    token = _useSession4[0].token;
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useLanguage3 = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useState11 = (0, _react.useState)({
      loading: true,
      error: null,
      cart: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    cartState = _useState12[0],
    setCartState = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    currentCart = _useState14[0],
    setCurrentCart = _useState14[1];
  var _useState15 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    alertState = _useState16[0],
    setAlertState = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isResetPaymethod = _useState18[0],
    setIsResetPaymethod = _useState18[1];
  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && (((_Object$values = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values === void 0 ? void 0 : _Object$values.filter(function (cart) {
    var _cart$products;
    return (cart === null || cart === void 0 ? void 0 : cart.products) && (cart === null || cart === void 0 || (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length);
  })) || null);
  var carts = businessSlug ? cartsWithProducts.filter(function (cart) {
    var _cart$business;
    return (cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug) === businessSlug || businessSlug === (cart === null || cart === void 0 ? void 0 : cart.business_id);
  }) : cartsWithProducts;
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    clearErrors && clearErrors();
  };
  (0, _react.useEffect)(function () {
    if (!orderState.loading && currentCart !== null && currentCart !== void 0 && currentCart.business_id) {
      var _Object$values2;
      setCurrentCart.apply(void 0, _toConsumableArray((_Object$values2 = Object.values(orderState.carts)) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.filter(function (cart) {
        return (cart === null || cart === void 0 ? void 0 : cart.business_id) === (currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id);
      })));
    }
  }, [orderState.loading]);
  (0, _react.useEffect)(function () {
    if (errors !== null && errors !== void 0 && errors.length) {
      setAlertState({
        open: true,
        content: errors
      });
    }
  }, [errors]);
  var getOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(cartId) {
      var _result$order, result, cart, userCustomer, url, response, content, _result, credomaticData, urlParams, paramsObj, _confirmCartRes$resul, confirmCartRes, _cart, spotNumberFromStorage, _JSON$parse, _JSON$parse2, _cart2, spotNumber, slug, _t, _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            result = {};
            cart = carts.find(function (cart) {
              return cart.uuid === cartId;
            });
            userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
            if (!(cart && !userCustomer)) {
              _context.n = 1;
              break;
            }
            result = JSON.parse(JSON.stringify(cart));
            _context.n = 4;
            break;
          case 1:
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: true
            }));
            url = userCustomer ? "".concat(ordering.root, "/carts/").concat(cartId, "?user_id=").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) : "".concat(ordering.root, "/carts/").concat(cartId);
            _context.n = 2;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId
              }
            });
          case 2:
            response = _context.v;
            _context.n = 3;
            return response.json();
          case 3:
            content = _context.v;
            result = content.result;
          case 4:
            if (!(result.status === 1 && (_result$order = result.order) !== null && _result$order !== void 0 && _result$order.uuid)) {
              _context.n = 5;
              break;
            }
            handleOrderRedirect(result.order.uuid);
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false
            }));
            _context.n = 11;
            break;
          case 5:
            if (!(result.status === 2)) {
              _context.n = 10;
              break;
            }
            credomaticData = null;
            if (((_result = result) === null || _result === void 0 || (_result = _result.paymethod_data) === null || _result === void 0 ? void 0 : _result.gateway) === 'credomatic') {
              urlParams = new URLSearchParams(window.location.search);
              paramsObj = Object.fromEntries(urlParams.entries());
              credomaticData = {
                credomatic: _objectSpread({}, paramsObj)
              };
            }
            _context.p = 6;
            _context.n = 7;
            return confirmCart(cartUuid, credomaticData);
          case 7:
            confirmCartRes = _context.v;
            if (confirmCartRes.error) {
              setAlertState({
                open: true,
                content: typeof confirmCartRes.result === 'string' ? [confirmCartRes.result] : confirmCartRes.result
              });
              setIsResetPaymethod(true);
            }
            if ((_confirmCartRes$resul = confirmCartRes.result.order) !== null && _confirmCartRes$resul !== void 0 && _confirmCartRes$resul.uuid) {
              handleOrderRedirect(confirmCartRes.result.order.uuid);
            }
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false,
              cart: result
            }));
            _context.n = 9;
            break;
          case 8:
            _context.p = 8;
            _t = _context.v;
            setAlertState({
              open: true,
              content: [_t.message]
            });
          case 9:
            _context.n = 11;
            break;
          case 10:
            _cart = Array.isArray(result) ? null : JSON.parse(JSON.stringify(result));
            spotNumberFromStorage = window.localStorage.getItem('table_number');
            if (spotNumberFromStorage) {
              spotNumber = (_JSON$parse = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.tableNumber;
              slug = (_JSON$parse2 = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse2 === void 0 ? void 0 : _JSON$parse2.slug;
              if (((_cart2 = _cart) === null || _cart2 === void 0 || (_cart2 = _cart2.business) === null || _cart2 === void 0 ? void 0 : _cart2.slug) === slug) {
                _cart = _objectSpread(_objectSpread({}, _cart), {}, {
                  spot_number: parseInt(spotNumber, 10)
                });
              }
            }
            setCartState({
              loading: false,
              cart: _cart,
              error: _cart ? null : result
            });
          case 11:
            _context.n = 13;
            break;
          case 12:
            _context.p = 12;
            _t2 = _context.v;
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false,
              error: [_t2.toString()]
            }));
          case 13:
            return _context.a(2);
        }
      }, _callee, null, [[6, 8], [0, 12]]);
    }));
    return function getOrder(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (token && cartUuid) {
      getOrder(cartUuid);
    } else {
      setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
        loading: false
      }));
    }
  }, [token, cartUuid]);
  var checkoutProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CheckoutUI,
    cartState: cartState,
    uuid: cartUuid,
    isResetPaymethod: isResetPaymethod,
    setIsResetPaymethod: setIsResetPaymethod
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !cartUuid && orderState.carts && carts && (carts === null || carts === void 0 ? void 0 : carts.length) === 0 && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), cartUuid && cartState.error && ((_cartState$error = cartState.error) === null || _cartState$error === void 0 ? void 0 : _cartState$error.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('ERROR_CART_SELECTED', 'Sorry, the selected cart was not found.'),
    btnTitle: t('CHECKOUT_REDIRECT', 'Go to Checkout list'),
    onClickButton: handleCheckoutListRedirect
  }), cartUuid && cartState.cart && ((_cartState$cart2 = cartState.cart) === null || _cartState$cart2 === void 0 ? void 0 : _cartState$cart2.status) !== 1 && /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Checkout, checkoutProps), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('CHECKOUT ', 'Checkout'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};