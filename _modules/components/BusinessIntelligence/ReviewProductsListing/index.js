"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewProductsListingUI = exports.ReviewProductsListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _ProductReviewDetails = require("../ProductReviewDetails");
var _utils = require("../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ReviewProductsListingUI = exports.ReviewProductsListingUI = function ReviewProductsListingUI(props) {
  var _productState$product;
  var productState = props.productState,
    handleChangeSearch = props.handleChangeSearch,
    searchValue = props.searchValue,
    parentSearchValue = props.parentSearchValue,
    businessId = props.businessId,
    isUseQuery = props.isUseQuery,
    defaultPage = props.defaultPage,
    defaultPageSize = props.defaultPageSize,
    firstRender = props.firstRender;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openReview = _useState2[0],
    setOpenReview = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    curProduct = _useState4[0],
    setCurProduct = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    curProductId = _useState6[0],
    setCurProductId = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    curCategoryId = _useState8[0],
    setCurCategoryId = _useState8[1];
  var _useState9 = (0, _react.useState)(defaultPage || 1),
    _useState10 = _slicedToArray(_useState9, 2),
    currentPage = _useState10[0],
    setCurrentPage = _useState10[1];
  var _useState11 = (0, _react.useState)(defaultPageSize || 10),
    _useState12 = _slicedToArray(_useState11, 2),
    productsPerPage = _useState12[0],
    setProductsPerPage = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    currentProducts = _useState14[0],
    setCurrentProducts = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    totalPages = _useState16[0],
    setTotalPages = _useState16[1];
  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * productsPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setProductsPerPage(pageSize);
  };
  (0, _react.useEffect)(function () {
    if (productState.loading) return;
    var _totalPages;
    if (productState.products.length > 0) {
      _totalPages = Math.ceil(productState.products.length / productsPerPage);
    }
    var indexOfLastPost = currentPage * productsPerPage;
    var indexOfFirstPost = indexOfLastPost - productsPerPage;
    var _currentProducts = productState.products.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(_totalPages);
    setCurrentProducts(_currentProducts);
  }, [productState, currentPage, productsPerPage]);
  var handleOpenReview = function handleOpenReview(product, isInitialRender) {
    var _product$category;
    setCurProduct(product);
    setCurProductId(product === null || product === void 0 ? void 0 : product.id);
    setCurCategoryId(product === null || product === void 0 || (_product$category = product.category) === null || _product$category === void 0 ? void 0 : _product$category.id);
    setOpenReview(true);
    if (!isInitialRender) {
      var _product$category2;
      (0, _utils.addQueryToUrl)({
        category: product === null || product === void 0 || (_product$category2 = product.category) === null || _product$category2 === void 0 ? void 0 : _product$category2.id,
        product: product.id
      });
    }
  };
  var handleCloseReviewDetails = function handleCloseReviewDetails() {
    setCurProduct(null);
    setOpenReview(false);
    (0, _utils.removeQueryToUrl)(['category', 'product']);
  };
  (0, _react.useEffect)(function () {
    if (firstRender) return;
    setCurrentPage(1);
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    handleChangeSearch(parentSearchValue);
  }, [parentSearchValue]);
  (0, _react.useEffect)(function () {
    var category = query.get('category');
    var product = query.get('product');
    if (category && product) {
      setCurCategoryId(Number(category));
      setCurProductId(Number(product));
      setOpenReview(true);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !currentPage || !productsPerPage || !totalPages) return;
    (0, _utils.addQueryToUrl)({
      page: currentPage,
      pageSize: productsPerPage
    });
  }, [currentPage, productsPerPage, totalPages]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewObject, {
    isHeader: true
  }, t('PRODUCT', 'Product'))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewMarkerWrapper, {
    isHeader: true
  }, t('REVIEWS', 'Reviews'))))), productState !== null && productState !== void 0 && productState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewObject, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewMarkerWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })))));
  }) : currentProducts.map(function (product) {
    var _product$reviews, _product$reviews2;
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewTbody, {
      key: product.id,
      active: product.id === (curProduct === null || curProduct === void 0 ? void 0 : curProduct.id),
      onClick: function onClick() {
        return handleOpenReview(product);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewObject, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, product !== null && product !== void 0 && product.images ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ImageFill, null)), /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.name))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewMarkerWrapper, null, (product === null || product === void 0 || (_product$reviews = product.reviews) === null || _product$reviews === void 0 ? void 0 : _product$reviews.total) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, null), /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 || (_product$reviews2 = product.reviews) === null || _product$reviews2 === void 0 ? void 0 : _product$reviews2.total))))));
  })), !productState.loading && (productState === null || productState === void 0 || (_productState$product = productState.products) === null || _productState$product === void 0 ? void 0 : _productState$product.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: productsPerPage,
    handleChangePageSize: handleChangePageSize
  }))), openReview && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "review-details",
    defaultSideBarWidth: 550,
    open: openReview,
    onClose: function onClose() {
      return handleCloseReviewDetails();
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductReviewDetails.ProductReviewDetails, {
    businessId: businessId,
    product: curProduct,
    productId: curProductId,
    categoryId: curCategoryId
  })));
};
var ReviewProductsListing = exports.ReviewProductsListing = function ReviewProductsListing(props) {
  var businessProductslistingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReviewProductsListingUI,
    isSearchByName: true,
    isSearchByDescription: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ReviewProductList, businessProductslistingProps);
};