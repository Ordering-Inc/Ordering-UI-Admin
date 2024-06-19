"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _OrdersTable = require("../OrdersTable");
var _OrdersCards = require("../OrdersCards");
var _styles = require("../../../styles");
var _AiOutlineInfoCircle = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineInfoCircle"));
var _styles2 = require("./styles");
var _Shared = require("../../Shared");
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
var OrdersListing = exports.OrdersListing = /*#__PURE__*/(0, _react.memo)(function (props) {
  var _theme$images;
  var hidePhoto = props.hidePhoto,
    isSelectedOrders = props.isSelectedOrders,
    orderList = props.orderList,
    selectedOrderIds = props.selectedOrderIds,
    orderListView = props.orderListView,
    handleUpdateOrderStatus = props.handleUpdateOrderStatus,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    pagination = props.pagination,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    handleOpenMessage = props.handleOpenMessage,
    handleOrderCardClick = props.handleOrderCardClick,
    handleUpdateDriverLocation = props.handleUpdateDriverLocation,
    messageOrder = props.messageOrder,
    selectedOrderCard = props.selectedOrderCard,
    messageListView = props.messageListView,
    messageType = props.messageType,
    loadMoreOrders = props.loadMoreOrders,
    getPageOrders = props.getPageOrders,
    ordersStatusGroup = props.ordersStatusGroup,
    groupStatus = props.groupStatus,
    orderDetailId = props.orderDetailId,
    filterValues = props.filterValues,
    setFilterModalOpen = props.setFilterModalOpen,
    setOrdersTotalAmount = props.setOrdersTotalAmount,
    isMessagesView = props.isMessagesView,
    setSelectedOrderIds = props.setSelectedOrderIds,
    handleOpenTour = props.handleOpenTour,
    currentTourStep = props.currentTourStep,
    isTourOpen = props.isTourOpen,
    setIsTourOpen = props.setIsTourOpen,
    slaSettingTime = props.slaSettingTime,
    allowColumns = props.allowColumns,
    setAllowColumns = props.setAllowColumns,
    handleDrop = props.handleDrop,
    isDelivery = props.isDelivery,
    saveUserSettings = props.saveUserSettings,
    isUseQuery = props.isUseQuery,
    handleSetOpenOrderDetail = props.handleSetOpenOrderDetail;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    filterApplied = _useState2[0],
    setFilterApplied = _useState2[1];
  var handleDobleClick = function handleDobleClick() {
    if (handleSetOpenOrderDetail && orderDetailId) {
      handleSetOpenOrderDetail(true);
    }
  };
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
  }];
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    var _column2;
    var _column = {};
    if (type === 'channel') {
      _column = {
        visable: allowColumns[type].visable,
        title: t('CHANNEL', 'Channel'),
        className: 'channelInfo',
        draggable: true,
        colSpan: 1,
        order: 12
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
  (0, _react.useEffect)(function () {
    if (orderList.loading || !messageListView) return;
    if (orderList.orders.length === 0 || messageOrder) return;
    handleOpenMessage && handleOpenMessage(orderList.orders[0], messageType);
  }, [orderList.loading, messageListView]);
  (0, _react.useEffect)(function () {
    if (!isMessagesView || orderList.loading || selectedOrderCard) return;
    if ((orderList === null || orderList === void 0 ? void 0 : orderList.orders.length) > 0) {
      handleOrderCardClick(orderList.orders[0]);
    }
  }, [isMessagesView, orderList, selectedOrderCard]);
  (0, _react.useEffect)(function () {
    var _filterApplied = false;
    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false;
    } else {
      var _filterValues$groupTy, _filterValues$busines, _filterValues$cityIds, _filterValues$deliver, _filterValues$driverI, _filterValues$paymeth, _filterValues$statuse;
      _filterApplied = (filterValues === null || filterValues === void 0 || (_filterValues$groupTy = filterValues.groupTypes) === null || _filterValues$groupTy === void 0 ? void 0 : _filterValues$groupTy.length) || (filterValues === null || filterValues === void 0 || (_filterValues$busines = filterValues.businessIds) === null || _filterValues$busines === void 0 ? void 0 : _filterValues$busines.length) > 0 || (filterValues === null || filterValues === void 0 || (_filterValues$cityIds = filterValues.cityIds) === null || _filterValues$cityIds === void 0 ? void 0 : _filterValues$cityIds.length) > 0 || (filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryEndDatetime) !== null || (filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryFromDatetime) !== null || (filterValues === null || filterValues === void 0 || (_filterValues$deliver = filterValues.deliveryTypes) === null || _filterValues$deliver === void 0 ? void 0 : _filterValues$deliver.length) > 0 || (filterValues === null || filterValues === void 0 || (_filterValues$driverI = filterValues.driverIds) === null || _filterValues$driverI === void 0 ? void 0 : _filterValues$driverI.length) > 0 || (filterValues === null || filterValues === void 0 || (_filterValues$paymeth = filterValues.paymethodIds) === null || _filterValues$paymeth === void 0 ? void 0 : _filterValues$paymeth.length) > 0 || (filterValues === null || filterValues === void 0 || (_filterValues$statuse = filterValues.statuses) === null || _filterValues$statuse === void 0 ? void 0 : _filterValues$statuse.length) > 0;
    }
    setFilterApplied(_filterApplied);
  }, [filterValues]);
  (0, _react.useEffect)(function () {
    if (!isNaN(pagination.total)) {
      setOrdersTotalAmount && setOrdersTotalAmount(pagination.total);
    }
  }, [pagination.total]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (ordersStatusGroup === groupStatus || isMessagesView) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !orderList.loading && (pagination === null || pagination === void 0 ? void 0 : pagination.total) === 0 ? /*#__PURE__*/_react.default.createElement(_styles2.WrapperNoneOrders, null, /*#__PURE__*/_react.default.createElement(_styles2.InnerNoneOrdersContainer, {
    small: orderListView === 'small'
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.noOrders,
    alt: "none"
  }), filterApplied ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, t('NOT_FOUND_FILTERED_ORDERS', 'No orders with the current filters applied.')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    outline: true,
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return setFilterModalOpen(true);
    }
  }, t('FILTERS', 'Filters'))) : /*#__PURE__*/_react.default.createElement("p", null, t('MOBILE_NO_ORDERS', 'No Orders yet.')))) : /*#__PURE__*/_react.default.createElement(_styles2.WrapperOrderListContent, {
    maxHeight: orderListView !== 'table',
    onDoubleClick: handleDobleClick
  }, orderListView === 'table' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, allowColumns && !(Object.keys(allowColumns).filter(function (col) {
    var _allowColumns$col, _allowColumns$col2;
    return ((_allowColumns$col = allowColumns[col]) === null || _allowColumns$col === void 0 ? void 0 : _allowColumns$col.visable) && ((_allowColumns$col2 = allowColumns[col]) === null || _allowColumns$col2 === void 0 ? void 0 : _allowColumns$col2.order) !== 0;
  }).length === 0) && /*#__PURE__*/_react.default.createElement(_styles2.ColumnPopoverContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    handleChangeAllowColumns: handleChangeAllowColumns,
    isOrder: true
  })), /*#__PURE__*/_react.default.createElement(_OrdersTable.OrdersTable, {
    hidePhoto: hidePhoto,
    setSelectedOrderIds: setSelectedOrderIds,
    isSelectedOrders: isSelectedOrders,
    orderList: orderList,
    pagination: pagination,
    selectedOrderIds: selectedOrderIds,
    orderDetailId: orderDetailId,
    loadMoreOrders: loadMoreOrders,
    getPageOrders: getPageOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail,
    currentTourStep: currentTourStep,
    isTourOpen: isTourOpen,
    handleOpenTour: handleOpenTour,
    setIsTourOpen: setIsTourOpen,
    slaSettingTime: slaSettingTime,
    groupStatus: groupStatus,
    allowColumns: allowColumns,
    setAllowColumns: setAllowColumns,
    handleDrop: handleDrop,
    saveUserSettings: saveUserSettings,
    isUseQuery: isUseQuery,
    franchisesList: props.franchisesList
  })) : /*#__PURE__*/_react.default.createElement(_OrdersCards.OrdersCards, {
    isMessagesView: isMessagesView,
    orderList: orderList,
    pagination: pagination,
    selectedOrderIds: selectedOrderIds,
    loadMoreOrders: loadMoreOrders,
    getPageOrders: getPageOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail,
    selectedOrderCard: selectedOrderCard,
    handleOrderCardClick: handleOrderCardClick,
    handleUpdateDriverLocation: handleUpdateDriverLocation,
    slaSettingTime: slaSettingTime,
    isDelivery: isDelivery,
    isUseQuery: isUseQuery,
    franchisesList: props.franchisesList
  })), handleSetOpenOrderDetail && orderDetailId && /*#__PURE__*/_react.default.createElement(_styles2.InfoMessage, null, /*#__PURE__*/_react.default.createElement(_AiOutlineInfoCircle.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DOBLE_CLICK_OPEN_ORDER_INFO', 'Doble click order to open details')))));
});