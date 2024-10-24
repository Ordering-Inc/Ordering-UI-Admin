"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupBusinesses = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactHookForm = require("react-hook-form");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles3 = require("../../../styles/MultiSelect/styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DriversGroupBusinesses = exports.DriversGroupBusinesses = function DriversGroupBusinesses(props) {
  var driversGroupState = props.driversGroupState,
    businesses = props.businesses,
    handleSelectBusiness = props.handleSelectBusiness,
    actionState = props.actionState,
    changesState = props.changesState,
    handleUpdateDriversGroup = props.handleUpdateDriversGroup,
    handleAddDriversGroup = props.handleAddDriversGroup,
    handleSelectAllBusiness = props.handleSelectAllBusiness,
    selectedBusinessIds = props.selectedBusinessIds,
    actionDisabled = props.actionDisabled,
    businessesLoading = props.businessesLoading;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredBusinesses = _useState4[0],
    setFilteredBusinesses = _useState4[1];
  var _useState5 = (0, _react.useState)({
      currentPage: 1,
      pageSize: 10,
      totalItems: null,
      totalPages: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    pagination = _useState6[0],
    setPagination = _useState6[1];
  var handleChangePage = function handleChangePage(page) {
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      currentPage: page
    }));
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil((((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) - 1) * (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) + 1) / pageSize);
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      currentPage: expectedPage,
      pageSize: pageSize,
      totalPages: Math.ceil((filteredBusinesses === null || filteredBusinesses === void 0 ? void 0 : filteredBusinesses.length) / pageSize)
    }));
  };
  var filterFunction = function filterFunction(_, index) {
    var validation = (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) === 1 ? index < pagination.pageSize * pagination.currentPage : index >= pagination.pageSize * (pagination.currentPage - 1) && index < pagination.pageSize * pagination.currentPage;
    return validation;
  };
  (0, _react.useEffect)(function () {
    var _filteredBusinesses2, _filteredBusinesses3;
    var _filteredBusinesses = [];
    if (searchValue) {
      _filteredBusinesses = businesses.filter(function (business) {
        var _business$name;
        return business === null || business === void 0 || (_business$name = business.name) === null || _business$name === void 0 ? void 0 : _business$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
      });
    } else {
      _filteredBusinesses = _toConsumableArray(businesses);
    }
    setFilteredBusinesses(_filteredBusinesses);
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      currentPage: 1,
      totalItems: (_filteredBusinesses2 = _filteredBusinesses) === null || _filteredBusinesses2 === void 0 ? void 0 : _filteredBusinesses2.length,
      totalPages: Math.ceil(((_filteredBusinesses3 = _filteredBusinesses) === null || _filteredBusinesses3 === void 0 ? void 0 : _filteredBusinesses3.length) / pagination.pageSize)
    }));
  }, [searchValue, businesses]);
  var onSubmit = function onSubmit() {
    if (driversGroupState.driversGroup) {
      handleUpdateDriversGroup(changesState);
    } else {
      handleAddDriversGroup();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    "data-tour": "tour_select_business",
    onSubmit: handleSubmit(onSubmit),
    disabled: actionDisabled
  }, /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    placeholder: t('SEARCH', 'Search'),
    isCustomLayout: true,
    lazyLoad: true,
    search: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "button",
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllBusiness(true);
    }
  }, t('SELECT_ALL', 'Select all')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "button",
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllBusiness(false);
    }
  }, t('SELECT_NONE', 'Select none'))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessesContainer, null, businessesLoading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(9).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.SkeletonContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 18,
      height: 18
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 35,
      height: 35,
      style: {
        margin: '0px 5px',
        borderRadius: '100%'
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 250
    }))));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, filteredBusinesses.filter(filterFunction).map(function (business) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BusinessWrapper, {
      key: business.id,
      isDisabed: actionState.loading
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: selectedBusinessIds.includes(business.id),
      onChange: function onChange(e) {
        return handleSelectBusiness(business.id, e.target.checked);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: business === null || business === void 0 ? void 0 : business.logo,
      alt: "logo"
    })), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : business.name));
  })), pagination && handleChangePageSize && handleChangePage && /*#__PURE__*/_react.default.createElement(_styles3.PaginationWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.currentPage,
    totalPages: pagination === null || pagination === void 0 ? void 0 : pagination.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize,
    defaultPageSize: pagination === null || pagination === void 0 ? void 0 : pagination.pageSize
  }))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: Object.keys(changesState).length === 0
  }, driversGroupState.driversGroup ? t('SAVE', 'Save') : t('ADD', 'Add')));
};