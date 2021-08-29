"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProductGeneral = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _utils = require("../../../../../utils");

var _FirstSelect = require("../../styles/Select/FirstSelect");

var _Buttons = require("../../styles/Buttons");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _FiCamera = _interopRequireDefault(require("@meronex/icons/fi/FiCamera"));

var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _Confirm = require("../Confirm");

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

var OrderingProductGeneral = function OrderingProductGeneral(props) {
  var _formState$changes, _formState$result, _formState$result2, _formState$changes2, _formState$changes3, _formState$changes4, _formState$result3, _formState$changes5, _formState$changes6, _formState$changes7, _formState$changes8, _formState$changes9, _formState$changes10, _formState$changes11, _formState$changes12, _formState$changes13, _formState$result4, _formState$result5, _formState$changes14, _formState$changes15;

  var product = props.product,
      handleUpdateOrderingProducts = props.handleUpdateOrderingProducts,
      orderingProductsList = props.orderingProductsList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var formMethods = (0, _reactHookForm.useForm)();

  var _useState = (0, _react.useState)({
    loading: false,
    changes: {},
    result: {
      error: null
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      productType = _useState6[0],
      setProductType = _useState6[1];

  var businessImageInputRef = (0, _react.useRef)(null);
  var socialImageInputRef = (0, _react.useRef)(null);
  var logoImageInputRef = (0, _react.useRef)(null);
  var productOptions = [{
    value: 'website',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('WEBSITE', 'Website'))
  }, {
    value: 'app',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('APP', 'App'))
  }];
  var defaultProduct = {
    id: 1,
    name: null,
    enabled: true,
    code: null,
    image: null,
    logo: null,
    type: null,
    description: null,
    url: null,
    reset_password_url: null,
    track_order_url: null,
    social: null
  };

  var handleClickImage = function handleClickImage(type) {
    if (type === 'image') {
      businessImageInputRef.current.click();
    }

    if (type === 'logo') {
      logoImageInputRef.current.click();
    }

    if (type === 'social') {
      socialImageInputRef.current.click();
    }
  };

  var handleFiles = function handleFiles(files, name) {
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

      handlechangeImage(files[0], name);
    }
  };

  var handleChangeFormState = function handleChangeFormState(type, value) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, type, value))
    }));
  };
  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */


  var handlechangeImage = function handlechangeImage(file, name) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, name, reader.result))
      }));
    };

    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  var onSubmit = function onSubmit() {
    if (!(formState !== null && formState !== void 0 && formState.changes.name)) {
      setAlertState({
        open: true,
        content: [t('FIELD_NAME_REQUIRED', 'The field name is required.')]
      });
      return;
    }

    if (product) {
      var _orderingProductsList;

      var found = orderingProductsList === null || orderingProductsList === void 0 ? void 0 : (_orderingProductsList = orderingProductsList.products) === null || _orderingProductsList === void 0 ? void 0 : _orderingProductsList.find(function (item) {
        return item.id === product.id;
      });

      if (found) {
        var _orderingProductsList2;

        var products = orderingProductsList === null || orderingProductsList === void 0 ? void 0 : (_orderingProductsList2 = orderingProductsList.products) === null || _orderingProductsList2 === void 0 ? void 0 : _orderingProductsList2.map(function (item) {
          if (item.id === product.id) {
            return _objectSpread(_objectSpread(_objectSpread({}, item), formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
              type: productType
            });
          }

          return item;
        });
        handleUpdateOrderingProducts && handleUpdateOrderingProducts(products);
      }
    } else {
      var _products = _toConsumableArray(orderingProductsList === null || orderingProductsList === void 0 ? void 0 : orderingProductsList.products);

      var id = _products.length > 0 ? _products[_products.length - 1].id + 1 : 1;

      _products.push(_objectSpread(_objectSpread(_objectSpread({}, defaultProduct), formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
        id: id,
        type: productType
      }));

      handleUpdateOrderingProducts && handleUpdateOrderingProducts(_products);
    }
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  (0, _react.useEffect)(function () {
    if (product) setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: product
    }));else setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {}
    }));
  }, [product]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.GeneralContainer, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessImg, {
    onClick: function onClick() {
      return handleClickImage('image');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'image');
    },
    childRef: function childRef(e) {
      businessImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'image');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.image) || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) === 'Network Error' || (_formState$result2 = formState.result) !== null && _formState$result2 !== void 0 && _formState$result2.error ? (product === null || product === void 0 ? void 0 : product.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: product === null || product === void 0 ? void 0 : product.image,
    alt: "header image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.image,
    alt: "header image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop'))))))), /*#__PURE__*/_react.default.createElement(_styles.LogoImage, {
    onClick: function onClick() {
      return handleClickImage('logo');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'logo');
    },
    childRef: function childRef(e) {
      logoImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'logo');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.logo) || ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) === 'Network Error' || formState.result.error ? (product === null || product === void 0 ? void 0 : product.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: product === null || product === void 0 ? void 0 : product.logo,
    alt: "logo image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.logo,
    alt: "logo image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.UploadImageIconContainer, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop'))))))), /*#__PURE__*/_react.default.createElement(_styles.SmallLogoImage, null, /*#__PURE__*/_react.default.createElement(_FiCamera.default, null)), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: t('NAME', 'Name'),
    value: (formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.name) || '',
    onChange: function onChange(e) {
      return handleChangeFormState('name', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('BUSINESS', 'Business')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: productOptions,
    className: "select",
    defaultValue: productType,
    placeholder: t('PRODUCT_TYPE', 'Product type'),
    onChange: function onChange(value) {
      return setProductType(value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('CODE', 'Code')), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: t('CODE', 'Code'),
    value: (formState === null || formState === void 0 ? void 0 : (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.code) || '',
    onChange: function onChange(e) {
      return handleChangeFormState('code', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('URL', 'URL')), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: t('URL', 'Url'),
    value: (formState === null || formState === void 0 ? void 0 : (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.url) || '',
    onChange: function onChange(e) {
      return handleChangeFormState('url', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement("textarea", {
    placeholder: t('WRITE_A_LITTLE_DESCRIPTION', 'Write a little description'),
    value: (formState === null || formState === void 0 ? void 0 : (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.description) || '',
    onChange: function onChange(e) {
      return handleChangeFormState('description', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('RESET_PASSWORD_URL_TEMPLATE', 'Reset password url template')), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: t('URL', 'Url'),
    value: (formState === null || formState === void 0 ? void 0 : (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.reset_password_url) || '',
    onChange: function onChange(e) {
      return handleChangeFormState('reset_password_url', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('TRACK_ORDER_URL_TEMPLATE', 'Track order url template')), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: t('URL', 'Url'),
    value: (formState === null || formState === void 0 ? void 0 : (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.track_order_url) || '',
    onChange: function onChange(e) {
      return handleChangeFormState('track_order_url', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-7"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('SOCIAL_SHARE', 'Social share')), /*#__PURE__*/_react.default.createElement(_styles.SocialImage, {
    onClick: function onClick() {
      return handleClickImage('social');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'social');
    },
    childRef: function childRef(e) {
      socialImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'social');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes13 = formState.changes) !== null && _formState$changes13 !== void 0 && _formState$changes13.social) || ((_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.result) === 'Network Error' || (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.error ? (product === null || product === void 0 ? void 0 : product.social) && /*#__PURE__*/_react.default.createElement("img", {
    src: product === null || product === void 0 ? void 0 : product.social,
    alt: "social image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.social) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.social,
    alt: "social image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop')))), /*#__PURE__*/_react.default.createElement(_styles.CameraIconContainer, null, /*#__PURE__*/_react.default.createElement(_FiCamera.default, null))))))), /*#__PURE__*/_react.default.createElement(_styles.SaveBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "7.6px",
    color: "primary",
    type: "submit",
    disabled: formState.loading
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ORDERING_PRODUCTS', 'Ordering products'),
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

exports.OrderingProductGeneral = OrderingProductGeneral;