"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignEmail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _jquery = _interopRequireDefault(require("jquery"));
var _reactSummernote = _interopRequireDefault(require("react-summernote"));
require("react-summernote/dist/react-summernote.css");
require("bootstrap/js/dist/modal");
require("bootstrap/js/dist/dropdown");
require("bootstrap/js/dist/tooltip");
require("bootstrap/dist/css/bootstrap.css");
var _Shared = require("../../Shared");
var _InsertImage = require("../../Settings/InsertImage");
var _InsertLink = require("../../Settings/InsertLink");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CampaignEmailUI = function CampaignEmailUI(props) {
  var _contactState$changes3, _contactState$changes4, _contactState$changes5, _contactState$changes8, _contactState$changes9;
  var isAddMode = props.isAddMode,
    contactState = props.contactState,
    handleChangeData = props.handleChangeData,
    handleUpdateContact = props.handleUpdateContact,
    handleAddCampaign = props.handleAddCampaign,
    formState = props.formState,
    handleChangeContact = props.handleChangeContact,
    imageListState = props.imageListState,
    insertImageState = props.insertImageState,
    handleInsertImage = props.handleInsertImage,
    handleDeleteImage = props.handleDeleteImage,
    selectedImageUrl = props.selectedImageUrl,
    setSelectedImageUrl = props.setSelectedImageUrl,
    categoryList = props.categoryList;
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
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    openModal = _useState4[0],
    setOpenModal = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    editorContext = _useState6[0],
    setEditorContext = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    emailBody = _useState8[0],
    setEmailBody = _useState8[1];
  var _useState9 = (0, _react.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    category = _useState10[0],
    setCategory = _useState10[1];
  var generalList = ['email_smtp_use_default', 'email_smtp_host', 'email_smtp_username', 'email_smtp_password', 'email_smtp_encryption', 'email_smtp_port'];
  var isEnableConfig = (0, _react.useMemo)(function () {
    var _category$configs;
    return category === null || category === void 0 || (_category$configs = category.configs) === null || _category$configs === void 0 ? void 0 : _category$configs.filter(function (config) {
      return generalList.includes(config.key);
    }).every(function (config) {
      return !!(config !== null && config !== void 0 && config.value);
    });
  }, [category]);
  var handleCloseModal = function handleCloseModal() {
    setOpenModal(false);
    setEditorContext(null);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleSaveEmail = function handleSaveEmail() {
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
  var handleRestoreEditor = function handleRestoreEditor() {
    return editorContext.invoke('restoreRange');
  };
  var insertImage = function insertImage(context) {
    var ui = _jquery.default.summernote.ui;
    var button = ui.button({
      contents: '<i class="note-icon-picture"/>',
      tooltip: 'picture',
      class: 'note-btn',
      click: function click() {
        setEditorContext(context);
        context.invoke('editor.saveRange');
        setOpenModal('image');
      }
    });
    return button.render();
  };
  var insertLink = function insertLink(context) {
    var ui = _jquery.default.summernote.ui;
    var button = ui.button({
      contents: '<button style="background: #2C7BE5; border: none; font-size: 12px; color: white;">BUTTON</button>',
      tooltip: 'link-button',
      class: 'note-btn',
      click: function click() {
        setEditorContext(context);
        context.invoke('editor.saveRange');
        setOpenModal('link');
      }
    });
    return button.render();
  };
  (0, _react.useEffect)(function () {
    if (!emailBody) return;
    handleChangeContact('body', emailBody);
  }, [emailBody]);
  (0, _react.useEffect)(function () {
    var _categoryList$categor;
    if ((categoryList === null || categoryList === void 0 || (_categoryList$categor = categoryList.categories) === null || _categoryList$categor === void 0 ? void 0 : _categoryList$categor.length) > 0) {
      var selectedCategory = categoryList === null || categoryList === void 0 ? void 0 : categoryList.categories.find(function (item) {
        return item.key === 'email_configs';
      });
      var configs = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.configs.filter(function (config) {
        return generalList.includes(config.key);
      });
      setCategory(_objectSpread(_objectSpread({}, selectedCategory), {}, {
        configs: configs
      }));
    }
  }, [categoryList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, !isEnableConfig && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ContactWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('IF_YOU_NEED_HELP_WITH_SETUP_CONTACT_SUPPORT_TEAM', 'If you need help with your setup, contact our support team.')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return window.open('https://www.ordering.co/contact-ordering', '_blank');
    }
  }, t('TECH_SUPPORT', 'Tech Support'))), /*#__PURE__*/_react.default.createElement(_styles2.Description, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return window.open('https://support.ordering.co/hc/en-us/articles/360056355111-Simple-Mail-Transfer-Protocol-Set-up-SMTP-');
    }
  }, t('SMTP_SETTINGS_LINK_DESC', 'You need to complete SMTP configuration first')))), isEnableConfig && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TITLE', 'Title')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "title",
    placeholder: t('TITLE', 'Title'),
    value: (contactState === null || contactState === void 0 || (_contactState$changes3 = contactState.changes) === null || _contactState$changes3 === void 0 || (_contactState$changes3 = _contactState$changes3.contact_data) === null || _contactState$changes3 === void 0 ? void 0 : _contactState$changes3.title) || '',
    onChange: handleChangeData
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MESSAGES', 'Messages')), /*#__PURE__*/_react.default.createElement(_styles2.WrapperEditor, null, /*#__PURE__*/_react.default.createElement(_reactSummernote.default, {
    value: (_contactState$changes4 = contactState === null || contactState === void 0 || (_contactState$changes5 = contactState.changes) === null || _contactState$changes5 === void 0 || (_contactState$changes5 = _contactState$changes5.contact_data) === null || _contactState$changes5 === void 0 ? void 0 : _contactState$changes5.body) !== null && _contactState$changes4 !== void 0 ? _contactState$changes4 : '<p><br></p>',
    placeholder: t('EMAIL_CONTENT', 'Email content'),
    onInit: function onInit(_ref) {
      var _contactState$changes6, _contactState$changes7;
      var summernote = _ref.summernote;
      return summernote('code', (_contactState$changes6 = contactState === null || contactState === void 0 || (_contactState$changes7 = contactState.changes) === null || _contactState$changes7 === void 0 || (_contactState$changes7 = _contactState$changes7.contact_data) === null || _contactState$changes7 === void 0 ? void 0 : _contactState$changes7.body) !== null && _contactState$changes6 !== void 0 ? _contactState$changes6 : '<p><br></p>');
    },
    options: {
      height: 350,
      fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
      toolbar: [['style', ['style']], ['font', ['bold', 'italic', 'underline', 'clear']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'paragraph']], ['table', ['table']], ['insert', ['insertLink', 'insertImage']], ['codeview', ['codeview']]],
      buttons: {
        insertLink: insertLink,
        insertImage: insertImage
      },
      popover: {
        link: [['link', ['linkDialogShow']]]
      }
    },
    onChange: function onChange(content) {
      return setEmailBody(content);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.EmailPreviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.EmailPreviewHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.PointGroup, null, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null))), /*#__PURE__*/_react.default.createElement(_styles2.EmailPreviewContent, null, /*#__PURE__*/_react.default.createElement("h2", null, (contactState === null || contactState === void 0 || (_contactState$changes8 = contactState.changes) === null || _contactState$changes8 === void 0 || (_contactState$changes8 = _contactState$changes8.contact_data) === null || _contactState$changes8 === void 0 ? void 0 : _contactState$changes8.title) || ''), /*#__PURE__*/_react.default.createElement(_styles2.Preview, {
    dangerouslySetInnerHTML: {
      __html: (contactState === null || contactState === void 0 || (_contactState$changes9 = contactState.changes) === null || _contactState$changes9 === void 0 || (_contactState$changes9 = _contactState$changes9.contact_data) === null || _contactState$changes9 === void 0 ? void 0 : _contactState$changes9.body) || ''
    }
  }))))), isEnableConfig && /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleSaveEmail,
    disabled: contactState.loading
  }, isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "60%",
    open: openModal === 'image',
    onClose: function onClose() {
      return setOpenModal(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_InsertImage.InsertImage, {
    imageListState: imageListState,
    editorContext: editorContext,
    handleRestoreEditor: handleRestoreEditor,
    onClose: function onClose() {
      return handleCloseModal();
    },
    insertImageState: insertImageState,
    handleInsertImage: handleInsertImage,
    handleDeleteImage: handleDeleteImage,
    selectedImageUrl: selectedImageUrl,
    setSelectedImageUrl: setSelectedImageUrl
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "60%",
    open: openModal === 'link',
    onClose: function onClose() {
      return setOpenModal(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_InsertLink.InsertLink, {
    editorContext: editorContext,
    handleRestoreEditor: handleRestoreEditor,
    onClose: function onClose() {
      return handleCloseModal();
    },
    isLinkButton: true
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
var CampaignEmail = exports.CampaignEmail = function CampaignEmail(props) {
  var campaignEmailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CampaignEmailUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CampaignEmail, campaignEmailProps);
};