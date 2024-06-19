"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
    onCartRedirect = props.onCartRedirect,
    handleSuccessDeleteCart = props.handleSuccessDeleteCart,
    isUseQuery = props.isUseQuery;
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
    handleOpenCartDetail: handleOpenCartDetail,
    isUseQuery: isUseQuery
  }))))), isOpenCartDetail && /*#__PURE__*/_react.default.createElement(_OpenCartsDetail.OpenCartsDetail, {
    open: isOpenCartDetail,
    cart: detailsCart,
    cartId: cartDetailId,
    onClose: function onClose() {
      return handleBackRedirect();
    },
    handleSuccessDeleteCart: handleSuccessDeleteCart
  }), totalSelectedOrder > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperIndicator, null, setSelectedCartIds.length, "/", totalSelectedOrder));
};
var OpenCartListing = exports.OpenCartListing = function OpenCartListing(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var openCartsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OpenCartListingUI,
    isSearchByCartId: true,
    isSearchByCityName: true,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OpenCartListing, openCartsProps);
};