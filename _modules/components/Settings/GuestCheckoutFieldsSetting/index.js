"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GuestCheckoutFieldsSetting = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var GuestCheckoutFieldsSettingUI = function GuestCheckoutFieldsSettingUI(props) {
  var checkoutFieldsState = props.checkoutFieldsState,
    handleChangeCheckoutFieldSetting = props.handleChangeCheckoutFieldSetting;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)('1'),
    _useState2 = _slicedToArray(_useState, 2),
    orderType = _useState2[0],
    setOrderType = _useState2[1];
  var hideSettingList = ['city_dropdown_option', 'address', 'address_notes'];
  var orderTypeList = (0, _react.useMemo)(function () {
    var _configs$order_types_, _configs$order_types_2;
    var orderTypes = configs === null || configs === void 0 ? void 0 : (_configs$order_types_ = configs.order_types_allowed) === null || _configs$order_types_ === void 0 ? void 0 : (_configs$order_types_2 = _configs$order_types_.options) === null || _configs$order_types_2 === void 0 ? void 0 : _configs$order_types_2.map(function (item) {
      var _item$text;
      return {
        value: item.value,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t(item.text, (_item$text = item.text) === null || _item$text === void 0 ? void 0 : _item$text.replace('_', ' ').toLowerCase()))
      };
    });
    return orderTypes || [];
  }, [configs === null || configs === void 0 ? void 0 : configs.order_types_allowed]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckoutFieldsDetailsContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CHECKOUT_CUSTOMER_FIELDS', 'Checkout and Customer fields')), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order type')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_ORDER_TYPE', 'Select order type'),
    defaultValue: orderType,
    options: orderTypeList,
    onChange: function onChange(val) {
      return setOrderType(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
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
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, checkoutFieldsState.fields.filter(function (item) {
    return (item === null || item === void 0 ? void 0 : item.order_type_id) === parseInt(orderType);
  }).map(function (field) {
    return !hideSettingList.includes(field === null || field === void 0 ? void 0 : field.validation_field.code) && /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
      key: field.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "name"
    }, t(field === null || field === void 0 ? void 0 : field.validation_field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.validation_field.name)), /*#__PURE__*/_react.default.createElement("div", {
      className: "required"
    }, /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: field === null || field === void 0 ? void 0 : field.required,
      onChange: function onChange(val) {
        return handleChangeCheckoutFieldSetting(field === null || field === void 0 ? void 0 : field.validation_field_id, field === null || field === void 0 ? void 0 : field.order_type_id, {
          required: val
        });
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "status"
    }, /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: field === null || field === void 0 ? void 0 : field.enabled,
      onChange: function onChange(val) {
        return handleChangeCheckoutFieldSetting(field === null || field === void 0 ? void 0 : field.validation_field_id, field === null || field === void 0 ? void 0 : field.order_type_id, {
          enabled: val
        });
      }
    })));
  }))));
};
var GuestCheckoutFieldsSetting = function GuestCheckoutFieldsSetting(props) {
  var guestCheckoutFieldsSettingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: GuestCheckoutFieldsSettingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GuestCheckoutFieldsSetting, guestCheckoutFieldsSettingProps);
};
exports.GuestCheckoutFieldsSetting = GuestCheckoutFieldsSetting;