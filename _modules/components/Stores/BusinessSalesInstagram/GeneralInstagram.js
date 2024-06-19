"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneralInstagram = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var GeneralInstagram = exports.GeneralInstagram = function GeneralInstagram(_ref) {
  var storeUrl = _ref.storeUrl;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles2.InstagramGeneralContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_INSTAGRAM_GENERAL_DESC', 'Lorem ipsum dolor sit amet consectetur. Vitae odio aliquam adipiscing vitae. Nulla sed integer congue gravida lobortis tristique condimentum fusce tincidunt.')), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 1"), /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t('BUSINESS_INSTAGRAM_GENERAL_STEP2_DESC', 'Open your Instagram profile and tap on <strong>Edit Profile.<strong>')
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.instagramGeneralStep2,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 2"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_INSTAGRAM_GENERAL_STEP3_DESC', 'On the Edit Profile screen, click on the Links option.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.instagramGeneralStep3,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 3"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_INSTAGRAM_GENERAL_STEP4_DESC', 'Add your business link, or if you already have a link, you can edit it; click on that option.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.instagramGeneralStep4,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 4"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_INSTAGRAM_GENERAL_STEP5_DESC', 'Just add this link to the website field:')), /*#__PURE__*/_react.default.createElement(_styles2.CopyInputWrapper, {
    isBottom: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    defaultValue: storeUrl || 'https://yourbusinessname.com/store/storename',
    disabled: true
  })), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.instagramGeneralStep5,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 5"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_INSTAGRAM_GENERAL_STEP6_DESC', 'Done; it will appear this way on your Instagram account.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.instagramGeneralStep6,
    alt: ""
  })));
};