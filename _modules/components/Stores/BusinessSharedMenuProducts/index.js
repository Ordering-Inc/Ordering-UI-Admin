"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSharedMenuProducts = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _BusinessSharedMenuProductDetails = require("../BusinessSharedMenuProductDetails");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessSharedMenuProductsUI = function BusinessSharedMenuProductsUI(props) {
  var menuState = props.menuState,
    business = props.business,
    handleUpdateBusinessSharedMenuProduct = props.handleUpdateBusinessSharedMenuProduct,
    setIsOpenSharedProduct = props.setIsOpenSharedProduct,
    handleChangeInput = props.handleChangeInput;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    currentProduct = _useState4[0],
    setCurrentProduct = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpenDetails = _useState6[0],
    setIsOpenDetails = _useState6[1];
  var handleOpenProduct = function handleOpenProduct(e, product, isInitialRender) {
    var _e$target;
    var isInvalid = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.product_checkbox');
    if (isInvalid) return;
    setIsOpenSharedProduct(true);
    setCurrentProduct(product);
    setIsOpenDetails(true);
    if (!isInitialRender) {
      var businessId = query.get('id');
      var section = query.get('section');
      var tab = query.get('tab');
      var menu = query.get('menu');
      history.replace("".concat(location.pathname, "?id=").concat(businessId, "&section=").concat(section, "&tab=").concat(tab, "&menu=").concat(menu, "&product=").concat(product.id));
    }
  };
  var handleCloseSidebar = function handleCloseSidebar() {
    setIsOpenDetails(false);
    setCurrentProduct(null);
    setIsOpenSharedProduct(false);
    var businessId = query.get('id');
    var section = query.get('section');
    var tab = query.get('tab');
    var menu = query.get('menu');
    history.replace("".concat(location.pathname, "?id=").concat(businessId, "&section=").concat(section, "&tab=").concat(tab, "&menu=").concat(menu));
  };
  (0, _react.useEffect)(function () {
    var productId = query.get('product');
    if (productId) {
      var initProduct = menuState.menu.products.find(function (product) {
        return product.id === Number(productId);
      });
      if (initProduct) {
        handleOpenProduct(null, initProduct, true);
      }
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.MenuProductsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    placeholder: t('SEARCH', 'Search'),
    isCustomLayout: true,
    search: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val === null || val === void 0 ? void 0 : val.toLowerCase());
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ProductListWrapper, null, menuState.menu.products.filter(function (product) {
    var _product$name;
    return (_product$name = product.name) === null || _product$name === void 0 ? void 0 : _product$name.toLowerCase().includes(searchValue);
  }).map(function (product, index) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ProductItem, {
      key: product.id,
      isBorderTop: index === 0,
      onClick: function onClick(e) {
        return handleOpenProduct(e, product);
      },
      active: product.id === (currentProduct === null || currentProduct === void 0 ? void 0 : currentProduct.id)
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      className: "product_checkbox",
      defaultChecked: product.enabled,
      onChange: function onChange(e) {
        return handleUpdateBusinessSharedMenuProduct === null || handleUpdateBusinessSharedMenuProduct === void 0 ? void 0 : handleUpdateBusinessSharedMenuProduct(product.id, {
          enabled: e.target.checked
        });
      }
    }), /*#__PURE__*/_react.default.createElement("span", null, product.name), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpenDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    sidebarId: "shared_product_details",
    open: isOpenDetails,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessSharedMenuProductDetails.BusinessSharedMenuProductDetails, {
    business: business,
    menu: menuState.menu,
    product: currentProduct,
    handleChangeInput: handleChangeInput
  }))) : /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: isOpenDetails,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessSharedMenuProductDetails.BusinessSharedMenuProductDetails, {
    business: business,
    menu: menuState.menu,
    product: currentProduct,
    handleChangeInput: handleChangeInput
  })));
};
var BusinessSharedMenuProducts = function BusinessSharedMenuProducts(props) {
  var businessSharedMenuProductsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessSharedMenuProductsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessSharedMenuProducts, businessSharedMenuProductsProps);
};
exports.BusinessSharedMenuProducts = BusinessSharedMenuProducts;