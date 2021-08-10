"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponentsAdmin = require("ordering-components-admin");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Home = function Home(props) {
  var UIComponent = props.UIComponent;

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];
  /** this is dumy data */


  var dumyDataList = [{
    id: 1,
    name: 'Create a store',
    addText: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .',
    completed: false
  }, {
    id: 2,
    name: 'Fill up your business information',
    addText: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .',
    completed: false
  }, {
    id: 3,
    name: 'Add your first category',
    addText: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .',
    completed: false
  }, {
    id: 4,
    name: 'Add your first product',
    addText: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .',
    completed: false
  }, {
    id: 5,
    name: 'Create a business menu',
    addText: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .',
    completed: false
  }, {
    id: 6,
    name: 'Create a delivery zone',
    addText: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .',
    completed: false
  }, {
    id: 7,
    name: 'Payment method',
    addText: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .',
    completed: false
  }];

  var _useState = (0, _react.useState)({
    loading: false,
    orders: 0,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      ordersList = _useState2[0],
      setOrdersList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    sales: 0,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      todaySalelsList = _useState4[0],
      setTodaySalesList = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    sales: [],
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      monthSalesList = _useState6[0],
      setMonthSalesList = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      taskList = _useState8[0],
      setTaskList = _useState8[1];
  /**
   * Method to get task list
   */


  var getTasks = function getTasks() {
    setTaskList(_objectSpread(_objectSpread({}, taskList), {}, {
      data: dumyDataList
    }));
  };
  /**
   * Method to update task list
   */


  var handleUpdateTaskList = function handleUpdateTaskList(data) {
    setTaskList(_objectSpread(_objectSpread({}, taskList), {}, {
      data: data
    }));
  };
  /**
   * Method to get orders list
   */


  var getOrders = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, functionFetch, response, _yield$response$json, error, result, totalOrders, _iterator, _step, order;

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
              functionFetch = "".concat(ordering.root, "/reports/orders?lapse=today");
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
                totalOrders = 0;

                if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                  _iterator = _createForOfIteratorHelper(result);

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      order = _step.value;
                      totalOrders += parseInt(order.orders);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }

                setOrdersList(_objectSpread(_objectSpread({}, ordersList), {}, {
                  loading: false,
                  orders: totalOrders
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
      var requestOptions, functionFetch, response, _yield$response$json2, error, result, totalSales, _iterator2, _step2, sale;

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
              setTodaySalesList(_objectSpread(_objectSpread({}, todaySalelsList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = "".concat(ordering.root, "/reports/sales?lapse=today");
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
                totalSales = 0;

                if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                  _iterator2 = _createForOfIteratorHelper(result);

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      sale = _step2.value;
                      totalSales += sale.sales;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }

                setTodaySalesList(_objectSpread(_objectSpread({}, todaySalelsList), {}, {
                  loading: false,
                  sales: totalSales
                }));
              } else {
                setTodaySalesList(_objectSpread(_objectSpread({}, todaySalelsList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context2.next = 20;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](2);
              setTodaySalesList(_objectSpread(_objectSpread({}, todaySalelsList), {}, {
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
   * Method to get sales list
   */


  var getMonthSales = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var requestOptions, lapse, functionFetch, response, _yield$response$json3, error, result;

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
              setMonthSalesList(_objectSpread(_objectSpread({}, monthSalesList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              lapse = getCurrentDateRange();
              functionFetch = "".concat(ordering.root, "/reports/sales?lapse=").concat(lapse);
              _context3.next = 9;
              return fetch(functionFetch, requestOptions);

            case 9:
              response = _context3.sent;
              _context3.next = 12;
              return response.json();

            case 12:
              _yield$response$json3 = _context3.sent;
              error = _yield$response$json3.error;
              result = _yield$response$json3.result;

              if (!error) {
                setMonthSalesList(_objectSpread(_objectSpread({}, monthSalesList), {}, {
                  loading: false,
                  sales: result
                }));
              } else {
                setMonthSalesList(_objectSpread(_objectSpread({}, monthSalesList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context3.next = 21;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](2);
              setMonthSalesList(_objectSpread(_objectSpread({}, monthSalesList), {}, {
                loading: false,
                error: _context3.t0
              }));

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 18]]);
    }));

    return function getMonthSales() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getCurrentDateRange = function getCurrentDateRange() {
    var newDate = new Date();
    var date = newDate.getDate();
    var fullDate = date < 10 ? "0".concat(date) : date;
    var month = newDate.getMonth() + 1;
    var fullMonth = month < 10 ? "0".concat(month) : month;
    var year = newDate.getFullYear();
    return "".concat(year, "-").concat(fullMonth, "-01,").concat(year, "-").concat(fullMonth, "-").concat(fullDate);
  };

  (0, _react.useEffect)(function () {
    getOrders();
    getSales();
    getMonthSales();
    getTasks();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    ordersList: ordersList,
    todaySalelsList: todaySalelsList,
    monthSalesList: monthSalesList,
    taskList: taskList,
    getCurrentDateRange: getCurrentDateRange,
    handleUpdateTaskList: handleUpdateTaskList
  })));
};

exports.Home = Home;
Home.propTypes = {
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
Home.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};