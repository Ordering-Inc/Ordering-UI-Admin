"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWrapper = exports.PointsWalletContainer = exports.LevelWrapper = exports.EqualWrapper = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-top: 0;\n    margin-bottom: 40px;\n  }\n"])));

exports.Container = Container;

var PointsWalletContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])));

exports.PointsWalletContainer = PointsWalletContainer;

var PointsWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 36px;\n    margin: 0px;\n  }\n  p {\n    margin: 0px;\n    font-size: 14px;\n    line-height: 24px;\n  }\n"])));

exports.PointsWrapper = PointsWrapper;

var EqualWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  margin: 0px 30px;\n"])));

exports.EqualWrapper = EqualWrapper;

var LevelWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  > h1 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-bottom: 25px;\n    margin-top: 0px;\n  }\n  img {\n    object-fit: cover;\n    max-width: 350px;\n    width: 100%;\n  }\n"])));

exports.LevelWrapper = LevelWrapper;