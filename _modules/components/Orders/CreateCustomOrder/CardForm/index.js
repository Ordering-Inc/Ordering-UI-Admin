"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactStripeJs = require("@stripe/react-stripe-js");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
var CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  },
  showIcon: true
};
var CardFormUI = function CardFormUI(props) {
  var _validationFields$fie, _validationFields$fie2;
  var error = props.error,
    errorExpiry = props.errorExpiry,
    errorCvc = props.errorCvc,
    loading = props.loading,
    handleSubmit = props.handleSubmit,
    handleChange = props.handleChange,
    isSplitForm = props.isSplitForm,
    handleChangeExpiry = props.handleChangeExpiry,
    handleChangeCvc = props.handleChangeCvc,
    errorZipcode = props.errorZipcode;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useValidationFields = (0, _orderingComponentsAdmin.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var zipCodeEnabled = validationFields === null || validationFields === void 0 || (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.card) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.zipcode) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.enabled;
  var zipCodeRequired = validationFields === null || validationFields === void 0 || (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.card) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.zipcode) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.required;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormStripe, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_styles2.FormRow, null, !isSplitForm ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, null, error)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CardNumberField, null, /*#__PURE__*/_react.default.createElement("label", null, t('CARD_NUMBER', 'Card number')), /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardNumberElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, null, error)), /*#__PURE__*/_react.default.createElement(_styles2.CardExpiryCvcField, null, /*#__PURE__*/_react.default.createElement(_styles2.CardExpiryField, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXPIRE_DATE', 'Expire date')), /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardExpiryElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChangeExpiry
  }), /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, null, errorExpiry)), /*#__PURE__*/_react.default.createElement(_styles2.CardCvcField, null, /*#__PURE__*/_react.default.createElement("label", null, t('CVC', 'CVC')), /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardCvcElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChangeCvc
  }), /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, null, errorCvc))), zipCodeEnabled && /*#__PURE__*/_react.default.createElement(_styles2.CardZipcodeField, null, /*#__PURE__*/_react.default.createElement("label", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement(_styles2.ZipcodeField, {
    name: "zipcode",
    placeholder: "".concat(t('ZIPCODE', 'Zipcode')).concat(zipCodeRequired ? '*' : ''),
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChange,
    pattern: "[0-9]",
    type: "number"
  }), errorZipcode && /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, null, t('ZIPCODE_IS_INCOMPLETED', 'The zipcode is incompleted.'))))), /*#__PURE__*/_react.default.createElement(_styles2.FormActions, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: loading
  }, loading ? t('LOADING', 'Loading...') : t('ADD_CARD', 'Add card')))));
};
var CardForm = exports.CardForm = function CardForm(props) {
  var cardFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CardFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CardForm, cardFormProps);
};