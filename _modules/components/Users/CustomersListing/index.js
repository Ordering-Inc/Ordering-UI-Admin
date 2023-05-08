"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomersListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _UsersList = require("../UsersList");
var _UsersListingHeader = require("../UsersListingHeader");
var _UserActiveStateFilter = require("../UserActiveStateFilter");
var _CustomerDetails = require("../CustomerDetails");
var _Shared = require("../../Shared");
var _UserAddForm = require("../UserAddForm");
var _UsersDeleteButton = require("../UsersDeleteButton");
var _UsersExportCSV = require("../UsersExportCSV");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CustomersListingUI = function CustomersListingUI(props) {
  var defaultUserTypesSelected = props.defaultUserTypesSelected,
    disabledActiveStateCondition = props.disabledActiveStateCondition,
    headerTitle = props.headerTitle,
    usersList = props.usersList,
    paginationProps = props.paginationProps,
    getUsers = props.getUsers,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    userTypesSelected = props.userTypesSelected,
    paginationDetail = props.paginationDetail,
    selectedUserActiveState = props.selectedUserActiveState,
    handleChangeUserActiveState = props.handleChangeUserActiveState,
    handleChangeActiveUser = props.handleChangeActiveUser,
    selectedUsers = props.selectedUsers,
    handleSelectedUsers = props.handleSelectedUsers,
    deleteUsersActionState = props.deleteUsersActionState,
    handleDeleteSeveralUsers = props.handleDeleteSeveralUsers,
    handleSuccessUpdate = props.handleSuccessUpdate,
    handleSuccessAddUser = props.handleSuccessAddUser,
    handleSuccessDeleteUser = props.handleSuccessDeleteUser,
    setSelectedUsers = props.setSelectedUsers,
    orderFilterValue = props.orderFilterValue,
    handleChangeOrderFilterValue = props.handleChangeOrderFilterValue,
    handleChangeMultiFilterValues = props.handleChangeMultiFilterValues,
    multiFilterValues = props.multiFilterValues;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var history = (0, _reactRouterDom.useHistory)();
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
  var _useState9 = (0, _react.useState)(500),
    _useState10 = _slicedToArray(_useState9, 2),
    sideBarWidth = _useState10[0],
    setSideBarWidth = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    moveDistance = _useState12[0],
    setMoveDistance = _useState12[1];
  var orderList = [{
    id: 1,
    name: t('NO_ORDERS', 'No orders'),
    value: 0
  }, {
    id: 2,
    name: t('WITH_ORDERS', 'With orders'),
    value: 1
  }, {
    id: 3,
    name: t('WITH_5_ORDERS', 'With 5+ orders'),
    value: 5
  }];
  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenUserDetails(false);
    setOpenUser(null);
    setQueryId(null);
    setSideBarWidth(500);
    moveDistance && setMoveDistance(0);
    var enabled = selectedUserActiveState ? 'active' : 'inactive';
    history.replace("".concat(location.pathname, "?enabled=").concat(enabled));
  };
  var handleOpenUserDetails = function handleOpenUserDetails(user) {
    var enabled = selectedUserActiveState ? 'active' : 'inactive';
    history.replace("".concat(location.pathname, "?enabled=").concat(enabled, "&id=").concat(user === null || user === void 0 ? void 0 : user.id));
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.UsersListingContainer, null, /*#__PURE__*/_react.default.createElement(_UsersListingHeader.UsersListingHeader, {
    title: headerTitle,
    searchValue: searchValue,
    onSearch: onSearch,
    multiFilterValues: multiFilterValues,
    handleChangeMultiFilterValues: handleChangeMultiFilterValues,
    isCustomers: true
  }), /*#__PURE__*/_react.default.createElement(_UserActiveStateFilter.UserActiveStateFilter, {
    selectedUserActiveState: selectedUserActiveState,
    handleChangeUserActiveState: handleChangeUserActiveState
  }), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.VerifiedStatusFilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: orderFilterValue === '' || orderFilterValue === null ? 'primary' : 'secundaryDark',
    onClick: function onClick() {
      return handleChangeOrderFilterValue('');
    }
  }, t('ALL', 'All'), (orderFilterValue === '' || orderFilterValue === null) && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.X, null)), orderList.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.Button, {
      key: i,
      color: orderFilterValue === item.value ? 'primary' : 'secundaryDark',
      onClick: function onClick() {
        return handleChangeOrderFilterValue(item.value);
      }
    }, item.name, orderFilterValue === item.value && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.X, null));
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionButtonsGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenUserAddForm();
    },
    "data-tour": "tour_add"
  }, t('ADD_USER', 'Add user')), /*#__PURE__*/_react.default.createElement(_UsersExportCSV.UsersExportCSV, {
    defaultUserTypesSelected: defaultUserTypesSelected,
    disabledActiveStateCondition: disabledActiveStateCondition,
    userTypesSelected: userTypesSelected,
    selectedUserActiveState: selectedUserActiveState
  }), /*#__PURE__*/_react.default.createElement(_UsersDeleteButton.UsersDeleteButton, {
    selectedUsers: selectedUsers,
    deleteUsersActionState: deleteUsersActionState,
    handleDeleteSeveralUsers: handleDeleteSeveralUsers
  }))), /*#__PURE__*/_react.default.createElement(_UsersList.UsersList, {
    isCustomer: true,
    usersList: usersList,
    getUsers: getUsers,
    paginationProps: paginationProps,
    paginationDetail: paginationDetail,
    handleChangeActiveUser: handleChangeActiveUser,
    selectedUsers: selectedUsers,
    handleSelectedUsers: handleSelectedUsers,
    userDetailsId: (openUser === null || openUser === void 0 ? void 0 : openUser.id) || queryId,
    handleOpenUserDetails: handleOpenUserDetails,
    handleOpenUserAddForm: handleOpenUserAddForm,
    setSelectedUsers: setSelectedUsers
  })), isOpenUserDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "customer_details",
    open: isOpenUserDetails,
    onClose: function onClose() {
      return handleBackRedirect();
    },
    defaultSideBarWidth: sideBarWidth,
    moveDistance: moveDistance
  }, /*#__PURE__*/_react.default.createElement(_CustomerDetails.CustomerDetails, {
    user: openUser,
    userId: (openUser === null || openUser === void 0 ? void 0 : openUser.id) || queryId,
    handleSuccessUpdate: handleSuccessUpdate,
    handleSuccessDeleteUser: handleSuccessDeleteUser,
    onClose: function onClose() {
      return handleBackRedirect();
    },
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setMoveDistance(val);
    },
    setSideBarWidth: setSideBarWidth,
    handleChangeActiveUser: handleChangeActiveUser
  })), openUserAddForm && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "user_add_form",
    open: openUserAddForm,
    onClose: function onClose() {
      return setOpenUserAddForm(false);
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_UserAddForm.UserAddForm, {
    handleSuccessAdd: handleSuccessAddUser,
    onClose: function onClose() {
      return setOpenUserAddForm(false);
    }
  })));
};
var CustomersListing = function CustomersListing(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultUserActiveState = query.get('enabled') !== 'inactive';
  var customersProps = _objectSpread(_objectSpread({}, props), {}, {
    defaultUserActiveState: defaultUserActiveState,
    UIComponent: CustomersListingUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UsersList, customersProps);
};
exports.CustomersListing = CustomersListing;