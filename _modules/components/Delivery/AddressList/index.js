"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _VscTrash = _interopRequireDefault(require("@meronex/icons/vsc/VscTrash"));
var _IosRadioButtonOn = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOn"));
var _IosRadioButtonOff = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOff"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
var _Shared = require("../../Shared");
var _Buttons = require("../../../styles/Buttons");
var _AddressForm = require("../AddressForm");
var _styledComponents = require("styled-components");
var _utils = require("../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AddressListUI = function AddressListUI(props) {
  var _addressList$addresse2, _addressList$addresse3, _orderState$options6, _addressList$addresse4, _theme$images, _addressList$error$, _orderState$options7, _orderState$options8;
  var actionStatus = props.actionStatus,
    addressList = props.addressList,
    handleDelete = props.handleDelete,
    setAddressList = props.setAddressList,
    handleSetDefault = props.handleSetDefault,
    isModal = props.isModal,
    isSeletectedUserAddresses = props.isSeletectedUserAddresses,
    isPopover = props.isPopover,
    isProductForm = props.isProductForm,
    onCancel = props.onCancel,
    onAccept = props.onAccept,
    userId = props.userId,
    userCustomerSetup = props.userCustomerSetup,
    isEnableContinueButton = props.isEnableContinueButton,
    setCustomerModalOpen = props.setCustomerModalOpen,
    setExtraOpen = props.setExtraOpen,
    userState = props.userState,
    handleSuccessUpdate = props.handleSuccessUpdate,
    isAutoOpenAddNewAddress = props.isAutoOpenAddNewAddress;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsAdmin.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    curAddress = _useState2[0],
    setCurAddress = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    addressOpen = _useState4[0],
    setAddressOpen = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useCustomer = (0, _orderingComponentsAdmin.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    user = _useCustomer2[0].user;
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    uniqueAddressesList = _useState8[0],
    setUniqueAddressesList = _useState8[1];
  var openAddress = function openAddress(address) {
    setCurAddress(address);
    setAddressOpen(true);
    var container = window.document.getElementsByClassName('form_edit')[0];
    container && (0, _utils.scrollTo)(container, 0, 500);
  };
  var handleSaveAddress = function handleSaveAddress(address) {
    var found = false;
    var addresses = addressList.addresses.map(function (_address) {
      if ((_address === null || _address === void 0 ? void 0 : _address.id) === (address === null || address === void 0 ? void 0 : address.id)) {
        Object.assign(_address, address);
        found = true;
      } else if (address.default) {
        _address.default = false;
      }
      return _address;
    });
    if (!found) {
      addresses.push(address);
      setAddressOpen(false);
    }
    setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
      addresses: addresses
    }));
    if (handleSuccessUpdate) {
      var updatedUser = _objectSpread(_objectSpread({}, userState.user), {}, {
        addresses: addresses
      });
      handleSuccessUpdate(updatedUser);
    }
    if (userCustomerSetup) {
      handleSetAddress(address);
    }
  };
  var handleSetAddress = function handleSetAddress(address) {
    if (checkAddress(address) && (userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.id) === (user === null || user === void 0 ? void 0 : user.id)) {
      setCustomerModalOpen && setCustomerModalOpen(false);
      return;
    }
    setAddressOpen(false);
    handleSetDefault(address, userCustomerSetup);
  };
  var handleDeleteClick = function handleDeleteClick(address) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ADDRESS', 'Are you sure that you want to delete the address?'),
      handleOnAccept: function handleOnAccept() {
        handleDelete(address);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  var checkAddress = function checkAddress(address) {
    var props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number'];
    var values = [];
    if (userCustomerSetup) {
      return address.default;
    }
    props.forEach(function (prop) {
      if (address !== null && address !== void 0 && address[prop]) {
        if (prop === 'location') {
          var _address$prop, _orderState$options, _address$prop2, _orderState$options2;
          values.push((address === null || address === void 0 || (_address$prop = address[prop]) === null || _address$prop === void 0 ? void 0 : _address$prop.lat) === (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options[prop]) === null || _orderState$options === void 0 ? void 0 : _orderState$options.lat) && (address === null || address === void 0 || (_address$prop2 = address[prop]) === null || _address$prop2 === void 0 ? void 0 : _address$prop2.lng) === (orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2.address) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2[prop]) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.lng));
        } else {
          var _orderState$options3;
          values.push((address === null || address === void 0 ? void 0 : address[prop]) === (orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3.address) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3[prop]));
        }
      } else {
        var _orderState$options4, _orderState$options5;
        values.push((orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.address) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4[prop]) === null || (orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.address) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5[prop]) === '');
      }
    });
    return values.every(function (value) {
      return value;
    });
  };

  /**
   * Close modals and alerts
   */
  (0, _react.useEffect)(function () {
    return function () {
      setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
      setAddressOpen(false);
    };
  }, []);
  (0, _react.useEffect)(function () {
    setExtraOpen && setExtraOpen(addressOpen);
  }, [addressOpen]);
  (0, _react.useEffect)(function () {
    if (addressList.loading) return;
    var _uniqueAddressesList = addressList.addresses && addressList.addresses.filter(function (address, i, self) {
      return i === self.findIndex(function (obj) {
        return address.address === obj.address && address.address_notes === obj.address_notes && address.zipcode === obj.zipcode && address.internal_number === obj.internal_number;
      });
    }) || [];
    setUniqueAddressesList(_uniqueAddressesList);
  }, [addressList]);
  (0, _react.useEffect)(function () {
    var _addressList$addresse;
    if (addressList.loading || !isAutoOpenAddNewAddress) return;
    if (!addressList.error && (addressList === null || addressList === void 0 || (_addressList$addresse = addressList.addresses) === null || _addressList$addresse === void 0 ? void 0 : _addressList$addresse.length) === 0) {
      setTimeout(function () {
        openAddress({});
      }, 500);
    }
  }, [addressList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.AddressListContainer, {
    id: "address_control",
    isLoading: (actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.loading) || (orderState === null || orderState === void 0 ? void 0 : orderState.loading)
  }, (!isPopover || !addressOpen) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    className: "add",
    color: isEnableContinueButton && (addressList === null || addressList === void 0 || (_addressList$addresse2 = addressList.addresses) === null || _addressList$addresse2 === void 0 ? void 0 : _addressList$addresse2.length) > 0 ? 'secondary' : 'lightPrimary',
    onClick: function onClick() {
      return openAddress({});
    },
    disabled: (orderState === null || orderState === void 0 ? void 0 : orderState.loading) || actionStatus.loading
  }, orderState !== null && orderState !== void 0 && orderState.loading || actionStatus.loading ? t('LOADING', 'Loading') : t('ADD_NEW_ADDRESS', 'Add new address')), !addressList.loading && !actionStatus.loading && !orderState.loading && !addressList.error && (addressList === null || addressList === void 0 || (_addressList$addresse3 = addressList.addresses) === null || _addressList$addresse3 === void 0 ? void 0 : _addressList$addresse3.length) > 0 && _typeof((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.address) === 'object' && (!addressOpen && isPopover || isModal || isSeletectedUserAddresses) && /*#__PURE__*/_react.default.createElement(_styles.AddressListUl, {
    id: "list"
  }, uniqueAddressesList.map(function (address) {
    return /*#__PURE__*/_react.default.createElement(_styles.AddressItem, {
      key: address === null || address === void 0 ? void 0 : address.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "wrapAddress",
      onClick: function onClick() {
        return handleSetAddress(address);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "radio"
    }, address !== null && address !== void 0 && address.default ? /*#__PURE__*/_react.default.createElement(_IosRadioButtonOn.default, {
      color: theme.colors.primary
    }) : /*#__PURE__*/_react.default.createElement(_IosRadioButtonOff.default, null)), /*#__PURE__*/_react.default.createElement("span", {
      className: "tag"
    }, (address === null || address === void 0 ? void 0 : address.tag) === 'home' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null), (address === null || address === void 0 ? void 0 : address.tag) === 'office' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Building, null), (address === null || address === void 0 ? void 0 : address.tag) === 'favorite' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.SuitHeart, null), ((address === null || address === void 0 ? void 0 : address.tag) === 'other' || !(address !== null && address !== void 0 && address.tag)) && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusLg, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "address"
    }, /*#__PURE__*/_react.default.createElement("span", null, address.address), /*#__PURE__*/_react.default.createElement("span", null, address.internal_number, " ", address.zipcode))), /*#__PURE__*/_react.default.createElement(_styles.AddressItemActions, {
      className: "form"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: actionStatus.loading ? 'disabled' : '',
      onClick: function onClick() {
        return openAddress(address);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, null)), /*#__PURE__*/_react.default.createElement("a", {
      className: actionStatus.loading || address.default ? 'disabled' : '',
      onClick: function onClick() {
        return handleDeleteClick(address);
      }
    }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, null))));
  }), isEnableContinueButton && uniqueAddressesList.map(function (address) {
    return address.default && /*#__PURE__*/_react.default.createElement(_styles.ContinueButton, {
      key: address.id
    }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      onClick: function onClick() {
        return handleSetAddress(address);
      }
    }, t('CONTINUE_WITH', 'Continue with'), ": ", address.address));
  })), !(addressList.loading || actionStatus.loading || orderState.loading) && !addressList.error && (addressList === null || addressList === void 0 || (_addressList$addresse4 = addressList.addresses) === null || _addressList$addresse4 === void 0 ? void 0 : _addressList$addresse4.length) === 0 && !isProductForm && /*#__PURE__*/_react.default.createElement(_styles.WrappNotAddresses, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.notFound,
    alt: "Not Found",
    width: "200px",
    height: "112px",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("h1", null, t('NOT_FOUND_ADDRESS', 'Sorry, You don\'t seem to have any addresses.'))), !(addressList.loading || actionStatus.loading || orderState.loading) && addressList.error && addressList.error.length > 0 && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: ((_addressList$error$ = addressList.error[0]) === null || _addressList$error$ === void 0 ? void 0 : _addressList$error$.message) || addressList.error[0]
  }), !(addressList.loading || actionStatus.loading || orderState.loading) && _typeof((_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.address) !== 'object' && !addressList.error && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('NETWORK_ERROR', 'Network error, please reload the page')
  }), (addressList.loading || actionStatus.loading || orderState.loading) && !isProductForm && /*#__PURE__*/_react.default.createElement(_styles.AddressListUl, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    count: 3,
    style: {
      marginBottom: '10px'
    }
  })), onCancel && onAccept && _typeof((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.address) === 'object' && /*#__PURE__*/_react.default.createElement(_styles.FormActions, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    type: "button",
    disabled: addressList.loading || actionStatus.loading || orderState.loading,
    onClick: function onClick() {
      return onCancel();
    }
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    disabled: addressList.loading || actionStatus.loading || orderState.loading,
    id: "second-btn",
    color: "primary",
    onClick: function onClick() {
      return onAccept();
    }
  }, t('ACCEPT', 'Accept'))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('SEARCH', 'Search'),
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
  })), addressOpen && isSeletectedUserAddresses && /*#__PURE__*/_react.default.createElement(_styles.WrapperAddressForm, null, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    isSeletectedUserAddresses: true,
    userId: userId,
    addressesList: addressList === null || addressList === void 0 ? void 0 : addressList.addresses,
    useValidationFileds: true,
    address: curAddress,
    onCancel: function onCancel() {
      return setAddressOpen(false);
    },
    onSaveAddress: handleSaveAddress,
    userCustomerSetup: userCustomerSetup
  })));
};
var AddressList = function AddressList(props) {
  var addressListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AddressListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AddressList, addressListProps);
};
exports.AddressList = AddressList;