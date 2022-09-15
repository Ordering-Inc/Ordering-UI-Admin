"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FreeProductsList = void 0;

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

var FreeProductsList = function FreeProductsList(props) {
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
    short_description: t('STORE_APP_FREE_SHORT_DESCRIPTION', 'Give your business owners or managers a tool to manage their whole businesses incoming orders on the go by installing a branded app on any mobile device they have.'),
    long_description: t('STORE_APP_FREE_LONG_DESCRIPTION', 'Give your business owners or managers a tool to manage their whole businesses incoming orders on the go by installing a branded app on any mobile device they have.<br /><sub>This is a branded Ordering.co product; use it with your project, email, and password for free; features might be limited.</sub>'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CartPlusFill, null),
    image: theme.images.apps.storeApp,
    app_store: 'https://apps.apple.com/us/app/store-app-2-0/id1608192050',
    google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.storeappv5'
  }, {
    key: 'driver_app',
    type: 1,
    title: t('ORDERING_DRIVER_APP', 'Driver App _version_').replace('_version_', '2.0'),
    short_description: t('DRIVER_APP_FREE_SHORT_DESCRIPTION', 'Your fleet´s best companion gives drivers a tool to receive orders, follow optimal routes, add delivery evidence, set orders timing, and control their busy times.'),
    long_description: t('DRIVER_APP_FREE_LONG_DESCRIPTION', 'Your fleet´s best companion gives drivers a tool to receive orders, follow optimal routes, add delivery evidence, set orders timing, and control their busy times.<br /><sub>This is a branded Ordering.co product; use it with your project, email, and password for free; features might be limited.</sub>'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.icons.delivery,
      alt: "delivery app icon"
    }),
    image: theme.images.apps.driverApp,
    app_store: 'https://apps.apple.com/us/app/driver-app-2-0/id1606257815',
    google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.deliveryv5'
  }, {
    key: 'pos_app',
    type: 1,
    title: t('ORDERING_POS', 'POS _version_').replace('_version_', '2.0'),
    short_description: t('POS_APP_FREE_SHORT_DESCRIPTION', 'Create a loyal and returning community by offering the best customer experience; customer service is always the definite factor for users to keep returning; this fast software will help you understand customers, save their numbers, and order quickly.'),
    long_description: t('POS_APP_FREE_LONG_DESCRIPTION', 'Create a loyal and returning community by offering the best customer experience; customer service is always the definite factor for users to keep returning; this fast software will help you understand customers, save their numbers, and order quickly.<br /><sub>This is a branded Ordering.co product; use it with your project, email, and password for free; features might be limited.</sub>'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.icons.posTerminal,
      alt: "pos app icon"
    }),
    image: theme.images.apps.posApp,
    app_store: 'https://apps.apple.com/us/app/ordering-pos-2-0/id1609520468',
    google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.posv5&hl=en&gl=US'
  }, {
    key: 'kiosk_app',
    type: 1,
    title: t('ORDERING_KIOSK', 'Ordering Kiosk _version_').replace('_version_', '2.0'),
    short_description: t('KIOSK_APP_FREE_SHORT_DESCRIPTION', 'Simplify the ordering process inside your store. Allow your customers to select what they want to purchase products and pay directly in this kiosk—made with the highest tech, intuitive, and modern.'),
    long_description: t('KIOSK_APP_FREE_LONG_DESCRIPTION', 'Simplify the ordering process inside your store. Allow your customers to select what they want to purchase products and pay directly in this kiosk—made with the highest tech, intuitive, and modern.<br /><sub>This is a branded Ordering.co product; use it with your project, email, and password for free; features might be limited.</sub>'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.icons.poster,
      alt: "kiosk app icon"
    }),
    image: theme.images.apps.kioskApp,
    app_store: 'https://apps.apple.com/us/app/ordering-kiosk-2-0/id1609314960',
    google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.orderingkioskv5&hl=en&gl=US'
  }, {
    key: 'call_center',
    type: 2,
    title: t('ORDERING_CALL_CENTER', 'Call Center _version_').replace('_version_', '2.0'),
    short_description: t('CALL_CENTER_FREE_SHORT_DESCRIPTION', 'Take orders over the phone, too; agents will take orders over the phone and create the order for your customers in just a few minutes, using this friendly and intuitive software.'),
    long_description: t('CALL_CENTER_FREE_LONG_DESCRIPTION', 'Take orders over the phone, too; agents will take orders over the phone and create the order for your customers in just a few minutes, using this friendly and intuitive software.<br /><sub>This is a branded Ordering.co product; use it with your project, email, and password for free; features might be limited.</sub>'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Headset, null),
    image: theme.images.apps.callCenterApp,
    web_url: 'https://callcenter.tryordering.com/search'
  }];

  var handleOpenProductDetails = function handleOpenProductDetails(e, product) {
    var isInvalid = e.target.closest('.download-link');
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

    var isInvalid = e.target.closest('.free-product-row') || !((_productsRef$current = productsRef.current) !== null && _productsRef$current !== void 0 && _productsRef$current.contains(e.target));
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FreeProductsListContainer, {
    ref: productsRef
  }, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('FREE_PRODUCTS', 'Free products'))), /*#__PURE__*/_react.default.createElement(_styles2.ProductsRowListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductRow, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.AppImageWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.AppHeaderTitle, null, t('PRODUCTS', 'Products'))), /*#__PURE__*/_react.default.createElement(_styles2.AppDescriptionWarpper, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.AppHeaderTitle, null, t('DESCRIPTION', 'Description'))), /*#__PURE__*/_react.default.createElement(_styles2.AppDownloadLinksWrapper, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.AppHeaderTitle, null, t('DOWNLOAD', 'Download')))), productItems.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ProductRow, {
      key: product.key,
      className: "free-product-row",
      active: product.key === (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.key),
      onClick: function onClick(e) {
        return handleOpenProductDetails(e, product);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.AppImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
      src: product.image,
      alt: ""
    })), /*#__PURE__*/_react.default.createElement(_styles2.AppDescriptionWarpper, null, /*#__PURE__*/_react.default.createElement("h3", null, product.title), /*#__PURE__*/_react.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: product.short_description
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.AppDownloadLinksWrapper, null, product.type === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
      href: product.app_store,
      target: "_blank",
      className: "download-link"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.general.appStore,
      alt: "App store"
    })), /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
      href: product.google_play_store,
      target: "_blank",
      className: "download-link"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.general.googlePlay,
      alt: "Google play"
    }))), product.type === 2 && /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
      href: product.web_url,
      target: "_blank",
      isSingle: product.type === 2,
      className: "download-link"
    }, product.title)));
  }))), isOpenProduct && selectedProduct && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
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
    href: selectedProduct.app_store,
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.appStore,
    alt: "App store"
  })), /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
    href: selectedProduct.google_play_store,
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.googlePlay,
    alt: "Google play"
  }))), selectedProduct.type === 2 && /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
    href: selectedProduct.web_url,
    target: "_blank"
  }, selectedProduct.title)))));
};

exports.FreeProductsList = FreeProductsList;