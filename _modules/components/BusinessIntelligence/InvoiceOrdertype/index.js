"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InvoiceOrderType = function InvoiceOrderType(props) {
  var handleChangeOrderTypes = props.handleChangeOrderTypes,
      orderTypes = props.orderTypes,
      invocing = props.invocing,
      handleChangeInvocing = props.handleChangeInvocing;

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