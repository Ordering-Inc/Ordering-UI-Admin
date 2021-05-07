"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserListing = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _UserTypeFilter = require("../UserTypeFilter");

var _UserList = require("../UserList");

var _ActionsSection = require("../ActionsSection");

var _orderingComponentsAdmin = require("ordering-components-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import { UserList as UserListController } from './naked'
var UserListingUI = function UserListingUI(props) {
  var usersList = props.usersList,
      handleChangeUserType = props.handleChangeUserType,
      paginationProps = props.paginationProps,
      getUserById = props.getUserById,
      getUsers = props.getUsers,
      setUsersList = props.setUsersList,
      filterValues = props.filterValues,
      setFilterValues = props.setFilterValues,
      searchVal = props.searchVal,
      onSearch = props.onSearch,
      spinLoading = props.spinLoading;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UserContainer, null, /*#__PURE__*/_react.default.createElement(_UserTypeFilter.UserTypeFilter, {
    handleChangeUserType: handleChangeUserType
  }), /*#__PURE__*/_react.default.createElement(_styles.UserListSection, null, /*#__PURE__*/_react.default.createElement(_styles.PageTitleText, null, t('USERS', 'Users')), /*#__PURE__*/_react.default.createElement(_ActionsSection.ActionsSection, {
    filterValues: filterValues,
    setFilterValues: setFilterValues,
    searchVal: searchVal,
    onSearch: onSearch
  }), /*#__PURE__*/_react.default.createElement(_UserList.UserList, {
    usersList: usersList,
    paginationProps: paginationProps,
    getUserById: getUserById,
    getUsers: getUsers,
    setUsersList: setUsersList,
    spinLoading: spinLoading
  }))));
};

var UserListing = function UserListing(props) {
  var userListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserListingUI,
    isSearchByUserId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserList, userListingProps);
};

exports.UserListing = UserListing;