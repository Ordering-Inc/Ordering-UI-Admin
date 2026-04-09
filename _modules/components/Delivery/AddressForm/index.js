"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _BiCurrentLocation = _interopRequireDefault(require("@meronex/icons/bi/BiCurrentLocation"));
var _HiOutlineLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineLocationMarker"));
var _CgSearchLoading = _interopRequireDefault(require("@meronex/icons/cg/CgSearchLoading"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactHookForm = require("react-hook-form");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _GoogleGpsButton = require("../GoogleGpsButton");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var inputNames = [{
  name: 'address',
  code: 'Address'
}, {
  name: 'internal_number',
  code: 'Internal number'
}, {
  name: 'zipcode',
  code: 'Zipcode'
}, {
  name: 'address_notes',
  code: 'Address notes'
}];
var AddressFormUI = function AddressFormUI(props) {
  var _addressState$address, _ref, _formState$changes$ad, _formState$changes, _addressState$address2, _addressState$address3, _addressState$address4, _formState$changes$lo, _formState$changes2, _configState$configs, _configState$configs2, _configState$configs3, _configState$configs4, _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _props$afterMidElemen, _props$afterMidCompon, _orderState$options6, _props$afterComponent, _props$afterElements;
  var addressesList = props.addressesList,
    googleMapsControls = props.googleMapsControls,
    formState = props.formState,
    addressState = props.addressState,
    isRequiredField = props.isRequiredField,
    showField = props.showField,
    updateChanges = props.updateChanges,
    onCancel = props.onCancel,
    handleChangeInput = props.handleChangeInput,
    saveAddress = props.saveAddress,
    setIsEdit = props.setIsEdit,
    userCustomerSetup = props.userCustomerSetup,
    isSeletectedUserAddresses = props.isSeletectedUserAddresses;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useOrder = (0, _orderingComponentsAdmin.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var formMethods = (0, _reactHookForm.useForm)();
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var googleInputRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)({
      selectedFromAutocomplete: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useState3 = (0, _react.useState)(addressState === null || addressState === void 0 || (_addressState$address = addressState.address) === null || _addressState$address === void 0 ? void 0 : _addressState$address.tag),
    _useState4 = _slicedToArray(_useState3, 2),
    addressTag = _useState4[0],
    setAddressTag = _useState4[1];
  // const [toggleMap, setToggleMap] = useState(false)
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)((_ref = (_formState$changes$ad = (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.address) !== null && _formState$changes$ad !== void 0 ? _formState$changes$ad : (_addressState$address2 = addressState.address) === null || _addressState$address2 === void 0 ? void 0 : _addressState$address2.address) !== null && _ref !== void 0 ? _ref : ''),
    _useState8 = _slicedToArray(_useState7, 2),
    addressValue = _useState8[0],
    setAddressValue = _useState8[1];
  var _useState9 = (0, _react.useState)({
      value: null
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    firstLocationNoEdit = _useState0[0],
    setFirstLocationNoEdit = _useState0[1];
  var isEditing = !!((_addressState$address3 = addressState.address) !== null && _addressState$address3 !== void 0 && _addressState$address3.id);
  var _useState1 = (0, _react.useState)(isEditing ? addressState === null || addressState === void 0 || (_addressState$address4 = addressState.address) === null || _addressState$address4 === void 0 ? void 0 : _addressState$address4.location : (_formState$changes$lo = (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.location) !== null && _formState$changes$lo !== void 0 ? _formState$changes$lo : null),
    _useState10 = _slicedToArray(_useState1, 2),
    locationChange = _useState10[0],
    setLocationChange = _useState10[1];
  var maxLimitLocation = parseInt(configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.meters_to_change_address) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value);
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.google_maps_api_key) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value;
  var isLocationRequired = ((_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.google_autocomplete_selection_required) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === '1' || ((_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 || (_configState$configs4 = _configState$configs4.google_autocomplete_selection_required) === null || _configState$configs4 === void 0 ? void 0 : _configState$configs4.value) === 'true';
  var mapErrors = {
    ERROR_NOT_FOUND_ADDRESS: 'Sorry, we couldn\'t find an address',
    ERROR_MAX_LIMIT_LOCATION: "Sorry, You can only set the position to ".concat(maxLimitLocation, "m")
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  /**
   * Returns true when the user made no changes
   * @param {object} address
   */
  var checkAddress = function checkAddress(address, addressToCompare) {
    var props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number'];
    var values = [];
    props.forEach(function (prop) {
      if (addressToCompare[prop]) {
        if (prop === 'location') {
          var _address$prop, _addressToCompare$pro, _address$prop2, _addressToCompare$pro2;
          values.push(((_address$prop = address[prop]) === null || _address$prop === void 0 ? void 0 : _address$prop.lat) === ((_addressToCompare$pro = addressToCompare[prop]) === null || _addressToCompare$pro === void 0 ? void 0 : _addressToCompare$pro.lat) && ((_address$prop2 = address[prop]) === null || _address$prop2 === void 0 ? void 0 : _address$prop2.lng) === ((_addressToCompare$pro2 = addressToCompare[prop]) === null || _addressToCompare$pro2 === void 0 ? void 0 : _addressToCompare$pro2.lng));
        } else {
          values.push(address[prop] === addressToCompare[prop]);
        }
      } else {
        values.push(!address[prop]);
      }
    });
    return values.every(function (value) {
      return value;
    });
  };
  var getAddressFormatted = function getAddressFormatted(addressChange) {
    var data = {
      address: null,
      error: null
    };
    var geocoder = window.google && new window.google.maps.Geocoder();
    geocoder.geocode({
      address: addressChange
    }, function (results, status) {
      var postalCode = null;
      if (status === 'OK' && results && results.length > 0) {
        var _results$, _results$$lat, _results$2, _results$2$lng, _results$0$utc_offset, _arrayList$map$some;
        var _iterator = _createForOfIteratorHelper(results === null || results === void 0 ? void 0 : results[0].address_components),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _component$types;
            var component = _step.value;
            var addressType = (_component$types = component.types) === null || _component$types === void 0 ? void 0 : _component$types[0];
            if (addressType === 'postal_code') {
              postalCode = component.short_name;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        data.address = {
          address: addressChange,
          location: {
            lat: results === null || results === void 0 || (_results$ = results[0]) === null || _results$ === void 0 || (_results$ = _results$.geometry) === null || _results$ === void 0 || (_results$ = _results$.location) === null || _results$ === void 0 || (_results$$lat = _results$.lat) === null || _results$$lat === void 0 ? void 0 : _results$$lat.call(_results$),
            lng: results === null || results === void 0 || (_results$2 = results[0]) === null || _results$2 === void 0 || (_results$2 = _results$2.geometry) === null || _results$2 === void 0 || (_results$2 = _results$2.location) === null || _results$2 === void 0 || (_results$2$lng = _results$2.lng) === null || _results$2$lng === void 0 ? void 0 : _results$2$lng.call(_results$2)
          },
          utc_offset: (_results$0$utc_offset = results === null || results === void 0 ? void 0 : results[0].utc_offset_minutes) !== null && _results$0$utc_offset !== void 0 ? _results$0$utc_offset : 0,
          map_data: {
            library: 'google',
            place_id: results === null || results === void 0 ? void 0 : results[0].place_id
          }
        };
        if (postalCode) {
          data.address.zipcode = postalCode;
        }
        var arrayList = isEditing ? addressesList.filter(function (address) {
          var _addressState$address5;
          return address.id !== ((_addressState$address5 = addressState.address) === null || _addressState$address5 === void 0 ? void 0 : _addressState$address5.id);
        }) || [] : addressesList || [];
        var addressToCompare = isEditing ? _objectSpread(_objectSpread(_objectSpread({}, addressState.address), data.address), formState === null || formState === void 0 ? void 0 : formState.changes) : _objectSpread(_objectSpread({}, data.address), formState === null || formState === void 0 ? void 0 : formState.changes);
        var isAddressAlreadyExist = (_arrayList$map$some = arrayList.map(function (address) {
          return checkAddress(address, addressToCompare);
        }).some(function (value) {
          return value;
        })) !== null && _arrayList$map$some !== void 0 ? _arrayList$map$some : false;
        if (!isAddressAlreadyExist) {
          saveAddress(data.address, userCustomerSetup);
          return;
        }
        setAlertState({
          open: true,
          content: [t('ADDRESS_ALREADY_EXIST', 'The address already exists')]
        });
      } else {
        setAlertState({
          open: true,
          content: [t('ERROR_NOT_FOUND_ADDRESS', 'Error, address not found')]
        });
      }
    });
  };
  var checkKeyDown = function checkKeyDown(e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode === 13) {
      e.preventDefault();
    }
  };
  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _formState$changes3, _addressState$address6, _formState$changes4, _formState$changes5, _arrayList$map$some2;
      var _formState$changes6, arrayList, addressToCompare, isAddressAlreadyExist;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!(!auth && (formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.address) === '' && addressState !== null && addressState !== void 0 && (_addressState$address6 = addressState.address) !== null && _addressState$address6 !== void 0 && _addressState$address6.address)) {
              _context.n = 1;
              break;
            }
            setAlertState({
              open: true,
              content: [t('VALIDATION_ERROR_ADDRESS_REQUIRED', 'The field Address is required')]
            });
            setLocationChange(null);
            return _context.a(2);
          case 1:
            if (!(formState !== null && formState !== void 0 && (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.address && !(formState !== null && formState !== void 0 && (_formState$changes5 = formState.changes) !== null && _formState$changes5 !== void 0 && _formState$changes5.location))) {
              _context.n = 3;
              break;
            }
            if (!isLocationRequired) {
              _context.n = 2;
              break;
            }
            setAlertState({
              open: true,
              content: [t('ADDRESS_REQUIRE_LOCATION', 'The address needs a location, please select one of the suggested')]
            });
            return _context.a(2);
          case 2:
            getAddressFormatted(formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.address);
            return _context.a(2);
          case 3:
            // setToggleMap(false)
            arrayList = isEditing ? (addressesList === null || addressesList === void 0 ? void 0 : addressesList.filter(function (address) {
              var _addressState$address7;
              return (address === null || address === void 0 ? void 0 : address.id) !== (addressState === null || addressState === void 0 || (_addressState$address7 = addressState.address) === null || _addressState$address7 === void 0 ? void 0 : _addressState$address7.id);
            })) || [] : addressesList || [];
            addressToCompare = isEditing ? _objectSpread(_objectSpread({}, addressState.address), formState.changes) : formState === null || formState === void 0 ? void 0 : formState.changes;
            isAddressAlreadyExist = (_arrayList$map$some2 = arrayList.map(function (address) {
              return checkAddress(address, addressToCompare);
            }).some(function (value) {
              return value;
            })) !== null && _arrayList$map$some2 !== void 0 ? _arrayList$map$some2 : false;
            if (isAddressAlreadyExist) {
              _context.n = 4;
              break;
            }
            saveAddress({}, userCustomerSetup);
            return _context.a(2);
          case 4:
            setAlertState({
              open: true,
              content: [t('ADDRESS_ALREADY_EXIST', 'The address already exists')]
            });
          case 5:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function onSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleAddressTag = function handleAddressTag(tag) {
    setAddressTag(tag);
    handleChangeInput({
      target: {
        name: 'tag',
        value: tag
      }
    });
  };
  var handleChangeAddress = function handleChangeAddress(address) {
    var _googleInputRef$curre;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      selectedFromAutocomplete: true
    }));
    updateChanges(_objectSpread(_objectSpread({}, address), {}, {
      address: (googleInputRef === null || googleInputRef === void 0 || (_googleInputRef$curre = googleInputRef.current) === null || _googleInputRef$curre === void 0 ? void 0 : _googleInputRef$curre.value) || address.address
    }));
  };
  var setMapErrors = function setMapErrors(errKey) {
    setAlertState({
      open: true,
      content: !(errKey === 'ERROR_MAX_LIMIT_LOCATION') ? [t(errKey, mapErrors[errKey])] : "".concat([t(errKey, mapErrors[errKey])], " ").concat(maxLimitLocation, " ").concat([t('METTERS', 'meters')])
    });
  };
  (0, _react.useEffect)(function () {
    var _formState$result, _ref5, _formState$changes$ad3, _formState$changes9, _addressState$address8, _ref6, _formState$changes$ad4, _formState$changes0, _addressState$address9;
    if (!auth) {
      var _ref3, _formState$changes$lo2, _formState$changes7, _orderState$options, _ref4, _formState$changes$ad2, _formState$changes8, _orderState$options2;
      setLocationChange((_ref3 = (_formState$changes$lo2 = formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.location) !== null && _formState$changes$lo2 !== void 0 ? _formState$changes$lo2 : orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 ? void 0 : _orderState$options.location) !== null && _ref3 !== void 0 ? _ref3 : '');
      setAddressValue((_ref4 = (_formState$changes$ad2 = formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.address) !== null && _formState$changes$ad2 !== void 0 ? _formState$changes$ad2 : orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2.address) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.address) !== null && _ref4 !== void 0 ? _ref4 : '');
      inputNames.forEach(function (field) {
        var _orderState$options3, _orderState$options4;
        return formMethods.setValue(field.name, (formState === null || formState === void 0 ? void 0 : formState.changes[field.name]) || (orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.address) && (orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.address[field.name]) || '');
      });
      return;
    }
    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
    setAddressValue((_ref5 = (_formState$changes$ad3 = formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.address) !== null && _formState$changes$ad3 !== void 0 ? _formState$changes$ad3 : (_addressState$address8 = addressState.address) === null || _addressState$address8 === void 0 ? void 0 : _addressState$address8.address) !== null && _ref5 !== void 0 ? _ref5 : '');
    formMethods.setValue('address', (_ref6 = (_formState$changes$ad4 = formState === null || formState === void 0 || (_formState$changes0 = formState.changes) === null || _formState$changes0 === void 0 ? void 0 : _formState$changes0.address) !== null && _formState$changes$ad4 !== void 0 ? _formState$changes$ad4 : (_addressState$address9 = addressState.address) === null || _addressState$address9 === void 0 ? void 0 : _addressState$address9.address) !== null && _ref6 !== void 0 ? _ref6 : '');
    if (!isEditing) {
      var _formState$changes1, _formState$changes10, _formState$changes11, _formState$changes12, _formState$changes13, _formState$changes14, _firstLocationNoEdit$, _formState$changes15, _firstLocationNoEdit$2;
      inputNames.forEach(function (field) {
        return formMethods.setValue(field.name, (formState === null || formState === void 0 ? void 0 : formState.changes[field.name]) || '');
      });
      (formState === null || formState === void 0 || (_formState$changes1 = formState.changes) === null || _formState$changes1 === void 0 ? void 0 : _formState$changes1.address) && setLocationChange(formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.location);
      if (formState !== null && formState !== void 0 && (_formState$changes11 = formState.changes) !== null && _formState$changes11 !== void 0 && _formState$changes11.address && (formState === null || formState === void 0 || (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.address) !== (firstLocationNoEdit === null || firstLocationNoEdit === void 0 ? void 0 : firstLocationNoEdit.address) && formState !== null && formState !== void 0 && (_formState$changes13 = formState.changes) !== null && _formState$changes13 !== void 0 && _formState$changes13.location && (formState === null || formState === void 0 || (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 || (_formState$changes14 = _formState$changes14.location) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.lat) !== ((_firstLocationNoEdit$ = firstLocationNoEdit.value) === null || _firstLocationNoEdit$ === void 0 ? void 0 : _firstLocationNoEdit$.lat) && (formState === null || formState === void 0 || (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 || (_formState$changes15 = _formState$changes15.location) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.lng) !== ((_firstLocationNoEdit$2 = firstLocationNoEdit.value) === null || _firstLocationNoEdit$2 === void 0 ? void 0 : _firstLocationNoEdit$2.lng)) {
        var _formState$changes16, _formState$changes17;
        setFirstLocationNoEdit({
          value: formState === null || formState === void 0 || (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : _formState$changes16.location,
          address: formState === null || formState === void 0 || (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : _formState$changes17.address
        });
      }
    }
    if (isEditing) {
      var _formState$changes18;
      if (formState !== null && formState !== void 0 && (_formState$changes18 = formState.changes) !== null && _formState$changes18 !== void 0 && _formState$changes18.location) {
        var _formState$changes19, _formState$changes20;
        var prevLocation = {
          lat: Math.trunc(locationChange.lat),
          lng: Math.trunc(locationChange.lng)
        };
        var newLocation = {
          lat: Math.trunc(formState === null || formState === void 0 || (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 || (_formState$changes19 = _formState$changes19.location) === null || _formState$changes19 === void 0 ? void 0 : _formState$changes19.lat),
          lng: Math.trunc(formState === null || formState === void 0 || (_formState$changes20 = formState.changes) === null || _formState$changes20 === void 0 || (_formState$changes20 = _formState$changes20.location) === null || _formState$changes20 === void 0 ? void 0 : _formState$changes20.lng)
        };
        if (prevLocation.lat !== newLocation.lat && prevLocation.lng !== newLocation.lng) {
          var _formState$changes21;
          setLocationChange(formState === null || formState === void 0 || (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 ? void 0 : _formState$changes21.location);
        }
      }
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    if (isEditing) {
      var _addressState$address0;
      setIsEdit && setIsEdit(true);
      setAddressValue((_addressState$address0 = addressState.address) === null || _addressState$address0 === void 0 ? void 0 : _addressState$address0.address);
    } else {
      setIsEdit && setIsEdit(false);
    }
  }, [addressState]);
  (0, _react.useEffect)(function () {
    if (!auth) {
      var _ref7, _formState$changes$lo3, _formState$changes22, _orderState$options5;
      setLocationChange((_ref7 = (_formState$changes$lo3 = formState === null || formState === void 0 || (_formState$changes22 = formState.changes) === null || _formState$changes22 === void 0 ? void 0 : _formState$changes22.location) !== null && _formState$changes$lo3 !== void 0 ? _formState$changes$lo3 : orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.address) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.location) !== null && _ref7 !== void 0 ? _ref7 : '');
    }
    return function () {
      setFirstLocationNoEdit({
        value: null
      });
    };
  }, []);

  /** Form events control */

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
  (0, _react.useEffect)(function () {
    inputNames.forEach(function (field) {
      formMethods.register(field.name, {
        required: isRequiredField(field.name) ? t("VALIDATION_ERROR_".concat(field.name, "_REQUIRED"), "The field ".concat(field.code, " is required")) : null
      });
    });
  }, [formMethods]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "address-form"
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), (configState.loading || addressState.loading) && /*#__PURE__*/_react.default.createElement(_styles2.WrapperSkeleton, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    count: 5,
    style: {
      marginBottom: '10px'
    }
  })), isSeletectedUserAddresses && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, Object.keys(props === null || props === void 0 ? void 0 : props.address).length === 0 ? t('ADD_ADDRESS', 'Add address') : t('EDIT_ADDRESS', 'Edit address')), /*#__PURE__*/_react.default.createElement(_styles2.CloseButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onCancel();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), !configState.loading && !addressState.loading && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    onKeyDown: function onKeyDown(e) {
      return checkKeyDown(e);
    },
    autoComplete: "off"
  }, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), locationChange && /*#__PURE__*/_react.default.createElement(_styles2.WrapperMap, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleMapsMap, {
    apiKey: googleMapsApiKey,
    location: locationChange,
    fixedLocation: !isEditing ? firstLocationNoEdit.value : null,
    mapControls: googleMapsControls,
    handleChangeAddressMap: handleChangeAddress,
    setErrors: setMapErrors,
    maxLimitLocation: maxLimitLocation
  })), inputNames.map(function (field) {
    var _formState$result3, _formState$result4, _formState$changes$ad5, _formState$changes23, _configState$configs5, _ref8, _formState$changes$fi, _formState$changes24, _addressState$address1, _ref9, _formState$changes$ad6, _formState$changes25;
    return showField && showField(field.name) && (field.name === 'address' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.name
    }, /*#__PURE__*/_react.default.createElement(_styles2.InputText, null, t('ADDRESS', 'Addresss')), /*#__PURE__*/_react.default.createElement(_styles2.AddressWrap, {
      className: "google-control"
    }, /*#__PURE__*/_react.default.createElement(_styles2.WrapAddressInput, null, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, null), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleAutocompleteInput, {
      className: "input-autocomplete",
      apiKey: googleMapsApiKey,
      placeholder: t('ADDRESS', 'Address'),
      onChangeAddress: function onChangeAddress(e) {
        formMethods.setValue('address', e.address);
        handleChangeAddress(e);
      },
      onChange: function onChange(e) {
        handleChangeInput({
          target: {
            name: 'address',
            value: e.target.value
          }
        });
        setAddressValue(e.target.value);
      },
      defaultValue: formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result ? formState === null || formState === void 0 || (_formState$result4 = formState.result) === null || _formState$result4 === void 0 || (_formState$result4 = _formState$result4.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.address : (_formState$changes$ad5 = formState === null || formState === void 0 || (_formState$changes23 = formState.changes) === null || _formState$changes23 === void 0 ? void 0 : _formState$changes23.address) !== null && _formState$changes$ad5 !== void 0 ? _formState$changes$ad5 : addressValue,
      childRef: function childRef(ref) {
        googleInputRef.current = ref;
      },
      autoComplete: "new-password",
      countryCode: (configState === null || configState === void 0 || (_configState$configs5 = configState.configs) === null || _configState$configs5 === void 0 || (_configState$configs5 = _configState$configs5.country_autocomplete) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value) || '*'
    })), /*#__PURE__*/_react.default.createElement(_GoogleGpsButton.GoogleGpsButton, {
      className: "gps-button",
      apiKey: googleMapsApiKey,
      onAddress: function onAddress(e) {
        formMethods.setValue('address', e.address);
        handleChangeAddress(e);
      },
      onError: setMapErrors,
      IconButton: _BiCurrentLocation.default,
      IconLoadingButton: _CgSearchLoading.default
    }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.name
    }, field.name !== 'address_notes' ? /*#__PURE__*/_react.default.createElement(_styles2.WrapInput, {
      className: field.name
    }, /*#__PURE__*/_react.default.createElement(_styles2.InputText, null, t(field.name.toUpperCase(), field.code)), /*#__PURE__*/_react.default.createElement(_styles.Input, {
      placeholder: t(field.name.toUpperCase(), field.code),
      value: (_ref8 = (_formState$changes$fi = (_formState$changes24 = formState.changes) === null || _formState$changes24 === void 0 ? void 0 : _formState$changes24[field.name]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : (_addressState$address1 = addressState.address) === null || _addressState$address1 === void 0 ? void 0 : _addressState$address1[field.name]) !== null && _ref8 !== void 0 ? _ref8 : '',
      onChange: function onChange(e) {
        formMethods.setValue(field.name, e.target.value);
        handleChangeInput({
          target: {
            name: field.name,
            value: e.target.value
          }
        });
      },
      autoComplete: "new-field",
      maxLength: 30
    })) : /*#__PURE__*/_react.default.createElement(_styles2.WrapInput, {
      className: "address_notes"
    }, /*#__PURE__*/_react.default.createElement(_styles2.InputText, null, t('ADDRESS_NOTES', 'Address Notes')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
      rows: 4,
      placeholder: t('ADDRESS_NOTES', 'Address Notes'),
      value: (_ref9 = (_formState$changes$ad6 = (_formState$changes25 = formState.changes) === null || _formState$changes25 === void 0 ? void 0 : _formState$changes25.address_notes) !== null && _formState$changes$ad6 !== void 0 ? _formState$changes$ad6 : addressState.address.address_notes) !== null && _ref9 !== void 0 ? _ref9 : '',
      onChange: function onChange(e) {
        formMethods.setValue('address_notes', e.target.value);
        handleChangeInput({
          target: {
            name: 'address_notes',
            value: e.target.value
          }
        });
      },
      autoComplete: "new-field",
      maxLength: 250
    }))));
  }), !formState.loading && formState.error && /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: '#c10000'
    }
  }, formState.error), /*#__PURE__*/_react.default.createElement(_styles2.AddressTagSection, null, /*#__PURE__*/_react.default.createElement(_styles2.TagButton, {
    type: "button",
    active: addressTag === 'home' ? 'active' : '',
    onClick: function onClick() {
      return handleAddressTag('home');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null), t('HOME', 'Home')), /*#__PURE__*/_react.default.createElement(_styles2.TagButton, {
    type: "button",
    active: addressTag === 'office' ? 'active' : '',
    onClick: function onClick() {
      return handleAddressTag('office');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Building, null), t('OFFICE', 'Office')), /*#__PURE__*/_react.default.createElement(_styles2.TagButton, {
    type: "button",
    active: addressTag === 'favorite' ? 'active' : '',
    onClick: function onClick() {
      return handleAddressTag('favorite');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.SuitHeart, null), t('ADDRESS_TAG_FAVORITE', 'Favorite')), /*#__PURE__*/_react.default.createElement(_styles2.TagButton, {
    type: "button",
    active: addressTag === 'other' ? 'active' : '',
    onClick: function onClick() {
      return handleAddressTag('other');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusLg, null), t('MORE', 'More'))), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles2.FormActions, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    id: "submit-btn",
    type: "submit",
    borderRadius: "5px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0,
    color: "primary"
  }, !formState.loading ? isEditing || !auth && (_orderState$options6 = orderState.options) !== null && _orderState$options6 !== void 0 && (_orderState$options6 = _orderState$options6.address) !== null && _orderState$options6 !== void 0 && _orderState$options6.address ? t('SAVE', 'SAVE') : t('ADD', 'Add') : t('LOADING', 'Loading')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ADDRESS', 'Address'),
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
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var AddressForm = exports.AddressForm = function AddressForm(props) {
  var googleMapsControls = {
    defaultZoom: 17,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  };
  var addressFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AddressFormUI,
    googleMapsControls: googleMapsControls,
    isSelectedAfterAdd: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AddressForm, addressFormProps);
};