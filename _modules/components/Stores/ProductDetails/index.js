"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _useWindowSize2 = require("../../../hooks/useWindowSize");

var _Shared = require("../../Shared");

var _ProductSummary = require("../ProductSummary");

var _ProductIngredient = require("../ProductIngredient");

var _ProductMetaFields = require("../ProductMetaFields");

var _ProductExtras = require("../ProductExtras");

var _ProductGallery = require("../ProductGallery");

var _ProductVideos = require("../ProductVideos");

var _ProductMainDetails = require("../ProductMainDetails");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductDetailsUI = function ProductDetailsUI(props) {
  var _productState$product;

  var open = props.open,
      business = props.business,
      onClose = props.onClose,
      productState = props.productState,
      formState = props.formState,
      handleUpdateBusinessState = props.handleUpdateBusinessState,
      setFormTaxState = props.setFormTaxState,
      formTaxState = props.formTaxState,
      taxes = props.taxes,
      setTaxes = props.setTaxes,
      fees = props.fees,
      setFees = props.setFees,
      handlechangeImage = props.handlechangeImage,
      handleChangeInput = props.handleChangeInput,
      handleUpdateClick = props.handleUpdateClick,
      handleChangeFormState = props.handleChangeFormState,
      handleSuccessUpdate = props.handleSuccessUpdate;

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      extraOpen = _useState4[0],
      setExtraOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isExtendExtraOpen = _useState6[0],
      setIsExtendExtraOpen = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      showOption = _useState8[0],
      setShowOption = _useState8[1];

  var handleShowOption = function handleShowOption(option) {
    setIsExtendExtraOpen(false);
    setShowOption(option);
    setExtraOpen(true);
  };

  var handleCloseExtraOpen = function handleCloseExtraOpen() {
    setIsExtendExtraOpen(false);
    setExtraOpen(false);
    setShowOption(null);
  };

  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);

    if (!value) {
      onClose();
    }
  };

  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('product_details').style.width = '100vw';
      } else {
        if (extraOpen && width >= 1000) {
          document.getElementById('product_details').style.width = '1000px';
        } else {
          document.getElementById('product_details').style.width = '500px';
        }
      }
    }
  };

  (0, _react.useEffect)(function () {
    // if (width > 1000) {
    //   setIsExtendExtraOpen(false)
    // }
    toggleMainContent();
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    if (width < 1000) return;

    if (extraOpen) {
      document.getElementById('product_details').style.width = '1000px';
    } else {
      toggleMainContent();
    }
  }, [extraOpen]);
  (0, _react.useEffect)(function () {
    setExtraOpen(false);
    setIsExtendExtraOpen(false);
  }, [props.product]);

  var onCloseSidebar = function onCloseSidebar(e) {
    if (e.code === 'Escape') {
      props.onClose() && props.onClose();
    }
  };

  (0, _react.useEffect)(function () {
    if (!open) return;
    document.addEventListener('keydown', onCloseSidebar);
    return function () {
      return document.removeEventListener('keydown', onCloseSidebar);
    };
  }, [open]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "product_details"
  }, (!isExtendExtraOpen || width < 1000) && /*#__PURE__*/_react.default.createElement(_ProductSummary.ProductSummary, _extends({}, props, {
    actionSidebar: actionSidebar,
    showOption: showOption,
    handleShowOption: handleShowOption
  })), extraOpen && /*#__PURE__*/_react.default.createElement(_Shared.MoreSidebarLayout, {
    isExtendExtraOpen: isExtendExtraOpen,
    onClose: handleCloseExtraOpen
  }, showOption === 'product_details' && /*#__PURE__*/_react.default.createElement(_ProductMainDetails.ProductMainDetails, {
    product: productState === null || productState === void 0 ? void 0 : productState.product,
    formState: formState,
    handlechangeImage: handlechangeImage,
    handleChangeFormState: handleChangeFormState,
    handleChangeInput: handleChangeInput,
    handleUpdateClick: handleUpdateClick,
    isExtendExtraOpen: isExtendExtraOpen,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    business: business,
    handleSuccessUpdate: handleSuccessUpdate,
    setFormTaxState: setFormTaxState,
    formTaxState: formTaxState,
    taxes: taxes,
    setTaxes: setTaxes,
    fees: fees,
    setFees: setFees
  }), showOption === 'ingredients' && /*#__PURE__*/_react.default.createElement(_ProductIngredient.ProductIngredient, {
    business: business,
    product: productState.product,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleSuccessUpdate: handleSuccessUpdate
  }), showOption === 'product_options' && /*#__PURE__*/_react.default.createElement(_ProductExtras.ProductExtras, {
    business: business,
    product: productState.product,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleSuccessUpdate: handleSuccessUpdate,
    handleUpdateBusinessState: handleUpdateBusinessState
  }), showOption === 'product_images' && /*#__PURE__*/_react.default.createElement(_ProductGallery.ProductGallery, {
    business: business,
    categoryId: productState.product.category_id,
    product: productState.product,
    handleSuccessUpdate: handleSuccessUpdate
  }), showOption === 'product_video' && /*#__PURE__*/_react.default.createElement(_ProductVideos.ProductVideos, {
    business: business,
    categoryId: productState.product.category_id,
    product: productState.product,
    handleSuccessUpdate: handleSuccessUpdate
  }), showOption === 'custom_fields' && /*#__PURE__*/_react.default.createElement(_ProductMetaFields.ProductMetaFields, {
    businessId: business === null || business === void 0 ? void 0 : business.id,
    categoryId: productState.product.category_id,
    productId: (_productState$product = productState.product) === null || _productState$product === void 0 ? void 0 : _productState$product.id
  }), showOption === 'personalization' && /*#__PURE__*/_react.default.createElement(_Shared.Personalization, {
    isShowTitle: true
  })));
};

var ProductDetails = function ProductDetails(props) {
  var productDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductDetatils, productDetailsProps);
};

exports.ProductDetails = ProductDetails;