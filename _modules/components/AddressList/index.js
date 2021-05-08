"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressList = void 0;

var _react = _interopRequireDefault(require("react"));

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _GrFormEdit = _interopRequireDefault(require("@meronex/icons/gr/GrFormEdit"));

var _MdcDeleteOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcDeleteOutline"));

var _styles = require("./styles");

var _style = require("../UserList/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddressList = function AddressList(props) {
  var user = props.user;
  return /*#__PURE__*/_react.default.createElement(_styles.AddressListContainer, null, (user === null || user === void 0 ? void 0 : user.address) && /*#__PURE__*/_react.default.createElement(_styles.AddressItem, null, /*#__PURE__*/_react.default.createElement(_styles.AddressText, null, user === null || user === void 0 ? void 0 : user.address), /*#__PURE__*/_react.default.createElement(_style.BodyActionContainer, null, /*#__PURE__*/_react.default.createElement(_style.BodyActionContent, null, /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, {
    className: "more-svg"
  }), /*#__PURE__*/_react.default.createElement(_GrFormEdit.default, {
    className: "edit-svg",
    onClick: function onClick() {
      return openModal(user);
    }
  }), /*#__PURE__*/_react.default.createElement(_MdcDeleteOutline.default, {
    className: "remove-svg"
  })))));
};

exports.AddressList = AddressList;