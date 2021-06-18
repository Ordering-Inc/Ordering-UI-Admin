"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderBillContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderBillContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: #191919;\n  padding: 20px 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  table {\n    width: 100%;\n    font-size: 15px;\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.total {\n    border-top: 1px solid #BFBFBF;\n    margin-top: 15px;\n    tr {\n      font-size: 16px;\n      td {\n        font-weight: bold;\n        padding-top: 10px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
});

exports.OrderBillContainer = OrderBillContainer;