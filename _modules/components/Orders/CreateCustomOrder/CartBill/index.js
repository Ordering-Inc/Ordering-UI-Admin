"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartBill = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _utils = require("../../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CartBill = function CartBill(props) {
  var _cart$offers, _cart$offers2, _cart$offers3, _cart$offers3$filter, _cart$offers4, _cart$offers4$filter, _cart$business, _ref, _cart$subtotal_with_d, _cart$taxes2, _cart$taxes3, _cart$fees, _cart$fees2, _cart$offers5, _cart$offers6, _cart$offers6$filter, _orderState$options, _cart$offers7, _cart$offers8, _cart$offers8$filter, _configs$driver_tip_t, _configs$driver_tip_u;
  var cart = props.cart;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseNumber = _useUtils2$.parseNumber;
  var _useOrder = (0, _orderingComponentsAdmin.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var getIncludedTaxes = function getIncludedTaxes() {
    if ((cart === null || cart === void 0 ? void 0 : cart.taxes) === null) {
      return (cart === null || cart === void 0 ? void 0 : cart.business.tax_type) === 1 ? cart === null || cart === void 0 ? void 0 : cart.tax : 0;
    } else {
      return cart === null || cart === void 0 ? void 0 : cart.taxes.reduce(function (taxIncluded, tax) {
        var _tax$summary;
        return taxIncluded + (tax.type === 1 ? (_tax$summary = tax.summary) === null || _tax$summary === void 0 ? void 0 : _tax$summary.tax : 0);
      }, 0);
    }
  };
  var getIncludedTaxesDiscounts = function getIncludedTaxesDiscounts() {
    var _cart$taxes, _cart$taxes$filter;
    return cart === null || cart === void 0 ? void 0 : (_cart$taxes = cart.taxes) === null || _cart$taxes === void 0 ? void 0 : (_cart$taxes$filter = _cart$taxes.filter(function (tax) {
      return (tax === null || tax === void 0 ? void 0 : tax.type) === 1;
    })) === null || _cart$taxes$filter === void 0 ? void 0 : _cart$taxes$filter.reduce(function (carry, tax) {
      var _tax$summary$tax_afte, _tax$summary2, _tax$summary3;
      return carry + ((_tax$summary$tax_afte = tax === null || tax === void 0 ? void 0 : (_tax$summary2 = tax.summary) === null || _tax$summary2 === void 0 ? void 0 : _tax$summary2.tax_after_discount) !== null && _tax$summary$tax_afte !== void 0 ? _tax$summary$tax_afte : tax === null || tax === void 0 ? void 0 : (_tax$summary3 = tax.summary) === null || _tax$summary3 === void 0 ? void 0 : _tax$summary3.tax);
    }, 0);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.CartBillContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('SUMMARY', '')), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.subtotal) + getIncludedTaxes()))), (cart === null || cart === void 0 ? void 0 : cart.discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.total) >= 0 && (cart === null || cart === void 0 ? void 0 : (_cart$offers = cart.offers) === null || _cart$offers === void 0 ? void 0 : _cart$offers.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, (cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : cart.discount_rate, parsePrice), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((cart === null || cart === void 0 ? void 0 : cart.discount) || 0))), (cart === null || cart === void 0 ? void 0 : (_cart$offers2 = cart.offers) === null || _cart$offers2 === void 0 ? void 0 : _cart$offers2.length) > 0 && (cart === null || cart === void 0 ? void 0 : (_cart$offers3 = cart.offers) === null || _cart$offers3 === void 0 ? void 0 : (_cart$offers3$filter = _cart$offers3.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 1;
  })) === null || _cart$offers3$filter === void 0 ? void 0 : _cart$offers3$filter.map(function (offer) {
    var _offer$summary;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, offer.name, offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary = offer.summary) === null || _offer$summary === void 0 ? void 0 : _offer$summary.discount)));
  })), (cart === null || cart === void 0 ? void 0 : (_cart$offers4 = cart.offers) === null || _cart$offers4 === void 0 ? void 0 : (_cart$offers4$filter = _cart$offers4.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 1;
  })) === null || _cart$offers4$filter === void 0 ? void 0 : _cart$offers4$filter.length) > 0 && (cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.total) >= 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), (cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.tax_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref = (cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) + getIncludedTaxesDiscounts()) !== null && _ref !== void 0 ? _ref : 0)) : /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_cart$subtotal_with_d = cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) !== null && _cart$subtotal_with_d !== void 0 ? _cart$subtotal_with_d : 0))), (cart === null || cart === void 0 ? void 0 : (_cart$taxes2 = cart.taxes) === null || _cart$taxes2 === void 0 ? void 0 : _cart$taxes2.length) > 0 && (cart === null || cart === void 0 ? void 0 : (_cart$taxes3 = cart.taxes) === null || _cart$taxes3 === void 0 ? void 0 : _cart$taxes3.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0;
  }).map(function (tax) {
    var _ref2, _tax$summary$tax_afte2, _tax$summary4, _tax$summary5;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, tax.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref2 = (_tax$summary$tax_afte2 = tax === null || tax === void 0 ? void 0 : (_tax$summary4 = tax.summary) === null || _tax$summary4 === void 0 ? void 0 : _tax$summary4.tax_after_discount) !== null && _tax$summary$tax_afte2 !== void 0 ? _tax$summary$tax_afte2 : tax === null || tax === void 0 ? void 0 : (_tax$summary5 = tax.summary) === null || _tax$summary5 === void 0 ? void 0 : _tax$summary5.tax) !== null && _ref2 !== void 0 ? _ref2 : 0)));
  })), (cart === null || cart === void 0 ? void 0 : (_cart$fees = cart.fees) === null || _cart$fees === void 0 ? void 0 : _cart$fees.length) > 0 && (cart === null || cart === void 0 ? void 0 : (_cart$fees2 = cart.fees) === null || _cart$fees2 === void 0 ? void 0 : _cart$fees2.filter(function (fee) {
    return !(fee.fixed === 0 && fee.percentage === 0);
  }).map(function (fee, i) {
    var _fee$id, _ref3, _fee$summary, _fee$summary$percenta, _fee$summary2, _fee$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: (_fee$id = fee.id) !== null && _fee$id !== void 0 ? _fee$id : i
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, fee.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), "(", (fee === null || fee === void 0 ? void 0 : fee.fixed) > 0 && "".concat(parsePrice(fee === null || fee === void 0 ? void 0 : fee.fixed)).concat(fee.percentage > 0 ? ' + ' : ''), fee.percentage > 0 && "".concat(fee.percentage, "%"), ")"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref3 = (fee === null || fee === void 0 ? void 0 : (_fee$summary = fee.summary) === null || _fee$summary === void 0 ? void 0 : _fee$summary.fixed) + ((_fee$summary$percenta = fee === null || fee === void 0 ? void 0 : (_fee$summary2 = fee.summary) === null || _fee$summary2 === void 0 ? void 0 : _fee$summary2.percentage_after_discount) !== null && _fee$summary$percenta !== void 0 ? _fee$summary$percenta : fee === null || fee === void 0 ? void 0 : (_fee$summary3 = fee.summary) === null || _fee$summary3 === void 0 ? void 0 : _fee$summary3.percentage)) !== null && _ref3 !== void 0 ? _ref3 : 0)));
  })), (cart === null || cart === void 0 ? void 0 : (_cart$offers5 = cart.offers) === null || _cart$offers5 === void 0 ? void 0 : _cart$offers5.length) > 0 && (cart === null || cart === void 0 ? void 0 : (_cart$offers6 = cart.offers) === null || _cart$offers6 === void 0 ? void 0 : (_cart$offers6$filter = _cart$offers6.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 3;
  })) === null || _cart$offers6$filter === void 0 ? void 0 : _cart$offers6$filter.map(function (offer) {
    var _offer$summary2;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, offer.name, (offer === null || offer === void 0 ? void 0 : offer.rate_type) === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary2 = offer.summary) === null || _offer$summary2 === void 0 ? void 0 : _offer$summary2.discount)));
  })), (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.delivery_price_with_discount))), (cart === null || cart === void 0 ? void 0 : (_cart$offers7 = cart.offers) === null || _cart$offers7 === void 0 ? void 0 : _cart$offers7.length) > 0 && (cart === null || cart === void 0 ? void 0 : (_cart$offers8 = cart.offers) === null || _cart$offers8 === void 0 ? void 0 : (_cart$offers8$filter = _cart$offers8.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 2;
  })) === null || _cart$offers8$filter === void 0 ? void 0 : _cart$offers8$filter.map(function (offer) {
    var _offer$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, offer.name, (offer === null || offer === void 0 ? void 0 : offer.rate_type) === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary3 = offer.summary) === null || _offer$summary3 === void 0 ? void 0 : _offer$summary3.discount)));
  })), (cart === null || cart === void 0 ? void 0 : cart.driver_tip) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', 'Driver tip'), ' ', (cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate) > 0 && parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.driver_tip))))), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.total) >= 0 ? cart === null || cart === void 0 ? void 0 : cart.total : 0))))));
};
exports.CartBill = CartBill;