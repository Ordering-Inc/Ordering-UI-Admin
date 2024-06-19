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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var AnalyticsDriversFilter = exports.AnalyticsDriversFilter = function AnalyticsDriversFilter(props) {
  var analyticsDriversFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    propsToFetch: ['id', 'name', 'driver_groups'],
    UIComponent: AnalyticsDriversFilterUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AnalyticsDriversFilter, analyticsDriversFilterProps);
};