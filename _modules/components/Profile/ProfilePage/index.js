"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilePage = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _Sessions = require("../Sessions");
var _styledComponents = require("styled-components");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProfilePageUI = function ProfilePageUI(props) {
  var handleGoogleAccountLink = props.handleGoogleAccountLink;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('PROFILE', '')), (user === null || user === void 0 ? void 0 : user.level) === 8 && /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, t('CONNTECT_PROFESSIONAL_ACCOUNT_INFO', 'Connect your Professional account with your Google account to synchronize the appointments with the Google calendar Application. Use the Google account button to start with the login process, do not forget to notify the admin to Complete the synchronization.')))), /*#__PURE__*/_react.default.createElement(_styles2.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UserImage, null, user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement("img", {
    src: user === null || user === void 0 ? void 0 : user.photo,
    loading: "lazy",
    alt: ""
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.UserInfoWrapper, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname), /*#__PURE__*/_react.default.createElement("p", {
    className: "email"
  }, user === null || user === void 0 ? void 0 : user.email), (user === null || user === void 0 ? void 0 : user.cellphone) && /*#__PURE__*/_react.default.createElement("p", {
    className: "phone"
  }, user === null || user === void 0 ? void 0 : user.cellphone), /*#__PURE__*/_react.default.createElement(_styles2.ButtonsGroup, null, (user === null || user === void 0 ? void 0 : user.level) === 8 && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    outline: true,
    onClick: function onClick() {
      return handleGoogleAccountLink();
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.googleCalendarIcon,
    alt: "Google Calendar Icon"
  }), t('SYNC_WITH_GOOGLE_CALENDAR', 'Sync with Google calendar'))))), /*#__PURE__*/_react.default.createElement(_Sessions.Sessions, null));
};
var ProfilePage = function ProfilePage(props) {
  var _useSession3 = (0, _orderingComponentsAdmin.useSession)(),
    _useSession4 = _slicedToArray(_useSession3, 1),
    user = _useSession4[0].user;
  var profileProps = _objectSpread(_objectSpread({}, props), {}, {
    userId: user === null || user === void 0 ? void 0 : user.id,
    UIComponent: ProfilePageUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserDetails, profileProps);
};
exports.ProfilePage = ProfilePage;