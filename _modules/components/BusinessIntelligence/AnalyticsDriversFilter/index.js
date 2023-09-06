"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsDriversFilter = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _AiFillMinusSquare = _interopRequireDefault(require("@meronex/icons/ai/AiFillMinusSquare"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AnalyticsDriversFilterUI = function AnalyticsDriversFilterUI(props) {
  var usersList = props.usersList,
    handleClickFilterButton = props.handleClickFilterButton,
    groupList = props.groupList,
    handleChangeCollapse = props.handleChangeCollapse,
    userIds = props.userIds,
    handleChangeUserId = props.handleChangeUserId,
    isParentCheck = props.isParentCheck,
    parentClick = props.parentClick,
    isAllCheck = props.isAllCheck,
    changeAllCheckStatus = props.changeAllCheckStatus;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var isCheckEnableSate = function isCheckEnableSate(id) {
    var found = userIds === null || userIds === void 0 ? void 0 : userIds.find(function (userId) {
      return userId === id;
    });
    var valid = false;
    if (found) {
      valid = true;
    }
    return valid;
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.AnalyticsDriversFilterContainer, null, usersList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectBtnWrapper, null, _toConsumableArray(Array(2).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70,
      key: i,
      height: 30
    });
  })), _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.TreeViewParentItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 15,
      height: 15
    }), /*#__PURE__*/_react.default.createElement(_styles2.TreeViewParentLabel, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 24
    })));
  })) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.SelectBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: isAllCheck === 'all' ? 'primary' : 'secundary',
    onClick: function onClick() {
      return changeAllCheckStatus('all');
    }
  }, t('SELECT_ALL', 'Select All')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: isAllCheck === 'none' ? 'primary' : 'secundary',
    onClick: function onClick() {
      return changeAllCheckStatus('none');
    }
  }, t('SELECT_NONE', 'Select None'))), groupList === null || groupList === void 0 ? void 0 : groupList.map(function (group, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.TreeViewItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.TreeViewParentItem, null, /*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick() {
        return parentClick(group.id);
      }
    }, isParentCheck(group.id) === 'all' ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : isParentCheck(group.id) === 'some' ? /*#__PURE__*/_react.default.createElement(_AiFillMinusSquare.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.TreeViewParentLabel, {
      onClick: function onClick() {
        return handleChangeCollapse(group.id);
      }
    }, group.name)), group.isCollapse && /*#__PURE__*/_react.default.createElement(_styles2.TreeViewChildrenContainer, null, group === null || group === void 0 ? void 0 : group.children.map(function (user, i) {
      return /*#__PURE__*/_react.default.createElement(_styles2.TreeViewChildrenItem, {
        key: i
      }, /*#__PURE__*/_react.default.createElement("div", {
        onClick: function onClick() {
          return handleChangeUserId(user.id);
        }
      }, isCheckEnableSate(user.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
        className: "fill"
      }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.TreeViewChildrenLabel, null, user.name));
    })));
  })), /*#__PURE__*/_react.default.createElement(_styles2.FilterBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    disabled: usersList.loading,
    onClick: handleClickFilterButton
  }, t('FILTER', 'Filter'))));
};
var AnalyticsDriversFilter = function AnalyticsDriversFilter(props) {
  var analyticsDriversFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    propsToFetch: ['id', 'name', 'driver_groups'],
    UIComponent: AnalyticsDriversFilterUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AnalyticsDriversFilter, analyticsDriversFilterProps);
};
exports.AnalyticsDriversFilter = AnalyticsDriversFilter;