"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _UserDetails = require("../UserDetails");
var _CustomerCashWallet = require("../CustomerCashWallet");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
var _CustomerPointsWallet = require("../CustomerPointsWallet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CustomerDetailsUI = function CustomerDetailsUI(props) {
  var _userState$user, _userState$user2, _userState$user3, _userState$user4, _userState$user5, _userState$user6, _userState$user7, _userState$user8, _userState$user9, _userState$user10;
  var userState = props.userState,
    handleDeleteUser = props.handleDeleteUser,
    handleParentSidebarMove = props.handleParentSidebarMove,
    handleChangeActiveUser = props.handleChangeActiveUser;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    showOption = _useState2[0],
    setShowOption = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpenMenu = _useState6[0],
    setIsOpenMenu = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    menuMoveDistance = _useState8[0],
    setMenuMoveDistance = _useState8[1];
  var customerMenus = [{
    key: 'user_details',
    value: t('USER_DETAILS', 'User details')
  },
  // { key: 'businesses_opened', value: t('BUSINESSES_OPENED', 'Businesses opened') },
  // { key: 'products_opened', value: t('PRODUCTS_OPENED', 'Products opened') },
  {
    key: 'cash_wallet',
    value: t('CASH_WALLET', 'Cash wallet')
  }, {
    key: 'points_wallet',
    value: t('POINTS_WALLET', 'Points wallet')
  }];
  var onDeleteCustomer = function onDeleteCustomer() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_USER', 'Are you sure that you want to delete this user?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteUser();
      }
    });
  };
  var handleClickMenu = function handleClickMenu(key) {
    setShowOption(key);
    handleParentSidebarMove(500);
    setIsOpenMenu(true);
  };
  var handleCloseMenu = function handleCloseMenu() {
    handleParentSidebarMove(0);
    setShowOption(null);
    setIsOpenMenu(false);
    setMenuMoveDistance(0);
  };
  (0, _react.useEffect)(function () {
    handleParentSidebarMove(0);
    setIsOpenMenu(false);
    setShowOption(null);
  }, [userState === null || userState === void 0 ? void 0 : (_userState$user = userState.user) === null || _userState$user === void 0 ? void 0 : _userState$user.id]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.UserName, null, userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  }) : /*#__PURE__*/_react.default.createElement("span", {
    className: "customer-name"
  }, (_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.name, " ", (_userState$user3 = userState.user) === null || _userState$user3 === void 0 ? void 0 : _userState$user3.lastname), userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50,
    style: {
      margin: '0px 5px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, handleChangeActiveUser && /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (userState === null || userState === void 0 ? void 0 : (_userState$user4 = userState.user) === null || _userState$user4 === void 0 ? void 0 : _userState$user4.enabled) || false,
    onChange: function onChange(enabled) {
      return handleChangeActiveUser(_objectSpread(_objectSpread({}, userState === null || userState === void 0 ? void 0 : userState.user), {}, {
        enabled: enabled
      }));
    }
  }))), !!((_userState$user5 = userState.user) !== null && _userState$user5 !== void 0 && _userState$user5.phone_verified) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Phone, null), t('VERIFIED', 'Verified')), !!((_userState$user6 = userState.user) !== null && _userState$user6 !== void 0 && _userState$user6.email_verified) && /*#__PURE__*/_react.default.createElement(_styles2.VerifiedItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Envelope, null), t('VERIFIED', 'Verified'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onDeleteCustomer();
    }
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null) : (_userState$user7 = userState.user) !== null && _userState$user7 !== void 0 && _userState$user7.photo ? /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage((_userState$user8 = userState.user) === null || _userState$user8 === void 0 ? void 0 : _userState$user8.photo, 'w_220,c_limit'),
    alt: ""
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null)), /*#__PURE__*/_react.default.createElement(_styles2.MenusContainer, {
    isLoading: userState.loading
  }, customerMenus.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.OptionMenu, {
      key: option.key,
      active: showOption === option.key,
      onClick: function onClick() {
        return handleClickMenu(option.key);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, option.value), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), isOpenMenu && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "customer_details_menu",
    open: isOpenMenu,
    onClose: function onClose() {
      return handleCloseMenu();
    },
    isBorderShow: true,
    defaultSideBarWidth: 500 + menuMoveDistance,
    moveDistance: menuMoveDistance
  }, showOption === 'user_details' && /*#__PURE__*/_react.default.createElement(_styles2.UserDetailsWrapper, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    userId: props.userId,
    user: userState.user,
    setExtraOpen: function setExtraOpen(isOpen) {
      return setMenuMoveDistance(isOpen ? 500 : 0);
    }
  })), showOption === 'cash_wallet' && /*#__PURE__*/_react.default.createElement(_CustomerCashWallet.CustomerCashWallet, {
    userId: (_userState$user9 = userState.user) === null || _userState$user9 === void 0 ? void 0 : _userState$user9.id
  }), showOption === 'points_wallet' && /*#__PURE__*/_react.default.createElement(_CustomerPointsWallet.CustomerPointsWallet, {
    userId: (_userState$user10 = userState.user) === null || _userState$user10 === void 0 ? void 0 : _userState$user10.id,
    user: userState.user
  })));
};
var CustomerDetails = function CustomerDetails(props) {
  var customerDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CustomerDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserDetails, customerDetailsProps));
};
exports.CustomerDetails = CustomerDetails;