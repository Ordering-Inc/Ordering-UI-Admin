"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteTheme = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _ThemeOption = require("./ThemeOption");
var _ThemeComponent = require("./ThemeComponent");
var _ThemeImage = require("./ThemeImage");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SiteThemeUI = function SiteThemeUI(props) {
  var _themeStructure$selec, _themeStructure$selec2, _themeStructure$selec3, _themeValues$selected, _themeStructure$selec4, _Object$keys, _themeStructure$selec5;
  var siteThemesState = props.siteThemesState,
    themesList = props.themesList,
    actionState = props.actionState,
    selectedTheme = props.selectedTheme,
    handleSelectTheme = props.handleSelectTheme,
    handleAssignTheme = props.handleAssignTheme,
    handleUpdateSiteTheme = props.handleUpdateSiteTheme,
    handleAddThemeGallery = props.handleAddThemeGallery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    themeOptions = _useState2[0],
    setThemeOptions = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    pageOptions = _useState4[0],
    setPageOptions = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedPage = _useState6[0],
    setSelectedPage = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    themeStructure = _useState8[0],
    setThemeStructure = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    themeValues = _useState10[0],
    setThemeValues = _useState10[1];
  var getOptions = function getOptions(options) {
    return options.map(function (option) {
      return {
        value: option,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t(option.toUpperCase(), option.replace(/_/g, ' ')))
      };
    });
  };
  var getTitle = function getTitle(key) {
    return t(key.toUpperCase, key.replace(/_/g, ' '));
  };
  var updateObject = function updateObject(object, newValue, path) {
    var stack = path.split('.');
    while (stack.length > 1) {
      object = object[stack.shift()];
    }
    object[stack.shift()] = newValue;
  };
  var _handleChangeValue = function handleChangeValue(value, block) {
    var _themeValues = _objectSpread({}, themeValues);
    var path = [selectedPage, 'components', block].join('.');
    updateObject(_themeValues, value, path);
    setThemeValues(_themeValues);
  };
  var handleHidePage = function handleHidePage(hidden) {
    var _themeValues = JSON.parse(JSON.stringify(themeValues));
    _themeValues[selectedPage].hidden = hidden;
    setThemeValues(_themeValues);
  };
  (0, _react.useEffect)(function () {
    if (themesList.loading) return;
    var _themeOptions = themesList.result.map(function (theme) {
      return {
        value: theme.id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t(theme.name.toUpperCase(), theme.name.replace(/_/g, ' ')))
      };
    });
    setThemeOptions(_themeOptions);
  }, [themesList]);
  var recursiveAssign = function recursiveAssign(a, b) {
    if (b) {
      if (Object(b) !== b) return b;
      if (Object(a) !== a) a = {};
      for (var key in b) {
        a[key] = recursiveAssign(a[key], b[key]);
      }
      return a;
    } else {
      return a;
    }
  };
  (0, _react.useEffect)(function () {
    var _siteThemesState$resu, _siteThemesState$resu2, _siteThemesState$resu3, _siteThemesState$resu4, _siteThemesState$resu5;
    if (siteThemesState.loading || siteThemesState.result.length === 0) return;
    var _themeValues = recursiveAssign((_siteThemesState$resu = siteThemesState.result[0]) === null || _siteThemesState$resu === void 0 ? void 0 : (_siteThemesState$resu2 = _siteThemesState$resu.theme) === null || _siteThemesState$resu2 === void 0 ? void 0 : _siteThemesState$resu2.values_default, (_siteThemesState$resu3 = siteThemesState.result[0]) === null || _siteThemesState$resu3 === void 0 ? void 0 : _siteThemesState$resu3.values);
    setThemeValues(_themeValues);
    var structure = ((_siteThemesState$resu4 = siteThemesState.result[0]) === null || _siteThemesState$resu4 === void 0 ? void 0 : (_siteThemesState$resu5 = _siteThemesState$resu4.theme) === null || _siteThemesState$resu5 === void 0 ? void 0 : _siteThemesState$resu5.structure) || {};
    setThemeStructure(structure);
    var _pageOptions = getOptions(Object.keys(structure));
    setPageOptions(_pageOptions);
  }, [siteThemesState]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, siteThemesState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.BlockContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 300
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 200,
    style: {
      marginBottom: 10
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    style: {
      marginBottom: 10
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 130,
    style: {
      marginBottom: 10
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, siteThemesState.result.length !== 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ThemeStructureContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.PageBlockTitle, null, t('SECTION', 'Section')), /*#__PURE__*/_react.default.createElement(_styles2.PageSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    placeholder: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      isPlaceholder: true
    }, t('SELECT_SECTION_TO_CUSTOMIZE', 'Select a section to customize')),
    defaultValue: selectedPage,
    options: pageOptions,
    onChange: function onChange(key) {
      return setSelectedPage(key);
    }
  })), selectedPage && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_themeStructure$selec = themeStructure[selectedPage]) === null || _themeStructure$selec === void 0 ? void 0 : _themeStructure$selec.hidden) && ((_themeStructure$selec2 = themeStructure[selectedPage]) === null || _themeStructure$selec2 === void 0 ? void 0 : (_themeStructure$selec3 = _themeStructure$selec2.hidden) === null || _themeStructure$selec3 === void 0 ? void 0 : _themeStructure$selec3.value_type) === 'boolean' && /*#__PURE__*/_react.default.createElement(_styles2.PageHiddenCheckWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    defaultChecked: (_themeValues$selected = themeValues[selectedPage]) === null || _themeValues$selected === void 0 ? void 0 : _themeValues$selected.hidden,
    onChange: function onChange(e) {
      return handleHidePage(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("h4", null, t('HIDDEN', 'Hidden'))), /*#__PURE__*/_react.default.createElement(_styles2.PageBlockTitle, null, t('PAGE_BLOCKS', 'Page blocks')), !!((_themeStructure$selec4 = themeStructure[selectedPage]) !== null && _themeStructure$selec4 !== void 0 && _themeStructure$selec4.components) && ((_Object$keys = Object.keys((_themeStructure$selec5 = themeStructure[selectedPage]) === null || _themeStructure$selec5 === void 0 ? void 0 : _themeStructure$selec5.components)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(function (block) {
    var _components$block, _components$block2, _components$block3, _components$block4, _components$block5;
    var components = themeStructure[selectedPage].components;
    return block !== 'birthday' && /*#__PURE__*/_react.default.createElement(_styles2.BlockContainer, {
      key: block
    }, /*#__PURE__*/_react.default.createElement("h3", null, getTitle(block)), (block === 'image' || block === 'dummy_image') && ((_components$block = components[block]) === null || _components$block === void 0 ? void 0 : _components$block.value_type) === 'string' && /*#__PURE__*/_react.default.createElement(_ThemeImage.ThemeImage, {
      valueObject: themeValues[selectedPage].components[block],
      handleAddThemeGallery: handleAddThemeGallery,
      handleChangeValue: function handleChangeValue(value) {
        return _handleChangeValue(value, block);
      }
    }), block === 'slug' && ((_components$block2 = components[block]) === null || _components$block2 === void 0 ? void 0 : _components$block2.value_type) === 'string' && /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
      placeholder: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
        isPlaceholder: true
      }, t('SELECT_ITEM', 'Select a _attribute_').replace('_attribute_', getTitle(block))),
      defaultValue: themeValues[selectedPage].components[block],
      options: getOptions((_components$block3 = components[block]) === null || _components$block3 === void 0 ? void 0 : _components$block3.options),
      onChange: function onChange(value) {
        return _handleChangeValue(value, block);
      }
    }), Object.keys(components[block]).filter(function (option) {
      return option !== 'components' && option !== 'value_type';
    }).map(function (option) {
      var _themeValues$selected2, _themeValues$selected3, _themeValues$selected4;
      var optionObject = components[block][option];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: option
      }, typeof ((_themeValues$selected2 = themeValues[selectedPage]) === null || _themeValues$selected2 === void 0 ? void 0 : (_themeValues$selected3 = _themeValues$selected2.components) === null || _themeValues$selected3 === void 0 ? void 0 : (_themeValues$selected4 = _themeValues$selected3[block]) === null || _themeValues$selected4 === void 0 ? void 0 : _themeValues$selected4[option]) !== 'undefined' && /*#__PURE__*/_react.default.createElement(_ThemeOption.ThemeOption, {
        name: option,
        optionObject: optionObject,
        valueObject: themeValues[selectedPage].components[block][option],
        path: [selectedPage, 'components', block, option].join('.'),
        themeValues: themeValues,
        setThemeValues: setThemeValues,
        handleAddThemeGallery: handleAddThemeGallery
      }));
    }), ((_components$block4 = components[block]) === null || _components$block4 === void 0 ? void 0 : _components$block4.components) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys((_components$block5 = components[block]) === null || _components$block5 === void 0 ? void 0 : _components$block5.components).map(function (component) {
      var _components$block6, _themeValues$selected5;
      var componentObject = (_components$block6 = components[block]) === null || _components$block6 === void 0 ? void 0 : _components$block6.components[component];
      return /*#__PURE__*/_react.default.createElement(_ThemeComponent.ThemeComponent, {
        key: component,
        name: component,
        componentObject: componentObject,
        valueObject: (_themeValues$selected5 = themeValues[selectedPage].components[block]) === null || _themeValues$selected5 === void 0 ? void 0 : _themeValues$selected5.components[component],
        themeValues: themeValues,
        setThemeValues: setThemeValues,
        path: [selectedPage, 'components', block, 'components', component].join('.'),
        handleAddThemeGallery: handleAddThemeGallery
      });
    })));
  })))), /*#__PURE__*/_react.default.createElement(_styles2.UpdateButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return handleUpdateSiteTheme(themeValues);
    }
  }, t('UPDATE', 'Update')))) : /*#__PURE__*/_react.default.createElement(_styles2.SelectThemeContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    placeholder: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('SELECT_THEME', 'Select theme')),
    options: themeOptions,
    onChange: function onChange(themeId) {
      return handleSelectTheme(themeId);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: actionState.loading || !selectedTheme,
    onClick: function onClick() {
      return handleAssignTheme();
    }
  }, actionState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')))));
};
var SiteTheme = function SiteTheme(props) {
  var siteThemeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SiteThemeUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SiteTheme, siteThemeProps);
};
exports.SiteTheme = SiteTheme;