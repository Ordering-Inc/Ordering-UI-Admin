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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AnalyticsStatusSubFilterUI = function AnalyticsStatusSubFilterUI(props) {
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
exports.AnalyticsStatusSubFilterUI = AnalyticsStatusSubFilterUI;
var AnalyticsStatusSubFilter = function AnalyticsStatusSubFilter(props) {
  var analyticsStatusSubFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AnalyticsStatusSubFilterUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AnalyticsStatusSubFilter, analyticsStatusSubFilterProps);
};
exports.AnalyticsStatusSubFilter = AnalyticsStatusSubFilter;