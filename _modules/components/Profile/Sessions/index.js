"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionsUI = exports.Sessions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _moment = _interopRequireDefault(require("moment"));
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var SessionsUI = function SessionsUI(props) {
  var sessionsList = props.sessionsList,
    actionState = props.actionState,
    handleDeleteSession = props.handleDeleteSession,
    handleDeleteAllSessions = props.handleDeleteAllSessions;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useState = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirm = _useState2[0],
    setConfirm = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isMoreInfo = _useState6[0],
    setIsMoreInfo = _useState6[1];
  var onDeleteSession = function onDeleteSession(session) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_SESSION', 'Are you sure to delete this session?'),
      handleOnAccept: function handleOnAccept() {
        handleDeleteSession(session);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  var onDeleteAllSessions = function onDeleteAllSessions(isOldUser, deleteCurrent) {
    setConfirm({
      open: true,
      content: isOldUser ? t('QUESTION_ENABLE_ALL_SESSIONS', 'Are you sure to enable all sessions?') : deleteCurrent ? t('QUESTION_DELETE_ALL_SESSIONS', 'Are you sure that you want to delete all sessions?') : t('QUESTION_DELETE_ALL_SESSIONS_EXCEPT_CURRENT', 'Are you sure that you want to delete all sessions except current?'),
      handleOnAccept: function handleOnAccept() {
        handleDeleteAllSessions(deleteCurrent);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  (0, _react.useEffect)(function () {
    if (actionState.error) {
      setAlertState({
        open: true,
        content: actionState.error
      });
    }
  }, [actionState.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SESSIONS', 'Sessions')), (user === null || user === void 0 ? void 0 : user.session_strategy) === 'jwt_session' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, sessionsList.loading ? _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SessionItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 16
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }));
  }) : sessionsList.sessions.length > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.SessionsWrapper, null, sessionsList.sessions.sort(function (a, b) {
    return (0, _moment.default)(b === null || b === void 0 ? void 0 : b.created_at).valueOf() - (0, _moment.default)(a === null || a === void 0 ? void 0 : a.created_at).valueOf();
  }).slice(0, 2).map(function (session) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SessionItem, {
      key: session.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.DurationWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, parseDate(session.created_at, {
      outputFormat: 'MM/DD/YY · hh:mm A'
    })), /*#__PURE__*/_react.default.createElement("span", null, "-"), /*#__PURE__*/_react.default.createElement("p", null, parseDate(session.valid_thru, {
      outputFormat: 'MM/DD/YY · hh:mm A'
    }))), session.current && /*#__PURE__*/_react.default.createElement("p", {
      className: "current"
    }, "(", t('CURRENT', 'Current'), ")"), /*#__PURE__*/_react.default.createElement(_styles2.SeessionDelete, {
      onClick: function onClick() {
        return onDeleteSession(session);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.X, null)));
  }), /*#__PURE__*/_react.default.createElement(_styles2.MoreInfoWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setIsMoreInfo(true);
    }
  }, t('MORE_INFO', 'More info'), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowRight, null))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroupWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ButtonsGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    disabled: actionState.loading,
    onClick: function onClick() {
      return onDeleteAllSessions(false, true);
    }
  }, t('DELETE_ALL_SESSIONS', 'Delete all sessions')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    disabled: actionState.loading,
    onClick: function onClick() {
      return onDeleteAllSessions(false, false);
    }
  }, t('DELETE_ALL_SESSIONS_EXCEPT_CURRENT', 'Delete all sessions except current'))))) : /*#__PURE__*/_react.default.createElement(_styles2.NoMessage, null, t('YOU_DONT_HAVE_ANY_SESSIONS', 'You don\'t have any sessions'))) : /*#__PURE__*/_react.default.createElement(_styles2.NoSessionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.NoMessage, null, t('YOU_DONT_HAVE_ENABLED_THE_SESSIONS', 'You don\'t have enabled the sessions, please active them to have a better control of your sessions.')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      return onDeleteAllSessions(true, false);
    }
  }, t('ACTIVE_SESSIONS', 'Active sessions')))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "760px",
    height: "80vh",
    padding: "30px 24px",
    title: t('SESSIONS', 'Sessions'),
    open: isMoreInfo,
    onClose: function onClose() {
      return setIsMoreInfo(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, sessionsList.sessions.sort(function (a, b) {
    return (0, _moment.default)(b === null || b === void 0 ? void 0 : b.created_at).valueOf() - (0, _moment.default)(a === null || a === void 0 ? void 0 : a.created_at).valueOf();
  }).map(function (session) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SessionItem, {
      key: session.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.DurationWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, parseDate(session.created_at)), /*#__PURE__*/_react.default.createElement("span", null, "-"), /*#__PURE__*/_react.default.createElement("p", null, parseDate(session.valid_thru))), session.current && /*#__PURE__*/_react.default.createElement("p", {
      className: "current"
    }, "(", t('CURRENT', 'Current'), ")"), /*#__PURE__*/_react.default.createElement(_styles2.SeessionDelete, {
      onClick: function onClick() {
        return onDeleteSession(session);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.X, null)));
  }))));
};
exports.SessionsUI = SessionsUI;
var Sessions = function Sessions(props) {
  var sessionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SessionsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Sessions, sessionsProps);
};
exports.Sessions = Sessions;