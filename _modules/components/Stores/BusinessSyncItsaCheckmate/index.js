"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSyncItsaCheckmate = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
var _styles2 = require("../../../styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessSyncItsaCheckmate = function BusinessSyncItsaCheckmate() {
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.ItsaCheckmateLogo,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles.Description, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub-header",
    dangerouslySetInnerHTML: {
      __html: t('ITSACHECKMATE_SUB_HEADER', 'Take control of all your <strong>Ordering Platform Menus</strong> in one place!')
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-item"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('ITSACHECKMATE_MENU_1', '86 items & modifiers'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-item"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('ITSACHECKMATE_MENU_2', 'Turn on or off ordering platforms'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-item"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('ITSACHECKMATE_MENU_3', 'Manage delivery hours'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-item"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('ITSACHECKMATE_MENU_4', 'Add, edit, or delete items ')))), /*#__PURE__*/_react.default.createElement(_styles.GetStarted, null, /*#__PURE__*/_react.default.createElement("h2", null, t('GET_STARTED_RIGHT_HERE', 'Get started right here')), /*#__PURE__*/_react.default.createElement("p", null, t('FILL_UP_THIS_FORM_TO_REQUEST_INFORMATION', 'Fill up this form to request more information')), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://share.hsforms.com/1vuXwaFtfTTeZf362zJgqSg3neff",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    color: "primary"
  }, t('SEND_FORM', 'Send Form')))), /*#__PURE__*/_react.default.createElement(_styles.YoutubeVideoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.YoutubeVideoInner, null, /*#__PURE__*/_react.default.createElement("iframe", {
    title: "youtube",
    src: "https://www.youtube.com/embed/_caZDl4ZFp0?feature=oembed"
  }))));
};
exports.BusinessSyncItsaCheckmate = BusinessSyncItsaCheckmate;