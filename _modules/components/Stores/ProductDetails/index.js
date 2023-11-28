"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
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
var _BusinessServiceProfessionals = require("../BusinessServiceProfessionals");
var _ServiceDetail = require("../ServiceDetail");
var _utils = require("../../../utils");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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
    handleSuccessUpdate = props.handleSuccessUpdate,
    handleChangeRibbon = props.handleChangeRibbon,
    cleanFormState = props.cleanFormState;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
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
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isExpand = _useState8[0],
    setIsExpand = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    showOption = _useState10[0],
    setShowOption = _useState10[1];
  var handleShowOption = function handleShowOption(option, isInitialRender) {
    setIsExtendExtraOpen(false);
    setShowOption(option);
    setExtraOpen(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        section: option
      });
    }
  };
  var handleCloseExtraOpen = function handleCloseExtraOpen() {
    setIsExtendExtraOpen(false);
    setExtraOpen(false);
    setShowOption(null);
    (0, _utils.removeQueryToUrl)(['section', 'tab', 'tag', 'ingredient', 'extra']);
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
        if (isExpand) {
          document.getElementById('product_details').style.width = '100vw';
        } else {
          if (extraOpen && width >= 1000) {
            document.getElementById('product_details').style.width = '1000px';
          } else {
            document.getElementById('product_details').style.width = '500px';
          }
        }
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [extraOpen, isExpand, width]);
  (0, _react.useEffect)(function () {
    setExtraOpen(false);
    setIsExtendExtraOpen(false);
  }, [props.product]);
  var onCloseSidebar = function onCloseSidebar(e) {
    if (e.code === 'Escape' && width >= 1000) {
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
  (0, _react.useEffect)(function () {
    var section = query.get('section');
    if (section) {
      handleShowOption(section, true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "product_details"
  }, (!isExtendExtraOpen || width < 1000) && /*#__PURE__*/_react.default.createElement(_ProductSummary.ProductSummary, _extends({}, props, {
    actionSidebar: actionSidebar,
    showOption: showOption,
    handleShowOption: handleShowOption,
    extraOpen: extraOpen,
    isExpand: isExpand,
    setIsExpand: setIsExpand
  })), extraOpen && /*#__PURE__*/_react.default.createElement(_Shared.MoreSidebarLayout, {
    isExtendExtraOpen: isExtendExtraOpen,
    onClose: handleCloseExtraOpen
  }, showOption === 'product_details' && /*#__PURE__*/_react.default.createElement(_ProductMainDetails.ProductMainDetails, {
    product: productState === null || productState === void 0 ? void 0 : productState.product,
    formState: formState,
    handlechangeImage: handlechangeImage,
    handleChangeFormState: handleChangeFormState,
    handleChangeRibbon: handleChangeRibbon,
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
    setFees: setFees,
    cleanFormState: cleanFormState
  }), showOption === 'service_details' && /*#__PURE__*/_react.default.createElement(_ServiceDetail.ServiceDetail, {
    product: productState === null || productState === void 0 ? void 0 : productState.product,
    formState: formState,
    handlechangeImage: handlechangeImage,
    handleChangeFormState: handleChangeFormState,
    handleChangeRibbon: handleChangeRibbon,
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
  }), showOption === 'professionals' && /*#__PURE__*/_react.default.createElement(_BusinessServiceProfessionals.BusinessServiceProfessionals, {
    product: productState === null || productState === void 0 ? void 0 : productState.product,
    formState: formState,
    isExtendExtraOpen: isExtendExtraOpen,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleUpdateClick: handleUpdateClick
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
var ProductDetails = exports.ProductDetails = function ProductDetails(props) {
  var productDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductDetatils, productDetailsProps);
};