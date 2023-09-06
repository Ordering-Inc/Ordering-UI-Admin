"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenCartsHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _OpenCartsFilterGroup = require("../OpenCartsFilterGroup");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _MdcFilterOff = _interopRequireDefault(require("@meronex/icons/mdc/MdcFilterOff"));
var _styles = require("../../../styles");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OpenCartsHeader = function OpenCartsHeader(props) {
  var handleChangeSearch = props.handleChangeSearch,
    searchValue = props.searchValue,
    citiesList = props.citiesList,
    businessesList = props.businessesList,
    filterValues = props.filterValues,
    handleChangeFilterValues = props.handleChangeFilterValues;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    filterModalOpen = _useState2[0],
    setFilterModalOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    filterApplied = _useState4[0],
    setFilterApplied = _useState4[1];
  (0, _react.useEffect)(function () {
    var _filterApplied = false;
    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false;
    } else {
      _filterApplied = filterValues.businessIds.length > 0 || filterValues.cityIds.length > 0 || filterValues.deliveryEndDatetime !== null || filterValues.deliveryFromDatetime !== null || filterValues.customerIds.length > 0;
    }
    setFilterApplied(_filterApplied);
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.OrderContentHeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderSection, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitle, null, t('OPEN_CARTS', 'Open carts'))), /*#__PURE__*/_react.default.createElement(_styles2.TopRightSection, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperSearchAndFilter, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return setFilterModalOpen(true);
    },
    name: "filter-btn"
  }, filterApplied ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Funnel, null) : /*#__PURE__*/_react.default.createElement(_MdcFilterOff.default, null))))), /*#__PURE__*/_react.default.createElement(_OpenCartsFilterGroup.OpenCartsFilterGroup, {
    open: filterModalOpen,
    handleCloseFilterModal: function handleCloseFilterModal() {
      return setFilterModalOpen(false);
    },
    businessesList: businessesList,
    citiesList: citiesList,
    handleChangeFilterValues: handleChangeFilterValues
  }));
};
exports.OpenCartsHeader = OpenCartsHeader;