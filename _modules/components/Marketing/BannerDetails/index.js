"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _BannerImages = require("./BannerImages");
var _AddBanner = require("./AddBanner");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _reactBootstrap = require("react-bootstrap");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Businesses = require("./Businesses");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BannerDetailsUI = function BannerDetailsUI(props) {
  var _bannerState$banner3, _bannerState$banner4, _bannerState$banner5, _bannerState$banner6, _bannerState$banner7;
  var bannerState = props.bannerState,
    changesState = props.changesState,
    actionState = props.actionState,
    isAddMode = props.isAddMode,
    handleUpdateClick = props.handleUpdateClick,
    handleAddBanner = props.handleAddBanner,
    handleChangeItem = props.handleChangeItem,
    handleDeleteBanner = props.handleDeleteBanner,
    setBannerMoveDistance = props.setBannerMoveDistance,
    businessList = props.businessList,
    selectedBusinessIds = props.selectedBusinessIds,
    handleSelectBusiness = props.handleSelectBusiness,
    handleSelectAllBusiness = props.handleSelectAllBusiness,
    defaultPosition = props.defaultPosition;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)('images'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTab = _useState2[0],
    setSelectedTab = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: [],
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var tabOptions = (0, _react.useMemo)(function () {
    var _bannerState$banner, _bannerState$banner2;
    if ((bannerState === null || bannerState === void 0 || (_bannerState$banner = bannerState.banner) === null || _bannerState$banner === void 0 ? void 0 : _bannerState$banner.position) === 'web_business_page' || (bannerState === null || bannerState === void 0 || (_bannerState$banner2 = bannerState.banner) === null || _bannerState$banner2 === void 0 ? void 0 : _bannerState$banner2.position) === 'app_business_page') {
      return [{
        key: 'images',
        content: t('IMAGES', 'Images')
      }, {
        key: 'businesses',
        content: t('BUSINESSES', 'Businesses')
      }];
    } else {
      return [{
        key: 'images',
        content: t('IMAGES', 'Images')
      }];
    }
  }, [bannerState]);
  var onClickDeleteBanner = function onClickDeleteBanner() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('BANNER', 'Banner')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteBanner();
      }
    });
  };
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error) || actionState.loading) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState]);
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    timer = _useState8[0],
    setTimer = _useState8[1];
  var handleChangeBannerName = function handleChangeBannerName(name) {
    if (!name) return;
    clearTimeout(timer);
    var _timer = setTimeout(function () {
      handleUpdateClick({
        name: name
      });
    }, 750);
    setTimer(_timer);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, isAddMode ? t('ADD_BANNER', 'Add banner') : bannerState === null || bannerState === void 0 || (_bannerState$banner3 = bannerState.banner) === null || _bannerState$banner3 === void 0 ? void 0 : _bannerState$banner3.name), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (_bannerState$banner4 = bannerState.banner) === null || _bannerState$banner4 === void 0 ? void 0 : _bannerState$banner4.enabled,
    onChange: function onChange(enabled) {
      return handleUpdateClick({
        enabled: enabled
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onClickDeleteBanner();
    }
  }, t('DELETE', 'Delete')))))), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.FormController, {
    key: bannerState === null || bannerState === void 0 || (_bannerState$banner5 = bannerState.banner) === null || _bannerState$banner5 === void 0 ? void 0 : _bannerState$banner5.id
  }, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    defaultValue: (bannerState === null || bannerState === void 0 || (_bannerState$banner6 = bannerState.banner) === null || _bannerState$banner6 === void 0 ? void 0 : _bannerState$banner6.name) || '',
    onChange: function onChange(e) {
      return handleChangeBannerName(e.target.value);
    }
  })), isAddMode ? /*#__PURE__*/_react.default.createElement(_AddBanner.AddBanner, {
    changesState: changesState,
    handleChangeItem: handleChangeItem,
    handleAddBanner: handleAddBanner,
    actionState: actionState,
    businessList: businessList,
    selectedBusinessIds: selectedBusinessIds,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusiness: handleSelectAllBusiness,
    defaultPosition: defaultPosition
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.TabsConatiner, null, tabOptions.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: option.key,
      active: selectedTab === option.key,
      onClick: function onClick() {
        setSelectedTab(option.key);
        setBannerMoveDistance(0);
      }
    }, option.content);
  })), selectedTab === 'images' && /*#__PURE__*/_react.default.createElement(_BannerImages.BannerImages, _extends({}, props, {
    bannerId: bannerState === null || bannerState === void 0 || (_bannerState$banner7 = bannerState.banner) === null || _bannerState$banner7 === void 0 ? void 0 : _bannerState$banner7.id,
    setBannerMoveDistance: setBannerMoveDistance
  })), selectedTab === 'businesses' && /*#__PURE__*/_react.default.createElement(_Businesses.Businesses, {
    actionState: actionState,
    businessList: businessList,
    selectedBusinessIds: selectedBusinessIds,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusiness: handleSelectAllBusiness,
    handleUpdateClick: handleUpdateClick
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
      return alertState !== null && alertState !== void 0 && alertState.handleOnAccept ? alertState.handleOnAccept() : setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
  }));
};
var BannerDetails = exports.BannerDetails = function BannerDetails(props) {
  var bannerItemsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BannerDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BannerDetails, bannerItemsProps);
};