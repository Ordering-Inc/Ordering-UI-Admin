"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _BisDownArrow = _interopRequireDefault(require("@meronex/icons/bi/BisDownArrow"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _RiImageAddFill = _interopRequireDefault(require("@meronex/icons/ri/RiImageAddFill"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BusinessProductsCategoyDetails = require("../BusinessProductsCategoyDetails");
var _BsViewList = _interopRequireDefault(require("@meronex/icons/bs/BsViewList"));
var _BsTable = _interopRequireDefault(require("@meronex/icons/bs/BsTable"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _BusinessProductList = require("../BusinessProductList");
var _BusinessProductsCategories = require("../BusinessProductsCategories");
var _ProductDetails = require("../ProductDetails");
var _SingleBusinessCategoryEdit = require("../SingleBusinessCategoryEdit");
var _BusinessSelectHeader = require("../BusinessSelectHeader");
var _BatchImageForm = require("../BatchImageForm");
var _BusinessDetails = require("../BusinessDetails");
var _reactBootstrap = require("react-bootstrap");
var _ImportersButton = require("../ImportersButton");
var _AddBusinessForm = require("../AddBusinessForm");
var _ProductStep = require("../ProductStep");
var _BusinessAddStore = require("../BusinessAddStore");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var BusinessProductsListingUI = function BusinessProductsListingUI(props) {
  var _businessState$busine5, _businessState$busine14, _businessState$busine16, _businessState$busine17, _businessState$busine18;
  var categorySelected = props.categorySelected,
    searchValue = props.searchValue,
    handleChangeCategory = props.handleChangeCategory,
    handleChangeSearch = props.handleChangeSearch,
    featuredProducts = props.featuredProducts,
    businessState = props.businessState,
    onProductRedirect = props.onProductRedirect,
    handleStoresRedirect = props.handleStoresRedirect,
    slug = props.slug,
    categoryId = props.categoryId,
    productId = props.productId,
    isInitialRender = props.isInitialRender,
    handleUpdateInitialRender = props.handleUpdateInitialRender,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    setCategorySelected = props.setCategorySelected,
    setBusinessSlug = props.setBusinessSlug,
    openCategories = props.openCategories,
    setFormTaxState = props.setFormTaxState,
    formTaxState = props.formTaxState,
    taxes = props.taxes,
    setTaxes = props.setTaxes,
    fees = props.fees,
    setFees = props.setFees,
    getBusiness = props.getBusiness,
    businessTypes = props.businessTypes,
    setBusinessTypes = props.setBusinessTypes,
    categoryState = props.categoryState,
    handleUpdateCategoryState = props.handleUpdateCategoryState,
    siteState = props.siteState;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)('list'),
    _useState2 = _slicedToArray(_useState, 2),
    viewMethod = _useState2[0],
    setViewMethod = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    currentCategory = _useState4[0],
    setCurrentCategory = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedProduct = _useState6[0],
    setSelectedProduct = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showSelectHeader = _useState8[0],
    setShowSelectHeader = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedBusiness = _useState10[0],
    setSelectedBusiness = _useState10[1];
  var _useState11 = (0, _react.useState)(10),
    _useState12 = _slicedToArray(_useState11, 2),
    productsPerPage = _useState12[0],
    setProductsPerPage = _useState12[1];
  var categoryListRef = (0, _react.useRef)();
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    batchImageFormOpen = _useState14[0],
    setBatchImageFormOpen = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    openSidebar = _useState16[0],
    setOpenSidebar = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    showPopup = _useState18[0],
    setShowPopup = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isAdd = _useState20[0],
    setIsAdd = _useState20[1];
  var _useState21 = (0, _react.useState)({
      id: true,
      name: true,
      description: true,
      price: true,
      cost_price: true,
      inventoried: true,
      quantity: true
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    allowSpreadColumns = _useState22[0],
    setAllowSpreadColumns = _useState22[1];
  var spreadColumnOptions = [{
    value: 'cost_price',
    content: t('PRODUCT_COST', 'Product cost')
  }, {
    value: 'inventoried',
    content: t('INVENTORY', 'Inventory')
  }, {
    value: 'quantity',
    content: t('QUANTITY', 'Quantity')
  }];
  var handleChangeAllowSpreadColumns = function handleChangeAllowSpreadColumns(type) {
    setAllowSpreadColumns(_objectSpread(_objectSpread({}, allowSpreadColumns), {}, _defineProperty({}, type, !allowSpreadColumns[type])));
  };
  var handleOpenCategoryDetails = function handleOpenCategoryDetails() {
    var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var isInitialRender = arguments.length > 1 ? arguments[1] : undefined;
    setOpenSidebar(null);
    setSelectedProduct(null);
    setCurrentCategory(category);
    if (category && (category === null || category === void 0 ? void 0 : category.id) !== null) {
      setCategorySelected(category);
      setOpenSidebar('category_details');
      if (!isInitialRender) {
        (0, _utils.addQueryToUrl)({
          category: category.id
        });
      }
    } else {
      setCurrentCategory(null);
      setOpenSidebar('category_details');
    }
  };
  var handleCloseEdit = function handleCloseEdit() {
    onProductRedirect && onProductRedirect({
      slug: slug,
      category: null,
      product: null
    });
    setCurrentCategory(null);
    setOpenSidebar(null);
    (0, _utils.removeQueryToUrl)(['category']);
  };
  var handleOpenProductDetails = function handleOpenProductDetails(product, isInitialRender) {
    setSelectedProduct(product);
    setOpenSidebar('product_details');
    if (!isInitialRender) {
      var _businessState$busine;
      onProductRedirect({
        slug: businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.slug,
        product: product.id,
        category: product.category_id
      });
    }
  };
  var handleCloseProductDetails = function handleCloseProductDetails() {
    var _businessState$busine2;
    setOpenSidebar(null);
    setSelectedProduct(null);
    handleUpdateInitialRender(false);
    onProductRedirect({
      slug: businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.slug
    });
  };
  var handleProductAdd = function handleProductAdd(status) {
    if (viewMethod !== 'list') return;
    if (status) {
      setOpenSidebar('add_product');
    } else {
      setOpenSidebar(null);
    }
  };
  var handleSelectHeader = function handleSelectHeader() {
    setShowSelectHeader(!showSelectHeader);
  };
  var handleClose = function handleClose() {
    setShowSelectHeader(false);
  };
  var changeBusinessState = function changeBusinessState(business) {
    handleClose();
    setSelectedBusiness(business);
    setCategorySelected(null);
    setBusinessSlug(business === null || business === void 0 ? void 0 : business.slug);
    onProductRedirect({
      slug: business === null || business === void 0 ? void 0 : business.slug
    });
  };
  (0, _react.useEffect)(function () {
    if (categoryId && productId) {
      handleUpdateInitialRender(true);
    }
  }, []);
  (0, _react.useEffect)(function () {
    var _businessState$busine3, _businessState$busine4;
    if (!isInitialRender || !(businessState !== null && businessState !== void 0 && (_businessState$busine3 = businessState.business) !== null && _businessState$busine3 !== void 0 && _businessState$busine3.slug)) return;
    setOpenSidebar('product_details');
    onProductRedirect({
      slug: businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.slug,
      product: productId,
      category: categoryId
    });
  }, [(_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.slug, isInitialRender]);
  var openBatchImageUploader = function openBatchImageUploader() {
    setBatchImageFormOpen(true);
  };
  var handleOpenSite = function handleOpenSite() {
    var _siteState$site, _siteState$site2, _siteState$site3, _businessState$busine6, _configs$site_url, _configs$site_url2, _businessState$busine7, _businessState$busine8;
    var storeUrl = siteState !== null && siteState !== void 0 && (_siteState$site = siteState.site) !== null && _siteState$site !== void 0 && _siteState$site.domain && (siteState === null || siteState === void 0 || (_siteState$site2 = siteState.site) === null || _siteState$site2 === void 0 ? void 0 : _siteState$site2.ssl_process_status) === 'ended' ? "https://".concat(siteState === null || siteState === void 0 || (_siteState$site3 = siteState.site) === null || _siteState$site3 === void 0 ? void 0 : _siteState$site3.domain, "/store/").concat(businessState === null || businessState === void 0 || (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.slug) : configs !== null && configs !== void 0 && (_configs$site_url = configs.site_url) !== null && _configs$site_url !== void 0 && _configs$site_url.value ? "".concat((0, _utils.checkSiteUrl)(configs === null || configs === void 0 || (_configs$site_url2 = configs.site_url) === null || _configs$site_url2 === void 0 ? void 0 : _configs$site_url2.value), "store/").concat(businessState === null || businessState === void 0 || (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.slug) : "https://".concat(ordering.project, ".tryordering.com/store/").concat(businessState === null || businessState === void 0 || (_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.slug);
    window.open(storeUrl, '_blank');
  };
  var handleOpenAddBusiness = function handleOpenAddBusiness() {
    setIsAdd(true);
    handleClose();
  };
  (0, _react.useEffect)(function () {
    if (slug && !isInitialRender) {
      setOpenSidebar(null);
      setSelectedProduct(null);
      handleUpdateInitialRender(false);
    }
  }, [slug, isInitialRender]);
  (0, _react.useEffect)(function () {
    if (!slug) {
      setSelectedBusiness(null);
      setOpenSidebar(null);
      handleChangeSearch(null);
      setViewMethod('list');
      setShowSelectHeader(true);
    }
  }, [slug]);
  (0, _react.useEffect)(function () {
    var _businessState$busine9;
    if (businessState !== null && businessState !== void 0 && businessState.business && (businessState === null || businessState === void 0 || (_businessState$busine9 = businessState.business) === null || _businessState$busine9 === void 0 || (_businessState$busine9 = _businessState$busine9.categories) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.length) === 0) {
      setShowPopup(true);
    }
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.business]);
  (0, _react.useEffect)(function () {
    if (businessState.loading) return;
    var categoryId = query.get('category');
    var productId = query.get('product');
    if (categoryId && productId) {
      var _businessState$busine10, _initCategory$product;
      var initCategory = (_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 || (_businessState$busine10 = _businessState$busine10.categories) === null || _businessState$busine10 === void 0 ? void 0 : _businessState$busine10.find(function (category) {
        return category.id === Number(categoryId);
      });
      var initProduct = initCategory === null || initCategory === void 0 || (_initCategory$product = initCategory.products) === null || _initCategory$product === void 0 ? void 0 : _initCategory$product.find(function (product) {
        return product.id === Number(productId);
      });
      if (initCategory) handleChangeCategory(null, initCategory);
      if (initProduct) {
        handleOpenProductDetails(initProduct, true);
      }
    } else if (categoryId && !productId) {
      var _businessState$busine11;
      var _initCategory = (_businessState$busine11 = businessState.business) === null || _businessState$busine11 === void 0 || (_businessState$busine11 = _businessState$busine11.categories) === null || _businessState$busine11 === void 0 ? void 0 : _businessState$busine11.find(function (category) {
        return category.id === Number(categoryId);
      });
      if (_initCategory) {
        handleChangeCategory(null, _initCategory);
        handleOpenCategoryDetails(_initCategory, true);
      }
    } else {
      var _businessState$busine12, _businessState$busine13;
      (businessState === null || businessState === void 0 || (_businessState$busine12 = businessState.business) === null || _businessState$busine12 === void 0 ? void 0 : _businessState$busine12.categories) && setCategorySelected(businessState === null || businessState === void 0 || (_businessState$busine13 = businessState.business) === null || _businessState$busine13 === void 0 ? void 0 : _businessState$busine13.categories[0]);
    }
  }, [businessState.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CategoryProductsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("div", null, !selectedBusiness && !businessState.business ? /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 30
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessSelector, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessNameWrapper, {
    onClick: function onClick() {
      return handleSelectHeader();
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, (selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.name) || (businessState === null || businessState === void 0 || (_businessState$busine14 = businessState.business) === null || _businessState$busine14 === void 0 ? void 0 : _businessState$busine14.name) || t('SELECT_BUSINESS', 'Select a business'), " \xA0 ", /*#__PURE__*/_react.default.createElement(_BisDownArrow.default, {
    className: showSelectHeader ? 'rotate-arrow' : ''
  }))), showSelectHeader && /*#__PURE__*/_react.default.createElement(_BusinessSelectHeader.BusinessSelectHeader, {
    close: handleClose,
    isOpen: showSelectHeader,
    changeBusinessState: changeBusinessState,
    noActiveStatusCondition: true,
    handleOpenAddBusiness: handleOpenAddBusiness
  })), slug && /*#__PURE__*/_react.default.createElement(_styles2.Breadcrumb, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "business",
    onClick: function onClick() {
      var _businessState$busine15;
      (0, _utils.addQueryToUrl)({
        id: businessState === null || businessState === void 0 || (_businessState$busine15 = businessState.business) === null || _businessState$busine15 === void 0 ? void 0 : _businessState$busine15.id
      });
      setOpenSidebar('business_details');
    }
  }, (selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.name) || (businessState === null || businessState === void 0 || (_businessState$busine16 = businessState.business) === null || _businessState$busine16 === void 0 ? void 0 : _businessState$busine16.name)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null), /*#__PURE__*/_react.default.createElement("span", null, categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.name))))), slug && /*#__PURE__*/_react.default.createElement(_styles2.ActionsGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: function onClick() {
      return getBusiness();
    },
    className: businessState.loading ? 'loading' : ''
  }, t('REFRESH', 'Refresh'), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowRepeat, {
    size: 16,
    style: {
      marginLeft: 5
    }
  })), /*#__PURE__*/_react.default.createElement(_ImportersButton.ImportersButton, {
    customClass: "importerGroup",
    setOpenSidebar: setOpenSidebar
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenCategoryDetails();
    }
  }, t('ADD_CATEGORY', 'Add category')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleProductAdd(true);
    },
    disabled: (businessState === null || businessState === void 0 || (_businessState$busine17 = businessState.business) === null || _businessState$busine17 === void 0 || (_businessState$busine17 = _businessState$busine17.categories) === null || _businessState$busine17 === void 0 ? void 0 : _businessState$busine17.length) === 0
  }, t('ADD_PRODUCT', 'Add product')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    search: searchValue,
    onSearch: handleChangeSearch,
    placeholder: t('SEARCH', 'Search'),
    customClass: "searchBar"
  }))), slug && /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    outline: true,
    borderRadius: "8px",
    onClick: handleOpenSite
  }, t('STORE_WEBSITE', 'Store website'))), slug && /*#__PURE__*/_react.default.createElement(_styles2.CategoryProductsContent, null, /*#__PURE__*/_react.default.createElement(_styles2.CategoryListContainer, {
    ref: categoryListRef
  }, /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, _extends({}, props, {
    businessState: businessState,
    categorySelected: categorySelected,
    onClickCategory: handleChangeCategory,
    featured: featuredProducts,
    handleOpenCategoryDetails: handleOpenCategoryDetails,
    openCategories: openCategories,
    handleUpdateBusinessState: handleUpdateBusinessState,
    setCategorySelected: setCategorySelected,
    categoryListRef: categoryListRef === null || categoryListRef === void 0 ? void 0 : categoryListRef.current,
    setCurrentCategory: setCurrentCategory
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ProductListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductHeader, null, /*#__PURE__*/_react.default.createElement(_SingleBusinessCategoryEdit.SingleBusinessCategoryEdit, _extends({}, props, {
    category: categorySelected,
    categorySelected: categorySelected,
    handleChangeCategory: handleChangeCategory,
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleOpenCategoryDetails: handleOpenCategoryDetails
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionIconList, null, viewMethod === 'spreedsheet' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width > 767 ? /*#__PURE__*/_react.default.createElement(_styles.Button, {
    outline: true,
    borderRadius: "5px",
    className: "batch-image-upload",
    color: "lightPrimary",
    onClick: function onClick() {
      return openBatchImageUploader();
    }
  }, t('UPLOAD_IMAGES_BATCH', 'Upload images in batch')) : /*#__PURE__*/_react.default.createElement(_styles2.ViewMethodButton, {
    className: "batch",
    onClick: function onClick() {
      return openBatchImageUploader();
    }
  }, /*#__PURE__*/_react.default.createElement(_RiImageAddFill.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.ColumnsAllowWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    allowColumns: allowSpreadColumns,
    optionsDefault: spreadColumnOptions,
    handleChangeAllowColumns: handleChangeAllowSpreadColumns
  }))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: viewMethod === 'list' ? 'primary' : 'black',
    onClick: function onClick() {
      return setViewMethod('list');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsViewList.default, null)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "top",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, t('SPREADSHEET', 'Spreadsheet'))
  }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: viewMethod === 'spreedsheet' ? 'primary' : 'black',
    className: "tour_btn",
    onClick: function onClick() {
      return setViewMethod('spreedsheet');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsTable.default, null))))), /*#__PURE__*/_react.default.createElement(_BusinessProductList.BusinessProductList, _extends({}, props, {
    categorySelected: categorySelected,
    productDetailsId: selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.id,
    viewMethod: viewMethod,
    handleOpenProductDetails: handleOpenProductDetails,
    handleParentProductAdd: handleProductAdd,
    isParentProductAdd: openSidebar === 'add_product',
    allowSpreadColumns: allowSpreadColumns,
    productsPerPage: productsPerPage,
    setProductsPerPage: setProductsPerPage
  }))))), openSidebar === 'category_details' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: openSidebar === 'category_details',
    onClose: handleCloseEdit,
    sidebarId: "editCategory"
  }, /*#__PURE__*/_react.default.createElement(_BusinessProductsCategoyDetails.BusinessProductsCategoyDetails, _extends({}, props, {
    onClose: handleCloseEdit,
    category: currentCategory,
    businessState: businessState,
    categorySelected: categorySelected
  }))), openSidebar === 'product_details' && /*#__PURE__*/_react.default.createElement(_ProductDetails.ProductDetails, {
    open: openSidebar === 'product_details',
    onClose: handleCloseProductDetails,
    product: selectedProduct,
    productId: productId,
    categoryId: categoryId,
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleUpdateBusinessState: handleUpdateBusinessState,
    setFormTaxState: setFormTaxState,
    formTaxState: formTaxState,
    taxes: taxes,
    setTaxes: setTaxes,
    fees: fees,
    setFees: setFees,
    categoryState: categoryState,
    handleUpdateCategoryState: handleUpdateCategoryState
  }), openSidebar === 'business_details' && /*#__PURE__*/_react.default.createElement(_BusinessDetails.BusinessDetails, {
    open: openSidebar === 'business_details',
    businessId: (selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id) || (businessState === null || businessState === void 0 || (_businessState$busine18 = businessState.business) === null || _businessState$busine18 === void 0 ? void 0 : _businessState$busine18.id),
    handleSucessRemoveBusiness: function handleSucessRemoveBusiness() {
      return handleStoresRedirect();
    }
    // handleSucessUpdateBusiness={handleSucessUpdateBusiness}
    ,
    onClose: function onClose() {
      setOpenSidebar(null);
      (0, _utils.removeQueryToUrl)(['id']);
    },
    businessTypes: businessTypes,
    setBusinessTypes: setBusinessTypes
  }), openSidebar === 'add_business' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: openSidebar === 'add_business',
    onClose: function onClose() {
      return setOpenSidebar(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_AddBusinessForm.AddBusinessForm, {
    handleSucessAddBusiness: function handleSucessAddBusiness() {
      return setOpenSidebar(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: width > 1440 ? '40%' : '60%',
    padding: "20px",
    open: batchImageFormOpen,
    onClose: function onClose() {
      return setBatchImageFormOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_BatchImageForm.BatchImageForm, _extends({}, props, {
    onClose: function onClose() {
      return setBatchImageFormOpen(false);
    }
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "769px",
    padding: "25px",
    open: showPopup,
    onClose: function onClose() {
      return setShowPopup(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductStep.ProductStep, {
    onClose: function onClose() {
      return setShowPopup(false);
    },
    orderingBusiness: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    getBusiness: getBusiness,
    handleOpenCategoryDetails: handleOpenCategoryDetails
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "769px",
    padding: "30px",
    open: isAdd,
    onClose: function onClose() {
      return setIsAdd(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessAddStore.BusinessAddStore, null)));
};
var BusinessProductsListing = exports.BusinessProductsListing = function BusinessProductsListing(props) {
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isInitialRender = _useState24[0],
    setIsInitialRender = _useState24[1];
  var businessProductslistingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsListingUI,
    isInitialRender: isInitialRender,
    handleUpdateInitialRender: function handleUpdateInitialRender(val) {
      return setIsInitialRender(val);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessProductsListing, businessProductslistingProps);
};