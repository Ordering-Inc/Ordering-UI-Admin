"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectPosGuide = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
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
var SelectPosGuideUI = function SelectPosGuideUI(props) {
  var _formState$changes4;
  var handleSendMessage = props.handleSendMessage,
    changeFormState = props.changeFormState,
    formState = props.formState;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    typeOptions = _useState2[0],
    setTypeOptions = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    search = _useState6[0],
    setSearch = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    hasOther = _useState8[0],
    setHasOther = _useState8[1];
  var typeList = [{
    value: 'square',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.pos.square,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("span", null, t('SQUARE', 'Square')))
  }, {
    value: 'toast',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.pos.toast,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("span", null, t('TOAST', 'Toast')))
  }, {
    value: 'vectron',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.pos.vectron,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("span", null, t('VECTRON', 'Vectron')))
  }, {
    value: 'clover',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.pos.clover,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("span", null, t('CLOVER', 'Clover')))
  }, {
    value: 'other',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("span", null, t('OTHER', 'Other')))
  }];
  var checkMateAndDeliverectList = [{
    key: 'par',
    title: 'PAR Tech - Pixel Point',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.par
  }, {
    key: 'el_cheff',
    title: 'El Cheff',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.elCheff
  }, {
    key: 'givex',
    title: 'Givex',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.givex
  }, {
    key: 'ncr_aloha',
    title: 'NCR Aloha',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.ncrAloha
  }, {
    key: 'national_soft',
    title: 'National Soft',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.nationalSoft
  }, {
    key: 'posist',
    title: 'Posist',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.posist
  }, {
    key: 'solution_delivery',
    title: 'Solutions 4 Delivery',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.solutionDelivery
  }, {
    key: 'xetux',
    title: 'Telnet',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.xetux
  }, {
    key: 'vista_entertainment',
    title: 'Vista Entertainment Solutions',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.vistaEntertainment
  }, {
    key: 'soft_restaurant',
    title: 'SoftRestaurant',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.softRestaurant
  }, {
    key: 'telnet',
    title: 'Telnet',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.telnet
  }, {
    key: 'rest_pro',
    title: 'Rest Pro',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.restPro
  }, {
    key: 'infocaja',
    title: 'Infocaja',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.infocaja
  }, {
    key: 'eposNow',
    title: 'Epos Now',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.eposNow
  }, {
    key: 'hippos',
    title: 'Hippos',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.hippos
  }, {
    key: 'light_speed',
    title: 'Lightspeed',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.lightSpeed
  }, {
    key: 'micros_res_3700',
    title: 'Micros RES 3700',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.microsRes
  }, {
    key: 'micros_simphony',
    title: 'Micros Simphony',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.microsSimphony
  }, {
    key: 'prologic_first',
    title: 'Prologic First',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.prologicFirst
  }, {
    key: 'touch_bistro',
    title: 'TouchBistro',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.touchBistro
  }, {
    key: 'revel',
    title: 'Revel',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.revel
  }, {
    key: 'spot_on',
    title: 'SpotOn',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.spotOn
  }, {
    key: 'heart_land',
    title: 'Heartland',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.heartLand
  }, {
    key: 'focus',
    title: 'Focus',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.focus
  }, {
    key: 'speed_line',
    title: 'SpeedLine',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.speedLine
  }, {
    key: 'maitre',
    title: 'Maitre’D',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.maitre
  }, {
    key: 'ncr_silver',
    title: 'NCR Silver',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.ncrSilver
  }, {
    key: 'qu_beyond_pos',
    title: 'QU Beyond POS',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.quBeyondPos
  }, {
    key: 'upserve',
    title: 'Upserve',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.upserve
  }, {
    key: 'diner_ware',
    title: 'DinerWare',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.dinerWare
  }, {
    key: 'digital_dining',
    title: 'Digital Dining',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.digitalDining
  }, {
    key: 'food_tec',
    title: 'FoodTec',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.foodTec
  }, {
    key: 'salido',
    title: 'Salido',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.salido
  }, {
    key: 'cake',
    title: 'Cake',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.cake
  }, {
    key: 'hunger_rush',
    title: 'HungerRush',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.hungerRush
  }, {
    key: 'pixel_point',
    title: 'PixelPoint',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.pixelPoint
  }, {
    key: 'auphan',
    title: 'Auphan',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.auphan
  }, {
    key: 'linga',
    title: 'Linga',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.linga
  }, {
    key: 'one_pos',
    title: 'OnePOS',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.onePos
  }, {
    key: 'edge_serv',
    title: 'EdgeServ',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.edgeServ
  }, {
    key: 'talech',
    title: 'Talech',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.talech
  }, {
    key: 'rezku',
    title: 'Rezku',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.rezku
  }, {
    key: 'north_star',
    title: 'NorthStar',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.northStar
  }, {
    key: 'order_counter',
    title: 'Order Counter',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.orderCounter
  }, {
    key: 'foodics',
    title: 'Foodics',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.foodics
  }, {
    key: 'i_tab_pos',
    title: 'iTabPOS',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.iTabPos
  }, {
    key: 'pos_ist',
    title: 'POSist',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.posIst
  }, {
    key: 'sunami_pos',
    title: 'Sunami POS',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.sunamiPos
  }, {
    key: 'union',
    title: 'Union',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.union
  }, {
    key: 'snappy',
    title: 'Snappy',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.snappy
  }, {
    key: 'four_soft',
    title: '4Soft',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.fourSoft
  }, {
    key: 'super_menu',
    title: 'Supermenu',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.superMenu
  }, {
    key: 'emagine_pos',
    title: 'EmaginePOS',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.emaginePos
  }, {
    key: 'paradise_pos',
    title: 'ParadisePOS',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.paradisePos
  }, {
    key: 'xenial',
    title: 'Xenial',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.xenial
  }, {
    key: 'tids',
    title: 'Tid3',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.tidThree
  }, {
    key: 'ovvi',
    title: 'Ovvi',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.ovvi
  }, {
    key: 'brink_certified',
    title: 'Brink Certified',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.brinkCertified
  }, {
    key: 'rbbt_tech',
    title: 'Rbbt.Tech',
    description: 'POS systems for restaurants',
    icon: theme.images.pos.rbbtTech
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleContinue = function handleContinue() {
    var _formState$changes, _formState$changes2, _formState$changes3;
    if (!(formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.pos) || (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.pos) === 'other' && hasOther) {
      setAlertState({
        open: true,
        content: t('POS_REQUIRED', 'POS is required')
      });
      return;
    }
    if ((formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.pos) === 'other') {
      setHasOther(true);
      return;
    }
    handleSendMessage();
  };
  (0, _react.useEffect)(function () {
    var options = typeList.filter(function (option) {
      return option === null || option === void 0 ? void 0 : option.value.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
    setTypeOptions(options);
  }, [search]);
  (0, _react.useEffect)(function () {
    if (!(formState !== null && formState !== void 0 && formState.loading) && formState !== null && formState !== void 0 && formState.error) {
      setAlertState({
        open: true,
        content: formState === null || formState === void 0 ? void 0 : formState.error
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, !hasOther ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SELECT_YOUR_POS', 'Select your POS')), /*#__PURE__*/_react.default.createElement(_styles2.SelectPosWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: typeOptions,
    className: "select",
    defaultValue: (formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.pos) || '',
    placeholder: t('SELECT_YOUR_POS', 'Select your POS'),
    onChange: function onChange(value) {
      return changeFormState({
        pos: value
      });
    },
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: search,
    handleChangeSearch: function handleChangeSearch(val) {
      return setSearch(val);
    }
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "other"
  }, t('OTHER', 'Other')), /*#__PURE__*/_react.default.createElement(_styles2.CheckMateAndDeliverectList, null, checkMateAndDeliverectList.map(function (item, idx) {
    var _formState$changes5;
    return /*#__PURE__*/_react.default.createElement(_styles2.PosItem, {
      key: idx,
      active: (formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.pos) === item.key,
      onClick: function onClick() {
        return changeFormState({
          pos: item.key
        });
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: item.icon,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, item.title), /*#__PURE__*/_react.default.createElement("p", null, item.description)));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, {
    hasOther: hasOther
  }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleContinue
  }, hasOther ? t('SEND_REQUEST', 'Send Request') : t('CONTINUE', 'Continue'), !hasOther && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowRight, null)))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERING', 'Ordering'),
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
var SelectPosGuide = function SelectPosGuide(props) {
  var selectPosGuideProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SelectPosGuideUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SelectPOS, selectPosGuideProps);
};
exports.SelectPosGuide = SelectPosGuide;