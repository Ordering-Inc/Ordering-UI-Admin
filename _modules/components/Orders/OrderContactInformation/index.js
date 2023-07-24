"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderContactInformation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _BisBusiness = _interopRequireDefault(require("@meronex/icons/bi/BisBusiness"));
var _DriverSelector = require("../DriverSelector");
var _CompanySelector = require("../CompanySelector");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _ReviewCustomer = require("../ReviewCustomer");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderContactInformation = function OrderContactInformation(props) {
  var _configs$google_maps_, _order$business, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _order$business7, _order$business8, _order$business9, _order$business10, _order$business11, _order$business12, _order$business13, _order$business14, _order$business15, _order$customer, _order$customer2, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9, _order$customer10, _order$customer11, _order$customer12, _order$customer13, _ref2, _customerInfoState$cu, _customerInfoState$cu2, _order$customer17, _ref3, _customerInfoState$cu3, _customerInfoState$cu4, _order$customer18, _order$customer$addre, _order$customer19, _configs$country_auto, _order$customer20, _order$customer21, _order$customer22, _order$customer23, _order$customer24, _order$customer25, _order$customer26, _order$customer27, _order$customer28, _order$customer29, _order$customer30, _order$customer31, _order$customer32, _order$customer33, _order$customer34, _order$customer34$loc, _order$customer35, _order$customer35$loc, _order$customer36, _order$customer36$loc, _order$customer37, _order$customer37$loc, _order$customer38, _order$customer39, _order$customer40, _order$customer41, _order$customer42, _order$customer43, _order$driver_company, _order$driver_id, _order$driver, _order$driver2, _order$driver3, _order$driver4, _order$driver5, _order$driver6, _order$driver7;
  var order = props.order,
    customerInfoState = props.customerInfoState,
    handleChangeCustomerInfoState = props.handleChangeCustomerInfoState,
    isTourOpen = props.isTourOpen,
    setCurrentTourStep = props.setCurrentTourStep,
    handleOpenMessages = props.handleOpenMessages,
    isServiceOrder = props.isServiceOrder,
    handleUpdateCustomerInfo = props.handleUpdateCustomerInfo,
    setIsCommentPopup = props.setIsCommentPopup,
    setAddressState = props.setAddressState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var googleMapsApiKey = configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    currentCustomer = _useState4[0],
    setCurrentCustomer = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isEdit = _useState6[0],
    setIsEdit = _useState6[1];
  console.log(customerInfoState, 'customerInfoState');
  var pastOrderStatuses = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17];
  var handleReviewCustomer = function handleReviewCustomer(customer) {
    setCurrentCustomer(customer);
    setIsModalOpen(true);
  };
  var handleCustomerReviewed = function handleCustomerReviewed() {
    setIsModalOpen(false);
  };
  var handleEdit = function handleEdit(event) {
    if (event.target.closest('#accordion1').getAttribute('data-id') === '1') {
      event.stopPropagation();
      setIsEdit(function (prev) {
        return !prev;
      });
    } else {
      setIsEdit(true);
    }
  };
  var handleChangeAddress = function handleChangeAddress(e) {
    setAddressState({
      address: e === null || e === void 0 ? void 0 : e.address,
      location: e === null || e === void 0 ? void 0 : e.location,
      zipcode: e === null || e === void 0 ? void 0 : e.zipcode
    });
  };
  var handleUpdateCustomer = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return handleUpdateCustomerInfo();
          case 2:
            setIsEdit(false);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleUpdateCustomer() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, (user === null || user === void 0 ? void 0 : user.level) !== 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$business = order.business) !== null && _order$business !== void 0 && _order$business.logo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), (order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.phone) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      return window.open("tel:".concat(order.business.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null))), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.phone)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronDown, {
    className: "down-arrow"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CutsomerDetail, null, /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfoTable, null, /*#__PURE__*/_react.default.createElement("tbody", null, (order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.email) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto: ".concat(order === null || order === void 0 ? void 0 : (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.email)
  }, order === null || order === void 0 ? void 0 : (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.email))), (order === null || order === void 0 ? void 0 : (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.address) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CHECKOUT_FULL_ADDRESS', 'Full address')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://maps.google.com/?q=".concat(order === null || order === void 0 ? void 0 : (_order$business10 = order.business) === null || _order$business10 === void 0 ? void 0 : _order$business10.address),
    rel: "noopener noreferrer",
    target: "_blank"
  }, order === null || order === void 0 ? void 0 : (_order$business11 = order.business) === null || _order$business11 === void 0 ? void 0 : _order$business11.address))), (order === null || order === void 0 ? void 0 : (_order$business12 = order.business) === null || _order$business12 === void 0 ? void 0 : _order$business12.address_notes) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('NOTES', 'Notes')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$business13 = order.business) === null || _order$business13 === void 0 ? void 0 : _order$business13.address_notes)), (order === null || order === void 0 ? void 0 : (_order$business14 = order.business) === null || _order$business14 === void 0 ? void 0 : _order$business14.zipcode) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$business15 = order.business) === null || _order$business15 === void 0 ? void 0 : _order$business15.zipcode))))))), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$customer = order.customer) !== null && _order$customer !== void 0 && _order$customer.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, order !== null && order !== void 0 && (_order$customer3 = order.customer) !== null && _order$customer3 !== void 0 && _order$customer3.name || order !== null && order !== void 0 && (_order$customer4 = order.customer) !== null && _order$customer4 !== void 0 && _order$customer4.middle_name || order !== null && order !== void 0 && (_order$customer5 = order.customer) !== null && _order$customer5 !== void 0 && _order$customer5.lastname || order !== null && order !== void 0 && (_order$customer6 = order.customer) !== null && _order$customer6 !== void 0 && _order$customer6.second_lastname ? /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, order === null || order === void 0 ? void 0 : (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.name, " ", order === null || order === void 0 ? void 0 : (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.middle_name, " ", order === null || order === void 0 ? void 0 : (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.lastname, " ", order === null || order === void 0 ? void 0 : (_order$customer10 = order.customer) === null || _order$customer10 === void 0 ? void 0 : _order$customer10.second_lastname) : (!(order !== null && order !== void 0 && (_order$customer11 = order.customer) !== null && _order$customer11 !== void 0 && _order$customer11.email) || !(order !== null && order !== void 0 && (_order$customer12 = order.customer) !== null && _order$customer12 !== void 0 && _order$customer12.phone)) && /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, t('GUEST_USER', 'Guest user')), (order === null || order === void 0 ? void 0 : (_order$customer13 = order.customer) === null || _order$customer13 === void 0 ? void 0 : _order$customer13.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      var _order$customer14, _order$customer15, _order$customer16;
      return window.open("tel:".concat(order !== null && order !== void 0 && (_order$customer14 = order.customer) !== null && _order$customer14 !== void 0 && _order$customer14.country_phone_code ? '+' + (order === null || order === void 0 ? void 0 : (_order$customer15 = order.customer) === null || _order$customer15 === void 0 ? void 0 : _order$customer15.country_phone_code) : '').concat(order === null || order === void 0 ? void 0 : (_order$customer16 = order.customer) === null || _order$customer16 === void 0 ? void 0 : _order$customer16.cellphone));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null))), !(order !== null && order !== void 0 && order.user_review) && pastOrderStatuses.includes(order === null || order === void 0 ? void 0 : order.status) && /*#__PURE__*/_react.default.createElement(_styles2.ReviewButton, {
    onClick: function onClick() {
      return handleReviewCustomer(order === null || order === void 0 ? void 0 : order.customer);
    }
  }, t('REVIEW', 'Review'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionIconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, {
    className: "edit-icon",
    onClick: handleEdit
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronDown, {
    className: "down-arrow"
  })))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CutsomerDetail, null, isEdit ? /*#__PURE__*/_react.default.createElement(_styles2.CustomerEditWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "(603) 555-0123",
    value: (_ref2 = (_customerInfoState$cu = customerInfoState === null || customerInfoState === void 0 ? void 0 : (_customerInfoState$cu2 = customerInfoState.customer) === null || _customerInfoState$cu2 === void 0 ? void 0 : _customerInfoState$cu2.cellphone) !== null && _customerInfoState$cu !== void 0 ? _customerInfoState$cu : order === null || order === void 0 ? void 0 : (_order$customer17 = order.customer) === null || _order$customer17 === void 0 ? void 0 : _order$customer17.cellphone) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      handleChangeCustomerInfoState({
        cellphone: e.target.value
      });
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "jane.cooper@example.com",
    value: (_ref3 = (_customerInfoState$cu3 = customerInfoState === null || customerInfoState === void 0 ? void 0 : (_customerInfoState$cu4 = customerInfoState.customer) === null || _customerInfoState$cu4 === void 0 ? void 0 : _customerInfoState$cu4.email) !== null && _customerInfoState$cu3 !== void 0 ? _customerInfoState$cu3 : order === null || order === void 0 ? void 0 : (_order$customer18 = order.customer) === null || _order$customer18 === void 0 ? void 0 : _order$customer18.email) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      handleChangeCustomerInfoState({
        email: e.target.value
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleAutocompleteInput, {
    name: "address",
    className: "input-autocomplete",
    apiKey: googleMapsApiKey,
    placeholder: t('ADDRESS', 'Address'),
    onChangeAddress: function onChangeAddress(e) {
      handleChangeAddress(e);
    },
    defaultValue: (_order$customer$addre = order === null || order === void 0 ? void 0 : (_order$customer19 = order.customer) === null || _order$customer19 === void 0 ? void 0 : _order$customer19.address) !== null && _order$customer$addre !== void 0 ? _order$customer$addre : '',
    autoComplete: "new-password",
    countryCode: (configs === null || configs === void 0 ? void 0 : (_configs$country_auto = configs.country_autocomplete) === null || _configs$country_auto === void 0 ? void 0 : _configs$country_auto.value) || '*'
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleUpdateCustomer
  }, customerInfoState !== null && customerInfoState !== void 0 && customerInfoState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save'))) : /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfoTable, null, /*#__PURE__*/_react.default.createElement("tbody", null, (order === null || order === void 0 ? void 0 : (_order$customer20 = order.customer) === null || _order$customer20 === void 0 ? void 0 : _order$customer20.cellphone) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CELLPHONE', 'Phone / Mobile')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "tel:".concat(order !== null && order !== void 0 && (_order$customer21 = order.customer) !== null && _order$customer21 !== void 0 && _order$customer21.country_phone_code ? '+' + (order === null || order === void 0 ? void 0 : (_order$customer22 = order.customer) === null || _order$customer22 === void 0 ? void 0 : _order$customer22.country_phone_code) : '').concat(order === null || order === void 0 ? void 0 : (_order$customer23 = order.customer) === null || _order$customer23 === void 0 ? void 0 : _order$customer23.cellphone)
  }, (order === null || order === void 0 ? void 0 : (_order$customer24 = order.customer) === null || _order$customer24 === void 0 ? void 0 : _order$customer24.country_phone_code) && "+".concat(order === null || order === void 0 ? void 0 : (_order$customer25 = order.customer) === null || _order$customer25 === void 0 ? void 0 : _order$customer25.country_phone_code), " ", order === null || order === void 0 ? void 0 : (_order$customer26 = order.customer) === null || _order$customer26 === void 0 ? void 0 : _order$customer26.cellphone))), (order === null || order === void 0 ? void 0 : (_order$customer27 = order.customer) === null || _order$customer27 === void 0 ? void 0 : _order$customer27.email) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto: ".concat(order === null || order === void 0 ? void 0 : (_order$customer28 = order.customer) === null || _order$customer28 === void 0 ? void 0 : _order$customer28.email)
  }, order === null || order === void 0 ? void 0 : (_order$customer29 = order.customer) === null || _order$customer29 === void 0 ? void 0 : _order$customer29.email))), !!(order !== null && order !== void 0 && (_order$customer30 = order.customer) !== null && _order$customer30 !== void 0 && _order$customer30.address) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CHECKOUT_FULL_ADDRESS', 'Full address')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://maps.google.com/?q=".concat(order === null || order === void 0 ? void 0 : (_order$customer31 = order.customer) === null || _order$customer31 === void 0 ? void 0 : _order$customer31.address),
    rel: "noopener noreferrer",
    target: "_blank"
  }, order === null || order === void 0 ? void 0 : (_order$customer32 = order.customer) === null || _order$customer32 === void 0 ? void 0 : _order$customer32.address))), !!(order !== null && order !== void 0 && (_order$customer33 = order.customer) !== null && _order$customer33 !== void 0 && _order$customer33.location) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('LOCATION', 'Location')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://maps.google.com/?q=".concat(order === null || order === void 0 ? void 0 : (_order$customer34 = order.customer) === null || _order$customer34 === void 0 ? void 0 : (_order$customer34$loc = _order$customer34.location) === null || _order$customer34$loc === void 0 ? void 0 : _order$customer34$loc.lat, ",").concat(order === null || order === void 0 ? void 0 : (_order$customer35 = order.customer) === null || _order$customer35 === void 0 ? void 0 : (_order$customer35$loc = _order$customer35.location) === null || _order$customer35$loc === void 0 ? void 0 : _order$customer35$loc.lng),
    rel: "noopener noreferrer",
    target: "_blank"
  }, order === null || order === void 0 ? void 0 : (_order$customer36 = order.customer) === null || _order$customer36 === void 0 ? void 0 : (_order$customer36$loc = _order$customer36.location) === null || _order$customer36$loc === void 0 ? void 0 : _order$customer36$loc.lat, ", ", order === null || order === void 0 ? void 0 : (_order$customer37 = order.customer) === null || _order$customer37 === void 0 ? void 0 : (_order$customer37$loc = _order$customer37.location) === null || _order$customer37$loc === void 0 ? void 0 : _order$customer37$loc.lng))), !!(order !== null && order !== void 0 && (_order$customer38 = order.customer) !== null && _order$customer38 !== void 0 && _order$customer38.internal_number) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('INTERNAL_NUMBER', 'Internal number')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$customer39 = order.customer) === null || _order$customer39 === void 0 ? void 0 : _order$customer39.internal_number)), !!(order !== null && order !== void 0 && (_order$customer40 = order.customer) !== null && _order$customer40 !== void 0 && _order$customer40.address_notes) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('NOTES', 'Notes')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$customer41 = order.customer) === null || _order$customer41 === void 0 ? void 0 : _order$customer41.address_notes)), !!(order !== null && order !== void 0 && (_order$customer42 = order.customer) !== null && _order$customer42 !== void 0 && _order$customer42.zipcode) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$customer43 = order.customer) === null || _order$customer43 === void 0 ? void 0 : _order$customer43.zipcode)), !!(order !== null && order !== void 0 && order.on_behalf_of) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ON_BEHALF_OF', 'On behalf of')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : order.on_behalf_of))))))), (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && !isServiceOrder && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(order !== null && order !== void 0 && order.driver_id) && /*#__PURE__*/_react.default.createElement(_styles2.CompanySelectorContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER_COMPANY', 'Driver company')), /*#__PURE__*/_react.default.createElement(_CompanySelector.CompanySelector, {
    small: true,
    isPhoneView: true,
    defaultValue: (_order$driver_company = order === null || order === void 0 ? void 0 : order.driver_company_id) !== null && _order$driver_company !== void 0 ? _order$driver_company : 'default',
    order: order,
    isTourOpen: isTourOpen,
    setCurrentTourStep: setCurrentTourStep,
    handleOpenMessages: handleOpenMessages,
    isOrderDrivers: true,
    orderId: order === null || order === void 0 ? void 0 : order.id
  })), !(order !== null && order !== void 0 && order.driver_company_id) && /*#__PURE__*/_react.default.createElement(_styles2.DriverSelectorContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER_ASSIGN', 'Driver assign')), /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
    small: true,
    isPhoneView: true,
    defaultValue: (_order$driver_id = order === null || order === void 0 ? void 0 : order.driver_id) !== null && _order$driver_id !== void 0 ? _order$driver_id : 'default',
    order: order,
    isTourOpen: isTourOpen,
    setCurrentTourStep: setCurrentTourStep,
    handleOpenMessages: handleOpenMessages,
    isOrderDrivers: true,
    orderId: order === null || order === void 0 ? void 0 : order.id,
    setIsCommentPopup: setIsCommentPopup
  })), /*#__PURE__*/_react.default.createElement(_styles2.DriverInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DriverInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$driver = order.driver) !== null && _order$driver !== void 0 && _order$driver.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), order.driver_id ? /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.name, " ", order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.middle_name, " ", order === null || order === void 0 ? void 0 : (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.lastname, " ", order === null || order === void 0 ? void 0 : (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.second_lastname), (order === null || order === void 0 ? void 0 : (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      var _order$driver8;
      return window.open("tel:".concat(order === null || order === void 0 ? void 0 : (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.cellphone));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null))), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))) : /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('NO_DRIVER', 'No driver'))))))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    open: isModalOpen,
    onClose: function onClose() {
      return setIsModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ReviewCustomer.ReviewCustomer, {
    order: order,
    customer: currentCustomer,
    onClose: function onClose() {
      return handleCustomerReviewed();
    }
  })));
};
exports.OrderContactInformation = OrderContactInformation;
var ContextAwareToggle = function ContextAwareToggle(_ref4) {
  var children = _ref4.children,
    eventKey = _ref4.eventKey,
    callback = _ref4.callback;
  var currentEventKey = (0, _react.useContext)(_reactBootstrap.AccordionContext);
  var decoratedOnClick = (0, _reactBootstrap.useAccordionToggle)(eventKey, function () {
    return callback && callback(eventKey);
  });
  var isCurrentEventKey = currentEventKey === eventKey;
  var handleButtonClick = function handleButtonClick() {
    decoratedOnClick();
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.ToggleItemWrapper, {
    active: isCurrentEventKey,
    onClick: handleButtonClick,
    id: "accordion".concat(eventKey),
    "data-id": isCurrentEventKey ? '1' : '0'
  }, children);
};