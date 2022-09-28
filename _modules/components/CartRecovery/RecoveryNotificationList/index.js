"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
    }, t('EDIT', 'Edit'))), /*#__PURE__*/_react.default.createElement(_styles2.PreviewContent, null, (notification === null || notification === void 0 ? void 0 : notification.channel) === 'email' && /*#__PURE__*/_react.default.createElement(_styles2.EmailPreviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.EmailPreviewHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.PointGroup, null, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null))), /*#__PURE__*/_react.default.createElement(_styles2.EmailPreviewContent, null, /*#__PURE__*/_react.default.createElement("h2", null, notification === null || notification === void 0 ? void 0 : notification.title), /*#__PURE__*/_react.default.createElement("p", null, notification.body))), (notification === null || notification === void 0 ? void 0 : notification.channel) === 'sms' && /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SmsContentLayout, {
      bgimage: theme.images.general.mobileHalfMask
    }, /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewContent, null, /*#__PURE__*/_react.default.createElement("h2", null, notification === null || notification === void 0 ? void 0 : notification.title), /*#__PURE__*/_react.default.createElement("p", null, notification.body))))), (notification === null || notification === void 0 ? void 0 : notification.channel) === 'notification' && /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SmsContentLayout, {
      bgimage: theme.images.general.mobileHalfMask
    }, /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewContent, null, /*#__PURE__*/_react.default.createElement("h2", null, notification === null || notification === void 0 ? void 0 : notification.title), /*#__PURE__*/_react.default.createElement("p", null, notification.body)))))));
  }), /*#__PURE__*/_react.default.createElement(_styles2.AddNewNotificationButton, null, /*#__PURE__*/_react.default.createElement("span", {
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

var RecoveryNotificationList = function RecoveryNotificationList(props) {
  var recoveryNotificationsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: RecoveryNotificationListUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.RecoveryNotificationList, recoveryNotificationsProps);
};

exports.RecoveryNotificationList = RecoveryNotificationList;