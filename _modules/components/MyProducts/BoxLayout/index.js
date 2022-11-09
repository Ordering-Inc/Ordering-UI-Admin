"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoxLayout = function BoxLayout(props) {
  var photo = props.photo,
      title = props.title,
      description = props.description,
      children = props.children;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("img", {
    src: photo,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, title), /*#__PURE__*/_react.default.createElement("p", null, description), children));
};

exports.BoxLayout = BoxLayout;