"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersContentHeader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _SearchBar = require("../SearchBar");

var _OrdersFilterGroup = require("../OrdersFilterGroup");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _MdcFilterOff = _interopRequireDefault(require("@meronex/icons/mdc/MdcFilterOff"));

var _OrdersDashboardControls = require("../OrdersDashboardControls");

var _Buttons = require("../../styles/Buttons");

var _InfoShareContext = require("../../contexts/InfoShareContext");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrdersContentHeader = function OrdersContentHeader(props) {
  var isDisableTitle = props.isDisableTitle,
      isDisableControl = props.isDisableControl,
      title = props.title,
      handleChangeSearch = props.handleChangeSearch,
      searchValue = props.searchValue,
      driverGroupList = props.driverGroupList,
      driversList = props.driversList,
      citiesList = props.citiesList,
      paymethodsList = props.paymethodsList,
      businessesList = props.businessesList,
      filterValues = props.filterValues,
      selectedOrderIds = props.selectedOrderIds,
      handleChangeFilterValues = props.handleChangeFilterValues,
      handleDeleteMultiOrders = props.handleDeleteMultiOrders,
      handleChangeMultiOrdersStatus = props.handleChangeMultiOrdersStatus;

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
      _filterApplied = filterValues.businessIds.length > 0 || filterValues.cityIds.length > 0 || filterValues.deliveryEndDatetime !== null || filterValues.deliveryFromDatetime !== null || filterValues.deliveryTypes.length > 0 || filterValues.driverIds.length > 0 || filterValues.paymethodIds.length > 0 || filterValues.statuses.length > 0;
    }

    setFilterApplied(_filterApplied);
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderContentHeaderContainer, {
    isDisableControl: isDisableControl
  }, !isDisableTitle && /*#__PURE__*/_react.default.createElement(_styles.HeaderSection, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement(_styles.HeaderTitle, null, title)), /*#__PURE__*/_react.default.createElement(_styles.TopRightSection, null, !isDisableControl && /*#__PURE__*/_react.default.createElement(_OrdersDashboardControls.OrdersDashboardControls, {
    selectedOrderNumber: selectedOrderIds === null || selectedOrderIds === void 0 ? void 0 : selectedOrderIds.length,
    filterValues: filterValues,
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders: handleDeleteMultiOrders
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperSearchAndFilter, {
    fullWidth: isDisableTitle && isDisableControl
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }), /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return setFilterModalOpen(true);
    },
    name: "filter-btn"
  }, filterApplied ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Funnel, null) : /*#__PURE__*/_react.default.createElement(_MdcFilterOff.default, null))))), /*#__PURE__*/_react.default.createElement(_OrdersFilterGroup.OrdersFilterGroup, {
    open: filterModalOpen,
    handleCloseFilterModal: function handleCloseFilterModal() {
      return setFilterModalOpen(false);
    },
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    citiesList: citiesList,
    handleChangeFilterValues: handleChangeFilterValues
  }));
};

exports.OrdersContentHeader = OrdersContentHeader;