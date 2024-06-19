"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSyncBasic = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
var _styles2 = require("../../../styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessSyncBasic = exports.BusinessSyncBasic = function BusinessSyncBasic() {
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.deliverect,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles.Description, null, /*#__PURE__*/_react.default.createElement("p", null, t('SYNC_DEC_FIRST', 'The easiest way to manage all your online orders.')), /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t('SYNC_DEC_SECOND', 'Deliverect integrates all your <span>online orders</span> to your <span>existing POS</span> or our <span>Delivery Manger app.</span> Restaurants large and small rely on Deliverect to reduce failures and order mistakes while speeding up order preparation.')
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.GetStarted, null, /*#__PURE__*/_react.default.createElement("h2", null, t('GET_STARTED_RIGHT_HERE', 'Get started right here')), /*#__PURE__*/_react.default.createElement("p", null, t('FILL_UP_THIS_FORM_TO_REQUEST_INFORMATION', 'Fill up this form to request more information')), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://share.hsforms.com/1uGzNQ71IS2KXCAFC0mTBCg3neff",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    color: "primary"
  }, t('SEND_FORM', 'Send Form')))), /*#__PURE__*/_react.default.createElement(_styles.YoutubeVideoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.YoutubeVideoInner, null, /*#__PURE__*/_react.default.createElement("iframe", {
    title: "youtube",
    src: "https://www.youtube.com/embed/_v8nPmW_E-0?playlist=_v8nPmW_E-0&loop=1"
  }))));
};