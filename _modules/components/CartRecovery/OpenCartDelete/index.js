"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenCartDelete = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FaTrash = _interopRequireDefault(require("@meronex/icons/fa/FaTrash"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _Buttons = require("../../../styles/Buttons");
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OpenCartDeleteUI = function OpenCartDeleteUI(props) {
  var checkPasswordStatus = props.checkPasswordStatus,
    handleChangePassword = props.handleChangePassword,
    getCheckPassword = props.getCheckPassword,
    handleDeleteMultiCarts = props.handleDeleteMultiCarts;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    checkPasswordModalOpen = _useState2[0],
    setCheckPasswordModalOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var handlePassword = function handlePassword(e) {
    setPassword(e.target.value);
  };
  var handleModalOpen = function handleModalOpen() {
    setPassword('');
    setCheckPasswordModalOpen(true);
  };
  (0, _react.useEffect)(function () {
    handleChangePassword(password);
  }, [password]);
  (0, _react.useEffect)(function () {
    if (checkPasswordStatus.loading || checkPasswordStatus.error !== null) return;
    if (checkPasswordStatus.result === 'OK') {
      setCheckPasswordModalOpen(false);
      setPassword('');
      handleDeleteMultiCarts();
    }
  }, [checkPasswordStatus]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "secundary",
    onClick: function onClick() {
      return handleModalOpen();
    }
  }, width > 600 && t('DELETE', 'Delete'), /*#__PURE__*/_react.default.createElement(_FaTrash.default, null)), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    open: checkPasswordModalOpen,
    width: "600px",
    onClose: function onClose() {
      return setCheckPasswordModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperCheckPassword, null, /*#__PURE__*/_react.default.createElement("h3", null, t('CONFIRM_PASSWORD', 'Confirm password')), /*#__PURE__*/_react.default.createElement("p", null, t('TYPE_YOUR_PASSWORD_TO_CONFIRM_DELETE', 'Type your password to confirm delete.')), /*#__PURE__*/_react.default.createElement("input", {
    autoComplete: "new-password",
    type: "password",
    value: password,
    placeholder: t('PASSWORD', 'password'),
    onChange: function onChange(e) {
      return handlePassword(e);
    }
  }), (checkPasswordStatus === null || checkPasswordStatus === void 0 ? void 0 : checkPasswordStatus.error) && /*#__PURE__*/_react.default.createElement(_styles.ErrorText, {
    className: "text-danger"
  }, checkPasswordStatus.error), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    borderRadius: "7.6px",
    onClick: function onClick() {
      return getCheckPassword();
    }
  }, t('CONFIRM', 'Confirm')))));
};
var OpenCartDelete = exports.OpenCartDelete = function OpenCartDelete(props) {
  var checkPasswordControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OpenCartDeleteUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CheckPassword, checkPasswordControlProps);
};