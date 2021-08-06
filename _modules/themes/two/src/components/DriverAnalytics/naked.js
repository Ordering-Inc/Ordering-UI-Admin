"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverAnalytics = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponentsAdmin = require("ordering-components-admin");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriverAnalytics = function DriverAnalytics(props) {
  var UIComponent = props.UIComponent;

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    lapse: 'today',
    userIds: null,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  }),
      _useState2 = _slicedToArray(_useState, 2),
      filterList = _useState2[0],
      setFilterList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      ordersList = _useState4[0],
      setOrdersList = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      salesList = _useState6[0],
      setSalesList = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      topProductList = _useState8[0],
      setTopProductList = _useState8[1];

  var _useState9 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      topCategoryList = _useState10[0],
      setTopCategoryList = _useState10[1];

  var _useState11 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      orderStatusList = _useState12[0],
      setOrderStatusList = _useState12[1];

  var _useState13 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      topOrdersList = _useState14[0],
      setTopOrdersList = _useState14[1];

  var _useState15 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      spendTimesList = _useState16[0],
      setSpendTimesList = _useState16[1];

  var _useState17 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState18 = _slicedToArray(_useState17, 2),
      availableTimesList = _useState18[0],
      setAvailableTimesList = _useState18[1];

  var _useState19 = (0, _react.useState)({
    loading: false,
    data: {},
    error: null
  }),
      _useState20 = _slicedToArray(_useState19, 2),
      busyTimesList = _useState20[0],
      setBusyTimesList = _useState20[1];

  var _useState21 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState22 = _slicedToArray(_useState21, 2),
      customerSatisfactionList = _useState22[0],
      setCustomerSatisfactionList = _useState22[1];

  var _useState23 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState24 = _slicedToArray(_useState23, 2),
      ordersAcceptSpendList = _useState24[0],
      setOrdersAcceptSpendList = _useState24[1];

  var _useState25 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState26 = _slicedToArray(_useState25, 2),
      arrivedPickUpSpendList = _useState26[0],
      setArrivedPickUpSpendList = _useState26[1];

  var _useState27 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState28 = _slicedToArray(_useState27, 2),
      orderLocationList = _useState28[0],
      setOrderLocationList = _useState28[1];

  var _useState29 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState30 = _slicedToArray(_useState29, 2),
      completeSpendList = _useState30[0],
      setCompleteSpendList = _useState30[1];

  var _useState31 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState32 = _slicedToArray(_useState31, 2),
      pickUpSpendList = _useState32[0],
      setPickUpSpendList = _useState32[1];

  var _useState33 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState34 = _slicedToArray(_useState33, 2),
      deliverySpendList = _useState34[0],
      setDeliverySpendList = _useState34[1];

  var paramsForAPI = function paramsForAPI(type) {
    var _filterList$userIds;

    var rootUrl = "".concat(ordering.root, "/reports/").concat(type);
    var params = "lapse=".concat(filterList === null || filterList === void 0 ? void 0 : filterList.lapse, "&timezone=").concat(filterList === null || filterList === void 0 ? void 0 : filterList.timeZone);
    if (filterList === null || filterList === void 0 ? void 0 : filterList.userIds) params = "".concat(params, "&drivers=").concat(filterList === null || filterList === void 0 ? void 0 : (_filterList$userIds = filterList.userIds) === null || _filterList$userIds === void 0 ? void 0 : _filterList$userIds.toString());
    return "".concat(rootUrl, "?").concat(params);
  };
  /**
   * Method to get orders list
   */


  var getOrders = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, functionFetch, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!loading) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              setOrdersList(_objectSpread(_objectSpread({}, ordersList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('orders_drivers');
              _context.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                setOrdersList(_objectSpread(_objectSpread({}, ordersList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setOrdersList(_objectSpread(_objectSpread({}, ordersList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](2);
              setOrdersList(_objectSpread(_objectSpread({}, ordersList), {}, {
                loading: false,
                error: _context.t0
              }));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 17]]);
    }));

    return function getOrders() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get sales list
   */


  var getSales = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, functionFetch, response, _yield$response$json2, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!loading) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.prev = 2;
              setSalesList(_objectSpread(_objectSpread({}, salesList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_sales');
              _context2.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context2.sent;
              _context2.next = 11;
              return response.json();

            case 11:
              _yield$response$json2 = _context2.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

              if (!error) {
                setSalesList(_objectSpread(_objectSpread({}, salesList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setSalesList(_objectSpread(_objectSpread({}, salesList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context2.next = 20;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](2);
              setSalesList(_objectSpread(_objectSpread({}, salesList), {}, {
                loading: false,
                error: _context2.t0
              }));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 17]]);
    }));

    return function getSales() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to get top product list
   */


  var getTopProducts = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var requestOptions, functionFetch, response, _yield$response$json3, error, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!loading) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.prev = 2;
              setTopProductList(_objectSpread(_objectSpread({}, topProductList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_top_selling');
              _context3.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context3.sent;
              _context3.next = 11;
              return response.json();

            case 11:
              _yield$response$json3 = _context3.sent;
              error = _yield$response$json3.error;
              result = _yield$response$json3.result;

              if (!error) {
                setTopProductList(_objectSpread(_objectSpread({}, topProductList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setTopProductList(_objectSpread(_objectSpread({}, topProductList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context3.next = 20;
              break;

            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](2);
              setTopProductList(_objectSpread(_objectSpread({}, topProductList), {}, {
                loading: false,
                error: _context3.t0
              }));

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 17]]);
    }));

    return function getTopProducts() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to get top category list
   */


  var getTopCategories = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var requestOptions, functionFetch, response, _yield$response$json4, error, result;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!loading) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              _context4.prev = 2;
              setTopCategoryList(_objectSpread(_objectSpread({}, topCategoryList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_top_categories');
              _context4.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context4.sent;
              _context4.next = 11;
              return response.json();

            case 11:
              _yield$response$json4 = _context4.sent;
              error = _yield$response$json4.error;
              result = _yield$response$json4.result;

              if (!error) {
                setTopCategoryList(_objectSpread(_objectSpread({}, topCategoryList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setTopCategoryList(_objectSpread(_objectSpread({}, topCategoryList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context4.next = 20;
              break;

            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](2);
              setTopCategoryList(_objectSpread(_objectSpread({}, topCategoryList), {}, {
                loading: false,
                error: _context4.t0
              }));

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 17]]);
    }));

    return function getTopCategories() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to get order status List
   */


  var getOrderStatus = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var requestOptions, functionFetch, response, _yield$response$json5, error, result;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!loading) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              _context5.prev = 2;
              setOrderStatusList(_objectSpread(_objectSpread({}, orderStatusList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_orders_status');
              _context5.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context5.sent;
              _context5.next = 11;
              return response.json();

            case 11:
              _yield$response$json5 = _context5.sent;
              error = _yield$response$json5.error;
              result = _yield$response$json5.result;

              if (!error) {
                setOrderStatusList(_objectSpread(_objectSpread({}, orderStatusList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setOrderStatusList(_objectSpread(_objectSpread({}, orderStatusList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context5.next = 20;
              break;

            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5["catch"](2);
              setOrderStatusList(_objectSpread(_objectSpread({}, orderStatusList), {}, {
                loading: false,
                error: _context5.t0
              }));

            case 20:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 17]]);
    }));

    return function getOrderStatus() {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Method to get top orders list
   */


  var getTopOrders = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var requestOptions, functionFetch, response, _yield$response$json6, error, result;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!loading) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return");

            case 2:
              _context6.prev = 2;
              setTopOrdersList(_objectSpread(_objectSpread({}, topOrdersList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_top_orders');
              _context6.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context6.sent;
              _context6.next = 11;
              return response.json();

            case 11:
              _yield$response$json6 = _context6.sent;
              error = _yield$response$json6.error;
              result = _yield$response$json6.result;

              if (!error) {
                setTopOrdersList(_objectSpread(_objectSpread({}, topOrdersList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setTopOrdersList(_objectSpread(_objectSpread({}, topOrdersList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context6.next = 20;
              break;

            case 17:
              _context6.prev = 17;
              _context6.t0 = _context6["catch"](2);
              setTopOrdersList(_objectSpread(_objectSpread({}, topOrdersList), {}, {
                loading: false,
                error: _context6.t0
              }));

            case 20:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[2, 17]]);
    }));

    return function getTopOrders() {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Method to get complete spend List
   */


  var getCustomerSatisfaction = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
      var requestOptions, functionFetch, response, _yield$response$json7, error, result;

      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!loading) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt("return");

            case 2:
              _context7.prev = 2;
              setCustomerSatisfactionList(_objectSpread(_objectSpread({}, customerSatisfactionList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('customer_satisfaction');
              _context7.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context7.sent;
              _context7.next = 11;
              return response.json();

            case 11:
              _yield$response$json7 = _context7.sent;
              error = _yield$response$json7.error;
              result = _yield$response$json7.result;

              if (!error) {
                setCustomerSatisfactionList(_objectSpread(_objectSpread({}, customerSatisfactionList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setCustomerSatisfactionList(_objectSpread(_objectSpread({}, customerSatisfactionList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context7.next = 20;
              break;

            case 17:
              _context7.prev = 17;
              _context7.t0 = _context7["catch"](2);
              setCustomerSatisfactionList(_objectSpread(_objectSpread({}, customerSatisfactionList), {}, {
                loading: false,
                error: _context7.t0
              }));

            case 20:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[2, 17]]);
    }));

    return function getCustomerSatisfaction() {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * Method to get complete spend List
   */


  var getCompleteSpend = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
      var requestOptions, functionFetch, response, _yield$response$json8, error, result;

      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!loading) {
                _context8.next = 2;
                break;
              }

              return _context8.abrupt("return");

            case 2:
              _context8.prev = 2;
              setCompleteSpendList(_objectSpread(_objectSpread({}, completeSpendList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_complete_spend');
              _context8.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context8.sent;
              _context8.next = 11;
              return response.json();

            case 11:
              _yield$response$json8 = _context8.sent;
              error = _yield$response$json8.error;
              result = _yield$response$json8.result;

              if (!error) {
                setCompleteSpendList(_objectSpread(_objectSpread({}, completeSpendList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setCompleteSpendList(_objectSpread(_objectSpread({}, completeSpendList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context8.next = 20;
              break;

            case 17:
              _context8.prev = 17;
              _context8.t0 = _context8["catch"](2);
              setCompleteSpendList(_objectSpread(_objectSpread({}, completeSpendList), {}, {
                loading: false,
                error: _context8.t0
              }));

            case 20:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[2, 17]]);
    }));

    return function getCompleteSpend() {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * Method to get spend times list
   */


  var getSpendTimes = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
      var requestOptions, functionFetch, response, _yield$response$json9, error, result;

      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!loading) {
                _context9.next = 2;
                break;
              }

              return _context9.abrupt("return");

            case 2:
              _context9.prev = 2;
              setSpendTimesList(_objectSpread(_objectSpread({}, spendTimesList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_spend_times');
              _context9.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context9.sent;
              _context9.next = 11;
              return response.json();

            case 11:
              _yield$response$json9 = _context9.sent;
              error = _yield$response$json9.error;
              result = _yield$response$json9.result;

              if (!error) {
                setSpendTimesList(_objectSpread(_objectSpread({}, spendTimesList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setSpendTimesList(_objectSpread(_objectSpread({}, spendTimesList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context9.next = 20;
              break;

            case 17:
              _context9.prev = 17;
              _context9.t0 = _context9["catch"](2);
              setSpendTimesList(_objectSpread(_objectSpread({}, spendTimesList), {}, {
                loading: false,
                error: _context9.t0
              }));

            case 20:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[2, 17]]);
    }));

    return function getSpendTimes() {
      return _ref9.apply(this, arguments);
    };
  }();
  /**
   * Method to get available times list
   */


  var getAvailableTimes = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
      var requestOptions, functionFetch, response, _yield$response$json10, error, result;

      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (!loading) {
                _context10.next = 2;
                break;
              }

              return _context10.abrupt("return");

            case 2:
              _context10.prev = 2;
              setAvailableTimesList(_objectSpread(_objectSpread({}, availableTimesList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_available_times');
              _context10.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context10.sent;
              _context10.next = 11;
              return response.json();

            case 11:
              _yield$response$json10 = _context10.sent;
              error = _yield$response$json10.error;
              result = _yield$response$json10.result;

              if (!error) {
                setAvailableTimesList(_objectSpread(_objectSpread({}, availableTimesList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setAvailableTimesList(_objectSpread(_objectSpread({}, availableTimesList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context10.next = 20;
              break;

            case 17:
              _context10.prev = 17;
              _context10.t0 = _context10["catch"](2);
              setAvailableTimesList(_objectSpread(_objectSpread({}, availableTimesList), {}, {
                loading: false,
                error: _context10.t0
              }));

            case 20:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[2, 17]]);
    }));

    return function getAvailableTimes() {
      return _ref10.apply(this, arguments);
    };
  }();
  /**
   * Method to busy times list
   */


  var getBusyTimes = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
      var requestOptions, functionFetch, response, _yield$response$json11, error, result;

      return _regenerator.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (!loading) {
                _context11.next = 2;
                break;
              }

              return _context11.abrupt("return");

            case 2:
              _context11.prev = 2;
              setBusyTimesList(_objectSpread(_objectSpread({}, busyTimesList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_busy_times');
              _context11.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context11.sent;
              _context11.next = 11;
              return response.json();

            case 11:
              _yield$response$json11 = _context11.sent;
              error = _yield$response$json11.error;
              result = _yield$response$json11.result;

              if (!error) {
                setBusyTimesList(_objectSpread(_objectSpread({}, busyTimesList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setBusyTimesList(_objectSpread(_objectSpread({}, busyTimesList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context11.next = 20;
              break;

            case 17:
              _context11.prev = 17;
              _context11.t0 = _context11["catch"](2);
              setBusyTimesList(_objectSpread(_objectSpread({}, busyTimesList), {}, {
                loading: false,
                error: _context11.t0
              }));

            case 20:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[2, 17]]);
    }));

    return function getBusyTimes() {
      return _ref11.apply(this, arguments);
    };
  }();
  /**
   * Method to get orders accept spend list
   */


  var getOrdersAcceptSpend = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
      var requestOptions, functionFetch, response, _yield$response$json12, error, result;

      return _regenerator.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              if (!loading) {
                _context12.next = 2;
                break;
              }

              return _context12.abrupt("return");

            case 2:
              _context12.prev = 2;
              setOrdersAcceptSpendList(_objectSpread(_objectSpread({}, ordersAcceptSpendList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_accept_spend');
              _context12.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context12.sent;
              _context12.next = 11;
              return response.json();

            case 11:
              _yield$response$json12 = _context12.sent;
              error = _yield$response$json12.error;
              result = _yield$response$json12.result;

              if (!error) {
                setOrdersAcceptSpendList(_objectSpread(_objectSpread({}, ordersAcceptSpendList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setOrdersAcceptSpendList(_objectSpread(_objectSpread({}, ordersAcceptSpendList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context12.next = 20;
              break;

            case 17:
              _context12.prev = 17;
              _context12.t0 = _context12["catch"](2);
              setOrdersAcceptSpendList(_objectSpread(_objectSpread({}, ordersAcceptSpendList), {}, {
                loading: false,
                error: _context12.t0
              }));

            case 20:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[2, 17]]);
    }));

    return function getOrdersAcceptSpend() {
      return _ref12.apply(this, arguments);
    };
  }();
  /**
   * Method to get drivers arrived pickup spend list
   */


  var getArrivedPickeUpSpend = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
      var requestOptions, functionFetch, response, _yield$response$json13, error, result;

      return _regenerator.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              if (!loading) {
                _context13.next = 2;
                break;
              }

              return _context13.abrupt("return");

            case 2:
              _context13.prev = 2;
              setArrivedPickUpSpendList(_objectSpread(_objectSpread({}, arrivedPickUpSpendList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_arrived_pickup_spend');
              _context13.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context13.sent;
              _context13.next = 11;
              return response.json();

            case 11:
              _yield$response$json13 = _context13.sent;
              error = _yield$response$json13.error;
              result = _yield$response$json13.result;

              if (!error) {
                setArrivedPickUpSpendList(_objectSpread(_objectSpread({}, arrivedPickUpSpendList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setArrivedPickUpSpendList(_objectSpread(_objectSpread({}, arrivedPickUpSpendList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context13.next = 20;
              break;

            case 17:
              _context13.prev = 17;
              _context13.t0 = _context13["catch"](2);
              setArrivedPickUpSpendList(_objectSpread(_objectSpread({}, arrivedPickUpSpendList), {}, {
                loading: false,
                error: _context13.t0
              }));

            case 20:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[2, 17]]);
    }));

    return function getArrivedPickeUpSpend() {
      return _ref13.apply(this, arguments);
    };
  }();
  /**
   * Method to get location List
   */


  var getLocations = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
      var requestOptions, functionFetch, response, _yield$response$json14, error, result;

      return _regenerator.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              if (!loading) {
                _context14.next = 2;
                break;
              }

              return _context14.abrupt("return");

            case 2:
              _context14.prev = 2;
              setOrderLocationList(_objectSpread(_objectSpread({}, orderLocationList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_order_location');
              _context14.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context14.sent;
              _context14.next = 11;
              return response.json();

            case 11:
              _yield$response$json14 = _context14.sent;
              error = _yield$response$json14.error;
              result = _yield$response$json14.result;

              if (!error) {
                setOrderLocationList(_objectSpread(_objectSpread({}, orderLocationList), {}, {
                  loading: false,
                  locations: result
                }));
              } else {
                setOrderLocationList(_objectSpread(_objectSpread({}, orderLocationList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context14.next = 20;
              break;

            case 17:
              _context14.prev = 17;
              _context14.t0 = _context14["catch"](2);
              setOrderLocationList(_objectSpread(_objectSpread({}, orderLocationList), {}, {
                loading: false,
                error: _context14.t0
              }));

            case 20:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, null, [[2, 17]]);
    }));

    return function getLocations() {
      return _ref14.apply(this, arguments);
    };
  }();
  /**
   * Method to get arrived pickup spend list
   */


  var getPickUpSpend = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
      var requestOptions, functionFetch, response, _yield$response$json15, error, result;

      return _regenerator.default.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              if (!loading) {
                _context15.next = 2;
                break;
              }

              return _context15.abrupt("return");

            case 2:
              _context15.prev = 2;
              setPickUpSpendList(_objectSpread(_objectSpread({}, pickUpSpendList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_pickup_spend');
              _context15.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context15.sent;
              _context15.next = 11;
              return response.json();

            case 11:
              _yield$response$json15 = _context15.sent;
              error = _yield$response$json15.error;
              result = _yield$response$json15.result;

              if (!error) {
                setPickUpSpendList(_objectSpread(_objectSpread({}, pickUpSpendList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setPickUpSpendList(_objectSpread(_objectSpread({}, pickUpSpendList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context15.next = 20;
              break;

            case 17:
              _context15.prev = 17;
              _context15.t0 = _context15["catch"](2);
              setPickUpSpendList(_objectSpread(_objectSpread({}, pickUpSpendList), {}, {
                loading: false,
                error: _context15.t0
              }));

            case 20:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[2, 17]]);
    }));

    return function getPickUpSpend() {
      return _ref15.apply(this, arguments);
    };
  }();
  /**
   * Method to get arrived pickup spend list
   */


  var getDeliverySpend = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
      var requestOptions, functionFetch, response, _yield$response$json16, error, result;

      return _regenerator.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              if (!loading) {
                _context16.next = 2;
                break;
              }

              return _context16.abrupt("return");

            case 2:
              _context16.prev = 2;
              setDeliverySpendList(_objectSpread(_objectSpread({}, deliverySpendList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = paramsForAPI('drivers_delivery_spend');
              _context16.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context16.sent;
              _context16.next = 11;
              return response.json();

            case 11:
              _yield$response$json16 = _context16.sent;
              error = _yield$response$json16.error;
              result = _yield$response$json16.result;

              if (!error) {
                setDeliverySpendList(_objectSpread(_objectSpread({}, deliverySpendList), {}, {
                  loading: false,
                  data: result
                }));
              } else {
                setDeliverySpendList(_objectSpread(_objectSpread({}, deliverySpendList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context16.next = 20;
              break;

            case 17:
              _context16.prev = 17;
              _context16.t0 = _context16["catch"](2);
              setDeliverySpendList(_objectSpread(_objectSpread({}, deliverySpendList), {}, {
                loading: false,
                error: _context16.t0
              }));

            case 20:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[2, 17]]);
    }));

    return function getDeliverySpend() {
      return _ref16.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    getOrders();
    getSales();
    getTopProducts();
    getTopCategories();
    getOrderStatus();
    getTopOrders();
    getSpendTimes();
    getAvailableTimes();
    getBusyTimes();
    getCustomerSatisfaction();
    getOrdersAcceptSpend();
    getCompleteSpend();
    getArrivedPickeUpSpend();
    getPickUpSpend();
    getLocations();
    getDeliverySpend();
  }, [filterList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    filterList: filterList,
    ordersList: ordersList,
    salesList: salesList,
    topProductList: topProductList,
    topCategoryList: topCategoryList,
    orderStatusList: orderStatusList,
    topOrdersList: topOrdersList,
    customerSatisfactionList: customerSatisfactionList,
    ordersAcceptSpendList: ordersAcceptSpendList,
    arrivedPickUpSpendList: arrivedPickUpSpendList,
    orderLocationList: orderLocationList,
    spendTimesList: spendTimesList,
    availableTimesList: availableTimesList,
    busyTimesList: busyTimesList,
    completeSpendList: completeSpendList,
    pickUpSpendList: pickUpSpendList,
    deliverySpendList: deliverySpendList,
    handleChangeFilterList: setFilterList
  })));
};

exports.DriverAnalytics = DriverAnalytics;
DriverAnalytics.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriverAnalytics.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};