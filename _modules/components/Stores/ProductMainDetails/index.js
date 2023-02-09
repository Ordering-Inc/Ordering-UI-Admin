"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductMainDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _SeoOptions = require("../SeoOptions");
var _ProductDetatilsInformation = require("../ProductDetatilsInformation");
var _ProductDetailsAdvanced = require("../ProductDetailsAdvanced");
var _ProductTagsList = require("../ProductTagsList");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductMainDetails = function ProductMainDetails(props) {
  var product = props.product,
    formState = props.formState,
    handlechangeImage = props.handlechangeImage,
    handleChangeInput = props.handleChangeInput,
    handleChangeFormState = props.handleChangeFormState,
    handleChangeRibbon = props.handleChangeRibbon,
    handleUpdateClick = props.handleUpdateClick,
    isExtendExtraOpen = props.isExtendExtraOpen,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    business = props.business,
    handleSuccessUpdate = props.handleSuccessUpdate,
    setFormTaxState = props.setFormTaxState,
    formTaxState = props.formTaxState,
    taxes = props.taxes,
    setTaxes = props.setTaxes,
    fees = props.fees,
    setFees = props.setFees,
    cleanFormState = props.cleanFormState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)('information'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOption = _useState2[0],
    setSelectedOption = _useState2[1];
  var listOptions = [{
    key: 'information',
    content: t('INFORMATION', 'Information')
  }, {
    key: 'advanced',
    content: t('ADVANCED', 'Advanced')
  }, {
    key: 'labels',
    content: t('LABELS', 'Labels')
  }, {
    key: 'seo_options',
    content: t('SEO_OPTIONS', 'SEO options')
  }];
  var handleSelectOption = function handleSelectOption(tab) {
    setSelectedOption(tab);
    setIsExtendExtraOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    maxLimit: isExtendExtraOpen
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_DETAILS', 'Product details')), /*#__PURE__*/_react.default.createElement(_styles.TabsConatiner, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, listOptions.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: option.key,
      active: selectedOption === option.key,
      onClick: function onClick() {
        return handleSelectOption(option.key);
      }
    }, option.content);
  }))), selectedOption === 'information' && /*#__PURE__*/_react.default.createElement(_ProductDetatilsInformation.ProductDetatilsInformation, {
    product: product,
    formState: formState,
    handlechangeImage: handlechangeImage,
    handleChangeRibbon: handleChangeRibbon,
    handleChangeInput: handleChangeInput,
    handleChangeFormState: handleChangeFormState,
    handleButtonUpdateClick: handleUpdateClick
  }), selectedOption === 'advanced' && /*#__PURE__*/_react.default.createElement(_ProductDetailsAdvanced.ProductDetailsAdvanced, {
    product: product,
    business: business,
    handleSuccessUpdate: handleSuccessUpdate,
    setFormTaxState: setFormTaxState,
    formTaxState: formTaxState,
    taxes: taxes,
    setTaxes: setTaxes,
    fees: fees,
    setFees: setFees
  }), selectedOption === 'labels' && /*#__PURE__*/_react.default.createElement(_ProductTagsList.ProductTagsList, {
    tags: (product === null || product === void 0 ? void 0 : product.tags) || [],
    businessId: business.id,
    product: product,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleSuccessProductUpdate: handleSuccessUpdate
  }), selectedOption === 'seo_options' && /*#__PURE__*/_react.default.createElement(_SeoOptions.SeoOptions, {
    data: product,
    formState: formState,
    setFormState: handleChangeFormState,
    handleUpdateClick: handleUpdateClick,
    handlechangeImageProductCategory: handlechangeImage,
    handleProductCategoryChangeInput: handleChangeInput,
    isProductSeo: true,
    cleanFormState: cleanFormState
  }));
};
exports.ProductMainDetails = ProductMainDetails;