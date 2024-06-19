"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _EnterprisePromotionList = require("../EnterprisePromotionList");
var _EnterprisePromotionDetails = require("../EnterprisePromotionDetails");
var _DisabledFeatureAlert = require("../../DisabledFeatureAlert");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var EnterprisePromotionListingUI = function EnterprisePromotionListingUI(props) {
  var searchValue = props.searchValue,
    onSearch = props.onSearch,
    promotionListState = props.promotionListState,
    handleSuccessUpdatePromotions = props.handleSuccessUpdatePromotions,
    handleSuccessAddPromotion = props.handleSuccessAddPromotion,
    sitesState = props.sitesState,
    paymethodsState = props.paymethodsState,
    businessesList = props.businessesList,
    handleSuccessDeletePromotion = props.handleSuccessDeletePromotion;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var featureName = 'Marketing_dashboard';
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDisabledFeature = _useState2[0],
    setIsDisabledFeature = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    advancedOfferModuleDisabled = _useState6[0],
    setAdvancedOfferModuleDisabled = _useState6[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openDetails = _useState8[0],
    setOpenDetails = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedPromotion = _useState10[0],
    setSelectedPromotion = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    curPromotionId = _useState12[0],
    setCurPromotionId = _useState12[1];
  var _useState13 = (0, _react.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    moveDistance = _useState14[0],
    setMoveDistance = _useState14[1];
  var _useState15 = (0, _react.useState)(600),
    _useState16 = _slicedToArray(_useState15, 2),
    sideBarWidth = _useState16[0],
    setSideBarWidth = _useState16[1];
  var handleOpenDetails = function handleOpenDetails(promotion) {
    setSideBarWidth(600);
    setMoveDistance(0);
    setSelectedPromotion(promotion);
    setCurPromotionId(promotion === null || promotion === void 0 ? void 0 : promotion.id);
    setOpenDetails(true);
    if (promotion) {
      (0, _utils.addQueryToUrl)({
        id: promotion === null || promotion === void 0 ? void 0 : promotion.id
      });
    }
  };
  var handleCloseDetails = function handleCloseDetails() {
    setMoveDistance(0);
    setSideBarWidth(600);
    setOpenDetails(false);
    setSelectedPromotion(null);
    (0, _utils.removeQueryToUrl)(['id']);
  };
  (0, _react.useEffect)(function () {
    if (!(promotionListState !== null && promotionListState !== void 0 && promotionListState.error)) return;
    setAdvancedOfferModuleDisabled(true);
    setAlertState({
      open: true,
      content: promotionListState === null || promotionListState === void 0 ? void 0 : promotionListState.error
    });
  }, [promotionListState === null || promotionListState === void 0 ? void 0 : promotionListState.error]);
  (0, _react.useEffect)(function () {
    if (configs && Object.keys(configs).length > 0 && user) {
      if (!Object.keys(configs).includes(featureName) && (user === null || user === void 0 ? void 0 : user.level) === 0) {
        setIsDisabledFeature(false);
      }
    }
  }, [configs]);
  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id) {
      setCurPromotionId(Number(id));
      setOpenDetails(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionsListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('PROMOTION_AUTOMATION', 'Promotions automation'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsWrapper, {
    eventDisabled: advancedOfferModuleDisabled || isDisabledFeature
  }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleOpenDetails(null);
    }
  }, t('ADD_PROMOTION_ENTERPRISE', 'Add promotion enterprise')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    onSearch: onSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }))), /*#__PURE__*/_react.default.createElement(_EnterprisePromotionList.EnterprisePromotionList, _extends({}, props, {
    eventDisabled: advancedOfferModuleDisabled || isDisabledFeature,
    selectedPromotion: selectedPromotion,
    handleOpenDetails: handleOpenDetails
  }))), isDisabledFeature && /*#__PURE__*/_react.default.createElement(_DisabledFeatureAlert.DisabledFeatureAlert, null), openDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    defaultSideBarWidth: sideBarWidth,
    moveDistance: moveDistance,
    open: openDetails,
    onClose: function onClose() {
      return handleCloseDetails();
    }
  }, /*#__PURE__*/_react.default.createElement(_EnterprisePromotionDetails.EnterprisePromotionDetails, {
    sitesState: sitesState,
    businessesList: businessesList,
    paymethodsState: paymethodsState,
    promotion: selectedPromotion || {},
    promotionId: curPromotionId,
    promotionsList: promotionListState.promotions,
    handleSuccessUpdatePromotions: handleSuccessUpdatePromotions,
    handleSuccessAddPromotion: handleSuccessAddPromotion,
    handleSuccessDeletePromotion: handleSuccessDeletePromotion,
    setMoveDistance: setMoveDistance,
    setSideBarWidth: setSideBarWidth,
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
  }));
};
var EnterprisePromotionListing = exports.EnterprisePromotionListing = function EnterprisePromotionListing(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var enterpisePromotionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: EnterprisePromotionListingUI,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.EnterprisePromotionList, enterpisePromotionsProps);
};