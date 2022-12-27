"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceBusinessPdf = void 0;
var _orderingComponentsAdmin = require("ordering-components-admin");
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var InvoiceBusinessPdf = function InvoiceBusinessPdf(props) {
  var _theme$images, _theme$images$logos, _exportInvoiceList$in, _exportInvoiceList$in2, _exportInvoiceList$in3, _exportInvoiceList$in4, _exportInvoiceList$in5, _exportInvoiceList$in6, _exportInvoiceList$in7, _exportInvoiceList$in8, _exportInvoiceList$in9, _exportInvoiceList$in10, _exportInvoiceList$in11, _exportInvoiceList$in12, _exportInvoiceList$in13, _exportInvoiceList$in14, _exportInvoiceList$in15, _exportInvoiceList$in16, _exportInvoiceList$in17, _exportInvoiceList$in18, _exportInvoiceList$in19, _exportInvoiceList$in20, _exportInvoiceList$in21, _exportInvoiceList$in22, _exportInvoiceList$in23, _exportInvoiceList$in24, _exportInvoiceList$in25, _exportInvoiceList$in26, _exportInvoiceList$in27, _exportInvoiceList$in28, _exportInvoiceList$in29, _exportInvoiceList$in30, _exportInvoiceList$in31, _exportInvoiceList$in32;
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
      slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER',
      percentage: 100
    }, {
      key: 16,
      value: 'Canceled by customer',
      slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 17,
      value: 'Not picked by customer',
      slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 18,
      value: 'Driver almost arrived to business',
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS',
      percentage: 50
    }, {
      key: 19,
      value: 'Driver almost arrived to customer',
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER',
      percentage: 90
    }, {
      key: 20,
      value: 'Customer almost arrived to business',
      slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS',
      percentage: 50
    }, {
      key: 21,
      value: 'Customer arrived to business',
      slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS',
      percentage: 60
    }, {
      key: 22,
      value: 'Looking for driver',
      slug: 'ORDER_LOOKING_FOR_DRIVER',
      percentage: 35
    }, {
      key: 23,
      value: 'Driver on way',
      slug: 'ORDER_DRIVER_ON_WAY',
      percentage: 45
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };
  var logoImage = theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.logoPdf;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    base64ImageString = _useState2[0],
    setBase64ImageString = _useState2[1];
  var getBase64ImageFromUrl = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(imageUrl) {
      var response, blob;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
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
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, t('INVOICE_FOR', 'Invoice for'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in = exportInvoiceList.invoice) === null || _exportInvoiceList$in === void 0 ? void 0 : (_exportInvoiceList$in2 = _exportInvoiceList$in.business) === null || _exportInvoiceList$in2 === void 0 ? void 0 : _exportInvoiceList$in2.name)), /*#__PURE__*/_react.default.createElement("br", null), (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in3 = exportInvoiceList.invoice) === null || _exportInvoiceList$in3 === void 0 ? void 0 : _exportInvoiceList$in3.from) && (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in4 = exportInvoiceList.invoice) === null || _exportInvoiceList$in4 === void 0 ? void 0 : _exportInvoiceList$in4.to) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, t('FROM', 'From'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in5 = exportInvoiceList.invoice) === null || _exportInvoiceList$in5 === void 0 ? void 0 : _exportInvoiceList$in5.from), " ", t('TO', 'To'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in6 = exportInvoiceList.invoice) === null || _exportInvoiceList$in6 === void 0 ? void 0 : _exportInvoiceList$in6.to)), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("span", null, t('AMOUNT_TO_ORDERS', 'Amount to orders'), ": ", exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in7 = exportInvoiceList.invoice) === null || _exportInvoiceList$in7 === void 0 ? void 0 : _exportInvoiceList$in7.orders.length), /*#__PURE__*/_react.default.createElement("table", {
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
  }, t('TOTAL', 'Total')))), /*#__PURE__*/_react.default.createElement("tbody", null, (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in8 = exportInvoiceList.invoice) === null || _exportInvoiceList$in8 === void 0 ? void 0 : _exportInvoiceList$in8.orders) && (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in9 = exportInvoiceList.invoice) === null || _exportInvoiceList$in9 === void 0 ? void 0 : (_exportInvoiceList$in10 = _exportInvoiceList$in9.orders) === null || _exportInvoiceList$in10 === void 0 ? void 0 : _exportInvoiceList$in10.map(function (order, i) {
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
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in11 = exportInvoiceList.invoice) === null || _exportInvoiceList$in11 === void 0 ? void 0 : _exportInvoiceList$in11.orders_subtotal))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td,
    colSpan: "4"
  }, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in12 = exportInvoiceList.invoice) === null || _exportInvoiceList$in12 === void 0 ? void 0 : _exportInvoiceList$in12.orders_total))))), /*#__PURE__*/_react.default.createElement("table", {
    style: styles.table
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.thead.trLast
  }, /*#__PURE__*/_react.default.createElement("th", {
    style: styles.table.thead.th,
    colSpan: "2"
  }, t('TOTALS', 'Totals')))), /*#__PURE__*/_react.default.createElement("tbody", null, (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in13 = exportInvoiceList.invoice) === null || _exportInvoiceList$in13 === void 0 ? void 0 : _exportInvoiceList$in13.type) === 'payout' && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('ORDERS', 'Orders'), " (", t('SUBTOTAL', 'Subtotal'), ")"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in14 = exportInvoiceList.invoice) === null || _exportInvoiceList$in14 === void 0 ? void 0 : _exportInvoiceList$in14.orders_subtotal))), (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in15 = exportInvoiceList.invoice) === null || _exportInvoiceList$in15 === void 0 ? void 0 : _exportInvoiceList$in15.inlcude_discounts) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('DISCOUNTS_BY_PLATFORM', 'Discounts by platform')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in16 = exportInvoiceList.invoice) === null || _exportInvoiceList$in16 === void 0 ? void 0 : _exportInvoiceList$in16.discounts))), (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in17 = exportInvoiceList.invoice) === null || _exportInvoiceList$in17 === void 0 ? void 0 : _exportInvoiceList$in17.type) === 'payout' && (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in18 = exportInvoiceList.invoice) === null || _exportInvoiceList$in18 === void 0 ? void 0 : _exportInvoiceList$in18.tax_products) !== 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('PRODUCTS', 'Products'), " ", t('TAX', 'Tax')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in19 = exportInvoiceList.invoice) === null || _exportInvoiceList$in19 === void 0 ? void 0 : _exportInvoiceList$in19.tax_products))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('PERCENTAGE_FEE', 'Percentage Fee'), " (", exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in20 = exportInvoiceList.invoice) === null || _exportInvoiceList$in20 === void 0 ? void 0 : _exportInvoiceList$in20.percentage_fee, "%)"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in21 = exportInvoiceList.invoice) === null || _exportInvoiceList$in21 === void 0 ? void 0 : _exportInvoiceList$in21.percentage_fee_total))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('FIXED_FEE', 'Fixed Fee')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in22 = exportInvoiceList.invoice) === null || _exportInvoiceList$in22 === void 0 ? void 0 : _exportInvoiceList$in22.fixed_fee_total))), (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in23 = exportInvoiceList.invoice) === null || _exportInvoiceList$in23 === void 0 ? void 0 : _exportInvoiceList$in23.misc_amount) !== 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('MISC', 'Misc'), " ", (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in24 = exportInvoiceList.invoice) === null || _exportInvoiceList$in24 === void 0 ? void 0 : _exportInvoiceList$in24.misc_description) && /*#__PURE__*/_react.default.createElement("small", null, "(", exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in25 = exportInvoiceList.invoice) === null || _exportInvoiceList$in25 === void 0 ? void 0 : _exportInvoiceList$in25.misc_description, ")")), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in26 = exportInvoiceList.invoice) === null || _exportInvoiceList$in26 === void 0 ? void 0 : _exportInvoiceList$in26.misc_amount)))), /*#__PURE__*/_react.default.createElement("tfoot", {
    style: styles.table.tfoot
  }, /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in27 = exportInvoiceList.invoice) === null || _exportInvoiceList$in27 === void 0 ? void 0 : _exportInvoiceList$in27.subtotal))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('TAX', 'Tax'), " (", exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in28 = exportInvoiceList.invoice) === null || _exportInvoiceList$in28 === void 0 ? void 0 : _exportInvoiceList$in28.tax, "%)"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in29 = exportInvoiceList.invoice) === null || _exportInvoiceList$in29 === void 0 ? void 0 : _exportInvoiceList$in29.tax_total))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in30 = exportInvoiceList.invoice) === null || _exportInvoiceList$in30 === void 0 ? void 0 : _exportInvoiceList$in30.total))))), (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in31 = exportInvoiceList.invoice) === null || _exportInvoiceList$in31 === void 0 ? void 0 : _exportInvoiceList$in31.notes) && /*#__PURE__*/_react.default.createElement("p", {
    style: styles.notes,
    dangerouslySetInnerHTML: {
      __html: exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in32 = exportInvoiceList.invoice) === null || _exportInvoiceList$in32 === void 0 ? void 0 : _exportInvoiceList$in32.notes
    }
  }));
};
exports.InvoiceBusinessPdf = InvoiceBusinessPdf;