"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWalletLevels = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("./styles");
var _LoyaltyLevelDetail = require("../LoyaltyLevelDetail");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PointsWalletLevelsUI = function PointsWalletLevelsUI(props) {
  var _levelList$levels;
  var levelList = props.levelList,
    handleDeleteLevelList = props.handleDeleteLevelList,
    handleUpdateLevelList = props.handleUpdateLevelList,
    handleAddLevelList = props.handleAddLevelList,
    handleParentSidebarMove = props.handleParentSidebarMove;
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
  var handleOpenDetail = function handleOpenDetail(level) {
    setSelectedLevel(level);
    setExtraOpen(true);
    if (width >= 1100) {
      handleParentSidebarMove(550);
    }
  };
  var handleCloseLevelDetail = function handleCloseLevelDetail() {
    setExtraOpen(false);
    setSelectedLevel(null);
    handleParentSidebarMove(0);
  };
  (0, _react.useEffect)(function () {
    if (width < 1100) {
      handleParentSidebarMove(0);
    } else {
      if (extraOpen) handleParentSidebarMove(550);
    }
  }, [width, extraOpen]);
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
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (levelList === null || levelList === void 0 ? void 0 : (_levelList$levels = levelList.levels) === null || _levelList$levels === void 0 ? void 0 : _levelList$levels.length) > 0 ? levelList === null || levelList === void 0 ? void 0 : levelList.levels.map(function (level, i) {
    var _theme$images, _theme$images$dummies;
    return /*#__PURE__*/_react.default.createElement(_styles.LevelItemContainer, {
      key: i,
      onClick: function onClick() {
        return handleOpenDetail(level);
      },
      active: (level === null || level === void 0 ? void 0 : level.id) === (selectedLevel === null || selectedLevel === void 0 ? void 0 : selectedLevel.id)
    }, /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage((level === null || level === void 0 ? void 0 : level.image) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo))
    })), /*#__PURE__*/_react.default.createElement(_styles.LevelName, null, level === null || level === void 0 ? void 0 : level.name)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }) : /*#__PURE__*/_react.default.createElement(_styles.NotFoundSourceWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, null)))), /*#__PURE__*/_react.default.createElement(_styles.LevelBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.AddNewLevelButton, {
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
var PointsWalletLevels = function PointsWalletLevels(props) {
  var pointsWalletLevelsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PointsWalletLevelsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.PointsWalletLevels, pointsWalletLevelsProps);
};
exports.PointsWalletLevels = PointsWalletLevels;