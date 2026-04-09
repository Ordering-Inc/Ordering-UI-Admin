"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProductGeneralDetails = void 0;
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderingProductGeneralDetails = exports.OrderingProductGeneralDetails = function OrderingProductGeneralDetails(props) {
  var _formState$changes2, _siteState$site4, _siteState$site5, _formState$changes3, _formState$changes4, _formState$changes5, _siteState$site6, _siteState$site7, _formState$changes6, _formState$changes7, _formState$changes8, _siteState$site8, _siteState$site9, _formState$changes9, _formState$changes0, _ref2, _formState$changes$re, _formState$changes1, _siteState$site0, _ref3, _formState$changes$tr, _formState$changes10, _siteState$site1, _ref4, _formState$changes$de, _formState$changes11, _siteState$site10, _ref5, _formState$changes$ch, _formState$changes12, _siteState$site11, _ref6, _formState$changes$ca, _formState$changes13, _siteState$site12, _ref7, _formState$changes$pr, _formState$changes14, _siteState$site13, _siteState$site14;
  var siteState = props.siteState,
    formState = props.formState,
    isAddMode = props.isAddMode,
    handleChangeInput = props.handleChangeInput,
    handlechangeImage = props.handlechangeImage,
    handleUpdateSite = props.handleUpdateSite,
    handleAddSite = props.handleAddSite,
    sitesList = props.sitesList,
    enableAutoFillFromWebsite = props.enableAutoFillFromWebsite;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 2),
    configurations = _useApi2[1].configurations;
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors,
    watch = _useForm.watch,
    setValue = _useForm.setValue;
  var businessUrlTemplate = watch('business_url_template', '');
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    syncState = _useState4[0],
    setSyncState = _useState4[1];
  var headerImageInputRef = (0, _react.useRef)(null);
  var logoImageInputRef = (0, _react.useRef)(null);
  var socialShareInputRef = (0, _react.useRef)(null);
  var availableBusinessUrls = [{
    key: 0,
    value: '/:business_slug'
  }, {
    key: 1,
    value: '/store/:business_slug'
  }, {
    key: 2,
    value: '/store?<any>=:business_slug'
  }];
  var availableProductUrls = [{
    key: 0,
    value: '/store/:business_slug/:category_slug/:product_slug'
  }, {
    key: 1,
    value: '/store/:category_slug/:product_slug?<any>=:business_slug'
  }, {
    key: 2,
    value: '/store/:business_slug?<any>=:category_id&<any>=:product_id'
  }, {
    key: 3,
    value: '/:business_slug/:category_slug/:product_slug'
  }, {
    key: 4,
    value: '/:business_slug?<any>=:category_id&<any>=:product_id'
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
  var fieldsToSync = ['url', 'business_url_template', 'cart_url_template', 'category_url_template', 'checkout_url_template', 'image', 'logo', 'header', 'social_share', 'profile_url_template', 'product_url_template', 'reset_password_url_template', 'track_order_url_template'];
  var getSourceSite = function getSourceSite() {
    var _siteState$site, _websiteSite;
    var currentId = siteState === null || siteState === void 0 || (_siteState$site = siteState.site) === null || _siteState$site === void 0 ? void 0 : _siteState$site.id;
    var websiteSite = null;
    if (Array.isArray(sitesList) && sitesList.length > 0) {
      websiteSite = sitesList.find(function (s) {
        return (s === null || s === void 0 ? void 0 : s.code) === 'website';
      });
    }
    if (!websiteSite || ((_websiteSite = websiteSite) === null || _websiteSite === void 0 ? void 0 : _websiteSite.id) === currentId) {
      var storedSite = window.localStorage.getItem('website_site_details');
      if (storedSite) {
        var parsedSite = JSON.parse(storedSite);
        if ((parsedSite === null || parsedSite === void 0 ? void 0 : parsedSite.id) !== currentId) {
          websiteSite = parsedSite;
        }
      }
    }
    return websiteSite;
  };
  var handleSyncFromWebsite = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var sourceSite, changesToApply, formFieldsToSetValue, _i, _Object$entries, _Object$entries$_i, name, value;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!isAddMode) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (!(formState !== null && formState !== void 0 && formState.loading || syncState.loading)) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            sourceSite = getSourceSite();
            if (sourceSite) {
              _context.n = 3;
              break;
            }
            setAlertState({
              open: true,
              content: [t('NO_SOURCE_SITE_FOUND', 'No source site found to sync from.')]
            });
            return _context.a(2);
          case 3:
            changesToApply = fieldsToSync.reduce(function (acc, fieldName) {
              var _formState$changes$fi, _formState$changes, _siteState$site2;
              var currentValue = (_formState$changes$fi = formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes[fieldName]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : siteState === null || siteState === void 0 || (_siteState$site2 = siteState.site) === null || _siteState$site2 === void 0 ? void 0 : _siteState$site2[fieldName];
              if (currentValue) return acc;
              var sourceValue = sourceSite === null || sourceSite === void 0 ? void 0 : sourceSite[fieldName];
              if (sourceValue === null || sourceValue === undefined || sourceValue === '') return acc;
              acc[fieldName] = sourceValue;
              return acc;
            }, {});
            if (!(Object.keys(changesToApply).length === 0)) {
              _context.n = 4;
              break;
            }
            setAlertState({
              open: true,
              content: [t('NOTHING_TO_SYNC', 'Nothing to sync. All fields already have values.')]
            });
            return _context.a(2);
          case 4:
            try {
              setSyncState({
                loading: true
              });

              // Keep UI in sync immediately (inputs + controller formState)
              formFieldsToSetValue = ['url', 'business_url_template', 'category_url_template', 'product_url_template'];
              for (_i = 0, _Object$entries = Object.entries(changesToApply); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), name = _Object$entries$_i[0], value = _Object$entries$_i[1];
                if (formFieldsToSetValue.includes(name)) {
                  try {
                    setValue(name, value);
                  } catch (e) {}
                }
                // eslint-disable-next-line no-unused-expressions
                handleChangeInput === null || handleChangeInput === void 0 || handleChangeInput({
                  target: {
                    name: name,
                    value: value
                  }
                });
              }
            } finally {
              setSyncState({
                loading: false
              });
            }
          case 5:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleSyncFromWebsite() {
      return _ref.apply(this, arguments);
    };
  }();
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleValidateProductUrl = function handleValidateProductUrl(value) {
    if (businessUrlTemplate.includes('?')) {
      var urls = businessUrlTemplate.split('?');
      if (value.indexOf(urls[0]) === 0 && value.includes(urls[1])) {
        return true;
      } else {
        return t('VALIDATE_PRODUCT_TEMPLATE_URL', 'The product url template do not match with business url template');
      }
    } else {
      if (value.indexOf(businessUrlTemplate) === 0) {
        return true;
      } else {
        return t('VALIDATE_PRODUCT_TEMPLATE_URL', 'The product url template do not match with business url template');
      }
    }
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
  (0, _react.useEffect)(function () {
    if (isAddMode) return;
    var fields = ['name', 'code', 'url', 'business_url_template', 'category_url_template', 'product_url_template'];
    fields.forEach(function (field) {
      var _siteState$site3;
      setValue(field, ((_siteState$site3 = siteState.site) === null || _siteState$site3 === void 0 ? void 0 : _siteState$site3[field]) || '');
    });
  }, [siteState.site]);
  return /*#__PURE__*/_react.default.createElement(_styles2.DetailContainer, null, !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.ContactUsContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('NEED_HELP_WITH_SET_UP', 'Do you need help with the setup?')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    outline: true,
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return window.open("https://www.".concat(configurations === null || configurations === void 0 ? void 0 : configurations.subdomain, ".com/ordering-sales"), '_blank');
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.header) || formState.error ? ((_siteState$site4 = siteState.site) === null || _siteState$site4 === void 0 ? void 0 : _siteState$site4.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: (_siteState$site5 = siteState.site) === null || _siteState$site5 === void 0 ? void 0 : _siteState$site5.header,
    alt: "header image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.header,
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes5 = formState.changes) !== null && _formState$changes5 !== void 0 && _formState$changes5.logo) || formState.error ? ((_siteState$site6 = siteState.site) === null || _siteState$site6 === void 0 ? void 0 : _siteState$site6.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: (_siteState$site7 = siteState.site) === null || _siteState$site7 === void 0 ? void 0 : _siteState$site7.logo,
    alt: "logo image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.logo,
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
    autoComplete: "off",
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
    autoComplete: "off",
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
    autoComplete: "off",
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes8 = formState.changes) !== null && _formState$changes8 !== void 0 && _formState$changes8.social_share) || formState.error ? ((_siteState$site8 = siteState.site) === null || _siteState$site8 === void 0 ? void 0 : _siteState$site8.social_share) && /*#__PURE__*/_react.default.createElement("img", {
    src: (_siteState$site9 = siteState.site) === null || _siteState$site9 === void 0 ? void 0 : _siteState$site9.social_share,
    alt: "social share image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.social_share) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes0 = formState.changes) === null || _formState$changes0 === void 0 ? void 0 : _formState$changes0.social_share,
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
    value: (_ref2 = (_formState$changes$re = formState === null || formState === void 0 || (_formState$changes1 = formState.changes) === null || _formState$changes1 === void 0 ? void 0 : _formState$changes1.reset_password_url_template) !== null && _formState$changes$re !== void 0 ? _formState$changes$re : (_siteState$site0 = siteState.site) === null || _siteState$site0 === void 0 ? void 0 : _siteState$site0.reset_password_url_template) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('TRACK_ORDER_URL_TEMPLATE', 'Track order url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "track_order_url_template",
    value: (_ref3 = (_formState$changes$tr = formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.track_order_url_template) !== null && _formState$changes$tr !== void 0 ? _formState$changes$tr : (_siteState$site1 = siteState.site) === null || _siteState$site1 === void 0 ? void 0 : _siteState$site1.track_order_url_template) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "description",
    rows: 5,
    placeholder: t('SHORT_PROMOTION_ABOUT', 'Write a little description'),
    value: (_ref4 = (_formState$changes$de = formState === null || formState === void 0 || (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : (_siteState$site10 = siteState.site) === null || _siteState$site10 === void 0 ? void 0 : _siteState$site10.description) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CHECKOUT_URL_TEMPLATE', 'Checkout url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "checkout_url_template",
    value: (_ref5 = (_formState$changes$ch = formState === null || formState === void 0 || (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.checkout_url_template) !== null && _formState$changes$ch !== void 0 ? _formState$changes$ch : (_siteState$site11 = siteState.site) === null || _siteState$site11 === void 0 ? void 0 : _siteState$site11.checkout_url_template) !== null && _ref5 !== void 0 ? _ref5 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CART_URL_TEMPLATE', 'Cart url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "cart_url_template",
    value: (_ref6 = (_formState$changes$ca = formState === null || formState === void 0 || (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.cart_url_template) !== null && _formState$changes$ca !== void 0 ? _formState$changes$ca : (_siteState$site12 = siteState.site) === null || _siteState$site12 === void 0 ? void 0 : _siteState$site12.cart_url_template) !== null && _ref6 !== void 0 ? _ref6 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.LabelHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('BUSINESS_URL_TEMPLATE', 'Business url template')), /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InfoTitle, null, t('AVAILABLE_FORMATS', 'Available Formats')), availableBusinessUrls.map(function (url) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Info, {
      key: url.key
    }, url.value);
  })))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "business_url_template",
    autoComplete: "off",
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(^\/)(store)?((\/?:business_slug$)|(\/?\?[a-zA-Z]+=:business_slug$))$/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('BUSINESS_URL_TEMPLATE', 'Business url template'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.LabelHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CATEGORY_URL_TEMPLATE', 'Category url template')), /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InfoTitle, null, t('AVAILABLE_FORMATS', 'Available Formats')), /*#__PURE__*/_react.default.createElement(_styles2.Info, null, "store/:business_slug/:category_slug"), /*#__PURE__*/_react.default.createElement(_styles2.Info, null, "store/:category_slug?", '<any>', "=:business_slug"), /*#__PURE__*/_react.default.createElement(_styles2.Info, null, ":business_slug/:category_slug"), /*#__PURE__*/_react.default.createElement(_styles2.Info, null, ":category_slug?", '<any>', "=:business_slug")))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "category_url_template",
    autoComplete: "off",
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(store\/)?((:business_slug\/:category_slug$)|(:category_slug\?[a-zA-Z]+=:business_slug$))$/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('CATEGORY_URL_TEMPLATE', 'Category url template'))
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.LabelHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('PRODUCT_URL_TEMPLATE', 'Product url template')), /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InfoTitle, null, t('AVAILABLE_FORMATS', 'Available Formats')), availableProductUrls.map(function (url) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Info, {
      key: url.key
    }, url.value);
  })))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "product_url_template",
    autoComplete: "off",
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      pattern: {
        value: /(^\/)(store\/)?((:business_slug\/:category_slug\/:product_slug$)|(:category_slug\/:product_slug\?[a-zA-Z]+=:business_slug$)|(:business_slug\?[a-zA-Z]+=:category_id&[a-zA-Z]+=:product_id$))$/g,
        message: t('VALIDATION_ERROR_ACTIVE_URL', 'The _attribute_ is not a valid URL.').replace('_attribute_', t('PRODUCT_URL_TEMPLATE', 'Product url template'))
      },
      validate: handleValidateProductUrl
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('PROFILE_URL_TEMPLATE', 'Profile url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "profile_url_template",
    value: (_ref7 = (_formState$changes$pr = formState === null || formState === void 0 || (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.profile_url_template) !== null && _formState$changes$pr !== void 0 ? _formState$changes$pr : (_siteState$site13 = siteState.site) === null || _siteState$site13 === void 0 ? void 0 : _siteState$site13.profile_url_template) !== null && _ref7 !== void 0 ? _ref7 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SaveBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    type: "submit",
    disabled: formState.loading || Object.keys(formState.changes).length === 0
  }, t('SAVE', 'Save')), !!enableAutoFillFromWebsite && !isAddMode && (siteState === null || siteState === void 0 || (_siteState$site14 = siteState.site) === null || _siteState$site14 === void 0 ? void 0 : _siteState$site14.code) !== 'website' && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    outline: true,
    borderRadius: "7.6px",
    color: "primary",
    type: "button",
    disabled: formState.loading || syncState.loading,
    onClick: handleSyncFromWebsite
  }, syncState.loading ? t('LOADING', 'Loading') : t('FILL_FROM_WEBSITE', 'Fill from Website')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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