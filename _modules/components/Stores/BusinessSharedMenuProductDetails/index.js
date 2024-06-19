"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSharedMenuProductDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var BusinessSharedMenuProductDetailsUI = function BusinessSharedMenuProductDetailsUI(props) {
  var _ref, _formState$changes$pr, _formState$changes, _productState$product, _ref2, _formState$changes$qu, _formState$changes2, _productState$product2, _productState$product3;
  var productState = props.productState,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleChangeItem = props.handleChangeItem,
    handleUpdateExtra = props.handleUpdateExtra,
    handleUpdateOption = props.handleUpdateOption,
    handleUpdateSuboption = props.handleUpdateSuboption;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var showExtra = function showExtra(extra) {
    var _extra$name;
    var valid = false;
    if ((_extra$name = extra.name) !== null && _extra$name !== void 0 && _extra$name.toLowerCase().includes(searchValue)) valid = true;else {
      extra.options.forEach(function (option) {
        var _option$name;
        if ((_option$name = option.name) !== null && _option$name !== void 0 && _option$name.toLowerCase().includes(searchValue)) {
          valid = true;
        }
        option.suboptions.forEach(function (suboption) {
          var _suboption$name;
          if ((_suboption$name = suboption.name) !== null && _suboption$name !== void 0 && _suboption$name.toLowerCase().includes(searchValue)) {
            valid = true;
          }
        });
      });
    }
    return valid;
  };
  var showOption = function showOption(option) {
    var _option$name2;
    var valid = false;
    if ((_option$name2 = option.name) !== null && _option$name2 !== void 0 && _option$name2.toLowerCase().includes(searchValue)) valid = true;else {
      option.suboptions.forEach(function (suboption) {
        var _suboption$name2;
        if ((_suboption$name2 = suboption.name) !== null && _suboption$name2 !== void 0 && _suboption$name2.toLowerCase().includes(searchValue)) {
          valid = true;
        }
      });
    }
    return valid;
  };
  var showSuboption = function showSuboption(suboption) {
    var _suboption$name3;
    var valid = false;
    if ((_suboption$name3 = suboption.name) !== null && _suboption$name3 !== void 0 && _suboption$name3.toLowerCase().includes(searchValue)) valid = true;
    return valid;
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, productState.product.name), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRICE', 'Price')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "$0.00",
    name: "price",
    value: (_ref = (_formState$changes$pr = formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.price) !== null && _formState$changes$pr !== void 0 ? _formState$changes$pr : (_productState$product = productState.product) === null || _productState$product === void 0 ? void 0 : _productState$product.price) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('INVENTORIED', 'Limit product quantity')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: productState.product.inventoried,
    onChange: function onChange(enabled) {
      return handleChangeItem({
        inventoried: enabled
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.QuantityWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "0",
    name: "quantity",
    value: (_ref2 = (_formState$changes$qu = formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.quantity) !== null && _formState$changes$qu !== void 0 ? _formState$changes$qu : (_productState$product2 = productState.product) === null || _productState$product2 === void 0 ? void 0 : _productState$product2.quantity) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('FEATURED', 'Featured')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: productState.product.featured,
    onChange: function onChange(enabled) {
      return handleChangeItem({
        featured: enabled
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('UPSELLING', 'Upselling')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: productState.product.upselling,
    onChange: function onChange(enabled) {
      return handleChangeItem({
        upselling: enabled
      });
    }
  })), ((_productState$product3 = productState.product) === null || _productState$product3 === void 0 || (_productState$product3 = _productState$product3.extras) === null || _productState$product3 === void 0 ? void 0 : _productState$product3.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchbarWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRODUCT_OPTIONS', 'Product options')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    placeholder: t('SEARCH', 'Search'),
    isCustomLayout: true,
    search: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val === null || val === void 0 ? void 0 : val.toLowerCase());
    }
  })), productState.product.extras.map(function (extra) {
    return showExtra(extra) && /*#__PURE__*/_react.default.createElement("div", {
      key: extra.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.ProductExtraWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      defaultChecked: extra.enabled,
      onChange: function onChange(e) {
        return handleUpdateExtra(extra.id, e.target.checked);
      }
    }), /*#__PURE__*/_react.default.createElement("span", null, extra.name)), (extra === null || extra === void 0 ? void 0 : extra.enabled) && extra.options.map(function (option) {
      return showOption(option) && /*#__PURE__*/_react.default.createElement("div", {
        key: option.id
      }, /*#__PURE__*/_react.default.createElement(_styles2.ProductOptionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
        defaultChecked: option.enabled,
        onChange: function onChange(e) {
          return handleUpdateOption(option.id, e.target.checked);
        }
      }), /*#__PURE__*/_react.default.createElement("span", null, option.name)), (option === null || option === void 0 ? void 0 : option.enabled) && (option === null || option === void 0 ? void 0 : option.suboptions.map(function (suboption) {
        return showSuboption(suboption) && /*#__PURE__*/_react.default.createElement("div", {
          key: suboption.id
        }, /*#__PURE__*/_react.default.createElement(_styles2.ProductSuboptionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
          defaultChecked: suboption.enabled,
          onChange: function onChange(e) {
            return handleUpdateSuboption(suboption.id, e.target.checked);
          }
        }), /*#__PURE__*/_react.default.createElement("span", null, suboption.name)));
      })));
    }));
  })));
};
var BusinessSharedMenuProductDetails = exports.BusinessSharedMenuProductDetails = function BusinessSharedMenuProductDetails(props) {
  var detailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessSharedMenuProductDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessSharedMenuProductDetails, detailsProps);
};