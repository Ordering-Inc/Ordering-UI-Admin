"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProductDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _utils = require("../../../utils");

var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _Shared = require("../../Shared");

var _styles = require("../../../styles");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _orderingComponentsAdmin = require("ordering-components-admin");

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

var OrderingProductDetailsUI = function OrderingProductDetailsUI(props) {
  var _siteState$site, _formState$changes, _siteState$site2, _siteState$site3, _formState$changes2, _formState$changes3, _formState$changes4, _siteState$site4, _siteState$site5, _formState$changes5, _formState$changes6, _ref, _formState$changes$na, _formState$changes7, _siteState$site6, _ref2, _formState$changes$co, _formState$changes8, _siteState$site7, _ref3, _formState$changes$ur, _formState$changes9, _siteState$site8, _formState$changes10, _siteState$site9, _siteState$site10, _formState$changes11, _formState$changes12, _ref4, _formState$changes$re, _formState$changes13, _siteState$site11, _ref5, _formState$changes$tr, _formState$changes14, _siteState$site12, _ref6, _formState$changes$de, _formState$changes15, _siteState$site13, _ref7, _formState$changes$ch, _formState$changes16, _siteState$site14, _ref8, _formState$changes$ca, _formState$changes17, _siteState$site15, _ref9, _formState$changes$bu, _formState$changes18, _siteState$site16, _ref10, _formState$changes$ca2, _formState$changes19, _siteState$site17, _ref11, _formState$changes$pr, _formState$changes20, _siteState$site18, _ref12, _formState$changes$pr2, _formState$changes21, _siteState$site19;

  var siteState = props.siteState,
      formState = props.formState,
      isAddMode = props.isAddMode,
      handleChangeInput = props.handleChangeInput,
      handlechangeImage = props.handlechangeImage,
      handleUpdateSite = props.handleUpdateSite,
      handleAddSite = props.handleAddSite,
      handleDeleteSite = props.handleDeleteSite;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

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

  var headerImageInputRef = (0, _react.useRef)(null);
  var logoImageInputRef = (0, _react.useRef)(null);
  var socialShareInputRef = (0, _react.useRef)(null);
  var moreOptions = [{
    value: 0,
    content: t('DELETE', 'Delete')
  }];

  var handleClickImage = function handleClickImage(type) {
    if (type === 'header') {
      headerImageInputRef.current.click();
    }

    if (type === 'logo') {
      logoImageInputRef.current.click();
    }

    if (type === 'social_share') {
      socialShareInputRef.current.click();
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

  var onSubmit = function onSubmit() {
    if (isAddMode) {
      handleAddSite && handleAddSite();
    } else {
      handleUpdateSite && handleUpdateSite();
    }
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var onClickDelete = function onClickDelete() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('PRODUCT', 'Product')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteSite();
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (!formState.error) return;
    setAlertState({
      open: true,
      content: formState.error
    });
  }, [formState.error]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  return /*#__PURE__*/_react.default.createElement(_styles2.DetailContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailHeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.TitleWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, (_siteState$site = siteState.site) === null || _siteState$site === void 0 ? void 0 : _siteState$site.name)), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    options: moreOptions,
    onChange: function onChange() {
      return onClickDelete();
    }
  }))), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.ContactUsContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('NEED_HELP_WITH_SET_UP', 'Do you need help with the setup?')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    outline: true,
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return window.open('https://www.ordering.co/ordering-sales', '_blank');
    }
  }, t('CONTACT_US', 'Contact us'))), /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessImg, {
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.header) || formState.error ? ((_siteState$site2 = siteState.site) === null || _siteState$site2 === void 0 ? void 0 : _siteState$site2.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: (_siteState$site3 = siteState.site) === null || _siteState$site3 === void 0 ? void 0 : _siteState$site3.header,
    alt: "header image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.header,
    alt: "header image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop'))))))), /*#__PURE__*/_react.default.createElement(_styles2.LogoImage, {
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.logo) || formState.error ? ((_siteState$site4 = siteState.site) === null || _siteState$site4 === void 0 ? void 0 : _siteState$site4.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: (_siteState$site5 = siteState.site) === null || _siteState$site5 === void 0 ? void 0 : _siteState$site5.logo,
    alt: "logo image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.logo,
    alt: "logo image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop'))))))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "name",
    placeholder: t('NAME', 'Name'),
    value: (_ref = (_formState$changes$na = formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : (_siteState$site6 = siteState.site) === null || _siteState$site6 === void 0 ? void 0 : _siteState$site6.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'The name field is required.').replace('_attribute_', t('NAME', 'Name'))
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CODE', 'Code')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "code",
    placeholder: t('CODE', 'Code'),
    value: (_ref2 = (_formState$changes$co = formState === null || formState === void 0 ? void 0 : (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.code) !== null && _formState$changes$co !== void 0 ? _formState$changes$co : (_siteState$site7 = siteState.site) === null || _siteState$site7 === void 0 ? void 0 : _siteState$site7.code) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'The name code is required.').replace('_attribute_', t('CODE', 'Code'))
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('URL', 'URL')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "url",
    placeholder: t('URL', 'Url'),
    value: (_ref3 = (_formState$changes$ur = formState === null || formState === void 0 ? void 0 : (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.url) !== null && _formState$changes$ur !== void 0 ? _formState$changes$ur : (_siteState$site8 = siteState.site) === null || _siteState$site8 === void 0 ? void 0 : _siteState$site8.url) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('URL', 'Url'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('SOCIAL_SHARE', 'Social share')), /*#__PURE__*/_react.default.createElement(_styles2.SocialShareImage, {
    onClick: function onClick() {
      return handleClickImage('social_share');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'social_share');
    },
    childRef: function childRef(e) {
      socialShareInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'social_share');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes10 = formState.changes) !== null && _formState$changes10 !== void 0 && _formState$changes10.social_share) || formState.error ? ((_siteState$site9 = siteState.site) === null || _siteState$site9 === void 0 ? void 0 : _siteState$site9.social_share) && /*#__PURE__*/_react.default.createElement("img", {
    src: (_siteState$site10 = siteState.site) === null || _siteState$site10 === void 0 ? void 0 : _siteState$site10.social_share,
    alt: "social share image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.social_share) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.social_share,
    alt: "social share image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop')))))))), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('RESET_PASSWORD_URL_TEMPLATE', 'Reset password url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "reset_password_url_template",
    placeholder: t('URL', 'Url'),
    value: (_ref4 = (_formState$changes$re = formState === null || formState === void 0 ? void 0 : (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.reset_password_url_template) !== null && _formState$changes$re !== void 0 ? _formState$changes$re : (_siteState$site11 = siteState.site) === null || _siteState$site11 === void 0 ? void 0 : _siteState$site11.reset_password_url_template) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('RESET_PASSWORD_URL_TEMPLATE', 'Reset password url template'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('TRACK_ORDER_URL_TEMPLATE', 'Track order url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "track_order_url_template",
    value: (_ref5 = (_formState$changes$tr = formState === null || formState === void 0 ? void 0 : (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.track_order_url_template) !== null && _formState$changes$tr !== void 0 ? _formState$changes$tr : (_siteState$site12 = siteState.site) === null || _siteState$site12 === void 0 ? void 0 : _siteState$site12.track_order_url_template) !== null && _ref5 !== void 0 ? _ref5 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('TRACK_ORDER_URL_TEMPLATE', 'Track order url template'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "description",
    rows: 5,
    placeholder: t('SHORT_PROMOTION_ABOUT', 'Write a little description'),
    value: (_ref6 = (_formState$changes$de = formState === null || formState === void 0 ? void 0 : (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : (_siteState$site13 = siteState.site) === null || _siteState$site13 === void 0 ? void 0 : _siteState$site13.description) !== null && _ref6 !== void 0 ? _ref6 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CHECKOUT_URL_TEMPLATE', 'Checkout url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "checkout_url_template",
    value: (_ref7 = (_formState$changes$ch = formState === null || formState === void 0 ? void 0 : (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : _formState$changes16.checkout_url_template) !== null && _formState$changes$ch !== void 0 ? _formState$changes$ch : (_siteState$site14 = siteState.site) === null || _siteState$site14 === void 0 ? void 0 : _siteState$site14.checkout_url_template) !== null && _ref7 !== void 0 ? _ref7 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('CHECKOUT_URL_TEMPLATE', 'Checkout url template'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CART_URL_TEMPLATE', 'Cart url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "cart_url_template",
    value: (_ref8 = (_formState$changes$ca = formState === null || formState === void 0 ? void 0 : (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : _formState$changes17.cart_url_template) !== null && _formState$changes$ca !== void 0 ? _formState$changes$ca : (_siteState$site15 = siteState.site) === null || _siteState$site15 === void 0 ? void 0 : _siteState$site15.cart_url_template) !== null && _ref8 !== void 0 ? _ref8 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('CART_URL_TEMPLATE', 'Cart url template'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('BUSINESS_URL_TEMPLATE', 'Business url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "business_url_template",
    value: (_ref9 = (_formState$changes$bu = formState === null || formState === void 0 ? void 0 : (_formState$changes18 = formState.changes) === null || _formState$changes18 === void 0 ? void 0 : _formState$changes18.business_url_template) !== null && _formState$changes$bu !== void 0 ? _formState$changes$bu : (_siteState$site16 = siteState.site) === null || _siteState$site16 === void 0 ? void 0 : _siteState$site16.business_url_template) !== null && _ref9 !== void 0 ? _ref9 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('BUSINESS_URL_TEMPLATE', 'Business url template'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CATEGORY_URL_TEMPLATE', 'Category url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "category_url_template",
    value: (_ref10 = (_formState$changes$ca2 = formState === null || formState === void 0 ? void 0 : (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 ? void 0 : _formState$changes19.category_url_template) !== null && _formState$changes$ca2 !== void 0 ? _formState$changes$ca2 : (_siteState$site17 = siteState.site) === null || _siteState$site17 === void 0 ? void 0 : _siteState$site17.category_url_template) !== null && _ref10 !== void 0 ? _ref10 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('CATEGORY_URL_TEMPLATE', 'Category url template'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('PRODUCT_URL_TEMPLATE', 'Product url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "product_url_template",
    value: (_ref11 = (_formState$changes$pr = formState === null || formState === void 0 ? void 0 : (_formState$changes20 = formState.changes) === null || _formState$changes20 === void 0 ? void 0 : _formState$changes20.product_url_template) !== null && _formState$changes$pr !== void 0 ? _formState$changes$pr : (_siteState$site18 = siteState.site) === null || _siteState$site18 === void 0 ? void 0 : _siteState$site18.product_url_template) !== null && _ref11 !== void 0 ? _ref11 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('PRODUCT_URL_TEMPLATE', 'Product url template'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('PROFILE_URL_TEMPLATE', 'Profile url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "profile_url_template",
    value: (_ref12 = (_formState$changes$pr2 = formState === null || formState === void 0 ? void 0 : (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 ? void 0 : _formState$changes21.profile_url_template) !== null && _formState$changes$pr2 !== void 0 ? _formState$changes$pr2 : (_siteState$site19 = siteState.site) === null || _siteState$site19 === void 0 ? void 0 : _siteState$site19.profile_url_template) !== null && _ref12 !== void 0 ? _ref12 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('PROFILE_URL_TEMPLATE', 'Profile url template'))
      }
    })
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SaveBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    type: "submit",
    disabled: formState.loading || Object.keys(formState.changes).length === 0
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
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

var OrderingProductDetails = function OrderingProductDetails(props) {
  var productDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderingProductDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SiteDetails, productDetailsProps);
};

exports.OrderingProductDetails = OrderingProductDetails;