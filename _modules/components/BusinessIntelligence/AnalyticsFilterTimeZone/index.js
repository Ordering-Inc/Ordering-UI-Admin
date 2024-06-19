"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsFilterTimeZone = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("../../../styles");
var _constants = require("../../../config/constants");
var _GoSearch = _interopRequireDefault(require("@meronex/icons/go/GoSearch"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var AnalyticsFilterTimeZone = exports.AnalyticsFilterTimeZone = function AnalyticsFilterTimeZone(props) {
  var filterList = props.filterList,
    handleChangeFilterList = props.handleChangeFilterList;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(_constants.timezones),
    _useState2 = _slicedToArray(_useState, 2),
    timeZoneList = _useState2[0],
    setTimeZoneList = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchVal = _useState4[0],
    setSearchVal = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isShowTimeZone = _useState6[0],
    setIsShowTimeZone = _useState6[1];
  var timeZoneRef = (0, _react.useRef)(null);
  var filterTimeZone = function filterTimeZone(evt) {
    var timeZoneToFilter = _constants.timezones;
    var _timeZoneList = timeZoneToFilter === null || timeZoneToFilter === void 0 ? void 0 : timeZoneToFilter.filter(function (item) {
      return item === null || item === void 0 ? void 0 : item.toLocaleLowerCase().includes(evt.target.value.toLocaleLowerCase());
    });
    setTimeZoneList(_timeZoneList);
    setSearchVal(evt.target.value);
  };
  var handleChangeTimeZone = function handleChangeTimeZone(code) {
    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      timeZone: code
    }));
    setSearchVal(code);
  };
  var handleClickOutside = function handleClickOutside(e) {
    var _timeZoneRef$current;
    if (!isShowTimeZone) return;
    var outsideTimeZone = !((_timeZoneRef$current = timeZoneRef.current) !== null && _timeZoneRef$current !== void 0 && _timeZoneRef$current.contains(e.target));
    if (outsideTimeZone) {
      setIsShowTimeZone(false);
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isShowTimeZone]);
  return /*#__PURE__*/_react.default.createElement(_styles2.AnalyticsTimeZoneContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    onClick: function onClick() {
      return setIsShowTimeZone(!isShowTimeZone);
    }
  }, filterList === null || filterList === void 0 ? void 0 : filterList.timeZone), isShowTimeZone && /*#__PURE__*/_react.default.createElement(_styles2.TimeZoneSelectWrapper, {
    ref: timeZoneRef
  }, /*#__PURE__*/_react.default.createElement(_styles2.TimeZoneSearchWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.TimeZoneSearchInput, {
    type: "text",
    placeholder: t('TIMEZONE', 'Timezone'),
    value: searchVal,
    onChange: filterTimeZone
  }), /*#__PURE__*/_react.default.createElement(_styles2.SearchIconWrapper, null, /*#__PURE__*/_react.default.createElement(_GoSearch.default, null))), /*#__PURE__*/_react.default.createElement(_styles2.TimeZoneListContainer, null, timeZoneList && timeZoneList.map(function (timezone, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.TimezoneListItem, {
      key: i,
      onClick: function onClick() {
        return handleChangeTimeZone(timezone);
      }
    }, timezone);
  }))));
};