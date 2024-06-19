"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTypeSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _Select = require("../../styles/Select");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DateTypeSelector = exports.DateTypeSelector = function DateTypeSelector(props) {
  var filterValues = props.filterValues,
    handleChangeDateType = props.handleChangeDateType,
    handleChangeFromDate = props.handleChangeFromDate,
    handleChangeEndDate = props.handleChangeEndDate;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    startDate = _useState2[0],
    setStartDate = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    endDate = _useState4[0],
    setEndDate = _useState4[1];
  var dateTypes = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('SELECT_DATE', 'Select date'))
  }, {
    value: 'today',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('TODAY', 'Today'))
  }, {
    value: 'yesterday',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('YESTERDAY', 'Yesterday'))
  }, {
    value: 'last7',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('LAST_7_DAYS', 'Last 7 dyas'))
  }, {
    value: 'last30',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('LAST_30_DAYS', 'Last 30 days'))
  }, {
    value: 'term',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_styles.DateContainer, null, t('FROM', 'From'), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
      selected: startDate,
      placeholderText: "mm/dd/yyyy",
      className: "startDate",
      isClearable: true,
      onChange: function onChange(date) {
        return _handleChangeFromDate(date);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles.DateContainer, null, t('TO', 'To'), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
      selected: endDate,
      minDate: new Date(startDate),
      placeholderText: "mm/dd/yyyy",
      className: "endDate",
      isClearable: true,
      onChange: function onChange(date) {
        return _handleChangeEndDate(date);
      }
    })))
  }];
  var changeDateType = function changeDateType(dateType) {
    handleChangeDateType(dateType);
  };
  var _handleChangeFromDate = function _handleChangeFromDate(date) {
    setStartDate(date);
    if (date !== null) {
      handleChangeFromDate((0, _dayjs.default)(date).format('YYYY-MM-DD'));
    } else {
      handleChangeFromDate(null);
    }
  };
  var _handleChangeEndDate = function _handleChangeEndDate(date) {
    setEndDate(date);
    if (date !== null) {
      handleChangeEndDate((0, _dayjs.default)(date).format('YYYY-MM-DD'));
    } else {
      handleChangeEndDate(null);
    }
  };
  (0, _react.useEffect)(function () {
    if (filterValues.dateType !== 'term') return;
    if (filterValues.deliveryFromDatetime !== null) {
      setStartDate(new Date(filterValues.deliveryFromDatetime));
    }
    if (filterValues.deliveryEndDatetime !== null) {
      setEndDate(new Date(filterValues.deliveryEndDatetime));
    }
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: filterValues.dateType || 'default',
    options: dateTypes,
    onChange: function onChange(dateType) {
      return changeDateType(dateType);
    },
    className: "date-filter-container"
  });
};