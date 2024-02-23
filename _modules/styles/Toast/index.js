"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ToastContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n\n  .toast-bar {\n    background-color: ", ";\n    color: #fff;\n    text-align: center;\n    border-radius: 2px;\n    padding: 16px;\n    position: fixed;\n    z-index: 9999;\n    bottom: 30px;\n    border-radius: 8px;\n    opacity: 1;\n\n    ", "\n\n    font-size: 14px;\n    min-width: 200px;\n    max-width: 200px;\n    @media(min-width: 380px){\n      font-size: 16px;\n      min-width: 250px;\n      max-width: initial;\n    }\n  }\n"])), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      left: 30px;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      right: 30px;\n    "])));
});
var Toast = exports.Toast = function Toast() {
  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    toastConfig = _useToast2[0],
    hideToast = _useToast2[1].hideToast;
  var toastRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    timeoutState = _useState2[0],
    setTimeoutState = _useState2[1];
  (0, _react.useEffect)(function () {
    if (!toastConfig && !toastRef.current) return;
    var container = document.getElementById('toast-container');
    var oldToast = document.querySelector('.toast-bar');
    clearTimeout(timeoutState);
    if (oldToast) {
      container.removeChild(oldToast);
    }
    var toast = document.createElement('div');
    toast.classList.add('toast-bar');
    toast.innerHTML = message;
    container.appendChild(toast);
    var timeout = setTimeout(function () {
      toast.remove();
      hideToast();
    }, [duration]);
    setTimeoutState(timeout);
  }, [toastConfig]);
  if (!toastConfig) {
    return null;
  }
  var type = toastConfig.type,
    message = toastConfig.message,
    duration = toastConfig.duration;
  var backgroundColor = '#6ba4ff';
  switch (type) {
    case _orderingComponentsAdmin.ToastType.Info:
      backgroundColor = '#6ba4ff';
      break;
    case _orderingComponentsAdmin.ToastType.Error:
      backgroundColor = '#D83520';
      break;
    case _orderingComponentsAdmin.ToastType.Success:
      backgroundColor = '#73bd24';
      break;
  }
  return /*#__PURE__*/_react.default.createElement(ToastContainer, {
    backgroundColor: backgroundColor,
    ref: toastRef,
    id: "toast-container"
  });
};