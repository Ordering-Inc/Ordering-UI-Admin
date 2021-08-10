"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Buttons = require("../../styles/Buttons");

var _InfoShareContext = require("../../../../../contexts/InfoShareContext");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _HomeReportsUI = require("../HomeReportsUI");

var _HomeSingleTask = require("../HomeSingleTask");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HomeUI = function HomeUI(props) {
  var _taskList$data;

  var taskList = props.taskList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
      _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
      isCollapse = _useInfoShare2[0].isCollapse,
      handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isShowVideo = _useState2[0],
      setIsShowVideo = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowStore = _useState4[0],
      setIsShowStore = _useState4[1];

  return /*#__PURE__*/_react.default.createElement(_styles.HomeContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('HOME', 'Home'))), /*#__PURE__*/_react.default.createElement(_styles.WelcomeMsg, null, t('WELCOME_TO_ORDERING', 'Welcome to Ordering'), "!"), /*#__PURE__*/_react.default.createElement(_styles.GuideMsg, null, t('ORDERING_GUIDE_MSG', 'Our guide helps you to configure your Ordering products.')), /*#__PURE__*/_react.default.createElement(_styles.VideoAndReportsWrapper, {
    isRowDirection: isShowVideo
  }, /*#__PURE__*/_react.default.createElement(_styles.VideoOnBoardingWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.HideAndShowWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('VIDEO_ONBOARDING', 'Video onboarding')), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return setIsShowVideo(!isShowVideo);
    }
  }, isShowVideo ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.DashSquare, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusSquare, null))), isShowVideo && /*#__PURE__*/_react.default.createElement(_styles.VideoOnBoardingContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IframeWrapper, {
    dangerouslySetInnerHTML: {
      __html: '<iframe src="https://www.youtube-nocookie.com/embed/WmyiXqGPvgg" frameborder="0" loading="lazy" allowfullscreen />'
    }
  }))), /*#__PURE__*/_react.default.createElement(_HomeReportsUI.HomeReportsUI, _extends({}, props, {
    isShowVideo: isShowVideo
  }))), /*#__PURE__*/_react.default.createElement(_styles.FirstStoreToSellWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.HideAndShowWrapper, {
    className: "home-store-title"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('GET_YOUR_FIRST_STORE_READY_TO_SELL', 'Get your first store ready to sell.')), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return setIsShowStore(!isShowStore);
    }
  }, isShowStore ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.DashSquare, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusSquare, null))), isShowStore && /*#__PURE__*/_react.default.createElement(_styles.FirstStoreToSellContent, null, taskList !== null && taskList !== void 0 && taskList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_HomeSingleTask.HomeSingleTask, {
      key: i,
      isSkeleton: true
    });
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (taskList === null || taskList === void 0 ? void 0 : (_taskList$data = taskList.data) === null || _taskList$data === void 0 ? void 0 : _taskList$data.length) > 0 && (taskList === null || taskList === void 0 ? void 0 : taskList.data.map(function (task, i) {
    return /*#__PURE__*/_react.default.createElement(_HomeSingleTask.HomeSingleTask, _extends({}, props, {
      key: i,
      task: task
    }));
  }))), /*#__PURE__*/_react.default.createElement(_styles.OrderingHelpButton, null, /*#__PURE__*/_react.default.createElement("p", null, t('ORDERING_HELP_CONDITION_LINK', 'If you need anything else from your Ordering Team..')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "lightPrimary",
    borderRadius: "7.6px"
  }, t('CLICK_HERE', 'Click here'), "!")))));
};

var Home = function Home(props) {
  var homeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: HomeUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Home, homeProps);
};

exports.Home = Home;