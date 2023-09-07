"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountryFilter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CountryFilterUI = function CountryFilterUI(props) {
  var _countriesState$count;
  var countriesState = props.countriesState,
    searchValue = props.searchValue,
    _onSearch = props.onSearch,
    handleClickFilterButton = props.handleClickFilterButton,
    code = props.code,
    openCountryFilter = props.openCountryFilter,
    setOpenCountryFilter = props.setOpenCountryFilter,
    setCode = props.setCode,
    actionState = props.actionState,
    setIsOneMoreCountry = props.setIsOneMoreCountry;
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
    if (countriesState.loading) return;
    var _totalPages;
    if (countriesState.countries.length > 0) {
      _totalPages = Math.ceil(countriesState.countries.length / pagesPerPage);
    }
    var indexOfLastPost = currentPage * pagesPerPage;
    var indexOfFirstPost = indexOfLastPost - pagesPerPage;
    var _currentBusinessList = countriesState.countries.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(_totalPages);
    setCurrentPages(_currentBusinessList);
    setIsOneMoreCountry && setIsOneMoreCountry(countriesState.countries.length > 1);
  }, [countriesState, currentPage, pagesPerPage]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(countriesState !== null && countriesState !== void 0 && countriesState.loading) && (currentPages === null || currentPages === void 0 ? void 0 : currentPages.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "450px",
    height: "650px",
    padding: "25px",
    open: openCountryFilter,
    onClose: function onClose() {
      return setOpenCountryFilter(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, t('CHOOSE_A_COUNTRY', 'Choose a country')), /*#__PURE__*/_react.default.createElement(_styles2.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    search: searchValue,
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_styles2.CountryListWrapper, null, actionState !== null && actionState !== void 0 && actionState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CountryItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 18,
      height: 18,
      circle: true
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 20,
      style: {
        marginLeft: 10
      }
    }));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentPages === null || currentPages === void 0 ? void 0 : currentPages.map(function (country) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CountryItem, {
      key: country === null || country === void 0 ? void 0 : country.id,
      onClick: function onClick() {
        return setCode(country === null || country === void 0 ? void 0 : country.code);
      }
    }, code === (country === null || country === void 0 ? void 0 : country.code) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
      className: "checked"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, country === null || country === void 0 ? void 0 : country.name));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.PaginationWrapper, null, (countriesState === null || countriesState === void 0 || (_countriesState$count = countriesState.countries) === null || _countriesState$count === void 0 ? void 0 : _countriesState$count.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: pagesPerPage,
    handleChangePageSize: handleChangePageSize
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    disabled: countriesState.loading,
    onClick: handleClickFilterButton
  }, t('FILTER', 'Filter'))))));
};
var CountryFilter = function CountryFilter(props) {
  var countryFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CountryFilterUI,
    onClose: function onClose() {
      return props.setOpenCountryFilter(false);
    },
    isSearchByName: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CountryList, countryFilterProps);
};
exports.CountryFilter = CountryFilter;