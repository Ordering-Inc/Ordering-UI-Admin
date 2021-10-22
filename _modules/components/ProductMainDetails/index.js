"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductMainDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Switch = require("../../styles/Switch");

var _ProductDetatilsEditForm = require("../ProductDetatilsEditForm");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductMainDetailsUI = function ProductMainDetailsUI(props) {
  var _productState$product, _productState$product2, _productState$product3, _productState$product4, _productState$product5;

  var actionSidebar = props.actionSidebar,
      showOption = props.showOption,
      handleShowOption = props.handleShowOption,
      handleChangeProductActiveState = props.handleChangeProductActiveState,
      productState = props.productState,
      formState = props.formState,
      handlechangeImage = props.handlechangeImage,
      handleChangeInput = props.handleChangeInput,
      handleUpdateClick = props.handleUpdateClick;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      optimizeImage = _useUtils2$.optimizeImage,
      parsePrice = _useUtils2$.parsePrice;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditMode = _useState2[0],
      setIsEditMode = _useState2[1];

  var configsOptions = [{
    key: 'properties',
    value: t('PROPERTIES', 'Properties')
  }, {
    key: 'ingredients',
    value: t('INGREDIENTS', 'Ingredients')
  }, {
    key: 'product_extras',
    value: t('PRODUCT_EXTRAS', 'Product extras')
  }, {
    key: 'product_images',
    value: t('PRODUCT_IMAGES', 'Product images')
  }, {
    key: 'custom_fields',
    value: t('CUSTOM_FIELDS', 'Custom fields')
  }, {
    key: 'personalization',
    value: t('PERSONALIZATION', 'Personalization')
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ProductDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_styles.ProductName, null, productState === null || productState === void 0 ? void 0 : (_productState$product = productState.product) === null || _productState$product === void 0 ? void 0 : _productState$product.name), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: (productState === null || productState === void 0 ? void 0 : (_productState$product2 = productState.product) === null || _productState$product2 === void 0 ? void 0 : _productState$product2.enabled) || false,
    onChange: handleChangeProductActiveState
  })), /*#__PURE__*/_react.default.createElement(_styles.RightHeader, null, /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return isEditMode ? setIsEditMode(false) : actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), !isEditMode ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ProductImage, {
    bgimage: optimizeImage(productState === null || productState === void 0 ? void 0 : (_productState$product3 = productState.product) === null || _productState$product3 === void 0 ? void 0 : _productState$product3.images, 'h_400,c_limit')
  }), /*#__PURE__*/_react.default.createElement(_styles.ProductDetailsContent, null, /*#__PURE__*/_react.default.createElement(_styles.ProductPrice, null, parsePrice(productState === null || productState === void 0 ? void 0 : (_productState$product4 = productState.product) === null || _productState$product4 === void 0 ? void 0 : _productState$product4.price)), /*#__PURE__*/_react.default.createElement(_styles.ProductDescription, null, productState === null || productState === void 0 ? void 0 : (_productState$product5 = productState.product) === null || _productState$product5 === void 0 ? void 0 : _productState$product5.description), /*#__PURE__*/_react.default.createElement(_styles.ProductConfigsContainer, null, configsOptions.map(function (config) {
    return /*#__PURE__*/_react.default.createElement(_styles.ProductConfigOption, {
      key: config.key,
      active: showOption === config.key,
      onClick: function onClick() {
        return handleShowOption(config.key);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, config.value), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, null));
  }))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundaryDark",
    borderRadius: "7.6px",
    onClick: function onClick() {
      return setIsEditMode(true);
    }
  }, t('EDIT', 'Edit'))) : /*#__PURE__*/_react.default.createElement(_ProductDetatilsEditForm.ProductDetatilsEditForm, {
    onCancel: function onCancel() {
      return setIsEditMode(false);
    },
    product: productState === null || productState === void 0 ? void 0 : productState.product,
    formState: formState,
    handlechangeImage: handlechangeImage,
    handleChangeInput: handleChangeInput,
    handleButtonUpdateClick: handleUpdateClick
  })));
};

var ProductMainDetails = function ProductMainDetails(props) {
  var productDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductMainDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductDetatils, productDetailsProps);
};

exports.ProductMainDetails = ProductMainDetails;