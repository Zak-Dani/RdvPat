function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carrousel"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js ***!
    \**********************************************************************/

  /*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_CONFIG_FACTORY, CDK_DROP_LIST, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem, ɵangular_material_src_cdk_drag_drop_drag_drop_b */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015DragDropJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function () {
      return CDK_DRAG_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function () {
      return CDK_DRAG_CONFIG_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function () {
      return CDK_DROP_LIST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDrag", function () {
      return CdkDrag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function () {
      return CdkDragHandle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function () {
      return CdkDragPlaceholder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function () {
      return CdkDragPreview;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDropList", function () {
      return CdkDropList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function () {
      return CdkDropListGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDrop", function () {
      return DragDrop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropModule", function () {
      return DragDropModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function () {
      return DragDropRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragRef", function () {
      return DragRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropListRef", function () {
      return DropListRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "copyArrayItem", function () {
      return copyArrayItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "moveItemInArray", function () {
      return moveItemInArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transferArrayItem", function () {
      return transferArrayItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_drag_drop_drag_drop_b", function () {
      return CDK_DRAG_PARENT;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-styling.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Extended CSSStyleDeclaration that includes a couple of drag-related
     * properties that aren't in the built-in TS typings.
     * @record
     */


    function DragCSSStyleDeclaration() {}

    if (false) {}
    /**
     * Shallow-extends a stylesheet object with another stylesheet object.
     * \@docs-private
     * @param {?} dest
     * @param {?} source
     * @return {?}
     */


    function extendStyles(dest, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] =
          /** @type {?} */
          source[key];
        }
      }

      return dest;
    }
    /**
     * Toggles whether the native drag interactions should be enabled for an element.
     * \@docs-private
     * @param {?} element Element on which to toggle the drag interactions.
     * @param {?} enable Whether the drag interactions should be enabled.
     * @return {?}
     */


    function toggleNativeDragInteractions(element, enable) {
      /** @type {?} */
      var userSelect = enable ? '' : 'none';
      extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/transition-duration.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Parses a CSS time value to milliseconds.
     * @param {?} value
     * @return {?}
     */


    function parseCssTimeUnitsToMs(value) {
      // Some browsers will return it in seconds, whereas others will return milliseconds.

      /** @type {?} */
      var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
      return parseFloat(value) * multiplier;
    }
    /**
     * Gets the transform transition duration, including the delay, of an element in milliseconds.
     * @param {?} element
     * @return {?}
     */


    function getTransformTransitionDurationInMs(element) {
      /** @type {?} */
      var computedStyle = getComputedStyle(element);
      /** @type {?} */

      var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
      /** @type {?} */

      var property = transitionedProperties.find(
      /**
      * @param {?} prop
      * @return {?}
      */
      function (prop) {
        return prop === 'transform' || prop === 'all';
      }); // If there's no transition for `all` or `transform`, we shouldn't do anything.

      if (!property) {
        return 0;
      } // Get the index of the property that we're interested in and match
      // it up to the same index in `transition-delay` and `transition-duration`.

      /** @type {?} */


      var propertyIndex = transitionedProperties.indexOf(property);
      /** @type {?} */

      var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
      /** @type {?} */

      var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
      return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
    }
    /**
     * Parses out multiple values from a computed style into an array.
     * @param {?} computedStyle
     * @param {?} name
     * @return {?}
     */


    function parseCssPropertyValue(computedStyle, name) {
      /** @type {?} */
      var value = computedStyle.getPropertyValue(name);
      return value.split(',').map(
      /**
      * @param {?} part
      * @return {?}
      */
      function (part) {
        return part.trim();
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/client-rect.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Gets a mutable version of an element's bounding `ClientRect`.
     * @param {?} element
     * @return {?}
     */


    function getMutableClientRect(element) {
      /** @type {?} */
      var clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
      // and we need to be able to update them. Also we can't use a spread here, because
      // the values on a `ClientRect` aren't own properties. See:
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

      return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
      };
    }
    /**
     * Checks whether some coordinates are within a `ClientRect`.
     * @param {?} clientRect ClientRect that is being checked.
     * @param {?} x Coordinates along the X axis.
     * @param {?} y Coordinates along the Y axis.
     * @return {?}
     */


    function isInsideClientRect(clientRect, x, y) {
      var top = clientRect.top,
          bottom = clientRect.bottom,
          left = clientRect.left,
          right = clientRect.right;
      return y >= top && y <= bottom && x >= left && x <= right;
    }
    /**
     * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
     * @param {?} clientRect `ClientRect` that should be updated.
     * @param {?} top Amount to add to the `top` position.
     * @param {?} left Amount to add to the `left` position.
     * @return {?}
     */


    function adjustClientRect(clientRect, top, left) {
      clientRect.top += top;
      clientRect.bottom = clientRect.top + clientRect.height;
      clientRect.left += left;
      clientRect.right = clientRect.left + clientRect.width;
    }
    /**
     * Checks whether the pointer coordinates are close to a ClientRect.
     * @param {?} rect ClientRect to check against.
     * @param {?} threshold Threshold around the ClientRect.
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */


    function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
      var top = rect.top,
          right = rect.right,
          bottom = rect.bottom,
          left = rect.left,
          width = rect.width,
          height = rect.height;
      /** @type {?} */

      var xThreshold = width * threshold;
      /** @type {?} */

      var yThreshold = height * threshold;
      return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/parent-position-tracker.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Object holding the scroll position of something.
     * @record
     */


    function ScrollPosition() {}

    if (false) {}
    /**
     * Keeps track of the scroll position and dimensions of the parents of an element.
     */


    var ParentPositionTracker =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _document
       * @param {?} _viewportRuler
       */
      function ParentPositionTracker(_document, _viewportRuler) {
        _classCallCheck(this, ParentPositionTracker);

        this._document = _document;
        this._viewportRuler = _viewportRuler;
        /**
         * Cached positions of the scrollable parent elements.
         */

        this.positions = new Map();
      }
      /**
       * Clears the cached positions.
       * @return {?}
       */


      _createClass(ParentPositionTracker, [{
        key: "clear",
        value: function clear() {
          this.positions.clear();
        }
        /**
         * Caches the positions. Should be called at the beginning of a drag sequence.
         * @param {?} elements
         * @return {?}
         */

      }, {
        key: "cache",
        value: function cache(elements) {
          var _this = this;

          this.clear();
          this.positions.set(this._document, {
            scrollPosition: this._viewportRuler.getViewportScrollPosition()
          });
          elements.forEach(
          /**
          * @param {?} element
          * @return {?}
          */
          function (element) {
            _this.positions.set(element, {
              scrollPosition: {
                top: element.scrollTop,
                left: element.scrollLeft
              },
              clientRect: getMutableClientRect(element)
            });
          });
        }
        /**
         * Handles scrolling while a drag is taking place.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "handleScroll",
        value: function handleScroll(event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target;
          /** @type {?} */

          var cachedPosition = this.positions.get(target);

          if (!cachedPosition) {
            return null;
          } // Used when figuring out whether an element is inside the scroll parent. If the scrolled
          // parent is the `document`, we use the `documentElement`, because IE doesn't support
          // `contains` on the `document`.

          /** @type {?} */


          var scrolledParentNode = target === this._document ? target.documentElement : target;
          /** @type {?} */

          var scrollPosition = cachedPosition.scrollPosition;
          /** @type {?} */

          var newTop;
          /** @type {?} */

          var newLeft;

          if (target === this._document) {
            /** @type {?} */
            var viewportScrollPosition =
            /** @type {?} */
            this._viewportRuler.getViewportScrollPosition();

            newTop = viewportScrollPosition.top;
            newLeft = viewportScrollPosition.left;
          } else {
            newTop =
            /** @type {?} */
            target.scrollTop;
            newLeft =
            /** @type {?} */
            target.scrollLeft;
          }
          /** @type {?} */


          var topDifference = scrollPosition.top - newTop;
          /** @type {?} */

          var leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
          // parents that are inside the element that was scrolled.

          this.positions.forEach(
          /**
          * @param {?} position
          * @param {?} node
          * @return {?}
          */
          function (position, node) {
            if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
              adjustClientRect(position.clientRect, topDifference, leftDifference);
            }
          });
          scrollPosition.top = newTop;
          scrollPosition.left = newLeft;
          return {
            top: topDifference,
            left: leftDifference
          };
        }
      }]);

      return ParentPositionTracker;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Object that can be used to configure the behavior of DragRef.
     * @record
     */


    function DragRefConfig() {}

    if (false) {}
    /**
     * Options that can be used to bind a passive event listener.
     * @type {?}
     */


    var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Options that can be used to bind an active event listener.
     * @type {?}
     */

    var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
      passive: false
    });
    /**
     * Time in milliseconds for which to ignore mouse events, after
     * receiving a touch event. Used to avoid doing double work for
     * touch devices where the browser fires fake mouse events, in
     * addition to touch events.
     * @type {?}
     */

    var MOUSE_EVENT_IGNORE_TIME = 800;
    /**
     * Internal compile-time-only representation of a `DragRef`.
     * Used to avoid circular import issues between the `DragRef` and the `DropListRef`.
     * \@docs-private
     * @record
     */

    function DragRefInternal() {}
    /**
     * Template that can be used to create a drag helper element (e.g. a preview or a placeholder).
     * @record
     * @template T
     */


    function DragHelperTemplate() {}

    if (false) {}
    /**
     * Template that can be used to create a drag preview element.
     * @record
     * @template T
     */


    function DragPreviewTemplate() {}

    if (false) {}
    /**
     * Point on the page or within an element.
     * @record
     */


    function Point() {}

    if (false) {}
    /**
     * Reference to a draggable item. Used to manipulate or dispose of the item.
     * @template T
     */


    var DragRef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} _config
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?} _dragDropRegistry
       */
      function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this2 = this;

        _classCallCheck(this, DragRef);

        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */

        this._passiveTransform = {
          x: 0,
          y: 0
        };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */

        this._activeTransform = {
          x: 0,
          y: 0
        };
        /**
         * Emits when the item is being moved.
         */

        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */

        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */

        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */

        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */

        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */

        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */

        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */

        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */

        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */

        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */

        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */

        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */

        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */

        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */

        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */

        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */

        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */

        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */

        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */

        this._pointerDown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this2.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.


          if (_this2._handles.length) {
            /** @type {?} */
            var targetHandle = _this2._handles.find(
            /**
            * @param {?} handle
            * @return {?}
            */
            function (handle) {
              /** @type {?} */
              var target = event.target;
              return !!target && (target === handle || handle.contains(
              /** @type {?} */
              target));
            });

            if (targetHandle && !_this2._disabledHandles.has(targetHandle) && !_this2.disabled) {
              _this2._initializeDragSequence(targetHandle, event);
            }
          } else if (!_this2.disabled) {
            _this2._initializeDragSequence(_this2._rootElement, event);
          }
        };
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */


        this._pointerMove =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // Prevent the default action as early as possible in order to block
          // native actions like dragging the selected text or images with the mouse.
          event.preventDefault();
          /** @type {?} */

          var pointerPosition = _this2._getPointerPositionOnPage(event);

          if (!_this2._hasStartedDragging) {
            /** @type {?} */
            var distanceX = Math.abs(pointerPosition.x - _this2._pickupPositionOnPage.x);
            /** @type {?} */

            var distanceY = Math.abs(pointerPosition.y - _this2._pickupPositionOnPage.y);
            /** @type {?} */

            var isOverThreshold = distanceX + distanceY >= _this2._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
            // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
            // in the `pointerMove` subscription, because we're not guaranteed to have one move event
            // per pixel of movement (e.g. if the user moves their pointer quickly).

            if (isOverThreshold) {
              /** @type {?} */
              var isDelayElapsed = Date.now() >= _this2._dragStartTime + _this2._getDragStartDelay(event);

              if (!isDelayElapsed) {
                _this2._endDragSequence(event);

                return;
              } // Prevent other drag sequences from starting while something in the container is still
              // being dragged. This can happen while we're waiting for the drop animation to finish
              // and can cause errors, because some elements might still be moving around.


              if (!_this2._dropContainer || !_this2._dropContainer.isDragging()) {
                _this2._hasStartedDragging = true;

                _this2._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this2._startDragSequence(event);
                });
              }
            }

            return;
          } // We only need the preview dimensions if we have a boundary element.


          if (_this2._boundaryElement) {
            // Cache the preview element rect if we haven't cached it already or if
            // we cached it too early before the element dimensions were computed.
            if (!_this2._previewRect || !_this2._previewRect.width && !_this2._previewRect.height) {
              _this2._previewRect = (_this2._preview || _this2._rootElement).getBoundingClientRect();
            }
          }
          /** @type {?} */


          var constrainedPointerPosition = _this2._getConstrainedPointerPosition(pointerPosition);

          _this2._hasMoved = true;

          _this2._updatePointerDirectionDelta(constrainedPointerPosition);

          if (_this2._dropContainer) {
            _this2._updateActiveDropContainer(constrainedPointerPosition);
          } else {
            /** @type {?} */
            var activeTransform = _this2._activeTransform;
            activeTransform.x = constrainedPointerPosition.x - _this2._pickupPositionOnPage.x + _this2._passiveTransform.x;
            activeTransform.y = constrainedPointerPosition.y - _this2._pickupPositionOnPage.y + _this2._passiveTransform.y;

            _this2._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


            if (typeof SVGElement !== 'undefined' && _this2._rootElement instanceof SVGElement) {
              /** @type {?} */
              var appliedTransform = "translate(".concat(activeTransform.x, " ").concat(activeTransform.y, ")");

              _this2._rootElement.setAttribute('transform', appliedTransform);
            }
          } // Since this event gets fired for every pixel while dragging, we only
          // want to fire it if the consumer opted into it. Also we have to
          // re-enter the zone because we run all of the events on the outside.


          if (_this2._moveEvents.observers.length) {
            _this2._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this2._moveEvents.next({
                source: _this2,
                pointerPosition: constrainedPointerPosition,
                event: event,
                distance: _this2._getDragDistance(constrainedPointerPosition),
                delta: _this2._pointerDirectionDelta
              });
            });
          }
        };
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */


        this._pointerUp =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this2._endDragSequence(event);
        };

        this.withRootElement(element);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);

        _dragDropRegistry.registerDragItem(this);
      }
      /**
       * Whether starting to drag this element is disabled.
       * @return {?}
       */


      _createClass(DragRef, [{
        key: "getPlaceholderElement",

        /**
         * Returns the element that is being used as a placeholder
         * while the current element is being dragged.
         * @return {?}
         */
        value: function getPlaceholderElement() {
          return this._placeholder;
        }
        /**
         * Returns the root draggable element.
         * @return {?}
         */

      }, {
        key: "getRootElement",
        value: function getRootElement() {
          return this._rootElement;
        }
        /**
         * Gets the currently-visible element that represents the drag item.
         * While dragging this is the placeholder, otherwise it's the root element.
         * @return {?}
         */

      }, {
        key: "getVisibleElement",
        value: function getVisibleElement() {
          return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
        }
        /**
         * Registers the handles that can be used to drag the element.
         * @template THIS
         * @this {THIS}
         * @param {?} handles
         * @return {THIS}
         */

      }, {
        key: "withHandles",
        value: function withHandles(handles) {
          /** @type {?} */
          this._handles = handles.map(
          /**
          * @param {?} handle
          * @return {?}
          */
          function (handle) {
            return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle);
          });

          /** @type {?} */
          this._handles.forEach(
          /**
          * @param {?} handle
          * @return {?}
          */
          function (handle) {
            return toggleNativeDragInteractions(handle, false);
          });

          /** @type {?} */
          this._toggleNativeDragInteractions();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers the template that should be used for the drag preview.
         * @template THIS
         * @this {THIS}
         * @param {?} template Template that from which to stamp out the preview.
         * @return {THIS}
         */

      }, {
        key: "withPreviewTemplate",
        value: function withPreviewTemplate(template) {
          /** @type {?} */
          this._previewTemplate = template;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers the template that should be used for the drag placeholder.
         * @template THIS
         * @this {THIS}
         * @param {?} template Template that from which to stamp out the placeholder.
         * @return {THIS}
         */

      }, {
        key: "withPlaceholderTemplate",
        value: function withPlaceholderTemplate(template) {
          /** @type {?} */
          this._placeholderTemplate = template;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an alternate drag root element. The root element is the element that will be moved as
         * the user is dragging. Passing an alternate root element is useful when trying to enable
         * dragging on an element that you might not have access to.
         * @template THIS
         * @this {THIS}
         * @param {?} rootElement
         * @return {THIS}
         */

      }, {
        key: "withRootElement",
        value: function withRootElement(rootElement) {
          var _this3 = this;

          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);

          if (element !==
          /** @type {?} */
          this._rootElement) {
            if (
            /** @type {?} */
            this._rootElement) {
              /** @type {?} */
              this._removeRootElementListeners(
              /** @type {?} */
              this._rootElement);
            }

            /** @type {?} */
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              element.addEventListener('mousedown',
              /** @type {?} */
              _this3._pointerDown, activeEventListenerOptions);
              element.addEventListener('touchstart',
              /** @type {?} */
              _this3._pointerDown, passiveEventListenerOptions);
            });

            /** @type {?} */
            this._initialTransform = undefined;

            /** @type {?} */
            this._rootElement = element;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Element to which the draggable's position will be constrained.
         * @template THIS
         * @this {THIS}
         * @param {?} boundaryElement
         * @return {THIS}
         */

      }, {
        key: "withBoundaryElement",
        value: function withBoundaryElement(boundaryElement) {
          var _this4 = this;

          /** @type {?} */
          this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;

          /** @type {?} */
          this._resizeSubscription.unsubscribe();

          if (boundaryElement) {
            /** @type {?} */
            this._resizeSubscription =
            /** @type {?} */
            this._viewportRuler.change(10).subscribe(
            /**
            * @return {?}
            */
            function () {
              return (
                /** @type {?} */
                _this4._containInsideBoundaryOnResize()
              );
            });
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Removes the dragging functionality from the DOM element.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
          // stop being considered as dragged once it is removed.


          if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeNode(this._rootElement);
          }

          removeNode(this._anchor);

          this._destroyPreview();

          this._destroyPlaceholder();

          this._dragDropRegistry.removeDragItem(this);

          this._removeSubscriptions();

          this.beforeStarted.complete();
          this.started.complete();
          this.released.complete();
          this.ended.complete();
          this.entered.complete();
          this.exited.complete();
          this.dropped.complete();

          this._moveEvents.complete();

          this._handles = [];

          this._disabledHandles.clear();

          this._dropContainer = undefined;

          this._resizeSubscription.unsubscribe();

          this._parentPositions.clear();

          this._boundaryElement = this._rootElement = this._placeholderTemplate = this._previewTemplate = this._anchor =
          /** @type {?} */
          null;
        }
        /**
         * Checks whether the element is currently being dragged.
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging() {
          return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
        }
        /**
         * Resets a standalone drag item to its initial position.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._rootElement.style.transform = this._initialTransform || '';
          this._activeTransform = {
            x: 0,
            y: 0
          };
          this._passiveTransform = {
            x: 0,
            y: 0
          };
        }
        /**
         * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
         * @param {?} handle Handle element that should be disabled.
         * @return {?}
         */

      }, {
        key: "disableHandle",
        value: function disableHandle(handle) {
          if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
          }
        }
        /**
         * Enables a handle, if it has been disabled.
         * @param {?} handle Handle element to be enabled.
         * @return {?}
         */

      }, {
        key: "enableHandle",
        value: function enableHandle(handle) {
          this._disabledHandles["delete"](handle);
        }
        /**
         * Sets the layout direction of the draggable item.
         * @template THIS
         * @this {THIS}
         * @param {?} direction
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(direction) {
          /** @type {?} */
          this._direction = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the container that the item is part of.
         * @param {?} container
         * @return {?}
         */

      }, {
        key: "_withDropContainer",
        value: function _withDropContainer(container) {
          this._dropContainer = container;
        }
        /**
         * Gets the current position in pixels the draggable outside of a drop container.
         * @return {?}
         */

      }, {
        key: "getFreeDragPosition",
        value: function getFreeDragPosition() {
          /** @type {?} */
          var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
          return {
            x: position.x,
            y: position.y
          };
        }
        /**
         * Sets the current position in pixels the draggable outside of a drop container.
         * @template THIS
         * @this {THIS}
         * @param {?} value New position to be set.
         * @return {THIS}
         */

      }, {
        key: "setFreeDragPosition",
        value: function setFreeDragPosition(value) {
          /** @type {?} */
          this._activeTransform = {
            x: 0,
            y: 0
          };

          /** @type {?} */
          this._passiveTransform.x = value.x;

          /** @type {?} */
          this._passiveTransform.y = value.y;

          if (!
          /** @type {?} */
          this._dropContainer) {
            /** @type {?} */
            this._applyRootElementTransform(value.x, value.y);
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Updates the item's sort order based on the last-known pointer position.
         * @return {?}
         */

      }, {
        key: "_sortFromLastPointerPosition",
        value: function _sortFromLastPointerPosition() {
          /** @type {?} */
          var position = this._pointerPositionAtLastDirectionChange;

          if (position && this._dropContainer) {
            this._updateActiveDropContainer(this._getConstrainedPointerPosition(position));
          }
        }
        /**
         * Unsubscribes from the global subscriptions.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeSubscriptions",
        value: function _removeSubscriptions() {
          this._pointerMoveSubscription.unsubscribe();

          this._pointerUpSubscription.unsubscribe();

          this._scrollSubscription.unsubscribe();
        }
        /**
         * Destroys the preview element and its ViewRef.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPreview",
        value: function _destroyPreview() {
          if (this._preview) {
            removeNode(this._preview);
          }

          if (this._previewRef) {
            this._previewRef.destroy();
          }

          this._preview = this._previewRef =
          /** @type {?} */
          null;
        }
        /**
         * Destroys the placeholder element and its ViewRef.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPlaceholder",
        value: function _destroyPlaceholder() {
          if (this._placeholder) {
            removeNode(this._placeholder);
          }

          if (this._placeholderRef) {
            this._placeholderRef.destroy();
          }

          this._placeholder = this._placeholderRef =
          /** @type {?} */
          null;
        }
        /**
         * Clears subscriptions and stops the dragging sequence.
         * @private
         * @param {?} event Browser event object that ended the sequence.
         * @return {?}
         */

      }, {
        key: "_endDragSequence",
        value: function _endDragSequence(event) {
          var _this5 = this;

          // Note that here we use `isDragging` from the service, rather than from `this`.
          // The difference is that the one from the service reflects whether a dragging sequence
          // has been initiated, whereas the one on `this` includes whether the user has passed
          // the minimum dragging threshold.
          if (!this._dragDropRegistry.isDragging(this)) {
            return;
          }

          this._removeSubscriptions();

          this._dragDropRegistry.stopDragging(this);

          this._toggleNativeDragInteractions();

          if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
          }

          if (!this._hasStartedDragging) {
            return;
          }

          this.released.next({
            source: this
          });

          if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();

            this._animatePreviewToPlaceholder().then(
            /**
            * @return {?}
            */
            function () {
              _this5._cleanupDragArtifacts(event);

              _this5._cleanupCachedDimensions();

              _this5._dragDropRegistry.stopDragging(_this5);
            });
          } else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this5.ended.next({
                source: _this5,
                distance: _this5._getDragDistance(_this5._getPointerPositionOnPage(event))
              });
            });

            this._cleanupCachedDimensions();

            this._dragDropRegistry.stopDragging(this);
          }
        }
        /**
         * Starts the dragging sequence.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_startDragSequence",
        value: function _startDragSequence(event) {
          // Emit the event on the item before the one on the container.
          this.started.next({
            source: this
          });

          if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
          }

          this._toggleNativeDragInteractions();
          /** @type {?} */


          var dropContainer = this._dropContainer;

          if (dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */

            var parent =
            /** @type {?} */
            element.parentNode;
            /** @type {?} */

            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */


            var placeholder = this._placeholder = this._createPlaceholderElement();
            /** @type {?} */


            var anchor = this._anchor = this._anchor || this._document.createComment(''); // Insert an anchor node so that we can restore the element's position in the DOM.


            parent.insertBefore(anchor, element); // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

            element.style.display = 'none';

            this._document.body.appendChild(parent.replaceChild(placeholder, element));

            getPreviewInsertionPoint(this._document).appendChild(preview);
            dropContainer.start();
            this._initialContainer = dropContainer;
            this._initialIndex = dropContainer.getItemIndex(this);
          } else {
            this._initialContainer = this._initialIndex =
            /** @type {?} */
            undefined;
          } // Important to run after we've called `start` on the parent container
          // so that it has had time to resolve its scrollable parents.


          this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
        }
        /**
         * Sets up the different variables and subscriptions
         * that will be necessary for the dragging sequence.
         * @private
         * @param {?} referenceElement Element that started the drag sequence.
         * @param {?} event Browser event object that started the sequence.
         * @return {?}
         */

      }, {
        key: "_initializeDragSequence",
        value: function _initializeDragSequence(referenceElement, event) {
          var _this6 = this;

          // Always stop propagation for the event that initializes
          // the dragging sequence, in order to prevent it from potentially
          // starting another sequence for a draggable parent somewhere up the DOM tree.
          event.stopPropagation();
          /** @type {?} */

          var isDragging = this.isDragging();
          /** @type {?} */

          var isTouchSequence = isTouchEvent(event);
          /** @type {?} */

          var isAuxiliaryMouseButton = !isTouchSequence &&
          /** @type {?} */
          event.button !== 0;
          /** @type {?} */

          var rootElement = this._rootElement;
          /** @type {?} */

          var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now(); // If the event started from an element with the native HTML drag&drop, it'll interfere
          // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
          // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
          // it's flaky and it fails if the user drags it away quickly. Also note that we only want
          // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
          // events from firing on touch devices.

          if (event.target &&
          /** @type {?} */
          event.target.draggable && event.type === 'mousedown') {
            event.preventDefault();
          } // Abort if the user is already dragging or is using a mouse button other than the primary one.


          if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
          } // If we've got handles, we need to disable the tap highlight on the entire root element,
          // otherwise iOS will still add it, even though all the drag interactions on the handle
          // are disabled.


          if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
          }

          this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
          // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

          this._removeSubscriptions();

          this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
          this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
          this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(
          /**
          * @param {?} scrollEvent
          * @return {?}
          */
          function (scrollEvent) {
            _this6._updateOnScroll(scrollEvent);
          });

          if (this._boundaryElement) {
            this._boundaryRect = getMutableClientRect(this._boundaryElement);
          } // If we have a custom preview we can't know ahead of time how large it'll be so we position
          // it next to the cursor. The exception is when the consumer has opted into making the preview
          // the same size as the root element, in which case we do know the size.

          /** @type {?} */


          var previewTemplate = this._previewTemplate;
          this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
            x: 0,
            y: 0
          } : this._getPointerPositionInElement(referenceElement, event);
          /** @type {?} */

          var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);

          this._pointerDirectionDelta = {
            x: 0,
            y: 0
          };
          this._pointerPositionAtLastDirectionChange = {
            x: pointerPosition.x,
            y: pointerPosition.y
          };
          this._dragStartTime = Date.now();

          this._dragDropRegistry.startDragging(this, event);
        }
        /**
         * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_cleanupDragArtifacts",
        value: function _cleanupDragArtifacts(event) {
          var _this7 = this;

          // Restore the element's visibility and insert it at its old position in the DOM.
          // It's important that we maintain the position, because moving the element around in the DOM
          // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
          // while moving the existing elements in all other cases.
          this._rootElement.style.display = '';

          /** @type {?} */
          this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

          this._destroyPreview();

          this._destroyPlaceholder();

          this._boundaryRect = this._previewRect = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

          this._ngZone.run(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container =
            /** @type {?} */
            _this7._dropContainer;
            /** @type {?} */

            var currentIndex = container.getItemIndex(_this7);
            /** @type {?} */

            var pointerPosition = _this7._getPointerPositionOnPage(event);
            /** @type {?} */


            var distance = _this7._getDragDistance(_this7._getPointerPositionOnPage(event));
            /** @type {?} */


            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

            _this7.ended.next({
              source: _this7,
              distance: distance
            });

            _this7.dropped.next({
              item: _this7,
              currentIndex: currentIndex,
              previousIndex: _this7._initialIndex,
              container: container,
              previousContainer: _this7._initialContainer,
              isPointerOverContainer: isPointerOverContainer,
              distance: distance
            });

            container.drop(_this7, currentIndex, _this7._initialContainer, isPointerOverContainer, distance, _this7._initialIndex);
            _this7._dropContainer = _this7._initialContainer;
          });
        }
        /**
         * Updates the item's position in its drop container, or moves it
         * into a new one, depending on its current drag position.
         * @private
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "_updateActiveDropContainer",
        value: function _updateActiveDropContainer(_ref) {
          var _this8 = this;

          var x = _ref.x,
              y = _ref.y;

          // Drop container that draggable has been moved into.

          /** @type {?} */
          var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
          // initial container, check whether the it's over the initial container. This handles the
          // case where two containers are connected one way and the user tries to undo dragging an
          // item into a new container.


          if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
          }

          if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              // Notify the old container that the item has left.
              _this8.exited.next({
                item: _this8,
                container:
                /** @type {?} */
                _this8._dropContainer
              });

              /** @type {?} */
              _this8._dropContainer.exit(_this8); // Notify the new container that the item has entered.


              _this8._dropContainer =
              /** @type {?} */
              newContainer;

              _this8._dropContainer.enter(_this8, x, y, newContainer === _this8._initialContainer && // If we're re-entering the initial container and sorting is disabled,
              // put item the into its starting index to begin with.
              newContainer.sortingDisabled ? _this8._initialIndex : undefined);

              _this8.entered.next({
                item: _this8,
                container:
                /** @type {?} */
                newContainer,
                currentIndex:
                /** @type {?} */
                newContainer.getItemIndex(_this8)
              });
            });
          }

          /** @type {?} */
          this._dropContainer._startScrollingIfNecessary(x, y);

          /** @type {?} */
          this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

          this._preview.style.transform = getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
        }
        /**
         * Creates the element that will be rendered next to the user's pointer
         * and will be used as a preview of the element that is being dragged.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPreviewElement",
        value: function _createPreviewElement() {
          /** @type {?} */
          var previewConfig = this._previewTemplate;
          /** @type {?} */

          var previewClass = this.previewClass;
          /** @type {?} */

          var previewTemplate = previewConfig ? previewConfig.template : null;
          /** @type {?} */

          var preview;

          if (previewTemplate && previewConfig) {
            // Measure the element before we've inserted the preview
            // since the insertion could throw off the measurement.

            /** @type {?} */
            var rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
            /** @type {?} */

            var viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
            viewRef.detectChanges();
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;

            if (previewConfig.matchSize) {
              matchElementSize(preview,
              /** @type {?} */
              rootRect);
            } else {
              preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
            }
          } else {
            /** @type {?} */
            var element = this._rootElement;
            preview = deepCloneNode(element);
            matchElementSize(preview, element.getBoundingClientRect());
          }

          extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because it can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: "".concat(this._config.zIndex || 1000)
          });
          toggleNativeDragInteractions(preview, false);
          preview.classList.add('cdk-drag-preview');
          preview.setAttribute('dir', this._direction);

          if (previewClass) {
            if (Array.isArray(previewClass)) {
              previewClass.forEach(
              /**
              * @param {?} className
              * @return {?}
              */
              function (className) {
                return preview.classList.add(className);
              });
            } else {
              preview.classList.add(previewClass);
            }
          }

          return preview;
        }
        /**
         * Animates the preview element from its current position to the location of the drop placeholder.
         * @private
         * @return {?} Promise that resolves when the animation completes.
         */

      }, {
        key: "_animatePreviewToPlaceholder",
        value: function _animatePreviewToPlaceholder() {
          var _this9 = this;

          // If the user hasn't moved yet, the transitionend event won't fire.
          if (!this._hasMoved) {
            return Promise.resolve();
          }
          /** @type {?} */


          var placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


          this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


          this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
          // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
          // apply its style, we take advantage of the available info to figure out whether we need to
          // bind the event in the first place.

          /** @type {?} */

          var duration = getTransformTransitionDurationInMs(this._preview);

          if (duration === 0) {
            return Promise.resolve();
          }

          return this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              /** @type {?} */
              var handler =
              /** @type {?} */

              /**
              * @param {?} event
              * @return {?}
              */
              function handler(event) {
                if (!event || event.target === _this9._preview && event.propertyName === 'transform') {
                  _this9._preview.removeEventListener('transitionend', handler);

                  resolve();
                  clearTimeout(timeout);
                }
              }; // If a transition is short enough, the browser might not fire the `transitionend` event.
              // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
              // fire if the transition hasn't completed when it was supposed to.

              /** @type {?} */


              var timeout = setTimeout(
              /** @type {?} */
              handler, duration * 1.5);

              _this9._preview.addEventListener('transitionend', handler);
            });
          });
        }
        /**
         * Creates an element that will be shown instead of the current element while dragging.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPlaceholderElement",
        value: function _createPlaceholderElement() {
          /** @type {?} */
          var placeholderConfig = this._placeholderTemplate;
          /** @type {?} */

          var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
          /** @type {?} */

          var placeholder;

          if (placeholderTemplate) {
            this._placeholderRef =
            /** @type {?} */
            placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate,
            /** @type {?} */
            placeholderConfig.context);

            this._placeholderRef.detectChanges();

            placeholder = getRootNode(this._placeholderRef, this._document);
          } else {
            placeholder = deepCloneNode(this._rootElement);
          }

          placeholder.classList.add('cdk-drag-placeholder');
          return placeholder;
        }
        /**
         * Figures out the coordinates at which an element was picked up.
         * @private
         * @param {?} referenceElement Element that initiated the dragging.
         * @param {?} event Event that initiated the dragging.
         * @return {?}
         */

      }, {
        key: "_getPointerPositionInElement",
        value: function _getPointerPositionInElement(referenceElement, event) {
          /** @type {?} */
          var elementRect = this._rootElement.getBoundingClientRect();
          /** @type {?} */


          var handleElement = referenceElement === this._rootElement ? null : referenceElement;
          /** @type {?} */

          var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
          /** @type {?} */

          var point = isTouchEvent(event) ? event.targetTouches[0] : event;
          /** @type {?} */

          var scrollPosition = this._getViewportScrollPosition();
          /** @type {?} */


          var x = point.pageX - referenceRect.left - scrollPosition.left;
          /** @type {?} */

          var y = point.pageY - referenceRect.top - scrollPosition.top;
          return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
          };
        }
        /**
         * Determines the point of the page that was touched by the user.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getPointerPositionOnPage",
        value: function _getPointerPositionOnPage(event) {
          // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.

          /** @type {?} */
          var point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
          /** @type {?} */

          var scrollPosition = this._getViewportScrollPosition();

          return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
          };
        }
        /**
         * Gets the pointer position on the page, accounting for any position constraints.
         * @private
         * @param {?} point
         * @return {?}
         */

      }, {
        key: "_getConstrainedPointerPosition",
        value: function _getConstrainedPointerPosition(point) {
          /** @type {?} */
          var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
          /** @type {?} */

          var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;

          if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
          } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
          }

          if (this._boundaryRect) {
            var _this$_pickupPosition = this._pickupPositionInElement,
                pickupX = _this$_pickupPosition.x,
                pickupY = _this$_pickupPosition.y;
            /** @type {?} */

            var boundaryRect = this._boundaryRect;
            /** @type {?} */

            var previewRect =
            /** @type {?} */
            this._previewRect;
            /** @type {?} */

            var minY = boundaryRect.top + pickupY;
            /** @type {?} */

            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */

            var minX = boundaryRect.left + pickupX;
            /** @type {?} */

            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
          }

          return constrainedPoint;
        }
        /**
         * Updates the current drag delta, based on the user's current pointer position on the page.
         * @private
         * @param {?} pointerPositionOnPage
         * @return {?}
         */

      }, {
        key: "_updatePointerDirectionDelta",
        value: function _updatePointerDirectionDelta(pointerPositionOnPage) {
          var x = pointerPositionOnPage.x,
              y = pointerPositionOnPage.y;
          /** @type {?} */

          var delta = this._pointerDirectionDelta;
          /** @type {?} */

          var positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

          /** @type {?} */

          var changeX = Math.abs(x - positionSinceLastChange.x);
          /** @type {?} */

          var changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
          // to change for every pixel, otherwise anything that depends on it can look erratic.
          // To make the delta more consistent, we track how much the user has moved since the last
          // delta change and we only update it after it has reached a certain threshold.

          if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
          }

          if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
          }

          return delta;
        }
        /**
         * Toggles the native drag interactions, based on how many handles are registered.
         * @private
         * @return {?}
         */

      }, {
        key: "_toggleNativeDragInteractions",
        value: function _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) {
            return;
          }
          /** @type {?} */


          var shouldEnable = this._handles.length > 0 || !this.isDragging();

          if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
          }
        }
        /**
         * Removes the manually-added event listeners from the root element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_removeRootElementListeners",
        value: function _removeRootElementListeners(element) {
          element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
          element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        }
        /**
         * Applies a `transform` to the root element, taking into account any existing transforms on it.
         * @private
         * @param {?} x New transform value along the X axis.
         * @param {?} y New transform value along the Y axis.
         * @return {?}
         */

      }, {
        key: "_applyRootElementTransform",
        value: function _applyRootElementTransform(x, y) {
          /** @type {?} */
          var transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
          // we don't want our own transforms to stack on top of each other.

          if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
          } // Preserve the previous `transform` value, if there was one. Note that we apply our own
          // transform before the user's, because things like rotation can affect which direction
          // the element will be translated towards.


          this._rootElement.style.transform = this._initialTransform ? transform + ' ' + this._initialTransform : transform;
        }
        /**
         * Gets the distance that the user has dragged during the current drag sequence.
         * @private
         * @param {?} currentPosition Current position of the user's pointer.
         * @return {?}
         */

      }, {
        key: "_getDragDistance",
        value: function _getDragDistance(currentPosition) {
          /** @type {?} */
          var pickupPosition = this._pickupPositionOnPage;

          if (pickupPosition) {
            return {
              x: currentPosition.x - pickupPosition.x,
              y: currentPosition.y - pickupPosition.y
            };
          }

          return {
            x: 0,
            y: 0
          };
        }
        /**
         * Cleans up any cached element dimensions that we don't need after dragging has stopped.
         * @private
         * @return {?}
         */

      }, {
        key: "_cleanupCachedDimensions",
        value: function _cleanupCachedDimensions() {
          this._boundaryRect = this._previewRect = undefined;

          this._parentPositions.clear();
        }
        /**
         * Checks whether the element is still inside its boundary after the viewport has been resized.
         * If not, the position is adjusted so that the element fits again.
         * @private
         * @return {?}
         */

      }, {
        key: "_containInsideBoundaryOnResize",
        value: function _containInsideBoundaryOnResize() {
          var _this$_passiveTransfo = this._passiveTransform,
              x = _this$_passiveTransfo.x,
              y = _this$_passiveTransfo.y;

          if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
            return;
          }
          /** @type {?} */


          var boundaryRect = this._boundaryElement.getBoundingClientRect();
          /** @type {?} */


          var elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
          // different tab). Don't do anything in this case so we don't clear the user's position.


          if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
            return;
          }
          /** @type {?} */


          var leftOverflow = boundaryRect.left - elementRect.left;
          /** @type {?} */

          var rightOverflow = elementRect.right - boundaryRect.right;
          /** @type {?} */

          var topOverflow = boundaryRect.top - elementRect.top;
          /** @type {?} */

          var bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
          // do much to make it fit so we just anchor it to the left.

          if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
              x += leftOverflow;
            }

            if (rightOverflow > 0) {
              x -= rightOverflow;
            }
          } else {
            x = 0;
          } // If the element has become taller than the boundary, we can't
          // do much to make it fit so we just anchor it to the top.


          if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
              y += topOverflow;
            }

            if (bottomOverflow > 0) {
              y -= bottomOverflow;
            }
          } else {
            y = 0;
          }

          if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({
              y: y,
              x: x
            });
          }
        }
        /**
         * Gets the drag start delay, based on the event type.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getDragStartDelay",
        value: function _getDragStartDelay(event) {
          /** @type {?} */
          var value = this.dragStartDelay;

          if (typeof value === 'number') {
            return value;
          } else if (isTouchEvent(event)) {
            return value.touch;
          }

          return value ? value.mouse : 0;
        }
        /**
         * Updates the internal state of the draggable element when scrolling has occurred.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_updateOnScroll",
        value: function _updateOnScroll(event) {
          /** @type {?} */
          var scrollDifference = this._parentPositions.handleScroll(event); // ClientRect dimensions are based on the page's scroll position so
          // we have to update the cached boundary ClientRect if the user has scrolled.


          if (this._boundaryRect && scrollDifference) {
            adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
          }
        }
        /**
         * Gets the scroll position of the viewport.
         * @private
         * @return {?}
         */

      }, {
        key: "_getViewportScrollPosition",
        value: function _getViewportScrollPosition() {
          /** @type {?} */
          var cachedPosition = this._parentPositions.positions.get(this._document);

          return cachedPosition ? cachedPosition.scrollPosition : this._viewportRuler.getViewportScrollPosition();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          if (newValue !== this._disabled) {
            this._disabled = newValue;

            this._toggleNativeDragInteractions();
          }
        }
      }]);

      return DragRef;
    }();

    if (false) {}
    /**
     * Gets a 3d `transform` that can be applied to an element.
     * @param {?} x Desired position of the element along the X axis.
     * @param {?} y Desired position of the element along the Y axis.
     * @return {?}
     */


    function getTransform(x, y) {
      // Round the transforms since some browsers will
      // blur the elements for sub-pixel transforms.
      return "translate3d(".concat(Math.round(x), "px, ").concat(Math.round(y), "px, 0)");
    }
    /**
     * Creates a deep clone of an element.
     * @param {?} node
     * @return {?}
     */


    function deepCloneNode(node) {
      /** @type {?} */
      var clone =
      /** @type {?} */
      node.cloneNode(true);
      /** @type {?} */

      var descendantsWithId = clone.querySelectorAll('[id]');
      /** @type {?} */

      var descendantCanvases = node.querySelectorAll('canvas'); // Remove the `id` to avoid having multiple elements with the same id on the page.

      clone.removeAttribute('id');

      for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
      } // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
      // We match up the cloned canvas to their sources using their index in the DOM.


      if (descendantCanvases.length) {
        /** @type {?} */
        var cloneCanvases = clone.querySelectorAll('canvas');

        for (var _i = 0; _i < descendantCanvases.length; _i++) {
          /** @type {?} */
          var correspondingCloneContext = cloneCanvases[_i].getContext('2d');

          if (correspondingCloneContext) {
            correspondingCloneContext.drawImage(descendantCanvases[_i], 0, 0);
          }
        }
      }

      return clone;
    }
    /**
     * Clamps a value between a minimum and a maximum.
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */


    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }
    /**
     * Helper to remove a node from the DOM and to do all the necessary null checks.
     * @param {?} node Node to be removed.
     * @return {?}
     */


    function removeNode(node) {
      if (node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
    /**
     * Determines whether an event is a touch event.
     * @param {?} event
     * @return {?}
     */


    function isTouchEvent(event) {
      // This function is called for every pixel that the user has dragged so we need it to be
      // as fast as possible. Since we only bind mouse events and touch events, we can assume
      // that if the event's name starts with `t`, it's a touch event.
      return event.type[0] === 't';
    }
    /**
     * Gets the element into which the drag preview should be inserted.
     * @param {?} documentRef
     * @return {?}
     */


    function getPreviewInsertionPoint(documentRef) {
      // We can't use the body if the user is in fullscreen mode,
      // because the preview will render under the fullscreen element.
      // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
      return documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    /**
     * Gets the root HTML element of an embedded view.
     * If the root is not an HTML element it gets wrapped in one.
     * @param {?} viewRef
     * @param {?} _document
     * @return {?}
     */


    function getRootNode(viewRef, _document) {
      /** @type {?} */
      var rootNodes = viewRef.rootNodes;

      if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
        return (
          /** @type {?} */
          rootNodes[0]
        );
      }
      /** @type {?} */


      var wrapper = _document.createElement('div');

      rootNodes.forEach(
      /**
      * @param {?} node
      * @return {?}
      */
      function (node) {
        return wrapper.appendChild(node);
      });
      return wrapper;
    }
    /**
     * Matches the target element's size to the source's size.
     * @param {?} target Element that needs to be resized.
     * @param {?} sourceRect Dimensions of the source element.
     * @return {?}
     */


    function matchElementSize(target, sourceRect) {
      target.style.width = "".concat(sourceRect.width, "px");
      target.style.height = "".concat(sourceRect.height, "px");
      target.style.transform = getTransform(sourceRect.left, sourceRect.top);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Moves an item one index in an array to another.
     * @template T
     * @param {?} array Array in which to move the item.
     * @param {?} fromIndex Starting index of the item.
     * @param {?} toIndex Index to which the item should be moved.
     * @return {?}
     */


    function moveItemInArray(array, fromIndex, toIndex) {
      /** @type {?} */
      var from = clamp$1(fromIndex, array.length - 1);
      /** @type {?} */

      var to = clamp$1(toIndex, array.length - 1);

      if (from === to) {
        return;
      }
      /** @type {?} */


      var target = array[from];
      /** @type {?} */

      var delta = to < from ? -1 : 1;

      for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
      }

      array[to] = target;
    }
    /**
     * Moves an item from one array to another.
     * @template T
     * @param {?} currentArray Array from which to transfer the item.
     * @param {?} targetArray Array into which to put the item.
     * @param {?} currentIndex Index of the item in its current array.
     * @param {?} targetIndex Index at which to insert the item.
     * @return {?}
     */


    function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
      /** @type {?} */
      var from = clamp$1(currentIndex, currentArray.length - 1);
      /** @type {?} */

      var to = clamp$1(targetIndex, targetArray.length);

      if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
      }
    }
    /**
     * Copies an item from one array to another, leaving it in its
     * original position in current array.
     * @template T
     * @param {?} currentArray Array from which to copy the item.
     * @param {?} targetArray Array into which is copy the item.
     * @param {?} currentIndex Index of the item in its current array.
     * @param {?} targetIndex Index at which to insert the item.
     *
     * @return {?}
     */


    function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
      /** @type {?} */
      var to = clamp$1(targetIndex, targetArray.length);

      if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
      }
    }
    /**
     * Clamps a number between zero and a maximum.
     * @param {?} value
     * @param {?} max
     * @return {?}
     */


    function clamp$1(value, max) {
      return Math.max(0, Math.min(max, value));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drop-list-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Proximity, as a ratio to width/height, at which a
     * dragged item will affect the drop container.
     * @type {?}
     */


    var DROP_PROXIMITY_THRESHOLD = 0.05;
    /**
     * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
     * viewport. The value comes from trying it out manually until it feels right.
     * @type {?}
     */

    var SCROLL_PROXIMITY_THRESHOLD = 0.05;
    /**
     * Number of pixels to scroll for each frame when auto-scrolling an element.
     * The value comes from trying it out manually until it feels right.
     * @type {?}
     */

    var AUTO_SCROLL_STEP = 2;
    /**
     * Entry in the position cache for draggable items.
     * \@docs-private
     * @record
     */

    function CachedItemPosition() {}

    if (false) {}
    /** @enum {number} */


    var AutoScrollVerticalDirection = {
      NONE: 0,
      UP: 1,
      DOWN: 2
    };
    /** @enum {number} */

    var AutoScrollHorizontalDirection = {
      NONE: 0,
      LEFT: 1,
      RIGHT: 2
    };
    /**
     * Internal compile-time-only representation of a `DropListRef`.
     * Used to avoid circular import issues between the `DropListRef` and the `DragRef`.
     * \@docs-private
     * @record
     */

    function DropListRefInternal() {}
    /**
     * Reference to a drop list. Used to manipulate or dispose of the container.
     * @template T
     */


    var DropListRef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} _dragDropRegistry
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       */
      function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        var _this10 = this;

        _classCallCheck(this, DropListRef);

        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */

        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */

        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */

        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */

        this.enterPredicate =
        /**
        * @return {?}
        */
        function () {
          return true;
        };
        /**
         * Emits right before dragging has started.
         */


        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */

        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */

        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */

        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */

        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */

        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */

        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */

        this._previousSwap = {
          drag:
          /** @type {?} */
          null,
          delta: 0
        };
        /**
         * Drop lists that are connected to the current one.
         */

        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */

        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */

        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */

        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */

        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */

        this._verticalScrollDirection = 0
        /* NONE */
        ;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */

        this._horizontalScrollDirection = 0
        /* NONE */
        ;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */

        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly.
         */

        this._cachedShadowRoot = null;
        /**
         * Starts the interval that'll auto-scroll the element.
         */

        this._startScrollInterval =
        /**
        * @return {?}
        */
        function () {
          _this10._stopScrolling();

          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this10._stopScrollTimers)).subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var node = _this10._scrollNode;

            if (_this10._verticalScrollDirection === 1
            /* UP */
            ) {
                incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
              } else if (_this10._verticalScrollDirection === 2
            /* DOWN */
            ) {
                incrementVerticalScroll(node, AUTO_SCROLL_STEP);
              }

            if (_this10._horizontalScrollDirection === 1
            /* LEFT */
            ) {
                incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
              } else if (_this10._horizontalScrollDirection === 2
            /* RIGHT */
            ) {
                incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
              }
          });
        };

        this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(element);
        this._document = _document;
        this.withScrollableParents([this.element]);

        _dragDropRegistry.registerDropContainer(this);

        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
      }
      /**
       * Removes the drop list functionality from the DOM element.
       * @return {?}
       */


      _createClass(DropListRef, [{
        key: "dispose",
        value: function dispose() {
          this._stopScrolling();

          this._stopScrollTimers.complete();

          this._viewportScrollSubscription.unsubscribe();

          this.beforeStarted.complete();
          this.entered.complete();
          this.exited.complete();
          this.dropped.complete();
          this.sorted.complete();

          this._activeSiblings.clear();

          this._scrollNode =
          /** @type {?} */
          null;

          this._parentPositions.clear();

          this._dragDropRegistry.removeDropContainer(this);
        }
        /**
         * Whether an item from this list is currently being dragged.
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging() {
          return this._isDragging;
        }
        /**
         * Starts dragging an item.
         * @return {?}
         */

      }, {
        key: "start",
        value: function start() {
          var _this11 = this;

          /** @type {?} */
          var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
          this.beforeStarted.next();
          this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
          // scrolling. The browser seems to round the value based on the snapping points which means
          // that we can't increment/decrement the scroll position.

          this._initialScrollSnap = styles.msScrollSnapType ||
          /** @type {?} */
          styles.scrollSnapType || '';

          /** @type {?} */
          styles.scrollSnapType = styles.msScrollSnapType = 'none';

          this._cacheItems();

          this._siblings.forEach(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._startReceiving(_this11);
          });

          this._viewportScrollSubscription.unsubscribe();

          this._listenToScrollEvents();
        }
        /**
         * Emits an event to indicate that the user moved an item into the container.
         * @param {?} item Item that was moved into the container.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @param {?=} index Index at which the item entered. If omitted, the container will try to figure it
         *   out automatically.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter(item, pointerX, pointerY, index) {
          this.start(); // If sorting is disabled, we want the item to return to its starting
          // position if the user is returning it to its initial container.

          /** @type {?} */

          var newIndex;

          if (index == null) {
            newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

            if (newIndex === -1) {
              // We use the coordinates of where the item entered the drop
              // zone to figure out at which index it should be inserted.
              newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
            }
          } else {
            newIndex = index;
          }
          /** @type {?} */


          var activeDraggables = this._activeDraggables;
          /** @type {?} */

          var currentIndex = activeDraggables.indexOf(item);
          /** @type {?} */

          var placeholder = item.getPlaceholderElement();
          /** @type {?} */

          var newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
          // it means that we're trying to restore the item to its initial position. In this
          // case we should use the next item from the list as the reference.

          if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
          } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
          // into another container and back again), we have to ensure that it isn't duplicated.


          if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
          } // Don't use items that are being dragged as a reference, because
          // their element has been moved down to the bottom of the body.


          if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();

            /** @type {?} */
            element.parentElement.insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
          } else {
            /** @type {?} */
            var _element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);

            if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
              _element.insertBefore(placeholder, activeDraggables[0].getRootElement());

              activeDraggables.unshift(item);
            } else {
              _element.appendChild(placeholder);

              activeDraggables.push(item);
            }
          } // The transform needs to be cleared so it doesn't throw off the measurements.


          placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
          // but we need to refresh them since the amount of items has changed and also parent rects.

          this._cacheItemPositions();

          this._cacheParentPositions();

          this.entered.next({
            item: item,
            container: this,
            currentIndex: this.getItemIndex(item)
          });
        }
        /**
         * Removes an item from the container after it was dragged into another container by the user.
         * @param {?} item Item that was dragged out.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(item) {
          this._reset();

          this.exited.next({
            item: item,
            container: this
          });
        }
        /**
         * Drops an item into this container.
         * \@breaking-change 11.0.0 `previousIndex` parameter to become required.
         * @param {?} item Item being dropped into the container.
         * @param {?} currentIndex Index at which the item should be inserted.
         * @param {?} previousContainer Container from which the item got dragged in.
         * @param {?} isPointerOverContainer Whether the user's pointer was over the
         *    container when the item was dropped.
         * @param {?} distance Distance the user has dragged since the start of the dragging sequence.
         * @param {?=} previousIndex Index of the item when dragging started.
         *
         * @return {?}
         */

      }, {
        key: "drop",
        value: function drop(item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
          this._reset(); // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.


          if (previousIndex == null) {
            previousIndex = previousContainer.getItemIndex(item);
          }

          this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousIndex,
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
          });
        }
        /**
         * Sets the draggable items that are a part of this list.
         * @template THIS
         * @this {THIS}
         * @param {?} items Items that are a part of this list.
         * @return {THIS}
         */

      }, {
        key: "withItems",
        value: function withItems(items) {
          var _this12 = this;

          /** @type {?} */
          var previousItems =
          /** @type {?} */
          this._draggables;

          /** @type {?} */
          this._draggables = items;
          items.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._withDropContainer(
            /** @type {?} */
            _this12);
          });

          if (
          /** @type {?} */
          this.isDragging()) {
            /** @type {?} */
            var draggedItems = previousItems.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.isDragging();
            }); // If all of the items being dragged were removed
            // from the list, abort the current drag sequence.

            if (draggedItems.every(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return items.indexOf(item) === -1;
            })) {
              /** @type {?} */
              this._reset();
            } else {
              /** @type {?} */
              this._cacheItems();
            }
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the layout direction of the drop list.
         * @template THIS
         * @this {THIS}
         * @param {?} direction
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(direction) {
          /** @type {?} */
          this._direction = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the containers that are connected to this one. When two or more containers are
         * connected, the user will be allowed to transfer items between them.
         * @template THIS
         * @this {THIS}
         * @param {?} connectedTo Other containers that the current containers should be connected to.
         * @return {THIS}
         */

      }, {
        key: "connectedTo",
        value: function connectedTo(_connectedTo) {
          /** @type {?} */
          this._siblings = _connectedTo.slice();
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the orientation of the container.
         * @template THIS
         * @this {THIS}
         * @param {?} orientation New orientation for the container.
         * @return {THIS}
         */

      }, {
        key: "withOrientation",
        value: function withOrientation(orientation) {
          /** @type {?} */
          this._orientation = orientation;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets which parent elements are can be scrolled while the user is dragging.
         * @template THIS
         * @this {THIS}
         * @param {?} elements Elements that can be scrolled.
         * @return {THIS}
         */

      }, {
        key: "withScrollableParents",
        value: function withScrollableParents(elements) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(
          /** @type {?} */
          this.element); // We always allow the current element to be scrollable
          // so we need to ensure that it's in the array.

          /** @type {?} */
          this._scrollableElements = elements.indexOf(element) === -1 ? [element].concat(_toConsumableArray(elements)) : elements.slice();
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Gets the scrollable parents that are registered with this drop container.
         * @return {?}
         */

      }, {
        key: "getScrollableParents",
        value: function getScrollableParents() {
          return this._scrollableElements;
        }
        /**
         * Figures out the index of an item in the container.
         * @param {?} item Item whose index should be determined.
         * @return {?}
         */

      }, {
        key: "getItemIndex",
        value: function getItemIndex(item) {
          if (!this._isDragging) {
            return this._draggables.indexOf(item);
          } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
          // The rest of the logic still stands no matter what orientation we're in, however
          // we need to invert the array when determining the index.

          /** @type {?} */


          var items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
          return findIndex(items,
          /**
          * @param {?} currentItem
          * @return {?}
          */
          function (currentItem) {
            return currentItem.drag === item;
          });
        }
        /**
         * Whether the list is able to receive the item that
         * is currently being dragged inside a connected drop list.
         * @return {?}
         */

      }, {
        key: "isReceiving",
        value: function isReceiving() {
          return this._activeSiblings.size > 0;
        }
        /**
         * Sorts an item inside the container based on its position.
         * @param {?} item Item to be sorted.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
         * @return {?}
         */

      }, {
        key: "_sortItem",
        value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
          // Don't sort the item if sorting is disabled or it's out of range.
          if (this.sortingDisabled || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
            return;
          }
          /** @type {?} */


          var siblings = this._itemPositions;
          /** @type {?} */

          var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

          if (newIndex === -1 && siblings.length > 0) {
            return;
          }
          /** @type {?} */


          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var currentIndex = findIndex(siblings,
          /**
          * @param {?} currentItem
          * @return {?}
          */
          function (currentItem) {
            return currentItem.drag === item;
          });
          /** @type {?} */

          var siblingAtNewPosition = siblings[newIndex];
          /** @type {?} */

          var currentPosition = siblings[currentIndex].clientRect;
          /** @type {?} */

          var newPosition = siblingAtNewPosition.clientRect;
          /** @type {?} */

          var delta = currentIndex > newIndex ? 1 : -1;
          this._previousSwap.drag = siblingAtNewPosition.drag;
          this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y; // How many pixels the item's placeholder should be offset.

          /** @type {?} */

          var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.

          /** @type {?} */


          var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
          // We use this to check whether an item has been moved as a result of the sorting.

          /** @type {?} */


          var oldOrder = siblings.slice(); // Shuffle the array in place.

          moveItemInArray(siblings, currentIndex, newIndex);
          this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
          });
          siblings.forEach(
          /**
          * @param {?} sibling
          * @param {?} index
          * @return {?}
          */
          function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
              return;
            }
            /** @type {?} */


            var isDraggedItem = sibling.drag === item;
            /** @type {?} */

            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */

            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

            sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.

            if (isHorizontal) {
              // Round the transforms since some browsers will
              // blur the elements, for sub-pixel transforms.
              elementToOffset.style.transform = "translate3d(".concat(Math.round(sibling.offset), "px, 0, 0)");
              adjustClientRect(sibling.clientRect, 0, offset);
            } else {
              elementToOffset.style.transform = "translate3d(0, ".concat(Math.round(sibling.offset), "px, 0)");
              adjustClientRect(sibling.clientRect, offset, 0);
            }
          });
        }
        /**
         * Checks whether the user's pointer is close to the edges of either the
         * viewport or the drop list and starts the auto-scroll sequence.
         * @param {?} pointerX User's pointer position along the x axis.
         * @param {?} pointerY User's pointer position along the y axis.
         * @return {?}
         */

      }, {
        key: "_startScrollingIfNecessary",
        value: function _startScrollingIfNecessary(pointerX, pointerY) {
          var _this13 = this;

          if (this.autoScrollDisabled) {
            return;
          }
          /** @type {?} */


          var scrollNode;
          /** @type {?} */

          var verticalScrollDirection = 0
          /* NONE */
          ;
          /** @type {?} */

          var horizontalScrollDirection = 0
          /* NONE */
          ; // Check whether we should start scrolling any of the parent containers.

          this._parentPositions.positions.forEach(
          /**
          * @param {?} position
          * @param {?} element
          * @return {?}
          */
          function (position, element) {
            // We have special handling for the `document` below. Also this would be
            // nicer with a  for...of loop, but it requires changing a compiler flag.
            if (element === _this13._document || !position.clientRect || scrollNode) {
              return;
            }

            if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
              var _getElementScrollDire = getElementScrollDirections(
              /** @type {?} */
              element, position.clientRect, pointerX, pointerY);

              var _getElementScrollDire2 = _slicedToArray(_getElementScrollDire, 2);

              verticalScrollDirection = _getElementScrollDire2[0];
              horizontalScrollDirection = _getElementScrollDire2[1];

              if (verticalScrollDirection || horizontalScrollDirection) {
                scrollNode =
                /** @type {?} */
                element;
              }
            }
          }); // Otherwise check if we can start scrolling the viewport.


          if (!verticalScrollDirection && !horizontalScrollDirection) {
            var _this$_viewportRuler$ = this._viewportRuler.getViewportSize(),
                width = _this$_viewportRuler$.width,
                height = _this$_viewportRuler$.height;
            /** @type {?} */


            var clientRect = {
              width: width,
              height: height,
              top: 0,
              right: width,
              bottom: height,
              left: 0
            };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
          }

          if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;

            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
              this._ngZone.runOutsideAngular(this._startScrollInterval);
            } else {
              this._stopScrolling();
            }
          }
        }
        /**
         * Stops any currently-running auto-scroll sequences.
         * @return {?}
         */

      }, {
        key: "_stopScrolling",
        value: function _stopScrolling() {
          this._stopScrollTimers.next();
        }
        /**
         * Caches the positions of the configured scrollable parents.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheParentPositions",
        value: function _cacheParentPositions() {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);

          this._parentPositions.cache(this._scrollableElements); // The list element is always in the `scrollableElements`
          // so we can take advantage of the cached `ClientRect`.


          this._clientRect =
          /** @type {?} */

          /** @type {?} */
          this._parentPositions.positions.get(element).clientRect;
        }
        /**
         * Refreshes the position cache of the items and sibling containers.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheItemPositions",
        value: function _cacheItemPositions() {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          this._itemPositions = this._activeDraggables.map(
          /**
          * @param {?} drag
          * @return {?}
          */
          function (drag) {
            /** @type {?} */
            var elementToMeasure = drag.getVisibleElement();
            return {
              drag: drag,
              offset: 0,
              clientRect: getMutableClientRect(elementToMeasure)
            };
          }).sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
          });
        }
        /**
         * Resets the container to its initial state.
         * @private
         * @return {?}
         */

      }, {
        key: "_reset",
        value: function _reset() {
          var _this14 = this;

          this._isDragging = false;
          /** @type {?} */

          var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;

          /** @type {?} */
          styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

          this._activeDraggables.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            /** @type {?} */
            var rootElement = item.getRootElement();

            if (rootElement) {
              rootElement.style.transform = '';
            }
          });

          this._siblings.forEach(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._stopReceiving(_this14);
          });

          this._activeDraggables = [];
          this._itemPositions = [];
          this._previousSwap.drag = null;
          this._previousSwap.delta = 0;

          this._stopScrolling();

          this._viewportScrollSubscription.unsubscribe();

          this._parentPositions.clear();
        }
        /**
         * Gets the offset in pixels by which the items that aren't being dragged should be moved.
         * @private
         * @param {?} currentIndex Index of the item currently being dragged.
         * @param {?} siblings All of the items in the list.
         * @param {?} delta Direction in which the user is moving.
         * @return {?}
         */

      }, {
        key: "_getSiblingOffsetPx",
        value: function _getSiblingOffsetPx(currentIndex, siblings, delta) {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var currentPosition = siblings[currentIndex].clientRect;
          /** @type {?} */

          var immediateSibling = siblings[currentIndex + delta * -1];
          /** @type {?} */

          var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

          if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */

            var end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.

            if (delta === -1) {
              siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            } else {
              siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
          }

          return siblingOffset;
        }
        /**
         * Gets the offset in pixels by which the item that is being dragged should be moved.
         * @private
         * @param {?} currentPosition Current position of the item.
         * @param {?} newPosition Position of the item where the current item should be moved.
         * @param {?} delta Direction in which the user is moving.
         * @return {?}
         */

      }, {
        key: "_getItemOffsetPx",
        value: function _getItemOffsetPx(currentPosition, newPosition, delta) {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

          if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
          }

          return itemOffset;
        }
        /**
         * Checks if pointer is entering in the first position
         * @private
         * @param {?} pointerX Position of the user's pointer along the X axis.
         * @param {?} pointerY Position of the user's pointer along the Y axis.
         * @return {?}
         */

      }, {
        key: "_shouldEnterAsFirstChild",
        value: function _shouldEnterAsFirstChild(pointerX, pointerY) {
          if (!this._activeDraggables.length) {
            return false;
          }
          /** @type {?} */


          var itemPositions = this._itemPositions;
          /** @type {?} */

          var isHorizontal = this._orientation === 'horizontal'; // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
          // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)

          /** @type {?} */

          var reversed = itemPositions[0].drag !== this._activeDraggables[0];

          if (reversed) {
            /** @type {?} */
            var lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
            return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
          } else {
            /** @type {?} */
            var firstItemRect = itemPositions[0].clientRect;
            return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
          }
        }
        /**
         * Gets the index of an item in the drop container, based on the position of the user's pointer.
         * @private
         * @param {?} item Item that is being sorted.
         * @param {?} pointerX Position of the user's pointer along the X axis.
         * @param {?} pointerY Position of the user's pointer along the Y axis.
         * @param {?=} delta Direction in which the user is moving their pointer.
         * @return {?}
         */

      }, {
        key: "_getItemIndexFromPointerPosition",
        value: function _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
          var _this15 = this;

          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          return findIndex(this._itemPositions,
          /**
          * @param {?} __0
          * @param {?} _
          * @param {?} array
          * @return {?}
          */
          function (_ref2, _, array) {
            var drag = _ref2.drag,
                clientRect = _ref2.clientRect;

            if (drag === item) {
              // If there's only one item left in the container, it must be
              // the dragged item itself so we use it as a reference.
              return array.length < 2;
            }

            if (delta) {
              /** @type {?} */
              var direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, and they didn't change
              // the direction in which they're dragging, we don't consider it a direction swap.

              if (drag === _this15._previousSwap.drag && direction === _this15._previousSwap.delta) {
                return false;
              }
            }

            return isHorizontal ? // Round these down since most browsers report client rects with
            // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
            pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
          });
        }
        /**
         * Caches the current items in the list and their positions.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheItems",
        value: function _cacheItems() {
          this._activeDraggables = this._draggables.slice();

          this._cacheItemPositions();

          this._cacheParentPositions();
        }
        /**
         * Checks whether the user's pointer is positioned over the container.
         * @param {?} x Pointer position along the X axis.
         * @param {?} y Pointer position along the Y axis.
         * @return {?}
         */

      }, {
        key: "_isOverContainer",
        value: function _isOverContainer(x, y) {
          return isInsideClientRect(this._clientRect, x, y);
        }
        /**
         * Figures out whether an item should be moved into a sibling
         * drop container, based on its current position.
         * @param {?} item Drag item that is being moved.
         * @param {?} x Position of the item along the X axis.
         * @param {?} y Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "_getSiblingContainerFromPosition",
        value: function _getSiblingContainerFromPosition(item, x, y) {
          return this._siblings.find(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._canReceive(item, x, y);
          });
        }
        /**
         * Checks whether the drop list can receive the passed-in item.
         * @param {?} item Item that is being dragged into the list.
         * @param {?} x Position of the item along the X axis.
         * @param {?} y Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "_canReceive",
        value: function _canReceive(item, x, y) {
          if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
            return false;
          }
          /** @type {?} */


          var elementFromPoint =
          /** @type {?} */
          this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
          // the client rect is probably scrolled out of the view.


          if (!elementFromPoint) {
            return false;
          }
          /** @type {?} */


          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element); // The `ClientRect`, that we're using to find the container over which the user is
          // hovering, doesn't give us any information on whether the element has been scrolled
          // out of the view or whether it's overlapping with other containers. This means that
          // we could end up transferring the item into a container that's invisible or is positioned
          // below another one. We use the result from `elementFromPoint` to get the top-most element
          // at the pointer position and to find whether it's one of the intersecting drop containers.

          return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
        }
        /**
         * Called by one of the connected drop lists when a dragging sequence has started.
         * @param {?} sibling Sibling in which dragging has started.
         * @return {?}
         */

      }, {
        key: "_startReceiving",
        value: function _startReceiving(sibling) {
          /** @type {?} */
          var activeSiblings = this._activeSiblings;

          if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);

            this._cacheParentPositions();

            this._listenToScrollEvents();
          }
        }
        /**
         * Called by a connected drop list when dragging has stopped.
         * @param {?} sibling Sibling whose dragging has stopped.
         * @return {?}
         */

      }, {
        key: "_stopReceiving",
        value: function _stopReceiving(sibling) {
          this._activeSiblings["delete"](sibling);

          this._viewportScrollSubscription.unsubscribe();
        }
        /**
         * Starts listening to scroll events on the viewport.
         * Used for updating the internal state of the list.
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToScrollEvents",
        value: function _listenToScrollEvents() {
          var _this16 = this;

          this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (_this16.isDragging()) {
              /** @type {?} */
              var scrollDifference = _this16._parentPositions.handleScroll(event);

              if (scrollDifference) {
                // Since we know the amount that the user has scrolled we can shift all of the
                // client rectangles ourselves. This is cheaper than re-measuring everything and
                // we can avoid inconsistent behavior where we might be measuring the element before
                // its position has changed.
                _this16._itemPositions.forEach(
                /**
                * @param {?} __0
                * @return {?}
                */
                function (_ref3) {
                  var clientRect = _ref3.clientRect;
                  adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
                }); // We need two loops for this, because we want all of the cached
                // positions to be up-to-date before we re-sort the item.


                _this16._itemPositions.forEach(
                /**
                * @param {?} __0
                * @return {?}
                */
                function (_ref4) {
                  var drag = _ref4.drag;

                  if (_this16._dragDropRegistry.isDragging(drag)) {
                    // We need to re-sort the item manually, because the pointer move
                    // events won't be dispatched while the user is scrolling.
                    drag._sortFromLastPointerPosition();
                  }
                });
              }
            } else if (_this16.isReceiving()) {
              _this16._cacheParentPositions();
            }
          });
        }
        /**
         * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
         * than saving it in property directly on init, because we want to resolve it as late as possible
         * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
         * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
         * @private
         * @return {?}
         */

      }, {
        key: "_getShadowRoot",
        value: function _getShadowRoot() {
          if (!this._cachedShadowRoot) {
            /** @type {?} */
            var shadowRoot =
            /** @type {?} */
            Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element));
            this._cachedShadowRoot = shadowRoot || this._document;
          }

          return this._cachedShadowRoot;
        }
      }]);

      return DropListRef;
    }();

    if (false) {}
    /**
     * Finds the index of an item that matches a predicate function. Used as an equivalent
     * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
     * @template T
     * @param {?} array Array in which to look for matches.
     * @param {?} predicate Function used to determine whether an item is a match.
     * @return {?}
     */


    function findIndex(array, predicate) {
      for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
          return i;
        }
      }

      return -1;
    }
    /**
     * Increments the vertical scroll position of a node.
     * @param {?} node Node whose scroll position should change.
     * @param {?} amount Amount of pixels that the `node` should be scrolled.
     * @return {?}
     */


    function incrementVerticalScroll(node, amount) {
      if (node === window) {
        /** @type {?} */
        node.scrollBy(0, amount);
      } else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.

        /** @type {?} */
        node.scrollTop += amount;
      }
    }
    /**
     * Increments the horizontal scroll position of a node.
     * @param {?} node Node whose scroll position should change.
     * @param {?} amount Amount of pixels that the `node` should be scrolled.
     * @return {?}
     */


    function incrementHorizontalScroll(node, amount) {
      if (node === window) {
        /** @type {?} */
        node.scrollBy(amount, 0);
      } else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.

        /** @type {?} */
        node.scrollLeft += amount;
      }
    }
    /**
     * Gets whether the vertical auto-scroll direction of a node.
     * @param {?} clientRect Dimensions of the node.
     * @param {?} pointerY Position of the user's pointer along the y axis.
     * @return {?}
     */


    function getVerticalScrollDirection(clientRect, pointerY) {
      var top = clientRect.top,
          bottom = clientRect.bottom,
          height = clientRect.height;
      /** @type {?} */

      var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

      if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1
        /* UP */
        ;
      } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2
        /* DOWN */
        ;
      }

      return 0
      /* NONE */
      ;
    }
    /**
     * Gets whether the horizontal auto-scroll direction of a node.
     * @param {?} clientRect Dimensions of the node.
     * @param {?} pointerX Position of the user's pointer along the x axis.
     * @return {?}
     */


    function getHorizontalScrollDirection(clientRect, pointerX) {
      var left = clientRect.left,
          right = clientRect.right,
          width = clientRect.width;
      /** @type {?} */

      var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

      if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1
        /* LEFT */
        ;
      } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2
        /* RIGHT */
        ;
      }

      return 0
      /* NONE */
      ;
    }
    /**
     * Gets the directions in which an element node should be scrolled,
     * assuming that the user's pointer is already within it scrollable region.
     * @param {?} element Element for which we should calculate the scroll direction.
     * @param {?} clientRect Bounding client rectangle of the element.
     * @param {?} pointerX Position of the user's pointer along the x axis.
     * @param {?} pointerY Position of the user's pointer along the y axis.
     * @return {?}
     */


    function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
      /** @type {?} */
      var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
      /** @type {?} */

      var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
      /** @type {?} */

      var verticalScrollDirection = 0
      /* NONE */
      ;
      /** @type {?} */

      var horizontalScrollDirection = 0
      /* NONE */
      ; // Note that we here we do some extra checks for whether the element is actually scrollable in
      // a certain direction and we only assign the scroll direction if it is. We do this so that we
      // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
      // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

      if (computedVertical) {
        /** @type {?} */
        var scrollTop = element.scrollTop;

        if (computedVertical === 1
        /* UP */
        ) {
            if (scrollTop > 0) {
              verticalScrollDirection = 1
              /* UP */
              ;
            }
          } else if (element.scrollHeight - scrollTop > element.clientHeight) {
          verticalScrollDirection = 2
          /* DOWN */
          ;
        }
      }

      if (computedHorizontal) {
        /** @type {?} */
        var scrollLeft = element.scrollLeft;

        if (computedHorizontal === 1
        /* LEFT */
        ) {
            if (scrollLeft > 0) {
              horizontalScrollDirection = 1
              /* LEFT */
              ;
            }
          } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
          horizontalScrollDirection = 2
          /* RIGHT */
          ;
        }
      }

      return [verticalScrollDirection, horizontalScrollDirection];
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-drop-registry.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Event options that can be used to bind an active, capturing event.
     * @type {?}
     */


    var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
      passive: false,
      capture: true
    });
    /**
     * Service that keeps track of all the drag item and drop container
     * instances, and manages global event listeners on the `document`.
     * \@docs-private
     * @template I, C
     */
    // Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
    // to avoid circular imports. If we were to reference them here, importing the registry into the
    // classes that are registering themselves will introduce a circular import.

    var DragDropRegistry =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _ngZone
       * @param {?} _document
       */
      function DragDropRegistry(_ngZone, _document) {
        var _this17 = this;

        _classCallCheck(this, DragDropRegistry);

        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */

        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */

        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */

        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */

        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */

        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */

        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */

        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */

        this._preventDefaultWhileDragging =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this17._activeDragInstances.size) {
            event.preventDefault();
          }
        };

        this._document = _document;
      }
      /**
       * Adds a drop container to the registry.
       * @param {?} drop
       * @return {?}
       */


      _createClass(DragDropRegistry, [{
        key: "registerDropContainer",
        value: function registerDropContainer(drop) {
          if (!this._dropInstances.has(drop)) {
            this._dropInstances.add(drop);
          }
        }
        /**
         * Adds a drag item instance to the registry.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "registerDragItem",
        value: function registerDragItem(drag) {
          var _this18 = this;

          this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
          // won't preventDefault on a dynamically-added `touchmove` listener.
          // See https://bugs.webkit.org/show_bug.cgi?id=184250.


          if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              // The event handler has to be explicitly active,
              // because newer browsers make it passive by default.
              _this18._document.addEventListener('touchmove', _this18._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
          }
        }
        /**
         * Removes a drop container from the registry.
         * @param {?} drop
         * @return {?}
         */

      }, {
        key: "removeDropContainer",
        value: function removeDropContainer(drop) {
          this._dropInstances["delete"](drop);
        }
        /**
         * Removes a drag item instance from the registry.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "removeDragItem",
        value: function removeDragItem(drag) {
          this._dragInstances["delete"](drag);

          this.stopDragging(drag);

          if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
          }
        }
        /**
         * Starts the dragging sequence for a drag instance.
         * @param {?} drag Drag instance which is being dragged.
         * @param {?} event Event that initiated the dragging.
         * @return {?}
         */

      }, {
        key: "startDragging",
        value: function startDragging(drag, event) {
          var _this19 = this;

          // Do not process the same drag twice to avoid memory leaks and redundant listeners
          if (this._activeDragInstances.has(drag)) {
            return;
          }

          this._activeDragInstances.add(drag);

          if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var _isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */


            var moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */

            var upEvent = _isTouchEvent ? 'touchend' : 'mouseup'; // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.

            this._globalListeners.set(moveEvent, {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this19.pointerMove.next(
                /** @type {?} */
                e);
              },
              options: activeCapturingEventOptions
            }).set(upEvent, {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this19.pointerUp.next(
                /** @type {?} */
                e);
              },
              options: true
            }).set('scroll', {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this19.scroll.next(e);
              },
              // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
              // the document. See https://github.com/angular/components/issues/17144.
              options: true
            }) // Preventing the default action on `mousemove` isn't enough to disable text selection
            // on Safari so we need to prevent the selection event as well. Alternatively this can
            // be done by setting `user-select: none` on the `body`, however it has causes a style
            // recalculation which can be expensive on pages with a lot of elements.
            .set('selectstart', {
              handler: this._preventDefaultWhileDragging,
              options: activeCapturingEventOptions
            });

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this19._globalListeners.forEach(
              /**
              * @param {?} config
              * @param {?} name
              * @return {?}
              */
              function (config, name) {
                _this19._document.addEventListener(name, config.handler, config.options);
              });
            });
          }
        }
        /**
         * Stops dragging a drag item instance.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "stopDragging",
        value: function stopDragging(drag) {
          this._activeDragInstances["delete"](drag);

          if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
          }
        }
        /**
         * Gets whether a drag item instance is currently being dragged.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging(drag) {
          return this._activeDragInstances.has(drag);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this20 = this;

          this._dragInstances.forEach(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return _this20.removeDragItem(instance);
          });

          this._dropInstances.forEach(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return _this20.removeDropContainer(instance);
          });

          this._clearGlobalListeners();

          this.pointerMove.complete();
          this.pointerUp.complete();
        }
        /**
         * Clears out the global event listeners from the `document`.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearGlobalListeners",
        value: function _clearGlobalListeners() {
          var _this21 = this;

          this._globalListeners.forEach(
          /**
          * @param {?} config
          * @param {?} name
          * @return {?}
          */
          function (config, name) {
            _this21._document.removeEventListener(name, config.handler, config.options);
          });

          this._globalListeners.clear();
        }
      }]);

      return DragDropRegistry;
    }();

    DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
      return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };
    /** @nocollapse */


    DragDropRegistry.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function DragDropRegistry_Factory() {
        return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      },
      token: DragDropRegistry,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-drop.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default configuration to be used when creating a `DragRef`.
     * @type {?}
     */


    var DEFAULT_CONFIG = {
      dragStartThreshold: 5,
      pointerDirectionChangeThreshold: 5
    };
    /**
     * Service that allows for drag-and-drop functionality to be attached to DOM elements.
     */

    var DragDrop =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?} _dragDropRegistry
       */
      function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        _classCallCheck(this, DragDrop);

        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
      }
      /**
       * Turns an element into a draggable item.
       * @template T
       * @param {?} element Element to which to attach the dragging functionality.
       * @param {?=} config Object used to configure the dragging behavior.
       * @return {?}
       */


      _createClass(DragDrop, [{
        key: "createDrag",
        value: function createDrag(element) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG;
          return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
        }
        /**
         * Turns an element into a drop list.
         * @template T
         * @param {?} element Element to which to attach the drop list functionality.
         * @return {?}
         */

      }, {
        key: "createDropList",
        value: function createDropList(element) {
          return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
        }
      }]);

      return DragDrop;
    }();

    DragDrop.ɵfac = function DragDrop_Factory(t) {
      return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DragDropRegistry));
    };
    /** @nocollapse */


    DragDrop.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
      }, {
        type: DragDropRegistry
      }];
    };
    /** @nocollapse */


    DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function DragDrop_Factory() {
        return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry));
      },
      token: DragDrop,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDrop, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
        }, {
          type: DragDropRegistry
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-events.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Event emitted when the user starts dragging a draggable.
     * @record
     * @template T
     */


    function CdkDragStart() {}

    if (false) {}
    /**
     * Event emitted when the user releases an item, before any animations have started.
     * @record
     * @template T
     */


    function CdkDragRelease() {}

    if (false) {}
    /**
     * Event emitted when the user stops dragging a draggable.
     * @record
     * @template T
     */


    function CdkDragEnd() {}

    if (false) {}
    /**
     * Event emitted when the user moves an item into a new drop container.
     * @record
     * @template T, I
     */


    function CdkDragEnter() {}

    if (false) {}
    /**
     * Event emitted when the user removes an item from a
     * drop container by moving it into another one.
     * @record
     * @template T, I
     */


    function CdkDragExit() {}

    if (false) {}
    /**
     * Event emitted when the user drops a draggable item inside a drop container.
     * @record
     * @template T, O
     */


    function CdkDragDrop() {}

    if (false) {}
    /**
     * Event emitted as the user is dragging a draggable item.
     * @record
     * @template T
     */


    function CdkDragMove() {}

    if (false) {}
    /**
     * Event emitted when the user swaps the position of two drag items.
     * @record
     * @template T, I
     */


    function CdkDragSortEvent() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-parent.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
     * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
     * to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drag-handle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Handle that can be used to drag and CdkDrag instance.
     */

    var CdkDragHandle =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?=} parentDrag
       */
      function CdkDragHandle(element, parentDrag) {
        _classCallCheck(this, CdkDragHandle);

        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */

        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
      }
      /**
       * Whether starting to drag through this handle is disabled.
       * @return {?}
       */


      _createClass(CdkDragHandle, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          this._stateChanges.next(this);
        }
      }]);

      return CdkDragHandle;
    }();

    CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
      return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 8));
    };

    CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDragHandle,
      selectors: [["", "cdkDragHandle", ""]],
      hostAttrs: [1, "cdk-drag-handle"],
      inputs: {
        disabled: ["cdkDragHandleDisabled", "disabled"]
      }
    });
    /** @nocollapse */

    CdkDragHandle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DRAG_PARENT]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    CdkDragHandle.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragHandleDisabled']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragHandle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkDragHandle]',
          host: {
            'class': 'cdk-drag-handle'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_PARENT]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragHandleDisabled']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drag-placeholder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Element that will be used as a template for the placeholder of a CdkDrag when
     * it is being dragged. The placeholder is displayed in place of the element being dragged.
     * @template T
     */


    var CdkDragPlaceholder =
    /**
     * @param {?} templateRef
     */
    function CdkDragPlaceholder(templateRef) {
      _classCallCheck(this, CdkDragPlaceholder);

      this.templateRef = templateRef;
    };

    CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
      return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDragPlaceholder,
      selectors: [["ng-template", "cdkDragPlaceholder", ""]],
      inputs: {
        data: "data"
      }
    });
    /** @nocollapse */

    CdkDragPlaceholder.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    CdkDragPlaceholder.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'ng-template[cdkDragPlaceholder]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drag-preview.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Element that will be used as a template for the preview
     * of a CdkDrag when it is being dragged.
     * @template T
     */


    var CdkDragPreview =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} templateRef
       */
      function CdkDragPreview(templateRef) {
        _classCallCheck(this, CdkDragPreview);

        this.templateRef = templateRef;
        this._matchSize = false;
      }
      /**
       * Whether the preview should preserve the same size as the item that is being dragged.
       * @return {?}
       */


      _createClass(CdkDragPreview, [{
        key: "matchSize",
        get: function get() {
          return this._matchSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDragPreview;
    }();

    CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
      return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDragPreview,
      selectors: [["ng-template", "cdkDragPreview", ""]],
      inputs: {
        matchSize: "matchSize",
        data: "data"
      }
    });
    /** @nocollapse */

    CdkDragPreview.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    CdkDragPreview.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      matchSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPreview, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'ng-template[cdkDragPreview]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, {
        matchSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to configure the
     * behavior of the drag&drop-related components.
     * @type {?}
     */


    var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');
    /**
     * Object that can be used to configure the drag
     * items and drop lists within a module or a component.
     * @record
     */

    function DragDropConfig() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @return {?}
     */


    function CDK_DRAG_CONFIG_FACTORY() {
      return {
        dragStartThreshold: 5,
        pointerDirectionChangeThreshold: 5
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drag.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that is used to provide a CdkDropList instance to CdkDrag.
     * Used for avoiding circular imports.
     * @type {?}
     */


    var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DROP_LIST');
    /**
     * Element that can be moved inside a CdkDropList container.
     * @template T
     */

    var CdkDrag =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} dropContainer
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewContainerRef
       * @param {?} config
       * @param {?} _dir
       * @param {?} dragDrop
       * @param {?} _changeDetectorRef
       */
      function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this22 = this;

        _classCallCheck(this, CdkDrag);

        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */

        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */

        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */

        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */

        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */

        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */

        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */

        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          /** @type {?} */
          var subscription = _this22._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} movedEvent
          * @return {?}
          */
          function (movedEvent) {
            return {
              source: _this22,
              pointerPosition: movedEvent.pointerPosition,
              event: movedEvent.event,
              delta: movedEvent.delta,
              distance: movedEvent.distance
            };
          })).subscribe(observer);

          return (
            /**
            * @return {?}
            */
            function () {
              subscription.unsubscribe();
            }
          );
        });
        this._dragRef = dragDrop.createDrag(element, {
          dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
          pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
          zIndex: config === null || config === void 0 ? void 0 : config.zIndex
        });
        this._dragRef.data = this;

        if (config) {
          this._assignDefaults(config);
        } // Note that usually the container is assigned when the drop list is picks up the item, but in
        // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
        // where there are no items on the first change detection pass, but the items get picked up as
        // soon as the user triggers another pass by dragging. This is a problem, because the item would
        // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
        // is too late since the two modes save different kinds of information. We work around it by
        // assigning the drop container both from here and the list.


        if (dropContainer) {
          this._dragRef._withDropContainer(dropContainer._dropListRef);

          dropContainer.addItem(this);
        }

        this._syncInputs(this._dragRef);

        this._handleEvents(this._dragRef);
      }
      /**
       * Whether starting to drag this element is disabled.
       * @return {?}
       */


      _createClass(CdkDrag, [{
        key: "getPlaceholderElement",

        /**
         * Returns the element that is being used as a placeholder
         * while the current element is being dragged.
         * @return {?}
         */
        value: function getPlaceholderElement() {
          return this._dragRef.getPlaceholderElement();
        }
        /**
         * Returns the root draggable element.
         * @return {?}
         */

      }, {
        key: "getRootElement",
        value: function getRootElement() {
          return this._dragRef.getRootElement();
        }
        /**
         * Resets a standalone drag item to its initial position.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._dragRef.reset();
        }
        /**
         * Gets the pixel coordinates of the draggable outside of a drop container.
         * @return {?}
         */

      }, {
        key: "getFreeDragPosition",
        value: function getFreeDragPosition() {
          return this._dragRef.getFreeDragPosition();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this23 = this;

          // We need to wait for the zone to stabilize, in order for the reference
          // element to be in the proper place in the DOM. This is mostly relevant
          // for draggable elements inside portals since they get stamped out in
          // their original DOM position and then they get transferred to the portal.
          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this23._updateRootElement(); // Listen for any newly-added handles.


            _this23._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(_this23._handles), // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
            /**
            * @param {?} handles
            * @return {?}
            */
            function (handles) {
              /** @type {?} */
              var childHandleElements = handles.filter(
              /**
              * @param {?} handle
              * @return {?}
              */
              function (handle) {
                return handle._parentDrag === _this23;
              }).map(
              /**
              * @param {?} handle
              * @return {?}
              */
              function (handle) {
                return handle.element;
              });

              _this23._dragRef.withHandles(childHandleElements);
            }), // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(
            /**
            * @param {?} handles
            * @return {?}
            */
            function (handles) {
              return (
                /** @type {?} */
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(handles.map(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(item));
                })))
              );
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this23._destroyed)).subscribe(
            /**
            * @param {?} handleInstance
            * @return {?}
            */
            function (handleInstance) {
              // Enabled/disable the handle that changed in the DragRef.

              /** @type {?} */
              var dragRef = _this23._dragRef;
              /** @type {?} */

              var handle = handleInstance.element.nativeElement;
              handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });

            if (_this23.freeDragPosition) {
              _this23._dragRef.setFreeDragPosition(_this23.freeDragPosition);
            }
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var rootSelectorChange = changes['rootElementSelector'];
          /** @type {?} */

          var positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
          // handled in `ngAfterViewInit` where it needs to be deferred.

          if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
          } // Skip the first change since it's being handled in `ngAfterViewInit`.


          if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.dropContainer) {
            this.dropContainer.removeItem(this);
          }

          this._destroyed.next();

          this._destroyed.complete();

          this._dragRef.dispose();
        }
        /**
         * Syncs the root element with the `DragRef`.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRootElement",
        value: function _updateRootElement() {
          /** @type {?} */
          var element = this.element.nativeElement;
          /** @type {?} */

          var rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

          if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " + "Currently attached to \"".concat(rootElement.nodeName, "\"."));
          }

          this._dragRef.withRootElement(rootElement || element);
        }
        /**
         * Gets the boundary element, based on the `boundaryElement` value.
         * @private
         * @return {?}
         */

      }, {
        key: "_getBoundaryElement",
        value: function _getBoundaryElement() {
          /** @type {?} */
          var boundary = this.boundaryElement;

          if (!boundary) {
            return null;
          }

          if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
          }
          /** @type {?} */


          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);

          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
          }

          return element;
        }
        /**
         * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_syncInputs",
        value: function _syncInputs(ref) {
          var _this24 = this;

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!ref.isDragging()) {
              /** @type {?} */
              var dir = _this24._dir;
              /** @type {?} */

              var dragStartDelay = _this24.dragStartDelay;
              /** @type {?} */

              var placeholder = _this24._placeholderTemplate ? {
                template: _this24._placeholderTemplate.templateRef,
                context: _this24._placeholderTemplate.data,
                viewContainer: _this24._viewContainerRef
              } : null;
              /** @type {?} */

              var preview = _this24._previewTemplate ? {
                template: _this24._previewTemplate.templateRef,
                context: _this24._previewTemplate.data,
                matchSize: _this24._previewTemplate.matchSize,
                viewContainer: _this24._viewContainerRef
              } : null;
              ref.disabled = _this24.disabled;
              ref.lockAxis = _this24.lockAxis;
              ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
              ref.constrainPosition = _this24.constrainPosition;
              ref.previewClass = _this24.previewClass;
              ref.withBoundaryElement(_this24._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview);

              if (dir) {
                ref.withDirection(dir.value);
              }
            }
          });
        }
        /**
         * Handles the events from the underlying `DragRef`.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_handleEvents",
        value: function _handleEvents(ref) {
          var _this25 = this;

          ref.started.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this25.started.emit({
              source: _this25
            }); // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.


            _this25._changeDetectorRef.markForCheck();
          });
          ref.released.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this25.released.emit({
              source: _this25
            });
          });
          ref.ended.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this25.ended.emit({
              source: _this25,
              distance: event.distance
            }); // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.


            _this25._changeDetectorRef.markForCheck();
          });
          ref.entered.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this25.entered.emit({
              container: event.container.data,
              item: _this25,
              currentIndex: event.currentIndex
            });
          });
          ref.exited.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this25.exited.emit({
              container: event.container.data,
              item: _this25
            });
          });
          ref.dropped.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this25.dropped.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              previousContainer: event.previousContainer.data,
              container: event.container.data,
              isPointerOverContainer: event.isPointerOverContainer,
              item: _this25,
              distance: event.distance
            });
          });
        }
        /**
         * Assigns the default input values based on a provided config object.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_assignDefaults",
        value: function _assignDefaults(config) {
          var lockAxis = config.lockAxis,
              dragStartDelay = config.dragStartDelay,
              constrainPosition = config.constrainPosition,
              previewClass = config.previewClass,
              boundaryElement = config.boundaryElement,
              draggingDisabled = config.draggingDisabled,
              rootElementSelector = config.rootElementSelector;
          this.disabled = draggingDisabled == null ? false : draggingDisabled;
          this.dragStartDelay = dragStartDelay || 0;

          if (lockAxis) {
            this.lockAxis = lockAxis;
          }

          if (constrainPosition) {
            this.constrainPosition = constrainPosition;
          }

          if (previewClass) {
            this.previewClass = previewClass;
          }

          if (boundaryElement) {
            this.boundaryElement = boundaryElement;
          }

          if (rootElementSelector) {
            this.rootElementSelector = rootElementSelector;
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this.dropContainer && this.dropContainer.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          this._dragRef.disabled = this._disabled;
        }
      }]);

      return CdkDrag;
    }();

    CdkDrag.ɵfac = function CdkDrag_Factory(t) {
      return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDrag,
      selectors: [["", "cdkDrag", ""]],
      contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPreview, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPlaceholder, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragHandle, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._handles = _t);
        }
      },
      hostAttrs: [1, "cdk-drag"],
      hostVars: 4,
      hostBindings: function CdkDrag_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
        }
      },
      inputs: {
        disabled: ["cdkDragDisabled", "disabled"],
        dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
        lockAxis: ["cdkDragLockAxis", "lockAxis"],
        constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
        previewClass: ["cdkDragPreviewClass", "previewClass"],
        boundaryElement: ["cdkDragBoundary", "boundaryElement"],
        rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
        data: ["cdkDragData", "data"],
        freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"]
      },
      outputs: {
        started: "cdkDragStarted",
        released: "cdkDragReleased",
        ended: "cdkDragEnded",
        entered: "cdkDragEntered",
        exited: "cdkDragExited",
        dropped: "cdkDragDropped",
        moved: "cdkDragMoved"
      },
      exportAs: ["cdkDrag"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    CdkDrag.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DROP_LIST]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DRAG_CONFIG]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: DragDrop
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    CdkDrag.propDecorators = {
      _handles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [CdkDragHandle, {
          descendants: true
        }]
      }],
      _previewTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [CdkDragPreview]
      }],
      _placeholderTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [CdkDragPlaceholder]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragData']
      }],
      lockAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragLockAxis']
      }],
      rootElementSelector: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragRootElement']
      }],
      boundaryElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragBoundary']
      }],
      dragStartDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragStartDelay']
      }],
      freeDragPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragFreeDragPosition']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragDisabled']
      }],
      constrainPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragConstrainPosition']
      }],
      previewClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragPreviewClass']
      }],
      started: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragStarted']
      }],
      released: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragReleased']
      }],
      ended: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragEnded']
      }],
      entered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragEntered']
      }],
      exited: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragExited']
      }],
      dropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragDropped']
      }],
      moved: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragMoved']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDrag, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkDrag]',
          exportAs: 'cdkDrag',
          host: {
            'class': 'cdk-drag',
            '[class.cdk-drag-disabled]': 'disabled',
            '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
          },
          providers: [{
            provide: CDK_DRAG_PARENT,
            useExisting: CdkDrag
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DROP_LIST]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        started: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragStarted']
        }],
        released: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragReleased']
        }],
        ended: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEnded']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragExited']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragDropped']
        }],
        moved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragMoved']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragDisabled']
        }],
        dragStartDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragStartDelay']
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragLockAxis']
        }],
        constrainPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragConstrainPosition']
        }],
        previewClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragPreviewClass']
        }],
        boundaryElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragBoundary']
        }],
        rootElementSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragRootElement']
        }],
        _handles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [CdkDragHandle, {
            descendants: true
          }]
        }],
        _previewTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CdkDragPreview]
        }],
        _placeholderTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CdkDragPlaceholder]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragData']
        }],
        freeDragPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragFreeDragPosition']
        }]
      });
    })();

    if (false) {}
    /**
     * Gets the closest ancestor of an element that matches a selector.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */


    function getClosestMatchingAncestor(element, selector) {
      /** @type {?} */
      var currentElement =
      /** @type {?} */
      element.parentElement;

      while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
        /** @type {?} */
        currentElement.msMatchesSelector(selector)) {
          return currentElement;
        }

        currentElement = currentElement.parentElement;
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drop-list-group.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
     * elements that are placed inside a `cdkDropListGroup` will be connected to each other
     * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
     * from `cdkDropList`.
     * @template T
     */


    var CdkDropListGroup =
    /*#__PURE__*/
    function () {
      function CdkDropListGroup() {
        _classCallCheck(this, CdkDropListGroup);

        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
      }
      /**
       * Whether starting a dragging sequence from inside this group is disabled.
       * @return {?}
       */


      _createClass(CdkDropListGroup, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._items.clear();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDropListGroup;
    }();

    CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
      return new (t || CdkDropListGroup)();
    };

    CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDropListGroup,
      selectors: [["", "cdkDropListGroup", ""]],
      inputs: {
        disabled: ["cdkDropListGroupDisabled", "disabled"]
      },
      exportAs: ["cdkDropListGroup"]
    });
    CdkDropListGroup.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListGroupDisabled']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropListGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkDropListGroup]',
          exportAs: 'cdkDropListGroup'
        }]
      }], function () {
        return [];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListGroupDisabled']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drop-list.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter used to generate unique ids for drop zones.
     * @type {?}
     */


    var _uniqueIdCounter = 0;
    /**
     * Internal compile-time-only representation of a `CdkDropList`.
     * Used to avoid circular import issues between the `CdkDropList` and the `CdkDrag`.
     * \@docs-private
     * @record
     */

    function CdkDropListInternal() {}

    var ɵ0 = undefined;
    /**
     * Container that wraps a set of draggable items.
     * @template T
     */

    var CdkDropList =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} dragDrop
       * @param {?} _changeDetectorRef
       * @param {?=} _dir
       * @param {?=} _group
       * @param {?=} _scrollDispatcher
       * @param {?=} config
       */
      function CdkDropList(element, dragDrop, _changeDetectorRef, _dir, _group, _scrollDispatcher, config) {
        var _this26 = this;

        _classCallCheck(this, CdkDropList);

        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        this._scrollDispatcher = _scrollDispatcher;
        /**
         * Emits when the list has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */

        this.connectedTo = [];
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */

        this.id = "cdk-drop-list-".concat(_uniqueIdCounter++);
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */

        this.enterPredicate =
        /**
        * @return {?}
        */
        function () {
          return true;
        };
        /**
         * Emits when the user drops an item inside the container.
         */


        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */

        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */

        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */

        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Keeps track of the items that are registered with this container. Historically we used to
         * do this with a `ContentChildren` query, however queries don't handle transplanted views very
         * well which means that we can't handle cases like dragging the headers of a `mat-table`
         * correctly. What we do instead is to have the items register themselves with the container
         * and then we sort them based on their position in the DOM.
         */

        this._unsortedItems = new Set();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;

        if (config) {
          this._assignDefaults(config);
        }

        this._dropListRef.enterPredicate =
        /**
        * @param {?} drag
        * @param {?} drop
        * @return {?}
        */
        function (drag, drop) {
          return _this26.enterPredicate(drag.data, drop.data);
        };

        this._setupInputSyncSubscription(this._dropListRef);

        this._handleEvents(this._dropListRef);

        CdkDropList._dropLists.push(this);

        if (_group) {
          _group._items.add(this);
        }
      }
      /**
       * Whether starting a dragging sequence from this container is disabled.
       * @return {?}
       */


      _createClass(CdkDropList, [{
        key: "addItem",

        /**
         * Registers an items with the drop list.
         * @param {?} item
         * @return {?}
         */
        value: function addItem(item) {
          this._unsortedItems.add(item);

          if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
          }
        }
        /**
         * Removes an item from the drop list.
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "removeItem",
        value: function removeItem(item) {
          this._unsortedItems["delete"](item);

          if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
          }
        }
        /**
         * Gets the registered items in the list, sorted by their position in the DOM.
         * @return {?}
         */

      }, {
        key: "getSortedItems",
        value: function getSortedItems() {
          return Array.from(this._unsortedItems).sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            /** @type {?} */
            var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            // tslint:disable-next-line:no-bitwise


            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var index = CdkDropList._dropLists.indexOf(this);

          if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
          }

          if (this._group) {
            this._group._items["delete"](this);
          }

          this._unsortedItems.clear();

          this._dropListRef.dispose();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Starts dragging an item.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @return {?}
         */

      }, {
        key: "start",
        value: function start() {
          this._dropListRef.start();
        }
        /**
         * Drops an item into this container.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @param {?} item Item being dropped into the container.
         * @param {?} currentIndex Index at which the item should be inserted.
         * @param {?} previousContainer Container from which the item got dragged in.
         * @param {?} isPointerOverContainer Whether the user's pointer was over the
         *    container when the item was dropped.
         *
         * @return {?}
         */

      }, {
        key: "drop",
        value: function drop(item, currentIndex, previousContainer, isPointerOverContainer) {
          this._dropListRef.drop(item._dragRef, currentIndex, previousContainer._dropListRef, isPointerOverContainer, {
            x: 0,
            y: 0
          });
        }
        /**
         * Emits an event to indicate that the user moved an item into the container.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @param {?} item Item that was moved into the container.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter(item, pointerX, pointerY) {
          this._dropListRef.enter(item._dragRef, pointerX, pointerY);
        }
        /**
         * Removes an item from the container after it was dragged into another container by the user.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @param {?} item Item that was dragged out.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(item) {
          this._dropListRef.exit(item._dragRef);
        }
        /**
         * Figures out the index of an item in the container.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @param {?} item Item whose index should be determined.
         * @return {?}
         */

      }, {
        key: "getItemIndex",
        value: function getItemIndex(item) {
          return this._dropListRef.getItemIndex(item._dragRef);
        }
        /**
         * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_setupInputSyncSubscription",
        value: function _setupInputSyncSubscription(ref) {
          var _this27 = this;

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return ref.withDirection(value);
            });
          }

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(_this27.connectedTo).map(
            /**
            * @param {?} drop
            * @return {?}
            */
            function (drop) {
              return typeof drop === 'string' ?
              /** @type {?} */
              CdkDropList._dropLists.find(
              /**
              * @param {?} list
              * @return {?}
              */
              function (list) {
                return list.id === drop;
              }) : drop;
            });

            if (_this27._group) {
              _this27._group._items.forEach(
              /**
              * @param {?} drop
              * @return {?}
              */
              function (drop) {
                if (siblings.indexOf(drop) === -1) {
                  siblings.push(drop);
                }
              });
            } // Note that we resolve the scrollable parents here so that we delay the resolution
            // as long as possible, ensuring that the element is in its final place in the DOM.
            // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.


            if (!_this27._scrollableParentsResolved && _this27._scrollDispatcher) {
              /** @type {?} */
              var scrollableParents = _this27._scrollDispatcher.getAncestorScrollContainers(_this27.element).map(
              /**
              * @param {?} scrollable
              * @return {?}
              */
              function (scrollable) {
                return scrollable.getElementRef().nativeElement;
              });

              _this27._dropListRef.withScrollableParents(scrollableParents); // Only do this once since it involves traversing the DOM and the parents
              // shouldn't be able to change without the drop list being destroyed.


              _this27._scrollableParentsResolved = true;
            }

            ref.disabled = _this27.disabled;
            ref.lockAxis = _this27.lockAxis;
            ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this27.sortingDisabled);
            ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this27.autoScrollDisabled);
            ref.connectedTo(siblings.filter(
            /**
            * @param {?} drop
            * @return {?}
            */
            function (drop) {
              return drop && drop !== _this27;
            }).map(
            /**
            * @param {?} list
            * @return {?}
            */
            function (list) {
              return list._dropListRef;
            })).withOrientation(_this27.orientation);
          });
        }
        /**
         * Handles events from the underlying DropListRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_handleEvents",
        value: function _handleEvents(ref) {
          var _this28 = this;

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this28._syncItemsWithRef();

            _this28._changeDetectorRef.markForCheck();
          });
          ref.entered.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.entered.emit({
              container: _this28,
              item: event.item.data,
              currentIndex: event.currentIndex
            });
          });
          ref.exited.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.exited.emit({
              container: _this28,
              item: event.item.data
            });

            _this28._changeDetectorRef.markForCheck();
          });
          ref.sorted.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.sorted.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              container: _this28,
              item: event.item.data
            });
          });
          ref.dropped.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.dropped.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              previousContainer: event.previousContainer.data,
              container: event.container.data,
              item: event.item.data,
              isPointerOverContainer: event.isPointerOverContainer,
              distance: event.distance
            }); // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.


            _this28._changeDetectorRef.markForCheck();
          });
        }
        /**
         * Assigns the default input values based on a provided config object.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_assignDefaults",
        value: function _assignDefaults(config) {
          var lockAxis = config.lockAxis,
              draggingDisabled = config.draggingDisabled,
              sortingDisabled = config.sortingDisabled,
              listAutoScrollDisabled = config.listAutoScrollDisabled,
              listOrientation = config.listOrientation;
          this.disabled = draggingDisabled == null ? false : draggingDisabled;
          this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
          this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
          this.orientation = listOrientation || 'vertical';

          if (lockAxis) {
            this.lockAxis = lockAxis;
          }
        }
        /**
         * Syncs up the registered drag items with underlying drop list ref.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncItemsWithRef",
        value: function _syncItemsWithRef() {
          this._dropListRef.withItems(this.getSortedItems().map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._dragRef;
          }));
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || !!this._group && this._group.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Usually we sync the directive and ref state right before dragging starts, in order to have
          // a single point of failure and to avoid having to use setters for everything. `disabled` is
          // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
          // the user in a disabled state, so we also need to sync it as it's being set.
          this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDropList;
    }();

    CdkDropList.ɵfac = function CdkDropList_Factory(t) {
      return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkDropListGroup, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
    };

    CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDropList,
      selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
      hostAttrs: [1, "cdk-drop-list"],
      hostVars: 7,
      hostBindings: function CdkDropList_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
        }
      },
      inputs: {
        connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
        id: "id",
        enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
        disabled: ["cdkDropListDisabled", "disabled"],
        sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
        autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
        orientation: ["cdkDropListOrientation", "orientation"],
        lockAxis: ["cdkDropListLockAxis", "lockAxis"],
        data: ["cdkDropListData", "data"]
      },
      outputs: {
        dropped: "cdkDropListDropped",
        entered: "cdkDropListEntered",
        exited: "cdkDropListExited",
        sorted: "cdkDropListSorted"
      },
      exportAs: ["cdkDropList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CdkDropListGroup,
        useValue: ɵ0
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }])]
    });
    /**
     * Keeps track of the drop lists that are currently on the page.
     */

    CdkDropList._dropLists = [];
    /** @nocollapse */

    CdkDropList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: DragDrop
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: CdkDropListGroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DRAG_CONFIG]
        }]
      }];
    };

    CdkDropList.propDecorators = {
      connectedTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListConnectedTo']
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListData']
      }],
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListOrientation']
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      lockAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListLockAxis']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListDisabled']
      }],
      sortingDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListSortingDisabled']
      }],
      enterPredicate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListEnterPredicate']
      }],
      autoScrollDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListAutoScrollDisabled']
      }],
      dropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListDropped']
      }],
      entered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListEntered']
      }],
      exited: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListExited']
      }],
      sorted: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListSorted']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkDropList], cdk-drop-list',
          exportAs: 'cdkDropList',
          providers: [// Prevent child drop lists from picking up the same group as their parent.
          {
            provide: CdkDropListGroup,
            useValue: ɵ0
          }, {
            provide: CDK_DROP_LIST,
            useExisting: CdkDropList
          }],
          host: {
            'class': 'cdk-drop-list',
            '[id]': 'id',
            '[class.cdk-drop-list-disabled]': 'disabled',
            '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
            '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: CdkDropListGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }];
      }, {
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListConnectedTo']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enterPredicate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListEnterPredicate']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListDropped']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListExited']
        }],
        sorted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListSorted']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListDisabled']
        }],
        sortingDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListSortingDisabled']
        }],
        autoScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListAutoScrollDisabled']
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListOrientation']
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListLockAxis']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListData']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-drop-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DragDropModule = function DragDropModule() {
      _classCallCheck(this, DragDropModule);
    };

    DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DragDropModule
    });
    DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DragDropModule_Factory(t) {
        return new (t || DragDropModule)();
      },
      providers: [DragDrop],
      imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DragDropModule, {
        declarations: function declarations() {
          return [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
        },
        exports: function exports() {
          return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
          exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
          providers: [DragDrop]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=drag-drop.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
    \******************************************************************************/

  /*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SlideToggleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function () {
      return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function () {
      return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function () {
      return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function () {
      return MatSlideToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function () {
      return MatSlideToggleChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function () {
      return MatSlideToggleModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function () {
      return MatSlideToggleRequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function () {
      return _MatSlideToggleRequiredValidatorModule;
    });
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default `mat-slide-toggle` options that can be overridden.
     * @record
     */


    var _c0 = ["thumbContainer"];
    var _c1 = ["toggleBar"];
    var _c2 = ["input"];

    var _c3 = function _c3() {
      return {
        enterDuration: 150
      };
    };

    var _c4 = ["*"];

    function MatSlideToggleDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-slide-toggle`.
     * @type {?}
     */


    var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
      providedIn: 'root',
      factory:
      /**
      * @return {?}
      */
      function factory() {
        return {
          disableToggleValue: false
        };
      }
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Increasing integer for generating unique ids for slide-toggle components.

    /** @type {?} */

    var nextUniqueId = 0;
    /**
     * \@docs-private
     * @type {?}
     */

    var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlideToggle;
      }),
      multi: true
    };
    /**
     * Change event object emitted by a MatSlideToggle.
     */

    var MatSlideToggleChange =
    /**
     * @param {?} source
     * @param {?} checked
     */
    function MatSlideToggleChange(source, checked) {
      _classCallCheck(this, MatSlideToggleChange);

      this.source = source;
      this.checked = checked;
    };

    if (false) {} // Boilerplate for applying mixins to MatSlideToggle.

    /**
     * \@docs-private
     */


    var MatSlideToggleBase =
    /**
     * @param {?} _elementRef
     */
    function MatSlideToggleBase(_elementRef) {
      _classCallCheck(this, MatSlideToggleBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
    /**
     * Represents a slidable "switch" toggle that can be moved between on and off.
     */


    var MatSlideToggle =
    /*#__PURE__*/
    function (_MatSlideToggleMixinB) {
      _inherits(MatSlideToggle, _MatSlideToggleMixinB);

      var _super = _createSuper(MatSlideToggle);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _changeDetectorRef
       * @param {?} tabIndex
       * @param {?} _ngZone
       * @param {?} defaults
       * @param {?=} _animationMode
       * @param {?=} _dir
       */
      function MatSlideToggle(elementRef, _focusMonitor, _changeDetectorRef, tabIndex,
      /**
       * @deprecated `_ngZone` and `_dir` parameters to be removed.
       * @breaking-change 10.0.0
       */
      _ngZone, defaults, _animationMode, _dir) {
        var _this29;

        _classCallCheck(this, MatSlideToggle);

        _this29 = _super.call(this, elementRef);
        _this29._focusMonitor = _focusMonitor;
        _this29._changeDetectorRef = _changeDetectorRef;
        _this29.defaults = defaults;
        _this29._animationMode = _animationMode;

        _this29._onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        _this29._onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this29._uniqueId = "mat-slide-toggle-".concat(++nextUniqueId);
        _this29._required = false;
        _this29._checked = false;
        /**
         * Name value will be applied to the input element if present.
         */

        _this29.name = null;
        /**
         * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.
         */

        _this29.id = _this29._uniqueId;
        /**
         * Whether the label should appear after or before the slide-toggle. Defaults to 'after'.
         */

        _this29.labelPosition = 'after';
        /**
         * Used to set the aria-label attribute on the underlying input element.
         */

        _this29.ariaLabel = null;
        /**
         * Used to set the aria-labelledby attribute on the underlying input element.
         */

        _this29.ariaLabelledby = null;
        /**
         * An event will be dispatched each time the slide-toggle changes its value.
         */

        _this29.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle input is toggled.
         * This event is always emitted when the user toggles the slide toggle, but this does not mean
         * the slide toggle's value has changed.
         */

        _this29.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle is dragged.
         * This event is always emitted when the user drags the slide toggle to make a change greater
         * than 50%. It does not mean the slide toggle's value is changed. The event is not emitted when
         * the user toggles the slide toggle to change its value.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         */

        _this29.dragChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this29.tabIndex = parseInt(tabIndex) || 0;
        return _this29;
      }
      /**
       * Whether the slide-toggle is required.
       * @return {?}
       */


      _createClass(MatSlideToggle, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this30 = this;

          this._focusMonitor.monitor(this._elementRef, true).subscribe(
          /**
          * @param {?} focusOrigin
          * @return {?}
          */
          function (focusOrigin) {
            // Only forward focus manually when it was received programmatically or through the
            // keyboard. We should not do this for mouse/touch focus for two reasons:
            // 1. It can prevent clicks from landing in Chrome (see #18269).
            // 2. They're already handled by the wrapping `label` element.
            if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
              _this30._inputElement.nativeElement.focus();
            } else if (!focusOrigin) {
              // When a focused element becomes disabled, the browser *immediately* fires a blur event.
              // Angular does not expect events to be raised during change detection, so any state
              // change (such as a form control's 'ng-touched') will cause a changed-after-checked
              // error. See https://github.com/angular/angular/issues/17793. To work around this,
              // we defer telling the form control it has been touched until the next tick.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this30._onTouched();
              });
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Method being called whenever the underlying input emits a change event.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onChangeEvent",
        value: function _onChangeEvent(event) {
          // We always have to stop propagation on the change event.
          // Otherwise the change event, from the input element, will bubble up and
          // emit its event object to the component's `change` output.
          event.stopPropagation();
          this.toggleChange.emit(); // When the slide toggle's config disables toggle change event by setting
          // `disableToggleValue: true`, the slide toggle's value does not change, and the
          // checked state of the underlying input needs to be changed back.

          if (this.defaults.disableToggleValue) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
          } // Sync the value from the underlying input element with the component instance.


          this.checked = this._inputElement.nativeElement.checked; // Emit our custom change event only if the underlying input emitted one. This ensures that
          // there is no change event, when the checked state changes programmatically.

          this._emitChangeEvent();
        }
        /**
         * Method being called whenever the slide-toggle has been clicked.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onInputClick",
        value: function _onInputClick(event) {
          // We have to stop propagation for click events on the visual hidden input element.
          // By default, when a user clicks on a label element, a generated click event will be
          // dispatched on the associated input element. Since we are using a label element as our
          // root container, the click event on the `slide-toggle` will be executed twice.
          // The real click event will bubble up, and the generated click event also tries to bubble up.
          // This will lead to multiple click events.
          // Preventing bubbling for the second event will solve that issue.
          event.stopPropagation();
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.checked = !!value;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * Implemented as a part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Focuses the slide-toggle.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
        }
        /**
         * Toggles the checked state of the slide-toggle.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.checked = !this.checked;

          this._onChange(this.checked);
        }
        /**
         * Emits a change event on the `change` output. Also notifies the FormControl about the change.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          this._onChange(this.checked);

          this.change.emit(new MatSlideToggleChange(this, this.checked));
        }
        /**
         * Method being called whenever the label text changes.
         * @return {?}
         */

      }, {
        key: "_onLabelTextChange",
        value: function _onLabelTextChange() {
          // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
          // slide-toggle component will be only marked for check, but no actual change detection runs
          // automatically. Instead of going back into the zone in order to trigger a change detection
          // which causes *all* components to be checked (if explicitly marked or not using OnPush),
          // we only trigger an explicit change detection for the slide-toggle view and its children.
          this._changeDetectorRef.detectChanges();
        }
      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the slide-toggle element is checked or not.
         * @return {?}
         */

      }, {
        key: "checked",
        get: function get() {
          return this._checked;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Returns the unique id for the visual hidden input.
         * @return {?}
         */

      }, {
        key: "inputId",
        get: function get() {
          return "".concat(this.id || this._uniqueId, "-input");
        }
      }]);

      return MatSlideToggle;
    }(_MatSlideToggleMixinBase);

    MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) {
      return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8));
    };

    MatSlideToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatSlideToggle,
      selectors: [["mat-slide-toggle"]],
      viewQuery: function MatSlideToggle_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
        }
      },
      hostAttrs: [1, "mat-slide-toggle"],
      hostVars: 12,
      hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : 0 - 1)("aria-label", null)("aria-labelledby", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        color: "color",
        tabIndex: "tabIndex",
        name: "name",
        id: "id",
        labelPosition: "labelPosition",
        ariaLabel: ["aria-label", "ariaLabel"],
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
        required: "required",
        checked: "checked"
      },
      outputs: {
        change: "change",
        toggleChange: "toggleChange",
        dragChange: "dragChange"
      },
      exportAs: ["matSlideToggle"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c4,
      decls: 16,
      vars: 18,
      consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]],
      template: function MatSlideToggle_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) {
            return ctx._onChangeEvent($event);
          })("click", function MatSlideToggle_Template_input_click_4_listener($event) {
            return ctx._onInputClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() {
            return ctx._onLabelTextChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r83.textContent || !_r83.textContent.trim());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", _r79)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
      styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatSlideToggle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    MatSlideToggle.propDecorators = {
      _thumbEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['thumbContainer']
      }],
      _thumbBarEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['toggleBar']
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      labelPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['aria-labelledby']
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      checked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      toggleChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _inputElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['input']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-slide-toggle',
          exportAs: 'matSlideToggle',
          host: {
            'class': 'mat-slide-toggle',
            '[id]': 'id',
            // Needs to be `-1` so it can still receive programmatic focus.
            '[attr.tabindex]': 'disabled ? null : -1',
            '[attr.aria-label]': 'null',
            '[attr.aria-labelledby]': 'null',
            '[class.mat-checked]': 'checked',
            '[class.mat-disabled]': 'disabled',
            '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
          providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
          inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-labelledby']
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        toggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _thumbEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['thumbContainer']
        }],
        _thumbBarEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['toggleBar']
        }],
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-required-validator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlideToggleRequiredValidator;
      }),
      multi: true
    };
    /**
     * Validator for Material slide-toggle components with the required attribute in a
     * template-driven form. The default validator for required form controls asserts
     * that the control value is not undefined but that is not appropriate for a slide-toggle
     * where the value is always defined.
     *
     * Required slide-toggle form controls are valid when checked.
     */

    var MatSlideToggleRequiredValidator =
    /*#__PURE__*/
    function (_angular_forms__WEBPA) {
      _inherits(MatSlideToggleRequiredValidator, _angular_forms__WEBPA);

      var _super2 = _createSuper(MatSlideToggleRequiredValidator);

      function MatSlideToggleRequiredValidator() {
        _classCallCheck(this, MatSlideToggleRequiredValidator);

        return _super2.apply(this, arguments);
      }

      return MatSlideToggleRequiredValidator;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"]);

    MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) {
      return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator);
    };

    MatSlideToggleRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatSlideToggleRequiredValidator,
      selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatSlideToggleRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
          providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This module is used by both original and MDC-based slide-toggle implementations.
     */
    // tslint:disable-next-line:class-name


    var _MatSlideToggleRequiredValidatorModule = function _MatSlideToggleRequiredValidatorModule() {
      _classCallCheck(this, _MatSlideToggleRequiredValidatorModule);
    };

    _MatSlideToggleRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: _MatSlideToggleRequiredValidatorModule
    });
    _MatSlideToggleRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) {
        return new (t || _MatSlideToggleRequiredValidatorModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, {
        declarations: [MatSlideToggleRequiredValidator],
        exports: [MatSlideToggleRequiredValidator]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [MatSlideToggleRequiredValidator],
          declarations: [MatSlideToggleRequiredValidator]
        }]
      }], null, null);
    })();

    var MatSlideToggleModule = function MatSlideToggleModule() {
      _classCallCheck(this, MatSlideToggleModule);
    };

    MatSlideToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatSlideToggleModule
    });
    MatSlideToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatSlideToggleModule_Factory(t) {
        return new (t || MatSlideToggleModule)();
      },
      imports: [[_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSlideToggleModule, {
        declarations: function declarations() {
          return [MatSlideToggle];
        },
        imports: function imports() {
          return [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
        },
        exports: function exports() {
          return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
          exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatSlideToggle]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=slide-toggle.js.map

    /***/

  },

  /***/
  "./src/app/features/carrousel/carrousel-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/features/carrousel/carrousel-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: CarrouselRoutingModule */

  /***/
  function srcAppFeaturesCarrouselCarrouselRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrouselRoutingModule", function () {
      return CarrouselRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _carrousel_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./carrousel.routes */
    "./src/app/features/carrousel/carrousel.routes.ts");

    var CarrouselRoutingModule = function CarrouselRoutingModule() {
      _classCallCheck(this, CarrouselRoutingModule);
    };

    CarrouselRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CarrouselRoutingModule
    });
    CarrouselRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CarrouselRoutingModule_Factory(t) {
        return new (t || CarrouselRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_carrousel_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarrouselRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarrouselRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_carrousel_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/carrousel.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/features/carrousel/carrousel.module.ts ***!
    \********************************************************/

  /*! exports provided: CarrouselModule */

  /***/
  function srcAppFeaturesCarrouselCarrouselModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrouselModule", function () {
      return CarrouselModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./containers */
    "./src/app/features/carrousel/containers/index.ts");
    /* harmony import */


    var _carrousel_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./carrousel-routing.module */
    "./src/app/features/carrousel/carrousel-routing.module.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/features/carrousel/material.module.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services */
    "./src/app/features/carrousel/services/index.ts");
    /* harmony import */


    var _mocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./mocks */
    "./src/app/features/carrousel/mocks/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store/reducers */
    "./src/app/features/carrousel/store/reducers/index.ts");
    /* harmony import */


    var _store_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./store/effects */
    "./src/app/features/carrousel/store/effects/index.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components */
    "./src/app/features/carrousel/components/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _pipes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pipes */
    "./src/app/features/carrousel/pipes/index.ts");

    var CarrouselModule = function CarrouselModule() {
      _classCallCheck(this, CarrouselModule);
    };

    CarrouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CarrouselModule
    });
    CarrouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CarrouselModule_Factory(t) {
        return new (t || CarrouselModule)();
      },
      providers: [_services__WEBPACK_IMPORTED_MODULE_7__["CarrouselService"], _mocks__WEBPACK_IMPORTED_MODULE_8__["fakeBackendProvider"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["MediaMatcher"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _carrousel_routing_module__WEBPACK_IMPORTED_MODULE_4__["CarrouselRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"], //SharedModule,
      _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({}), _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forFeature("elements", _store_reducers__WEBPACK_IMPORTED_MODULE_11__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot(), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature(_store_effects__WEBPACK_IMPORTED_MODULE_12__["effects"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarrouselModule, {
        declarations: [_containers__WEBPACK_IMPORTED_MODULE_3__["SlideListProfileComponent"], _containers__WEBPACK_IMPORTED_MODULE_3__["TemplateComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["SelectComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["SlideDragAndDropComponent"], _pipes__WEBPACK_IMPORTED_MODULE_16__["ProfileSlidesPipe"], _containers__WEBPACK_IMPORTED_MODULE_3__["AddSlideComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["FormSlideComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["SelectMultipleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _carrousel_routing_module__WEBPACK_IMPORTED_MODULE_4__["CarrouselRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarrouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_containers__WEBPACK_IMPORTED_MODULE_3__["SlideListProfileComponent"], _containers__WEBPACK_IMPORTED_MODULE_3__["TemplateComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["SelectComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["SlideDragAndDropComponent"], _pipes__WEBPACK_IMPORTED_MODULE_16__["ProfileSlidesPipe"], _containers__WEBPACK_IMPORTED_MODULE_3__["AddSlideComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["FormSlideComponent"], _components__WEBPACK_IMPORTED_MODULE_13__["SelectMultipleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _carrousel_routing_module__WEBPACK_IMPORTED_MODULE_4__["CarrouselRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"], //SharedModule,
          _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({}), _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forFeature("elements", _store_reducers__WEBPACK_IMPORTED_MODULE_11__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot(), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature(_store_effects__WEBPACK_IMPORTED_MODULE_12__["effects"])],
          providers: [_services__WEBPACK_IMPORTED_MODULE_7__["CarrouselService"], _mocks__WEBPACK_IMPORTED_MODULE_8__["fakeBackendProvider"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["MediaMatcher"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/carrousel.routes.ts":
  /*!********************************************************!*\
    !*** ./src/app/features/carrousel/carrousel.routes.ts ***!
    \********************************************************/

  /*! exports provided: routes */

  /***/
  function srcAppFeaturesCarrouselCarrouselRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./containers */
    "./src/app/features/carrousel/containers/index.ts");

    var routes = [{
      path: "",
      component: _containers__WEBPACK_IMPORTED_MODULE_0__["TemplateComponent"],
      children: [{
        path: "",
        component: _containers__WEBPACK_IMPORTED_MODULE_0__["SlideListProfileComponent"]
      }, {
        path: "add-slide",
        component: _containers__WEBPACK_IMPORTED_MODULE_0__["AddSlideComponent"]
      }]
    }];
    /***/
  },

  /***/
  "./src/app/features/carrousel/components/form-slide/form-slide.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/features/carrousel/components/form-slide/form-slide.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: FormSlideComponent */

  /***/
  function srcAppFeaturesCarrouselComponentsFormSlideFormSlideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormSlideComponent", function () {
      return FormSlideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _select_multiple_select_multiple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../select-multiple/select-multiple.component */
    "./src/app/features/carrousel/components/select-multiple/select-multiple.component.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! mat-progress-buttons */
    "./node_modules/mat-progress-buttons/__ivy_ngcc__/esm2015/mat-progress-buttons.js");

    function FormSlideComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add your slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormSlideComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update your slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormSlideComponent_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r117.titleAlert, " and must not exceed 100 characters");
      }
    }

    function FormSlideComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r118.titleAlert, " and must not exceed 300 characters ");
      }
    }

    function FormSlideComponent_mat_error_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r119.titleAlert, " ");
      }
    }

    function FormSlideComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r120.titleAlert, " ");
      }
    }

    var FormSlideComponent =
    /*#__PURE__*/
    function () {
      function FormSlideComponent(formBuilder) {
        _classCallCheck(this, FormSlideComponent);

        this.formBuilder = formBuilder;
        this.submitted = false;
        this.etatSlide = "slide disabled";
        this.action = "";
        this.loadingAddSlide = false;
        this.addSlide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = null;
        this.barButtonOptions = {
          active: this.loadingAddSlide,
          text: this.action,
          buttonColor: "primary",
          barColor: "primary",
          raised: true,
          stroked: false,
          mode: "indeterminate",
          value: 0,
          disabled: false,
          fullWidth: false,
          buttonIcon: {
            fontIcon: "save"
          }
        };
        this.titleAlert = "This field is required";
      }

      _createClass(FormSlideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.barButtonOptions.active = this.loadingAddSlide;
          this.barButtonOptions.text = this.action;

          if (this.submitted == true) {
            if (this.action == "add slide") {
              this.barButtonOptions.text = "Saving slide ...";
            } else {
              this.barButtonOptions.text = "Updating slide ...";
            }
          }

          if (this.loadingAddSlide == false) {
            this.barButtonOptions.text = this.action;
          }
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.registerSlideForm = this.formBuilder.group({
            title: [this.slide.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            text: [this.slide.text, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)]],
            profiles: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: [this.slide.image, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            link: [this.slide.link, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            visible: [this.slide.visible]
          });
        }
      }, {
        key: "OnOf",
        value: function OnOf() {
          if (this.registerSlideForm.value["visible"] == false) {
            this.etatSlide = "slide disabled";
          }

          if (this.registerSlideForm.value["visible"] == true) {
            this.etatSlide = "slide activated";
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.slideForm = {
            id: this.slide.id,
            title: this.registerSlideForm.value["title"],
            text: this.registerSlideForm.value["text"],
            image: this.registerSlideForm.value["image"],
            link: this.registerSlideForm.value["link"],
            visible: this.registerSlideForm.value["visible"]
          };
          this.profilesSelectedForm = this.registerSlideForm.value["profiles"];
          this.addSlide.emit({
            slide: this.slideForm,
            profiles: this.profilesSelectedForm
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerSlideForm.controls;
        }
      }]);

      return FormSlideComponent;
    }();

    FormSlideComponent.ɵfac = function FormSlideComponent_Factory(t) {
      return new (t || FormSlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    FormSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormSlideComponent,
      selectors: [["app-form-slide"]],
      inputs: {
        action: "action",
        profiles: "profiles",
        profilesSelected: "profilesSelected",
        loadingAddSlide: "loadingAddSlide",
        slide: "slide"
      },
      outputs: {
        addSlide: "addSlide"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 29,
      vars: 18,
      consts: [[1, "form-element"], ["class", "fill-remaining-space", 4, "ngIf"], [1, "form", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-element"], ["matInput", "", "type", "text", "placeholder", "Title", "formControlName", "title"], [4, "ngIf"], ["matInput", "", "placeholder", "description of slide", "formControlName", "text", 2, "min-height", "9em"], [3, "label", "profiles", "valid", "touched", "registerForm", "control", "titleAlert"], ["matInput", "", "type", "text", "placeholder", "Link image", "formControlName", "image"], ["matInput", "", "type", "text", "placeholder", "Link slide", "formControlName", "link"], ["formControlName", "visible", 1, "example-margin", 3, "color", "change"], [3, "options", "disabled"], [1, "fill-remaining-space"]],
      template: function FormSlideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormSlideComponent_span_1_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormSlideComponent_span_2_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormSlideComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormSlideComponent_mat_error_7_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "give more details about the film");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormSlideComponent_mat_error_12_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-select-multiple", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Link of image slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FormSlideComponent_mat_error_18_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Link of content slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FormSlideComponent_mat_error_23_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-slide-toggle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormSlideComponent_Template_mat_slide_toggle_change_25_listener() {
            return ctx.OnOf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-bar-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "add slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "update slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerSlideForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f.title.valid && ctx.f.title.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f.text.valid && ctx.f.text.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "profiles")("profiles", ctx.profiles)("valid", ctx.f.profiles.valid)("touched", ctx.f.profiles.touched)("registerForm", ctx.registerSlideForm)("control", "profiles")("titleAlert", ctx.titleAlert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f.image.valid && ctx.f.image.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f.link.valid && ctx.f.link.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.etatSlide, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.barButtonOptions)("disabled", !ctx.registerSlideForm.valid);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _select_multiple_select_multiple_component__WEBPACK_IMPORTED_MODULE_7__["SelectMultipleComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggle"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_9__["MatBarButtonComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n  \n  flex: 1 1 auto;\n}\n\n.form-element[_ngcontent-%COMP%] {\n  padding: 0px;\n  width: 75%;\n}\n\n\n\ninput.mat-input-element[_ngcontent-%COMP%] {\n  color: rgb(10, 3, 17);\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2Fycm91c2VsL2NvbXBvbmVudHMvZm9ybS1zbGlkZS9mb3JtLXNsaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTt1REFDcUQ7RUFDckQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NhcnJvdXNlbC9jb21wb25lbnRzL2Zvcm0tc2xpZGUvZm9ybS1zbGlkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5mb3JtLWVsZW1lbnQge1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi8qIEZvbnQgY29sb3IgKi9cbmlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6IHJnYigxMCwgMywgMTcpO1xufVxuXG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDEwcHg7XG59XG4iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-form-slide",
          templateUrl: "./form-slide.component.html",
          styleUrls: ["./form-slide.component.css"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        action: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        profiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        profilesSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loadingAddSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        slide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/components/index.ts":
  /*!********************************************************!*\
    !*** ./src/app/features/carrousel/components/index.ts ***!
    \********************************************************/

  /*! exports provided: SelectComponent, SlideDragAndDropComponent, FormSlideComponent, SelectMultipleComponent */

  /***/
  function srcAppFeaturesCarrouselComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _select_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./select/select.component */
    "./src/app/features/carrousel/components/select/select.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return _select_select_component__WEBPACK_IMPORTED_MODULE_0__["SelectComponent"];
    });
    /* harmony import */


    var _slide_drag_and_drop_slide_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./slide-drag-and-drop/slide-drag-and-drop.component */
    "./src/app/features/carrousel/components/slide-drag-and-drop/slide-drag-and-drop.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SlideDragAndDropComponent", function () {
      return _slide_drag_and_drop_slide_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_1__["SlideDragAndDropComponent"];
    });
    /* harmony import */


    var _form_slide_form_slide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./form-slide/form-slide.component */
    "./src/app/features/carrousel/components/form-slide/form-slide.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormSlideComponent", function () {
      return _form_slide_form_slide_component__WEBPACK_IMPORTED_MODULE_2__["FormSlideComponent"];
    });
    /* harmony import */


    var _select_multiple_select_multiple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select-multiple/select-multiple.component */
    "./src/app/features/carrousel/components/select-multiple/select-multiple.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectMultipleComponent", function () {
      return _select_multiple_select_multiple_component__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleComponent"];
    });
    /***/

  },

  /***/
  "./src/app/features/carrousel/components/select-multiple/select-multiple.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/features/carrousel/components/select-multiple/select-multiple.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: SelectMultipleComponent */

  /***/
  function srcAppFeaturesCarrouselComponentsSelectMultipleSelectMultipleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectMultipleComponent", function () {
      return SelectMultipleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function SelectMultipleComponent_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var profile_r123 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", profile_r123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r123.name);
      }
    }

    function SelectMultipleComponent_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r122.titleAlert);
      }
    }

    var SelectMultipleComponent =
    /*#__PURE__*/
    function () {
      function SelectMultipleComponent() {
        _classCallCheck(this, SelectMultipleComponent);
      }

      _createClass(SelectMultipleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectMultipleComponent;
    }();

    SelectMultipleComponent.ɵfac = function SelectMultipleComponent_Factory(t) {
      return new (t || SelectMultipleComponent)();
    };

    SelectMultipleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectMultipleComponent,
      selectors: [["app-select-multiple"]],
      inputs: {
        label: "label",
        profiles: "profiles",
        valid: "valid",
        touched: "touched",
        registerForm: "registerForm",
        control: "control",
        titleAlert: "titleAlert"
      },
      decls: 6,
      vars: 5,
      consts: [["appearance", "outline", 1, "form-element", 3, "formGroup"], ["multiple", "", 3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"]],
      template: function SelectMultipleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectMultipleComponent_mat_option_4_Template, 2, 2, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectMultipleComponent_mat_error_5_Template, 2, 1, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.control);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.valid && ctx.touched);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatError"]],
      styles: [".form-element[_ngcontent-%COMP%] {\n  padding: 0px;\n  width: 75%;\n}\n\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgb(79, 10, 206);\n  border: 8px;\n}\n\n\n\ninput.mat-input-element[_ngcontent-%COMP%] {\n  color: rgb(10, 3, 17);\n  font: bold;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2Fycm91c2VsL2NvbXBvbmVudHMvc2VsZWN0LW11bHRpcGxlL3NlbGVjdC1tdWx0aXBsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBQ0EsZUFBZTs7QUFDZjtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvY2Fycm91c2VsL2NvbXBvbmVudHMvc2VsZWN0LW11bHRpcGxlL3NlbGVjdC1tdWx0aXBsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZWxlbWVudCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiByZ2IoNzksIDEwLCAyMDYpO1xuICBib3JkZXI6IDhweDtcbn1cbi8qIEZvbnQgY29sb3IgKi9cbmlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6IHJnYigxMCwgMywgMTcpO1xuICBmb250OiBib2xkO1xufVxuLmV4YW1wbGUtYWRkaXRpb25hbC1zZWxlY3Rpb24ge1xuICBvcGFjaXR5OiAwLjc1O1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectMultipleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-select-multiple",
          templateUrl: "./select-multiple.component.html",
          styleUrls: ["./select-multiple.component.css"]
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        profiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        touched: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        registerForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleAlert: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/components/select/select.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/features/carrousel/components/select/select.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SelectComponent */

  /***/
  function srcAppFeaturesCarrouselComponentsSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return SelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    function SelectComponent_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var profile_r109 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", profile_r109.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", profile_r109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r109.name);
      }
    }

    function SelectComponent_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You must make a selection");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SelectComponent =
    /*#__PURE__*/
    function () {
      function SelectComponent() {
        _classCallCheck(this, SelectComponent);

        this.selectedSlidesByProfile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.profileSelected, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.profileSelected, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        }
      }]);

      return SelectComponent;
    }();

    SelectComponent.ɵfac = function SelectComponent_Factory(t) {
      return new (t || SelectComponent)();
    };

    SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectComponent,
      selectors: [["app-select"]],
      inputs: {
        profiles: "profiles",
        profileSelected: "profileSelected"
      },
      outputs: {
        selectedSlidesByProfile: "selectedSlidesByProfile"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 6,
      vars: 3,
      consts: [["appearance", "fill"], ["required", "", 3, "formControl", "selectionChange"], [3, "value", "matTooltip", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value", "matTooltip"]],
      template: function SelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SelectComponent_Template_mat_select_selectionChange_3_listener($event) {
            return ctx.selectedSlidesByProfile.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_mat_option_4_Template, 2, 3, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectComponent_mat_error_5_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected.hasError("required"));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NhcnJvdXNlbC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LmNzcyJ9 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-select",
          templateUrl: "./select.component.html",
          styleUrls: ["./select.component.css"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        profiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        profileSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedSlidesByProfile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/components/slide-drag-and-drop/slide-drag-and-drop.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/features/carrousel/components/slide-drag-and-drop/slide-drag-and-drop.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: SlideDragAndDropComponent */

  /***/
  function srcAppFeaturesCarrouselComponentsSlideDragAndDropSlideDragAndDropComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideDragAndDropComponent", function () {
      return SlideDragAndDropComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function SlideDragAndDropComponent_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "visible to the internet user ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SlideDragAndDropComponent_div_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility_off");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "not visible to the Internet user ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SlideDragAndDropComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "reorder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SlideDragAndDropComponent_div_1_div_9_Template, 4, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SlideDragAndDropComponent_div_1_div_10_Template, 4, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r111 = ctx.$implicit;
        var i_r112 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r112 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r111.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r111.visible == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r111.visible == false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r111.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var SlideDragAndDropComponent =
    /*#__PURE__*/
    function () {
      function SlideDragAndDropComponent() {
        _classCallCheck(this, SlideDragAndDropComponent);

        this.updateProfileAfterDragandDropSlides = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SlideDragAndDropComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.profileSelected);
        }
      }, {
        key: "drop",
        value: function drop(event) {
          this.slides = _toConsumableArray(this.slides);
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.slides, event.previousIndex, event.currentIndex);
          this.updateProfileAfterDragandDropSlides.emit({
            profile: this.profileSelected,
            slides: this.slides
          });
        }
      }]);

      return SlideDragAndDropComponent;
    }();

    SlideDragAndDropComponent.ɵfac = function SlideDragAndDropComponent_Factory(t) {
      return new (t || SlideDragAndDropComponent)();
    };

    SlideDragAndDropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlideDragAndDropComponent,
      selectors: [["app-slide-drag-and-drop"]],
      inputs: {
        i: "i",
        slides: "slides",
        profileSelected: "profileSelected",
        profiles: "profiles"
      },
      outputs: {
        updateProfileAfterDragandDropSlides: "updateProfileAfterDragandDropSlides"
      },
      decls: 2,
      vars: 1,
      consts: [["cdkDropList", "", 1, "col-md-12", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"], [1, "drag-index"], [1, "w-10", "drag-icon", "cursor"], ["matTooltip", "drag", "cdkDragHandle", "", 1, "material-icons"], [1, "w-100", "drag-content"], ["class", "w-100 slide-on", 4, "ngIf"], ["class", "w-100 slide-off", 4, "ngIf"], ["width", "200", "height", "100", "alt", "image slide", 1, "img-responsive", 3, "src"], [1, "w-100", "slide-on"], [1, "w-100", "slide-off"]],
      template: function SlideDragAndDropComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SlideDragAndDropComponent_Template_div_cdkDropListDropped_0_listener($event) {
            return ctx.drop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SlideDragAndDropComponent_div_1_Template, 13, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragHandle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: [".cursor[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 5px 3px 5px 3px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  box-sizing: border-box;\n  font-size: 14px;\n  margin-bottom: 10px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  box-sizing: border-box;\n  background: white;\n  cursor: pointer;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px black, 0 8px 10px 1px black, 0 3px 14px 2px black;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 350ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.w-10[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.drag-icon[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: #fff;\n  text-align: center;\n  padding: 8px 4px 8px 0px;\n}\n\n.drag-content[_ngcontent-%COMP%] {\n  padding: 10px 0px 0px 10px;\n}\n\n.drag-index[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  padding: 15px;\n}\n\n.col-md-4[_ngcontent-%COMP%] {\n  margin-left: 400px;\n  max-height: 80px;\n}\n\n.slide-on[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.slide-off[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2Fycm91c2VsL2NvbXBvbmVudHMvc2xpZGUtZHJhZy1hbmQtZHJvcC9zbGlkZS1kcmFnLWFuZC1kcm9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NhcnJvdXNlbC9jb21wb25lbnRzL3NsaWRlLWRyYWctYW5kLWRyb3Avc2xpZGUtZHJhZy1hbmQtZHJvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnNvciB7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgcGFkZGluZzogNXB4IDNweCA1cHggM3B4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IGJsYWNrLCAwIDhweCAxMHB4IDFweCBibGFjaywgMCAzcHggMTRweCAycHggYmxhY2s7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi53LTEwIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLnctMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZHJhZy1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDRweCA4cHggMHB4O1xufVxuXG4uZHJhZy1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XG59XG5cbi5kcmFnLWluZGV4IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uY29sLW1kLTQge1xuICBtYXJnaW4tbGVmdDogNDAwcHg7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG59XG5cbi5zbGlkZS1vbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnNsaWRlLW9mZiB7XG4gIGNvbG9yOiByZWQ7XG59XG4iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideDragAndDropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-slide-drag-and-drop",
          templateUrl: "./slide-drag-and-drop.component.html",
          styleUrls: ["./slide-drag-and-drop.component.css"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        i: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        profileSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        profiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        updateProfileAfterDragandDropSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/containers/add-slide/add-slide.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/features/carrousel/containers/add-slide/add-slide.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AddSlideComponent */

  /***/
  function srcAppFeaturesCarrouselContainersAddSlideAddSlideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSlideComponent", function () {
      return AddSlideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/actions */
    "./src/app/features/carrousel/store/actions/index.ts");
    /* harmony import */


    var _store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/selectors */
    "./src/app/features/carrousel/store/selectors/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services */
    "./src/app/features/carrousel/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_form_slide_form_slide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/form-slide/form-slide.component */
    "./src/app/features/carrousel/components/form-slide/form-slide.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function AddSlideComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form-slide", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addSlide", function AddSlideComponent_ng_container_2_Template_app_form_slide_addSlide_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r105.OnAddSlide($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profiles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r102.profiles$))("profilesSelected", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r102.profilesSelected$))("slide", ctx_r102.slide)("action", "add slide")("loadingAddSlide", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx_r102.loadingAddSlide$));
      }
    }

    function AddSlideComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AddSlideComponent =
    /*#__PURE__*/
    function () {
      function AddSlideComponent(store, carrouselService) {
        _classCallCheck(this, AddSlideComponent);

        this.store = store;
        this.carrouselService = carrouselService;
        this.slide = {
          id: undefined,
          title: "",
          text: "",
          image: "",
          link: "",
          visible: false
        };
        this.carrouselService.getProfilesAndSlidesAfterRefreshPage();
      }

      _createClass(AddSlideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadingProfiles$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsProfilesLoading"]);
          this.loadingSlides$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsSlidesLoading"]);
          this.profiles$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["getAllProfiles"]);
          this.loadingAddSlide$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoadingActionSlide"]);
          this.profilesSelected$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["getProfilesSelected"]);
        }
      }, {
        key: "OnAddSlide",
        value: function OnAddSlide(data) {
          var idProfiles = data.profiles.map(function (profile) {
            return profile.id;
          }).join();
          this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_SLIDE_AND_UPDATE_PROFILE"]({
            slide: data.slide,
            idProfiles: idProfiles
          }));
        }
      }]);

      return AddSlideComponent;
    }();

    AddSlideComponent.ɵfac = function AddSlideComponent_Factory(t) {
      return new (t || AddSlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["CarrouselService"]));
    };

    AddSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddSlideComponent,
      selectors: [["app-add-slide"]],
      decls: 8,
      vars: 6,
      consts: [[1, "row"], [1, "col-md-offset-1"], [4, "ngIf", "ngIfElse"], ["loader", ""], [3, "profiles", "profilesSelected", "slide", "action", "loadingAddSlide", "addSlide"], [1, "col-md-2", "col-centered"], ["color", "primary", "diameter", "80"]],
      template: function AddSlideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddSlideComponent_ng_container_2_Template, 5, 11, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddSlideComponent_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.loadingProfiles$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.loadingSlides$))("ngIfElse", _r103);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_form_slide_form_slide_component__WEBPACK_IMPORTED_MODULE_6__["FormSlideComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".col-centered[_ngcontent-%COMP%] {\n  float: none;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2Fycm91c2VsL2NvbnRhaW5lcnMvYWRkLXNsaWRlL2FkZC1zbGlkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9jYXJyb3VzZWwvY29udGFpbmVycy9hZGQtc2xpZGUvYWRkLXNsaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLWNlbnRlcmVkIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-add-slide",
          templateUrl: "./add-slide.component.html",
          styleUrls: ["./add-slide.component.css"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["CarrouselService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/containers/index.ts":
  /*!********************************************************!*\
    !*** ./src/app/features/carrousel/containers/index.ts ***!
    \********************************************************/

  /*! exports provided: SlideListProfileComponent, TemplateComponent, AddSlideComponent */

  /***/
  function srcAppFeaturesCarrouselContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _slide_list_profile_slide_list_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./slide-list-profile/slide-list-profile.component */
    "./src/app/features/carrousel/containers/slide-list-profile/slide-list-profile.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SlideListProfileComponent", function () {
      return _slide_list_profile_slide_list_profile_component__WEBPACK_IMPORTED_MODULE_0__["SlideListProfileComponent"];
    });
    /* harmony import */


    var _template_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./template/template.component */
    "./src/app/features/carrousel/containers/template/template.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TemplateComponent", function () {
      return _template_template_component__WEBPACK_IMPORTED_MODULE_1__["TemplateComponent"];
    });
    /* harmony import */


    var _add_slide_add_slide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add-slide/add-slide.component */
    "./src/app/features/carrousel/containers/add-slide/add-slide.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddSlideComponent", function () {
      return _add_slide_add_slide_component__WEBPACK_IMPORTED_MODULE_2__["AddSlideComponent"];
    });
    /***/

  },

  /***/
  "./src/app/features/carrousel/containers/slide-list-profile/slide-list-profile.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/features/carrousel/containers/slide-list-profile/slide-list-profile.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: SlideListProfileComponent */

  /***/
  function srcAppFeaturesCarrouselContainersSlideListProfileSlideListProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideListProfileComponent", function () {
      return SlideListProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/selectors */
    "./src/app/features/carrousel/store/selectors/index.ts");
    /* harmony import */


    var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/actions */
    "./src/app/features/carrousel/store/actions/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.service */
    "./src/app/features/shared/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/select/select.component */
    "./src/app/features/carrousel/components/select/select.component.ts");
    /* harmony import */


    var _components_slide_drag_and_drop_slide_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/slide-drag-and-drop/slide-drag-and-drop.component */
    "./src/app/features/carrousel/components/slide-drag-and-drop/slide-drag-and-drop.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function SlideListProfileComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-select", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedSlidesByProfile", function SlideListProfileComponent_ng_container_2_Template_app_select_selectedSlidesByProfile_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.onSelectedSlidesByProfile($event.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profiles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r85.profiles$))("profileSelected", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r85.profileSelected$));
      }
    }

    function SlideListProfileComponent_div_4_ng_container_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose Profile please !");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SlideListProfileComponent_div_4_ng_container_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Click ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "reorder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " for drag your Slide. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SlideListProfileComponent_div_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-slide-drag-and-drop", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateProfileAfterDragandDropSlides", function SlideListProfileComponent_div_4_ng_container_1_Template_app_slide_drag_and_drop_updateProfileAfterDragandDropSlides_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r97.onUpdateProfileAfterDragandDropSlides($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SlideListProfileComponent_div_4_ng_container_1_div_4_Template, 3, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SlideListProfileComponent_div_4_ng_container_1_div_6_Template, 5, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var slides_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", slides_r93)("profileSelected", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r94.profileSelected$))("profiles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r94.profiles$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, ctx_r94.profileSelected$).id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (slides_r93 == null ? null : slides_r93.length) > 1);
      }
    }

    function SlideListProfileComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SlideListProfileComponent_div_4_ng_container_1_Template, 7, 11, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r86.isLoadingSlides$))("ngIfElse", _r89);
      }
    }

    function SlideListProfileComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SlideListProfileComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SlideListProfileComponent =
    /*#__PURE__*/
    function () {
      function SlideListProfileComponent(store, shared) {
        _classCallCheck(this, SlideListProfileComponent);

        this.store = store;
        this.shared = shared;
      }

      _createClass(SlideListProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.shared.test);
          this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILES"]());
          this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["GET_SLIDES"]());
          this.profiles$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getAllProfiles"]);
          this.slides$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getSlidesByProfile"]);
          this.isLoadingProfiles$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsProfilesLoading"]);
          this.isLoadingSlides$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsSlidesLoading"]);
          this.profileSelected$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getProfileSelected"]);
          this.profileSelected$.subscribe(function (data) {
            return console.log(data);
          });
          this.profiles$.subscribe(function (data) {
            return console.log(data);
          });
          this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getProfilesSelected"]).subscribe(function (data) {
            return console.log(data);
          });
        }
      }, {
        key: "onSelectedSlidesByProfile",
        value: function onSelectedSlidesByProfile(profile) {
          this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILES_SELECTED"]({
            profile: profile
          }));
        }
      }, {
        key: "onUpdateProfileAfterDragandDropSlides",
        value: function onUpdateProfileAfterDragandDropSlides(data) {
          data.profile = Object.assign({}, data.profile);
          data.profile.idSlides = data.slides.map(function (slide) {
            return slide.id;
          }).join();
          this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PROFILE_AFTER_DRAG_SLIDES"]({
            profile: data.profile
          }));
        }
      }]);

      return SlideListProfileComponent;
    }();

    SlideListProfileComponent.ɵfac = function SlideListProfileComponent_Factory(t) {
      return new (t || SlideListProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]));
    };

    SlideListProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlideListProfileComponent,
      selectors: [["app-slide-list-profile"]],
      decls: 12,
      vars: 7,
      consts: [[1, "row"], [1, "col-md-2"], [4, "ngIf", "ngIfElse"], ["class", "row", 4, "ngIf"], ["loaderProfiles", ""], ["loaderSlides", ""], [3, "profiles", "profileSelected", "selectedSlidesByProfile"], [3, "slides", "profileSelected", "profiles", "updateProfileAfterDragandDropSlides"], [4, "ngIf"], ["class", "alert-text", 4, "ngIf"], [1, "alert"], [1, "alert-text"], ["cdkDragHandle", "", 1, "material-icons"], ["color", "primary", "diameter", "50"], ["color", "primary", "diameter", "70"]],
      template: function SlideListProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideListProfileComponent_ng_container_2_Template, 4, 6, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SlideListProfileComponent_div_4_Template, 3, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SlideListProfileComponent_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SlideListProfileComponent_ng_template_10_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.isLoadingProfiles$))("ngIfElse", _r87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.slides$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__["SelectComponent"], _components_slide_drag_and_drop_slide_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_7__["SlideDragAndDropComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDragHandle"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".alert-text[_ngcontent-%COMP%] {\n  color: #3f51b5;\n  font-weight: 600;\n  font-family: cursive;\n  font-size: 18px;\n  text-align: center;\n}\n.alert[_ngcontent-%COMP%] {\n  color: #3f51b5;\n  font-weight: 600;\n  font-family: cursive;\n  font-size: 18px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2Fycm91c2VsL2NvbnRhaW5lcnMvc2xpZGUtbGlzdC1wcm9maWxlL3NsaWRlLWxpc3QtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NhcnJvdXNlbC9jb250YWluZXJzL3NsaWRlLWxpc3QtcHJvZmlsZS9zbGlkZS1saXN0LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC10ZXh0IHtcbiAgY29sb3I6ICMzZjUxYjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hbGVydCB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIl19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideListProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-slide-list-profile",
          templateUrl: "./slide-list-profile.component.html",
          styleUrls: ["./slide-list-profile.component.css"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/containers/template/template.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/features/carrousel/containers/template/template.component.ts ***!
    \******************************************************************************/

  /*! exports provided: TemplateComponent */

  /***/
  function srcAppFeaturesCarrouselContainersTemplateTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateComponent", function () {
      return TemplateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = function _c0(a0) {
      return {
        "sidenav-collapsed": a0
      };
    };

    var TemplateComponent =
    /*#__PURE__*/
    function () {
      function TemplateComponent(changeDetectorRef, media) {
        _classCallCheck(this, TemplateComponent);

        this.mobileQuery = media.matchMedia("(max-width: 600px)");

        this._mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
      }

      _createClass(TemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }
      }]);

      return TemplateComponent;
    }();

    TemplateComponent.ɵfac = function TemplateComponent_Factory(t) {
      return new (t || TemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]));
    };

    TemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TemplateComponent,
      selectors: [["app-template"]],
      decls: 29,
      vars: 9,
      consts: [[3, "mode", "opened", "ngClass"], ["snav", ""], [1, "sidenav-header"], ["routerLink", "/"], ["routerLink", "/carrousel"], ["routerLink", "/carrousel/add-slide"], [3, "ngClass"], ["mat-icon-button", "", 3, "click"], [1, "container-fluid"]],
      template: function TemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Slides by profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "slideshow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "add_to_queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-drawer-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

            var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.mobileQuery.matches ? _r100.toggle() : ctx.collapsedNav = !ctx.collapsedNav;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("opened", !ctx.mobileQuery.matches)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.collapsedNav && !ctx.mobileQuery.matches));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.collapsedNav && !ctx.mobileQuery.matches ? "S" : "Slideshow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.collapsedNav && !ctx.mobileQuery.matches));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");.mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%]{font:400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.05em;margin:0 0 56px}.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.02em;margin:0 0 64px}.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.005em;margin:0 0 64px}.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-button-toggle[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-card[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]{font-size:14px}.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%]{font-size:18px}.mat-table[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(0.75);width:133.3333333333%}.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(0.75);width:133.3333433333%}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-0.84375em;padding-top:.84375em}.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.7916666667em)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);-ms-transform:translateY(-1.28125em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);-ms-transform:translateY(-1.28124em) scale(0.75);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);-ms-transform:translateY(-1.28123em) scale(0.75);width:133.3333533333%}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.5416666667em;top:calc(100% - 1.6666666667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(0.75)}}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-0.5em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59375em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59374em) scale(0.75);width:133.3333433333%}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0 1em 0}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-0.25em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(0.75);width:133.3333433333%}.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]{font-size:14px}.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}input.mat-input-element[_ngcontent-%COMP%]{margin-top:-0.0625em}.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:400}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px}.mat-radio-button[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-select[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}.mat-slide-toggle-content[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:normal}.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-tab-group[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0}.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-list-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}.mat-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:16px}.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px}.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(0)}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}@media screen and (-ms-high-contrast: active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{}@keyframes cdk-text-field-autofill-start{}@-webkit-keyframes cdk-text-field-autofill-end{}@keyframes cdk-text-field-autofill-end{}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}textarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}.mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}.mat-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#3f51b5}.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#ff4081}.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox[_ngcontent-%COMP%]::after{color:#fafafa}.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{color:#b0b0b0}.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#3f51b5}.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#ff4081}.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{background:#b0b0b0}.mat-elevation-z0[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z1[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z2[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z3[_ngcontent-%COMP%]{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z4[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z5[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z6[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z7[_ngcontent-%COMP%]{box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mat-elevation-z9[_ngcontent-%COMP%]{box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)}.mat-elevation-z10[_ngcontent-%COMP%]{box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)}.mat-elevation-z11[_ngcontent-%COMP%]{box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)}.mat-elevation-z12[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z13[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z14[_ngcontent-%COMP%]{box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z15[_ngcontent-%COMP%]{box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z16[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z17[_ngcontent-%COMP%]{box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z18[_ngcontent-%COMP%]{box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)}.mat-elevation-z19[_ngcontent-%COMP%]{box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)}.mat-elevation-z20[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z21[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z22[_ngcontent-%COMP%]{box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z23[_ngcontent-%COMP%]{box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)}.mat-elevation-z24[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)}.mat-app-background[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker[_ngcontent-%COMP%]{display:none}.mat-autocomplete-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#3f51b5}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{outline:solid 1px;border-radius:0}.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#ff4081;color:#fff}.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#f44336}.mat-badge[_ngcontent-%COMP%]{position:relative}.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{display:none}.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content[_ngcontent-%COMP%]{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%]{transition:none}.mat-badge-content.mat-badge-active[_ngcontent-%COMP%]{transform:none}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-8px}.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-8px}.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-16px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-16px}.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-16px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-8px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-8px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-8px}.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-11px}.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-11px}.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-22px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-22px}.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-22px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-11px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-11px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-11px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-14px}.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-14px}.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-28px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-28px}.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-28px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-14px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-14px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-14px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{color:inherit;background:transparent}.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]{color:#3f51b5}.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-button[disabled][disabled][_ngcontent-%COMP%], .mat-icon-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-icon-button[disabled][disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-stroked-button[disabled][disabled][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#ff4081}.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#f44336}.mat-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:transparent}.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{opacity:.1;background-color:currentColor}.mat-button-focus-overlay[_ngcontent-%COMP%]{background:#000}.mat-stroked-button[_ngcontent-%COMP%]:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background-color:#fff}.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{color:#fff}.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{color:#fff}.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{color:#fff}.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081}.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-raised-button[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mat-raised-button[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mat-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{box-shadow:none}.mat-button-toggle[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:#000}.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#bdbdbd}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{border:solid 1px rgba(0,0,0,.12)}.mat-card[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-card-subtitle[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-checkbox-frame[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark[_ngcontent-%COMP%]{fill:#fafafa}.mat-checkbox-checkmark-path[_ngcontent-%COMP%]{stroke:#fafafa !important}.mat-checkbox-mixedmark[_ngcontent-%COMP%]{background-color:#fafafa}.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#ff4081}.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#b0b0b0}.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%]{border-color:#b0b0b0}.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%]{background:#3f51b5}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%]{background:#ff4081}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%]{background:#f44336}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%]{opacity:.4}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-table[_ngcontent-%COMP%]{background:#fff}.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%]{background:inherit}mat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-calendar-arrow[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-calendar-table-header[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.4)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-datepicker-toggle-active[_ngcontent-%COMP%]{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-dialog-container[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical[_ngcontent-%COMP%]{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-action-row[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]){background:rgba(0,0,0,.04)}@media(hover: none){.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#fff}}.mat-expansion-panel-header-title[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{color:inherit}.mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#3f51b5}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#3f51b5}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#ff4081}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#f44336}.mat-error[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:transparent}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.06)}.mat-icon.mat-primary[_ngcontent-%COMP%]{color:#3f51b5}.mat-icon.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-icon.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}.mat-input-element[_ngcontent-%COMP%]{caret-color:#3f51b5}.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#ff4081}.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-list-item-disabled[_ngcontent-%COMP%]{background-color:#eee}.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.04)}.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.12)}.mat-menu-panel[_ngcontent-%COMP%]{background:#fff}.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-menu-item[_ngcontent-%COMP%]{background:transparent;color:rgba(0,0,0,.87)}.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator[_ngcontent-%COMP%]{background:#fff}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background[_ngcontent-%COMP%]{fill:#c5cae9}.mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#c5cae9}.mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#3f51b5}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ff80ab}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ff80ab}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#ff4081}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ffcdd2}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ffcdd2}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#f44336}.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#3f51b5}.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#ff4081}.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f44336}.mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#3f51b5}.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#ff4081}.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#ff4081}.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#f44336}.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#f44336}.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-select-placeholder[_ngcontent-%COMP%]{color:rgba(0,0,0,.42)}.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-select-panel[_ngcontent-%COMP%]{background:#fff}.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#3f51b5}.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-drawer-container[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push[_ngcontent-%COMP%]{background-color:#fff}.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side){box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}.mat-drawer-side[_ngcontent-%COMP%]{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#ff4081}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.54)}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#ff4081}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(63,81,181,.54)}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#f44336}.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-slide-toggle-thumb[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12);background-color:#fafafa}.mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#ff4081}.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#f44336}.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}.mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.2)}.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);background-image:-moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.04)}@media(hover: none){.mat-step-header[_ngcontent-%COMP%]:hover{background:none}}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%]{background-color:transparent;color:#f44336}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%]{color:#f44336}.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{background-color:#fff}.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow[_ngcontent-%COMP%]{color:#757575}.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#ff4081}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#f44336}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}.mat-toolbar[_ngcontent-%COMP%]{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent[_ngcontent-%COMP%]{background:#ff4081;color:#fff}.mat-toolbar.mat-warn[_ngcontent-%COMP%]{background:#f44336;color:#fff}.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:currentColor}.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:inherit}.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:currentColor}.mat-tooltip[_ngcontent-%COMP%]{background:rgba(97,97,97,.9)}.mat-tree[_ngcontent-%COMP%]{background:#fff}.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-snack-bar-container[_ngcontent-%COMP%]{color:rgba(255,255,255,.7);background:#323232;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#ff4081}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}mat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}mat-drawer[_ngcontent-%COMP%], mat-drawer-content[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}mat-drawer[_ngcontent-%COMP%] {\n  width: 250px;\n  background-color: #8ca5ff;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%2373adff' stroke-width='100' stroke-opacity='0' %3E%3Ccircle fill='%238ca5ff' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23859cf2' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%237e93e5' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23768ad8' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%236f81cb' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%236879bf' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%236170b2' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%235a67a5' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23535e98' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%234b558b' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23444c7e' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%233d4371' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23363a64' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%232f3258' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2328294b' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%2320203e' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23191731' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23120e24' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  transition-property: width;\n}mat-drawer.sidenav-collapsed[_ngcontent-%COMP%] {\n  width: 100px;\n}mat-drawer[_ngcontent-%COMP%]   .sidenav-header[_ngcontent-%COMP%] {\n  background-color: #000;\n  height: 64px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}mat-drawer[_ngcontent-%COMP%]   .sidenav-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: #fff;\n}mat-drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n}mat-drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  list-style: none;\n  cursor: pointer;\n  margin: 10px;\n  padding: 10px;\n  background-color: #000;\n  border-radius: 5px;\n}mat-drawer-content[_ngcontent-%COMP%] {\n  transition-property: transform, margin-left, margin-right;\n}mat-drawer-content.sidenav-collapsed[_ngcontent-%COMP%] {\n  margin-left: 100px !important;\n}.container-fluid[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}@media (max-width: 600px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    flex-direction: row-reverse !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2Fycm91c2VsL2NvbnRhaW5lcnMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzRUFBc0UsQ0NEdEUsbUJBQW1CLGVBQWUsQ0FBQyxjQUFjLENBQUMsZ0RBQWdELENBQUMsb0NBQW9DLGFBQWEsQ0FBQyxvQ0FBb0MsY0FBYyxDQUFDLHlDQUF5Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsc0NBQXNDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyw2Q0FBNkMsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLDZDQUE2Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLG9FQUFvRSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsb0VBQW9FLENBQUMsZUFBZSxDQUFDLDZCQUE2Qix1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxzQ0FBc0MsdURBQXVELENBQUMscUJBQXFCLENBQUMsNENBQTRDLGVBQWUsQ0FBQyx3QkFBd0IsdURBQXVELENBQUMscUJBQXFCLENBQUMsOENBQThDLHlEQUF5RCxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyw4Q0FBOEMsdURBQXVELENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLDhDQUE4Qyx1REFBdUQsQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUMsOENBQThDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsdURBQXVELENBQUMscUJBQXFCLENBQUMsNEdBQTRHLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLGdEQUFnRCxDQUFDLFVBQVUsZ0RBQWdELENBQUMsZ0JBQWdCLGNBQWMsQ0FBQyxlQUFlLENBQUMsaUNBQWlDLGNBQWMsQ0FBQyxxQ0FBcUMsY0FBYyxDQUFDLGNBQWMsZ0RBQWdELENBQUMseUNBQXlDLGdCQUFnQixDQUFDLFVBQVUsY0FBYyxDQUFDLGVBQWUsQ0FBQywrRUFBK0UsY0FBYyxDQUFDLFdBQVcsZ0RBQWdELENBQUMsaUJBQWlCLGNBQWMsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLGNBQWMsQ0FBQyxjQUFjLGdEQUFnRCxDQUFDLG1CQUFtQixjQUFjLENBQUMscURBQXFELGNBQWMsQ0FBQyxlQUFlLENBQUMsOEJBQThCLGNBQWMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLDRCQUE0QixnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDZCQUE2Qix1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGdEQUFnRCxDQUFDLHFCQUFxQixDQUFDLHdCQUF3Qix3QkFBd0IsQ0FBQyxrRUFBa0UsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGdGQUFnRixZQUFZLENBQUMsV0FBVyxDQUFDLG9HQUFvRyxjQUFjLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLGNBQWMsQ0FBQyxxQ0FBcUMsQ0FBQyxrTEFBa0wsNENBQTRDLENBQUMscUJBQXFCLENBQUMseUhBQXlILDRDQUE0QyxDQUFDLHFCQUFxQixDQUFDLDhCQUE4QixjQUFjLENBQUMsb0JBQW9CLENBQUMsc0JBQXNCLGFBQWEsQ0FBQywwQkFBMEIsZ0JBQWdCLENBQUMsa0NBQWtDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQywrQkFBK0IsQ0FBQywwREFBMEQscUJBQXFCLENBQUMsd0RBQXdELGlCQUFpQixDQUFDLG9QQUFvUCxtRkFBbUYsQ0FBQyxnREFBZ0QsQ0FBQyxxQkFBcUIsQ0FBQyxpS0FBaUsscUZBQXFGLENBQUMsZ0RBQWdELENBQUMscUJBQXFCLENBQUMsMEpBQTBKLHFGQUFxRixDQUFDLGdEQUFnRCxDQUFDLHFCQUFxQixDQUFDLHdEQUF3RCxhQUFhLENBQUMsNERBQTRELGFBQWEsQ0FBQyxvRUFBb0Usd0JBQXdCLENBQUMsK0JBQStCLENBQUMsYUFBYSxvUEFBb1AsNENBQTRDLENBQUMsaUtBQWlLLDRDQUE0QyxDQUFDLDBKQUEwSiwyQ0FBMkMsQ0FBQyxDQUFDLHNEQUFzRCx1QkFBdUIsQ0FBQyxzREFBc0QsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGdQQUFnUCw0Q0FBNEMsQ0FBQyxxQkFBcUIsQ0FBQyx3SkFBd0osNENBQTRDLENBQUMscUJBQXFCLENBQUMseURBQXlELG1CQUFtQixDQUFDLHlEQUF5RCxhQUFhLENBQUMsa0JBQWtCLENBQUMsc1BBQXNQLDRDQUE0QyxDQUFDLHFCQUFxQixDQUFDLDJKQUEySiw0Q0FBNEMsQ0FBQyxxQkFBcUIsQ0FBQyw0Q0FBNEMsY0FBYyxDQUFDLGdFQUFnRSxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLDhGQUE4RixjQUFjLENBQUMsd0JBQXdCLG9CQUFvQixDQUFDLGVBQWUsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyw0REFBNEQsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGtCQUFrQixnREFBZ0QsQ0FBQyxZQUFZLGdEQUFnRCxDQUFDLG9CQUFvQixjQUFjLENBQUMsMEJBQTBCLGdEQUFnRCxDQUFDLDZCQUE2QixnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDhDQUE4QyxnREFBZ0QsQ0FBQyxnQkFBZ0IsY0FBYyxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsa0JBQWtCLENBQUMsc0JBQXNCLGNBQWMsQ0FBQyx5QkFBeUIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxlQUFlLGdEQUFnRCxDQUFDLDZCQUE2QixnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDZHQUE2Ryx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixjQUFjLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsZ0RBQWdELENBQUMsaUJBQWlCLGdEQUFnRCxDQUFDLDhCQUE4QixjQUFjLENBQUMsd0NBQXdDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsdURBQXVELGNBQWMsQ0FBQyxnQ0FBZ0MsY0FBYyxDQUFDLDBDQUEwQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLHlEQUF5RCxjQUFjLENBQUMsOEJBQThCLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMscUNBQXFDLGNBQWMsQ0FBQywrQ0FBK0Msa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyw4REFBOEQsY0FBYyxDQUFDLHVDQUF1QyxjQUFjLENBQUMsaURBQWlELGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsZ0VBQWdFLGNBQWMsQ0FBQyxxQ0FBcUMsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxZQUFZLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsdURBQXVELENBQUMscUJBQXFCLENBQUMscUJBQXFCLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxVQUFVLGdEQUFnRCxDQUFDLHFDQUFxQyxlQUFlLENBQUMsY0FBYyxDQUFDLFlBQVksZUFBZSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3Qix1QkFBdUIsQ0FBQyxpQ0FBaUMsZ0JBQWdCLENBQUMsb0JBQW9CLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLDJEQUEyRCxDQUFDLGtCQUFrQixDQUFDLDhDQUE4QyxZQUFZLENBQUMscUJBQXFCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxtREFBbUQsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLHVCQUF1QixjQUFjLENBQUMsWUFBWSxDQUFDLDZCQUE2QixZQUFZLENBQUMsNEJBQTRCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyx5REFBeUQsQ0FBQyxTQUFTLENBQUMsbURBQW1ELFNBQVMsQ0FBQyw4Q0FBOEMsbURBQW1ELFVBQVUsQ0FBQyxDQUFDLDJCQUEyQiwwQkFBMEIsQ0FBQyxpR0FBaUcsU0FBUyxDQUFDLDZDQUE2QyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLGNBQWMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsaURBQXlDLElBQUksQ0FBQyxDQUE5Qyx5Q0FBeUMsSUFBSSxDQUFDLENBQUMsK0NBQXVDLElBQUksQ0FBQyxDQUE1Qyx1Q0FBdUMsSUFBSSxDQUFDLENBQUMsb0RBQW9ELHNEQUE2QyxDQUE3Qyw4Q0FBOEMsQ0FBQywwREFBMEQsb0RBQTJDLENBQTNDLDRDQUE0QyxDQUFDLCtCQUErQixXQUFXLENBQUMseUNBQXlDLHdCQUF3QixDQUFDLGlDQUFpQyxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLGlEQUFpRCx3QkFBd0IsQ0FBQyxpQ0FBaUMsQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsK0JBQStCLENBQUMsWUFBWSxxQkFBcUIsQ0FBQyx3RkFBd0YsMEJBQTBCLENBQUMsNkVBQTZFLDBCQUEwQixDQUFDLHVCQUF1QiwwQkFBMEIsQ0FBQyxxQkFBcUIsQ0FBQyxnQ0FBZ0MscUJBQXFCLENBQUMsZ0VBQWdFLGFBQWEsQ0FBQywrREFBK0QsYUFBYSxDQUFDLDZEQUE2RCxhQUFhLENBQUMsb0JBQW9CLHFCQUFxQixDQUFDLDJDQUEyQyxxQkFBcUIsQ0FBQyxxQkFBcUIscUJBQXFCLENBQUMsNEJBQTRCLGFBQWEsQ0FBQyw4QkFBOEIsYUFBYSxDQUFDLDBGQUEwRixrQkFBa0IsQ0FBQyx3SkFBd0osa0JBQWtCLENBQUMsb0ZBQW9GLGtCQUFrQixDQUFDLDBIQUEwSCxrQkFBa0IsQ0FBQyxrQkFBa0IscUhBQXFILENBQUMsa0JBQWtCLHNIQUFzSCxDQUFDLGtCQUFrQixzSEFBc0gsQ0FBQyxrQkFBa0Isc0hBQXNILENBQUMsa0JBQWtCLHVIQUF1SCxDQUFDLGtCQUFrQix1SEFBdUgsQ0FBQyxrQkFBa0Isd0hBQXdILENBQUMsa0JBQWtCLHdIQUF3SCxDQUFDLGtCQUFrQix3SEFBd0gsQ0FBQyxrQkFBa0Isd0hBQXdILENBQUMsbUJBQW1CLHlIQUF5SCxDQUFDLG1CQUFtQix5SEFBeUgsQ0FBQyxtQkFBbUIseUhBQXlILENBQUMsbUJBQW1CLHlIQUF5SCxDQUFDLG1CQUFtQix5SEFBeUgsQ0FBQyxtQkFBbUIseUhBQXlILENBQUMsbUJBQW1CLDBIQUEwSCxDQUFDLG1CQUFtQiwwSEFBMEgsQ0FBQyxtQkFBbUIsMEhBQTBILENBQUMsbUJBQW1CLDBIQUEwSCxDQUFDLG1CQUFtQiwySEFBMkgsQ0FBQyxtQkFBbUIsMkhBQTJILENBQUMsbUJBQW1CLDJIQUEySCxDQUFDLG1CQUFtQiwySEFBMkgsQ0FBQyxtQkFBbUIsMkhBQTJILENBQUMsb0JBQW9CLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixZQUFZLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxzREFBc0QsdUhBQXVILENBQUMsOEVBQThFLGVBQWUsQ0FBQyx3R0FBd0cscUJBQXFCLENBQUMsbUJBQW1CLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyw2Q0FBNkMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLHFDQUFxQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsbUNBQW1DLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLGlCQUFpQixDQUFDLHFDQUFxQyxZQUFZLENBQUMsdUNBQXVDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxzQ0FBc0MsQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsbUZBQW1GLGVBQWUsQ0FBQyxvQ0FBb0MsY0FBYyxDQUFDLG9DQUFvQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9EQUFvRCxRQUFRLENBQUMsb0RBQW9ELFdBQVcsQ0FBQyxxREFBcUQsVUFBVSxDQUFDLCtEQUErRCxTQUFTLENBQUMsV0FBVyxDQUFDLG9EQUFvRCxXQUFXLENBQUMsOERBQThELFVBQVUsQ0FBQyxVQUFVLENBQUMsdUVBQXVFLFNBQVMsQ0FBQyxpRkFBaUYsU0FBUyxDQUFDLFVBQVUsQ0FBQyxzRUFBc0UsVUFBVSxDQUFDLGdGQUFnRixVQUFVLENBQUMsU0FBUyxDQUFDLHFDQUFxQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLHFEQUFxRCxTQUFTLENBQUMscURBQXFELFlBQVksQ0FBQyxzREFBc0QsVUFBVSxDQUFDLGdFQUFnRSxTQUFTLENBQUMsV0FBVyxDQUFDLHFEQUFxRCxXQUFXLENBQUMsK0RBQStELFVBQVUsQ0FBQyxVQUFVLENBQUMsd0VBQXdFLFVBQVUsQ0FBQyxrRkFBa0YsU0FBUyxDQUFDLFdBQVcsQ0FBQyx1RUFBdUUsV0FBVyxDQUFDLGlGQUFpRixVQUFVLENBQUMsVUFBVSxDQUFDLG9DQUFvQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9EQUFvRCxTQUFTLENBQUMsb0RBQW9ELFlBQVksQ0FBQyxxREFBcUQsVUFBVSxDQUFDLCtEQUErRCxTQUFTLENBQUMsV0FBVyxDQUFDLG9EQUFvRCxXQUFXLENBQUMsOERBQThELFVBQVUsQ0FBQyxVQUFVLENBQUMsdUVBQXVFLFVBQVUsQ0FBQyxpRkFBaUYsU0FBUyxDQUFDLFdBQVcsQ0FBQyxzRUFBc0UsV0FBVyxDQUFDLGdGQUFnRixVQUFVLENBQUMsVUFBVSxDQUFDLDRCQUE0QiwwSEFBMEgsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsaURBQWlELGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxxRkFBcUYsYUFBYSxDQUFDLGtGQUFrRixhQUFhLENBQUMsNEVBQTRFLGFBQWEsQ0FBQywwYkFBMGIscUJBQXFCLENBQUMsbUtBQW1LLHdCQUF3QixDQUFDLGdLQUFnSyx3QkFBd0IsQ0FBQywwSkFBMEosd0JBQXdCLENBQUMsNkpBQTZKLDRCQUE0QixDQUFDLDZHQUE2RyxVQUFVLENBQUMsNkJBQTZCLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyxvQ0FBb0MsNEJBQTRCLENBQUMsMkRBQTJELHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLDJHQUEyRyxVQUFVLENBQUMsdUdBQXVHLFVBQVUsQ0FBQywrRkFBK0YsVUFBVSxDQUFDLG9qQkFBb2pCLHFCQUFxQixDQUFDLDJHQUEyRyx3QkFBd0IsQ0FBQyx1R0FBdUcsd0JBQXdCLENBQUMsK0ZBQStGLHdCQUF3QixDQUFDLG9qQkFBb2pCLGdDQUFnQyxDQUFDLDJMQUEyTCxxQ0FBcUMsQ0FBQyx1TEFBdUwscUNBQXFDLENBQUMsK0tBQStLLHFDQUFxQyxDQUFDLGlHQUFpRyxxSEFBcUgsQ0FBQyxpREFBaUQsc0hBQXNILENBQUMsd0VBQXdFLHdIQUF3SCxDQUFDLDJEQUEyRCxxSEFBcUgsQ0FBQyxtRkFBbUYsd0hBQXdILENBQUMsaUlBQWlJLHlIQUF5SCxDQUFDLHVHQUF1RyxxSEFBcUgsQ0FBQyx1REFBdUQsc0hBQXNILENBQUMsaUhBQWlILGVBQWUsQ0FBQyxtQkFBbUIscUJBQXFCLENBQUMsb0RBQW9ELGdDQUFnQyxDQUFDLHVDQUF1QyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsd0VBQXdFLHFCQUFxQixDQUFDLG1GQUFtRixxQ0FBcUMsQ0FBQyw2RkFBNkYsZ0JBQWdCLENBQUMsc0NBQXNDLENBQUMsOEdBQThHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLG9DQUFvQyxDQUFDLDJCQUEyQix3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxpRUFBaUUscUJBQXFCLENBQUMsNEJBQTRCLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLGtFQUFrRSxlQUFlLENBQUMsc0RBQXNELHdCQUF3QixDQUFDLGlIQUFpSCxnQ0FBZ0MsQ0FBQyxVQUFVLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyx3Q0FBd0Msc0hBQXNILENBQUMsc0RBQXNELHFIQUFxSCxDQUFDLG1CQUFtQixxQkFBcUIsQ0FBQyxvQkFBb0IsNEJBQTRCLENBQUMsd0JBQXdCLFlBQVksQ0FBQyw2QkFBNkIseUJBQXlCLENBQUMsd0JBQXdCLHdCQUF3QixDQUFDLDRIQUE0SCx3QkFBd0IsQ0FBQywwSEFBMEgsd0JBQXdCLENBQUMsc0hBQXNILHdCQUF3QixDQUFDLGdKQUFnSix3QkFBd0IsQ0FBQyxzRUFBc0Usb0JBQW9CLENBQUMsMkNBQTJDLHFCQUFxQixDQUFDLGtDQUFrQyxxQkFBcUIsQ0FBQyxtS0FBbUssa0JBQWtCLENBQUMsaUtBQWlLLGtCQUFrQixDQUFDLDZKQUE2SixrQkFBa0IsQ0FBQyw0QkFBNEIsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsNkNBQTZDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQywyREFBMkQsc0hBQXNILENBQUMsMkVBQTJFLFdBQVcsQ0FBQyw4Q0FBOEMsVUFBVSxDQUFDLG1DQUFtQyxlQUFlLENBQUMsMERBQTBELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywyRUFBMkUsVUFBVSxDQUFDLFVBQVUsQ0FBQyw4RUFBOEUscUNBQXFDLENBQUMsdURBQXVELHdCQUF3QixDQUFDLFVBQVUsQ0FBQyx3RUFBd0UsVUFBVSxDQUFDLFVBQVUsQ0FBQywyRUFBMkUscUNBQXFDLENBQUMseURBQXlELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywwRUFBMEUsVUFBVSxDQUFDLFVBQVUsQ0FBQyw2RUFBNkUscUNBQXFDLENBQUMsV0FBVyxlQUFlLENBQUMsdUpBQXVKLGtCQUFrQixDQUFDLHdGQUF3RixtQ0FBbUMsQ0FBQyxpQkFBaUIscUJBQXFCLENBQUMsMkJBQTJCLHFCQUFxQixDQUFDLG9CQUFvQixnQ0FBZ0MsQ0FBQywrSEFBK0gscUJBQXFCLENBQUMsMkJBQTJCLHFCQUFxQixDQUFDLDBDQUEwQywwQkFBMEIsQ0FBQyx5QkFBeUIscUJBQXFCLENBQUMsZ0NBQWdDLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLDZGQUE2RixxQkFBcUIsQ0FBQyxpV0FBaVcsZ0NBQWdDLENBQUMsMERBQTBELDRCQUE0QixDQUFDLHNGQUFzRiw0QkFBNEIsQ0FBQyw0QkFBNEIsd0JBQXdCLENBQUMsVUFBVSxDQUFDLHdEQUF3RCxtQ0FBbUMsQ0FBQyxvREFBb0QsK0JBQStCLENBQUMsd0JBQXdCLHVIQUF1SCxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLCtEQUErRCx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsMkZBQTJGLG9DQUFvQyxDQUFDLHVGQUF1RiwrQkFBK0IsQ0FBQyw2REFBNkQsd0JBQXdCLENBQUMsVUFBVSxDQUFDLHlGQUF5RixtQ0FBbUMsQ0FBQyxxRkFBcUYsK0JBQStCLENBQUMsOEJBQThCLHFIQUFxSCxDQUFDLDhCQUE4QixhQUFhLENBQUMseUNBQXlDLGFBQWEsQ0FBQyx1Q0FBdUMsYUFBYSxDQUFDLHNCQUFzQiwySEFBMkgsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsYUFBYSxnQ0FBZ0MsQ0FBQyxzQkFBc0Isa0NBQWtDLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxtREFBbUQsc0hBQXNILENBQUMsZ0JBQWdCLGdDQUFnQyxDQUFDLG1TQUFtUywwQkFBMEIsQ0FBQyxvQkFBb0Isb0dBQW9HLGVBQWUsQ0FBQyxDQUFDLGtDQUFrQyxxQkFBcUIsQ0FBQyx3RUFBd0UscUJBQXFCLENBQUMsZ0RBQWdELHFCQUFxQixDQUFDLDBLQUEwSyxhQUFhLENBQUMsc0JBQXNCLG9CQUFvQixDQUFDLFVBQVUsb0JBQW9CLENBQUMsa0RBQWtELGFBQWEsQ0FBQyw2REFBNkQsYUFBYSxDQUFDLDJEQUEyRCxhQUFhLENBQUMsNkNBQTZDLGFBQWEsQ0FBQyx1QkFBdUIsZ0NBQWdDLENBQUMsbURBQW1ELHdCQUF3QixDQUFDLDhEQUE4RCx3QkFBd0IsQ0FBQyw0REFBNEQsd0JBQXdCLENBQUMsNkdBQTZHLGFBQWEsQ0FBQyx3SEFBd0gsYUFBYSxDQUFDLHNIQUFzSCxhQUFhLENBQUMsNkRBQTZELGFBQWEsQ0FBQyxxS0FBcUssYUFBYSxDQUFDLHVJQUF1SSx3QkFBd0IsQ0FBQyxXQUFXLGFBQWEsQ0FBQyx3REFBd0QscUJBQXFCLENBQUMsNENBQTRDLHFCQUFxQixDQUFDLDREQUE0RCxnQ0FBZ0MsQ0FBQyxvRkFBb0YsMkdBQTJHLENBQUMsd0JBQXdCLENBQUMsMEJBQTBCLENBQUMsOERBQThELGdDQUFnQyxDQUFDLHNGQUFzRiwyR0FBMkcsQ0FBQyx3QkFBd0IsQ0FBQywwQkFBMEIsQ0FBQyxxREFBcUQsZ0NBQWdDLENBQUMsNkVBQTZFLGdDQUFnQyxDQUFDLGtFQUFrRSxnQ0FBZ0MsQ0FBQyw4RUFBOEUscUJBQXFCLENBQUMsMEZBQTBGLDRCQUE0QixDQUFDLDJEQUEyRCxxQkFBcUIsQ0FBQyxpRUFBaUUscUJBQXFCLENBQUMsNkVBQTZFLGFBQWEsQ0FBQyx3RkFBd0YsYUFBYSxDQUFDLHNGQUFzRixhQUFhLENBQUMsK0dBQStHLGFBQWEsQ0FBQyxpRkFBaUYscUJBQXFCLENBQUMsbUZBQW1GLHFCQUFxQixDQUFDLHNCQUFzQixhQUFhLENBQUMscUJBQXFCLGFBQWEsQ0FBQyxtQkFBbUIsYUFBYSxDQUFDLG9FQUFvRSxxQkFBcUIsQ0FBQyx3SEFBd0gscUJBQXFCLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFDQUFnQyxxQkFBcUIsQ0FBckQsZ0NBQWdDLHFCQUFxQixDQUFDLHFDQUFxQyxxQkFBcUIsQ0FBQyw4Q0FBOEMscUJBQXFCLENBQUMseUNBQXlDLHFCQUFxQixDQUFDLCtCQUErQixtQkFBbUIsQ0FBQyx3RUFBd0UsbUJBQW1CLENBQUMsMkZBQTJGLGFBQWEsQ0FBQyw4QkFBOEIscUJBQXFCLENBQUMsZ0NBQWdDLHFCQUFxQixDQUFDLDhCQUE4QixxQkFBcUIsQ0FBQyx3QkFBd0IscUJBQXFCLENBQUMsZ01BQWdNLDBCQUEwQixDQUFDLCtHQUErRywwQkFBMEIsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLDhDQUE4Qyx1SEFBdUgsQ0FBQyxlQUFlLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDLHlEQUF5RCxxQkFBcUIsQ0FBQyx3RUFBd0UscUJBQXFCLENBQUMsdUxBQXVMLDBCQUEwQixDQUFDLGVBQWUsZUFBZSxDQUFDLDREQUE0RCxxQkFBcUIsQ0FBQyxrREFBa0Qsb0NBQW9DLENBQUMsc0NBQXNDLENBQUMseUNBQXlDLG9DQUFvQyxDQUFDLHVNQUF1TSw0QkFBNEIsQ0FBQyw2QkFBNkIsWUFBWSxDQUFDLHlCQUF5Qix3QkFBd0IsQ0FBQyw4QkFBOEIsd0JBQXdCLENBQUMsMERBQTBELFlBQVksQ0FBQyxzREFBc0Qsd0JBQXdCLENBQUMsMkRBQTJELHdCQUF3QixDQUFDLHdEQUF3RCxZQUFZLENBQUMsb0RBQW9ELHdCQUF3QixDQUFDLHlEQUF5RCx3QkFBd0IsQ0FBQyxpREFBaUQsY0FBYyxDQUFDLHVFQUF1RSxjQUFjLENBQUMsbUVBQW1FLGNBQWMsQ0FBQyx3QkFBd0IsNEJBQTRCLENBQUMsd0VBQXdFLG9CQUFvQixDQUFDLDJTQUEyUyx3QkFBd0IsQ0FBQyx1RUFBdUUsb0JBQW9CLENBQUMsdVNBQXVTLHdCQUF3QixDQUFDLHFFQUFxRSxvQkFBb0IsQ0FBQywrUkFBK1Isd0JBQXdCLENBQUMsNElBQTRJLDRCQUE0QixDQUFDLHdJQUF3SSxnQ0FBZ0MsQ0FBQyw4REFBOEQscUJBQXFCLENBQUMsc0NBQXNDLHFCQUFxQixDQUFDLGtCQUFrQixxQkFBcUIsQ0FBQyx3QkFBd0IscUJBQXFCLENBQUMsdUNBQXVDLHFCQUFxQixDQUFDLGtCQUFrQixxQkFBcUIsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGdEQUFnRCx1SEFBdUgsQ0FBQyxxRUFBcUUsMEJBQTBCLENBQUMsMERBQTBELGFBQWEsQ0FBQyx5REFBeUQsYUFBYSxDQUFDLHVEQUF1RCxhQUFhLENBQUMsaUVBQWlFLGFBQWEsQ0FBQyxrRUFBa0UscUJBQXFCLENBQUMsc0JBQXNCLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLFlBQVkscUJBQXFCLENBQUMscUJBQXFCLENBQUMsNEJBQTRCLHFCQUFxQixDQUFDLGtDQUFrQywwSEFBMEgsQ0FBQyxpQkFBaUIsc0NBQXNDLENBQUMsZ0NBQWdDLHFDQUFxQyxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixxQ0FBcUMsQ0FBQyxpQkFBaUIsQ0FBQywwQ0FBMEMsZ0JBQWdCLENBQUMsc0NBQXNDLENBQUMsc0NBQXNDLCtCQUErQixDQUFDLHNEQUFzRCx3QkFBd0IsQ0FBQyxvREFBb0QscUNBQXFDLENBQUMsa0RBQWtELHdCQUF3QixDQUFDLGtFQUFrRSx3QkFBd0IsQ0FBQyxnRUFBZ0Usb0NBQW9DLENBQUMsOERBQThELHdCQUF3QixDQUFDLCtEQUErRCx3QkFBd0IsQ0FBQyw2REFBNkQsb0NBQW9DLENBQUMsMkRBQTJELHdCQUF3QixDQUFDLHdEQUF3RCxxQkFBcUIsQ0FBQyx3QkFBd0Isc0hBQXNILENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLGdDQUFnQyxDQUFDLDZCQUE2QixnQ0FBZ0MsQ0FBQyx3R0FBd0csd0JBQXdCLENBQUMsMENBQTBDLFVBQVUsQ0FBQyxxR0FBcUcsd0JBQXdCLENBQUMseUNBQXlDLFVBQVUsQ0FBQywrRkFBK0Ysd0JBQXdCLENBQUMsdUNBQXVDLFVBQVUsQ0FBQyx1QkFBdUIsb0NBQW9DLENBQUMseUZBQXlGLGdDQUFnQyxDQUFDLHFJQUFxSSxnQ0FBZ0MsQ0FBQyx3REFBd0QsZ0NBQWdDLENBQUMsNkNBQTZDLGdDQUFnQyxDQUFDLG9KQUFvSixnQ0FBZ0MsQ0FBQyw0S0FBNEssZ0NBQWdDLENBQUMsNkVBQTZFLDRCQUE0QixDQUFDLDRCQUE0QixDQUFDLDRLQUE0Syw0QkFBNEIsQ0FBQyxvTkFBb04sNEJBQTRCLENBQUMsaURBQWlELDJCQUEyQixDQUFDLHlDQUF5Qyw0SEFBNEgsQ0FBQyxrSUFBa0ksQ0FBQyx1Q0FBdUMsNkhBQTZILENBQUMsa0dBQWtHLGdDQUFnQyxDQUFDLG9CQUFvQix1QkFBdUIsZUFBZSxDQUFDLENBQUMscUVBQXFFLHFCQUFxQixDQUFDLGdDQUFnQyxnQ0FBZ0MsQ0FBQyxVQUFVLENBQUMsK0hBQStILHdCQUF3QixDQUFDLFVBQVUsQ0FBQyw0Q0FBNEMsNEJBQTRCLENBQUMsYUFBYSxDQUFDLHVEQUF1RCxxQkFBcUIsQ0FBQyxzREFBc0QsYUFBYSxDQUFDLDhDQUE4QyxxQkFBcUIsQ0FBQyxtQ0FBbUMsaUNBQWlDLENBQUMsMEdBQTBHLGdDQUFnQyxDQUFDLHVCQUF1QixhQUFhLENBQUMsaUNBQWlDLHVDQUF1QyxDQUFDLCtGQUErRixvQ0FBb0MsQ0FBQyxrQkFBa0IsQ0FBQyw2QkFBNkIscUJBQXFCLENBQUMsK0RBQStELHFCQUFxQixDQUFDLG1DQUFtQyw0QkFBNEIsQ0FBQyx1RUFBdUUsNEJBQTRCLENBQUMsZ0dBQWdHLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxnckJBQWdyQixxQ0FBcUMsQ0FBQyxrRkFBa0Ysd0JBQXdCLENBQUMsZ0lBQWdJLHFCQUFxQixDQUFDLHdxQkFBd3FCLHFDQUFxQyxDQUFDLGdGQUFnRix3QkFBd0IsQ0FBQyw0SEFBNEgscUJBQXFCLENBQUMsd3BCQUF3cEIscUNBQXFDLENBQUMsNEVBQTRFLHdCQUF3QixDQUFDLG9IQUFvSCxxQkFBcUIsQ0FBQyx3d0JBQXd3QixxQ0FBcUMsQ0FBQyw4VkFBOFYsd0JBQXdCLENBQUMsc05BQXNOLFVBQVUsQ0FBQywwUkFBMFIsMEJBQTBCLENBQUMsb0pBQW9KLGlCQUFpQixDQUFDLDROQUE0TixpQ0FBaUMsQ0FBQyxzSEFBc0gsc0NBQXNDLENBQUMsZ3dCQUFnd0IscUNBQXFDLENBQUMsd1ZBQXdWLHdCQUF3QixDQUFDLGtOQUFrTixVQUFVLENBQUMsc1JBQXNSLDBCQUEwQixDQUFDLGtKQUFrSixpQkFBaUIsQ0FBQywwTkFBME4saUNBQWlDLENBQUMsb0hBQW9ILHNDQUFzQyxDQUFDLGd2QkFBZ3ZCLHFDQUFxQyxDQUFDLDRVQUE0VSx3QkFBd0IsQ0FBQywwTUFBME0sVUFBVSxDQUFDLDhRQUE4USwwQkFBMEIsQ0FBQyw4SUFBOEksaUJBQWlCLENBQUMsc05BQXNOLGlDQUFpQyxDQUFDLGdIQUFnSCxzQ0FBc0MsQ0FBQyxhQUFhLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxzQkFBc0Isa0JBQWtCLENBQUMsVUFBVSxDQUFDLDRIQUE0SCw2QkFBNkIsQ0FBQyw0TUFBNE0sYUFBYSxDQUFDLGdDQUFnQyx3QkFBd0IsQ0FBQyxhQUFhLDRCQUE0QixDQUFDLFVBQVUsZUFBZSxDQUFDLHFDQUFxQyxxQkFBcUIsQ0FBQyx5QkFBeUIsMEJBQTBCLENBQUMsa0JBQWtCLENBQUMsd0hBQXdILENBQUMsNEJBQTRCLGFBQWEsQ0RFN3AvRDs7RUFFRSxZQUFZO0VBQ1osU0FBUztFQUNULGlEQUFpRDtBQUNuRCxDQUNBO0VBQ0UsWUFBWTtBQUNkLENBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLDREQUE0RDtBQUM5RCxDQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrcENBQWtwQztFQUNscEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsMEJBQTBCO0FBQzVCLENBQ0E7RUFDRSxZQUFZO0FBQ2QsQ0FDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckIsQ0FDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2IsQ0FDQTtFQUNFLFVBQVU7QUFDWixDQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCLENBQ0E7RUFDRSx5REFBeUQ7QUFDM0QsQ0FDQTtFQUNFLDZCQUE2QjtBQUMvQixDQUNBO0VBQ0UseUJBQXlCO0FBQzNCLENBRUE7RUFDRTtJQUNFLHNDQUFzQztFQUN4QztBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvY2Fycm91c2VsL2NvbnRhaW5lcnMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2luZGlnby1waW5rLmNzc1wiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIpO1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5tYXQtZHJhd2VyLFxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xufVxubWF0LWRyYXdlciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjYTVmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyB2aWV3Qm94PScwIDAgMTYwMCA4MDAnJTNFJTNDZyBzdHJva2U9JyUyMzczYWRmZicgc3Ryb2tlLXdpZHRoPScxMDAnIHN0cm9rZS1vcGFjaXR5PScwJyAlM0UlM0NjaXJjbGUgZmlsbD0nJTIzOGNhNWZmJyBjeD0nMCcgY3k9JzAnIHI9JzE4MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjM4NTljZjInIGN4PScwJyBjeT0nMCcgcj0nMTcwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzdlOTNlNScgY3g9JzAnIGN5PScwJyByPScxNjAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzNzY4YWQ4JyBjeD0nMCcgY3k9JzAnIHI9JzE1MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjM2ZjgxY2InIGN4PScwJyBjeT0nMCcgcj0nMTQwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzY4NzliZicgY3g9JzAnIGN5PScwJyByPScxMzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjE3MGIyJyBjeD0nMCcgY3k9JzAnIHI9JzEyMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjM1YTY3YTUnIGN4PScwJyBjeT0nMCcgcj0nMTEwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzUzNWU5OCcgY3g9JzAnIGN5PScwJyByPScxMDAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzNGI1NThiJyBjeD0nMCcgY3k9JzAnIHI9JzkwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzQ0NGM3ZScgY3g9JzAnIGN5PScwJyByPSc4MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMzZDQzNzEnIGN4PScwJyBjeT0nMCcgcj0nNzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMzYzYTY0JyBjeD0nMCcgY3k9JzAnIHI9JzYwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzJmMzI1OCcgY3g9JzAnIGN5PScwJyByPSc1MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMyODI5NGInIGN4PScwJyBjeT0nMCcgcj0nNDAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMjAyMDNlJyBjeD0nMCcgY3k9JzAnIHI9JzMwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzE5MTczMScgY3g9JzAnIGN5PScwJyByPScyMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMxMjBlMjQnIGN4PScwJyBjeT0nMCcgcj0nMTAwJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG59XG5tYXQtZHJhd2VyLnNpZGVuYXYtY29sbGFwc2VkIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxubWF0LWRyYXdlciAuc2lkZW5hdi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWF0LWRyYXdlciAuc2lkZW5hdi1oZWFkZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cbm1hdC1kcmF3ZXIgdWwge1xuICBwYWRkaW5nOiAwO1xufVxubWF0LWRyYXdlciB1bCBsaSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgbWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodDtcbn1cbm1hdC1kcmF3ZXItY29udGVudC5zaWRlbmF2LWNvbGxhcHNlZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBtYXQtdG9vbGJhciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIi5tYXQtYmFkZ2UtY29udGVudHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjlweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6MjRweH0ubWF0LWgxLC5tYXQtaGVhZGxpbmUsLm1hdC10eXBvZ3JhcGh5IGgxe2ZvbnQ6NDAwIDI0cHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDIsLm1hdC10aXRsZSwubWF0LXR5cG9ncmFwaHkgaDJ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMywubWF0LXN1YmhlYWRpbmctMiwubWF0LXR5cG9ncmFwaHkgaDN7Zm9udDo0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNCwubWF0LXN1YmhlYWRpbmctMSwubWF0LXR5cG9ncmFwaHkgaDR7Zm9udDo0MDAgMTVweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNSwubWF0LXR5cG9ncmFwaHkgaDV7Zm9udDo0MDAgY2FsYygxNHB4ICogMC44MykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1oNiwubWF0LXR5cG9ncmFwaHkgaDZ7Zm9udDo0MDAgY2FsYygxNHB4ICogMC42NykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1ib2R5LXN0cm9uZywubWF0LWJvZHktMntmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtYm9keSwubWF0LWJvZHktMSwubWF0LXR5cG9ncmFwaHl7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJvZHkgcCwubWF0LWJvZHktMSBwLC5tYXQtdHlwb2dyYXBoeSBwe21hcmdpbjowIDAgMTJweH0ubWF0LXNtYWxsLC5tYXQtY2FwdGlvbntmb250OjQwMCAxMnB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZGlzcGxheS00LC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktNHtmb250OjMwMCAxMTJweC8xMTJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotMC4wNWVtO21hcmdpbjowIDAgNTZweH0ubWF0LWRpc3BsYXktMywubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTN7Zm9udDo0MDAgNTZweC81NnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0wLjAyZW07bWFyZ2luOjAgMCA2NHB4fS5tYXQtZGlzcGxheS0yLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMntmb250OjQwMCA0NXB4LzQ4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LTAuMDA1ZW07bWFyZ2luOjAgMCA2NHB4fS5tYXQtZGlzcGxheS0xLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtmb250OjQwMCAzNHB4LzQwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgNjRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJ1dHRvbiwubWF0LXJhaXNlZC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9uLC5tYXQtZmxhdC1idXR0b24sLm1hdC1mYWIsLm1hdC1taW5pLWZhYntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1idXR0b24tdG9nZ2xle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2FyZHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjI0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyMHB4fS5tYXQtY2FyZC1zdWJ0aXRsZSwubWF0LWNhcmQtY29udGVudHtmb250LXNpemU6MTRweH0ubWF0LWNoZWNrYm94e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWx7bGluZS1oZWlnaHQ6MjRweH0ubWF0LWNoaXB7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2hpcCAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbiwubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbntmb250LXNpemU6MThweH0ubWF0LXRhYmxle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtaGVhZGVyLWNlbGx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2FsZW5kYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZToxM3B4fS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCwubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b257Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoe2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWRpYWxvZy10aXRsZXtmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo0MDB9Lm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudHtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS4xMjU7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbntmb250LXNpemU6MTUwJTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9ue2hlaWdodDoxLjVlbTt3aWR0aDoxLjVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb257aGVpZ2h0OjEuMTI1ZW07bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjVlbSAwO2JvcmRlci10b3A6Ljg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc1ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzMzMzMzMzJX0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye3RvcDotMC44NDM3NWVtO3BhZGRpbmctdG9wOi44NDM3NWVtfS5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7Zm9udC1zaXplOjc1JTttYXJnaW4tdG9wOi42NjY2NjY2NjY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNzkxNjY2NjY2N2VtKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNDM3NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxMDJweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIzZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzNTMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjI4MTI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye21hcmdpbi10b3A6LjU0MTY2NjY2NjdlbTt0b3A6Y2FsYygxMDAlIC0gMS42NjY2NjY2NjY3ZW0pfUBtZWRpYSBwcmludHsubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoMC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyMWVtKSBzY2FsZSgwLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMmVtKSBzY2FsZSgwLjc1KX19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouMjVlbSAwIC43NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMDkzNzVlbTttYXJnaW4tdG9wOi0wLjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41OTM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41OTM3NGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzoxZW0gMCAxZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS44NDM3NWVtO21hcmdpbi10b3A6LTAuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1ncmlkLXRpbGUtaGVhZGVyLC5tYXQtZ3JpZC10aWxlLWZvb3Rlcntmb250LXNpemU6MTRweH0ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lLC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH1pbnB1dC5tYXQtaW5wdXQtZWxlbWVudHttYXJnaW4tdG9wOi0wLjA2MjVlbX0ubWF0LW1lbnUtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1wYWdpbmF0b3IsLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHh9Lm1hdC1yYWRpby1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3R7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3QtdHJpZ2dlcntoZWlnaHQ6MS4xMjVlbX0ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtc3RlcHBlci12ZXJ0aWNhbCwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXN0ZXAtbGFiZWx7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3J7Zm9udC13ZWlnaHQ6bm9ybWFsfS5tYXQtc3RlcC1sYWJlbC1lcnJvcntmb250LXNpemU6MTRweH0ubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWR7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdGFiLWdyb3Vwe2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdG9vbGJhciwubWF0LXRvb2xiYXIgaDEsLm1hdC10b29sYmFyIGgyLC5tYXQtdG9vbGJhciBoMywubWF0LXRvb2xiYXIgaDQsLm1hdC10b29sYmFyIGg1LC5tYXQtdG9vbGJhciBoNntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowfS5tYXQtdG9vbHRpcHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206NnB4fS5tYXQtdG9vbHRpcC1oYW5kc2V0e2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHh9Lm1hdC1saXN0LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1saXN0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweH0ubWF0LW9wdGdyb3VwLWxhYmVse2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1zaW1wbGUtc25hY2tiYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2xpbmUtaGVpZ2h0OjE7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo1MDB9Lm1hdC10cmVle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtdHJlZS1ub2RlLC5tYXQtbmVzdGVkLXRyZWUtbm9kZXtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjE0cHh9Lm1hdC1yaXBwbGV7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtcmlwcGxlOm5vdCg6ZW1wdHkpe3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVke292ZXJmbG93OnZpc2libGV9Lm1hdC1yaXBwbGUtZWxlbWVudHtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSx0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO3RyYW5zZm9ybTpzY2FsZSgwKX0uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnR7ZGlzcGxheTpub25lfS5jZGstdmlzdWFsbHktaGlkZGVue2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O291dGxpbmU6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX0uY2RrLW92ZXJsYXktY29udGFpbmVyLC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO29wYWNpdHk6MH0uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjF9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpey5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMzIpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnR7LyohKi99QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR7LyohKi99LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxse2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXN9LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpe2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZXtyZXNpemU6bm9uZX10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5ne3BhZGRpbmc6MnB4IDAgIWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG8gIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudH10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3h7cGFkZGluZzoycHggMCAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ggIWltcG9ydGFudDtoZWlnaHQ6MCAhaW1wb3J0YW50fS5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb246aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSwubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LWFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiMzZjUxYjV9Lm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2ZmNDA4MX0ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2Y0NDMzNn0ubWF0LW9wdGdyb3VwLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHNldWRvLWNoZWNrYm94e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBzZXVkby1jaGVja2JveDo6YWZ0ZXJ7Y29sb3I6I2ZhZmFmYX0ubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtjb2xvcjojYjBiMGIwfS5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6IzNmNTFiNX0ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2ZmNDA4MX0ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNiMGIwYjB9Lm1hdC1lbGV2YXRpb24tejB7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxe2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejJ7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16M3tib3gtc2hhZG93OjBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo0e2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo1e2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo2e2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16N3tib3gtc2hhZG93OjBweCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMnB4IDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejh7Ym94LXNoYWRvdzowcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo5e2JveC1zaGFkb3c6MHB4IDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTB7Ym94LXNoYWRvdzowcHggNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA0cHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTF7Ym94LXNoYWRvdzowcHggNnB4IDdweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA0cHggMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTJ7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTN7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTR7Ym94LXNoYWRvdzowcHggN3B4IDlweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjZweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTV7Ym94LXNoYWRvdzowcHggOHB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMjhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTZ7Ym94LXNoYWRvdzowcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE3e2JveC1zaGFkb3c6MHB4IDhweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxOHtib3gtc2hhZG93OjBweCA5cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA3cHggMzRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTl7Ym94LXNoYWRvdzowcHggOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggN3B4IDM2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIwe2JveC1zaGFkb3c6MHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjF7Ym94LXNoYWRvdzowcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDhweCA0MHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyMntib3gtc2hhZG93OjBweCAxMHB4IDE0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOHB4IDQycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIze2JveC1zaGFkb3c6MHB4IDExcHggMTRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA5cHggNDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjR7Ym94LXNoYWRvdzowcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYXBwLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXJ7ZGlzcGxheTpub25lfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcil7YmFja2dyb3VuZDojZmZmfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYmFkZ2UtY29udGVudHtjb2xvcjojZmZmO2JhY2tncm91bmQ6IzNmNTFiNX0uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9Lm1hdC1iYWRnZS1hY2NlbnQgLm1hdC1iYWRnZS1jb250ZW50e2JhY2tncm91bmQ6I2ZmNDA4MTtjb2xvcjojZmZmfS5tYXQtYmFkZ2Utd2FybiAubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1iYWRnZXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LWJhZGdlLWhpZGRlbiAubWF0LWJhZGdlLWNvbnRlbnR7ZGlzcGxheTpub25lfS5tYXQtYmFkZ2UtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50e2JhY2tncm91bmQ6I2I5YjliOTtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1iYWRnZS1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zaXRpb246dHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O3RyYW5zZm9ybTpzY2FsZSgwLjYpO292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztwb2ludGVyLWV2ZW50czpub25lfS5uZy1hbmltYXRlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCwubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGV7dHJhbnNpdGlvbjpub25lfS5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZle3RyYW5zZm9ybTpub25lfS5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bGluZS1oZWlnaHQ6MTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi04cHh9Lm1hdC1iYWRnZS1tZWRpdW0gLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjIycHg7aGVpZ2h0OjIycHg7bGluZS1oZWlnaHQ6MjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0yMnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTFweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xMXB4fS5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7bGluZS1oZWlnaHQ6MjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTI4cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTE0cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTE0cHh9Lm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVye2JveC1zaGFkb3c6MHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9ue2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnl7Y29sb3I6IzNmNTFiNX0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1pY29uLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtc3Ryb2tlZC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtvcGFjaXR5Oi4xO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZDojMDAwfS5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mbGF0LWJ1dHRvbiwubWF0LXJhaXNlZC1idXR0b24sLm1hdC1mYWIsLm1hdC1taW5pLWZhYntjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7Y29sb3I6I2ZmZn0ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1mYWIubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnR7Y29sb3I6I2ZmZn0ubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiwubWF0LWZhYi5tYXQtd2FybiwubWF0LW1pbmktZmFiLm1hdC13YXJue2NvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLm1hdC1mYWIubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtZmxhdC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWZhYjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsLm1hdC1idXR0b24tdG9nZ2xlLWdyb3Vwe2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3gtc2hhZG93Om5vbmV9Lm1hdC1idXR0b24tdG9nZ2xle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfVtkaXI9cnRsXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpub25lO2JvcmRlci10b3A6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNiZGJkYmR9Lm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3JkZXI6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhcmR7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWNhcmQubWF0LWNhcmQtZmxhdDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1jYXJkLXN1YnRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1jaGVja21hcmt7ZmlsbDojZmFmYWZhfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGh7c3Ryb2tlOiNmYWZhZmEgIWltcG9ydGFudH0ubWF0LWNoZWNrYm94LW1peGVkbWFya3tiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWNoZWNrZWQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2IwYjBiMH0ubWF0LWNoZWNrYm94LWRpc2FibGVkOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIC5tYXQtY2hlY2tib3gtZnJhbWV7Ym9yZGVyLWNvbG9yOiNiMGIwYjB9Lm1hdC1jaGVja2JveC1kaXNhYmxlZCAubWF0LWNoZWNrYm94LWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNoZWNrYm94IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiMzZjUxYjV9Lm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiNmZjQwODF9Lm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6I2Y0NDMzNn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXB7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCk6YWN0aXZle2JveC1zaGFkb3c6MHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXJ7b3BhY2l0eTouNTR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLWRpc2FibGVke29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOjphZnRlcntiYWNrZ3JvdW5kOiMwMDB9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC10YWJsZXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC10YWJsZSB0aGVhZCwubWF0LXRhYmxlIHRib2R5LC5tYXQtdGFibGUgdGZvb3QsbWF0LWhlYWRlci1yb3csbWF0LXJvdyxtYXQtZm9vdGVyLXJvdyxbbWF0LWhlYWRlci1yb3ddLFttYXQtcm93XSxbbWF0LWZvb3Rlci1yb3ddLC5tYXQtdGFibGUtc3RpY2t5e2JhY2tncm91bmQ6aW5oZXJpdH1tYXQtcm93LG1hdC1oZWFkZXItcm93LG1hdC1mb290ZXItcm93LHRoLm1hdC1oZWFkZXItY2VsbCx0ZC5tYXQtY2VsbCx0ZC5tYXQtZm9vdGVyLWNlbGx7Ym9yZGVyLWJvdHRvbS1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1oZWFkZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jZWxsLC5tYXQtZm9vdGVyLWNlbGx7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2FsZW5kYXItYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZSwubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9ue2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYWxlbmRhci1ib2R5LWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSwuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7Y29sb3I6I2ZmZn0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSg2Myw4MSwxODEsLjQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50e2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsNjQsMTI5LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZXtjb2xvcjojM2Y1MWI1fS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZGlhbG9nLWNvbnRhaW5lcntib3gtc2hhZG93OjBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRpdmlkZXJ7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1kaXZpZGVyLXZlcnRpY2Fse2JvcmRlci1yaWdodC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYWN0aW9uLXJvd3tib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX1AbWVkaWEoaG92ZXI6IG5vbmUpey5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9fS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9ue2NvbG9yOmluaGVyaXR9Lm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50e2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnQsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MikgMCUsIHJnYmEoMCwgMCwgMCwgMC40MikgMzMlLCB0cmFuc3BhcmVudCAwJSk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjAyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7Y29sb3I6cmdiYSgwLDAsMCwuMDYpfS5tYXQtaWNvbi5tYXQtcHJpbWFyeXtjb2xvcjojM2Y1MWI1fS5tYXQtaWNvbi5tYXQtYWNjZW50e2NvbG9yOiNmZjQwODF9Lm1hdC1pY29uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojM2Y1MWI1fS5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2ZmNDA4MX0ubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVte2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1saXN0LWl0ZW0tZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtbGlzdC1vcHRpb246aG92ZXIsLm1hdC1saXN0LW9wdGlvbjpmb2N1cywubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMsLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciwubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3Vze2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uLC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmhvdmVyLC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmZvY3Vze2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtbWVudS1wYW5lbHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1tZW51LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtbWVudS1pdGVte2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSwubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF06OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1tZW51LWl0ZW06aG92ZXI6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZDpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1wYWdpbmF0b3J7YmFja2dyb3VuZDojZmZmfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KTtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2M1Y2FlOX0ubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojYzVjYWU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmY4MGFifS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmODBhYn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLC5tYXQtc3Bpbm5lciBjaXJjbGV7c3Ryb2tlOiMzZjUxYjV9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZXtzdHJva2U6I2ZmNDA4MX0ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGV7c3Ryb2tlOiNmNDQzMzZ9Lm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6IzNmNTFiNX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZmY0MDgxfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudDphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1zZWxlY3QtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtc2VsZWN0LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWRyYXdlci1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRyYXdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItcHVzaHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpe2JveC1zaGFkb3c6MHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3due2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYzLDgxLDE4MSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYiwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYiwubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuMil9Lm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhKGhvdmVyOiBub25lKXsubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6bm9uZX19Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtb3B0aW9uYWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZXtib3JkZXItbGVmdC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlciwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5le2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtc29ydC1oZWFkZXItYXJyb3d7Y29sb3I6Izc1NzU3NX0ubWF0LXRhYi1uYXYtYmFyLC5tYXQtdGFiLWhlYWRlcntib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMil9Lm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLW5hdi1iYXIsLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLWhlYWRlcntib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLWJvdHRvbTpub25lfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWdyb3VwW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1dIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1de2JvcmRlci1ib3R0b206bm9uZTtib3JkZXItdG9wOm5vbmV9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgxOTcsMjAyLDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMTI4LDE3MSwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMDUsMjEwLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5NywyMDIsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9ue2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwxMjgsMTcxLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rcywubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9ue2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMDUsMjEwLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9ue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10b29sYmFye2JhY2tncm91bmQ6I2Y1ZjVmNTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10b29sYmFyLm1hdC1wcmltYXJ5e2JhY2tncm91bmQ6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtdG9vbGJhci5tYXQtYWNjZW50e2JhY2tncm91bmQ6I2ZmNDA4MTtjb2xvcjojZmZmfS5tYXQtdG9vbGJhci5tYXQtd2FybntiYWNrZ3JvdW5kOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtdmFsdWUsLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LWFycm93LC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6aW5oZXJpdH0ubWF0LXRvb2xiYXIgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2x0aXB7YmFja2dyb3VuZDpyZ2JhKDk3LDk3LDk3LC45KX0ubWF0LXRyZWV7YmFja2dyb3VuZDojZmZmfS5tYXQtdHJlZS1ub2RlLC5tYXQtbmVzdGVkLXRyZWUtbm9kZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbmFjay1iYXItY29udGFpbmVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpO2JhY2tncm91bmQ6IzMyMzIzMjtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2NvbG9yOiNmZjQwODF9XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-template",
          templateUrl: "./template.component.html",
          styleUrls: ["./template.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/features/carrousel/index.ts ***!
    \*********************************************/

  /*! exports provided: CarrouselModule */

  /***/
  function srcAppFeaturesCarrouselIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _carrousel_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./carrousel.module */
    "./src/app/features/carrousel/carrousel.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CarrouselModule", function () {
      return _carrousel_module__WEBPACK_IMPORTED_MODULE_0__["CarrouselModule"];
    });
    /***/

  },

  /***/
  "./src/app/features/carrousel/material.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/features/carrousel/material.module.ts ***!
    \*******************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppFeaturesCarrouselMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! mat-progress-buttons */
    "./node_modules/mat-progress-buttons/__ivy_ngcc__/esm2015/mat-progress-buttons.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");

    var MaterialModules = [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_18__["MatProgressButtonsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [MaterialModules, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_18__["MatProgressButtonsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_18__["MatProgressButtonsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"]],
        exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_18__["MatProgressButtonsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: MaterialModules,
          exports: MaterialModules
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/mocks/fake-backend.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/features/carrousel/mocks/fake-backend.service.ts ***!
    \******************************************************************/

  /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcAppFeaturesCarrouselMocksFakeBackendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return FakeBackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return fakeBackendProvider;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // array in local storage for registered users


    var profilesStorage = JSON.parse(sessionStorage.getItem("profiles")) || [];
    var slidesStorage = JSON.parse(sessionStorage.getItem("slides")) || [];

    var FakeBackendInterceptor =
    /*#__PURE__*/
    function () {
      function FakeBackendInterceptor() {
        _classCallCheck(this, FakeBackendInterceptor);

        var profiles = [{
          id: 1,
          name: "Age - inférieur à 45 ans",
          idSlides: "1,2,3"
        }, {
          id: 2,
          name: "Age - entre à 45 et 55 ans",
          idSlides: "2,3,4"
        }, {
          id: 3,
          name: "Age - entre 46 et 55 ans",
          idSlides: "1,4,5"
        }, {
          id: 4,
          name: "Age - entre 56 et 70 ans",
          idSlides: "2,4"
        }, {
          id: 5,
          name: "Age - supérieur à 70 ans",
          idSlides: "5"
        }];
        var slides = [{
          id: 1,
          title: "Pourquoi faut-il souscrire une assurance de prêt immobilier ?",
          text: "Avant de rentrer dans le détail du taux d’assurance d’un prêt immobilier en fonction de l’âge, revenons un peu aux bases. Peut-être ne le saviez-vous pas, mais souscrire une assurance ...",
          image: "https://apprendre-le-cinema.fr/wp-content/uploads/2015/05/assurance.jpg",
          link: "https://www.hellopret.fr/assurance-pret-immobilier/taux-d-assurance-pret-immobilier-en-fonction-de-l-age/",
          visible: true
        }, {
          id: 2,
          title: "Comment est fixé le taux moyen d’assurance prêt immobilier en fonction de l’âge ?",
          text: "En fin lecteur que vous êtes, il ne vous a pas échappé que la fourchette de taux par tranche d’âge est très large. Qu’est-ce qui explique un tel écart ?...",
          image: "https://ce2016-production.s3.eu-central-1.amazonaws.com/store/photo/original/Liste%20et%20explications%20des%20diff%C3%A9rentesassurances%20allemandes.jpg",
          link: "https://www.hellopret.fr/assurance-pret-immobilier/taux-d-assurance-pret-immobilier-en-fonction-de-l-age/",
          visible: true
        }, {
          id: 3,
          title: "Pourquoi faut-il souscrire une assurance de prêt immobilier ?",
          text: "Avant de rentrer dans le détail du taux d’assurance d’un prêt immobilier en fonction de l’âge, revenons un peu aux bases. Peut-être ne le saviez-vous pas, mais souscrire une assurance emprunteur n’est pas une obligation légale...",
          image: "https://apprendre-le-cinema.fr/wp-content/uploads/2015/05/assurance.jpg",
          link: "https://www.hellopret.fr/assurance-pret-immobilier/taux-d-assurance-pret-immobilier-en-fonction-de-l-age/",
          visible: true
        }, {
          id: 4,
          title: "Exemples de calculs du coût de l’assurance de prêt à 30 ans",
          text: "C’est le moment de dégainer votre calculette pour un exemple chiffré. Vous avez 30 ans, vous empruntez 220 000 € sur 20 ans. Vous obtenez un taux de 0.25 % en contrat groupe....",
          image: "https://www.assuroweb.fr/v2/images/banner1.png",
          link: "https://www.hellopret.fr/assurance-pret-immobilier/taux-d-assurance-pret-immobilier-en-fonction-de-l-age/",
          visible: true
        }, {
          id: 5,
          title: "Existe-t-il un âge limite pour assurer son prêt immobilier ?",
          text: "La question est légitime ! La réponse théorique est non, il n’existe pas d’âge limite pour s’assurer. Tout comme en théorie, il n’existe pas non plus d’âge au-delà duquel vous ne pouvez plus emprunter....",
          image: "https://www.assuroweb.fr/v2/images/banner1.png",
          link: "https://www.meilleurtaux.com/images/ade/guide-assurance-emprunteur/surprime-assurance-pret-immobilier.jpg",
          visible: false
        }];
        sessionStorage.setItem("profiles", JSON.stringify(profiles));
        sessionStorage.setItem("slides", JSON.stringify(slides));
      }

      _createClass(FakeBackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var url = request.url,
              method = request.method,
              headers = request.headers,
              body = request.body; // wrap in delayed observable to simulate server api call

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());

          function handleRoute() {
            switch (true) {
              case url.endsWith("/profiles") && method === "GET":
                return getProfiles();

              case url.endsWith("/slides") && method === "GET":
                return getSlides();

              case url.match(/\/profile\/\d+$/) && method === "PUT":
                return updateProfileAfterDragSlides();

              case url.endsWith("/slide") && method === "POST":
                return saveSlide();

              /*         case url.endsWith("/movie") && method === "POST":
                return saveMovie();
              case url.match(/\/movie\/\d+$/) && method === "PUT":
                return updateMovie();
              case url.match(/\/movie\/\d+$/) && method === "DELETE":
                return deleteMovie();
              case url.match(/\/movie\/\d+$/) && method === "POST":
                return addMovieToMyCollection(); */

              default:
                // pass through any requests not handled above
                return next.handle(request);
            }
          } // route functions


          function getProfiles() {
            return ok(profilesStorage);
          }

          function getSlides() {
            return ok(slidesStorage);
          }

          function updateProfileAfterDragSlides() {
            var profileUpdated = body;
            profilesStorage = profilesStorage.filter(function (profile) {
              return profile.id !== idSlideFromUrl();
            });
            profilesStorage.push(profileUpdated);
            sessionStorage.setItem("profiles", JSON.stringify(profilesStorage));
            return ok("profile  " + profileUpdated.name + "  successfully updated");
          }

          function saveSlide() {
            var slideSaved = {
              id: Math.floor(Math.random() * 1000),
              title: body.slide.title,
              text: body.slide.text,
              link: body.slide.link,
              image: body.slide.image,
              visible: body.slide.visible
            };

            if (slidesStorage.find(function (slide) {
              return slide.title === slideSaved.title;
            })) {
              return error("slide  " + slideSaved.title + "  is already taken");
            }

            slidesStorage = _toConsumableArray(slidesStorage);
            slidesStorage.push(slideSaved);
            sessionStorage.setItem("slides", JSON.stringify(slidesStorage));
            var idSlide = slideSaved.id;
            var idProfilesSelected = body.idProfiles.split(",").map(function (x) {
              return +x;
            });
            profilesStorage = _toConsumableArray(profilesStorage);
            idProfilesSelected.filter(function (idProfile) {
              var profileIndex = profilesStorage.findIndex(function (profile) {
                return profile.id === idProfile;
              });
              profilesStorage[profileIndex] = Object.assign({}, profilesStorage[profileIndex]);
              profilesStorage[profileIndex].idSlides = profilesStorage[profileIndex].idSlides + "," + idSlide;
            });
            sessionStorage.removeItem("profiles");
            sessionStorage.setItem("profiles", JSON.stringify(profilesStorage));
            return ok(slideSaved);
          }
          /*
          function updateMovie() {
            const movieSaved = body;
            moviesStorage = moviesStorage.filter(
              (movie: Movie) => movie.id !== idFromUrl()
            );
            moviesStorage.push(movieSaved);
            sessionStorage.setItem("movies", JSON.stringify(moviesStorage));
            return ok("movie  " + movieSaved.title + "  successfully updated");
          }
          function addMovieToMyCollection() {
            let currentMovie: Movie = moviesStorage.find(
              (movie: Movie) => movie.id == idFromUrl()
            );
                  moviesStorage = moviesStorage.filter(
              (movie: Movie) => movie.id !== currentMovie.id
            );
                  const currentMovieObject = Object.assign({}, currentMovie);
                  currentMovieObject.selected = !currentMovieObject.selected;
            moviesStorage.push(currentMovieObject);
            sessionStorage.setItem("movies", JSON.stringify(moviesStorage));
                  if (currentMovieObject.selected == true) {
              return ok(
                "movie  " +
                  currentMovieObject.title +
                  "  successfully added to collection"
              );
            } else
              return ok(
                "movie  " +
                  currentMovieObject.title +
                  "  successfully remove to collection"
              );
          }
                function deleteMovie() {
            moviesStorage = moviesStorage.filter(
              (movie: Movie) => movie.id !== idFromUrl()
            );
            sessionStorage.setItem("movies", JSON.stringify(moviesStorage));
            return ok("movie successfully deleted");
          } */
          // helper functions


          function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
              status: 200,
              body: body
            }));
          }

          function serverError() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
              status: 500,
              error: {
                message: "An error occured"
              }
            });
          }

          function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
              error: {
                message: message
              }
            });
          }

          function idSlideFromUrl() {
            var urlParts = url.split("/");
            return parseInt(urlParts[urlParts.length - 1]);
          }
        }
      }]);

      return FakeBackendInterceptor;
    }();

    FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) {
      return new (t || FakeBackendInterceptor)();
    };

    FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FakeBackendInterceptor,
      factory: FakeBackendInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    var fakeBackendProvider = {
      // use fake backend in place of Http service for backend-less development
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: FakeBackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/features/carrousel/mocks/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/features/carrousel/mocks/index.ts ***!
    \***************************************************/

  /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcAppFeaturesCarrouselMocksIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _fake_backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./fake-backend.service */
    "./src/app/features/carrousel/mocks/fake-backend.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return _fake_backend_service__WEBPACK_IMPORTED_MODULE_0__["FakeBackendInterceptor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return _fake_backend_service__WEBPACK_IMPORTED_MODULE_0__["fakeBackendProvider"];
    });
    /***/

  },

  /***/
  "./src/app/features/carrousel/pipes/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/features/carrousel/pipes/index.ts ***!
    \***************************************************/

  /*! exports provided: ProfileSlidesPipe */

  /***/
  function srcAppFeaturesCarrouselPipesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _profile_slides_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profile-slides.pipe */
    "./src/app/features/carrousel/pipes/profile-slides.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileSlidesPipe", function () {
      return _profile_slides_pipe__WEBPACK_IMPORTED_MODULE_0__["ProfileSlidesPipe"];
    });
    /***/

  },

  /***/
  "./src/app/features/carrousel/pipes/profile-slides.pipe.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/features/carrousel/pipes/profile-slides.pipe.ts ***!
    \*****************************************************************/

  /*! exports provided: ProfileSlidesPipe */

  /***/
  function srcAppFeaturesCarrouselPipesProfileSlidesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileSlidesPipe", function () {
      return ProfileSlidesPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileSlidesPipe =
    /*#__PURE__*/
    function () {
      function ProfileSlidesPipe() {
        _classCallCheck(this, ProfileSlidesPipe);
      }

      _createClass(ProfileSlidesPipe, [{
        key: "transform",
        value: function transform(slides, profiles, idProfile, InitSlides) {
          if (idProfile == undefined) return slides;else {
            var profile = profiles.find(function (profile) {
              return profile.id === idProfile;
            });
            return this.getSlidesByIdProfile(profile, InitSlides);
          }
        }
      }, {
        key: "getSlidesByIdProfile",
        value: function getSlidesByIdProfile(profile, slides) {
          var slidesAfterFilerByidProfile = [];
          var idSlidesByProfile;
          idSlidesByProfile = profile.idSlides.split(",").map(function (str) {
            return parseInt(str);
          });
          idSlidesByProfile.filter(function (idSlide) {
            var slideSelected = slides.find(function (slide) {
              return slide.id === idSlide;
            });
            if (slideSelected) slidesAfterFilerByidProfile.push(slideSelected);
          });
          return slidesAfterFilerByidProfile;
        }
      }]);

      return ProfileSlidesPipe;
    }();

    ProfileSlidesPipe.ɵfac = function ProfileSlidesPipe_Factory(t) {
      return new (t || ProfileSlidesPipe)();
    };

    ProfileSlidesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "profileSlides",
      type: ProfileSlidesPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileSlidesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "profileSlides"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/services/carrousel.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/features/carrousel/services/carrousel.service.ts ***!
    \******************************************************************/

  /*! exports provided: CarrouselService */

  /***/
  function srcAppFeaturesCarrouselServicesCarrouselServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrouselService", function () {
      return CarrouselService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../store/actions */
    "./src/app/features/carrousel/store/actions/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

    var CarrouselService =
    /*#__PURE__*/
    function () {
      function CarrouselService(http, router, store) {
        _classCallCheck(this, CarrouselService);

        this.http = http;
        this.router = router;
        this.store = store;
      }

      _createClass(CarrouselService, [{
        key: "getProfiles",
        value: function getProfiles() {
          return this.http.get("http://localhost:4200:/profiles");
        }
      }, {
        key: "getSlides",
        value: function getSlides() {
          return this.http.get("http://localhost:4200:/slides");
        }
      }, {
        key: "updateProfileAfterDragSlides",
        value: function updateProfileAfterDragSlides(profile) {
          return this.http.put("http://localhost:4200:/profile/" + profile.id, profile);
        }
      }, {
        key: "addSlide",
        value: function addSlide(slide, idProfiles) {
          var slideDto = {
            slide: slide,
            idProfiles: idProfiles
          };
          console.log(slideDto);
          return this.http.post("http://localhost:4200:/slide", slideDto);
        }
        /*
            deleteMovie(movieId: number) {
          return this.http.delete("http://localhost:4200:/movie/" + movieId);
        }
        addMovieToMyCollection(movieId: number) {
          return this.http.post("http://localhost:4200:/movie/" + movieId, {});
        }
        */

      }, {
        key: "getProfilesAndSlidesAfterRefreshPage",
        value: function getProfilesAndSlidesAfterRefreshPage() {
          var _this31 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (rs) {
            return rs instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).subscribe(function (event) {
            if (event.id === 1 && event.url === event.urlAfterRedirects) {
              _this31.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILES"]());

              _this31.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["GET_SLIDES"]());
            }
          });
        }
      }]);

      return CarrouselService;
    }();

    CarrouselService.ɵfac = function CarrouselService_Factory(t) {
      return new (t || CarrouselService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    CarrouselService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CarrouselService,
      factory: CarrouselService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarrouselService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/services/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/features/carrousel/services/index.ts ***!
    \******************************************************/

  /*! exports provided: CarrouselService */

  /***/
  function srcAppFeaturesCarrouselServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _carrousel_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./carrousel.service */
    "./src/app/features/carrousel/services/carrousel.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CarrouselService", function () {
      return _carrousel_service__WEBPACK_IMPORTED_MODULE_0__["CarrouselService"];
    });
    /***/

  },

  /***/
  "./src/app/features/carrousel/store/actions/index.ts":
  /*!***********************************************************!*\
    !*** ./src/app/features/carrousel/store/actions/index.ts ***!
    \***********************************************************/

  /*! exports provided: GET_PROFILES, GET_PROFILES_SUCCESS, GET_PROFILES_ERROR, GET_PROFILES_SELECTED, UPDATE_PROFILE_AFTER_DRAG_SLIDES, UPDATE_PROFILE_AFTER_DRAG_SLIDES_SUCCESS, UPDATE_PROFILE_AFTER_DRAG_SLIDES_ERROR, UPDATE_PROFILE_AFTER_ADD_SLIDE_SUCCESS, GET_SLIDES, GET_SLIDES_SUCCESS, GET_SLIDES_ERROR, ADD_SLIDE_AND_UPDATE_PROFILE, ADD_SLIDE_SUCCESS, ADD_SLIDE_ERROR */

  /***/
  function srcAppFeaturesCarrouselStoreActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _profiles_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profiles.action */
    "./src/app/features/carrousel/store/actions/profiles.action.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GET_PROFILES", function () {
      return _profiles_action__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILES"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GET_PROFILES_SUCCESS", function () {
      return _profiles_action__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILES_SUCCESS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GET_PROFILES_ERROR", function () {
      return _profiles_action__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILES_ERROR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GET_PROFILES_SELECTED", function () {
      return _profiles_action__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILES_SELECTED"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_AFTER_DRAG_SLIDES", function () {
      return _profiles_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PROFILE_AFTER_DRAG_SLIDES"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_AFTER_DRAG_SLIDES_SUCCESS", function () {
      return _profiles_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PROFILE_AFTER_DRAG_SLIDES_SUCCESS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_AFTER_DRAG_SLIDES_ERROR", function () {
      return _profiles_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PROFILE_AFTER_DRAG_SLIDES_ERROR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_AFTER_ADD_SLIDE_SUCCESS", function () {
      return _profiles_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PROFILE_AFTER_ADD_SLIDE_SUCCESS"];
    });
    /* harmony import */


    var _slides_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./slides.action */
    "./src/app/features/carrousel/store/actions/slides.action.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GET_SLIDES", function () {
      return _slides_action__WEBPACK_IMPORTED_MODULE_1__["GET_SLIDES"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GET_SLIDES_SUCCESS", function () {
      return _slides_action__WEBPACK_IMPORTED_MODULE_1__["GET_SLIDES_SUCCESS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GET_SLIDES_ERROR", function () {
      return _slides_action__WEBPACK_IMPORTED_MODULE_1__["GET_SLIDES_ERROR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ADD_SLIDE_AND_UPDATE_PROFILE", function () {
      return _slides_action__WEBPACK_IMPORTED_MODULE_1__["ADD_SLIDE_AND_UPDATE_PROFILE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ADD_SLIDE_SUCCESS", function () {
      return _slides_action__WEBPACK_IMPORTED_MODULE_1__["ADD_SLIDE_SUCCESS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ADD_SLIDE_ERROR", function () {
      return _slides_action__WEBPACK_IMPORTED_MODULE_1__["ADD_SLIDE_ERROR"];
    });
    /***/

  },

  /***/
  "./src/app/features/carrousel/store/actions/profiles.action.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/features/carrousel/store/actions/profiles.action.ts ***!
    \*********************************************************************/

  /*! exports provided: GET_PROFILES, GET_PROFILES_SUCCESS, GET_PROFILES_ERROR, GET_PROFILES_SELECTED, UPDATE_PROFILE_AFTER_DRAG_SLIDES, UPDATE_PROFILE_AFTER_DRAG_SLIDES_SUCCESS, UPDATE_PROFILE_AFTER_DRAG_SLIDES_ERROR, UPDATE_PROFILE_AFTER_ADD_SLIDE_SUCCESS */

  /***/
  function srcAppFeaturesCarrouselStoreActionsProfilesActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_PROFILES", function () {
      return GET_PROFILES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_PROFILES_SUCCESS", function () {
      return GET_PROFILES_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_PROFILES_ERROR", function () {
      return GET_PROFILES_ERROR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_PROFILES_SELECTED", function () {
      return GET_PROFILES_SELECTED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_AFTER_DRAG_SLIDES", function () {
      return UPDATE_PROFILE_AFTER_DRAG_SLIDES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_AFTER_DRAG_SLIDES_SUCCESS", function () {
      return UPDATE_PROFILE_AFTER_DRAG_SLIDES_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_AFTER_DRAG_SLIDES_ERROR", function () {
      return UPDATE_PROFILE_AFTER_DRAG_SLIDES_ERROR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_AFTER_ADD_SLIDE_SUCCESS", function () {
      return UPDATE_PROFILE_AFTER_ADD_SLIDE_SUCCESS;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

    var GET_PROFILES = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Profile] Get_Profiles");
    var GET_PROFILES_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Profile] Get_Profiles_Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var GET_PROFILES_ERROR = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Profile] Get_Profiles_Error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var GET_PROFILES_SELECTED = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Profile] Get_Profiles_Selected", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var UPDATE_PROFILE_AFTER_DRAG_SLIDES = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Profile] Update_Profile_After_Drag_Slides", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var UPDATE_PROFILE_AFTER_DRAG_SLIDES_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Profile] Update_Profile_After_Drag_Slides_Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var UPDATE_PROFILE_AFTER_DRAG_SLIDES_ERROR = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Profile] Update_Profile_After_Drag_Slides_Error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var UPDATE_PROFILE_AFTER_ADD_SLIDE_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Profile] Update_Profile_After_Add_Slide_Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/features/carrousel/store/actions/slides.action.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/features/carrousel/store/actions/slides.action.ts ***!
    \*******************************************************************/

  /*! exports provided: GET_SLIDES, GET_SLIDES_SUCCESS, GET_SLIDES_ERROR, ADD_SLIDE_AND_UPDATE_PROFILE, ADD_SLIDE_SUCCESS, ADD_SLIDE_ERROR */

  /***/
  function srcAppFeaturesCarrouselStoreActionsSlidesActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_SLIDES", function () {
      return GET_SLIDES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_SLIDES_SUCCESS", function () {
      return GET_SLIDES_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_SLIDES_ERROR", function () {
      return GET_SLIDES_ERROR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_SLIDE_AND_UPDATE_PROFILE", function () {
      return ADD_SLIDE_AND_UPDATE_PROFILE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_SLIDE_SUCCESS", function () {
      return ADD_SLIDE_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_SLIDE_ERROR", function () {
      return ADD_SLIDE_ERROR;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

    var GET_SLIDES = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SLIDE] Get_Slides");
    var GET_SLIDES_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Slide] Get_Slides_Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var GET_SLIDES_ERROR = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Slide] Get_Slides_Error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var ADD_SLIDE_AND_UPDATE_PROFILE = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Slide] Add_Slide", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var ADD_SLIDE_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Slide] Add_Slide_success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var ADD_SLIDE_ERROR = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Slide] Add_Slide_error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/features/carrousel/store/effects/effects.ts":
  /*!*************************************************************!*\
    !*** ./src/app/features/carrousel/store/effects/effects.ts ***!
    \*************************************************************/

  /*! exports provided: effects */

  /***/
  function srcAppFeaturesCarrouselStoreEffectsEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "effects", function () {
      return effects;
    });
    /* harmony import */


    var _profiles_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profiles.effect */
    "./src/app/features/carrousel/store/effects/profiles.effect.ts");
    /* harmony import */


    var _slides_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./slides.effect */
    "./src/app/features/carrousel/store/effects/slides.effect.ts");

    var effects = [_profiles_effect__WEBPACK_IMPORTED_MODULE_0__["ProfilesEffect"], _slides_effect__WEBPACK_IMPORTED_MODULE_1__["SlidesEffect"]];
    /***/
  },

  /***/
  "./src/app/features/carrousel/store/effects/index.ts":
  /*!***********************************************************!*\
    !*** ./src/app/features/carrousel/store/effects/index.ts ***!
    \***********************************************************/

  /*! exports provided: ProfilesEffect, SlidesEffect, effects */

  /***/
  function srcAppFeaturesCarrouselStoreEffectsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _profiles_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profiles.effect */
    "./src/app/features/carrousel/store/effects/profiles.effect.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfilesEffect", function () {
      return _profiles_effect__WEBPACK_IMPORTED_MODULE_0__["ProfilesEffect"];
    });
    /* harmony import */


    var _slides_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./slides.effect */
    "./src/app/features/carrousel/store/effects/slides.effect.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SlidesEffect", function () {
      return _slides_effect__WEBPACK_IMPORTED_MODULE_1__["SlidesEffect"];
    });
    /* harmony import */


    var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./effects */
    "./src/app/features/carrousel/store/effects/effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "effects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_2__["effects"];
    });
    /***/

  },

  /***/
  "./src/app/features/carrousel/store/effects/profiles.effect.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/features/carrousel/store/effects/profiles.effect.ts ***!
    \*********************************************************************/

  /*! exports provided: ProfilesEffect */

  /***/
  function srcAppFeaturesCarrouselStoreEffectsProfilesEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilesEffect", function () {
      return ProfilesEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions */
    "./src/app/features/carrousel/store/actions/index.ts");
    /* harmony import */


    var _services_carrousel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/carrousel.service */
    "./src/app/features/carrousel/services/carrousel.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var ProfilesEffect = function ProfilesEffect(actions$, carrouselService, snackBar) {
      var _this32 = this;

      _classCallCheck(this, ProfilesEffect);

      this.actions$ = actions$;
      this.carrouselService = carrouselService;
      this.snackBar = snackBar;
      this.loadProfiles$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this32.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["GET_PROFILES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
          return _this32.carrouselService.getProfiles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (profiles) {
            return console.log(profiles), _actions__WEBPACK_IMPORTED_MODULE_4__["GET_PROFILES_SUCCESS"]({
              profiles: profiles
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["GET_PROFILES_ERROR"]({
              error: err.error.message
            }));
          }));
        }));
      });
      this.updateProfilesAfterDragSlides$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this32.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_PROFILE_AFTER_DRAG_SLIDES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
          return data.profile;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (profile) {
          return _this32.carrouselService.updateProfileAfterDragSlides(profile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reply) {
            return _this32.snackBar.open(reply, undefined, {
              duration: 5000,
              horizontalPosition: "end",
              verticalPosition: "bottom"
            }), _actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_PROFILE_AFTER_DRAG_SLIDES_SUCCESS"]({
              reply: reply
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_PROFILE_AFTER_DRAG_SLIDES_ERROR"]({
              error: err.error.message
            }));
          }));
        }));
      });
    };

    ProfilesEffect.ɵfac = function ProfilesEffect_Factory(t) {
      return new (t || ProfilesEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_carrousel_service__WEBPACK_IMPORTED_MODULE_5__["CarrouselService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    ProfilesEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfilesEffect,
      factory: ProfilesEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilesEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_carrousel_service__WEBPACK_IMPORTED_MODULE_5__["CarrouselService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/store/effects/slides.effect.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/features/carrousel/store/effects/slides.effect.ts ***!
    \*******************************************************************/

  /*! exports provided: SlidesEffect */

  /***/
  function srcAppFeaturesCarrouselStoreEffectsSlidesEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesEffect", function () {
      return SlidesEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions */
    "./src/app/features/carrousel/store/actions/index.ts");
    /* harmony import */


    var _services_carrousel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/carrousel.service */
    "./src/app/features/carrousel/services/carrousel.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SlidesEffect = function SlidesEffect(actions$, carrouselService, snackBar) {
      var _this33 = this;

      _classCallCheck(this, SlidesEffect);

      this.actions$ = actions$;
      this.carrouselService = carrouselService;
      this.snackBar = snackBar;
      this.loadSlides$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this33.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["GET_SLIDES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
          return _this33.carrouselService.getSlides().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (slides) {
            return console.log(slides), _actions__WEBPACK_IMPORTED_MODULE_4__["GET_SLIDES_SUCCESS"]({
              slides: slides
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["GET_PROFILES_ERROR"]({
              error: err.error.message
            }));
          }));
        }));
      });
      this.addSlide$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this33.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ADD_SLIDE_AND_UPDATE_PROFILE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (data) {
          return console.log(data), _this33.carrouselService.addSlide(data.slide, data.idProfiles).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (slide) {
            return console.log(slide), _this33.snackBar.open("slide  " + slide.title + "  successfully added", undefined, {
              duration: 5000,
              horizontalPosition: "end",
              verticalPosition: "bottom"
            }), [_actions__WEBPACK_IMPORTED_MODULE_4__["ADD_SLIDE_SUCCESS"]({
              slide: slide
            }), _actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_PROFILE_AFTER_ADD_SLIDE_SUCCESS"]({
              idSlide: slide.id
            })];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this33.snackBar.open(err.error.message, undefined, {
              duration: 5000,
              horizontalPosition: "end",
              verticalPosition: "bottom"
            }), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ADD_SLIDE_ERROR"]({
              error: err.error.message
            }));
          }));
        }));
      });
    };

    SlidesEffect.ɵfac = function SlidesEffect_Factory(t) {
      return new (t || SlidesEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_carrousel_service__WEBPACK_IMPORTED_MODULE_5__["CarrouselService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    SlidesEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SlidesEffect,
      factory: SlidesEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidesEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_carrousel_service__WEBPACK_IMPORTED_MODULE_5__["CarrouselService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/carrousel/store/reducers/elements.reducer.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/features/carrousel/store/reducers/elements.reducer.ts ***!
    \***********************************************************************/

  /*! exports provided: reducer */

  /***/
  function srcAppFeaturesCarrouselStoreReducersElementsReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _profiles_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profiles.reducer */
    "./src/app/features/carrousel/store/reducers/profiles.reducer.ts");
    /* harmony import */


    var _slides_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./slides.reducer */
    "./src/app/features/carrousel/store/reducers/slides.reducer.ts");

    var reducer = {
      profiles: _profiles_reducer__WEBPACK_IMPORTED_MODULE_0__["profilesReducer"],
      slides: _slides_reducer__WEBPACK_IMPORTED_MODULE_1__["slidesReducer"]
    };
    /***/
  },

  /***/
  "./src/app/features/carrousel/store/reducers/index.ts":
  /*!************************************************************!*\
    !*** ./src/app/features/carrousel/store/reducers/index.ts ***!
    \************************************************************/

  /*! exports provided: profilesReducer, getAllProfiles, getIsProfilesLoading, getIsErrorLoadProfiles, getProfileSelected, getIdProfileSelected, slidesReducer, getAllSlides, getIsSlidesLoading, getIsErrorLoadSlides, getIsLoadingActionSlide, reducer */

  /***/
  function srcAppFeaturesCarrouselStoreReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _profiles_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profiles.reducer */
    "./src/app/features/carrousel/store/reducers/profiles.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "profilesReducer", function () {
      return _profiles_reducer__WEBPACK_IMPORTED_MODULE_0__["profilesReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAllProfiles", function () {
      return _profiles_reducer__WEBPACK_IMPORTED_MODULE_0__["getAllProfiles"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIsProfilesLoading", function () {
      return _profiles_reducer__WEBPACK_IMPORTED_MODULE_0__["getIsProfilesLoading"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIsErrorLoadProfiles", function () {
      return _profiles_reducer__WEBPACK_IMPORTED_MODULE_0__["getIsErrorLoadProfiles"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getProfileSelected", function () {
      return _profiles_reducer__WEBPACK_IMPORTED_MODULE_0__["getProfileSelected"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIdProfileSelected", function () {
      return _profiles_reducer__WEBPACK_IMPORTED_MODULE_0__["getIdProfileSelected"];
    });
    /* harmony import */


    var _slides_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./slides.reducer */
    "./src/app/features/carrousel/store/reducers/slides.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "slidesReducer", function () {
      return _slides_reducer__WEBPACK_IMPORTED_MODULE_1__["slidesReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAllSlides", function () {
      return _slides_reducer__WEBPACK_IMPORTED_MODULE_1__["getAllSlides"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIsSlidesLoading", function () {
      return _slides_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsSlidesLoading"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIsErrorLoadSlides", function () {
      return _slides_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsErrorLoadSlides"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIsLoadingActionSlide", function () {
      return _slides_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingActionSlide"];
    });
    /* harmony import */


    var _elements_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./elements.reducer */
    "./src/app/features/carrousel/store/reducers/elements.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return _elements_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"];
    });
    /***/

  },

  /***/
  "./src/app/features/carrousel/store/reducers/profiles.reducer.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/features/carrousel/store/reducers/profiles.reducer.ts ***!
    \***********************************************************************/

  /*! exports provided: profilesReducer, getAllProfiles, getIsProfilesLoading, getIsErrorLoadProfiles, getProfileSelected, getIdProfileSelected */

  /***/
  function srcAppFeaturesCarrouselStoreReducersProfilesReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "profilesReducer", function () {
      return profilesReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAllProfiles", function () {
      return getAllProfiles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIsProfilesLoading", function () {
      return getIsProfilesLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIsErrorLoadProfiles", function () {
      return getIsErrorLoadProfiles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getProfileSelected", function () {
      return getProfileSelected;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIdProfileSelected", function () {
      return getIdProfileSelected;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions */
    "./src/app/features/carrousel/store/actions/index.ts");

    var initProfilesState = {
      profiles: [],
      profileSelected: {
        id: null,
        name: "",
        idSlides: ""
      },
      idProfilesSelected: "",
      currentProfile: null,
      loadingAllProfile: false,
      loadingAction: false,
      error: "",
      success: ""
    };
    var reducerProfiles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initProfilesState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_PROFILES"], function (state) {
      return Object.assign(Object.assign({}, state), {
        loadingAllProfile: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_PROFILES_SUCCESS"], function (state, _ref5) {
      var profiles = _ref5.profiles;
      return Object.assign(Object.assign({}, state), {
        profiles: profiles,
        loadingAllProfile: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_PROFILES_ERROR"], function (state, _ref6) {
      var error = _ref6.error;
      return Object.assign(Object.assign({}, state), {
        error: error,
        loadingAllProfile: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_PROFILES_SELECTED"], function (state, _ref7) {
      var profile = _ref7.profile;
      return Object.assign(Object.assign({}, state), {
        profileSelected: profile
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PROFILE_AFTER_DRAG_SLIDES"], function (state, _ref8) {
      var profile = _ref8.profile;
      return Object.assign(Object.assign({}, state), {
        loadingAction: true,
        currentProfile: profile
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PROFILE_AFTER_DRAG_SLIDES_SUCCESS"], function (state, _ref9) {
      var reply = _ref9.reply;
      var indexProfileUpdated = state.profiles.findIndex(function (profile) {
        return profile.id === state.currentProfile.id;
      });

      var currentProfiles = _toConsumableArray(state.profiles);

      currentProfiles[indexProfileUpdated] = state.currentProfile;
      return Object.assign(Object.assign({}, state), {
        profiles: currentProfiles,
        profileSelected: state.currentProfile,
        loadingAction: false,
        success: reply
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PROFILE_AFTER_DRAG_SLIDES_ERROR"], function (state, _ref10) {
      var error = _ref10.error;
      return Object.assign(Object.assign({}, state), {
        error: error,
        loadingAction: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_SLIDE_AND_UPDATE_PROFILE"], function (state, _ref11) {
      var idProfiles = _ref11.idProfiles;
      return Object.assign(Object.assign({}, state), {
        idProfilesSelected: idProfiles
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PROFILE_AFTER_ADD_SLIDE_SUCCESS"], function (state, _ref12) {
      var idSlide = _ref12.idSlide;
      var newStateProfileSelected = state.profileSelected;
      var idProfilesSelected = state.idProfilesSelected.split(",").map(function (idString) {
        return parseInt(idString);
      });

      var currentProfiles = _toConsumableArray(state.profiles);

      idProfilesSelected.filter(function (idProfile) {
        var profileIndex = currentProfiles.findIndex(function (profile) {
          return profile.id === idProfile;
        });
        currentProfiles[profileIndex] = Object.assign({}, currentProfiles[profileIndex]);
        currentProfiles[profileIndex].idSlides = currentProfiles[profileIndex].idSlides + "," + idSlide;

        if (currentProfiles[profileIndex].id === state.profileSelected.id) {
          newStateProfileSelected = currentProfiles[profileIndex];
        }
      });
      return Object.assign(Object.assign({}, state), {
        profiles: currentProfiles,
        profileSelected: newStateProfileSelected
      });
    }));

    function profilesReducer(state, action) {
      return reducerProfiles(state, action);
    }

    var getAllProfiles = function getAllProfiles(state) {
      return state.profiles;
    };

    var getIsProfilesLoading = function getIsProfilesLoading(state) {
      return state.loadingAllProfile;
    };

    var getIsErrorLoadProfiles = function getIsErrorLoadProfiles(state) {
      return state.error;
    };

    var getProfileSelected = function getProfileSelected(state) {
      return state.profileSelected;
    };

    var getIdProfileSelected = function getIdProfileSelected(state) {
      return state.idProfilesSelected;
    };
    /***/

  },

  /***/
  "./src/app/features/carrousel/store/reducers/slides.reducer.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/features/carrousel/store/reducers/slides.reducer.ts ***!
    \*********************************************************************/

  /*! exports provided: slidesReducer, getAllSlides, getIsSlidesLoading, getIsErrorLoadSlides, getIsLoadingActionSlide */

  /***/
  function srcAppFeaturesCarrouselStoreReducersSlidesReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slidesReducer", function () {
      return slidesReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAllSlides", function () {
      return getAllSlides;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIsSlidesLoading", function () {
      return getIsSlidesLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIsErrorLoadSlides", function () {
      return getIsErrorLoadSlides;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIsLoadingActionSlide", function () {
      return getIsLoadingActionSlide;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/actions */
    "./src/app/features/carrousel/store/actions/index.ts");

    var initSlidesState = {
      slides: [],
      currentSlide: null,
      slideId: null,
      loadingAllSlides: false,
      loadingActionSlide: false,
      error: ""
    };
    var reducerSlides = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initSlidesState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_SLIDES"], function (state) {
      return Object.assign(Object.assign({}, state), {
        loadingAllSlides: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_SLIDES_SUCCESS"], function (state, _ref13) {
      var slides = _ref13.slides;
      return Object.assign(Object.assign({}, state), {
        slides: slides,
        loadingAllSlides: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_SLIDES_ERROR"], function (state, _ref14) {
      var error = _ref14.error;
      return Object.assign(Object.assign({}, state), {
        loadingAllSlides: false,
        error: error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_store_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_SLIDE_AND_UPDATE_PROFILE"], function (state) {
      return Object.assign(Object.assign({}, state), {
        loadingActionSlide: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_store_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_SLIDE_SUCCESS"], function (state, _ref15) {
      var slide = _ref15.slide;

      var currentSlides = _toConsumableArray(state.slides);

      currentSlides.push(slide);
      return Object.assign(Object.assign({}, state), {
        slides: currentSlides,
        loadingActionSlide: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_store_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_SLIDE_ERROR"], function (state, _ref16) {
      var error = _ref16.error;
      return Object.assign(Object.assign({}, state), {
        loadingActionSlide: false,
        error: error
      });
    }));

    function slidesReducer(state, action) {
      return reducerSlides(state, action);
    }

    var getAllSlides = function getAllSlides(state) {
      return state.slides;
    };

    var getIsSlidesLoading = function getIsSlidesLoading(state) {
      return state.loadingAllSlides;
    };

    var getIsErrorLoadSlides = function getIsErrorLoadSlides(state) {
      return state.error;
    };

    var getIsLoadingActionSlide = function getIsLoadingActionSlide(state) {
      return state.loadingActionSlide;
    };
    /***/

  },

  /***/
  "./src/app/features/carrousel/store/selectors/elements.selector.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/features/carrousel/store/selectors/elements.selector.ts ***!
    \*************************************************************************/

  /*! exports provided: getElementsState */

  /***/
  function srcAppFeaturesCarrouselStoreSelectorsElementsSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getElementsState", function () {
      return getElementsState;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"); //global state


    var getElementsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("elements");
    /***/
  },

  /***/
  "./src/app/features/carrousel/store/selectors/index.ts":
  /*!*************************************************************!*\
    !*** ./src/app/features/carrousel/store/selectors/index.ts ***!
    \*************************************************************/

  /*! exports provided: getElementsState, getAllProfiles, getIsProfilesLoading, getIsErrorProfilesLoad, getProfileSelected, getIdProfilesSelected, getProfilesSelected, getAllSlides, getIsSlidesLoading, getIsErrorLoadSlides, getSlidesByProfile, getIsLoadingActionSlide */

  /***/
  function srcAppFeaturesCarrouselStoreSelectorsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _elements_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./elements.selector */
    "./src/app/features/carrousel/store/selectors/elements.selector.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getElementsState", function () {
      return _elements_selector__WEBPACK_IMPORTED_MODULE_0__["getElementsState"];
    });
    /* harmony import */


    var _profiles_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profiles.selector */
    "./src/app/features/carrousel/store/selectors/profiles.selector.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAllProfiles", function () {
      return _profiles_selector__WEBPACK_IMPORTED_MODULE_1__["getAllProfiles"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIsProfilesLoading", function () {
      return _profiles_selector__WEBPACK_IMPORTED_MODULE_1__["getIsProfilesLoading"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIsErrorProfilesLoad", function () {
      return _profiles_selector__WEBPACK_IMPORTED_MODULE_1__["getIsErrorProfilesLoad"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getProfileSelected", function () {
      return _profiles_selector__WEBPACK_IMPORTED_MODULE_1__["getProfileSelected"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIdProfilesSelected", function () {
      return _profiles_selector__WEBPACK_IMPORTED_MODULE_1__["getIdProfilesSelected"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getProfilesSelected", function () {
      return _profiles_selector__WEBPACK_IMPORTED_MODULE_1__["getProfilesSelected"];
    });
    /* harmony import */


    var _slides_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./slides.selector */
    "./src/app/features/carrousel/store/selectors/slides.selector.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAllSlides", function () {
      return _slides_selector__WEBPACK_IMPORTED_MODULE_2__["getAllSlides"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIsSlidesLoading", function () {
      return _slides_selector__WEBPACK_IMPORTED_MODULE_2__["getIsSlidesLoading"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIsErrorLoadSlides", function () {
      return _slides_selector__WEBPACK_IMPORTED_MODULE_2__["getIsErrorLoadSlides"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getSlidesByProfile", function () {
      return _slides_selector__WEBPACK_IMPORTED_MODULE_2__["getSlidesByProfile"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIsLoadingActionSlide", function () {
      return _slides_selector__WEBPACK_IMPORTED_MODULE_2__["getIsLoadingActionSlide"];
    });
    /***/

  },

  /***/
  "./src/app/features/carrousel/store/selectors/profiles.selector.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/features/carrousel/store/selectors/profiles.selector.ts ***!
    \*************************************************************************/

  /*! exports provided: getAllProfiles, getIsProfilesLoading, getIsErrorProfilesLoad, getProfileSelected, getIdProfilesSelected, getProfilesSelected */

  /***/
  function srcAppFeaturesCarrouselStoreSelectorsProfilesSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAllProfiles", function () {
      return getAllProfiles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIsProfilesLoading", function () {
      return getIsProfilesLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIsErrorProfilesLoad", function () {
      return getIsErrorProfilesLoad;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getProfileSelected", function () {
      return getProfileSelected;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIdProfilesSelected", function () {
      return getIdProfilesSelected;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getProfilesSelected", function () {
      return getProfilesSelected;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _elements_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./elements.selector */
    "./src/app/features/carrousel/store/selectors/elements.selector.ts");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../reducers */
    "./src/app/features/carrousel/store/reducers/index.ts");

    var getProfilesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_elements_selector__WEBPACK_IMPORTED_MODULE_1__["getElementsState"], function (state) {
      return state.profiles;
    });
    var getAllProfiles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfilesState, _reducers__WEBPACK_IMPORTED_MODULE_2__["getAllProfiles"]);
    var getIsProfilesLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfilesState, _reducers__WEBPACK_IMPORTED_MODULE_2__["getIsProfilesLoading"]);
    var getIsErrorProfilesLoad = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfilesState, _reducers__WEBPACK_IMPORTED_MODULE_2__["getIsErrorLoadProfiles"]);
    var getProfileSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfilesState, _reducers__WEBPACK_IMPORTED_MODULE_2__["getProfileSelected"]);
    var getIdProfilesSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfilesState, _reducers__WEBPACK_IMPORTED_MODULE_2__["getIdProfileSelected"]);
    var getProfilesSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllProfiles, getIdProfilesSelected, function (profiles, idProfilesSelected) {
      var ProfilesSeleted = [];
      idProfilesSelected.split(",").map(function (idProfile) {
        return +idProfile;
      }).forEach(function (idProfile) {
        ProfilesSeleted.push(profiles.find(function (profile) {
          return profile.id === idProfile;
        }));
      });
      return ProfilesSeleted;
    });
    /***/
  },

  /***/
  "./src/app/features/carrousel/store/selectors/slides.selector.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/features/carrousel/store/selectors/slides.selector.ts ***!
    \***********************************************************************/

  /*! exports provided: getAllSlides, getIsSlidesLoading, getIsErrorLoadSlides, getSlidesByProfile, getIsLoadingActionSlide */

  /***/
  function srcAppFeaturesCarrouselStoreSelectorsSlidesSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAllSlides", function () {
      return getAllSlides;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIsSlidesLoading", function () {
      return getIsSlidesLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIsErrorLoadSlides", function () {
      return getIsErrorLoadSlides;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSlidesByProfile", function () {
      return getSlidesByProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIsLoadingActionSlide", function () {
      return getIsLoadingActionSlide;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _elements_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./elements.selector */
    "./src/app/features/carrousel/store/selectors/elements.selector.ts");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../reducers */
    "./src/app/features/carrousel/store/reducers/index.ts");
    /* harmony import */


    var _profiles_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profiles.selector */
    "./src/app/features/carrousel/store/selectors/profiles.selector.ts");

    var getSlidesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_elements_selector__WEBPACK_IMPORTED_MODULE_1__["getElementsState"], function (state) {
      return state.slides;
    });
    var getAllSlides = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSlidesState, _reducers__WEBPACK_IMPORTED_MODULE_2__["getAllSlides"]);
    var getIsSlidesLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSlidesState, _reducers__WEBPACK_IMPORTED_MODULE_2__["getIsSlidesLoading"]);
    var getIsErrorLoadSlides = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSlidesState, _reducers__WEBPACK_IMPORTED_MODULE_2__["getIsErrorLoadSlides"]);
    var getSlidesByProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_profiles_selector__WEBPACK_IMPORTED_MODULE_3__["getProfileSelected"], getAllSlides, function (profile, slides) {
      return getSlidesByIdProfile(profile, slides);
    });
    var getIsLoadingActionSlide = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSlidesState, _reducers__WEBPACK_IMPORTED_MODULE_2__["getIsLoadingActionSlide"]);

    function getSlidesByIdProfile(profile, slides) {
      var slidesAfterFilerByidProfile = [];
      var idSlidesByProfile;
      console.log(profile);
      idSlidesByProfile = profile.idSlides.split(",").map(function (str) {
        return parseInt(str);
      });
      idSlidesByProfile.filter(function (idSlide) {
        var slideSelected = slides.find(function (slide) {
          return slide.id === idSlide;
        });
        if (slideSelected) slidesAfterFilerByidProfile.push(slideSelected);
      });
      return slidesAfterFilerByidProfile;
    }
    /***/

  }
}]);
//# sourceMappingURL=carrousel-es5.js.map