"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessProduct = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactToastify = require("react-toastify");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _utils = require("../../../../../utils");

var _Switch = require("../../styles/Switch");

var _Confirm = require("../Confirm");

var _reactBootstrap = require("react-bootstrap");

var _styledComponents = require("styled-components");

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SingleBusinessProductUI = function SingleBusinessProductUI(props) {
  var _productFormState$cha, _productFormState$cha2, _productFormState$cha3, _productFormState$cha4, _productFormState$cha5;

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
      isEditMode = props.isEditMode;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var conatinerRef = (0, _react.useRef)(null);
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
    var _conatinerRef$current;

    var outsideDropdown = !((_conatinerRef$current = conatinerRef.current) === null || _conatinerRef$current === void 0 ? void 0 : _conatinerRef$current.contains(e.target));

    if (outsideDropdown) {
      if (!e.target.closest('.popup-component')) {
        if (isEditMode && Object.keys(productFormState === null || productFormState === void 0 ? void 0 : productFormState.changes).length > 0 && !(productFormState === null || productFormState === void 0 ? void 0 : productFormState.loading)) {
          handleUpdateClick();
        }
      }
    }
  };

  (0, _react.useEffect)(function () {
    var _productFormState$res;

    if (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$res = productFormState.result) === null || _productFormState$res === void 0 ? void 0 : _productFormState$res.error) {
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
  (0, _react.useEffect)(function () {
    if ((productFormState === null || productFormState === void 0 ? void 0 : productFormState.changes) && !(productFormState === null || productFormState === void 0 ? void 0 : productFormState.result.error) && !(productFormState === null || productFormState === void 0 ? void 0 : productFormState.loading)) {
      var _productFormState$res3;

      var toastConfigure = {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      };
      var content = productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$res3 = productFormState.result) === null || _productFormState$res3 === void 0 ? void 0 : _productFormState$res3.result;

      _reactToastify.toast.dark(content, toastConfigure);
    }
  }, [productFormState === null || productFormState === void 0 ? void 0 : productFormState.loading]);
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
    ref: conatinerRef
  }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", {
    className: "business"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ProductTypeImage, {
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
  }, (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha = productFormState.changes) === null || _productFormState$cha === void 0 ? void 0 : _productFormState$cha.images) ? /*#__PURE__*/_react.default.createElement("img", {
    src: productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha2 = productFormState.changes) === null || _productFormState$cha2 === void 0 ? void 0 : _productFormState$cha2.images,
    alt: "business type image",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadWrapper, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null))))), (product === null || product === void 0 ? void 0 : product.name) && /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "name",
    value: (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha3 = productFormState.changes) === null || _productFormState$cha3 === void 0 ? void 0 : _productFormState$cha3.name) || '',
    onChange: handleChangeInput,
    autoComplete: "off"
  }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.price) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "price",
    value: (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha4 = productFormState.changes) === null || _productFormState$cha4 === void 0 ? void 0 : _productFormState$cha4.price) || '',
    onChange: handleChangeInput,
    autoComplete: "off"
  }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.description) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("textarea", {
    name: "description",
    value: (productFormState === null || productFormState === void 0 ? void 0 : (_productFormState$cha5 = productFormState.changes) === null || _productFormState$cha5 === void 0 ? void 0 : _productFormState$cha5.description) || '',
    onChange: handleChangeInput,
    autoComplete: "off",
    className: "description"
  }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.BusinessEnableWrapper, {
    className: "business_enable_control"
  }, (product === null || product === void 0 ? void 0 : product.enabled) ? /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')) : /*#__PURE__*/_react.default.createElement("span", null, t('DISABLE', 'Disable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: (product === null || product === void 0 ? void 0 : product.enabled) || false,
    onChange: handleChangeProductActive
  }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: (theme === null || theme === void 0 ? void 0 : theme.rtl) ? 'left' : 'right',
    title: ActionIcon,
    id: (theme === null || theme === void 0 ? void 0 : theme.rtl) ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleOpenProductDetails(product);
    }
  }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: deleteProduct
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