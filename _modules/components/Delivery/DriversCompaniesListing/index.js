"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversCompaniesListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _DriversCompaniesList = require("../DriversCompaniesList");
var _DriversCompanyDetailsForm = require("../DriversCompanyDetailsForm");
var _DriversCompanyAddForm = require("../DriversCompanyAddForm");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var DriversCompaniesListingUI = function DriversCompaniesListingUI(props) {
  var driversCompaniesState = props.driversCompaniesState,
    setDriversCompaniesState = props.setDriversCompaniesState,
    actionState = props.actionState,
    openDetails = props.openDetails,
    setOpenDetails = props.setOpenDetails,
    handleUpdateDriversCompany = props.handleUpdateDriversCompany,
    handleDeleteDriversCompany = props.handleDeleteDriversCompany,
    handleSelectCompany = props.handleSelectCompany,
    selectedCompanyList = props.selectedCompanyList,
    handleAllSelectCompany = props.handleAllSelectCompany,
    handleDeleteSelectedCompanies = props.handleDeleteSelectedCompanies,
    isUseQuery = props.isUseQuery;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    curDriversCompany = _useState4[0],
    setCurDriversCompany = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    curDriversCompanyId = _useState6[0],
    setCurDriversCompanyId = _useState6[1];
  var _useState7 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    alertState = _useState8[0],
    setAlertState = _useState8[1];
  var _useState9 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    confirm = _useState10[0],
    setConfirm = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isAddMode = _useState12[0],
    setIsAddMode = _useState12[1];
  var handleOpenDetails = function handleOpenDetails(driverCompany, isInitialRender) {
    setCurDriversCompany(driverCompany);
    setCurDriversCompanyId(driverCompany === null || driverCompany === void 0 ? void 0 : driverCompany.id);
    if (!driverCompany) {
      setIsAddMode(true);
      return;
    }
    setOpenDetails(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        id: driverCompany === null || driverCompany === void 0 ? void 0 : driverCompany.id
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
  var onClickSelectedCompaniesDelete = function onClickSelectedCompaniesDelete() {
    setConfirm({
      open: true,
      content: t('CONFIRM_DELETE', 'Are you sure to delete?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteSelectedCompanies();
      }
    });
  };
  var handleCloseDetails = function handleCloseDetails() {
    setCurDriversCompany(null);
    setCurDriversCompanyId(null);
    setOpenDetails(false);
    setIsAddMode(false);
    (0, _utils.removeQueryToUrl)(['id', 'tab']);
  };
  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id) {
      setCurDriversCompanyId(Number(id));
      setOpenDetails(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles2.DriversCompaniesListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderLeftContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('DELIVERY_COMPANIES', 'Delivery companies'))), /*#__PURE__*/_react.default.createElement(_styles2.HeaderRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenDetails(null);
    }
  }, t('ADD_DRIVER_COMPANY', 'Add driver company')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "secundary",
    disabled: selectedCompanyList.length === 0,
    onClick: function onClick() {
      return onClickSelectedCompaniesDelete();
    }
  }, t('DELETE', 'Delete')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    },
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }))), !isAddMode ? /*#__PURE__*/_react.default.createElement(_DriversCompaniesList.DriversCompaniesList, {
    driversCompaniesState: driversCompaniesState,
    searchValue: searchValue,
    handleOpenDetails: handleOpenDetails,
    curDriversCompany: curDriversCompany,
    handleUpdateDriversCompany: handleUpdateDriversCompany,
    handleDeleteDriversCompany: handleDeleteDriversCompany,
    handleSelectCompany: handleSelectCompany,
    selectedCompanyList: selectedCompanyList,
    handleAllSelectCompany: handleAllSelectCompany,
    isUseQuery: isUseQuery
  }) : /*#__PURE__*/_react.default.createElement(_DriversCompanyAddForm.DriversCompanyAddForm, {
    driversCompaniesState: driversCompaniesState,
    setDriversCompaniesState: setDriversCompaniesState,
    driversCompany: curDriversCompany,
    driversCompanyId: curDriversCompanyId,
    onClose: function onClose() {
      return handleCloseDetails();
    }
  }), openDetails && !isAddMode && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "city-details",
    defaultSideBarWidth: 550,
    open: openDetails,
    onClose: function onClose() {
      return handleCloseDetails();
    }
  }, /*#__PURE__*/_react.default.createElement(_DriversCompanyDetailsForm.DriversCompanyDetailsForm, {
    driversCompaniesState: driversCompaniesState,
    setDriversCompaniesState: setDriversCompaniesState,
    driversCompany: curDriversCompany,
    driversCompanyId: curDriversCompanyId,
    onClose: function onClose() {
      return handleCloseDetails();
    }
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
  }));
};
var DriversCompaniesListing = exports.DriversCompaniesListing = function DriversCompaniesListing(props) {
  var driversCompaniesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriversCompaniesListingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversCompaniesList, driversCompaniesProps);
};