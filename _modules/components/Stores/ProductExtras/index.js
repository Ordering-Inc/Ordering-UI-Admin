"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductExtrasUI = function ProductExtrasUI(props) {
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
    _useState10 = _slicedToArray(_useState9, 2),
    currentExtra = _useState10[0],
    setCurrentExtra = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    extraIds = _useState12[0],
    setExtraIds = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isCheckboxClicked = _useState14[0],
    setIsCheckboxClicked = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    timer = _useState16[0],
    setTimer = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    extraSelected = _useState18[0],
    setExtraSelected = _useState18[1];
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
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id, changes) {
      var _extraInputRef$curren;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (extraInputRef !== null && extraInputRef !== void 0 && (_extraInputRef$curren = extraInputRef.current) !== null && _extraInputRef$curren !== void 0 && _extraInputRef$curren.value) {
              _context.next = 3;
              break;
            }
            setAlertState({
              open: true,
              content: [t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('NAME', 'Name'))]
            });
            return _context.abrupt("return");
          case 3:
            _context.next = 5;
            return handleUpdateExtraState(id, changes);
          case 5:
            handleCloseEdit();
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleChangeExtra(_x2, _x3) {
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
      var initExtra = extrasState === null || extrasState === void 0 ? void 0 : extrasState.extras.find(function (extra) {
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
  }, t('ADD_PRODUCT_OPTION', 'Add product option'))), (extrasState === null || extrasState === void 0 ? void 0 : extrasState.extras) && (extrasState === null || extrasState === void 0 ? void 0 : extrasState.extras.sort(function (a, b) {
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
      draggable: true,
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
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      var _extraInputRef$curren2;
      return handleChangeExtra(extraSelected === null || extraSelected === void 0 ? void 0 : extraSelected.id, {
        name: extraInputRef === null || extraInputRef === void 0 || (_extraInputRef$curren2 = extraInputRef.current) === null || _extraInputRef$curren2 === void 0 ? void 0 : _extraInputRef$curren2.value
      });
    }
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
var ProductExtras = function ProductExtras(props) {
  var productExtrasProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductExtrasUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductExtras, productExtrasProps);
};
exports.ProductExtras = ProductExtras;