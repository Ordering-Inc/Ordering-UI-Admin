"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStatusTypeSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Select = require("../../styles/Select");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
var _MultiSelect = require("../../styles/MultiSelect");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var OrderStatusTypeSelector = exports.OrderStatusTypeSelector = function OrderStatusTypeSelector(props) {
  var _theme$images, _theme$images2, _theme$images3, _theme$images4;
  var defaultValue = props.defaultValue,
    deliveryType = props.deliveryType,
    mutiOrdersChange = props.mutiOrdersChange,
    orderId = props.orderId,
    type = props.type,
    orderControl = props.orderControl,
    noPadding = props.noPadding,
    noSelected = props.noSelected,
    isFilterView = props.isFilterView,
    filterValues = props.filterValues,
    handleUpdateOrderStatus = props.handleUpdateOrderStatus,
    handleChangeMultiOrdersStatus = props.handleChangeMultiOrdersStatus,
    handleChangeOrderStatus = props.handleChangeOrderStatus;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)('default'),
    _useState2 = _slicedToArray(_useState, 2),
    defaultOptionValue = _useState2[0],
    setDefaultOptionValue = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredOrderStatuses = _useState4[0],
    setFilteredOrderStatuses = _useState4[1];
  var placeholder = /*#__PURE__*/_react.default.createElement(_styles.PlaceholderTitle, null, t('SELECT_STATUS', 'Select Status'));
  var orderStatuses = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('CHANGE_STATUS', 'Change Status'))),
    disabled: true
  }, {
    value: 'pending',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.orderStatus) === null || _theme$images === void 0 ? void 0 : _theme$images.pending,
      alt: "pending"
    }), /*#__PURE__*/_react.default.createElement("p", null, t('PENDING', 'Pending'))),
    disabled: true
  }, {
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PENDING', 'Pending'))),
    color: 'primary'
  }, {
    value: 13,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PREORDER', 'Preorder'))),
    color: 'primary',
    disabled: true
  }, {
    value: 'inProgress',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.orderStatus) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.inProgress,
      alt: "progress"
    }), /*#__PURE__*/_react.default.createElement("p", null, t('IN_PROGRESS', 'In Progress'))),
    disabled: true
  }, {
    value: 7,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ACCEPTED_BY_BUSINESS', 'Accepted by Business'))),
    color: 'primary'
  }, {
    value: 4,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('READY_FOR_PICKUP', 'Ready for pickup'))),
    color: 'primary'
  }, {
    value: 8,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ACCEPTED_BY_DRIVER', 'Accepted by Driver'))),
    color: 'primary'
  }, {
    value: 3,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by Business'))),
    color: 'primary'
  }, {
    value: 9,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PICKUP_COMPLETED_BY_DRIVER', 'Pickup completed by driver'))),
    color: 'primary'
  }, {
    value: 14,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_NOT_READY', 'Order not ready'))),
    color: 'primary'
  }, {
    value: 18,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER_ALMOST_ARRIVED_TO_BUSINESS', 'Driver almost arrived to business'))),
    color: 'primary'
  }, {
    value: 19,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER_ALMOST_ARRIVED_TO_CUSTOMER', 'Driver almost arrived to customer'))),
    color: 'primary'
  }, {
    value: 20,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS', 'Customer almost arrived to business'))),
    color: 'primary'
  }, {
    value: 21,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOMER_ARRIVED_TO_BUSINESS', 'Customer arrived to business'))),
    color: 'primary'
  }, {
    value: null,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.orderStatus) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.completed,
      alt: "completed"
    }), /*#__PURE__*/_react.default.createElement("p", null, t('COMPLETED', 'Completed'))),
    disabled: true
  }, {
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('COMPLETED_BY_ADMIN', 'Completed by Admin'))),
    color: 'primary'
  }, {
    value: 11,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery Completed by Driver'))),
    color: 'primary'
  }, {
    value: 15,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PICKUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer'))),
    color: 'primary'
  }, {
    value: null,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 || (_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.orderStatus) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.cancelled,
      alt: "cancelled"
    }), /*#__PURE__*/_react.default.createElement("p", null, t('CACELLED', 'Cancelled'))),
    disabled: true
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('REJECT_BY_BUSINESS', 'Reject by Admin'))),
    color: 'primary'
  }, {
    value: 5,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('REJECT_BY_BUSINESS', 'Reject by Business'))),
    color: 'primary'
  }, {
    value: 6,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('REJECT_BY_DRIVER', 'Reject by Driver'))),
    color: 'primary'
  }, {
    value: 10,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PICKUP_FAILED_BY_DRIVER', 'Pickup Failed by Driver'))),
    color: 'primary'
  }, {
    value: 12,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by Driver'))),
    color: 'primary'
  }, {
    value: 16,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('CANCELLED_BY_CUSTOMER', 'Cancelled by customer'))),
    color: 'primary'
  }, {
    value: 17,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: noPadding
    }, /*#__PURE__*/_react.default.createElement("p", null, t('NOT_PICKED_BY_CUSTOMER', 'Not picked by customer'))),
    color: 'primary'
  }];
  var changeOrderStatus = function changeOrderStatus(orderStatus) {
    if (orderStatus !== 'default' && orderStatus !== defaultValue) {
      if (!mutiOrdersChange) {
        handleUpdateOrderStatus({
          id: orderId,
          newStatus: orderStatus
        });
      } else {
        handleChangeMultiOrdersStatus(orderStatus);
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (!isFilterView) {
      if (orderControl) {
        setFilteredOrderStatuses(orderStatuses);
      } else if (deliveryType === 1) {
        var _filteredOrderStatues = [];
        var extractOrderStatus = [];
        extractOrderStatus = orderStatuses.slice(0, 12);
        _filteredOrderStatues = _toConsumableArray(extractOrderStatus);
        extractOrderStatus = orderStatuses.slice(15, 18);
        _filteredOrderStatues = [].concat(_toConsumableArray(_filteredOrderStatues), _toConsumableArray(extractOrderStatus));
        extractOrderStatus = orderStatuses.slice(19, 26);
        _filteredOrderStatues = [].concat(_toConsumableArray(_filteredOrderStatues), _toConsumableArray(extractOrderStatus));
        setFilteredOrderStatuses(_filteredOrderStatues);
      } else {
        var _filteredOrderStatues2 = [];
        var _extractOrderStatus = [];
        _extractOrderStatus = orderStatuses.slice(0, 7);
        _filteredOrderStatues2 = _toConsumableArray(_extractOrderStatus);
        _extractOrderStatus = orderStatuses.slice(10, 11);
        _filteredOrderStatues2 = [].concat(_toConsumableArray(_filteredOrderStatues2), _toConsumableArray(_extractOrderStatus));
        _extractOrderStatus = orderStatuses.slice(13, 17);
        _filteredOrderStatues2 = [].concat(_toConsumableArray(_filteredOrderStatues2), _toConsumableArray(_extractOrderStatus));
        _extractOrderStatus = orderStatuses.slice(18, 22);
        _filteredOrderStatues2 = [].concat(_toConsumableArray(_filteredOrderStatues2), _toConsumableArray(_extractOrderStatus));
        _extractOrderStatus = orderStatuses.slice(25, 27);
        _filteredOrderStatues2 = [].concat(_toConsumableArray(_filteredOrderStatues2), _toConsumableArray(_extractOrderStatus));
        setFilteredOrderStatuses(_filteredOrderStatues2);
      }
    } else {
      var _filteredOrderStatues3 = [];
      var _extractOrderStatus2 = [];
      _extractOrderStatus2 = orderStatuses.slice(2, 4);
      _filteredOrderStatues3 = _toConsumableArray(_extractOrderStatus2);
      _extractOrderStatus2 = orderStatuses.slice(5, 15);
      _filteredOrderStatues3 = [].concat(_toConsumableArray(_filteredOrderStatues3), _toConsumableArray(_extractOrderStatus2));
      _extractOrderStatus2 = orderStatuses.slice(16, 19);
      _filteredOrderStatues3 = [].concat(_toConsumableArray(_filteredOrderStatues3), _toConsumableArray(_extractOrderStatus2));
      _extractOrderStatus2 = orderStatuses.slice(20, 27);
      _filteredOrderStatues3 = [].concat(_toConsumableArray(_filteredOrderStatues3), _toConsumableArray(_extractOrderStatus2));
      setFilteredOrderStatuses(_filteredOrderStatues3);
    }
  }, []);
  (0, _react.useEffect)(function () {
    setDefaultOptionValue(defaultValue);
  }, [defaultValue]);
  var filterChangeOrderStatus = function filterChangeOrderStatus(status) {
    handleChangeOrderStatus(status);
  };
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    defaultFilterValues = _useState6[0],
    setDefaultFilterValues = _useState6[1];
  (0, _react.useEffect)(function () {
    if (isFilterView) {
      var _defaultFilterValues = _toConsumableArray(filterValues.statuses);
      setDefaultFilterValues(_defaultFilterValues);
    }
  }, [filterValues]);
  if (isFilterView) {
    return /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
      optionInnerMaxHeight: "50vh",
      placeholder: placeholder,
      defaultValue: defaultFilterValues,
      options: filteredOrderStatuses,
      onChange: function onChange(orderStatus) {
        return filterChangeOrderStatus(orderStatus);
      }
    });
  } else {
    return /*#__PURE__*/_react.default.createElement(_Select.Select, {
      type: type,
      optionInnerMaxHeight: "50vh",
      noSelected: noSelected,
      defaultValue: defaultOptionValue,
      options: filteredOrderStatuses,
      onChange: function onChange(orderStatus) {
        return changeOrderStatus(orderStatus);
      },
      className: "orderStatus"
    });
  }
};