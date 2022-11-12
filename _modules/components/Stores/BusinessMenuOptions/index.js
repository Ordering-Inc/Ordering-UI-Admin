"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenuOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
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
var _styles2 = require("./styles");
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
var BusinessMenuOptionsUI = function BusinessMenuOptionsUI(props) {
  var _sitesState$sites;
  var open = props.open,
    onClose = props.onClose,
    menu = props.menu,
    business = props.business,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    isSelectedSharedMenus = props.isSelectedSharedMenus,
    handleDeleteMenu = props.handleDeleteMenu,
    setIsOpenSharedProduct = props.setIsOpenSharedProduct,
    sitesState = props.sitesState;
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
    if (Object.keys(menu).length === 0) {
      setSelectedMenuOption('basic');
    }
  }, [menu]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "menu_options"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MENU_SETTINGS', 'Menu settings')), /*#__PURE__*/_react.default.createElement(_styles2.ActionBlock, null, Object.keys(menu).length > 0 && /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
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
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), Object.keys(menu).length > 0 && !isSelectedSharedMenus && /*#__PURE__*/_react.default.createElement(_styles2.TabContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.TabInnerContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.AutoScroll, {
    innerScroll: true,
    scrollId: "menu_options"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedMenuOption === 'basic',
    onClick: function onClick() {
      return setSelectedMenuOption('basic');
    }
  }, t('BASIC', 'Basic')), (sitesState === null || sitesState === void 0 ? void 0 : (_sitesState$sites = sitesState.sites) === null || _sitesState$sites === void 0 ? void 0 : _sitesState$sites.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedMenuOption === 'channels',
    onClick: function onClick() {
      return setSelectedMenuOption('channels');
    }
  }, t('CHANNELS', 'Channels')), Object.keys(menu).length > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedMenuOption === 'share_with',
    onClick: function onClick() {
      return setSelectedMenuOption('share_with');
    }
  }, t('SHARE_WITH', 'Share with'))))), !isSelectedSharedMenus || Object.keys(menu).length === 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, selectedMenuOption === 'basic' && /*#__PURE__*/_react.default.createElement(_BusinessMenuBasicOptions.BusinessMenuBasicOptions, props), selectedMenuOption === 'channels' && /*#__PURE__*/_react.default.createElement(_BusinessMenuChannels.BusinessMenuChannels, props), selectedMenuOption === 'share_with' && /*#__PURE__*/_react.default.createElement(_BusinessMenuShare.BusinessMenuShare, {
    menu: menu,
    business: business,
    handleUpdateBusinessState: handleUpdateBusinessState
  })) : /*#__PURE__*/_react.default.createElement(_BusinessSharedMenuProducts.BusinessSharedMenuProducts, {
    menu: menu,
    business: business,
    handleUpdateBusinessState: handleUpdateBusinessState,
    setIsOpenSharedProduct: setIsOpenSharedProduct
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
var BusinessMenuOptions = function BusinessMenuOptions(props) {
  var businessMenuOptionFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessMenuOptionsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessMenuOptions, businessMenuOptionFormProps);
};
exports.BusinessMenuOptions = BusinessMenuOptions;