"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OpenCartList = function OpenCartList(props) {
  var cartList = props.cartList,
      pagination = props.pagination,
      cartDetailId = props.cartDetailId,
      getCartList = props.getCartList,
      handleOpenCartDetail = props.handleOpenCartDetail;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parseDate = _useUtils2$.parseDate,
      optimizeImage = _useUtils2$.optimizeImage; // const [isAllChecked, setIsAllChecked] = useState(false)


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
    last_update: true // total: true

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
  } // {
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
  }; // const handleSelecteAllCarts = () => {
  //   const cartIds = cartList.carts.reduce((ids, cart) => [...ids, cart.id], [])
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
  //   const cartIds = cartList.carts.reduce((ids, cart) => [...ids, cart.id], [])
  //   const _isAllChecked = cartIds.every(elem => selectedCartIds.includes(elem))
  //   setIsAllChecked(_isAllChecked)
  // }, [cartList.carts, selectedCartIds])


  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CartsContainer, {
    id: "cartTable"
  }, /*#__PURE__*/_react.default.createElement(_styles.Table, {
    className: "carts_table"
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
  }) : cartList.carts.map(function (cart, i) {
    var _cart$business, _theme$images, _theme$images$dummies, _cart$business2, _cart$city, _cart$user, _cart$user2, _cart$user3, _cart$user4, _cart$user5, _cart$user6;

    return /*#__PURE__*/_react.default.createElement(_styles.CartBody, {
      key: i,
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
      bgimage: optimizeImage(((_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_50,c_limit')
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, cart === null || cart === void 0 ? void 0 : (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.name), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.city) && /*#__PURE__*/_react.default.createElement("p", null, cart === null || cart === void 0 ? void 0 : (_cart$city = cart.city) === null || _cart$city === void 0 ? void 0 : _cart$city.name)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.customer) && /*#__PURE__*/_react.default.createElement("td", {
      className: "customerInfo"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, cart !== null && cart !== void 0 && (_cart$user = cart.user) !== null && _cart$user !== void 0 && _cart$user.photo ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage(cart === null || cart === void 0 ? void 0 : (_cart$user2 = cart.user) === null || _cart$user2 === void 0 ? void 0 : _cart$user2.photo, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, cart === null || cart === void 0 ? void 0 : (_cart$user3 = cart.user) === null || _cart$user3 === void 0 ? void 0 : _cart$user3.name, " ", cart === null || cart === void 0 ? void 0 : (_cart$user4 = cart.user) === null || _cart$user4 === void 0 ? void 0 : _cart$user4.lastname), /*#__PURE__*/_react.default.createElement("p", null, (cart === null || cart === void 0 ? void 0 : (_cart$user5 = cart.user) === null || _cart$user5 === void 0 ? void 0 : _cart$user5.cellphone) || (cart === null || cart === void 0 ? void 0 : (_cart$user6 = cart.user) === null || _cart$user6 === void 0 ? void 0 : _cart$user6.phone)))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.last_update) && /*#__PURE__*/_react.default.createElement("td", {
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

exports.OpenCartList = OpenCartList;