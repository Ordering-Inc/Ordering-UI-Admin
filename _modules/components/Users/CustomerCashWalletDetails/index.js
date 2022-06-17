"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerCashWalletDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("../../../styles");

var _Shared = require("../../Shared");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CustomerCashWalletDetails = function CustomerCashWalletDetails(props) {
  var _walletState$wallet;

  var walletState = props.walletState,
      addWalletState = props.addWalletState,
      reduceWalletState = props.reduceWalletState,
      actionState = props.actionState,
      handleChangeInput = props.handleChangeInput,
      handleAddWalletMoney = props.handleAddWalletMoney,
      handleReduceWalletMoney = props.handleReduceWalletMoney;

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

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

  var onAddWalletMoney = function onAddWalletMoney() {
    if (!(addWalletState !== null && addWalletState !== void 0 && addWalletState.amount)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'The amount is required').replace('_attribute_', t('AMOUNT', 'Amount'))]
      });
      return;
    }

    handleAddWalletMoney();
  };

  var onReduceWalletMoney = function onReduceWalletMoney() {
    if (!(reduceWalletState !== null && reduceWalletState !== void 0 && reduceWalletState.amount)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'The amount is required').replace('_attribute_', t('AMOUNT', 'Amount'))]
      });
      return;
    }

    handleReduceWalletMoney();
  };

  (0, _react.useEffect)(function () {
    if (actionState.loading || !actionState.error) return;
    setAlertState({
      open: true,
      content: actionState.error
    });
  }, [actionState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.WalletBalaceContainer, null, /*#__PURE__*/_react.default.createElement("span", null, walletState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 24,
    width: 100
  }) : parsePrice((_walletState$wallet = walletState.wallet) === null || _walletState$wallet === void 0 ? void 0 : _walletState$wallet.balance)), /*#__PURE__*/_react.default.createElement("span", null, t('WALLET_MONEY', 'Wallet money'))), /*#__PURE__*/_react.default.createElement(_styles2.SectionContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('ADD_WALLET_MONEY', 'Add wallet money')), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('INDICATE_THE_AMOUNT_TO_ADD', 'Indicate the amount to add')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    name: "amount",
    placeholder: "".concat(parsePrice(0)),
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    value: (addWalletState === null || addWalletState === void 0 ? void 0 : addWalletState.amount) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, true);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "description",
    rows: 3,
    value: (addWalletState === null || addWalletState === void 0 ? void 0 : addWalletState.description) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, true);
    },
    placeholder: t('WRITE_SHORT_COMMENT', 'Write a short comment')
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onAddWalletMoney();
    },
    disabled: actionState.loading || Object.keys(addWalletState).length === 0
  }, t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_styles2.SectionContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('REDUCE_WALLET_MONEY', 'Reduce wallet money')), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('INDICATE_THE_AMOUNT_TO_REDUCE', 'Indicate the amount to reduce')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    name: "amount",
    placeholder: "".concat(parsePrice(0)),
    value: (reduceWalletState === null || reduceWalletState === void 0 ? void 0 : reduceWalletState.amount) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, false);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 3,
    name: "description",
    value: (reduceWalletState === null || reduceWalletState === void 0 ? void 0 : reduceWalletState.description) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, false);
    },
    placeholder: t('WRITE_SHORT_COMMENT', 'Write a short comment')
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "black",
    onClick: function onClick() {
      return onReduceWalletMoney();
    },
    disabled: actionState.loading || Object.keys(reduceWalletState).length === 0
  }, t('REDUCE', 'Reduce'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    width: "800px",
    title: t('LOGIN'),
    content: alertState.content,
    acceptText: t('ACCEPT'),
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

exports.CustomerCashWalletDetails = CustomerCashWalletDetails;