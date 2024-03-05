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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AnalyticsFilterTimeZone = function AnalyticsFilterTimeZone(props) {
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
exports.AnalyticsFilterTimeZone = AnalyticsFilterTimeZone;