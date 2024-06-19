"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessLogsUI = exports.BusinessLogs = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles = require("./styles");
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessLogsUI = exports.BusinessLogsUI = function BusinessLogsUI(props) {
  var _configs$general_hour, _logsList$logs;
  var logsList = props.logsList,
    paginationProps = props.paginationProps,
    getBusinessLogs = props.getBusinessLogs,
    actionDisabled = props.actionDisabled;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _React$useState = _react.default.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = _react.default.useState({
      newSchedule: [],
      oldSchedule: []
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    schedules = _React$useState4[0],
    setSchedules = _React$useState4[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var formatTime = configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.value;
  var handleChangePage = function handleChangePage(page) {
    getBusinessLogs(page, 10);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    getBusinessLogs(expectedPage, pageSize);
  };
  var getValidLogData = function getValidLogData(data) {
    return _typeof(data) === 'object' ? Object.values(data) : typeof data === 'string' ? JSON.parse(data) : data;
  };
  var handleSchedules = function handleSchedules(_schedules) {
    setSchedules({
      newSchedule: typeof (_schedules === null || _schedules === void 0 ? void 0 : _schedules.new) === 'string' ? JSON.parse(_schedules === null || _schedules === void 0 ? void 0 : _schedules.new) : _schedules === null || _schedules === void 0 ? void 0 : _schedules.new,
      oldSchedule: typeof (_schedules === null || _schedules === void 0 ? void 0 : _schedules.old) === 'string' ? JSON.parse(_schedules === null || _schedules === void 0 ? void 0 : _schedules.old) : _schedules === null || _schedules === void 0 ? void 0 : _schedules.old
    });
  };
  var scheduleModalData = function scheduleModalData(_schedules) {
    setOpen(true);
    handleSchedules(_schedules);
  };
  (0, _react.useEffect)(function () {
    if (logsList.loading || logsList.logs.length > 0 || paginationProps.totalPages <= 1 || logsList.error) return;
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage);
    } else {
      handleChangePage(paginationProps.currentPage - 1);
    }
  }, [logsList.logs, paginationProps]);
  var daysOptions = [t('DAY7', 'Sunday'), t('DAY1', 'Monday'), t('DAY2', 'Tuesday'), t('DAY3', 'Wednesday'), t('DAY4', 'Thursday'), t('DAY5', 'Friday'), t('DAY6', 'Saturday')];
  var checkTime = function checkTime(val) {
    return val < 10 ? "0".concat(val) : val;
  };
  var timeFormated = function timeFormated(time) {
    return (0, _moment.default)("1900-01-01 ".concat(checkTime(time.hour), ":").concat(checkTime(time.minute))).format(formatTime);
  };
  var getSchedule = function getSchedule(_schedules) {
    return !(_schedules !== null && _schedules !== void 0 && _schedules.length) && (_schedules === null || _schedules === void 0 ? void 0 : _schedules.length) < 1 ? /*#__PURE__*/_react.default.createElement("p", null, t('NONE', 'None')) : _schedules === null || _schedules === void 0 ? void 0 : _schedules.map(function (schedule, i) {
      var _schedule$lapses;
      return /*#__PURE__*/_react.default.createElement(_styles.ScheduleDay, {
        key: i
      }, /*#__PURE__*/_react.default.createElement("span", null, daysOptions[i]), /*#__PURE__*/_react.default.createElement(_styles.ScheduleLapses, null, (schedule === null || schedule === void 0 ? void 0 : schedule.enabled) && (schedule === null || schedule === void 0 || (_schedule$lapses = schedule.lapses) === null || _schedule$lapses === void 0 ? void 0 : _schedule$lapses.map(function (item, i) {
        return /*#__PURE__*/_react.default.createElement("p", {
          key: i
        }, "".concat(timeFormated(item === null || item === void 0 ? void 0 : item.open), " - ").concat(timeFormated(item === null || item === void 0 ? void 0 : item.close)));
      })), !(schedule !== null && schedule !== void 0 && schedule.enabled) && /*#__PURE__*/_react.default.createElement("p", null, t('UNAVAILABLE', 'Unavailable'))));
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogsContainer, {
    disabled: actionDisabled
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('LOGS', 'Logs')), /*#__PURE__*/_react.default.createElement(_styles.TableWrapper, null, logsList.loading || logsList.logs.length > 0 ? /*#__PURE__*/_react.default.createElement(_styles.Table, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('CONTROL_PANEL_USERS', 'Users')), /*#__PURE__*/_react.default.createElement("th", null, t('EVENTS_TYPE', 'Events type')), /*#__PURE__*/_react.default.createElement("th", null, t('DETAILS', 'Details')), /*#__PURE__*/_react.default.createElement("th", null, t('NEW', 'New')), /*#__PURE__*/_react.default.createElement("th", null, t('OLD', 'Old')), /*#__PURE__*/_react.default.createElement("th", null, t('EXPORT_DATE', 'Date')), /*#__PURE__*/_react.default.createElement("th", null, t('USER_AGENT', 'User agent')))), logsList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.DataListTable, null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.DateTimeWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null))));
  }) : !logsList.error && ((_logsList$logs = logsList.logs) === null || _logsList$logs === void 0 ? void 0 : _logsList$logs.map(function (log) {
    var _log$author, _log$user, _log$author2, _log$user2, _log$author3, _log$user3;
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: log.id
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement("p", null, (log === null || log === void 0 || (_log$author = log.author) === null || _log$author === void 0 ? void 0 : _log$author.name) || (log === null || log === void 0 || (_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.name), " ", (log === null || log === void 0 || (_log$author2 = log.author) === null || _log$author2 === void 0 ? void 0 : _log$author2.lastname) || (log === null || log === void 0 || (_log$user2 = log.user) === null || _log$user2 === void 0 ? void 0 : _log$user2.lastname)), /*#__PURE__*/_react.default.createElement("p", null, (log === null || log === void 0 || (_log$author3 = log.author) === null || _log$author3 === void 0 ? void 0 : _log$author3.email) || (log === null || log === void 0 || (_log$user3 = log.user) === null || _log$user3 === void 0 ? void 0 : _log$user3.email)))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.EventTypeContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t(((log === null || log === void 0 ? void 0 : log.event) || '').toUpperCase())))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.DataListTable, null, (log === null || log === void 0 ? void 0 : log.data) && getValidLogData(log === null || log === void 0 ? void 0 : log.data).filter(function (item) {
      return item.attribute !== 'schedule_ranges';
    }).map(function (item, i) {
      return /*#__PURE__*/_react.default.createElement("tbody", {
        key: i
      }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, (0, _utils.getAttributeName)(item === null || item === void 0 ? void 0 : item.attribute))));
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.DataListTable, null, (log === null || log === void 0 ? void 0 : log.data) && getValidLogData(log === null || log === void 0 ? void 0 : log.data).filter(function (item) {
      return item.attribute !== 'schedule_ranges';
    }).map(function (item, i) {
      var _item$added, _item$added2;
      return /*#__PURE__*/_react.default.createElement("tbody", {
        key: i
      }, /*#__PURE__*/_react.default.createElement("tr", null, item.attribute !== 'schedule' ? /*#__PURE__*/_react.default.createElement("td", null, typeof (item === null || item === void 0 ? void 0 : item.new) !== 'undefined' && (item === null || item === void 0 ? void 0 : item.new) !== null ? "".concat(item === null || item === void 0 ? void 0 : item.new) : (item === null || item === void 0 || (_item$added = item.added) === null || _item$added === void 0 ? void 0 : _item$added.length) > 0 ? item === null || item === void 0 || (_item$added2 = item.added) === null || _item$added2 === void 0 ? void 0 : _item$added2.toString() : t('NONE', 'None')) : /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.SeeChanges, {
        onClick: function onClick() {
          return scheduleModalData(item, 'new');
        }
      }, t('SEE_CHANGES', 'See changes')))));
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.DataListTable, null, (log === null || log === void 0 ? void 0 : log.data) && getValidLogData(log === null || log === void 0 ? void 0 : log.data).filter(function (item) {
      return item.attribute !== 'schedule_ranges';
    }).map(function (item, i) {
      var _item$removed, _item$removed2;
      return /*#__PURE__*/_react.default.createElement("tbody", {
        key: i
      }, /*#__PURE__*/_react.default.createElement("tr", null, item.attribute !== 'schedule' ? /*#__PURE__*/_react.default.createElement("td", null, typeof (item === null || item === void 0 ? void 0 : item.old) !== 'undefined' && (item === null || item === void 0 ? void 0 : item.old) !== null ? "".concat(item === null || item === void 0 ? void 0 : item.old) : (item === null || item === void 0 || (_item$removed = item.removed) === null || _item$removed === void 0 ? void 0 : _item$removed.length) > 0 ? item === null || item === void 0 || (_item$removed2 = item.removed) === null || _item$removed2 === void 0 ? void 0 : _item$removed2.toString() : t('NONE', 'None')) : /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.SeeChanges, {
        onClick: function onClick() {
          return scheduleModalData(item, 'old');
        }
      }, t('SEE_CHANGES', 'See changes')))));
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.DateTimeWrapper, null, parseDate(log.created_at, {
      utc: false
    }))), /*#__PURE__*/_react.default.createElement("td", null, log === null || log === void 0 ? void 0 : log.user_agent)));
  }))) : /*#__PURE__*/_react.default.createElement(_styles.NoData, null, t('NO_DATA', 'No Data'))), (logsList === null || logsList === void 0 ? void 0 : logsList.logs.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    isHidePagecontrol: true,
    currentPage: paginationProps.currentPage,
    totalPages: paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "40%",
    height: "60vh",
    style: {
      overflowY: 'auto'
    },
    padding: "30px",
    title: t('SCHEDULE_CHANGES', 'Schedule changes'),
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.SchedulesWrapper, {
    border: !!(schedules !== null && schedules !== void 0 && schedules.oldSchedule)
  }, (schedules === null || schedules === void 0 ? void 0 : schedules.newSchedule) && /*#__PURE__*/_react.default.createElement(_styles.Schedules, null, /*#__PURE__*/_react.default.createElement(_styles.ScheduleTitle, null, t('NEW', 'New')), getSchedule(schedules === null || schedules === void 0 ? void 0 : schedules.newSchedule)), (schedules === null || schedules === void 0 ? void 0 : schedules.oldSchedule) && /*#__PURE__*/_react.default.createElement(_styles.Schedules, null, /*#__PURE__*/_react.default.createElement(_styles.ScheduleTitle, null, t('OLD', 'Old')), getSchedule(schedules === null || schedules === void 0 ? void 0 : schedules.oldSchedule)))));
};
var BusinessLogs = exports.BusinessLogs = function BusinessLogs(props) {
  var businessLogsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessLogsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessLogs, businessLogsProps);
};