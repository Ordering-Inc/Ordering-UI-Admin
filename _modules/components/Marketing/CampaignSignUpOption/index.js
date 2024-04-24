"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignSignUpOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CampaignSignUpOptionUI = function CampaignSignUpOptionUI(props) {
  var _ruleFormState$change, _ruleFormState$change2, _ruleFormState$change3, _ruleFormState$change4, _ruleFormState$change13, _ruleFormState$change14;
  var type = props.type,
    title = props.title,
    handleChangeItem = props.handleChangeItem,
    onClose = props.onClose,
    isAddMode = props.isAddMode,
    handleUpdateRule = props.handleUpdateRule,
    formState = props.formState,
    handleAddRule = props.handleAddRule,
    ruleFormState = props.ruleFormState,
    handleChangeDate = props.handleChangeDate,
    handleChangeOption = props.handleChangeOption,
    handleChangeDateTime = props.handleChangeDateTime;
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
  var defaultValue = ((_ruleFormState$change = ruleFormState.changes) === null || _ruleFormState$change === void 0 ? void 0 : _ruleFormState$change.max_date) && ((_ruleFormState$change2 = ruleFormState.changes) === null || _ruleFormState$change2 === void 0 ? void 0 : _ruleFormState$change2.date) && {
    from: (_ruleFormState$change3 = ruleFormState.changes) === null || _ruleFormState$change3 === void 0 ? void 0 : _ruleFormState$change3.date,
    to: (_ruleFormState$change4 = ruleFormState.changes) === null || _ruleFormState$change4 === void 0 ? void 0 : _ruleFormState$change4.max_date
  };
  var contentEndRef = (0, _react.useRef)(null);
  var optionList = [{
    key: '<',
    title: t('BEFORE', 'Before')
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleSaveRule = function handleSaveRule() {
    var _ruleFormState$change5, _ruleFormState$change6, _ruleFormState$change7, _ruleFormState$change8, _ruleFormState$change9;
    if (!((_ruleFormState$change5 = ruleFormState.changes) !== null && _ruleFormState$change5 !== void 0 && _ruleFormState$change5.date_condition)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Date condition is required').replace('_attribute_', t('DATE_CONDITION', 'Date condition'))
      });
      return;
    }
    if (!((_ruleFormState$change6 = ruleFormState.changes) !== null && _ruleFormState$change6 !== void 0 && _ruleFormState$change6.date)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Date is required').replace('_attribute_', t('DATE', 'Date'))
      });
      return;
    }
    if ((ruleFormState === null || ruleFormState === void 0 || (_ruleFormState$change7 = ruleFormState.changes) === null || _ruleFormState$change7 === void 0 ? void 0 : _ruleFormState$change7.date) === (ruleFormState === null || ruleFormState === void 0 || (_ruleFormState$change8 = ruleFormState.changes) === null || _ruleFormState$change8 === void 0 ? void 0 : _ruleFormState$change8.max_date)) {
      setAlertState({
        open: true,
        content: t('MAX_DATE_AFTER_DATE', 'The Max date must be a date after date')
      });
      return;
    }
    if (isAddMode) {
      var _formState$changes, _formState$changes2;
      // if (formState?.changes?.audience_type === 'fixed' &&
      //   (ruleFormState?.changes?.date_condition === '=' ||
      //     ruleFormState?.changes?.date_condition === '>')
      // ) {
      //   setAlertState({
      //     open: true,
      //     content: t('REQUIRED_BEFORE_OR_RANGE_OPTION_WHEN_FIXED', 'when audience type is Fixed, date condition is required Before or Date range option')
      //   })
      //   return
      // }
      var found = formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 || (_formState$changes = _formState$changes.conditions) === null || _formState$changes === void 0 ? void 0 : _formState$changes.find(function (item) {
        return item.type === type;
      });
      var updatedConditions = _toConsumableArray(formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.conditions);
      if (found) {
        var _formState$changes3;
        updatedConditions = formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.conditions.map(function (condition) {
          if (condition.type === type) {
            return _objectSpread({}, ruleFormState.changes);
          }
          return condition;
        });
      } else {
        updatedConditions.push(_objectSpread(_objectSpread({}, ruleFormState.changes), {}, {
          type: type
        }));
      }
      handleChangeItem('conditions', updatedConditions);
    } else if ((_ruleFormState$change9 = ruleFormState.changes) !== null && _ruleFormState$change9 !== void 0 && _ruleFormState$change9.id) {
      handleUpdateRule();
    } else {
      handleAddRule();
    }
    onClose && onClose();
  };
  var scrollDown = function scrollDown(e) {
    if (!e.target.closest('.ordering-calendar-btn')) return;
    var el = document.querySelector('.dialog-inner');
    if ((el === null || el === void 0 ? void 0 : el.scrollHeight) > (el === null || el === void 0 ? void 0 : el.clientHeight)) {
      var top = contentEndRef.current.offsetTop;
      el.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('click', scrollDown);
    return function () {
      return window.removeEventListener('click', scrollDown);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, title), optionList.map(function (option) {
    var _ruleFormState$change10, _ruleFormState$change11, _ruleFormState$change12;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: option.key
    }, /*#__PURE__*/_react.default.createElement(_styles2.RadioCheckWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick() {
        return handleChangeOption(option.key);
      }
    }, ((_ruleFormState$change10 = ruleFormState.changes) === null || _ruleFormState$change10 === void 0 ? void 0 : _ruleFormState$change10.date_condition) === option.key ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, option.title))), ((_ruleFormState$change11 = ruleFormState.changes) === null || _ruleFormState$change11 === void 0 ? void 0 : _ruleFormState$change11.date_condition) === option.key && /*#__PURE__*/_react.default.createElement(_styles2.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.RangeCalendar, {
      withTime: true,
      isLeft: true,
      isSingleDate: true,
      defaultValue: (_ruleFormState$change12 = ruleFormState.changes) === null || _ruleFormState$change12 === void 0 ? void 0 : _ruleFormState$change12.date,
      handleChangeDate: handleChangeDateTime
    })));
  }), /*#__PURE__*/_react.default.createElement(_styles2.RadioCheckWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return handleChangeOption('><');
    }
  }, ((_ruleFormState$change13 = ruleFormState.changes) === null || _ruleFormState$change13 === void 0 ? void 0 : _ruleFormState$change13.date_condition) === '><' ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('DATE_RANGE', 'Date range')))), ((_ruleFormState$change14 = ruleFormState.changes) === null || _ruleFormState$change14 === void 0 ? void 0 : _ruleFormState$change14.date_condition) === '><' && /*#__PURE__*/_react.default.createElement(_styles2.DateRangeWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.RangeCalendar, {
    handleChangeDate: handleChangeDate,
    defaultValue: defaultValue,
    isLeft: true
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: handleSaveRule
  }, t('DONE', 'Done'))), /*#__PURE__*/_react.default.createElement("div", {
    ref: contentEndRef
  }), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
var CampaignSignUpOption = exports.CampaignSignUpOption = function CampaignSignUpOption(props) {
  var campaignSignUpOptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CampaignSignUpOptionUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CampaignSignUpOption, campaignSignUpOptionProps);
};