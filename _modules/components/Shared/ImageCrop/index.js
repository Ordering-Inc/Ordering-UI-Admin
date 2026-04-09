"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageCrop = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cropperjs = _interopRequireDefault(require("cropperjs"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
require("cropperjs/dist/cropper.css");
var _styles2 = require("./styles");
var _Checkbox = require("../../../styles/Checkbox");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
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
var ImageCrop = exports.ImageCrop = function ImageCrop(props) {
  var photo = props.photo,
    handleChangePhoto = props.handleChangePhoto,
    onClose = props.onClose,
    aspectRatio = props.aspectRatio,
    showAspectRatioBox = props.showAspectRatioBox,
    useCloudinaryUrl = props.useCloudinaryUrl,
    themeId = props.themeId;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    cropper = _useState2[0],
    setCropper = _useState2[1];
  var _useState3 = (0, _react.useState)(50),
    _useState4 = _slicedToArray(_useState3, 2),
    zoomValue = _useState4[0],
    setZoomValue = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var cropperRef = (0, _react.useRef)(null);
  var handleChangeZoom = function handleChangeZoom(evt) {
    var value = evt.target.value;
    cropper.scale(value / 50);
    setZoomValue(value);
  };
  var getCropData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _photo, response, _yield$response$json, result, error;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!(typeof cropper !== 'undefined')) {
              _context.n = 7;
              break;
            }
            if (!(useCloudinaryUrl && themeId)) {
              _context.n = 5;
              break;
            }
            console.log('entra');
            setLoading(true);
            _context.n = 1;
            return fetch("".concat(ordering.root, "/themes/").concat(themeId, "/gallery"), {
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              method: 'POST',
              body: JSON.stringify({
                type: 'image',
                file: cropper.getCroppedCanvas({
                  imageSmoothingQuality: 'high'
                }).toDataURL()
              })
            });
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context.v;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            setLoading(false);
            if (error) {
              _context.n = 3;
              break;
            }
            _photo = optimizeImage(result.image, 'f_auto,q_auto,w_2000,c_limit');
            _context.n = 4;
            break;
          case 3:
            return _context.a(2);
          case 4:
            _context.n = 6;
            break;
          case 5:
            _photo = cropper.getCroppedCanvas({
              imageSmoothingQuality: 'high'
            }).toDataURL();
          case 6:
            handleChangePhoto(_photo);
            onClose && onClose();
          case 7:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function getCropData() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleChangeRotate = function handleChangeRotate() {
    if (!photo) return;
    cropper.rotate(45);
  };
  (0, _react.useEffect)(function () {
    if (!cropperRef.current || !photo) return;
    var _cropper;
    if (aspectRatio) {
      _cropper = new _cropperjs.default(cropperRef.current, {
        aspectRatio: aspectRatio,
        dragMode: 'move',
        zoomable: false,
        toggleDragModeOnDblclick: false,
        autoCropArea: 1
      });
    } else {
      _cropper = new _cropperjs.default(cropperRef.current, {
        dragMode: 'move',
        zoomable: false,
        toggleDragModeOnDblclick: false,
        autoCropArea: 1
      });
    }
    setCropper(_cropper);
  }, [photo, aspectRatio]);
  var handleChangeAspectRatio = function handleChangeAspectRatio(checked) {
    checked ? cropper.setAspectRatio(18 / 9) : cropper.setAspectRatio(aspectRatio);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    style: {
      height: 400
    }
  }) : /*#__PURE__*/_react.default.createElement(_styles2.ImageCropWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    ref: cropperRef,
    src: photo
  })), /*#__PURE__*/_react.default.createElement(_styles2.ImageCropActionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.RangeWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "title"
  }, t('RESIZE_IMAGE', 'Resize image')), /*#__PURE__*/_react.default.createElement("input", {
    min: "0",
    type: "range",
    step: "0.01",
    value: zoomValue,
    onChange: handleChangeZoom,
    style: {
      backgroundImage: "-webkit-gradient(linear, 0% 0%, ".concat(zoomValue, "% 0%, color-stop(100%, ").concat(theme.colors.primary, "), color-stop(100%, #F6F6FA))")
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "percent"
  }, parseInt(zoomValue * 2), " %")), /*#__PURE__*/_react.default.createElement(_styles2.ActionContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: handleChangeRotate
  }, /*#__PURE__*/_react.default.createElement("span", null, t('ROTATE', 'Rotate')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowClockwise, null))), showAspectRatioBox && /*#__PURE__*/_react.default.createElement(_styles2.ActionAspectRatioBox, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    id: "aspect",
    onChange: function onChange(e) {
      return handleChangeAspectRatio(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "aspect"
  }, t('USE_WEB_ASPECT_RATIO', 'Use web aspect ratio')))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    onClick: getCropData,
    disabled: loading
  }, t('CROP', 'Crop'))));
};