"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Confirm = exports.Alert = void 0;
var _react = _interopRequireDefault(require("react"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ConfirmUI = function ConfirmUI(props) {
  var title = props.title,
    children = props.children,
    content = props.content,
    onAccept = props.onAccept,
    onCancel = props.onCancel,
    onClose = props.onClose,
    acceptText = props.acceptText,
    cancelText = props.cancelText;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.PopupDialog, {
    className: "popup-dialog"
  }, /*#__PURE__*/_react.default.createElement(_styles.PopupIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return onClose();
    }
  })), title && /*#__PURE__*/_react.default.createElement(_styles.PopupTitle, null, title), /*#__PURE__*/_react.default.createElement(_styles.PopupContent, null, content && typeof content === 'string' && content, content && _typeof(content) === 'object' && Array.isArray(content) && /*#__PURE__*/_react.default.createElement("ul", null, content.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: i
    }, item);
  })), children), (onCancel || onAccept || onClose) && /*#__PURE__*/_react.default.createElement(_styles.PopupActions, null, onCancel && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    onClick: function onClick() {
      return onCancel();
    }
  }, cancelText || t('CANCEL')), onAccept && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "darkBlue",
    onClick: function onClick() {
      return onAccept();
    }
  }, acceptText || t('ACCEPT'))));
};
var Confirm = function Confirm(props) {
  var popupProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ConfirmUI
  });
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, theme && /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Popup, popupProps));
};
exports.Confirm = Confirm;
var Alert = Confirm;
exports.Alert = Alert;