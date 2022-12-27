"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypePriceLevel = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderTypePriceLevel = function OrderTypePriceLevel(props) {
  var formState = props.formState,
    changeFormState = props.changeFormState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var priceList = [{
    key: '1',
    value: '$'
  }, {
    key: '2',
    value: '$$'
  }, {
    key: '3',
    value: '$$$'
  }, {
    key: '4',
    value: '$$$$'
  }, {
    key: '5',
    value: '$$$$$'
  }];
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.PriceLevelContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PRICE_LEVEL', 'Price level')), /*#__PURE__*/_react.default.createElement(_styles.PriceLevelList, null, priceList.map(function (item, i) {
    var _formState$changes, _formState$changes2;
    return /*#__PURE__*/_react.default.createElement(_styles.PriceLevelItem, {
      key: i,
      onClick: function onClick() {
        return changeFormState({
          price_level: item.key
        });
      },
      active: (formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.price_level) === item.key
    }, (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.price_level) === item.key ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, item.value));
  }))));
};
exports.OrderTypePriceLevel = OrderTypePriceLevel;