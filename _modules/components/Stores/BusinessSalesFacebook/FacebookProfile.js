"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookProfile = void 0;
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
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FacebookProfile = function FacebookProfile(_ref) {
  var businessSlug = _ref.businessSlug;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles2.FacebookProfileContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_FACEBOOK_PROFILE_DESC', 'Lorem ipsum dolor sit amet consectetur. Vitae odio aliquam adipiscing vitae. Nulla sed integer congue gravida lobortis tristique condimentum fusce tincidunt.')), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 1"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_FACEBOOK_PROFILE_STEP1_DESC', 'Copy this link below. It’s your unique Ordering link for facebook.')), /*#__PURE__*/_react.default.createElement(_styles2.CopyInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    defaultValue: "https://".concat(businessSlug, ".com/"),
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      return navigator.clipboard.writeText("https://".concat(businessSlug, ".com/"));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Files, null)))), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 2"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_FACEBOOK_PROFILE_STEP2_DESC', 'In your business profile, click on the 3 points button on the right side of the screen and look for the option: Edit Action Button.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.facebookProfileStep2,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 3"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_FACEBOOK_PROFILE_STEP3_DESC', 'Please choose the option that best suits you from the following list; this time, we will select: Start Order.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.facebookProfileStep31,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.facebookProfileStep32,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 4"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_FACEBOOK_PROFILE_STEP4_DESC', 'It will open a popup where you will put the link to your business where your client can place the order and click Save.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.facebookProfileStep4,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 5"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_FACEBOOK_PROFILE_STEP5_DESC', 'And voila, you will see the button you just added to your Facebook page.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.facebookProfileStep5,
    alt: ""
  })));
};
exports.FacebookProfile = FacebookProfile;