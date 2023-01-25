"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetailsHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _EnDotSingle = _interopRequireDefault(require("@meronex/icons/en/EnDotSingle"));
var _reactToPrint = _interopRequireDefault(require("react-to-print"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderDetailsHeader = function OrderDetailsHeader(props) {
  var _order$payment_events, _order$payment_events2, _order$paymethod, _order$paymethod2;
  var order = props.order,
    handleShowOption = props.handleShowOption,
    handleOpenMessages = props.handleOpenMessages,
    actionSidebar = props.actionSidebar,
    setIsTourOpen = props.setIsTourOpen,
    isTourOpen = props.isTourOpen,
    currentTourStep = props.currentTourStep,
    showOption = props.showOption,
    openMessage = props.openMessage,
    printRef = props.printRef,
    isServiceOrder = props.isServiceOrder,
    extraOpen = props.extraOpen;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpand = _useState2[0],
    setIsExpand = _useState2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var stripePaymethods = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect'];
  var walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet')
    },
    credit_point: {
      name: t('POINTS_WALLET', 'Points Wallet')
    }
  };
  var closeSideBar = function closeSideBar() {
    actionSidebar(false);
    if (isTourOpen && currentTourStep === 1) setIsTourOpen(false);
  };
  var expandSideBar = function expandSideBar() {
    var element = document.getElementById('orderDetails');
    if (!element) return;
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    if (extraOpen) setIsExpand(false);
  }, [extraOpen]);
  return /*#__PURE__*/_react.default.createElement(_styles2.OrderDetailsHeaderContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, isServiceOrder ? t('APPOINTMENT_NO', 'Appointment No.') : t('INVOICE_ORDER_NO', 'Order No'), " ", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, (user === null || user === void 0 ? void 0 : user.level) !== 5 && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    active: openMessage === null || openMessage === void 0 ? void 0 : openMessage.chat,
    onClick: function onClick() {
      return handleOpenMessages('chat');
    },
    isDisabled: isTourOpen && currentTourStep === 1
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Chat, null), (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.UreadMessageAlert, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Dot, null))), /*#__PURE__*/_react.default.createElement(_reactToPrint.default, {
    trigger: function trigger() {
      return /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
        color: "black",
        isDisabled: isTourOpen && currentTourStep === 1
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Printer, null));
    },
    content: function content() {
      return printRef.current;
    },
    removeAfterPrint: true
  }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    active: openMessage === null || openMessage === void 0 ? void 0 : openMessage.history,
    onClick: function onClick() {
      return handleOpenMessages('history');
    },
    isDisabled: isTourOpen && currentTourStep === 1
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Diagram3, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    active: showOption === 'metafields',
    onClick: function onClick() {
      return handleShowOption('metafields');
    },
    isDisabled: isTourOpen && currentTourStep === 1
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null)), width > 576 && !extraOpen && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return expandSideBar();
    }
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return closeSideBar();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement("p", null, (order === null || order === void 0 ? void 0 : (_order$payment_events = order.payment_events) === null || _order$payment_events === void 0 ? void 0 : _order$payment_events.length) > 0 ? order === null || order === void 0 ? void 0 : (_order$payment_events2 = order.payment_events) === null || _order$payment_events2 === void 0 ? void 0 : _order$payment_events2.map(function (event, i) {
    var _walletName$event$wal, _event$wallet_event, _event$wallet_event$w, _event$paymethod, _event$data, _event$paymethod2, _event$data2, _event$data2$result, _event$data3, _event$data3$extra, _event$data4, _event$data4$result, _event$data5, _event$data5$extra;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("span", null, event !== null && event !== void 0 && event.wallet_event ? (_walletName$event$wal = walletName[event === null || event === void 0 ? void 0 : (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 ? void 0 : (_event$wallet_event$w = _event$wallet_event.wallet) === null || _event$wallet_event$w === void 0 ? void 0 : _event$wallet_event$w.type]) === null || _walletName$event$wal === void 0 ? void 0 : _walletName$event$wal.name : event === null || event === void 0 ? void 0 : (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.name), stripePaymethods.includes((event === null || event === void 0 ? void 0 : (_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.gateway) || (event === null || event === void 0 ? void 0 : (_event$paymethod2 = event.paymethod) === null || _event$paymethod2 === void 0 ? void 0 : _event$paymethod2.gateway)) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, " ("), /*#__PURE__*/_react.default.createElement(_styles2.StripeLink, {
      href: "https://dashboard.stripe.com/payments/".concat((event === null || event === void 0 ? void 0 : (_event$data2 = event.data) === null || _event$data2 === void 0 ? void 0 : (_event$data2$result = _event$data2.result) === null || _event$data2$result === void 0 ? void 0 : _event$data2$result.pay_data) || (event === null || event === void 0 ? void 0 : (_event$data3 = event.data) === null || _event$data3 === void 0 ? void 0 : (_event$data3$extra = _event$data3.extra) === null || _event$data3$extra === void 0 ? void 0 : _event$data3$extra.pay_data)),
      target: "_blank"
    }, (event === null || event === void 0 ? void 0 : (_event$data4 = event.data) === null || _event$data4 === void 0 ? void 0 : (_event$data4$result = _event$data4.result) === null || _event$data4$result === void 0 ? void 0 : _event$data4$result.pay_data) || (event === null || event === void 0 ? void 0 : (_event$data5 = event.data) === null || _event$data5 === void 0 ? void 0 : (_event$data5$extra = _event$data5.extra) === null || _event$data5$extra === void 0 ? void 0 : _event$data5$extra.pay_data)), /*#__PURE__*/_react.default.createElement("span", null, ") "), /*#__PURE__*/_react.default.createElement("span", null, " (", order !== null && order !== void 0 && order.refund_data ? t('REFUNDED', 'Refunded') : t('MOBILE_SUCCESS', 'Success'), ") ")), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.name), stripePaymethods.includes(order === null || order === void 0 ? void 0 : (_order$paymethod2 = order.paymethod) === null || _order$paymethod2 === void 0 ? void 0 : _order$paymethod2.gateway) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, " ("), /*#__PURE__*/_react.default.createElement(_styles2.StripeLink, {
    href: "https://dashboard.stripe.com/payments/".concat(order === null || order === void 0 ? void 0 : order.pay_data),
    target: "_blank"
  }, order === null || order === void 0 ? void 0 : order.pay_data), /*#__PURE__*/_react.default.createElement("span", null, ") "), /*#__PURE__*/_react.default.createElement("span", null, " (", order !== null && order !== void 0 && order.refund_data ? t('REFUNDED', 'Refunded') : t('MOBILE_SUCCESS', 'Success'), ") ")), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null)), !isServiceOrder && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY', 'Delivery')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 && /*#__PURE__*/_react.default.createElement("span", null, t('PICKUP', 'Pickup')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 && /*#__PURE__*/_react.default.createElement("span", null, t('EAT_IN', 'Eat in')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 4 && /*#__PURE__*/_react.default.createElement("span", null, t('CURBSIDE', 'Curbside')), (order === null || order === void 0 ? void 0 : order.delivery_type) === 5 && /*#__PURE__*/_react.default.createElement("span", null, t('DRIVE_THRU', 'Drive thru')))));
};
exports.OrderDetailsHeader = OrderDetailsHeader;