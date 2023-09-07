"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneralForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactHookForm = require("react-hook-form");
var _styles = require("../../../../styles");
var _DriversGroupDrivers = require("../../DriversGroupDrivers");
var _DriversGroupCompanies = require("../../DriversGroupCompanies");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var GeneralForm = function GeneralForm(props) {
  var _changesState$name;
  var driversManagers = props.driversManagers,
    changesState = props.changesState,
    handleChangesState = props.handleChangesState,
    handleChangeType = props.handleChangeType;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useFormContext = (0, _reactHookForm.useFormContext)(),
    register = _useFormContext.register;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var typeOptions = [{
    value: 0,
    content: t('IN_HOUSE_DRIVERS', 'In house drivers')
  }, {
    value: 1,
    content: t('DRIVER_COMPANIES', 'Driver companies')
  }];
  var driversManagersOptions = driversManagers.map(function (manager) {
    return {
      value: manager.id,
      content: /*#__PURE__*/_react.default.createElement("div", null, manager === null || manager === void 0 ? void 0 : manager.name, " ", manager === null || manager === void 0 ? void 0 : manager.lastname)
    };
  });
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
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, t('GENERAL', 'General')), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    defaultValue: (_changesState$name = changesState === null || changesState === void 0 ? void 0 : changesState.name) !== null && _changesState$name !== void 0 ? _changesState$name : '',
    onChange: function onChange(e) {
      return handleChangesState({
        name: e.target.value
      });
    },
    placeholder: t('NAME', 'Name'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Project is required').replace('_attribute_', t('NAME', 'Name'))
    }),
    autoComplete: "off"
  })), (user === null || user === void 0 ? void 0 : user.level) !== 5 && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DRIVER_MANAGER', 'Driver manager')), /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    isSecondIcon: true,
    placeholder: t('SELECT_MANAGER', 'Select driver manager'),
    options: driversManagersOptions,
    defaultValue: changesState === null || changesState === void 0 ? void 0 : changesState.administrator_id,
    optionInnerMaxHeight: "60vh",
    onChange: function onChange(val) {
      return handleChangesState({
        administrator_id: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    isSecondIcon: true,
    placeholder: t('SELECT_TYPE', 'Select type'),
    options: typeOptions,
    defaultValue: changesState === null || changesState === void 0 ? void 0 : changesState.type,
    onChange: function onChange(val) {
      return handleChangeType(val);
    }
  })), (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 ? /*#__PURE__*/_react.default.createElement(_DriversGroupDrivers.DriversGroupDrivers, props) : /*#__PURE__*/_react.default.createElement(_DriversGroupCompanies.DriversGroupCompanies, props), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    isSecondIcon: true,
    placeholder: t('SELECT_PRIORITY', 'Select priority'),
    options: priorityOptions,
    defaultValue: changesState === null || changesState === void 0 ? void 0 : changesState.priority,
    onChange: function onChange(val) {
      return handleChangesState({
        priority: val
      });
    }
  })));
};
exports.GeneralForm = GeneralForm;