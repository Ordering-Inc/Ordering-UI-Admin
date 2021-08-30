"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductProperties = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Inputs = require("../../styles/Inputs");

var _Checkbox = require("../../styles/Checkbox");

var _styles = require("./styles");

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

var ProductPropertiesUI = function ProductPropertiesUI(props) {
  var productState = props.productState,
      handleClickProperty = props.handleClickProperty;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShowSku = _useState2[0],
      setIsShowSku = _useState2[1];

  var handleClickSku = function handleClickSku(e) {
    if (e.target.checked) {
      setIsShowSku(true);
    } else {
      setIsShowSku(false);
      handleClickProperty('sku', -1);
    }
  };

  (0, _react.useEffect)(function () {
    if (productState !== null && productState !== void 0 && productState.sku && parseInt(productState === null || productState === void 0 ? void 0 : productState.sku) !== -1) {
      setIsShowSku(true);
    } else {
      setIsShowSku(false);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.PropertiesContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PROPERTIES', 'Properties')), /*#__PURE__*/_react.default.createElement(_styles.PropertyOption, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    defaultChecked: productState === null || productState === void 0 ? void 0 : productState.featured,
    onClick: function onClick(e) {
      return handleClickProperty('featured', e.target.checked);
    },
    id: "featured"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "featured"
  }, t('FEATURED', 'Featured'))), /*#__PURE__*/_react.default.createElement(_styles.PropertyOption, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    defaultChecked: productState === null || productState === void 0 ? void 0 : productState.upselling,
    onClick: function onClick(e) {
      return handleClickProperty('upselling', e.target.checked);
    },
    id: "upselling"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "upselling"
  }, t('UPSELLING', 'Upselling'))), /*#__PURE__*/_react.default.createElement(_styles.PropertyOption, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    defaultChecked: productState === null || productState === void 0 ? void 0 : productState.inventoried,
    onClick: function onClick(e) {
      return handleClickProperty('inventoried', e.target.checked);
    },
    id: "inventoried"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "inventoried"
  }, t('INVENTORIED', 'Limit product quantity'))), /*#__PURE__*/_react.default.createElement(_styles.PropertyOption, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    defaultChecked: (productState === null || productState === void 0 ? void 0 : productState.sku) && parseInt(productState === null || productState === void 0 ? void 0 : productState.sku) !== -1,
    onClick: function onClick(e) {
      return handleClickSku(e);
    },
    id: "sku"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "sku"
  }, t('SKU', 'Stock Keeping Unit (SKU)'))), isShowSku && /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "sku",
    placeholder: t('SKU', 'Stock Keeping Unit (SKU)'),
    defaultValue: parseInt(productState === null || productState === void 0 ? void 0 : productState.sku) !== -1 ? productState === null || productState === void 0 ? void 0 : productState.sku : '',
    onChange: function onChange(e) {
      return handleClickProperty('sku', e.target.value);
    }
  }));
};

var ProductProperties = function ProductProperties(props) {
  var productProperties = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductPropertiesUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductProperties, productProperties);
};

exports.ProductProperties = ProductProperties;