"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductVideos = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _Shared = require("../../Shared");

var _styles = require("../../../styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductVideosUI = function ProductVideosUI(props) {
  var productGalleryState = props.productGalleryState,
      changesState = props.changesState,
      handleDeteteProductGalleryItem = props.handleDeteteProductGalleryItem,
      handleChangeInput = props.handleChangeInput,
      handleAddGalleryProduct = props.handleAddGalleryProduct;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var inputAddRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      confirm = _useState4[0],
      setConfirm = _useState4[1];

  var handleDeleteClick = function handleDeleteClick(itemId, type) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_VIDEO', 'Are you sure that you want to delete this video url?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeteteProductGalleryItem(itemId, type);
      }
    });
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  (0, _react.useEffect)(function () {
    if (!(changesState !== null && changesState !== void 0 && changesState.error)) return;
    setAlertState({
      open: true,
      content: changesState === null || changesState === void 0 ? void 0 : changesState.error
    });
  }, [changesState === null || changesState === void 0 ? void 0 : changesState.error]);
  (0, _react.useEffect)(function () {
    if (Object.entries(changesState === null || changesState === void 0 ? void 0 : changesState.changes).length === 0 && inputAddRef !== null && inputAddRef !== void 0 && inputAddRef.current) inputAddRef.current.value = '';
  }, [changesState === null || changesState === void 0 ? void 0 : changesState.changes]);

  var handleAddVideo = function handleAddVideo() {
    var _changesState$changes;

    var _url = changesState === null || changesState === void 0 ? void 0 : (_changesState$changes = changesState.changes) === null || _changesState$changes === void 0 ? void 0 : _changesState$changes.video;

    var validId = validationVideoId(_url);

    if (validId) {
      fetch('https://www.youtube.com/oembed?url=https://youtube.com/watch?v=' + validId + '&format=json').then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data) {
          handleAddGalleryProduct(2);
        }
      }).catch(function (error) {
        if (error) {
          console.log(error === null || error === void 0 ? void 0 : error.message);
        }

        setAlertState({
          open: true,
          content: t('INVALID_VIDEO_ID', 'The video ID is not valid')
        });
      });
    }
  };

  var validationVideoId = function validationVideoId(url) {
    var patt = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|videoseries\?.+&list=|playlist\?.+&list=)?)((\w|-){11})(?:\S+)?$/;
    var matched = patt.exec(url);

    if (matched) {
      var keys = url.split('/');
      var _videoId = keys[keys.length - 1];

      if (_videoId.includes('watch')) {
        var __url = _videoId.split('=')[1];

        _videoId = __url;
      } else if (_videoId.includes('?')) {
        var _url2 = _videoId.split('?')[0];

        _videoId = _url2;
      }

      if (_videoId.search(/&/i) >= 0) {
        _videoId = _videoId.split('&')[0];
      } else if (_videoId.search(/\?/i) >= 0) {
        _videoId = _videoId.split('?')[0];
      }

      if (_videoId.length === 11) {
        return _videoId;
      }
    }

    setAlertState({
      open: true,
      content: t('INVALID_VIDEO_ID', 'The video ID is not valid')
    });
    return false;
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ProdcutVideosContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_VIDEOS', 'Product videos')), /*#__PURE__*/_react.default.createElement(_styles2.GalleryVideosContainer, null, productGalleryState !== null && productGalleryState !== void 0 && productGalleryState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.GalleryVideos, null, _toConsumableArray(Array(2).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.GalleryItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 250,
      height: 15
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60,
      height: 15
    }));
  })), /*#__PURE__*/_react.default.createElement(_styles2.AddNewVideo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 20
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 60,
    height: 20
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (productGalleryState === null || productGalleryState === void 0 ? void 0 : productGalleryState.videos) && (productGalleryState === null || productGalleryState === void 0 ? void 0 : productGalleryState.videos.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.GalleryVideos, null, productGalleryState === null || productGalleryState === void 0 ? void 0 : productGalleryState.videos.map(function (video) {
    return /*#__PURE__*/_react.default.createElement(_styles2.GalleryItem, {
      key: video.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.GalleryURL, null, video === null || video === void 0 ? void 0 : video.video), /*#__PURE__*/_react.default.createElement(_styles.Button, {
      onClick: function onClick() {
        return handleDeleteClick(video.id, video.type);
      }
    }, "Delete"));
  })), /*#__PURE__*/_react.default.createElement(_styles2.AddNewVideo, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "video",
    placeholder: t('YOUTUBE_VIDEO_URL', 'Youtube Video URL'),
    ref: inputAddRef,
    onChange: function onChange(e) {
      return handleChangeInput(e, null);
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 18
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleAddVideo();
    }
  }, t('ADD', 'Add')))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};

var ProductVideos = function ProductVideos(props) {
  var productGalleryProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductVideosUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductGallery, productGalleryProps);
};

exports.ProductVideos = ProductVideos;