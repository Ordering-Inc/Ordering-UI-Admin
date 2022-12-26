"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductStartGuide = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var ProductStartGuide = function ProductStartGuide(props) {
  var onClose = props.onClose,
    setStep = props.setStep,
    countriesState = props.countriesState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var guideList = [{
    id: 1,
    title: t('START_WITH_AN_EMPTY_MENU', 'Start with an empty Menu'),
    description: t('START_WITH_AN_EMPTY_MENU_DESC', 'Start with an empty Menu and enter your menu items'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.FileMedical, null),
    enabled: true
  }, {
    id: 2,
    title: t('IMPORT_MENU_ONLY_USA_CANADA', 'Import Menu (Only if USA and Canada)'),
    description: t('IMPORT_MENU_ONLY_USA_CANADA_DESC', 'Import your menu from the Ordering Network that includes over 1M restaurants and stores from the US and Canada.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ColumnsGap, null),
    enabled: countriesState === null || countriesState === void 0 ? void 0 : countriesState.enabled
  }];
  var handleChangeStep = function handleChangeStep(id) {
    if (id === 1) onClose();else if (id === 2) setStep(2);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, t('HOW_DO_YOU_WANT_TO_START', 'How do you want to start?')), (countriesState === null || countriesState === void 0 ? void 0 : countriesState.loading) && _toConsumableArray(Array(4).keys()).map(function (idx) {
    return /*#__PURE__*/_react.default.createElement(_styles.GuideItemContainer, {
      key: idx
    }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 24,
      height: 24
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 18,
      width: 200
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 10
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 10
    }))));
  }), !(countriesState !== null && countriesState !== void 0 && countriesState.loading) && guideList.map(function (guide) {
    return guide.enabled && /*#__PURE__*/_react.default.createElement(_styles.GuideItemContainer, {
      key: guide.id,
      onClick: function onClick() {
        return handleChangeStep(guide.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, guide.icon), /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, guide.title), /*#__PURE__*/_react.default.createElement("p", null, guide.description)));
  }));
};
exports.ProductStartGuide = ProductStartGuide;