"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostionItemUI = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostionItemUI = function PostionItemUI(props) {
  var isSkeleton = props.isSkeleton,
      active = props.active,
      icon = props.icon,
      title = props.title,
      description = props.description;
  return /*#__PURE__*/_react.default.createElement(_styles.ItemContainer, {
    active: !isSkeleton && active,
    onClick: function onClick() {
      return props.onClick();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 24,
    height: 24
  }) : icon), /*#__PURE__*/_react.default.createElement(_styles.ItemContent, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    style: {
      width: '80%',
      marginBottom: '10px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, title)), isSkeleton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15
  })) : /*#__PURE__*/_react.default.createElement(_styles.Description, null, description)));
};

exports.PostionItemUI = PostionItemUI;