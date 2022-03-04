"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BusinessMenuOptions = require("../BusinessMenuOptions");

var _Shared = require("../../Shared");

var _useWindowSize2 = require("../../../hooks/useWindowSize");

var _styles = require("../../../styles");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessMenuUI = function BusinessMenuUI(props) {
  var business = props.business,
      setIsExtendExtraOpen = props.setIsExtendExtraOpen,
      businessMenusState = props.businessMenusState,
      handleChangeBusinessMenuActiveState = props.handleChangeBusinessMenuActiveState,
      handleSuccessBusinessMenu = props.handleSuccessBusinessMenu,
      isSelectedSharedMenus = props.isSelectedSharedMenus,
      setIsSelectedSharedMenus = props.setIsSelectedSharedMenus,
      sitesState = props.sitesState;

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

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      currentMenu = _useState6[0],
      setCurrentMenu = _useState6[1];

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

  var handleOpenOptions = function handleOpenOptions(name, menu) {
    setCurrentMenu(menu);
    setIsExtendExtraOpen(true);
    setShowOption(name);
  };

  var handleCloseOption = function handleCloseOption() {
    setShowOption(null);
    setIsExtendExtraOpen(false);
    setIsOpenSharedProduct(false);
    setCurrentMenu(null);
  };

  var handleOpenEdit = function handleOpenEdit(e, menu) {
    var isInvalid = e.target.closest('.business_checkbox_control');
    if (isInvalid) return;
    handleOpenOptions('option', menu);
  };

  (0, _react.useEffect)(function () {
    var updatedMenus = _toConsumableArray(isSelectedSharedMenus ? businessMenusState === null || businessMenusState === void 0 ? void 0 : businessMenusState.menusShared : businessMenusState === null || businessMenusState === void 0 ? void 0 : businessMenusState.menus);

    var filteredMenus = updatedMenus.filter(function (menu) {
      return menu === null || menu === void 0 ? void 0 : menu.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setMenuList(filteredMenus);
  }, [businessMenusState === null || businessMenusState === void 0 ? void 0 : businessMenusState.menus, businessMenusState === null || businessMenusState === void 0 ? void 0 : businessMenusState.menusShared, searchValue, isSelectedSharedMenus]);
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
      handleCloseOption();
      setIsSelectedSharedMenus(false);
    }
  }, t('MENU_V21', 'Menu')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: isSelectedSharedMenus,
    onClick: function onClick() {
      handleCloseOption();
      setIsSelectedSharedMenus(true);
    }
  }, t('SHARED_MENUS', 'Shared menus'))), /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    placeholder: t('SEARCH', 'Search'),
    search: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    }
  })), menuList.map(function (menu, index) {
    return /*#__PURE__*/_react.default.createElement(_styles2.MeunItem, {
      key: menu.id,
      isBorderTop: index === 0,
      active: menu.id === (currentMenu === null || currentMenu === void 0 ? void 0 : currentMenu.id),
      onClick: function onClick(e) {
        return handleOpenEdit(e, menu);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
      className: "business_checkbox_control"
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      disabled: !!currentMenu,
      defaultChecked: menu === null || menu === void 0 ? void 0 : menu.enabled,
      onChange: function onChange(e) {
        return handleChangeBusinessMenuActiveState(menu === null || menu === void 0 ? void 0 : menu.id, e.target.checked);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.MenuName, null, menu === null || menu === void 0 ? void 0 : menu.name), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }), !isSelectedSharedMenus && /*#__PURE__*/_react.default.createElement(_styles2.AddMenuButton, {
    onClick: function onClick() {
      return handleOpenOptions('option', {});
    }
  }, t('ADD_MENU', 'Add menu'))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showOption === 'option' && /*#__PURE__*/_react.default.createElement(_BusinessMenuOptions.BusinessMenuOptions, {
    open: showOption === 'option',
    business: business,
    menu: currentMenu,
    onClose: function onClose() {
      return handleCloseOption();
    },
    handleUpdateBusinessState: handleSuccessBusinessMenu,
    isSelectedSharedMenus: isSelectedSharedMenus,
    isOpenSharedProduct: isOpenSharedProduct,
    setIsOpenSharedProduct: setIsOpenSharedProduct,
    sitesState: sitesState
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showOption === 'option' && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: showOption === 'option',
    onClose: function onClose() {
      return handleCloseOption();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessMenuOptions.BusinessMenuOptions, {
    open: showOption === 'option',
    business: business,
    menu: currentMenu,
    onClose: function onClose() {
      return handleCloseOption();
    },
    handleUpdateBusinessState: handleSuccessBusinessMenu,
    isSelectedSharedMenus: isSelectedSharedMenus,
    setIsOpenSharedProduct: setIsOpenSharedProduct,
    sitesState: sitesState
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

var BusinessMenu = function BusinessMenu(props) {
  var businessMenuProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessMenuUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessMenu, businessMenuProps);
};

exports.BusinessMenu = BusinessMenu;