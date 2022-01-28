"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSharedMenuProductDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../styles");

var _SearchBar = require("../SearchBar");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessSharedMenuProductDetailsUI = function BusinessSharedMenuProductDetailsUI(props) {
  var _ref, _formState$changes$pr, _formState$changes, _productState$product, _ref2, _formState$changes$qu, _formState$changes2, _productState$product2, _productState$product3, _productState$product4;

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
    value: (_ref = (_formState$changes$pr = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.price) !== null && _formState$changes$pr !== void 0 ? _formState$changes$pr : (_productState$product = productState.product) === null || _productState$product === void 0 ? void 0 : _productState$product.price) !== null && _ref !== void 0 ? _ref : '',
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
    value: (_ref2 = (_formState$changes$qu = formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.quantity) !== null && _formState$changes$qu !== void 0 ? _formState$changes$qu : (_productState$product2 = productState.product) === null || _productState$product2 === void 0 ? void 0 : _productState$product2.quantity) !== null && _ref2 !== void 0 ? _ref2 : '',
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
  })), ((_productState$product3 = productState.product) === null || _productState$product3 === void 0 ? void 0 : (_productState$product4 = _productState$product3.extras) === null || _productState$product4 === void 0 ? void 0 : _productState$product4.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchbarWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRODUCT_OPTIONS', 'Product options')), /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
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
    }), /*#__PURE__*/_react.default.createElement("span", null, extra.name)), extra.options.map(function (option) {
      return showOption(option) && /*#__PURE__*/_react.default.createElement("div", {
        key: option.id
      }, /*#__PURE__*/_react.default.createElement(_styles2.ProductOptionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
        defaultChecked: option.enabled,
        onChange: function onChange(e) {
          return handleUpdateOption(option.id, e.target.checked);
        }
      }), /*#__PURE__*/_react.default.createElement("span", null, option.name)), option === null || option === void 0 ? void 0 : option.suboptions.map(function (suboption) {
        return showSuboption(suboption) && /*#__PURE__*/_react.default.createElement("div", {
          key: suboption.id
        }, /*#__PURE__*/_react.default.createElement(_styles2.ProductSuboptionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
          defaultChecked: suboption.enabled,
          onChange: function onChange(e) {
            return handleUpdateSuboption(suboption.id, e.target.checked);
          }
        }), /*#__PURE__*/_react.default.createElement("span", null, suboption.name)));
      }));
    }));
  })));
};

var BusinessSharedMenuProductDetails = function BusinessSharedMenuProductDetails(props) {
  var detailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessSharedMenuProductDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessSharedMenuProductDetails, detailsProps);
};

exports.BusinessSharedMenuProductDetails = BusinessSharedMenuProductDetails;