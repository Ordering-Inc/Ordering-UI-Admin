"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancedLayouts = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _LayoutStyleGroup = require("./LayoutStyleGroup");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AdvancedLayouts = exports.AdvancedLayouts = function AdvancedLayouts(props) {
  var _themeValuesRef$curre, _themeValuesRef$curre2, _themeValuesRef$curre3, _themeValuesRef$curre4, _themeValuesRef$curre5, _themeValuesRef$curre6, _themeValuesRef$curre7, _themeValuesRef$curre8, _themeValuesRef$curre9;
  var advancedValues = props.advancedValues,
    handleUpdateSiteTheme = props.handleUpdateSiteTheme,
    isApp = props.isApp,
    themesList = props.themesList;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    themeStructure = _useState4[0],
    setThemeStructure = _useState4[1]; // Don't remove this state
  var themeValuesRef = (0, _react.useRef)({});
  var homeLayoutList = [{
    value: 'original',
    name: 'Original'
  }, {
    value: 'starbucks',
    name: 'Elegant'
  }, {
    value: 'red',
    name: 'Simple'
  }];
  var businessListingLayoutList = [{
    value: 'original',
    name: 'Original'
  }, {
    value: 'appointments',
    name: 'Appointments'
  }, {
    value: 'mapview',
    name: 'MapsView'
  }];
  var businessViewLayoutList = [{
    value: 'original',
    name: 'Original'
  }, {
    value: 'starbucks',
    name: 'Elegant'
  }, {
    value: 'red',
    name: 'Simple'
  }, {
    value: 'old',
    name: '2021'
  }];
  var productFormLayoutList = [{
    value: 'original',
    name: 'Original'
  }, {
    value: 'starbucks',
    name: 'Elegant'
  }];
  var productSearchLayoutList = [{
    value: 'original',
    name: 'Original'
  }, {
    value: 'starbucks',
    name: 'Elegant'
  }, {
    value: 'old',
    name: '2021'
  }];
  var confirmationLayoutList = [{
    value: 'original',
    name: 'Original'
  }, {
    value: 'old',
    name: '2021'
  }];
  var profileLayoutList = [{
    value: 'original',
    name: 'Original'
  }, {
    value: 'old',
    name: '2021'
  }];
  var headerLayoutList = [{
    value: 'original',
    name: 'Original'
  }, {
    value: 'starbucks',
    name: 'Elegant'
  }, {
    value: 'old',
    name: '2021'
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var updateObject = function updateObject(object, newValue, path) {
    var stack = path.split('.');
    while (stack.length > 1) {
      object = object[stack.shift()];
    }
    object[stack.shift()] = newValue;
  };
  var handleUpdateThemeValue = function handleUpdateThemeValue(value, path) {
    var _advancedValues = JSON.parse(JSON.stringify(themeValuesRef.current));
    updateObject(_advancedValues, value, path);
    themeValuesRef.current = _advancedValues;
  };
  (0, _react.useEffect)(function () {
    themeValuesRef.current = JSON.parse(JSON.stringify(advancedValues));
  }, [advancedValues]);
  (0, _react.useEffect)(function () {
    var _themesList$themes;
    // Don't remove this effect
    if (!(themesList !== null && themesList !== void 0 && themesList.loading) && themesList !== null && themesList !== void 0 && (_themesList$themes = themesList.themes) !== null && _themesList$themes !== void 0 && (_themesList$themes = _themesList$themes[0]) !== null && _themesList$themes !== void 0 && _themesList$themes.structure) {
      var _themesList$themes2;
      setThemeStructure(JSON.parse(JSON.stringify(themesList === null || themesList === void 0 || (_themesList$themes2 = themesList.themes) === null || _themesList$themes2 === void 0 || (_themesList$themes2 = _themesList$themes2[0]) === null || _themesList$themes2 === void 0 ? void 0 : _themesList$themes2.structure)));
    }
  }, [themesList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, isApp ? /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_APP_ADVANCED_LAYOUTS', 'Customer App  Advanced Layouts')), /*#__PURE__*/_react.default.createElement("h2", null, t('HOMEPAGE', 'Homepage')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    title: t('HOMEPAGE', 'Homepage'),
    layoutList: homeLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 || (_themeValuesRef$curre = themeValuesRef.current) === null || _themeValuesRef$curre === void 0 || (_themeValuesRef$curre = _themeValuesRef$curre.homepage_view) === null || _themeValuesRef$curre === void 0 || (_themeValuesRef$curre = _themeValuesRef$curre.components) === null || _themeValuesRef$curre === void 0 ? void 0 : _themeValuesRef$curre.layout,
    path: "homepage_view.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))) : /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h1", null, t('WEBSITE_ADVANCED_LAYOUTS', 'Website Advanced Layouts')), /*#__PURE__*/_react.default.createElement(_styles2.HomePageWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('HOMEPAGE', 'Homepage')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    title: t('HOMEPAGE', 'Homepage'),
    layoutList: homeLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 || (_themeValuesRef$curre2 = themeValuesRef.current) === null || _themeValuesRef$curre2 === void 0 || (_themeValuesRef$curre2 = _themeValuesRef$curre2.homepage_view) === null || _themeValuesRef$curre2 === void 0 || (_themeValuesRef$curre2 = _themeValuesRef$curre2.components) === null || _themeValuesRef$curre2 === void 0 ? void 0 : _themeValuesRef$curre2.layout,
    path: "homepage_view.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  })))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_LISTING_VIEW', 'Business Listing view')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: businessListingLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 || (_themeValuesRef$curre3 = themeValuesRef.current) === null || _themeValuesRef$curre3 === void 0 || (_themeValuesRef$curre3 = _themeValuesRef$curre3.business_listing_view) === null || _themeValuesRef$curre3 === void 0 || (_themeValuesRef$curre3 = _themeValuesRef$curre3.components) === null || _themeValuesRef$curre3 === void 0 ? void 0 : _themeValuesRef$curre3.layout,
    path: "business_listing_view.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_VIEW_HEADERS', 'Business View Headers')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: businessViewLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 || (_themeValuesRef$curre4 = themeValuesRef.current) === null || _themeValuesRef$curre4 === void 0 || (_themeValuesRef$curre4 = _themeValuesRef$curre4.business_view) === null || _themeValuesRef$curre4 === void 0 || (_themeValuesRef$curre4 = _themeValuesRef$curre4.components) === null || _themeValuesRef$curre4 === void 0 || (_themeValuesRef$curre4 = _themeValuesRef$curre4.header) === null || _themeValuesRef$curre4 === void 0 || (_themeValuesRef$curre4 = _themeValuesRef$curre4.components) === null || _themeValuesRef$curre4 === void 0 ? void 0 : _themeValuesRef$curre4.layout,
    path: "business_view.components.header.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PRODUCT_LAYOUTS', 'Product Layouts')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: productFormLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 || (_themeValuesRef$curre5 = themeValuesRef.current) === null || _themeValuesRef$curre5 === void 0 || (_themeValuesRef$curre5 = _themeValuesRef$curre5.business_view) === null || _themeValuesRef$curre5 === void 0 || (_themeValuesRef$curre5 = _themeValuesRef$curre5.components) === null || _themeValuesRef$curre5 === void 0 || (_themeValuesRef$curre5 = _themeValuesRef$curre5.products) === null || _themeValuesRef$curre5 === void 0 || (_themeValuesRef$curre5 = _themeValuesRef$curre5.components) === null || _themeValuesRef$curre5 === void 0 ? void 0 : _themeValuesRef$curre5.layout,
    path: "business_view.components.products.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PRODUCTS_SEARCH', 'Products Search')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: productSearchLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 || (_themeValuesRef$curre6 = themeValuesRef.current) === null || _themeValuesRef$curre6 === void 0 || (_themeValuesRef$curre6 = _themeValuesRef$curre6.business_view) === null || _themeValuesRef$curre6 === void 0 || (_themeValuesRef$curre6 = _themeValuesRef$curre6.components) === null || _themeValuesRef$curre6 === void 0 || (_themeValuesRef$curre6 = _themeValuesRef$curre6.product_search) === null || _themeValuesRef$curre6 === void 0 || (_themeValuesRef$curre6 = _themeValuesRef$curre6.components) === null || _themeValuesRef$curre6 === void 0 ? void 0 : _themeValuesRef$curre6.layout,
    path: "business_view.components.product_search.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('CONFIRMATION', 'Confirmation')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: confirmationLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 || (_themeValuesRef$curre7 = themeValuesRef.current) === null || _themeValuesRef$curre7 === void 0 || (_themeValuesRef$curre7 = _themeValuesRef$curre7.confirmation) === null || _themeValuesRef$curre7 === void 0 || (_themeValuesRef$curre7 = _themeValuesRef$curre7.components) === null || _themeValuesRef$curre7 === void 0 ? void 0 : _themeValuesRef$curre7.layout,
    path: "confirmation.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PROFILE', 'Profile')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: profileLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 || (_themeValuesRef$curre8 = themeValuesRef.current) === null || _themeValuesRef$curre8 === void 0 || (_themeValuesRef$curre8 = _themeValuesRef$curre8.profile) === null || _themeValuesRef$curre8 === void 0 || (_themeValuesRef$curre8 = _themeValuesRef$curre8.components) === null || _themeValuesRef$curre8 === void 0 ? void 0 : _themeValuesRef$curre8.layout,
    path: "profile.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), !isApp && /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('HEADER', 'Header')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: headerLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 || (_themeValuesRef$curre9 = themeValuesRef.current) === null || _themeValuesRef$curre9 === void 0 || (_themeValuesRef$curre9 = _themeValuesRef$curre9.header) === null || _themeValuesRef$curre9 === void 0 || (_themeValuesRef$curre9 = _themeValuesRef$curre9.components) === null || _themeValuesRef$curre9 === void 0 ? void 0 : _themeValuesRef$curre9.layout,
    path: "header.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleUpdateSiteTheme(themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current);
    }
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERING', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};