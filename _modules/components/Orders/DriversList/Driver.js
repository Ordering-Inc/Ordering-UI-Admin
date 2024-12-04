"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Driver = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));
var _styles2 = require("../../../styles");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DriverPropsAreEqual = function DriverPropsAreEqual(prevProps, nextProps) {
  var _prevProps$selectedDr, _nextProps$selectedDr;
  return JSON.stringify(prevProps.driver) === JSON.stringify(nextProps.driver) && (prevProps === null || prevProps === void 0 || (_prevProps$selectedDr = prevProps.selectedDriver) === null || _prevProps$selectedDr === void 0 ? void 0 : _prevProps$selectedDr.id) === (nextProps === null || nextProps === void 0 || (_nextProps$selectedDr = nextProps.selectedDriver) === null || _nextProps$selectedDr === void 0 ? void 0 : _nextProps$selectedDr.id);
};
var Driver = exports.Driver = /*#__PURE__*/_react.default.memo(function (props) {
  var _theme$images;
  var driver = props.driver,
    handleClickDriver = props.handleClickDriver,
    selectedDriver = props.selectedDriver,
    hidePhoto = props.hidePhoto,
    onOpenDriverOrdersDetail = props.onOpenDriverOrdersDetail,
    getStarWidth = props.getStarWidth,
    showCompressedInfo = props.showCompressedInfo;
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.DriverCard, {
    key: driver.id,
    onClick: function onClick(e) {
      return handleClickDriver(e, driver);
    },
    active: (selectedDriver === null || selectedDriver === void 0 ? void 0 : selectedDriver.id) === driver.id,
    showCompressedInfo: showCompressedInfo
  }, !hidePhoto && /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
    bgimage: optimizeImage((driver === null || driver === void 0 ? void 0 : driver.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.noDriver), 'h_50,c_limit')
  })), /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, {
    hidePhoto: hidePhoto,
    showCompressedInfo: showCompressedInfo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "driver-info-container"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.LinkButton, {
    className: "driver-orders",
    disabled: !(driver !== null && driver !== void 0 && driver.assigned_orders_count) || (driver === null || driver === void 0 ? void 0 : driver.assigned_orders_count) === 0,
    onClick: function onClick() {
      return onOpenDriverOrdersDetail(driver);
    }
  }, driver === null || driver === void 0 ? void 0 : driver.assigned_orders_count, " ", t('ORDERS', 'Orders')), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-red"
  }, (driver === null || driver === void 0 ? void 0 : driver.busy) && "(".concat(t('BUSY', 'Busy'), ")")))), (driver === null || driver === void 0 ? void 0 : driver.qualification) && /*#__PURE__*/_react.default.createElement(_styles.WrapperStar, {
    width: getStarWidth(driver === null || driver === void 0 ? void 0 : driver.qualification)
  })));
}, DriverPropsAreEqual);