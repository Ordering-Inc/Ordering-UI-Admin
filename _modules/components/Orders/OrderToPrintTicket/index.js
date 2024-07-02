"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderToPrintTicket = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../../utils");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderToPrintTicket = exports.OrderToPrintTicket = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _configs$driver_tip_t, _configs$driver_tip_u, _order$summary2, _replace$trim, _ref2, _order$customer$name, _order$customer, _order$customer$middl, _order$customer2, _order$customer$lastn, _order$customer3, _order$customer$secon, _order$customer4, _getOrderStatus, _order$paymethod, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9, _order$customer10, _order$customer11, _order$customer12, _order$business, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _order$business7, _order$business8, _order$business9, _order$products, _order$products2, _order$summary$subtot, _order$summary3, _ref3, _order$summary4, _order$offers, _order$summary$discou, _order$summary5, _order$offers2, _order$offers3, _order$summary6, _order$summary7, _order$summary8, _ref4, _order$summary9, _order$summary$subtot2, _order$summary10, _order$taxes3, _order$summary$tax2, _order$summary11, _order$fees, _order$summary$servic, _order$summary12, _order$taxes4, _order$taxes5, _order$fees2, _order$fees3, _order$offers4, _order$offers5, _order$summary13, _order$summary14, _order$taxes6, _order$taxes7, _order$offers6, _order$offers7, _order$summary$driver, _order$summary15, _order$summary$total, _order$summary16;
  var order = props.order,
    getOrderStatus = props.getOrderStatus;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    parsePrice = _useUtils2$.parsePrice,
    parseNumber = _useUtils2$.parseNumber;
  var deliveryStatus = {
    1: t('DELIVERY', 'Delivery'),
    2: t('PICK_UP', 'Pick up'),
    3: t('EAT_IN', 'Eat In'),
    4: t('CURBSIDE', 'Curbside'),
    5: t('DRIVER_THRU', 'Driver thru')
  };
  var getProductPrice = function getProductPrice(product) {
    var subOptionPrice = 0;
    if (Array.isArray(product.options)) {
      var _product$options;
      if (((_product$options = product.options) === null || _product$options === void 0 ? void 0 : _product$options.length) > 0) {
        var _iterator = _createForOfIteratorHelper(product.options),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var option = _step.value;
            var _iterator2 = _createForOfIteratorHelper(option.suboptions),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var suboption = _step2.value;
                subOptionPrice += suboption.quantity * suboption.price;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    var price = product.quantity * (product.price + subOptionPrice);
    return parseFloat(price.toFixed(2));
  };
  var getFormattedSubOptionName = function getFormattedSubOptionName(_ref) {
    var quantity = _ref.quantity,
      name = _ref.name,
      position = _ref.position,
      price = _ref.price;
    if (name !== 'No') {
      var pos = position && position !== 'whole' ? "(".concat(t(position.toUpperCase(), position), ")") : '';
      return pos ? "".concat(quantity, " x ").concat(name, " ").concat(pos, " + ").concat(parsePrice(price)) : "".concat(quantity, " x ").concat(name, " + ").concat(parsePrice(price));
    } else {
      return 'No';
    }
  };
  var getSuboptions = function getSuboptions(suboptions) {
    var array = [];
    suboptions && suboptions.length > 0 && suboptions.map(function (suboption) {
      var string = "".concat(getFormattedSubOptionName(suboption));
      array.push(string);
    });
    return array.join('');
  };
  var getIncludedTaxesDiscounts = function getIncludedTaxesDiscounts() {
    var _order$taxes;
    return order === null || order === void 0 || (_order$taxes = order.taxes) === null || _order$taxes === void 0 || (_order$taxes = _order$taxes.filter(function (tax) {
      return (tax === null || tax === void 0 ? void 0 : tax.type) === 1 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'product';
    })) === null || _order$taxes === void 0 ? void 0 : _order$taxes.reduce(function (carry, tax) {
      var _tax$summary$tax_afte, _tax$summary, _tax$summary2;
      return carry + ((_tax$summary$tax_afte = tax === null || tax === void 0 || (_tax$summary = tax.summary) === null || _tax$summary === void 0 ? void 0 : _tax$summary.tax_after_discount) !== null && _tax$summary$tax_afte !== void 0 ? _tax$summary$tax_afte : tax === null || tax === void 0 || (_tax$summary2 = tax.summary) === null || _tax$summary2 === void 0 ? void 0 : _tax$summary2.tax);
    }, 0);
  };
  var getIncludedTaxes = function getIncludedTaxes(isDeliveryFee) {
    var _order$taxes2;
    if (!(order !== null && order !== void 0 && order.taxes)) return 0;
    if ((order === null || order === void 0 || (_order$taxes2 = order.taxes) === null || _order$taxes2 === void 0 ? void 0 : _order$taxes2.length) === 0) {
      var _order$summary$tax, _order$summary;
      return order.tax_type === 1 ? (_order$summary$tax = order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.tax) !== null && _order$summary$tax !== void 0 ? _order$summary$tax : 0 : 0;
    } else {
      return order === null || order === void 0 ? void 0 : order.taxes.reduce(function (taxIncluded, tax) {
        var _tax$summary3;
        return taxIncluded + (!isDeliveryFee && tax.type === 1 && tax.target === 'product' || isDeliveryFee && tax.type === 1 && tax.target === 'delivery_fee' ? (_tax$summary3 = tax.summary) === null || _tax$summary3 === void 0 ? void 0 : _tax$summary3.tax : 0);
      }, 0);
    }
  };
  var getOptions = function getOptions(options) {
    var productComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var array = [];
    options && options.length && options.map(function (option) {
      var string = "".concat(option.name, " ").concat(getSuboptions(option.suboptions));
      array.push(string);
    });
    if (productComment) {
      array.push("".concat(t('COMMENT', 'Comment')).concat(productComment));
    }
    return array;
  };
  var percentTip = parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && (0, _utils.verifyDecimals)(order === null || order === void 0 || (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.driver_tip, parseNumber);
  var customerName = (_replace$trim = (_ref2 = "".concat((_order$customer$name = order === null || order === void 0 || (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.name) !== null && _order$customer$name !== void 0 ? _order$customer$name : '', " ").concat((_order$customer$middl = order === null || order === void 0 || (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.middle_name) !== null && _order$customer$middl !== void 0 ? _order$customer$middl : '', " ").concat((_order$customer$lastn = order === null || order === void 0 || (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.lastname) !== null && _order$customer$lastn !== void 0 ? _order$customer$lastn : '', " ").concat((_order$customer$secon = order === null || order === void 0 || (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.second_lastname) !== null && _order$customer$secon !== void 0 ? _order$customer$secon : '')) === null || _ref2 === void 0 || (_ref2 = _ref2.replace('  ', ' ')) === null || _ref2 === void 0 ? void 0 : _ref2.trim()) !== null && _replace$trim !== void 0 ? _replace$trim : '';
  return /*#__PURE__*/_react.default.createElement(_styles.PrintContainer, {
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER_NO', 'Order No.'), " ", order.id), /*#__PURE__*/_react.default.createElement(_styles.PrintTextContainer, null, (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value, /*#__PURE__*/_react.default.createElement("br", null), t('DELIVERY_TYPE', 'Delivery Type'), ": ", deliveryStatus[order === null || order === void 0 ? void 0 : order.delivery_type], /*#__PURE__*/_react.default.createElement("br", null), t('DELIVERY_DATE', 'Delivery Date'), ": ", order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }), /*#__PURE__*/_react.default.createElement("br", null), t('PAYMENT_METHOD'), ": ", order === null || order === void 0 || (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.name), /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_DETAILS', 'Customer details')), /*#__PURE__*/_react.default.createElement(_styles.PrintTextContainer, null, t('FULL_NAME', 'Full Name'), ": ", customerName, /*#__PURE__*/_react.default.createElement("br", null), t('EMAIL', 'Email'), ": ", order === null || order === void 0 || (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.email, /*#__PURE__*/_react.default.createElement("br", null), t('MOBILE_PHONE', 'Mobile Phone'), ": ", order === null || order === void 0 || (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.cellphone, /*#__PURE__*/_react.default.createElement("br", null), !!(order !== null && order !== void 0 && (_order$customer7 = order.customer) !== null && _order$customer7 !== void 0 && _order$customer7.phone) && "".concat(t('MOBILE_PHONE', 'Mobile Phone'), ": ").concat(order === null || order === void 0 || (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.phone), t('FULL_ADDRESS', 'Full Addres'), ": ", order === null || order === void 0 || (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.address, !!(order !== null && order !== void 0 && (_order$customer10 = order.customer) !== null && _order$customer10 !== void 0 && _order$customer10.internal_number) && "".concat(t('INTERNAL_NUMBER', 'Internal Number'), ": ").concat(order === null || order === void 0 || (_order$customer11 = order.customer) === null || _order$customer11 === void 0 ? void 0 : _order$customer11.internal_number), /*#__PURE__*/_react.default.createElement("br", null), !!(order !== null && order !== void 0 && (_order$customer12 = order.customer) !== null && _order$customer12 !== void 0 && _order$customer12.zipcode) && "".concat(t('ZIPCODE', 'Zipcode'), ": ").concat(order === null || order === void 0 ? void 0 : order.customer.zipcode)), /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_DETAILS', 'Business details')), /*#__PURE__*/_react.default.createElement(_styles.PrintTextContainer, null, order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name, /*#__PURE__*/_react.default.createElement("br", null), order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.email, /*#__PURE__*/_react.default.createElement("br", null), !!(order !== null && order !== void 0 && (_order$business3 = order.business) !== null && _order$business3 !== void 0 && _order$business3.cellphone) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "".concat(t('BUSINESS_PHONE', 'Business cellphone'), ": ").concat(order === null || order === void 0 || (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.cellphone), /*#__PURE__*/_react.default.createElement("br", null)), !!(order !== null && order !== void 0 && (_order$business5 = order.business) !== null && _order$business5 !== void 0 && _order$business5.phone) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "".concat(t('BUSINESS_PHONE', 'Business Phone'), ": ").concat(order === null || order === void 0 || (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.phone), /*#__PURE__*/_react.default.createElement("br", null)), t('ADDRESS', 'Address'), ": ", order === null || order === void 0 || (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.address, /*#__PURE__*/_react.default.createElement("br", null), !!(order !== null && order !== void 0 && (_order$business8 = order.business) !== null && _order$business8 !== void 0 && _order$business8.address_notes) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "".concat(t('SPECIAL_ADDRESS', 'Special Address'), ": ").concat(order === null || order === void 0 || (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.address_notes), /*#__PURE__*/_react.default.createElement("br", null))), /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER_DETAILS', 'Order Details')), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_styles.PrintProductsContainer, null, (order === null || order === void 0 || (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 || (_order$products2 = order.products) === null || _order$products2 === void 0 ? void 0 : _order$products2.map(function (product, i) {
    var _product$total, _getOptions;
    return /*#__PURE__*/_react.default.createElement(_styles.PrintProducts, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.Products, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, "".concat(product === null || product === void 0 ? void 0 : product.quantity, "x ").concat(product === null || product === void 0 ? void 0 : product.name)), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_product$total = product === null || product === void 0 ? void 0 : product.total) !== null && _product$total !== void 0 ? _product$total : getProductPrice(product)))), /*#__PURE__*/_react.default.createElement(_styles.ProdcutCommentsContainer, null, (_getOptions = getOptions(product === null || product === void 0 ? void 0 : product.options, product === null || product === void 0 ? void 0 : product.comment)) === null || _getOptions === void 0 ? void 0 : _getOptions.map(function (option, i) {
      return /*#__PURE__*/_react.default.createElement(_styles.ProductComments, {
        key: i
      }, option);
    })));
  }))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice(((_order$summary$subtot = order === null || order === void 0 || (_order$summary3 = order.summary) === null || _order$summary3 === void 0 ? void 0 : _order$summary3.subtotal) !== null && _order$summary$subtot !== void 0 ? _order$summary$subtot : order === null || order === void 0 ? void 0 : order.subtotal) + getIncludedTaxes(), {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), ((_ref3 = (order === null || order === void 0 || (_order$summary4 = order.summary) === null || _order$summary4 === void 0 ? void 0 : _order$summary4.discount) > 0) !== null && _ref3 !== void 0 ? _ref3 : (order === null || order === void 0 ? void 0 : order.discount) > 0) && (order === null || order === void 0 || (_order$offers = order.offers) === null || _order$offers === void 0 ? void 0 : _order$offers.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, (order === null || order === void 0 ? void 0 : order.offer_type) === 1 ? /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('DISCOUNT', 'Discount'), ' ', "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.offer_rate, parsePrice), "%)")) : /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, "- ", parsePrice((_order$summary$discou = order === null || order === void 0 || (_order$summary5 = order.summary) === null || _order$summary5 === void 0 ? void 0 : _order$summary5.discount) !== null && _order$summary$discou !== void 0 ? _order$summary$discou : order === null || order === void 0 ? void 0 : order.discount, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), (order === null || order === void 0 || (_order$offers2 = order.offers) === null || _order$offers2 === void 0 ? void 0 : _order$offers2.length) > 0 && (order === null || order === void 0 || (_order$offers3 = order.offers) === null || _order$offers3 === void 0 || (_order$offers3 = _order$offers3.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 1;
  })) === null || _order$offers3 === void 0 ? void 0 : _order$offers3.map(function (offer) {
    var _offer$name, _offer$summary;
    return /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t(offer === null || offer === void 0 || (_offer$name = offer.name) === null || _offer$name === void 0 || (_offer$name = _offer$name.toUpperCase()) === null || _offer$name === void 0 ? void 0 : _offer$name.replaceAll(' ', '_'), offer.name), offer.rate_type === 1 && ' '.concat("(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)"))), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary = offer.summary) === null || _offer$summary === void 0 ? void 0 : _offer$summary.discount, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    })));
  })), (order === null || order === void 0 || (_order$summary6 = order.summary) === null || _order$summary6 === void 0 ? void 0 : _order$summary6.subtotal_with_discount) > 0 && (order === null || order === void 0 || (_order$summary7 = order.summary) === null || _order$summary7 === void 0 ? void 0 : _order$summary7.discount) > 0 && (order === null || order === void 0 || (_order$summary8 = order.summary) === null || _order$summary8 === void 0 ? void 0 : _order$summary8.total) >= 0 && /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), (order === null || order === void 0 ? void 0 : order.tax_type) === 1 ? /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_ref4 = (order === null || order === void 0 || (_order$summary9 = order.summary) === null || _order$summary9 === void 0 ? void 0 : _order$summary9.subtotal_with_discount) + getIncludedTaxesDiscounts()) !== null && _ref4 !== void 0 ? _ref4 : 0, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  })) : /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_order$summary$subtot2 = order === null || order === void 0 || (_order$summary10 = order.summary) === null || _order$summary10 === void 0 ? void 0 : _order$summary10.subtotal_with_discount) !== null && _order$summary$subtot2 !== void 0 ? _order$summary$subtot2 : 0, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), (order === null || order === void 0 || (_order$taxes3 = order.taxes) === null || _order$taxes3 === void 0 ? void 0 : _order$taxes3.length) === 0 && (order === null || order === void 0 ? void 0 : order.tax_type) === 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('TAX', 'Tax'), ' ', "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.tax, parseNumber), "%)")), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_order$summary$tax2 = order === null || order === void 0 || (_order$summary11 = order.summary) === null || _order$summary11 === void 0 ? void 0 : _order$summary11.tax) !== null && _order$summary$tax2 !== void 0 ? _order$summary$tax2 : 0, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  })))), (order === null || order === void 0 || (_order$fees = order.fees) === null || _order$fees === void 0 ? void 0 : _order$fees.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('SERVICE_FEE', 'Service fee'), ' ', "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.service_fee, parseNumber), "%)")), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_order$summary$servic = order === null || order === void 0 || (_order$summary12 = order.summary) === null || _order$summary12 === void 0 ? void 0 : _order$summary12.service_fee) !== null && _order$summary$servic !== void 0 ? _order$summary$servic : 0, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), (order === null || order === void 0 || (_order$taxes4 = order.taxes) === null || _order$taxes4 === void 0 ? void 0 : _order$taxes4.length) > 0 && (order === null || order === void 0 || (_order$taxes5 = order.taxes) === null || _order$taxes5 === void 0 ? void 0 : _order$taxes5.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'product';
  }).map(function (tax) {
    var _tax$name, _ref5, _tax$summary$tax_afte2, _tax$summary4, _tax$summary5;
    return /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t(tax === null || tax === void 0 || (_tax$name = tax.name) === null || _tax$name === void 0 || (_tax$name = _tax$name.toUpperCase()) === null || _tax$name === void 0 ? void 0 : _tax$name.replaceAll(' ', '_'), tax === null || tax === void 0 ? void 0 : tax.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), ' ', "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)")), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_ref5 = (_tax$summary$tax_afte2 = tax === null || tax === void 0 || (_tax$summary4 = tax.summary) === null || _tax$summary4 === void 0 ? void 0 : _tax$summary4.tax_after_discount) !== null && _tax$summary$tax_afte2 !== void 0 ? _tax$summary$tax_afte2 : tax === null || tax === void 0 || (_tax$summary5 = tax.summary) === null || _tax$summary5 === void 0 ? void 0 : _tax$summary5.tax) !== null && _ref5 !== void 0 ? _ref5 : 0, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    })));
  })), (order === null || order === void 0 || (_order$fees2 = order.fees) === null || _order$fees2 === void 0 ? void 0 : _order$fees2.length) > 0 && (order === null || order === void 0 || (_order$fees3 = order.fees) === null || _order$fees3 === void 0 || (_order$fees3 = _order$fees3.filter(function (fee) {
    return !((fee === null || fee === void 0 ? void 0 : fee.fixed) === 0 && (fee === null || fee === void 0 ? void 0 : fee.percentage) === 0);
  })) === null || _order$fees3 === void 0 ? void 0 : _order$fees3.map(function (fee) {
    var _fee$name, _ref6, _fee$summary, _fee$summary$percenta, _fee$summary2, _fee$summary3;
    return /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, {
      key: fee.id
    }, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t(fee === null || fee === void 0 || (_fee$name = fee.name) === null || _fee$name === void 0 || (_fee$name = _fee$name.toUpperCase()) === null || _fee$name === void 0 ? void 0 : _fee$name.replace(/ /g, '_'), fee === null || fee === void 0 ? void 0 : fee.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), "(", (fee === null || fee === void 0 ? void 0 : fee.fixed) > 0 && "".concat(parsePrice(fee === null || fee === void 0 ? void 0 : fee.fixed), " + "), fee.percentage, "%)"), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_ref6 = (fee === null || fee === void 0 || (_fee$summary = fee.summary) === null || _fee$summary === void 0 ? void 0 : _fee$summary.fixed) + ((_fee$summary$percenta = fee === null || fee === void 0 || (_fee$summary2 = fee.summary) === null || _fee$summary2 === void 0 ? void 0 : _fee$summary2.percentage_after_discount) !== null && _fee$summary$percenta !== void 0 ? _fee$summary$percenta : fee === null || fee === void 0 || (_fee$summary3 = fee.summary) === null || _fee$summary3 === void 0 ? void 0 : _fee$summary3.percentage)) !== null && _ref6 !== void 0 ? _ref6 : 0, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    })));
  })), (order === null || order === void 0 || (_order$offers4 = order.offers) === null || _order$offers4 === void 0 ? void 0 : _order$offers4.length) > 0 && (order === null || order === void 0 || (_order$offers5 = order.offers) === null || _order$offers5 === void 0 || (_order$offers5 = _order$offers5.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 3;
  })) === null || _order$offers5 === void 0 ? void 0 : _order$offers5.map(function (offer) {
    var _offer$name2, _offer$summary2;
    return /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t((_offer$name2 = offer.name) === null || _offer$name2 === void 0 || (_offer$name2 = _offer$name2.toUpperCase()) === null || _offer$name2 === void 0 ? void 0 : _offer$name2.replace(/ /g, '_'), offer.name), offer.rate_type === 1 && ' '.concat("(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)"))), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary2 = offer.summary) === null || _offer$summary2 === void 0 ? void 0 : _offer$summary2.discount, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    })));
  })), (order === null || order === void 0 || (_order$summary13 = order.summary) === null || _order$summary13 === void 0 ? void 0 : _order$summary13.delivery_price) > 0 && /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((order === null || order === void 0 || (_order$summary14 = order.summary) === null || _order$summary14 === void 0 ? void 0 : _order$summary14.delivery_price) + getIncludedTaxes(true), {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), (order === null || order === void 0 || (_order$taxes6 = order.taxes) === null || _order$taxes6 === void 0 ? void 0 : _order$taxes6.length) > 0 && (order === null || order === void 0 || (_order$taxes7 = order.taxes) === null || _order$taxes7 === void 0 ? void 0 : _order$taxes7.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'delivery_fee';
  }).map(function (tax) {
    var _tax$name2, _ref7, _tax$summary$tax_afte3, _tax$summary6, _tax$summary7;
    return /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t(tax === null || tax === void 0 || (_tax$name2 = tax.name) === null || _tax$name2 === void 0 || (_tax$name2 = _tax$name2.toUpperCase()) === null || _tax$name2 === void 0 ? void 0 : _tax$name2.replace(/ /g, '_'), tax === null || tax === void 0 ? void 0 : tax.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), ' ', "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)")), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_ref7 = (_tax$summary$tax_afte3 = tax === null || tax === void 0 || (_tax$summary6 = tax.summary) === null || _tax$summary6 === void 0 ? void 0 : _tax$summary6.tax_after_discount) !== null && _tax$summary$tax_afte3 !== void 0 ? _tax$summary$tax_afte3 : tax === null || tax === void 0 || (_tax$summary7 = tax.summary) === null || _tax$summary7 === void 0 ? void 0 : _tax$summary7.tax) !== null && _ref7 !== void 0 ? _ref7 : 0)));
  })), (order === null || order === void 0 || (_order$offers6 = order.offers) === null || _order$offers6 === void 0 ? void 0 : _order$offers6.length) > 0 && (order === null || order === void 0 || (_order$offers7 = order.offers) === null || _order$offers7 === void 0 || (_order$offers7 = _order$offers7.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 2;
  })) === null || _order$offers7 === void 0 ? void 0 : _order$offers7.map(function (offer) {
    var _offer$name3, _offer$summary3;
    return /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t(offer === null || offer === void 0 || (_offer$name3 = offer.name) === null || _offer$name3 === void 0 || (_offer$name3 = _offer$name3.toUpperCase()) === null || _offer$name3 === void 0 ? void 0 : _offer$name3.replaceAll(' ', '_'), offer.name), offer.rate_type === 1 && ' '.concat("(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)"))), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary3 = offer.summary) === null || _offer$summary3 === void 0 ? void 0 : _offer$summary3.discount, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    })));
  })), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('DRIVER_TIP', 'Driver tip'), percentTip ? "(".concat(percentTip, "%)") : ''), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_order$summary$driver = order === null || order === void 0 || (_order$summary15 = order.summary) === null || _order$summary15 === void 0 ? void 0 : _order$summary15.driver_tip) !== null && _order$summary$driver !== void 0 ? _order$summary$driver : order === null || order === void 0 ? void 0 : order.totalDriverTip, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_order$summary$total = order === null || order === void 0 || (_order$summary16 = order.summary) === null || _order$summary16 === void 0 ? void 0 : _order$summary16.total) !== null && _order$summary$total !== void 0 ? _order$summary$total : 0))));
});
OrderToPrintTicket.displayName = 'OrderToPrintTicket';