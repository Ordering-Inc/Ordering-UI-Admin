"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignWhatsapp = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CampaignWhatsapp = exports.CampaignWhatsapp = function CampaignWhatsapp(props) {
  var _contactState$changes3, _contactState$changes4, _contactState$changes5, _contactState$changes6;
  var isAddMode = props.isAddMode,
    contactState = props.contactState,
    handleChangeData = props.handleChangeData,
    handleUpdateContact = props.handleUpdateContact,
    handleAddCampaign = props.handleAddCampaign,
    formState = props.formState;
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
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleSaveWhatsApp = function handleSaveWhatsApp() {
    var _contactState$changes, _contactState$changes2;
    if (!(contactState !== null && contactState !== void 0 && (_contactState$changes = contactState.changes) !== null && _contactState$changes !== void 0 && (_contactState$changes = _contactState$changes.contact_data) !== null && _contactState$changes !== void 0 && _contactState$changes.title)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Title is required').replace('_attribute_', t('TITLE', 'Title'))
      });
      return;
    }
    if (!(contactState !== null && contactState !== void 0 && (_contactState$changes2 = contactState.changes) !== null && _contactState$changes2 !== void 0 && (_contactState$changes2 = _contactState$changes2.contact_data) !== null && _contactState$changes2 !== void 0 && _contactState$changes2.body)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Body is required').replace('_attribute_', t('BODY', 'Body'))
      });
      return;
    }
    if (isAddMode) {
      var _formState$changes;
      if ((formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 || (_formState$changes = _formState$changes.conditions) === null || _formState$changes === void 0 ? void 0 : _formState$changes.length) > 0) {
        var _formState$changes2;
        var _iterator = _createForOfIteratorHelper(formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.conditions),
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TITLE', 'Title')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "title",
    placeholder: t('TITLE', 'Title'),
    defaultValue: (contactState === null || contactState === void 0 || (_contactState$changes3 = contactState.changes) === null || _contactState$changes3 === void 0 || (_contactState$changes3 = _contactState$changes3.contact_data) === null || _contactState$changes3 === void 0 ? void 0 : _contactState$changes3.title) || '',
    onChange: handleChangeData
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MESSAGES', 'Messages')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "body",
    placeholder: t('WRITE_MESSAGE', 'Write a message'),
    defaultValue: (contactState === null || contactState === void 0 || (_contactState$changes4 = contactState.changes) === null || _contactState$changes4 === void 0 || (_contactState$changes4 = _contactState$changes4.contact_data) === null || _contactState$changes4 === void 0 ? void 0 : _contactState$changes4.body) || '',
    onChange: handleChangeData
  })), /*#__PURE__*/_react.default.createElement(_styles2.WhatsAppPreviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.WhatsAppPreviewLayout, null, /*#__PURE__*/_react.default.createElement(_styles2.WhatsAppContentHeader, {
    bgimage: theme.images.general.whatsappHeader
  }), /*#__PURE__*/_react.default.createElement(_styles2.WhatsAppContent, null, /*#__PURE__*/_react.default.createElement(_styles2.WhatsAppMessageContent, null, /*#__PURE__*/_react.default.createElement("h2", null, (contactState === null || contactState === void 0 || (_contactState$changes5 = contactState.changes) === null || _contactState$changes5 === void 0 || (_contactState$changes5 = _contactState$changes5.contact_data) === null || _contactState$changes5 === void 0 ? void 0 : _contactState$changes5.title) || ''), /*#__PURE__*/_react.default.createElement("p", null, (contactState === null || contactState === void 0 || (_contactState$changes6 = contactState.changes) === null || _contactState$changes6 === void 0 || (_contactState$changes6 = _contactState$changes6.contact_data) === null || _contactState$changes6 === void 0 ? void 0 : _contactState$changes6.body) || '')))))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleSaveWhatsApp();
    },
    disabled: contactState.loading
  }, isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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