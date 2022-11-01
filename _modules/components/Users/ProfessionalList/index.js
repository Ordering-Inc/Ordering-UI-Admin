"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProfessionalList = function ProfessionalList(props) {
  var userDetailsId = props.userDetailsId,
    usersList = props.usersList,
    paginationProps = props.paginationProps,
    getUsers = props.getUsers,
    handleChangeActiveUser = props.handleChangeActiveUser,
    selectedUsers = props.selectedUsers,
    handleSelectedUsers = props.handleSelectedUsers,
    handleOpenUserDetails = props.handleOpenUserDetails,
    handleOpenUserAddForm = props.handleOpenUserAddForm,
    setSelectedUsers = props.setSelectedUsers;
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
    openPopover = _useState4[0],
    setOpenPopover = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAllChecked = _useState6[0],
    setIsAllChecked = _useState6[1];
  var _useState7 = (0, _react.useState)({
      user: true,
      city: true,
      phone: true,
      email: true,
      action: true
      // total: true
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    allowColumns = _useState8[0],
    setAllowColumns = _useState8[1];
  var optionsDefault = [{
    value: 'user',
    content: t('USER', 'USER')
  }, {
    value: 'city',
    content: t('CITY', 'City')
  }, {
    value: 'phone',
    content: t('PHONE', 'Phone')
  }, {
    value: 'email',
    content: t('EMAIL', 'Email')
  }, {
    value: 'action',
    content: t('ACTION', 'Action')
  }];
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };
  var onChangeUserDetails = function onChangeUserDetails(e, user) {
    var isInvalid = e.target.closest('.user_checkbox') || e.target.closest('.user_enable_control') || e.target.closest('.user_action');
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
    if (usersList.loading || usersList.users.length > 0 || paginationProps.totalPages <= 1) return;
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage);
    } else {
      handleChangePage(paginationProps.currentPage - 1);
    }
  }, [usersList.users, paginationProps]);
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.UsersConatiner, null, /*#__PURE__*/_react.default.createElement(_styles2.UserTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.UsersTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.user) && /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.AllCheckWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    className: "user_checkbox",
    isChecked: !(usersList !== null && usersList !== void 0 && usersList.loading) && isAllChecked,
    onClick: function onClick() {
      return handleSelecteAllUser();
    }
  }, !(usersList !== null && usersList !== void 0 && usersList.loading) && isAllChecked ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), t('USER', 'User'))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.phone) && /*#__PURE__*/_react.default.createElement("th", null, t('PHONE', 'Phone')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.email) && /*#__PURE__*/_react.default.createElement("th", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement("th", {
    className: "allow-colums"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    open: openPopover,
    title: t('DISPLAYED_DATA_PROFESSIONAL', 'Displayed data the professional'),
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    onClick: function onClick() {
      return setOpenPopover(!openPopover);
    },
    onClose: function onClose() {
      return setOpenPopover(false);
    },
    handleChangeAllowColumns: handleChangeAllowColumns
  })))), usersList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.user) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserMainInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20,
      height: 20
    })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
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
    }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.phone) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.email) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserTypeWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    }))));
  }) : usersList === null || usersList === void 0 ? void 0 : usersList.users.map(function (user) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: user.id,
      className: user.id === parseInt(userDetailsId) ? 'active' : null
    }, /*#__PURE__*/_react.default.createElement("tr", {
      onClick: function onClick(e) {
        return onChangeUserDetails(e, user);
      }
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.user) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserMainInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
      className: "user_checkbox",
      isChecked: selectedUsers.includes(user.id),
      onClick: function onClick() {
        return handleSelectedUsers(user.id);
      }
    }, selectedUsers.includes(user.id) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage(user === null || user === void 0 ? void 0 : user.photo, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, user.name, " ", user === null || user === void 0 ? void 0 : user.lastname), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.city) && (user === null || user === void 0 ? void 0 : user.city) && /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.city)), ((user === null || user === void 0 ? void 0 : user.phone_verified) || (user === null || user === void 0 ? void 0 : user.email_verified)) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItemsContainer, null, !!(user !== null && user !== void 0 && user.phone_verified) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Phone, null), t('VERIFIED', 'Verified')), !!(user !== null && user !== void 0 && user.email_verified) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Envelope, null), t('VERIFIED', 'Verified'))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.phone) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('PHONE')), /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.cellphone))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.email) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserTypeWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.email))), /*#__PURE__*/_react.default.createElement("td", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.action) && /*#__PURE__*/_react.default.createElement(_styles2.UserEnableWrapper, {
      className: "user_enable_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      notAsync: user.level === 0,
      defaultChecked: user === null || user === void 0 ? void 0 : user.enabled,
      onChange: function onChange(enabled) {
        return handleEnable(user, enabled);
      }
    })))));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.UsersBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.AddNewUserButton, {
    onClick: function onClick() {
      return handleOpenUserAddForm();
    }
  }, t('ADD_NEW_USER', 'Add new user')), (usersList === null || usersList === void 0 ? void 0 : usersList.users.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: paginationProps.currentPage,
    totalPages: paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
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
exports.ProfessionalList = ProfessionalList;