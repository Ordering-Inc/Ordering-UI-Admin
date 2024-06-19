"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotNetworkConnectivity = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _useOnlineStatus = require("../../hooks/useOnlineStatus");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var NotNetworkConnectivity = exports.NotNetworkConnectivity = function NotNetworkConnectivity() {
  var _theme$images;
  var onlineStatus = (0, _useOnlineStatus.useOnlineStatus)();
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    style: {
      display: onlineStatus ? 'none' : 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, null, /*#__PURE__*/_react.default.createElement("img", {
    width: "300px",
    height: "300px",
    src: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.notNetwork,
    alt: "Not network"
  })));
};