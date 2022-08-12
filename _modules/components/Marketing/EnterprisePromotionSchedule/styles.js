"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScheduleContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 15px 5px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    border-bottom: 1px solid ", ";\n    padding-bottom: 32px;\n    margin: 0;\n  }\n\n  > button {\n    height: 44px;\n    margin-top: 36px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.ScheduleContainer = ScheduleContainer;