"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersDashboardSLAControls = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _OrderDashboardSLASetting = require("../OrderDashboardSLASetting");
var _FilterValuesContext = require("../../../contexts/FilterValuesContext");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var OrdersDashboardSLAControls = exports.OrdersDashboardSLAControls = function OrdersDashboardSLAControls(props) {
  var _filterValues$timeSta;
  var setTimeStatus = props.setTimeStatus,
    setSlaSettingTime = props.setSlaSettingTime;
  var _useFilterValues = (0, _FilterValuesContext.useFilterValues)(),
    _useFilterValues2 = _slicedToArray(_useFilterValues, 2),
    filterValues = _useFilterValues2[0],
    handleFilterValues = _useFilterValues2[1].handleFilterValues;
  var _useState = (0, _react.useState)((_filterValues$timeSta = filterValues === null || filterValues === void 0 ? void 0 : filterValues.timeStatus) !== null && _filterValues$timeSta !== void 0 ? _filterValues$timeSta : 'default'),
    _useState2 = _slicedToArray(_useState, 2),
    defaultOptionValue = _useState2[0],
    setDefaultOptionValue = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredTimeStatus = _useState4[0],
    setFilteredTimeStatus = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    settingOptionOpen = _useState6[0],
    setSettingOptionOpen = _useState6[1];
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var timeStatus = [{
    value: 'default',
    name: t('SLA_S', 'SLA’s'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: true
    }, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, {
      timeState: ""
    }), /*#__PURE__*/_react.default.createElement("p", null, t('SLA_S', 'SLA’s')))
  }, {
    value: 'in_time',
    name: t('OK', 'Ok'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: true
    }, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, {
      timeState: "in_time"
    }), /*#__PURE__*/_react.default.createElement("p", null, t('OK', 'Ok')))
  }, {
    value: 'at_risk',
    name: t('AT_RISK', 'At Risk'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: true
    }, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, {
      timeState: "at_risk"
    }), /*#__PURE__*/_react.default.createElement("p", null, t('AT_RISK', 'At Risk')))
  }, {
    value: 'delayed',
    name: t('DELAYED', 'Delayed'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: true
    }, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, {
      timeState: "delayed"
    }), /*#__PURE__*/_react.default.createElement("p", null, t('DELAYED', 'Delayed')))
  }, {
    value: 'sla_settings',
    name: t('SLA_SETTING', 'SLA’s settings'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: true
    }, /*#__PURE__*/_react.default.createElement("p", null, t('SLA_SETTING', 'SLA’s settings')))
  }];
  var changeOrderTimeStatus = function changeOrderTimeStatus(val) {
    if (val === 'sla_settings') {
      setSettingOptionOpen(true);
      return;
    }
    setDefaultOptionValue(val);
    if (val === 'default') {
      handleFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
        timeStatus: null
      }));
      setTimeStatus(null);
      return;
    }
    handleFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      timeStatus: val
    }));
    setTimeStatus(val);
  };
  var handleChangeSearch = function handleChangeSearch(searchValue) {
    var _filteredTimeStatus = _toConsumableArray(timeStatus === null || timeStatus === void 0 ? void 0 : timeStatus.filter(function (orderStatuse) {
      return orderStatuse === null || orderStatuse === void 0 ? void 0 : orderStatuse.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }));
    setFilteredTimeStatus(_filteredTimeStatus);
  };
  (0, _react.useEffect)(function () {
    if (filterValues !== null && filterValues !== void 0 && filterValues.timeStatus) return;
    setDefaultOptionValue('default');
  }, [filterValues === null || filterValues === void 0 ? void 0 : filterValues.timeStatus]);
  (0, _react.useEffect)(function () {
    setFilteredTimeStatus(timeStatus);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.OrdersDashboardSLAControlsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTimeStatusSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    searchBarIsCustomLayout: true,
    placeholder: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: true
    }, /*#__PURE__*/_react.default.createElement("p", null, t('SLA_S', 'SLA’s'))),
    options: filteredTimeStatus,
    defaultValue: defaultOptionValue,
    onChange: function onChange(timeState) {
      return changeOrderTimeStatus(timeState);
    },
    className: "timeStatusSelect",
    isShowSearchBar: true,
    searchBarPlaceholder: t('SEARCH', 'Search'),
    handleChangeSearch: handleChangeSearch
  })), settingOptionOpen && /*#__PURE__*/_react.default.createElement(_OrderDashboardSLASetting.OrderDashboardSLASetting, {
    setSlaSettingTime: setSlaSettingTime,
    settingOptionOpen: settingOptionOpen,
    setSettingOptionOpen: setSettingOptionOpen
  }));
};