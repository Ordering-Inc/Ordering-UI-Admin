"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersTable = void 0;
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles = require("./styles");
var _Order = require("./Order");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var OrderTablePropsAreEqual = function OrderTablePropsAreEqual(prevProps, nextProps) {
  return prevProps.isSelectedOrders === nextProps.isSelectedOrders && JSON.stringify(prevProps.orderList) === JSON.stringify(nextProps.orderList) && JSON.stringify(prevProps.pagination) === JSON.stringify(nextProps.pagination) && JSON.stringify(prevProps.selectedOrderIds) === JSON.stringify(nextProps.selectedOrderIds) && JSON.stringify(prevProps.isTourOpen) === JSON.stringify(nextProps.isTourOpen) && prevProps.groupStatus === nextProps.groupStatus && JSON.stringify(prevProps.allowColumns) === JSON.stringify(nextProps.allowColumns) && prevProps.isUseQuery === nextProps.isUseQuery;
};
var OrdersTable = exports.OrdersTable = /*#__PURE__*/(0, _react.memo)(function (props) {
  var _configState$configs, _configState$configs2, _franchisesList$franc, _orderList$orders3;
  var hidePhoto = props.hidePhoto,
    isSelectedOrders = props.isSelectedOrders,
    orderList = props.orderList,
    pagination = props.pagination,
    selectedOrderIds = props.selectedOrderIds,
    orderDetailId = props.orderDetailId,
    getPageOrders = props.getPageOrders,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    setSelectedOrderIds = props.setSelectedOrderIds,
    currentTourStep = props.currentTourStep,
    isTourOpen = props.isTourOpen,
    handleOpenTour = props.handleOpenTour,
    setIsTourOpen = props.setIsTourOpen,
    groupStatus = props.groupStatus,
    allowColumns = props.allowColumns,
    setAllowColumns = props.setAllowColumns,
    handleDrop = props.handleDrop,
    saveUserSettings = props.saveUserSettings,
    isUseQuery = props.isUseQuery,
    franchisesList = props.franchisesList;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    dictionary = _useLanguage2[0].dictionary,
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAllChecked = _useState2[0],
    setIsAllChecked = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    dragOverd = _useState4[0],
    setDragOverd = _useState4[1];
  var handleChangePage = (0, _react.useCallback)(function (page) {
    if (page !== pagination.currentPage) {
      getPageOrders(pagination.pageSize, page);
    }
  }, [pagination.currentPage, pagination.pageSize, getPageOrders]);
  var handleChangePageSize = (0, _react.useCallback)(function (pageSize) {
    if (pageSize !== pagination.pageSize) {
      var expectedPage = Math.ceil(pagination.from / pageSize);
      getPageOrders(pageSize, expectedPage);
    }
  }, [pagination.from, pagination.pageSize, getPageOrders]);
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var isEnabledRowInColor = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.row_in_color_enabled) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value) === '1';
  var showExternalId = (configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.change_order_id) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value) === '1';
  var franchiseImages = !(franchisesList !== null && franchisesList !== void 0 && franchisesList.error) && (franchisesList === null || franchisesList === void 0 || (_franchisesList$franc = franchisesList.franchises) === null || _franchisesList$franc === void 0 ? void 0 : _franchisesList$franc.reduce(function (imageKeys, franchise) {
    imageKeys[franchise.id] = franchise.logo;
    return imageKeys;
  }, {}));
  var optionsDefault = [{
    value: 'status',
    content: t('STATUS', 'Status')
  }, {
    value: 'orderNumber',
    content: t('INVOICE_ORDER_NO', 'Order No.')
  }, {
    value: 'agent',
    content: t('AGENT', 'Agent')
  }, {
    value: 'cartGroupId',
    content: t('GROUP_ORDER', 'Group Order')
  }, {
    value: 'driverGroupId',
    content: t('EXPORT_DRIVER_GROUP_ID', 'Driver Group Id')
  }, {
    value: 'dateTime',
    content: t('DATE_TIME', 'Date and time')
  }, {
    value: 'business',
    content: t('BUSINESS', 'Business')
  }, {
    value: 'customer',
    content: t('CUSTOMER', 'Customer')
  }, {
    value: 'driver',
    content: t('DRIVER', 'Driver')
  }, {
    value: 'advanced',
    content: t('ADVANCED_LOGISTICS', 'Advance Logistics')
  }, {
    value: 'timer',
    content: t('SLA_TIMER', 'SLA’s timer')
  }, {
    value: 'eta',
    content: t('ETA', 'ETA')
  }, {
    value: 'total',
    content: t('EXPORT_TOTAL', 'Total')
  }, {
    value: 'externalId',
    content: t('EXTERNAL_ID', 'External id')
  }, {
    value: 'channel',
    content: t('CHANNEL', 'Channel')
  }, {
    value: 'pod',
    content: t('PODS', 'Pod')
  }];
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
    day = day === 0 ? '' : "".concat(day + ' ' + t('DAY', 'day') + ' ');
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
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    var _column2;
    var _column = {};
    if (type === 'channel') {
      var _allowColumns$type$vi, _allowColumns$type;
      _column = {
        visable: (_allowColumns$type$vi = (_allowColumns$type = allowColumns[type]) === null || _allowColumns$type === void 0 ? void 0 : _allowColumns$type.visable) !== null && _allowColumns$type$vi !== void 0 ? _allowColumns$type$vi : false,
        title: t('CHANNEL', 'Channel'),
        className: 'channelInfo',
        draggable: true,
        colSpan: 1,
        order: 12
      };
    } else if (type === 'pod') {
      var _allowColumns$type$vi2, _allowColumns$type2;
      _column = {
        visable: (_allowColumns$type$vi2 = (_allowColumns$type2 = allowColumns[type]) === null || _allowColumns$type2 === void 0 ? void 0 : _allowColumns$type2.visable) !== null && _allowColumns$type$vi2 !== void 0 ? _allowColumns$type$vi2 : false,
        title: t('PODS', 'Pod'),
        className: 'podInfo',
        draggable: true,
        colSpan: 1,
        order: 13
      };
    } else {
      _column = allowColumns[type];
    }
    var updatedAllowColumns = _objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, _objectSpread(_objectSpread({}, _column), {}, {
      visable: !((_column2 = _column) !== null && _column2 !== void 0 && _column2.visable)
    })));
    setAllowColumns(updatedAllowColumns);
    saveUserSettings(JSON.parse(JSON.stringify(updatedAllowColumns)));
  };
  var handleClickOrder = function handleClickOrder(order, e) {
    var inValid = !isSelectedOrders && (e.target.closest('.orderCheckBox') || e.target.closest('.driverInfo') || e.target.closest('.orderStatusTitle'));
    if (inValid) return;
    handleOpenOrderDetail(order);
  };
  var handleSelecteAllOrder = function handleSelecteAllOrder() {
    var _orderList$orders;
    var orderIds = (_orderList$orders = orderList.orders) === null || _orderList$orders === void 0 ? void 0 : _orderList$orders.reduce(function (ids, order) {
      return [].concat(_toConsumableArray(ids), [order.id]);
    }, []);
    if (!isAllChecked) {
      setSelectedOrderIds([].concat(_toConsumableArray(selectedOrderIds), _toConsumableArray(orderIds)));
    } else {
      var orderIdsToDeleteSet = new Set(orderIds);
      var updatedSelectedOrderIds = selectedOrderIds.filter(function (name) {
        return !orderIdsToDeleteSet.has(name);
      });
      setSelectedOrderIds(updatedSelectedOrderIds);
    }
  };
  /**
   * Method to handle drag start
   */
  var handleDragStart = function handleDragStart(event, columnName) {
    var _allowColumns$columnN;
    event.dataTransfer.setData('transferColumnName', columnName);
    var ghostEle = document.createElement('div');
    ghostEle.classList.add('ghostDragging');
    ghostEle.innerHTML = (_allowColumns$columnN = allowColumns[columnName]) === null || _allowColumns$columnN === void 0 ? void 0 : _allowColumns$columnN.title;
    document.body.appendChild(ghostEle);
    event.dataTransfer.setDragImage(ghostEle, 0, 0);
  };
  /**
   * Method to handle drag over
   */
  var handleDragOver = function handleDragOver(event, columnName) {
    event.preventDefault();
    setDragOverd(columnName);
  };

  /**
   * Method to handle drag end
   */
  var handleDragEnd = function handleDragEnd() {
    var elements = document.getElementsByClassName('ghostDragging');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    setDragOverd('');
  };
  (0, _react.useEffect)(function () {
    var _orderList$orders2;
    if (orderList.loading) return;
    var orderIds = (_orderList$orders2 = orderList.orders) === null || _orderList$orders2 === void 0 ? void 0 : _orderList$orders2.reduce(function (ids, order) {
      return [].concat(_toConsumableArray(ids), [order.id]);
    }, []);
    var _isAllChecked = orderIds.every(function (elem) {
      return selectedOrderIds.includes(elem);
    });
    setIsAllChecked(_isAllChecked);
  }, [orderList.orders, selectedOrderIds]);
  var handleChangeKeyboard = function handleChangeKeyboard(evt) {
    if (evt.code === 'Escape') setIsTourOpen && setIsTourOpen(false);
    if (evt.keyCode === 37 && currentTourStep === 1) handleOpenTour();
    if (evt.keyCode === 37 && currentTourStep === 4) handleOpenOrderDetail(orderList === null || orderList === void 0 ? void 0 : orderList.orders[0], true);
    if (evt.keyCode === 39 && currentTourStep === 0) handleOpenOrderDetail(orderList === null || orderList === void 0 ? void 0 : orderList.orders[0]);
  };
  (0, _react.useEffect)(function () {
    if (!isTourOpen) return;
    document.addEventListener('keydown', handleChangeKeyboard);
    return function () {
      return document.removeEventListener('keydown', handleChangeKeyboard);
    };
  }, [isTourOpen, currentTourStep]);
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !(pagination !== null && pagination !== void 0 && pagination.currentPage) || !(pagination !== null && pagination !== void 0 && pagination.pageSize) || !(pagination !== null && pagination !== void 0 && pagination.total)) return;
    (0, _utils.addQueryToUrl)({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    });
  }, [pagination === null || pagination === void 0 ? void 0 : pagination.currentPage, pagination === null || pagination === void 0 ? void 0 : pagination.pageSize, pagination === null || pagination === void 0 ? void 0 : pagination.total]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersContainer, {
    id: "orderTable",
    isSelectedOrders: isSelectedOrders,
    noScroll: isTourOpen && currentTourStep === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.Table, {
    className: "orders_table",
    noFixedHeader: !orderList.loading && ((_orderList$orders3 = orderList.orders) === null || _orderList$orders3 === void 0 ? void 0 : _orderList$orders3.length) <= 5
  }, !isSelectedOrders && /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, allowColumns && (Object.keys(allowColumns).filter(function (col) {
    var _allowColumns$col, _allowColumns$col2;
    return ((_allowColumns$col = allowColumns[col]) === null || _allowColumns$col === void 0 ? void 0 : _allowColumns$col.visable) && ((_allowColumns$col2 = allowColumns[col]) === null || _allowColumns$col2 === void 0 ? void 0 : _allowColumns$col2.order) !== 0;
  }).length === 0 ? /*#__PURE__*/_react.default.createElement("th", {
    className: "orderPrice"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    handleChangeAllowColumns: handleChangeAllowColumns,
    isOrder: true
  })) : Object.keys(allowColumns).filter(function (col) {
    var _allowColumns$col3, _allowColumns$col4;
    return ((_allowColumns$col3 = allowColumns[col]) === null || _allowColumns$col3 === void 0 ? void 0 : _allowColumns$col3.visable) && ((_allowColumns$col4 = allowColumns[col]) === null || _allowColumns$col4 === void 0 ? void 0 : _allowColumns$col4.order) !== 0;
  }).sort(function (col1, col2) {
    var _allowColumns$col5, _allowColumns$col6;
    return ((_allowColumns$col5 = allowColumns[col1]) === null || _allowColumns$col5 === void 0 ? void 0 : _allowColumns$col5.order) - ((_allowColumns$col6 = allowColumns[col2]) === null || _allowColumns$col6 === void 0 ? void 0 : _allowColumns$col6.order);
  }).map(function (column, i, array) {
    var _allowColumns$column$3, _allowColumns$column7, _allowColumns$column8, _theme$images$icons3, _allowColumns$column9;
    if (column === 'slaBar') {
      return;
    }
    if (column === 'orderNumber') {
      var _allowColumns$orderNu, _allowColumns$dateTim, _allowColumns$slaBar;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, /*#__PURE__*/_react.default.createElement("th", {
        className: !(allowColumns !== null && allowColumns !== void 0 && (_allowColumns$orderNu = allowColumns.orderNumber) !== null && _allowColumns$orderNu !== void 0 && _allowColumns$orderNu.visable || allowColumns !== null && allowColumns !== void 0 && (_allowColumns$dateTim = allowColumns.dateTime) !== null && _allowColumns$dateTim !== void 0 && _allowColumns$dateTim.visable) ? 'orderNo small' : 'orderNo',
        key: "noDragTh-".concat(i),
        colSpan: allowColumns !== null && allowColumns !== void 0 && (_allowColumns$slaBar = allowColumns.slaBar) !== null && _allowColumns$slaBar !== void 0 && _allowColumns$slaBar.visable ? 2 : 1
      }, /*#__PURE__*/_react.default.createElement(_styles.CheckBox, {
        isChecked: !orderList.loading && isAllChecked,
        onClick: function onClick() {
          return handleSelecteAllOrder();
        },
        className: "orderCheckBox"
      }, !orderList.loading && isAllChecked ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), showExternalId ? t('DATE', 'Date') : t('ORDER', 'Order')), column === _toConsumableArray(array).pop() && /*#__PURE__*/_react.default.createElement("th", {
        className: "orderPrice",
        key: "noDragTh-".concat(i)
      }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
        allowColumns: allowColumns,
        optionsDefault: optionsDefault,
        handleChangeAllowColumns: handleChangeAllowColumns,
        isOrder: true
      })));
    }
    if (column === 'externalId') {
      var _allowColumns$column$, _allowColumns$column, _allowColumns$column2, _theme$images$icons, _allowColumns$column3;
      return /*#__PURE__*/_react.default.createElement(_styles.DragTh, {
        key: "dragTh-".concat(i),
        onDragOver: function onDragOver(e) {
          return handleDragOver === null || handleDragOver === void 0 ? void 0 : handleDragOver(e, column);
        },
        onDrop: function onDrop(e) {
          return handleDrop(e, column);
        },
        onDragEnd: function onDragEnd(e) {
          return handleDragEnd(e);
        },
        colSpan: (_allowColumns$column$ = (_allowColumns$column = allowColumns[column]) === null || _allowColumns$column === void 0 ? void 0 : _allowColumns$column.colSpan) !== null && _allowColumns$column$ !== void 0 ? _allowColumns$column$ : 1,
        className: (_allowColumns$column2 = allowColumns[column]) === null || _allowColumns$column2 === void 0 ? void 0 : _allowColumns$column2.className,
        selectedDragOver: column === dragOverd
      }, /*#__PURE__*/_react.default.createElement("div", {
        draggable: true,
        onDragStart: function onDragStart(e) {
          return handleDragStart === null || handleDragStart === void 0 ? void 0 : handleDragStart(e, column);
        }
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
        alt: "six dots"
      }), /*#__PURE__*/_react.default.createElement("span", null, (_allowColumns$column3 = allowColumns[column]) === null || _allowColumns$column3 === void 0 ? void 0 : _allowColumns$column3.title)));
    }
    if (column === 'channel' || column !== 'channel' && column === _toConsumableArray(array).pop()) {
      var _allowColumns$column$2, _allowColumns$column4, _allowColumns$column5, _theme$images$icons2, _allowColumns$column6;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, column !== 'total' && column === _toConsumableArray(array).pop() && /*#__PURE__*/_react.default.createElement(_styles.DragTh, {
        key: "dragTh-".concat(i),
        onDragOver: function onDragOver(e) {
          return handleDragOver === null || handleDragOver === void 0 ? void 0 : handleDragOver(e, column);
        },
        onDrop: function onDrop(e) {
          return handleDrop(e, column);
        },
        onDragEnd: function onDragEnd(e) {
          return handleDragEnd(e);
        },
        colSpan: (_allowColumns$column$2 = (_allowColumns$column4 = allowColumns[column]) === null || _allowColumns$column4 === void 0 ? void 0 : _allowColumns$column4.colSpan) !== null && _allowColumns$column$2 !== void 0 ? _allowColumns$column$2 : 1,
        className: (_allowColumns$column5 = allowColumns[column]) === null || _allowColumns$column5 === void 0 ? void 0 : _allowColumns$column5.className,
        selectedDragOver: column === dragOverd
      }, /*#__PURE__*/_react.default.createElement("div", {
        draggable: true,
        onDragStart: function onDragStart(e) {
          return handleDragStart === null || handleDragStart === void 0 ? void 0 : handleDragStart(e, column);
        }
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: (_theme$images$icons2 = theme.images.icons) === null || _theme$images$icons2 === void 0 ? void 0 : _theme$images$icons2.sixDots,
        alt: "six dots"
      }), /*#__PURE__*/_react.default.createElement("span", null, (_allowColumns$column6 = allowColumns[column]) === null || _allowColumns$column6 === void 0 ? void 0 : _allowColumns$column6.title))));
    }
    return (column !== 'timer' || column === 'timer' && (groupStatus === 'pending' || groupStatus === 'inProgress')) && /*#__PURE__*/_react.default.createElement(_styles.DragTh, {
      key: "dragTh-".concat(i),
      onDragOver: function onDragOver(e) {
        return handleDragOver === null || handleDragOver === void 0 ? void 0 : handleDragOver(e, column);
      },
      onDrop: function onDrop(e) {
        return handleDrop(e, column);
      },
      onDragEnd: function onDragEnd(e) {
        return handleDragEnd(e);
      },
      colSpan: (_allowColumns$column$3 = (_allowColumns$column7 = allowColumns[column]) === null || _allowColumns$column7 === void 0 ? void 0 : _allowColumns$column7.colSpan) !== null && _allowColumns$column$3 !== void 0 ? _allowColumns$column$3 : 1,
      className: (_allowColumns$column8 = allowColumns[column]) === null || _allowColumns$column8 === void 0 ? void 0 : _allowColumns$column8.className,
      selectedDragOver: column === dragOverd
    }, /*#__PURE__*/_react.default.createElement("div", {
      draggable: true,
      onDragStart: function onDragStart(e) {
        return handleDragStart === null || handleDragStart === void 0 ? void 0 : handleDragStart(e, column);
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: (_theme$images$icons3 = theme.images.icons) === null || _theme$images$icons3 === void 0 ? void 0 : _theme$images$icons3.sixDots,
      alt: "six dots"
    }), /*#__PURE__*/_react.default.createElement("span", null, (_allowColumns$column9 = allowColumns[column]) === null || _allowColumns$column9 === void 0 ? void 0 : _allowColumns$column9.title)));
  })))), orderList.loading || !allowColumns ? _toConsumableArray(Array(10).keys()).map(function (i) {
    var _allowColumns$slaBar2, _allowColumns$orderNu2, _allowColumns$dateTim2, _allowColumns$orderNu3, _allowColumns$dateTim3, _allowColumns$externa, _allowColumns$cartGro, _allowColumns$driverG, _allowColumns$status, _allowColumns$busines, _allowColumns$custome, _allowColumns$driver, _allowColumns$deliver, _allowColumns$status2, _allowColumns$advance, _allowColumns$advance2, _allowColumns$advance3, _allowColumns$channel, _allowColumns$pod, _allowColumns$total;
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 || (_allowColumns$slaBar2 = allowColumns.slaBar) === null || _allowColumns$slaBar2 === void 0 ? void 0 : _allowColumns$slaBar2.visable) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, null)), /*#__PURE__*/_react.default.createElement("td", {
      className: !(allowColumns !== null && allowColumns !== void 0 && (_allowColumns$orderNu2 = allowColumns.orderNumber) !== null && _allowColumns$orderNu2 !== void 0 && _allowColumns$orderNu2.visable || allowColumns !== null && allowColumns !== void 0 && (_allowColumns$dateTim2 = allowColumns.dateTime) !== null && _allowColumns$dateTim2 !== void 0 && _allowColumns$dateTim2.visable) ? 'orderNo small' : 'orderNo'
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderNumberContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBox, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 25,
      height: 25,
      style: {
        margin: '10px'
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 || (_allowColumns$orderNu3 = allowColumns.orderNumber) === null || _allowColumns$orderNu3 === void 0 ? void 0 : _allowColumns$orderNu3.visable) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), (allowColumns === null || allowColumns === void 0 || (_allowColumns$dateTim3 = allowColumns.dateTime) === null || _allowColumns$dateTim3 === void 0 ? void 0 : _allowColumns$dateTim3.visable) && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    })))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$externa = allowColumns.externalId) === null || _allowColumns$externa === void 0 ? void 0 : _allowColumns$externa.visable) && /*#__PURE__*/_react.default.createElement("td", {
      className: "externalId"
    }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$cartGro = allowColumns.cartGroupId) === null || _allowColumns$cartGro === void 0 ? void 0 : _allowColumns$cartGro.visable) && /*#__PURE__*/_react.default.createElement("td", {
      className: "statusInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$driverG = allowColumns.driverGroupId) === null || _allowColumns$driverG === void 0 ? void 0 : _allowColumns$driverG.visable) && /*#__PURE__*/_react.default.createElement("td", {
      className: "statusInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$status = allowColumns.status) === null || _allowColumns$status === void 0 ? void 0 : _allowColumns$status.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "statusInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$busines = allowColumns.business) === null || _allowColumns$busines === void 0 ? void 0 : _allowColumns$busines.visable) && /*#__PURE__*/_react.default.createElement("td", {
      className: "businessInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, !hidePhoto && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$custome = allowColumns.customer) === null || _allowColumns$custome === void 0 ? void 0 : _allowColumns$custome.visable) && /*#__PURE__*/_react.default.createElement("td", {
      className: "customerInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, !hidePhoto && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$driver = allowColumns.driver) === null || _allowColumns$driver === void 0 ? void 0 : _allowColumns$driver.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "driverInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.DriversInfo, {
      className: "d-flex align-items-center"
    }, !hidePhoto && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      style: {
        margin: '10px'
      }
    }))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$deliver = allowColumns.deliveryType) === null || _allowColumns$deliver === void 0 ? void 0 : _allowColumns$deliver.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderType"
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 35,
      height: 35
    }))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$status2 = allowColumns.status) === null || _allowColumns$status2 === void 0 ? void 0 : _allowColumns$status2.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderStatusTitle"
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapOrderStatusSelector, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$advance = allowColumns.advanced) === null || _allowColumns$advance === void 0 ? void 0 : _allowColumns$advance.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "logistic"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$advance2 = allowColumns.advanced) === null || _allowColumns$advance2 === void 0 ? void 0 : _allowColumns$advance2.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "attempts"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$advance3 = allowColumns.advanced) === null || _allowColumns$advance3 === void 0 ? void 0 : _allowColumns$advance3.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "priority"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$channel = allowColumns.channel) === null || _allowColumns$channel === void 0 ? void 0 : _allowColumns$channel.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderStatusTitle"
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapOrderStatusSelector, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$pod = allowColumns.pod) === null || _allowColumns$pod === void 0 ? void 0 : _allowColumns$pod.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderStatusTitle"
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapOrderStatusSelector, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }))), !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderPrice"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 || (_allowColumns$total = allowColumns.total) === null || _allowColumns$total === void 0 ? void 0 : _allowColumns$total.visable) && /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))));
  }) : /*#__PURE__*/_react.default.createElement(_styles.OrderTbody, null, orderList.orders.map(function (order, i) {
    return /*#__PURE__*/_react.default.createElement(_Order.Order, {
      key: order === null || order === void 0 ? void 0 : order.id,
      i: i,
      order: order,
      orderDetailId: orderDetailId,
      isEnabledRowInColor: isEnabledRowInColor,
      handleClickOrder: handleClickOrder,
      allowColumns: allowColumns,
      isSelectedOrders: isSelectedOrders,
      selectedOrderIds: selectedOrderIds,
      handleSelectedOrderIds: handleSelectedOrderIds,
      showExternalId: showExternalId,
      getOrderStatus: getOrderStatus,
      hidePhoto: hidePhoto,
      getLogisticTag: getLogisticTag,
      getPriorityTag: getPriorityTag,
      groupStatus: groupStatus,
      displayDelayedTime: displayDelayedTime,
      getCurrenySymbol: _utils.getCurrenySymbol,
      franchiseImages: franchiseImages
    });
  })))), pagination && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize),
    handleChangePage: handleChangePage,
    defaultPageSize: pagination.pageSize,
    handleChangePageSize: handleChangePageSize
  })));
}, OrderTablePropsAreEqual);