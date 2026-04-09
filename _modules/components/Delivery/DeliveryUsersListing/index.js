"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryUsersListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _utils = require("../../../utils");
var _UsersListingHeader = require("../UsersListingHeader");
var _UserTypeFilter = require("../UserTypeFilter");
var _UsersList = require("../UsersList");
var _UserActiveStateFilter = require("../UserActiveStateFilter");
var _UserDetailsLateralBar = require("../UserDetailsLateralBar");
var _UserAddForm = require("../UserAddForm");
var _WizardDelivery = require("../WizardDelivery");
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DeliveryUsersListingUI = function DeliveryUsersListingUI(props) {
  var defaultUserTypesSelected = props.defaultUserTypesSelected,
    disabledActiveStateCondition = props.disabledActiveStateCondition,
    headerTitle = props.headerTitle,
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
    handleChangeAvailable = props.handleChangeAvailable,
    handleDeleteUser = props.handleDeleteUser,
    selectedUsers = props.selectedUsers,
    handleSelectedUsers = props.handleSelectedUsers,
    deleteUsersActionState = props.deleteUsersActionState,
    handleDeleteSeveralUsers = props.handleDeleteSeveralUsers,
    onUserRedirect = props.onUserRedirect,
    handleSuccessUpdate = props.handleSuccessUpdate,
    handleSuccessAddUser = props.handleSuccessAddUser,
    handleSuccessDeleteUser = props.handleSuccessDeleteUser,
    actionDisabled = props.actionDisabled,
    driversGroupsState = props.driversGroupsState,
    setSelectedUsers = props.setSelectedUsers,
    actionStatus = props.actionStatus,
    isUseQuery = props.isUseQuery,
    handleChangeBusyUser = props.handleChangeBusyUser;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var firstRender = (0, _react.useRef)(true);
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
  var _useState9 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    alertState = _useState0[0],
    setAlertState = _useState0[1];
  var readOnlyDeliveryManager = user === null || user === void 0 ? void 0 : user.readOnlyDeliveryManager;
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isTourOpen = _useState10[0],
    setIsTourOpen = _useState10[1];
  var _useState11 = (0, _react.useState)(isDriversManagersPage ? 2 : 0),
    _useState12 = _slicedToArray(_useState11, 2),
    currentTourStep = _useState12[0],
    setCurrentTourStep = _useState12[1];
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
    (0, _utils.addQueryToUrl)({
      id: user.id
    });
  };
  var handleOpenUserAddForm = function handleOpenUserAddForm() {
    var id = query.get('id');
    if (id) {
      handleBackRedirect();
    }
    setIsOpenUserDetails(false);
    setOpenUserAddForm(true);
    if (isTourOpen) {
      setTimeout(function () {
        setCurrentTourStep(isDriversManagersPage ? 3 : 1);
      }, 50);
    }
  };
  var _handleOpenTour = function handleOpenTour() {
    setCurrentTourStep(isDriversManagersPage ? 2 : 0);
    setIsOpenUserDetails(false);
    setOpenUserAddForm(false);
    setIsTourOpen(true);
  };
  (0, _react.useEffect)(function () {
    if (usersList.loading || !firstRender.current) return;
    var id = query.get('id');
    if (id === null) {
      !isDriversManagersPage && setIsOpenUserDetails(false);
    } else {
      var _user2 = usersList.users.find(function (_user) {
        return _user.id === parseInt(id);
      });
      if (_user2) {
        setOpenUser(_user2);
      } else {
        setQueryId(parseInt(id));
      }
      setIsOpenUserDetails(true);
    }
    firstRender.current = false;
  }, [usersList]);
  var handleCloseAddForm = function handleCloseAddForm() {
    setOpenUserAddForm(false);
    if (isTourOpen) {
      setIsTourOpen(false);
    }
  };
  var handleSetStorage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var preVisited, visited;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return (0, _utils.getStorageItem)('visited', true);
          case 1:
            preVisited = _context.v;
            if (preVisited !== null && preVisited !== void 0 && preVisited.drivers_page) {
              _context.n = 3;
              break;
            }
            visited = _objectSpread(_objectSpread({}, preVisited), {}, {
              drivers_page: true
            });
            _context.n = 2;
            return (0, _utils.setStorageItem)('visited', visited, true);
          case 2:
            if (isDriversPage) {
              _handleOpenTour();
            }
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleSetStorage() {
      return _ref.apply(this, arguments);
    };
  }();
  var getDataFromStorage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var value;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return (0, _utils.getStorageItem)('isFromDeliveryDrivers', true);
          case 1:
            value = _context2.v;
            if (isDriversManagersPage && value) {
              (0, _utils.removeStorageItem)('isFromDeliveryDrivers');
              _handleOpenTour();
            }
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function getDataFromStorage() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (usersList.loading) return;
    handleSetStorage();
    getDataFromStorage();
  }, [usersList.loading]);
  (0, _react.useEffect)(function () {
    if (!(actionStatus !== null && actionStatus !== void 0 && actionStatus.error)) return;
    setAlertState({
      open: true,
      content: actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.error
    });
  }, [actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UsersListingContainer, null, /*#__PURE__*/_react.default.createElement(_UsersListingHeader.UsersListingHeader, {
    defaultUserTypesSelected: defaultUserTypesSelected,
    disabledActiveStateCondition: disabledActiveStateCondition,
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
    handleOpenUserAddForm: handleOpenUserAddForm,
    handleOpenTour: function handleOpenTour() {
      return _handleOpenTour();
    },
    actionDisabled: actionDisabled || readOnlyDeliveryManager
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
    handleChangeAvailable: handleChangeAvailable,
    handleDeleteUser: handleDeleteUser,
    selectedUsers: selectedUsers,
    handleSelectedUsers: handleSelectedUsers,
    userDetailsId: (openUser === null || openUser === void 0 ? void 0 : openUser.id) || queryId,
    handleOpenUserDetails: handleOpenUserDetails,
    handleOpenUserAddForm: handleOpenUserAddForm,
    actionDisabled: actionDisabled || readOnlyDeliveryManager,
    setSelectedUsers: setSelectedUsers,
    isUseQuery: isUseQuery,
    handleChangeBusyUser: handleChangeBusyUser
  })), isOpenUserDetails && /*#__PURE__*/_react.default.createElement(_UserDetailsLateralBar.UserDetailsLateralBar, {
    isDriversPage: isDriversPage,
    isDriversManagersPage: isDriversManagersPage,
    open: isOpenUserDetails,
    user: openUser,
    handleDeleteUser: handleDeleteUser,
    userId: (openUser === null || openUser === void 0 ? void 0 : openUser.id) || queryId,
    onClose: function onClose() {
      return handleBackRedirect();
    },
    handleSuccessUpdate: handleSuccessUpdate,
    handleSuccessDeleteUser: handleSuccessDeleteUser,
    handleChangeActiveUser: handleChangeActiveUser,
    actionDisabled: actionDisabled || readOnlyDeliveryManager
  }), openUserAddForm && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: openUserAddForm,
    noAnimation: isTourOpen,
    onClose: function onClose() {
      return handleCloseAddForm();
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_UserAddForm.UserAddForm, {
    isDriversPage: isDriversPage,
    isDriversManagersPage: isDriversManagersPage,
    handleSuccessAdd: handleSuccessAddUser,
    onClose: function onClose() {
      return setOpenUserAddForm(false);
    },
    isTourOpen: isTourOpen,
    driversGroupsState: driversGroupsState
  })), isTourOpen && /*#__PURE__*/_react.default.createElement(_WizardDelivery.WizardDelivery, {
    isTourOpen: isTourOpen,
    setIsTourOpen: setIsTourOpen,
    currentStep: currentTourStep
  }), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var DeliveryUsersListing = exports.DeliveryUsersListing = function DeliveryUsersListing(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var usersListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DeliveryUsersListingUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true,
    isDriver: true,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UsersList, usersListingProps);
};