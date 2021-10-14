"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportCustomCSVForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Confirm = require("../Confirm");

var _utils = require("../../utils");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _FirstSelect = require("../../styles/Select/FirstSelect");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddCsvFormUI = function AddCsvFormUI(props) {
  var _formState$result5, _formState$result6, _formState$result6$re, _formState$changes, _formState$result7, _formState$result8, _formState$result8$re, _formState$changes2;

  var formState = props.formState,
      fileState = props.fileState,
      handleChangeInput = props.handleChangeInput,
      handleChangeSelect = props.handleChangeSelect,
      handleUploadCsv = props.handleUploadCsv,
      handleCreateImporter = props.handleCreateImporter,
      onClose = props.onClose;

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

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      importType = _useState4[0],
      setImportType = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      importSymbol = _useState6[0],
      setImportSymbol = _useState6[1];

  var importypeOptions = [{
    value: 1,
    content: t('STORE', 'Store'),
    sync_name: 'sync_businesses'
  }, {
    value: 2,
    content: t('PRODUCT', 'Product'),
    sync_name: 'sync_products'
  }, {
    value: 3,
    content: t('CATEGORY', 'Category'),
    sync_name: 'sync_categories'
  }];
  var importSymbolOptions = [{
    value: 1,
    content: t('SEPARATOR', 'Separator (;)')
  }, {
    value: 2,
    content: t('ENCLOSURE', 'Enclosure (“)')
  }, {
    value: 3,
    content: t('ESCAPE', 'Escape ( )')
  }, {
    value: 4,
    content: t('STARTLINE', 'Start line')
  }];

  var handleSelectOption = function handleSelectOption(val, selectname) {
    if (selectname === 'type') {
      setImportType(val);
    } else if (selectname === 'import_options') {
      setImportSymbol(val);
    }
  };

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
    if (Object.keys(formState.changes).length > 0) {
      handleCreateImporter();
    }
  };

  (0, _react.useEffect)(function () {
    if (importType) {
      handleChangeSelect('type', (importypeOptions === null || importypeOptions === void 0 ? void 0 : importypeOptions.filter(function (options) {
        return options.value === importType;
      }))[0].sync_name);
    }
  }, [importType]);
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.FormWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, t('IMPORT', 'Import')), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "name",
    type: "text",
    placeholder: t('NAME', 'name'),
    defaultValue: formState !== null && formState !== void 0 && (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.result ? formState === null || formState === void 0 ? void 0 : (_formState$result6 = formState.result) === null || _formState$result6 === void 0 ? void 0 : (_formState$result6$re = _formState$result6.result) === null || _formState$result6$re === void 0 ? void 0 : _formState$result6$re.name : formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name,
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_IMPORTER_NAME_REQUIRED', 'Importer name is required')
    }),
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "slug",
    placeholder: t('SLUG', 'slug'),
    defaultValue: formState !== null && formState !== void 0 && (_formState$result7 = formState.result) !== null && _formState$result7 !== void 0 && _formState$result7.result ? formState === null || formState === void 0 ? void 0 : (_formState$result8 = formState.result) === null || _formState$result8 === void 0 ? void 0 : (_formState$result8$re = _formState$result8.result) === null || _formState$result8$re === void 0 ? void 0 : _formState$result8$re.slug : formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.slug,
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_IMPORTER_SLUG_REQUIRED', 'Importer slug is required')
    }),
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    name: "type",
    options: importypeOptions,
    defaultValue: importType,
    onChange: function onChange(value) {
      return handleSelectOption(value, 'type');
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('IMPORT_OPTION', 'Import options')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: importSymbolOptions,
    defaultValue: importSymbol,
    onChange: function onChange(value) {
      return handleSelectOption(value, 'import_options');
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
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
  }, /*#__PURE__*/_react.default.createElement(_styles.UploadCsvInputContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('UPLOAD_FILE', 'Upload file')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "CSVfile",
    placeholder: t('CSV', 'CSV'),
    autoComplete: "off",
    defaultValue: fileState === null || fileState === void 0 ? void 0 : fileState.fileName,
    pattern: "^.+\\.(xlsx|xls|csv)$",
    readOnly: true,
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_CSV_FILE_REQUIRED', 'CSV file is required')
    })
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    name: "upload",
    color: "primary",
    borderRadius: "7.6px",
    type: "button"
  }, t('UPLOAD', 'Upload')))))), /*#__PURE__*/_react.default.createElement(_styles.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "5px",
    disabled: !(Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 1) || (formState === null || formState === void 0 ? void 0 : formState.loading)
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : t('IMPORT', 'Import')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('IMPORT', 'Import'),
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
  })));
};

var ImportCustomCSVForm = function ImportCustomCSVForm(props) {
  var addCsvDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AddCsvFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ImportCustomCSVForm, addCsvDetailProps);
};

exports.ImportCustomCSVForm = ImportCustomCSVForm;