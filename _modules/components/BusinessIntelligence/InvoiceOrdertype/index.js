"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceOrderType = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("../../../styles");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var InvoiceOrderType = function InvoiceOrderType(props) {
  var handleChangeOrderTypes = props.handleChangeOrderTypes,
    orderTypes = props.orderTypes,
    invocing = props.invocing,
    handleChangeInvocing = props.handleChangeInvocing,
    handleChangeDeliveryTypes = props.handleChangeDeliveryTypes;
  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(orderTypes),
    _useState2 = _slicedToArray(_useState, 2),
    orderStatus = _useState2[0],
    setOrderStatus = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    invoiceState = _useState4[0],
    setInvoiceState = _useState4[1];
  var saveFormData = function saveFormData() {
    var orderTypesIDS = orderStatus.filter(function (_orderTypes) {
      return _orderTypes.enabled;
    }).map(function (_orderTypess) {
      return _orderTypess.value;
    });
    handleChangeDeliveryTypes(orderTypesIDS);
    handleChangeOrderTypes(orderStatus);
    handleChangeInvocing(invoiceState);
    showToast(_orderingComponentsAdmin.ToastType.Success, t('INVOICE_DATA_SAVED', 'Invoice data saved'));
  };
  var handleChangeCheckBox = function handleChangeCheckBox(value, checked) {
    var _orderStatus = orderStatus.map(function (item) {
      if (item.value === value) {
        return _objectSpread(_objectSpread({}, item), {}, {
          enabled: checked
        });
      }
      return item;
    });
    setOrderStatus(_orderStatus);
  };
  var handleChangeInvocingCheckBox = function handleChangeInvocingCheckBox(key, checked) {
    setInvoiceState(_objectSpread(_objectSpread({}, invoiceState), {}, _defineProperty({}, key, checked)));
  };
  (0, _react.useEffect)(function () {
    if (orderTypes) setOrderStatus(orderTypes);
  }, [orderTypes]);
  (0, _react.useEffect)(function () {
    setInvoiceState(invocing);
  }, [invocing]);
  return /*#__PURE__*/_react.default.createElement(_styles2.InvoiceOrderTypeContainer, null, orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      defaultChecked: item.enabled,
      id: item.value,
      onClick: function onClick(e) {
        return handleChangeCheckBox(item.value, e.target.checked);
      }
    }), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: item.value
    }, item.name));
  }), /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    defaultChecked: invoiceState === null || invoiceState === void 0 ? void 0 : invoiceState.cancelled,
    id: "cancelled",
    onClick: function onClick(e) {
      return handleChangeInvocingCheckBox('cancelled', e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "cancelled"
  }, t('INCLUDE_CANCELED_ORDERS', 'Include canceled orders'))), /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    defaultChecked: invoiceState === null || invoiceState === void 0 ? void 0 : invoiceState.discounts,
    id: "discounts",
    onClick: function onClick(e) {
      return handleChangeInvocingCheckBox('discounts', e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "discounts"
  }, t('INCLUDE_DISCOUNTS_BY_PLATFORM', 'Include discounts done by platform'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    onClick: saveFormData
  }, t('SAVE', 'Save'))));
};
exports.InvoiceOrderType = InvoiceOrderType;