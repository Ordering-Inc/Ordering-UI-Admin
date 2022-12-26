"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSyncStore = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("./styles");
var _BusinessSyncStoreDetail = require("../BusinessSyncStoreDetail");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessSyncStoreUI = function BusinessSyncStoreUI(props) {
  var _businessList$busines;
  var searchValue = props.searchValue,
    _onSearch = props.onSearch,
    businessList = props.businessList,
    pagination = props.pagination,
    getPageBusinesses = props.getPageBusinesses,
    handleParentSidebarMove = props.handleParentSidebarMove;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedBusiness = _useState2[0],
    setSelectedBusiness = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    extraOpen = _useState4[0],
    setExtraOpen = _useState4[1];
  var handleClickBusiness = function handleClickBusiness(business) {
    setSelectedBusiness(business);
    setExtraOpen(true);
    if (width >= 1100) {
      handleParentSidebarMove(550);
    }
  };
  var handleCloseBusinessDetail = function handleCloseBusinessDetail() {
    handleParentSidebarMove(0);
    setSelectedBusiness(null);
    setExtraOpen(false);
  };
  var handleChangePage = function handleChangePage(page) {
    getPageBusinesses(pagination.pageSize, page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(pagination.from / pageSize);
    getPageBusinesses(pageSize, expectedPage);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    search: searchValue,
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), businessList !== null && businessList !== void 0 && businessList.loading ? /*#__PURE__*/_react.default.createElement(_styles.BusinessListWrapper, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.BusinessItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      className: "d-flex h-100"
    })), /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16,
      style: {
        marginLeft: 10,
        marginRight: 10
      }
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.BusinessListWrapper, null, (businessList === null || businessList === void 0 ? void 0 : (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.length) > 0 ? businessList === null || businessList === void 0 ? void 0 : businessList.businesses.map(function (business, i) {
    var _theme$images, _theme$images$dummies;
    return /*#__PURE__*/_react.default.createElement(_styles.BusinessItemContainer, {
      key: i,
      active: (selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id) === (business === null || business === void 0 ? void 0 : business.id),
      onClick: function onClick() {
        return handleClickBusiness(business);
      },
      isFirst: i === 0
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: business === null || business === void 0 ? void 0 : business.id
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo))
    })), /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, business === null || business === void 0 ? void 0 : business.name)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }) : /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, null), (pagination === null || pagination === void 0 ? void 0 : pagination.total) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize),
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
  })), extraOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1100 ? /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: extraOpen,
    defaultSideBarWidth: 550,
    sidebarId: "loyaltyBusinessDetail",
    onClose: handleCloseBusinessDetail
  }, /*#__PURE__*/_react.default.createElement(_BusinessSyncStoreDetail.BusinessSyncStoreDetail, {
    business: selectedBusiness
  })) : /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "90vh",
    padding: "0px",
    open: extraOpen,
    onClose: handleCloseBusinessDetail
  }, /*#__PURE__*/_react.default.createElement(_BusinessSyncStoreDetail.BusinessSyncStoreDetail, {
    business: selectedBusiness
  }))));
};
var BusinessSyncStore = function BusinessSyncStore(props) {
  var businessBrandBUSIDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessSyncStoreUI,
    asDashboard: true,
    isSearchByBusinessName: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardBusinessList, businessBrandBUSIDetailProps);
};
exports.BusinessSyncStore = BusinessSyncStore;