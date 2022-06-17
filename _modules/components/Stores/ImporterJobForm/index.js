"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImporterJobForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Shared = require("../../Shared");

var _utils = require("../../../utils");

var _styles = require("../../../styles");

var _ImporterForm = require("../ImporterForm");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      handleCloseChildForm = props.handleCloseChildForm;

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

  var headerCsvInputRef = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasImportedFile = _useState4[0],
      setImportedFile = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openAdvancedOptions = _useState6[0],
      setOpenAdvancedOptions = _useState6[1];

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
    var _formState$result, _formState$result3, _formState$result4, _formState$result4$re;

    if ((_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error && Object.keys(formState.result).length > 0) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: formState === null || formState === void 0 ? void 0 : (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
      });
    }

    if (!((_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.error) && (_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && (_formState$result4$re = _formState$result4.result) !== null && _formState$result4$re !== void 0 && _formState$result4$re.id) {
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
    defaultValue: formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.separator,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('ENCLOSURE', 'Enclosure (“) ')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "enclosure",
    type: "text",
    placeholder: "\"",
    maxLength: "1",
    defaultValue: formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.enclosure,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('ESCAPE', 'Escape (|)')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "escape",
    type: "text",
    placeholder: "\\",
    maxLength: "1",
    defaultValue: formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.escape,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('START_LINE', 'Start line')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "start_line",
    type: "text",
    maxLength: "1",
    defaultValue: formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.start_line,
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
  }), openAdvancedOptions && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: openAdvancedOptions,
    onClose: function onClose() {
      handleCloseChildForm();
      setOpenAdvancedOptions(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ImporterForm.ImporterForm, {
    isAdvanedOptions: true,
    selectedImporter: selectedImporter
  }))));
};

var ImporterJobForm = function ImporterJobForm(props) {
  var addCsvDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ImporterJobFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ImporterJobForm, addCsvDetailProps);
};

exports.ImporterJobForm = ImporterJobForm;