"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressRing = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressRing = function ProgressRing(props) {
  var percent = props.percent,
      size = props.size,
      lineWidth = props.lineWidth,
      progressColor = props.progressColor,
      trackColor = props.trackColor,
      caps = props.caps,
      children = props.children,
      spin = props.spin,
      transitionDuration = props.transitionDuration;
  var halfSize = size / 2;
  var radius = halfSize - lineWidth / 2;
  var circleLength = radius * 2 * Math.PI;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: size,
      height: size,
      display: 'flex',
      placeContent: 'center',
      placeItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    height: size,
    width: size,
    style: {
      animation: spin ? 'animation-rotate 2s linear infinite' : undefined
    },
    shapeRendering: "geometricPrecision"
  }, /*#__PURE__*/_react.default.createElement("g", {
    style: {
      transformOrigin: "".concat(halfSize, "px ").concat(halfSize, "px"),
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: halfSize,
    cy: halfSize,
    r: radius,
    stroke: trackColor,
    strokeWidth: lineWidth,
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: halfSize,
    cy: halfSize,
    r: radius,
    style: {
      transition: transitionDuration > 0 ? "".concat(transitionDuration, "ms stroke-dashoffset") : undefined,
      strokeDashoffset: circleLength * (1 - percent / 100)
    },
    fill: "none",
    strokeDasharray: circleLength,
    strokeWidth: lineWidth,
    stroke: progressColor,
    strokeLinecap: caps
  }))), children ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      zIndex: 1
    }
  }, children) : null);
};
/*
  interface Props

  caps?: "butt" | "round";
  children?: React.ReactNode;
  lineWidth?: number;
  percent?: number;
  progressColor?: string;
  size?: number;
  spin?: boolean;
  trackColor?: string;
  transitionDuration?: number;
*/


exports.ProgressRing = ProgressRing;