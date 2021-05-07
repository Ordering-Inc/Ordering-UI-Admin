"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _UserListing = require("../UserListing");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestComponent = function TestComponent() {
  return /*#__PURE__*/_react.default.createElement(_UserListing.UserListing, null);
};

exports.TestComponent = TestComponent;