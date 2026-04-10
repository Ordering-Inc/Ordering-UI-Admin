"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripeMethodFormUI = exports.StripeMethodForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactStripeJs = require("@stripe/react-stripe-js");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var StripeMethodFormUI = exports.StripeMethodFormUI = function StripeMethodFormUI(props) {
  var cart = props.cart,
    handleSource = props.handleSource,
    handleCancel = props.handleCancel,
    paymethod = props.paymethod,
    cartGroup = props.cartGroup;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var stripe = (0, _reactStripeJs.useStripe)();
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    paymentRequest = _useState2[0],
    setPaymentRequest = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    methodUnavailable = _useState4[0],
    setMethodUnavailable = _useState4[1];
  var googlePayMethods = ['google_pay', 'global_google_pay'];
  (0, _react.useEffect)(function () {
    if (stripe) {
      var _configs$stripe_curre, _configs$stripe_curre2, _cart$business2;
      var cartNames = '';
      if (cartGroup) {
        // eslint-disable-next-line no-unused-expressions
        cartGroup === null || cartGroup === void 0 || cartGroup.carts.map(function (cart, i) {
          var _cart$business, _cartNames;
          return cartNames = "".concat(cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.name, " ").concat(i !== ((_cartNames = cartNames) === null || _cartNames === void 0 || (_cartNames = _cartNames.carts) === null || _cartNames === void 0 ? void 0 : _cartNames.length) && ', ');
        });
      }
      var pr = stripe.paymentRequest({
        country: 'US',
        currency: (configs === null || configs === void 0 || (_configs$stripe_curre = configs.stripe_currency) === null || _configs$stripe_curre === void 0 || (_configs$stripe_curre = _configs$stripe_curre.value) === null || _configs$stripe_curre === void 0 || (_configs$stripe_curre2 = _configs$stripe_curre.toLowerCase) === null || _configs$stripe_curre2 === void 0 ? void 0 : _configs$stripe_curre2.call(_configs$stripe_curre)) || 'usd',
        total: {
          label: cartNames || (cart === null || cart === void 0 || (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.name),
          amount: Math.floor(((cartGroup === null || cartGroup === void 0 ? void 0 : cartGroup.balance) || (cartGroup === null || cartGroup === void 0 ? void 0 : cartGroup.total) || (cart === null || cart === void 0 ? void 0 : cart.balance) || (cart === null || cart === void 0 ? void 0 : cart.total)) * 100)
        },
        requestPayerName: true,
        requestPayerEmail: true
      });
      pr.canMakePayment().then(function (result) {
        if (result) {
          setPaymentRequest(pr);
        } else {
          setMethodUnavailable(true);
        }
      });
      pr.on('paymentmethod', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
          var _e$paymentMethod, _e$paymentMethod2;
          var data;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                data = _objectSpread(_objectSpread({}, e === null || e === void 0 || (_e$paymentMethod = e.paymentMethod) === null || _e$paymentMethod === void 0 ? void 0 : _e$paymentMethod.card), {}, {
                  id: e.paymentMethod.id,
                  type: e.paymentMethod.type,
                  source_id: e === null || e === void 0 || (_e$paymentMethod2 = e.paymentMethod) === null || _e$paymentMethod2 === void 0 ? void 0 : _e$paymentMethod2.id,
                  card: {
                    brand: e.paymentMethod.card.brand,
                    last4: e.paymentMethod.card.last4
                  }
                });
                e.complete('success');
                handleCancel();
                handleSource(cartGroup ? JSON.stringify(data) : data);
              case 1:
                return _context.a(2);
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, [stripe]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, methodUnavailable ? /*#__PURE__*/_react.default.createElement("h2", null, googlePayMethods.includes(paymethod) ? t('GOOGLE_PAY_UNAVAILABLE', 'Google pay unavailable') : t('APPLE_PAY_UNAVAILABLE', 'Apple pay unavailable')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, paymentRequest ? /*#__PURE__*/_react.default.createElement(_reactStripeJs.PaymentRequestButtonElement, {
    options: {
      paymentRequest: paymentRequest
    }
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)));
};
var StripeMethodForm = exports.StripeMethodForm = function StripeMethodForm(props) {
  var propsController = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: StripeMethodFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CardForm, propsController);
};