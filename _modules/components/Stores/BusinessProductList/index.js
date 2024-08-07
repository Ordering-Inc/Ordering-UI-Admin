"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _SingleBusinessProduct = require("../SingleBusinessProduct");
var _BusinessSpreadSheet = require("../BusinessSpreadSheet");
var _BusinessProductAddForm = require("../BusinessProductAddForm");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessProductList = function BusinessProductList(props) {
  var _businessState$busine, _businessState$busine2, _categoryState$produc, _categoryState$pagina, _businessState$busine3, _businessState$busine4;
  var productDetailsId = props.productDetailsId,
    categoryState = props.categoryState,
    viewMethod = props.viewMethod,
    businessState = props.businessState,
    searchValue = props.searchValue,
    errorQuantityProducts = props.errorQuantityProducts,
    handleSearchRedirect = props.handleSearchRedirect,
    handleChangeSearch = props.handleChangeSearch,
    handleOpenProductDetails = props.handleOpenProductDetails,
    isParentProductAdd = props.isParentProductAdd,
    handleParentProductAdd = props.handleParentProductAdd,
    allowSpreadColumns = props.allowSpreadColumns,
    getPageProducts = props.getPageProducts,
    productsPerPage = props.productsPerPage,
    setProductsPerPage = props.setProductsPerPage,
    categorySelected = props.categorySelected;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var isLazyLoadProducts = (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.lazy_load_products_recommended;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAddProduct = _useState2[0],
    setIsAddProduct = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    dataSelected = _useState4[0],
    setDataSelected = _useState4[1];
  var _useState5 = (0, _react.useState)({
      products: true,
      description: true,
      price: true,
      // offer_price: true,
      cost_price: true,
      tax: true,
      fee: true
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    allowColumns = _useState6[0],
    setAllowColumns = _useState6[1];
  var optionsDefault = [{
    value: 'products',
    content: t('PRODUCTS', 'Products')
  }, {
    value: 'description',
    content: t('DESCRIPTION', 'Description')
  }, {
    value: 'price',
    content: t('PRICE', 'Price')
  },
  // {
  //   value: 'offer_price',
  //   content: t('REQULAR_PRICE', 'Regular Price')
  // },
  {
    value: 'cost_price',
    content: t('PRODUCT_COST', 'Product cost')
  }, {
    value: 'tax',
    content: t('TAX', 'Tax')
  }, {
    value: 'fee',
    content: t('FEE', 'Fee')
  }];
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };

  // Change page
  var _useState7 = (0, _react.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    currentPage = _useState8[0],
    setCurrentPage = _useState8[1];

  // Get current products
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    currentProducts = _useState10[0],
    setCurrentProducts = _useState10[1];
  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
    if (isLazyLoadProducts) {
      getPageProducts(true, page, productsPerPage);
    }
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * productsPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setProductsPerPage(pageSize);
    if (isLazyLoadProducts) {
      getPageProducts(true, expectedPage, pageSize);
    }
  };
  (0, _react.useEffect)(function () {
    if (categoryState.loading || isLazyLoadProducts) return;
    var indexOfLastPost = currentPage * productsPerPage;
    var indexOfFirstPost = indexOfLastPost - productsPerPage;
    var _currentProducts = categoryState.products.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentProducts(_currentProducts);
  }, [categoryState, currentPage, productsPerPage, isLazyLoadProducts]);
  (0, _react.useEffect)(function () {
    setCurrentPage(1);
  }, [categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id, isLazyLoadProducts]);
  return /*#__PURE__*/_react.default.createElement(_styles2.ListContent, null, viewMethod === 'list' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessProductListTable, {
    noFixedHeader: !businessState.loading && currentProducts.length <= 4
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.products) && /*#__PURE__*/_react.default.createElement("th", null, t('PRODUCTS', 'Products')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.description) && /*#__PURE__*/_react.default.createElement("th", {
    className: "description"
  }, t('DESCRIPTION', 'Description')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.price) && /*#__PURE__*/_react.default.createElement("th", {
    className: "price"
  }, t('PRICE', 'Price')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.offer_price) && /*#__PURE__*/_react.default.createElement("th", {
    className: "regular-price"
  }, t('REGULAR_PRICE', 'Regular Price')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.cost_price) && /*#__PURE__*/_react.default.createElement("th", {
    className: "regular-price"
  }, t('PRODUCT_COST', 'Product cost')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.tax) && /*#__PURE__*/_react.default.createElement("th", {
    className: "tax"
  }, t('TAX', 'Tax')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.fee) && /*#__PURE__*/_react.default.createElement("th", {
    className: "fee"
  }, t('FEE', 'Fee')), /*#__PURE__*/_react.default.createElement("th", {
    className: "more"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    handleChangeAllowColumns: handleChangeAllowColumns
  })))), categoryState.loading || businessState.loading ? _toConsumableArray(Array(30).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessProduct.SingleBusinessProduct, {
      key: i,
      isSkeleton: true,
      viewMethod: viewMethod,
      allowColumns: allowColumns
    });
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (isLazyLoadProducts ? categoryState.products : currentProducts).sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (product, i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessProduct.SingleBusinessProduct, _extends({}, props, {
      key: "".concat(product === null || product === void 0 ? void 0 : product.id, "_").concat(i),
      productDetailsId: productDetailsId,
      product: product,
      allowColumns: allowColumns,
      business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
      handleOpenProductDetails: handleOpenProductDetails,
      dataSelected: dataSelected,
      setDataSelected: setDataSelected,
      category: categoryState,
      isLastProduct: currentProducts.length - 1 === i
    }));
  })))), /*#__PURE__*/_react.default.createElement(_styles2.ProductListBottom, null, !businessState.loading && (businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 || (_businessState$busine2 = _businessState$busine2.categories) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.length) > 0 && categorySelected && /*#__PURE__*/_react.default.createElement(_styles2.AddProductBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleParentProductAdd(true);
    }
  }, t('ADD_NEW_PRODUCT', 'Add new product'))), !businessState.loading && (categoryState === null || categoryState === void 0 || (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: isLazyLoadProducts ? categoryState === null || categoryState === void 0 ? void 0 : categoryState.pagination.currentPage : currentPage,
    totalPages: isLazyLoadProducts ? Math.ceil((categoryState === null || categoryState === void 0 || (_categoryState$pagina = categoryState.pagination) === null || _categoryState$pagina === void 0 ? void 0 : _categoryState$pagina.totalItems) / productsPerPage) : Math.ceil(categoryState.products.length / productsPerPage),
    handleChangePage: handleChangePage,
    defaultPageSize: productsPerPage,
    handleChangePageSize: handleChangePageSize
  })), !businessState.loading && (businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 || (_businessState$busine3 = _businessState$busine3.categories) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperNotFound, null, t('CREATE_CATEGORY_BEFORE_PRODUCT', 'Please create a category before adding your products.')), !businessState.loading && (businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 || (_businessState$busine4 = _businessState$busine4.categories) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.length) > 0 && !categorySelected && /*#__PURE__*/_react.default.createElement(_styles2.WrapperNotFound, null, t('SELECT_CATEGORY_BEFORE_PRODUCT', 'Please select a category before adding your products.'))), viewMethod === 'spreedsheet' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductListSpreadContainer, null, categoryState.loading || businessState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.BusinessProductListTable, null, _toConsumableArray(Array(15).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessProduct.SingleBusinessProduct, {
      key: i,
      isSkeleton: true,
      viewMethod: viewMethod,
      allowColumns: allowColumns
    });
  })) : /*#__PURE__*/_react.default.createElement(_BusinessSpreadSheet.BusinessSpreadSheet, _extends({}, props, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    allowSpreadColumns: allowSpreadColumns
  }))), !categoryState.loading && !businessState.loading && categoryState.products.length === 0 && !(searchValue && errorQuantityProducts || !searchValue && !errorQuantityProducts) && /*#__PURE__*/_react.default.createElement(_styles2.WrapperNotFound, null, /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: !searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.'),
    btnTitle: !searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters'),
    onClickButton: function onClickButton() {
      return !searchValue ? handleSearchRedirect() : handleChangeSearch('');
    }
  }))), (isAddProduct || isParentProductAdd) && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "productAddForm",
    open: isAddProduct || isParentProductAdd,
    onClose: function onClose() {
      setIsAddProduct(false);
      handleParentProductAdd && handleParentProductAdd(false);
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_BusinessProductAddForm.BusinessProductAddForm, _extends({}, props, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsAddProduct: setIsAddProduct
  }))));
};
exports.BusinessProductList = BusinessProductList;