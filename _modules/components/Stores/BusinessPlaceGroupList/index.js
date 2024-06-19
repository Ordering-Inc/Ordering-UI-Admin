"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPlaceGroupListUI = exports.BusinessPlaceGroupList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _BusinessPlaceGroup = require("../BusinessPlaceGroup");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessPlaceGroupListUI = exports.BusinessPlaceGroupListUI = function BusinessPlaceGroupListUI(props) {
  var _placeGroupList$place2, _placeGroupList$place3;
  var placeGroupList = props.placeGroupList,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    business = props.business,
    handleSuccessAddPlaceGroup = props.handleSuccessAddPlaceGroup,
    handleSuccessUpdatePlaceGroup = props.handleSuccessUpdatePlaceGroup,
    handleSuccessDeletePlaceGroup = props.handleSuccessDeletePlaceGroup,
    handleChangeEnabled = props.handleChangeEnabled,
    handleMultiChangeEnabled = props.handleMultiChangeEnabled,
    getMultiCheckStatus = props.getMultiCheckStatus;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openDetail = _useState2[0],
    setOpenDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedPlace = _useState4[0],
    setSelectedPlace = _useState4[1];
  var handleOpenDetail = function handleOpenDetail(placeGroup) {
    setOpenDetail(true);
    setSelectedPlace(placeGroup);
    setIsExtendExtraOpen(true);
  };
  var handleCloseDetail = function handleCloseDetail() {
    setOpenDetail(false);
    setSelectedPlace(null);
    setIsExtendExtraOpen(false);
    (0, _utils.removeQueryToUrl)(['place_group']);
  };
  var handleUpdateSelectedPlaceGroup = function handleUpdateSelectedPlaceGroup(placeGroup) {
    setSelectedPlace(placeGroup);
  };
  var handlePlaceClick = function handlePlaceClick(e, placeGroup, isInitialRender) {
    var _e$target;
    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.closest('.check-box')) return;
    handleOpenDetail(placeGroup);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        place_group: placeGroup.id
      });
    }
  };
  var handleCheckBoxChange = function handleCheckBoxChange(placeGroup) {
    handleChangeEnabled(placeGroup === null || placeGroup === void 0 ? void 0 : placeGroup.id, {
      enabled: !(placeGroup !== null && placeGroup !== void 0 && placeGroup.enabled)
    });
  };
  (0, _react.useEffect)(function () {
    if (placeGroupList !== null && placeGroupList !== void 0 && placeGroupList.loading) return;
    var placeGroupId = query.get('place_group');
    if (placeGroupId) {
      var _placeGroupList$place;
      var initPlaceGroup = placeGroupList === null || placeGroupList === void 0 || (_placeGroupList$place = placeGroupList.placeGroups) === null || _placeGroupList$place === void 0 ? void 0 : _placeGroupList$place.find(function (placeGroup) {
        return placeGroup.id === Number(placeGroupId);
      });
      if (initPlaceGroup) {
        handlePlaceClick(null, initPlaceGroup, true);
      }
    }
  }, [placeGroupList === null || placeGroupList === void 0 ? void 0 : placeGroupList.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.PlaceContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PLACES', 'Places')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleOpenDetail(null);
    }
  }, t('ADD_PLACES', 'Add places'))), placeGroupList !== null && placeGroupList !== void 0 && placeGroupList.loading ? /*#__PURE__*/_react.default.createElement(_styles2.Content, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.PlaceItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.Content, null, (placeGroupList === null || placeGroupList === void 0 || (_placeGroupList$place2 = placeGroupList.placeGroups) === null || _placeGroupList$place2 === void 0 ? void 0 : _placeGroupList$place2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.TableHead, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "check-box",
    onClick: function onClick() {
      return handleMultiChangeEnabled();
    }
  }, getMultiCheckStatus() ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), /*#__PURE__*/_react.default.createElement("label", null, t('PLACES', 'Places')))), placeGroupList === null || placeGroupList === void 0 || (_placeGroupList$place3 = placeGroupList.placeGroups) === null || _placeGroupList$place3 === void 0 ? void 0 : _placeGroupList$place3.map(function (placeGroup, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.PlaceItemContainer, {
      key: i,
      active: (selectedPlace === null || selectedPlace === void 0 ? void 0 : selectedPlace.id) === (placeGroup === null || placeGroup === void 0 ? void 0 : placeGroup.id),
      onClick: function onClick(e) {
        return handlePlaceClick(e, placeGroup);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "check-box",
      onClick: function onClick() {
        return handleCheckBoxChange(placeGroup);
      }
    }, placeGroup !== null && placeGroup !== void 0 && placeGroup.enabled ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
      className: "active"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), /*#__PURE__*/_react.default.createElement("label", null, placeGroup === null || placeGroup === void 0 ? void 0 : placeGroup.name)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }), /*#__PURE__*/_react.default.createElement(_styles2.AddBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenDetail(null);
    }
  }, t('ADD_PLACES', 'Add places'))))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openDetail && /*#__PURE__*/_react.default.createElement(_BusinessPlaceGroup.BusinessPlaceGroup, {
    businessId: business === null || business === void 0 ? void 0 : business.id,
    open: openDetail,
    onClose: handleCloseDetail,
    placeGroup: selectedPlace,
    handleSuccessAddPlaceGroup: handleSuccessAddPlaceGroup,
    handleSuccessUpdatePlaceGroup: handleSuccessUpdatePlaceGroup,
    handleSuccessDeletePlaceGroup: handleSuccessDeletePlaceGroup,
    handleUpdateSelectedPlaceGroup: handleUpdateSelectedPlaceGroup
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openDetail && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "760px",
    open: openDetail,
    onClose: function onClose() {
      return handleCloseDetail();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPlaceGroup.BusinessPlaceGroup, {
    businessId: business === null || business === void 0 ? void 0 : business.id,
    open: openDetail,
    onClose: handleCloseDetail,
    placeGroup: selectedPlace,
    handleSuccessAddPlaceGroup: handleSuccessAddPlaceGroup,
    handleSuccessUpdatePlaceGroup: handleSuccessUpdatePlaceGroup,
    handleSuccessDeletePlaceGroup: handleSuccessDeletePlaceGroup,
    handleUpdateSelectedPlaceGroup: handleUpdateSelectedPlaceGroup
  }))));
};
var BusinessPlaceGroupList = exports.BusinessPlaceGroupList = function BusinessPlaceGroupList(props) {
  var businessPlaceListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPlaceGroupListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessPlaceGroupList, businessPlaceListProps);
};