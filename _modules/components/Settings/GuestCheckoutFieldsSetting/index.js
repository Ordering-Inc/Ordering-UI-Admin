"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GuestCheckoutFieldsSetting = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var typesNoDriverTip = [3, 4, 5, 6];
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
  var orderValidationFields = ['name', 'middle_name', 'lastname', 'second_lastname', 'email', 'mobile_phone', 'city_dropdown_option', 'address', 'zipcode', 'address_notes', 'coupon', 'driver_tip', 'comments', 'birthdate'];
  var orderTypeList = (0, _react.useMemo)(function () {
    var _configs$order_types_;
    var orderTypes = configs === null || configs === void 0 || (_configs$order_types_ = configs.order_types_allowed) === null || _configs$order_types_ === void 0 || (_configs$order_types_ = _configs$order_types_.options) === null || _configs$order_types_ === void 0 ? void 0 : _configs$order_types_.map(function (item) {
      var _item$text;
      return {
        value: item.value,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t(item.text, (_item$text = item.text) === null || _item$text === void 0 ? void 0 : _item$text.replace('_', ' ').toLowerCase()))
      };
    });
    return orderTypes || [];
  }, [configs === null || configs === void 0 ? void 0 : configs.order_types_allowed]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckoutFieldsDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.TitleWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CHECKOUT_CUSTOMER_FIELDS', 'Checkout and Customer fields')), /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, t('GUEST_CHECKOUT_SETTING_INFO', 'Manage the fields that your guest users will be able to select and the fields required to complete an order (These options only apply for guest users)')))), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order type')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
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
  }, t('STATE', 'Status')), /*#__PURE__*/_react.default.createElement("div", {
    className: "guest"
  }, t('REQUIRED_WITH_GUEST', 'Required with guest'))), checkoutFieldsState !== null && checkoutFieldsState !== void 0 && checkoutFieldsState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
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
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "guest"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 30,
      style: {
        borderRadius: 20
      }
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, checkoutFieldsState.fields.filter(function (item) {
    return (item === null || item === void 0 ? void 0 : item.order_type_id) === parseInt(orderType);
  }).sort(function (a, b) {
    var indexA = orderValidationFields.indexOf(a === null || a === void 0 ? void 0 : a.validation_field.code);
    var indexB = orderValidationFields.indexOf(b === null || b === void 0 ? void 0 : b.validation_field.code);
    return indexA - indexB;
  }).map(function (field) {
    return !hideSettingList.includes(field === null || field === void 0 ? void 0 : field.validation_field.code) && !(typesNoDriverTip.includes(field === null || field === void 0 ? void 0 : field.order_type_id) && (field === null || field === void 0 ? void 0 : field.validation_field.code) === 'driver_tip') && /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
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
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "guest"
    }, /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: field === null || field === void 0 ? void 0 : field.required_with_guest,
      onChange: function onChange(val) {
        return handleChangeCheckoutFieldSetting(field === null || field === void 0 ? void 0 : field.validation_field_id, field === null || field === void 0 ? void 0 : field.order_type_id, {
          required_with_guest: val
        });
      }
    })));
  }))));
};
var GuestCheckoutFieldsSetting = exports.GuestCheckoutFieldsSetting = function GuestCheckoutFieldsSetting(props) {
  var guestCheckoutFieldsSettingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: GuestCheckoutFieldsSettingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GuestCheckoutFieldsSetting, guestCheckoutFieldsSettingProps);
};