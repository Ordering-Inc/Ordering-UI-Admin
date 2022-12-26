"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportersList = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrap = require("react-bootstrap");
var _styles = require("../../../styles");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ImportersList = function ImportersList(props) {
  var importerList = props.importerList,
    createImporterJob = props.createImporterJob,
    addNewImporter = props.addNewImporter,
    handleDeleteImporter = props.handleDeleteImporter,
    selectedImporter = props.selectedImporter,
    setSelectedImporter = props.setSelectedImporter,
    handleEditImporter = props.handleEditImporter;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var defaultImporterSlugs = ['sync_businesses_default', 'sync_categories_default', 'sync_products_default', 'sync_extras_default', 'sync_extra_options_default', 'sync_extra_option_suboptions_default', 'sync_extra_products_default', 'sync_full_menu_default'];
  var handleSelectImporter = function handleSelectImporter(e, importer) {
    var isInvalid = e.target.closest('.importer_enable_control') || e.target.closest('.importer_action');
    if (isInvalid) return;
    setSelectedImporter({});
    createImporterJob(importer);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.ImportListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ImportersTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ImpotersTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("th", {
    colSpan: "2"
  }, t('ACTION', 'Action')))), importerList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ImoportTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: "90%",
      height: 21,
      className: "importer-name"
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserEnableWrapper, {
      className: "importer_enable_control"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 82,
      height: 21
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 21,
      height: 21
    }))));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (importerList === null || importerList === void 0 ? void 0 : importerList.importers.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, importerList === null || importerList === void 0 ? void 0 : importerList.importers.map(function (importer) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ImoportTbody, {
      key: importer === null || importer === void 0 ? void 0 : importer.id,
      active: importer.id === (selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.id),
      onClick: function onClick(e) {
        return handleSelectImporter(e, importer);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("span", {
      className: "importer-name"
    }, importer === null || importer === void 0 ? void 0 : importer.name)), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserEnableWrapper, {
      className: "importer_enable_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: true
      // onChange={enabled => handleChangeActiveUser({ id: user.id, enabled: enabled })}
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperUserActionSelector, {
      className: "importer_action"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
      title: /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null),
      id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleEditImporter(importer);
      }
    }, t('EDIT', 'Edit')), !defaultImporterSlugs.includes(importer === null || importer === void 0 ? void 0 : importer.slug) && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleDeleteImporter(importer === null || importer === void 0 ? void 0 : importer.id);
      }
    }, t('DELETE', 'Delete')))))));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.ImoportTbody, null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    colSpan: "2"
  }, /*#__PURE__*/_react.default.createElement(_styles2.NotFoundWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('NOT_FOUND_IMPOTERS', "Can't found importers")
  })))))))), /*#__PURE__*/_react.default.createElement(_styles2.ImportersBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.AddNewImporterButton, {
    onClick: function onClick() {
      return addNewImporter();
    }
  }, t('ADD_NEW_IMPORTER', 'Add new importer'))));
};
exports.ImportersList = ImportersList;