"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeReportsUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactChartjs = require("react-chartjs-2");

require("chartjs-adapter-moment");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _moment = _interopRequireDefault(require("moment"));

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _orderingComponentsAdmin = require("ordering-components-admin");

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

var HomeReportsUI = function HomeReportsUI(props) {
  var isShowVideo = props.isShowVideo,
      ordersList = props.ordersList,
      todaySalelsList = props.todaySalelsList,
      monthSalesList = props.monthSalesList,
      getCurrentDateRange = props.getCurrentDateRange;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      timeAxes = _useState2[0],
      setTimeAxes = _useState2[1];

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  var generateData = function generateData() {
    var values = [];
    timeAxes.forEach(function (axe) {
      var _monthSalesList$sales;

      var index = monthSalesList === null || monthSalesList === void 0 ? void 0 : (_monthSalesList$sales = monthSalesList.sales) === null || _monthSalesList$sales === void 0 ? void 0 : _monthSalesList$sales.findIndex(function (history) {
        return axe === (history === null || history === void 0 ? void 0 : history.time);
      });

      if (index !== -1) {
        var _monthSalesList$sales2, _monthSalesList$sales3;

        values.push({
          x: monthSalesList === null || monthSalesList === void 0 ? void 0 : (_monthSalesList$sales2 = monthSalesList.sales[index]) === null || _monthSalesList$sales2 === void 0 ? void 0 : _monthSalesList$sales2.time,
          y: monthSalesList === null || monthSalesList === void 0 ? void 0 : (_monthSalesList$sales3 = monthSalesList.sales[index]) === null || _monthSalesList$sales3 === void 0 ? void 0 : _monthSalesList$sales3.sales
        });
      } else {
        values.push({
          x: axe,
          y: 0
        });
      }
    });
    return values;
  };

  var updateTimeAxes = function updateTimeAxes() {
    var unitdate = getTimeAxes(getCurrentDateRange()).time.unit;
    var maxdate = (0, _moment.default)(getTimeAxes(getCurrentDateRange()).time.max).endOf(unitdate);
    var mindate = (0, _moment.default)(getTimeAxes(getCurrentDateRange()).time.min).startOf(unitdate);
    var curDate = mindate;
    var newTimeAxes = [];
    var adder = 'd';

    switch (unitdate) {
      case 'day':
        adder = 'd';
        break;

      case 'month':
        adder = 'M';
        break;

      case 'year':
        adder = 'y';
        break;

      case 'hour':
        adder = 'h';
        break;

      default:
        break;
    }

    do {
      newTimeAxes.push((0, _moment.default)(curDate._d.getTime()).format('YYYY-MM-DD HH:mm:ss'));
      curDate = curDate.clone().add(1, adder);
    } while (curDate <= maxdate);

    setTimeAxes(newTimeAxes);
  };

  var getTimeAxes = function getTimeAxes(lapse) {
    var xAxes = {
      type: 'time',
      grid: {
        display: false
      },
      time: {
        stepSize: 1,
        displayFormats: {
          hour: 'LT'
        }
      },
      ticks: {
        fontSize: 12,
        fontColor: '#CED4DA'
      }
    };
    xAxes.time.unit = 'day';
    xAxes.time.min = (0, _moment.default)().subtract(30, 'days').format('YYYY-MM-DD');
    xAxes.time.max = (0, _moment.default)().format('YYYY-MM-DD');
    return xAxes;
  };

  var defaultData = {
    datasets: [{
      data: generateData(),
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: '#2C7BE5',
      tension: 0.4,
      borderWidth: 3
    }]
  };
  var options = {
    scales: {
      x: getTimeAxes(),
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#CED4DA'
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    pointRadius: 0
  };

  var getTotalSales = function getTotalSales() {
    var data = 0;

    var _iterator = _createForOfIteratorHelper(monthSalesList === null || monthSalesList === void 0 ? void 0 : monthSalesList.sales),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sale = _step.value;
        data += sale.sales;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return parsePrice(data, {
      separator: '.'
    });
  };

  (0, _react.useEffect)(function () {
    updateTimeAxes();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.HomeReportsContainer, {
    isDirection: isShowVideo
  }, /*#__PURE__*/_react.default.createElement(_styles.HomeReportsHeader, null, /*#__PURE__*/_react.default.createElement("p", null, t('REPORTS', 'Reports')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "lightPrimary",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'business_analytics'
      });
    }
  }, t('SEE_MORE_REPORTS', 'See more reports'))), /*#__PURE__*/_react.default.createElement(_styles.ReportsContent, {
    isDirection: isShowVideo
  }, /*#__PURE__*/_react.default.createElement(_styles.OrdersAndSalesWrapper, {
    isDirection: isShowVideo
  }, /*#__PURE__*/_react.default.createElement(_styles.OrdersOrSalesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsContent, null, /*#__PURE__*/_react.default.createElement("p", null, t('TODAY_ORDERS', 'Today Orders')), ordersList !== null && ordersList !== void 0 && ordersList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 30
  }) : /*#__PURE__*/_react.default.createElement("h2", null, ordersList === null || ordersList === void 0 ? void 0 : ordersList.orders)), /*#__PURE__*/_react.default.createElement(_styles.BoxIconContainer, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Basket, null))), /*#__PURE__*/_react.default.createElement(_styles.OrdersOrSalesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsContent, null, /*#__PURE__*/_react.default.createElement("p", null, t('TODAY_SALES', 'Today Sales')), todaySalelsList !== null && todaySalelsList !== void 0 && todaySalelsList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 30
  }) : /*#__PURE__*/_react.default.createElement("h2", null, parsePrice(todaySalelsList === null || todaySalelsList === void 0 ? void 0 : todaySalelsList.sales, {
    separator: '.'
  }))), /*#__PURE__*/_react.default.createElement(_styles.BoxIconContainer, {
    isSales: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cash, null)))), /*#__PURE__*/_react.default.createElement(_styles.SalesChartWrapper, {
    isFullWidth: isShowVideo
  }, /*#__PURE__*/_react.default.createElement(_styles.ChartHeaderContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('THIS_MONTH_SALES', 'This month sales')), monthSalesList !== null && monthSalesList !== void 0 && monthSalesList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 30
  }) : /*#__PURE__*/_react.default.createElement("h3", null, getTotalSales())), monthSalesList !== null && monthSalesList !== void 0 && monthSalesList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  }) : /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
    data: defaultData,
    options: options
  }))));
};

exports.HomeReportsUI = HomeReportsUI;