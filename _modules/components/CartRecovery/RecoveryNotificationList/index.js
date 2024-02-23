"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecoveryNotificationList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _SingleRecoveryNotification = require("../SingleRecoveryNotification");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var RecoveryNotificationListUI = function RecoveryNotificationListUI(props) {
  var action = props.action,
    notificationListState = props.notificationListState,
    handleUpdateClick = props.handleUpdateClick,
    handleAddNotifications = props.handleAddNotifications,
    handleUpdateNotifications = props.handleUpdateNotifications,
    handleDeleteNotifications = props.handleDeleteNotifications,
    actionState = props.actionState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPreview = _useState2[0],
    setShowPreview = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedNotification = _useState4[0],
    setSelectedNotification = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAddModal = _useState6[0],
    setIsAddModal = _useState6[1];
  var _useState7 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    alertState = _useState8[0],
    setAlertState = _useState8[1];
  var handleEditNotification = function handleEditNotification(notification) {
    setSelectedNotification(notification);
    setShowPreview(true);
  };
  var handleClosePreview = function handleClosePreview() {
    setShowPreview(false);
    setSelectedNotification(null);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error) || actionState.loading) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, notificationListState !== null && notificationListState !== void 0 && notificationListState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(2).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.NotificationBlock, {
      key: i,
      noBorder: i === 0
    }, /*#__PURE__*/_react.default.createElement(_styles2.BlockHeader, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 20
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      height: 20,
      style: {
        margin: '0px 10px'
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.PreivewEditWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70,
      height: 20
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70,
      height: 44
    })), /*#__PURE__*/_react.default.createElement(_styles2.EmailPreviewWrapper, {
      isSkeleton: true
    }));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, notificationListState === null || notificationListState === void 0 ? void 0 : notificationListState.notifications.map(function (notification, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.NotificationBlock, {
      key: i,
      noBorder: i === 0
    }, /*#__PURE__*/_react.default.createElement(_styles2.BlockHeader, null, /*#__PURE__*/_react.default.createElement("span", null, notification.channel), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: (notification === null || notification === void 0 ? void 0 : notification.enabled) || false,
      onChange: function onChange(val) {
        return handleUpdateClick(notification.id, {
          enabled: val
        });
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.PreivewEditWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('PREVIEW', 'Preview')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "secundary",
      borderRadius: "8px",
      onClick: function onClick() {
        return handleEditNotification(notification);
      }
    }, t('EDIT', 'Edit'))), /*#__PURE__*/_react.default.createElement(_styles2.PreviewContent, null, (notification === null || notification === void 0 ? void 0 : notification.channel) === 'email' && /*#__PURE__*/_react.default.createElement(_styles2.EmailPreviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.EmailPreviewHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.PointGroup, null, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null))), /*#__PURE__*/_react.default.createElement(_styles2.EmailPreviewContent, null, /*#__PURE__*/_react.default.createElement("h2", null, notification === null || notification === void 0 ? void 0 : notification.title), /*#__PURE__*/_react.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: notification.body
      }
    }))), (notification === null || notification === void 0 ? void 0 : notification.channel) === 'sms' && /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SmsContentLayout, {
      bgimage: theme.images.general.mobileHalfMask
    }, /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewContent, null, /*#__PURE__*/_react.default.createElement("h2", null, notification === null || notification === void 0 ? void 0 : notification.title), /*#__PURE__*/_react.default.createElement("p", null, notification.body))))), (notification === null || notification === void 0 ? void 0 : notification.channel) === 'notification' && /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SmsContentLayout, {
      bgimage: theme.images.general.mobileHalfMask
    }, /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewContent, null, /*#__PURE__*/_react.default.createElement("h2", null, notification === null || notification === void 0 ? void 0 : notification.title), /*#__PURE__*/_react.default.createElement("p", null, notification.body)))))));
  }), /*#__PURE__*/_react.default.createElement(_styles2.AddNewNotificationButton, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return setIsAddModal(true);
    }
  }, t('ADD_NEW_NOTIFICATION', 'Add new notification'))))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    title: (selectedNotification === null || selectedNotification === void 0 ? void 0 : selectedNotification.channel) || t('NOTIFICATIONS', 'Notifications'),
    open: showPreview,
    onClose: function onClose() {
      return handleClosePreview();
    }
  }, /*#__PURE__*/_react.default.createElement(_SingleRecoveryNotification.SingleRecoveryNotification, {
    notification: selectedNotification,
    handleAddNotifications: handleAddNotifications,
    handleUpdateNotifications: handleUpdateNotifications,
    handleDeleteNotifications: handleDeleteNotifications,
    onClose: function onClose() {
      return handleClosePreview();
    },
    action: action
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    title: t('NOTIFICATIONS', 'Notifications'),
    open: isAddModal,
    onClose: function onClose() {
      return setIsAddModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_SingleRecoveryNotification.SingleRecoveryNotification, {
    isAdd: true,
    action: action,
    notification: selectedNotification,
    handleAddNotifications: handleAddNotifications,
    handleUpdateNotifications: handleUpdateNotifications,
    handleDeleteNotifications: handleDeleteNotifications,
    onClose: function onClose() {
      return setIsAddModal(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('RECOVERY_ACTIONS', 'Recovery actions'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var RecoveryNotificationList = exports.RecoveryNotificationList = function RecoveryNotificationList(props) {
  var recoveryNotificationsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: RecoveryNotificationListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.RecoveryNotificationList, recoveryNotificationsProps);
};