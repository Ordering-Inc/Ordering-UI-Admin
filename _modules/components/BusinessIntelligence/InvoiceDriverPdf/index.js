"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceDriverPdf = void 0;
var _orderingComponentsAdmin = require("ordering-components-admin");
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var InvoiceDriverPdf = function InvoiceDriverPdf(props) {
  var _theme$images, _exportInvoiceList$in, _exportInvoiceList$in2, _exportInvoiceList$in3, _exportInvoiceList$in4, _exportInvoiceList$in5, _exportInvoiceList$in6, _exportInvoiceList$in7, _exportInvoiceList$in8, _exportInvoiceList$in9, _exportInvoiceList$in10, _exportInvoiceList$in11, _exportInvoiceList$in12, _exportInvoiceList$in13, _exportInvoiceList$in14, _exportInvoiceList$in15, _exportInvoiceList$in16, _exportInvoiceList$in17, _exportInvoiceList$in18, _exportInvoiceList$in19, _exportInvoiceList$in20, _exportInvoiceList$in21, _exportInvoiceList$in22, _exportInvoiceList$in23, _exportInvoiceList$in24, _exportInvoiceList$in25, _exportInvoiceList$in26;
  var exportInvoiceList = props.exportInvoiceList,
    getSubtotal = props.getSubtotal,
    getTotal = props.getTotal;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    parsePrice = _useUtils2$.parsePrice;
  var styles = {
    root: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      color: '#333'
    },
    table: {
      width: '100%',
      marginTop: '15px',
      marginBottom: '15px',
      borderCollapse: 'collapse',
      thead: {
        trFirst: {
          color: '#fff',
          fontWeight: 'bold',
          border: '1px solid #222434',
          backgroundColor: '#222434'
        },
        trLast: {
          color: '#fff',
          fontWeight: 'bold',
          border: '1px solid #393d57',
          backgroundColor: '#393d57'
        },
        th: {
          textAlign: 'center',
          fontSize: '16px'
        }
      },
      tbody: {
        tr: {
          td: {
            border: '1px solid #ccc',
            color: '#333',
            fontSize: '15px',
            padding: '3px 10px'
          },
          tdNumber: {
            border: '1px solid #ccc',
            color: '#333',
            fontSize: '15px',
            padding: '3px 10px',
            textAlign: 'right'
          }
        }
      },
      tfoot: {
        tr: {
          border: '1px solid #ccc',
          backgroundColor: '#ddd',
          td: {
            fontSize: '15px',
            border: '1px solid #ccc',
            textAlign: 'right',
            padding: '3px 10px'
          }
        }
      },
      number: {
        textAlign: 'right'
      }
    },
    notes: {
      padding: '10px',
      whiteSpace: 'normal',
      fontSize: '14px',
      backgroundColor: '#eee'
    },
    imageWrapper: {
      width: '150px',
      marginBottom: '15px'
    }
  };
  var getOrderStatus = function getOrderStatus(status) {
    var orderStatus = [{
      key: 0,
      value: 'Pending Order',
      slug: 'PENDING_ORDER',
      percentage: 25
    }, {
      key: 1,
      value: 'Completed by admin',
      slug: 'COMPLETED_BY_ADMIN',
      percentage: 100
    }, {
      key: 2,
      value: 'Reject by admin',
      slug: 'REJECT_BY_ADMIN',
      percentage: 0
    }, {
      key: 3,
      value: 'Driver arrived by business',
      slug: 'DRIVER_IN_BUSINESS',
      percentage: 60
    }, {
      key: 4,
      value: 'Preparation Completed',
      slug: 'PREPARATION_COMPLETED',
      percentage: 70
    }, {
      key: 5,
      value: 'Reject by business',
      slug: 'REJECT_BY_BUSINESS',
      percentage: 0
    }, {
      key: 6,
      value: 'Reject by driver',
      slug: 'REJECT_BY_DRIVER',
      percentage: 0
    }, {
      key: 7,
      value: 'Accepted by business',
      slug: 'ACCEPTED_BY_BUSINESS',
      percentage: 35
    }, {
      key: 8,
      value: 'Accepted by driver',
      slug: 'ACCEPTED_BY_DRIVER',
      percentage: 45
    }, {
      key: 9,
      value: 'Pick up completed by driver',
      slug: 'PICK_UP_COMPLETED_BY_DRIVER',
      percentage: 80
    }, {
      key: 10,
      value: 'Pick up Failed by driver',
      slug: 'PICK_UP_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 11,
      value: 'Delivery completed by driver',
      slug: 'DELIVERY_COMPLETED_BY_DRIVER',
      percentage: 100
    }, {
      key: 12,
      value: 'Delivery Failed by driver',
      slug: 'DELIVERY_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 13,
      value: 'Preorder',
      slug: 'PREORDER',
      percentage: 25
    }, {
      key: 14,
      value: 'Order not ready',
      slug: 'ORDER_NOT_READY',
      percentage: 65
    }, {
      key: 15,
      value: 'Pickup completed by customer',
      slug: 'PICKUP_COMPLETED_BY_CUSTOMER',
      percentage: 100
    }, {
      key: 16,
      value: 'Canceled by customer',
      slug: 'CANCELED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 17,
      value: 'Not picked by customer',
      slug: 'NOT_PICKED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 18,
      value: 'Driver almost arrived to business',
      slug: 'DRIVER_ALMOST_ARRIVED_TO_BUSINESS',
      percentage: 50
    }, {
      key: 19,
      value: 'Driver almost arrived to customer',
      slug: 'DRIVER_ALMOST_ARRIVED_TO_CUSTOMER',
      percentage: 90
    }, {
      key: 20,
      value: 'Customer almost arrived to business',
      slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS',
      percentage: 50
    }, {
      key: 21,
      value: 'Customer arrived to business',
      slug: 'CUSTOMER_ARRIVED_TO_BUSINESS',
      percentage: 60
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };
  var logoImage = theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.logos) === null || _theme$images === void 0 ? void 0 : _theme$images.logoPdf;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    base64ImageString = _useState2[0],
    setBase64ImageString = _useState2[1];
  var getBase64ImageFromUrl = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(imageUrl) {
      var response, blob;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(imageUrl);
          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.blob();
          case 5:
            blob = _context.sent;
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.addEventListener('load', function () {
                resolve(reader.result);
              }, false);
              reader.onerror = function (error) {
                return reject(error);
              };
              reader.readAsDataURL(blob);
            }));
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getBase64ImageFromUrl(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    getBase64ImageFromUrl(logoImage).then(function (base64) {
      setBase64ImageString(base64);
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: styles.root
  }, base64ImageString && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: base64ImageString,
    fluid: true,
    loading: "lazy",
    style: styles.imageWrapper
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, t('INVOICE_FOR', 'Invoice for'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in = exportInvoiceList.invoice) === null || _exportInvoiceList$in === void 0 || (_exportInvoiceList$in = _exportInvoiceList$in.driver) === null || _exportInvoiceList$in === void 0 ? void 0 : _exportInvoiceList$in.name)), /*#__PURE__*/_react.default.createElement("br", null), (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in2 = exportInvoiceList.invoice) === null || _exportInvoiceList$in2 === void 0 ? void 0 : _exportInvoiceList$in2.from) && (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in3 = exportInvoiceList.invoice) === null || _exportInvoiceList$in3 === void 0 ? void 0 : _exportInvoiceList$in3.to) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, t('FROM', 'From'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in4 = exportInvoiceList.invoice) === null || _exportInvoiceList$in4 === void 0 ? void 0 : _exportInvoiceList$in4.from), " ", t('TO', 'To'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in5 = exportInvoiceList.invoice) === null || _exportInvoiceList$in5 === void 0 ? void 0 : _exportInvoiceList$in5.to)), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("span", null, t('AMOUNT_TO_ORDERS', 'Amount to orders'), ": ", exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in6 = exportInvoiceList.invoice) === null || _exportInvoiceList$in6 === void 0 ? void 0 : _exportInvoiceList$in6.orders.length), /*#__PURE__*/_react.default.createElement("table", {
    style: styles.table
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.thead.trFirst
  }, /*#__PURE__*/_react.default.createElement("th", {
    style: styles.table.thead.th,
    colSpan: "5"
  }, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.thead.trLast
  }, /*#__PURE__*/_react.default.createElement("th", {
    style: styles.table.thead.th
  }, t('EXPORT_ORDER_NUMBER', 'Order number')), /*#__PURE__*/_react.default.createElement("th", {
    style: styles.table.thead.th
  }, t('EXPORT_DATE', 'Date')), /*#__PURE__*/_react.default.createElement("th", {
    style: styles.table.thead.th
  }, t('CONTROL_PANEL_ORDERS_STATUS_HEADER', 'Status')), /*#__PURE__*/_react.default.createElement("th", {
    style: styles.table.thead.th
  }, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("th", {
    style: styles.table.thead.th
  }, t('TOTAL', 'Total')))), /*#__PURE__*/_react.default.createElement("tbody", null, (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in7 = exportInvoiceList.invoice) === null || _exportInvoiceList$in7 === void 0 ? void 0 : _exportInvoiceList$in7.orders) && (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in8 = exportInvoiceList.invoice) === null || _exportInvoiceList$in8 === void 0 || (_exportInvoiceList$in8 = _exportInvoiceList$in8.orders) === null || _exportInvoiceList$in8 === void 0 ? void 0 : _exportInvoiceList$in8.map(function (order, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("td", {
      style: styles.table.tbody.tr.td
    }, order.id), /*#__PURE__*/_react.default.createElement("td", {
      style: styles.table.tbody.tr.td
    }, parseDate(order.delivery_datetime, {
      utc: false
    })), /*#__PURE__*/_react.default.createElement("td", {
      style: styles.table.tbody.tr.td
    }, getOrderStatus(order.status).value), /*#__PURE__*/_react.default.createElement("td", {
      style: styles.table.tbody.tr.tdNumber
    }, parsePrice(getSubtotal(order))), /*#__PURE__*/_react.default.createElement("td", {
      style: styles.table.tbody.tr.tdNumber
    }, parsePrice(getTotal(order))));
  }))), /*#__PURE__*/_react.default.createElement("tfoot", {
    style: styles.table.tfoot
  }, /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td,
    colSpan: "4"
  }, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in9 = exportInvoiceList.invoice) === null || _exportInvoiceList$in9 === void 0 ? void 0 : _exportInvoiceList$in9.orders_subtotal))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td,
    colSpan: "4"
  }, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in10 = exportInvoiceList.invoice) === null || _exportInvoiceList$in10 === void 0 ? void 0 : _exportInvoiceList$in10.orders_total))))), /*#__PURE__*/_react.default.createElement("table", {
    style: styles.table
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.thead.trLast
  }, /*#__PURE__*/_react.default.createElement("th", {
    style: styles.table.thead.th,
    colSpan: "2"
  }, t('TOTALS', 'Totals')))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('ORDERS', 'Orders'), " (", t('SUBTOTAL', 'Subtotal'), ")"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in11 = exportInvoiceList.invoice) === null || _exportInvoiceList$in11 === void 0 ? void 0 : _exportInvoiceList$in11.orders_subtotal))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in12 = exportInvoiceList.invoice) === null || _exportInvoiceList$in12 === void 0 ? void 0 : _exportInvoiceList$in12.discounts))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('PERCENTAGE_FEE', 'Percentage Fee'), " (", exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in13 = exportInvoiceList.invoice) === null || _exportInvoiceList$in13 === void 0 ? void 0 : _exportInvoiceList$in13.percentage_fee, "%)"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in14 = exportInvoiceList.invoice) === null || _exportInvoiceList$in14 === void 0 ? void 0 : _exportInvoiceList$in14.percentage_fee_total))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('FIXED_FEE', 'Fixed Fee')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in15 = exportInvoiceList.invoice) === null || _exportInvoiceList$in15 === void 0 ? void 0 : _exportInvoiceList$in15.fixed_fee_total))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('DELIVERY_PRICE', 'Delivery price'), " ", t('PERCENTAGE', 'Percentage')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in16 = exportInvoiceList.invoice) === null || _exportInvoiceList$in16 === void 0 ? void 0 : _exportInvoiceList$in16.percentage_delivery_price_total))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('DRIVER_TIP', 'Driver tip'), " ", t('PERCENTAGE', 'Percentage')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in17 = exportInvoiceList.invoice) === null || _exportInvoiceList$in17 === void 0 ? void 0 : _exportInvoiceList$in17.percentage_driver_tip_total))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('MISC', 'Misc'), " ", (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in18 = exportInvoiceList.invoice) === null || _exportInvoiceList$in18 === void 0 ? void 0 : _exportInvoiceList$in18.misc_description) && /*#__PURE__*/_react.default.createElement("small", null, "(", exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in19 = exportInvoiceList.invoice) === null || _exportInvoiceList$in19 === void 0 ? void 0 : _exportInvoiceList$in19.misc_description, ")")), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in20 = exportInvoiceList.invoice) === null || _exportInvoiceList$in20 === void 0 ? void 0 : _exportInvoiceList$in20.misc_amount)))), /*#__PURE__*/_react.default.createElement("tfoot", {
    style: styles.table.tfoot
  }, /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in21 = exportInvoiceList.invoice) === null || _exportInvoiceList$in21 === void 0 ? void 0 : _exportInvoiceList$in21.subtotal))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('TAX', 'Tax'), " (", exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in22 = exportInvoiceList.invoice) === null || _exportInvoiceList$in22 === void 0 ? void 0 : _exportInvoiceList$in22.tax, "%)"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in23 = exportInvoiceList.invoice) === null || _exportInvoiceList$in23 === void 0 ? void 0 : _exportInvoiceList$in23.tax_total))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in24 = exportInvoiceList.invoice) === null || _exportInvoiceList$in24 === void 0 ? void 0 : _exportInvoiceList$in24.total))))), (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in25 = exportInvoiceList.invoice) === null || _exportInvoiceList$in25 === void 0 ? void 0 : _exportInvoiceList$in25.notes) && /*#__PURE__*/_react.default.createElement("p", {
    style: styles.notes,
    dangerouslySetInnerHTML: {
      __html: exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in26 = exportInvoiceList.invoice) === null || _exportInvoiceList$in26 === void 0 ? void 0 : _exportInvoiceList$in26.notes
    }
  }));
};
exports.InvoiceDriverPdf = InvoiceDriverPdf;