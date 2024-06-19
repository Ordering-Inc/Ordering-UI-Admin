"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var _AnalyticsFilterTimeZone = require("../AnalyticsFilterTimeZone");
var _styles2 = require("./styles");
require("chartjs-adapter-moment");
var _moment = _interopRequireDefault(require("moment"));
var _reactChartjs = require("react-chartjs-2");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var ReportsDriverScheduleUI = function ReportsDriverScheduleUI(props) {
  var _reportData$content3, _reportData$content4;
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
    (reportData === null || reportData === void 0 || (_reportData$content = reportData.content) === null || _reportData$content === void 0 ? void 0 : _reportData$content.data) && reportData.content.data.forEach(function (data) {
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
    var _reportData$content2;
    if ((reportData === null || reportData === void 0 || (_reportData$content2 = reportData.content) === null || _reportData$content2 === void 0 || (_reportData$content2 = _reportData$content2.data) === null || _reportData$content2 === void 0 ? void 0 : _reportData$content2.length) > 0) {
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
    a.href = barChartRef === null || barChartRef === void 0 || (_barChartRef$current = barChartRef.current) === null || _barChartRef$current === void 0 ? void 0 : _barChartRef$current.toBase64Image();
    a.download = 'driver_schedule.png';
    // Trigger the download
    a.click();
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DriverScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ScheduleTitle, null, t('DRIVER_SCHEDULE', 'Driver schedule')), /*#__PURE__*/_react.default.createElement(_styles2.ButtonActionList, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandBusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsDriverGroupFilter(true);
    }
  }, t('DRIVER_GROUP', 'Driver group'), " (", filterList !== null && filterList !== void 0 && filterList.driver_groups_ids ? filterList === null || filterList === void 0 ? void 0 : filterList.driver_groups_ids.length : t('ALL', 'All'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsDriverFilter(true);
    }
  }, t('DRIVER', 'Driver'), " (", filterList !== null && filterList !== void 0 && filterList.drivers_ids ? filterList === null || filterList === void 0 ? void 0 : filterList.drivers_ids.length : t('ALL', 'All'), ")")), /*#__PURE__*/_react.default.createElement(_styles2.TimeZoneAndCalendar, null, /*#__PURE__*/_react.default.createElement(_styles2.AnalyticsTimeZoneWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsFilterTimeZone.AnalyticsFilterTimeZone, props)), /*#__PURE__*/_react.default.createElement(_styles2.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, {
    handleChangeDate: handleChangeDate,
    defaultValue: filterList,
    isSingleDate: true
  })))), /*#__PURE__*/_react.default.createElement(_styles2.DistancePerBrandWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ScheduleTitleBlock, {
    active: (reportData === null || reportData === void 0 || (_reportData$content3 = reportData.content) === null || _reportData$content3 === void 0 || (_reportData$content3 = _reportData$content3.data) === null || _reportData$content3 === void 0 ? void 0 : _reportData$content3.length) > 0
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
  })) : /*#__PURE__*/_react.default.createElement(_styles2.ChartWrapper, null, (reportData === null || reportData === void 0 || (_reportData$content4 = reportData.content) === null || _reportData$content4 === void 0 || (_reportData$content4 = _reportData$content4.data) === null || _reportData$content4 === void 0 ? void 0 : _reportData$content4.length) > 0 && chartData ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
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
var ReportsDriverSchedule = exports.ReportsDriverSchedule = function ReportsDriverSchedule(props) {
  var reportsDriverScheduleProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReportsDriverScheduleUI,
    endpoint: 'drivers_operation_events'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AdvancedReports, reportsDriverScheduleProps);
};