"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenCartListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _OpenCartsHeader = require("../OpenCartsHeader");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _OpenCartsDetail = require("../OpenCartsDetail");
var _OpenCartList = require("../OpenCartList");
var _styles = require("./styles");
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
var OpenCartListingUI = function OpenCartListingUI(props) {
  var searchValue = props.searchValue,
    businessesList = props.businessesList,
    citiesList = props.citiesList,
    filterValues = props.filterValues,
    startMulitOrderStatusChange = props.startMulitOrderStatusChange,
    startMulitOrderDelete = props.startMulitOrderDelete,
    handleChangeSearch = props.handleChangeSearch,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleDeleteMultiOrders = props.handleDeleteMultiOrders,
    handleSelectedCartIds = props.handleSelectedCartIds,
    selectedCartIds = props.selectedCartIds,
    setSelectedCartIds = props.setSelectedCartIds,
    cartList = props.cartList,
    pagination = props.pagination,
    getCartList = props.getCartList,
    onCartRedirect = props.onCartRedirect;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenCartDetail = _useState2[0],
    setIsOpenCartDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    cartDetailId = _useState4[0],
    setCartDetailId = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    detailsCart = _useState6[0],
    setDetailsCart = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    totalSelectedOrder = _useState8[0],
    setTotalSelectedOrder = _useState8[1];
  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenCartDetail(false);
    setDetailsCart(null);
    setCartDetailId(null);
    onCartRedirect();
  };
  var handleOpenCartDetail = function handleOpenCartDetail(cart) {
    setDetailsCart(cart);
    setCartDetailId(cart.id);
    setIsOpenCartDetail(true);
    onCartRedirect(cart === null || cart === void 0 ? void 0 : cart.id);
  };
  (0, _react.useEffect)(function () {
    if (startMulitOrderStatusChange || startMulitOrderDelete) {
      setTotalSelectedOrder(selectedCartIds.length);
    }
  }, [startMulitOrderStatusChange, startMulitOrderDelete]);
  (0, _react.useEffect)(function () {
    if (selectedCartIds.length === 0) {
      setTimeout(function () {
        setTotalSelectedOrder(0);
      }, 500);
    }
  }, [selectedCartIds]);
  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id === null || !(cartList !== null && cartList !== void 0 && cartList.loading) && (cartList === null || cartList === void 0 ? void 0 : cartList.carts.length) === 0) {
      setIsOpenCartDetail(false);
      return;
    }
    if (!(cartList !== null && cartList !== void 0 && cartList.loading)) {
      var found = cartList === null || cartList === void 0 ? void 0 : cartList.carts.find(function (_cart) {
        return _cart.id === parseInt(id);
      });
      setCartDetailId(parseInt(id));
      if (found) {
        setDetailsCart(found);
        setIsOpenCartDetail(true);
      } else {
        handleBackRedirect();
      }
    }
  }, [cartList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OpenCartsContainer, null, /*#__PURE__*/_react.default.createElement(_OpenCartsHeader.OpenCartsHeader, {
    searchValue: searchValue,
    citiesList: citiesList,
    businessesList: businessesList,
    filterValues: filterValues,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues,
    selectedCartIds: selectedCartIds,
    handleDeleteMultiOrders: handleDeleteMultiOrders
  }), /*#__PURE__*/_react.default.createElement(_styles.OpenCartsContent, null, /*#__PURE__*/_react.default.createElement(_styles.OpenCartsInnerContent, {
    className: "order-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapItemView, null, /*#__PURE__*/_react.default.createElement(_OpenCartList.OpenCartList, {
    setSelectedCartIds: setSelectedCartIds,
    cartList: cartList,
    pagination: pagination,
    selectedCartIds: selectedCartIds,
    cartDetailId: cartDetailId,
    getCartList: getCartList,
    handleSelectedCartIds: handleSelectedCartIds,
    handleOpenCartDetail: handleOpenCartDetail
  }))))), isOpenCartDetail && /*#__PURE__*/_react.default.createElement(_OpenCartsDetail.OpenCartsDetail, {
    open: isOpenCartDetail,
    cart: detailsCart,
    cartId: cartDetailId,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }), totalSelectedOrder > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperIndicator, null, setSelectedCartIds.length, "/", totalSelectedOrder));
};
var OpenCartListing = function OpenCartListing(props) {
  var openCartsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OpenCartListingUI,
    isSearchByCartId: true,
    isSearchByCityName: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OpenCartListing, openCartsProps);
};
exports.OpenCartListing = OpenCartListing;