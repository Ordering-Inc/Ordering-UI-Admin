"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceDriverManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("./styles");
var _InvoiceGeneral = require("../InvoiceGeneral");
var _InvoicePayMethods = require("../InvoicePayMethods");
var _InvoiceDriverPdf = require("../InvoiceDriverPdf");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("../../../styles");
var _utils = require("../../../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var InvoiceDriverManagerUI = function InvoiceDriverManagerUI(props) {
  var exportInvoiceList = props.exportInvoiceList;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useState = (0, _react.useState)('general'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedDetailType = _useState2[0],
    setSelectedDetailType = _useState2[1];
  var inputRef = (0, _react.useRef)(null);
  var submitBtnRef = (0, _react.useRef)(null);
  var invoicePdfRef = (0, _react.useRef)(null);
  var changeSelectedAnalyticsStatus = function changeSelectedAnalyticsStatus(detailType, isInitialRender) {
    window.scrollTo(0, 0);
    setSelectedDetailType(detailType);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tab: detailType
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (!(exportInvoiceList !== null && exportInvoiceList !== void 0 && exportInvoiceList.loading) && exportInvoiceList !== null && exportInvoiceList !== void 0 && exportInvoiceList.invoice) {
      inputRef.current.value = invoicePdfRef === null || invoicePdfRef === void 0 ? void 0 : invoicePdfRef.current.innerHTML;
    }
  }, [exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : exportInvoiceList.loading]);
  (0, _react.useEffect)(function () {
    var tab = query.get('tab');
    if (tab) {
      changeSelectedAnalyticsStatus(tab, true);
    } else {
      changeSelectedAnalyticsStatus(selectedDetailType);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.InvoiceDriversContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsHeader, null, /*#__PURE__*/_react.default.createElement("h2", null, t('DRIVER_INVOICE', 'Driver invoice')), /*#__PURE__*/_react.default.createElement(_styles2.IconButton, {
    color: "black",
    disabled: (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : exportInvoiceList.loading) || !(exportInvoiceList !== null && exportInvoiceList !== void 0 && exportInvoiceList.invoice),
    onClick: function onClick() {
      return submitBtnRef.current.click();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, null))), /*#__PURE__*/_react.default.createElement(_styles.DetailsList, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedDetailType === 'general',
    onClick: function onClick() {
      return changeSelectedAnalyticsStatus('general');
    }
  }, t('GENERAL', 'General')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedDetailType === 'payment_methods',
    onClick: function onClick() {
      return changeSelectedAnalyticsStatus('payment_methods');
    }
  }, t('PAYMENT_METHODS', 'Payment methods')))), selectedDetailType === 'general' && /*#__PURE__*/_react.default.createElement(_InvoiceGeneral.InvoiceGeneral, props), selectedDetailType === 'payment_methods' && /*#__PURE__*/_react.default.createElement(_InvoicePayMethods.InvoicePayMethods, props), /*#__PURE__*/_react.default.createElement(_styles.Form, {
    target: "_blank",
    action: "".concat(ordering.root, "/pdf/html"),
    method: "POST"
  }, /*#__PURE__*/_react.default.createElement("input", {
    ref: inputRef,
    type: "hidden",
    name: "html"
  }), /*#__PURE__*/_react.default.createElement("button", {
    ref: function ref(e) {
      submitBtnRef.current = e;
    },
    type: "submit",
    id: "driver-invoice-btn"
  })), /*#__PURE__*/_react.default.createElement(_styles.InvoicePdfWrapper, {
    ref: invoicePdfRef
  }, /*#__PURE__*/_react.default.createElement(_InvoiceDriverPdf.InvoiceDriverPdf, props)), (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : exportInvoiceList.loading) && /*#__PURE__*/_react.default.createElement(_styles.LoadingWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SpinnerLoader, null)));
};
var InvoiceDriverManager = exports.InvoiceDriverManager = function InvoiceDriverManager(props) {
  var invoiceDriverManagerProps = _objectSpread(_objectSpread({}, props), {}, {
    propsToFetch: ['id', 'name'],
    UIComponent: InvoiceDriverManagerUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.InvoiceDriverManager, invoiceDriverManagerProps);
};