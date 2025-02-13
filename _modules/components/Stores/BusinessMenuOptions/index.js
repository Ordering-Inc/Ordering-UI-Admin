"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenuOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrap = require("react-bootstrap");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _BusinessMenuShare = require("../BusinessMenuShare");
var _BusinessMenuBasicOptions = require("../BusinessMenuBasicOptions");
var _BusinessMenuCustomFields = require("../BusinessMenuCustomFields");
var _BusinessSharedMenuProducts = require("../BusinessSharedMenuProducts");
var _BusinessMenuChannels = require("../BusinessMenuChannels");
var _SnoozeComponent = require("../SnoozeComponent");
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
var BusinessMenuOptionsUI = function BusinessMenuOptionsUI(props) {
  var _Object$keys2, _Object$keys3, _sitesState$sites, _Object$keys4, _Object$keys5;
  var open = props.open,
    onClose = props.onClose,
    menu = props.menu,
    business = props.business,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    isSelectedSharedMenus = props.isSelectedSharedMenus,
    handleDeleteMenu = props.handleDeleteMenu,
    handleUpdateBusinessMenuOption = props.handleUpdateBusinessMenuOption,
    handleChangeInput = props.handleChangeInput,
    setIsOpenSharedProduct = props.setIsOpenSharedProduct,
    sitesState = props.sitesState,
    setMenuList = props.setMenuList,
    menuList = props.menuList,
    formState = props.formState,
    businessMenuState = props.businessMenuState,
    setCurrentMenu = props.setCurrentMenu;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useState3 = (0, _react.useState)('basic'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedMenuOption = _useState4[0],
    setSelectedMenuOption = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isCustomFieldsOpen = _useState8[0],
    setIsCustomFieldsOpen = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isMenuSnooze = _useState10[0],
    setIsMenuSnooze = _useState10[1];
  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      props.onClose();
    }
    setIsMenuOpen(value);
    document.getElementById('menu_options').style.width = value ? width > 1000 ? '500px' : '100%' : '0';
  };
  var handleDeleteClick = function handleDeleteClick() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_MENU', 'Are you sure that you want to delete this menu?'),
      handleOnAccept: function handleOnAccept() {
        handleDeleteMenu();
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  var handleChangeSnooze = function handleChangeSnooze(changes) {
    var _changes = {
      target: {
        name: 'snooze_until',
        value: changes.snooze_until
      }
    };
    handleChangeInput(_changes);
  };
  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('menu_options').style.width = '100%';
      } else {
        document.getElementById('menu_options').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    var _Object$keys;
    if (((_Object$keys = Object.keys(menu)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) === 0) {
      setSelectedMenuOption('basic');
    }
  }, [menu]);
  var handleTabClick = function handleTabClick(settingTab) {
    setSelectedMenuOption(settingTab);
    (0, _utils.addQueryToUrl)({
      setting_tab: settingTab
    });
  };
  (0, _react.useEffect)(function () {
    if (isSelectedSharedMenus) {} else {
      var settingTab = query.get('setting_tab');
      if (settingTab) {
        handleTabClick(settingTab);
      } else {
        handleTabClick('basic');
      }
    }
  }, [isSelectedSharedMenus]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "menu_options"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MENU_SETTINGS', 'Menu settings')), /*#__PURE__*/_react.default.createElement(_styles2.ActionBlock, null, ((_Object$keys2 = Object.keys(menu)) === null || _Object$keys2 === void 0 ? void 0 : _Object$keys2.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    className: "snooze",
    color: "lightGreen",
    borderRadius: "8px",
    onClick: function onClick() {
      return setIsMenuSnooze(true);
    }
  }, t('SNOOZE', 'Snooze'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    className: "product_actions",
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, !isSelectedSharedMenus && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setIsCustomFieldsOpen(true);
    }
  }, t('CUSTOM_FIELDS', 'Custom fields')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDeleteClick();
    }
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), ((_Object$keys3 = Object.keys(menu)) === null || _Object$keys3 === void 0 ? void 0 : _Object$keys3.length) > 0 && !isSelectedSharedMenus && /*#__PURE__*/_react.default.createElement(_styles2.TabContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.TabInnerContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.AutoScroll, {
    innerScroll: true,
    scrollId: "menu_options"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedMenuOption === 'basic',
    onClick: function onClick() {
      return handleTabClick('basic');
    }
  }, t('BASIC', 'Basic')), (sitesState === null || sitesState === void 0 || (_sitesState$sites = sitesState.sites) === null || _sitesState$sites === void 0 ? void 0 : _sitesState$sites.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedMenuOption === 'channels',
    onClick: function onClick() {
      return handleTabClick('channels');
    }
  }, t('CHANNELS', 'Channels')), ((_Object$keys4 = Object.keys(menu)) === null || _Object$keys4 === void 0 ? void 0 : _Object$keys4.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedMenuOption === 'share_with',
    onClick: function onClick() {
      return handleTabClick('share_with');
    }
  }, t('SHARE_WITH', 'Share with'))))), !isSelectedSharedMenus || ((_Object$keys5 = Object.keys(menu)) === null || _Object$keys5 === void 0 ? void 0 : _Object$keys5.length) === 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, selectedMenuOption === 'basic' && /*#__PURE__*/_react.default.createElement(_BusinessMenuBasicOptions.BusinessMenuBasicOptions, props), selectedMenuOption === 'channels' && /*#__PURE__*/_react.default.createElement(_BusinessMenuChannels.BusinessMenuChannels, props), selectedMenuOption === 'share_with' && /*#__PURE__*/_react.default.createElement(_BusinessMenuShare.BusinessMenuShare, {
    menu: menu,
    setCurrentMenu: setCurrentMenu,
    business: business,
    handleUpdateBusinessState: handleUpdateBusinessState,
    setMenuList: setMenuList,
    menuList: menuList
  })) : /*#__PURE__*/_react.default.createElement(_BusinessSharedMenuProducts.BusinessSharedMenuProducts, {
    menu: menu,
    business: business,
    handleUpdateBusinessState: handleUpdateBusinessState,
    setIsOpenSharedProduct: setIsOpenSharedProduct,
    setMenuList: setMenuList,
    menuList: menuList
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    open: isCustomFieldsOpen,
    onClose: function onClose() {
      return setIsCustomFieldsOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessMenuCustomFields.BusinessMenuCustomFields, {
    open: isCustomFieldsOpen,
    onClose: function onClose() {
      return setIsCustomFieldsOpen(false);
    },
    businessId: business === null || business === void 0 ? void 0 : business.id,
    menuId: menu.id
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "85%",
    maxWidth: "1000px",
    open: isMenuSnooze,
    onClose: function onClose() {
      return setIsMenuSnooze(false);
    },
    closeOnBackdrop: false
  }, /*#__PURE__*/_react.default.createElement(_SnoozeComponent.SnoozeComponent, {
    dataState: businessMenuState === null || businessMenuState === void 0 ? void 0 : businessMenuState.menu,
    handleUpdate: handleUpdateBusinessMenuOption,
    handleChangeFormState: handleChangeSnooze,
    formState: formState,
    onClose: function onClose() {
      return setIsMenuSnooze(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    width: "700px",
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
  })));
};
var BusinessMenuOptions = exports.BusinessMenuOptions = function BusinessMenuOptions(props) {
  var businessMenuOptionFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessMenuOptionsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessMenuOptions, businessMenuOptionFormProps);
};