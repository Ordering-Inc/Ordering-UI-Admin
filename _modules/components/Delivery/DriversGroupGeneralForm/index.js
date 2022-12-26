"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupGeneralForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactHookForm = require("react-hook-form");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _DriversGroupDrivers = require("../DriversGroupDrivers");
var _DriversGroupCompanies = require("../DriversGroupCompanies");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversGroupGeneralForm = function DriversGroupGeneralForm(props) {
  var _configState$configs, _configState$configs$, _ref, _changesState$name, _driversGroupState$dr, _changesState$adminis, _driversGroupState$dr2, _changesState$type, _driversGroupState$dr3, _driversGroupState$dr4, _changesState$priorit, _driversGroupState$dr5;
  var driversGroupState = props.driversGroupState,
    driversManagers = props.driversManagers,
    changesState = props.changesState,
    handleChangesState = props.handleChangesState,
    useAdvanced = props.useAdvanced,
    setUseAdvanced = props.setUseAdvanced,
    handleUpdateDriversGroup = props.handleUpdateDriversGroup,
    handleAddDriversGroup = props.handleAddDriversGroup,
    isTourOpen = props.isTourOpen,
    handleNextClick = props.handleNextClick;
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
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var autoAssignType = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.autoassign_type) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;
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
    if (!driversGroupState.driversGroup) return;
    handleUpdateDriversGroup(changes);
  };
  var onSubmit = function onSubmit() {
    if (driversGroupState.driversGroup) {
      if ((changesState === null || changesState === void 0 ? void 0 : changesState.drivers) === '[]') {
        setAlertState({
          open: true,
          content: [t('CHOOSE_LEAST_ONE_DRIVER', 'You must choose at least one driver.')]
        });
        return;
      }
      handleUpdateDriversGroup(changesState);
    } else {
      if (!(changesState !== null && changesState !== void 0 && changesState.administrator_id)) {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_REQUIRED', 'The manager is required.').replace('_attribute_', t('DRIVER_MANAGER', 'Driver manager'))]
        });
        return;
      }
      if (typeof (changesState === null || changesState === void 0 ? void 0 : changesState.priority) === 'undefined') {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_REQUIRED', 'The priority is required.').replace('_attribute_', t('PRIORITY', 'Priority'))]
        });
        return;
      }
      if ((changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 && !(changesState !== null && changesState !== void 0 && changesState.drivers)) {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_REQUIRED', 'The drivers is required.').replace('_attribute_', t('DRIVERS', 'Drivers'))]
        });
        return;
      }
      if ((changesState === null || changesState === void 0 ? void 0 : changesState.type) === 1 && !(changesState !== null && changesState !== void 0 && changesState.driver_companies)) {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_REQUIRED', 'The Driver company is required.').replace('_attribute_', t('DRIVER_COMPANY', 'Driver company'))]
        });
        return;
      }
      if (isTourOpen) {
        handleNextClick();
      } else {
        handleAddDriversGroup();
      }
    }
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
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    "data-tour": "tour_fill_group",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    value: (_ref = (_changesState$name = changesState === null || changesState === void 0 ? void 0 : changesState.name) !== null && _changesState$name !== void 0 ? _changesState$name : (_driversGroupState$dr = driversGroupState.driversGroup) === null || _driversGroupState$dr === void 0 ? void 0 : _driversGroupState$dr.name) !== null && _ref !== void 0 ? _ref : '',
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
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DRIVER_MANAGER', 'Driver manager')), /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    isSecondIcon: true,
    placeholder: t('SELECT_MANAGER', 'Select driver manager'),
    options: driversManagersOptions,
    defaultValue: (_changesState$adminis = changesState === null || changesState === void 0 ? void 0 : changesState.administrator_id) !== null && _changesState$adminis !== void 0 ? _changesState$adminis : (_driversGroupState$dr2 = driversGroupState.driversGroup) === null || _driversGroupState$dr2 === void 0 ? void 0 : _driversGroupState$dr2.administrator_id,
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
    defaultValue: (_changesState$type = changesState === null || changesState === void 0 ? void 0 : changesState.type) !== null && _changesState$type !== void 0 ? _changesState$type : (_driversGroupState$dr3 = driversGroupState.driversGroup) === null || _driversGroupState$dr3 === void 0 ? void 0 : _driversGroupState$dr3.type,
    onChange: function onChange(val) {
      return handleChangesState({
        type: val
      });
    }
  })), (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 'undefined' && ((_driversGroupState$dr4 = driversGroupState.driversGroup) === null || _driversGroupState$dr4 === void 0 ? void 0 : _driversGroupState$dr4.type) === 0 ? /*#__PURE__*/_react.default.createElement(_DriversGroupDrivers.DriversGroupDrivers, props) : /*#__PURE__*/_react.default.createElement(_DriversGroupCompanies.DriversGroupCompanies, props), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    isSecondIcon: true,
    placeholder: t('SELECT_PRIORITY', 'Select priority'),
    options: priorityOptions,
    defaultValue: (_changesState$priorit = changesState === null || changesState === void 0 ? void 0 : changesState.priority) !== null && _changesState$priorit !== void 0 ? _changesState$priorit : (_driversGroupState$dr5 = driversGroupState.driversGroup) === null || _driversGroupState$dr5 === void 0 ? void 0 : _driversGroupState$dr5.priority,
    onChange: function onChange(val) {
      return handleChangesState({
        priority: val
      });
    }
  })), driversGroupState.driversGroup && autoAssignType !== 'basic' && /*#__PURE__*/_react.default.createElement(_styles2.CheckboxContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: useAdvanced,
    onChange: function onChange(e) {
      return handleLogistic(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, t('USE_ADVANCED_LOGISTIC', 'Use advanced logistic'))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: Object.keys(changesState).length === 0
  }, isTourOpen ? t('NEXT', 'Next') : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, driversGroupState.driversGroup ? t('SAVE', 'Save') : t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
exports.DriversGroupGeneralForm = DriversGroupGeneralForm;