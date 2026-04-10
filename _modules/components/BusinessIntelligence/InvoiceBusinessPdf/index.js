"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceBusinessPdf = void 0;
var _orderingComponentsAdmin = require("ordering-components-admin");
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _ConfigFileContext = require("../../../contexts/ConfigFileContext");
var _utils = require("../../../utils");
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
var InvoiceBusinessPdf = exports.InvoiceBusinessPdf = function InvoiceBusinessPdf(props) {
  var _configFile$app_inter, _theme$images, _exportInvoiceList$in, _exportInvoiceList$in2, _exportInvoiceList$in3, _exportInvoiceList$in4, _exportInvoiceList$in5, _exportInvoiceList$in6, _exportInvoiceList$in7, _exportInvoiceList$in8, _exportInvoiceList$in9, _exportInvoiceList$in0, _exportInvoiceList$in1, _exportInvoiceList$in10, _exportInvoiceList$in11, _exportInvoiceList$in12, _exportInvoiceList$in13, _exportInvoiceList$in14, _exportInvoiceList$in15, _exportInvoiceList$in16, _exportInvoiceList$in17, _exportInvoiceList$in18, _exportInvoiceList$in19, _exportInvoiceList$in20, _exportInvoiceList$in21, _exportInvoiceList$in22, _exportInvoiceList$in23, _exportInvoiceList$in24, _exportInvoiceList$in25, _exportInvoiceList$in26, _exportInvoiceList$in27, _exportInvoiceList$in28;
  var exportInvoiceList = props.exportInvoiceList,
    getSubtotal = props.getSubtotal,
    getTotal = props.getTotal;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    dictionary = _useLanguage2[0].dictionary,
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    parsePrice = _useUtils2$.parsePrice;
  var _useContext = (0, _react.useContext)(_ConfigFileContext.ConfigFileContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    configFile = _useContext2[0];
  var prefixForVariable = configFile === null || configFile === void 0 || (_configFile$app_inter = configFile.app_internal_name) === null || _configFile$app_inter === void 0 ? void 0 : _configFile$app_inter.toUpperCase();
  var styles = {
    root: {
      fontFamily: 'Noto Sans Georgian, sans-serif',
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
  var logoImage = theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.logos) === null || _theme$images === void 0 ? void 0 : _theme$images.logoPdf;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    base64ImageString = _useState2[0],
    setBase64ImageString = _useState2[1];
  var getBase64ImageFromUrl = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(imageUrl) {
      var response, blob;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return fetch(imageUrl);
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.blob();
          case 2:
            blob = _context.v;
            return _context.a(2, new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.addEventListener('load', function () {
                resolve(reader.result);
              }, false);
              reader.onerror = function (error) {
                return reject(error);
              };
              reader.readAsDataURL(blob);
            }));
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
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, t('INVOICE_FOR', 'Invoice for'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in = exportInvoiceList.invoice) === null || _exportInvoiceList$in === void 0 || (_exportInvoiceList$in = _exportInvoiceList$in.business) === null || _exportInvoiceList$in === void 0 ? void 0 : _exportInvoiceList$in.name)), /*#__PURE__*/_react.default.createElement("br", null), (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in2 = exportInvoiceList.invoice) === null || _exportInvoiceList$in2 === void 0 ? void 0 : _exportInvoiceList$in2.from) && (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in3 = exportInvoiceList.invoice) === null || _exportInvoiceList$in3 === void 0 ? void 0 : _exportInvoiceList$in3.to) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, t('FROM', 'From'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in4 = exportInvoiceList.invoice) === null || _exportInvoiceList$in4 === void 0 ? void 0 : _exportInvoiceList$in4.from), " ", t('TO', 'To'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in5 = exportInvoiceList.invoice) === null || _exportInvoiceList$in5 === void 0 ? void 0 : _exportInvoiceList$in5.to)), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("span", null, t('AMOUNT_TO_ORDERS', 'Amount to orders'), ": ", exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in6 = exportInvoiceList.invoice) === null || _exportInvoiceList$in6 === void 0 ? void 0 : _exportInvoiceList$in6.orders.length), /*#__PURE__*/_react.default.createElement("table", {
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
    }, (0, _utils.getOrderStatusPrefix)(order.status, dictionary, prefixForVariable)), /*#__PURE__*/_react.default.createElement("td", {
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
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in0 = exportInvoiceList.invoice) === null || _exportInvoiceList$in0 === void 0 ? void 0 : _exportInvoiceList$in0.orders_total))))), /*#__PURE__*/_react.default.createElement("table", {
    style: styles.table
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.thead.trLast
  }, /*#__PURE__*/_react.default.createElement("th", {
    style: styles.table.thead.th,
    colSpan: "2"
  }, t('TOTALS', 'Totals')))), /*#__PURE__*/_react.default.createElement("tbody", null, (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in1 = exportInvoiceList.invoice) === null || _exportInvoiceList$in1 === void 0 ? void 0 : _exportInvoiceList$in1.type) === 'payout' && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('ORDERS', 'Orders'), " (", t('SUBTOTAL', 'Subtotal'), ")"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in10 = exportInvoiceList.invoice) === null || _exportInvoiceList$in10 === void 0 ? void 0 : _exportInvoiceList$in10.orders_subtotal))), (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in11 = exportInvoiceList.invoice) === null || _exportInvoiceList$in11 === void 0 ? void 0 : _exportInvoiceList$in11.inlcude_discounts) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('DISCOUNTS_BY_PLATFORM', 'Discounts by platform')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in12 = exportInvoiceList.invoice) === null || _exportInvoiceList$in12 === void 0 ? void 0 : _exportInvoiceList$in12.discounts))), (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in13 = exportInvoiceList.invoice) === null || _exportInvoiceList$in13 === void 0 ? void 0 : _exportInvoiceList$in13.type) === 'payout' && (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in14 = exportInvoiceList.invoice) === null || _exportInvoiceList$in14 === void 0 ? void 0 : _exportInvoiceList$in14.tax_products) !== 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('PRODUCTS', 'Products'), " ", t('TAX', 'Tax')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in15 = exportInvoiceList.invoice) === null || _exportInvoiceList$in15 === void 0 ? void 0 : _exportInvoiceList$in15.tax_products))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('PERCENTAGE_FEE', 'Percentage Fee'), " (", exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in16 = exportInvoiceList.invoice) === null || _exportInvoiceList$in16 === void 0 ? void 0 : _exportInvoiceList$in16.percentage_fee, "%)"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in17 = exportInvoiceList.invoice) === null || _exportInvoiceList$in17 === void 0 ? void 0 : _exportInvoiceList$in17.percentage_fee_total))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('FIXED_FEE', 'Fixed Fee')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in18 = exportInvoiceList.invoice) === null || _exportInvoiceList$in18 === void 0 ? void 0 : _exportInvoiceList$in18.fixed_fee_total))), (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in19 = exportInvoiceList.invoice) === null || _exportInvoiceList$in19 === void 0 ? void 0 : _exportInvoiceList$in19.misc_amount) !== 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('MISC', 'Misc'), " ", (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in20 = exportInvoiceList.invoice) === null || _exportInvoiceList$in20 === void 0 ? void 0 : _exportInvoiceList$in20.misc_description) && /*#__PURE__*/_react.default.createElement("small", null, "(", exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in21 = exportInvoiceList.invoice) === null || _exportInvoiceList$in21 === void 0 ? void 0 : _exportInvoiceList$in21.misc_description, ")")), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in22 = exportInvoiceList.invoice) === null || _exportInvoiceList$in22 === void 0 ? void 0 : _exportInvoiceList$in22.misc_amount)))), /*#__PURE__*/_react.default.createElement("tfoot", {
    style: styles.table.tfoot
  }, /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in23 = exportInvoiceList.invoice) === null || _exportInvoiceList$in23 === void 0 ? void 0 : _exportInvoiceList$in23.subtotal))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('TAX', 'Tax'), " (", exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in24 = exportInvoiceList.invoice) === null || _exportInvoiceList$in24 === void 0 ? void 0 : _exportInvoiceList$in24.tax, "%)"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in25 = exportInvoiceList.invoice) === null || _exportInvoiceList$in25 === void 0 ? void 0 : _exportInvoiceList$in25.tax_total))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in26 = exportInvoiceList.invoice) === null || _exportInvoiceList$in26 === void 0 ? void 0 : _exportInvoiceList$in26.total))))), (exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in27 = exportInvoiceList.invoice) === null || _exportInvoiceList$in27 === void 0 ? void 0 : _exportInvoiceList$in27.notes) && /*#__PURE__*/_react.default.createElement("p", {
    style: styles.notes,
    dangerouslySetInnerHTML: {
      __html: exportInvoiceList === null || exportInvoiceList === void 0 || (_exportInvoiceList$in28 = exportInvoiceList.invoice) === null || _exportInvoiceList$in28 === void 0 ? void 0 : _exportInvoiceList$in28.notes
    }
  }));
};