"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceBusinessManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("./styles");
var _InvoiceGeneral = require("../InvoiceGeneral");
var _InvoicePayMethods = require("../InvoicePayMethods");
var _InvoiceOrdertype = require("../InvoiceOrdertype");
var _InvoiceBusinessPdf = require("../InvoiceBusinessPdf");
var _styles2 = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _utils = require("../../../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var InvoiceBusinessManagerUI = function InvoiceBusinessManagerUI(props) {
  var exportInvoiceList = props.exportInvoiceList,
    handleChangeDeliveryTypes = props.handleChangeDeliveryTypes;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
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
  return /*#__PURE__*/_react.default.createElement(_styles.InvoiceDriversContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsHeader, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_INVOICE', 'Business invoice')), /*#__PURE__*/_react.default.createElement(_styles2.IconButton, {
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
  }, t('PAYMENT_METHODS', 'Payment methods')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedDetailType === 'order_type',
    onClick: function onClick() {
      return changeSelectedAnalyticsStatus('order_type');
    }
  }, t('ORDER_TYPE', 'Delivery Type')))), selectedDetailType === 'general' && /*#__PURE__*/_react.default.createElement(_InvoiceGeneral.InvoiceGeneral, props), selectedDetailType === 'payment_methods' && /*#__PURE__*/_react.default.createElement(_InvoicePayMethods.InvoicePayMethods, props), selectedDetailType === 'order_type' && /*#__PURE__*/_react.default.createElement(_InvoiceOrdertype.InvoiceOrderType, _extends({}, props, {
    handleChangeDeliveryTypes: handleChangeDeliveryTypes
  })), /*#__PURE__*/_react.default.createElement(_styles.Form, {
    target: "_blank",
    action: "".concat(ordering.root, "/pdf/html"),
    method: "POST"
  }, /*#__PURE__*/_react.default.createElement("input", {
    ref: inputRef,
    type: "hidden",
    name: "html"
  }), /*#__PURE__*/_react.default.createElement("input", {
    value: "1",
    type: "hidden",
    name: "with_doctype"
  }), /*#__PURE__*/_react.default.createElement("button", {
    ref: submitBtnRef,
    type: "submit"
  })), /*#__PURE__*/_react.default.createElement(_styles.InvoicePdfWrapper, {
    ref: invoicePdfRef
  }, /*#__PURE__*/_react.default.createElement(_InvoiceBusinessPdf.InvoiceBusinessPdf, props)), (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : exportInvoiceList.loading) && /*#__PURE__*/_react.default.createElement(_styles.LoadingWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SpinnerLoader, null)));
};
var InvoiceBusinessManager = exports.InvoiceBusinessManager = function InvoiceBusinessManager(props) {
  var invoiceBusinessManagerProps = _objectSpread(_objectSpread({}, props), {}, {
    propsToFetch: ['name'],
    UIComponent: InvoiceBusinessManagerUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.InvoiceBusinessManager, invoiceBusinessManagerProps);
};