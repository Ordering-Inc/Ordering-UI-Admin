"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsBusinessFilter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
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
var AnalyticsBusinessFilterUI = function AnalyticsBusinessFilterUI(props) {
  var _businessList$busines;
  var businessList = props.businessList,
    businessIds = props.businessIds,
    handleChangeBusinessId = props.handleChangeBusinessId,
    handleClickFilterButton = props.handleClickFilterButton,
    isAllCheck = props.isAllCheck,
    handleChangeAllCheck = props.handleChangeAllCheck,
    searchValue = props.searchValue,
    _onSearch = props.onSearch;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];

  // Change page
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0, _react.useState)(10),
    _useState4 = _slicedToArray(_useState3, 2),
    pagesPerPage = _useState4[0],
    setPagesPerPage = _useState4[1];

  // Get current products
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPages = _useState6[0],
    setCurrentPages = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    totalPages = _useState8[0],
    setTotalPages = _useState8[1];
  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * pagesPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setPagesPerPage(pageSize);
  };
  (0, _react.useEffect)(function () {
    if (businessList.loading) return;
    var _totalPages;
    if (businessList.businesses.length > 0) {
      _totalPages = Math.ceil(businessList.businesses.length / pagesPerPage);
    }
    var indexOfLastPost = currentPage * pagesPerPage;
    var indexOfFirstPost = indexOfLastPost - pagesPerPage;
    var _currentBusinessList = businessList.businesses.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(_totalPages);
    setCurrentPages(_currentBusinessList);
  }, [businessList, currentPage, pagesPerPage]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.AnalyticsBusinessFilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    search: searchValue,
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), businessList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BusinessFilterOption, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 18,
      height: 18
    }), /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 24
    })));
  }) : /*#__PURE__*/_react.default.createElement("div", null, currentPages.length > 0 && /*#__PURE__*/_react.default.createElement(_styles2.BusinessFilterOption, {
    onClick: handleChangeAllCheck
  }, isAllCheck ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null), /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, t('ALL', 'All'))), currentPages.map(function (business, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BusinessFilterOption, {
      key: i,
      onClick: function onClick() {
        return handleChangeBusinessId(business === null || business === void 0 ? void 0 : business.id);
      }
    }, businessIds !== null && businessIds !== void 0 && businessIds.includes(business.id) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null), /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, business === null || business === void 0 ? void 0 : business.name));
  }), (businessList === null || businessList === void 0 ? void 0 : (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: pagesPerPage,
    handleChangePageSize: handleChangePageSize
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FilterBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    disabled: businessList.loading,
    onClick: handleClickFilterButton
  }, t('FILTER', 'Filter'))));
};
var AnalyticsBusinessFilter = function AnalyticsBusinessFilter(props) {
  var AnalyticsBusinessFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    propsToFetch: ['id', 'name', 'slug', 'franchise_id'],
    isSearchByName: true,
    UIComponent: AnalyticsBusinessFilterUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AnalyticsBusinessFilter, AnalyticsBusinessFilterProps);
};
exports.AnalyticsBusinessFilter = AnalyticsBusinessFilter;