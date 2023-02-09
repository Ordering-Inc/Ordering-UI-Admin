"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BsGrid = _interopRequireDefault(require("@meronex/icons/bs/BsGrid"));
var _BsViewList = _interopRequireDefault(require("@meronex/icons/bs/BsViewList"));
var _utils = require("../../../utils");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _BusinessesList = require("../BusinessesList");
var _BusinessesListingHeader = require("../BusinessesListingHeader");
var _BusinessActiveStateFilter = require("../BusinessActiveStateFilter");
var _BusinessTypeFilter = require("../BusinessTypeFilter");
var _BusinessDetails = require("../BusinessDetails");
var _WizardBusiness = require("../WizardBusiness");
var _styles = require("./styles");
var _BusinessSync = require("../BusinessSync");
var _BusinessDelete = require("../BusinessDelete");
var _styles2 = require("../../../styles");
var _BusinessAddStore = require("../BusinessAddStore");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessesListingUI = function BusinessesListingUI(props) {
  var businessList = props.businessList,
    pagination = props.pagination,
    searchValue = props.searchValue,
    selectedBusinessActiveState = props.selectedBusinessActiveState,
    handleChangeBusinessActiveState = props.handleChangeBusinessActiveState,
    handleChangeBusinessType = props.handleChangeBusinessType,
    loadMoreBusinesses = props.loadMoreBusinesses,
    handleSucessRemoveBusiness = props.handleSucessRemoveBusiness,
    handleSucessAddBusiness = props.handleSucessAddBusiness,
    handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
    loadBusinesses = props.loadBusinesses,
    onSearch = props.onSearch,
    onBusinessRedirect = props.onBusinessRedirect,
    getPageBusinesses = props.getPageBusinesses,
    businessIds = props.businessIds,
    handleChangeBusinessIds = props.handleChangeBusinessIds,
    handleEnableAllBusiness = props.handleEnableAllBusiness,
    handleDeleteMultiBusinesses = props.handleDeleteMultiBusinesses,
    setBusinessIds = props.setBusinessIds,
    countriesState = props.countriesState,
    handleChangeFilterValues = props.handleChangeFilterValues,
    filterValues = props.filterValues;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTutorialMode = _useState2[0],
    setIsTutorialMode = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    openTutorialSidebarState = _useState4[0],
    setOpenTutorialSidebarState = _useState4[1];
  var _useState5 = (0, _react.useState)('list'),
    _useState6 = _slicedToArray(_useState5, 2),
    viewMethod = _useState6[0],
    setViewMethod = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openBusinessDetails = _useState8[0],
    setOpenBusinessDetails = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    detailsBusiness = _useState10[0],
    setDetailsBusiness = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    detailsBusinessId = _useState12[0],
    setDetailsBusinessId = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    openAddBusiness = _useState14[0],
    setOpenAddBusiness = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    businessTypes = _useState16[0],
    setBusinessTypes = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    openSync = _useState18[0],
    setOpenSync = _useState18[1];
  var _useState19 = (0, _react.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    moveDistance = _useState20[0],
    setMoveDistance = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isAdd = _useState22[0],
    setIsAdd = _useState22[1];
  var noBusinesses = (0, _react.useMemo)(function () {
    var _businessList$busines;
    return !(businessList !== null && businessList !== void 0 && businessList.loading) && (businessList === null || businessList === void 0 ? void 0 : (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.length) === 0 && (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) === 1;
  }, [businessList === null || businessList === void 0 ? void 0 : businessList.loading, businessList === null || businessList === void 0 ? void 0 : businessList.businesses, pagination]);
  var handleGotToAdd = function handleGotToAdd() {
    if (countriesState !== null && countriesState !== void 0 && countriesState.enabled) setIsAdd(true);else events.emit('go_to_page', {
      page: 'business_add'
    });
  };
  var handleBackRedirect = function handleBackRedirect() {
    setOpenBusinessDetails(false);
    setDetailsBusiness(null);
    setDetailsBusinessId(null);
    onBusinessRedirect();
  };
  var handleOpenBusinessDetails = function handleOpenBusinessDetails(business) {
    setOpenAddBusiness(false);
    setDetailsBusiness(business);
    setDetailsBusinessId(business.id);
    setOpenBusinessDetails(true);
    onBusinessRedirect(business.id);
  };
  var handleOpenAddBusiness = function handleOpenAddBusiness() {
    var id = query.get('id');
    if (id) {
      handleBackRedirect();
    }
    setOpenAddBusiness(true);
  };

  // const onhandleSuccessAddBusiness = (business) => {
  //   handleSucessAddBusiness(business)
  //   setOpenAddBusiness(false)
  //   setDetailsBusiness(business)
  //   if (isTutorialMode) {
  //     setOpenTutorialSidebarState('schedule')
  //   } else {
  //     handleOpenBusinessDetails(business)
  //   }
  // }

  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id === null) setOpenBusinessDetails(false);else {
      setDetailsBusinessId(id);
      onBusinessRedirect && onBusinessRedirect(id);
      setOpenBusinessDetails(true);
    }
  }, []);
  var handleStartTutorial = function handleStartTutorial() {
    setIsTutorialMode(true);
    handleOpenAddBusiness();
  };
  var handleSetStorage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var preVisited, visited;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _utils.getStorageItem)('visited', true);
          case 2:
            preVisited = _context.sent;
            if (preVisited !== null && preVisited !== void 0 && preVisited.businesses_page) {
              _context.next = 8;
              break;
            }
            visited = _objectSpread(_objectSpread({}, preVisited), {}, {
              businesses_page: true
            });
            _context.next = 7;
            return (0, _utils.setStorageItem)('visited', visited, true);
          case 7:
            setIsTutorialMode(true);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleSetStorage() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleViewMethod = function handleViewMethod(method) {
    setViewMethod(method);
    if (method === 'list') {
      getPageBusinesses(10, 1);
    }
    if (method === 'card') {
      getPageBusinesses(50, 1);
    }
  };
  var handleOpenSync = function handleOpenSync() {
    setOpenSync(true);
  };
  var handleCloseSync = function handleCloseSync() {
    setMoveDistance(0);
    setOpenSync(false);
  };
  (0, _react.useEffect)(function () {
    handleSetStorage();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessListingContainer, {
    isAdd: openAddBusiness
  }, /*#__PURE__*/_react.default.createElement(_BusinessesListingHeader.BusinessesListingHeader, {
    searchValue: searchValue,
    onSearch: onSearch,
    handleOpenAddBusiness: handleOpenAddBusiness,
    handleGotToAdd: handleGotToAdd,
    handleStartTutorial: handleStartTutorial,
    handleOpenSync: handleOpenSync,
    handleRefreshBusinesses: loadBusinesses,
    loading: businessList.loading,
    noBusinesses: noBusinesses,
    openAddBusiness: openAddBusiness,
    handleChangeFilterValues: handleChangeFilterValues,
    filterValues: filterValues
  }), /*#__PURE__*/_react.default.createElement(_styles.ViewContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessActiveStateFilter.BusinessActiveStateFilter, {
    selectedBusinessActiveState: selectedBusinessActiveState,
    handleChangeBusinessActiveState: handleChangeBusinessActiveState
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperView, null, /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'card',
    onClick: function onClick() {
      return handleViewMethod('card');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsGrid.default, null)), /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'list',
    onClick: function onClick() {
      return handleViewMethod('list');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsViewList.default, null)))), /*#__PURE__*/_react.default.createElement(_styles.ButtonGroup, {
    isSelect: (businessIds === null || businessIds === void 0 ? void 0 : businessIds.length) > 0
  }, /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    businessTypes: props.businessTypes,
    defaultBusinessType: props.defaultBusinessType,
    handleChangeBusinessType: handleChangeBusinessType,
    setBusinessTypes: setBusinessTypes
  }), (businessIds === null || businessIds === void 0 ? void 0 : businessIds.length) > 0 && /*#__PURE__*/_react.default.createElement(_BusinessDelete.BusinessDelete, {
    handleDeleteMultiBusinesses: handleDeleteMultiBusinesses
  })), noBusinesses ? /*#__PURE__*/_react.default.createElement(_styles.EmptyBusinessWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.dummies.noBusinesses,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    color: "primary",
    borderRadius: "7.6px",
    onClick: function onClick() {
      return handleGotToAdd();
    }
  }, t('ADD_NEW_STORE', 'Add new store'))) : /*#__PURE__*/_react.default.createElement(_BusinessesList.BusinessesList, {
    viewMethod: viewMethod,
    businessList: businessList,
    pagination: pagination,
    detailsBusinessId: detailsBusinessId,
    loadMoreBusinesses: loadMoreBusinesses,
    getPageBusinesses: getPageBusinesses,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    handleOpenBusinessDetails: handleOpenBusinessDetails,
    handleOpenAddBusiness: handleOpenAddBusiness,
    isTutorialMode: isTutorialMode,
    businessIds: businessIds,
    setBusinessIds: setBusinessIds,
    handleChangeBusinessIds: handleChangeBusinessIds,
    handleEnableAllBusiness: handleEnableAllBusiness,
    selectedBusinessActiveState: selectedBusinessActiveState,
    handleGotToAdd: handleGotToAdd
  })), openBusinessDetails && /*#__PURE__*/_react.default.createElement(_BusinessDetails.BusinessDetails, {
    open: openBusinessDetails
    // business={detailsBusiness}
    ,
    businessTypes: businessTypes,
    businessId: detailsBusinessId,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    setBusinessTypes: setBusinessTypes,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }), openSync && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    id: "store_sync",
    open: openSync,
    onClose: function onClose() {
      return handleCloseSync();
    },
    defaultSideBarWidth: 550 + moveDistance,
    moveDistance: moveDistance
  }, /*#__PURE__*/_react.default.createElement(_BusinessSync.BusinessSync, {
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setMoveDistance(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_WizardBusiness.WizardBusiness, {
    isTutorialMode: isTutorialMode,
    openTutorialSidebarState: openTutorialSidebarState,
    setOpenTutorialSidebarState: setOpenTutorialSidebarState,
    business: detailsBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "769px",
    padding: "30px",
    open: isAdd,
    onClose: function onClose() {
      return setIsAdd(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessAddStore.BusinessAddStore, null)));
};
var BusinessesListing = function BusinessesListing(props) {
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI,
    asDashboard: true,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardBusinessList, businessListingProps);
};
exports.BusinessesListing = BusinessesListing;