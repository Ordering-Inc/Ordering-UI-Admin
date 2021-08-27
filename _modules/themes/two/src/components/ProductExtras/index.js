"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtras = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Checkbox = require("../../styles/Checkbox");

var _Confirm = require("../Confirm");

var _Modal = require("../Modal");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

var _ProductExtraOptions = require("../ProductExtraOptions");

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

var ProductExtrasUI = function ProductExtrasUI(props) {
  var productState = props.productState,
      extrasState = props.extrasState,
      changesState = props.changesState,
      isAddMode = props.isAddMode,
      handleOpenAddForm = props.handleOpenAddForm,
      handleChangeExtraInput = props.handleChangeExtraInput,
      handleDeteteExtra = props.handleDeteteExtra,
      handleAddExtra = props.handleAddExtra,
      handleClickExtra = props.handleClickExtra,
      handleChangeAddExtraInput = props.handleChangeAddExtraInput,
      setIsExtendExtraOpen = props.setIsExtendExtraOpen,
      business = props.business,
      handleUpdateBusinessState = props.handleUpdateBusinessState;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var conatinerRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      confirm = _useState4[0],
      setConfirm = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openExtraDetails = _useState6[0],
      setOpenExtraDetails = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      currentExtra = _useState8[0],
      setCurrentExtra = _useState8[1];

  var handleOpenExtraDetails = function handleOpenExtraDetails(extra) {
    setIsExtendExtraOpen(true);
    setCurrentExtra(extra);
    setOpenExtraDetails(true);
  };

  var handleCloseExtraDetails = function handleCloseExtraDetails() {
    setOpenExtraDetails(false);
    setIsExtendExtraOpen(false);
  };

  var isCheckState = function isCheckState(extraId) {
    var _productState$product;

    var found = productState === null || productState === void 0 ? void 0 : (_productState$product = productState.product) === null || _productState$product === void 0 ? void 0 : _productState$product.extras.find(function (extra) {
      return (extra === null || extra === void 0 ? void 0 : extra.id) === extraId;
    });
    return found;
  };

  var addExtraListener = function addExtraListener(e) {
    var _conatinerRef$current;

    var outsideDropdown = !((_conatinerRef$current = conatinerRef.current) !== null && _conatinerRef$current !== void 0 && _conatinerRef$current.contains(e.target));

    if (outsideDropdown) {
      handleAddExtra();
    }
  };

  var handleDeteteClick = function handleDeteteClick(extraId) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_EXTRA', 'Are you sure that you want to delete this extra?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeteteExtra(extraId);
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (!isAddMode) return;
    document.addEventListener('click', addExtraListener);
    return function () {
      return document.removeEventListener('click', addExtraListener);
    };
  }, [isAddMode, changesState]);
  (0, _react.useEffect)(function () {
    var _productState$product2, _extrasState$extras;

    if (productState !== null && productState !== void 0 && (_productState$product2 = productState.product) !== null && _productState$product2 !== void 0 && _productState$product2.error || extrasState !== null && extrasState !== void 0 && (_extrasState$extras = extrasState.extras) !== null && _extrasState$extras !== void 0 && _extrasState$extras.error) {
      var _productState$product3, _extrasState$extras2;

      setAlertState({
        open: true,
        content: (productState === null || productState === void 0 ? void 0 : (_productState$product3 = productState.product) === null || _productState$product3 === void 0 ? void 0 : _productState$product3.error) || (extrasState === null || extrasState === void 0 ? void 0 : (_extrasState$extras2 = extrasState.extras) === null || _extrasState$extras2 === void 0 ? void 0 : _extrasState$extras2.error)
      });
    }
  }, [productState, extrasState]);
  return /*#__PURE__*/_react.default.createElement(_styles.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ProductExtrasContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_EXTRAS', 'Product extras')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenAddForm();
    }
  }, t('ADD_PRODUCT_EXTRA', 'Add product extra'))), extrasState === null || extrasState === void 0 ? void 0 : extrasState.extras.map(function (extra) {
    return /*#__PURE__*/_react.default.createElement(_styles.ExtraOption, {
      key: extra.id
    }, /*#__PURE__*/_react.default.createElement(_styles.CheckboxContainer, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
      defaultChecked: isCheckState(extra.id),
      onClick: function onClick(e) {
        return handleClickExtra(extra.id, e.target.checked);
      }
    }), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      defaultValue: extra.name,
      onChange: function onChange(e) {
        return handleChangeExtraInput(e, extra.id);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles.MoreContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Details, {
      onClick: function onClick() {
        return handleOpenExtraDetails(extra);
      }
    }, t('DETAILS', 'Details')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, {
      onClick: function onClick() {
        return handleDeteteClick(extra.id);
      }
    })));
  }), isAddMode && /*#__PURE__*/_react.default.createElement(_styles.ExtraAddContainer, {
    ref: conatinerRef
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    placeholder: t('WRITE_A_NAME', 'Write a name'),
    onChange: function onChange(e) {
      return handleChangeAddExtraInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.AddButton, {
    onClick: function onClick() {
      return handleOpenAddForm();
    }
  }, t('ADD_INGREDIENT', 'Add ingredient'))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openExtraDetails && /*#__PURE__*/_react.default.createElement(_ProductExtraOptions.ProductExtraOptions, {
    open: openExtraDetails,
    onClose: function onClose() {
      return handleCloseExtraDetails();
    },
    business: business,
    extra: currentExtra,
    handleUpdateBusinessState: handleUpdateBusinessState
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openExtraDetails && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "80%",
    open: openExtraDetails,
    onClose: function onClose() {
      return handleCloseExtraDetails();
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductExtraOptions.ProductExtraOptions, {
    open: openExtraDetails,
    onClose: function onClose() {
      return handleCloseExtraDetails();
    },
    business: business,
    extra: currentExtra,
    handleUpdateBusinessState: handleUpdateBusinessState
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ORDERING', 'Ordering'),
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
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('ORDERING', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};

var ProductExtras = function ProductExtras(props) {
  var productExtrasProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductExtrasUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductExtras, productExtrasProps);
};

exports.ProductExtras = ProductExtras;