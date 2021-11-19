"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversCompanyDetailsForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../styles");

var _constants = require("../../config/constants");

var _reactHookForm = require("react-hook-form");

var _Confirm = require("../Confirm");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversCompanyDetailsForm = function DriversCompanyDetailsForm(props) {
  var _ref, _changesState$name, _ref2, _changesState$limit, _changesState$priorit, _changesState$timezon, _ref3, _changesState$address, _ref4, _changesState$webhook, _ref5, _changesState$webhook2, _ref6, _changesState$webhook3;

  var driversCompany = props.driversCompany,
      changesState = props.changesState,
      actionState = props.actionState,
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

  var timezonesOptions = _constants.timezones.map(function (timezone) {
    return {
      value: timezone,
      content: timezone
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

  var onSubmit = function onSubmit() {
    if (!(changesState !== null && changesState !== void 0 && changesState.timezone || driversCompany !== null && driversCompany !== void 0 && driversCompany.timezone)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('TIMEZONE', 'Timezone'))
      });
      return;
    }

    driversCompany ? handleUpdateDriversCompany(driversCompany.id, changesState) : handleAddDriversCompany();
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
  return /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVER_COMPANY_SETTINGS', 'Driver company settings'))), /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, {
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
    autoComplete: "off"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.GroupContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_PRIORITY', 'Select priority'),
    defaultValue: (_changesState$priorit = changesState === null || changesState === void 0 ? void 0 : changesState.priority) !== null && _changesState$priorit !== void 0 ? _changesState$priorit : driversCompany === null || driversCompany === void 0 ? void 0 : driversCompany.priority,
    options: priorityOptions,
    onChange: function onChange(val) {
      return handleChangesState('priority', val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TIMEZONE', 'Timezone')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_TIMEZONE', 'Select a timezone'),
    defaultValue: (_changesState$timezon = changesState === null || changesState === void 0 ? void 0 : changesState.timezone) !== null && _changesState$timezon !== void 0 ? _changesState$timezon : driversCompany === null || driversCompany === void 0 ? void 0 : driversCompany.timezone,
    options: timezonesOptions,
    onChange: function onChange(val) {
      return handleChangesState('timezone', val);
    },
    optionInnerMaxHeight: "60vh"
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
  })), /*#__PURE__*/_react.default.createElement(_styles2.SubTitle, null, t('WEBHOOK', 'Webhook')), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('WEBHOOK_NEW_ORDER', 'Webhook new order')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "webhook_new_order",
    value: (_ref4 = (_changesState$webhook = changesState === null || changesState === void 0 ? void 0 : changesState.webhook_new_order) !== null && _changesState$webhook !== void 0 ? _changesState$webhook : driversCompany === null || driversCompany === void 0 ? void 0 : driversCompany.webhook_new_order) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      return handleChangesState('webhook_new_order', e.target.value);
    },
    placeholder: t('WEBHOOK_NEW_ORDER', 'Webhook new order'),
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('WEBHOOK_CANCEL_REQUEST', 'Webhook cancel request')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "webhook_cancel_request",
    value: (_ref5 = (_changesState$webhook2 = changesState === null || changesState === void 0 ? void 0 : changesState.webhook_cancel_request) !== null && _changesState$webhook2 !== void 0 ? _changesState$webhook2 : driversCompany === null || driversCompany === void 0 ? void 0 : driversCompany.webhook_cancel_request) !== null && _ref5 !== void 0 ? _ref5 : '',
    onChange: function onChange(e) {
      return handleChangesState('webhook_cancel_request', e.target.value);
    },
    placeholder: t('WEBHOOK_CANCEL_REQUEST', 'Webhook cancel request'),
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('WEBHOOK_ORDER_STATUS_CHANGED', 'Webhook order status changed')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "webhook_order_status_changed",
    value: (_ref6 = (_changesState$webhook3 = changesState === null || changesState === void 0 ? void 0 : changesState.webhook_order_status_changed) !== null && _changesState$webhook3 !== void 0 ? _changesState$webhook3 : driversCompany === null || driversCompany === void 0 ? void 0 : driversCompany.webhook_order_status_changed) !== null && _ref6 !== void 0 ? _ref6 : '',
    onChange: function onChange(e) {
      return handleChangesState('webhook_order_status_changed', e.target.value);
    },
    placeholder: t('WEBHOOK_ORDER_STATUS_CHANGED', 'Webhook order status changed'),
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: Object.keys(changesState).length === 0 || actionState.loading
  }, driversCompany ? t('SAVE', 'Save') : t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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

exports.DriversCompanyDetailsForm = DriversCompanyDetailsForm;