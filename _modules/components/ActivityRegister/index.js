"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActivityRegister = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActivityRegister = function ActivityRegister() {
  var dataList = [{
    content: 'Orders Placed',
    value: 128
  }, {
    content: 'Visits in the app',
    value: 50,
    unit: 'Month'
  }, {
    content: 'Visits in the web',
    value: 89,
    unit: 'Month'
  }];
  return /*#__PURE__*/_react.default.createElement(_styles.ActivityRegisterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.VisitInfo, null, dataList && dataList.length > 0 && dataList.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.ItemName, null, item.content), /*#__PURE__*/_react.default.createElement(_styles.ItemData, null, /*#__PURE__*/_react.default.createElement(_styles.ItemAmount, null, item.value), (item === null || item === void 0 ? void 0 : item.unit) && item.unit !== '' && /*#__PURE__*/_react.default.createElement(_styles.ItemUnit, null, " /", item.unit)));
  })));
};

exports.ActivityRegister = ActivityRegister;