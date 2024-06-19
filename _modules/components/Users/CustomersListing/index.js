"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var _utils = require("../../../utils");
var _styles2 = require("./styles");
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
    multiFilterValues = props.multiFilterValues,
    isUseQuery = props.isUseQuery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
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
    (0, _utils.removeQueryToUrl)(['id', 'section', 'tab']);
  };
  var handleOpenUserDetails = function handleOpenUserDetails(user) {
    (0, _utils.addQueryToUrl)({
      id: user === null || user === void 0 ? void 0 : user.id
    });
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
      return handleChangeOrderFilterValue(null);
    }
  }, t('ALL', 'All')), orderList.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.Button, {
      key: i,
      color: orderFilterValue === item.value ? 'primary' : 'secundaryDark',
      onClick: function onClick() {
        return handleChangeOrderFilterValue(function (prev) {
          return prev === item.value ? null : item.value;
        });
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
    selectedUserActiveState: selectedUserActiveState,
    multiFilterValues: multiFilterValues
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
    setSelectedUsers: setSelectedUsers,
    isUseQuery: isUseQuery
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
var CustomersListing = exports.CustomersListing = function CustomersListing(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultUserActiveState = query.get('enabled') !== 'inactive';
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var customersProps = _objectSpread(_objectSpread({}, props), {}, {
    defaultUserActiveState: defaultUserActiveState,
    UIComponent: CustomersListingUI,
    isSearchByUserPhone: true,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    },
    propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'loyalty_level', 'loyalty_level_id', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'phone_verified', 'email_verified', 'wallets', 'orders_count', 'push_tokens']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UsersList, customersProps);
};