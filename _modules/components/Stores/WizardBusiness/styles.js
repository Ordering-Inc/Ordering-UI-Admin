"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TurtorialEndContainier = exports.FirstStoreContainer = exports.BusinessScheduleContainer = exports.BusinessPaymentMethodsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessScheduleContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.BusinessScheduleContainer = BusinessScheduleContainer;

var BusinessPaymentMethodsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.BusinessPaymentMethodsContainer = BusinessPaymentMethodsContainer;

var TurtorialEndContainier = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n  }\n"])));

exports.TurtorialEndContainier = TurtorialEndContainier;

var FirstStoreContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100% - 100px);\n\n  img {\n    width: 330px;\n    margin-bottom: 59px;\n  }\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n  }\n\n  > p {\n    font-size: 14px;\n    margin: 5px 0 39px 0;\n  }\n\n  button {\n    height: 42px;\n  }\n"])));

exports.FirstStoreContainer = FirstStoreContainer;