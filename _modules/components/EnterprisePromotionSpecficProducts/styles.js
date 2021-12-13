"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 15px 5px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    padding-bottom: 32px;\n    margin: 0;\n  }\n\n  > button {\n    height: 44px;\n    margin-top: 36px;\n  }\n"])));

exports.Container = Container;

var BusinessesContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  > p {\n    font-size: 14px;\n    font-weight: 600;\n    margin-top: 0;\n    margin-bottom: 3px;\n  }\n  > div {\n    position: relative;\n    margin-top: 0;\n    box-shadow: none;\n    border: none;\n    padding: 0;\n    height: initial;\n\n    .pagination-container {\n      position: relative;\n      margin-top: 20px;\n      justify-content: flex-start;\n    }\n  }\n"])));

exports.BusinessesContainer = BusinessesContainer;