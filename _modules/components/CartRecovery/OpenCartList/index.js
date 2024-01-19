"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenCartList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // import { Square, CheckSquareFill } from 'react-bootstrap-icons'
var OpenCartList = exports.OpenCartList = function OpenCartList(props) {
  var _cartList$carts;
  var cartList = props.cartList,
    pagination = props.pagination,
    cartDetailId = props.cartDetailId,
    getCartList = props.getCartList,
    handleOpenCartDetail = props.handleOpenCartDetail,
    isUseQuery = props.isUseQuery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    optimizeImage = _useUtils2$.optimizeImage;

  // const [isAllChecked, setIsAllChecked] = useState(false)

  var handleChangePage = function handleChangePage(page) {
    getCartList(pagination.pageSize, page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(pagination.from / pageSize);
    getCartList(pageSize, expectedPage);
  };
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openPopover = _useState2[0],
    setOpenPopover = _useState2[1];
  var _useState3 = (0, _react.useState)({
      id: true,
      business: true,
      customer: true,
      city: true,
      last_update: true
      // total: true
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    allowColumns = _useState4[0],
    setAllowColumns = _useState4[1];
  var optionsDefault = [{
    value: 'id',
    content: t('ID', 'ID')
  }, {
    value: 'business',
    content: t('BUSINESS', 'Business')
  }, {
    value: 'customer',
    content: t('CUSTOMER', 'Customer')
  }, {
    value: 'city',
    content: t('CITY', 'City')
  }, {
    value: 'last_update',
    content: t('LAST_UPDATE', 'Last update')
  }
  // {
  //   value: 'total',
  //   content: t('EXPORT_TOTAL', 'Total')
  // }
  ];
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };
  var handleClickCart = function handleClickCart(cart, e) {
    if (e.target.closest('.cartCheckBox')) return;
    handleOpenCartDetail(cart);
  };

  // const handleSelecteAllCarts = () => {
  //   const cartIds = cartList.carts?.reduce((ids, cart) => [...ids, cart.id], [])
  //   if (!isAllChecked) {
  //     setSelectedCartIds([...selectedCartIds, ...cartIds])
  //   } else {
  //     const orderIdsToDeleteSet = new Set(cartIds)
  //     const updatedSelectedOrderIds = selectedCartIds.filter((name) => {
  //       return !orderIdsToDeleteSet.has(name)
  //     })
  //     setSelectedCartIds(updatedSelectedOrderIds)
  //   }
  // }

  // useEffect(() => {
  //   if (cartList.loading) return
  //   const cartIds = cartList.carts?.reduce((ids, cart) => [...ids, cart.id], [])
  //   const _isAllChecked = cartIds.every(elem => selectedCartIds.includes(elem))
  //   setIsAllChecked(_isAllChecked)
  // }, [cartList.carts, selectedCartIds])

  (0, _react.useEffect)(function () {
    if (!isUseQuery || !(pagination !== null && pagination !== void 0 && pagination.currentPage) || !(pagination !== null && pagination !== void 0 && pagination.pageSize) || !(pagination !== null && pagination !== void 0 && pagination.totalPages)) return;
    (0, _utils.addQueryToUrl)({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    });
  }, [pagination === null || pagination === void 0 ? void 0 : pagination.currentPage, pagination === null || pagination === void 0 ? void 0 : pagination.pageSize, pagination === null || pagination === void 0 ? void 0 : pagination.totalPages]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CartsContainer, {
    id: "cartTable"
  }, /*#__PURE__*/_react.default.createElement(_styles.Table, {
    className: "carts_table",
    isRelative: (cartList === null || cartList === void 0 || (_cartList$carts = cartList.carts) === null || _cartList$carts === void 0 ? void 0 : _cartList$carts.length) > 5
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "carts-id"
  }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.id) && /*#__PURE__*/_react.default.createElement("span", {
    className: "bold"
  }, t('ID', 'ID'))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("th", {
    className: "businessInfo"
  }, t('BUSINESS', 'Business')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.customer) && /*#__PURE__*/_react.default.createElement("th", {
    className: "customerInfo"
  }, t('CUSTOMER', 'Customer')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.last_update) && /*#__PURE__*/_react.default.createElement("th", {
    className: "last-update"
  }, t('LAST_UPDATE', 'Last update')), /*#__PURE__*/_react.default.createElement("th", {
    className: "allow-colums"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    open: openPopover,
    title: t('DISPLAYED_DATA_ORDER', 'Displayed data the order'),
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    onClick: function onClick() {
      return setOpenPopover(!openPopover);
    },
    onClose: function onClose() {
      return setOpenPopover(false);
    },
    handleChangeAllowColumns: handleChangeAllowColumns
  })))), cartList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.CartBody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: "carts-id"
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderNumberContainer, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.id) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 25
    }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", {
      className: "businessInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.customer) && /*#__PURE__*/_react.default.createElement("td", {
      className: "customerInfo"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.last_update) && /*#__PURE__*/_react.default.createElement("td", {
      className: "last-update"
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapOrderStatusSelector, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 20
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    }))))));
  }) : cartList.carts.map(function (cart) {
    var _cart$business, _theme$images, _cart$business2, _cart$city, _cart$user, _cart$user2, _cart$user3, _cart$user4, _cart$user5, _cart$user6;
    return /*#__PURE__*/_react.default.createElement(_styles.CartBody, {
      key: cart === null || cart === void 0 ? void 0 : cart.id,
      className: parseInt(cartDetailId) === cart.id ? 'active' : '',
      onClick: function onClick(e) {
        return handleClickCart(cart, e);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: "carts-id"
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderNumberContainer, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.id) && /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, cart === null || cart === void 0 ? void 0 : cart.id)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", {
      className: "businessInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage(((_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_50,c_limit')
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, cart === null || cart === void 0 || (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.name), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.city) && /*#__PURE__*/_react.default.createElement("p", null, cart === null || cart === void 0 || (_cart$city = cart.city) === null || _cart$city === void 0 ? void 0 : _cart$city.name)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.customer) && /*#__PURE__*/_react.default.createElement("td", {
      className: "customerInfo"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, cart !== null && cart !== void 0 && (_cart$user = cart.user) !== null && _cart$user !== void 0 && _cart$user.photo ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage(cart === null || cart === void 0 || (_cart$user2 = cart.user) === null || _cart$user2 === void 0 ? void 0 : _cart$user2.photo, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, cart === null || cart === void 0 || (_cart$user3 = cart.user) === null || _cart$user3 === void 0 ? void 0 : _cart$user3.name, " ", cart === null || cart === void 0 || (_cart$user4 = cart.user) === null || _cart$user4 === void 0 ? void 0 : _cart$user4.lastname), /*#__PURE__*/_react.default.createElement("p", null, (cart === null || cart === void 0 || (_cart$user5 = cart.user) === null || _cart$user5 === void 0 ? void 0 : _cart$user5.cellphone) || (cart === null || cart === void 0 || (_cart$user6 = cart.user) === null || _cart$user6 === void 0 ? void 0 : _cart$user6.phone)))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.last_update) && /*#__PURE__*/_react.default.createElement("td", {
      className: "last-update"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, (cart === null || cart === void 0 ? void 0 : cart.updated_at) && parseDate(cart === null || cart === void 0 ? void 0 : cart.updated_at, {
      outputFormat: 'MM/DD/YY • HH:mm a'
    })))), /*#__PURE__*/_react.default.createElement("td", null)));
  }))), pagination && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: pagination.totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: pagination.pageSize,
    handleChangePageSize: handleChangePageSize
  })));
};