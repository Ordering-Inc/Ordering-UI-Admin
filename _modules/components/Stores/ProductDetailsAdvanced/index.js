"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDetailsAdvanced = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _EditTaxManager = require("../EditTaxManager");

var _styles = require("../../../styles");

var _reactHookForm = require("react-hook-form");

var _styles2 = require("./styles");

var _FirstSelect = require("../../../styles/Select/FirstSelect");

var _Shared = require("../../Shared");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

var ProductDetailsAdvancedUI = function ProductDetailsAdvancedUI(props) {
  var _formState$changes2, _productState$estimat, _taxSelected$value, _fesSelected$value, _productState$cost_pr, _productState$cost_of, _productState$calorie, _productState$weight, _productState$weight_;

  var formState = props.formState,
      productState = props.productState,
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
      fees = props.fees,
      handleUpdateClick = props.handleUpdateClick;
  var formMethods = (0, _reactHookForm.useForm)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSku = _useState2[0],
      setIsSku = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowPriceByWeight = _useState4[0],
      setIsShowPriceByWeight = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      taxesOption = _useState6[0],
      setTaxesOption = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      feesOptions = _useState8[0],
      setFeesOptions = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      fesSelected = _useState10[0],
      setFeeSelected = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      taxSelected = _useState12[0],
      setTaxSelected = _useState12[1];

  var _useState13 = (0, _react.useState)({
    action: null,
    id: null
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      taxToDelete = _useState14[0],
      setTaxToDelete = _useState14[1];

  var _useState15 = (0, _react.useState)(),
      _useState16 = _slicedToArray(_useState15, 2),
      productPrice = _useState16[0],
      setProductPrice = _useState16[1];

  var _useState17 = (0, _react.useState)(0),
      _useState18 = _slicedToArray(_useState17, 2),
      unitPrice = _useState18[0],
      setunitPrice = _useState18[1];

  var _useState19 = (0, _react.useState)('grams'),
      _useState20 = _slicedToArray(_useState19, 2),
      pricePerUnit = _useState20[0],
      setPricePerUnit = _useState20[1];

  var estimatedPersons = [{
    value: 'no_apply',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('NO_APPLY', 'No apply')),
    showOnSelected: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('NO_APPLY', 'No apply'))
  }].concat(_toConsumableArray(_toConsumableArray(Array(10)).map(function (item, i) {
    return {
      value: i + 1,
      content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, i + 1)
    };
  })));
  var weightUnitOptions = [{
    value: 'grams',
    content: t('WEIGHT_UNIT_GRAM', 'grams'),
    ratio: 1
  }, {
    value: 'kg',
    content: t('WEIGHT_UNIT_KILOGRAM', 'kilograms'),
    ratio: 0.001
  }, {
    value: 'ounces',
    content: t('WEIGHT_UNIT_OUNCE', 'ounces'),
    ratio: 0.035274
  }, {
    value: 'pounds',
    content: t('WEIGHT_UNIT_POUND', 'pounds'),
    ratio: 0.00220462
  }];

  var _useState21 = (0, _react.useState)({
    productWeight: null,
    unitOfWeight: weightUnitOptions[0].ratio,
    perPriceOfWeight: weightUnitOptions[0].ratio
  }),
      _useState22 = _slicedToArray(_useState21, 2),
      inputs = _useState22[0],
      setInputs = _useState22[1];

  var getTaxOrFeeString = function getTaxOrFeeString(string) {
    return string === 'taxes' ? 'tax' : 'fee';
  };

  var handleAddTax = function handleAddTax(action) {
    setTaxToEdit({
      action: action,
      payload: true
    });
    if (action === 'taxes') handleChangeTax('type', 1);
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setTaxToDelete({
      action: null,
      payload: null
    });
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
                content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " (", business.tax, "% ", business.tax_type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")"),
                showOnSelected: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " (", business.tax, "% ", business.tax_type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")")
              };
              addTaxOption = {
                name: t('ADD_NEW_TAX', 'Add new tax'),
                value: null,
                content: /*#__PURE__*/_react.default.createElement(_styles2.OptionCenter, {
                  onClick: function onClick() {
                    return handleAddTax('taxes');
                  }
                }, t('ADD_NEW_TAX', 'Add new tax'))
              };
              taxesOptions = [inheritOption].concat(_toConsumableArray(Object.values(taxes).map(function (tax) {
                return {
                  value: tax.id,
                  name: tax.name,
                  content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, tax.name, " (", tax.rate, "% ", tax.type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")"),
                  showOnSelected: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, tax.name, " (", tax.rate, "% ", tax.type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")"),
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

  var getFees = function getFees() {
    var inheritOption = {
      name: t('INHERIT_FROM_BUSINESS', 'Inherit from business'),
      value: 'inherit',
      content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " (0$ + ", business.service_fee, "%)"),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " (0$ + ", business.service_fee, "%)")
    };
    var addFeeOption = {
      name: t('ADD_NEW_FEE', 'Add new fee'),
      value: null,
      content: /*#__PURE__*/_react.default.createElement(_styles2.OptionCenter, {
        onClick: function onClick() {
          return handleAddTax('fees');
        }
      }, t('ADD_NEW_FEE', 'Add new fee'))
    };
    var feesOptions = [inheritOption].concat(_toConsumableArray(Object.values(fees).map(function (fee) {
      return {
        value: fee.id,
        name: fee.name,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, fee.name, " (", parsePrice(fee.fixed), " + ", fee.percentage, "%)"),
        showOnSelected: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, fee.name, " (", parsePrice(fee.fixed), " + ", fee.percentage, "%)"),
        editFunctionality: (user === null || user === void 0 ? void 0 : user.level) === 0,
        deleteFunctionality: (user === null || user === void 0 ? void 0 : user.level) === 0,
        fixed: fee.fixed,
        percentage: fee.percentage,
        description: fee.description
      };
    })), [addFeeOption]);
    setFeesOptions(feesOptions);
    setFeeSelected(feesOptions.find(function (fee) {
      return fee.value === (productState === null || productState === void 0 ? void 0 : productState.fee_id);
    }) || inheritOption);
  };

  var deleteTax = function deleteTax(data) {
    handleDeleteTax(data.id, data.action);
    closeAlert();
  };

  var handleEnableSKU = function handleEnableSKU(enabled) {
    setIsSku(enabled);

    if (!enabled) {
      handleClickProperty('sku', -1);
    }
  };

  var handleEnablePriceWeight = function handleEnablePriceWeight(enabled) {
    setIsShowPriceByWeight(enabled);
    setunitPrice(0);

    if (!enabled) {
      handleClickProperty('weight', null);
    }
  };

  var handleChangeWeight = function handleChangeWeight(e) {
    handleClickProperty('weight', e.target.value);
    e.persist();
    setInputs(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        productWeight: e.target.value
      });
    });
  };

  var handleChangeUnit = function handleChangeUnit(val) {
    var _weightUnitOptions$fi;

    handleClickProperty('weight_unit', val !== null && val !== void 0 ? val : 'grams');
    setPricePerUnit(val);

    var _unitRatio = (_weightUnitOptions$fi = weightUnitOptions.filter(function (option) {
      return option.value === val;
    })[0]) === null || _weightUnitOptions$fi === void 0 ? void 0 : _weightUnitOptions$fi.ratio;

    setInputs(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        unitOfWeight: _unitRatio
      });
    });
  };

  var handleChangePricePerUnit = function handleChangePricePerUnit(val) {
    var _weightUnitOptions$fi2;

    setPricePerUnit(val);

    var _unitRatio = (_weightUnitOptions$fi2 = weightUnitOptions.filter(function (option) {
      return option.value === val;
    })[0]) === null || _weightUnitOptions$fi2 === void 0 ? void 0 : _weightUnitOptions$fi2.ratio;

    setInputs(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        perPriceOfWeight: _unitRatio
      });
    });
  };

  var getPerWeightPrice = function getPerWeightPrice() {
    var pricePerWeight = productPrice / inputs.productWeight / inputs.perPriceOfWeight * inputs.unitOfWeight;

    if (pricePerWeight === Number.POSITIVE_INFINITY || pricePerWeight === Number.NEGATIVE_INFINITY) {
      setunitPrice(0);
      return;
    }

    setunitPrice(pricePerWeight);
  };

  (0, _react.useEffect)(function () {
    if (taxes) getTaxes();
  }, [JSON.stringify(taxes)]);
  (0, _react.useEffect)(function () {
    if (fees) getFees();
  }, [JSON.stringify(fees)]);
  (0, _react.useEffect)(function () {
    if (taxToDelete.action) {
      setAlertState({
        open: true,
        content: t("ARE_YOUR_SURE_DELETE_".concat(getTaxOrFeeString(taxToDelete.action).toUpperCase()), "Are you sure do you want delete this ".concat(getTaxOrFeeString(taxToDelete.action), "?"))
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
  (0, _react.useEffect)(function () {
    if (parseInt(productState === null || productState === void 0 ? void 0 : productState.sku) === -1 || !(productState !== null && productState !== void 0 && productState.sku)) {
      setIsSku(false);
    } else {
      setIsSku(true);
    }
  }, [productState]);
  (0, _react.useEffect)(function () {
    if (productState !== null && productState !== void 0 && productState.weight) {
      setIsShowPriceByWeight(true);
    } else {
      setIsShowPriceByWeight(false);
    }
  }, [productState === null || productState === void 0 ? void 0 : productState.weight]);
  (0, _react.useEffect)(function () {
    var _formState$changes;

    if (formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.weight && !(productState !== null && productState !== void 0 && productState.weight_unit)) {
      handleClickProperty('weight_unit', 'grams');
    }
  }, [formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.weight]);
  (0, _react.useEffect)(function () {
    setProductPrice(productState === null || productState === void 0 ? void 0 : productState.price);

    if (productState !== null && productState !== void 0 && productState.weight && productState !== null && productState !== void 0 && productState.weight_unit) {
      var _weightUnitOptions$fi3;

      var _unitRatio = (_weightUnitOptions$fi3 = weightUnitOptions.filter(function (option) {
        return option.value === (productState === null || productState === void 0 ? void 0 : productState.weight_unit);
      })[0]) === null || _weightUnitOptions$fi3 === void 0 ? void 0 : _weightUnitOptions$fi3.ratio;

      setInputs(function (values) {
        return _objectSpread(_objectSpread({}, values), {}, {
          productWeight: productState === null || productState === void 0 ? void 0 : productState.weight,
          perPriceOfWeight: _unitRatio
        });
      });
      setPricePerUnit(productState === null || productState === void 0 ? void 0 : productState.weight_unit);
    }
  }, [productState]);
  (0, _react.useEffect)(function () {
    getPerWeightPrice();
  }, [inputs]);
  return /*#__PURE__*/_react.default.createElement(_styles2.PropertiesContainer, null, isSku && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "sku"
  }, "SKU"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "sku",
    id: "sku",
    placeholder: t('SKU', 'Stock Keeping Unit (SKU)'),
    defaultValue: parseInt(productState === null || productState === void 0 ? void 0 : productState.sku) !== -1 ? productState === null || productState === void 0 ? void 0 : productState.sku : '',
    onChange: function onChange(e) {
      var _e$target$value;

      return handleClickProperty('sku', (_e$target$value = e.target.value) !== null && _e$target$value !== void 0 ? _e$target$value : null);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "estimated"
  }, t('ESTIMATED_PERSON', 'Estimated person')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    notAsync: true,
    defaultValue: (_productState$estimat = productState === null || productState === void 0 ? void 0 : productState.estimated_person) !== null && _productState$estimat !== void 0 ? _productState$estimat : 'no_apply',
    options: estimatedPersons,
    onChange: function onChange(val) {
      return handleClickProperty('estimated_person', val === 'no_apply' ? null : val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "tax"
  }, t('TAX', 'Tax')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, taxSelected && /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    placeholder: taxSelected.showOnSelected,
    defaultValue: (_taxSelected$value = taxSelected === null || taxSelected === void 0 ? void 0 : taxSelected.value) !== null && _taxSelected$value !== void 0 ? _taxSelected$value : 'inherit',
    options: taxesOption,
    onChange: function onChange(val) {
      return handleClickProperty('tax_id', val === 'inherit' ? null : val);
    },
    onEdit: function onEdit(val) {
      return setTaxToEdit({
        action: 'taxes',
        payload: val
      });
    },
    onDelete: function onDelete(val) {
      return setTaxToDelete({
        action: 'taxes',
        id: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "fees"
  }, t('FEES', 'Fees')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, fesSelected && /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    placeholder: fesSelected.showOnSelected,
    defaultValue: (_fesSelected$value = fesSelected === null || fesSelected === void 0 ? void 0 : fesSelected.value) !== null && _fesSelected$value !== void 0 ? _fesSelected$value : 'inherit',
    options: feesOptions,
    onChange: function onChange(val) {
      return handleClickProperty('fee_id', val === 'inherit' ? null : val);
    },
    onEdit: function onEdit(val) {
      return setTaxToEdit({
        action: 'fees',
        payload: val
      });
    },
    onDelete: function onDelete(val) {
      return setTaxToDelete({
        action: 'fees',
        id: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "cost_price"
  }, t('PRODUCT_COST', 'Product cost')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "cost_price",
    id: "cost_price",
    placeholder: "0.00",
    defaultValue: (_productState$cost_pr = productState === null || productState === void 0 ? void 0 : productState.cost_price) !== null && _productState$cost_pr !== void 0 ? _productState$cost_pr : '',
    onChange: function onChange(e) {
      var _e$target$value2;

      return handleClickProperty('cost_price', (_e$target$value2 = e.target.value) !== null && _e$target$value2 !== void 0 ? _e$target$value2 : null);
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "cost_offer_price"
  }, t('PRODUCT_REGULAR_COST', 'Product cost - regular price')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "cost_offer_price",
    id: "cost_offer_price",
    placeholder: "0.00",
    defaultValue: (_productState$cost_of = productState === null || productState === void 0 ? void 0 : productState.cost_offer_price) !== null && _productState$cost_of !== void 0 ? _productState$cost_of : '',
    onChange: function onChange(e) {
      var _e$target$value3;

      return handleClickProperty('cost_offer_price', (_e$target$value3 = e.target.value) !== null && _e$target$value3 !== void 0 ? _e$target$value3 : null);
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, {
    className: "".concat(isShowPriceByWeight ? 'growUnset showWeight' : 'growUnset')
  }, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "calories"
  }, t('CALORIES', 'Calories')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "calories",
    id: "calories",
    placeholder: "0.00",
    defaultValue: (_productState$calorie = productState === null || productState === void 0 ? void 0 : productState.calories) !== null && _productState$calorie !== void 0 ? _productState$calorie : '',
    onChange: function onChange(e) {
      var _e$target$value4;

      return handleClickProperty('calories', (_e$target$value4 = e.target.value) !== null && _e$target$value4 !== void 0 ? _e$target$value4 : null);
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), isShowPriceByWeight && /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LabelCustom, {
    htmlFor: "weight"
  }, t('PRODUCT_WEIGHT', 'Product weight')), /*#__PURE__*/_react.default.createElement(_styles2.WeightWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "weight",
    id: "weight",
    placeholder: "0.00",
    defaultValue: (_productState$weight = productState === null || productState === void 0 ? void 0 : productState.weight) !== null && _productState$weight !== void 0 ? _productState$weight : '' // onChange={(e) => handleClickProperty('weight', e.target.value ?? null)}
    ,
    onChange: handleChangeWeight,
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    notAsync: true,
    defaultValue: (_productState$weight_ = productState === null || productState === void 0 ? void 0 : productState.weight_unit) !== null && _productState$weight_ !== void 0 ? _productState$weight_ : 'grams',
    options: weightUnitOptions,
    onChange: function onChange(val) {
      return handleChangeUnit(val);
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOptionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('FEATURED', 'Featured')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (productState === null || productState === void 0 ? void 0 : productState.featured) || false,
    onChange: function onChange(enabled) {
      return handleClickProperty('featured', enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('UPSELLING', 'Upselling')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (productState === null || productState === void 0 ? void 0 : productState.upselling) || false,
    onChange: function onChange(enabled) {
      return handleClickProperty('upselling', enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('SKU', 'Stock Keeping Unit (SKU)')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: isSku,
    onChange: function onChange(enabled) {
      return handleEnableSKU(enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('HIDE_SPECIAL_INSTRUCTIONS', 'Hide special instructions')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: productState === null || productState === void 0 ? void 0 : productState.hide_special_instructions,
    onChange: function onChange(enabled) {
      return handleClickProperty('hide_special_instructions', enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('SHOW_PRICE_BY_WEIGHT', 'Show price by weight')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: isShowPriceByWeight,
    onChange: function onChange(enabled) {
      return handleEnablePriceWeight(enabled);
    }
  })), isShowPriceByWeight && /*#__PURE__*/_react.default.createElement(_styles2.PricePerUnit, null, /*#__PURE__*/_react.default.createElement("label", null, parsePrice(unitPrice), " / "), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: pricePerUnit,
    options: weightUnitOptions,
    onChange: function onChange(val) {
      return handleChangePricePerUnit(val);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "7.6px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0,
    onClick: function onClick() {
      return handleUpdateClick();
    }
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    open: !!(taxToEdit !== null && taxToEdit !== void 0 && taxToEdit.action),
    width: "80%",
    padding: "30px",
    title: typeof (taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.payload) === 'boolean' ? t("ADD_".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action).toUpperCase()), "Add ".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action))) : t("EDIT_".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action).toUpperCase()), "Edit ".concat(getTaxOrFeeString(taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action))),
    onClose: function onClose() {
      return setTaxToEdit({
        action: null,
        payload: null
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_EditTaxManager.EditTaxManager, {
    type: taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.action,
    data: taxToEdit === null || taxToEdit === void 0 ? void 0 : taxToEdit.payload,
    onChange: handleChangeTax,
    formChanges: formTaxChanges,
    onClose: function onClose() {
      return setTaxToEdit({
        action: null,
        payload: null
      });
    },
    handleSave: handleSaveTax,
    setAlertState: setAlertState
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: taxToDelete.action ? t("DELETE_".concat(getTaxOrFeeString(taxToDelete === null || taxToDelete === void 0 ? void 0 : taxToDelete.action).toUpperCase()), "Delete ".concat(getTaxOrFeeString(taxToDelete === null || taxToDelete === void 0 ? void 0 : taxToDelete.action))) : t('ERROR'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return taxToDelete.action ? deleteTax(taxToDelete) : closeAlert();
    },
    closeOnBackdrop: false
  }));
};

var ProductDetailsAdvanced = function ProductDetailsAdvanced(props) {
  var productAdvancedProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductDetailsAdvancedUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductDetailsAdvanced, productAdvancedProps);
};

exports.ProductDetailsAdvanced = ProductDetailsAdvanced;