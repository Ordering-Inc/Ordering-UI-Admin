"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImporterForm = exports.ImporterFormUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _reactBootstrap = require("react-bootstrap");

var _BsPlusSquare = _interopRequireDefault(require("@meronex/icons/bs/BsPlusSquare"));

var _BsTrash = _interopRequireDefault(require("@meronex/icons/bs/BsTrash"));

var _useWindowSize2 = require("../../hooks/useWindowSize");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Confirm = require("../Confirm");

var _Buttons = require("../../styles/Buttons");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Inputs = require("../../styles/Inputs");

var _FirstSelect = require("../../styles/Select/FirstSelect");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ImporterFormUI = function ImporterFormUI(props) {
  var _mappingInputData$id, _mappingInputData$id2, _editState$mapping, _mappingInputData$ext, _mappingInputData$ext2, _editState$mapping2, _mappingInputData$ext3, _mappingInputData$ext4, _editState$mapping3;

  var formState = props.formState,
      handleChangeInput = props.handleChangeInput,
      handleChangeSelect = props.handleChangeSelect,
      handleCreateImporter = props.handleCreateImporter,
      handleChangeMappingInput = props.handleChangeMappingInput,
      handleEditState = props.handleEditState,
      addNewField = props.addNewField,
      removeField = props.removeField,
      fieldList = props.fieldList,
      onClose = props.onClose,
      selectedImporter = props.selectedImporter,
      clearImorterForm = props.clearImorterForm,
      setIsEdit = props.setIsEdit,
      editState = props.editState;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var formMethods = (0, _reactHookForm.useForm)();

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      importType = _useState2[0],
      setImportType = _useState2[1];

  var fieldMethods = (0, _reactHookForm.useForm)();

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      mappingInputData = _useState4[0],
      setMappingInpuData = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      alertState = _useState6[0],
      setAlertState = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      filedKey = _useState8[0],
      setFiledKey = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      filedValue = _useState10[0],
      setFiledValue = _useState10[1];

  var importypeOptions = [{
    value: 1,
    content: t('STORE', 'Store'),
    sync_name: 'sync_businesses',
    mapping_input_data: {
      id: {
        label: t('MAPPING_BUSINESS_ID', 'Business ID'),
        name: 'business_id'
      },
      external_id: {
        label: t('MAPPING_EXTERNAL_BUSINESS_ID', 'External business ID'),
        name: 'external_business_id'
      },
      external_key: {
        label: t('MAPPING_EXTERNAL_BUSINESS_KEY', 'External business key'),
        name: 'external_business_key'
      }
    }
  }, {
    value: 2,
    content: t('CATEGORY', 'Category'),
    sync_name: 'sync_categories',
    mapping_input_data: {
      id: {
        label: t('MAPPING_CATEGORY_ID', 'Category ID'),
        name: 'category_id'
      },
      external_id: {
        label: t('MAPPING_EXTERNAL_CATEGORY_ID', 'External category ID'),
        name: 'external_category_id'
      },
      external_key: {
        label: t('MAPPING_EXTERNAL_CATEGORY_KEY', 'External category key'),
        name: 'external_category_key'
      }
    }
  }, {
    value: 3,
    content: t('PRODUCT', 'Product'),
    sync_name: 'sync_products',
    mapping_input_data: {
      id: {
        label: t('MAPPING_PRODUCT_ID', 'Product ID'),
        name: 'product_id'
      },
      external_id: {
        label: t('MAPPING_EXTERNAL_PRODUCT_ID', 'External product ID'),
        name: 'external_product_id'
      },
      external_key: {
        label: t('MAPPING_EXTERNAL_PRODUCT_KEY', 'External product key'),
        name: 'external_product_key'
      }
    }
  }];

  var onSubmit = function onSubmit() {
    if (Object.keys(formState.changes).length > 0) {
      handleCreateImporter();
    }
  };

  var onNewFiledSubmit = function onNewFiledSubmit() {
    addNewField(filedKey, filedValue);
    document.getElementById('field-form').reset();
  };

  var handleSelectOption = function handleSelectOption(val) {
    setImportType(val);
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  (0, _react.useEffect)(function () {
    if (importType) {
      var _target = (importypeOptions === null || importypeOptions === void 0 ? void 0 : importypeOptions.filter(function (options) {
        return options.value === importType;
      }))[0];
      handleChangeSelect('type', _target.sync_name);
      setMappingInpuData(_target.mapping_input_data);
    }
  }, [importType]);
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
    clearImorterForm();

    if (Object.keys(selectedImporter).length === 0) {
      var _target = (importypeOptions === null || importypeOptions === void 0 ? void 0 : importypeOptions.filter(function (options) {
        return options.value === 1;
      }))[0];
      handleChangeSelect('type', _target.sync_name);
    }

    if (Object.keys(selectedImporter).length > 0) {
      setIsEdit(true);
      handleEditState(selectedImporter);
      var targetOption = importypeOptions.filter(function (option) {
        return option.sync_name === (selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.type);
      })[0];
      handleSelectOption(targetOption === null || targetOption === void 0 ? void 0 : targetOption.value);
    }
  }, [selectedImporter]);
  return /*#__PURE__*/_react.default.createElement(_styles.NewImporter, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('ADD_IMPORTER', 'Add importer')), /*#__PURE__*/_react.default.createElement(_styles.CloseButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    id: "importer-form"
  }, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "name",
    type: "text",
    placeholder: t('NAME', 'name'),
    defaultValue: editState === null || editState === void 0 ? void 0 : editState.name,
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_IMPORTER_NAME_REQUIRED', 'Importer name is required')
    }),
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "slug",
    placeholder: t('SLUG', 'slug'),
    defaultValue: editState === null || editState === void 0 ? void 0 : editState.slug,
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
      return handleSelectOption(value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", {
    style: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600'
    }
  }, t('MAPPING', 'Mapping')), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: '14px',
      lineHeight: '24px'
    }
  }, "CSV file example ", /*#__PURE__*/_react.default.createElement("a", {
    href: "www.example.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "www.example.com"))), Object.keys(mappingInputData).length !== 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, mappingInputData === null || mappingInputData === void 0 ? void 0 : (_mappingInputData$id = mappingInputData.id) === null || _mappingInputData$id === void 0 ? void 0 : _mappingInputData$id.label), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: mappingInputData === null || mappingInputData === void 0 ? void 0 : (_mappingInputData$id2 = mappingInputData.id) === null || _mappingInputData$id2 === void 0 ? void 0 : _mappingInputData$id2.name,
    type: "number",
    placeholder: "0",
    defaultValue: (editState === null || editState === void 0 ? void 0 : (_editState$mapping = editState.mapping) === null || _editState$mapping === void 0 ? void 0 : _editState$mapping.id) || '',
    onChange: handleChangeMappingInput,
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_PRODUCT_ID_REQUIRED', 'Product Id is required')
    }),
    disabled: formState.loading,
    autoComplete: "off"
  }))), width > 767 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, mappingInputData === null || mappingInputData === void 0 ? void 0 : (_mappingInputData$ext = mappingInputData.external_id) === null || _mappingInputData$ext === void 0 ? void 0 : _mappingInputData$ext.label), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: mappingInputData === null || mappingInputData === void 0 ? void 0 : (_mappingInputData$ext2 = mappingInputData.external_id) === null || _mappingInputData$ext2 === void 0 ? void 0 : _mappingInputData$ext2.name,
    type: "number",
    placeholder: "0",
    defaultValue: (editState === null || editState === void 0 ? void 0 : (_editState$mapping2 = editState.mapping) === null || _editState$mapping2 === void 0 ? void 0 : _editState$mapping2.externalId) || '',
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, mappingInputData === null || mappingInputData === void 0 ? void 0 : (_mappingInputData$ext3 = mappingInputData.external_key) === null || _mappingInputData$ext3 === void 0 ? void 0 : _mappingInputData$ext3.label), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: mappingInputData === null || mappingInputData === void 0 ? void 0 : (_mappingInputData$ext4 = mappingInputData.external_key) === null || _mappingInputData$ext4 === void 0 ? void 0 : _mappingInputData$ext4.name,
    type: "text",
    placeholder: "0",
    defaultValue: (editState === null || editState === void 0 ? void 0 : (_editState$mapping3 = editState.mapping) === null || _editState$mapping3 === void 0 ? void 0 : _editState$mapping3.externalKey) || '',
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off"
  })))))), /*#__PURE__*/_react.default.createElement(_styles.FiledListWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, "Fields"), Object.keys(fieldList).length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.entries(fieldList).map(function (value, i) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
      key: i,
      style: {
        marginBottom: '15px'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, value[0])), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles.FieldValue, null, value[1]), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return removeField(value[0]);
      }
    }, /*#__PURE__*/_react.default.createElement(_BsTrash.default, null))))));
  })), /*#__PURE__*/_react.default.createElement(_styles.FieldAddForm, {
    onSubmit: fieldMethods.handleSubmit(onNewFiledSubmit),
    id: "field-form"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    style: {
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "key",
    type: "text",
    placeholder: t('NAME', 'name'),
    onChange: function onChange(e) {
      return setFiledKey(e.target.value);
    },
    ref: fieldMethods.register({
      required: t('VALIDATION_ERROR_FIELD_NAME_REQUIRED', 'Name is required')
    }),
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    style: {
      width: '49%'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.FieldRow, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "value",
    type: "number",
    placeholder: "0",
    onChange: function onChange(e) {
      return setFiledValue(e.target.value);
    },
    ref: fieldMethods.register({
      required: t('VALIDATION_ERROR_FIELD_VALUE_REQUIRED', 'Product Id is required')
    }),
    disabled: formState.loading,
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement(_BsPlusSquare.default, null)))))))), /*#__PURE__*/_react.default.createElement(_styles.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "5px",
    disabled: !(Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 1) || (formState === null || formState === void 0 ? void 0 : formState.loading),
    onClick: function onClick() {
      return onSubmit();
    }
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : Object.keys(editState).length > 0 ? t('EDIT', 'Edit') : t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  }));
};

exports.ImporterFormUI = ImporterFormUI;

var ImporterForm = function ImporterForm(props) {
  var addImporterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ImporterFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ImporterForm, addImporterProps);
};

exports.ImporterForm = ImporterForm;