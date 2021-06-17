"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  > h1 {\n    font-size: 24px;\n    margin: 0px;\n    font-weight: 600;\n    color: ", ";\n  }\n\n  input {\n    background: #E9ECEF;\n    border: none;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.headingColor;
});

exports.HeaderContainer = HeaderContainer;