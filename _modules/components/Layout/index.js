"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex",
    style: {
      maxWidth: '100vw',
      width: '100vw'
    }
  }, props.children);
};

exports.Layout = Layout;