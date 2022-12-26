"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductSummary = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Switch = require("../../../styles/Switch");
var _styles = require("../../../styles");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _ProductDesktopPreview = require("../ProductDesktopPreview");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductSummary = function ProductSummary(props) {
  var _productState$product5, _productState$product6, _productState$product7, _productState$product8, _productState$product9, _productState$product10, _productState$product11, _productState$product12, _productState$product13, _productState$product14, _productState$product15, _productState$product16, _productState$product17, _productState$product18, _productState$product19, _productState$product20, _productState$product21, _productState$product22, _productState$product23, _productState$product24, _productState$product25;
  var actionSidebar = props.actionSidebar,
    showOption = props.showOption,
    handleShowOption = props.handleShowOption,
    handleChangeProductActiveState = props.handleChangeProductActiveState,
    productState = props.productState,
    productCart = props.productCart,
    handleDeleteProduct = props.handleDeleteProduct,
    showProductOption = props.showProductOption;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    parsePrice = _useUtils2$.parsePrice;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEditMode = _useState2[0],
    setIsEditMode = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isProductPreview = _useState6[0],
    setIsProductPreview = _useState6[1];
  var _useState7 = (0, _react.useState)('desktop'),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedView = _useState8[0],
    setSelectedView = _useState8[1];
  var productConfigOptions = [{
    key: 'product_details',
    value: t('PRODUCT_DETAILS', 'Product details')
  }, {
    key: 'ingredients',
    value: /*#__PURE__*/_react.default.createElement("span", null, t('INGREDIENTS', 'Ingredients'), " / ", t('PROPERTIES', 'Properties'))
  }, {
    key: 'product_options',
    value: t('PRODUCT_OPTIONS', 'Product options')
  }, {
    key: 'product_images',
    value: t('PRODUCT_IMAGES', 'Product images')
  }, {
    key: 'product_video',
    value: t('PRODUCT_VIDEO', 'Product video')
  }
  // {
  //   key: 'custom_fields',
  //   value: t('CUSTOM_FIELDS', 'Custom fields')
  // },
  // {
  //   key: 'personalization',
  //   value: t('PERSONALIZATION', 'Personalization')
  // }
  ];

  var serviceConfigOptions = [{
    key: 'service_details',
    value: t('SERVICE_DETAILS', 'Service details')
  }, {
    key: 'professionals',
    value: t('PROFESSIONALS', 'Professionals')
  }, {
    key: 'product_options',
    value: t('PRODUCT_OPTIONS', 'Product options')
  }, {
    key: 'product_images',
    value: t('PRODUCT_IMAGES', 'Product images')
  }];
  var handleDeleteClick = function handleDeleteClick() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete this product?'),
      handleOnAccept: function handleOnAccept() {
        handleDeleteProduct();
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  var getPercentage = function getPercentage() {
    if (productState.product) {
      var _productState$product;
      if (productState !== null && productState !== void 0 && (_productState$product = productState.product) !== null && _productState$product !== void 0 && _productState$product.price) {
        var _productState$product2, _productState$product3, _productState$product4;
        return ((productState === null || productState === void 0 ? void 0 : (_productState$product2 = productState.product) === null || _productState$product2 === void 0 ? void 0 : _productState$product2.price) - (productState === null || productState === void 0 ? void 0 : (_productState$product3 = productState.product) === null || _productState$product3 === void 0 ? void 0 : _productState$product3.cost_price)) * 100 / (productState === null || productState === void 0 ? void 0 : (_productState$product4 = productState.product) === null || _productState$product4 === void 0 ? void 0 : _productState$product4.price);
      } else {
        return 100;
      }
    } else {
      return 0;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductDetailsContainer, {
    disabled: productState.loading
  }, /*#__PURE__*/_react.default.createElement(_styles2.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductName, null, productState === null || productState === void 0 ? void 0 : (_productState$product5 = productState.product) === null || _productState$product5 === void 0 ? void 0 : _productState$product5.name), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: (productState === null || productState === void 0 ? void 0 : (_productState$product6 = productState.product) === null || _productState$product6 === void 0 ? void 0 : _productState$product6.enabled) || false,
    onChange: handleChangeProductActiveState
  })), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    className: "product_actions",
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setIsProductPreview(true);
    }
  }, t('PREVIEW', 'Preview')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleShowOption('custom_fields');
    }
  }, t('CUSTOM_FIELDS', 'Custom fields')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleShowOption('personalization');
    }
  }, t('PERSONALIZATION', 'Personalization')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDeleteClick();
    }
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return isEditMode ? setIsEditMode(false) : actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement(_styles2.ProductSummaryContent, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductImageWrapper, null, productState !== null && productState !== void 0 && (_productState$product7 = productState.product) !== null && _productState$product7 !== void 0 && _productState$product7.images ? /*#__PURE__*/_react.default.createElement(_styles2.ProductImage, {
    bgimage: optimizeImage(productState === null || productState === void 0 ? void 0 : (_productState$product8 = productState.product) === null || _productState$product8 === void 0 ? void 0 : _productState$product8.images, 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_BiImage.default, null)), (productState === null || productState === void 0 ? void 0 : (_productState$product9 = productState.product) === null || _productState$product9 === void 0 ? void 0 : _productState$product9.type) !== 'service' && /*#__PURE__*/_react.default.createElement(_styles2.ProductSales, null, /*#__PURE__*/_react.default.createElement(_Shared.ProgressRing, {
    isShowPercent: true,
    percent: getPercentage(),
    size: 70,
    lineWidth: 8,
    progressColor: theme.colors.primary,
    trackColor: theme.colors.borderColor,
    caps: "round",
    children: true,
    spin: false,
    transitionDuration: 200
  }), /*#__PURE__*/_react.default.createElement(_styles2.RolWrapper, null, /*#__PURE__*/_react.default.createElement("h4", null, parsePrice((productState === null || productState === void 0 ? void 0 : (_productState$product10 = productState.product) === null || _productState$product10 === void 0 ? void 0 : _productState$product10.price) - (productState === null || productState === void 0 ? void 0 : (_productState$product11 = productState.product) === null || _productState$product11 === void 0 ? void 0 : _productState$product11.cost_price))), /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCT_SALES_ROI', 'Product sales ROI'))))), /*#__PURE__*/_react.default.createElement(_styles2.ProductDetailsContent, null, (productState === null || productState === void 0 ? void 0 : (_productState$product12 = productState.product) === null || _productState$product12 === void 0 ? void 0 : _productState$product12.type) !== 'service' && /*#__PURE__*/_react.default.createElement(_styles2.ProductDetails, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldsItem, null, /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(productState === null || productState === void 0 ? void 0 : (_productState$product13 = productState.product) === null || _productState$product13 === void 0 ? void 0 : _productState$product13.price)), /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCT_SELLING_PRICE', 'Selling price'))), (productState === null || productState === void 0 ? void 0 : (_productState$product14 = productState.product) === null || _productState$product14 === void 0 ? void 0 : _productState$product14.in_offer) && /*#__PURE__*/_react.default.createElement(_styles2.FieldsItem, null, /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(productState === null || productState === void 0 ? void 0 : (_productState$product15 = productState.product) === null || _productState$product15 === void 0 ? void 0 : _productState$product15.offer_price)), /*#__PURE__*/_react.default.createElement("p", null, t('REGULAR_PRICE', 'Regular Price'))), (productState === null || productState === void 0 ? void 0 : (_productState$product16 = productState.product) === null || _productState$product16 === void 0 ? void 0 : _productState$product16.cost_price) && /*#__PURE__*/_react.default.createElement(_styles2.FieldsItem, null, /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(productState === null || productState === void 0 ? void 0 : (_productState$product17 = productState.product) === null || _productState$product17 === void 0 ? void 0 : _productState$product17.cost_price)), /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCT_COST', 'Product cost'))), (productState === null || productState === void 0 ? void 0 : (_productState$product18 = productState.product) === null || _productState$product18 === void 0 ? void 0 : _productState$product18.cost_offer_price) && /*#__PURE__*/_react.default.createElement(_styles2.FieldsItem, null, /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(productState === null || productState === void 0 ? void 0 : (_productState$product19 = productState.product) === null || _productState$product19 === void 0 ? void 0 : _productState$product19.cost_offer_price)), /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCT_REGULAR_COST', 'Product cost - regular price')))), (productState === null || productState === void 0 ? void 0 : (_productState$product20 = productState.product) === null || _productState$product20 === void 0 ? void 0 : _productState$product20.type) === 'service' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PriceDuration, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(productState === null || productState === void 0 ? void 0 : (_productState$product21 = productState.product) === null || _productState$product21 === void 0 ? void 0 : _productState$product21.price)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022"), /*#__PURE__*/_react.default.createElement("span", null, productState === null || productState === void 0 ? void 0 : (_productState$product22 = productState.product) === null || _productState$product22 === void 0 ? void 0 : _productState$product22.duration, "min")), (productState === null || productState === void 0 ? void 0 : (_productState$product23 = productState.product) === null || _productState$product23 === void 0 ? void 0 : _productState$product23.description) && /*#__PURE__*/_react.default.createElement(_styles2.ProductDescription, null, productState === null || productState === void 0 ? void 0 : (_productState$product24 = productState.product) === null || _productState$product24 === void 0 ? void 0 : _productState$product24.description)), /*#__PURE__*/_react.default.createElement(_styles2.ProductConfigsContainer, null, ((productState === null || productState === void 0 ? void 0 : (_productState$product25 = productState.product) === null || _productState$product25 === void 0 ? void 0 : _productState$product25.type) === 'service' ? serviceConfigOptions : productConfigOptions).map(function (config) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ProductConfigOption, {
      key: config.key,
      active: showOption === config.key,
      onClick: function onClick() {
        return handleShowOption(config.key);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, config.value), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, null));
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    width: "700px",
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "900px",
    open: isProductPreview,
    onClose: function onClose() {
      setIsProductPreview(false);
      setSelectedView('desktop');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.ProductPreviewHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PREVIEW', 'Preview')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: selectedView === 'desktop' ? 'primary' : 'black',
    onClick: function onClick() {
      return setSelectedView('desktop');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Laptop, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: selectedView === 'mobile' ? 'primary' : 'black',
    onClick: function onClick() {
      return setSelectedView('mobile');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Phone, null)))), /*#__PURE__*/_react.default.createElement(_ProductDesktopPreview.ProductDesktopPreview, {
    isMobileView: selectedView === 'mobile',
    product: productState === null || productState === void 0 ? void 0 : productState.product,
    productCart: productCart,
    showProductOption: showProductOption
  })));
};
exports.ProductSummary = ProductSummary;