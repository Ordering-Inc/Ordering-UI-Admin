"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtras = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _ProductExtraOptions = require("../ProductExtraOptions");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _utils = require("../../../utils");
var _SnoozeComponent = require("../SnoozeComponent");
var _styles2 = require("./styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ProductExtrasUI = function ProductExtrasUI(props) {
  var _extrasState$extras4;
  var productState = props.productState,
    extrasState = props.extrasState,
    isAddMode = props.isAddMode,
    handleOpenAddForm = props.handleOpenAddForm,
    handleChangeExtraInput = props.handleChangeExtraInput,
    handleAddExtra = props.handleAddExtra,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    business = props.business,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    handleProductExtraState = props.handleProductExtraState,
    dragoverExtaId = props.dragoverExtaId,
    isExtrasBottom = props.isExtrasBottom,
    handleDragStart = props.handleDragStart,
    hanldeDragOver = props.hanldeDragOver,
    handleDrop = props.handleDrop,
    handleDragEnd = props.handleDragEnd,
    handleUpdateExtraState = props.handleUpdateExtraState,
    setExtrasState = props.setExtrasState;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var conatinerRef = (0, _react.useRef)(null);
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
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openExtraDetails = _useState6[0],
    setOpenExtraDetails = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openExtraEdit = _useState8[0],
    setOpenExtraEdit = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    currentExtra = _useState0[0],
    setCurrentExtra = _useState0[1];
  var _useState1 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    extraIds = _useState10[0],
    setExtraIds = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isCheckboxClicked = _useState12[0],
    setIsCheckboxClicked = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    timer = _useState14[0],
    setTimer = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    extraSelected = _useState16[0],
    setExtraSelected = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isProductExtraSnooze = _useState18[0],
    setProductExtraSnooze = _useState18[1];
  var extraInputRef = (0, _react.useRef)();
  var handleOpenExtraDetails = function handleOpenExtraDetails(e, extra, isInitialRender) {
    var _e$target, _e$target2;
    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.closest('.extra-checkbox') || e !== null && e !== void 0 && (_e$target2 = e.target) !== null && _e$target2 !== void 0 && _e$target2.closest('.draggable-dots')) return;
    setIsExtendExtraOpen(true);
    setCurrentExtra(extra);
    setOpenExtraDetails(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        extra: extra.id
      });
    }
  };
  var handleCloseExtraDetails = function handleCloseExtraDetails() {
    setOpenExtraDetails(false);
    setIsExtendExtraOpen(false);
    setCurrentExtra(null);
    (0, _utils.removeQueryToUrl)(['extra']);
  };
  var handleExtraState = function handleExtraState(id, checked) {
    if (checked) {
      setExtraIds(function (prevState) {
        return [].concat(_toConsumableArray(prevState), [id]);
      });
    } else {
      setExtraIds(function (prevState) {
        return prevState.filter(function (extraId) {
          return extraId !== id;
        });
      });
    }
    setIsCheckboxClicked(true);
  };
  var handleOpenEdit = function handleOpenEdit(event, extra) {
    event.stopPropagation();
    setExtraSelected(extra);
    setOpenExtraEdit(true);
  };
  var handleCloseEdit = function handleCloseEdit() {
    setOpenExtraEdit(false);
    setExtraSelected(null);
  };
  var onChangeAddExtraInput = function onChangeAddExtraInput(e) {
    e.persist();
    clearTimeout(timer);
    var _timer = setTimeout(function () {
      if (e.target.value) {
        handleAddExtra({
          name: e.target.value
        });
      }
    }, 750);
    setTimer(_timer);
  };
  var handleChangeExtra = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(id, changes) {
      var _extraInputRef$curren;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (extraInputRef !== null && extraInputRef !== void 0 && (_extraInputRef$curren = extraInputRef.current) !== null && _extraInputRef$curren !== void 0 && _extraInputRef$curren.value) {
              _context.n = 1;
              break;
            }
            setAlertState({
              open: true,
              content: [t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('NAME', 'Name'))]
            });
            return _context.a(2);
          case 1:
            _context.n = 2;
            return handleUpdateExtraState(id, changes);
          case 2:
            handleCloseEdit();
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleChangeExtra(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _productState$product;
    var _extraIds = [];
    if ((_productState$product = productState.product) !== null && _productState$product !== void 0 && _productState$product.extras) {
      var _productState$product2;
      _extraIds = (_productState$product2 = productState.product.extras) === null || _productState$product2 === void 0 ? void 0 : _productState$product2.reduce(function (ids, extra) {
        return [].concat(_toConsumableArray(ids), [extra.id]);
      }, []);
    }
    setExtraIds(_extraIds);
  }, []);
  (0, _react.useEffect)(function () {
    if (!isCheckboxClicked) return;
    setIsCheckboxClicked(false);
    handleProductExtraState(extraIds);
  }, [isCheckboxClicked, extraIds]);
  (0, _react.useEffect)(function () {
    var _productState$product3, _extrasState$extras;
    if (productState !== null && productState !== void 0 && (_productState$product3 = productState.product) !== null && _productState$product3 !== void 0 && _productState$product3.error || extrasState !== null && extrasState !== void 0 && (_extrasState$extras = extrasState.extras) !== null && _extrasState$extras !== void 0 && _extrasState$extras.error) {
      var _productState$product4, _extrasState$extras2;
      setAlertState({
        open: true,
        content: (productState === null || productState === void 0 || (_productState$product4 = productState.product) === null || _productState$product4 === void 0 ? void 0 : _productState$product4.error) || (extrasState === null || extrasState === void 0 || (_extrasState$extras2 = extrasState.extras) === null || _extrasState$extras2 === void 0 ? void 0 : _extrasState$extras2.error)
      });
    }
  }, [productState, extrasState]);
  (0, _react.useEffect)(function () {
    var extraId = query.get('extra');
    if (extraId) {
      var _extrasState$extras3;
      var initExtra = extrasState === null || extrasState === void 0 || (_extrasState$extras3 = extrasState.extras) === null || _extrasState$extras3 === void 0 ? void 0 : _extrasState$extras3.find(function (extra) {
        return extra.id === Number(extraId);
      });
      initExtra && handleOpenExtraDetails(null, initExtra, true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductExtrasContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_OPTIONS', 'Product options')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenAddForm();
    }
  }, t('ADD_PRODUCT_OPTION', 'Add product option'))), (extrasState === null || extrasState === void 0 ? void 0 : extrasState.extras) && (extrasState === null || extrasState === void 0 || (_extrasState$extras4 = extrasState.extras) === null || _extrasState$extras4 === void 0 ? void 0 : _extrasState$extras4.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (extra, index) {
    var _theme$images$icons, _extraIds$includes;
    var isLastExtra = index === extrasState.extras.length - 1;
    return /*#__PURE__*/_react.default.createElement(_styles2.ExtraOption, {
      key: extra.id,
      active: extra.id === (currentExtra === null || currentExtra === void 0 ? void 0 : currentExtra.id),
      onClick: function onClick(e) {
        return handleOpenExtraDetails(e, extra);
      },
      isDragOver: dragoverExtaId === extra.id,
      isBorderBottom: isExtrasBottom && isLastExtra,
      onDragOver: function onDragOver(e) {
        return hanldeDragOver(e, extra, isLastExtra);
      },
      onDrop: function onDrop(e) {
        return handleDrop(e, extra);
      },
      onDragEnd: handleDragEnd,
      className: "draggable-extra"
    }, /*#__PURE__*/_react.default.createElement(_styles2.DragImageWrapper, {
      className: "draggable-dots"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
      alt: "six dots",
      draggable: !(extrasState !== null && extrasState !== void 0 && extrasState.loading),
      onDragStart: function onDragStart(e) {
        return handleDragStart(e, extra);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.CheckboxContainer, {
      className: "extra-checkbox"
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: (_extraIds$includes = extraIds.includes(extra.id)) !== null && _extraIds$includes !== void 0 ? _extraIds$includes : false,
      onChange: function onChange(e) {
        return handleExtraState(extra.id, e.target.checked);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.MoreContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionNameWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, extra.name), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      onClick: function onClick(e) {
        return handleOpenEdit(e, extra);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, null))), /*#__PURE__*/_react.default.createElement(_styles2.Details, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null))));
  })), isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.ExtraAddForm, {
    ref: conatinerRef,
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      handleAddExtra();
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    placeholder: t('WRITE_A_NAME', 'Write a name'),
    onChange: function onChange(e) {
      return onChangeAddExtraInput(e);
    },
    autoComplete: "off",
    readOnly: extrasState === null || extrasState === void 0 ? void 0 : extrasState.loading
  })), /*#__PURE__*/_react.default.createElement(_styles2.AddButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenAddForm();
    }
  }, t('ADD_PRODUCT_OPTION', 'Add product option')))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openExtraDetails && /*#__PURE__*/_react.default.createElement(_ProductExtraOptions.ProductExtraOptions, {
    open: openExtraDetails,
    onClose: function onClose() {
      return handleCloseExtraDetails();
    },
    business: business,
    extra: currentExtra,
    handleChangeExtraName: handleChangeExtraInput,
    handleUpdateBusinessState: handleUpdateBusinessState,
    handleUpdateExtraState: handleUpdateExtraState,
    extrasState: extrasState,
    setExtrasState: setExtrasState
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openExtraDetails && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: openExtraDetails,
    onClose: function onClose() {
      return handleCloseExtraDetails();
    },
    padding: "20px 0 0 0"
  }, /*#__PURE__*/_react.default.createElement(_ProductExtraOptions.ProductExtraOptions, {
    open: openExtraDetails,
    onClose: function onClose() {
      return handleCloseExtraDetails();
    },
    business: business,
    extra: currentExtra,
    handleChangeExtraName: handleChangeExtraInput,
    handleUpdateBusinessState: handleUpdateBusinessState,
    handleUpdateExtraState: handleUpdateExtraState,
    extrasState: extrasState,
    setExtrasState: setExtrasState
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "760px",
    open: openExtraEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    padding: "20px"
  }, /*#__PURE__*/_react.default.createElement(_styles2.ExtraOptionEditContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PRODUCT_OPTION', 'Product option')), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('NAME', 'Name'),
    defaultValue: extraSelected === null || extraSelected === void 0 ? void 0 : extraSelected.name,
    ref: extraInputRef
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    className: "snooze",
    color: "lightGreen",
    borderRadius: "8px",
    onClick: function onClick() {
      return setProductExtraSnooze(true);
    }
  }, t('SNOOZE', 'Snooze')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      var _extraInputRef$curren2;
      return handleChangeExtra(extraSelected === null || extraSelected === void 0 ? void 0 : extraSelected.id, {
        name: extraInputRef === null || extraInputRef === void 0 || (_extraInputRef$curren2 = extraInputRef.current) === null || _extraInputRef$curren2 === void 0 ? void 0 : _extraInputRef$curren2.value
      });
    }
  }, t('SAVE', 'Save'))))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "85%",
    maxWidth: "1000px",
    open: isProductExtraSnooze,
    onClose: function onClose() {
      return setProductExtraSnooze(false);
    },
    closeOnBackdrop: false
  }, /*#__PURE__*/_react.default.createElement(_SnoozeComponent.SnoozeComponent, {
    isAutomaticUpdate: true,
    dataState: extraSelected,
    handleUpdate: function handleUpdate(data) {
      return handleChangeExtra(extraSelected === null || extraSelected === void 0 ? void 0 : extraSelected.id, {
        snooze_until: data.snooze_until
      });
    },
    setFormState: setExtrasState,
    formState: extrasState,
    onClose: function onClose() {
      return setProductExtraSnooze(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
var ProductExtras = exports.ProductExtras = function ProductExtras(props) {
  var productExtrasProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductExtrasUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductExtras, productExtrasProps);
};