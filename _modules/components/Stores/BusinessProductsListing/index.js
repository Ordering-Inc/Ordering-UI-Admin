"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsListing = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessProductsListingUI = function BusinessProductsListingUI(props) {
  var _businessState$busine5, _businessState$busine6, _businessState$busine7, _businessState$busine8, _businessState$busine9, _businessState$busine10;

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
      setFees = props.setFees;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

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

  var categoryListRef = (0, _react.useRef)();

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      batchImageFormOpen = _useState12[0],
      setBatchImageFormOpen = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      openSidebar = _useState14[0],
      setOpenSidebar = _useState14[1];

  var _useState15 = (0, _react.useState)({
    id: true,
    name: true,
    description: true,
    price: true,
    cost_price: true,
    inventoried: true,
    quantity: true
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      allowSpreadColumns = _useState16[0],
      setAllowSpreadColumns = _useState16[1];

  var spreadColumnOptions = [{
    value: 'cost_price',
    content: t('PRODUCT_COST', 'Product cost')
  }];

  var handleChangeAllowSpreadColumns = function handleChangeAllowSpreadColumns(type) {
    setAllowSpreadColumns(_objectSpread(_objectSpread({}, allowSpreadColumns), {}, _defineProperty({}, type, !allowSpreadColumns[type])));
  };

  var handleOpenCategoryDetails = function handleOpenCategoryDetails() {
    var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    setOpenSidebar(null);
    setSelectedProduct(null);
    setCurrentCategory(category);

    if (category && (category === null || category === void 0 ? void 0 : category.id) !== null) {
      setCategorySelected(category);
      setOpenSidebar('category_details');
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
  };

  var handleOpenProductDetails = function handleOpenProductDetails(product) {
    var _businessState$busine;

    setSelectedProduct(product);
    setOpenSidebar('product_details');
    onProductRedirect({
      slug: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.slug,
      product: product.id,
      category: product.category_id
    });
  };

  var handleCloseProductDetails = function handleCloseProductDetails() {
    var _businessState$busine2;

    setOpenSidebar(null);
    setSelectedProduct(null);
    handleUpdateInitialRender(false);
    onProductRedirect({
      slug: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.slug
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
      slug: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.slug,
      product: productId,
      category: categoryId
    });
  }, [(_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.slug, isInitialRender]);

  var openBatchImageUploader = function openBatchImageUploader() {
    setBatchImageFormOpen(true);
  };

  (0, _react.useEffect)(function () {
    if (!slug) {
      setSelectedBusiness(null);
      setOpenSidebar(null);
      handleChangeSearch(null);
      setViewMethod('list');
      setShowSelectHeader(true);
    }
  }, [slug]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CategoryProductsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("div", null, !selectedBusiness && businessState.loading ? /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 30
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessSelector, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessNameWrapper, {
    onClick: function onClick() {
      return handleSelectHeader();
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, (selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.name) || (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.name) || t('SELECT_BUSINESS', 'Select a business'), " \xA0 ", /*#__PURE__*/_react.default.createElement(_BisDownArrow.default, {
    className: showSelectHeader ? 'rotate-arrow' : ''
  }))), showSelectHeader && /*#__PURE__*/_react.default.createElement(_BusinessSelectHeader.BusinessSelectHeader, {
    close: handleClose,
    isOpen: showSelectHeader,
    changeBusinessState: changeBusinessState
  })), slug && /*#__PURE__*/_react.default.createElement(_styles2.Breadcrumb, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "business",
    onClick: function onClick() {
      return setOpenSidebar('business_details');
    }
  }, (selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.name) || (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.name)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null), /*#__PURE__*/_react.default.createElement("span", null, categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.name))))), slug && /*#__PURE__*/_react.default.createElement(_styles2.ActionsGroup, null, /*#__PURE__*/_react.default.createElement(_ImportersButton.ImportersButton, {
    defaultSlug: "sync_categories_default"
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
    disabled: (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : (_businessState$busine9 = _businessState$busine8.categories) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.length) === 0
  }, t('ADD_PRODUCT', 'Add product')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    search: searchValue,
    onSearch: handleChangeSearch,
    placeholder: t('SEARCH', 'Search')
  }))), slug && /*#__PURE__*/_react.default.createElement(_styles2.CategoryProductsContent, null, /*#__PURE__*/_react.default.createElement(_styles2.CategoryListContainer, {
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
    allowSpreadColumns: allowSpreadColumns
  }))))), openSidebar === 'category_details' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: openSidebar === 'category_details',
    onClose: handleCloseEdit
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
    setFees: setFees
  }), openSidebar === 'business_details' && /*#__PURE__*/_react.default.createElement(_BusinessDetails.BusinessDetails, {
    open: openSidebar === 'business_details',
    businessId: (selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id) || (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 ? void 0 : _businessState$busine10.id),
    handleSucessRemoveBusiness: function handleSucessRemoveBusiness() {
      return handleStoresRedirect();
    } // handleSucessUpdateBusiness={handleSucessUpdateBusiness}
    ,
    onClose: function onClose() {
      return setOpenSidebar(null);
    }
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
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
  }))));
};

var BusinessProductsListing = function BusinessProductsListing(props) {
  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      isInitialRender = _useState18[0],
      setIsInitialRender = _useState18[1];

  var businessProductslistingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsListingUI,
    isInitialRender: isInitialRender,
    handleUpdateInitialRender: function handleUpdateInitialRender(val) {
      return setIsInitialRender(val);
    }
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessProductsListing, businessProductslistingProps);
};

exports.BusinessProductsListing = BusinessProductsListing;