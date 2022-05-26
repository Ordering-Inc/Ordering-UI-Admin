"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PurchasedProductsList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _InfoShareContext = require("../../../contexts/InfoShareContext");

var _styles = require("../../../styles");

var _Shared = require("../../Shared");

var _styledComponents = require("styled-components");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PurchasedProductsList = function PurchasedProductsList(props) {
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var productsRef = (0, _react.useRef)(null);

  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
      _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
      isCollapse = _useInfoShare2[0].isCollapse,
      handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedProduct = _useState2[0],
      setSelectedProduct = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpenProduct = _useState4[0],
      setIsOpenProduct = _useState4[1];

  var productItems = [{
    key: 'store_app',
    type: 1,
    title: t('ORDERING_STORE_APP', 'Store App _version_').replace('_version_', '2.0'),
    short_description: t('STORE_APP_SHORT_DESCRIPTION', 'Allow your restaurants or business owners to receive their orders on your own white-labeled Orders Manager app.'),
    long_description: t('STORE_APP_LONG_DESCRIPTION', 'Allow your restaurants or business owners to receive their orders on your own white-labeled Orders Manager app.<br /><br />Use it Branded on your business at no cost.<br />All you need to do is use the Business Owners Credentials that you currently have on your Dashboard.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CartPlusFill, null),
    image: theme.images.apps.storeApp,
    app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1717',
    google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1717'
  }, {
    key: 'driver_app',
    type: 1,
    title: t('ORDERING_DRIVER_APP', 'Driver App _version_').replace('_version_', '2.0'),
    short_description: t('DRIVER_APP_SHORT_DESCRIPTION', 'Use it Branded on your business at no cost.'),
    long_description: t('DRIVER_APP_LONG_DESCRIPTION', 'Use it Branded on your business at no cost.<br />All you need to do is use the Driver Credentials that you currently have on your Dashboard.'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.icons.delivery,
      alt: "delivery app icon"
    }),
    image: theme.images.apps.driverApp,
    app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1718',
    google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1718'
  }, {
    key: 'pos_app',
    type: 1,
    title: t('ORDERING_POS', 'POS _version_').replace('_version_', '2.0'),
    short_description: t('POS_APP_SHORT_DESCRIPTION', 'Create orders in your system without the hassle and auto-complete information.'),
    long_description: t('POS_APP_LONG_DESCRIPTION', 'POS Ordering System: Take orders on the phone easily<br />Create orders in your system without the hassle and auto-complete information.<br />Save customer info with their number'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.icons.posTerminal,
      alt: "pos app icon"
    }),
    image: theme.images.apps.posApp,
    app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1793',
    google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1793'
  }, {
    key: 'kiosk_app',
    type: 1,
    title: t('ORDERING_KIOSK', 'Ordering Kiosk _version_').replace('_version_', '2.0'),
    short_description: t('KIOSK_APP_SHORT_DESCRIPTION', 'Ordering Kiosk completes that final step for each sale'),
    long_description: t('KIOSK_APP_LONG_DESCRIPTION', 'Did you know that 7 out of 10 customers prefer to make their orders themselves?<br />Ordering Kiosk completes that final step for each sale.'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.icons.poster,
      alt: "kiosk app icon"
    }),
    image: theme.images.apps.kioskApp,
    app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1794',
    google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1794'
  }, {
    key: 'call_center',
    type: 2,
    title: t('ORDERING_CALL_CENTER', 'Call Center _version_').replace('_version_', '2.0'),
    short_description: t('CALL_CENTER_SHORT_DESCRIPTION', 'Improving your <b>Customer Experience</b> and your <b>Orders Management</b> team processes.<br />Seamlessly integrated with your Ordering Solution.'),
    long_description: t('CALL_CENTER_LONG_DESCRIPTION', 'Improving your <b>Customer Experience</b> and your <b>Orders Management</b> team processes.<br />Seamlessly integrated with your Ordering Solution.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Headset, null),
    image: theme.images.apps.callCenterApp,
    web_url: 'https://apps.tryordering.com/store/marketplace?category=306&product=1792'
  }];

  var handleOpenProductDetails = function handleOpenProductDetails(e, product) {
    var isInvalid = e.target.closest('.purchase-btn');
    if (isInvalid) return;
    setSelectedProduct(product);
    setIsOpenProduct(true);
  };

  var handleCloseProduct = function handleCloseProduct() {
    setIsOpenProduct(false);
    setSelectedProduct(null);
  };

  var handleClickOutside = function handleClickOutside(e) {
    var _productsRef$current;

    var isInvalid = e.target.closest('.purchased-product-row') || !((_productsRef$current = productsRef.current) !== null && _productsRef$current !== void 0 && _productsRef$current.contains(e.target));
    if (isInvalid) return;
    handleCloseProduct();
  };

  (0, _react.useEffect)(function () {
    if (!isOpenProduct) return;
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isOpenProduct]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductsListContainer, {
    ref: productsRef
  }, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('PURCHASED_PRODUCTS', 'Purchased Products'))), /*#__PURE__*/_react.default.createElement(_styles2.ProductsTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductsTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.AppImageWrapper, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.AppHeaderTitle, null, t('PRODUCTS', 'Products')))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.AppDescriptionWarpper, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.AppHeaderTitle, null, t('DESCRIPTION', 'Description')))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.AppHeaderTitle, {
    isCenter: true
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.icons.apple,
    alt: "apple icon"
  }), /*#__PURE__*/_react.default.createElement("span", null, "iOS"))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.AppHeaderTitle, {
    isCenter: true
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.icons.android,
    alt: "android icon"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Android"))))), productItems.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ProductTboday, {
      key: product.key,
      className: "purchased-product-row",
      active: product.key === (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.key),
      onClick: function onClick(e) {
        return handleOpenProductDetails(e, product);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.AppImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
      src: product.image,
      alt: ""
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.AppDescriptionWarpper, null, /*#__PURE__*/_react.default.createElement("h3", null, product.title), /*#__PURE__*/_react.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: product.short_description
      }
    }))), product.type === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, {
      className: "purchase-btn"
    }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary",
      borderRadius: "8px",
      onClick: function onClick() {
        return window.open("".concat(product.app_store), '_blank');
      }
    }, t('PURCHASE_NOW', 'Purchase now')))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, {
      className: "purchase-btn"
    }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary",
      borderRadius: "8px",
      onClick: function onClick() {
        return window.open("".concat(product.google_play_store), '_blank');
      }
    }, t('PURCHASE_NOW', 'Purchase now'))))), product.type === 2 && /*#__PURE__*/_react.default.createElement("td", {
      colSpan: 2
    }, /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, {
      className: "purchase-btn"
    }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary",
      borderRadius: "8px",
      onClick: function onClick() {
        return window.open("".concat(product.web_url), '_blank');
      }
    }, t('PURCHASE_NOW', 'Purchase now'))))));
  })))), isOpenProduct && selectedProduct && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: isOpenProduct,
    onClose: function onClose() {
      return handleCloseProduct();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.ProductDetailsContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, selectedProduct.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "description",
    dangerouslySetInnerHTML: {
      __html: selectedProduct.long_description
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.DownloadLinksContainer, null, selectedProduct.type === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
    onClick: function onClick() {
      return window.open("".concat(selectedProduct.app_store), '_blank');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.appStore,
    alt: "App store"
  })), /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
    onClick: function onClick() {
      return window.open("".concat(selectedProduct.google_play_store), '_blank');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.googlePlay,
    alt: "Google play"
  }))), selectedProduct.type === 2 && /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
    onClick: function onClick() {
      return window.open("".concat(selectedProduct.web_url), '_blank');
    }
  }, selectedProduct.title)))));
};

exports.PurchasedProductsList = PurchasedProductsList;