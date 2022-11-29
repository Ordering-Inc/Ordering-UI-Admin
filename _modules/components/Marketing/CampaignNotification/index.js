"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignNotification = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _NotificationSetting = require("../../Settings/NotificationSetting");
var _styles = require("../../../styles");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CampaignNotification = function CampaignNotification(props) {
  var _contactState$changes5, _contactState$changes6, _contactState$changes7, _contactState$changes8, _contactState$changes9, _contactState$changes10, _contactState$changes11, _contactState$changes12;
  var isAddMode = props.isAddMode,
    contactState = props.contactState,
    handleChangeData = props.handleChangeData,
    handleUpdateContact = props.handleUpdateContact,
    handleAddCampaign = props.handleAddCampaign,
    formState = props.formState,
    categoryList = props.categoryList;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var generalList = ['onesignal_user_auth', 'onesignal_orderingapp_id', 'onesignal_businessapp_id', 'onesignal_deliveryapp_id', 'driver_close_distance', 'notification_toast'];
  var category = categoryList === null || categoryList === void 0 ? void 0 : categoryList.categories.find(function (item) {
    return item.key === 'notification';
  });
  var isEnableConfig = (0, _react.useMemo)(function () {
    var _category$configs;
    return category === null || category === void 0 ? void 0 : (_category$configs = category.configs) === null || _category$configs === void 0 ? void 0 : _category$configs.filter(function (config) {
      return generalList.includes(config.key);
    }).every(function (config) {
      return !!(config !== null && config !== void 0 && config.value);
    });
  }, [category]);
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleSaveNotification = function handleSaveNotification() {
    var _contactState$changes, _contactState$changes2, _contactState$changes3, _contactState$changes4;
    if (!(contactState !== null && contactState !== void 0 && (_contactState$changes = contactState.changes) !== null && _contactState$changes !== void 0 && (_contactState$changes2 = _contactState$changes.contact_data) !== null && _contactState$changes2 !== void 0 && _contactState$changes2.title)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Title is required').replace('_attribute_', t('TITLE', 'Title'))
      });
      return;
    }
    if (!(contactState !== null && contactState !== void 0 && (_contactState$changes3 = contactState.changes) !== null && _contactState$changes3 !== void 0 && (_contactState$changes4 = _contactState$changes3.contact_data) !== null && _contactState$changes4 !== void 0 && _contactState$changes4.body)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Body is required').replace('_attribute_', t('BODY', 'Body'))
      });
      return;
    }
    if (isAddMode) {
      var _formState$changes, _formState$changes$co;
      if ((formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : (_formState$changes$co = _formState$changes.conditions) === null || _formState$changes$co === void 0 ? void 0 : _formState$changes$co.length) > 0) {
        var _formState$changes2;
        var _iterator = _createForOfIteratorHelper(formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.conditions),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            if ((item === null || item === void 0 ? void 0 : item.date_condition) === '=' || (item === null || item === void 0 ? void 0 : item.date_condition) === '>') {
              setAlertState({
                open: true,
                content: t('REQUIRED_BEFORE_OR_RANGE_OPTION_WHEN_FIXED', 'when audience type is Fixed, date condition is required Before or Date range option')
              });
              return;
            }
            if ((item === null || item === void 0 ? void 0 : item.condition) === '=') {
              setAlertState({
                open: true,
                content: t('REQUIRED_MORE_OR_LESS_OPTION_WHEN_FIXED', 'when audience type is Fixed, order condition is required More or Less option')
              });
              return;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      handleAddCampaign();
    } else {
      handleUpdateContact();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isEnableConfig ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TITLE', 'Title')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "title",
    placeholder: t('TITLE', 'Title'),
    defaultValue: (contactState === null || contactState === void 0 ? void 0 : (_contactState$changes5 = contactState.changes) === null || _contactState$changes5 === void 0 ? void 0 : (_contactState$changes6 = _contactState$changes5.contact_data) === null || _contactState$changes6 === void 0 ? void 0 : _contactState$changes6.title) || '',
    onChange: handleChangeData
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MESSAGES', 'Messages')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "body",
    placeholder: t('WRITE_MESSAGE', 'Write a message'),
    defaultValue: (contactState === null || contactState === void 0 ? void 0 : (_contactState$changes7 = contactState.changes) === null || _contactState$changes7 === void 0 ? void 0 : (_contactState$changes8 = _contactState$changes7.contact_data) === null || _contactState$changes8 === void 0 ? void 0 : _contactState$changes8.body) || '',
    onChange: handleChangeData
  })), /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SmsContentLayout, {
    bgimage: theme.images.general.mobileHalfMask
  }, /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SmsPreviewContent, null, /*#__PURE__*/_react.default.createElement("h2", null, (contactState === null || contactState === void 0 ? void 0 : (_contactState$changes9 = contactState.changes) === null || _contactState$changes9 === void 0 ? void 0 : (_contactState$changes10 = _contactState$changes9.contact_data) === null || _contactState$changes10 === void 0 ? void 0 : _contactState$changes10.title) || ''), /*#__PURE__*/_react.default.createElement("p", null, (contactState === null || contactState === void 0 ? void 0 : (_contactState$changes11 = contactState.changes) === null || _contactState$changes11 === void 0 ? void 0 : (_contactState$changes12 = _contactState$changes11.contact_data) === null || _contactState$changes12 === void 0 ? void 0 : _contactState$changes12.body) || '')))))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleSaveNotification();
    },
    disabled: contactState.loading
  }, isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Description, null, /*#__PURE__*/_react.default.createElement("span", null, t('NOTIFICATION_SETTINGS_LINK_DESC', 'You need to complete One signal configuration first'))), category && /*#__PURE__*/_react.default.createElement(_NotificationSetting.NotificationSetting, _extends({}, props, {
    category: category,
    isCampaign: true
  })), /*#__PURE__*/_react.default.createElement(_styles2.BottomSpace, null)), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
exports.CampaignNotification = CampaignNotification;