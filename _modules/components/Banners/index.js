"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banners = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
var _styles2 = require("../../styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Banners = exports.Banners = function Banners(props) {
  var type = props.type,
    urlToGo = props.urlToGo,
    setLayoutPT = props.setLayoutPT;
  var fixedRef = (0, _react.useRef)(null);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var handleClick = function handleClick() {
    if (!urlToGo) return;
    window.open(urlToGo, '_blank').focus();
  };
  (0, _react.useEffect)(function () {
    if (fixedRef.current) {
      setLayoutPT(fixedRef.current.offsetHeight);
    }
  });
  return type === 'past_due' ? /*#__PURE__*/_react.default.createElement(_styles.Container, {
    ref: fixedRef
  }, /*#__PURE__*/_react.default.createElement(_styles.Banner, null, /*#__PURE__*/_react.default.createElement(_styles.Icon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ExclamationTriangle, {
    size: 26,
    color: theme.colors.warning
  })), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAST_DUE_TITLE_BANNER', 'Hey :user:, we have a problem, your account is past due.').replace(':user:', user === null || user === void 0 ? void 0 : user.name)), /*#__PURE__*/_react.default.createElement("p", null, t('PAST_DUE_SUBTITLE_BANNER', 'There appears to be an issue with your payment. Kindly update the card on file and complete your payment.'))), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrap, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    color: "warning",
    style: {
      borderRadius: 8,
      padding: '5px 30px',
      maxHeight: '40px'
    },
    onClick: function onClick() {
      return handleClick();
    }
  }, t('PAY_NOW', 'Pay now'))))) : null;
};
Banners.defaultProps = {
  type: 'past_due'
};