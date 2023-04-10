"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPlaceGroupUI = exports.BusinessPlaceGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _reactHookForm = require("react-hook-form");
var _Shared = require("../../Shared");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _BusinessPlace = require("../BusinessPlace");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
var BusinessPlaceGroupUI = function BusinessPlaceGroupUI(props) {
  var _ref, _formState$changes$na, _formState$changes, _placeList$places, _placeList$places2;
  var open = props.open,
    onClose = props.onClose,
    placeGroup = props.placeGroup,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleAddPlaceGroup = props.handleAddPlaceGroup,
    handleUpdatePlaceGroup = props.handleUpdatePlaceGroup,
    handleDeletePlaceGroup = props.handleDeletePlaceGroup,
    placeList = props.placeList,
    handleSuccessDeletePlace = props.handleSuccessDeletePlace,
    handleSuccessAddPlace = props.handleSuccessAddPlace,
    handleSuccessUpdatePlace = props.handleSuccessUpdatePlace,
    handleChangePlaceEnabled = props.handleChangePlaceEnabled,
    businessId = props.businessId,
    handleMultiPlaceChangeEnabled = props.handleMultiPlaceChangeEnabled,
    getMultiPlaceCheckStatus = props.getMultiPlaceCheckStatus;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedPlace = _useState6[0],
    setSelectedPlace = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openModal = _useState8[0],
    setOpenModal = _useState8[1];
  var buttonRef = (0, _react.useRef)(null);
  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      props.onClose();
    }
    setIsMenuOpen(value);
    document.getElementById('business_place').style.width = value ? width > 1000 ? '500px' : '100%' : '0';
  };
  var handleOpenModal = function handleOpenModal(place) {
    setSelectedPlace(place);
    setOpenModal(true);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var onSubmit = function onSubmit() {
    if (placeGroup) handleUpdatePlaceGroup();else handleAddPlaceGroup();
  };
  var handleCloseModal = function handleCloseModal() {
    setOpenModal(false);
    setSelectedPlace(null);
  };
  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('business_place').style.width = '100%';
      } else {
        document.getElementById('business_place').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  var handlePlaceClick = function handlePlaceClick(e, place) {
    if (e.target.closest('.check-box')) return;
    handleOpenModal(place);
  };
  var handleCheckBoxChange = function handleCheckBoxChange(place) {
    handleChangePlaceEnabled(place === null || place === void 0 ? void 0 : place.id, {
      enabled: !(place !== null && place !== void 0 && place.enabled)
    });
  };
  var handleUpdateSelectedPlace = function handleUpdateSelectedPlace(placeGroup) {
    setSelectedPlace(placeGroup);
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [formMethods.errors]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "business_place"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, placeGroup ? placeGroup === null || placeGroup === void 0 ? void 0 : placeGroup.name : t('NEW_PLACE', 'New place')), /*#__PURE__*/_react.default.createElement(_styles2.ActionBlock, null, placeGroup && /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    className: "product_actions",
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDeletePlaceGroup();
    }
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement(_styles2.Content, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('NAME', 'Name'),
    name: "name",
    autoComplete: "off",
    onChange: handleChangeInput,
    value: (_ref = (_formState$changes$na = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : placeGroup === null || placeGroup === void 0 ? void 0 : placeGroup.name) !== null && _ref !== void 0 ? _ref : '',
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('NAME', 'Name'))
    })
  }), /*#__PURE__*/_react.default.createElement(_styles2.HideSubmitBtn, {
    type: "submit",
    ref: buttonRef
  })), placeGroup && (placeList === null || placeList === void 0 ? void 0 : placeList.loading) && /*#__PURE__*/_react.default.createElement(_styles2.OptionList, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.PlaceItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }));
  })), placeGroup && !(placeList !== null && placeList !== void 0 && placeList.loading) && /*#__PURE__*/_react.default.createElement(_styles2.OptionList, null, (placeList === null || placeList === void 0 ? void 0 : (_placeList$places = placeList.places) === null || _placeList$places === void 0 ? void 0 : _placeList$places.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.TableHead, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "check-box",
    onClick: function onClick() {
      return handleMultiPlaceChangeEnabled();
    }
  }, getMultiPlaceCheckStatus() ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), /*#__PURE__*/_react.default.createElement("label", null, t('OPTIONS', 'Options')))), placeList === null || placeList === void 0 ? void 0 : (_placeList$places2 = placeList.places) === null || _placeList$places2 === void 0 ? void 0 : _placeList$places2.map(function (place, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.PlaceItemContainer, {
      key: i,
      active: (selectedPlace === null || selectedPlace === void 0 ? void 0 : selectedPlace.id) === (place === null || place === void 0 ? void 0 : place.id),
      onClick: function onClick(e) {
        return handlePlaceClick(e, place);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "check-box",
      onClick: function onClick() {
        return handleCheckBoxChange(place);
      }
    }, place !== null && place !== void 0 && place.enabled ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
      className: "active"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), /*#__PURE__*/_react.default.createElement("label", null, place === null || place === void 0 ? void 0 : place.name)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  })), placeGroup && /*#__PURE__*/_react.default.createElement(_styles2.AddBtn, {
    onClick: function onClick() {
      return handleOpenModal(null);
    }
  }, t('ADD_OPTION', 'Add option')), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    disabled: Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0,
    onClick: function onClick() {
      return buttonRef.current.click();
    }
  }, placeGroup ? t('SAVE', 'Save') : t('ADD', 'Add')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('PLACES', 'Places'),
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    open: openModal,
    onClose: function onClose() {
      return handleCloseModal();
    },
    hideCloseDefault: true
  }, /*#__PURE__*/_react.default.createElement(_BusinessPlace.BusinessPlace, {
    businessId: businessId,
    place: selectedPlace,
    placeGroup: placeGroup,
    handleUpdateSelectedPlace: handleUpdateSelectedPlace,
    handleSuccessUpdatePlace: handleSuccessUpdatePlace,
    handleSuccessAddPlace: handleSuccessAddPlace,
    handleSuccessDeletePlace: handleSuccessDeletePlace,
    onClose: function onClose() {
      return handleCloseModal();
    }
  })));
};
exports.BusinessPlaceGroupUI = BusinessPlaceGroupUI;
var BusinessPlaceGroup = function BusinessPlaceGroup(props) {
  var businessPlaceProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPlaceGroupUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessPlaceGroup, businessPlaceProps);
};
exports.BusinessPlaceGroup = BusinessPlaceGroup;