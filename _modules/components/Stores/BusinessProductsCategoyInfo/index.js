"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsCategoyInfo = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _utils = require("../../../utils");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Shared = require("../../Shared");

var _styles = require("../../../styles");

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

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

var BusinessProductsCategoyInfo = function BusinessProductsCategoyInfo(props) {
  var _configState$configs, _configState$configs$, _formState$changes6, _formState$changes7, _formState$result3, _formState$changes8, _formState$changes9, _formState$changes10, _formState$result4, _formState$changes11, _formState$changes12, _formState$changes13, _formState$changes14, _formState$changes15, _formState$changes16, _formState$changes17, _formState$changes17$, _formState$changes18, _formState$changes18$, _formState$changes19, _formState$changes19$, _formState$changes20, _formState$changes20$, _formState$changes23;

  var formState = props.formState,
      handlechangeImage = props.handlechangeImage,
      handleChangeInput = props.handleChangeInput,
      handleUpdateClick = props.handleUpdateClick,
      handleChangeCheckBox = props.handleChangeCheckBox,
      category = props.category,
      categorySelected = props.categorySelected,
      parentCategories = props.parentCategories,
      handleChangeItem = props.handleChangeItem,
      isAddMode = props.isAddMode,
      isTutorialMode = props.isTutorialMode,
      handleTutorialSkip = props.handleTutorialSkip,
      handleChangeRibbon = props.handleChangeRibbon;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var useParentCategory = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.use_parent_category) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var logoImageInputRef = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      parentCategoriesOptions = _useState4[0],
      setParentCategoriesOptions = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      confirm = _useState6[0],
      setConfirm = _useState6[1];

  var _useState7 = (0, _react.useState)({
    name: null,
    data: null,
    open: false
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      cropState = _useState8[0],
      setCropState = _useState8[1];

  var _useState9 = (0, _react.useState)({
    isAutoGenerate: false,
    autoCodeText: categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.slug
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      autoGenerateCode = _useState10[0],
      setAutoGenerate = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isTouchedName = _useState12[0],
      setIsTouchedName = _useState12[1];

  var headerImageInputRef = (0, _react.useRef)(null);

  var handleClickImage = function handleClickImage(type) {
    if (type === 'header') {
      headerImageInputRef.current.click();
    }

    if (type === 'image') {
      logoImageInputRef.current.click();
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

      var reader = new window.FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = function () {
        setCropState({
          name: name,
          data: reader.result,
          open: true
        });
      };

      reader.onerror = function (error) {
        return console.log(error);
      };

      handlechangeImage(files[0], name);
    }
  };

  var onSubmit = function onSubmit() {
    var _formState$changes, _formState$changes$ri, _formState$changes2, _formState$changes2$r, _formState$changes3, _formState$changes3$r;

    if (typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : (_formState$changes$ri = _formState$changes.ribbon) === null || _formState$changes$ri === void 0 ? void 0 : _formState$changes$ri.enabled) !== 'undefined' && formState !== null && formState !== void 0 && (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && (_formState$changes2$r = _formState$changes2.ribbon) !== null && _formState$changes2$r !== void 0 && _formState$changes2$r.enabled && (formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : (_formState$changes3$r = _formState$changes3.ribbon) === null || _formState$changes3$r === void 0 ? void 0 : _formState$changes3$r.text) === '') {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'The Ribbon text field is required').replace('_attribute_', t('Ribbon_Text', 'Ribbon text'))
      });
      return;
    }

    handleUpdateClick && handleUpdateClick();
  };

  var handleChangeEnable = function handleChangeEnable(value) {
    if (!(category !== null && category !== void 0 && category.ribbon) && !value) {
      var ribbonChanges = _objectSpread({}, _utils.ribbonValues);

      handleChangeItem({
        ribbon: ribbonChanges
      });
      return;
    }

    handleChangeRibbon({
      enabled: value
    });
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
    .replace(/\s+/g, '_') // collapse whitespace and replace by -
    .replace(/-+/g, '_') // collapse dashes
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, ''); // trim - from end of text

    return str;
  };

  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeItem(_defineProperty({}, cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg));
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };

  (0, _react.useEffect)(function () {
    var _formState$result;

    if (formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: formState === null || formState === void 0 ? void 0 : (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.result]);
  (0, _react.useEffect)(function () {
    var _parentCategoriesOptions = parentCategories.map(function (category) {
      return {
        value: category.id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, category === null || category === void 0 ? void 0 : category.name)
      };
    });

    setParentCategoriesOptions(_parentCategoriesOptions);
  }, [parentCategories]);
  (0, _react.useEffect)(function () {
    if (autoGenerateCode.isAutoGenerate) {
      var _formState$changes4;

      var generateCode = {
        target: {
          name: 'slug',
          value: (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.name ? stringToSlug(formState.changes.name) : stringToSlug(categorySelected.name)
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
    var _formState$changes5;

    if (typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.name) === 'undefined' || !isTouchedName) return;
    var generateCode = {
      target: {
        name: 'slug',
        value: stringToSlug(formState.changes.name)
      }
    };
    handleChangeInput(generateCode);
  }, [formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.name, isTouchedName]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderImage, {
    onClick: function onClick() {
      return handleClickImage('header');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'header');
    },
    childRef: function childRef(e) {
      headerImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'header');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonImgWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes7 = formState.changes) !== null && _formState$changes7 !== void 0 && _formState$changes7.header) || ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) === 'Network Error' || formState.result.error ? (category === null || category === void 0 ? void 0 : category.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: category === null || category === void 0 ? void 0 : category.header,
    alt: "header image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.header,
    alt: "header image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE_HERE', 'Put your image here'))))))), /*#__PURE__*/_react.default.createElement(_styles2.LogoImage, {
    onClick: function onClick() {
      return handleClickImage('image');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'image');
    },
    childRef: function childRef(e) {
      logoImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'image');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonImgWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes10 = formState.changes) !== null && _formState$changes10 !== void 0 && _formState$changes10.image) || ((_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.result) === 'Network Error' || formState.result.error ? (category === null || category === void 0 ? void 0 : category.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: category === null || category === void 0 ? void 0 : category.image,
    alt: "logo image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.image,
    alt: "logo image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_BiImage.default, null)))))), /*#__PURE__*/_react.default.createElement(_styles2.CategoryNameWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('CATEGORY_NAME', 'Category name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('ENTER_CATEGORY_NAME', 'Enter a category name'),
    name: "name",
    value: (formState === null || formState === void 0 ? void 0 : (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.name) || '',
    onChange: function onChange(e) {
      !isTouchedName && setIsTouchedName(true);
      handleChangeInput(e);
    },
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.CategoryNameWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXTERNAL_ID', 'External Id')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('EXTERNAL_ID', 'External Id'),
    name: "external_id",
    value: (formState === null || formState === void 0 ? void 0 : (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.external_id) || '',
    onChange: handleChangeInput,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.CategoryNameWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    placeholder: t('TYPE_DESCRIPTION', 'Type description '),
    name: "description",
    value: (formState === null || formState === void 0 ? void 0 : (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.description) || '',
    onChange: handleChangeInput,
    autoComplete: "off"
  })), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.CategoryNameWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "slug",
    placeholder: t('SLUG', 'Slug'),
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (formState === null || formState === void 0 ? void 0 : (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : _formState$changes16.slug) || '',
    onKeyPress: function onKeyPress(e) {
      if (e.which === 32) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('RIBBON', 'Ribbon')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (formState === null || formState === void 0 ? void 0 : (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : (_formState$changes17$ = _formState$changes17.ribbon) === null || _formState$changes17$ === void 0 ? void 0 : _formState$changes17$.enabled) || false,
    onChange: function onChange(val) {
      return handleChangeEnable(val);
    }
  })), (formState === null || formState === void 0 ? void 0 : (_formState$changes18 = formState.changes) === null || _formState$changes18 === void 0 ? void 0 : (_formState$changes18$ = _formState$changes18.ribbon) === null || _formState$changes18$ === void 0 ? void 0 : _formState$changes18$.enabled) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.RibbonTextWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TEXT', 'Text')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "text",
    placeholder: t('TEXT', 'Text'),
    defaultValue: formState === null || formState === void 0 ? void 0 : (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 ? void 0 : (_formState$changes19$ = _formState$changes19.ribbon) === null || _formState$changes19$ === void 0 ? void 0 : _formState$changes19$.text,
    onChange: function onChange(e) {
      return handleChangeRibbon({
        text: e.target.value
      });
    },
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.ColorShapeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ColorWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('COLOR', 'Color')), /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
    defaultColor: formState === null || formState === void 0 ? void 0 : (_formState$changes20 = formState.changes) === null || _formState$changes20 === void 0 ? void 0 : (_formState$changes20$ = _formState$changes20.ribbon) === null || _formState$changes20$ === void 0 ? void 0 : _formState$changes20$.color,
    onChangeColor: function onChangeColor(color) {
      return handleChangeRibbon({
        color: color
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ShapeWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SHAPE', 'Shape')), /*#__PURE__*/_react.default.createElement(_styles2.ShapeContentWrapper, null, _utils.shape && Object.keys(_utils.shape).map(function (key, i) {
    var _formState$changes21, _formState$changes21$, _formState$changes22, _formState$changes22$;

    return /*#__PURE__*/_react.default.createElement(_styles2.ShapeBoxWrapper, {
      key: i,
      shapeRect: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
      round: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape),
      active: (formState === null || formState === void 0 ? void 0 : (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 ? void 0 : (_formState$changes21$ = _formState$changes21.ribbon) === null || _formState$changes21$ === void 0 ? void 0 : _formState$changes21$.shape) === _utils.shape[key],
      onClick: function onClick() {
        return handleChangeRibbon({
          shape: _utils.shape[key]
        });
      }
    }, /*#__PURE__*/_react.default.createElement("div", null), (formState === null || formState === void 0 ? void 0 : (_formState$changes22 = formState.changes) === null || _formState$changes22 === void 0 ? void 0 : (_formState$changes22$ = _formState$changes22.ribbon) === null || _formState$changes22$ === void 0 ? void 0 : _formState$changes22$.shape) === _utils.shape[key] ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null));
  }))))), useParentCategory === '1' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, categorySelected && isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.BusinessEnableWrapper, {
    style: {
      paddingTop: 20,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: 15
    }
  }, t('ADD_AS_SUBCATEGORY', 'Add as subcategory')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: false,
    onChange: function onChange(val) {
      return handleChangeCheckBox({
        enabledParent: val
      });
    }
  })), !isAddMode && categorySelected && parentCategories.length > 0 && /*#__PURE__*/_react.default.createElement(_styles2.ParentCategorySelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PARENT_CATEGORY', 'Parent category')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_PARENT_CATEGORY', 'Select a parent category'),
    options: parentCategoriesOptions,
    defaultValue: formState === null || formState === void 0 ? void 0 : (_formState$changes23 = formState.changes) === null || _formState$changes23 === void 0 ? void 0 : _formState$changes23.parent_category_id,
    onChange: function onChange(val) {
      return handleChangeItem({
        parent_category_id: val
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BtnWrapper, null, isTutorialMode ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SkipButton, {
    onClick: function onClick() {
      return handleTutorialSkip();
    }
  }, t('TUTORIAL_SKIP', 'Skip')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: onSubmit
  }, t('SAVE_AND_CONTINUE', 'Save and continue'))) : /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: onSubmit
  }, category ? t('SAVE', 'Save') : t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('BUSINESS_TYPE', 'Business type'),
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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

exports.BusinessProductsCategoyInfo = BusinessProductsCategoyInfo;