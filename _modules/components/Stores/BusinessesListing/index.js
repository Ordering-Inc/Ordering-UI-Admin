"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BsGrid = _interopRequireDefault(require("@meronex/icons/bs/BsGrid"));
var _BsViewList = _interopRequireDefault(require("@meronex/icons/bs/BsViewList"));
var _utils = require("../../../utils");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _BusinessesList = require("../BusinessesList");
var _BusinessesListingHeader = require("../BusinessesListingHeader");
var _BusinessActiveStateFilter = require("../BusinessActiveStateFilter");
var _BusinessTypeFilter = require("../BusinessTypeFilter");
var _BusinessDetails = require("../BusinessDetails");
var _WizardBusiness = require("../WizardBusiness");
var _styles = require("./styles");
var _BusinessSync = require("../BusinessSync");
var _BusinessDelete = require("../BusinessDelete");
var _styles2 = require("../../../styles");
var _BusinessAddStore = require("../BusinessAddStore");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessesListingUI = function BusinessesListingUI(props) {
  var _configs$allow_busine;
  var businessList = props.businessList,
    pagination = props.pagination,
    searchValue = props.searchValue,
    selectedBusinessActiveState = props.selectedBusinessActiveState,
    handleChangeBusinessActiveState = props.handleChangeBusinessActiveState,
    handleChangeBusinessType = props.handleChangeBusinessType,
    loadMoreBusinesses = props.loadMoreBusinesses,
    handleSucessRemoveBusiness = props.handleSucessRemoveBusiness,
    handleSucessAddBusiness = props.handleSucessAddBusiness,
    handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
    loadBusinesses = props.loadBusinesses,
    onSearch = props.onSearch,
    onBusinessRedirect = props.onBusinessRedirect,
    getPageBusinesses = props.getPageBusinesses,
    businessIds = props.businessIds,
    handleChangeBusinessIds = props.handleChangeBusinessIds,
    handleEnableAllBusiness = props.handleEnableAllBusiness,
    handleDeleteMultiBusinesses = props.handleDeleteMultiBusinesses,
    setBusinessIds = props.setBusinessIds,
    countriesState = props.countriesState,
    handleChangeFilterValues = props.handleChangeFilterValues,
    filterValues = props.filterValues,
    businessTypeSelected = props.businessTypeSelected,
    inActiveBusinesses = props.inActiveBusinesses,
    citiesList = props.citiesList,
    isUseQuery = props.isUseQuery;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTutorialMode = _useState2[0],
    setIsTutorialMode = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    openTutorialSidebarState = _useState4[0],
    setOpenTutorialSidebarState = _useState4[1];
  var _useState5 = (0, _react.useState)('list'),
    _useState6 = _slicedToArray(_useState5, 2),
    viewMethod = _useState6[0],
    setViewMethod = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openBusinessDetails = _useState8[0],
    setOpenBusinessDetails = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    detailsBusiness = _useState0[0],
    setDetailsBusiness = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    detailsBusinessId = _useState10[0],
    setDetailsBusinessId = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    openAddBusiness = _useState12[0],
    setOpenAddBusiness = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    businessTypes = _useState14[0],
    setBusinessTypes = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openSync = _useState16[0],
    setOpenSync = _useState16[1];
  var _useState17 = (0, _react.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    moveDistance = _useState18[0],
    setMoveDistance = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isAdd = _useState20[0],
    setIsAdd = _useState20[1];
  var allowBusinessRegister = !(configs !== null && configs !== void 0 && configs.allow_business_owner_register_business) || (user === null || user === void 0 ? void 0 : user.level) !== 2 || (configs === null || configs === void 0 || (_configs$allow_busine = configs.allow_business_owner_register_business) === null || _configs$allow_busine === void 0 ? void 0 : _configs$allow_busine.value) === '1' && (user === null || user === void 0 ? void 0 : user.level) === 2;
  var noBusinesses = (0, _react.useMemo)(function () {
    var _businessList$busines;
    return !(businessList !== null && businessList !== void 0 && businessList.loading) && (businessList === null || businessList === void 0 || (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.length) === 0 && (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) === 1 && !searchValue && (!filterValues || Object.keys(filterValues).length === 0) && selectedBusinessActiveState && !businessTypeSelected && (inActiveBusinesses === null || inActiveBusinesses === void 0 ? void 0 : inActiveBusinesses.length) === 0;
  }, [businessList === null || businessList === void 0 ? void 0 : businessList.loading, businessList === null || businessList === void 0 ? void 0 : businessList.businesses, pagination, searchValue, filterValues, selectedBusinessActiveState, businessTypeSelected, inActiveBusinesses]);
  var handleGotToAdd = function handleGotToAdd() {
    if (countriesState !== null && countriesState !== void 0 && countriesState.enabled) setIsAdd(true);else events.emit('go_to_page', {
      page: 'business_add'
    });
  };
  var handleBackRedirect = function handleBackRedirect() {
    setOpenBusinessDetails(false);
    setDetailsBusiness(null);
    setDetailsBusinessId(null);
    onBusinessRedirect();
  };
  var handleOpenBusinessDetails = function handleOpenBusinessDetails(business) {
    setOpenAddBusiness(false);
    setDetailsBusiness(business);
    setDetailsBusinessId(business.id);
    setOpenBusinessDetails(true);
    onBusinessRedirect(business.id);
  };
  var handleOpenAddBusiness = function handleOpenAddBusiness() {
    var id = query.get('id');
    if (id) {
      handleBackRedirect();
    }
    setOpenAddBusiness(true);
  };

  // const onhandleSuccessAddBusiness = (business) => {
  //   handleSucessAddBusiness(business)
  //   setOpenAddBusiness(false)
  //   setDetailsBusiness(business)
  //   if (isTutorialMode) {
  //     setOpenTutorialSidebarState('schedule')
  //   } else {
  //     handleOpenBusinessDetails(business)
  //   }
  // }

  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id === null) setOpenBusinessDetails(false);else {
      setDetailsBusinessId(id);
      setOpenBusinessDetails(true);
    }
  }, []);
  var handleStartTutorial = function handleStartTutorial() {
    setIsTutorialMode(true);
    handleOpenAddBusiness();
  };
  var handleSetStorage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var preVisited, visited;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return (0, _utils.getStorageItem)('visited', true);
          case 1:
            preVisited = _context.v;
            if (preVisited !== null && preVisited !== void 0 && preVisited.businesses_page) {
              _context.n = 3;
              break;
            }
            visited = _objectSpread(_objectSpread({}, preVisited), {}, {
              businesses_page: true
            });
            _context.n = 2;
            return (0, _utils.setStorageItem)('visited', visited, true);
          case 2:
            setIsTutorialMode(true);
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleSetStorage() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleViewMethod = function handleViewMethod(method) {
    setViewMethod(method);
    if (method === 'list') {
      getPageBusinesses(10, 1);
    }
    if (method === 'card') {
      getPageBusinesses(50, 1);
      (0, _utils.removeQueryToUrl)(['page', 'pageSize']);
    }
  };
  var handleOpenSync = function handleOpenSync() {
    setOpenSync(true);
    (0, _utils.addQueryToUrl)({
      header: 'sync'
    });
  };
  var handleCloseSync = function handleCloseSync() {
    setMoveDistance(0);
    setOpenSync(false);
    (0, _utils.removeQueryToUrl)(['header', 'tab']);
  };
  (0, _react.useEffect)(function () {
    handleSetStorage();
  }, []);
  (0, _react.useEffect)(function () {
    var header = query.get('header');
    if (header === 'sync') {
      setOpenSync(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessListingContainer, {
    isAdd: openAddBusiness
  }, /*#__PURE__*/_react.default.createElement(_BusinessesListingHeader.BusinessesListingHeader, {
    searchValue: searchValue,
    onSearch: onSearch,
    handleOpenAddBusiness: handleOpenAddBusiness,
    handleGotToAdd: handleGotToAdd,
    handleStartTutorial: handleStartTutorial,
    handleOpenSync: handleOpenSync,
    handleRefreshBusinesses: loadBusinesses,
    loading: businessList.loading,
    noBusinesses: noBusinesses,
    openAddBusiness: openAddBusiness,
    handleChangeFilterValues: handleChangeFilterValues,
    filterValues: filterValues,
    allowBusinessRegister: allowBusinessRegister
  }), !noBusinesses && /*#__PURE__*/_react.default.createElement(_styles.ViewContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessActiveStateFilter.BusinessActiveStateFilter, {
    isUseQuery: isUseQuery,
    selectedBusinessActiveState: selectedBusinessActiveState,
    handleChangeBusinessActiveState: handleChangeBusinessActiveState
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperView, null, /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'card',
    onClick: function onClick() {
      return handleViewMethod('card');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsGrid.default, null)), /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'list',
    onClick: function onClick() {
      return handleViewMethod('list');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsViewList.default, null)))), !noBusinesses && /*#__PURE__*/_react.default.createElement(_styles.ButtonGroup, {
    isSelect: (businessIds === null || businessIds === void 0 ? void 0 : businessIds.length) > 0
  }, /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    businessTypes: props.businessTypes,
    defaultBusinessType: props.defaultBusinessType,
    handleChangeBusinessType: handleChangeBusinessType,
    setBusinessTypes: setBusinessTypes
  }), (businessIds === null || businessIds === void 0 ? void 0 : businessIds.length) > 0 && /*#__PURE__*/_react.default.createElement(_BusinessDelete.BusinessDelete, {
    handleDeleteMultiBusinesses: handleDeleteMultiBusinesses
  })), noBusinesses ? /*#__PURE__*/_react.default.createElement(_styles.EmptyBusinessWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.dummies.noBusinesses,
    alt: ""
  }), allowBusinessRegister && /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    color: "primary",
    borderRadius: "7.6px",
    onClick: function onClick() {
      return handleGotToAdd();
    }
  }, t('ADD_NEW_STORE', 'Add new store'))) : /*#__PURE__*/_react.default.createElement(_BusinessesList.BusinessesList, {
    viewMethod: viewMethod,
    businessList: businessList,
    pagination: pagination,
    detailsBusinessId: detailsBusinessId,
    loadMoreBusinesses: loadMoreBusinesses,
    getPageBusinesses: getPageBusinesses,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    handleOpenBusinessDetails: handleOpenBusinessDetails,
    handleOpenAddBusiness: handleOpenAddBusiness,
    isTutorialMode: isTutorialMode,
    businessIds: businessIds,
    setBusinessIds: setBusinessIds,
    handleChangeBusinessIds: handleChangeBusinessIds,
    handleEnableAllBusiness: handleEnableAllBusiness,
    selectedBusinessActiveState: selectedBusinessActiveState,
    handleGotToAdd: handleGotToAdd,
    citiesList: citiesList,
    isUseQuery: isUseQuery && viewMethod === 'list',
    allowBusinessRegister: allowBusinessRegister
  })), openBusinessDetails && /*#__PURE__*/_react.default.createElement(_BusinessDetails.BusinessDetails, {
    open: openBusinessDetails
    // business={detailsBusiness}
    ,
    businessTypes: businessTypes,
    businessId: detailsBusinessId,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    setBusinessTypes: setBusinessTypes,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }), openSync && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    id: "store_sync",
    open: openSync,
    onClose: function onClose() {
      return handleCloseSync();
    },
    defaultSideBarWidth: 550 + moveDistance,
    moveDistance: moveDistance
  }, /*#__PURE__*/_react.default.createElement(_BusinessSync.BusinessSync, {
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setMoveDistance(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_WizardBusiness.WizardBusiness, {
    isTutorialMode: isTutorialMode,
    openTutorialSidebarState: openTutorialSidebarState,
    setOpenTutorialSidebarState: setOpenTutorialSidebarState,
    business: detailsBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "769px",
    padding: "30px",
    open: isAdd,
    onClose: function onClose() {
      return setIsAdd(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessAddStore.BusinessAddStore, null)));
};
var BusinessesListing = exports.BusinessesListing = function BusinessesListing(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var defaultActive = query.get('active');
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI,
    asDashboard: true,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    },
    defaultActive: defaultActive ? defaultActive === 'true' : true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardBusinessList, businessListingProps);
};