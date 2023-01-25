"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWallet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _PointsWalletBusinessDetail = require("../PointsWalletBusinessDetail");
var _PointsWalletBusinessList = require("../PointsWalletBusinessList");
var _styles = require("./styles");
var _styles2 = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PointsWallet = function PointsWallet(props) {
  var handleParentSidebarMove = props.handleParentSidebarMove,
    pointWallet = props.pointWallet,
    handleUpdatePointsWallet = props.handleUpdatePointsWallet,
    moveDistance = props.moveDistance;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)('general'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOption = _useState2[0],
    setSelectedOption = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedBusinessList = _useState4[0],
    setSelectedBusinessList = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isExpand = _useState6[0],
    setIsExpand = _useState6[1];
  var walletOptionList = [{
    key: 'general',
    name: t('GENERAL', 'General')
  }, {
    key: 'business',
    name: t('BUSINESSES', 'Businesses')
  }];
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('loyaltyWallet');
    if (isExpand) element.style.width = '550px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    if (selectedOption !== 'business') handleParentSidebarMove(0);
  }, [selectedOption]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('POINTS_WALLET', 'Points wallet')), width > 576 && moveDistance === 0 && /*#__PURE__*/_react.default.createElement(_styles2.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null))), /*#__PURE__*/_react.default.createElement(_styles.Tabs, null, walletOptionList.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: option.key,
      active: selectedOption === option.key,
      onClick: function onClick() {
        return setSelectedOption(option.key);
      }
    }, option.name);
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: selectedOption === 'general' ? 'block' : 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(_PointsWalletBusinessDetail.PointsWalletBusinessDetail, {
    walletData: pointWallet,
    handleUpdatePointsWallet: handleUpdatePointsWallet,
    selectedBusinessList: selectedBusinessList
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: selectedOption === 'business' ? 'block' : 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(_PointsWalletBusinessList.PointsWalletBusinessList, _extends({}, props, {
    setSelectedBusinessList: setSelectedBusinessList,
    isCloseBusinessDetails: selectedOption !== 'business'
  }))));
};
exports.PointsWallet = PointsWallet;