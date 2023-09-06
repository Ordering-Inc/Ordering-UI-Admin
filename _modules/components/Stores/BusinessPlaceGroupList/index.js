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
var BusinessPlaceGroupListUI = function BusinessPlaceGroupListUI(props) {
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
exports.BusinessPlaceGroupListUI = BusinessPlaceGroupListUI;
var BusinessPlaceGroupList = function BusinessPlaceGroupList(props) {
  var businessPlaceListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPlaceGroupListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessPlaceGroupList, businessPlaceListProps);
};
exports.BusinessPlaceGroupList = BusinessPlaceGroupList;