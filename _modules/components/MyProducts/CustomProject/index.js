"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomProject = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CustomProject = exports.CustomProject = function CustomProject() {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var theme = (0, _styledComponents.useTheme)();
  var showMessage = function showMessage(message) {
    window.Intercom && window.Intercom('showNewMessage', message);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOM_PROJECT', 'Custom Project'))), /*#__PURE__*/_react.default.createElement(_styles2.ContentLayout, null, /*#__PURE__*/_react.default.createElement(_styles2.TextWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('CUSTOM_PROJECT', 'Custom Project')), /*#__PURE__*/_react.default.createElement("h4", null, t('CREATE_TAILOR_MODE', 'Create the tailor-made solution your business requires.')), /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOM_PROJECT_DESC', 'Change the design of your Ordering Products, improve current functionality, or even create new software for your business, it\'s your call.')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return window.open('https://www.ordering.co/quote-project-request', '_blank');
    }
  }, t('CONTACT_US', 'Contact us'))), /*#__PURE__*/_react.default.createElement(_styles2.ImageBlock, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.myProducts.customProject,
    alt: ""
  }))));
};