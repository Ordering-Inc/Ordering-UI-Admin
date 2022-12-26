"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _InvoiceDetails = require("../InvoiceDetails");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var InvoiceManager = function InvoiceManager(props) {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openInvoiceDetail = _useState2[0],
    setOpenInvoiceDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedInvoice = _useState4[0],
    setSelectedInvoice = _useState4[1];
  var InvoiceList = [{
    id: 1,
    key: 'business',
    name: t('BUSINESS_INVOICE', 'Business invoice'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ShopWindow, null),
    description: t('BUSINESS_INVOICE_DESCRIPTION', 'Business invoice description')
  }, {
    id: 2,
    key: 'driver',
    name: t('DRIVER_INVOICE', 'Driver invoice'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Truck, null),
    description: t('DRIVER_INVOICE_DESCRIPTION', 'Driver invoice description')
  }];
  var handleOpenInvoiceDetail = function handleOpenInvoiceDetail(index) {
    setOpenInvoiceDetail(true);
    setSelectedInvoice(index);
  };
  var handleCloseInvoiceDetail = function handleCloseInvoiceDetail() {
    setOpenInvoiceDetail(false);
    setSelectedInvoice(null);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.InvoiceManagerContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('INVOICE_MANAGER', 'Invoice manager'))), /*#__PURE__*/_react.default.createElement(_styles2.InvoiceListContainer, null, InvoiceList.map(function (invoice, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.InvoiceItemContainer, {
      key: i,
      onClick: function onClick() {
        return handleOpenInvoiceDetail(invoice.key);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, invoice === null || invoice === void 0 ? void 0 : invoice.icon), /*#__PURE__*/_react.default.createElement(_styles2.InvoiceListDetailsWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, invoice === null || invoice === void 0 ? void 0 : invoice.name), /*#__PURE__*/_react.default.createElement("p", null, invoice === null || invoice === void 0 ? void 0 : invoice.description)));
  }))), openInvoiceDetail && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "invoice_details",
    open: openInvoiceDetail,
    onClose: handleCloseInvoiceDetail
  }, /*#__PURE__*/_react.default.createElement(_InvoiceDetails.InvoiceDetails, {
    selectedInvoice: selectedInvoice
  })));
};
exports.InvoiceManager = InvoiceManager;