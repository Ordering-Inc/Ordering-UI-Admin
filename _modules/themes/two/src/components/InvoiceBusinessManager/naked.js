"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceBusinessManager = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

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

var InvoiceBusinessManager = function InvoiceBusinessManager(props) {
  var UIComponent = props.UIComponent,
      propsToFetch = props.propsToFetch;

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useState = (0, _react.useState)({
    loading: false,
    businesses: [],
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessList = _useState2[0],
      setBusinessList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    data: [],
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      payMethodsList = _useState4[0],
      setPayMethodsList = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      orderTypes = _useState6[0],
      setOrderTypes = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    invoice: null,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      exportInvoiceList = _useState8[0],
      setExportInvoiceList = _useState8[1];

  var _useState9 = (0, _react.useState)({
    type: 'charge',
    from: '',
    to: '',
    business: '',
    cancelled: false,
    discounts: false,
    notes: '',
    percentage_fee: 0,
    fixed_fee: 0,
    tax: 0,
    misc_amount: 0,
    misc_description: ''
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      businessInvocing = _useState10[0],
      setBusinessInvocing = _useState10[1];

  var handleChangePayMethods = function handleChangePayMethods(payMethods) {
    setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
      data: payMethods
    }));
  };
  /**
   * Method to get business list
   */


  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$busin, _yield$ordering$busin2, error, result, pagination;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: true
              }));
              _context.next = 4;
              return ordering.businesses().asDashboard().select(propsToFetch).get();

            case 4:
              _yield$ordering$busin = _context.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              error = _yield$ordering$busin2.error;
              result = _yield$ordering$busin2.result;
              pagination = _yield$ordering$busin2.pagination;

              if (!error) {
                setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                  loading: false,
                  businesses: result,
                  pagination: pagination
                }));
              } else {
                setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: [_context.t0 || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.toString()) || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message)]
              }));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function getBusiness() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get payMethod list from API
   */


  var getPaymentMethod = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, functionFetch, response, _yield$response$json, error, result, _data;

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
              setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = "".concat(ordering.root, "/paymethods");
              _context2.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context2.sent;
              _context2.next = 11;
              return response.json();

            case 11:
              _yield$response$json = _context2.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                _data = result.filter(function (item) {
                  return item.enabled;
                });
                setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
                  loading: false,
                  data: _data
                }));
              } else {
                setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context2.next = 20;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](2);
              setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
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

    return function getPaymentMethod() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to get order list from API
   */


  var getOrders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var where, _yield$ordering$order, _yield$ordering$order2, error, result, pagination, invoice;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
                loading: true
              }));
              where = [{
                attribute: 'business_id',
                value: businessInvocing.business
              }];

              if (businessInvocing.from) {
                where.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '>=',
                    value: "".concat(businessInvocing.from, " 00:00:00")
                  }
                });
              }

              if (businessInvocing.to) {
                where.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '<=',
                    value: "".concat(businessInvocing.to, " 23:59:59")
                  }
                });
              }

              _context3.next = 7;
              return ordering.orders().asDashboard().where(where).get();

            case 7:
              _yield$ordering$order = _context3.sent;
              _yield$ordering$order2 = _yield$ordering$order.content;
              error = _yield$ordering$order2.error;
              result = _yield$ordering$order2.result;
              pagination = _yield$ordering$order2.pagination;

              if (!error) {
                invoice = getExportInvoice(result);
                setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
                  loading: false,
                  invoice: invoice,
                  pagination: pagination
                }));
              } else {
                setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context3.next = 18;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](0);
              setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
                loading: false,
                error: [_context3.t0 || (_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.toString()) || (_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message)]
              }));

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 15]]);
    }));

    return function getOrders() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getExportInvoice = function getExportInvoice(result) {
    var paymethods = [];

    var _iterator = _createForOfIteratorHelper(payMethodsList === null || payMethodsList === void 0 ? void 0 : payMethodsList.data),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var paymethod = _step.value;
        if (paymethod.enabled) paymethods.push(paymethod.id);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _orderTypes = [];

    if (orderTypes) {
      var _iterator2 = _createForOfIteratorHelper(orderTypes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var orderType = _step2.value;
          if (orderType.enabled) _orderTypes.push(orderType.value);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    var from = businessInvocing.from.split('-');
    if (from.length === 1) from = null;else from = new Date(from[0], from[1] - 1, from[2], 0, 0, 0, 0);
    var to = businessInvocing.to.split('-');
    if (to.length === 1) to = null;else to = new Date(to[0], to[1] - 1, to[2], 0, 0, 0, 0);
    var orders = result.filter(function (order) {
      var valid = true;
      var date = order.delivery_datetime.split(' ');
      date = new Date(date[0].split('-')[0], date[0].split('-')[1] - 1, date[0].split('-')[2], 0, 0, 0, 0);

      if (paymethods.indexOf(order.paymethod_id) === -1 || _orderTypes.indexOf(order.delivery_type) === -1 || [0, 1, 7, 8, 9, 11, 15].indexOf(order.status) === -1 && !businessInvocing.cancelled) {
        valid = false;
      }

      if (from && from > date || to && to < date) valid = false;
      return valid;
    });
    var _exportInvoice = {
      from: businessInvocing.from,
      to: businessInvocing.to,
      type: businessInvocing.type,
      orders: orders,
      percentage_fee: businessInvocing.percentage_fee,
      fixed_fee: businessInvocing.fixed_fee,
      tax: businessInvocing.tax,
      misc_amount: (businessInvocing.type !== 'payout' ? 1 : -1) * businessInvocing.misc_amount,
      misc_description: businessInvocing.misc_description,
      inlcude_discounts: businessInvocing.discounts,
      tax_products: businessInvocing.type !== 'payout' ? 0 : orders.reduce(function (previous, current) {
        if (current.tax_type === 1) return previous;else return previous + getTax(current);
      }, 0),
      discounts: !businessInvocing.discounts ? 0 : orders.reduce(function (previous, current) {
        return previous - getDiscount(current);
      }, 0),
      orders_subtotal: orders.reduce(function (previous, current) {
        return previous + getSubtotal(current);
      }, 0),
      orders_total: orders.reduce(function (previous, current) {
        return previous + getTotal(current);
      }, 0),
      notes: businessInvocing.notes.replace(/\n/g, '<br>')
    };
    _exportInvoice.percentage_fee_total = (businessInvocing.type !== 'payout' ? 1 : -1) * (_exportInvoice.orders_subtotal + _exportInvoice.discounts) * businessInvocing.percentage_fee / 100;
    _exportInvoice.fixed_fee_total = (businessInvocing.type !== 'payout' ? 1 : -1) * orders.length * businessInvocing.fixed_fee;
    var subtotal = parseFloat(_exportInvoice.percentage_fee_total) + parseFloat(_exportInvoice.fixed_fee_total) + parseFloat(_exportInvoice.misc_amount) + parseFloat(_exportInvoice.discounts) + parseFloat(_exportInvoice.tax_products) + (businessInvocing.type !== 'payout' ? 0 : parseFloat(_exportInvoice.orders_subtotal));
    _exportInvoice.subtotal = subtotal;
    _exportInvoice.tax_total = (businessInvocing.type !== 'payout' ? 1 : -1) * subtotal * parseFloat(businessInvocing.tax) / 100;
    _exportInvoice.total = subtotal + _exportInvoice.tax_total;
    businessList.businesses.forEach(function (business) {
      if (business.id === businessInvocing.business) {
        _exportInvoice.business = business;
      }
    });
    return _exportInvoice;
  };
  /**
   * Method to get sub option total
   */


  var getSuboptionTotal = function getSuboptionTotal(option, suboption) {
    var suboptionQuantity = 1;
    var suboptionPrice = suboption.price;

    if (option.allow_suboptionQuantity && suboption.quantity) {
      suboptionQuantity = suboption.quantity;
    }

    if (option.with_half_option && suboption.position && suboption.position !== 'whole') {
      suboptionPrice = suboption.half_price;
    }

    return suboptionPrice * suboptionQuantity;
  };
  /**
   * Method to get product total
   */


  var getProductsTotal = function getProductsTotal(product) {
    var total = 0;

    if (product.options) {
      for (var i = 0; i < product.options.length; i++) {
        var option = product.options[i];

        if (option.suboptions) {
          for (var j = 0; j < option.suboptions.length; j++) {
            var suboption = option.suboptions[j];
            total += getSuboptionTotal(option, suboption);
          }
        }
      }
    }

    return (total + product.price) * product.quantity;
  };
  /**
   * Method to get order sub total
   */


  var getSubtotal = function getSubtotal(order) {
    if (!order.summary) {
      var subtotal = 0;

      for (var i = 0; i < order.products.length; i++) {
        subtotal += getProductsTotal(order.products[i]);
      }

      return roundPrice(subtotal);
    } else {
      var fixOrderSummary = true;

      if (configs !== null && configs !== void 0 && configs.project_fix_order_summary) {
        var _configs$project_fix_;

        fixOrderSummary = (configs === null || configs === void 0 ? void 0 : (_configs$project_fix_ = configs.project_fix_order_summary) === null || _configs$project_fix_ === void 0 ? void 0 : _configs$project_fix_.value) === '1';
      }

      if (order.tax_type === 1 && !fixOrderSummary) {
        return order.summary.subtotal + order.summary.tax;
      }

      return order.summary.subtotal;
    }
  };
  /**
   * Method to get order tax
   */


  var getTax = function getTax(order) {
    if (!order.summary) {
      var tax = order.tax_type === 2 ? order.tax * (getSubtotal(order) - order.discount) / 100 : 0;
      return roundPrice(tax);
    } else {
      return order.summary.tax;
    }
  };
  /**
   * Method to get order discount
   */


  var getDiscount = function getDiscount(order) {
    if (!order.summary) {
      return roundPrice(order.discount);
    } else {
      return order.summary.discount;
    }
  };
  /**
   * Method to get converted number
   */


  var roundPrice = function roundPrice(value) {
    var _configs$format_numbe;

    var power = Math.pow(10, configs === null || configs === void 0 ? void 0 : (_configs$format_numbe = configs.format_number_decimal_length) === null || _configs$format_numbe === void 0 ? void 0 : _configs$format_numbe.value);
    var poweredVal = Math.round(value * power);
    return poweredVal / power;
  };
  /**
   * Method to get order total
   */


  var getTotal = function getTotal(order) {
    if (!order.summary) {
      var subtotal = getSubtotal(order);
      var tax = getTax(order);
      var serviceFee = getServiceFee(order);
      var totalorder = order.delivery_type === '2' ? subtotal + tax + serviceFee - order.discount : subtotal + tax + order.delivery_zone_price + getDriverTip(order) + serviceFee - order.discount;
      return roundPrice(totalorder);
    } else {
      return order.summary.total;
    }
  };
  /**
   * Method to get order service fee
   */


  var getServiceFee = function getServiceFee(order) {
    if (!order.summary) {
      var subtotal = (getSubtotal(order) - order.discount) * order.service_fee / 100;
      return roundPrice(subtotal);
    } else {
      return order.summary.service_fee;
    }
  };
  /**
   * Method to get order driver tip
   */


  var getDriverTip = function getDriverTip(order) {
    if (!order.summary) {
      var tip = (getSubtotal(order) - order.discount) * order.driver_tip / 100;
      return roundPrice(tip);
    } else {
      return order.summary.driver_tip;
    }
  };

  (0, _react.useEffect)(function () {
    getBusiness();
    getPaymentMethod();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessList: businessList,
    invocing: businessInvocing,
    payMethodsList: payMethodsList,
    orderTypes: orderTypes,
    exportInvoiceList: exportInvoiceList,
    handleChangeOrderTypes: setOrderTypes,
    handleChangeInvocing: setBusinessInvocing,
    handleChangePayMethods: handleChangePayMethods,
    getOrders: getOrders,
    getSubtotal: getSubtotal,
    getTotal: getTotal
  })));
};

exports.InvoiceBusinessManager = InvoiceBusinessManager;
InvoiceBusinessManager.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

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
InvoiceBusinessManager.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname']
};