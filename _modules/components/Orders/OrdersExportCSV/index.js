"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersExportCSV = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
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
var ExportCSVUI = function ExportCSVUI(props) {
  var _actionStatus$result;
  var actionStatus = props.actionStatus,
    getCSV = props.getCSV;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    popoverOpen = _useState2[0],
    setPopoverOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalOpen = _useState4[0],
    setModalOpen = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var handleExportAll = function handleExportAll() {
    setPopoverOpen(false);
    getCSV(false);
  };
  var handleExportFiltered = function handleExportFiltered() {
    setPopoverOpen(false);
    getCSV(true);
  };
  var closePopover = function closePopover() {
    setPopoverOpen(false);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    if (!popoverOpen) return;
    document.addEventListener('click', closePopover);
    return function () {
      return document.removeEventListener('click', closePopover);
    };
  }, [popoverOpen]);
  (0, _react.useEffect)(function () {
    if (actionStatus !== null && actionStatus !== void 0 && actionStatus.error) {
      setAlertState({
        open: true,
        content: actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.error
      });
    }
    if (!(actionStatus !== null && actionStatus !== void 0 && actionStatus.result) || actionStatus !== null && actionStatus !== void 0 && actionStatus.error) return;
    setModalOpen(true);
  }, [actionStatus]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ExportContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "secundary",
    disabled: actionStatus.loading,
    onClick: function onClick() {
      return setPopoverOpen(!popoverOpen);
    }
  }, width > 600 && t('CSV', 'CSV'), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, null)), popoverOpen && /*#__PURE__*/_react.default.createElement(_styles2.PopoverContainer, {
    disabled: actionStatus.loading
  }, /*#__PURE__*/_react.default.createElement(_styles2.Item, {
    onClick: function onClick() {
      return handleExportAll();
    }
  }, t('EXPORT_ALL', 'Export all')), /*#__PURE__*/_react.default.createElement(_styles2.Item, {
    onClick: function onClick() {
      return handleExportFiltered();
    }
  }, t('EXPORT_FILTERED', 'Export filtered'))), actionStatus.loading && /*#__PURE__*/_react.default.createElement(_Shared.SpinnerLoader, {
    primary: true
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    open: modalOpen,
    onClose: function onClose() {
      return setModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.ExportCSVResult, null, /*#__PURE__*/_react.default.createElement("h1", {
    className: "align-center"
  }, t('WEB_APPNAME', 'Ordering')), (actionStatus === null || actionStatus === void 0 || (_actionStatus$result = actionStatus.result) === null || _actionStatus$result === void 0 ? void 0 : _actionStatus$result.length) > 0 && (actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.result.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, {
      key: i
    }, (e === null || e === void 0 ? void 0 : e.message) || e);
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    rectangle: true,
    color: "primary",
    onClick: function onClick() {
      return setModalOpen(false);
    }
  }, t('OK', 'OK')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('CSV_ORDERS', 'Csv orders'),
    content: alertState === null || alertState === void 0 ? void 0 : alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState === null || alertState === void 0 ? void 0 : alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var OrdersExportCSV = exports.OrdersExportCSV = function OrdersExportCSV(props) {
  var ExportCSVControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ExportCSVUI,
    filterValues: props.filterValues
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExportCSV, ExportCSVControlProps);
};