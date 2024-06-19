"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddBanner = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Businesses = require("./Businesses");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AddBanner = exports.AddBanner = function AddBanner(props) {
  var _changesState$changes;
  var changesState = props.changesState,
    handleChangeItem = props.handleChangeItem,
    handleAddBanner = props.handleAddBanner,
    actionState = props.actionState,
    businessList = props.businessList,
    selectedBusinessIds = props.selectedBusinessIds,
    handleSelectBusiness = props.handleSelectBusiness,
    handleSelectAllBusiness = props.handleSelectAllBusiness,
    defaultPosition = props.defaultPosition;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles2.AddBannerContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    defaultValue: ((_changesState$changes = changesState.changes) === null || _changesState$changes === void 0 ? void 0 : _changesState$changes.name) || '',
    onChange: function onChange(e) {
      return handleChangeItem({
        name: e.target.value
      });
    }
  })), (defaultPosition === 'web_business_page' || defaultPosition === 'app_business_page') && /*#__PURE__*/_react.default.createElement(_styles2.BusinessesWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESSES', 'Businesses')), /*#__PURE__*/_react.default.createElement(_Businesses.Businesses, {
    isAddMode: true,
    actionState: actionState,
    businessList: businessList,
    selectedBusinessIds: selectedBusinessIds,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusiness: handleSelectAllBusiness
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    disabled: Object.keys(changesState.changes).length === 0 || changesState.loading,
    onClick: function onClick() {
      return handleAddBanner();
    }
  }, t('ADD', 'Add')));
};