"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingWebsite = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _ContentForm = require("../ContentForm");
var _utils = require("../../../utils");
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
var OrderingWebsiteUI = function OrderingWebsiteUI(props) {
  var _themeValues$website_10, _themeValues$website_11, _themeValues$website_12, _themeValues$website_13, _themeValues$website_14, _themeValues$website_15, _themesList$result$, _themesList$result$$v, _themesList$result$$v2, _themesList$result$$v3, _themesList$result$$v4, _themesList$result$$v5, _themesList$result$$v6, _themeValues$website_16, _themeValues$website_17, _themeValues$website_18, _themeValues$website_19, _themeValues$website_20, _themeValues$website_21, _themeValues$images, _themeValues$images$c, _themeValues$images$c2, _themeValues$images$c3, _themeValues$images2, _themeValues$images2$, _themeValues$images2$2, _themeValues$images2$3, _themeValues$images3, _themeValues$images3$, _themeValues$images3$2, _themeValues$images3$3, _themeValues$images4, _themeValues$images4$, _themeValues$images4$2, _themeValues$images4$3, _themeValues$images6, _themeValues$images6$, _themeValues$theme_se, _themeValues$theme_se2, _themeValues$theme_se3, _themeValues$theme_se4, _themeValues$theme_se5, _themeValues$theme_se6, _themeValues$theme_se7, _themeValues$theme_se8, _themeValues$theme_se9, _themeValues$theme_se10, _themeValues$theme_se11, _themeValues$theme_se12;
  var themeValues = props.themeValues,
    themesList = props.themesList,
    setThemeValues = props.setThemeValues,
    handleUpdateTheme = props.handleUpdateTheme;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var theme = (0, _styledComponents.useTheme)();
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var logoRef = (0, _react.useRef)(null);
  var backgrooundRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      name: null,
      data: null,
      open: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    cropState = _useState4[0],
    setCropState = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    homePageContent = _useState6[0],
    setHomePageContent = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    footerContent = _useState8[0],
    setFooterContent = _useState8[1];
  var handleClickImage = function handleClickImage(type) {
    if (type === 'logo') {
      logoRef.current.click();
    }
    if (type === 'homepage_background') {
      backgrooundRef.current.click();
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeValue(croppedImg, 'images', "".concat(cropState === null || cropState === void 0 ? void 0 : cropState.name, ".components.image"));
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  var handleFiles = function handleFiles(files, name) {
    if (files.length === 1) {
      var _files$;
      var type = files[0].type.split('/')[0];
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        });
        return;
      }
      if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        });
        return;
      }
      var reader = new window.FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function () {
        setCropState({
          name: name,
          data: reader.result,
          open: true
        });
      };
      reader.onerror = function (error) {
        return console.log(error);
      };
    }
  };
  var updateObject = function updateObject(object, newValue, path) {
    var stack = path.split('.');
    while (stack.length > 1) {
      object = object[stack.shift()];
    }
    object[stack.shift()] = newValue;
  };
  var handleChangeValue = function handleChangeValue(value, section, block) {
    var _themeValues = JSON.parse(JSON.stringify(themeValues));
    var path = [section, 'components', block].join('.');
    updateObject(_themeValues, value, path);
    setThemeValues(_themeValues);
  };
  var handleChangeSiteSettings = function handleChangeSiteSettings(e) {
    var value = e.target.value;
    if (e.target.name === 'default_domain') value = "https://".concat(e.target.value, ".tryordering.com");
    handleChangeValue(value, 'website_settings', "values.".concat(e.target.name));
  };
  var handleChangeContent = function handleChangeContent(type, content) {
    handleChangeValue(content, 'theme_settings', "values.".concat(type));
  };
  var convertValues = function convertValues(value) {
    return value ? value.replace('https://', '').replace('.tryordering.com', '') : '';
  };
  var handleUpdate = function handleUpdate() {
    var _themeValues$website_, _themeValues$website_2, _themeValues$website_3, _themeValues$website_4, _themeValues$website_5, _themeValues$website_6, _themeValues$website_7, _themeValues$website_8, _themeValues$website_9;
    var patternForURL = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
    if (!(themeValues !== null && themeValues !== void 0 && (_themeValues$website_ = themeValues.website_settings) !== null && _themeValues$website_ !== void 0 && (_themeValues$website_2 = _themeValues$website_.components) !== null && _themeValues$website_2 !== void 0 && (_themeValues$website_3 = _themeValues$website_2.values) !== null && _themeValues$website_3 !== void 0 && _themeValues$website_3.default_domain.includes(ordering.project))) {
      setAlertState({
        open: true,
        content: [t('DEFAULT_DOMAIN_NOT_CORRECT', 'Default domain url is not correct')]
      });
      return;
    }
    if (themeValues !== null && themeValues !== void 0 && (_themeValues$website_4 = themeValues.website_settings) !== null && _themeValues$website_4 !== void 0 && (_themeValues$website_5 = _themeValues$website_4.components) !== null && _themeValues$website_5 !== void 0 && (_themeValues$website_6 = _themeValues$website_5.values) !== null && _themeValues$website_6 !== void 0 && _themeValues$website_6.custom_domain && !patternForURL.test(themeValues === null || themeValues === void 0 ? void 0 : (_themeValues$website_7 = themeValues.website_settings) === null || _themeValues$website_7 === void 0 ? void 0 : (_themeValues$website_8 = _themeValues$website_7.components) === null || _themeValues$website_8 === void 0 ? void 0 : (_themeValues$website_9 = _themeValues$website_8.values) === null || _themeValues$website_9 === void 0 ? void 0 : _themeValues$website_9.custom_domain)) {
      setAlertState({
        open: true,
        content: [t('CUSTOM_DOMAIN_URL_FORMAT_NOT_CORRECT', 'Custom domain url format is not correct')]
      });
      return;
    }
    handleUpdateTheme();
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('MY_PRODUCTS', 'My products'))), /*#__PURE__*/_react.default.createElement(_styles2.WebsiteWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDERING_WEBSITE', 'Ordering website')), /*#__PURE__*/_react.default.createElement("p", null, t('ORDERING_WEBSITE_DESC', 'This product is included in your project by default.'))), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.myProducts.orderingWebsite,
    alt: "ordering-website"
  })), /*#__PURE__*/_react.default.createElement(_styles2.MoreSettingsHeader, null, /*#__PURE__*/_react.default.createElement("h2", null, t('MORE_SETTINGS_FOR_YOUR', 'More settings for your'), " ", /*#__PURE__*/_react.default.createElement("span", null, t('WEBSITE_ORIGINAL', 'website'))), /*#__PURE__*/_react.default.createElement("p", null, t('MORE_SETTINGS_YOUR_WEBSITE_DESC', 'Change background, colors, fonts, style, branding and all the essentials of your brand.'))), /*#__PURE__*/_react.default.createElement(_styles2.FormWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.InputFormWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.InnerBlock, null, /*#__PURE__*/_react.default.createElement("h4", null, t('WEBSITE_SETTINGS', 'Website settings')), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    placeholder: t('SOURCE_DEMO_WEBSITE', 'Source demo website'),
    value: (themeValues === null || themeValues === void 0 ? void 0 : (_themeValues$website_10 = themeValues.website_settings) === null || _themeValues$website_10 === void 0 ? void 0 : (_themeValues$website_11 = _themeValues$website_10.components) === null || _themeValues$website_11 === void 0 ? void 0 : (_themeValues$website_12 = _themeValues$website_11.values) === null || _themeValues$website_12 === void 0 ? void 0 : _themeValues$website_12.name) || '',
    onChange: handleChangeSiteSettings
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('DESCRIPTION', 'Decription')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "description",
    placeholder: t('DESCRIPTION', 'Decription'),
    value: (themeValues === null || themeValues === void 0 ? void 0 : (_themeValues$website_13 = themeValues.website_settings) === null || _themeValues$website_13 === void 0 ? void 0 : (_themeValues$website_14 = _themeValues$website_13.components) === null || _themeValues$website_14 === void 0 ? void 0 : (_themeValues$website_15 = _themeValues$website_14.values) === null || _themeValues$website_15 === void 0 ? void 0 : _themeValues$website_15.description) || '',
    onChange: handleChangeSiteSettings
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('TEMPORAL_DOMAIN', 'Temporal domain')), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "before"
  }, "https://"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "default_domain",
    placeholder: t('NAME', 'Name'),
    disabled: !!(themesList !== null && themesList !== void 0 && (_themesList$result$ = themesList.result[0]) !== null && _themesList$result$ !== void 0 && (_themesList$result$$v = _themesList$result$.values_default) !== null && _themesList$result$$v !== void 0 && (_themesList$result$$v2 = _themesList$result$$v.my_products) !== null && _themesList$result$$v2 !== void 0 && (_themesList$result$$v3 = _themesList$result$$v2.components) !== null && _themesList$result$$v3 !== void 0 && (_themesList$result$$v4 = _themesList$result$$v3.website_settings) !== null && _themesList$result$$v4 !== void 0 && (_themesList$result$$v5 = _themesList$result$$v4.components) !== null && _themesList$result$$v5 !== void 0 && (_themesList$result$$v6 = _themesList$result$$v5.values) !== null && _themesList$result$$v6 !== void 0 && _themesList$result$$v6.default_domain),
    value: convertValues(themeValues === null || themeValues === void 0 ? void 0 : (_themeValues$website_16 = themeValues.website_settings) === null || _themeValues$website_16 === void 0 ? void 0 : (_themeValues$website_17 = _themeValues$website_16.components) === null || _themeValues$website_17 === void 0 ? void 0 : (_themeValues$website_18 = _themeValues$website_17.values) === null || _themeValues$website_18 === void 0 ? void 0 : _themeValues$website_18.default_domain),
    onChange: handleChangeSiteSettings
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "after"
  }, ".tryordering.com"))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('CUSTOM_DOMAIN', 'Custom domain')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "mybusiness.com",
    name: "custom_domain",
    className: "custom-domain",
    value: (themeValues === null || themeValues === void 0 ? void 0 : (_themeValues$website_19 = themeValues.website_settings) === null || _themeValues$website_19 === void 0 ? void 0 : (_themeValues$website_20 = _themeValues$website_19.components) === null || _themeValues$website_20 === void 0 ? void 0 : (_themeValues$website_21 = _themeValues$website_20.values) === null || _themeValues$website_21 === void 0 ? void 0 : _themeValues$website_21.custom_domain) || '',
    onChange: handleChangeSiteSettings
  })))), /*#__PURE__*/_react.default.createElement(_styles2.InputFormWrapper, null, /*#__PURE__*/_react.default.createElement("h4", null, t('IMAGES', 'Images')), /*#__PURE__*/_react.default.createElement(_styles2.InnerBlock, null, /*#__PURE__*/_react.default.createElement(_styles2.ImageFormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.LogoImage, {
    onClick: function onClick() {
      return handleClickImage('logo');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'logo');
    },
    childRef: function childRef(e) {
      logoRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg"
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'logo');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: themesList.loading
  }, themeValues !== null && themeValues !== void 0 && (_themeValues$images = themeValues.images) !== null && _themeValues$images !== void 0 && (_themeValues$images$c = _themeValues$images.components) !== null && _themeValues$images$c !== void 0 && (_themeValues$images$c2 = _themeValues$images$c.logo) !== null && _themeValues$images$c2 !== void 0 && (_themeValues$images$c3 = _themeValues$images$c2.components) !== null && _themeValues$images$c3 !== void 0 && _themeValues$images$c3.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: themeValues === null || themeValues === void 0 ? void 0 : (_themeValues$images2 = themeValues.images) === null || _themeValues$images2 === void 0 ? void 0 : (_themeValues$images2$ = _themeValues$images2.components) === null || _themeValues$images2$ === void 0 ? void 0 : (_themeValues$images2$2 = _themeValues$images2$.logo) === null || _themeValues$images2$2 === void 0 ? void 0 : (_themeValues$images2$3 = _themeValues$images2$2.components) === null || _themeValues$images2$3 === void 0 ? void 0 : _themeValues$images2$3.image,
    alt: "logo image",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop'))))))), /*#__PURE__*/_react.default.createElement(_styles2.ImgInfoWrapper, null, /*#__PURE__*/_react.default.createElement("h4", null, t('HEADER_LOGO', 'Header logo')), /*#__PURE__*/_react.default.createElement("p", null, "900 x 200 px"), /*#__PURE__*/_react.default.createElement("p", null, t('FORMAT', 'Format'), ": PNG"))), /*#__PURE__*/_react.default.createElement(_styles2.ImageFormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.BackgroundImage, {
    onClick: function onClick() {
      return handleClickImage('homepage_background');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'homepage_background');
    },
    childRef: function childRef(e) {
      backgrooundRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg"
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'homepage_background');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: themesList.loading
  }, themeValues !== null && themeValues !== void 0 && (_themeValues$images3 = themeValues.images) !== null && _themeValues$images3 !== void 0 && (_themeValues$images3$ = _themeValues$images3.components) !== null && _themeValues$images3$ !== void 0 && (_themeValues$images3$2 = _themeValues$images3$.homepage_background) !== null && _themeValues$images3$2 !== void 0 && (_themeValues$images3$3 = _themeValues$images3$2.components) !== null && _themeValues$images3$3 !== void 0 && _themeValues$images3$3.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: themeValues === null || themeValues === void 0 ? void 0 : (_themeValues$images4 = themeValues.images) === null || _themeValues$images4 === void 0 ? void 0 : (_themeValues$images4$ = _themeValues$images4.components) === null || _themeValues$images4$ === void 0 ? void 0 : (_themeValues$images4$2 = _themeValues$images4$.homepage_background) === null || _themeValues$images4$2 === void 0 ? void 0 : (_themeValues$images4$3 = _themeValues$images4$2.components) === null || _themeValues$images4$3 === void 0 ? void 0 : _themeValues$images4$3.image,
    alt: "backgrond image",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop'))))))), /*#__PURE__*/_react.default.createElement(_styles2.ImgInfoWrapper, null, /*#__PURE__*/_react.default.createElement("h4", null, t('HOMEPAGE_BACKGROUND', 'Homepage background')), /*#__PURE__*/_react.default.createElement("p", null, "1920 x 1280 px"), /*#__PURE__*/_react.default.createElement("p", null, t('FORMAT', 'Format'), ": PNG"))), /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    onClick: function onClick() {
      var _themeValues$images5, _themeValues$images5$;
      return handleChangeValue(!(themeValues !== null && themeValues !== void 0 && (_themeValues$images5 = themeValues.images) !== null && _themeValues$images5 !== void 0 && (_themeValues$images5$ = _themeValues$images5.components) !== null && _themeValues$images5$ !== void 0 && _themeValues$images5$.homepage_image_fullscreen), 'images', 'homepage_image_fullscreen');
    }
  }, themeValues !== null && themeValues !== void 0 && (_themeValues$images6 = themeValues.images) !== null && _themeValues$images6 !== void 0 && (_themeValues$images6$ = _themeValues$images6.components) !== null && _themeValues$images6$ !== void 0 && _themeValues$images6$.homepage_image_fullscreen ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null), /*#__PURE__*/_react.default.createElement("span", null, t('HOMEPAGE_IMAGE_FULLSCREEN', 'Homepage  image fullscreen'))))), /*#__PURE__*/_react.default.createElement(_styles2.InputFormWrapper, null, /*#__PURE__*/_react.default.createElement("h4", null, t('THEME_SETTINGS', 'Theme Settings')), /*#__PURE__*/_react.default.createElement(_styles2.InnerBlock, null, /*#__PURE__*/_react.default.createElement(_styles2.ColorPickerWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('PRIMARY_COLOR_BUTTONS', 'Primary Color for Buttons')), /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
    defaultColor: themeValues === null || themeValues === void 0 ? void 0 : (_themeValues$theme_se = themeValues.theme_settings) === null || _themeValues$theme_se === void 0 ? void 0 : (_themeValues$theme_se2 = _themeValues$theme_se.components) === null || _themeValues$theme_se2 === void 0 ? void 0 : (_themeValues$theme_se3 = _themeValues$theme_se2.style) === null || _themeValues$theme_se3 === void 0 ? void 0 : _themeValues$theme_se3.primary_btn_color,
    onChangeColor: function onChangeColor(color) {
      return handleChangeValue(color, 'theme_settings', 'style.primary_btn_color');
    }
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('PRIMARY_COLOR_LINKS', 'Primary Color for Links')), /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
    defaultColor: themeValues === null || themeValues === void 0 ? void 0 : (_themeValues$theme_se4 = themeValues.theme_settings) === null || _themeValues$theme_se4 === void 0 ? void 0 : (_themeValues$theme_se5 = _themeValues$theme_se4.components) === null || _themeValues$theme_se5 === void 0 ? void 0 : (_themeValues$theme_se6 = _themeValues$theme_se5.style) === null || _themeValues$theme_se6 === void 0 ? void 0 : _themeValues$theme_se6.primary_link_color,
    onChangeColor: function onChangeColor(color) {
      return handleChangeValue(color, 'theme_settings', 'style.primary_link_color');
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ContentWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('HOMEPAGE_CONTENT', 'Homepage Content')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    outline: true,
    onClick: function onClick() {
      return setHomePageContent(true);
    }
  }, t('HOMEPAGE_CONTENT', 'Homepage content'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('FOOTER_CONTENT', 'Footer Content')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    outline: true,
    onClick: function onClick() {
      return setFooterContent(true);
    }
  }, t('FOOTER_CONTENT', 'Footer content')))))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: handleUpdate
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('BUSINESS', 'Business'),
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    title: t('IMAGE_CROP', 'Image crop'),
    open: cropState === null || cropState === void 0 ? void 0 : cropState.open,
    onClose: function onClose() {
      return setCropState(_objectSpread(_objectSpread({}, cropState), {}, {
        open: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.ImageCrop, {
    photo: cropState === null || cropState === void 0 ? void 0 : cropState.data,
    handleChangePhoto: handleChangePhoto
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    open: homePageContent,
    onClose: function onClose() {
      return setHomePageContent(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ContentForm.ContentForm, {
    title: t('HOME_PAGE_CONTENT', 'Home Page Content'),
    content: themeValues === null || themeValues === void 0 ? void 0 : (_themeValues$theme_se7 = themeValues.theme_settings) === null || _themeValues$theme_se7 === void 0 ? void 0 : (_themeValues$theme_se8 = _themeValues$theme_se7.components) === null || _themeValues$theme_se8 === void 0 ? void 0 : (_themeValues$theme_se9 = _themeValues$theme_se8.values) === null || _themeValues$theme_se9 === void 0 ? void 0 : _themeValues$theme_se9.homepage_content,
    onClose: function onClose() {
      return setHomePageContent(false);
    },
    handleChangeContent: handleChangeContent,
    type: "homepage_content"
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    open: footerContent,
    onClose: function onClose() {
      return setFooterContent(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ContentForm.ContentForm, {
    title: t('FOOTER', 'Footer'),
    content: themeValues === null || themeValues === void 0 ? void 0 : (_themeValues$theme_se10 = themeValues.theme_settings) === null || _themeValues$theme_se10 === void 0 ? void 0 : (_themeValues$theme_se11 = _themeValues$theme_se10.components) === null || _themeValues$theme_se11 === void 0 ? void 0 : (_themeValues$theme_se12 = _themeValues$theme_se11.values) === null || _themeValues$theme_se12 === void 0 ? void 0 : _themeValues$theme_se12.footer_content,
    onClose: function onClose() {
      return setFooterContent(false);
    },
    handleChangeContent: handleChangeContent,
    type: "footer_content"
  })));
};
var OrderingWebsite = function OrderingWebsite(props) {
  var orderingWebsiteProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderingWebsiteUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrderingWebsite, orderingWebsiteProps);
};
exports.OrderingWebsite = OrderingWebsite;