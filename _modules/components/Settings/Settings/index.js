"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Settings = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _styledComponents = require("styled-components");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _SettingItemUI = require("../SettingItemUI");
var _SettingsDetail = require("../SettingsDetail");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _Shared = require("../../Shared");
var _CheckoutFieldsSetting = require("../CheckoutFieldsSetting");
var _AddressFieldsSetting = require("../AddressFieldsSetting");
var _LanguageSetting = require("../LanguageSetting");
var _SitesAuthSettings = require("../SitesAuthSettings");
var _MultiCountrySettings = require("../MultiCountrySettings");
var _CardFieldsSetting = require("../CardFieldsSetting");
var _GuestCheckoutFieldsSetting = require("../GuestCheckoutFieldsSetting");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SettingsUI = function SettingsUI(props) {
  var _configs$multicountry, _categoryList$categor, _theme$images;
  var categoryList = props.categoryList,
    settingsType = props.settingsType,
    handChangeConfig = props.handChangeConfig;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var isMulticountryEnabled = configs === null || configs === void 0 || (_configs$multicountry = configs.multicountry) === null || _configs$multicountry === void 0 ? void 0 : _configs$multicountry.value;
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenDescription = _useState2[0],
    setIsOpenDescription = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedCategory = _useState4[0],
    setSelectedCategory = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpenSettingDetails = _useState6[0],
    setIsOpenSettingDetails = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openSitesAuthSettings = _useState8[0],
    setOpenSitesAuthSettings = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    openMultiCountrySettings = _useState10[0],
    setOpenMultiCountrySettings = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    openCheckoutSettings = _useState12[0],
    setOpenCheckoutSettings = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    openAddressSettings = _useState14[0],
    setOpenAddressSettings = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openCardSettings = _useState16[0],
    setOpenCardSettings = _useState16[1];
  var _useState17 = (0, _react.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    moveDistance = _useState18[0],
    setMoveDistance = _useState18[1];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var settingPageList = {
    key_basic: 'basic_settings',
    key_operation: 'operation_settings',
    key_plugin: 'plugin_settings'
  };
  var onBasicSettingsRedirect = function onBasicSettingsRedirect(_ref) {
    var category = _ref.category;
    if (!category) {
      return events.emit('go_to_page', {
        page: settingPageList[settingsType],
        replace: true
      });
    }
    if (category) {
      events.emit('go_to_page', {
        page: settingPageList[settingsType],
        search: "?category=".concat(category),
        replace: true
      });
    }
  };
  var handleOpenDescription = function handleOpenDescription(category, isInitialRender) {
    setIsOpenSettingDetails(null);
    setOpenSitesAuthSettings(false);
    setOpenMultiCountrySettings(false);
    setOpenCheckoutSettings(false);
    setOpenAddressSettings(false);
    setOpenCardSettings(false);
    setIsOpenDescription(true);
    setSelectedCategory(category);
    handChangeConfig && handChangeConfig(false);
    if (!isInitialRender) {
      history.replace("".concat(location.pathname, "?category=").concat(category === null || category === void 0 ? void 0 : category.id));
    }
  };
  var handleOpenSettingDetails = function handleOpenSettingDetails(item, isInitialRender) {
    setIsOpenDescription(false);
    setOpenSitesAuthSettings(false);
    setOpenCheckoutSettings(false);
    setOpenMultiCountrySettings(false);
    setOpenCardSettings(false);
    setOpenAddressSettings(false);
    setSelectedCategory(null);
    setIsOpenSettingDetails(item);
    if (!isInitialRender) {
      history.replace("".concat(location.pathname, "?category=").concat(item));
    }
  };
  var handleOpenSites = function handleOpenSites(isInitialRender) {
    setIsOpenDescription(false);
    setIsOpenSettingDetails(null);
    setOpenSitesAuthSettings(true);
    if (!isInitialRender) {
      history.replace("".concat(location.pathname, "?category=sites"));
    }
  };
  var handleOpenMultiCountry = function handleOpenMultiCountry(isInitialRender) {
    setIsOpenDescription(false);
    setIsOpenSettingDetails(null);
    setOpenMultiCountrySettings(true);
    if (!isInitialRender) {
      history.replace("".concat(location.pathname, "?category=multi_country"));
    }
  };
  var handleOpenCheckout = function handleOpenCheckout(isInitialRender) {
    setIsOpenDescription(false);
    setIsOpenSettingDetails(null);
    setOpenSitesAuthSettings(false);
    setOpenAddressSettings(false);
    setOpenCardSettings(false);
    setOpenCheckoutSettings(true);
    if (!isInitialRender) {
      history.replace("".concat(location.pathname, "?category=checkout"));
    }
  };
  var handleOpenAddress = function handleOpenAddress(isInitialRender) {
    setIsOpenDescription(false);
    setIsOpenSettingDetails(null);
    setOpenSitesAuthSettings(false);
    setOpenCheckoutSettings(false);
    setOpenCardSettings(false);
    setOpenAddressSettings(true);
    if (!isInitialRender) {
      history.replace("".concat(location.pathname, "?category=address"));
    }
  };
  var handleOpenCard = function handleOpenCard(isInitialRender) {
    setIsOpenDescription(false);
    setIsOpenSettingDetails(null);
    setOpenSitesAuthSettings(false);
    setOpenCheckoutSettings(false);
    setOpenAddressSettings(false);
    setOpenCardSettings(true);
    if (!isInitialRender) {
      history.replace("".concat(location.pathname, "?category=card"));
    }
  };
  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenDescription(false);
    setSelectedCategory(null);
    setIsOpenSettingDetails(null);
    setMoveDistance(0);
    setOpenMultiCountrySettings(false);
    setOpenCheckoutSettings(false);
    setOpenSitesAuthSettings(false);
    setOpenAddressSettings(false);
    setOpenCardSettings(false);
    history.replace("".concat(location.pathname));
  };
  (0, _react.useEffect)(function () {
    if (categoryList.loading) return;
    var categoryId = query.get('category');
    if (categoryId) {
      if (isNaN(Number(categoryId))) {
        if (categoryId === 'sites') {
          handleOpenSites(true);
        } else if (categoryId === 'multi_country') {
          handleOpenMultiCountry(true);
        } else if (categoryId === 'checkout') {
          setOpenCheckoutSettings(true);
        } else if (categoryId === 'address') {
          setOpenAddressSettings(true);
        } else if (categoryId === 'card') {
          setOpenCardSettings(true);
        } else {
          handleOpenSettingDetails(categoryId, true);
        }
      } else {
        var categorySelected = categoryList === null || categoryList === void 0 ? void 0 : categoryList.categories.find(function (item) {
          return (item === null || item === void 0 ? void 0 : item.id) === parseInt(categoryId);
        });
        if (categorySelected) {
          handleOpenDescription(categorySelected, true);
        }
      }
    }
  }, [categoryList.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BasicSettingsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, settingsType === 'key_basic' && t('BASIC_SETTINGS', 'Basic settings '), settingsType === 'key_operation' && t('OPERATION_SETTINGS', 'Operation settings '), settingsType === 'key_plugin' && t('PLUGIN_SETTINGS', 'Plugin settings ')), settingsType === 'key_plugin' && /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, t('MANAGE_CONFIG_ALL_PLUGINS', 'Manage and configure all your plugins in this tab'), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return events.emit('go_to_page', {
        page: 'integrations',
        search: '?id=plugins'
      });
    }
  }, t('ADD_NEW_PLUGIN', 'Add a new plugin'))))), /*#__PURE__*/_react.default.createElement(_styles2.ContentWrapper, {
    className: "row"
  }, settingsType === 'key_basic' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
    className: "col-md-4 col-sm-6",
    onClick: function onClick() {
      return handleOpenSettingDetails('language');
    }
  }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
    title: t('LANGUAGE_SETTINGS', 'Language settings'),
    description: t('LANGUAGE_SETTINGS_DESC'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.MegaphoneFill, null),
    active: isOpenSettingDetails === 'language'
  })), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
    className: "col-md-4 col-sm-6",
    onClick: function onClick() {
      return handleOpenCheckout();
    }
  }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
    title: t('CHECKOUT_FIELDS', 'Checkout fields'),
    description: t('CHECKOUT_FIELDS_DESC'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckCircleFill, null),
    active: openCheckoutSettings
  })), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
    className: "col-md-4 col-sm-6",
    onClick: function onClick() {
      return handleOpenSettingDetails('guest_checkout');
    }
  }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
    title: t('GUEST_CHECKOUT_FIELDS', 'Guest checkout fields'),
    description: t('GUEST_CHECKOUT_FIELDS_DESC', 'Which fields do you want to show on the guest checkout page?'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckCircleFill, null),
    active: isOpenSettingDetails === 'guest_checkout'
  })), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
    className: "col-md-4 col-sm-6",
    onClick: function onClick() {
      return handleOpenAddress();
    }
  }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
    title: t('ADDRESS_FIELDS', 'Address fields'),
    description: t('ADDRESS_FIELDS_DESC'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAltFill, null),
    active: openAddressSettings
  })), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
    className: "col-md-4 col-sm-6",
    onClick: function onClick() {
      return handleOpenCard();
    }
  }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
    title: t('CARD_FIELDS', 'Card fields'),
    description: t('CARD_FIELDS_DESC', 'Manage your card fields'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CreditCard, null),
    active: openCardSettings
  })), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
    className: "col-md-4 col-sm-6",
    onClick: function onClick() {
      return handleOpenSites();
    }
  }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
    title: t('SITES_LOGIN_SIGNUP_SETTINGS', 'Sites Login/Signup Settings'),
    description: t('SITES_LOGIN_SIGNUP_SETTINGS_DESC', 'Advanced sites login/sign up settings'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GearFill, null),
    active: openSitesAuthSettings
  })), isMulticountryEnabled && /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
    className: "col-md-4 col-sm-6",
    onClick: function onClick() {
      return handleOpenMultiCountry();
    }
  }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
    title: t('MULTI_COUNTRY_SETTINGS', 'Multi country settings'),
    description: t('MULTI_COUNTRY_SETTINGS_DESC', 'Settings according country'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GearFill, null),
    active: openMultiCountrySettings
  }))), categoryList.loading ? _toConsumableArray(Array(12).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
      className: "col-md-4 col-sm-6",
      key: i
    }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
      isSkeleton: true
    }));
  }) : categoryList.categories.map(function (category, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
      className: "col-md-4 col-sm-6",
      onClick: function onClick() {
        return handleOpenDescription(category);
      }
    }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
      title: category === null || category === void 0 ? void 0 : category.name,
      description: category === null || category === void 0 ? void 0 : category.description,
      icon: category !== null && category !== void 0 && category.image ? /*#__PURE__*/_react.default.createElement("img", {
        src: category === null || category === void 0 ? void 0 : category.image
      }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GearFill, null),
      active: (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id) === (category === null || category === void 0 ? void 0 : category.id)
    })));
  })), !categoryList.loading && ((_categoryList$categor = categoryList.categories) === null || _categoryList$categor === void 0 ? void 0 : _categoryList$categor.length) === 0 && settingsType !== 'key_basic' && /*#__PURE__*/_react.default.createElement(_styles2.WrapperNoneConfigs, null, /*#__PURE__*/_react.default.createElement(_styles2.InnerNoneConfigsContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.noOrders,
    alt: "none"
  }), /*#__PURE__*/_react.default.createElement("p", null, t('NO_SETTINGS', 'No Settings yet.'))))), isOpenDescription && /*#__PURE__*/_react.default.createElement(_SettingsDetail.SettingsDetail, _extends({}, props, {
    open: isOpenDescription,
    category: selectedCategory,
    onClose: handleBackRedirect,
    onBasicSettingsRedirect: onBasicSettingsRedirect
  })), openSitesAuthSettings && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    defaultSideBarWidth: 500 + moveDistance,
    moveDistance: moveDistance,
    open: openSitesAuthSettings,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }, /*#__PURE__*/_react.default.createElement(_SitesAuthSettings.SitesAuthSettings, {
    setMoveDistance: setMoveDistance
  })), openMultiCountrySettings && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    defaultSideBarWidth: 500 + moveDistance,
    moveDistance: moveDistance,
    open: openMultiCountrySettings,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }, /*#__PURE__*/_react.default.createElement(_MultiCountrySettings.MultiCountrySettings, {
    setMoveDistance: setMoveDistance
  })), openCheckoutSettings && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    defaultSideBarWidth: 500 + moveDistance,
    moveDistance: moveDistance,
    open: openCheckoutSettings,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }, /*#__PURE__*/_react.default.createElement(_CheckoutFieldsSetting.CheckoutFieldsSetting, {
    setMoveDistance: setMoveDistance
  })), openAddressSettings && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    defaultSideBarWidth: 500 + moveDistance,
    moveDistance: moveDistance,
    open: openAddressSettings,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressFieldsSetting.AddressFieldsSetting, {
    setMoveDistance: setMoveDistance
  })), openCardSettings && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    defaultSideBarWidth: 500 + moveDistance,
    moveDistance: moveDistance,
    open: openCardSettings,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }, /*#__PURE__*/_react.default.createElement(_CardFieldsSetting.CardFieldsSetting, {
    setMoveDistance: setMoveDistance
  })), isOpenSettingDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "setting-details",
    defaultSideBarWidth: 550,
    open: isOpenSettingDetails,
    onClose: function onClose() {
      return handleBackRedirect();
    },
    showExpandIcon: true
  }, isOpenSettingDetails === 'guest_checkout' && /*#__PURE__*/_react.default.createElement(_GuestCheckoutFieldsSetting.GuestCheckoutFieldsSetting, null), isOpenSettingDetails === 'language' && /*#__PURE__*/_react.default.createElement(_LanguageSetting.LanguageSetting, null)));
};
var Settings = function Settings(props) {
  var settingsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SettingsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Settings, settingsProps);
};
exports.Settings = Settings;