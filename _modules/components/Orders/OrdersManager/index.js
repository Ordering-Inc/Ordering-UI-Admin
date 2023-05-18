"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersManager = void 0;
var _react = _interopRequireDefault(require("react"));
var _OriginalOrdersManager = require("./Layouts/OriginalOrdersManager");
var _VeloccyOrdersManager = require("./Layouts/VeloccyOrdersManager");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var OrdersManager = function OrdersManager(props) {
  var _theme$orders_manager, _theme$orders_manager2, _theme$orders_manager3;
  var theme = (0, _styledComponents.useTheme)();
  var layout = (theme === null || theme === void 0 ? void 0 : (_theme$orders_manager = theme.orders_manager_view) === null || _theme$orders_manager === void 0 ? void 0 : (_theme$orders_manager2 = _theme$orders_manager.components) === null || _theme$orders_manager2 === void 0 ? void 0 : (_theme$orders_manager3 = _theme$orders_manager2.layout) === null || _theme$orders_manager3 === void 0 ? void 0 : _theme$orders_manager3.type) || 'original';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, layout === 'original' && /*#__PURE__*/_react.default.createElement(_OriginalOrdersManager.OriginalOrdersManager, props), layout === 'veloccy' && /*#__PURE__*/_react.default.createElement(_VeloccyOrdersManager.VeloccyOrdersManager, props));
};
exports.OrdersManager = OrdersManager;