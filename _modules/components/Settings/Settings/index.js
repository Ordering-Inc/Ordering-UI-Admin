"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var SettingsUI = function SettingsUI(props) {
  var _categoryList$categor2, _theme$images, _theme$images$dummies;

  var categoryList = props.categoryList,
      settingsType = props.settingsType,
      handChangeConfig = props.handChangeConfig;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
      _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
      isCollapse = _useInfoShare2[0].isCollapse,
      handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;

  var _useLocation = (0, _reactRouterDom.useLocation)(),
      search = _useLocation.search;

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

  var _useState11 = (0, _react.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      moveDistance = _useState12[0],
      setMoveDistance = _useState12[1];

  var category;

  if (search) {
    var data = search.substring(1).split('&');
    category = data[0];
  }

  var categoryId = category && category.split('=')[1];

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

  var handleOpenDescription = function handleOpenDescription(category) {
    setIsOpenSettingDetails(null);
    setOpenSitesAuthSettings(false);
    setOpenMultiCountrySettings(false);
    setIsOpenDescription(true);
    setSelectedCategory(category);
    onBasicSettingsRedirect({
      category: category === null || category === void 0 ? void 0 : category.id
    });
    handChangeConfig && handChangeConfig(false);
  };

  var handleOpenSettingDetails = function handleOpenSettingDetails(item) {
    setIsOpenDescription(false);
    setOpenSitesAuthSettings(false);
    setOpenMultiCountrySettings(false);
    setSelectedCategory(null);
    setIsOpenSettingDetails(item);
  };

  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenDescription(false);
    setSelectedCategory(null);
    onBasicSettingsRedirect({
      category: null
    });
  };

  (0, _react.useEffect)(function () {
    if (categoryId) {
      onBasicSettingsRedirect({
        category: categoryId
      });
      setIsOpenDescription(true);
    } else {
      setIsOpenDescription(false);
    }
  }, []);
  (0, _react.useEffect)(function () {
    var _categoryList$categor;

    if (categoryId && (categoryList === null || categoryList === void 0 ? void 0 : (_categoryList$categor = categoryList.categories) === null || _categoryList$categor === void 0 ? void 0 : _categoryList$categor.length) > 0) {
      var categorySelected = categoryList === null || categoryList === void 0 ? void 0 : categoryList.categories.find(function (item) {
        return (item === null || item === void 0 ? void 0 : item.id) === parseInt(categoryId);
      });
      setSelectedCategory(categorySelected);
    }
  }, [categoryList === null || categoryList === void 0 ? void 0 : categoryList.categories]);
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
      return handleOpenSettingDetails('checkout');
    }
  }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
    title: t('CHECKOUT_FIELDS', 'Checkout fields'),
    description: t('CHECKOUT_FIELDS_DESC'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckCircleFill, null),
    active: isOpenSettingDetails === 'checkout'
  })), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
    className: "col-md-4 col-sm-6",
    onClick: function onClick() {
      return handleOpenSettingDetails('address');
    }
  }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
    title: t('ADDRESS_FIELDS', 'Address fields'),
    description: t('ADDRESS_FIELDS_DESC'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAltFill, null),
    active: isOpenSettingDetails === 'address'
  })), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
    className: "col-md-4 col-sm-6",
    onClick: function onClick() {
      setIsOpenDescription(false);
      setIsOpenSettingDetails(null);
      setOpenSitesAuthSettings(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
    title: t('SITES_LOGIN_SIGNUP_SETTINGS', 'Sites Login/Signup Settings'),
    description: t('SITES_LOGIN_SIGNUP_SETTINGS_DESC', 'Advanced sites login/sign up settings'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GearFill, null),
    active: openSitesAuthSettings
  })), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemWrapper, {
    className: "col-md-4 col-sm-6",
    onClick: function onClick() {
      setIsOpenDescription(false);
      setIsOpenSettingDetails(null);
      setOpenMultiCountrySettings(true);
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
  })), !categoryList.loading && ((_categoryList$categor2 = categoryList.categories) === null || _categoryList$categor2 === void 0 ? void 0 : _categoryList$categor2.length) === 0 && settingsType !== 'key_basic' && /*#__PURE__*/_react.default.createElement(_styles2.WrapperNoneConfigs, null, /*#__PURE__*/_react.default.createElement(_styles2.InnerNoneConfigsContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.noOrders,
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
      setMoveDistance(0);
      setOpenSitesAuthSettings(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_SitesAuthSettings.SitesAuthSettings, {
    setMoveDistance: setMoveDistance
  })), openMultiCountrySettings && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    defaultSideBarWidth: 500 + moveDistance,
    moveDistance: moveDistance,
    open: openMultiCountrySettings,
    onClose: function onClose() {
      setMoveDistance(0);
      setOpenMultiCountrySettings(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MultiCountrySettings.MultiCountrySettings, {
    setMoveDistance: setMoveDistance
  })), isOpenSettingDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "setting-details",
    defaultSideBarWidth: 550,
    open: isOpenSettingDetails,
    onClose: function onClose() {
      return setIsOpenSettingDetails(null);
    }
  }, isOpenSettingDetails === 'checkout' && /*#__PURE__*/_react.default.createElement(_CheckoutFieldsSetting.CheckoutFieldsSetting, null), isOpenSettingDetails === 'address' && /*#__PURE__*/_react.default.createElement(_AddressFieldsSetting.AddressFieldsSetting, null), isOpenSettingDetails === 'language' && /*#__PURE__*/_react.default.createElement(_LanguageSetting.LanguageSetting, null)));
};

var Settings = function Settings(props) {
  var settingsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SettingsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Settings, settingsProps);
};

exports.Settings = Settings;