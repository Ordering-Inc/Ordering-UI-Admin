"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWalletLevels = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("./styles");
var _LoyaltyLevelDetail = require("../LoyaltyLevelDetail");
var _styles2 = require("../../../styles");
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
var PointsWalletLevelsUI = function PointsWalletLevelsUI(props) {
  var _levelList$levels;
  var levelList = props.levelList,
    handleDeleteLevelList = props.handleDeleteLevelList,
    handleUpdateLevelList = props.handleUpdateLevelList,
    handleAddLevelList = props.handleAddLevelList,
    handleParentSidebarMove = props.handleParentSidebarMove;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    extraOpen = _useState4[0],
    setExtraOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedLevel = _useState6[0],
    setSelectedLevel = _useState6[1];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleOpenDetail = function handleOpenDetail(level, isInitialRender) {
    setSelectedLevel(level);
    setExtraOpen(true);
    if (width >= 1100) {
      handleParentSidebarMove(550);
    }
    if (level && !isInitialRender) {
      var id = query.get('id');
      history.replace("".concat(location.pathname, "?id=").concat(id, "&level=").concat(level.id));
    }
  };
  var handleCloseLevelDetail = function handleCloseLevelDetail() {
    setExtraOpen(false);
    setSelectedLevel(null);
    handleParentSidebarMove(0);
    var id = query.get('id');
    history.replace("".concat(location.pathname, "?id=").concat(id));
  };
  (0, _react.useEffect)(function () {
    if (width < 1100) {
      handleParentSidebarMove(0);
    } else {
      if (extraOpen) handleParentSidebarMove(550);
    }
  }, [width, extraOpen]);
  (0, _react.useEffect)(function () {
    if (levelList.loading) return;
    var levelId = query.get('level');
    if (levelId) {
      var initLevel = levelList === null || levelList === void 0 ? void 0 : levelList.levels.find(function (level) {
        return level.id === Number(levelId);
      });
      if (initLevel) {
        handleOpenDetail(initLevel, true);
      }
    }
  }, [levelList.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('LEVELS', 'Levels')), /*#__PURE__*/_react.default.createElement(_styles.LevelContainer, null, levelList !== null && levelList !== void 0 && levelList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.LevelItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      className: "d-flex h-100"
    })), /*#__PURE__*/_react.default.createElement(_styles.LevelName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (levelList === null || levelList === void 0 || (_levelList$levels = levelList.levels) === null || _levelList$levels === void 0 ? void 0 : _levelList$levels.length) > 0 && (levelList === null || levelList === void 0 ? void 0 : levelList.levels.map(function (level, i) {
    var _theme$images;
    return /*#__PURE__*/_react.default.createElement(_styles.LevelItemContainer, {
      key: i,
      onClick: function onClick() {
        return handleOpenDetail(level);
      },
      active: (level === null || level === void 0 ? void 0 : level.id) === (selectedLevel === null || selectedLevel === void 0 ? void 0 : selectedLevel.id)
    }, /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage((level === null || level === void 0 ? void 0 : level.image) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo))
    })), /*#__PURE__*/_react.default.createElement(_styles.LevelName, null, level === null || level === void 0 ? void 0 : level.name)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  })))), /*#__PURE__*/_react.default.createElement(_styles.LevelBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleOpenDetail({});
    }
  }, t('ADD_NEW_LEVEL', 'Add new level'))), extraOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1100 ? /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: extraOpen,
    defaultSideBarWidth: 550,
    sidebarId: "loyaltyLevel",
    onClose: handleCloseLevelDetail
  }, /*#__PURE__*/_react.default.createElement(_LoyaltyLevelDetail.LoyaltyLevelDetail, {
    level: selectedLevel,
    handleDeleteLevelList: handleDeleteLevelList,
    handleUpdateLevelList: handleUpdateLevelList,
    handleAddLevelList: handleAddLevelList,
    setSelectedLevel: setSelectedLevel,
    onClose: handleCloseLevelDetail
  })) : /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "90vh",
    padding: "0px",
    open: extraOpen,
    onClose: handleCloseLevelDetail
  }, /*#__PURE__*/_react.default.createElement(_LoyaltyLevelDetail.LoyaltyLevelDetail, {
    level: selectedLevel,
    handleDeleteLevelList: handleDeleteLevelList,
    handleUpdateLevelList: handleUpdateLevelList,
    handleAddLevelList: handleAddLevelList,
    setSelectedLevel: setSelectedLevel,
    onClose: handleCloseLevelDetail
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('LEVELS', 'Levels'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var PointsWalletLevels = exports.PointsWalletLevels = function PointsWalletLevels(props) {
  var pointsWalletLevelsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PointsWalletLevelsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.PointsWalletLevels, pointsWalletLevelsProps);
};