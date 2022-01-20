"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsAvailableTimes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("./styles");

var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));

var _BsArrowsAngleExpand = _interopRequireDefault(require("@meronex/icons/bs/BsArrowsAngleExpand"));

var _reactChartjs = require("react-chartjs-2");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _moment = _interopRequireDefault(require("moment"));

var _Modal = require("../Modal");

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

var AnalyticsAvailableTimes = function AnalyticsAvailableTimes(props) {
  var _availableTimesList$d13, _availableTimesList$d14, _availableTimesList$d15, _availableTimesList$d16, _availableTimesList$d17, _availableTimesList$d18, _availableTimesList$d19, _availableTimesList$d20;

  var filterList = props.filterList,
      availableTimesList = props.availableTimesList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseNumber = _useUtils2[0].parseNumber;

  var chartRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShowPreview = _useState2[0],
      setIsShowPreview = _useState2[1];

  var generateLabels = function generateLabels() {
    var _availableTimesList$d;

    var labels = [];

    if (availableTimesList !== null && availableTimesList !== void 0 && (_availableTimesList$d = availableTimesList.data) !== null && _availableTimesList$d !== void 0 && _availableTimesList$d.available) {
      var _availableTimesList$d2;

      var _iterator = _createForOfIteratorHelper(availableTimesList === null || availableTimesList === void 0 ? void 0 : (_availableTimesList$d2 = availableTimesList.data) === null || _availableTimesList$d2 === void 0 ? void 0 : _availableTimesList$d2.available),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var label = _step.value;
          var timeConvert = getTimeFormat(label.at, filterList === null || filterList === void 0 ? void 0 : filterList.lapse);
          labels.push(timeConvert);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return labels;
  };

  var getTimeFormat = function getTimeFormat(date, lapse) {
    var newDate;

    switch (lapse) {
      case 'today':
      case 'yesterday':
        newDate = (0, _moment.default)(date).format('HH:00');
        break;

      case 'last_7_days':
      case 'last_30_days':
        newDate = (0, _moment.default)(date).format('MMM DD');
        break;

      default:
        {
          var _lapse = lapse.split(',');

          var from = (0, _moment.default)(_lapse[0] + ' 00:00:00');
          var to = (0, _moment.default)(_lapse[1] + ' 24:00:00');

          var duration = _moment.default.duration(from.diff(to));

          var hours = Math.abs(duration.asHours());
          var days = Math.abs(duration.asDays());
          var months = Math.abs(duration.asMonths());

          if (hours <= 24) {
            newDate = (0, _moment.default)(date).format('HH:MM:SS');
          } else if (days <= 30) {
            newDate = (0, _moment.default)(date).format('MMM DD');
          } else if (months <= 12) {
            newDate = (0, _moment.default)(date).format('YYYY-MM');
          } else {
            newDate = (0, _moment.default)(date).format('YYYY-MM');
          }

          break;
        }
    }

    return newDate;
  };

  var generateAvailableData = function generateAvailableData() {
    var _availableTimesList$d3;

    var datasets = [];

    if (availableTimesList !== null && availableTimesList !== void 0 && (_availableTimesList$d3 = availableTimesList.data) !== null && _availableTimesList$d3 !== void 0 && _availableTimesList$d3.available) {
      var _availableTimesList$d4;

      var _iterator2 = _createForOfIteratorHelper(availableTimesList === null || availableTimesList === void 0 ? void 0 : (_availableTimesList$d4 = availableTimesList.data) === null || _availableTimesList$d4 === void 0 ? void 0 : _availableTimesList$d4.available),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _data = _step2.value;

          var _time = parseNumber(_data.time / 3600, {
            separator: '.'
          });

          datasets.push(_time);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    return datasets;
  };

  var generateNotAvailableData = function generateNotAvailableData() {
    var _availableTimesList$d5;

    var datasets = [];

    if (availableTimesList !== null && availableTimesList !== void 0 && (_availableTimesList$d5 = availableTimesList.data) !== null && _availableTimesList$d5 !== void 0 && _availableTimesList$d5.not_available) {
      var _availableTimesList$d6;

      var _iterator3 = _createForOfIteratorHelper(availableTimesList === null || availableTimesList === void 0 ? void 0 : (_availableTimesList$d6 = availableTimesList.data) === null || _availableTimesList$d6 === void 0 ? void 0 : _availableTimesList$d6.not_available),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _data2 = _step3.value;

          var _time = parseNumber(_data2.time / 3600, {
            separator: '.'
          });

          datasets.push(_time);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    return datasets;
  };

  var downloadCSV = function downloadCSV() {
    var _availableTimesList$d7;

    var csv = "".concat(t('TIME', 'Time'), ", ").concat(t('AVAILABLE', 'Available'), "(h), ").concat(t('NOT_AVAILABLE', 'Not Available'), "(h)\n");

    var _iterator4 = _createForOfIteratorHelper(availableTimesList === null || availableTimesList === void 0 ? void 0 : (_availableTimesList$d7 = availableTimesList.data) === null || _availableTimesList$d7 === void 0 ? void 0 : _availableTimesList$d7.available),
        _step4;

    try {
      var _loop = function _loop() {
        var _availableTimesList$d8;

        var row = _step4.value;
        csv += "".concat(row.at, ",");
        csv += "".concat(parseNumber(row.time / 3600, {
          separator: '.'
        }), ",");
        var notAvailable = availableTimesList === null || availableTimesList === void 0 ? void 0 : (_availableTimesList$d8 = availableTimesList.data) === null || _availableTimesList$d8 === void 0 ? void 0 : _availableTimesList$d8.not_available.find(function (item) {
          return item.at === row.at;
        });
        csv += notAvailable ? "".concat(parseNumber(notAvailable.time / 3600, {
          separator: '.'
        }), ",") : 0;
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
    downloadLink.download = "available_times_".concat(fileSuffix, ".csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  var data = {
    labels: generateLabels(),
    datasets: [{
      label: t('AVAILABLE', 'Available'),
      data: generateAvailableData(),
      fill: true,
      borderColor: '#2C7BE5',
      backgroundColor: '#2C7BE5',
      borderWidth: 2,
      borderRadius: {
        topRight: 7.6,
        topLeft: 7.6
      }
    }, {
      label: t('NOT_AVAILABLE', 'Not Available'),
      data: generateNotAvailableData(),
      fill: true,
      borderColor: '#E9F2FE',
      backgroundColor: '#E9F2FE',
      borderWidth: 2,
      borderRadius: {
        topRight: 7.6,
        topLeft: 7.6
      },
      borderSkipped: true
    }]
  };
  var options = {
    responsive: true,
    maintainAspectRatio: false,
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
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        borderRadius: 7.6
      }
    },
    pointRadius: 0
  };

  var previewChart = function previewChart() {
    var _availableTimesList$d9, _availableTimesList$d10, _availableTimesList$d11, _availableTimesList$d12;

    if ((availableTimesList === null || availableTimesList === void 0 ? void 0 : (_availableTimesList$d9 = availableTimesList.data) === null || _availableTimesList$d9 === void 0 ? void 0 : (_availableTimesList$d10 = _availableTimesList$d9.available) === null || _availableTimesList$d10 === void 0 ? void 0 : _availableTimesList$d10.length) > 0 || (availableTimesList === null || availableTimesList === void 0 ? void 0 : (_availableTimesList$d11 = availableTimesList.data) === null || _availableTimesList$d11 === void 0 ? void 0 : (_availableTimesList$d12 = _availableTimesList$d11.not_available) === null || _availableTimesList$d12 === void 0 ? void 0 : _availableTimesList$d12.length) > 0) setIsShowPreview(true);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ChartHeaderContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('AVAILABLE_TIMES', 'Available Times')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: !((availableTimesList === null || availableTimesList === void 0 ? void 0 : (_availableTimesList$d13 = availableTimesList.data) === null || _availableTimesList$d13 === void 0 ? void 0 : (_availableTimesList$d14 = _availableTimesList$d13.available) === null || _availableTimesList$d14 === void 0 ? void 0 : _availableTimesList$d14.length) > 0 || (availableTimesList === null || availableTimesList === void 0 ? void 0 : (_availableTimesList$d15 = availableTimesList.data) === null || _availableTimesList$d15 === void 0 ? void 0 : (_availableTimesList$d16 = _availableTimesList$d15.not_available) === null || _availableTimesList$d16 === void 0 ? void 0 : _availableTimesList$d16.length) > 0)
  }, /*#__PURE__*/_react.default.createElement(_BsArrowsAngleExpand.default, {
    onClick: previewChart
  }), /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    className: "download-view",
    onClick: downloadCSV
  }))), availableTimesList !== null && availableTimesList !== void 0 && availableTimesList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  }) : (availableTimesList === null || availableTimesList === void 0 ? void 0 : (_availableTimesList$d17 = availableTimesList.data) === null || _availableTimesList$d17 === void 0 ? void 0 : (_availableTimesList$d18 = _availableTimesList$d17.available) === null || _availableTimesList$d18 === void 0 ? void 0 : _availableTimesList$d18.length) > 0 || (availableTimesList === null || availableTimesList === void 0 ? void 0 : (_availableTimesList$d19 = availableTimesList.data) === null || _availableTimesList$d19 === void 0 ? void 0 : (_availableTimesList$d20 = _availableTimesList$d19.not_available) === null || _availableTimesList$d20 === void 0 ? void 0 : _availableTimesList$d20.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles.BarChartWrapper, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: data,
    options: options,
    ref: chartRef
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data'))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    height: "80vh",
    padding: "30px",
    title: t('AVAILABLE_TIMES', 'Available Times'),
    open: isShowPreview,
    onClose: function onClose() {
      return setIsShowPreview(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BarChartWrapper, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: data,
    options: options
  }))));
};

exports.AnalyticsAvailableTimes = AnalyticsAvailableTimes;