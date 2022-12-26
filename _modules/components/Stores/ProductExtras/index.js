"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtras = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _ProductExtraOptions = require("../ProductExtraOptions");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductExtrasUI = function ProductExtrasUI(props) {
  var productState = props.productState,
    extrasState = props.extrasState,
    changesState = props.changesState,
    isAddMode = props.isAddMode,
    handleOpenAddForm = props.handleOpenAddForm,
    handleChangeExtraInput = props.handleChangeExtraInput,
    handleAddExtra = props.handleAddExtra,
    handleChangeAddExtraInput = props.handleChangeAddExtraInput,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    business = props.business,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    handleProductExtraState = props.handleProductExtraState,
    dragoverExtaId = props.dragoverExtaId,
    isExtrasBottom = props.isExtrasBottom,
    handleDragStart = props.handleDragStart,
    hanldeDragOver = props.hanldeDragOver,
    handleDrop = props.handleDrop,
    handleDragEnd = props.handleDragEnd;
  var theme = (0, _styledComponents.useTheme)();
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
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    extraIds = _useState10[0],
    setExtraIds = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isCheckboxClicked = _useState12[0],
    setIsCheckboxClicked = _useState12[1];
  var handleOpenExtraDetails = function handleOpenExtraDetails(e, extra) {
    if (e.target.closest('.extra-checkbox') || e.target.closest('.draggable-dots')) return;
    setIsExtendExtraOpen(true);
    setCurrentExtra(extra);
    setOpenExtraDetails(true);
  };
  var handleCloseExtraDetails = function handleCloseExtraDetails() {
    setOpenExtraDetails(false);
    setIsExtendExtraOpen(false);
    setCurrentExtra(null);
  };
  var addExtraListener = function addExtraListener(e) {
    var _conatinerRef$current;
    var outsideDropdown = !((_conatinerRef$current = conatinerRef.current) !== null && _conatinerRef$current !== void 0 && _conatinerRef$current.contains(e.target));
    if (outsideDropdown) {
      handleAddExtra();
    }
  };
  var handleExtraState = function handleExtraState(id, checked) {
    if (checked) {
      setExtraIds(function (prevState) {
        return [].concat(_toConsumableArray(prevState), [id]);
      });
    } else {
      setExtraIds(function (prevState) {
        return prevState.filter(function (extraId) {
          return extraId !== id;
        });
      });
    }
    setIsCheckboxClicked(true);
  };
  (0, _react.useEffect)(function () {
    var _productState$product;
    var _extraIds = [];
    if ((_productState$product = productState.product) !== null && _productState$product !== void 0 && _productState$product.extras) {
      var _productState$product2;
      _extraIds = (_productState$product2 = productState.product.extras) === null || _productState$product2 === void 0 ? void 0 : _productState$product2.reduce(function (ids, extra) {
        return [].concat(_toConsumableArray(ids), [extra.id]);
      }, []);
    }
    setExtraIds(_extraIds);
  }, []);
  (0, _react.useEffect)(function () {
    if (!isCheckboxClicked) return;
    setIsCheckboxClicked(false);
    handleProductExtraState(extraIds);
  }, [isCheckboxClicked, extraIds]);
  (0, _react.useEffect)(function () {
    if (!isAddMode) return;
    document.addEventListener('click', addExtraListener);
    return function () {
      return document.removeEventListener('click', addExtraListener);
    };
  }, [isAddMode, changesState]);
  (0, _react.useEffect)(function () {
    var _productState$product3, _extrasState$extras;
    if (productState !== null && productState !== void 0 && (_productState$product3 = productState.product) !== null && _productState$product3 !== void 0 && _productState$product3.error || extrasState !== null && extrasState !== void 0 && (_extrasState$extras = extrasState.extras) !== null && _extrasState$extras !== void 0 && _extrasState$extras.error) {
      var _productState$product4, _extrasState$extras2;
      setAlertState({
        open: true,
        content: (productState === null || productState === void 0 ? void 0 : (_productState$product4 = productState.product) === null || _productState$product4 === void 0 ? void 0 : _productState$product4.error) || (extrasState === null || extrasState === void 0 ? void 0 : (_extrasState$extras2 = extrasState.extras) === null || _extrasState$extras2 === void 0 ? void 0 : _extrasState$extras2.error)
      });
    }
  }, [productState, extrasState]);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductExtrasContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_OPTIONS', 'Product options')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenAddForm();
    }
  }, t('ADD_PRODUCT_OPTION', 'Add product option'))), (extrasState === null || extrasState === void 0 ? void 0 : extrasState.extras) && (extrasState === null || extrasState === void 0 ? void 0 : extrasState.extras.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (extra, index) {
    var _theme$images$icons, _extraIds$includes;
    var isLastExtra = index === extrasState.extras.length - 1;
    return /*#__PURE__*/_react.default.createElement(_styles2.ExtraOption, {
      key: extra.id,
      active: extra.id === (currentExtra === null || currentExtra === void 0 ? void 0 : currentExtra.id),
      onClick: function onClick(e) {
        return handleOpenExtraDetails(e, extra);
      },
      isDragOver: dragoverExtaId === extra.id,
      isBorderBottom: isExtrasBottom && isLastExtra,
      onDragOver: function onDragOver(e) {
        return hanldeDragOver(e, extra, isLastExtra);
      },
      onDrop: function onDrop(e) {
        return handleDrop(e, extra);
      },
      onDragEnd: handleDragEnd,
      className: "draggable-extra"
    }, /*#__PURE__*/_react.default.createElement(_styles2.DragImageWrapper, {
      className: "draggable-dots"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
      alt: "six dots",
      draggable: true,
      onDragStart: function onDragStart(e) {
        return handleDragStart(e, extra);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.CheckboxContainer, {
      className: "extra-checkbox"
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: (_extraIds$includes = extraIds.includes(extra.id)) !== null && _extraIds$includes !== void 0 ? _extraIds$includes : false,
      onChange: function onChange(e) {
        return handleExtraState(extra.id, e.target.checked);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.MoreContainer, null, /*#__PURE__*/_react.default.createElement("span", null, extra.name), /*#__PURE__*/_react.default.createElement(_styles2.Details, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null))));
  })), isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.ExtraAddForm, {
    ref: conatinerRef,
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      handleAddExtra();
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    placeholder: t('WRITE_A_NAME', 'Write a name'),
    onChange: function onChange(e) {
      return handleChangeAddExtraInput(e);
    },
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.AddButton, {
    onClick: function onClick() {
      return handleOpenAddForm();
    }
  }, t('ADD_PRODUCT_OPTION', 'Add product option'))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openExtraDetails && /*#__PURE__*/_react.default.createElement(_ProductExtraOptions.ProductExtraOptions, {
    open: openExtraDetails,
    onClose: function onClose() {
      return handleCloseExtraDetails();
    },
    business: business,
    extra: currentExtra,
    handleChangeExtraName: handleChangeExtraInput,
    handleUpdateBusinessState: handleUpdateBusinessState
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openExtraDetails && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
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
    handleChangeExtraName: handleChangeExtraInput,
    handleUpdateBusinessState: handleUpdateBusinessState
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
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