"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerApp = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _AdvancedSettings = require("../AdvancedSettings");
var _styles = require("../AdvancedSettings/styles");
var _AppResources = require("../AppResources");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _AppLayout = require("../AppLayout");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CustomerAppUI = function CustomerAppUI(props) {
  var themesList = props.themesList,
    orderingTheme = props.orderingTheme,
    advancedValues = props.advancedValues,
    setAdvancedValues = props.setAdvancedValues,
    handleUpdateSiteTheme = props.handleUpdateSiteTheme;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)('advanced'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedSetting = _useState2[0],
    setSelectedSetting = _useState2[1];
  var settingsList = [{
    key: 'advanced',
    name: t('ADVANCED_SETTINGS', 'Advanced Settings')
  }, {
    key: 'app_resources',
    name: t('APP_RESOURCES', 'App Resources')
  }];
  var appInfo = {
    title: t('CUSTOMER_APP', 'Customer App'),
    description: t('CUSTOMER_APP_DESCRIPTION', 'Give your business owners or managers a tool to manage their whole business\'s incoming orders on the go by installing this app on any mobile device they have.'),
    images: {
      live: theme.images.myProducts.multiStoreCustomerApp,
      brand: theme.images.myProducts.singleStoreCustomerApp
    },
    live_title: t('MULTI-STORE-CUSTOMER-APP', 'Multi-store Customer App'),
    live_description: t('MULTI_STORE_CUSTOMER_APP_DESCRIPTION', 'This is a branded Ordering.co product. use it with your project, email, and password for free. features might be limited.'),
    demo_book_message: 'I would like to book a Demo for the customer app , can you assist me?',
    brand_title: t('SINGLE_STORE_CUSTOMER_APP', 'Single Store Customer App'),
    brand_description: t('SINGLE_STORE_CUSTOMER_APP_DESCRIPTION', 'This App is delivered in less than five working days, fully branded with your guidelines, removing all ordering.co presence to give your brand more awareness.'),
    purchase_message: 'I would like to know about the customer app, can you assist me?',
    downloads: [{
      id: 1,
      icon: theme.images.myProducts.appStoreSmall,
      link: 'https://apps.apple.com/us/app/customer-app-2-0/id1607414555'
    }, {
      id: 2,
      icon: theme.images.myProducts.playStoreSmall,
      link: 'https://play.google.com/store/apps/details?id=com.ordering.onlineorderingappv5&hl=en&gl=US'
    }],
    purchase_link: 'https://buy.stripe.com/5kA4in4Fp86Kg9yfZN',
    demo_link: 'https://www.ordering.co/platform-demo-and-pricing'
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_AppLayout.AppLayout, {
    appInfo: appInfo
  }, /*#__PURE__*/_react.default.createElement(_styles2.SettingsContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('MORE_SETTINGS_FOR_YOUR', 'More settings for your'), " ", /*#__PURE__*/_react.default.createElement("span", null, t('CUSTOMER_APP', 'Customer App'))), /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOMER_APP_SETTING_DESC', 'Change background, colors, fonts, style, branding and all the essentials of your brand.')), /*#__PURE__*/_react.default.createElement(_styles2.TabWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.Tabs, null, settingsList.map(function (setting) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: setting.key,
      active: selectedSetting === setting.key,
      onClick: function onClick() {
        return !(orderingTheme !== null && orderingTheme !== void 0 && orderingTheme.loading) && setSelectedSetting(setting.key);
      }
    }, setting.name);
  }))), (orderingTheme === null || orderingTheme === void 0 ? void 0 : orderingTheme.loading) && /*#__PURE__*/_react.default.createElement(_styles.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25,
    width: 200
  })), /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25,
    width: 150
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 160,
    height: 160
  })), selectedSetting === 'advanced' && !(orderingTheme !== null && orderingTheme !== void 0 && orderingTheme.loading) && /*#__PURE__*/_react.default.createElement(_AdvancedSettings.AdvancedSettings, {
    isApp: true,
    themesList: themesList,
    advancedValues: advancedValues,
    setAdvancedValues: setAdvancedValues,
    handleUpdateSiteTheme: handleUpdateSiteTheme
  }), selectedSetting === 'app_resources' && !(orderingTheme !== null && orderingTheme !== void 0 && orderingTheme.loading) && /*#__PURE__*/_react.default.createElement(_AppResources.AppResources, {
    advancedValues: advancedValues,
    setAdvancedValues: setAdvancedValues,
    handleUpdateSiteTheme: handleUpdateSiteTheme
  }))));
};
var CustomerApp = exports.CustomerApp = function CustomerApp(props) {
  var customerAppProps = _objectSpread(_objectSpread({}, props), {}, {
    appId: 'react-native-app',
    UIComponent: CustomerAppUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrderingWebsite, customerAppProps);
};