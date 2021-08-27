"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupGeneralForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../styles");

var _Confirm = require("../Confirm");

var _DriversGroupDrivers = require("../DriversGroupDrivers");

var _DriversGroupCompanies = require("../DriversGroupCompanies");

var _DriversGroupBusinesses = require("../DriversGroupBusinesses");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversGroupGeneralForm = function DriversGroupGeneralForm(props) {
  var _ref, _changesState$name, _changesState$adminis, _changesState$type, _changesState$priorit;

  var curDriversGroup = props.curDriversGroup,
      driversManagers = props.driversManagers,
      changesState = props.changesState,
      handleChangesState = props.handleChangesState,
      useAdvanced = props.useAdvanced,
      setUseAdvanced = props.setUseAdvanced,
      handleUpdateDriversGroup = props.handleUpdateDriversGroup,
      handleAddDriversGroup = props.handleAddDriversGroup;

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

  var handleLogistic = function handleLogistic(checked) {
    setUseAdvanced(checked);
    if (checked) return;
    var changes = {
      autoassign_amount_drivers: 0,
      orders_group_max_orders: 0
    };
    if (!curDriversGroup) return;
    handleUpdateDriversGroup(curDriversGroup.id, changes);
  };

  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    value: (_ref = (_changesState$name = changesState === null || changesState === void 0 ? void 0 : changesState.name) !== null && _changesState$name !== void 0 ? _changesState$name : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangesState({
        name: e.target.value
      });
    },
    placeholder: t('NAME', 'Name')
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DRIVER_MANAGER', 'Driver manager')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_MANAGER', 'Select driver manager'),
    options: driversManagersOptions,
    defaultValue: (_changesState$adminis = changesState === null || changesState === void 0 ? void 0 : changesState.administrator_id) !== null && _changesState$adminis !== void 0 ? _changesState$adminis : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.administrator_id,
    optionInnerMaxHeight: "60vh",
    onChange: function onChange(val) {
      return handleChangesState({
        administrator_id: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_TYPE', 'Select type'),
    options: typeOptions,
    defaultValue: (_changesState$type = changesState === null || changesState === void 0 ? void 0 : changesState.type) !== null && _changesState$type !== void 0 ? _changesState$type : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.type,
    onChange: function onChange(val) {
      return handleChangesState({
        type: val
      });
    }
  })), (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 'undefined' && (curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.type) === 0 ? /*#__PURE__*/_react.default.createElement(_DriversGroupDrivers.DriversGroupDrivers, props) : /*#__PURE__*/_react.default.createElement(_DriversGroupCompanies.DriversGroupCompanies, props), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_PRIORITY', 'Select priority'),
    options: priorityOptions,
    defaultValue: (_changesState$priorit = changesState === null || changesState === void 0 ? void 0 : changesState.priority) !== null && _changesState$priorit !== void 0 ? _changesState$priorit : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.priority,
    onChange: function onChange(val) {
      return handleChangesState({
        priority: val
      });
    }
  })), !curDriversGroup && /*#__PURE__*/_react.default.createElement(_DriversGroupBusinesses.DriversGroupBusinesses, props), curDriversGroup && /*#__PURE__*/_react.default.createElement(_styles2.CheckboxContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: useAdvanced,
    onChange: function onChange(e) {
      return handleLogistic(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, t('USE_ADVANCED_LOGISTIC', 'Use advanced logistic'))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: Object.keys(changesState).length === 0,
    onClick: function onClick() {
      return curDriversGroup ? handleUpdateDriversGroup(curDriversGroup.id, changesState) : handleAddDriversGroup();
    }
  }, curDriversGroup ? t('SAVE', 'Save') : t('ADD', 'Add')), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ORDERING', 'Ordering'),
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

exports.DriversGroupGeneralForm = DriversGroupGeneralForm;