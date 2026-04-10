"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessLocation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessLocation = exports.BusinessLocation = function BusinessLocation(props) {
  var _configs$google_maps_, _configs$google_maps_2, _ref2, _formState$changes$ti, _formState$changes, _ref3, _formState$changes$ad, _formState$changes2, _configs$country_auto, _formState$result, _formState$result2, _ref4, _formState$changes$ad2, _formState$changes3;
  var business = props.business,
    formState = props.formState,
    setFormState = props.setFormState,
    handleUpdateBusinessClick = props.handleUpdateBusinessClick;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var googleMapsApiKey = configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    location = _useState2[0],
    setLocation = _useState2[1];
  var googleInputRef = (0, _react.useRef)(null);
  var googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  };
  var handleChangeBusinessCity = function handleChangeBusinessCity(cityId) {
    setFormState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        changes: _objectSpread(_objectSpread({}, prevState === null || prevState === void 0 ? void 0 : prevState.changes), {}, {
          city_id: cityId
        })
      });
    });
  };
  var handleChangeAddress = function handleChangeAddress(address) {
    getTimeZone(address);
    setLocation(_objectSpread({}, address.location));
  };
  var handleChangeInput = function handleChangeInput(value) {
    setFormState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        changes: _objectSpread(_objectSpread({}, prevState === null || prevState === void 0 ? void 0 : prevState.changes), {}, {
          address: value
        })
      });
    });
  };
  var handleChangeTextarea = function handleChangeTextarea(value) {
    setFormState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        changes: _objectSpread(_objectSpread({}, prevState === null || prevState === void 0 ? void 0 : prevState.changes), {}, {
          address_notes: value
        })
      });
    });
  };
  var getTimeZone = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(address) {
      var _address$location, _address$location2;
      var date, timestamp, timezoneApiKey, url, response, result;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            date = new Date();
            timestamp = Math.floor(date.getTime() / 1000);
            timezoneApiKey = googleMapsApiKey === 'AIzaSyBvsSkMYPSDSkdk7YFrSf5FoGonIzr6fJ0' ? 'AIzaSyCYPCOfiTo9jxuxLWnWTup6mmICPxfLegI' : googleMapsApiKey;
            url = "https://maps.googleapis.com/maps/api/timezone/json?location=".concat(address === null || address === void 0 || (_address$location = address.location) === null || _address$location === void 0 ? void 0 : _address$location.lat, ",").concat(address === null || address === void 0 || (_address$location2 = address.location) === null || _address$location2 === void 0 ? void 0 : _address$location2.lng, "&timestamp=").concat(timestamp, "&key=").concat(timezoneApiKey);
            _context.n = 1;
            return fetch(url, {
              method: 'GET'
            });
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.json();
          case 2:
            result = _context.v;
            setFormState(function (prevState) {
              var _googleInputRef$curre, _address$zipcode;
              return _objectSpread(_objectSpread({}, prevState), {}, {
                changes: _objectSpread(_objectSpread({}, prevState === null || prevState === void 0 ? void 0 : prevState.changes), {}, {
                  address: (googleInputRef === null || googleInputRef === void 0 || (_googleInputRef$curre = googleInputRef.current) === null || _googleInputRef$curre === void 0 ? void 0 : _googleInputRef$curre.value) || (address === null || address === void 0 ? void 0 : address.address),
                  location: _objectSpread(_objectSpread({}, address === null || address === void 0 ? void 0 : address.location), {}, {
                    zipcode: address !== null && address !== void 0 && address.zipcode ? address.zipcode : -1,
                    zoom: 15
                  }),
                  timezone: result === null || result === void 0 ? void 0 : result.timeZoneId,
                  zipcode: (_address$zipcode = address === null || address === void 0 ? void 0 : address.zipcode) !== null && _address$zipcode !== void 0 ? _address$zipcode : -1
                })
              });
            });
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function getTimeZone(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleChangeCenter = function handleChangeCenter(address) {
    setFormState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        changes: _objectSpread(_objectSpread({}, prevState === null || prevState === void 0 ? void 0 : prevState.changes), {}, {
          location: _objectSpread(_objectSpread({}, business === null || business === void 0 ? void 0 : business.location), {}, {
            lat: address === null || address === void 0 ? void 0 : address.lat(),
            lng: address === null || address === void 0 ? void 0 : address.lng(),
            zoom: 15
          })
        })
      });
    });
  };
  (0, _react.useEffect)(function () {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {}
    }));
  }, []);
  (0, _react.useEffect)(function () {
    setLocation(_objectSpread({}, business === null || business === void 0 ? void 0 : business.location));
  }, [business === null || business === void 0 ? void 0 : business.location]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, location && /*#__PURE__*/_react.default.createElement(_styles2.WrapperMap, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 || (_configs$google_maps_2 = configs.google_maps_api_key) === null || _configs$google_maps_2 === void 0 ? void 0 : _configs$google_maps_2.value,
    location: location,
    mapControls: googleMapsControls,
    handleChangeCenter: handleChangeCenter,
    onlyMarkerChangeCenter: true
  })), /*#__PURE__*/_react.default.createElement(_styles2.Section, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperCitySelector, null, /*#__PURE__*/_react.default.createElement("p", null, t('CITY', 'City')), /*#__PURE__*/_react.default.createElement(_Shared.CitySelector, {
    isDefault: true,
    position: "left",
    optionInnerMaxHeight: "300px",
    defaultValue: business === null || business === void 0 ? void 0 : business.city_id,
    handleChangeCity: handleChangeBusinessCity
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperTimezone, null, /*#__PURE__*/_react.default.createElement("p", null, t('TIMEZONE', 'Timezone')), /*#__PURE__*/_react.default.createElement("p", null, (_ref2 = (_formState$changes$ti = (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.timezone) !== null && _formState$changes$ti !== void 0 ? _formState$changes$ti : business === null || business === void 0 ? void 0 : business.timezone) !== null && _ref2 !== void 0 ? _ref2 : ''))), /*#__PURE__*/_react.default.createElement(_styles2.WrapperGoogleAutoCompleteInput, null, /*#__PURE__*/_react.default.createElement("label", null, t('ADDRESS', 'Address')), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleAutocompleteInput, {
    className: "input-autocomplete",
    apiKey: googleMapsApiKey,
    placeholder: t('ADDRESS', 'Address'),
    onChangeAddress: function onChangeAddress(e) {
      handleChangeAddress(e);
    },
    onChange: function onChange(e) {
      handleChangeInput(e.target.value);
    },
    defaultValue: (_ref3 = (_formState$changes$ad = formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.address) !== null && _formState$changes$ad !== void 0 ? _formState$changes$ad : business === null || business === void 0 ? void 0 : business.address) !== null && _ref3 !== void 0 ? _ref3 : '',
    childRef: function childRef(ref) {
      googleInputRef.current = ref;
    },
    autoComplete: "new-password",
    countryCode: (configs === null || configs === void 0 || (_configs$country_auto = configs.country_autocomplete) === null || _configs$country_auto === void 0 ? void 0 : _configs$country_auto.value) || '*'
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperAddressnotes, null, /*#__PURE__*/_react.default.createElement("label", null, t('ADDRESS_NOTES', 'Address notes')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 4,
    defaultValue: formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.result ? formState === null || formState === void 0 || (_formState$result2 = formState.result) === null || _formState$result2 === void 0 || (_formState$result2 = _formState$result2.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.address_notes : (_ref4 = (_formState$changes$ad2 = formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.address_notes) !== null && _formState$changes$ad2 !== void 0 ? _formState$changes$ad2 : business === null || business === void 0 ? void 0 : business.address_notes) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      return handleChangeTextarea(e.target.value);
    },
    placeholder: t('MOBILE_FRONT_VISUALS_APT', 'Write an address note')
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "5px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0,
    onClick: handleUpdateBusinessClick
  }, formState.loading ? t('UPDATING', 'Updating') : t('SAVE', 'Save')));
};