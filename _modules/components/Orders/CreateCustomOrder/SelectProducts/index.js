"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectProducts = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _CgSpinnerTwoAlt = _interopRequireDefault(require("@meronex/icons/cg/CgSpinnerTwoAlt"));
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _Shared = require("../../../Shared");
var _ProductForm = require("../ProductForm");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SelectProducts = function SelectProducts(props) {
  var _productList$products, _productList$products2, _cart$products, _cart$products2;
  var productList = props.productList,
    getProducts = props.getProducts,
    handeUpdateProductCart = props.handeUpdateProductCart,
    cart = props.cart,
    business = props.business;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    searchInputFocus = _useState2[0],
    setSearchInputFocus = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openProduct = _useState4[0],
    setOpenProduct = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    curProduct = _useState6[0],
    setCurProduct = _useState6[1];
  var timeout = null;
  var onInputChange = function onInputChange(inputValue) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      getProducts(inputValue);
    }, 750);
  };
  var handleSelectProduct = function handleSelectProduct(product) {
    setCurProduct(product);
    setOpenProduct(true);
  };
  var closeModalProductForm = function closeModalProductForm() {
    setCurProduct(null);
    setOpenProduct(false);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h3", null, t('WAHT_WANT_TO_BUY', 'What do you want us to buy?')), /*#__PURE__*/_react.default.createElement(_styles2.SearchProductsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('SEARCH_PRODUCTOS', 'Search products'),
    onChange: function onChange(e) {
      return onInputChange(e.target.value);
    },
    onFocus: function onFocus() {
      return setSearchInputFocus(true);
    },
    onBlur: function onBlur() {
      setTimeout(function () {
        setSearchInputFocus(false);
      }, 300);
    }
  }), productList.loading && /*#__PURE__*/_react.default.createElement("span", {
    className: "loading"
  }, /*#__PURE__*/_react.default.createElement(_CgSpinnerTwoAlt.default, null)), searchInputFocus && /*#__PURE__*/_react.default.createElement(_styles2.OptionsToSelectContainer, null, (productList === null || productList === void 0 ? void 0 : (_productList$products = productList.products) === null || _productList$products === void 0 ? void 0 : _productList$products.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, productList === null || productList === void 0 ? void 0 : (_productList$products2 = productList.products) === null || _productList$products2 === void 0 ? void 0 : _productList$products2.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SelectOption, {
      key: product.id,
      onClick: function onClick() {
        return handleSelectProduct(product);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, product !== null && product !== void 0 && product.images ? /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_50,c_limit'),
      alt: ""
    }) : /*#__PURE__*/_react.default.createElement(_BiImage.default, null)), /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, product === null || product === void 0 ? void 0 : product.name));
  })) : /*#__PURE__*/_react.default.createElement("p", null, productList.loading ? t('LOADING', 'Loading') : t('SEARCH_PRODUCTOS', 'Search products')))), /*#__PURE__*/_react.default.createElement(_styles2.CartProductsConatiner, null, cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.map(function (product, index) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CartProductsWrapper, {
      key: "".concat(product.id, "_").concat(index)
    }, /*#__PURE__*/_react.default.createElement(_styles2.SelectOption, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, product !== null && product !== void 0 && product.images ? /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_50,c_limit'),
      alt: ""
    }) : /*#__PURE__*/_react.default.createElement(_BiImage.default, null)), /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, product === null || product === void 0 ? void 0 : product.name)), /*#__PURE__*/_react.default.createElement(_styles2.ProductQuantityActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "black",
      disabled: (product === null || product === void 0 ? void 0 : product.quantity) === 1,
      onClick: function onClick() {
        return handeUpdateProductCart(product, false);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.DashCircle, null)), /*#__PURE__*/_react.default.createElement(_styles.Input, {
      type: "number",
      disabled: true,
      max: product === null || product === void 0 ? void 0 : product.maximum_per_order,
      value: product === null || product === void 0 ? void 0 : product.quantity
    }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "black",
      disabled: (product === null || product === void 0 ? void 0 : product.maximum_per_order) === (product === null || product === void 0 ? void 0 : product.quantity),
      onClick: function onClick() {
        return handeUpdateProductCart(product, true);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircle, null))));
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "760px",
    open: openProduct,
    closeOnBackdrop: true,
    onClose: function onClose() {
      return closeModalProductForm();
    },
    padding: "0",
    isProductForm: true,
    disableOverflowX: true
  }, /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    businessSlug: business === null || business === void 0 ? void 0 : business.slug,
    product: curProduct,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    categoryId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.category_id,
    productId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.id,
    onSave: function onSave() {
      return setOpenProduct(false);
    },
    productAddedToCartLength: (cart === null || cart === void 0 ? void 0 : (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.reduce(function (productsLength, Cproduct) {
      return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (curProduct === null || curProduct === void 0 ? void 0 : curProduct.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
    }, 0)) || 0
  })));
};
exports.SelectProducts = SelectProducts;