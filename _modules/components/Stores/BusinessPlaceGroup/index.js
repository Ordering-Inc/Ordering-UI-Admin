"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessPlaceGroupUI = exports.BusinessPlaceGroupUI = function BusinessPlaceGroupUI(props) {
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
    value: (_ref = (_formState$changes$na = formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : placeGroup === null || placeGroup === void 0 ? void 0 : placeGroup.name) !== null && _ref !== void 0 ? _ref : '',
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
  })), placeGroup && !(placeList !== null && placeList !== void 0 && placeList.loading) && /*#__PURE__*/_react.default.createElement(_styles2.OptionList, null, (placeList === null || placeList === void 0 || (_placeList$places = placeList.places) === null || _placeList$places === void 0 ? void 0 : _placeList$places.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.TableHead, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "check-box",
    onClick: function onClick() {
      return handleMultiPlaceChangeEnabled();
    }
  }, getMultiPlaceCheckStatus() ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), /*#__PURE__*/_react.default.createElement("label", null, t('OPTIONS', 'Options')))), placeList === null || placeList === void 0 || (_placeList$places2 = placeList.places) === null || _placeList$places2 === void 0 ? void 0 : _placeList$places2.map(function (place, i) {
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
  })), placeGroup && /*#__PURE__*/_react.default.createElement(_styles2.AddBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenModal(null);
    }
  }, t('ADD_OPTION', 'Add option'))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
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
var BusinessPlaceGroup = exports.BusinessPlaceGroup = function BusinessPlaceGroup(props) {
  var businessPlaceProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPlaceGroupUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessPlaceGroup, businessPlaceProps);
};