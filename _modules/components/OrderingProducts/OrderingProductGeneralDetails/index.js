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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderingProductGeneralDetails = exports.OrderingProductGeneralDetails = function OrderingProductGeneralDetails(props) {
  var _formState$changes2, _siteState$site4, _siteState$site5, _formState$changes3, _formState$changes4, _formState$changes5, _siteState$site6, _siteState$site7, _formState$changes6, _formState$changes7, _formState$changes8, _siteState$site8, _siteState$site9, _formState$changes9, _formState$changes10, _ref2, _formState$changes$re, _formState$changes11, _siteState$site10, _ref3, _formState$changes$tr, _formState$changes12, _siteState$site11, _ref4, _formState$changes$de, _formState$changes13, _siteState$site12, _ref5, _formState$changes$ch, _formState$changes14, _siteState$site13, _ref6, _formState$changes$ca, _formState$changes15, _siteState$site14, _ref7, _formState$changes$pr, _formState$changes16, _siteState$site15, _siteState$site16;
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
  var fieldsToSync = ['business_url_template', 'cart_url_template', 'category_url_template', 'checkout_url_template', 'image', 'logo', 'header', 'social_share', 'profile_url_template', 'product_url_template', 'reset_password_url_template', 'track_order_url_template'];
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var sourceSite, changesToApply, _i, _Object$entries, _Object$entries$_i, name, value;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!isAddMode) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            if (!(formState !== null && formState !== void 0 && formState.loading || syncState.loading)) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return");
          case 4:
            sourceSite = getSourceSite();
            if (sourceSite) {
              _context.next = 8;
              break;
            }
            setAlertState({
              open: true,
              content: [t('NO_SOURCE_SITE_FOUND', 'No source site found to sync from.')]
            });
            return _context.abrupt("return");
          case 8:
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
              _context.next = 12;
              break;
            }
            setAlertState({
              open: true,
              content: [t('NOTHING_TO_SYNC', 'Nothing to sync. All fields already have values.')]
            });
            return _context.abrupt("return");
          case 12:
            try {
              setSyncState({
                loading: true
              });

              // Keep UI in sync immediately (inputs + controller formState)
              for (_i = 0, _Object$entries = Object.entries(changesToApply); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), name = _Object$entries$_i[0], value = _Object$entries$_i[1];
                if (['business_url_template', 'category_url_template', 'product_url_template'].includes(name)) {
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
          case 13:
          case "end":
            return _context.stop();
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
    src: formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.social_share,
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
    value: (_ref2 = (_formState$changes$re = formState === null || formState === void 0 || (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.reset_password_url_template) !== null && _formState$changes$re !== void 0 ? _formState$changes$re : (_siteState$site10 = siteState.site) === null || _siteState$site10 === void 0 ? void 0 : _siteState$site10.reset_password_url_template) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('TRACK_ORDER_URL_TEMPLATE', 'Track order url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "track_order_url_template",
    value: (_ref3 = (_formState$changes$tr = formState === null || formState === void 0 || (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.track_order_url_template) !== null && _formState$changes$tr !== void 0 ? _formState$changes$tr : (_siteState$site11 = siteState.site) === null || _siteState$site11 === void 0 ? void 0 : _siteState$site11.track_order_url_template) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "description",
    rows: 5,
    placeholder: t('SHORT_PROMOTION_ABOUT', 'Write a little description'),
    value: (_ref4 = (_formState$changes$de = formState === null || formState === void 0 || (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : (_siteState$site12 = siteState.site) === null || _siteState$site12 === void 0 ? void 0 : _siteState$site12.description) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CHECKOUT_URL_TEMPLATE', 'Checkout url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "checkout_url_template",
    value: (_ref5 = (_formState$changes$ch = formState === null || formState === void 0 || (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.checkout_url_template) !== null && _formState$changes$ch !== void 0 ? _formState$changes$ch : (_siteState$site13 = siteState.site) === null || _siteState$site13 === void 0 ? void 0 : _siteState$site13.checkout_url_template) !== null && _ref5 !== void 0 ? _ref5 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('CART_URL_TEMPLATE', 'Cart url template')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('URL', 'Url'),
    name: "cart_url_template",
    value: (_ref6 = (_formState$changes$ca = formState === null || formState === void 0 || (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.cart_url_template) !== null && _formState$changes$ca !== void 0 ? _formState$changes$ca : (_siteState$site14 = siteState.site) === null || _siteState$site14 === void 0 ? void 0 : _siteState$site14.cart_url_template) !== null && _ref6 !== void 0 ? _ref6 : '',
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
    value: (_ref7 = (_formState$changes$pr = formState === null || formState === void 0 || (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : _formState$changes16.profile_url_template) !== null && _formState$changes$pr !== void 0 ? _formState$changes$pr : (_siteState$site15 = siteState.site) === null || _siteState$site15 === void 0 ? void 0 : _siteState$site15.profile_url_template) !== null && _ref7 !== void 0 ? _ref7 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SaveBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    type: "submit",
    disabled: formState.loading || Object.keys(formState.changes).length === 0
  }, t('SAVE', 'Save')), !!enableAutoFillFromWebsite && !isAddMode && (siteState === null || siteState === void 0 || (_siteState$site16 = siteState.site) === null || _siteState$site16 === void 0 ? void 0 : _siteState$site16.code) !== 'website' && /*#__PURE__*/_react.default.createElement(_styles.Button, {
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