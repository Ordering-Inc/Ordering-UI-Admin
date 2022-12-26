"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewProductsListingUI = exports.ReviewProductsListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _ProductReviewDetails = require("../ProductReviewDetails");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReviewProductsListingUI = function ReviewProductsListingUI(props) {
  var _businessState$busine, _categoryState$produc, _businessState$busine2;
  var businessState = props.businessState,
    categoryState = props.categoryState,
    handleChangeSearch = props.handleChangeSearch,
    searchValue = props.searchValue;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openReview = _useState2[0],
    setOpenReview = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    curProduct = _useState4[0],
    setCurProduct = _useState4[1];
  var _useState5 = (0, _react.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = (0, _react.useState)(10),
    _useState8 = _slicedToArray(_useState7, 2),
    productsPerPage = _useState8[0],
    setProductsPerPage = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    currentProducts = _useState10[0],
    setCurrentProducts = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    totalPages = _useState12[0],
    setTotalPages = _useState12[1];
  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * productsPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setProductsPerPage(pageSize);
  };
  (0, _react.useEffect)(function () {
    if (categoryState.loading) return;
    var _totalPages;
    if (categoryState.products.length > 0) {
      _totalPages = Math.ceil(categoryState.products.length / productsPerPage);
    }
    var indexOfLastPost = currentPage * productsPerPage;
    var indexOfFirstPost = indexOfLastPost - productsPerPage;
    var _currentProducts = categoryState.products.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(_totalPages);
    setCurrentProducts(_currentProducts);
  }, [categoryState, currentPage, productsPerPage]);
  var handleOpenReview = function handleOpenReview(product) {
    setCurProduct(product);
    setOpenReview(true);
  };
  (0, _react.useEffect)(function () {
    setCurrentPage(1);
  }, [searchValue]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewsListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderLeft, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  }) : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.name)), /*#__PURE__*/_react.default.createElement(_styles2.HeaderRight, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    placeholder: t('SEARCH', 'Search'),
    searchValue: searchValue,
    onSearch: handleChangeSearch
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ReviewsTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewObject, {
    isHeader: true
  }, t('PRODUCT', 'Product'))))), businessState !== null && businessState !== void 0 && businessState.loading || categoryState !== null && categoryState !== void 0 && categoryState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ReviewTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewObject, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))))));
  }) : currentProducts.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ReviewTbody, {
      key: product.id,
      active: product.id === (curProduct === null || curProduct === void 0 ? void 0 : curProduct.id),
      onClick: function onClick() {
        return handleOpenReview(product);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewObject, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, product !== null && product !== void 0 && product.images ? /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ImageFill, null)), /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.name)))));
  })), !businessState.loading && (categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
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
      setCurProduct(null);
      setOpenReview(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductReviewDetails.ProductReviewDetails, {
    businessId: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.id,
    product: curProduct,
    productId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.id
  })));
};
exports.ReviewProductsListingUI = ReviewProductsListingUI;
var ReviewProductsListing = function ReviewProductsListing(props) {
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isInitialRender = _useState14[0],
    setIsInitialRender = _useState14[1];
  var businessProductslistingProps = _objectSpread(_objectSpread({}, props), {}, {
    isAllCategoryProducts: true,
    UIComponent: ReviewProductsListingUI,
    isInitialRender: isInitialRender,
    isSearchByName: true,
    isSearchByDescription: true,
    handleUpdateInitialRender: function handleUpdateInitialRender(val) {
      return setIsInitialRender(val);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessProductsListing, businessProductslistingProps);
};
exports.ReviewProductsListing = ReviewProductsListing;