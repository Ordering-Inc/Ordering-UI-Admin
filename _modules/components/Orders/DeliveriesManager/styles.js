"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapItemView = exports.OrdersContent = exports.DeliveriesContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DeliveriesContainer = exports.DeliveriesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  transition: all 0.5s;\n  padding: 20px;\n  box-sizing: border-box;\n  max-height: 100vh;\n  overflow: auto;\n\n  @media print {\n    display: none;\n  }\n"])));
var OrdersContent = exports.OrdersContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n"])));
var WrapItemView = exports.WrapItemView = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));