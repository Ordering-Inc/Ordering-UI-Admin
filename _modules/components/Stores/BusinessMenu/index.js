"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BusinessMenuOptions = require("../BusinessMenuOptions");
var _Shared = require("../../Shared");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
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
var BusinessMenuUI = function BusinessMenuUI(props) {
  var business = props.business,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    businessMenusState = props.businessMenusState,
    handleChangeBusinessMenuActiveState = props.handleChangeBusinessMenuActiveState,
    handleSuccessBusinessMenu = props.handleSuccessBusinessMenu,
    isSelectedSharedMenus = props.isSelectedSharedMenus,
    setIsSelectedSharedMenus = props.setIsSelectedSharedMenus,
    sitesState = props.sitesState,
    setBusinessMenusState = props.setBusinessMenusState;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirm = _useState2[0],
    setConfirm = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    showOption = _useState4[0],
    setShowOption = _useState4[1];
  var _useState5 = (0, _react.useState)({
      menu: null,
      loading: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    currentMenuState = _useState6[0],
    setCurrentMenuState = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isOpenSharedProduct = _useState8[0],
    setIsOpenSharedProduct = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    searchValue = _useState10[0],
    setSearchValue = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    menuList = _useState12[0],
    setMenuList = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    initMenuId = _useState14[0],
    setInitMenuId = _useState14[1];
  var setCurrentMenu = function setCurrentMenu(data) {
    setCurrentMenuState(_objectSpread(_objectSpread({}, currentMenuState), data));
  };
  var handleOpenOptions = function handleOpenOptions(name, menu) {
    setCurrentMenu({
      menu: menu
    });
    setIsExtendExtraOpen(true);
    setShowOption(name);
  };
  var handleCloseOption = function handleCloseOption(isTab) {
    setShowOption(null);
    setIsExtendExtraOpen(false);
    setIsOpenSharedProduct(false);
    setCurrentMenu({
      menu: null
    });
    if (!isTab) {
      setInitMenuId(null);
      (0, _utils.removeQueryToUrl)(['menu', 'product']);
    }
  };
  var handleOpenEdit = function handleOpenEdit(e, menu, isInitialRender) {
    var _e$target;
    var isInvalid = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.business_checkbox_control');
    if (isInvalid) return;
    handleOpenOptions('option', menu);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        menu: menu.id
      });
    }
  };
  (0, _react.useEffect)(function () {
    var updatedMenus = _toConsumableArray(isSelectedSharedMenus ? businessMenusState === null || businessMenusState === void 0 ? void 0 : businessMenusState.menusShared : businessMenusState === null || businessMenusState === void 0 ? void 0 : businessMenusState.menus);
    var filteredMenus = updatedMenus.filter(function (menu) {
      var _menu$name;
      return menu === null || menu === void 0 || (_menu$name = menu.name) === null || _menu$name === void 0 ? void 0 : _menu$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
    });
    setMenuList(filteredMenus);
  }, [JSON.stringify(businessMenusState.menus), JSON.stringify(businessMenusState.menusShared), searchValue, isSelectedSharedMenus]);
  var handleTabClick = function handleTabClick(isShared, isInitialRender) {
    handleCloseOption(true);
    setIsSelectedSharedMenus(isShared);
    if (!isInitialRender) {
      var tab = isShared ? 'shared_menus' : 'menu';
      (0, _utils.addQueryToUrl)({
        tab: tab
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (businessMenusState.loading || !initMenuId) return;
    var tab = query.get('tab');
    var updatedMenus = _toConsumableArray(tab === 'shared_menus' ? businessMenusState === null || businessMenusState === void 0 ? void 0 : businessMenusState.menusShared : businessMenusState === null || businessMenusState === void 0 ? void 0 : businessMenusState.menus);
    var selectedMenu = updatedMenus.find(function (menu) {
      return menu.id === Number(initMenuId);
    });
    handleOpenEdit(null, selectedMenu, true);
  }, [initMenuId, businessMenusState.loading]);
  (0, _react.useEffect)(function () {
    var tab = query.get('tab');
    var menuId = query.get('menu');
    setInitMenuId(menuId);
    if (tab === 'shared_menus') {
      handleTabClick(true, true);
    } else {
      handleTabClick(false, true);
    }
    return function () {
      setInitMenuId(null);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.MenuContainer, {
    isHide: isOpenSharedProduct
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('MENU_V21', 'Menu')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenOptions('option', {});
    }
  }, t('ADD_MENU', 'Add menu'))), /*#__PURE__*/_react.default.createElement(_styles2.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: !isSelectedSharedMenus,
    onClick: function onClick() {
      return handleTabClick(false);
    }
  }, t('MENU_V21', 'Menu')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: isSelectedSharedMenus,
    onClick: function onClick() {
      return handleTabClick(true);
    }
  }, t('SHARED_MENUS', 'Shared menus'))), /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    placeholder: t('SEARCH', 'Search'),
    search: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    }
  })), (businessMenusState === null || businessMenusState === void 0 ? void 0 : businessMenusState.loading) && _toConsumableArray(Array(4).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.MeunItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 24
    }));
  }), !(businessMenusState !== null && businessMenusState !== void 0 && businessMenusState.loading) && menuList.map(function (menu, index) {
    var _currentMenuState$men;
    return /*#__PURE__*/_react.default.createElement(_styles2.MeunItem, {
      disabled: currentMenuState === null || currentMenuState === void 0 ? void 0 : currentMenuState.loading,
      key: menu.id,
      isBorderTop: index === 0,
      active: menu.id === (currentMenuState === null || currentMenuState === void 0 || (_currentMenuState$men = currentMenuState.menu) === null || _currentMenuState$men === void 0 ? void 0 : _currentMenuState$men.id),
      onClick: function onClick(e) {
        return handleOpenEdit(e, menu);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
      className: "business_checkbox_control"
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: menu === null || menu === void 0 ? void 0 : menu.enabled,
      onChange: function onChange(e) {
        return handleChangeBusinessMenuActiveState(menu === null || menu === void 0 ? void 0 : menu.id, e.target.checked);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.MenuName, null, menu === null || menu === void 0 ? void 0 : menu.name), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }), !isSelectedSharedMenus && /*#__PURE__*/_react.default.createElement(_styles2.AddMenuButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenOptions('option', {});
    },
    disabled: businessMenusState === null || businessMenusState === void 0 ? void 0 : businessMenusState.loading
  }, t('ADD_MENU', 'Add menu')))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showOption === 'option' && /*#__PURE__*/_react.default.createElement(_BusinessMenuOptions.BusinessMenuOptions, {
    open: showOption === 'option',
    business: business,
    menu: (currentMenuState === null || currentMenuState === void 0 ? void 0 : currentMenuState.menu) || {},
    onClose: function onClose() {
      return handleCloseOption();
    },
    handleUpdateBusinessState: handleSuccessBusinessMenu,
    isSelectedSharedMenus: isSelectedSharedMenus,
    isOpenSharedProduct: isOpenSharedProduct,
    setIsOpenSharedProduct: setIsOpenSharedProduct,
    sitesState: sitesState,
    menuList: businessMenusState,
    setMenuList: setBusinessMenusState,
    setCurrentMenu: setCurrentMenu
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showOption === 'option' && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: showOption === 'option',
    onClose: function onClose() {
      return handleCloseOption();
    },
    padding: "20px 0 0 0"
  }, /*#__PURE__*/_react.default.createElement(_BusinessMenuOptions.BusinessMenuOptions, {
    open: showOption === 'option',
    business: business,
    menu: (currentMenuState === null || currentMenuState === void 0 ? void 0 : currentMenuState.menu) || {},
    onClose: function onClose() {
      return handleCloseOption();
    },
    handleUpdateBusinessState: handleSuccessBusinessMenu,
    isSelectedSharedMenus: isSelectedSharedMenus,
    setIsOpenSharedProduct: setIsOpenSharedProduct,
    sitesState: sitesState,
    menuList: businessMenusState,
    setMenuList: setBusinessMenusState,
    setCurrentMenu: setCurrentMenu
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
  }));
};
var BusinessMenu = exports.BusinessMenu = function BusinessMenu(props) {
  var businessMenuProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessMenuUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessMenu, businessMenuProps);
};