"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Layout = exports.Layout = function Layout(props) {
  var _props$pt;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex",
    style: {
      maxWidth: '100vw',
      width: '100vw',
      paddingTop: (_props$pt = props.pt) !== null && _props$pt !== void 0 ? _props$pt : 0
    }
  }, props.children);
};