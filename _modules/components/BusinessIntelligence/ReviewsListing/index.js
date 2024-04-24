"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewsListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _BusinessReviewList = require("../BusinessReviewList");
var _UsersReviewList = require("../UsersReviewList");
var _BusinessSelectHeader = require("../../Stores/BusinessSelectHeader");
var _ReviewProductsListing = require("../ReviewProductsListing");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReviewsListing = exports.ReviewsListing = function ReviewsListing(props) {
  var isUseQuery = props.isUseQuery;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultTab = query.get('tab');
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var firstRender = (0, _react.useRef)(true);
  var _useState = (0, _react.useState)(defaultTab || 'business'),
    _useState2 = _slicedToArray(_useState, 2),
    showOption = _useState2[0],
    setShowOption = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showSelect = _useState6[0],
    setShowSelect = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    business = _useState8[0],
    setBusiness = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    businessId = _useState10[0],
    setBusinessId = _useState10[1];
  var changeBusinessState = function changeBusinessState(business) {
    setShowSelect(false);
    setBusiness(business);
    setBusinessId(business.id);
    (0, _utils.addQueryToUrl)({
      business: business.id
    });
  };
  var handleChangeOption = function handleChangeOption(option, isInitialRender) {
    if (!isInitialRender) {
      firstRender.current = false;
      (0, _utils.removeQueryToUrl)(['page', 'pageSize', 'business', 'category', 'product', 'id']);
      (0, _utils.addQueryToUrl)({
        tab: option
      });
    }
    setShowOption(option);
    if (option === 'products' && !businessId) {
      setShowSelect(true);
    }
  };
  var handleOpenProducts = function handleOpenProducts(business) {
    setBusiness(business);
    setShowOption('products');
    setShowSelect(false);
  };
  (0, _react.useEffect)(function () {
    var tab = query.get('tab');
    if (tab) {
      var _businessId = query.get('business');
      if (tab === 'products' && _businessId) {
        setShowOption('products');
        setShowSelect(false);
        setBusinessId(Number(_businessId));
      } else {
        handleChangeOption(tab, true);
      }
    } else {
      handleChangeOption(showOption);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewsListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderLeft, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), showOption === 'products' ? /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.TitleWrapper, {
    onClick: function onClick() {
      return setShowSelect(function (prev) {
        return !prev;
      });
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, (business === null || business === void 0 ? void 0 : business.name) || t('REVIEWS_MANAGER', 'Reviews manager')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CaretDownFill, {
    className: "".concat(showSelect && 'rotate')
  })), showSelect && /*#__PURE__*/_react.default.createElement(_BusinessSelectHeader.BusinessSelectHeader, {
    close: function close() {
      return setShowSelect(false);
    },
    isOpen: showSelect,
    noActiveStatusCondition: true,
    changeBusinessState: changeBusinessState
  })) : /*#__PURE__*/_react.default.createElement("h1", null, t('REVIEWS_MANAGER', 'Reviews manager'))), /*#__PURE__*/_react.default.createElement(_styles2.HeaderRight, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    placeholder: t('SEARCH', 'Search'),
    searchValue: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.Tabs, null, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: showOption === 'business',
    onClick: function onClick() {
      return handleChangeOption('business');
    }
  }, t('BUSINESS', 'Business')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: showOption === 'drivers',
    onClick: function onClick() {
      return handleChangeOption('drivers');
    }
  }, t('DRIVERS', 'Drivers')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: showOption === 'customers',
    onClick: function onClick() {
      return handleChangeOption('customers');
    }
  }, t('CUSTOMERS', 'Customers')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: showOption === 'professionals',
    onClick: function onClick() {
      return handleChangeOption('professionals');
    }
  }, t('PROFESSIONALS', 'Professionals')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: showOption === 'products',
    onClick: function onClick() {
      return handleChangeOption('products');
    }
  }, t('PRODUCTS', 'Products'))), showOption === 'business' && /*#__PURE__*/_react.default.createElement(_BusinessReviewList.BusinessReviewList, {
    parentSearchValue: searchValue,
    handleOpenProducts: handleOpenProducts,
    isUseQuery: isUseQuery,
    paginationSettings: {
      initialPage: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  }), showOption === 'drivers' && /*#__PURE__*/_react.default.createElement(_UsersReviewList.UsersReviewList, {
    defaultUserTypesSelected: [4],
    parentSearchValue: searchValue,
    isUseQuery: isUseQuery,
    paginationSettings: {
      initialPage: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  }), showOption === 'customers' && /*#__PURE__*/_react.default.createElement(_UsersReviewList.UsersReviewList, {
    defaultUserTypesSelected: [3],
    parentSearchValue: searchValue,
    isUseQuery: isUseQuery,
    paginationSettings: {
      initialPage: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  }), showOption === 'professionals' && /*#__PURE__*/_react.default.createElement(_UsersReviewList.UsersReviewList, {
    defaultUserTypesSelected: [8],
    parentSearchValue: searchValue,
    isUseQuery: isUseQuery,
    paginationSettings: {
      initialPage: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  }), showOption === 'products' && businessId && /*#__PURE__*/_react.default.createElement(_ReviewProductsListing.ReviewProductsListing, {
    parentSearchValue: searchValue,
    businessId: businessId,
    isUseQuery: isUseQuery,
    defaultPage: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPage) : 1,
    defaultPageSize: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
    firstRender: firstRender.current
  })));
};