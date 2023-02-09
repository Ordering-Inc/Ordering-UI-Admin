"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancedInstagram = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AdvancedInstagram = function AdvancedInstagram(props) {
  var businessSlug = props.businessSlug;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles2.InstagramAdvancedContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_INSTAGRAM_ADVANCED_DESC', 'This setting is if your Instagram account has 10K followers or you are already an Instagram partner.')), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 1"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_INSTAGRAM_ADVANCED_STEP1_DESC', 'Add your business’s Instagram username here:')), /*#__PURE__*/_react.default.createElement(_styles2.CopyInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('USERNAME', 'Username')
  }))), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 2"), /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t('BUSINESS_INSTAGRAM_GENERAL_STEP2_DESC', 'Open your Instagram profile and tap on <strong>Edit Profile.</strong>')
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.instagramGeneralStep2,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 3"), /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t('BUSINESS_INSTAGRAM_ADVANCED_STEP3_DESC', 'Click on <strong>Action buttons</strong> and then select the button you need.')
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.ImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.instagramAdvancedStep31,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.instagramAdvancedStep32,
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 4"), /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t('BUSINESS_INSTAGRAM_ADVANCED_STEP4_DESC', 'Now, select <strong>Your business</strong>, and paste the following link. Then, tap on <strong>Done</strong>')
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.CopyInputWrapper, {
    isBottom: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    defaultValue: "https://".concat(businessSlug, ".com/"),
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      return navigator.clipboard.writeText("https://".concat(businessSlug, ".com/"));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Files, null))), /*#__PURE__*/_react.default.createElement(_styles2.ImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.instagramAdvancedStep41,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.instagramAdvancedStep42,
    alt: ""
  }))));
};
exports.AdvancedInstagram = AdvancedInstagram;