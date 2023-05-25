"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AdvancedLayouts = function AdvancedLayouts(props) {
  var _themeValuesRef$curre, _themeValuesRef$curre2, _themeValuesRef$curre3, _themeValuesRef$curre4, _themeValuesRef$curre5, _themeValuesRef$curre6, _themeValuesRef$curre7, _themeValuesRef$curre8, _themeValuesRef$curre9, _themeValuesRef$curre10, _themeValuesRef$curre11, _themeValuesRef$curre12, _themeValuesRef$curre13, _themeValuesRef$curre14, _themeValuesRef$curre15, _themeValuesRef$curre16, _themeValuesRef$curre17, _themeValuesRef$curre18, _themeValuesRef$curre19, _themeValuesRef$curre20, _themeValuesRef$curre21, _themeValuesRef$curre22, _themeValuesRef$curre23, _themeValuesRef$curre24, _themeValuesRef$curre25, _themeValuesRef$curre26, _themeValuesRef$curre27, _themeValuesRef$curre28, _themeValuesRef$curre29, _themeValuesRef$curre30, _themeValuesRef$curre31, _themeValuesRef$curre32, _themeValuesRef$curre33;
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
  }, {
    value: 'chew',
    name: 'Great'
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
    var _themesList$themes, _themesList$themes$;
    // Don't remove this effect
    if (!(themesList !== null && themesList !== void 0 && themesList.loading) && themesList !== null && themesList !== void 0 && (_themesList$themes = themesList.themes) !== null && _themesList$themes !== void 0 && (_themesList$themes$ = _themesList$themes[0]) !== null && _themesList$themes$ !== void 0 && _themesList$themes$.structure) {
      var _themesList$themes2, _themesList$themes2$;
      setThemeStructure(JSON.parse(JSON.stringify(themesList === null || themesList === void 0 ? void 0 : (_themesList$themes2 = themesList.themes) === null || _themesList$themes2 === void 0 ? void 0 : (_themesList$themes2$ = _themesList$themes2[0]) === null || _themesList$themes2$ === void 0 ? void 0 : _themesList$themes2$.structure)));
    }
  }, [themesList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, isApp ? /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_APP_ADVANCED_LAYOUTS', 'Customer App  Advanced Layouts')), /*#__PURE__*/_react.default.createElement("h2", null, t('HOMEPAGE', 'Homepage')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    title: t('HOMEPAGE', 'Homepage'),
    layoutList: homeLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre = themeValuesRef.current) === null || _themeValuesRef$curre === void 0 ? void 0 : (_themeValuesRef$curre2 = _themeValuesRef$curre.homepage_view) === null || _themeValuesRef$curre2 === void 0 ? void 0 : (_themeValuesRef$curre3 = _themeValuesRef$curre2.components) === null || _themeValuesRef$curre3 === void 0 ? void 0 : _themeValuesRef$curre3.layout,
    path: "homepage_view.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))) : /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h1", null, t('WEBSITE_ADVANCED_LAYOUTS', 'Website Advanced Layouts')), /*#__PURE__*/_react.default.createElement(_styles2.HomePageWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('HOMEPAGE', 'Homepage')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    title: t('HOMEPAGE', 'Homepage'),
    layoutList: homeLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre4 = themeValuesRef.current) === null || _themeValuesRef$curre4 === void 0 ? void 0 : (_themeValuesRef$curre5 = _themeValuesRef$curre4.homepage_view) === null || _themeValuesRef$curre5 === void 0 ? void 0 : (_themeValuesRef$curre6 = _themeValuesRef$curre5.components) === null || _themeValuesRef$curre6 === void 0 ? void 0 : _themeValuesRef$curre6.layout,
    path: "homepage_view.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  })))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_LISTING_VIEW', 'Business Listing view')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: businessListingLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre7 = themeValuesRef.current) === null || _themeValuesRef$curre7 === void 0 ? void 0 : (_themeValuesRef$curre8 = _themeValuesRef$curre7.business_listing_view) === null || _themeValuesRef$curre8 === void 0 ? void 0 : (_themeValuesRef$curre9 = _themeValuesRef$curre8.components) === null || _themeValuesRef$curre9 === void 0 ? void 0 : _themeValuesRef$curre9.layout,
    path: "business_listing_view.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_VIEW_HEADERS', 'Business View Headers')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: businessViewLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre10 = themeValuesRef.current) === null || _themeValuesRef$curre10 === void 0 ? void 0 : (_themeValuesRef$curre11 = _themeValuesRef$curre10.business_view) === null || _themeValuesRef$curre11 === void 0 ? void 0 : (_themeValuesRef$curre12 = _themeValuesRef$curre11.components) === null || _themeValuesRef$curre12 === void 0 ? void 0 : (_themeValuesRef$curre13 = _themeValuesRef$curre12.header) === null || _themeValuesRef$curre13 === void 0 ? void 0 : (_themeValuesRef$curre14 = _themeValuesRef$curre13.components) === null || _themeValuesRef$curre14 === void 0 ? void 0 : _themeValuesRef$curre14.layout,
    path: "business_view.components.header.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PRODUCT_LAYOUTS', 'Product Layouts')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: productFormLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre15 = themeValuesRef.current) === null || _themeValuesRef$curre15 === void 0 ? void 0 : (_themeValuesRef$curre16 = _themeValuesRef$curre15.business_view) === null || _themeValuesRef$curre16 === void 0 ? void 0 : (_themeValuesRef$curre17 = _themeValuesRef$curre16.components) === null || _themeValuesRef$curre17 === void 0 ? void 0 : (_themeValuesRef$curre18 = _themeValuesRef$curre17.products) === null || _themeValuesRef$curre18 === void 0 ? void 0 : (_themeValuesRef$curre19 = _themeValuesRef$curre18.components) === null || _themeValuesRef$curre19 === void 0 ? void 0 : _themeValuesRef$curre19.layout,
    path: "business_view.components.products.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PRODUCTS_SEARCH', 'Products Search')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: productSearchLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre20 = themeValuesRef.current) === null || _themeValuesRef$curre20 === void 0 ? void 0 : (_themeValuesRef$curre21 = _themeValuesRef$curre20.business_view) === null || _themeValuesRef$curre21 === void 0 ? void 0 : (_themeValuesRef$curre22 = _themeValuesRef$curre21.components) === null || _themeValuesRef$curre22 === void 0 ? void 0 : (_themeValuesRef$curre23 = _themeValuesRef$curre22.product_search) === null || _themeValuesRef$curre23 === void 0 ? void 0 : (_themeValuesRef$curre24 = _themeValuesRef$curre23.components) === null || _themeValuesRef$curre24 === void 0 ? void 0 : _themeValuesRef$curre24.layout,
    path: "business_view.components.product_search.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('CONFIRMATION', 'Confirmation')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: confirmationLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre25 = themeValuesRef.current) === null || _themeValuesRef$curre25 === void 0 ? void 0 : (_themeValuesRef$curre26 = _themeValuesRef$curre25.confirmation) === null || _themeValuesRef$curre26 === void 0 ? void 0 : (_themeValuesRef$curre27 = _themeValuesRef$curre26.components) === null || _themeValuesRef$curre27 === void 0 ? void 0 : _themeValuesRef$curre27.layout,
    path: "confirmation.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PROFILE', 'Profile')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: profileLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre28 = themeValuesRef.current) === null || _themeValuesRef$curre28 === void 0 ? void 0 : (_themeValuesRef$curre29 = _themeValuesRef$curre28.profile) === null || _themeValuesRef$curre29 === void 0 ? void 0 : (_themeValuesRef$curre30 = _themeValuesRef$curre29.components) === null || _themeValuesRef$curre30 === void 0 ? void 0 : _themeValuesRef$curre30.layout,
    path: "profile.components.layout",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), !isApp && /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('HEADER', 'Header')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_LayoutStyleGroup.LayoutStyleGroup, {
    layoutList: headerLayoutList,
    layouts: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre31 = themeValuesRef.current) === null || _themeValuesRef$curre31 === void 0 ? void 0 : (_themeValuesRef$curre32 = _themeValuesRef$curre31.header) === null || _themeValuesRef$curre32 === void 0 ? void 0 : (_themeValuesRef$curre33 = _themeValuesRef$curre32.components) === null || _themeValuesRef$curre33 === void 0 ? void 0 : _themeValuesRef$curre33.layout,
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
exports.AdvancedLayouts = AdvancedLayouts;