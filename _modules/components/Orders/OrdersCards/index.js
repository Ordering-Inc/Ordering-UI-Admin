"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersCards = void 0;
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _Shared = require("../../Shared");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _utils = require("../../../utils");
var _styles = require("./styles");
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
var OrdersCards = function OrdersCards(props) {
  var _configState$configs, _franchisesList$franc, _configState$configs2, _orderList$orders;
  var isMessagesView = props.isMessagesView,
    orderList = props.orderList,
    pagination = props.pagination,
    getPageOrders = props.getPageOrders,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    selectedOrderCard = props.selectedOrderCard,
    handleOrderCardClick = props.handleOrderCardClick,
    handleUpdateDriverLocation = props.handleUpdateDriverLocation,
    slaSettingTime = props.slaSettingTime,
    isDelivery = props.isDelivery,
    isUseQuery = props.isUseQuery,
    franchisesList = props.franchisesList;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    dictionary = _useLanguage2[0].dictionary,
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    optimizeImage = _useUtils2$.optimizeImage;
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    setCurrentTime = _useState2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useState3 = (0, _react.useState)({
      timer: true,
      slaBar: true
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    allowColumns = _useState4[0],
    setAllowColumns = _useState4[1];
  var showExternalId = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.change_order_id) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value) === '1';
  var cateringTypes = [7, 8];
  var franchiseImages = !(franchisesList !== null && franchisesList !== void 0 && franchisesList.error) && (franchisesList === null || franchisesList === void 0 || (_franchisesList$franc = franchisesList.franchises) === null || _franchisesList$franc === void 0 ? void 0 : _franchisesList$franc.reduce(function (imageKeys, franchise) {
    imageKeys[franchise.id] = franchise.logo;
    return imageKeys;
  }, {}));
  var isShowFiltersOptions = ((configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.filter_order_options) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value.split('|').map(function (value) {
    return value;
  })) || []).length > 0;
  var handleChangePage = function handleChangePage(page) {
    getPageOrders(pagination.pageSize, page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(pagination.from / pageSize);
    getPageOrders(pageSize, expectedPage);
  };
  var handleOrderClick = function handleOrderClick(e, order) {
    var isInvalid = e.target.closest('.view-details') || e.target.closest('.driver-selector');
    if (isInvalid) return;
    handleOrderCardClick(order);
    var element = document.getElementById('deliveryDashboard');
    if ((isDelivery || isMessagesView) && width < 993 && element) element.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  var getOrderStatus = function getOrderStatus(s) {
    var _dictionary$PENDING, _dictionary$COMPLETED, _dictionary$REJECTED, _dictionary$ORDER_STA, _dictionary$PREPARATI, _dictionary$REJECTED_, _dictionary$REJECTED_2, _dictionary$ACCEPTED_, _dictionary$ACCEPTED_2, _dictionary$PICK_UP_C, _dictionary$PICK_UP_F, _dictionary$DELIVERY_, _dictionary$DELIVERY_2, _dictionary$PREORDER, _dictionary$ORDER_NOT, _dictionary$ORDER_PIC, _dictionary$ORDER_STA2, _dictionary$ORDER_NOT2, _dictionary$ORDER_DRI, _dictionary$ORDER_DRI2, _dictionary$ORDER_CUS, _dictionary$ORDER_CUS2, _dictionary$ORDER_LOO, _dictionary$ORDER_DRI3, _dictionary$ORDER_STA3, _dictionary$ORDER_STA4, _dictionary$ORDER_DRI4, _orderStatus$Number;
    if (!dictionary) return s;
    var orderStatus = {
      0: (_dictionary$PENDING = dictionary === null || dictionary === void 0 ? void 0 : dictionary.PENDING) !== null && _dictionary$PENDING !== void 0 ? _dictionary$PENDING : 'Pending',
      1: (_dictionary$COMPLETED = dictionary === null || dictionary === void 0 ? void 0 : dictionary.COMPLETED_BY_ADMIN) !== null && _dictionary$COMPLETED !== void 0 ? _dictionary$COMPLETED : 'Completed by admin',
      2: (_dictionary$REJECTED = dictionary === null || dictionary === void 0 ? void 0 : dictionary.REJECTED) !== null && _dictionary$REJECTED !== void 0 ? _dictionary$REJECTED : 'Rejected',
      3: (_dictionary$ORDER_STA = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_STATUS_IN_BUSINESS) !== null && _dictionary$ORDER_STA !== void 0 ? _dictionary$ORDER_STA : 'Driver arrived to business',
      4: (_dictionary$PREPARATI = dictionary === null || dictionary === void 0 ? void 0 : dictionary.PREPARATION_COMPLETED) !== null && _dictionary$PREPARATI !== void 0 ? _dictionary$PREPARATI : 'Preparation Completed',
      5: (_dictionary$REJECTED_ = dictionary === null || dictionary === void 0 ? void 0 : dictionary.REJECTED_BY_BUSINESS) !== null && _dictionary$REJECTED_ !== void 0 ? _dictionary$REJECTED_ : 'Rejected by business',
      6: (_dictionary$REJECTED_2 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.REJECTED_BY_DRIVER) !== null && _dictionary$REJECTED_2 !== void 0 ? _dictionary$REJECTED_2 : 'Rejected by Driver',
      7: (_dictionary$ACCEPTED_ = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ACCEPTED_BY_BUSINESS) !== null && _dictionary$ACCEPTED_ !== void 0 ? _dictionary$ACCEPTED_ : 'Accepted by business',
      8: (_dictionary$ACCEPTED_2 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ACCEPTED_BY_DRIVER) !== null && _dictionary$ACCEPTED_2 !== void 0 ? _dictionary$ACCEPTED_2 : 'Accepted by driver',
      9: (_dictionary$PICK_UP_C = dictionary === null || dictionary === void 0 ? void 0 : dictionary.PICK_UP_COMPLETED_BY_DRIVER) !== null && _dictionary$PICK_UP_C !== void 0 ? _dictionary$PICK_UP_C : 'Pick up completed by driver',
      10: (_dictionary$PICK_UP_F = dictionary === null || dictionary === void 0 ? void 0 : dictionary.PICK_UP_FAILED_BY_DRIVER) !== null && _dictionary$PICK_UP_F !== void 0 ? _dictionary$PICK_UP_F : 'Pick up Failed by driver',
      11: (_dictionary$DELIVERY_ = dictionary === null || dictionary === void 0 ? void 0 : dictionary.DELIVERY_COMPLETED_BY_DRIVER) !== null && _dictionary$DELIVERY_ !== void 0 ? _dictionary$DELIVERY_ : 'Delivery completed by driver',
      12: (_dictionary$DELIVERY_2 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.DELIVERY_FAILED_BY_DRIVER) !== null && _dictionary$DELIVERY_2 !== void 0 ? _dictionary$DELIVERY_2 : 'Delivery Failed by driver',
      13: (_dictionary$PREORDER = dictionary === null || dictionary === void 0 ? void 0 : dictionary.PREORDER) !== null && _dictionary$PREORDER !== void 0 ? _dictionary$PREORDER : 'PreOrder',
      14: (_dictionary$ORDER_NOT = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_NOT_READY) !== null && _dictionary$ORDER_NOT !== void 0 ? _dictionary$ORDER_NOT : 'Order not ready',
      15: (_dictionary$ORDER_PIC = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER) !== null && _dictionary$ORDER_PIC !== void 0 ? _dictionary$ORDER_PIC : 'Order picked up completed by customer',
      16: (_dictionary$ORDER_STA2 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_STATUS_CANCELLED_BY_CUSTOMER) !== null && _dictionary$ORDER_STA2 !== void 0 ? _dictionary$ORDER_STA2 : 'Order cancelled by customer',
      17: (_dictionary$ORDER_NOT2 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_NOT_PICKEDUP_BY_CUSTOMER) !== null && _dictionary$ORDER_NOT2 !== void 0 ? _dictionary$ORDER_NOT2 : 'Order not picked up by customer',
      18: (_dictionary$ORDER_DRI = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS) !== null && _dictionary$ORDER_DRI !== void 0 ? _dictionary$ORDER_DRI : 'Driver almost arrived to business',
      19: (_dictionary$ORDER_DRI2 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER) !== null && _dictionary$ORDER_DRI2 !== void 0 ? _dictionary$ORDER_DRI2 : 'Driver almost arrived to customer',
      20: (_dictionary$ORDER_CUS = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS) !== null && _dictionary$ORDER_CUS !== void 0 ? _dictionary$ORDER_CUS : 'Customer almost arrived to business',
      21: (_dictionary$ORDER_CUS2 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_CUSTOMER_ARRIVED_BUSINESS) !== null && _dictionary$ORDER_CUS2 !== void 0 ? _dictionary$ORDER_CUS2 : 'Customer arrived to business',
      22: (_dictionary$ORDER_LOO = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_LOOKING_FOR_DRIVER) !== null && _dictionary$ORDER_LOO !== void 0 ? _dictionary$ORDER_LOO : 'Looking for driver',
      23: (_dictionary$ORDER_DRI3 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_DRIVER_ON_WAY) !== null && _dictionary$ORDER_DRI3 !== void 0 ? _dictionary$ORDER_DRI3 : 'Driver on way',
      24: (_dictionary$ORDER_STA3 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_STATUS_DRIVER_WAITING_FOR_ORDER) !== null && _dictionary$ORDER_STA3 !== void 0 ? _dictionary$ORDER_STA3 : 'Driver waiting for order',
      25: (_dictionary$ORDER_STA4 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY) !== null && _dictionary$ORDER_STA4 !== void 0 ? _dictionary$ORDER_STA4 : 'Accepted by driver company',
      26: (_dictionary$ORDER_DRI4 = dictionary === null || dictionary === void 0 ? void 0 : dictionary.ORDER_DRIVER_ARRIVED_CUSTOMER) !== null && _dictionary$ORDER_DRI4 !== void 0 ? _dictionary$ORDER_DRI4 : 'Driver arrived to customer'
    };
    return (_orderStatus$Number = orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus[Number(s)]) !== null && _orderStatus$Number !== void 0 ? _orderStatus$Number : s;
  };
  var getDelayMinutes = function getDelayMinutes(order) {
    // targetMin = delivery_datetime  + eta_time - now()
    var offset = 300;
    var cdtToutc = (0, _moment.default)(order === null || order === void 0 ? void 0 : order.delivery_datetime).add(offset, 'minutes').format('YYYY-MM-DD HH:mm:ss');
    var _delivery = order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(cdtToutc);
    var _eta = order === null || order === void 0 ? void 0 : order.eta_time;
    var diffTimeAsSeconds = (0, _moment.default)(_delivery).add(_eta, 'minutes').diff((0, _moment.default)().utc(), 'seconds');
    return Math.ceil(diffTimeAsSeconds / 60);
  };
  var displayDelayedTime = function displayDelayedTime(order) {
    var tagetedMin = getDelayMinutes(order);
    // get day, hour and minutes
    var sign = tagetedMin >= 0 ? '' : '- ';
    tagetedMin = Math.abs(tagetedMin);
    var day = Math.floor(tagetedMin / 1440);
    var restMinOfTargetedMin = tagetedMin - 1440 * day;
    var restHours = Math.floor(restMinOfTargetedMin / 60);
    var restMins = restMinOfTargetedMin - 60 * restHours;
    // make standard time format
    day = day === 0 ? '' : day + 'day  ';
    restHours = restHours < 10 ? '0' + restHours : restHours;
    restMins = restMins < 10 ? '0' + restMins : restMins;
    var finalTaget = sign + day + restHours + ':' + restMins;
    return finalTaget;
  };

  // const getStatusClassName = (minutes) => {
  //   if (isNaN(Number(minutes))) return 'in_time'
  //   const delayTime = configState?.configs?.order_deadlines_delayed_time?.value
  //   return minutes > 0 ? 'in_time' : Math.abs(minutes) <= delayTime ? 'at_risk' : 'delayed'
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(Date.now())
  //   }, slaSettingTime)

  //   return () => clearInterval(interval)
  // }, [])

  (0, _react.useEffect)(function () {
    if (orderList.loading || !selectedOrderCard) return;
    var updatedOrder = orderList === null || orderList === void 0 ? void 0 : orderList.orders.find(function (order) {
      return order.id === (selectedOrderCard === null || selectedOrderCard === void 0 ? void 0 : selectedOrderCard.id);
    });
    if (updatedOrder) {
      handleUpdateDriverLocation && handleUpdateDriverLocation(updatedOrder);
    }
  }, [orderList === null || orderList === void 0 ? void 0 : orderList.orders]);
  (0, _react.useEffect)(function () {
    var _configState$configs3;
    var slaSettings = (configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.order_deadlines_enabled) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === '1';
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, {
      timer: slaSettings,
      slaBar: slaSettings
    }));
  }, [configState.loading]);
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !(pagination !== null && pagination !== void 0 && pagination.currentPage) || !(pagination !== null && pagination !== void 0 && pagination.pageSize) || !(pagination !== null && pagination !== void 0 && pagination.total)) return;
    (0, _utils.addQueryToUrl)({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    });
  }, [pagination === null || pagination === void 0 ? void 0 : pagination.currentPage, pagination === null || pagination === void 0 ? void 0 : pagination.pageSize, pagination === null || pagination === void 0 ? void 0 : pagination.total]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersListContainer, {
    isShowFiltersOptions: isShowFiltersOptions
  }, orderList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.OrderCard, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderHeader, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150
    }), /*#__PURE__*/_react.default.createElement(_styles.ViewDetails, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), /*#__PURE__*/_react.default.createElement(_styles.CardContent, null, /*#__PURE__*/_react.default.createElement(_styles.InfoItemContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), /*#__PURE__*/_react.default.createElement(_styles.InfoItemContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_orderList$orders = orderList.orders) === null || _orderList$orders === void 0 ? void 0 : _orderList$orders.map(function (order) {
    var _order$business, _order$business2, _theme$images, _order$business3, _order$business4, _order$driver, _order$driver2, _order$driver3, _order$driver4;
    return /*#__PURE__*/_react.default.createElement(_styles.OrderCard, {
      key: order.id,
      active: (selectedOrderCard === null || selectedOrderCard === void 0 ? void 0 : selectedOrderCard.id) === order.id,
      onClick: function onClick(e) {
        return handleOrderClick(e, order);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.CardHeading, null, /*#__PURE__*/_react.default.createElement(_styles.OrderHeader, null, /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement("span", null, t('INVOICE_ORDER_NO', 'Order No.'), " ", showExternalId && !!(order !== null && order !== void 0 && order.external_id) ? order.external_id : order.id)), /*#__PURE__*/_react.default.createElement("p", null, getOrderStatus(order.status)), /*#__PURE__*/_react.default.createElement("div", null, cateringTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) && /*#__PURE__*/_react.default.createElement("p", {
      className: "date"
    }, "".concat(t('CREATED_AT', 'Created at'), ": ").concat(parseDate(order === null || order === void 0 ? void 0 : order.created_at))), /*#__PURE__*/_react.default.createElement("p", null, "".concat(cateringTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) ? "".concat(t('PLACED_TO', 'Placed to'), ":") : '', " ").concat(order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
      utc: false
    }))), /*#__PURE__*/_react.default.createElement(_styles.ViewDetails, {
      className: "view-details",
      onClick: function onClick() {
        return handleOpenOrderDetail(order);
      }
    }, t('VIEW_DETAILS', 'View details')))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.timer) && /*#__PURE__*/_react.default.createElement(_styles.Timer, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, "Timer"), /*#__PURE__*/_react.default.createElement("p", {
      className: order === null || order === void 0 ? void 0 : order.time_status
    }, displayDelayedTime(order))), (order === null || order === void 0 ? void 0 : order.codigoPod) && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        paddingTop: 50
      }
    }, /*#__PURE__*/_react.default.createElement("p", null, "".concat(t('PODS', 'Pod'), ": ").concat(order === null || order === void 0 ? void 0 : order.codigoPod)))), isMessagesView && (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && /*#__PURE__*/_react.default.createElement(_styles.UnreadMessageCounter, null, order === null || order === void 0 ? void 0 : order.unread_count), /*#__PURE__*/_react.default.createElement(_styles.CardContent, null, /*#__PURE__*/_react.default.createElement(_styles.InfoItemContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage(franchiseImages[order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.franchise_id] || ((_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_50,c_limit'),
      loading: "lazy",
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, order === null || order === void 0 || (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business4 = order.business) === null || _order$business4 === void 0 || (_order$business4 = _order$business4.city) === null || _order$business4 === void 0 ? void 0 : _order$business4.name))), /*#__PURE__*/_react.default.createElement(_styles.InfoItemContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, order !== null && order !== void 0 && (_order$driver = order.driver) !== null && _order$driver !== void 0 && _order$driver.photo ? /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage(order === null || order === void 0 || (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo, 'h_50,c_limit'),
      loading: "lazy",
      alt: ""
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, order !== null && order !== void 0 && order.driver ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, order === null || order === void 0 || (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.cellphone)) : /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('NO_DRIVER', 'No Driver'))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.slaBar) && /*#__PURE__*/_react.default.createElement(_styles.Timestatus, {
      timeState: order === null || order === void 0 ? void 0 : order.time_status
    }));
  }))), pagination && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: pagination.totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: pagination.pageSize,
    handleChangePageSize: handleChangePageSize
  })));
};
exports.OrdersCards = OrdersCards;