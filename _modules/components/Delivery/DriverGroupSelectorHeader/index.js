"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverGroupSelectHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("./styles");
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
var DriverGroupsListingUI = function DriverGroupsListingUI(props) {
  var driversGroupsState = props.driversGroupsState,
    pagination = props.pagination,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    getHeaderDriversGroups = props.getHeaderDriversGroups,
    isOpen = props.isOpen,
    close = props.close,
    changeDriverGroupState = props.changeDriverGroupState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var dropdownReference = (0, _react.useRef)();
  var handleChangePage = function handleChangePage(page) {
    getHeaderDriversGroups(page, pagination.pageSize);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(pagination.from / pageSize);
    getHeaderDriversGroups(expectedPage, pageSize);
  };
  var closeSelect = function closeSelect(e) {
    if (isOpen) {
      var _dropdownReference$cu;
      var outsideDropdown = !((_dropdownReference$cu = dropdownReference.current) !== null && _dropdownReference$cu !== void 0 && _dropdownReference$cu.contains(e.target));
      if (outsideDropdown) {
        close();
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (!isOpen) return;
    document.addEventListener('mouseup', closeSelect);
    return function () {
      return document.removeEventListener('mouseup', closeSelect);
    };
  }, [isOpen]);
  return /*#__PURE__*/_react.default.createElement(_styles.PopMenuContatiner, {
    ref: dropdownReference
  }, /*#__PURE__*/_react.default.createElement(_styles.SelectHeaderContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriverGroupSearch, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: onSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_styles.DriverGroupList, null, driversGroupsState.loading ? _toConsumableArray(Array(pagination === null || pagination === void 0 ? void 0 : pagination.pageSize).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.OptionItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 38,
      height: 38,
      style: {
        borderRadius: '7.6px'
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginLeft: '8px',
        marginRight: '8px'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 15,
      width: 140
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 12,
      width: 80,
      style: {
        marginTop: '7px'
      }
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, driversGroupsState.groups.map(function (driverGroup) {
    var _driverGroup$drivers;
    return /*#__PURE__*/_react.default.createElement(_styles.OptionItem, {
      key: driverGroup.id,
      onClick: function onClick() {
        return changeDriverGroupState(driverGroup);
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("b", null, driverGroup === null || driverGroup === void 0 ? void 0 : driverGroup.name), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVERS', 'Drivers:'), " ", driverGroup === null || driverGroup === void 0 || (_driverGroup$drivers = driverGroup.drivers) === null || _driverGroup$drivers === void 0 ? void 0 : _driverGroup$drivers.length)));
  }))), pagination && (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, {
    className: "pagination-container"
  }, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: pagination === null || pagination === void 0 ? void 0 : pagination.totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: pagination.pageSize,
    handleChangePageSize: handleChangePageSize,
    isHidePagecontrol: true
  }))));
};
var DriverGroupSelectHeader = function DriverGroupSelectHeader(props) {
  var driverGroupsListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverGroupsListingUI,
    asDashboard: true,
    isHeaderComponent: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 5,
      controlType: 'pages'
    },
    propsToFetch: ['id', 'enabled', 'drivers', 'name']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversGroupsList, driverGroupsListingProps);
};
exports.DriverGroupSelectHeader = DriverGroupSelectHeader;