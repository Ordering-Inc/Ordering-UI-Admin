"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsStatusSubFilterUI = exports.AnalyticsStatusSubFilter = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _MdClose = _interopRequireDefault(require("@meronex/icons/ios/MdClose"));
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AnalyticsStatusSubFilterUI = exports.AnalyticsStatusSubFilterUI = function AnalyticsStatusSubFilterUI(props) {
  var appIdList = props.appIdList,
    filterList = props.filterList,
    handleChangeFilterList = props.handleChangeFilterList;
  var changeAnalyticsSubStatus = function changeAnalyticsSubStatus(id) {
    if ((filterList === null || filterList === void 0 ? void 0 : filterList.app_id) !== id) handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      app_id: id
    }));else handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      app_id: null
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.SubFilterContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, appIdList.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70,
      key: i,
      height: 30
    });
  })) : ['all'].concat(_toConsumableArray(appIdList === null || appIdList === void 0 ? void 0 : appIdList.ids)).map(function (appId, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.Button, {
      key: i,
      color: (filterList === null || filterList === void 0 ? void 0 : filterList.app_id) === appId ? 'primary' : 'secundary',
      onClick: function onClick() {
        return changeAnalyticsSubStatus(appId);
      }
    }, appId, (filterList === null || filterList === void 0 ? void 0 : filterList.app_id) === appId && /*#__PURE__*/_react.default.createElement(_MdClose.default, null));
  })));
};
var AnalyticsStatusSubFilter = exports.AnalyticsStatusSubFilter = function AnalyticsStatusSubFilter(props) {
  var analyticsStatusSubFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AnalyticsStatusSubFilterUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AnalyticsStatusSubFilter, analyticsStatusSubFilterProps);
};