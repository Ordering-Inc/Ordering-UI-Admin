"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsDriverFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _Shared = require("../../Shared");

var _styles = require("./styles");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _styles2 = require("../../../styles");

var _orderingComponentsAdmin = require("ordering-components-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

var ReportsDriverFilterUI = function ReportsDriverFilterUI(props) {
  var _driverList$drivers3;

  var driverList = props.driverList,
      driverIds = props.driverIds,
      handleChangeDriverId = props.handleChangeDriverId,
      handleClickFilterButton = props.handleClickFilterButton,
      isAllCheck = props.isAllCheck,
      handleChangeAllCheck = props.handleChangeAllCheck,
      searchValue = props.searchValue,
      _onSearch = props.onSearch;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1]; // Change page


  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = (0, _react.useState)(10),
      _useState4 = _slicedToArray(_useState3, 2),
      pagesPerPage = _useState4[0],
      setPagesPerPage = _useState4[1]; // Get current products


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

  var isCheckEnableSate = function isCheckEnableSate(id) {
    var found = driverIds === null || driverIds === void 0 ? void 0 : driverIds.find(function (businessId) {
      return businessId === id;
    });
    var valid = false;

    if (found) {
      valid = true;
    }

    return valid;
  };

  (0, _react.useEffect)(function () {
    var _driverList$drivers;

    if (driverList.loading) return;

    var _totalPages;

    if ((driverList === null || driverList === void 0 ? void 0 : (_driverList$drivers = driverList.drivers) === null || _driverList$drivers === void 0 ? void 0 : _driverList$drivers.length) > 0) {
      var _driverList$drivers2;

      _totalPages = Math.ceil((driverList === null || driverList === void 0 ? void 0 : (_driverList$drivers2 = driverList.drivers) === null || _driverList$drivers2 === void 0 ? void 0 : _driverList$drivers2.length) / pagesPerPage);
    }

    var indexOfLastPost = currentPage * pagesPerPage;
    var indexOfFirstPost = indexOfLastPost - pagesPerPage;

    var _currentDriverList = driverList.drivers.slice(indexOfFirstPost, indexOfLastPost);

    setTotalPages(_totalPages);
    setCurrentPages(_currentDriverList);
  }, [driverList, currentPage, pagesPerPage]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.AnalyticsBusinessFilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    search: searchValue,
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), driverList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.BusinessFilterOption, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 15,
      height: 15
    }), /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 24
    })));
  }) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.BusinessFilterOption, {
    onClick: handleChangeAllCheck
  }, isAllCheck ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, t('ALL', 'All'))), currentPages.map(function (driver, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.BusinessFilterOption, {
      key: i,
      onClick: function onClick() {
        return handleChangeDriverId(driver === null || driver === void 0 ? void 0 : driver.id);
      }
    }, isCheckEnableSate(driver.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, driver === null || driver === void 0 ? void 0 : driver.name));
  }), (driverList === null || driverList === void 0 ? void 0 : (_driverList$drivers3 = driverList.drivers) === null || _driverList$drivers3 === void 0 ? void 0 : _driverList$drivers3.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: pagesPerPage,
    handleChangePageSize: handleChangePageSize
  }))), /*#__PURE__*/_react.default.createElement(_styles.FilterBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    borderRadius: "7.6px",
    color: "primary",
    disabled: driverList.loading,
    onClick: handleClickFilterButton
  }, t('FILTER', 'Filter'))));
};

var ReportsDriverFilter = function ReportsDriverFilter(props) {
  var AnalyticsBusinessFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    propsToFetch: ['id', 'name', 'lastname', 'driver_groups.id'],
    isSearchByName: true,
    isSearchByLastName: true,
    UIComponent: ReportsDriverFilterUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ReportsDriverFilter, AnalyticsBusinessFilterProps);
};

exports.ReportsDriverFilter = ReportsDriverFilter;