"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderNotification = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
require("react-toastify/dist/ReactToastify.css");
var _reactToastify = require("react-toastify");
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
var _styles2 = require("../../../styles");
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
_reactToastify.toast.configure();
var OrderNotificationUI = function OrderNotificationUI(props) {
  var _configState$configs7;
  var isOnlyDelivery = props.isOnlyDelivery,
    customerId = props.customerId;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isChecked = _useState4[0],
    setIsChecked = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    notificationModalOpen = _useState6[0],
    setNotificationModalOpen = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    registerOrderIds = _useState8[0],
    setRegisterOrderIds = _useState8[1];
  var _useState9 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    alertState = _useState10[0],
    setAlertState = _useState10[1];
  var handleNotification = function handleNotification(order) {
    var _order$products;
    if ((order === null || order === void 0 || (_order$products = order.products) === null || _order$products === void 0 || (_order$products = _order$products[0]) === null || _order$products === void 0 ? void 0 : _order$products.type) === 'gift_card') return;
    if (customerId && (order === null || order === void 0 ? void 0 : order.customer_id) !== customerId) return;
    if (isOnlyDelivery && (order === null || order === void 0 ? void 0 : order.delivery_type) !== 1) return;
    var _registerOrderIds = _toConsumableArray(registerOrderIds);
    if (!_registerOrderIds.includes(order.id)) {
      var _configState$configs, _configState$configs2;
      _registerOrderIds.push(order.id);
      setRegisterOrderIds(_registerOrderIds);
      if (!(configState !== null && configState !== void 0 && (_configState$configs = configState.configs) !== null && _configState$configs !== void 0 && _configState$configs.notification_in_app_enabled) || (configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.notification_in_app_enabled) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value) === '1') {
        var _configState$configs3;
        if ((configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.notification_toast) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === 'true') {
          toastNotify(order.id);
        } else {
          setNotificationModalOpen(true);
        }
      }
    }
  };
  var handleCloseNotificationModal = function handleCloseNotificationModal() {
    setNotificationModalOpen(false);
    setRegisterOrderIds([]);
  };
  var toastNotify = function toastNotify(orderId) {
    var _configState$configs$, _configState$configs4, _configState$configs5;
    var positionConfig = (_configState$configs$ = configState === null || configState === void 0 || (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 || (_configState$configs4 = _configState$configs4.notification_in_app_position) === null || _configState$configs4 === void 0 ? void 0 : _configState$configs4.value) !== null && _configState$configs$ !== void 0 ? _configState$configs$ : 'bottom-right';
    var toastConfigure = {
      position: positionConfig,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    };
    var content = function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.ToastWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
        src: theme.images.logos.isotype,
        alt: ""
      }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, t('WEB_DASHBOARD_APPNAME', 'Ordering Dashboard')), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_N_ORDERED', 'Order #_order_id_ has been ordered.').replace('_order_id_', "".concat(orderId)))));
    };
    (0, _reactToastify.toast)(content, toastConfigure);
    if (!(configState !== null && configState !== void 0 && (_configState$configs5 = configState.configs) !== null && _configState$configs5 !== void 0 && _configState$configs5.disable_sound_notification)) {
      var sound = document.getElementById('notification-sound');
      sound.muted = false;
      sound.play();
    }
    setRegisterOrderIds([]);
  };
  (0, _react.useEffect)(function () {
    if (registerOrderIds.length > 0) return;
    setNotificationModalOpen(false);
  }, [registerOrderIds]);
  (0, _react.useEffect)(function () {
    var _configState$configs6;
    if (!notificationModalOpen || configState !== null && configState !== void 0 && (_configState$configs6 = configState.configs) !== null && _configState$configs6 !== void 0 && _configState$configs6.disable_sound_notification) return;
    var sound = document.getElementById('notification-sound');
    var interval = setInterval(function () {
      if (notificationModalOpen) {
        sound.muted = false;
        sound.play();
      }
    }, 3000);
    if (!notificationModalOpen) {
      clearInterval(interval);
      return;
    }
    return function () {
      return clearInterval(interval);
    };
  }, [notificationModalOpen, configState === null || configState === void 0 || (_configState$configs7 = configState.configs) === null || _configState$configs7 === void 0 ? void 0 : _configState$configs7.disable_sound_notification]);
  (0, _react.useEffect)(function () {
    if (configState.loading) return;
    events.on('order_added', handleNotification);
    return function () {
      events.off('order_added', handleNotification);
    };
  }, [configState, registerOrderIds, customerId]);
  (0, _react.useEffect)(function () {
    var isSaved = localStorage.getItem('new_order_notification');
    if (!isSaved) setShowModal(true);
  }, []);
  var handleClose = function handleClose() {
    setShowModal(false);
    if (isChecked) {
      localStorage.setItem('new_order_notification', '1');
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "750px",
    open: notificationModalOpen,
    onClose: handleCloseNotificationModal
  }, /*#__PURE__*/_react.default.createElement(_styles.ModalContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('NEW_ORDRES_RECEIVED', 'New orders have been received!')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.registerOrder,
    alt: ""
  }), registerOrderIds.map(function (orderId) {
    return /*#__PURE__*/_react.default.createElement("p", {
      key: orderId
    }, t('ORDER_N_ORDERED', 'Order #_order_id_ has been ordered.').replace('_order_id_', "".concat(orderId)));
  }))), /*#__PURE__*/_react.default.createElement("audio", {
    id: "notification-sound",
    muted: true
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: theme.sounds.notificationOgg,
    type: "audio/ogg"
  }), /*#__PURE__*/_react.default.createElement("source", {
    src: theme.sounds.notificationMp3,
    type: "audio/mpeg"
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    width: "700px",
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
    open: showModal,
    width: "700px",
    onClose: handleClose,
    title: t('ORDERING', 'Ordering')
  }, /*#__PURE__*/_react.default.createElement(_styles.AlarmContent, null, /*#__PURE__*/_react.default.createElement("span", null, t('SOUND_WILL_BE_PLAYED', 'The sound will be played on this page whenever a new order is received.')), /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
    onClick: function onClick() {
      return setIsChecked(function (prev) {
        return !prev;
      });
    },
    isChecked: isChecked
  }, isChecked ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null), /*#__PURE__*/_react.default.createElement("span", null, t('DONT_SHOW_AGAIN', 'Don\'t show again'))), /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    color: "primary",
    onClick: handleClose
  }, t('ACCEPT', 'Accept')))));
};
var OrderNotification = exports.OrderNotification = function OrderNotification(props) {
  var orderNotificationProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderNotificationUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrderNotification, orderNotificationProps);
};