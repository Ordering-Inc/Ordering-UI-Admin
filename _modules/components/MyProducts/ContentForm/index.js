"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentForm = void 0;
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
var _InsertLink = require("../../Settings/InsertLink");
var _InsertVideo = require("../../Settings/InsertVideo");
var _InsertImage = require("../../Settings/InsertImage");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ContentFormUI = function ContentFormUI(props) {
  var formState = props.formState,
    imageListState = props.imageListState,
    insertImageState = props.insertImageState,
    handleInsertImage = props.handleInsertImage,
    handleDeleteImage = props.handleDeleteImage,
    handleChangeFormState = props.handleChangeFormState,
    handleSave = props.handleSave,
    selectedImageUrl = props.selectedImageUrl,
    setSelectedImageUrl = props.setSelectedImageUrl,
    handleDelete = props.handleDelete,
    title = props.title,
    content = props.content;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    openModal = _useState2[0],
    setOpenModal = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    editorContext = _useState4[0],
    setEditorContext = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    pageContent = _useState8[0],
    setPageContent = _useState8[1];
  var insertLink = function insertLink(context) {
    var ui = _jquery.default.summernote.ui;
    var button = ui.button({
      contents: '<i class="note-icon-link"/>',
      tooltip: 'link',
      class: 'note-btn',
      click: function click() {
        setEditorContext(context);
        context.invoke('editor.saveRange');
        setOpenModal('link');
      }
    });
    return button.render();
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
  var insertVideo = function insertVideo(context) {
    var ui = _jquery.default.summernote.ui;
    var button = ui.button({
      contents: '<i class="note-icon-video"/>',
      tooltip: 'video',
      class: 'note-btn',
      click: function click() {
        setEditorContext(context);
        context.invoke('editor.saveRange');
        setOpenModal('video');
      }
    });
    return button.render();
  };
  var handleCloseModal = function handleCloseModal() {
    setOpenModal(false);
    setEditorContext(null);
  };
  var handleSubmit = function handleSubmit() {
    var element = document.querySelector('.note-codeview-keep');
    if (element && element.classList.contains('active')) {
      var editValue = document.querySelector('.note-codable').value;
      handleSave(editValue);
      return;
    }
    handleSave();
  };
  (0, _react.useEffect)(function () {
    if (!(formState !== null && formState !== void 0 && formState.error)) return;
    setAlertState({
      open: true,
      content: formState === null || formState === void 0 ? void 0 : formState.error
    });
  }, [formState === null || formState === void 0 ? void 0 : formState.error]);
  (0, _react.useEffect)(function () {
    if (!pageContent) return;
    handleChangeFormState('body', pageContent);
  }, [pageContent]);
  var onInit = function onInit(note) {
    note.reset();
    if (!content) {
      note.insertText('');
      return;
    }
    var regex = /(\<\w*)((\s\/\>)|(.*\<\/\w*\>))/i;
    if ((content === null || content === void 0 ? void 0 : content.match(regex)) !== null) {
      note.replace(content);
    } else {
      note.insertText(content);
    }
  };
  (0, _react.useEffect)(function () {
    setPageContent(content);
  }, [content]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PageContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, title)), /*#__PURE__*/_react.default.createElement(_styles2.WrapperEditor, null, /*#__PURE__*/_react.default.createElement(_reactSummernote.default, {
    onInit: onInit,
    placeholder: t('START_NEW_PAGE'),
    options: {
      height: 350,
      fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
      toolbar: [['style', ['style']], ['font', ['bold', 'italic', 'underline', 'clear']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'paragraph']], ['table', ['table']], ['insert', ['insertLink', 'insertImage', 'insertVideo']], ['codeview', ['codeview']]],
      buttons: {
        insertLink: insertLink,
        insertImage: insertImage,
        insertVideo: insertVideo
      }
    },
    onChange: function onChange(content) {
      return setPageContent(content);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroupWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return handleSubmit();
    }
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "secundaryDark",
    onClick: function onClick() {
      return handleDelete();
    }
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
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
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "60%",
    open: openModal === 'video',
    onClose: function onClose() {
      return setOpenModal(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_InsertVideo.InsertVideo, {
    editorContext: editorContext,
    handleRestoreEditor: handleRestoreEditor,
    onClose: function onClose() {
      return handleCloseModal();
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
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
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('BUSINESS', 'Business'),
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
var ContentForm = exports.ContentForm = function ContentForm(props) {
  var contentFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ContentFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ContentForm, contentFormProps);
};