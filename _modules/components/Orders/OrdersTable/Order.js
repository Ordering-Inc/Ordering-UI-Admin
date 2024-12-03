"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Order = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderPropsAreEqual = function OrderPropsAreEqual(prevProps, nextProps) {
  return JSON.stringify(prevProps.order) === JSON.stringify(nextProps.order) && JSON.stringify(prevProps.allowColumns) === JSON.stringify(nextProps.allowColumns) && prevProps.isEnabledRowInColor === nextProps.isEnabledRowInColor && JSON.stringify(prevProps.selectedOrderIds) === JSON.stringify(nextProps.selectedOrderIds) && JSON.stringify(prevProps.isSelectedOrders) === JSON.stringify(nextProps.isSelectedOrders) && prevProps.showExternalId === nextProps.showExternalId && prevProps.groupStatus === nextProps.groupStatus;
};
var Order = exports.Order = /*#__PURE__*/_react.default.memo(function (props) {
  var orderDetailId = props.orderDetailId,
    order = props.order,
    i = props.i,
    isEnabledRowInColor = props.isEnabledRowInColor,
    handleClickOrder = props.handleClickOrder,
    allowColumns = props.allowColumns,
    isSelectedOrders = props.isSelectedOrders,
    selectedOrderIds = props.selectedOrderIds,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    showExternalId = props.showExternalId,
    getOrderStatus = props.getOrderStatus,
    hidePhoto = props.hidePhoto,
    getLogisticTag = props.getLogisticTag,
    getPriorityTag = props.getPriorityTag,
    groupStatus = props.groupStatus,
    displayDelayedTime = props.displayDelayedTime,
    getCurrenySymbol = props.getCurrenySymbol,
    franchiseImages = props.franchiseImages;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    optimizeImage = _useUtils2$.optimizeImage,
    getTimeAgo = _useUtils2$.getTimeAgo,
    parsePrice = _useUtils2$.parsePrice;
  var cateringTypes = [7, 8];
  return /*#__PURE__*/_react.default.createElement("tr", {
    key: i,
    className: parseInt(orderDetailId) === order.id ? 'active' : '',
    "data-tour": i === 0 ? 'tour_start' : '',
    "data-status": isEnabledRowInColor && (order === null || order === void 0 ? void 0 : order.time_status),
    onClick: function onClick(e) {
      return handleClickOrder(order, e);
    }
  }, Object.keys(allowColumns).filter(function (col) {
    var _allowColumns$col;
    return (_allowColumns$col = allowColumns[col]) === null || _allowColumns$col === void 0 ? void 0 : _allowColumns$col.visable;
  }).sort(function (col1, col2) {
    var _allowColumns$col2, _allowColumns$col3;
    return ((_allowColumns$col2 = allowColumns[col1]) === null || _allowColumns$col2 === void 0 ? void 0 : _allowColumns$col2.order) - ((_allowColumns$col3 = allowColumns[col2]) === null || _allowColumns$col3 === void 0 ? void 0 : _allowColumns$col3.order);
  }).map(function (column, index) {
    if (column === 'slaBar') {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: "slaBar".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, {
        timeState: order === null || order === void 0 ? void 0 : order.time_status
      }));
    }
    if (column === 'externalId' && !isSelectedOrders) {
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "externalId",
        key: "externalId".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, order === null || order === void 0 ? void 0 : order.external_id)));
    }
    if (showExternalId ? column === 'dateTime' : column === 'orderNumber') {
      var _allowColumns$orderNu, _allowColumns$dateTim, _allowColumns$orderNu2, _allowColumns$dateTim2;
      return /*#__PURE__*/_react.default.createElement("td", {
        className: !(allowColumns !== null && allowColumns !== void 0 && (_allowColumns$orderNu = allowColumns.orderNumber) !== null && _allowColumns$orderNu !== void 0 && _allowColumns$orderNu.visable || allowColumns !== null && allowColumns !== void 0 && (_allowColumns$dateTim = allowColumns.dateTime) !== null && _allowColumns$dateTim !== void 0 && _allowColumns$dateTim.visable) ? 'small' : '',
        key: "orderNumber".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.OrderNumberContainer, null, !isSelectedOrders && /*#__PURE__*/_react.default.createElement(_styles.CheckBox, {
        isChecked: selectedOrderIds.includes(order === null || order === void 0 ? void 0 : order.id),
        onClick: function onClick() {
          return handleSelectedOrderIds(order.id);
        },
        className: "orderCheckBox"
      }, selectedOrderIds.includes(order === null || order === void 0 ? void 0 : order.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, (allowColumns === null || allowColumns === void 0 || (_allowColumns$orderNu2 = allowColumns.orderNumber) === null || _allowColumns$orderNu2 === void 0 ? void 0 : _allowColumns$orderNu2.visable) && !showExternalId && /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, t('INVOICE_ORDER_NO', 'Order No.'), " ", order === null || order === void 0 ? void 0 : order.id), (allowColumns === null || allowColumns === void 0 || (_allowColumns$dateTim2 = allowColumns.dateTime) === null || _allowColumns$dateTim2 === void 0 ? void 0 : _allowColumns$dateTim2.visable) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cateringTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) && /*#__PURE__*/_react.default.createElement("p", {
        className: "date"
      }, "".concat(t('CREATED_AT', 'Created at'), ": ").concat(parseDate(order === null || order === void 0 ? void 0 : order.created_at))), /*#__PURE__*/_react.default.createElement("p", {
        className: "date"
      }, "".concat(cateringTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) ? "".concat(t('PLACED_TO', 'Placed to'), ":") : '', " ").concat(order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
        utc: false
      })))))));
    }
    if (column === 'status' && !isSelectedOrders) {
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "statusInfo",
        key: "statusInfo".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, getOrderStatus(order.status))));
    }
    if (column === 'agent') {
      var _order$agent, _order$agent2;
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "statusInfo",
        key: "agentInfo".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, order === null || order === void 0 || (_order$agent = order.agent) === null || _order$agent === void 0 ? void 0 : _order$agent.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$agent2 = order.agent) === null || _order$agent2 === void 0 ? void 0 : _order$agent2.email))));
    }
    if (column === 'cartGroupId') {
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "orderGroupId",
        key: "cart_group_id".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, (order === null || order === void 0 ? void 0 : order.cart_group_id) && /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, t('No', 'No'), ". ", order === null || order === void 0 ? void 0 : order.cart_group_id)));
    }
    if (column === 'driverGroupId') {
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "orderGroupId",
        key: "cart_group_id".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, (order === null || order === void 0 ? void 0 : order.driver_group_id) && /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, t('No', 'No'), ". ", order === null || order === void 0 ? void 0 : order.driver_group_id)));
    }
    if (column === 'business') {
      var _order$business, _order$business2, _theme$images, _order$business3, _order$business4;
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "businessInfo",
        key: "businessInfo".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, !hidePhoto && /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement("img", {
        src: optimizeImage(franchiseImages[order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.franchise_id] || ((_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_50,c_limit'),
        loading: "lazy",
        alt: ""
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, order === null || order === void 0 || (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business4 = order.business) === null || _order$business4 === void 0 || (_order$business4 = _order$business4.city) === null || _order$business4 === void 0 ? void 0 : _order$business4.name))));
    }
    if (column === 'customer') {
      var _order$customer, _order$customer2, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9;
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "customerInfo",
        key: "customerInfo".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, !hidePhoto && /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, order !== null && order !== void 0 && (_order$customer = order.customer) !== null && _order$customer !== void 0 && _order$customer.photo ? /*#__PURE__*/_react.default.createElement("img", {
        src: optimizeImage(order === null || order === void 0 || (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo, 'h_50,c_limit'),
        loading: "lazy",
        alt: ""
      }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null), /*#__PURE__*/_react.default.createElement(_styles.OrdersCountWrapper, {
        isNew: (order === null || order === void 0 || (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.orders_count) === 0
      }, (order === null || order === void 0 || (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.orders_count) || t('NEW', 'New'))), /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, !(order !== null && order !== void 0 && (_order$customer5 = order.customer) !== null && _order$customer5 !== void 0 && _order$customer5.email) && !(order !== null && order !== void 0 && (_order$customer6 = order.customer) !== null && _order$customer6 !== void 0 && _order$customer6.cellphone) && !(order !== null && order !== void 0 && (_order$customer7 = order.customer) !== null && _order$customer7 !== void 0 && _order$customer7.name) ? t('GUEST_USER', 'Guest user') : order === null || order === void 0 || (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.cellphone))));
    }
    if (column === 'driver' && !isSelectedOrders) {
      var _order$driver, _order$driver2, _order$driver3, _order$driver4;
      return /*#__PURE__*/_react.default.createElement("td", {
        key: "driver".concat(i, "-").concat(index)
      }, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, !hidePhoto && /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, order !== null && order !== void 0 && (_order$driver = order.driver) !== null && _order$driver !== void 0 && _order$driver.photo ? /*#__PURE__*/_react.default.createElement("img", {
        src: optimizeImage(order === null || order === void 0 || (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo, 'h_50,c_limit'),
        loading: "lazy",
        alt: ""
      }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, order !== null && order !== void 0 && order.driver ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, order === null || order === void 0 || (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.cellphone)) : /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, t('NO_DRIVER', 'No Driver')))));
    }
    if (column === 'advanced' && !isSelectedOrders) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: "advanced".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement("td", {
        className: "logistic"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, t('LOGISTIC', 'Logistic')), /*#__PURE__*/_react.default.createElement("p", null, getLogisticTag(order === null || order === void 0 ? void 0 : order.logistic_status), /*#__PURE__*/_react.default.createElement(_styles.LogisticStatusDot, {
        status: order === null || order === void 0 ? void 0 : order.logistic_status
      })))), /*#__PURE__*/_react.default.createElement("td", {
        className: "attempts"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, t('ATTEMPTS', 'Attempts')), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : order.logistic_attemps))), /*#__PURE__*/_react.default.createElement("td", {
        className: "priority"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement("p", null, getPriorityTag(order === null || order === void 0 ? void 0 : order.priority), /*#__PURE__*/_react.default.createElement(_styles.PriorityDot, {
        priority: order === null || order === void 0 ? void 0 : order.priority
      })))));
    }
    if (column === 'timer' && (groupStatus === 'pending' || groupStatus === 'inProgress')) {
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "timer",
        key: "timer".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.Timer, null, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, t('TIMER', 'Timer')), /*#__PURE__*/_react.default.createElement("p", {
        className: order === null || order === void 0 ? void 0 : order.time_status
      }, displayDelayedTime(order))));
    }
    if (column === 'eta') {
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "eta",
        key: "eta".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.EtaInfo, null, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, '')));
    }
    if (column === 'channel') {
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "channelInfo",
        key: "channelInfo".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.ChannelInfo, null, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, order === null || order === void 0 ? void 0 : order.app_id)));
    }
    if (column === 'pod') {
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "podInfo",
        key: "podInfo".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement(_styles.PodInfo, null, /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, order === null || order === void 0 ? void 0 : order.codigoPod)));
    }
    if (column === 'total') {
      var _allowColumns$total, _order$summary;
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "orderPrice",
        key: "total".concat(i, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, (allowColumns === null || allowColumns === void 0 || (_allowColumns$total = allowColumns.total) === null || _allowColumns$total === void 0 ? void 0 : _allowColumns$total.visable) && /*#__PURE__*/_react.default.createElement("p", {
        className: "bold"
      }, parsePrice(order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total, {
        currency: getCurrenySymbol(order === null || order === void 0 ? void 0 : order.currency)
      })), !((order === null || order === void 0 ? void 0 : order.status) === 1 || (order === null || order === void 0 ? void 0 : order.status) === 11 || (order === null || order === void 0 ? void 0 : order.status) === 2 || (order === null || order === void 0 ? void 0 : order.status) === 5 || (order === null || order === void 0 ? void 0 : order.status) === 6 || (order === null || order === void 0 ? void 0 : order.status) === 10 || order.status === 12) && /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
        utc: false
      }))));
    }
  }));
}, OrderPropsAreEqual);