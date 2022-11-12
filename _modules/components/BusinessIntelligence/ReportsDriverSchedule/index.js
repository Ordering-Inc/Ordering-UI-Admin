"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsDriverSchedule = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _AnalyticsCalendar = require("../AnalyticsCalendar");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _ReportsDriverGroupFilter = require("../ReportsDriverGroupFilter");
var _ReportsDriverFilter = require("../ReportsDriverFilter");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
require("chartjs-adapter-moment");
var _moment = _interopRequireDefault(require("moment"));
var _reactChartjs = require("react-chartjs-2");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReportsDriverScheduleUI = function ReportsDriverScheduleUI(props) {
  var _reportData$content3, _reportData$content3$, _reportData$content4, _reportData$content4$;
  var filterList = props.filterList,
    handleChangeFilterList = props.handleChangeFilterList,
    reportData = props.reportData;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isDriverFilter = _useState4[0],
    setIsDriverFilter = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isDriverGroupFilter = _useState6[0],
    setIsDriverGroupFilter = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    chartData = _useState8[0],
    setChartData = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    availableDriverIds = _useState10[0],
    setAvailableDriverIds = _useState10[1];
  var barChartRef = (0, _react.useRef)(null);
  var generateData = function generateData(dataKey, status) {
    var _reportData$content;
    var _available = [];
    var _notAvailable = [];
    (reportData === null || reportData === void 0 ? void 0 : (_reportData$content = reportData.content) === null || _reportData$content === void 0 ? void 0 : _reportData$content.data) && reportData.content.data.forEach(function (data) {
      data.lines.forEach(function (line) {
        if (line.label_key === dataKey) {
          line.ranges.forEach(function (range) {
            if (range.value) {
              var from = getDiff(reportData.content.from, range.from);
              var to = getDiff(reportData.content.from, range.to);
              _available.push({
                y: data.metadata.name,
                x: [from, to]
              });
            } else {
              var _from = getDiff(reportData.content.from, range.from);
              var _to = getDiff(reportData.content.from, range.to);
              _notAvailable.push({
                y: data.metadata.name,
                x: [_from, _to]
              });
            }
          });
        }
      });
    });
    return status ? _available : _notAvailable;
  };
  var getDiff = function getDiff(start, end) {
    var from = (0, _moment.default)(start);
    var to = (0, _moment.default)(end);
    var duration = _moment.default.duration(from.diff(to));
    return Math.abs(duration.asSeconds());
  };
  var getDateFromDuration = function getDateFromDuration(start, duration) {
    return (0, _moment.default)(start).add(duration, 's').format('MM-DD HH:mm');
  };
  var handleChangeDate = function handleChangeDate(date1, date2) {
    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      from: date1,
      to: date2
    }));
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    if (reportData !== null && reportData !== void 0 && reportData.error) {
      setAlertState({
        open: true,
        content: reportData === null || reportData === void 0 ? void 0 : reportData.error
      });
    }
  }, [reportData === null || reportData === void 0 ? void 0 : reportData.error]);
  (0, _react.useEffect)(function () {
    var _reportData$content2, _reportData$content2$;
    if ((reportData === null || reportData === void 0 ? void 0 : (_reportData$content2 = reportData.content) === null || _reportData$content2 === void 0 ? void 0 : (_reportData$content2$ = _reportData$content2.data) === null || _reportData$content2$ === void 0 ? void 0 : _reportData$content2$.length) > 0) {
      var _data = {
        datasets: [{
          label: t('AVAILABLE', 'Available'),
          data: generateData('REPORT_HEADER_AVAILABLE', true),
          backgroundColor: '#2C7BE5',
          stack: 'Stack 0'
        }, {
          label: t('NOT_AVAILABLE', 'Not available'),
          data: generateData('REPORT_HEADER_AVAILABLE', false),
          backgroundColor: '#F0879A',
          stack: 'Stack 0'
        }, {
          label: t('BUSY', 'Busy'),
          data: generateData('REPORT_HEADER_BUSY', true),
          backgroundColor: '#52C9FD',
          stack: 'Stack 1'
        }, {
          label: t('NOT_BUSY', 'Not busy'),
          data: generateData('REPORT_HEADER_BUSY', false),
          backgroundColor: '#FFC700',
          stack: 'Stack 1'
        }]
      };
      setChartData(_data);
    }
  }, [reportData === null || reportData === void 0 ? void 0 : reportData.content]);
  var options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          title: function title(item) {
            return "".concat(item[0].label, " - ").concat(item[0].dataset.label);
          },
          label: function label(item) {
            return "".concat(getDateFromDuration(reportData === null || reportData === void 0 ? void 0 : reportData.content.from, item.raw.x[0]), " ~ ").concat(getDateFromDuration(reportData === null || reportData === void 0 ? void 0 : reportData.content.from, item.raw.x[1]));
          }
        }
      }
    },
    scales: {
      x: {
        stacked: false,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function callback(value, index, values) {
            return getDateFromDuration(reportData === null || reportData === void 0 ? void 0 : reportData.content.from, value);
          }
        }
      },
      y: {
        stacked: false
      }
    }
  };
  var downloadChart = function downloadChart() {
    var _barChartRef$current;
    if (!(barChartRef !== null && barChartRef !== void 0 && barChartRef.current)) return;
    var a = document.createElement('a');
    a.href = barChartRef === null || barChartRef === void 0 ? void 0 : (_barChartRef$current = barChartRef.current) === null || _barChartRef$current === void 0 ? void 0 : _barChartRef$current.toBase64Image();
    a.download = 'driver_schedule.png';
    // Trigger the download
    a.click();
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DriverScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ScheduleTitle, null, t('DRIVER_SCHEDULE', 'DRIVER SCHEDULE')), /*#__PURE__*/_react.default.createElement(_styles2.ButtonActionList, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandBusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsDriverGroupFilter(true);
    }
  }, t('DRIVER_GROUP', 'Driver group'), " (", filterList !== null && filterList !== void 0 && filterList.driver_groups_ids ? filterList === null || filterList === void 0 ? void 0 : filterList.driver_groups_ids.length : t('ALL', 'All'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsDriverFilter(true);
    }
  }, t('DRIVER', 'Driver'), " (", filterList !== null && filterList !== void 0 && filterList.drivers_ids ? filterList === null || filterList === void 0 ? void 0 : filterList.drivers_ids.length : t('ALL', 'All'), ")")), /*#__PURE__*/_react.default.createElement(_styles2.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, {
    handleChangeDate: handleChangeDate,
    defaultValue: filterList
  }))), /*#__PURE__*/_react.default.createElement(_styles2.DistancePerBrandWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ScheduleTitleBlock, {
    active: (reportData === null || reportData === void 0 ? void 0 : (_reportData$content3 = reportData.content) === null || _reportData$content3 === void 0 ? void 0 : (_reportData$content3$ = _reportData$content3.data) === null || _reportData$content3$ === void 0 ? void 0 : _reportData$content3$.length) > 0
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('DRIVER_SCHEDULE', 'DRIVER SCHEDULE')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, {
    onClick: function onClick() {
      return downloadChart();
    }
  })), reportData !== null && reportData !== void 0 && reportData.loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-12",
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 100
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.ChartWrapper, null, (reportData === null || reportData === void 0 ? void 0 : (_reportData$content4 = reportData.content) === null || _reportData$content4 === void 0 ? void 0 : (_reportData$content4$ = _reportData$content4.data) === null || _reportData$content4$ === void 0 ? void 0 : _reportData$content4$.length) > 0 && chartData ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: chartData,
    options: options,
    ref: barChartRef
  })) : /*#__PURE__*/_react.default.createElement(_styles2.EmptyContent, null, t('NO_DATA', 'No Data')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "50%",
    height: "80vh",
    padding: "30px",
    title: t('DRIVER', 'Driver'),
    open: isDriverFilter,
    onClose: function onClose() {
      return setIsDriverFilter(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ReportsDriverFilter.ReportsDriverFilter, _extends({}, props, {
    onClose: function onClose() {
      return setIsDriverFilter(false);
    },
    availableDriverIds: availableDriverIds
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "50%",
    height: "80vh",
    padding: "30px",
    title: t('DRIVER_GROUP', 'Driver group'),
    open: isDriverGroupFilter,
    onClose: function onClose() {
      return setIsDriverGroupFilter(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ReportsDriverGroupFilter.ReportsDriverGroupFilter, _extends({}, props, {
    onClose: function onClose() {
      return setIsDriverGroupFilter(false);
    },
    setAvailableDriverIds: setAvailableDriverIds
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('DRIVER_SCHEDULE', 'Driver schedule'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var ReportsDriverSchedule = function ReportsDriverSchedule(props) {
  var reportsDriverScheduleProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReportsDriverScheduleUI,
    endpoint: 'drivers_operation_events'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AdvancedReports, reportsDriverScheduleProps);
};
exports.ReportsDriverSchedule = ReportsDriverSchedule;