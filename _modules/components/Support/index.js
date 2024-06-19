"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Support = void 0;
var _react = _interopRequireDefault(require("react"));
var _Buttons = require("../../styles/Buttons");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _InfoShareContext = require("../../contexts/InfoShareContext");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Support = exports.Support = function Support(props) {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var handleGoToLink = function handleGoToLink(link) {
    window.open(link, '_blank');
  };
  return /*#__PURE__*/_react.default.createElement(_styles.SupportContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null))), /*#__PURE__*/_react.default.createElement(_styles.HeaderContentWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, t('SUPPORT_TITLE_START', 'Which kind of'), " ", /*#__PURE__*/_react.default.createElement("span", null, t('SUPPORT_TITLE_END', 'assistance do you need?'))), /*#__PURE__*/_react.default.createElement("p", null, t('ASSIST_SUB_TITILE', 'Choose the asistance you are looking for in the buttons below.'))), /*#__PURE__*/_react.default.createElement(_styles.SupportList, null, /*#__PURE__*/_react.default.createElement(_styles.SupportContent, null, /*#__PURE__*/_react.default.createElement("h3", null, t('CONTACT_SALES_TEAM', 'Contact our Sales Team')), /*#__PURE__*/_react.default.createElement("p", null, t('CONTACT_SALES_SUB_TITLE', 'Ask about pricing, custom work, budget and more money talk')), /*#__PURE__*/_react.default.createElement(_styles.ActionBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "7.6px",
    color: "primary",
    onClick: function onClick() {
      return handleGoToLink('https://www.ordering.co/contact-ordering');
    },
    outline: true
  }, t('SALES_CONTACT', 'Sales Contact')))), /*#__PURE__*/_react.default.createElement(_styles.SupportContent, null, /*#__PURE__*/_react.default.createElement("h3", null, t('CONTACT_SUPPORT_TEAM', 'Contact our Support Team')), /*#__PURE__*/_react.default.createElement("p", null, t('CONTACT_SUPPORT_SUB_TITLE', 'Ask about your ordering installation, products and features')), /*#__PURE__*/_react.default.createElement(_styles.ActionBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "7.6px",
    color: "primary",
    onClick: function onClick() {
      return handleGoToLink('https://support.ordering.co');
    },
    outline: true
  }, t('TECH_SUPPORT', 'Tech Support'))))));
};