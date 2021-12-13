"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductProperties = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Inputs = require("../../styles/Inputs");

var _Checkbox = require("../../styles/Checkbox");

var _reactHookForm = require("react-hook-form");

var _styles = require("./styles");

var _FirstSelect = require("../../styles/Select/FirstSelect");

var _Modal = require("../Modal");

var _Buttons = require("../../styles/Buttons");

var _Confirm = require("../Confirm");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductPropertiesUI = function ProductPropertiesUI(props) {
  var _ref2, _formTaxChanges$name, _ref3, _formTaxChanges$descr, _ref4, _formTaxChanges$rate, _formTaxChanges$type, _taxToEdit$type;

  var productState = props.productState,
      handleClickProperty = props.handleClickProperty,
      business = props.business,
      taxes = props.taxes,
      taxToEdit = props.taxToEdit,
      setTaxToEdit = props.setTaxToEdit,
      handleSaveTax = props.handleSaveTax,
      handleChangeTax = props.handleChangeTax,
      formTaxChanges = props.formTaxChanges,
      handleDeleteTax = props.handleDeleteTax,
      setAlertState = props.setAlertState,
      alertState = props.alertState,
      formState = props.formState,
      handleUpdateClick = props.handleUpdateClick;
  var formMethods = (0, _reactHookForm.useForm)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useState = (0, _react.useState)(productState === null || productState === void 0 ? void 0 : productState.inventoried),
      _useState2 = _slicedToArray(_useState, 2),
      isShowStock = _useState2[0],
      setIsShowStock = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      taxesOption = _useState4[0],
      setTaxesOption = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      taxSelected = _useState6[0],
      setTaxSelected = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      taxToDelete = _useState8[0],
      setTaxToDelete = _useState8[1];

  var estimatedPersons = [{
    value: null,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('NO_APPLY', 'No apply'))
  }].concat(_toConsumableArray(_toConsumableArray(Array(10)).map(function (item, i) {
    return {
      value: i + 1,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, i + 1)
    };
  })));

  var handleClickStock = function handleClickStock(e) {
    handleClickProperty('inventoried', e.target.checked);

    if (e.target.checked) {
      setIsShowStock(true);
    } else {
      setIsShowStock(false);
    }
  };

  var hanldeClickStockInput = function hanldeClickStockInput(value) {
    if (value === '') handleClickProperty('quantity', productState === null || productState === void 0 ? void 0 : productState.quantity);else handleClickProperty('quantity', value);
  };

  var handleChangeInput = function handleChangeInput(event) {
    if (event.target.value === '') handleClickProperty(event.target.name, productState[event.target.name]);else handleClickProperty(event.target.name, event.target.value);
  };

  var handleAddTax = function handleAddTax() {
    setTaxToEdit(true);
    handleChangeTax('type', 1);
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setTaxToDelete(null);
  };

  var getTaxes = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var inheritOption, addTaxOption, taxesOptions;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              inheritOption = {
                name: t('INHERIT_FROM_BUSINESS', 'Inherit from business'),
                value: 'inherit',
                content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " (", business.tax, "% ", business.tax_type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")"),
                showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " (", business.tax, "% ", business.tax_type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")")
              };
              addTaxOption = {
                name: t('ADD_NEW_TAX', 'Add new tax'),
                value: null,
                content: /*#__PURE__*/_react.default.createElement(_styles.OptionCenter, {
                  onClick: function onClick() {
                    return handleAddTax();
                  }
                }, t('ADD_NEW_TAX', 'Add new tax'))
              };
              taxesOptions = [inheritOption].concat(_toConsumableArray(Object.values(taxes).map(function (tax) {
                return {
                  value: tax.id,
                  name: tax.name,
                  content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, tax.name, " (", tax.rate, "% ", tax.type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")"),
                  showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, tax.name, " (", tax.rate, "% ", tax.type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")"),
                  editFunctionality: (user === null || user === void 0 ? void 0 : user.level) === 0,
                  deleteFunctionality: (user === null || user === void 0 ? void 0 : user.level) === 0,
                  rate: tax.rate,
                  type: tax.type,
                  description: tax.description
                };
              })), [addTaxOption]);
              setTaxesOption(taxesOptions);
              setTaxSelected(taxesOptions.find(function (tax) {
                return tax.value === (productState === null || productState === void 0 ? void 0 : productState.tax_id);
              }) || inheritOption);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getTaxes() {
      return _ref.apply(this, arguments);
    };
  }();

  var deleteTax = function deleteTax(id) {
    handleDeleteTax(id);
    closeAlert();
  };

  (0, _react.useEffect)(function () {
    if (taxes) {
      getTaxes();
    }
  }, [JSON.stringify(taxes)]);
  (0, _react.useEffect)(function () {
    if (taxToDelete) {
      setAlertState({
        open: true,
        content: t('ARE_YOUR_SURE_DELETE_TAX', 'Are you sure do you want delete this tax?')
      });
    }
  }, [taxToDelete]);
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
  return /*#__PURE__*/_react.default.createElement(_styles.PropertiesContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PROPERTIES', 'Properties')), /*#__PURE__*/_react.default.createElement(_styles.PropertyOption, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    defaultChecked: (productState === null || productState === void 0 ? void 0 : productState.featured) || false,
    onClick: function onClick(e) {
      return handleClickProperty('featured', e.target.checked);
    },
    id: "featured"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "featured"
  }, t('FEATURED', 'Featured'))), /*#__PURE__*/_react.default.createElement(_styles.PropertyOption, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    defaultChecked: (productState === null || productState === void 0 ? void 0 : productState.upselling) || false,
    onClick: function onClick(e) {
      return handleClickProperty('upselling', e.target.checked);
    },
    id: "upselling"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "upselling"
  }, t('UPSELLING', 'Upselling'))), /*#__PURE__*/_react.default.createElement(_styles.PropertyOption, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    defaultChecked: (productState === null || productState === void 0 ? void 0 : productState.inventoried) || false,
    onClick: function onClick(e) {
      return handleClickStock(e);
    },
    id: "inventoried"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "inventoried"
  }, t('INVENTORIED', 'Limit product quantity'))), isShowStock && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.LabelCustom, {
    htmlFor: "quantity"
  }, t('QUANTITY', 'Quantity')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "quantity",
    id: "quantity",
    placeholder: t('QUANTITY', 'Quantity'),
    defaultValue: parseInt(productState === null || productState === void 0 ? void 0 : productState.quantity),
    onChange: function onChange(e) {
      return hanldeClickStockInput(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.LabelCustom, {
    htmlFor: "sku"
  }, t('SKU', 'Stock Keeping Unit (SKU)')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "sku",
    id: "sku",
    placeholder: t('SKU', 'Stock Keeping Unit (SKU)'),
    defaultValue: parseInt(productState === null || productState === void 0 ? void 0 : productState.sku) !== -1 ? productState === null || productState === void 0 ? void 0 : productState.sku : '',
    onChange: function onChange(e) {
      var _e$target$value;

      return handleClickProperty('sku', (_e$target$value = e.target.value) !== null && _e$target$value !== void 0 ? _e$target$value : null);
    }
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: Object.keys(formState.changes).length === 0 || formState.loading,
    onClick: function onClick() {
      return handleUpdateClick();
    }
  }, t('SAVE', 'Save')), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: !!taxToEdit,
    width: "80%",
    padding: "30px",
    title: typeof taxToEdit === 'boolean' ? t('ADD_TAX', 'Add tax') : t('EDIT_TAX', 'Edit tax'),
    onClose: function onClose() {
      return setTaxToEdit(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.EditTaxContainer, {
    onSubmit: formMethods.handleSubmit(function () {
      return handleSaveTax(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.value);
    })
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_styles.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LabelCustom, {
    htmlFor: "name"
  }, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "name",
    id: "name",
    placeholder: t('NAME', 'Name'),
    defaultValue: (_ref2 = (_formTaxChanges$name = formTaxChanges === null || formTaxChanges === void 0 ? void 0 : formTaxChanges.name) !== null && _formTaxChanges$name !== void 0 ? _formTaxChanges$name : taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.name) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeTax('name', e.target.value);
    },
    ref: formMethods.register({
      required: t('TAX_NAME_REQUIRED', 'Tax name is required')
    })
  })), /*#__PURE__*/_react.default.createElement(_styles.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LabelCustom, {
    htmlFor: "description"
  }, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "description",
    id: "description",
    placeholder: t('DESCRIPTION', 'Description'),
    defaultValue: (_ref3 = (_formTaxChanges$descr = formTaxChanges === null || formTaxChanges === void 0 ? void 0 : formTaxChanges.description) !== null && _formTaxChanges$descr !== void 0 ? _formTaxChanges$descr : taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.description) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      return handleChangeTax('description', e.target.value);
    },
    ref: formMethods.register({
      required: t('TAX_DESCRIPTION_REQUIRED', 'Tax description is required')
    })
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_styles.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LabelCustom, {
    htmlFor: "rate"
  }, t('RATE', 'Rate')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "rate",
    id: "rate",
    placeholder: "0.00%",
    defaultValue: (_ref4 = (_formTaxChanges$rate = formTaxChanges === null || formTaxChanges === void 0 ? void 0 : formTaxChanges.rate) !== null && _formTaxChanges$rate !== void 0 ? _formTaxChanges$rate : taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.rate) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      return handleChangeTax('rate', e.target.value);
    },
    ref: formMethods.register({
      required: t('TAX_RATE_REQUIRED', 'Tax rate is required'),
      pattern: {
        value: /^-?\d+\.?\d*$/,
        message: t('ERROR_TAX_ID_INTEGER', 'The tax id must be an integer.')
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LabelCustom, {
    htmlFor: "type"
  }, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_styles.TypeSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    notAsync: true,
    placeholder: (_formTaxChanges$type = formTaxChanges === null || formTaxChanges === void 0 ? void 0 : formTaxChanges.type) !== null && _formTaxChanges$type !== void 0 ? _formTaxChanges$type : taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.type,
    defaultValue: (_taxToEdit$type = taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.type) !== null && _taxToEdit$type !== void 0 ? _taxToEdit$type : 1,
    options: [{
      value: 1,
      content: t('INCLUDED_ON_PRICE', 'Included on price'),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('INCLUDED_ON_PRICE', 'Included on price'))
    }, {
      value: 2,
      content: t('NOT_INCLUDED_ON_PRICE', 'Not included on price'),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('NOT_INCLUDED_ON_PRICE', 'Not included on price'))
    }],
    onChange: function onChange(val) {
      return handleChangeTax('type', val);
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "8px"
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundaryDark",
    borderRadius: "8px",
    onClick: function onClick() {
      return setTaxToEdit(null);
    }
  }, t('CLOSE', 'Close'))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: taxToDelete ? t('DELETE_TAX', 'Delete Tax') : t('ERROR'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return taxToDelete ? deleteTax(taxToDelete) : closeAlert();
    },
    closeOnBackdrop: false
  }));
};

var ProductProperties = function ProductProperties(props) {
  var productProperties = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductPropertiesUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductProperties, productProperties);
};

exports.ProductProperties = ProductProperties;