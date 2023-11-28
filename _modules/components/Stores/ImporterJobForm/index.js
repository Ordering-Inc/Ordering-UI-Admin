"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImporterJobForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles = require("../../../styles");
var _ImporterForm = require("../ImporterForm");
var _ImporterHelpContent = require("../ImporterHelpContent");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ImporterJobFormUI = function ImporterJobFormUI(props) {
  var _formState$changes, _formState$changes2, _formState$changes3, _formState$changes4;
  var selectedImporter = props.selectedImporter,
    formState = props.formState,
    fileState = props.fileState,
    handleChangeInput = props.handleChangeInput,
    handleUploadCsv = props.handleUploadCsv,
    handleCreateImporterJob = props.handleCreateImporterJob,
    onClose = props.onClose,
    handleOpenChildForm = props.handleOpenChildForm,
    handleCloseChildForm = props.handleCloseChildForm,
    openMappingDetails = props.openMappingDetails,
    setOpenMappingDetails = props.setOpenMappingDetails,
    handleSuccessUpdateImporter = props.handleSuccessUpdateImporter;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var formMethods = (0, _reactHookForm.useForm)();
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openImporterHelp = _useState4[0],
    setOpenImporterHelp = _useState4[1];
  var headerCsvInputRef = (0, _react.useRef)(null);
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hasImportedFile = _useState6[0],
    setImportedFile = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openAdvancedOptions = _useState8[0],
    setOpenAdvancedOptions = _useState8[1];
  var handleFiles = function handleFiles(files) {
    if (files.length === 1) {
      var _files$;
      var type = files[0].type;
      if (type !== 'application/vnd.ms-excel' && type !== 'text/csv') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_CSV', 'Only CSV can be accepted')]
        });
        return;
      }
      if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('MAXIMUM_SIZE', 'The maximum file size is 2 megabytes')]
        });
        return;
      }
      handleUploadCsv(files[0]);
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var onSubmit = function onSubmit() {
    if (Object.keys(formState.changes).length > 0 || hasImportedFile) {
      handleCreateImporterJob(selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.id);
    }
  };
  var handleGetTitle = function handleGetTitle(type) {
    var title = '';
    switch (type) {
      case 'sync_businesses':
        title = t('STORE_IMPORTER', 'Store importer');
        break;
      case 'sync_categories':
        title = t('CATEGORY_IMPORTER', 'Category importer');
        break;
      case 'sync_products':
        title = t('PRODUCT_IMPORTER', 'Product importer');
        break;
      case 'sync_extra_products':
        title = t('EXTRA_PRODUCTS', 'Extra products');
        break;
      case 'sync_extras':
        title = t('EXTRAS', 'Extras');
        break;
      case 'sync_extra_options':
        title = t('EXTRA_OPTIONS', 'Extra options');
        break;
      case 'sync_extra_option_suboptions':
        title = t('EXTRA_OPTION_SUBOPTIONS', 'extra option suboptions');
        break;
      case 'sync_multiple':
        title = t('MULTIPLE', 'Multiple');
        break;
      default:
        title = type;
        break;
    }
    return title;
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result3, _formState$result4;
    if ((_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error && Object.keys(formState.result).length > 0) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: formState === null || formState === void 0 || (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
      });
    }
    if (!((_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.error) && (_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && (_formState$result4 = _formState$result4.result) !== null && _formState$result4 !== void 0 && _formState$result4.id) {
      onClose();
    }
  }, [formState.result]);
  (0, _react.useEffect)(function () {
    if (fileState !== null && fileState !== void 0 && fileState.fileName) {
      setImportedFile(true);
    }
  }, [fileState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, handleGetTitle(selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.type)), /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SEPARATOR', 'Separator (;)')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "separator",
    type: "text",
    placeholder: ";",
    maxLength: "1",
    defaultValue: formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.separator,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('ENCLOSURE', 'Enclosure (“) ')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "enclosure",
    type: "text",
    placeholder: "\"",
    maxLength: "1",
    defaultValue: formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.enclosure,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('ESCAPE', 'Escape (|)')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "escape",
    type: "text",
    placeholder: "\\",
    maxLength: "1",
    defaultValue: formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.escape,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('START_LINE', 'Start line')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "start_line",
    type: "text",
    maxLength: "1",
    defaultValue: formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.start_line,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    onClick: function onClick() {
      return headerCsvInputRef.current.click();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files);
    },
    childRef: function childRef(e) {
      headerCsvInputRef.current = e;
    },
    accept: ".csv,.xlsx,.xls",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    className: "csvUpload"
  }, /*#__PURE__*/_react.default.createElement(_styles2.UploadCsvInputContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('UPLOAD_FILE', 'Upload file')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "CSVfile",
    placeholder: t('CSV', 'CSV'),
    autoComplete: "off",
    defaultValue: fileState === null || fileState === void 0 ? void 0 : fileState.fileName,
    pattern: "^.+\\.(xlsx|xls|csv)$",
    readOnly: true,
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_CSV_FILE_REQUIRED', 'CSV file is required')
    }),
    onChange: handleChangeInput
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    name: "upload",
    color: "primary",
    borderRadius: "7.6px",
    type: "button"
  }, t('UPLOAD', 'Upload')))))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "5px",
    disabled: !hasImportedFile && !(Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0) || (formState === null || formState === void 0 ? void 0 : formState.loading)
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : t('IMPORT', 'Import')), /*#__PURE__*/_react.default.createElement(_styles2.AdvancedOptionsButton, {
    onClick: function onClick() {
      handleOpenChildForm();
      setOpenAdvancedOptions(true);
    }
  }, t('ADVANCED_OPTION', 'Advanced Options')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('CREATE_IMPORTER_JOB', 'Create importer job'),
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "50%",
    height: "80vh",
    padding: "30px",
    title: "",
    open: openImporterHelp,
    onClose: function onClose() {
      return setOpenImporterHelp(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ImporterHelpContent.ImporterHelpContent, null)), openAdvancedOptions && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: openAdvancedOptions,
    defaultSideBarWidth: openMappingDetails ? 1000 : 500,
    moveDistance: openMappingDetails ? 500 : 0,
    onClose: function onClose() {
      handleCloseChildForm();
      setOpenMappingDetails(false);
      setOpenAdvancedOptions(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ImporterForm.ImporterForm, {
    isAdvanedOptions: true,
    selectedImporter: selectedImporter,
    openMappingDetails: openMappingDetails,
    setOpenMappingDetails: setOpenMappingDetails,
    handleSuccessUpdateImporter: handleSuccessUpdateImporter,
    onClose: function onClose() {
      handleCloseChildForm();
      setOpenMappingDetails(false);
      setOpenAdvancedOptions(false);
    }
  }))));
};
var ImporterJobForm = exports.ImporterJobForm = function ImporterJobForm(props) {
  var addCsvDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ImporterJobFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ImporterJobForm, addCsvDetailProps);
};