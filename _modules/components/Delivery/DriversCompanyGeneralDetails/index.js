"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversCompanyGeneralDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _constants = require("../../../config/constants");
var _reactHookForm = require("react-hook-form");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DriversCompanyGeneralDetails = exports.DriversCompanyGeneralDetails = function DriversCompanyGeneralDetails(props) {
  var _ref, _changesState$name, _ref2, _changesState$limit, _changesState$priorit, _changesState$timezon, _ref3, _changesState$address;
  var actionState = props.actionState,
    changesState = props.changesState,
    driversCompany = props.driversCompany,
    handleChangesState = props.handleChangesState,
    handleUpdateDriversCompany = props.handleUpdateDriversCompany,
    handleAddDriversCompany = props.handleAddDriversCompany;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    timezoneSearchValue = _useState4[0],
    setTimezoneSearchValue = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    timezonesOptions = _useState6[0],
    setTimezonesOptions = _useState6[1];
  var priorityOptions = [{
    value: -1,
    content: t('LOW', 'Low')
  }, {
    value: 0,
    content: t('NORMAL', 'Normal')
  }, {
    value: 1,
    content: t('HIGH', 'High')
  }, {
    value: 2,
    content: t('URGENT', 'Urgent')
  }];
  var onSubmit = function onSubmit() {
    if (!(changesState !== null && changesState !== void 0 && changesState.timezone || driversCompany !== null && driversCompany !== void 0 && driversCompany.timezone)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('TIMEZONE', 'Timezone'))
      });
      return;
    }
    driversCompany ? handleUpdateDriversCompany() : handleAddDriversCompany();
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    var _timezonesOptions = _constants.timezones.filter(function (timezone) {
      return timezone.toLocaleLowerCase().includes(timezoneSearchValue.toLocaleLowerCase());
    }).map(function (timezone) {
      return {
        value: timezone,
        content: timezone
      };
    });
    setTimezonesOptions(_timezonesOptions);
  }, [timezoneSearchValue]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.GroupContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    value: (_ref = (_changesState$name = changesState === null || changesState === void 0 ? void 0 : changesState.name) !== null && _changesState$name !== void 0 ? _changesState$name : driversCompany === null || driversCompany === void 0 ? void 0 : driversCompany.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangesState('name', e.target.value);
    },
    placeholder: t('NAME', 'Name'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('NAME', 'Name'))
    }),
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('LIMIT', 'Limit')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "limit",
    value: (_ref2 = (_changesState$limit = changesState === null || changesState === void 0 ? void 0 : changesState.limit) !== null && _changesState$limit !== void 0 ? _changesState$limit : driversCompany === null || driversCompany === void 0 ? void 0 : driversCompany.limit) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangesState('limit', e.target.value);
    },
    placeholder: t('LIMIT', 'Limit'),
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.GroupContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_PRIORITY', 'Select priority'),
    defaultValue: (_changesState$priorit = changesState === null || changesState === void 0 ? void 0 : changesState.priority) !== null && _changesState$priorit !== void 0 ? _changesState$priorit : driversCompany === null || driversCompany === void 0 ? void 0 : driversCompany.priority,
    options: priorityOptions,
    onChange: function onChange(val) {
      return handleChangesState('priority', val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    isTimezone: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('TIMEZONE', 'Timezone')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_TIMEZONE', 'Select a timezone'),
    defaultValue: (_changesState$timezon = changesState === null || changesState === void 0 ? void 0 : changesState.timezone) !== null && _changesState$timezon !== void 0 ? _changesState$timezon : driversCompany === null || driversCompany === void 0 ? void 0 : driversCompany.timezone,
    options: timezonesOptions,
    onChange: function onChange(val) {
      return handleChangesState('timezone', val);
    },
    optionInnerMaxHeight: "60vh",
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: timezoneSearchValue,
    handleChangeSearch: setTimezoneSearchValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('ADDRESS', 'Address')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "address",
    value: (_ref3 = (_changesState$address = changesState === null || changesState === void 0 ? void 0 : changesState.address) !== null && _changesState$address !== void 0 ? _changesState$address : driversCompany === null || driversCompany === void 0 ? void 0 : driversCompany.address) !== null && _ref3 !== void 0 ? _ref3 : '',
    placeholder: t('ADDRESS', 'Address'),
    onChange: function onChange(e) {
      return handleChangesState('address', e.target.value);
    },
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('ADDRESS', 'Address'))
    }),
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: Object.keys(changesState).length === 0 || actionState.loading
  }, driversCompany ? t('SAVE', 'Save') : t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};