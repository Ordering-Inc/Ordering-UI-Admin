"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideMenu = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SideMenu = exports.SideMenu = function SideMenu(props) {
  var _theme$images, _theme$images2, _theme$images3, _theme$images4;
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    active: window.location.pathname.includes('orders') || window.location.pathname === '/delivery-dashboard',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.ordersList,
    alt: "orders list"
  })), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    active: window.location.pathname === '/shop',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'shop'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.icons) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.shop,
    alt: "shop"
  })), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    active: window.location.pathname === '/chart',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'chart'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    src: theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.icons) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.pieChart,
    alt: "pie chart"
  })), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    active: window.location.pathname === '/setting',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'setting'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    src: theme === null || theme === void 0 || (_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.icons) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.setting,
    alt: "setting"
  }))));
};