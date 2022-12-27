"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessProduct = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _utils = require("../../../utils");
var _Switch = require("../../../styles/Switch");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SingleBusinessProductUI = function SingleBusinessProductUI(props) {
  var _productFormState$cha, _productFormState$cha2, _product$id, _theme$images$icons, _productFormState$cha3, _productFormState$cha4, _productFormState$cha5, _productFormState$cha6, _productFormState$cha7, _productFormState$cha8, _productFormState$cha9, _productFormState$cha10, _productFormState$cha11, _ref, _taxProduct$rate, _productFormState$cha12, _productFormState$cha13, _productFormState$cha14, _productFormState$cha15, _productFormState$cha16, _productFormState$cha17, _productFormState$cha18;
  var isSkeleton = props.isSkeleton,
    viewMethod = props.viewMethod,
    product = props.product,
    allowColumns = props.allowColumns,
    handleChangeProductActive = props.handleChangeProductActive,
    handleUpdateClick = props.handleUpdateClick,
    handleOpenProductDetails = props.handleOpenProductDetails,
    productFormState = props.productFormState,
    handlechangeImage = props.handlechangeImage,
    isEditMode = props.isEditMode,
    productDetailsId = props.productDetailsId,
    dataSelected = props.dataSelected,
    business = props.business,
    handleDragStart = props.handleDragStart,
    handleDragOver = props.handleDragOver,
    handleDrop = props.handleDrop,
    handleDragEnd = props.handleDragEnd,
    isLastProduct = props.isLastProduct,
    isProductsBottom = props.isProductsBottom;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    optimizeImage = _useUtils2$.optimizeImage;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var containerRef = (0, _react.useRef)(null);
  var ProductTypeImgRef = (0, _react.useRef)(null);
  var handleClickImage = function handleClickImage() {
    ProductTypeImgRef.current.click();
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleFiles = function handleFiles(files) {
    if (files.length === 1) {
      var _files$;
      var type = files[0].type.split('/')[0];
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        });
        return;
      }
      if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        });
        return;
      }
      handlechangeImage(files[0]);
    }
  };
  var closeProductEdit = function closeProductEdit(e) {
    var _containerRef$current;
    var outsideDropdown = !((_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e.target));
    if (outsideDropdown) {
      if (!e.target.closest('.popup-component')) {
        if (isEditMode && Object.keys(productFormState === null || productFormState === void 0 ? void 0 : productFormState.changes).length > 0 && !(productFormState !== null && productFormState !== void 0 && productFormState.loading)) {
          handleUpdateClick();
        }
      }
    }
  };
  var handleProductClick = function handleProductClick(e) {
    var isInvalid = e.target.closest('.product_enable_control');
    if (isInvalid) return;
    handleOpenProductDetails(product);
  };
  (0, _react.useEffect)(function () {
    var _productFormState$res;
    if (productFormState !== null && productFormState !== void 0 && (_productFormState$res = productFormState.result) !== null && _productFormState$res !== void 0 && _productFormState$res.error) {
      var _productFormState$res2;
      setAlertState({
        open: true,
        content: productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$res2 = productFormState.result) === null || _productFormState$res2 === void 0 ? void 0 : _productFormState$res2.result
      });
    }
  }, [productFormState === null || productFormState === void 0 ? void 0 : productFormState.result]);
  (0, _react.useEffect)(function () {
    document.addEventListener('click', closeProductEdit);
    return function () {
      return document.removeEventListener('click', closeProductEdit);
    };
  }, [productFormState]);
  var taxProduct = (_productFormState$cha = productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha2 = productFormState.changes) === null || _productFormState$cha2 === void 0 ? void 0 : _productFormState$cha2.tax) !== null && _productFormState$cha !== void 0 ? _productFormState$cha : business === null || business === void 0 ? void 0 : business.tax;
  var taxProductType = (taxProduct === null || taxProduct === void 0 ? void 0 : taxProduct.type) || (business === null || business === void 0 ? void 0 : business.tax_type);
  var taxProductTypeString = taxProductType === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price');
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, viewMethod === 'list' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.SingleListBusinessContainer, null, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.products) && /*#__PURE__*/_react.default.createElement("td", {
    className: "products"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 38,
    height: 38
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.description) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, {
    className: "description"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 10,
    count: 2
  }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.price) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.offer_price) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.cost_price) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.tax) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.fee) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })))) : /*#__PURE__*/_react.default.createElement(_styles.SingleListBusinessContainer, {
    ref: containerRef,
    active: product.id === productDetailsId,
    onClick: function onClick(e) {
      return handleProductClick(e);
    },
    onDragOver: function onDragOver(e) {
      return handleDragOver === null || handleDragOver === void 0 ? void 0 : handleDragOver(e, isLastProduct);
    },
    onDrop: function onDrop(e) {
      return handleDrop(e);
    },
    onDragEnd: function onDragEnd(e) {
      return handleDragEnd(e);
    },
    className: "draggable-product",
    "data-index": product.id,
    isAccept: dataSelected && dataSelected === (product === null || product === void 0 ? void 0 : (_product$id = product.id) === null || _product$id === void 0 ? void 0 : _product$id.toString()),
    isBorderBottom: isProductsBottom && isLastProduct
  }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.products) && /*#__PURE__*/_react.default.createElement("td", {
    className: "products"
  }, /*#__PURE__*/_react.default.createElement(_styles.DragableContainer, {
    className: "product_info"
  }, /*#__PURE__*/_react.default.createElement(_styles.DragImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
    alt: "six dots",
    draggable: true,
    onDragStart: function onDragStart(e) {
      return handleDragStart === null || handleDragStart === void 0 ? void 0 : handleDragStart(e, product.id);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ProductTypeImage, {
    onClick: function onClick() {
      return handleClickImage();
    },
    disabled: true
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files);
    },
    childRef: function childRef(e) {
      ProductTypeImgRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: productFormState === null || productFormState === void 0 ? void 0 : productFormState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: productFormState === null || productFormState === void 0 ? void 0 : productFormState.loading
  }, productFormState !== null && productFormState !== void 0 && (_productFormState$cha3 = productFormState.changes) !== null && _productFormState$cha3 !== void 0 && _productFormState$cha3.images ? /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha4 = productFormState.changes) === null || _productFormState$cha4 === void 0 ? void 0 : _productFormState$cha4.images, 'h_50,c_limit'),
    alt: "product image",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadWrapper, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null))))), (product === null || product === void 0 ? void 0 : product.name) && /*#__PURE__*/_react.default.createElement("div", {
    className: "product_name"
  }, (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha5 = productFormState.changes) === null || _productFormState$cha5 === void 0 ? void 0 : _productFormState$cha5.name) || '')))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.description) && /*#__PURE__*/_react.default.createElement("td", {
    className: "description"
  }, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "product_description"
  }, (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha6 = productFormState.changes) === null || _productFormState$cha6 === void 0 ? void 0 : _productFormState$cha6.description) || ''))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.price) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "product_price"
  }, parsePrice((productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha7 = productFormState.changes) === null || _productFormState$cha7 === void 0 ? void 0 : _productFormState$cha7.price) || 0)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.offer_price) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "product_price"
  }, productFormState !== null && productFormState !== void 0 && (_productFormState$cha8 = productFormState.changes) !== null && _productFormState$cha8 !== void 0 && _productFormState$cha8.offer_price ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, parsePrice(productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha9 = productFormState.changes) === null || _productFormState$cha9 === void 0 ? void 0 : _productFormState$cha9.offer_price)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ' ')))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.cost_price) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "product_price"
  }, productFormState !== null && productFormState !== void 0 && (_productFormState$cha10 = productFormState.changes) !== null && _productFormState$cha10 !== void 0 && _productFormState$cha10.cost_price ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, parsePrice(productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha11 = productFormState.changes) === null || _productFormState$cha11 === void 0 ? void 0 : _productFormState$cha11.cost_price)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ' ')))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.tax) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "product_tax"
  }, (_ref = (_taxProduct$rate = taxProduct === null || taxProduct === void 0 ? void 0 : taxProduct.rate) !== null && _taxProduct$rate !== void 0 ? _taxProduct$rate : taxProduct) !== null && _ref !== void 0 ? _ref : 0, "% (", taxProductTypeString, ")"))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.fee) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "product_fee"
  }, parsePrice((_productFormState$cha12 = productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha13 = productFormState.changes) === null || _productFormState$cha13 === void 0 ? void 0 : (_productFormState$cha14 = _productFormState$cha13.fee) === null || _productFormState$cha14 === void 0 ? void 0 : _productFormState$cha14.fixed) !== null && _productFormState$cha12 !== void 0 ? _productFormState$cha12 : 0), " + ", (_productFormState$cha15 = productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha16 = productFormState.changes) === null || _productFormState$cha16 === void 0 ? void 0 : (_productFormState$cha17 = _productFormState$cha16.fee) === null || _productFormState$cha17 === void 0 ? void 0 : _productFormState$cha17.percentage) !== null && _productFormState$cha15 !== void 0 ? _productFormState$cha15 : business === null || business === void 0 ? void 0 : business.service_fee, "%"))), /*#__PURE__*/_react.default.createElement("td", {
    className: "actions"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessEnableWrapper, {
    className: "product_enable_control"
  }, product !== null && product !== void 0 && product.enabled ? /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')) : /*#__PURE__*/_react.default.createElement("span", null, t('DISABLE', 'Disable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: (product === null || product === void 0 ? void 0 : product.enabled) || false,
    onChange: handleChangeProductActive
  })))))), viewMethod === 'spreedsheet' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.SingleListBusinessContainer, null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 40,
    height: 20
  })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80,
    height: 15
  })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, {
    className: "description"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 15
  })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80,
    height: 15
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 20,
    height: 20
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80,
    height: 15
  })))) : /*#__PURE__*/_react.default.createElement(_styles.SingleListBusinessContainer, null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, (product === null || product === void 0 ? void 0 : product.id) && /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.id))), /*#__PURE__*/_react.default.createElement("td", null, (product === null || product === void 0 ? void 0 : product.name) && /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.name))), /*#__PURE__*/_react.default.createElement("td", null, (product === null || product === void 0 ? void 0 : product.description) && /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.description))), /*#__PURE__*/_react.default.createElement("td", null, (product === null || product === void 0 ? void 0 : product.price) && /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, parsePrice(product === null || product === void 0 ? void 0 : product.price)))), /*#__PURE__*/_react.default.createElement("td", null, (product === null || product === void 0 ? void 0 : product.offer_price) && /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, parsePrice(productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha18 = productFormState.changes) === null || _productFormState$cha18 === void 0 ? void 0 : _productFormState$cha18.offer_price)))), /*#__PURE__*/_react.default.createElement("td", null, (product === null || product === void 0 ? void 0 : product.quantity) && /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.quantity)))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('PRODUCT', 'Product'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var SingleBusinessProduct = function SingleBusinessProduct(props) {
  var isSkeleton = props.isSkeleton;
  var singleBusinessProductProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleBusinessProductUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(SingleBusinessProductUI, props) : /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SingleBusinessProduct, singleBusinessProductProps));
};
exports.SingleBusinessProduct = SingleBusinessProduct;