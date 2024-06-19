"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));
var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var UsersList = exports.UsersList = function UsersList(props) {
  var userDetailsId = props.userDetailsId,
    usersList = props.usersList,
    paginationProps = props.paginationProps,
    getUsers = props.getUsers,
    handleChangeActiveUser = props.handleChangeActiveUser,
    selectedUsers = props.selectedUsers,
    handleSelectedUsers = props.handleSelectedUsers,
    handleOpenUserDetails = props.handleOpenUserDetails,
    handleOpenUserAddForm = props.handleOpenUserAddForm,
    isDriversPage = props.isDriversPage,
    isDriversManagersPage = props.isDriversManagersPage,
    actionDisabled = props.actionDisabled,
    setSelectedUsers = props.setSelectedUsers,
    handleChangeAvailable = props.handleChangeAvailable,
    handleChangeBusyUser = props.handleChangeBusyUser,
    isUseQuery = props.isUseQuery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)({
      open: false,
      handleOnConfirm: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirmAdmin = _useState2[0],
    setConfirmAdmin = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isAllChecked = _useState4[0],
    setIsAllChecked = _useState4[1];
  var onChangeUserDetails = function onChangeUserDetails(e, user) {
    var isInvalid = e.target.closest('.user_checkbox') || e.target.closest('.user_type_selector') || e.target.closest('.user_enable_control') || e.target.closest('.user_action') || e.target.closest('.user_available_control') || e.target.closest('.user_busy_control');
    if (isInvalid) return;
    handleOpenUserDetails(user);
  };
  var handleChangePage = function handleChangePage(page) {
    getUsers(page, 10);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    getUsers(expectedPage, pageSize);
  };
  var handleEnable = function handleEnable(user, enabled) {
    if (user.level !== 0) {
      handleChangeActiveUser({
        id: user.id,
        enabled: enabled
      });
    } else {
      setConfirmAdmin({
        open: true,
        handleOnConfirm: function handleOnConfirm() {
          setConfirmAdmin(_objectSpread(_objectSpread({}, confirmAdmin), {}, {
            open: false
          }));
          handleChangeActiveUser({
            id: user.id,
            enabled: enabled
          });
        }
      });
    }
  };
  var handleBusy = function handleBusy(user, busy) {
    if (user.level !== 0) {
      handleChangeBusyUser({
        id: user.id,
        busy: busy
      });
    } else {
      setConfirmAdmin({
        open: true,
        handleOnConfirm: function handleOnConfirm() {
          setConfirmAdmin(_objectSpread(_objectSpread({}, confirmAdmin), {}, {
            open: false
          }));
          handleChangeBusyUser({
            id: user.id,
            busy: busy
          });
        }
      });
    }
  };
  var handleSelecteAllUser = function handleSelecteAllUser() {
    var _usersList$users;
    var userIds = (_usersList$users = usersList.users) === null || _usersList$users === void 0 ? void 0 : _usersList$users.reduce(function (ids, user) {
      return [].concat(_toConsumableArray(ids), [user.id]);
    }, []);
    if (!isAllChecked) {
      setSelectedUsers([].concat(_toConsumableArray(selectedUsers), _toConsumableArray(userIds)));
    } else {
      var userIdsToDeleteSet = new Set(userIds);
      var updatedSelectedOrderIds = selectedUsers.filter(function (name) {
        return !userIdsToDeleteSet.has(name);
      });
      setSelectedUsers(updatedSelectedOrderIds);
    }
  };
  (0, _react.useEffect)(function () {
    var _usersList$users2;
    if (usersList.loading) return;
    var userIds = (_usersList$users2 = usersList.users) === null || _usersList$users2 === void 0 ? void 0 : _usersList$users2.reduce(function (ids, user) {
      return [].concat(_toConsumableArray(ids), [user.id]);
    }, []);
    var _isAllChecked = userIds.every(function (elem) {
      return selectedUsers.includes(elem);
    });
    setIsAllChecked(_isAllChecked);
  }, [usersList.users, selectedUsers]);
  (0, _react.useEffect)(function () {
    if (usersList.loading || usersList.users.length > 0 || paginationProps.totalPages <= 1) return;
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage);
    } else {
      handleChangePage(paginationProps.currentPage - 1);
    }
  }, [usersList.users, paginationProps]);
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.currentPage) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.pageSize) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.totalPages)) return;
    (0, _utils.addQueryToUrl)({
      page: paginationProps.currentPage,
      pageSize: paginationProps.pageSize
    });
  }, [paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.UsersConatiner, null, /*#__PURE__*/_react.default.createElement(_styles2.UserTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.UsersTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, isDriversPage && /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.UserIdWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    className: "all-checkbox",
    isChecked: !(usersList !== null && usersList !== void 0 && usersList.loading) && isAllChecked,
    onClick: function onClick() {
      return handleSelecteAllUser();
    }
  }, !(usersList !== null && usersList !== void 0 && usersList.loading) && isAllChecked ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, null)), t('ID', 'ID'))), /*#__PURE__*/_react.default.createElement("th", null, t('USER', 'User')), /*#__PURE__*/_react.default.createElement("th", null, t('DETAILS', 'Details')), /*#__PURE__*/_react.default.createElement("th", {
    colSpan: 2
  }, t('ACTION', 'Action')))), usersList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, isDriversPage && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserIdWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20,
      height: 20
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserMainInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserEnableWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50
    })))));
  }) : usersList === null || usersList === void 0 ? void 0 : usersList.users.map(function (user) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: user.id,
      className: user.id === parseInt(userDetailsId) ? 'active' : null
    }, /*#__PURE__*/_react.default.createElement("tr", {
      onClick: function onClick(e) {
        return onChangeUserDetails(e, user);
      }
    }, isDriversPage && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserIdWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
      className: "user_checkbox",
      isChecked: selectedUsers.includes(user.id),
      onClick: function onClick() {
        return handleSelectedUsers(user.id);
      }
    }, selectedUsers.includes(user.id) ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, null)), user === null || user === void 0 ? void 0 : user.id)), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserMainInfo, null, isDriversManagersPage && /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
      className: "user_checkbox",
      isChecked: selectedUsers.includes(user.id),
      onClick: function onClick() {
        return handleSelectedUsers(user.id);
      }
    }, selectedUsers.includes(user.id) ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage(user === null || user === void 0 ? void 0 : user.photo, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, user.name, " ", user === null || user === void 0 ? void 0 : user.lastname), /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.email)), ((user === null || user === void 0 ? void 0 : user.phone_verified) || (user === null || user === void 0 ? void 0 : user.email_verified)) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItemsContainer, null, !!(user !== null && user !== void 0 && user.phone_verified) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Phone, null), t('VERIFIED', 'Verified')), !!(user !== null && user !== void 0 && user.email_verified) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Envelope, null), t('VERIFIED', 'Verified'))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('PHONE')), /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.cellphone))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UserEnableWrapper, {
      className: "user_busy_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('BUSY', 'Busy')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      disabled: actionDisabled || !(user !== null && user !== void 0 && user.busy),
      notAsync: user.level === 0,
      defaultChecked: user === null || user === void 0 ? void 0 : user.busy,
      onChange: function onChange(busy) {
        return handleBusy(user, busy);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.UserEnableWrapper, {
      className: "user_enable_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      disabled: actionDisabled,
      notAsync: user.level === 0,
      defaultChecked: user === null || user === void 0 ? void 0 : user.enabled,
      onChange: function onChange(enabled) {
        return handleEnable(user, enabled);
      }
    })), isDriversPage && /*#__PURE__*/_react.default.createElement(_styles2.UserEnableWrapper, {
      className: "user_available_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('AVAILABLE', 'Available')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      disabled: actionDisabled,
      notAsync: true,
      defaultChecked: user === null || user === void 0 ? void 0 : user.available,
      onChange: function onChange(available) {
        return handleChangeAvailable({
          id: user.id,
          available: available
        });
      }
    }))))));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.UsersBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenUserAddForm();
    },
    disabled: actionDisabled
  }, isDriversPage ? t('ADD_NEW_DRIVER', 'Add new driver') : isDriversManagersPage ? t('ADD_NEW_DRIVER_MANAGER', 'Add new driver manager') : t('ADD_NEW_USER', 'Add new user')), (usersList === null || usersList === void 0 ? void 0 : usersList.users.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: paginationProps.currentPage,
    totalPages: paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize,
    defaultPageSize: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize
  })))), /*#__PURE__*/_react.default.createElement(_Shared.ConfirmAdmin, {
    open: confirmAdmin.open,
    onClose: function onClose() {
      return setConfirmAdmin(_objectSpread(_objectSpread({}, confirmAdmin), {}, {
        open: false
      }));
    },
    onConfirm: confirmAdmin.handleOnConfirm
  }));
};