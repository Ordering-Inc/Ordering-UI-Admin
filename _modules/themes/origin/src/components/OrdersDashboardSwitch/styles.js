"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchPane = exports.SwitchItem = exports.SwitchContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwitchContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px solid #D3D3D3;\n  border-radius: 6px;\n  padding: 5px;\n  margin-left: 60px;\n  position: relative;\n\n  @media (max-width: 1400px) {\n    margin-left: 20px;\n  }\n\n  @media (max-width: 600px) {\n    margin-left: 0px;\n  }\n"])));

exports.SwitchContainer = SwitchContainer;

var SwitchItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 110px;\n  text-align: center;\n  font-size: 13px;\n  text-transform: capitalize;\n  padding: 4px 0;\n  cursor: pointer;\n  transition: all 0.3s;\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n  @media (max-width: 560px) {\n    width: 80px;\n  }\n"])), function (_ref) {
  var horizontalBorder = _ref.horizontalBorder;
  return horizontalBorder && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border-left: 1px solid;\n    border-right: 1px solid;\n    border-color: #C3C3C3;\n  "])));
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: #fff;\n  "])));
});

exports.SwitchItem = SwitchItem;

var SwitchPane = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  background-color: #000;\n  width: 110px;\n  height: 28px;\n  z-index: -1;\n  border-radius: 2px;\n  transition: all 0.3s ease;\n  ", "\n  ", "\n\n  @media (max-width: 560px) {\n    width: 80px;\n\n    ", "\n    ", "\n  }\n"])), function (_ref3) {
  var deliveryDashboard = _ref3.deliveryDashboard;
  return deliveryDashboard && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-left: 110px;\n  "])));
}, function (_ref4) {
  var messages = _ref4.messages;
  return messages && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-left: 220px;\n  "])));
}, function (_ref5) {
  var deliveryDashboard = _ref5.deliveryDashboard;
  return deliveryDashboard && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 80px;\n    "])));
}, function (_ref6) {
  var messages = _ref6.messages;
  return messages && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 160px;\n    "])));
});

exports.SwitchPane = SwitchPane;