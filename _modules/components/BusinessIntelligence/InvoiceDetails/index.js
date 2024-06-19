"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _InvoiceDriverManager = require("../InvoiceDriverManager");
var _InvoiceBusinessManager = require("../InvoiceBusinessManager");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var InvoiceDetails = exports.InvoiceDetails = function InvoiceDetails(props) {
  var selectedInvoice = props.selectedInvoice;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, selectedInvoice === 'driver' && /*#__PURE__*/_react.default.createElement(_InvoiceDriverManager.InvoiceDriverManager, props), selectedInvoice === 'business' && /*#__PURE__*/_react.default.createElement(_InvoiceBusinessManager.InvoiceBusinessManager, props));
};