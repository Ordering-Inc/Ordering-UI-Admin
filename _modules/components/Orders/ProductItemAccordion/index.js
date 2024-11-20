"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductItemAccordion = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TiPencil = _interopRequireDefault(require("@meronex/icons/ti/TiPencil"));
var _IosArrowUp = _interopRequireDefault(require("@meronex/icons/ios/IosArrowUp"));
var _VscTrash = _interopRequireDefault(require("@meronex/icons/vsc/VscTrash"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _useWindowSize = require("../../../hooks/useWindowSize");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ProductItemAccordion = exports.ProductItemAccordion = function ProductItemAccordion(props) {
  var _product$valid, _product$calendar_eve, _configs$format_time, _product$calendar_eve2, _configs$format_time2, _productInfo$ingredie, _productInfo$options, _productInfo$ingredie2, _productInfo$options2, _toppingsRemoved$remo;
  var isCartProduct = props.isCartProduct,
    product = props.product,
    changeQuantity = props.changeQuantity,
    getProductMax = props.getProductMax,
    offsetDisabled = props.offsetDisabled,
    onDeleteProduct = props.onDeleteProduct,
    onEditProduct = props.onEditProduct,
    currency = props.currency,
    toppingsRemoved = props.toppingsRemoved;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsAdmin.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    optimizeImage = _useUtils2$.optimizeImage,
    parseDate = _useUtils2$.parseDate;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useState = (0, _react.useState)('active'),
    _useState2 = _slicedToArray(_useState, 2),
    setActive = _useState2[0],
    setActiveState = _useState2[1];
  var _useState3 = (0, _react.useState)('0px'),
    _useState4 = _slicedToArray(_useState3, 2),
    setHeight = _useState4[0],
    setHeightState = _useState4[1];
  var _useState5 = (0, _react.useState)('accordion__icon rotate'),
    _useState6 = _slicedToArray(_useState5, 2),
    setRotate = _useState6[0],
    setRotateState = _useState6[1];
  var content = (0, _react.useRef)(null);
  var productSelect = (0, _react.useRef)(null);
  var productActionsEdit = (0, _react.useRef)(null);
  var productActionsDelete = (0, _react.useRef)(null);
  var _productInfo = function productInfo() {
    var _product$options;
    var options = JSON.parse(JSON.stringify(Object.values((_product$options = product.options) !== null && _product$options !== void 0 ? _product$options : {})));
    var extraGroups = options.reduce(function (acc, option) {
      var _option$extra$rank, _option$extra;
      var extraRank = (_option$extra$rank = option === null || option === void 0 || (_option$extra = option.extra) === null || _option$extra === void 0 ? void 0 : _option$extra.rank) !== null && _option$extra$rank !== void 0 ? _option$extra$rank : option === null || option === void 0 ? void 0 : option.rank;
      acc[extraRank] = acc[extraRank] || [];
      acc[extraRank].push(option);
      return acc;
    }, {});
    var sortedExtraGroups = Object.entries(extraGroups).sort(function (_ref, _ref2) {
      var _ref3 = _slicedToArray(_ref, 1),
        rankA = _ref3[0];
      var _ref4 = _slicedToArray(_ref2, 1),
        rankB = _ref4[0];
      return rankA - rankB;
    });
    sortedExtraGroups.forEach(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
        _ = _ref6[0],
        group = _ref6[1];
      group.sort(function (a, b) {
        return a.rank - b.rank;
      });
    });
    options = sortedExtraGroups.flatMap(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        group = _ref8[1];
      return group;
    });
    if (isCartProduct) {
      var _product$ingredients;
      var ingredients = JSON.parse(JSON.stringify(Object.values((_product$ingredients = product.ingredients) !== null && _product$ingredients !== void 0 ? _product$ingredients : {})));
      options = options.map(function (option) {
        var _option$suboptions;
        option.suboptions = Object.values((_option$suboptions = option.suboptions) !== null && _option$suboptions !== void 0 ? _option$suboptions : {});
        return option;
      });
      return _objectSpread(_objectSpread({}, _productInfo), {}, {
        ingredients: ingredients,
        options: options
      });
    }
    return _objectSpread(_objectSpread({}, product), {}, {
      options: options
    });
  };
  var toggleAccordion = function toggleAccordion(e) {
    var _productSelect$curren, _productActionsEdit$c, _productActionsDelete;
    var isActionsClick = ((_productSelect$curren = productSelect.current) === null || _productSelect$curren === void 0 ? void 0 : _productSelect$curren.contains(e.target)) || ((_productActionsEdit$c = productActionsEdit.current) === null || _productActionsEdit$c === void 0 ? void 0 : _productActionsEdit$c.contains(e.target)) || ((_productActionsDelete = productActionsDelete.current) === null || _productActionsDelete === void 0 ? void 0 : _productActionsDelete.contains(e.target));
    if (!(product !== null && product !== void 0 && product.valid_menu) && isCartProduct || isActionsClick) return;
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? "".concat(content.current.scrollHeight, "px") : '0px');
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };
  var handleChangeQuantity = function handleChangeQuantity(value) {
    if (parseInt(value) === 0) {
      onDeleteProduct(product);
    } else {
      changeQuantity(product, parseInt(value));
    }
  };
  var getFormattedSubOptionName = function getFormattedSubOptionName(_ref9) {
    var quantity = _ref9.quantity,
      name = _ref9.name,
      position = _ref9.position,
      price = _ref9.price;
    if (name !== 'No') {
      var pos = position ? "(".concat(position, ")") : '';
      return price > 0 ? "".concat(quantity, " x ").concat(name, " ").concat(pos, " +").concat(parsePrice(price, {
        currency: currency
      })) : "".concat(quantity, " x ").concat(name, " ").concat(pos);
    } else {
      return 'No';
    }
  };
  var getProductPrice = function getProductPrice(product) {
    var subOptionPrice = 0;
    if (Array.isArray(product.options)) {
      var _product$options2;
      if (((_product$options2 = product.options) === null || _product$options2 === void 0 ? void 0 : _product$options2.length) > 0) {
        var _iterator = _createForOfIteratorHelper(product.options),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var option = _step.value;
            var _iterator2 = _createForOfIteratorHelper(option.suboptions),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _suboption$half_price;
                var suboption = _step2.value;
                subOptionPrice += suboption.quantity * (['left', 'right'].includes(suboption.position) ? (_suboption$half_price = suboption.half_price) !== null && _suboption$half_price !== void 0 ? _suboption$half_price : suboption.price : suboption.price);
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
  return /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, null, /*#__PURE__*/_react.default.createElement(_styles.Accordion, {
    isValid: (_product$valid = product === null || product === void 0 ? void 0 : product.valid) !== null && _product$valid !== void 0 ? _product$valid : true,
    className: "product accordion ".concat(setActive),
    onClick: function onClick(e) {
      return toggleAccordion(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ProductInfo, null, (product === null || product === void 0 ? void 0 : product.images) && /*#__PURE__*/_react.default.createElement(_styles.WrapperProductImage, null, /*#__PURE__*/_react.default.createElement(_styles.ProductImage, {
    bgimage: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_100,c_limit')
  })), product !== null && product !== void 0 && product.calendar_event ? /*#__PURE__*/_react.default.createElement(_styles.ScheduleInfoWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, product.name), /*#__PURE__*/_react.default.createElement(_styles.ScheduleInfo, null, /*#__PURE__*/_react.default.createElement("span", null, parseDate(product === null || product === void 0 || (_product$calendar_eve = product.calendar_event) === null || _product$calendar_eve === void 0 ? void 0 : _product$calendar_eve.start, {
    outputFormat: (configs === null || configs === void 0 || (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12' ? 'hh:mm a' : 'HH:mm'
  }), ' ', "-", ' ', parseDate(product === null || product === void 0 || (_product$calendar_eve2 = product.calendar_event) === null || _product$calendar_eve2 === void 0 ? void 0 : _product$calendar_eve2.end, {
    outputFormat: (configs === null || configs === void 0 || (_configs$format_time2 = configs.format_time) === null || _configs$format_time2 === void 0 ? void 0 : _configs$format_time2.value) === '12' ? 'hh:mm a' : 'HH:mm'
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isCartProduct ? /*#__PURE__*/_react.default.createElement(_styles.ProductSelect, {
    ref: productSelect,
    value: product.quantity,
    onChange: function onChange(e) {
      return handleChangeQuantity(Number(e.target.value));
    }
  }, _toConsumableArray(Array(getProductMax(product) + 1)).map(function (v, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: i,
      value: i,
      disabled: offsetDisabled(product) < i && i !== 0
    }, i === 0 ? t('REMOVE', 'Remove') : i);
  })) : /*#__PURE__*/_react.default.createElement(_styles.ProductQuantity, null, product === null || product === void 0 ? void 0 : product.quantity), /*#__PURE__*/_react.default.createElement(_styles.ContentInfo, null, /*#__PURE__*/_react.default.createElement("h3", null, product.name), windowSize.width <= 410 && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, parsePrice(getProductPrice(product), {
    currency: currency
  })), isCartProduct && /*#__PURE__*/_react.default.createElement("div", null, onEditProduct && /*#__PURE__*/_react.default.createElement("span", {
    ref: productActionsEdit
  }, /*#__PURE__*/_react.default.createElement(_TiPencil.default, {
    color: "#F2BB40",
    onClick: function onClick() {
      return onEditProduct(product);
    }
  })), onDeleteProduct && /*#__PURE__*/_react.default.createElement("span", {
    ref: productActionsDelete
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#D81212",
    onClick: function onClick() {
      return onDeleteProduct(product);
    }
  }))))))), ((product === null || product === void 0 ? void 0 : product.valid) || !isCartProduct) && windowSize.width > 410 && /*#__PURE__*/_react.default.createElement(_styles.ProductPriceSection, null, /*#__PURE__*/_react.default.createElement(_styles.ProductPrice, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(getProductPrice(product), {
    currency: currency
  })), (((_productInfo$ingredie = _productInfo().ingredients) === null || _productInfo$ingredie === void 0 ? void 0 : _productInfo$ingredie.length) > 0 || ((_productInfo$options = _productInfo().options) === null || _productInfo$options === void 0 ? void 0 : _productInfo$options.length) > 0 || product.comment) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_IosArrowUp.default, {
    className: "".concat(setRotate)
  }))), isCartProduct && /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActionsEdit, {
    ref: productActionsEdit,
    onClick: function onClick() {
      return onEditProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_TiPencil.default, {
    color: "#F2BB40"
  })), /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#D81212"
  })))), isCartProduct && (product === null || product === void 0 ? void 0 : product.valid_menu) && !(product !== null && product !== void 0 && product.valid_quantity) && /*#__PURE__*/_react.default.createElement(_styles.ProductError, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActionsEdit, {
    ref: productActionsEdit,
    onClick: function onClick() {
      return onEditProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_TiPencil.default, {
    color: "#F2BB40"
  })), /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#D81212"
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductNotAvailable, null, t('PRODUCT_QUANTITY_ERROR', 'Not available'))), !(product !== null && product !== void 0 && product.valid_menu) && isCartProduct && /*#__PURE__*/_react.default.createElement(_styles.ProductError, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#D81212"
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductNotAvailable, null, t('PRODUCT_QUANTITY_ERROR', 'Not available')))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      maxHeight: "".concat(setHeight)
    }
  }, ((_productInfo$ingredie2 = _productInfo().ingredients) === null || _productInfo$ingredie2 === void 0 ? void 0 : _productInfo$ingredie2.length) > 0 && _productInfo().ingredients.some(function (ingredient) {
    return !ingredient.selected;
  }) && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, /*#__PURE__*/_react.default.createElement("p", null, t('INGREDIENTS', 'Ingredients')), _productInfo().ingredients.map(function (ingredient) {
    return !ingredient.selected && /*#__PURE__*/_react.default.createElement("li", {
      className: "ingredient",
      key: ingredient.id
    }, /*#__PURE__*/_react.default.createElement("span", null, t('NO', 'No'), " ", ingredient.name));
  })), ((_productInfo$options2 = _productInfo().options) === null || _productInfo$options2 === void 0 ? void 0 : _productInfo$options2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, Array.isArray(_productInfo().options) && _productInfo().options.map(function (option, i) {
    var _Object$values, _Object$values$map;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("p", null, option.name), /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, {
      className: "suboption"
    }, (_Object$values = Object.values(option === null || option === void 0 ? void 0 : option.suboptions)) === null || _Object$values === void 0 || (_Object$values$map = _Object$values.map) === null || _Object$values$map === void 0 ? void 0 : _Object$values$map.call(_Object$values, function (suboption) {
      var _suboption$half_price2;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: suboption.id
      }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("span", null, getFormattedSubOptionName({
        quantity: suboption.quantity,
        name: suboption.name,
        position: (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? t(suboption.position.toUpperCase(), suboption.position) : '',
        price: ['left', 'right'].includes(suboption.position) ? (_suboption$half_price2 = suboption.half_price) !== null && _suboption$half_price2 !== void 0 ? _suboption$half_price2 : suboption.price : suboption.price
      }))));
    })));
  })), (toppingsRemoved === null || toppingsRemoved === void 0 || (_toppingsRemoved$remo = toppingsRemoved.removed) === null || _toppingsRemoved$remo === void 0 ? void 0 : _toppingsRemoved$remo.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("p", null, t('TOPPINGS_REMOVED', 'Toppings removed')), /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, {
    className: "suboption"
  }, toppingsRemoved === null || toppingsRemoved === void 0 ? void 0 : toppingsRemoved.removed.map(function (topping) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: topping.code
    }, /*#__PURE__*/_react.default.createElement("span", null, topping.name));
  })))), product.comment && /*#__PURE__*/_react.default.createElement(_styles.ProductComment, null, /*#__PURE__*/_react.default.createElement("p", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement("h3", null, product.comment))));
};