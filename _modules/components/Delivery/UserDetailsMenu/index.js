"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetailsMenu = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var UserDetailsMenu = exports.UserDetailsMenu = function UserDetailsMenu(props) {
  var currentMenuSelected = props.currentMenuSelected,
    handleChangeMenu = props.handleChangeMenu,
    isDriverMenu = props.isDriverMenu;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var menuItems = isDriverMenu ? [{
    key: 'profile',
    content: t('PROFILE', 'Profile')
  }, {
    key: 'driver_group',
    content: t('DRIVER_GROUP', 'Driver group')
  }, {
    key: 'saved_places',
    content: t('SAVED_PLACES', 'Saved places')
  }, {
    key: 'schedule',
    content: t('SCHEDULE', 'Schedule')
  }, {
    key: 'logs',
    content: t('LOGS', 'Logs')
  }, {
    key: 'advanced_logs',
    content: t('ADVANCED_LOGS', 'Advanced logs')
  }, {
    key: 'push_tokens',
    content: t('PUSH_TOKENS', 'Push tokens')
  }
  // { key: 'metafields', content: t('METAFIELDS', 'Metafields') },
  // { key: 'personalization', content: t('PERSONALIZATION', 'Personalization') }
  ] : [{
    key: 'profile',
    content: t('PROFILE', 'Profile')
  }, {
    key: 'saved_places',
    content: t('SAVED_PLACES', 'Saved places')
  }, {
    key: 'driver_group',
    content: t('DRIVER_GROUP', 'Driver group')
  }
  // { key: 'metafields', content: t('METAFIELDS', 'Metafields') },
  // { key: 'personalization', content: t('PERSONALIZATION', 'Personalization') }
  ];
  return /*#__PURE__*/_react.default.createElement(_styles.UserDetailsMenuContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, menuItems.map(function (menu) {
    return /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: menu.key,
      active: menu.key === currentMenuSelected,
      onClick: function onClick() {
        return handleChangeMenu(menu.key);
      }
    }, menu.content);
  })));
};