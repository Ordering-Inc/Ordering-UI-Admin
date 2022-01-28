"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPublishing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));

var _Modal = require("../Modal");

var _useWindowSize2 = require("../../hooks/useWindowSize");

var _BusinessPublishingOption = require("../BusinessPublishingOption");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessPublishing = function BusinessPublishing(props) {
  var setIsExtendExtraOpen = props.setIsExtendExtraOpen;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      itemSelected = _useState4[0],
      setItemSelected = _useState4[1];

  var publishingItems = [{
    key: 'own_platform',
    title: t('YOUR_OWN_ORDERING_PLATFORM', 'Your own ordering platform'),
    description: t('YOUR_OWN_ORDERING_PLATFORM_DESCRIPTION', 'Lorem ipsum dolor sit amet')
  }, {
    key: 'in_restaurant',
    title: t('IN_RESTAURANT_ORDERING', 'In restaurant ordering'),
    description: t('IN_RESTAURANT_ORDERING_DESCRIPTION', 'Lorem ipsum dolor sit amet')
  }, {
    key: 'social_network',
    title: t('SOCIAL_NETWORK', 'Social network'),
    description: t('SOCIAL_NETWORK_DESCRIPTION', 'Lorem ipsum dolor sit amet')
  } // {
  //   title: t('MESSAGING_APP', 'Messaging app'),
  //   description: t('MESSAGING_APP_DESCRIPTION', 'Lorem ipsum dolor sit amet')
  // },
  ];

  var handleAction = function handleAction(value) {
    var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    setItemSelected(item);
    setIsExtendExtraOpen(value);
    setIsOpen(value);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PublishingContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PUBLISHING', 'Publishing')), /*#__PURE__*/_react.default.createElement(_styles.PublishingListWrapper, null, publishingItems.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.PublishingOptionContainer, {
      key: i,
      onClick: function onClick() {
        return handleAction(true, item);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.PublishingOption, null, /*#__PURE__*/_react.default.createElement(_styles.PublishingName, null, item === null || item === void 0 ? void 0 : item.title), /*#__PURE__*/_react.default.createElement(_styles.PublishingName, {
      style: {
        color: theme.colors.lightGray,
        fontSize: 14
      }
    }, item === null || item === void 0 ? void 0 : item.description)), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, {
      style: {
        color: theme.colors.lightGray
      }
    }));
  }))), width >= 1000 ? isOpen && /*#__PURE__*/_react.default.createElement(_BusinessPublishingOption.BusinessPublishingOption, {
    business: props.business,
    open: isOpen,
    item: itemSelected,
    onClose: function onClose() {
      return handleAction(false);
    }
  }) : isOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "80%",
    open: isOpen,
    onClose: function onClose() {
      return handleAction(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPublishingOption.BusinessPublishingOption, {
    business: props.business,
    open: isOpen,
    item: itemSelected,
    onClose: function onClose() {
      return handleAction(false);
    }
  })));
};

exports.BusinessPublishing = BusinessPublishing;