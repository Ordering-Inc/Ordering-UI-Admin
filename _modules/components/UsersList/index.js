"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styledComponents = require("styled-components");

var _reactBootstrap = require("react-bootstrap");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));

var _HiOutlineMail = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineMail"));

var _FiSmartphone = _interopRequireDefault(require("@meronex/icons/fi/FiSmartphone"));

var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _Switch = require("../../styles/Switch");

var _UserTypeSelector = require("../UserTypeSelector");

var _Pagination = require("../Pagination");

var _ConfirmAdmin = require("../ConfirmAdmin");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UsersList = function UsersList(props) {
  var userDetailsId = props.userDetailsId,
      usersList = props.usersList,
      paginationProps = props.paginationProps,
      getUsers = props.getUsers,
      handleChangeUserType = props.handleChangeUserType,
      handleChangeActiveUser = props.handleChangeActiveUser,
      handleDeleteUser = props.handleDeleteUser,
      selectedUsers = props.selectedUsers,
      handleSelectedUsers = props.handleSelectedUsers,
      handleOpenUserDetails = props.handleOpenUserDetails,
      handleOpenUserAddForm = props.handleOpenUserAddForm,
      isDriversPage = props.isDriversPage,
      isDriversManagersPage = props.isDriversManagersPage;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

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

  var getUserType = function getUserType(type) {
    var userTypes = [{
      key: 0,
      value: t('ADMINISTRATOR', 'Administrator')
    }, {
      key: 1,
      value: t('CITY_MANAGER', 'City manager')
    }, {
      key: 2,
      value: t('BUSINESS_OWNER', 'Business owner')
    }, {
      key: 3,
      value: t('USER', 'User')
    }];
    var objectStatus = userTypes.find(function (o) {
      return o.key === type;
    });
    return objectStatus && objectStatus;
  };

  var onChangeUserDetails = function onChangeUserDetails(e, user) {
    var isInvalid = e.target.closest('.user_checkbox') || e.target.closest('.user_type_selector') || e.target.closest('.user_enable_control') || e.target.closest('.user_action');
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

  var onChangeUserType = function onChangeUserType(user, type) {
    if (user.level !== 0) {
      handleChangeUserType(type);
    } else {
      setConfirmAdmin({
        open: true,
        handleOnConfirm: function handleOnConfirm() {
          setConfirmAdmin(_objectSpread(_objectSpread({}, confirmAdmin), {}, {
            open: false
          }));
          handleChangeUserType(type);
        }
      });
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UsersConatiner, null, /*#__PURE__*/_react.default.createElement(_styles.UserTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.UsersTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('USER', 'User')), /*#__PURE__*/_react.default.createElement("th", null, t('DETAILS', 'Details')), /*#__PURE__*/_react.default.createElement("th", null), /*#__PURE__*/_react.default.createElement("th", {
    colSpan: 2
  }, t('ACTION', 'Action')))), usersList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserMainInfo, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20,
      height: 20
    })), /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), /*#__PURE__*/_react.default.createElement("td", null, !(isDriversPage || isDriversManagersPage) && /*#__PURE__*/_react.default.createElement(_styles.UserTypeWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      style: {
        marginBottom: '10px'
      }
    }), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserEnableWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    }))));
  }) : usersList === null || usersList === void 0 ? void 0 : usersList.users.map(function (user) {
    var _getUserType;

    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: user.id,
      className: user.id === parseInt(userDetailsId) ? 'active' : null
    }, /*#__PURE__*/_react.default.createElement("tr", {
      onClick: function onClick(e) {
        return onChangeUserDetails(e, user);
      }
    }, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserMainInfo, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
      className: "user_checkbox",
      isChecked: selectedUsers.includes(user.id),
      onClick: function onClick() {
        return handleSelectedUsers(user.id);
      }
    }, selectedUsers.includes(user.id) ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, null)), /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage(user === null || user === void 0 ? void 0 : user.photo, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, user.name, " ", user === null || user === void 0 ? void 0 : user.lastname), /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.email)), ((user === null || user === void 0 ? void 0 : user.phone_verified) || (user === null || user === void 0 ? void 0 : user.email_verified)) && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        right: 10
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, !!(user !== null && user !== void 0 && user.phone_verified) && /*#__PURE__*/_react.default.createElement(_styles.VerifiedItem, {
      style: {
        marginBottom: 2
      }
    }, /*#__PURE__*/_react.default.createElement(_FiSmartphone.default, {
      style: {
        fontSize: 13,
        marginRight: 2
      }
    }), t('VERIFIED', 'Verified')), !!(user !== null && user !== void 0 && user.email_verified) && /*#__PURE__*/_react.default.createElement(_styles.VerifiedItem, null, /*#__PURE__*/_react.default.createElement(_HiOutlineMail.default, {
      style: {
        fontSize: 14,
        marginRight: 2
      }
    }), t('VERIFIED', 'Verified')))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('PHONE')), /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.cellphone))), /*#__PURE__*/_react.default.createElement("td", null, !(isDriversPage || isDriversManagersPage) && /*#__PURE__*/_react.default.createElement(_styles.UserTypeWrapper, {
      className: "user_type_selector"
    }, /*#__PURE__*/_react.default.createElement(_UserTypeSelector.UserTypeSelector, {
      userId: user.id,
      defaultUserType: user === null || user === void 0 ? void 0 : user.level,
      handleChangeUserType: function handleChangeUserType(type) {
        return onChangeUserType(user, type);
      }
    }), /*#__PURE__*/_react.default.createElement("p", null, (_getUserType = getUserType(user === null || user === void 0 ? void 0 : user.level)) === null || _getUserType === void 0 ? void 0 : _getUserType.value))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserEnableWrapper, {
      className: "user_enable_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
      notAsync: user.level === 0,
      defaultChecked: user === null || user === void 0 ? void 0 : user.enabled,
      onChange: function onChange(enabled) {
        return handleEnable(user, enabled);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.WrapperUserActionSelector, {
      className: "user_action"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
      title: /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null),
      id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleOpenUserDetails(user);
      }
    }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleDeleteUser(user === null || user === void 0 ? void 0 : user.id);
      }
    }, t('DELETE', 'Delete')))))));
  }))), /*#__PURE__*/_react.default.createElement(_styles.UsersBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.AddNewUserButton, {
    onClick: function onClick() {
      return handleOpenUserAddForm();
    }
  }, isDriversPage ? t('ADD_NEW_DRIVER', 'Add new driver') : isDriversManagersPage ? t('ADD_NEW_DRIVER_MANAGER', 'Add new driver manager') : t('ADD_NEW_USER', 'Add new user')), (usersList === null || usersList === void 0 ? void 0 : usersList.users.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    currentPage: paginationProps.currentPage,
    totalPages: paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
  })))), /*#__PURE__*/_react.default.createElement(_ConfirmAdmin.ConfirmAdmin, {
    open: confirmAdmin.open,
    onClose: function onClose() {
      return setConfirmAdmin(_objectSpread(_objectSpread({}, confirmAdmin), {}, {
        open: false
      }));
    },
    onConfirm: confirmAdmin.handleOnConfirm
  }));
};

exports.UsersList = UsersList;