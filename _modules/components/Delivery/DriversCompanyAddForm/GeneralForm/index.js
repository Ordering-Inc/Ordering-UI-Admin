"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneralForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../../styles");
var _constants = require("../../../../config/constants");
var _reactHookForm = require("react-hook-form");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var GeneralForm = function GeneralForm(props) {
  var _changesState$name, _changesState$limit, _changesState$address;
  var changesState = props.changesState,
    handleChangesState = props.handleChangesState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useFormContext = (0, _reactHookForm.useFormContext)(),
    register = _useFormContext.register;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    timezoneSearchValue = _useState2[0],
    setTimezoneSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    timezonesOptions = _useState4[0],
    setTimezonesOptions = _useState4[1];
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('GENERAL', 'General')), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    defaultValue: (_changesState$name = changesState === null || changesState === void 0 ? void 0 : changesState.name) !== null && _changesState$name !== void 0 ? _changesState$name : '',
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
    defaultValue: (_changesState$limit = changesState === null || changesState === void 0 ? void 0 : changesState.limit) !== null && _changesState$limit !== void 0 ? _changesState$limit : '',
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
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_PRIORITY', 'Select priority'),
    defaultValue: changesState === null || changesState === void 0 ? void 0 : changesState.priority,
    options: priorityOptions,
    onChange: function onChange(val) {
      return handleChangesState('priority', val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    isTimezone: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('TIMEZONE', 'Timezone')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_TIMEZONE', 'Select a timezone'),
    defaultValue: changesState === null || changesState === void 0 ? void 0 : changesState.timezone,
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
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('ADDRESS', 'Address')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "address",
    defaultValue: (_changesState$address = changesState === null || changesState === void 0 ? void 0 : changesState.address) !== null && _changesState$address !== void 0 ? _changesState$address : '',
    placeholder: t('ADDRESS', 'Address'),
    onChange: function onChange(e) {
      return handleChangesState('address', e.target.value);
    },
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('ADDRESS', 'Address'))
    }),
    autoComplete: "off"
  }))));
};
exports.GeneralForm = GeneralForm;