"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancedSettings = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _SettingComponent = require("./SettingComponent");
var _styles = require("../../../styles");
var _ImageBox = require("./ImageBox");
var _Shared = require("../../Shared");
var _OrderType = require("./OrderType");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _FontStyleGroup = require("./FontStyleGroup");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AdvancedSettings = function AdvancedSettings(props) {
  var _advancedValues$gener5, _advancedValues$gener6, _advancedValues$gener7, _advancedValues$gener8, _advancedValues$my_pr, _advancedValues$my_pr2, _advancedValues$my_pr3, _advancedValues$my_pr4, _advancedValues$my_pr5, _advancedValues$my_pr6, _advancedValues$gener9, _advancedValues$gener10, _advancedValues$gener11, _advancedValues$gener12, _advancedValues$gener13, _advancedValues$gener14, _advancedValues$gener15, _advancedValues$gener16, _advancedValues$gener17, _advancedValues$gener18, _advancedValues$gener19, _advancedValues$gener20, _advancedValues$gener21, _advancedValues$gener22, _advancedValues$gener23, _advancedValues$gener24, _advancedValues$gener25, _advancedValues$gener26, _advancedValues$gener27, _advancedValues$gener28, _advancedValues$gener29, _advancedValues$gener30, _advancedValues$gener31, _advancedValues$gener32, _advancedValues$gener33, _advancedValues$gener34, _advancedValues$gener35, _advancedValues$gener36, _advancedValues$gener37, _advancedValues$gener38, _advancedValues$gener39, _advancedValues$busin, _advancedValues$busin2, _advancedValues$busin3, _advancedValues$busin4, _advancedValues$busin5, _advancedValues$busin6, _advancedValues$busin7, _advancedValues$busin8, _advancedValues$busin9, _advancedValues$my_pr11, _advancedValues$my_pr12, _advancedValues$my_pr13, _advancedValues$my_pr14, _advancedValues$busin10, _advancedValues$busin11, _advancedValues$busin12, _advancedValues$busin13, _advancedValues$busin14, _advancedValues$busin15, _advancedValues$gener40, _advancedValues$gener41, _advancedValues$gener42, _advancedValues$gener43, _advancedValues$busin17, _advancedValues$order, _advancedValues$order2, _advancedValues$order3, _advancedValues$order4, _advancedValues$order5, _advancedValues$order6, _advancedValues$order7, _advancedValues$order8, _advancedValues$order9, _advancedValues$order10, _advancedValues$order11, _advancedValues$order12, _advancedValues$order13, _advancedValues$order14, _advancedValues$order15, _advancedValues$order16, _advancedValues$order17;
  var themesList = props.themesList,
    advancedValues = props.advancedValues,
    setAdvancedValues = props.setAdvancedValues,
    handleUpdateSiteTheme = props.handleUpdateSiteTheme,
    isApp = props.isApp;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    themeStructure = _useState2[0],
    setThemeStructure = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var homepageViewList = [{
    key: 'homepage_header',
    name: t('HOMEPAGE_HEADER', 'Homepage Header'),
    type: 'hidden',
    path: 'homepage_view.components.homepage_header.hidden'
  }];
  var headerList = [{
    name: t('BACKGROUND_COLOR', 'Background color'),
    type: 'color',
    path: 'header.components.style.backgroundColor'
  }, {
    name: t('LOGO_POSITION', 'Logo Position'),
    type: 'position',
    path: 'header.components.logo.components.layout.position'
  }, {
    name: t('LANGUAGE_SELECTOR', 'Language selector'),
    type: 'hidden',
    path: 'header.components.language_selector.hidden'
  }];
  var businessListing = [{
    name: t('BUSINESS_LISTING_IMAGE', 'Business listing image'),
    type: 'image',
    path: 'business_listing_view.components.business_hero.components.image'
  }, {
    name: t('PREVIOUS_ORDERS_BLOCK', 'Previous orders block'),
    type: 'hidden',
    path: 'business_listing_view.components.previous_orders_block.hidden'
  }, {
    name: t('Highest_rated_business_block', 'Highest rated business block'),
    type: 'hidden',
    path: 'business_listing_view.components.highest_rated_business_block.hidden'
  }, {
    name: t('CATEGORIES_BLOCK', 'Categories block'),
    type: 'hidden',
    path: 'business_listing_view.components.categories.hidden'
  }, {
    name: t('AMOUNT_OF_BUSINESSES_TO_DISPLAY_PER_ROW', 'Amount of businesses to display per row:'),
    type: 'position',
    path: 'business_listing_view.components.layout.rows'
  }, {
    name: t('SEARCH_BOX', 'Search box'),
    type: 'hidden',
    path: 'business_listing_view.components.search.hidden'
  }, {
    name: t('FILTER_ICON', 'Filter icon'),
    type: 'hidden',
    path: 'business_listing_view.components.filter.hidden'
  }, {
    name: t('CITIES_DROPDOWN', 'Cities dropdown'),
    type: 'hidden',
    path: 'business_listing_view.components.cities.hidden'
  }];
  var businessBlockList = [{
    name: t('LOGO', 'Logo'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.logo.hidden'
  }, {
    name: t('HEADER', 'Header'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.header.hidden'
  }, {
    name: t('DELIVERY_FEE', 'Delivery Fee'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.fee.hidden'
  }, {
    name: t('TIME', 'Time'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.time.hidden'
  }, {
    name: t('DISTANCE', 'Distance'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.distance.hidden'
  }, {
    name: t('REVIEWS', 'Reviews'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.reviews.hidden'
  }, {
    name: t('FAVORITE_BUTTON', 'Favorite button'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.favorite.hidden'
  }, {
    name: t('OFFER_BADGE', 'Offer badge'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.offer.hidden'
  }, {
    name: t('OFFER__BADGE_POSITION', 'Offer badge position'),
    type: 'position',
    path: 'business_listing_view.components.business.components.offer.position'
  }, {
    name: t('CATEGORIES', 'Categories'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.categories.hidden'
  }, {
    name: t('FEATURED_BADGE', 'Featured badge'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.featured_badge.hidden'
  }];
  var businessPageList = [{
    name: t('DEFAULT_BACKGROUND_COLOR', 'Default Background color'),
    type: 'color',
    path: 'business_view.components.style.backgroundColor'
  }, {
    name: t('PRODUCTS_FROM_PREVIOUS_ORDERS_BLOCK', 'Products from previous orders block'),
    type: 'hidden',
    path: 'business_view.components.products_ordered.hidden'
  }, {
    name: t('FAVORITE_PRODUCTS_BLOCK', 'Favorite products block'),
    type: 'hidden',
    path: 'business_view.components.favorite_products.hidden'
  }, {
    name: t('NEAR_BUSINESS_BLOCK', 'Near business block'),
    type: 'hidden',
    path: 'business_view.components.near_business'
  }, {
    name: t('ORDER_VIEW_BUTTON', 'Order view button'),
    type: 'hidden',
    path: 'business_view.components.order_view_button.hidden'
  }];
  var businessInfoList = [{
    name: t('DESCRIPTION', 'Description'),
    type: 'hidden',
    path: 'business_view.components.information.components.description.hidden'
  }, {
    name: t('ABOUT', 'About'),
    type: 'hidden',
    path: 'business_view.components.information.components.about.hidden'
  }, {
    name: t('VIDEOS', 'Videos'),
    type: 'hidden',
    path: 'business_view.components.information.components.videos.hidden'
  }, {
    name: t('MENU_LIST_DELIVERY_TIME', 'Delivery time'),
    type: 'hidden',
    path: 'business_view.components.information.components.delivery_time.hidden'
  }, {
    name: t('PICKUP_TIME', 'Pickup time'),
    type: 'hidden',
    path: 'business_view.components.information.components.pickup_time.hidden'
  }, {
    name: t('IMAGES', 'Images'),
    type: 'hidden',
    path: 'business_view.components.information.components.images.hidden'
  }, {
    name: t('ADDRESS', 'Address'),
    type: 'hidden',
    path: 'business_view.components.information.components.address.hidden'
  }];
  var productBlockList = [{
    name: t('DUMMY_IMAGE_WHEN_NO_IMAGE', 'Dummy image when no image'),
    type: 'hidden',
    path: 'business_view.components.products.components.product.components.dummy.hidden'
  }, {
    name: t('DESCRIPTION', 'Description'),
    type: 'hidden',
    path: 'business_view.components.products.components.product.components.description.hidden'
  }, {
    name: t('IMAGE', 'Image'),
    type: 'hidden',
    path: 'business_view.components.products.components.product.components.image.hidden'
  }, {
    name: t('POSITION', 'Position'),
    type: 'position',
    path: 'business_view.components.products.components.product.components.image.position'
  }];
  var reviewsPopups = [{
    name: t('REVIEW_DATE', 'Review date'),
    type: 'hidden',
    path: 'business_view.components.reviews.components.review_date.hidden'
  }];
  var cartHeaderList = [{
    name: t('BUSINESS_LOGO', 'Business logo'),
    type: 'hidden',
    path: 'header.components.cart.components.business.components.logo.hidden'
  }, {
    name: t('PRODUCT_IMAGE', 'Product image'),
    type: 'hidden',
    path: 'header.components.cart.components.products.components.image.hidden'
  }, {
    name: t('PRODUCT_DESCRIPTION', 'Product description'),
    type: 'hidden',
    path: 'header.components.cart.components.products.components.description.hidden'
  }, {
    name: t('DISCOUNT_COUPON', 'Discount coupon'),
    type: 'hidden',
    path: 'header.components.cart.components.discount_coupon.hidden'
  }, {
    name: t('COMMENTS', 'Comments'),
    type: 'hidden',
    path: 'header.components.cart.components.comments.hidden'
  }];
  var checkoutList = [{
    name: t('BUSINESS_ADDRESS', 'Business address'),
    type: 'hidden',
    path: 'checkout.components.business.components.address.hidden'
  }, {
    name: t('MAP_OF_BUSINESS_ADDRESS', 'Map of business address'),
    type: 'hidden',
    path: 'checkout.components.map.hidden'
  }];
  var orderBlockList = [{
    name: t('DATE', 'Date'),
    type: 'hidden',
    path: 'confirmation.components.order.components.date.hidden'
  }, {
    name: t('PROGRESS_BAR', 'Progress bar'),
    type: 'hidden',
    path: 'confirmation.components.order.components.progress.hidden'
  }];
  var popupAddressList = [{
    name: t('MAP', 'Map'),
    type: 'hidden',
    path: 'address.components.map.hidden'
  }, {
    name: t('INTERNAL_NUMBER', 'Internal number'),
    type: 'hidden',
    path: 'address.components.internal_number.hidden'
  }, {
    name: t('ADDRESS_NOTES', 'Address notes'),
    type: 'hidden',
    path: 'address.components.address_notes.hidden'
  }, {
    name: t('ICONS', 'Icons'),
    type: 'hidden',
    path: 'address.components.icons.hidden'
  }];
  var myAccountList = [{
    name: t('USER_IMAGE', 'User image'),
    type: 'hidden',
    path: 'profile.components.picture.hidden'
  }, {
    name: t('BIRTHDAY', 'Birthday'),
    type: 'hidden',
    path: 'profile.components.birthday.hidden'
  }, {
    name: t('LANGUAGES', 'Languages'),
    type: 'hidden',
    path: 'profile.components.languages.hidden'
  }, {
    name: t('address_list', 'Address list'),
    type: 'hidden',
    path: 'profile.components.address_list.hidden'
  }];
  var activeOrderBlockList = [{
    name: t('MAP', 'Map'),
    type: 'hidden',
    path: 'orders.components.map.hidden'
  }, {
    name: t('BUSINESS_LOGO', 'Business logo'),
    type: 'hidden',
    path: 'orders.components.business_logo.hidden'
  }, {
    name: t('BUSINESS_NAME', 'Business name'),
    type: 'hidden',
    path: 'orders.components.business_name.hidden'
  }, {
    name: t('ORDER_NUMBER', 'Order number'),
    type: 'hidden',
    path: 'orders.components.order_number.hidden'
  }, {
    name: t('ORDER_DATE', 'Order date'),
    type: 'hidden',
    path: 'orders.components.date.hidden'
  }, {
    name: t('REVIEW_ORDER_BUTTON', 'Review order button'),
    type: 'hidden',
    path: 'orders.components.review_order_button.hidden'
  }, {
    name: t('REORDER_BUTTON', 'Reorder button'),
    type: 'hidden',
    path: 'orders.components.reorder_button.hidden'
  }, {
    name: t('FAVORITE_BUTTON', 'Favorite button'),
    type: 'hidden',
    path: 'orders.components.favorite.hidden'
  }, {
    name: t('ORDER_STATUS', 'Order status'),
    type: 'hidden',
    path: 'orders.components.order_status.hidden'
  }, {
    name: t('PREVIOUS_ORDER_BLOCK', 'Previous order block'),
    type: 'hidden',
    path: 'orders.components.past_orders.hidden'
  }, {
    name: t('BUSINESS_TAB', 'Business tab'),
    type: 'hidden',
    path: 'orders.components.business_tab.hidden'
  }, {
    name: t('PRODUCTS_TAB', 'Products tab'),
    type: 'hidden',
    path: 'orders.components.products_tab.hidden'
  }];
  var menuOptionList = [{
    name: t('BROWSE_AND_SEARCH', 'Browse and search'),
    type: 'hidden',
    path: 'bar_menu.components.browse.hidden'
  }, {
    name: t('WALLET', 'Wallet'),
    type: 'hidden',
    path: 'bar_menu.components.wallet.hidden'
  }, {
    name: t('PROMOTIONS', 'Promotions'),
    type: 'hidden',
    path: 'bar_menu.components.promotions.hidden'
  }, {
    name: t('MESSAGES', 'Messages'),
    type: 'hidden',
    path: 'bar_menu.components.messages.hidden'
  }, {
    name: t('HELP', 'Help'),
    type: 'hidden',
    path: 'bar_menu.components.help.hidden'
  }, {
    name: t('SECURITY', 'Security'),
    type: 'hidden',
    path: 'bar_menu.components.sessions.hidden'
  }, {
    name: t('MY_FAVORITES', 'My favorites'),
    type: 'hidden',
    path: 'bar_menu.components.favorites.hidden'
  }];
  var thirdPartyCodeList = [{
    name: t('HEAD', 'Head'),
    type: 'input',
    path: 'third_party_code.head'
  }, {
    name: t('BODY', 'Body'),
    type: 'input',
    path: 'third_party_code.body'
  }];
  var navigationBarList = [{
    name: t('BROWSE', 'Browse'),
    type: 'hidden',
    path: 'bar_menu.components.browse.hidden'
  }, {
    name: t('ORDERS', 'Orders'),
    type: 'hidden',
    path: 'bar_menu.components.orders.hidden'
  }, {
    name: t('MY_CARTS', 'My carts'),
    type: 'hidden',
    path: 'bar_menu.components.my_carts.hidden'
  }, {
    name: t('WALLET', 'Wallet'),
    type: 'hidden',
    path: 'bar_menu.components.wallet.hidden'
  }, {
    name: t('PROFILE', 'Profile'),
    type: 'hidden',
    path: 'bar_menu.components.profile.hidden'
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var updateObject = function updateObject(object, newValue, path) {
    var stack = path.split('.');
    while (stack.length > 1) {
      object = object[stack.shift()];
    }
    object[stack.shift()] = newValue;
  };
  var handleUpdateThemeValue = function handleUpdateThemeValue(value, path) {
    var _advancedValues = JSON.parse(JSON.stringify(advancedValues));
    updateObject(_advancedValues, value, path);
    setAdvancedValues(_advancedValues);
  };
  (0, _react.useEffect)(function () {
    var _themesList$themes, _themesList$themes$;
    if (!(themesList !== null && themesList !== void 0 && themesList.loading) && themesList !== null && themesList !== void 0 && (_themesList$themes = themesList.themes) !== null && _themesList$themes !== void 0 && (_themesList$themes$ = _themesList$themes[0]) !== null && _themesList$themes$ !== void 0 && _themesList$themes$.structure) {
      var _themesList$themes2, _themesList$themes2$;
      setThemeStructure(JSON.parse(JSON.stringify(themesList === null || themesList === void 0 ? void 0 : (_themesList$themes2 = themesList.themes) === null || _themesList$themes2 === void 0 ? void 0 : (_themesList$themes2$ = _themesList$themes2[0]) === null || _themesList$themes2$ === void 0 ? void 0 : _themesList$themes2$.structure)));
    }
  }, [themesList]);
  var shadowValues = (0, _react.useMemo)(function () {
    var _advancedValues$gener, _advancedValues$gener2, _advancedValues$gener3, _advancedValues$gener4;
    var buttonShadow = advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$gener = advancedValues.general) === null || _advancedValues$gener === void 0 ? void 0 : (_advancedValues$gener2 = _advancedValues$gener.components) === null || _advancedValues$gener2 === void 0 ? void 0 : (_advancedValues$gener3 = _advancedValues$gener2.buttons) === null || _advancedValues$gener3 === void 0 ? void 0 : (_advancedValues$gener4 = _advancedValues$gener3.shadow) === null || _advancedValues$gener4 === void 0 ? void 0 : _advancedValues$gener4.components;
    if (!(buttonShadow !== null && buttonShadow !== void 0 && buttonShadow.x) || !(buttonShadow !== null && buttonShadow !== void 0 && buttonShadow.y) || !(buttonShadow !== null && buttonShadow !== void 0 && buttonShadow.blur) || !(buttonShadow !== null && buttonShadow !== void 0 && buttonShadow.spread)) return '';
    return "".concat(buttonShadow === null || buttonShadow === void 0 ? void 0 : buttonShadow.x, "px ").concat(buttonShadow === null || buttonShadow === void 0 ? void 0 : buttonShadow.y, "px ").concat(buttonShadow === null || buttonShadow === void 0 ? void 0 : buttonShadow.blur, "px ").concat(buttonShadow === null || buttonShadow === void 0 ? void 0 : buttonShadow.spread, "px ").concat(buttonShadow === null || buttonShadow === void 0 ? void 0 : buttonShadow.color);
  }, [advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$gener5 = advancedValues.general) === null || _advancedValues$gener5 === void 0 ? void 0 : (_advancedValues$gener6 = _advancedValues$gener5.components) === null || _advancedValues$gener6 === void 0 ? void 0 : (_advancedValues$gener7 = _advancedValues$gener6.buttons) === null || _advancedValues$gener7 === void 0 ? void 0 : (_advancedValues$gener8 = _advancedValues$gener7.shadow) === null || _advancedValues$gener8 === void 0 ? void 0 : _advancedValues$gener8.components]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, isApp ? /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_APP_ADVANCED_SETTINGS', 'Customer App  Advanced Settings')), /*#__PURE__*/_react.default.createElement("h2", null, t('HOMEPAGE', 'Homepage')), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('HOMEPAGE_IMAGE', 'Homepage image'),
    ratio: "1350 x 400 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$my_pr = advancedValues.my_products) === null || _advancedValues$my_pr === void 0 ? void 0 : (_advancedValues$my_pr2 = _advancedValues$my_pr.components) === null || _advancedValues$my_pr2 === void 0 ? void 0 : (_advancedValues$my_pr3 = _advancedValues$my_pr2.images) === null || _advancedValues$my_pr3 === void 0 ? void 0 : (_advancedValues$my_pr4 = _advancedValues$my_pr3.components) === null || _advancedValues$my_pr4 === void 0 ? void 0 : (_advancedValues$my_pr5 = _advancedValues$my_pr4.homepage_background) === null || _advancedValues$my_pr5 === void 0 ? void 0 : (_advancedValues$my_pr6 = _advancedValues$my_pr5.components) === null || _advancedValues$my_pr6 === void 0 ? void 0 : _advancedValues$my_pr6.image,
    path: "my_products.components.images.components.homepage_background.components.image",
    handleChangePhoto: handleUpdateThemeValue
  })) : /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h1", null, t('WEBSITE_ADVANCED_SETTINGS', 'Website  Advanced Settings')), /*#__PURE__*/_react.default.createElement(_styles2.HomePageWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('HOMEPAGE', 'Homepage')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: homepageViewList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUTTONS', 'Buttons')), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, "Border Radius"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$gener9 = advancedValues.general) === null || _advancedValues$gener9 === void 0 ? void 0 : (_advancedValues$gener10 = _advancedValues$gener9.components) === null || _advancedValues$gener10 === void 0 ? void 0 : (_advancedValues$gener11 = _advancedValues$gener10.buttons) === null || _advancedValues$gener11 === void 0 ? void 0 : _advancedValues$gener11.borderRadius,
    onChange: function onChange(e) {
      return handleUpdateThemeValue(e.target.value, 'general.components.buttons.borderRadius');
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement("h3", null, t('SHAPE', 'Shape')), /*#__PURE__*/_react.default.createElement(_styles2.ShadowWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.DropShadowWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ShadowInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.DropShadow, {
    style: {
      boxShadow: shadowValues
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, t('DROP_SHADOW', 'Drop shadow'))), /*#__PURE__*/_react.default.createElement(_styles2.ShadowInputGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.ShadowInputControl, null, /*#__PURE__*/_react.default.createElement("span", null, "X"), /*#__PURE__*/_react.default.createElement("input", {
    value: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$gener12 = advancedValues.general) === null || _advancedValues$gener12 === void 0 ? void 0 : (_advancedValues$gener13 = _advancedValues$gener12.components) === null || _advancedValues$gener13 === void 0 ? void 0 : (_advancedValues$gener14 = _advancedValues$gener13.buttons) === null || _advancedValues$gener14 === void 0 ? void 0 : (_advancedValues$gener15 = _advancedValues$gener14.shadow) === null || _advancedValues$gener15 === void 0 ? void 0 : (_advancedValues$gener16 = _advancedValues$gener15.components) === null || _advancedValues$gener16 === void 0 ? void 0 : _advancedValues$gener16.x,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    onChange: function onChange(e) {
      return handleUpdateThemeValue(e.target.value, 'general.components.buttons.shadow.components.x');
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ShadowInputControl, null, /*#__PURE__*/_react.default.createElement("span", null, "Y"), /*#__PURE__*/_react.default.createElement("input", {
    value: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$gener17 = advancedValues.general) === null || _advancedValues$gener17 === void 0 ? void 0 : (_advancedValues$gener18 = _advancedValues$gener17.components) === null || _advancedValues$gener18 === void 0 ? void 0 : (_advancedValues$gener19 = _advancedValues$gener18.buttons) === null || _advancedValues$gener19 === void 0 ? void 0 : (_advancedValues$gener20 = _advancedValues$gener19.shadow) === null || _advancedValues$gener20 === void 0 ? void 0 : (_advancedValues$gener21 = _advancedValues$gener20.components) === null || _advancedValues$gener21 === void 0 ? void 0 : _advancedValues$gener21.y,
    onChange: function onChange(e) {
      return handleUpdateThemeValue(e.target.value, 'general.components.buttons.shadow.components.y');
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ShadowInputControl, null, /*#__PURE__*/_react.default.createElement("span", null, "B"), /*#__PURE__*/_react.default.createElement("input", {
    value: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$gener22 = advancedValues.general) === null || _advancedValues$gener22 === void 0 ? void 0 : (_advancedValues$gener23 = _advancedValues$gener22.components) === null || _advancedValues$gener23 === void 0 ? void 0 : (_advancedValues$gener24 = _advancedValues$gener23.buttons) === null || _advancedValues$gener24 === void 0 ? void 0 : (_advancedValues$gener25 = _advancedValues$gener24.shadow) === null || _advancedValues$gener25 === void 0 ? void 0 : (_advancedValues$gener26 = _advancedValues$gener25.components) === null || _advancedValues$gener26 === void 0 ? void 0 : _advancedValues$gener26.blur,
    onChange: function onChange(e) {
      return handleUpdateThemeValue(e.target.value, 'general.components.buttons.shadow.components.blur');
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ShadowInputControl, null, /*#__PURE__*/_react.default.createElement("span", null, "S"), /*#__PURE__*/_react.default.createElement("input", {
    value: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$gener27 = advancedValues.general) === null || _advancedValues$gener27 === void 0 ? void 0 : (_advancedValues$gener28 = _advancedValues$gener27.components) === null || _advancedValues$gener28 === void 0 ? void 0 : (_advancedValues$gener29 = _advancedValues$gener28.buttons) === null || _advancedValues$gener29 === void 0 ? void 0 : (_advancedValues$gener30 = _advancedValues$gener29.shadow) === null || _advancedValues$gener30 === void 0 ? void 0 : (_advancedValues$gener31 = _advancedValues$gener30.components) === null || _advancedValues$gener31 === void 0 ? void 0 : _advancedValues$gener31.spread,
    onChange: function onChange(e) {
      return handleUpdateThemeValue(e.target.value, 'general.components.buttons.shadow.components.spread');
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ShadowInputControl, null, /*#__PURE__*/_react.default.createElement("span", null, "C"), /*#__PURE__*/_react.default.createElement("input", {
    value: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$gener32 = advancedValues.general) === null || _advancedValues$gener32 === void 0 ? void 0 : (_advancedValues$gener33 = _advancedValues$gener32.components) === null || _advancedValues$gener33 === void 0 ? void 0 : (_advancedValues$gener34 = _advancedValues$gener33.buttons) === null || _advancedValues$gener34 === void 0 ? void 0 : (_advancedValues$gener35 = _advancedValues$gener34.shadow) === null || _advancedValues$gener35 === void 0 ? void 0 : (_advancedValues$gener36 = _advancedValues$gener35.components) === null || _advancedValues$gener36 === void 0 ? void 0 : _advancedValues$gener36.color,
    onChange: function onChange(e) {
      return handleUpdateThemeValue(e.target.value, 'general.components.buttons.shadow.components.color');
    }
  })))))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('TIPOGRAPHY', 'Tipography')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_FontStyleGroup.FontStyleGroup, {
    fonts: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$gener37 = advancedValues.general) === null || _advancedValues$gener37 === void 0 ? void 0 : (_advancedValues$gener38 = _advancedValues$gener37.components) === null || _advancedValues$gener38 === void 0 ? void 0 : (_advancedValues$gener39 = _advancedValues$gener38.fonts) === null || _advancedValues$gener39 === void 0 ? void 0 : _advancedValues$gener39.primary,
    path: "general.components.fonts.primary",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('IMAGES', 'Images')), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('BUSINESS_LOGO_DUMMY_IMAGE', 'Business Logo dummy image'),
    ratio: "512 x 512 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$busin = advancedValues.business_view) === null || _advancedValues$busin === void 0 ? void 0 : (_advancedValues$busin2 = _advancedValues$busin.components) === null || _advancedValues$busin2 === void 0 ? void 0 : (_advancedValues$busin3 = _advancedValues$busin2.header) === null || _advancedValues$busin3 === void 0 ? void 0 : (_advancedValues$busin4 = _advancedValues$busin3.components) === null || _advancedValues$busin4 === void 0 ? void 0 : (_advancedValues$busin5 = _advancedValues$busin4.logo) === null || _advancedValues$busin5 === void 0 ? void 0 : _advancedValues$busin5.dummy_image,
    path: "business_view.components.header.components.logo.dummy_image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('BUSINESS_HEADER_DUMMY_IMAGE', 'Business header dummy image'),
    ratio: "1350 x 400 px",
    isBig: true,
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$busin6 = advancedValues.business_view) === null || _advancedValues$busin6 === void 0 ? void 0 : (_advancedValues$busin7 = _advancedValues$busin6.components) === null || _advancedValues$busin7 === void 0 ? void 0 : (_advancedValues$busin8 = _advancedValues$busin7.header) === null || _advancedValues$busin8 === void 0 ? void 0 : (_advancedValues$busin9 = _advancedValues$busin8.components) === null || _advancedValues$busin9 === void 0 ? void 0 : _advancedValues$busin9.dummy_image,
    path: "business_view.components.header.components.dummy_image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_styles2.HomeImageFullScreenWrapper, {
    onClick: function onClick() {
      var _advancedValues$my_pr7, _advancedValues$my_pr8, _advancedValues$my_pr9, _advancedValues$my_pr10;
      return handleUpdateThemeValue(!(advancedValues !== null && advancedValues !== void 0 && (_advancedValues$my_pr7 = advancedValues.my_products) !== null && _advancedValues$my_pr7 !== void 0 && (_advancedValues$my_pr8 = _advancedValues$my_pr7.components) !== null && _advancedValues$my_pr8 !== void 0 && (_advancedValues$my_pr9 = _advancedValues$my_pr8.images) !== null && _advancedValues$my_pr9 !== void 0 && (_advancedValues$my_pr10 = _advancedValues$my_pr9.components) !== null && _advancedValues$my_pr10 !== void 0 && _advancedValues$my_pr10.homepage_image_fullscreen), 'my_products.components.images.components.homepage_image_fullscreen');
    }
  }, advancedValues !== null && advancedValues !== void 0 && (_advancedValues$my_pr11 = advancedValues.my_products) !== null && _advancedValues$my_pr11 !== void 0 && (_advancedValues$my_pr12 = _advancedValues$my_pr11.components) !== null && _advancedValues$my_pr12 !== void 0 && (_advancedValues$my_pr13 = _advancedValues$my_pr12.images) !== null && _advancedValues$my_pr13 !== void 0 && (_advancedValues$my_pr14 = _advancedValues$my_pr13.components) !== null && _advancedValues$my_pr14 !== void 0 && _advancedValues$my_pr14.homepage_image_fullscreen ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null), /*#__PURE__*/_react.default.createElement("span", null, t('HOMEPAGE_IMAGE_FULLSCREEN', 'Homepage image fullscreen'))), /*#__PURE__*/_react.default.createElement(_styles2.ImageGroup, null, /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('PRODUCT_DUMMY_IMAGE', 'Product dummy image'),
    ratio: "900 x 200 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$busin10 = advancedValues.business_view) === null || _advancedValues$busin10 === void 0 ? void 0 : (_advancedValues$busin11 = _advancedValues$busin10.components) === null || _advancedValues$busin11 === void 0 ? void 0 : (_advancedValues$busin12 = _advancedValues$busin11.products) === null || _advancedValues$busin12 === void 0 ? void 0 : (_advancedValues$busin13 = _advancedValues$busin12.components) === null || _advancedValues$busin13 === void 0 ? void 0 : (_advancedValues$busin14 = _advancedValues$busin13.photo) === null || _advancedValues$busin14 === void 0 ? void 0 : (_advancedValues$busin15 = _advancedValues$busin14.components) === null || _advancedValues$busin15 === void 0 ? void 0 : _advancedValues$busin15.dummy_image,
    path: "business_view.components.products.components.photo.components.dummy_image",
    handleChangePhoto: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('FAVICON', 'Favicon')), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('FAVICON', 'Favicon'),
    ratio: "512 x 512 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$gener40 = advancedValues.general) === null || _advancedValues$gener40 === void 0 ? void 0 : (_advancedValues$gener41 = _advancedValues$gener40.components) === null || _advancedValues$gener41 === void 0 ? void 0 : (_advancedValues$gener42 = _advancedValues$gener41.favicon) === null || _advancedValues$gener42 === void 0 ? void 0 : (_advancedValues$gener43 = _advancedValues$gener42.components) === null || _advancedValues$gener43 === void 0 ? void 0 : _advancedValues$gener43.image,
    path: "general.components.favicon.components.image",
    handleChangePhoto: handleUpdateThemeValue
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('HEADER', 'Header')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: headerList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_LISTING', 'Business listing')), /*#__PURE__*/_react.default.createElement(_styles2.HideCheckWrapper, {
    isBottom: true,
    onClick: function onClick() {
      var _advancedValues$busin16;
      return handleUpdateThemeValue(!(advancedValues !== null && advancedValues !== void 0 && (_advancedValues$busin16 = advancedValues.business_listing_view) !== null && _advancedValues$busin16 !== void 0 && _advancedValues$busin16.hidden), 'business_listing_view.hidden');
    }
  }, advancedValues !== null && advancedValues !== void 0 && (_advancedValues$busin17 = advancedValues.business_listing_view) !== null && _advancedValues$busin17 !== void 0 && _advancedValues$busin17.hidden ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null), /*#__PURE__*/_react.default.createElement("span", null, t('HIDDEN', 'Hidden'))), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: businessListing,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_BLOCK', 'Business block')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: businessBlockList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_PAGE', 'Business page')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: businessPageList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_INFORMATION', 'Business Information')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: businessInfoList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PRODUCTS_BLOCK', 'Products block')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: productBlockList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('REVIEWS_POPUPS', 'Reviews popups')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: reviewsPopups,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('CART_HEADER', 'Cart Header')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: cartHeaderList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('CHECKOUT', 'Checkout')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: checkoutList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('CONFIRMATION_PAGE', 'Confirmation page')), /*#__PURE__*/_react.default.createElement("h3", null, t('ORDER_BLOCK', 'Order block')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: orderBlockList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('POPUP_ADDRESS', 'Popup: Address')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: popupAddressList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('MY_ACCOUNT_PAGE', 'My account page')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: myAccountList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('MY_ORDERS', 'My orders')), /*#__PURE__*/_react.default.createElement("h3", null, t('ACTIVE_ORDERS_BLOCK', 'Active Orders Block')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: activeOrderBlockList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), !isApp && /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('MENU_OPTIONS', 'Menu options')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: menuOptionList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('POPUP_ORDER_TYPES', 'Popup: Order types ')), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TITLE_MENU_OPTIONS', 'Title Menu options')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('TITLE_MENU_OPTIONS', 'Title Menu options'),
    defaultValue: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$order = advancedValues.order_types) === null || _advancedValues$order === void 0 ? void 0 : (_advancedValues$order2 = _advancedValues$order.components) === null || _advancedValues$order2 === void 0 ? void 0 : _advancedValues$order2.title_menu,
    onChange: function onChange(e) {
      return handleUpdateThemeValue(e.target.value, 'order_types.components.title_menu');
    }
  })), /*#__PURE__*/_react.default.createElement("h3", null, t('DELIVERY', 'Delivery')), /*#__PURE__*/_react.default.createElement(_OrderType.OrderType, {
    typeValues: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$order3 = advancedValues.order_types) === null || _advancedValues$order3 === void 0 ? void 0 : (_advancedValues$order4 = _advancedValues$order3.components) === null || _advancedValues$order4 === void 0 ? void 0 : (_advancedValues$order5 = _advancedValues$order4.delivery) === null || _advancedValues$order5 === void 0 ? void 0 : _advancedValues$order5.components,
    path: "order_types.components.delivery.components",
    handleUpdateThemeValue: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('PICKUP', 'Pickup')), /*#__PURE__*/_react.default.createElement(_OrderType.OrderType, {
    typeValues: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$order6 = advancedValues.order_types) === null || _advancedValues$order6 === void 0 ? void 0 : (_advancedValues$order7 = _advancedValues$order6.components) === null || _advancedValues$order7 === void 0 ? void 0 : (_advancedValues$order8 = _advancedValues$order7.pickup) === null || _advancedValues$order8 === void 0 ? void 0 : _advancedValues$order8.components,
    path: "order_types.components.pickup.components",
    handleUpdateThemeValue: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('EAT_IN', 'Eat in')), /*#__PURE__*/_react.default.createElement(_OrderType.OrderType, {
    typeValues: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$order9 = advancedValues.order_types) === null || _advancedValues$order9 === void 0 ? void 0 : (_advancedValues$order10 = _advancedValues$order9.components) === null || _advancedValues$order10 === void 0 ? void 0 : (_advancedValues$order11 = _advancedValues$order10.eat_in) === null || _advancedValues$order11 === void 0 ? void 0 : _advancedValues$order11.components,
    path: "order_types.components.eat_in.components",
    handleUpdateThemeValue: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('CURBSIDE', 'Curbside')), /*#__PURE__*/_react.default.createElement(_OrderType.OrderType, {
    typeValues: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$order12 = advancedValues.order_types) === null || _advancedValues$order12 === void 0 ? void 0 : (_advancedValues$order13 = _advancedValues$order12.components) === null || _advancedValues$order13 === void 0 ? void 0 : (_advancedValues$order14 = _advancedValues$order13.curbside) === null || _advancedValues$order14 === void 0 ? void 0 : _advancedValues$order14.components,
    path: "order_types.components.curbside.components",
    handleUpdateThemeValue: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('DRIVE_THRU', 'Drive thru')), /*#__PURE__*/_react.default.createElement(_OrderType.OrderType, {
    typeValues: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$order15 = advancedValues.order_types) === null || _advancedValues$order15 === void 0 ? void 0 : (_advancedValues$order16 = _advancedValues$order15.components) === null || _advancedValues$order16 === void 0 ? void 0 : (_advancedValues$order17 = _advancedValues$order16.drive_thru) === null || _advancedValues$order17 === void 0 ? void 0 : _advancedValues$order17.components,
    path: "order_types.components.drive_thru.components",
    handleUpdateThemeValue: handleUpdateThemeValue
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('THIRD_PARTY_CODE', 'Third-party code')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: thirdPartyCodeList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), isApp && /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('NAVIGATION_BAR_MENU', 'Navigation bar menu')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: navigationBarList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleUpdateSiteTheme(true);
    }
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERING', 'Ordering'),
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
  }));
};
exports.AdvancedSettings = AdvancedSettings;