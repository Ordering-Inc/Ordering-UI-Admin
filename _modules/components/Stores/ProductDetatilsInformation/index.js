"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDetatilsInformation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Shared = require("../../Shared");

var _utils = require("../../../utils");

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _styles = require("../../../styles");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles2 = require("./styles");

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

var ProductDetatilsInformation = function ProductDetatilsInformation(props) {
  var _formState$changes3, _formState$changes4, _formState$result, _formState$changes5, _formState$changes6, _formState$changes7, _formState$changes8, _formState$changes9, _formState$changes10, _formState$changes$in, _formState$changes11, _formState$changes12, _formState$changes13, _product$ribbon, _formState$changes14, _formState$changes14$, _formState$changes15, _formState$changes15$, _product$ribbon2, _formState$changes$ri, _formState$changes16, _formState$changes16$, _product$ribbon3, _formState$changes17, _formState$changes17$, _formState$changes18, _formState$changes18$, _product$ribbon4, _formState$changes$ri2, _formState$changes19, _formState$changes19$, _product$ribbon5, _formState$changes24;

  var product = props.product,
      formState = props.formState,
      handlechangeImage = props.handlechangeImage,
      handleChangeInput = props.handleChangeInput,
      handleChangeFormState = props.handleChangeFormState,
      handleButtonUpdateClick = props.handleButtonUpdateClick,
      onCancel = props.onCancel;

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      optimizeImage = _useUtils2$.optimizeImage;

  var formMethods = (0, _reactHookForm.useForm)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var productImageInputRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      minimumRegualrPrice = _useState4[0],
      setMinimumRegualrPrice = _useState4[1];

  var _useState5 = (0, _react.useState)({
    name: null,
    data: null,
    open: false
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      cropState = _useState6[0],
      setCropState = _useState6[1];

  var _useState7 = (0, _react.useState)({
    isAutoGenerate: false,
    autoCodeText: product === null || product === void 0 ? void 0 : product.slug
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      autoGenerateCode = _useState8[0],
      setAutoGenerate = _useState8[1];

  var handleClickImage = function handleClickImage() {
    productImageInputRef.current.click();
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

      var reader = new window.FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = function () {
        setCropState({
          name: 'images',
          data: reader.result,
          open: true
        });
      };

      reader.onerror = function (error) {
        return console.log(error);
      };

      handlechangeImage(files[0]);
    }
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var stringToSlug = function stringToSlug(str) {
    var _str;

    str = str.replace(/^\s+|\s+$/g, ''); // trim

    str = (_str = str) === null || _str === void 0 ? void 0 : _str.toLowerCase(); // remove accents, swap ñ for n, etc

    var from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    var to = 'aaaaaaeeeeiiiioooouuuunc------';

    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '_') // collapse whitespace and replace by _
    .replace(/-+/g, '_') // collapse dashes
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, ''); // trim - from end of text

    return str;
  };

  var onSubmit = function onSubmit() {
    if (Object.keys(formState.changes).length > 0) {
      handleButtonUpdateClick();
    }
  };

  var handleChangeRegularPrice = function handleChangeRegularPrice(e) {
    if (e.target.value === '') {
      handleChangeInput({
        target: {
          name: 'offer_price',
          value: null
        }
      });
    } else {
      handleChangeInput(e);
    }
  };

  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeFormState(_defineProperty({}, cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg));
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        if (error.type === 'min') return t('REGULAR_PRICE_MUST_BIGGER_PRICE', 'This regular price must be bigger than price');else return error.message;
      });
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    if (autoGenerateCode.isAutoGenerate) {
      var generateCode = {
        target: {
          name: 'slug',
          value: formState.changes.name ? stringToSlug(formState.changes.name) : stringToSlug(product.name)
        }
      };
      setAutoGenerate(_objectSpread(_objectSpread({}, autoGenerateCode), {}, {
        autoCodeText: generateCode.target.value
      }));
      handleChangeInput(generateCode);
      setAutoGenerate(_objectSpread(_objectSpread({}, autoGenerateCode), {}, {
        isAutoGenerate: false
      }));
    }
  }, [autoGenerateCode]);
  (0, _react.useEffect)(function () {
    var _formState$changes;

    if (typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.price) !== 'undefined') {
      var _formState$changes2;

      setMinimumRegualrPrice(parseFloat(formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.price) + 0.01);
      return;
    }

    if (product !== null && product !== void 0 && product.price) {
      setMinimumRegualrPrice(parseFloat(product === null || product === void 0 ? void 0 : product.price) + 0.01);
    }
  }, [product === null || product === void 0 ? void 0 : product.price, formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.price]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.ProductImage, {
    onClick: function onClick() {
      return handleClickImage();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files);
    },
    childRef: function childRef(e) {
      productImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.images) || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) === 'Network Error' || formState.result.error ? (product === null || product === void 0 ? void 0 : product.images) && /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_200,c_limit'),
    alt: "product image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.images) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.images,
    alt: "product image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE_HERE', 'Put your image here'))))))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('Name_V2', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    placeholder: t('Name', 'name'),
    defaultValue: product === null || product === void 0 ? void 0 : product.name,
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: t('NAME_REQUIRED', 'The name is required')
    }),
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", {
    className: "space-between"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('PRICE', 'Price'))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "price",
    placeholder: parsePrice(0),
    defaultValue: product === null || product === void 0 ? void 0 : product.price,
    onChange: function onChange(e) {
      return handleChangeFormState({
        price: Number(e.target.value)
      });
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.RegularWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('REGULAR_PRICE', 'Regular Price')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (product === null || product === void 0 ? void 0 : product.in_offer) && (product === null || product === void 0 ? void 0 : product.offer_price) || false,
    onChange: function onChange(val) {
      return handleChangeFormState({
        in_offer: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "offer_price",
    placeholder: parsePrice(0),
    defaultValue: product === null || product === void 0 ? void 0 : product.offer_price,
    ref: formMethods.register({
      min: (typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.in_offer) === 'undefined' && (product === null || product === void 0 ? void 0 : product.in_offer) || (formState === null || formState === void 0 ? void 0 : (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.in_offer)) && minimumRegualrPrice,
      required: typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.in_offer) === 'undefined' && product !== null && product !== void 0 && product.in_offer || formState !== null && formState !== void 0 && (_formState$changes10 = formState.changes) !== null && _formState$changes10 !== void 0 && _formState$changes10.in_offer ? t('VALIDATION_ERROR_REQUIRED', 'The Regular Price field is required').replace('_attribute_', t('REGULAR_PRICE', 'Regular Price')) : false
    }),
    onChange: handleChangeRegularPrice,
    disabled: formState.loading || !((_formState$changes$in = formState === null || formState === void 0 ? void 0 : (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.in_offer) !== null && _formState$changes$in !== void 0 ? _formState$changes$in : product === null || product === void 0 ? void 0 : product.in_offer),
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 4,
    name: "description",
    placeholder: t('TYPE_BUSINESS_SHORT_DESCRIPTION', 'Write a little description'),
    defaultValue: product === null || product === void 0 ? void 0 : product.description,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "slug",
    placeholder: t('SLUG', 'Slug'),
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off",
    defaultValue: product === null || product === void 0 ? void 0 : product.slug
  }), /*#__PURE__*/_react.default.createElement(_styles2.Wrapper, {
    style: {
      paddingTop: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "7.6px",
    disabled: formState.loading,
    onClick: function onClick() {
      return setAutoGenerate(_objectSpread(_objectSpread({}, autoGenerateCode), {}, {
        isAutoGenerate: true
      }));
    }
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : t('AUTOGENERATE', 'Auto Generate')))), /*#__PURE__*/_react.default.createElement(_styles2.InventoryWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('INVENTORY', 'Inventory')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: product === null || product === void 0 ? void 0 : product.inventoried,
    onChange: function onChange(val) {
      return handleChangeFormState({
        inventoried: val
      });
    }
  })), (typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.inventoried) !== 'undefined' ? formState === null || formState === void 0 ? void 0 : (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.inventoried : product === null || product === void 0 ? void 0 : product.inventoried) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('QUANTITY', 'Quantity')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "quantity",
    placeholder: t('QUANTITY', 'Quantity'),
    defaultValue: product === null || product === void 0 ? void 0 : product.quantity,
    onChange: function onChange(e) {
      return handleChangeFormState({
        quantity: parseInt(e.target.value)
      });
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InventoryWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('RIBBON', 'Ribbon')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (product === null || product === void 0 ? void 0 : (_product$ribbon = product.ribbon) === null || _product$ribbon === void 0 ? void 0 : _product$ribbon.enabled) || false,
    onChange: function onChange(val) {
      return handleChangeRibbon({
        enabled: val
      });
    }
  })), (typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : (_formState$changes14$ = _formState$changes14.ribbon) === null || _formState$changes14$ === void 0 ? void 0 : _formState$changes14$.enabled) !== 'undefined' ? formState === null || formState === void 0 ? void 0 : (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : (_formState$changes15$ = _formState$changes15.ribbon) === null || _formState$changes15$ === void 0 ? void 0 : _formState$changes15$.enabled : product === null || product === void 0 ? void 0 : (_product$ribbon2 = product.ribbon) === null || _product$ribbon2 === void 0 ? void 0 : _product$ribbon2.enabled) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TEXT', 'Text')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "text",
    placeholder: t('TEXT', 'Text'),
    defaultValue: (_formState$changes$ri = formState === null || formState === void 0 ? void 0 : (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : (_formState$changes16$ = _formState$changes16.ribbon) === null || _formState$changes16$ === void 0 ? void 0 : _formState$changes16$.text) !== null && _formState$changes$ri !== void 0 ? _formState$changes$ri : product === null || product === void 0 ? void 0 : (_product$ribbon3 = product.ribbon) === null || _product$ribbon3 === void 0 ? void 0 : _product$ribbon3.text,
    onChange: function onChange(e) {
      return handleChangeRibbon({
        text: e.target.value
      });
    },
    disabled: formState.loading,
    autoComplete: "off",
    ref: formMethods.register({
      required: product !== null && product !== void 0 && product.ribbon && (typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : (_formState$changes17$ = _formState$changes17.ribbon) === null || _formState$changes17$ === void 0 ? void 0 : _formState$changes17$.enabled) !== 'undefined' ? formState === null || formState === void 0 ? void 0 : (_formState$changes18 = formState.changes) === null || _formState$changes18 === void 0 ? void 0 : (_formState$changes18$ = _formState$changes18.ribbon) === null || _formState$changes18$ === void 0 ? void 0 : _formState$changes18$.enabled : product === null || product === void 0 ? void 0 : (_product$ribbon4 = product.ribbon) === null || _product$ribbon4 === void 0 ? void 0 : _product$ribbon4.enabled) ? t('VALIDATION_ERROR_REQUIRED', 'The Ribbon text field is required').replace('_attribute_', t('Ribbon_Text', 'Ribbon text')) : false
    })
  })), /*#__PURE__*/_react.default.createElement(ColorShapeWrapper, null, /*#__PURE__*/_react.default.createElement(ColorWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('COLOR', 'Color')), /*#__PURE__*/_react.default.createElement(ColorPicker, {
    defaultColor: (_formState$changes$ri2 = formState === null || formState === void 0 ? void 0 : (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 ? void 0 : (_formState$changes19$ = _formState$changes19.ribbon) === null || _formState$changes19$ === void 0 ? void 0 : _formState$changes19$.color) !== null && _formState$changes$ri2 !== void 0 ? _formState$changes$ri2 : product === null || product === void 0 ? void 0 : (_product$ribbon5 = product.ribbon) === null || _product$ribbon5 === void 0 ? void 0 : _product$ribbon5.color,
    onChangeColor: function onChangeColor(color) {
      return handleChangeRibbon({
        color: color
      });
    }
  })), /*#__PURE__*/_react.default.createElement(ShapeWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SHAPE', 'Shape')), /*#__PURE__*/_react.default.createElement(ShapeContentWrapper, null, shape && Object.keys(shape).map(function (key, i) {
    var _shape, _shape2, _formState$changes20, _formState$changes20$, _formState$changes21, _formState$changes21$, _product$ribbon6, _formState$changes22, _formState$changes22$, _formState$changes23, _formState$changes23$, _product$ribbon7;

    return /*#__PURE__*/_react.default.createElement(ShapeBoxWrapper, {
      key: i,
      shapeRect: shape[key] === ((_shape = shape) === null || _shape === void 0 ? void 0 : _shape.rectangleRound),
      round: shape[key] === ((_shape2 = shape) === null || _shape2 === void 0 ? void 0 : _shape2.capsuleShape),
      active: formState !== null && formState !== void 0 && (_formState$changes20 = formState.changes) !== null && _formState$changes20 !== void 0 && (_formState$changes20$ = _formState$changes20.ribbon) !== null && _formState$changes20$ !== void 0 && _formState$changes20$.shape ? (formState === null || formState === void 0 ? void 0 : (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 ? void 0 : (_formState$changes21$ = _formState$changes21.ribbon) === null || _formState$changes21$ === void 0 ? void 0 : _formState$changes21$.shape) === shape[key] : (product === null || product === void 0 ? void 0 : (_product$ribbon6 = product.ribbon) === null || _product$ribbon6 === void 0 ? void 0 : _product$ribbon6.shape) === shape[key],
      onClick: function onClick() {
        return handleChangeRibbon({
          shape: shape[key]
        });
      }
    }, /*#__PURE__*/_react.default.createElement("div", null), (product !== null && product !== void 0 && product.ribbon && formState !== null && formState !== void 0 && (_formState$changes22 = formState.changes) !== null && _formState$changes22 !== void 0 && (_formState$changes22$ = _formState$changes22.ribbon) !== null && _formState$changes22$ !== void 0 && _formState$changes22$.shape ? (formState === null || formState === void 0 ? void 0 : (_formState$changes23 = formState.changes) === null || _formState$changes23 === void 0 ? void 0 : (_formState$changes23$ = _formState$changes23.ribbon) === null || _formState$changes23$ === void 0 ? void 0 : _formState$changes23$.shape) === shape[key] : (product === null || product === void 0 ? void 0 : (_product$ribbon7 = product.ribbon) === null || _product$ribbon7 === void 0 ? void 0 : _product$ribbon7.shape) === shape[key]) ? /*#__PURE__*/_react.default.createElement(RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(Circle, null));
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SEO_KEYWORDS', 'SEO Keywords')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "seo_keywords",
    placeholder: t('SEO_KEYWORDS', 'SEO Keywords'),
    defaultValue: (product === null || product === void 0 ? void 0 : product.seo_keywords) || '',
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off",
    ref: formMethods.register({
      required: typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes24 = formState.changes) === null || _formState$changes24 === void 0 ? void 0 : _formState$changes24.seo_keywords) !== 'undefined' ? t('VALIDATION_ERROR_REQUIRED', 'SEO Keywords field is required').replace('_attribute_', t('SEO_KEYWORDS', 'SEO Keywords')) : false
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, onCancel && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    outline: true,
    borderRadius: "7.6px",
    type: "button",
    onClick: function onClick() {
      return onCancel(false);
    },
    disabled: formState.loading
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "7.6px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    title: t('IMAGE_CROP', 'Image crop'),
    open: cropState === null || cropState === void 0 ? void 0 : cropState.open,
    onClose: function onClose() {
      return setCropState(_objectSpread(_objectSpread({}, cropState), {}, {
        open: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.ImageCrop, {
    photo: cropState === null || cropState === void 0 ? void 0 : cropState.data,
    handleChangePhoto: handleChangePhoto
  })));
};

exports.ProductDetatilsInformation = ProductDetatilsInformation;