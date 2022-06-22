"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWalletBusinessDetail = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactHookForm = require("react-hook-form");

var _styles = require("../../../styles");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Shared = require("../../Shared");

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

var PointsWalletBusinessDetailUI = function PointsWalletBusinessDetailUI(props) {
  var _formState$changes5, _formState$changes6, _walletData$redemptio, _formState$changes7, _formState$changes8, _walletData$accumulat, _ref, _formState$changes$ma, _formState$changes9;

  var walletData = props.walletData,
      formState = props.formState,
      handleChangeInput = props.handleChangeInput,
      handleClickSubmit = props.handleClickSubmit,
      isBusiness = props.isBusiness,
      selectedBusinessList = props.selectedBusinessList,
      handleChangeItem = props.handleChangeItem;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit; // const [paymentRules, setPaymentRules] = useState('no_limit')


  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      expiration = _useState4[0],
      setExpiration = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isMaximum = _useState6[0],
      setIsMaximum = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      maxValue = _useState8[0],
      setMaxValue = _useState8[1]; // const ruleList = [
  //   { key: 'no_limit', description: t('NO_LIMIT', 'No limit') },
  //   { key: 'maximum_redemption_type', description: `${t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order')} (${t('FIXED', 'fixed')})` },
  //   { key: 'maximum_redemption_rate', description: `${t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order')} (%)` }
  // ]


  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var handleChangeExpirtation = function handleChangeExpirtation(index) {
    if (index) {
      setExpiration(index);
      return;
    }

    setExpiration(null);
    handleChangeItem({
      expire_after_minutes: null
    });
    setMaxValue('');
  };

  var handleClickSwitch = function handleClickSwitch(value) {
    setIsMaximum(value);
    if (!value) handleChangeItem({
      maximum_accumulation: null
    });
  };

  var handleChangeMaxValue = function handleChangeMaxValue(e) {
    var value = e.target.value;
    setMaxValue(value);
    if (value) handleChangeItem({
      expire_after_minutes: value * 24 * 60
    });else handleChangeItem({
      expire_after_minutes: null
    });
  };

  var onSubmit = function onSubmit() {
    if (!walletData) {
      var findBusiness = selectedBusinessList.find(function (business) {
        return business.wallet_enabled;
      });

      if (!findBusiness) {
        setAlertState({
          open: true,
          content: t('SELECT_LEAST_ONE_BUSINESS', 'Select at least one business.')
        });
        return;
      }
    }

    if (Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0) {
      var _formState$changes, _formState$changes2;

      if ((formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.redemption_rate) === '') {
        setAlertState({
          open: true,
          content: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', 'redemption_rate')
        });
        return;
      }

      if ((formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.accumulation_rate) === '') {
        setAlertState({
          open: true,
          content: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', 'accumulation_rate')
        });
        return;
      }

      handleClickSubmit && handleClickSubmit();
    }
  }; // useEffect(() => {
  //   if (paymentRules === 'no_limit') {
  //     const changes = { ...formState.changes, maximum_redemption_type: null }
  //     setFormState({ ...formState, changes: changes })
  //   }
  // }, [paymentRules])


  (0, _react.useEffect)(function () {
    if (!formState.error) return;
    setAlertState({
      open: true,
      content: formState.error
    });
  }, [formState === null || formState === void 0 ? void 0 : formState.error]);
  (0, _react.useEffect)(function () {
    var _formState$changes3, _formState$changes4;

    if (formState !== null && formState !== void 0 && (_formState$changes3 = formState.changes) !== null && _formState$changes3 !== void 0 && _formState$changes3.maximum_accumulation ? formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.maximum_accumulation : walletData === null || walletData === void 0 ? void 0 : walletData.maximum_accumulation) {
      setIsMaximum(true);
    } else {
      setIsMaximum(false);
    }
  }, [walletData === null || walletData === void 0 ? void 0 : walletData.maximum_accumulation]);
  (0, _react.useEffect)(function () {
    if (walletData !== null && walletData !== void 0 && walletData.expire_after_minutes) {
      setMaxValue((walletData === null || walletData === void 0 ? void 0 : walletData.expire_after_minutes) / (24 * 60));
      setExpiration('days');
    } else {
      setExpiration(null);
      setMaxValue('');
    }
  }, [walletData === null || walletData === void 0 ? void 0 : walletData.expire_after_minutes]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    isBusiness: isBusiness,
    onSubmit: handleSubmit(onSubmit)
  }, (walletData === null || walletData === void 0 ? void 0 : walletData.name) && /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, walletData === null || walletData === void 0 ? void 0 : walletData.name)), /*#__PURE__*/_react.default.createElement(_styles2.DetailContent, null, /*#__PURE__*/_react.default.createElement(_styles2.PointsRedemptionWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('POINTS_REDEMPTION', 'Points redemption')), /*#__PURE__*/_react.default.createElement("p", null, t('VALUE', 'Value')), /*#__PURE__*/_react.default.createElement(_styles2.PointsInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "00 points",
    name: "redemption_rate",
    autoComplete: "off",
    value: typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.redemption_rate) !== 'undefined' ? formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.redemption_rate : (_walletData$redemptio = walletData === null || walletData === void 0 ? void 0 : walletData.redemption_rate) !== null && _walletData$redemptio !== void 0 ? _walletData$redemptio : '',
    onChange: handleChangeInput,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, "="), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(1)))), /*#__PURE__*/_react.default.createElement(_styles2.PointsAccumulationContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('POINTS_ACCUMULATION', 'Points accumulation')), /*#__PURE__*/_react.default.createElement("p", null, t('AMOUNT_POINTS_ASSIGN_TO_ORDER_SUBTOTAL', 'Amount of points to assign in relation to the order subtotal')), /*#__PURE__*/_react.default.createElement("span", null, t('VALUE', 'Value')), /*#__PURE__*/_react.default.createElement(_styles2.AccumulationInputWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(1)), /*#__PURE__*/_react.default.createElement("span", {
    className: "equal"
  }, "="), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "00 points",
    name: "accumulation_rate",
    autoComplete: "off",
    value: typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.accumulation_rate) !== 'undefined' ? formState === null || formState === void 0 ? void 0 : (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.accumulation_rate : (_walletData$accumulat = walletData === null || walletData === void 0 ? void 0 : walletData.accumulation_rate) !== null && _walletData$accumulat !== void 0 ? _walletData$accumulat : '',
    onChange: handleChangeInput,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ToggleWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('MAXIMUM_OF_POINTS', 'Maximum of points')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: isMaximum,
    onChange: function onChange(val) {
      return handleClickSwitch(val);
    }
  })), isMaximum && /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "00 points",
    name: "maximum_accumulation",
    value: (_ref = (_formState$changes$ma = formState === null || formState === void 0 ? void 0 : (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.maximum_accumulation) !== null && _formState$changes$ma !== void 0 ? _formState$changes$ma : walletData === null || walletData === void 0 ? void 0 : walletData.maximum_accumulation) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ExPirationWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('EXPIRATION', 'Expiration')), /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    onClick: function onClick() {
      return handleChangeExpirtation(null);
    }
  }, !expiration ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('NO', 'No'))), /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    onClick: function onClick() {
      return handleChangeExpirtation('days');
    }
  }, expiration ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('EXPIRATION_IN_DAYS', 'Expiration in days'))), expiration && /*#__PURE__*/_react.default.createElement(_styles2.OptionInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "0 ".concat(t('DAYS', 'days')),
    name: "expire_after_minutes",
    value: maxValue,
    onChange: handleChangeMaxValue,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    type: "submit",
    disabled: Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0
  }, walletData ? ('SAVE', 'Save') : ('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('POINTS_WALLET', 'Points wallet'),
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

var PointsWalletBusinessDetail = function PointsWalletBusinessDetail(props) {
  var pointsWalletBusinessDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PointsWalletBusinessDetailUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.PointsWalletBusinessDetail, pointsWalletBusinessDetailProps);
};

exports.PointsWalletBusinessDetail = PointsWalletBusinessDetail;