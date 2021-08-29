"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProducts = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _InfoShareContext = require("../../../../../contexts/InfoShareContext");

var _SearchBar = require("../SearchBar");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Buttons = require("../../styles/Buttons");

var _reactBootstrap = require("react-bootstrap");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _styledComponents = require("styled-components");

var _Switch = require("../../styles/Switch");

var _Pagination = require("../Pagination");

var _dumy = require("./dumy");

var _OrderingProductsDetail = require("../OrderingProductsDetail");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderingProducts = function OrderingProducts(props) {
  var _orderingProductsList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    products: [],
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      orderingProductsList = _useState2[0],
      setorderingProductsList = _useState2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
      _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
      isCollapse = _useInfoShare2[0].isCollapse,
      handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openProductDetail = _useState4[0],
      setOpenProductDetail = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedProduct = _useState6[0],
      setSelectedProduct = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1]; // Change page


  var _useState9 = (0, _react.useState)(1),
      _useState10 = _slicedToArray(_useState9, 2),
      currentPage = _useState10[0],
      setCurrentPage = _useState10[1];

  var _useState11 = (0, _react.useState)(10),
      _useState12 = _slicedToArray(_useState11, 2),
      pagesPerPage = _useState12[0],
      setPagesPerPage = _useState12[1]; // Get current products


  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      currentPages = _useState14[0],
      setCurrentPages = _useState14[1];

  var _useState15 = (0, _react.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      totalPages = _useState16[0],
      setTotalPages = _useState16[1];

  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
  };

  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * pagesPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setPagesPerPage(pageSize);
  };

  var onClickPage = function onClickPage(e, pageId) {
    var isInvalid = e.target.closest('.product-enabled') || e.target.closest('.product-actions');
    if (isInvalid) return;
    handleEditProduct(pageId);
  };

  var handleEditProduct = function handleEditProduct(id) {
    setOpenProductDetail(true);

    if (id) {
      var product = orderingProductsList === null || orderingProductsList === void 0 ? void 0 : orderingProductsList.products.find(function (product) {
        return product.id === id;
      });
      setSelectedProduct(product);
    } else {
      setSelectedProduct(null);
    }
  };

  var handleChangeState = function handleChangeState(id, type, value) {
    var products = orderingProductsList === null || orderingProductsList === void 0 ? void 0 : orderingProductsList.products.map(function (product) {
      if (id === product.id) {
        return _objectSpread(_objectSpread({}, product), {}, _defineProperty({}, type, value));
      }

      return product;
    });
    handleUpdateOrderingProducts(products);
  };

  var handleDeleteProduct = function handleDeleteProduct(id) {
    var products = orderingProductsList === null || orderingProductsList === void 0 ? void 0 : orderingProductsList.products.filter(function (product) {
      return product.id !== id;
    });
    setorderingProductsList(_objectSpread(_objectSpread({}, orderingProductsList), {}, {
      products: products
    }));
  };

  var handleUpdateOrderingProducts = function handleUpdateOrderingProducts(products) {
    setorderingProductsList(_objectSpread(_objectSpread({}, orderingProductsList), {}, {
      products: products
    }));

    if (selectedProduct) {
      var product = products.find(function (item) {
        return item.id === selectedProduct.id;
      });
      setSelectedProduct(product);
    }
  };

  var handleCloseDetail = function handleCloseDetail() {
    setOpenProductDetail(false);
    setSelectedProduct(null);
  };

  (0, _react.useEffect)(function () {
    if (orderingProductsList.loading) return;

    var _totalPages;

    if (orderingProductsList.products.length > 0) {
      _totalPages = Math.ceil(orderingProductsList.products.length / pagesPerPage);
    }

    var indexOfLastPost = currentPage * pagesPerPage;
    var indexOfFirstPost = indexOfLastPost - pagesPerPage;

    var _currentProducts = orderingProductsList.products.slice(indexOfFirstPost, indexOfLastPost);

    setTotalPages(_totalPages);
    setCurrentPages(_currentProducts);
  }, [orderingProductsList, currentPage, pagesPerPage]);
  (0, _react.useEffect)(function () {
    setorderingProductsList(_objectSpread(_objectSpread({}, orderingProductsList), {}, {
      products: _dumy.productsList
    }));
  }, []);
  (0, _react.useEffect)(function () {
    if (searchValue) {
      var products = _dumy.productsList.filter(function (item) {
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
      });

      setorderingProductsList(_objectSpread(_objectSpread({}, orderingProductsList), {}, {
        products: products
      }));
    } else {
      setorderingProductsList(_objectSpread(_objectSpread({}, orderingProductsList), {}, {
        products: _dumy.productsList
      }));
    }
  }, [searchValue]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderingProductsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('ORDERING_PRODUCTS', 'Ordering Products'))), /*#__PURE__*/_react.default.createElement(_styles.ActionsGroup, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleEditProduct();
    }
  }, t('ADD_PRODUCT', 'Add product')), /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    search: searchValue,
    onSearch: function onSearch(value) {
      return setSearchValue(value);
    },
    placeholder: t('SEARCH', 'Search')
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductListTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProductListTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "product"
  }, t('PRODUCT', 'Product')), /*#__PURE__*/_react.default.createElement("th", {
    className: "description"
  }, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement("th", {
    className: "action"
  }, t('ACTIONS', 'Actions')))), orderingProductsList.loading ? _toConsumableArray(Array(pagesPerPage).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.PageTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: "product"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("td", {
      className: "description"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150
    })), /*#__PURE__*/_react.default.createElement("td", {
      className: "action"
    }, /*#__PURE__*/_react.default.createElement(_styles.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.EnableWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50
    })), /*#__PURE__*/_react.default.createElement(_styles.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 15
    }))))));
  }) : currentPages.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_styles.PageTbody, {
      key: product.id,
      onClick: function onClick(e) {
        return onClickPage(e, product.id);
      },
      active: (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.id) === product.id
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: "product"
    }, product === null || product === void 0 ? void 0 : product.name), /*#__PURE__*/_react.default.createElement("td", {
      className: "description"
    }, /*#__PURE__*/_react.default.createElement("div", null, product === null || product === void 0 ? void 0 : product.description)), /*#__PURE__*/_react.default.createElement("td", {
      className: "action"
    }, /*#__PURE__*/_react.default.createElement(_styles.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.EnableWrapper, {
      className: "product-enabled"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
      defaultChecked: product === null || product === void 0 ? void 0 : product.enabled,
      onChange: function onChange(enabled) {
        return handleChangeState(product.id, 'enabled', enabled);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles.ActionSelectorWrapper, {
      className: "product-actions"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
      title: /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null),
      id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleEditProduct(product.id);
      }
    }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleDeleteProduct(product.id);
      }
    }, t('DELETE', 'Delete'))))))));
  }))), !orderingProductsList.loading && /*#__PURE__*/_react.default.createElement(_styles.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.AddNewPageButton, {
    onClick: function onClick() {
      return handleEditProduct(null);
    }
  }, t('ADD_PRODUCT', 'Add product')), (orderingProductsList === null || orderingProductsList === void 0 ? void 0 : (_orderingProductsList = orderingProductsList.products) === null || _orderingProductsList === void 0 ? void 0 : _orderingProductsList.length) > 0 && /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: pagesPerPage,
    handleChangePageSize: handleChangePageSize
  }))), openProductDetail && /*#__PURE__*/_react.default.createElement(_OrderingProductsDetail.OrderingProductsDetail, {
    open: openProductDetail,
    onClose: handleCloseDetail,
    product: selectedProduct,
    handleChangeState: handleChangeState,
    orderingProductsList: orderingProductsList,
    handleUpdateOrderingProducts: handleUpdateOrderingProducts
  }));
};

exports.OrderingProducts = OrderingProducts;