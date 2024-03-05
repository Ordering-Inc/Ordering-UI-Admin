"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _ProductItemAccordion = require("../ProductItemAccordion");
var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");
var _Messages = require("../Messages");
var _OrderMetaFields = require("../OrderMetaFields");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _OrderDetailsHeader = require("../OrderDetailsHeader");
var _OrderBill = require("../OrderBill");
var _OrderContactInformation = require("../OrderContactInformation");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _OrderToPrint = require("../OrderToPrint");
var _OrderToPrintTicket = require("../OrderToPrintTicket");
var _utils = require("../../../utils");
var _reactHookForm = require("react-hook-form");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
// const OrderDetailsPropsAreEqual = (prevProps, nextProps) => {
//   return prevProps.isSelectedOrders === nextProps.isSelectedOrders &&
//     prevProps.open === nextProps.open &&
//     prevProps.isTourOpen === nextProps.isTourOpen &&
//     JSON.stringify(prevProps.messages) === JSON.stringify(nextProps.messages) &&
//     JSON.stringify(prevProps.order) === JSON.stringify(nextProps.order) &&
//     prevProps.loading === nextProps.loading &&
//     prevProps.isTourFlag === nextProps.isTourFlag &&
//     prevProps.isServiceOrder === nextProps.isServiceOrder &&
//     prevProps.currentTourStep === nextProps.currentTourStep &&
//     prevProps.customerInfoState === nextProps.customerInfoState &&
//     JSON.stringify(prevProps.addressState) === JSON.stringify(nextProps.addressState)
// }
var OrderDetailsUI = function OrderDetailsUI(props) {
  var _order$place, _progressBarObjt, _order$products;
  var isSelectedOrders = props.isSelectedOrders,
    handleChangeCustomerInfoState = props.handleChangeCustomerInfoState,
    customerInfoState = props.customerInfoState,
    handleUpdateCustomerInfo = props.handleUpdateCustomerInfo,
    open = props.open,
    handleBackRedirect = props.handleBackRedirect,
    handleUpdateOrderStatus = props.handleUpdateOrderStatus,
    addressState = props.addressState,
    setAddressState = props.setAddressState,
    isTourOpen = props.isTourOpen,
    handleUpdateOrderForUnreadCount = props.handleUpdateOrderForUnreadCount,
    messages = props.messages,
    setCurrentTourStep = props.setCurrentTourStep,
    currentTourStep = props.currentTourStep,
    isTourFlag = props.isTourFlag,
    setIsTourFlag = props.setIsTourFlag,
    setIsTourOpen = props.setIsTourOpen,
    actionStatus = props.actionStatus,
    handleRefundPaymentsStripe = props.handleRefundPaymentsStripe,
    handleOrderRefund = props.handleOrderRefund,
    isServiceOrder = props.isServiceOrder,
    handleUpdateComment = props.handleUpdateComment;
  var _useForm = (0, _reactHookForm.useForm)(),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.formState.errors;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)({
      chat: false,
      history: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    openMessages = _useState2[0],
    setOpenMessages = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    showOption = _useState4[0],
    setShowOption = _useState4[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var printRef = (0, _react.useRef)();
  var printTicketRef = (0, _react.useRef)();
  var _useState5 = (0, _react.useState)({
      business: false,
      driver: false,
      customer: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    unreadAlert = _useState6[0],
    setUnreadAlert = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isMenuOpen = _useState8[0],
    setIsMenuOpen = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    extraOpen = _useState10[0],
    setExtraOpen = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isExpand = _useState12[0],
    setIsExpand = _useState12[1];
  var _useState13 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    alertState = _useState14[0],
    setAlertState = _useState14[1];
  var _useState15 = (0, _react.useState)({
      open: false,
      driverId: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    commentInfoState = _useState16[0],
    setCommentInfostate = _useState16[1];
  var cateringTypes = [7, 8];
  var placeSpotEnabled = [3, 4];
  var readOnlyBusinessOwner = user === null || user === void 0 ? void 0 : user.readOnlyBusinessOwner;
  var readOnlyDeliveryManager = user === null || user === void 0 ? void 0 : user.readOnlyDeliveryManager;
  var readOnlyAdmin = user === null || user === void 0 ? void 0 : user.readOnlyAdmin;
  var _props$order = props.order,
    order = _props$order.order,
    loading = _props$order.loading;
  var rejectResonStatuses = [6, 9, 10, 11, 12, 14];
  var getLogisticTag = function getLogisticTag(status) {
    switch (parseInt(status)) {
      case 0:
        return t('PENDING', 'Pending');
      case 1:
        return t('IN_PROGRESS', 'In progress');
      case 2:
        return t('IN_QUEUE', 'In queue');
      case 3:
        return t('EXPIRED', 'Expired');
      case 4:
        return t('RESOLVED', 'Resolved');
      default:
        return t('UNKNOWN', 'Unknown');
    }
  };
  var getPriorityTag = function getPriorityTag(priority) {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low');
      case 0:
        return t('NORMAL', 'Normal');
      case 1:
        return t('HIGH', 'High');
      case 2:
        return t('URGENT', 'Urgent');
      default:
        return t('UNKNOWN', 'Unknown');
    }
  };
  var unreadMessages = function unreadMessages() {
    var unreadedMessages = messages === null || messages === void 0 ? void 0 : messages.messages.filter(function (message) {
      var _message$can_see;
      return !(message !== null && message !== void 0 && message.read) && (message === null || message === void 0 || (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes(0)) && (message === null || message === void 0 ? void 0 : message.author_id) !== user.id;
    });
    var customer = unreadedMessages === null || unreadedMessages === void 0 ? void 0 : unreadedMessages.some(function (message) {
      var _message$author;
      return (message === null || message === void 0 || (_message$author = message.author) === null || _message$author === void 0 ? void 0 : _message$author.level) === 3;
    });
    var business = unreadedMessages === null || unreadedMessages === void 0 ? void 0 : unreadedMessages.some(function (message) {
      var _message$author2;
      return (message === null || message === void 0 || (_message$author2 = message.author) === null || _message$author2 === void 0 ? void 0 : _message$author2.level) === 2;
    });
    var driver = unreadedMessages === null || unreadedMessages === void 0 ? void 0 : unreadedMessages.some(function (message) {
      var _message$author3;
      return (message === null || message === void 0 || (_message$author3 = message.author) === null || _message$author3 === void 0 ? void 0 : _message$author3.level) === 4;
    });
    setUnreadAlert({
      business: business,
      driver: driver,
      customer: customer
    });
  };
  var handleCloseMessages = function handleCloseMessages() {
    setOpenMessages({
      chat: false,
      history: false
    });
  };
  var handleShowOption = function handleShowOption(option, isInitialRender) {
    if (option === 'chat') {
      setOpenMessages({
        chat: true,
        history: false
      });
      setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        customer: false
      }));
      setShowOption(null);
    } else if (option === 'history') {
      setOpenMessages({
        chat: false,
        history: true
      });
      setShowOption(null);
    } else {
      setOpenMessages({
        chat: false,
        history: false
      });
      setShowOption(option);
    }
    setExtraOpen(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        section: option
      });
    }
  };
  (0, _react.useEffect)(function () {
    unreadMessages();
  }, [messages === null || messages === void 0 ? void 0 : messages.messages]);
  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    if (!value) {
      props.onClose();
    }
  };
  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('orderDetails').style.width = '100vw';
      } else {
        if (isExpand) {
          document.getElementById('orderDetails').style.width = '100vw';
        } else {
          if (extraOpen && width >= 1000) {
            document.getElementById('orderDetails').style.width = '1000px';
          } else {
            document.getElementById('orderDetails').style.width = '500px';
          }
        }
      }
    }
  };
  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [extraOpen, isExpand, width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  var handleChangeTour = function handleChangeTour(evt) {
    if (!isTourOpen) return;
    if (isTourOpen && (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && currentTourStep !== 2) {
      setCurrentTourStep(2);
      return;
    }
    if (evt.target.closest('.driver-select')) return;
    if (isTourOpen && setCurrentTourStep) {
      handleShowOption('chat');
      setTimeout(function () {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3);
      }, 1);
    }
  };
  var handleChangeKeyboard = function handleChangeKeyboard(evt) {
    if (evt.keyCode === 37 && currentTourStep === 2) setCurrentTourStep(1);
    if (evt.keyCode === 39 && currentTourStep === 1 && (order === null || order === void 0 ? void 0 : order.delivery_type) === 1) setCurrentTourStep(2);
    if (evt.keyCode === 39 && currentTourStep === 1 && (order === null || order === void 0 ? void 0 : order.delivery_type) !== 1) {
      handleShowOption('chat');
      setTimeout(function () {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3);
      }, 1);
    }
    if (evt.keyCode === 37 && currentTourStep === 3) {
      handleCloseMessages();
      setExtraOpen(false);
      (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 ? setCurrentTourStep(2) : setCurrentTourStep(1);
      setIsTourFlag(false);
    }
    if (evt.keyCode === 39 && currentTourStep === 2) {
      handleShowOption('chat');
      setCurrentTourStep(3);
    }
    if (evt.keyCode === 39 && currentTourStep === 3) {
      setExtraOpen(false);
      props.onClose();
      setCurrentTourStep(4);
    }
  };
  (0, _react.useEffect)(function () {
    if (!isTourOpen) return;
    document.addEventListener('keydown', handleChangeKeyboard);
    return function () {
      return document.removeEventListener('keydown', handleChangeKeyboard);
    };
  }, [isTourOpen, currentTourStep]);
  (0, _react.useEffect)(function () {
    if (!isTourFlag) return;
    handleShowOption('chat');
    setTimeout(function () {
      setCurrentTourStep(3);
    }, 1);
  }, [isTourFlag]);
  var onCloseSidebar = function onCloseSidebar(e) {
    if (e.code === 'Escape' && width >= 1000) {
      props.onClose() && props.onClose();
      setIsTourOpen && setIsTourOpen(false);
    }
  };
  var handleCloseMoreDetails = function handleCloseMoreDetails() {
    setExtraOpen(false);
    setOpenMessages({
      chat: false,
      history: false
    });
    setShowOption(null);
    (0, _utils.removeQueryToUrl)(['section', 'tab']);
  };
  var onSubmit = function onSubmit(data) {
    handleUpdateComment({
      comment: data === null || data === void 0 ? void 0 : data.manual_driver_assignment_comment,
      driverId: commentInfoState === null || commentInfoState === void 0 ? void 0 : commentInfoState.driverId
    });
    setCommentInfostate(_objectSpread(_objectSpread({}, commentInfoState), {}, {
      open: false
    }));
  };
  (0, _react.useEffect)(function () {
    if (!open) return;
    document.addEventListener('keydown', onCloseSidebar);
    return function () {
      return document.removeEventListener('keydown', onCloseSidebar);
    };
  }, [open]);
  (0, _react.useEffect)(function () {
    if (loading) return;
    var section = query.get('section');
    if (section) {
      handleShowOption(section, true);
    }
  }, [loading]);
  (0, _react.useEffect)(function () {
    if (!(actionStatus !== null && actionStatus !== void 0 && actionStatus.error)) return;
    setAlertState({
      open: true,
      content: actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.error
    });
  }, [actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.error]);
  var progressBarObjt = order !== null && order !== void 0 && order.delivery_type && (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 ? _utils.getOrderStatuPickUp : _utils.getOrderStatus;
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    isSelectedOrders: isSelectedOrders,
    id: "orderDetails",
    isSkeleton: loading,
    noAnimation: isTourOpen
  }, loading && /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 75,
    count: 3,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    style: {
      marginBottom: '10px'
    }
  })), order && Object.keys(order).length > 0 && !loading && /*#__PURE__*/_react.default.createElement(_styles2.OrderDetailsContent, {
    "data-tour": "tour_detail",
    noScroll: isTourOpen && currentTourStep === 2,
    onClick: function onClick(e) {
      return handleChangeTour(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_OrderDetailsHeader.OrderDetailsHeader, {
    isServiceOrder: isServiceOrder,
    order: order,
    extraOpen: extraOpen,
    actionSidebar: actionSidebar,
    showOption: showOption,
    openMessage: openMessages,
    handleShowOption: handleShowOption,
    isTourOpen: isTourOpen,
    currentTourStep: currentTourStep,
    setIsTourOpen: setIsTourOpen,
    printRef: printRef,
    printTicketRef: printTicketRef,
    isExpand: isExpand,
    setIsExpand: setIsExpand
  }), /*#__PURE__*/_react.default.createElement(_styles2.OrderStatus, {
    isDisabled: isTourOpen && currentTourStep === 1
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, t('ORDER_STATUS_TEXT', 'Order status')), cateringTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) && (order === null || order === void 0 ? void 0 : order.created_at) && /*#__PURE__*/_react.default.createElement("p", null, t('CREATED_AT', 'Created at'), ": ", parseDate(order === null || order === void 0 ? void 0 : order.created_at)), (order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) && /*#__PURE__*/_react.default.createElement("p", null, cateringTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) ? "".concat(t('PLACED_TO', 'Placed to'), ":") : '', " ", parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc)), (order === null || order === void 0 ? void 0 : order.delivery_datetime) && /*#__PURE__*/_react.default.createElement("p", null, cateringTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) ? "".concat(t('PLACED_TO', 'Placed to'), ":") : '', " ", parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }), "  ", "(".concat(t('BUSINESS_TIME', 'Business time'), ")")), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : order.eta_time, " ", t('MIN', 'min'))), /*#__PURE__*/_react.default.createElement(_styles2.OrderStatusSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
    isFirstSelect: true,
    noPadding: true,
    orderId: order.id,
    deliveryType: order === null || order === void 0 ? void 0 : order.delivery_type,
    defaultValue: parseInt(order.status),
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    viewOnly: readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner
  }))), (order === null || order === void 0 ? void 0 : order.place) && placeSpotEnabled.includes(order === null || order === void 0 ? void 0 : order.delivery_type) && /*#__PURE__*/_react.default.createElement(_styles2.PlaceSpotContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('SPOT', 'Spot'), ": ", order === null || order === void 0 || (_order$place = order.place) === null || _order$place === void 0 ? void 0 : _order$place.name)), /*#__PURE__*/_react.default.createElement(_styles2.StatusBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.StatusBar, {
    percentage: (_progressBarObjt = progressBarObjt(order === null || order === void 0 ? void 0 : order.status)) === null || _progressBarObjt === void 0 ? void 0 : _progressBarObjt.percentage
  })), /*#__PURE__*/_react.default.createElement(_styles2.AdvancedLogistic, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('LOGISTIC', 'Logistic')), /*#__PURE__*/_react.default.createElement("p", null, getLogisticTag(order === null || order === void 0 ? void 0 : order.logistic_status))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('ATTEMPTS', 'Attempts')), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : order.logistic_attemps)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement("p", null, getPriorityTag(order === null || order === void 0 ? void 0 : order.priority)))), rejectResonStatuses.includes(order === null || order === void 0 ? void 0 : order.status) && (order === null || order === void 0 ? void 0 : order.reject_reason) && /*#__PURE__*/_react.default.createElement(_styles2.RejectReasonsContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('REJECT_REASONS', 'Reject reasons')), /*#__PURE__*/_react.default.createElement(_styles2.RejectReasonsList, null, /*#__PURE__*/_react.default.createElement(_styles2.RejectReasonWrapper, null, t("REJECT_REASON_".concat(order === null || order === void 0 ? void 0 : order.reject_reason.toUpperCase()), order === null || order === void 0 ? void 0 : order.reject_reason.replace(/_/g, ' '))))), /*#__PURE__*/_react.default.createElement("div", {
    "data-tour": "tour_driver"
  }, /*#__PURE__*/_react.default.createElement(_OrderContactInformation.OrderContactInformation, {
    isServiceOrder: isServiceOrder,
    customerInfoState: customerInfoState,
    handleChangeCustomerInfoState: handleChangeCustomerInfoState,
    handleUpdateCustomerInfo: handleUpdateCustomerInfo,
    order: order,
    extraOpen: extraOpen,
    unreadAlert: unreadAlert,
    isTourOpen: isTourOpen,
    setCurrentTourStep: setCurrentTourStep,
    setAddressState: setAddressState,
    handleShowOption: handleShowOption,
    setCommentInfostate: setCommentInfostate,
    commentInfoState: commentInfoState,
    addressState: addressState
  }), /*#__PURE__*/_react.default.createElement(_styles2.OrderProducts, null, /*#__PURE__*/_react.default.createElement("h2", null, t('EXPORT_SUMMARY', 'Summary')), (order === null || order === void 0 || (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    var _order$toppings_remov;
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product,
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency),
      toppingsRemoved: order === null || order === void 0 || (_order$toppings_remov = order.toppings_removed) === null || _order$toppings_remov === void 0 ? void 0 : _order$toppings_remov[product === null || product === void 0 ? void 0 : product.code]
    });
  }))), /*#__PURE__*/_react.default.createElement(_OrderBill.OrderBill, {
    order: order,
    actionStatus: actionStatus,
    handleRefundPaymentsStripe: handleRefundPaymentsStripe,
    handleOrderRefund: handleOrderRefund,
    viewOnly: readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner
  })), /*#__PURE__*/_react.default.createElement(_styles2.DetailBottom, null)), extraOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(_styles2.OrderDetailsExtraContent, null, /*#__PURE__*/_react.default.createElement(_styles2.CloseButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleCloseMoreDetails();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), (openMessages === null || openMessages === void 0 ? void 0 : openMessages.chat) && /*#__PURE__*/_react.default.createElement(_styles2.ChatContainer, {
    "data-tour": "tour_message"
  }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    isChat: openMessages === null || openMessages === void 0 ? void 0 : openMessages.chat,
    history: openMessages === null || openMessages === void 0 ? void 0 : openMessages.history,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    onClose: function onClose() {
      return handleCloseMessages();
    },
    messages: messages,
    isTourOpen: isTourOpen,
    setCurrentTourStep: setCurrentTourStep,
    orderDetailClose: function orderDetailClose() {
      return props.onClose();
    }
  })), (openMessages === null || openMessages === void 0 ? void 0 : openMessages.history) && /*#__PURE__*/_react.default.createElement(_styles2.ChatContainer, null, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    history: openMessages.history,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    messages: messages
  })), showOption === 'metafields' && /*#__PURE__*/_react.default.createElement(_OrderMetaFields.OrderMetaFields, {
    orderId: order === null || order === void 0 ? void 0 : order.id
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "90vh",
    open: openMessages === null || openMessages === void 0 ? void 0 : openMessages.chat,
    onClose: function onClose() {
      return handleCloseMessages();
    }
  }, (openMessages === null || openMessages === void 0 ? void 0 : openMessages.chat) && /*#__PURE__*/_react.default.createElement(_styles2.ChatContainer, {
    "data-tour": "tour_message"
  }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    isChat: openMessages === null || openMessages === void 0 ? void 0 : openMessages.chat,
    history: openMessages === null || openMessages === void 0 ? void 0 : openMessages.history,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    onClose: function onClose() {
      return handleCloseMessages();
    },
    messages: messages,
    isTourOpen: isTourOpen,
    setCurrentTourStep: setCurrentTourStep,
    orderDetailClose: function orderDetailClose() {
      return props.onClose();
    }
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "70vh",
    open: openMessages === null || openMessages === void 0 ? void 0 : openMessages.history,
    onClose: function onClose() {
      return handleCloseMessages();
    }
  }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    history: openMessages === null || openMessages === void 0 ? void 0 : openMessages.history,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    messages: messages
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "70vh",
    open: !!showOption,
    onClose: function onClose() {
      return setShowOption(null);
    }
  }, showOption === 'metafields' && /*#__PURE__*/_react.default.createElement(_OrderMetaFields.OrderMetaFields, {
    orderId: order === null || order === void 0 ? void 0 : order.id
  })))), !loading && !order && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('PROFILE_ORDERS_REDIRECT', 'Go to Orders'),
    onClickButton: handleBackRedirect
  }), order && Object.keys(order).length > 0 && !loading && /*#__PURE__*/_react.default.createElement(_OrderToPrint.OrderToPrint, {
    ref: printRef,
    order: order,
    placeSpotEnabled: placeSpotEnabled,
    getOrderStatus: progressBarObjt,
    getLogisticTag: getLogisticTag,
    getPriorityTag: getPriorityTag
  }), order && Object.keys(order).length > 0 && !loading && /*#__PURE__*/_react.default.createElement(_OrderToPrintTicket.OrderToPrintTicket, {
    ref: printTicketRef,
    order: order,
    getOrderStatus: progressBarObjt
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
    width: "500px",
    open: commentInfoState === null || commentInfoState === void 0 ? void 0 : commentInfoState.open,
    title: t('ORDERING', 'Ordering'),
    onClose: function onClose() {
      return setCommentInfostate({
        driverId: null,
        open: false
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.AssigmentCommentContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    isError: errors.manual_driver_assignment_comment
  }, /*#__PURE__*/_react.default.createElement("label", null, t('MANUAL_DRIVER_ASSIGMENT_COMMENT', 'Manual driver assigment comment')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "manual_driver_assignment_comment",
    placeholder: t('MANUAL_DRIVER_ASSIGMENT_COMMENT', 'Manual driver assigment comment'),
    ref: register({
      required: true
    })
  }), errors.manual_driver_assignment_comment && /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, null, t('FIELD_REQUIRED', 'This field is required'))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    type: "submit"
  }, t('ACCEPT', 'Accept')))));
};
var OrderDetails = function OrderDetails(props) {
  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    isDisableLoadMessages: true,
    UIComponent: OrderDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrderDetails, orderDetailsProps);
};
exports.OrderDetails = OrderDetails;