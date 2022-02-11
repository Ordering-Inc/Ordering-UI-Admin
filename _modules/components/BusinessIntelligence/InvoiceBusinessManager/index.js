"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceBusinessManager = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Shared = require("../../Shared");

var _styles = require("./styles");

var _InvoiceGeneral = require("../InvoiceGeneral");

var _InvoicePayMethods = require("../InvoicePayMethods");

var _InvoiceOrdertype = require("../InvoiceOrdertype");

var _InvoiceBusinessPdf = require("../InvoiceBusinessPdf");

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

var InvoiceBusinessManagerUI = function InvoiceBusinessManagerUI(props) {
  var exportInvoiceList = props.exportInvoiceList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var inputRef = (0, _react.useRef)(null);
  var submitBtnRef = (0, _react.useRef)(null);
  var invoicePdfRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)('general'),
      _useState2 = _slicedToArray(_useState, 2),
      selectedDetailType = _useState2[0],
      setSelectedDetailType = _useState2[1];

  var changeSelectedAnalyticsStatus = function changeSelectedAnalyticsStatus(detailType) {
    window.scrollTo(0, 0);
    setSelectedDetailType(detailType);
  };

  (0, _react.useEffect)(function () {
    if (!(exportInvoiceList !== null && exportInvoiceList !== void 0 && exportInvoiceList.loading) && exportInvoiceList !== null && exportInvoiceList !== void 0 && exportInvoiceList.invoice) {
      inputRef.current.value = invoicePdfRef === null || invoicePdfRef === void 0 ? void 0 : invoicePdfRef.current.innerHTML;
      submitBtnRef.current.click();
    }
  }, [exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : exportInvoiceList.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles.InvoiceDriversContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsHeader, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_INVOICE', 'Business invoice'))), /*#__PURE__*/_react.default.createElement(_styles.DetailsList, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedDetailType === 'general',
    onClick: function onClick() {
      return changeSelectedAnalyticsStatus('general');
    }
  }, t('GENERAL', 'General')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedDetailType === 'payment_methods',
    onClick: function onClick() {
      return changeSelectedAnalyticsStatus('payment_methods');
    }
  }, t('PAYMENT_METHODS', 'Payment methods')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedDetailType === 'order_type',
    onClick: function onClick() {
      return changeSelectedAnalyticsStatus('order_type');
    }
  }, t('ORDER_TYPE', 'Delivery Type')))), selectedDetailType === 'general' && /*#__PURE__*/_react.default.createElement(_InvoiceGeneral.InvoiceGeneral, props), selectedDetailType === 'payment_methods' && /*#__PURE__*/_react.default.createElement(_InvoicePayMethods.InvoicePayMethods, props), selectedDetailType === 'order_type' && /*#__PURE__*/_react.default.createElement(_InvoiceOrdertype.InvoiceOrderType, props), /*#__PURE__*/_react.default.createElement(_styles.Form, {
    target: "_blank",
    action: "".concat(ordering.root, "/pdf/html"),
    method: "POST"
  }, /*#__PURE__*/_react.default.createElement("input", {
    ref: inputRef,
    type: "hidden",
    name: "html"
  }), /*#__PURE__*/_react.default.createElement("button", {
    ref: submitBtnRef,
    type: "submit"
  })), /*#__PURE__*/_react.default.createElement(_styles.InvoicePdfWrapper, {
    ref: invoicePdfRef
  }, /*#__PURE__*/_react.default.createElement(_InvoiceBusinessPdf.InvoiceBusinessPdf, props)), (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : exportInvoiceList.loading) && /*#__PURE__*/_react.default.createElement(_styles.LoadingWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SpinnerLoader, null)));
};

var InvoiceBusinessManager = function InvoiceBusinessManager(props) {
  var invoiceBusinessManagerProps = _objectSpread(_objectSpread({}, props), {}, {
    propsToFetch: ['name'],
    UIComponent: InvoiceBusinessManagerUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.InvoiceBusinessManager, invoiceBusinessManagerProps);
};

exports.InvoiceBusinessManager = InvoiceBusinessManager;