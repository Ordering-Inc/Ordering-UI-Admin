"use strict";

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
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