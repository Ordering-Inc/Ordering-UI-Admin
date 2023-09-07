"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _styledComponents = require("styled-components");
var _SingleBusiness = require("../SingleBusiness");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessesList = function BusinessesList(props) {
  var viewMethod = props.viewMethod,
    businessList = props.businessList,
    pagination = props.pagination,
    loadMoreBusinesses = props.loadMoreBusinesses,
    handleSucessRemoveBusiness = props.handleSucessRemoveBusiness,
    handleSucessAddBusiness = props.handleSucessAddBusiness,
    handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
    handleOpenBusinessDetails = props.handleOpenBusinessDetails,
    handleOpenAddBusiness = props.handleOpenAddBusiness,
    detailsBusinessId = props.detailsBusinessId,
    getPageBusinesses = props.getPageBusinesses,
    isTutorialMode = props.isTutorialMode,
    businessIds = props.businessIds,
    handleChangeBusinessIds = props.handleChangeBusinessIds,
    handleEnableAllBusiness = props.handleEnableAllBusiness,
    selectedBusinessActiveState = props.selectedBusinessActiveState,
    setBusinessIds = props.setBusinessIds,
    handleGotToAdd = props.handleGotToAdd,
    citiesList = props.citiesList,
    isUseQuery = props.isUseQuery,
    allowBusinessRegister = props.allowBusinessRegister;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAllChecked = _useState2[0],
    setIsAllChecked = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isAllFeatured = _useState4[0],
    setIsAllFeatured = _useState4[1];
  var _useState5 = (0, _react.useState)({
      business: true,
      featured: true,
      ratings: true
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    allowColumns = _useState6[0],
    setAllowColumns = _useState6[1];
  var optionsDefault = [{
    value: 'business',
    content: t('BUSINESS', 'Business')
  }, {
    value: 'featured',
    content: t('FEATURE', 'Featured')
  }, {
    value: 'ratings',
    content: t('RATINGS', 'Ratings')
  }];
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };
  var handleChangePage = function handleChangePage(page) {
    getPageBusinesses(pagination.pageSize, page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(pagination.from / pageSize);
    getPageBusinesses(pageSize, expectedPage);
  };
  var handleSelecteAllBusiness = function handleSelecteAllBusiness() {
    var _businessList$busines;
    var _businessIds = (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.reduce(function (ids, business) {
      return [].concat(_toConsumableArray(ids), [business.id]);
    }, []);
    if (!isAllChecked) {
      setBusinessIds(_toConsumableArray(new Set([].concat(_toConsumableArray(businessIds), _toConsumableArray(_businessIds)))));
    } else {
      var updateBusinessIds = businessIds.filter(function (name) {
        return !_businessIds.includes(name);
      });
      setBusinessIds(updateBusinessIds);
    }
  };
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2;
    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + 10;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(pagination.to === pagination.total);
    if (badScrollPosition || businessList.loading || !hasMore) return;
    loadMoreBusinesses();
  }, [businessList, pagination]);
  (0, _react.useEffect)(function () {
    if (viewMethod !== 'card') return;
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, viewMethod]);
  (0, _react.useEffect)(function () {
    var _isAllFeatured = businessList.businesses.filter(function (business) {
      return businessIds.includes(business.id);
    }).every(function (business) {
      return business.featured;
    });
    setIsAllFeatured(_isAllFeatured);
  }, [JSON.stringify(businessList.businesses), businessIds]);
  (0, _react.useEffect)(function () {
    var _businessList$busines2;
    if (businessList.loading) return;
    var _businessIds = (_businessList$busines2 = businessList.businesses) === null || _businessList$busines2 === void 0 ? void 0 : _businessList$busines2.reduce(function (ids, business) {
      return [].concat(_toConsumableArray(ids), [business.id]);
    }, []);
    var _isAllChecked = _businessIds.every(function (elem) {
      return businessIds.includes(elem);
    });
    setIsAllChecked(_isAllChecked);
  }, [JSON.stringify(businessList.businesses), businessIds]);
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !(pagination !== null && pagination !== void 0 && pagination.currentPage) || !(pagination !== null && pagination !== void 0 && pagination.pageSize) || !(pagination !== null && pagination !== void 0 && pagination.total)) return;
    (0, _utils.addQueryToUrl)({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    });
  }, [pagination === null || pagination === void 0 ? void 0 : pagination.currentPage, pagination === null || pagination === void 0 ? void 0 : pagination.pageSize, pagination === null || pagination === void 0 ? void 0 : pagination.total]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, viewMethod === 'list' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessListTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessIdWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    className: "all-checkbox",
    isChecked: !(businessList !== null && businessList !== void 0 && businessList.loading) && isAllChecked,
    onClick: function onClick() {
      return handleSelecteAllBusiness();
    }
  }, !(businessList !== null && businessList !== void 0 && businessList.loading) && isAllChecked ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), t('ID', 'ID'))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("th", {
    className: "business"
  }, t('BUSINESS', 'Business')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.featured) && /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.FeaturedWrapper, null, (businessIds === null || businessIds === void 0 ? void 0 : businessIds.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: isAllFeatured,
    onChange: function onChange(value) {
      return handleEnableAllBusiness(value, true);
    }
  }), t('FEATURED', 'Featured'))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.ratings) && /*#__PURE__*/_react.default.createElement("th", null, t('RATINGS', 'Ratings')), /*#__PURE__*/_react.default.createElement("th", {
    className: "action"
  }, /*#__PURE__*/_react.default.createElement(_styles2.ActionWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    handleChangeAllowColumns: handleChangeAllowColumns
  }), (businessIds === null || businessIds === void 0 ? void 0 : businessIds.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: selectedBusinessActiveState,
    onChange: function onChange(value) {
      return handleEnableAllBusiness(value);
    }
  }))))), businessList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusiness.SingleBusiness, {
      key: i,
      isSkeleton: true,
      viewMethod: viewMethod,
      allowColumns: allowColumns
    });
  }) : businessList.businesses.map(function (business) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusiness.SingleBusiness, {
      key: business.id,
      detailsBusinessId: detailsBusinessId,
      viewMethod: viewMethod,
      allowColumns: allowColumns,
      businessId: business.id,
      business: business,
      handleSucessRemoveBusiness: handleSucessRemoveBusiness,
      handleSucessAddBusiness: handleSucessAddBusiness,
      handleSucessUpdateBusiness: handleSucessUpdateBusiness,
      handleOpenBusinessDetails: handleOpenBusinessDetails,
      businessIds: businessIds,
      handleChangeBusinessIds: handleChangeBusinessIds,
      citiesList: citiesList
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessListBottomContainer, {
    allowBusinessRegister: allowBusinessRegister
  }, allowBusinessRegister && /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleGotToAdd();
    }
  }, t('ADD_NEW_STORE', 'Add new store')), pagination && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, null, (pagination === null || pagination === void 0 ? void 0 : pagination.total) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize),
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize,
    defaultPageSize: pagination === null || pagination === void 0 ? void 0 : pagination.pageSize
  })))), viewMethod === 'card' && /*#__PURE__*/_react.default.createElement(_styles2.BusinessCardContainer, null, businessList.loading ? _toConsumableArray(Array(30).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusiness.SingleBusiness, {
      key: i,
      isSkeleton: true,
      viewMethod: viewMethod,
      allowColumns: allowColumns
    });
  }) : businessList.businesses.map(function (business) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusiness.SingleBusiness, {
      key: business.id,
      viewMethod: viewMethod,
      allowColumns: allowColumns,
      businessId: business.id,
      business: business,
      handleSucessRemoveBusiness: handleSucessRemoveBusiness,
      handleSucessAddBusiness: handleSucessAddBusiness,
      handleSucessUpdateBusiness: handleSucessUpdateBusiness,
      handleOpenBusinessDetails: handleOpenBusinessDetails,
      citiesList: citiesList
    });
  })), isTutorialMode && allowBusinessRegister && !businessList.loading && businessList.businesses.length === 0 && /*#__PURE__*/_react.default.createElement(_styles2.AddFirstStoreContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.tutorials.businessTutorial1,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return handleOpenAddBusiness();
    }
  }, t('ADD_FIRST_STORE', 'Add your first store'))));
};
exports.BusinessesList = BusinessesList;