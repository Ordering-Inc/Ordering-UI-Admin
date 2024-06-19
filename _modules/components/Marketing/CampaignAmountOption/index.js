"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignAmountOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _reactNumericInput = _interopRequireDefault(require("react-numeric-input"));
var _styles2 = require("./styles");
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
var CampaignAmountOptionUI = function CampaignAmountOptionUI(props) {
  var type = props.type,
    ruleFormState = props.ruleFormState,
    handleChangeItem = props.handleChangeItem,
    onClose = props.onClose,
    handleChangeValue = props.handleChangeValue,
    isAddMode = props.isAddMode,
    handleUpdateRule = props.handleUpdateRule,
    formState = props.formState,
    handleAddRule = props.handleAddRule;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var ruleList = [{
    key: '>',
    name: t('MORE_THAN', 'More than')
  },
  // { key: '=', name: t('EXACTLY', 'Exactly') },
  {
    key: '<',
    name: t('LESS_THAN', 'Less than')
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleSaveRule = function handleSaveRule() {
    var _ruleFormState$change, _ruleFormState$change2, _ruleFormState$change3, _ruleFormState$change4;
    if (!((_ruleFormState$change = ruleFormState.changes) !== null && _ruleFormState$change !== void 0 && _ruleFormState$change.condition)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Condition is required').replace('_attribute_', t('CONDITION', 'Condition'))
      });
      return;
    }
    if (((_ruleFormState$change2 = ruleFormState.changes) === null || _ruleFormState$change2 === void 0 ? void 0 : _ruleFormState$change2.value) === null || isNaN((_ruleFormState$change3 = ruleFormState.changes) === null || _ruleFormState$change3 === void 0 ? void 0 : _ruleFormState$change3.value)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', t('VALUE', 'Value'))
      });
      return;
    }
    if (isAddMode) {
      var _formState$changes, _formState$changes2;
      var found = formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 || (_formState$changes = _formState$changes.conditions) === null || _formState$changes === void 0 ? void 0 : _formState$changes.find(function (item) {
        return item.type === type;
      });
      var updatedConditions = _toConsumableArray(formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.conditions);
      if (found) {
        var _formState$changes3;
        updatedConditions = formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.conditions.map(function (condition) {
          if (condition.type === type) {
            return _objectSpread(_objectSpread({}, condition), ruleFormState.changes);
          }
          return condition;
        });
      } else {
        updatedConditions.push(_objectSpread(_objectSpread({}, ruleFormState.changes), {}, {
          type: type
        }));
      }
      handleChangeItem('conditions', updatedConditions);
    } else if ((_ruleFormState$change4 = ruleFormState.changes) !== null && _ruleFormState$change4 !== void 0 && _ruleFormState$change4.id) {
      handleUpdateRule();
    } else {
      handleAddRule();
    }
    onClose && onClose();
  };
  var handleChangeInput = function handleChangeInput(key, value) {
    if (key === '<' && value === 0) {
      handleChangeValue('value', null);
      return;
    }
    handleChangeValue('value', value);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('AMOUNT_OF_ORDERS_OPTIONS', 'Amount of orders options')), /*#__PURE__*/_react.default.createElement(_styles2.SubTitle, null, t('RELATIVE', 'Relative')), ruleList.map(function (item, i) {
    var _ruleFormState$change5, _ruleFormState$change6, _ruleFormState$change7, _ruleFormState$change8;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.RadioCheckWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick() {
        return handleChangeValue('condition', item.key);
      }
    }, ((_ruleFormState$change5 = ruleFormState.changes) === null || _ruleFormState$change5 === void 0 ? void 0 : _ruleFormState$change5.condition) === item.key ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, item.name))), ((_ruleFormState$change6 = ruleFormState.changes) === null || _ruleFormState$change6 === void 0 ? void 0 : _ruleFormState$change6.condition) === item.key && /*#__PURE__*/_react.default.createElement(_styles2.DaysContent, null, /*#__PURE__*/_react.default.createElement(_reactNumericInput.default, {
      placeholder: "00",
      onKeyPress: function onKeyPress(e) {
        if (!/^[0-9]$/.test(e.key)) {
          e.preventDefault();
        }
      },
      value: (_ruleFormState$change7 = (_ruleFormState$change8 = ruleFormState.changes) === null || _ruleFormState$change8 === void 0 ? void 0 : _ruleFormState$change8.value) !== null && _ruleFormState$change7 !== void 0 ? _ruleFormState$change7 : '',
      onChange: function onChange(value) {
        return handleChangeInput(item.key, value);
      },
      min: item.key === '>' ? 0 : 1
    })));
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: handleSaveRule
  }, t('DONE', 'Done'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('CAMPAIGN', 'Campaign'),
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
var CampaignAmountOption = exports.CampaignAmountOption = function CampaignAmountOption(props) {
  var campaignAmountOptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CampaignAmountOptionUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CampaignAmountOption, campaignAmountOptionProps);
};