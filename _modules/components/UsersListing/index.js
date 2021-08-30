"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _UsersListingHeader = require("../UsersListingHeader");

var _UserTypeFilter = require("../UserTypeFilter");

var _UsersList = require("../UsersList");

var _UserActiveStateFilter = require("../UserActiveStateFilter");

var _UserDetailsLateralBar = require("../UserDetailsLateralBar");

var _SideBar = require("../SideBar");

var _UserAddForm = require("../UserAddForm");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UsersListingUI = function UsersListingUI(props) {
  var headerTitle = props.headerTitle,
      isShowActiveStateFilter = props.isShowActiveStateFilter,
      isShowUserTypeFilter = props.isShowUserTypeFilter,
      isDriversPage = props.isDriversPage,
      isDriversManagersPage = props.isDriversManagersPage,
      usersList = props.usersList,
      handleSelectedUserTypes = props.handleSelectedUserTypes,
      paginationProps = props.paginationProps,
      getUsers = props.getUsers,
      searchValue = props.searchValue,
      onSearch = props.onSearch,
      userTypesSelected = props.userTypesSelected,
      paginationDetail = props.paginationDetail,
      selectedUserActiveState = props.selectedUserActiveState,
      handleChangeUserActiveState = props.handleChangeUserActiveState,
      handleChangeUserType = props.handleChangeUserType,
      handleChangeActiveUser = props.handleChangeActiveUser,
      handleDeleteUser = props.handleDeleteUser,
      selectedUsers = props.selectedUsers,
      handleSelectedUsers = props.handleSelectedUsers,
      deleteUsersActionState = props.deleteUsersActionState,
      handleDeleteSeveralUsers = props.handleDeleteSeveralUsers,
      onUserRedirect = props.onUserRedirect,
      handleSuccessUpdate = props.handleSuccessUpdate,
      handleSuccessAddUser = props.handleSuccessAddUser;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      queryId = _useState2[0],
      setQueryId = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpenUserDetails = _useState4[0],
      setIsOpenUserDetails = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      openUser = _useState6[0],
      setOpenUser = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      openUserAddForm = _useState8[0],
      setOpenUserAddForm = _useState8[1];

  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenUserDetails(false);
    setOpenUser(null);
    setQueryId(null);
    onUserRedirect();
  };

  var handleOpenUserDetails = function handleOpenUserDetails(user) {
    onUserRedirect(user === null || user === void 0 ? void 0 : user.id);
    setOpenUser(user);
    setOpenUserAddForm(false);
    setIsOpenUserDetails(true);
  };

  var handleOpenUserAddForm = function handleOpenUserAddForm() {
    var id = query.get('id');

    if (id) {
      handleBackRedirect();
    }

    setIsOpenUserDetails(false);
    setOpenUserAddForm(true);
  };

  (0, _react.useEffect)(function () {
    if (usersList.loading) return;
    var id = query.get('id');
    if (id === null) setIsOpenUserDetails(false);else {
      var user = usersList.users.find(function (_user) {
        return _user.id === parseInt(id);
      });

      if (user) {
        setOpenUser(user);
      } else {
        setQueryId(parseInt(id));
      }

      setIsOpenUserDetails(true);
    }
  }, [usersList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UsersListingContainer, null, /*#__PURE__*/_react.default.createElement(_UsersListingHeader.UsersListingHeader, {
    isDriversPage: isDriversPage,
    isDriversManagersPage: isDriversManagersPage,
    title: headerTitle,
    selectedUsers: selectedUsers,
    userTypesSelected: userTypesSelected,
    selectedUserActiveState: selectedUserActiveState,
    deleteUsersActionState: deleteUsersActionState,
    searchValue: searchValue,
    onSearch: onSearch,
    handleDeleteSeveralUsers: handleDeleteSeveralUsers,
    handleOpenUserAddForm: handleOpenUserAddForm
  }), isShowActiveStateFilter && /*#__PURE__*/_react.default.createElement(_UserActiveStateFilter.UserActiveStateFilter, {
    selectedUserActiveState: selectedUserActiveState,
    handleChangeUserActiveState: handleChangeUserActiveState
  }), isShowUserTypeFilter && /*#__PURE__*/_react.default.createElement(_UserTypeFilter.UserTypeFilter, {
    handleChangeUserType: handleSelectedUserTypes
  }), /*#__PURE__*/_react.default.createElement(_UsersList.UsersList, {
    isDriversPage: isDriversPage,
    isDriversManagersPage: isDriversManagersPage,
    usersList: usersList,
    getUsers: getUsers,
    paginationProps: paginationProps,
    paginationDetail: paginationDetail,
    handleChangeUserType: handleChangeUserType,
    handleChangeActiveUser: handleChangeActiveUser,
    handleDeleteUser: handleDeleteUser,
    selectedUsers: selectedUsers,
    handleSelectedUsers: handleSelectedUsers,
    userDetailsId: (openUser === null || openUser === void 0 ? void 0 : openUser.id) || queryId,
    handleOpenUserDetails: handleOpenUserDetails,
    handleOpenUserAddForm: handleOpenUserAddForm
  })), isOpenUserDetails && /*#__PURE__*/_react.default.createElement(_UserDetailsLateralBar.UserDetailsLateralBar, {
    isDriversPage: isDriversPage,
    isDriversManagersPage: isDriversManagersPage,
    open: isOpenUserDetails,
    user: openUser,
    userId: (openUser === null || openUser === void 0 ? void 0 : openUser.id) || queryId,
    onClose: function onClose() {
      return handleBackRedirect();
    },
    handleSuccessUpdate: handleSuccessUpdate
  }), openUserAddForm && /*#__PURE__*/_react.default.createElement(_SideBar.SideBar, {
    sidebarId: "userAddForm",
    open: openUserAddForm,
    onClose: function onClose() {
      return setOpenUserAddForm(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_UserAddForm.UserAddForm, {
    isDriversPage: isDriversPage,
    isDriversManagersPage: isDriversManagersPage,
    handleSuccessAdd: handleSuccessAddUser,
    onClose: function onClose() {
      return setOpenUserAddForm(false);
    }
  })));
};

var UsersListing = function UsersListing(props) {
  var usersListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UsersListingUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UsersList, usersListingProps);
};

exports.UsersListing = UsersListing;