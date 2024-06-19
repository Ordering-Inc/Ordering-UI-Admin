"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenCartsContactInformation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _BisBusiness = _interopRequireDefault(require("@meronex/icons/bi/BisBusiness"));
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OpenCartsContactInformation = exports.OpenCartsContactInformation = function OpenCartsContactInformation(props) {
  var _cart$business, _cart$business2, _cart$business3, _cart$business4, _cart$business5, _cart$business8, _cart$business9, _cart$business10, _cart$business11, _cart$user, _cart$user2, _cart$user3, _cart$user4, _cart$user5, _cart$user6, _cart$user7, _cart$user8, _cart$user11, _cart$user12, _cart$user13, _cart$user14, _cart$user15, _cart$user16, _cart$user17, _cart$user18;
  var cart = props.cart;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, (user === null || user === void 0 ? void 0 : user.level) !== 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, cart !== null && cart !== void 0 && (_cart$business = cart.business) !== null && _cart$business !== void 0 && _cart$business.logo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(cart === null || cart === void 0 || (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.logo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, cart === null || cart === void 0 || (_cart$business3 = cart.business) === null || _cart$business3 === void 0 ? void 0 : _cart$business3.name), ((cart === null || cart === void 0 || (_cart$business4 = cart.business) === null || _cart$business4 === void 0 ? void 0 : _cart$business4.phone) || (cart === null || cart === void 0 || (_cart$business5 = cart.business) === null || _cart$business5 === void 0 ? void 0 : _cart$business5.cellphone)) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      var _cart$business6, _cart$business7;
      return window.open("tel:".concat((cart === null || cart === void 0 || (_cart$business6 = cart.business) === null || _cart$business6 === void 0 ? void 0 : _cart$business6.phone) || (cart === null || cart === void 0 || (_cart$business7 = cart.business) === null || _cart$business7 === void 0 ? void 0 : _cart$business7.cellphone)));
    },
    className: "btn-phone"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null)))), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CaretDownFill, {
    className: "down-arrow"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CutsomerDetail, null, /*#__PURE__*/_react.default.createElement("p", null, (cart === null || cart === void 0 || (_cart$business8 = cart.business) === null || _cart$business8 === void 0 ? void 0 : _cart$business8.phone) || (cart === null || cart === void 0 || (_cart$business9 = cart.business) === null || _cart$business9 === void 0 ? void 0 : _cart$business9.cellphone)), /*#__PURE__*/_react.default.createElement("p", null, cart === null || cart === void 0 || (_cart$business10 = cart.business) === null || _cart$business10 === void 0 ? void 0 : _cart$business10.email), /*#__PURE__*/_react.default.createElement("p", null, cart === null || cart === void 0 || (_cart$business11 = cart.business) === null || _cart$business11 === void 0 ? void 0 : _cart$business11.address)))), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, cart !== null && cart !== void 0 && (_cart$user = cart.user) !== null && _cart$user !== void 0 && _cart$user.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(cart === null || cart === void 0 || (_cart$user2 = cart.user) === null || _cart$user2 === void 0 ? void 0 : _cart$user2.photo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, cart === null || cart === void 0 || (_cart$user3 = cart.user) === null || _cart$user3 === void 0 ? void 0 : _cart$user3.name, " ", cart === null || cart === void 0 || (_cart$user4 = cart.user) === null || _cart$user4 === void 0 ? void 0 : _cart$user4.middle_name, " ", cart === null || cart === void 0 || (_cart$user5 = cart.user) === null || _cart$user5 === void 0 ? void 0 : _cart$user5.lastname, " ", cart === null || cart === void 0 || (_cart$user6 = cart.user) === null || _cart$user6 === void 0 ? void 0 : _cart$user6.second_lastname), ((cart === null || cart === void 0 || (_cart$user7 = cart.user) === null || _cart$user7 === void 0 ? void 0 : _cart$user7.cellphone) || (cart === null || cart === void 0 || (_cart$user8 = cart.user) === null || _cart$user8 === void 0 ? void 0 : _cart$user8.phone)) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      var _cart$user9, _cart$user10;
      return window.open("tel:".concat((cart === null || cart === void 0 || (_cart$user9 = cart.user) === null || _cart$user9 === void 0 ? void 0 : _cart$user9.cellphone) || (cart === null || cart === void 0 || (_cart$user10 = cart.user) === null || _cart$user10 === void 0 ? void 0 : _cart$user10.phone)));
    },
    className: "btn-phone"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null)))), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CaretDownFill, {
    className: "down-arrow"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CutsomerDetail, null, ((cart === null || cart === void 0 || (_cart$user11 = cart.user) === null || _cart$user11 === void 0 ? void 0 : _cart$user11.cellphone) || (cart === null || cart === void 0 || (_cart$user12 = cart.user) === null || _cart$user12 === void 0 ? void 0 : _cart$user12.phone)) && /*#__PURE__*/_react.default.createElement("p", null, (cart === null || cart === void 0 || (_cart$user13 = cart.user) === null || _cart$user13 === void 0 ? void 0 : _cart$user13.cellphone) || (cart === null || cart === void 0 || (_cart$user14 = cart.user) === null || _cart$user14 === void 0 ? void 0 : _cart$user14.phone)), (cart === null || cart === void 0 || (_cart$user15 = cart.user) === null || _cart$user15 === void 0 ? void 0 : _cart$user15.email) && /*#__PURE__*/_react.default.createElement("p", null, cart === null || cart === void 0 || (_cart$user16 = cart.user) === null || _cart$user16 === void 0 ? void 0 : _cart$user16.email), (cart === null || cart === void 0 || (_cart$user17 = cart.user) === null || _cart$user17 === void 0 ? void 0 : _cart$user17.address) && /*#__PURE__*/_react.default.createElement("p", null, cart === null || cart === void 0 || (_cart$user18 = cart.user) === null || _cart$user18 === void 0 ? void 0 : _cart$user18.address)))));
};
var ContextAwareToggle = function ContextAwareToggle(_ref) {
  var children = _ref.children,
    eventKey = _ref.eventKey,
    callback = _ref.callback;
  var currentEventKey = (0, _react.useContext)(_reactBootstrap.AccordionContext);
  var decoratedOnClick = (0, _reactBootstrap.useAccordionToggle)(eventKey, function () {
    return callback && callback(eventKey);
  });
  var isCurrentEventKey = currentEventKey === eventKey;
  var handleButtonClick = function handleButtonClick() {
    decoratedOnClick();
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.ToggleItemWrapper, {
    active: isCurrentEventKey,
    onClick: handleButtonClick
  }, children);
};