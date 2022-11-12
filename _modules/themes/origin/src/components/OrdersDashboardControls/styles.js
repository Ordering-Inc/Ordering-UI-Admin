"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDashboardControlsContainer = exports.InnerContnet = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrderDashboardControlsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 15px;\n"])));
exports.OrderDashboardControlsContainer = OrderDashboardControlsContainer;
var InnerContnet = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 13px;\n"])));
exports.InnerContnet = InnerContnet;