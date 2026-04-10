"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupsListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _utils = require("../../../utils");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _WizardDelivery = require("../WizardDelivery");
var _DriversGroupsList = require("../DriversGroupsList");
var _DriversGroupDetails = require("../DriversGroupDetails");
var _DriversGroupAddForm = require("../DriversGroupAddForm");
var _styles2 = require("./styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
var DriversGroupsListingUI = function DriversGroupsListingUI(props) {
  var _history$location2;
  var driversGroupsState = props.driversGroupsState,
    setDriversGroupsState = props.setDriversGroupsState,
    driversManagersList = props.driversManagersList,
    businessesList = props.businessesList,
    paymethodsList = props.paymethodsList,
    driversList = props.driversList,
    selectedGroupList = props.selectedGroupList,
    handleSelectGroup = props.handleSelectGroup,
    handleAllSelectGroup = props.handleAllSelectGroup,
    handleDeleteSelectedGroups = props.handleDeleteSelectedGroups,
    actionState = props.actionState,
    handleUpdateDriversGroup = props.handleUpdateDriversGroup,
    handleDeleteDriversGroup = props.handleDeleteDriversGroup,
    driversCompanyList = props.driversCompanyList,
    actionDisabled = props.actionDisabled,
    isUseQuery = props.isUseQuery,
    pagination = props.pagination,
    setPagination = props.setPagination,
    searchValue = props.searchValue,
    onSearch = props.onSearch;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    moveDistance = _useState6[0],
    setMoveDistance = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openDetails = _useState8[0],
    setOpenDetails = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    curDriversGroup = _useState0[0],
    setCurDriversGroup = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    curDriversGroupId = _useState10[0],
    setCurDriversGroupId = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isExtendExtraOpen = _useState12[0],
    setIsExtendExtraOpen = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isAddMode = _useState14[0],
    setIsAddMode = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isTourOpen = _useState16[0],
    setIsTourOpen = _useState16[1];
  var _useState17 = (0, _react.useState)(4),
    _useState18 = _slicedToArray(_useState17, 2),
    currentTourStep = _useState18[0],
    setCurrentTourStep = _useState18[1];
  var handleOpenDetails = function handleOpenDetails(driverGroup) {
    setMoveDistance(0);
    setCurDriversGroup(driverGroup);
    setCurDriversGroupId(driverGroup === null || driverGroup === void 0 ? void 0 : driverGroup.id);
    setOpenDetails(true);
    if (!driverGroup) {
      setIsAddMode(true);
      setTimeout(function () {
        setCurrentTourStep(5);
      }, 50);
      (0, _utils.removeQueryToUrl)(['id']);
    } else {
      (0, _utils.addQueryToUrl)({
        id: driverGroup.id
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);
  var onClickSelectedGroupsDelete = function onClickSelectedGroupsDelete() {
    setConfirm({
      open: true,
      content: t('CONFIRM_DELETE', 'Are you sure to delete?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteSelectedGroups();
      }
    });
  };
  var handleOpenTour = function handleOpenTour() {
    setOpenDetails(false);
    setCurrentTourStep(4);
    setIsTourOpen(true);
  };
  (0, _react.useEffect)(function () {
    var _history$location;
    if ((_history$location = history.location) !== null && _history$location !== void 0 && (_history$location = _history$location.state) !== null && _history$location !== void 0 && _history$location.isFromTourDriversGroup) {
      handleOpenTour();
    }
  }, [(_history$location2 = history.location) === null || _history$location2 === void 0 || (_history$location2 = _history$location2.state) === null || _history$location2 === void 0 ? void 0 : _history$location2.isFromTourDriversGroup]);
  var handleNextTour = function handleNextTour() {
    setTimeout(function () {
      setCurrentTourStep(6);
    }, 50);
  };
  var handleDeliveryTourCompleted = function handleDeliveryTourCompleted() {
    setTimeout(function () {
      setCurrentTourStep(7);
    }, 50);
  };
  var getDataFromStorage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var value;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return (0, _utils.getStorageItem)('isFromDeliveryDriversGroup', true);
          case 1:
            value = _context.v;
            if (value) {
              (0, _utils.removeStorageItem)('isFromDeliveryDriversGroup');
              handleOpenTour();
            }
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function getDataFromStorage() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleCloseDetail = function handleCloseDetail() {
    setCurDriversGroup(null);
    setOpenDetails(false);
    setIsTourOpen(false);
    (0, _utils.removeQueryToUrl)(['id']);
  };
  (0, _react.useEffect)(function () {
    getDataFromStorage();
    var id = query.get('id');
    if (id) {
      setCurDriversGroupId(Number(id));
      setOpenDetails(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DriversGroupsListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderLeftContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('DELIVERY_AUTOMATION', 'Delivery automation')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "bottom",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, t('START_TUTORIAL', 'Start tutorial'))
  }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "dark",
    className: "tour_btn",
    onClick: function onClick() {
      return handleOpenTour();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LifePreserver, null)))), /*#__PURE__*/_react.default.createElement(_styles2.HeaderRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    "data-tour": "tour_add_group",
    onClick: function onClick() {
      return handleOpenDetails(null);
    },
    disabled: actionDisabled
  }, t('ADD_DRIVER_GROUP', 'Add driver group')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "secundary",
    disabled: selectedGroupList.length === 0 || actionDisabled,
    onClick: function onClick() {
      return onClickSelectedGroupsDelete();
    }
  }, t('DELETE', 'Delete')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    onSearch: onSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }))), !isAddMode ? /*#__PURE__*/_react.default.createElement(_DriversGroupsList.DriversGroupsList, {
    curDriversGroup: curDriversGroup,
    driversGroupsState: driversGroupsState,
    searchValue: searchValue,
    handleOpenDetails: handleOpenDetails,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleDeleteDriversGroup: handleDeleteDriversGroup,
    selectedGroupList: selectedGroupList,
    handleSelectGroup: handleSelectGroup,
    handleAllSelectGroup: handleAllSelectGroup,
    actionDisabled: actionDisabled,
    isUseQuery: isUseQuery,
    pagination: pagination,
    setPagination: setPagination
  }) : /*#__PURE__*/_react.default.createElement(_DriversGroupAddForm.DriversGroupAddForm, {
    driversGroupsState: driversGroupsState,
    setDriversGroupsState: setDriversGroupsState,
    curDriversGroup: curDriversGroup,
    driversGroupId: curDriversGroupId,
    driversManagers: driversManagersList === null || driversManagersList === void 0 ? void 0 : driversManagersList.managers,
    businesses: businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses,
    businessesLoading: businessesList === null || businessesList === void 0 ? void 0 : businessesList.loading,
    paymethods: paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.paymethods,
    drivers: driversList === null || driversList === void 0 ? void 0 : driversList.drivers,
    companies: driversCompanyList === null || driversCompanyList === void 0 ? void 0 : driversCompanyList.companies,
    onClose: function onClose() {
      setOpenDetails(false);
      setIsAddMode(false);
    },
    actionDisabled: actionDisabled
  })), openDetails && !isAddMode && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "driver_group_details",
    defaultSideBarWidth: !isExtendExtraOpen ? 540 + moveDistance : 1040,
    open: openDetails,
    moveDistance: moveDistance,
    noAnimation: isTourOpen,
    onClose: function onClose() {
      return handleCloseDetail();
    }
  }, /*#__PURE__*/_react.default.createElement(_DriversGroupDetails.DriversGroupDetails, {
    driversGroupsState: driversGroupsState,
    setDriversGroupsState: setDriversGroupsState,
    curDriversGroup: curDriversGroup,
    driversGroupId: curDriversGroupId,
    driversManagers: driversManagersList === null || driversManagersList === void 0 ? void 0 : driversManagersList.managers,
    businesses: businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses,
    businessesLoading: businessesList === null || businessesList === void 0 ? void 0 : businessesList.loading,
    paymethods: paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.paymethods,
    drivers: driversList === null || driversList === void 0 ? void 0 : driversList.drivers,
    companies: driversCompanyList === null || driversCompanyList === void 0 ? void 0 : driversCompanyList.companies,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setMoveDistance(val);
    },
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    isExtendExtraOpen: isExtendExtraOpen,
    onClose: function onClose() {
      setOpenDetails(false);
      if (isTourOpen) {
        handleDeliveryTourCompleted();
      }
    },
    isTourOpen: isTourOpen,
    handleNextTour: handleNextTour,
    actionDisabled: actionDisabled
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), isTourOpen && /*#__PURE__*/_react.default.createElement(_WizardDelivery.WizardDelivery, {
    isTourOpen: isTourOpen,
    setIsTourOpen: setIsTourOpen,
    currentStep: currentTourStep
  }));
};
var DriversGroupsListing = exports.DriversGroupsListing = function DriversGroupsListing(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var driversGroupsListProps = _objectSpread(_objectSpread({}, props), {}, {
    isDriversMangersRequired: true,
    UIComponent: DriversGroupsListingUI,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversGroupsList, driversGroupsListProps);
};