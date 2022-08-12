"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSyncBasic = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styledComponents = require("styled-components");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessSyncBasic = function BusinessSyncBasic() {
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.deliverect,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles.Description, null, /*#__PURE__*/_react.default.createElement("p", null, "The easiest way to manage all your online orders."), /*#__PURE__*/_react.default.createElement("p", null, "Deliverect integrates all your ", /*#__PURE__*/_react.default.createElement("span", null, "online orders"), " to your ", /*#__PURE__*/_react.default.createElement("span", null, "existing POS"), " or our ", /*#__PURE__*/_react.default.createElement("span", null, "Delivery Manger app."), " Restaurants large and small rely on Deliverect to reduce failures and order mistakes while speeding up order preparation.")), /*#__PURE__*/_react.default.createElement(_styles.GuideStep, null, /*#__PURE__*/_react.default.createElement("h4", null, t('STEP', 'Step'), "1"), /*#__PURE__*/_react.default.createElement("p", null, t('CREATE_ACCOUNT_WITH_DELIVERECT', 'Create your account with deliverect.'), " ", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.deliverect.com/"
  }, "www.deliverect.com"))), /*#__PURE__*/_react.default.createElement(_styles.GuideStep, null, /*#__PURE__*/_react.default.createElement("h4", null, t('STEP', 'Step'), "2"), /*#__PURE__*/_react.default.createElement("p", null, t('COPY_THIS_LINK', 'Copy this link'), ": ", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.deliverect.com/"
  }, "www.deliverect.com"))), /*#__PURE__*/_react.default.createElement(_styles.GuideStep, null, /*#__PURE__*/_react.default.createElement("h4", null, t('STEP', 'Step'), "3"), /*#__PURE__*/_react.default.createElement("p", null, t('CHECK_VIDEO_TO_LEARN_TO_PASTE_LINK', 'Check this video to learn where to paste the link.'))), /*#__PURE__*/_react.default.createElement(_styles.YoutubeVideoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.YoutubeVideoInner, null, /*#__PURE__*/_react.default.createElement("iframe", {
    title: "youtube",
    src: "https://www.youtube.com/embed/_v8nPmW_E-0?playlist=_v8nPmW_E-0&loop=1"
  }))));
};

exports.BusinessSyncBasic = BusinessSyncBasic;