"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsOrdersStatus = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("./styles");

var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));

var _reactChartjs = require("react-chartjs-2");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AnalyticsOrdersStatus = function AnalyticsOrdersStatus(props) {
  var orderStatusList = props.orderStatusList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var chartRef = (0, _react.useRef)(null);
  var orderStatus = [{
    key: 0,
    value: t('PENDING', 'Pending')
  }, {
    key: 1,
    value: t('COMPLETED', 'Completed')
  }, {
    key: 2,
    value: t('REJECTED', 'Rejected')
  }, {
    key: 3,
    value: t('DRIVER_IN_BUSINESS', 'Driver in business')
  }, {
    key: 4,
    value: t('PREPARATION_COMPLETED', 'Preparation Completed')
  }, {
    key: 5,
    value: t('REJECTED_BY_BUSINESS', 'Rejected by business')
  }, {
    key: 6,
    value: t('REJECTED_BY_DRIVER', 'Rejected by Driver')
  }, {
    key: 7,
    value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business')
  }, {
    key: 8,
    value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver')
  }, {
    key: 9,
    value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver')
  }, {
    key: 10,
    value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver')
  }, {
    key: 11,
    value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
  }, {
    key: 12,
    value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver')
  }, {
    key: 13,
    value: t('PREORDER', 'PreOrder')
  }, {
    key: 14,
    value: t('ORDER_NOT_READY', 'Order not ready')
  }, {
    key: 15,
    value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Order picked up completed by customer')
  }, {
    key: 16,
    value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Order cancelled by customer')
  }, {
    key: 17,
    value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Order not picked up by customer')
  }, {
    key: 18,
    value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business')
  }, {
    key: 19,
    value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer')
  }, {
    key: 20,
    value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business')
  }, {
    key: 21,
    value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business')
  }];

  var generateLabels = function generateLabels() {
    var labels = [t('ALL', 'All')];

    var _iterator = _createForOfIteratorHelper(orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var label = _step.value;
        labels.push(orderStatus[label.status].value);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return labels;
  };

  var generateData = function generateData() {
    var todalValue = TotalOrders();
    var datasets = [todalValue];

    var _iterator2 = _createForOfIteratorHelper(orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _data = _step2.value;
        datasets.push(_data.orders);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return datasets;
  };

  var TotalOrders = function TotalOrders() {
    var value = 0;

    var _iterator3 = _createForOfIteratorHelper(orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _data2 = _step3.value;
        value = value + _data2.orders;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return value;
  };

  var downloadCSV = function downloadCSV() {
    var csv = "".concat(t('STATUS', 'Status'), ", ").concat(t('ORDERS', 'Orders'), "\n");

    var _iterator4 = _createForOfIteratorHelper(orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data),
        _step4;

    try {
      var _loop = function _loop() {
        var row = _step4.value;
        var selectedStatus = orderStatus.find(function (order) {
          return order.key === row.status;
        });
        csv += selectedStatus.value + ',';
        csv += "".concat(row.orders, ",");
        csv += '\n';
      };

      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    var downloadLink = document.createElement('a');
    var blob = new Blob(["\uFEFF", csv]);
    var url = URL.createObjectURL(blob);
    downloadLink.href = url;
    var fileSuffix = new Date().getTime();
    downloadLink.download = "orders_status_".concat(fileSuffix, ".csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  var data = {
    labels: generateLabels(),
    datasets: [{
      label: t('ORDERS', 'Orders'),
      data: generateData(),
      fill: true,
      borderColor: '#2C7BE5',
      backgroundColor: '#2C7BE5',
      borderWidth: 2,
      borderRadius: 50,
      borderSkipped: true,
      barThickness: 13,
      maxBarThickness: 25
    }]
  };
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        }
      },
      y: {
        grid: {
          drawBorder: false,
          display: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        },
        height: 10
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    pointRadius: 0
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.OrderStatusHeader, null, /*#__PURE__*/_react.default.createElement("p", null, t('ORDERS_STATUS', 'ORDERS STATUS')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: (orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    onClick: downloadCSV
  }))), orderStatusList !== null && orderStatusList !== void 0 && orderStatusList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  }) : (orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles.BarChartWrapper, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: data,
    options: options,
    ref: chartRef
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data')), /*#__PURE__*/_react.default.createElement(_styles.OrderStatusFooter, null, /*#__PURE__*/_react.default.createElement("h2", null, orderStatusList !== null && orderStatusList !== void 0 && orderStatusList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30
  }) : /*#__PURE__*/_react.default.createElement(TotalOrders, null)), orderStatusList !== null && orderStatusList !== void 0 && orderStatusList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }) : /*#__PURE__*/_react.default.createElement("p", null, t('ORDERS_TOTALS', 'Orders totals'))));
};

exports.AnalyticsOrdersStatus = AnalyticsOrdersStatus;