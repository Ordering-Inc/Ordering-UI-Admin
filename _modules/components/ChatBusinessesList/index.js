"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatBusinessesList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));

var _styledComponents = require("styled-components");

var _PaginationButton = require("../PaginationButton");

var _OrdersLateralBar = require("../OrdersLateralBar");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ChatBusinessesListUI = function ChatBusinessesListUI(props) {
  var businessList = props.businessList,
      pagination = props.pagination,
      loadMoreBusinesses = props.loadMoreBusinesses;
  var theme = (0, _styledComponents.useTheme)();

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpenOrders = _useState2[0],
      setIsOpenOrders = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      openBusiness = _useState4[0],
      setOpenBusiness = _useState4[1]; // Change page


  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      currentPage = _useState6[0],
      setCurrentPage = _useState6[1];

  var _useState7 = (0, _react.useState)(10),
      _useState8 = _slicedToArray(_useState7, 1),
      businessesPerPage = _useState8[0]; // Get current businesses


  var indexOfLastPost = currentPage * businessesPerPage;
  var indexOfFirstPost = indexOfLastPost - businessesPerPage;

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      currentBusinessess = _useState10[0],
      setCurrentBusinessess = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      totalPages = _useState12[0],
      setTotalPages = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      totalBusinesses = _useState14[0],
      setTotalBusinesses = _useState14[1]; // Change page


  var prevPaginate = function prevPaginate() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  var nextPaginate = function nextPaginate() {
    if (currentPage !== totalPages) {
      if (businessList.businesses.length < businessesPerPage * currentPage + 1) {
        loadMoreBusinesses();
      }

      setCurrentPage(currentPage + 1);
    }
  };

  var handleOpenOrders = function handleOpenOrders(business) {
    setOpenBusiness(business);
    setIsOpenOrders(true);
  };

  (0, _react.useEffect)(function () {
    if (businessList.loading) return;

    var _totalPages;

    if (pagination !== null && pagination !== void 0 && pagination.total) {
      _totalPages = Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / businessesPerPage);
    } else if (businessList.businesses.length > 0) {
      _totalPages = Math.ceil(businessList.businesses.length / businessesPerPage);
    }

    var _currentBusinessess = businessList.businesses.slice(indexOfFirstPost, indexOfLastPost);

    setTotalBusinesses(pagination === null || pagination === void 0 ? void 0 : pagination.total);
    setTotalPages(_totalPages);
    setCurrentBusinessess(_currentBusinessess);
  }, [businessList, currentPage, pagination]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.CustomersListConatainer, null, businessList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentBusinessess.map(function (business) {
    var _theme$images, _theme$images$dummies;

    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: business.id // onClick={(e) => handleClickUser(e, user)}
      ,
      active: (business === null || business === void 0 ? void 0 : business.id) === (openBusiness === null || openBusiness === void 0 ? void 0 : openBusiness.id)
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_200,c_limit')
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement(_styles.AssignedOrdersCount, {
      className: "driver_orders",
      onClick: function onClick() {
        return handleOpenOrders(business);
      }
    }, t('ORDERS', 'Orders')))));
  }))), pagination && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, !businessList.loading && totalPages > 0 && /*#__PURE__*/_react.default.createElement(_PaginationButton.PaginationButton, {
    pageSize: businessesPerPage,
    total: totalBusinesses,
    currentPage: currentPage,
    totalPages: totalPages,
    prevPaginate: prevPaginate,
    nextPaginate: nextPaginate
  })), isOpenOrders && openBusiness && /*#__PURE__*/_react.default.createElement(_OrdersLateralBar.OrdersLateralBar, {
    isBusiness: true,
    open: isOpenOrders,
    business: openBusiness,
    onClose: function onClose() {
      return setIsOpenOrders(false);
    }
  }));
};

var ChatBusinessesList = function ChatBusinessesList(props) {
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ChatBusinessesListUI,
    asDashboard: true,
    initialPageSize: 50,
    loadMorePageSize: 10,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardBusinessList, businessListingProps);
};

exports.ChatBusinessesList = ChatBusinessesList;