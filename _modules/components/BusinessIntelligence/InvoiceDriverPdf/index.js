"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceDriverPdf = void 0;

var _orderingComponentsAdmin = require("ordering-components-admin");

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InvoiceDriverPdf = function InvoiceDriverPdf(props) {
  var _exportInvoiceList$in, _exportInvoiceList$in2, _exportInvoiceList$in3, _exportInvoiceList$in4, _exportInvoiceList$in5, _exportInvoiceList$in6, _exportInvoiceList$in7, _exportInvoiceList$in8, _exportInvoiceList$in9, _exportInvoiceList$in10, _exportInvoiceList$in11, _exportInvoiceList$in12, _exportInvoiceList$in13, _exportInvoiceList$in14, _exportInvoiceList$in15, _exportInvoiceList$in16, _exportInvoiceList$in17, _exportInvoiceList$in18, _exportInvoiceList$in19, _exportInvoiceList$in20, _exportInvoiceList$in21, _exportInvoiceList$in22, _exportInvoiceList$in23, _exportInvoiceList$in24, _exportInvoiceList$in25, _exportInvoiceList$in26, _exportInvoiceList$in27, _exportInvoiceList$in28;

  var exportInvoiceList = props.exportInvoiceList,
      getSubtotal = props.getSubtotal,
      getTotal = props.getTotal;

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

  return /*#__PURE__*/_react.default.createElement("div", {
    style: styles.root
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: "https://reactdemo.ordering.co/ac950c6a4d2521f00bfc442ebfa83f77.svg",
    fluid: true,
    height: "45px",
    width: "150px"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, t('INVOICE_FOR', 'Invoice for'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in = exportInvoiceList.invoice) === null || _exportInvoiceList$in === void 0 ? void 0 : (_exportInvoiceList$in2 = _exportInvoiceList$in.driver) === null || _exportInvoiceList$in2 === void 0 ? void 0 : _exportInvoiceList$in2.name)), /*#__PURE__*/_react.default.createElement("br", null), (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in3 = exportInvoiceList.invoice) === null || _exportInvoiceList$in3 === void 0 ? void 0 : _exportInvoiceList$in3.from) && (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in4 = exportInvoiceList.invoice) === null || _exportInvoiceList$in4 === void 0 ? void 0 : _exportInvoiceList$in4.to) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, t('FROM', 'From'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in5 = exportInvoiceList.invoice) === null || _exportInvoiceList$in5 === void 0 ? void 0 : _exportInvoiceList$in5.from), " ", t('TO', 'To'), " ", /*#__PURE__*/_react.default.createElement("b", null, exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in6 = exportInvoiceList.invoice) === null || _exportInvoiceList$in6 === void 0 ? void 0 : _exportInvoiceList$in6.to)), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("span", null, t('AMOUNT_TO_ORDERS', 'Amount to orders'), ": ", exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in7 = exportInvoiceList.invoice) === null || _exportInvoiceList$in7 === void 0 ? void 0 : _exportInvoiceList$in7.orders.length), /*#__PURE__*/_react.default.createElement("table", {
    style: styles.table
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.thead.trFirst
  }, /*#__PURE__*/_react.default.createElement("th", {
    style: styles.table.thead.th,
    colspan: "5"
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
    colspan: "4"
  }, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in11 = exportInvoiceList.invoice) === null || _exportInvoiceList$in11 === void 0 ? void 0 : _exportInvoiceList$in11.orders_subtotal))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td,
    colspan: "4"
  }, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in12 = exportInvoiceList.invoice) === null || _exportInvoiceList$in12 === void 0 ? void 0 : _exportInvoiceList$in12.orders_total))))), /*#__PURE__*/_react.default.createElement("table", {
    style: styles.table
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.thead.trLast
  }, /*#__PURE__*/_react.default.createElement("th", {
    style: styles.table.thead.th,
    colspan: "2"
  }, t('TOTALS', 'Totals')))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('ORDERS', 'Orders'), " (", t('SUBTOTAL', 'Subtotal'), ")"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in13 = exportInvoiceList.invoice) === null || _exportInvoiceList$in13 === void 0 ? void 0 : _exportInvoiceList$in13.orders_subtotal))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in14 = exportInvoiceList.invoice) === null || _exportInvoiceList$in14 === void 0 ? void 0 : _exportInvoiceList$in14.discounts))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('PERCENTAGE_FEE', 'Percentage Fee'), " (", exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in15 = exportInvoiceList.invoice) === null || _exportInvoiceList$in15 === void 0 ? void 0 : _exportInvoiceList$in15.percentage_fee, "%)"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in16 = exportInvoiceList.invoice) === null || _exportInvoiceList$in16 === void 0 ? void 0 : _exportInvoiceList$in16.percentage_fee_total))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('FIXED_FEE', 'Fixed Fee')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in17 = exportInvoiceList.invoice) === null || _exportInvoiceList$in17 === void 0 ? void 0 : _exportInvoiceList$in17.fixed_fee_total))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('DELIVERY_PRICE', 'Delivery price'), " ", t('PERCENTAGE', 'Percentage')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in18 = exportInvoiceList.invoice) === null || _exportInvoiceList$in18 === void 0 ? void 0 : _exportInvoiceList$in18.percentage_delivery_price_total))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('DRIVER_TIP', 'Driver tip'), " ", t('PERCENTAGE', 'Percentage')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in19 = exportInvoiceList.invoice) === null || _exportInvoiceList$in19 === void 0 ? void 0 : _exportInvoiceList$in19.percentage_driver_tip_total))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.td
  }, t('MISC', 'Misc'), " ", (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in20 = exportInvoiceList.invoice) === null || _exportInvoiceList$in20 === void 0 ? void 0 : _exportInvoiceList$in20.misc_description) && /*#__PURE__*/_react.default.createElement("small", null, "(", exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in21 = exportInvoiceList.invoice) === null || _exportInvoiceList$in21 === void 0 ? void 0 : _exportInvoiceList$in21.misc_description, ")")), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tbody.tr.tdNumber
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in22 = exportInvoiceList.invoice) === null || _exportInvoiceList$in22 === void 0 ? void 0 : _exportInvoiceList$in22.misc_amount)))), /*#__PURE__*/_react.default.createElement("tfoot", {
    style: styles.table.tfoot
  }, /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in23 = exportInvoiceList.invoice) === null || _exportInvoiceList$in23 === void 0 ? void 0 : _exportInvoiceList$in23.subtotal))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('TAX', 'Tax'), " (", exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in24 = exportInvoiceList.invoice) === null || _exportInvoiceList$in24 === void 0 ? void 0 : _exportInvoiceList$in24.tax, "%)"), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in25 = exportInvoiceList.invoice) === null || _exportInvoiceList$in25 === void 0 ? void 0 : _exportInvoiceList$in25.tax_total))), /*#__PURE__*/_react.default.createElement("tr", {
    style: styles.table.tfoot.tr
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", {
    style: styles.table.tfoot.tr.td
  }, parsePrice(exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in26 = exportInvoiceList.invoice) === null || _exportInvoiceList$in26 === void 0 ? void 0 : _exportInvoiceList$in26.total))))), (exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in27 = exportInvoiceList.invoice) === null || _exportInvoiceList$in27 === void 0 ? void 0 : _exportInvoiceList$in27.notes) && /*#__PURE__*/_react.default.createElement("p", {
    style: styles.notes,
    dangerouslySetInnerHTML: {
      __html: exportInvoiceList === null || exportInvoiceList === void 0 ? void 0 : (_exportInvoiceList$in28 = exportInvoiceList.invoice) === null || _exportInvoiceList$in28 === void 0 ? void 0 : _exportInvoiceList$in28.notes
    }
  }));
};

exports.InvoiceDriverPdf = InvoiceDriverPdf;