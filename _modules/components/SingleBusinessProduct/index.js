"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessProduct = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _utils = require("../../utils");

var _Switch = require("../../styles/Switch");

var _Confirm = require("../Confirm");

var _reactBootstrap = require("react-bootstrap");

var _styledComponents = require("styled-components");

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SingleBusinessProductUI = function SingleBusinessProductUI(props) {
  var _productFormState$cha2, _product$id, _theme$images$icons, _productFormState$cha3, _productFormState$cha4, _productFormState$cha5, _productFormState$cha6, _productFormState$cha7, _productFormState$cha8, _productFormState$cha9;

  var isSkeleton = props.isSkeleton,
      viewMethod = props.viewMethod,
      product = props.product,
      allowColumns = props.allowColumns,
      handleChangeProductActive = props.handleChangeProductActive,
      handleUpdateClick = props.handleUpdateClick,
      deleteProduct = props.deleteProduct,
      handleOpenProductDetails = props.handleOpenProductDetails,
      productFormState = props.productFormState,
      handleChangeInput = props.handleChangeInput,
      handlechangeImage = props.handlechangeImage,
      isEditMode = props.isEditMode,
      productDetailsId = props.productDetailsId,
      businessState = props.businessState,
      handleUpdateBusinessState = props.handleUpdateBusinessState,
      dataSelected = props.dataSelected,
      setDataSelected = props.setDataSelected,
      business = props.business;
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

  var _useState3 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      confirm = _useState4[0],
      setConfirm = _useState4[1];

  var containerRef = (0, _react.useRef)(null);
  var ProductTypeImgRef = (0, _react.useRef)(null);

  var ActionIcon = /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null);

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
    var isInvalid = e.target.closest('.product_info') || e.target.closest('.product_price') || e.target.closest('.product_description') || e.target.closest('.product_enable_control') || e.target.closest('.product_actions') || e.target.closest('.description') || e.target.closest('.fee_fixed') || e.target.closest('.fee_percentage');
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

  var handleDrag = function handleDrag(event, productId) {
    var _productFormState$cha;

    event.dataTransfer.setData('transferProductId', productId);
    var ghostEle = document.createElement('div');
    ghostEle.classList.add('ghostDragging');
    ghostEle.innerHTML = productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha = productFormState.changes) === null || _productFormState$cha === void 0 ? void 0 : _productFormState$cha.name;
    document.body.appendChild(ghostEle);
    event.dataTransfer.setDragImage(ghostEle, 0, 0);
  };

  var handleAllowDrop = function handleAllowDrop(event) {
    event.preventDefault();
    var element = event.target.closest('.draggable-product');

    if (element) {
      setDataSelected(element.dataset.index);
    }
  };

  var handleDrop = function handleDrop(event) {
    var _businessState$busine;

    event.preventDefault();
    var transferProductId = parseInt(event.dataTransfer.getData('transferProductId'));

    var _categories = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.categories.map(function (item) {
      if (item.id === (product === null || product === void 0 ? void 0 : product.category_id)) {
        var transferProduct = item.products.find(function (_product) {
          return _product.id === transferProductId;
        });
        var updatedProducts = [];
        var counter;

        for (var i = 0; i < item.products.length; i++) {
          if (item.products[i].id === (product === null || product === void 0 ? void 0 : product.id)) {
            counter = i;
          }

          if (item.products[i].id !== transferProductId) {
            updatedProducts.push(item.products[i]);
          }
        }

        updatedProducts.splice(counter, 0, transferProduct);
        return _objectSpread(_objectSpread({}, item), {}, {
          products: updatedProducts
        });
      }

      return item;
    });

    handleUpdateBusinessState(_objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
      categories: _categories
    }));
  };

  var handleDragEnd = function handleDragEnd() {
    var elements = document.getElementsByClassName('ghostDragging');

    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }

    setDataSelected('');
  };

  var handleDeleteClick = function handleDeleteClick() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete this product?'),
      handleOnAccept: function handleOnAccept() {
        deleteProduct();
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };

  var taxProduct = (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha2 = productFormState.changes) === null || _productFormState$cha2 === void 0 ? void 0 : _productFormState$cha2.tax) || (business === null || business === void 0 ? void 0 : business.tax);
  var taxProductType = (taxProduct === null || taxProduct === void 0 ? void 0 : taxProduct.type) || (business === null || business === void 0 ? void 0 : business.tax_type);
  var taxProductTypeString = taxProductType === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price');
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, viewMethod === 'list' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.SingleListBusinessContainer, null, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", {
    className: "business"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 38,
    height: 38
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.price) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.description) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, {
    className: "description"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 30
  })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30
  })))) : /*#__PURE__*/_react.default.createElement(_styles.SingleListBusinessContainer, {
    ref: containerRef,
    active: product.id === productDetailsId,
    onClick: function onClick(e) {
      return handleProductClick(e);
    },
    onDragOver: function onDragOver(e) {
      return handleAllowDrop(e);
    },
    onDrop: function onDrop(e) {
      return handleDrop(e);
    },
    onDragEnd: function onDragEnd(e) {
      return handleDragEnd(e);
    },
    className: "draggable-product",
    "data-index": product.id,
    isAccept: dataSelected && dataSelected === (product === null || product === void 0 ? void 0 : (_product$id = product.id) === null || _product$id === void 0 ? void 0 : _product$id.toString())
  }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", {
    className: "business"
  }, /*#__PURE__*/_react.default.createElement(_styles.DragableContainer, {
    className: "product_info"
  }, /*#__PURE__*/_react.default.createElement(_styles.DragImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
    alt: "six dots",
    draggable: true,
    onDragStart: function onDragStart(e) {
      return handleDrag(e, product.id);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ProductTypeImage, {
    onClick: function onClick() {
      return handleClickImage();
    },
    disabled: productFormState === null || productFormState === void 0 ? void 0 : productFormState.loading
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
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadWrapper, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null))))), (product === null || product === void 0 ? void 0 : product.name) && /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "name",
    value: (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha5 = productFormState.changes) === null || _productFormState$cha5 === void 0 ? void 0 : _productFormState$cha5.name) || '',
    onChange: handleChangeInput,
    autoComplete: "off"
  })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.price) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "price",
    className: "product_price",
    value: (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha6 = productFormState.changes) === null || _productFormState$cha6 === void 0 ? void 0 : _productFormState$cha6.price) || '',
    onChange: handleChangeInput,
    autoComplete: "off"
  }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.description) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("textarea", {
    name: "description",
    className: "description",
    value: (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha7 = productFormState.changes) === null || _productFormState$cha7 === void 0 ? void 0 : _productFormState$cha7.description) || '',
    onChange: handleChangeInput,
    autoComplete: "off"
  }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.tax) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("div", null, (taxProduct === null || taxProduct === void 0 ? void 0 : taxProduct.rate) || taxProduct, "% (", taxProductTypeString, ")"))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.fee_fixed) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "fee_fixed",
    className: "fee_fixed",
    value: (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha8 = productFormState.changes) === null || _productFormState$cha8 === void 0 ? void 0 : _productFormState$cha8.fee_fixed) || '',
    onChange: handleChangeInput,
    autoComplete: "off"
  }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.fee_percentage) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "fee_percentage",
    className: "fee_percentage",
    value: (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha9 = productFormState.changes) === null || _productFormState$cha9 === void 0 ? void 0 : _productFormState$cha9.fee_percentage) || '',
    onChange: handleChangeInput,
    autoComplete: "off"
  }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.BusinessEnableWrapper, {
    className: "product_enable_control"
  }, product !== null && product !== void 0 && product.enabled ? /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')) : /*#__PURE__*/_react.default.createElement("span", null, t('DISABLE', 'Disable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: (product === null || product === void 0 ? void 0 : product.enabled) || false,
    onChange: handleChangeProductActive
  }))), /*#__PURE__*/_react.default.createElement("td", {
    className: "actions"
  }, /*#__PURE__*/_react.default.createElement(_styles.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    className: "product_actions",
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: ActionIcon,
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleOpenProductDetails(product);
    }
  }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDeleteClick();
    }
  }, t('DELETE', 'Delete')))))))), viewMethod === 'spreedsheet' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.SingleListBusinessContainer, null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "business"
  }, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30
  })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, {
    className: "description"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 30
  })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })))) : /*#__PURE__*/_react.default.createElement(_styles.SingleListBusinessContainer, null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, (product === null || product === void 0 ? void 0 : product.id) && /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.id))), /*#__PURE__*/_react.default.createElement("td", null, (product === null || product === void 0 ? void 0 : product.name) && /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.name))), /*#__PURE__*/_react.default.createElement("td", null, (product === null || product === void 0 ? void 0 : product.description) && /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.description))), /*#__PURE__*/_react.default.createElement("td", null, (product === null || product === void 0 ? void 0 : product.price) && /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, parsePrice(product === null || product === void 0 ? void 0 : product.price)))), /*#__PURE__*/_react.default.createElement("td", null, (product === null || product === void 0 ? void 0 : product.quantity) && /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.quantity)))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
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