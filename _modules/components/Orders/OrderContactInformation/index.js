"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderContactInformation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _BisBusiness = _interopRequireDefault(require("@meronex/icons/bi/BisBusiness"));
var _DriverSelector = require("../DriverSelector");
var _CompanySelector = require("../CompanySelector");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _ReviewCustomer = require("../ReviewCustomer");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderContactInformation = exports.OrderContactInformation = function OrderContactInformation(props) {
  var _configs$google_maps_, _configs$disable_comp, _order$business, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _order$business7, _order$business8, _order$business9, _order$business0, _order$business1, _order$business10, _order$business11, _order$business12, _order$business13, _order$customer, _order$customer2, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9, _order$customer0, _order$customer1, _order$customer10, _order$customer11, _ref2, _customerInfoState$cu, _customerInfoState$cu2, _order$customer15, _ref3, _customerInfoState$cu3, _customerInfoState$cu4, _order$customer16, _order$customer$addre, _order$customer17, _configs$country_auto, _configs$google_maps_2, _ref4, _addressState$locatio, _order$customer18, _ref5, _customerInfoState$cu5, _customerInfoState$cu6, _order$customer19, _order$customer20, _order$customer21, _order$customer22, _order$customer23, _order$customer24, _order$customer25, _order$customer26, _order$customer27, _order$customer28, _order$customer29, _order$customer30, _order$customer31, _order$customer32, _order$customer33, _order$customer34, _order$customer35, _order$customer36, _order$customer37, _order$customer38, _order$customer39, _order$customer40, _order$customer41, _order$customer42, _order$customer43, _order$driver_company, _ref6, _commentInfoState$dri, _order$driver, _order$external_drive, _order$driver2, _order$external_drive2, _order$driver3, _order$driver4, _order$driver5, _order$driver6, _order$driver7, _order$external_drive3, _order$external_drive4;
  var order = props.order,
    customerInfoState = props.customerInfoState,
    handleChangeCustomerInfoState = props.handleChangeCustomerInfoState,
    isTourOpen = props.isTourOpen,
    setCurrentTourStep = props.setCurrentTourStep,
    handleOpenMessages = props.handleOpenMessages,
    isServiceOrder = props.isServiceOrder,
    handleUpdateCustomerInfo = props.handleUpdateCustomerInfo,
    setAddressState = props.setAddressState,
    setCommentInfostate = props.setCommentInfostate,
    commentInfoState = props.commentInfoState,
    addressState = props.addressState,
    disableSocketRoomDriver = props.disableSocketRoomDriver;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var googleInputRef = (0, _react.useRef)(null);
  var readOnlyBusinessOwner = user === null || user === void 0 ? void 0 : user.readOnlyBusinessOwner;
  var googleMapsApiKey = configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var isDisableDriverCompanies = (configs === null || configs === void 0 || (_configs$disable_comp = configs.disable_companies_order_details) === null || _configs$disable_comp === void 0 ? void 0 : _configs$disable_comp.value) === '1';
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
  var defaultPosition = {
    lat: 40.77473399999999,
    lng: -73.9653844
  };
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    currentCustomer = _useState4[0],
    setCurrentCustomer = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isEdit = _useState6[0],
    setIsEdit = _useState6[1];
  var pastOrderStatuses = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17];
  var deliveryTypes = [1, 7];
  var handleReviewCustomer = function handleReviewCustomer(customer) {
    setCurrentCustomer(customer);
    setIsModalOpen(true);
  };
  var handleCustomerReviewed = function handleCustomerReviewed() {
    setIsModalOpen(false);
  };
  var handleEdit = function handleEdit(event) {
    if (event.target.closest('#accordion1').getAttribute('data-id') === '1') {
      event.stopPropagation();
      setIsEdit(function (prev) {
        return !prev;
      });
    } else {
      setIsEdit(true);
    }
  };
  var handleChangeAddress = function handleChangeAddress(e) {
    var _googleInputRef$curre;
    setAddressState({
      address: (googleInputRef === null || googleInputRef === void 0 || (_googleInputRef$curre = googleInputRef.current) === null || _googleInputRef$curre === void 0 ? void 0 : _googleInputRef$curre.value) || (e === null || e === void 0 ? void 0 : e.address),
      location: e === null || e === void 0 ? void 0 : e.location,
      zipcode: e === null || e === void 0 ? void 0 : e.zipcode
    });
  };
  var handleUpdateCustomer = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return handleUpdateCustomerInfo();
          case 1:
            setIsEdit(false);
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleUpdateCustomer() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleChangeCenter = function handleChangeCenter(position) {
    var newLat = position.lat();
    var newLng = position.lng();
    setAddressState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        location: {
          lat: newLat,
          lng: newLng
        }
      });
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, (user === null || user === void 0 ? void 0 : user.level) !== 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$business = order.business) !== null && _order$business !== void 0 && _order$business.logo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, order === null || order === void 0 || (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement(_styles2.ActionIconWrapper, null, (order === null || order === void 0 || (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.phone) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      return window.open("tel:".concat(order.business.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null)))), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.phone)), /*#__PURE__*/_react.default.createElement(_styles2.ActionIconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronDown, {
    className: "down-arrow"
  })))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CutsomerDetail, null, /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfoTable, null, /*#__PURE__*/_react.default.createElement("tbody", null, (order === null || order === void 0 || (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.email) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto: ".concat(order === null || order === void 0 || (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.email)
  }, order === null || order === void 0 || (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.email))), (order === null || order === void 0 || (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.address) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CHECKOUT_FULL_ADDRESS', 'Full address')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://maps.google.com/?q=".concat(order === null || order === void 0 || (_order$business0 = order.business) === null || _order$business0 === void 0 ? void 0 : _order$business0.address),
    rel: "noopener noreferrer",
    target: "_blank"
  }, order === null || order === void 0 || (_order$business1 = order.business) === null || _order$business1 === void 0 ? void 0 : _order$business1.address))), (order === null || order === void 0 || (_order$business10 = order.business) === null || _order$business10 === void 0 ? void 0 : _order$business10.address_notes) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('NOTES', 'Notes')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 || (_order$business11 = order.business) === null || _order$business11 === void 0 ? void 0 : _order$business11.address_notes)), (order === null || order === void 0 || (_order$business12 = order.business) === null || _order$business12 === void 0 ? void 0 : _order$business12.zipcode) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 || (_order$business13 = order.business) === null || _order$business13 === void 0 ? void 0 : _order$business13.zipcode))))))), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$customer = order.customer) !== null && _order$customer !== void 0 && _order$customer.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(order === null || order === void 0 || (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, order !== null && order !== void 0 && (_order$customer3 = order.customer) !== null && _order$customer3 !== void 0 && _order$customer3.name || order !== null && order !== void 0 && (_order$customer4 = order.customer) !== null && _order$customer4 !== void 0 && _order$customer4.middle_name || order !== null && order !== void 0 && (_order$customer5 = order.customer) !== null && _order$customer5 !== void 0 && _order$customer5.lastname || order !== null && order !== void 0 && (_order$customer6 = order.customer) !== null && _order$customer6 !== void 0 && _order$customer6.second_lastname ? /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, order === null || order === void 0 || (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.name, " ", order === null || order === void 0 || (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.middle_name, " ", order === null || order === void 0 || (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.lastname, " ", order === null || order === void 0 || (_order$customer0 = order.customer) === null || _order$customer0 === void 0 ? void 0 : _order$customer0.second_lastname) : (!(order !== null && order !== void 0 && (_order$customer1 = order.customer) !== null && _order$customer1 !== void 0 && _order$customer1.email) || !(order !== null && order !== void 0 && (_order$customer10 = order.customer) !== null && _order$customer10 !== void 0 && _order$customer10.phone)) && /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, t('GUEST_USER', 'Guest user')), (order === null || order === void 0 || (_order$customer11 = order.customer) === null || _order$customer11 === void 0 ? void 0 : _order$customer11.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      var _order$customer12, _order$customer13, _order$customer14;
      return window.open("tel:".concat(order !== null && order !== void 0 && (_order$customer12 = order.customer) !== null && _order$customer12 !== void 0 && _order$customer12.country_phone_code ? '+' + (order === null || order === void 0 || (_order$customer13 = order.customer) === null || _order$customer13 === void 0 ? void 0 : _order$customer13.country_phone_code) : '').concat(order === null || order === void 0 || (_order$customer14 = order.customer) === null || _order$customer14 === void 0 ? void 0 : _order$customer14.cellphone));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null))), !(order !== null && order !== void 0 && order.user_review) && pastOrderStatuses.includes(order === null || order === void 0 ? void 0 : order.status) && /*#__PURE__*/_react.default.createElement(_styles2.ReviewButton, {
    onClick: function onClick() {
      return handleReviewCustomer(order === null || order === void 0 ? void 0 : order.customer);
    }
  }, t('REVIEW', 'Review'))), !readOnlyBusinessOwner && /*#__PURE__*/_react.default.createElement(_styles2.ActionIconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, {
    className: "edit-icon",
    onClick: handleEdit
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronDown, {
    className: "down-arrow"
  })))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CutsomerDetail, null, isEdit ? /*#__PURE__*/_react.default.createElement(_styles2.CustomerEditWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "(603) 555-0123",
    value: (_ref2 = (_customerInfoState$cu = customerInfoState === null || customerInfoState === void 0 || (_customerInfoState$cu2 = customerInfoState.customer) === null || _customerInfoState$cu2 === void 0 ? void 0 : _customerInfoState$cu2.cellphone) !== null && _customerInfoState$cu !== void 0 ? _customerInfoState$cu : order === null || order === void 0 || (_order$customer15 = order.customer) === null || _order$customer15 === void 0 ? void 0 : _order$customer15.cellphone) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      handleChangeCustomerInfoState({
        cellphone: e.target.value
      });
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "jane.cooper@example.com",
    value: (_ref3 = (_customerInfoState$cu3 = customerInfoState === null || customerInfoState === void 0 || (_customerInfoState$cu4 = customerInfoState.customer) === null || _customerInfoState$cu4 === void 0 ? void 0 : _customerInfoState$cu4.email) !== null && _customerInfoState$cu3 !== void 0 ? _customerInfoState$cu3 : order === null || order === void 0 || (_order$customer16 = order.customer) === null || _order$customer16 === void 0 ? void 0 : _order$customer16.email) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      handleChangeCustomerInfoState({
        email: e.target.value
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleAutocompleteInput, {
    name: "address",
    className: "input-autocomplete",
    apiKey: googleMapsApiKey,
    placeholder: t('ADDRESS', 'Address'),
    onChangeAddress: function onChangeAddress(e) {
      handleChangeAddress(e);
    },
    defaultValue: (_order$customer$addre = order === null || order === void 0 || (_order$customer17 = order.customer) === null || _order$customer17 === void 0 ? void 0 : _order$customer17.address) !== null && _order$customer$addre !== void 0 ? _order$customer$addre : '',
    childRef: function childRef(ref) {
      googleInputRef.current = ref;
    },
    autoComplete: "new-password",
    countryCode: (configs === null || configs === void 0 || (_configs$country_auto = configs.country_autocomplete) === null || _configs$country_auto === void 0 ? void 0 : _configs$country_auto.value) || '*'
  }), /*#__PURE__*/_react.default.createElement(_styles2.WrapperMap, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 || (_configs$google_maps_2 = configs.google_maps_api_key) === null || _configs$google_maps_2 === void 0 ? void 0 : _configs$google_maps_2.value,
    location: (_ref4 = (_addressState$locatio = addressState === null || addressState === void 0 ? void 0 : addressState.location) !== null && _addressState$locatio !== void 0 ? _addressState$locatio : order === null || order === void 0 || (_order$customer18 = order.customer) === null || _order$customer18 === void 0 ? void 0 : _order$customer18.location) !== null && _ref4 !== void 0 ? _ref4 : defaultPosition,
    mapControls: googleMapsControls,
    handleChangeCenter: handleChangeCenter,
    onlyMarkerChangeCenter: true
  })), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('NOTES', 'Notes'),
    defaultValue: (_ref5 = (_customerInfoState$cu5 = customerInfoState === null || customerInfoState === void 0 || (_customerInfoState$cu6 = customerInfoState.customer) === null || _customerInfoState$cu6 === void 0 ? void 0 : _customerInfoState$cu6.address_notes) !== null && _customerInfoState$cu5 !== void 0 ? _customerInfoState$cu5 : order === null || order === void 0 || (_order$customer19 = order.customer) === null || _order$customer19 === void 0 ? void 0 : _order$customer19.address_notes) !== null && _ref5 !== void 0 ? _ref5 : '',
    onChange: function onChange(e) {
      handleChangeCustomerInfoState({
        address_notes: e.target.value
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleUpdateCustomer
  }, customerInfoState !== null && customerInfoState !== void 0 && customerInfoState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save'))) : /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfoTable, null, /*#__PURE__*/_react.default.createElement("tbody", null, (order === null || order === void 0 || (_order$customer20 = order.customer) === null || _order$customer20 === void 0 ? void 0 : _order$customer20.cellphone) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CELLPHONE', 'Phone / Mobile')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "tel:".concat(order !== null && order !== void 0 && (_order$customer21 = order.customer) !== null && _order$customer21 !== void 0 && _order$customer21.country_phone_code ? '+' + (order === null || order === void 0 || (_order$customer22 = order.customer) === null || _order$customer22 === void 0 ? void 0 : _order$customer22.country_phone_code) : '').concat(order === null || order === void 0 || (_order$customer23 = order.customer) === null || _order$customer23 === void 0 ? void 0 : _order$customer23.cellphone)
  }, (order === null || order === void 0 || (_order$customer24 = order.customer) === null || _order$customer24 === void 0 ? void 0 : _order$customer24.country_phone_code) && "+".concat(order === null || order === void 0 || (_order$customer25 = order.customer) === null || _order$customer25 === void 0 ? void 0 : _order$customer25.country_phone_code), " ", order === null || order === void 0 || (_order$customer26 = order.customer) === null || _order$customer26 === void 0 ? void 0 : _order$customer26.cellphone))), (order === null || order === void 0 || (_order$customer27 = order.customer) === null || _order$customer27 === void 0 ? void 0 : _order$customer27.email) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto: ".concat(order === null || order === void 0 || (_order$customer28 = order.customer) === null || _order$customer28 === void 0 ? void 0 : _order$customer28.email)
  }, order === null || order === void 0 || (_order$customer29 = order.customer) === null || _order$customer29 === void 0 ? void 0 : _order$customer29.email))), !!(order !== null && order !== void 0 && (_order$customer30 = order.customer) !== null && _order$customer30 !== void 0 && _order$customer30.address) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CHECKOUT_FULL_ADDRESS', 'Full address')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://maps.google.com/?q=".concat(order === null || order === void 0 || (_order$customer31 = order.customer) === null || _order$customer31 === void 0 ? void 0 : _order$customer31.address),
    rel: "noopener noreferrer",
    target: "_blank"
  }, order === null || order === void 0 || (_order$customer32 = order.customer) === null || _order$customer32 === void 0 ? void 0 : _order$customer32.address))), !!(order !== null && order !== void 0 && (_order$customer33 = order.customer) !== null && _order$customer33 !== void 0 && _order$customer33.location) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('LOCATION', 'Location')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://maps.google.com/?q=".concat(order === null || order === void 0 || (_order$customer34 = order.customer) === null || _order$customer34 === void 0 || (_order$customer34 = _order$customer34.location) === null || _order$customer34 === void 0 ? void 0 : _order$customer34.lat, ",").concat(order === null || order === void 0 || (_order$customer35 = order.customer) === null || _order$customer35 === void 0 || (_order$customer35 = _order$customer35.location) === null || _order$customer35 === void 0 ? void 0 : _order$customer35.lng),
    rel: "noopener noreferrer",
    target: "_blank"
  }, order === null || order === void 0 || (_order$customer36 = order.customer) === null || _order$customer36 === void 0 || (_order$customer36 = _order$customer36.location) === null || _order$customer36 === void 0 ? void 0 : _order$customer36.lat, ", ", order === null || order === void 0 || (_order$customer37 = order.customer) === null || _order$customer37 === void 0 || (_order$customer37 = _order$customer37.location) === null || _order$customer37 === void 0 ? void 0 : _order$customer37.lng))), !!(order !== null && order !== void 0 && (_order$customer38 = order.customer) !== null && _order$customer38 !== void 0 && _order$customer38.internal_number) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('INTERNAL_NUMBER', 'Internal number')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 || (_order$customer39 = order.customer) === null || _order$customer39 === void 0 ? void 0 : _order$customer39.internal_number)), !!(order !== null && order !== void 0 && (_order$customer40 = order.customer) !== null && _order$customer40 !== void 0 && _order$customer40.address_notes) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('NOTES', 'Notes')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 || (_order$customer41 = order.customer) === null || _order$customer41 === void 0 ? void 0 : _order$customer41.address_notes)), !!(order !== null && order !== void 0 && (_order$customer42 = order.customer) !== null && _order$customer42 !== void 0 && _order$customer42.zipcode) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 || (_order$customer43 = order.customer) === null || _order$customer43 === void 0 ? void 0 : _order$customer43.zipcode)), !!(order !== null && order !== void 0 && order.on_behalf_of) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ON_BEHALF_OF', 'On behalf of')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : order.on_behalf_of))))))), deliveryTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) && !isServiceOrder && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(order !== null && order !== void 0 && order.driver_id) && !isDisableDriverCompanies && !readOnlyBusinessOwner && /*#__PURE__*/_react.default.createElement(_styles2.CompanySelectorContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER_COMPANY', 'Driver company')), /*#__PURE__*/_react.default.createElement(_CompanySelector.CompanySelector, {
    small: true,
    isPhoneView: true,
    defaultValue: (_order$driver_company = order === null || order === void 0 ? void 0 : order.driver_company_id) !== null && _order$driver_company !== void 0 ? _order$driver_company : 'default',
    order: order,
    isTourOpen: isTourOpen,
    setCurrentTourStep: setCurrentTourStep,
    handleOpenMessages: handleOpenMessages,
    isOrderDrivers: true,
    orderId: order === null || order === void 0 ? void 0 : order.id,
    disableSocketRoomDriver: true
  })), !(order !== null && order !== void 0 && order.driver_company_id) && !(commentInfoState !== null && commentInfoState !== void 0 && commentInfoState.open) && !readOnlyBusinessOwner && /*#__PURE__*/_react.default.createElement(_styles2.DriverSelectorContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER_ASSIGN', 'Driver assign')), /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
    small: true,
    isPhoneView: true,
    defaultValue: (_ref6 = (_commentInfoState$dri = commentInfoState === null || commentInfoState === void 0 ? void 0 : commentInfoState.driverId) !== null && _commentInfoState$dri !== void 0 ? _commentInfoState$dri : order === null || order === void 0 ? void 0 : order.driver_id) !== null && _ref6 !== void 0 ? _ref6 : 'default',
    order: order,
    isTourOpen: isTourOpen,
    setCurrentTourStep: setCurrentTourStep,
    handleOpenMessages: handleOpenMessages,
    isOrderDrivers: true,
    orderId: order === null || order === void 0 ? void 0 : order.id,
    setCommentInfostate: setCommentInfostate,
    disableSocketRoomDriver: disableSocketRoomDriver
  })), /*#__PURE__*/_react.default.createElement(_styles2.DriverInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DriverInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$driver = order.driver) !== null && _order$driver !== void 0 && _order$driver.photo || order !== null && order !== void 0 && (_order$external_drive = order.external_driver) !== null && _order$external_drive !== void 0 && _order$external_drive.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage((order === null || order === void 0 || (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo) || (order === null || order === void 0 || (_order$external_drive2 = order.external_driver) === null || _order$external_drive2 === void 0 ? void 0 : _order$external_drive2.photo), 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), order.driver_id ? /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.name, " ", order === null || order === void 0 || (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.middle_name, " ", order === null || order === void 0 || (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.lastname, " ", order === null || order === void 0 || (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.second_lastname), (order === null || order === void 0 || (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      var _order$driver8;
      return window.open("tel:".concat(order === null || order === void 0 || (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.cellphone));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null))), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, order.external_driver_id ? /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$external_drive3 = order.external_driver) === null || _order$external_drive3 === void 0 ? void 0 : _order$external_drive3.name), (order === null || order === void 0 || (_order$external_drive4 = order.external_driver) === null || _order$external_drive4 === void 0 ? void 0 : _order$external_drive4.phone) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      var _order$external_drive5;
      return window.open("tel:".concat(order === null || order === void 0 || (_order$external_drive5 = order.external_driver) === null || _order$external_drive5 === void 0 ? void 0 : _order$external_drive5.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null))), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))) : /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('NO_DRIVER', 'No driver')))))))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    open: isModalOpen,
    onClose: function onClose() {
      return setIsModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ReviewCustomer.ReviewCustomer, {
    order: order,
    customer: currentCustomer,
    onClose: function onClose() {
      return handleCustomerReviewed();
    }
  })));
};
var ContextAwareToggle = function ContextAwareToggle(_ref7) {
  var children = _ref7.children,
    eventKey = _ref7.eventKey,
    callback = _ref7.callback;
  var currentEventKey = (0, _react.useContext)(_reactBootstrap.AccordionContext);
  var decoratedOnClick = (0, _reactBootstrap.useAccordionToggle)(eventKey, function () {
    return callback && callback(eventKey);
  });
  var isCurrentEventKey = currentEventKey === eventKey;
  var handleButtonClick = function handleButtonClick() {
    decoratedOnClick();
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.ToggleItemWrapper, {
    active: isCurrentEventKey,
    onClick: handleButtonClick,
    id: "accordion".concat(eventKey),
    "data-id": isCurrentEventKey ? '1' : '0'
  }, children);
};