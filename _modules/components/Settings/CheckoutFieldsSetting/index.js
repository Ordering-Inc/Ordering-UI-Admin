"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckoutFieldsSetting = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../../styles");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CheckoutFieldsSettingUI = function CheckoutFieldsSettingUI(props) {
  var checkoutFieldsState = props.checkoutFieldsState,
      handleChangeCheckoutFieldSetting = props.handleChangeCheckoutFieldSetting;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckoutFieldsDetailsContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CHECKOUT_CUSTOMER_FIELDS', 'Checkout and Customer fields')), /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "name"
  }, t('FIELD', 'Field')), /*#__PURE__*/_react.default.createElement("div", {
    className: "required"
  }, t('REQUIRED', 'Required')), /*#__PURE__*/_react.default.createElement("div", {
    className: "status"
  }, t('STATE', 'Status'))), checkoutFieldsState !== null && checkoutFieldsState !== void 0 && checkoutFieldsState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "name"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "required"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 30,
      style: {
        borderRadius: 20
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "status"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 30,
      style: {
        borderRadius: 20
      }
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, checkoutFieldsState.fields.map(function (field) {
    return /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
      key: field.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "name"
    }, t(field.code.toUpperCase())), /*#__PURE__*/_react.default.createElement("div", {
      className: "required"
    }, /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: field.required,
      disabled: field.code === 'email',
      onChange: function onChange(val) {
        return handleChangeCheckoutFieldSetting(field.id, {
          required: val
        });
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "status"
    }, /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: field.enabled,
      disabled: field.code === 'email',
      onChange: function onChange(val) {
        return handleChangeCheckoutFieldSetting(field.id, {
          enabled: val
        });
      }
    })));
  }))));
};

var CheckoutFieldsSetting = function CheckoutFieldsSetting(props) {
  var checkoutFieldsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CheckoutFieldsSettingUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CheckoutFieldsSetting, checkoutFieldsProps);
};

exports.CheckoutFieldsSetting = CheckoutFieldsSetting;