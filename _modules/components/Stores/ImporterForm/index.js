"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImporterFormUI = exports.ImporterForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _reactBootstrap = require("react-bootstrap");
var _BsPlusSquare = _interopRequireDefault(require("@meronex/icons/bs/BsPlusSquare"));
var _BsTrash = _interopRequireDefault(require("@meronex/icons/bs/BsTrash"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _ChildMapplingList = require("../ChildMapplingList");
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
var ImporterFormUI = exports.ImporterFormUI = function ImporterFormUI(props) {
  var _importypeOptions$fin;
  var isAdvanedOptions = props.isAdvanedOptions,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleChangeSelect = props.handleChangeSelect,
    handleCreateImporter = props.handleCreateImporter,
    handleChangeMappingInput = props.handleChangeMappingInput,
    handleEditState = props.handleEditState,
    addNewField = props.addNewField,
    removeField = props.removeField,
    fieldList = props.fieldList,
    addNewMetaField = props.addNewMetaField,
    removeMetaField = props.removeMetaField,
    metafieldList = props.metafieldList,
    onClose = props.onClose,
    selectedImporter = props.selectedImporter,
    clearImorterForm = props.clearImorterForm,
    setIsEdit = props.setIsEdit,
    editState = props.editState,
    editImporter = props.editImporter,
    downloadCSV = props.downloadCSV,
    openMappingDetails = props.openMappingDetails,
    setOpenMappingDetails = props.setOpenMappingDetails,
    isMapping = props.isMapping,
    headerTitle = props.headerTitle,
    handleUpdateMultipleMapping = props.handleUpdateMultipleMapping,
    defaultImporter = props.defaultImporter,
    mappingState = props.mappingState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var formMethods = (0, _reactHookForm.useForm)();
  var fieldMethods = (0, _reactHookForm.useForm)();
  var metafieldMethods = (0, _reactHookForm.useForm)();
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    importType = _useState2[0],
    setImportType = _useState2[1];
  // const [mappingInputData, setMappingInpuData] = useState({})
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    filedKey = _useState6[0],
    setFiledKey = _useState6[1];
  var _useState7 = (0, _react.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    filedValue = _useState8[0],
    setFiledValue = _useState8[1];
  var _useState9 = (0, _react.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    metafiledKey = _useState10[0],
    setMetaFiledKey = _useState10[1];
  var _useState11 = (0, _react.useState)(),
    _useState12 = _slicedToArray(_useState11, 2),
    metafiledValue = _useState12[0],
    setMetaFiledValue = _useState12[1];
  var defaultImporterSlugs = ['sync_businesses_default', 'sync_categories_default', 'sync_products_default', 'sync_extras_default', 'sync_extra_options_default', 'sync_extra_option_suboptions_default', 'sync_extra_products_default', 'sync_full_menu_default'];
  var noAdvancedTypes = ['sync_extras', 'sync_extra_options', 'sync_extra_option_suboptions'];
  var isDefaultImporter = defaultImporterSlugs.includes(selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.slug) || defaultImporter;
  var importypeOptions = [{
    value: 1,
    content: t('STORE', 'Store'),
    sync_name: 'sync_businesses'
  }, {
    value: 2,
    content: t('CATEGORY', 'Category'),
    sync_name: 'sync_categories'
  }, {
    value: 3,
    content: t('PRODUCT', 'Product'),
    sync_name: 'sync_products'
  }, {
    value: 4,
    content: t('EXTRA_PRODUCTS', 'Extra products'),
    sync_name: 'sync_extra_products'
  }, {
    value: 5,
    content: t('EXTRAS', 'Extras'),
    sync_name: 'sync_extras'
  }, {
    value: 6,
    content: t('EXTRA_OPTIONS', 'Extra options'),
    sync_name: 'sync_extra_options'
  }, {
    value: 7,
    content: t('EXTRA_OPTION_SUBOPTIONS', 'extra option suboptions'),
    sync_name: 'sync_extra_option_suboptions'
  }, {
    value: 8,
    content: t('MULTIPLE', 'Multiple'),
    sync_name: 'sync_multiple'
  }];
  var onSubmit = function onSubmit() {
    if (Object.keys(formState.changes).length === 0) return;
    if (Object.keys(selectedImporter).length > 0) editImporter();else handleCreateImporter();
  };
  var onNewFiledSubmit = function onNewFiledSubmit() {
    addNewField(filedKey, filedValue);
    if (document.getElementById('field-form')) {
      document.getElementById('field-form').reset();
    }
  };
  var onNewMetaFiledSubmit = function onNewMetaFiledSubmit() {
    addNewMetaField(metafiledKey, metafiledValue);
    document.getElementById('meta-field-form').reset();
  };
  var handleSelectOption = function handleSelectOption(val) {
    if (!val) return;
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
      // setMappingInpuData(_target.mapping_input_data)
    }
  }, [importType]);
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
  return /*#__PURE__*/_react.default.createElement(_styles2.NewImporter, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, headerTitle ? /*#__PURE__*/_react.default.createElement(_styles2.Title, null, headerTitle) : /*#__PURE__*/_react.default.createElement(_styles2.Title, null, isAdvanedOptions ? t('ADVANCED_OPTION', 'Advanced Options') : selectedImporter !== null && selectedImporter !== void 0 && selectedImporter.id ? t('EDIT_IMPORTER', 'Edit importer') : t('ADD_IMPORTER', 'Add importer'))), /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    id: "importer-form"
  }, !isMapping && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    type: "text",
    placeholder: t('NAME', 'name'),
    defaultValue: editState === null || editState === void 0 ? void 0 : editState.name,
    onChange: handleChangeInput,
    disabled: formState.loading || isAdvanedOptions || isDefaultImporter,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "slug",
    placeholder: t('SLUG', 'slug'),
    defaultValue: editState === null || editState === void 0 ? void 0 : editState.slug,
    onChange: handleChangeInput,
    disabled: formState.loading || isAdvanedOptions || isDefaultImporter,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (e.which === 32) {
        e.preventDefault();
      }
    }
  }))), !isAdvanedOptions && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TYPE', 'Type')), isDefaultImporter ? /*#__PURE__*/_react.default.createElement(_styles.Input, {
    disabled: true,
    value: (_importypeOptions$fin = importypeOptions.find(function (option) {
      return option.sync_name === (selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.type);
    })) === null || _importypeOptions$fin === void 0 ? void 0 : _importypeOptions$fin.content
  }) : /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    name: "type",
    options: importypeOptions,
    defaultValue: importType,
    onChange: function onChange(value) {
      return handleSelectOption(value);
    }
  })), !isMapping && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", {
    style: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600'
    }
  }, t('MAPPING', 'Mapping')), Object.keys(selectedImporter).length > 0 && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: '14px',
      lineHeight: '24px'
    }
  }, t('CSV_FILE_EXAMPLE', 'CSV file example'), /*#__PURE__*/_react.default.createElement(_styles2.ExampleCSV, {
    onClick: function onClick() {
      return downloadCSV();
    }
  }, t('FILE_EXAMPLE_CSV', 'example.csv')))), importType !== 8 && !(isAdvanedOptions && noAdvancedTypes.includes(selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.type)) && /*#__PURE__*/_react.default.createElement(_styles2.MappingFields, {
    disabled: isDefaultImporter
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_BUSINESS_ID', 'Business ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "business_id",
    type: "number",
    min: 0,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['business_id']) || ''
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_EXTERNAL_BUSINESS_ID', 'External business ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "external_business_id",
    type: "number",
    min: 0,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['external_business_id']) || ''
  })))), (importType === 2 || importType === 3 || importType === 4) && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_CATEGORY_ID', 'Category ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "category_id",
    type: "number",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['category_id']) || ''
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_EXTERNAL_CATEGORY_ID', 'External category ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "external_category_id",
    type: "number",
    min: 0,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['external_category_id']) || ''
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null), " ", /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_EXTERNAL_PARENT_CATEGORY_ID', 'External parent category ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "external_parent_category_id",
    type: "number",
    min: 0,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['external_parent_category_id']) || ''
  })))), (importType === 3 || importType === 4) && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_PRODUCT_ID', 'Product ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "product_id",
    type: "number",
    min: 0,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['product_id']) || ''
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_EXTERNAL_PRODUCT_ID', 'External product ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "external_product_id",
    type: "number",
    min: 0,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['external_product_id']) || ''
  })))), (importType === 4 || importType === 5 || importType === 6 || importType === 7) && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_EXTRA_ID', 'Extra ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "extra_id",
    type: "number",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['extra_id']) || ''
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_EXTERNAL_EXTRA_ID', 'External extra ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "external_extra_id",
    type: "number",
    min: 0,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['external_extra_id']) || ''
  })))), (importType === 6 || importType === 7) && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_EXTRA_OPTION_ID', 'Extra option ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "extra_option_id",
    type: "number",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['extra_option_id']) || ''
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_EXTERNAL_EXTRA_OPTION_ID', 'External extra option ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "external_extra_option_id",
    type: "number",
    min: 0,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['external_extra_option_id']) || ''
  })))), importType === 7 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_EXTRA_OPTION_SUBOPTION_ID', 'Extra option suboption ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "extra_option_suboption_id",
    type: "number",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['extra_option_suboption_id']) || ''
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAPPING_EXTERNAL_EXTRA_OPTION_SUBOPTION_ID', 'External extra option suboption ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "external_extra_option_suboption_id",
    type: "number",
    min: 0,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: handleChangeMappingInput,
    disabled: formState.loading,
    autoComplete: "off",
    value: (mappingState === null || mappingState === void 0 ? void 0 : mappingState['external_extra_option_suboption_id']) || ''
  })))))), importType !== 8 && /*#__PURE__*/_react.default.createElement(_styles2.FiledListWrapper, {
    disabled: isDefaultImporter
  }, /*#__PURE__*/_react.default.createElement("label", null, t('FIELDS', 'Fields')), Object.keys(fieldList).length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.entries(fieldList).map(function (value, i) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
      key: i,
      style: {
        marginBottom: '15px'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, value[0])), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldValue, null, value[1]), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return removeField(value[0]);
      }
    }, /*#__PURE__*/_react.default.createElement(_BsTrash.default, null))))));
  })), /*#__PURE__*/_react.default.createElement(_styles2.FieldAddForm, {
    onSubmit: fieldMethods.handleSubmit(onNewFiledSubmit),
    id: "field-form"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    style: {
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "key",
    type: "text",
    placeholder: t('NAME', 'name'),
    onChange: function onChange(e) {
      return setFiledKey(e.target.value);
    },
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    style: {
      width: '49%'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "value",
    type: "number",
    min: 0,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: function onChange(e) {
      return setFiledValue(e.target.value);
    },
    disabled: formState.loading,
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement(_BsPlusSquare.default, null)))))))), importType !== 8 && !(isAdvanedOptions && noAdvancedTypes.includes(selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.type)) && /*#__PURE__*/_react.default.createElement(_styles2.FiledListWrapper, {
    disabled: isDefaultImporter
  }, /*#__PURE__*/_react.default.createElement("label", null, t('META_FIELDS', 'MetaFields')), Object.keys(metafieldList) && Object.keys(metafieldList).length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.entries(metafieldList).map(function (value, i) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
      key: i,
      style: {
        marginBottom: '15px'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, value[0])), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldValue, null, value[1]), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return removeMetaField(value[0]);
      }
    }, /*#__PURE__*/_react.default.createElement(_BsTrash.default, null))))));
  })), /*#__PURE__*/_react.default.createElement(_styles2.FieldAddForm, {
    onSubmit: metafieldMethods.handleSubmit(onNewMetaFiledSubmit),
    id: "meta-field-form"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    style: {
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "key",
    type: "text",
    placeholder: t('NAME', 'name'),
    onChange: function onChange(e) {
      return setMetaFiledKey(e.target.value);
    },
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    style: {
      width: '49%'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "value",
    type: "number",
    min: 0,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    placeholder: "0",
    onChange: function onChange(e) {
      return setMetaFiledValue(e.target.value);
    },
    disabled: formState.loading,
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement(_BsPlusSquare.default, null)))))))), importType === 8 && /*#__PURE__*/_react.default.createElement(_ChildMapplingList.ChildMapplingList, {
    mappingList: (editState === null || editState === void 0 ? void 0 : editState.mapping) || [],
    importypeOptions: importypeOptions,
    openMappingDetails: openMappingDetails,
    setOpenMappingDetails: setOpenMappingDetails,
    handleUpdateMultipleMapping: handleUpdateMultipleMapping,
    defaultImporter: isDefaultImporter
  }), !isDefaultImporter && /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "5px",
    disabled: !(Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 1) || (formState === null || formState === void 0 ? void 0 : formState.loading),
    onClick: function onClick() {
      return onSubmit();
    }
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : Object.keys(selectedImporter).length > 0 ? t('EDIT', 'Edit') : t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
var ImporterForm = exports.ImporterForm = function ImporterForm(props) {
  var addImporterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ImporterFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ImporterForm, addImporterProps);
};