"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisabledFeatureAlert = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styledComponents = require("styled-components");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DisabledFeatureAlert = function DisabledFeatureAlert(props) {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var containerRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      containerWidth = _useState2[0],
      setContainerWidth = _useState2[1];

  var featureList = ['cash_wallet', 'loyalty_levels_points', 'massive_importer', 'advanced_reports', 'advanced_logistics', 'shared_menus', 'payments_advanced', 'Marketing_dashboard'];
  var detectedDisabledFeature = featureList.every(function (feature) {
    return Object.keys(configs).includes(feature);
  });

  var _showed = !detectedDisabledFeature && (user === null || user === void 0 ? void 0 : user.level) === 0;

  var _useState3 = (0, _react.useState)(_showed),
      _useState4 = _slicedToArray(_useState3, 2),
      showed = _useState4[0],
      setShowed = _useState4[1];

  (0, _react.useLayoutEffect)(function () {
    containerRef.current && setContainerWidth(containerRef.current.offsetWidth);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showed && /*#__PURE__*/_react.default.createElement(_styles.DisabledFeatureAlertContainer, {
    ref: containerRef,
    containerWidth: containerWidth
  }, /*#__PURE__*/_react.default.createElement(_styles.Wrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, {
    color: theme.colors.primary
  }), /*#__PURE__*/_react.default.createElement(_styles.CommentContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Comment, null, t('PACKAGE_DOSE_NOT_INCLUDE_FUNCTIONS', 'Your package does not include this function')), /*#__PURE__*/_react.default.createElement(_styles.MoreInfo, {
    href: "https://www.ordering.co/ordering-sales",
    target: "_blank"
  }, t('GET_FEATURE', 'Get this feature'))), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XCircle, {
    onClick: function onClick() {
      return setShowed(false);
    },
    style: {
      cursor: 'pointer'
    },
    color: theme.colors.primary
  }))));
};

exports.DisabledFeatureAlert = DisabledFeatureAlert;