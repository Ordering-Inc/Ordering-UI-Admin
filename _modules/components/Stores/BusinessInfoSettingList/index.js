"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInfoSettingList = void 0;
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
var BusinessInfoSettingList = exports.BusinessInfoSettingList = function BusinessInfoSettingList(props) {
  var selectedInfoItem = props.selectedInfoItem,
    handleSelectInfoItem = props.handleSelectInfoItem;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var listOptions = [{
    key: 'information',
    content: t('INFORMATION', 'Information')
  }, {
    key: 'owner',
    content: t('OWNER_ID', 'Owner')
  }, {
    key: 'categories',
    content: t('CATEGORIES', 'Categories')
  }, {
    key: 'location',
    content: t('LOCATION', 'Location')
  }, {
    key: 'images',
    content: t('IMAGES', 'Images')
  }, {
    key: 'videos',
    content: t('VIDEOS', 'Videos')
  }, {
    key: 'seo_options',
    content: t('SEO_OPTIONS', 'SEO Options')
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SettingListConatiner, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, listOptions.map(function (option) {
    return !((user === null || user === void 0 ? void 0 : user.level) === 2 && option.key === 'owner') && /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: option.key,
      active: selectedInfoItem === option.key,
      onClick: function onClick() {
        return handleSelectInfoItem(option.key);
      }
    }, option.content);
  }))));
};