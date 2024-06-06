(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movies"],{

/***/ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js ***!
  \************************************************************************************/
/*! exports provided: DEFAULT_ROUTER_FEATURENAME, DefaultRouterStateSerializer, MinimalRouterStateSerializer, NavigationActionTiming, ROUTER_CANCEL, ROUTER_CONFIG, ROUTER_ERROR, ROUTER_NAVIGATED, ROUTER_NAVIGATION, ROUTER_REQUEST, RouterStateSerializer, StoreRouterConnectingModule, getSelectors, routerCancelAction, routerErrorAction, routerNavigatedAction, routerNavigationAction, routerReducer, routerRequestAction, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ROUTER_FEATURENAME", function() { return DEFAULT_ROUTER_FEATURENAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRouterStateSerializer", function() { return DefaultRouterStateSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimalRouterStateSerializer", function() { return MinimalRouterStateSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationActionTiming", function() { return NavigationActionTiming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_CANCEL", function() { return ROUTER_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_CONFIG", function() { return ROUTER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_ERROR", function() { return ROUTER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_NAVIGATED", function() { return ROUTER_NAVIGATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_NAVIGATION", function() { return ROUTER_NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_REQUEST", function() { return ROUTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterStateSerializer", function() { return RouterStateSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRouterConnectingModule", function() { return StoreRouterConnectingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectors", function() { return getSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerCancelAction", function() { return routerCancelAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerErrorAction", function() { return routerErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerNavigatedAction", function() { return routerNavigatedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerNavigationAction", function() { return routerNavigationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerReducer", function() { return routerReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerRequestAction", function() { return routerRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return _ROUTER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return _createRouterConfig; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





/**
 * @fileoverview added by tsickle
 * Generated from: src/actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An action dispatched when a router navigation request is fired.
 * @type {?}
 */



const ROUTER_REQUEST = '@ngrx/router-store/request';
/** @type {?} */
const routerRequestAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ROUTER_REQUEST, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * An action dispatched when the router navigates.
 * @type {?}
 */
const ROUTER_NAVIGATION = '@ngrx/router-store/navigation';
/** @type {?} */
const routerNavigationAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ROUTER_NAVIGATION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * An action dispatched when the router cancels navigation.
 * @type {?}
 */
const ROUTER_CANCEL = '@ngrx/router-store/cancel';
/** @type {?} */
const routerCancelAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ROUTER_CANCEL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * An action dispatched when the router errors.
 * @type {?}
 */
const ROUTER_ERROR = '@ngrx/router-store/error';
/** @type {?} */
const routerErrorAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ROUTER_ERROR, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**
 * An action dispatched after navigation has ended and new route is active.
 * @type {?}
 */
const ROUTER_NAVIGATED = '@ngrx/router-store/navigated';
/** @type {?} */
const routerNavigatedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ROUTER_NAVIGATED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());

/**
 * @fileoverview added by tsickle
 * Generated from: src/reducer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function routerReducer(state, action) {
    // Allow compilation with strictFunctionTypes - ref: #1344
    /** @type {?} */
    const routerAction = (/** @type {?} */ (action));
    switch (routerAction.type) {
        case ROUTER_NAVIGATION:
        case ROUTER_ERROR:
        case ROUTER_CANCEL:
            return {
                state: routerAction.payload.routerState,
                navigationId: routerAction.payload.event.id,
            };
        default:
            return (/** @type {?} */ (state));
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/serializers/base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Simple router state.
 * All custom router states / state serializers should have at least
 * the properties of this interface.
 * @record
 */
function BaseRouterStoreState() { }
if (false) {}
/**
 * @abstract
 * @template T
 */
class RouterStateSerializer {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/serializers/default_serializer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SerializedRouterStateSnapshot() { }
if (false) {}
class DefaultRouterStateSerializer {
    /**
     * @param {?} routerState
     * @return {?}
     */
    serialize(routerState) {
        return {
            root: this.serializeRoute(routerState.root),
            url: routerState.url,
        };
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    serializeRoute(route) {
        /** @type {?} */
        const children = route.children.map((/**
         * @param {?} c
         * @return {?}
         */
        (c) => this.serializeRoute(c)));
        return {
            params: route.params,
            paramMap: route.paramMap,
            data: route.data,
            url: route.url,
            outlet: route.outlet,
            routeConfig: route.routeConfig
                ? {
                    component: route.routeConfig.component,
                    path: route.routeConfig.path,
                    pathMatch: route.routeConfig.pathMatch,
                    redirectTo: route.routeConfig.redirectTo,
                    outlet: route.routeConfig.outlet,
                }
                : null,
            queryParams: route.queryParams,
            queryParamMap: route.queryParamMap,
            fragment: route.fragment,
            component: (/** @type {?} */ ((route.routeConfig
                ? route.routeConfig.component
                : undefined))),
            root: (/** @type {?} */ (undefined)),
            parent: (/** @type {?} */ (undefined)),
            firstChild: children[0],
            pathFromRoot: (/** @type {?} */ (undefined)),
            children,
        };
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/serializers/minimal_serializer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MinimalActivatedRouteSnapshot() { }
if (false) {}
/**
 * @record
 */
function MinimalRouterStateSnapshot() { }
if (false) {}
class MinimalRouterStateSerializer {
    /**
     * @param {?} routerState
     * @return {?}
     */
    serialize(routerState) {
        return {
            root: this.serializeRoute(routerState.root),
            url: routerState.url,
        };
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    serializeRoute(route) {
        /** @type {?} */
        const children = route.children.map((/**
         * @param {?} c
         * @return {?}
         */
        (c) => this.serializeRoute(c)));
        return {
            params: route.params,
            data: route.data,
            url: route.url,
            outlet: route.outlet,
            routeConfig: route.routeConfig
                ? {
                    path: route.routeConfig.path,
                    pathMatch: route.routeConfig.pathMatch,
                    redirectTo: route.routeConfig.redirectTo,
                    outlet: route.routeConfig.outlet,
                }
                : null,
            queryParams: route.queryParams,
            fragment: route.fragment,
            firstChild: children[0],
            children,
        };
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/router_store_module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const RouterState = {
    Full: 0,
    Minimal: 1,
};
/**
 * @record
 * @template T
 */
function StoreRouterConfig() { }
if (false) {}
/**
 * @record
 */
function StoreRouterActionPayload() { }
if (false) {}
/** @enum {number} */
const NavigationActionTiming = {
    PreActivation: 1,
    PostActivation: 2,
};
NavigationActionTiming[NavigationActionTiming.PreActivation] = 'PreActivation';
NavigationActionTiming[NavigationActionTiming.PostActivation] = 'PostActivation';
/** @type {?} */
const _ROUTER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/router-store Internal Configuration');
/** @type {?} */
const ROUTER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/router-store Configuration');
/** @type {?} */
const DEFAULT_ROUTER_FEATURENAME = 'router';
/**
 * @param {?} config
 * @return {?}
 */
function _createRouterConfig(config) {
    return Object.assign({ stateKey: DEFAULT_ROUTER_FEATURENAME, serializer: MinimalRouterStateSerializer, navigationActionTiming: NavigationActionTiming.PreActivation }, config);
}
/** @enum {number} */
const RouterTrigger = {
    NONE: 1,
    ROUTER: 2,
    STORE: 3,
};
RouterTrigger[RouterTrigger.NONE] = 'NONE';
RouterTrigger[RouterTrigger.ROUTER] = 'ROUTER';
RouterTrigger[RouterTrigger.STORE] = 'STORE';
/**
 * Connects RouterModule with StoreModule.
 *
 * During the navigation, before any guards or resolvers run, the router will dispatch
 * a ROUTER_NAVIGATION action, which has the following signature:
 *
 * ```
 * export type RouterNavigationPayload = {
 *   routerState: SerializedRouterStateSnapshot,
 *   event: RoutesRecognized
 * }
 * ```
 *
 * Either a reducer or an effect can be invoked in response to this action.
 * If the invoked reducer throws, the navigation will be canceled.
 *
 * If navigation gets canceled because of a guard, a ROUTER_CANCEL action will be
 * dispatched. If navigation results in an error, a ROUTER_ERROR action will be dispatched.
 *
 * Both ROUTER_CANCEL and ROUTER_ERROR contain the store state before the navigation
 * which can be used to restore the consistency of the store.
 *
 * Usage:
 *
 * ```typescript
 * \@NgModule({
 *   declarations: [AppCmp, SimpleCmp],
 *   imports: [
 *     BrowserModule,
 *     StoreModule.forRoot(mapOfReducers),
 *     RouterModule.forRoot([
 *       { path: '', component: SimpleCmp },
 *       { path: 'next', component: SimpleCmp }
 *     ]),
 *     StoreRouterConnectingModule.forRoot()
 *   ],
 *   bootstrap: [AppCmp]
 * })
 * export class AppModule {
 * }
 * ```
 */
class StoreRouterConnectingModule {
    /**
     * @param {?} store
     * @param {?} router
     * @param {?} serializer
     * @param {?} errorHandler
     * @param {?} config
     */
    constructor(store, router, serializer, errorHandler, config) {
        this.store = store;
        this.router = router;
        this.serializer = serializer;
        this.errorHandler = errorHandler;
        this.config = config;
        this.lastEvent = null;
        this.routerState = null;
        this.trigger = RouterTrigger.NONE;
        this.stateKey = (/** @type {?} */ (this.config.stateKey));
        this.setUpStoreStateListener();
        this.setUpRouterEventsListener();
    }
    /**
     * @template T
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: StoreRouterConnectingModule,
            providers: [
                { provide: _ROUTER_CONFIG, useValue: config },
                {
                    provide: ROUTER_CONFIG,
                    useFactory: _createRouterConfig,
                    deps: [_ROUTER_CONFIG],
                },
                {
                    provide: RouterStateSerializer,
                    useClass: config.serializer
                        ? config.serializer
                        : config.routerState === 0 /* Full */
                            ? DefaultRouterStateSerializer
                            : MinimalRouterStateSerializer,
                },
            ],
        };
    }
    /**
     * @private
     * @return {?}
     */
    setUpStoreStateListener() {
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])((/** @type {?} */ (this.stateKey))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([routerStoreState, storeState]) => {
            this.navigateIfNeeded(routerStoreState, storeState);
        }));
    }
    /**
     * @private
     * @param {?} routerStoreState
     * @param {?} storeState
     * @return {?}
     */
    navigateIfNeeded(routerStoreState, storeState) {
        if (!routerStoreState || !routerStoreState.state) {
            return;
        }
        if (this.trigger === RouterTrigger.ROUTER) {
            return;
        }
        if (this.lastEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            return;
        }
        /** @type {?} */
        const url = routerStoreState.state.url;
        if (this.router.url !== url) {
            this.storeState = storeState;
            this.trigger = RouterTrigger.STORE;
            this.router.navigateByUrl(url).catch((/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                this.errorHandler.handleError(error);
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setUpRouterEventsListener() {
        /** @type {?} */
        const dispatchNavLate = this.config.navigationActionTiming ===
            NavigationActionTiming.PostActivation;
        /** @type {?} */
        let routesRecognized;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([event, storeState]) => {
            this.lastEvent = event;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.routerState = this.serializer.serialize(this.router.routerState.snapshot);
                if (this.trigger !== RouterTrigger.STORE) {
                    this.storeState = storeState;
                    this.dispatchRouterRequest(event);
                }
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]) {
                routesRecognized = event;
                if (!dispatchNavLate && this.trigger !== RouterTrigger.STORE) {
                    this.dispatchRouterNavigation(event);
                }
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                this.dispatchRouterCancel(event);
                this.reset();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                this.dispatchRouterError(event);
                this.reset();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (this.trigger !== RouterTrigger.STORE) {
                    if (dispatchNavLate) {
                        this.dispatchRouterNavigation(routesRecognized);
                    }
                    this.dispatchRouterNavigated(event);
                }
                this.reset();
            }
        }));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    dispatchRouterRequest(event) {
        this.dispatchRouterAction(ROUTER_REQUEST, { event });
    }
    /**
     * @private
     * @param {?} lastRoutesRecognized
     * @return {?}
     */
    dispatchRouterNavigation(lastRoutesRecognized) {
        /** @type {?} */
        const nextRouterState = this.serializer.serialize(lastRoutesRecognized.state);
        this.dispatchRouterAction(ROUTER_NAVIGATION, {
            routerState: nextRouterState,
            event: new _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"](lastRoutesRecognized.id, lastRoutesRecognized.url, lastRoutesRecognized.urlAfterRedirects, nextRouterState),
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    dispatchRouterCancel(event) {
        this.dispatchRouterAction(ROUTER_CANCEL, {
            storeState: this.storeState,
            event,
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    dispatchRouterError(event) {
        this.dispatchRouterAction(ROUTER_ERROR, {
            storeState: this.storeState,
            event: new _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"](event.id, event.url, `${event}`),
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    dispatchRouterNavigated(event) {
        /** @type {?} */
        const routerState = this.serializer.serialize(this.router.routerState.snapshot);
        this.dispatchRouterAction(ROUTER_NAVIGATED, { event, routerState });
    }
    /**
     * @private
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    dispatchRouterAction(type, payload) {
        this.trigger = RouterTrigger.ROUTER;
        try {
            this.store.dispatch({
                type,
                payload: Object.assign(Object.assign({ routerState: this.routerState }, payload), { event: this.config.routerState === 0 /* Full */
                        ? payload.event
                        : { id: payload.event.id, url: payload.event.url } }),
            });
        }
        finally {
            this.trigger = RouterTrigger.NONE;
        }
    }
    /**
     * @private
     * @return {?}
     */
    reset() {
        this.trigger = RouterTrigger.NONE;
        this.storeState = null;
        this.routerState = null;
    }
}
StoreRouterConnectingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StoreRouterConnectingModule });
StoreRouterConnectingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StoreRouterConnectingModule_Factory(t) { return new (t || StoreRouterConnectingModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](RouterStateSerializer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ROUTER_CONFIG)); } });
/** @nocollapse */
StoreRouterConnectingModule.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: RouterStateSerializer },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ROUTER_CONFIG,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StoreRouterConnectingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{}]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: RouterStateSerializer }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [ROUTER_CONFIG]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/router_selectors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template V
 * @param {?} selectState
 * @return {?}
 */
function getSelectors(selectState) {
    /** @type {?} */
    const selectRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, (/**
     * @param {?} router
     * @return {?}
     */
    (router) => router && router.state));
    /** @type {?} */
    const selectCurrentRoute = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRouterState, (/**
     * @param {?} routerState
     * @return {?}
     */
    (routerState) => {
        if (!routerState) {
            return undefined;
        }
        /** @type {?} */
        let route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        return route;
    }));
    /** @type {?} */
    const selectFragment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCurrentRoute, (/**
     * @param {?} route
     * @return {?}
     */
    (route) => route && route.fragment));
    /** @type {?} */
    const selectQueryParams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCurrentRoute, (/**
     * @param {?} route
     * @return {?}
     */
    (route) => route && route.queryParams));
    /** @type {?} */
    const selectQueryParam = (/**
     * @param {?} param
     * @return {?}
     */
    (param) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectQueryParams, (/**
     * @param {?} params
     * @return {?}
     */
    (params) => params && params[param])));
    /** @type {?} */
    const selectRouteParams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCurrentRoute, (/**
     * @param {?} route
     * @return {?}
     */
    (route) => route && route.params));
    /** @type {?} */
    const selectRouteParam = (/**
     * @param {?} param
     * @return {?}
     */
    (param) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRouteParams, (/**
     * @param {?} params
     * @return {?}
     */
    (params) => params && params[param])));
    /** @type {?} */
    const selectRouteData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCurrentRoute, (/**
     * @param {?} route
     * @return {?}
     */
    (route) => route && route.data));
    /** @type {?} */
    const selectUrl = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRouterState, (/**
     * @param {?} routerState
     * @return {?}
     */
    (routerState) => routerState && routerState.url));
    return {
        selectCurrentRoute,
        selectFragment,
        selectQueryParams,
        selectQueryParam,
        selectRouteParams,
        selectRouteParam,
        selectRouteData,
        selectUrl,
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngrx-router-store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngrx-router-store.js.map

/***/ }),

/***/ "./src/app/features/movies/components/add-comment/add-comment.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/movies/components/add-comment/add-comment.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AddCommentComponent_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field must not exceed 10 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddCommentComponent {
    constructor() {
    }
    ngOnInit() {
    }
    onClick() {
        alert('click');
    }
}
AddCommentComponent.ɵfac = function AddCommentComponent_Factory(t) { return new (t || AddCommentComponent)(); };
AddCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCommentComponent, selectors: [["app-add-comment"]], inputs: { controlText: "controlText" }, decls: 3, vars: 2, consts: [["appearance", "outline", 1, "form-element", 2, "width", "310px"], ["matInput", "", "type", "text", "cols", "15", "rows", "2", "placeholder", "Add comment ...", 3, "formControl", "keyup.enter"], [4, "ngIf"]], template: function AddCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AddCommentComponent_Template_textarea_keyup_enter_1_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddCommentComponent_mat_error_2_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controlText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controlText.invalid);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21vdmllcy9jb21wb25lbnRzL2FkZC1jb21tZW50L2FkZC1jb21tZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-comment',
                templateUrl: './add-comment.component.html',
                styleUrls: ['./add-comment.component.css']
            }]
    }], function () { return []; }, { controlText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/movies/components/category-preview/category-preview.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/movies/components/category-preview/category-preview.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CategoryPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPreviewComponent", function() { return CategoryPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class CategoryPreviewComponent {
    constructor() {
        this.goToMovies = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
CategoryPreviewComponent.ɵfac = function CategoryPreviewComponent_Factory(t) { return new (t || CategoryPreviewComponent)(); };
CategoryPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryPreviewComponent, selectors: [["app-category-preview"]], inputs: { category: "category" }, outputs: { goToMovies: "goToMovies" }, decls: 12, vars: 3, consts: [[1, "col-md-3"], ["data-role", "category-title", 1, "text-xl", "push-none"], ["data-role", "category-emoji", 1, "push-none"], ["data-role", "category-emojiStyle", 1, "push-none"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function CategoryPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryPreviewComponent_Template_button_click_10_listener() { return ctx.goToMovies.emit(ctx.category.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Got to movies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category.emoji);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.category.emojiStyle, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".mat-card[_ngcontent-%COMP%]:not([class*=\"mat-elevation-z\"]) {\n  box-shadow: 0 2px 1px -1px rgb(63, 81, 181), 0 1px 1px 0 rgb(63, 81, 181),\n    0 1px 3px 0 rgb(63, 81, 181);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbXBvbmVudHMvY2F0ZWdvcnktcHJldmlldy9jYXRlZ29yeS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtnQ0FDOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9tb3ZpZXMvY29tcG9uZW50cy9jYXRlZ29yeS1wcmV2aWV3L2NhdGVnb3J5LXByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZDpub3QoW2NsYXNzKj1cIm1hdC1lbGV2YXRpb24telwiXSkge1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2IoNjMsIDgxLCAxODEpLCAwIDFweCAxcHggMCByZ2IoNjMsIDgxLCAxODEpLFxuICAgIDAgMXB4IDNweCAwIHJnYig2MywgODEsIDE4MSk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-category-preview",
                templateUrl: "./category-preview.component.html",
                styleUrls: ["./category-preview.component.css"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], goToMovies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/movies/components/confirmation-dialog/confirmation-dialog.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/movies/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class ConfirmationDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.message = this.data;
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], decls: 8, vars: 2, consts: [["align", "center"], ["mat-raised-button", "", "color", "primary", "tabindex", "1", 3, "mat-dialog-close"], ["mat-raised-button", "", "mat-dialog-close", "", "tabindex", "-1"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21vdmllcy9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-confirmation-dialog",
                templateUrl: "./confirmation-dialog.component.html",
                styleUrls: ["./confirmation-dialog.component.css"],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/components/form-movie/form-movie.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/movies/components/form-movie/form-movie.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMovieComponent", function() { return FormMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select/select.component */ "./src/app/features/movies/components/select/select.component.ts");
/* harmony import */ var _select_tab_object_select_tab_object_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../select-tab-object/select-tab-object.component */ "./src/app/features/movies/components/select-tab-object/select-tab-object.component.ts");
/* harmony import */ var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mat-progress-buttons */ "./node_modules/mat-progress-buttons/__ivy_ngcc__/esm2015/mat-progress-buttons.js");












function FormMovieComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add your movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormMovieComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update your movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormMovieComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r79.titleAlert, " and must not exceed 35 characters");
} }
function FormMovieComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r80.titleAlert, " ");
} }
function FormMovieComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r81.titleAlert, " ");
} }
function FormMovieComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r82.titleAlert, " ");
} }
function FormMovieComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r83.titleAlert, " and must not exceed 300 characters ");
} }
class FormMovieComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.action = "";
        this.loadingAddMovie = false;
        this.addMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = null;
        this.titleAlert = "This field is required";
        this.labelLanguage = "Language";
        this.optionsLanguage = [
            "French",
            "English",
            "Arabic",
            "Russe",
            "Spanish",
            "Japanese",
        ];
        this.labelYear = "Year";
        this.optionsYear = [2015, 2016, 2017, 2018, 2019, 2020, 2021];
        this.labelCategory = "Category";
        this.barButtonOptions = {
            active: this.loadingAddMovie,
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
                fontIcon: "save",
            },
        };
    }
    ngOnChanges() {
        this.barButtonOptions.active = this.loadingAddMovie;
        this.barButtonOptions.text = this.action;
        if (this.submitted == true) {
            if (this.action == "add movie") {
                this.barButtonOptions.text = "Saving movie ...";
            }
            else {
                this.barButtonOptions.text = "Updating movie ...";
            }
        }
        if (this.loadingAddMovie == false) {
            this.barButtonOptions.text = this.action;
        }
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.registerMovieForm = this.formBuilder.group({
            title: [
                this.movie.title,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(22)],
            ],
            language: [this.movie.language, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            recordedYear: [this.movie.recordedYear, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: [this.movie.categoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: [this.movie.image, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            heroLastName: [this.movie.specialMention.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            heroFirstName: [this.movie.specialMention.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [
                this.movie.description,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)],
            ],
        });
    }
    get f() {
        return this.registerMovieForm.controls;
    }
    onSubmit() {
        this.movieForm = {
            id: this.movie.id,
            categoryId: this.registerMovieForm.value["category"],
            title: this.registerMovieForm.value["title"],
            language: this.registerMovieForm.value["language"],
            recordedYear: this.registerMovieForm.value["recordedYear"],
            image: this.registerMovieForm.value["image"],
            specialMention: {
                lastName: this.registerMovieForm.value["heroLastName"],
                firstName: this.registerMovieForm.value["heroFirstName"],
            },
            description: this.registerMovieForm.value["description"],
            selected: this.movie.selected,
        };
        if (this.registerMovieForm.valid) {
            this.submitted = true;
        }
        this.addMovie.emit(this.movieForm);
    }
}
FormMovieComponent.ɵfac = function FormMovieComponent_Factory(t) { return new (t || FormMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
FormMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormMovieComponent, selectors: [["app-form-movie"]], inputs: { action: "action", optionsCategories: "optionsCategories", loadingAddMovie: "loadingAddMovie", movie: "movie" }, outputs: { addMovie: "addMovie" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 29, vars: 31, consts: [[1, "form-element"], ["class", "fill-remaining-space", 4, "ngIf"], [1, "form", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-element"], ["matInput", "", "type", "text", "placeholder", "Title", "formControlName", "title"], [4, "ngIf"], [3, "label", "options", "valid", "touched", "registerForm", "control", "titleAlert"], ["matInput", "", "type", "text", "placeholder", "Link image", "formControlName", "image"], ["matInput", "", "type", "text", "placeholder", "Last name h\u00E9ro ", "formControlName", "heroLastName"], ["matInput", "", "type", "text", "placeholder", "First name h\u00E9ro ", "formControlName", "heroFirstName"], ["matInput", "", "placeholder", "description of movie", "formControlName", "description", 2, "min-height", "9em"], [3, "options", "disabled"], [1, "fill-remaining-space"]], template: function FormMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormMovieComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormMovieComponent_span_2_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormMovieComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormMovieComponent_mat_error_7_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-select-tab-object", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Link of image movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormMovieComponent_mat_error_15_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FormMovieComponent_mat_error_18_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FormMovieComponent_mat_error_21_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "give more details about the film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FormMovieComponent_mat_error_26_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-bar-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "add movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "update movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerMovieForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f.title.valid && ctx.f.title.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Language")("options", ctx.optionsLanguage)("valid", ctx.f.language.valid)("touched", ctx.f.language.touched)("registerForm", ctx.registerMovieForm)("control", "language")("titleAlert", ctx.titleAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Year")("options", ctx.optionsYear)("valid", ctx.f.recordedYear.valid)("touched", ctx.f.recordedYear.touched)("registerForm", ctx.registerMovieForm)("control", "recordedYear")("titleAlert", ctx.titleAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Category")("options", ctx.optionsCategories)("valid", ctx.f.category.valid)("touched", ctx.f.category.touched)("registerForm", ctx.registerMovieForm)("control", "category")("titleAlert", ctx.titleAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f.image.valid && ctx.f.image.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f.heroLastName.valid && ctx.f.heroLastName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f.heroFirstName.valid && ctx.f.heroFirstName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f.description.valid && ctx.f.description.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.barButtonOptions)("disabled", !ctx.registerMovieForm.valid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"], _select_tab_object_select_tab_object_component__WEBPACK_IMPORTED_MODULE_8__["SelectTabObjectComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_9__["MatBarButtonComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n  \n  flex: 1 1 auto;\n}\n\n.form-element[_ngcontent-%COMP%] {\n  padding: 0px;\n  width: 75%;\n}\n\n\n\ninput.mat-input-element[_ngcontent-%COMP%] {\n  color: rgb(10, 3, 17);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbXBvbmVudHMvZm9ybS1tb3ZpZS9mb3JtLW1vdmllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtxREFDbUQ7RUFDbkQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21vdmllcy9jb21wb25lbnRzL2Zvcm0tbW92aWUvZm9ybS1tb3ZpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZm9ybS1lbGVtZW50IHtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogNzUlO1xufVxuXG4vKiBGb250IGNvbG9yICovXG5pbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNvbG9yOiByZ2IoMTAsIDMsIDE3KTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-form-movie",
                templateUrl: "./form-movie.component.html",
                styleUrls: ["./form-movie.component.css"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], optionsCategories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingAddMovie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addMovie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/movies/components/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/movies/components/index.ts ***!
  \*****************************************************/
/*! exports provided: CategoryPreviewComponent, MoviePreviewComponent, SearchComponent, SelectComponent, SelectTabObjectComponent, FormMovieComponent, ConfirmationDialogComponent, MovieDetailsComponent, AddCommentComponent, PreviewCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_preview_category_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-preview/category-preview.component */ "./src/app/features/movies/components/category-preview/category-preview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryPreviewComponent", function() { return _category_preview_category_preview_component__WEBPACK_IMPORTED_MODULE_0__["CategoryPreviewComponent"]; });

/* harmony import */ var _movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-preview/movie-preview.component */ "./src/app/features/movies/components/movie-preview/movie-preview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoviePreviewComponent", function() { return _movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_1__["MoviePreviewComponent"]; });

/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/features/movies/components/search/search.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]; });

/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select/select.component */ "./src/app/features/movies/components/select/select.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return _select_select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"]; });

/* harmony import */ var _select_tab_object_select_tab_object_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-tab-object/select-tab-object.component */ "./src/app/features/movies/components/select-tab-object/select-tab-object.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectTabObjectComponent", function() { return _select_tab_object_select_tab_object_component__WEBPACK_IMPORTED_MODULE_4__["SelectTabObjectComponent"]; });

/* harmony import */ var _form_movie_form_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-movie/form-movie.component */ "./src/app/features/movies/components/form-movie/form-movie.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormMovieComponent", function() { return _form_movie_form_movie_component__WEBPACK_IMPORTED_MODULE_5__["FormMovieComponent"]; });

/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "./src/app/features/movies/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"]; });

/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/features/movies/components/movie-details/movie-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailsComponent"]; });

/* harmony import */ var _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-comment/add-comment.component */ "./src/app/features/movies/components/add-comment/add-comment.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_8__["AddCommentComponent"]; });

/* harmony import */ var _preview_comment_preview_comment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview-comment/preview-comment.component */ "./src/app/features/movies/components/preview-comment/preview-comment.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviewCommentComponent", function() { return _preview_comment_preview_comment_component__WEBPACK_IMPORTED_MODULE_9__["PreviewCommentComponent"]; });













/***/ }),

/***/ "./src/app/features/movies/components/movie-details/movie-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/movies/components/movie-details/movie-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mat-progress-buttons */ "./node_modules/mat-progress-buttons/__ivy_ngcc__/esm2015/mat-progress-buttons.js");





const _c0 = function (a0) { return { "background-image": a0 }; };
class MovieDetailsComponent {
    constructor() {
        this.addOrDeleteToMyCollection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadingAddOrDeleteMovieToMycollection = false;
        this.barButtonOptions = {
            active: this.loadingAddOrDeleteMovieToMycollection,
            text: "",
            buttonColor: "primary",
            barColor: "primary",
            raised: true,
            stroked: false,
            mode: "indeterminate",
            value: 0,
            disabled: false,
            fullWidth: false,
            buttonIcon: {
                fontIcon: "",
            },
        };
    }
    ngOnInit() { }
    ngOnChanges() {
        if (this.movie.selected == true) {
            this.barButtonOptions.text = "Remove movie to collection";
            this.barButtonOptions.buttonColor = "accent";
            this.barButtonOptions.barColor = "accent";
            this.barButtonOptions.buttonIcon.fontIcon = "remove_from_queue";
        }
        else {
            this.barButtonOptions.text = "Add movie to collection";
            this.barButtonOptions.buttonIcon.fontIcon = "playlist_add";
            this.barButtonOptions.buttonColor = "primary";
            this.barButtonOptions.barColor = "primary";
        }
        this.barButtonOptions.active = this.loadingAddOrDeleteMovieToMycollection;
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], inputs: { movie: "movie", loadingAddOrDeleteMovieToMycollection: "loadingAddOrDeleteMovieToMycollection" }, outputs: { addOrDeleteToMyCollection: "addOrDeleteToMyCollection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 19, vars: 9, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image", 3, "ngStyle"], ["mat-card-image", "", "alt", "Cinque Terre", "alt", "Photo of movie", 3, "src"], ["color", "accent", 3, "options", "click"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-bar-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_Template_mat_bar_button_click_18_listener() { return ctx.addOrDeleteToMyCollection.emit(ctx.movie.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "url(" + ctx.movie.image + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](":\u00A0", ctx.movie.language, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](":\u00A0 ", ctx.movie.recordedYear, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.movie.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.movie.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.barButtonOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_3__["MatBarButtonComponent"]], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-movie-details",
                templateUrl: "./movie-details.component.html",
                styleUrls: ["./movie-details.component.css"],
            }]
    }], function () { return []; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addOrDeleteToMyCollection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], loadingAddOrDeleteMovieToMycollection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/movies/components/movie-preview/movie-preview.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/movies/components/movie-preview/movie-preview.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MoviePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePreviewComponent", function() { return MoviePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ "./src/app/features/movies/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







function MoviePreviewComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviePreviewComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.updateMovie.emit(ctx_r67.movie.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoviePreviewComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviePreviewComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.delete(ctx_r69.movie.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class MoviePreviewComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.updateMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailsMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    delete(MovieId) {
        this.dialog
            .open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], {
            data: "Are you sure want to delete?",
        })
            .afterClosed()
            .subscribe((result) => {
            if (result == true) {
                this.deleteMovie.emit(MovieId);
            }
        });
    }
}
MoviePreviewComponent.ɵfac = function MoviePreviewComponent_Factory(t) { return new (t || MoviePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
MoviePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviePreviewComponent, selectors: [["app-movie-preview"]], inputs: { movie: "movie", parent: "parent" }, outputs: { updateMovie: "updateMovie", deleteMovie: "deleteMovie", detailsMovie: "detailsMovie" }, decls: 20, vars: 9, consts: [[1, "col-md-4", "frame"], ["mat-card-avatar", "", 1, "example-header-image", 3, "ngStyle"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function MoviePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Special mention:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MoviePreviewComponent_button_16_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MoviePreviewComponent_button_17_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviePreviewComponent_Template_button_click_18_listener() { return ctx.detailsMovie.emit(ctx.movie.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "url(" + ctx.movie.image + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.recordedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.movie.language, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.movie.specialMention.firstName + " - " + ctx.movie.specialMention.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parent != "collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parent != "collection");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".mat-card[_ngcontent-%COMP%]:not([class*=\"mat-elevation-z\"]) {\n  box-shadow: 0 2px 1px -1px rgb(63, 81, 181), 0 1px 1px 0 rgb(63, 81, 181),\n    0 1px 3px 0 rgb(63, 81, 181);\n}\n.example-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n.frame[_ngcontent-%COMP%] {\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtcHJldmlldy9tb3ZpZS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtnQ0FDOEI7QUFDaEM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtcHJldmlldy9tb3ZpZS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQ6bm90KFtjbGFzcyo9XCJtYXQtZWxldmF0aW9uLXpcIl0pIHtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiKDYzLCA4MSwgMTgxKSwgMCAxcHggMXB4IDAgcmdiKDYzLCA4MSwgMTgxKSxcbiAgICAwIDFweCAzcHggMCByZ2IoNjMsIDgxLCAxODEpO1xufVxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZyYW1lIHtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-movie-preview",
                templateUrl: "./movie-preview.component.html",
                styleUrls: ["./movie-preview.component.css"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateMovie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteMovie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], detailsMovie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/movies/components/preview-comment/preview-comment.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/movies/components/preview-comment/preview-comment.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PreviewCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewCommentComponent", function() { return PreviewCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PreviewCommentComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PreviewCommentComponent.ɵfac = function PreviewCommentComponent_Factory(t) { return new (t || PreviewCommentComponent)(); };
PreviewCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewCommentComponent, selectors: [["app-preview-comment"]], decls: 2, vars: 0, template: function PreviewCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "preview-comment works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21vdmllcy9jb21wb25lbnRzL3ByZXZpZXctY29tbWVudC9wcmV2aWV3LWNvbW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preview-comment',
                templateUrl: './preview-comment.component.html',
                styleUrls: ['./preview-comment.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/components/search/search.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/movies/components/search/search.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





class SearchComponent {
    constructor() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchValue = "";
    }
    ngOnInit() { }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], inputs: { searchValue: "searchValue", searchName: "searchName" }, outputs: { search: "search" }, decls: 6, vars: 2, consts: [["appearance", "legacy"], ["matInput", "", "placeholder", "by title", 3, "value", "keyup"], ["matSuffix", ""]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_3_listener($event) { return ctx.search.emit($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.searchValue);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21vdmllcy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-search",
                templateUrl: "./search.component.html",
                styleUrls: ["./search.component.css"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], searchValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/movies/components/select-tab-object/select-tab-object.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/movies/components/select-tab-object/select-tab-object.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SelectTabObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTabObjectComponent", function() { return SelectTabObjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");







function SelectTabObjectComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r76.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r76.title);
} }
function SelectTabObjectComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r75.titleAlert);
} }
class SelectTabObjectComponent {
    constructor() {
    }
    ngOnInit() { }
}
SelectTabObjectComponent.ɵfac = function SelectTabObjectComponent_Factory(t) { return new (t || SelectTabObjectComponent)(); };
SelectTabObjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectTabObjectComponent, selectors: [["app-select-tab-object"]], inputs: { label: "label", options: "options", valid: "valid", touched: "touched", registerForm: "registerForm", control: "control", titleAlert: "titleAlert" }, decls: 6, vars: 5, consts: [["appearance", "outline", 1, "form-element", 3, "formGroup"], [3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"]], template: function SelectTabObjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectTabObjectComponent_mat_option_4_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectTabObjectComponent_mat_error_5_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.valid && ctx.touched);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatError"]], styles: [".form-element[_ngcontent-%COMP%] {\n  padding: 0px;\n  width: 75%;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgb(79, 10, 206);\n  border: 8px;\n}\n\ninput.mat-input-element[_ngcontent-%COMP%] {\n  color: rgb(10, 3, 17);\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbXBvbmVudHMvc2VsZWN0LXRhYi1vYmplY3Qvc2VsZWN0LXRhYi1vYmplY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFDQSxlQUFlO0FBQ2Y7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbXBvbmVudHMvc2VsZWN0LXRhYi1vYmplY3Qvc2VsZWN0LXRhYi1vYmplY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWVsZW1lbnQge1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiA3NSU7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IHJnYig3OSwgMTAsIDIwNik7XG4gIGJvcmRlcjogOHB4O1xufVxuLyogRm9udCBjb2xvciAqL1xuaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjogcmdiKDEwLCAzLCAxNyk7XG4gIGZvbnQ6IGJvbGQ7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectTabObjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-select-tab-object",
                templateUrl: "./select-tab-object.component.html",
                styleUrls: ["./select-tab-object.component.css"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], touched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], registerForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titleAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/movies/components/select/select.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/movies/components/select/select.component.ts ***!
  \***********************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");







function SelectComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r73);
} }
function SelectComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r72.titleAlert);
} }
class SelectComponent {
    constructor() {
    }
    ngOnInit() { }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], inputs: { label: "label", options: "options", valid: "valid", touched: "touched", registerForm: "registerForm", control: "control", titleAlert: "titleAlert" }, decls: 6, vars: 5, consts: [["appearance", "outline", 1, "form-element", 3, "formGroup"], [3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_mat_option_4_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectComponent_mat_error_5_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.valid && ctx.touched);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatError"]], styles: [".form-element[_ngcontent-%COMP%] {\n  padding: 0px;\n  width: 75%;\n}\n\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgb(79, 10, 206);\n  border: 8px;\n}\n\n\n\ninput.mat-input-element[_ngcontent-%COMP%] {\n  color: rgb(10, 3, 17);\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBQ0EsZUFBZTs7QUFDZjtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9tb3ZpZXMvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1lbGVtZW50IHtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogNzUlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IHJnYig3OSwgMTAsIDIwNik7XG4gIGJvcmRlcjogOHB4O1xufVxuLyogRm9udCBjb2xvciAqL1xuaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjogcmdiKDEwLCAzLCAxNyk7XG4gIGZvbnQ6IGJvbGQ7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-select",
                templateUrl: "./select.component.html",
                styleUrls: ["./select.component.css"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], touched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], registerForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titleAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/movies/containers/add-movie/add-movie.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/movies/containers/add-movie/add-movie.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieComponent", function() { return AddMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ "./src/app/features/movies/store/actions/index.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/features/movies/store/selectors/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/features/movies/services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_form_movie_form_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form-movie/form-movie.component */ "./src/app/features/movies/components/form-movie/form-movie.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");









function AddMovieComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form-movie", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addMovie", function AddMovieComponent_ng_container_2_Template_app_form_movie_addMovie_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.OnAddMovie($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionsCategories", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r30.optionsCategories$))("movie", ctx_r30.movie)("loadingAddMovie", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r30.loadingAddMovie$))("action", "add movie");
} }
function AddMovieComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddMovieComponent {
    constructor(store, moviesService) {
        this.store = store;
        this.moviesService = moviesService;
        this.movie = {
            id: undefined,
            categoryId: undefined,
            title: "",
            language: "",
            recordedYear: undefined,
            image: "",
            specialMention: {
                lastName: "",
                firstName: "",
            },
            description: "",
            selected: false,
        };
        //this.moviesService.getCategoriesAndMoviesAfterRefreshPage();
    }
    ngOnInit() {
        this.optionsCategories$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["getAllCategories"]);
        this.loadingCategories$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsCategoriesLoading"]);
        this.loadingMovies$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoadingAllMovies"]);
        this.loadingAddMovie$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoadingActionMovie"]);
    }
    OnAddMovie(movie) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_MOVIE"]({ movie: movie }));
    }
}
AddMovieComponent.ɵfac = function AddMovieComponent_Factory(t) { return new (t || AddMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["MoviesService"])); };
AddMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddMovieComponent, selectors: [["app-add-movie"]], decls: 8, vars: 6, consts: [[1, "row"], [1, "col-md-offset-1"], [4, "ngIf", "ngIfElse"], ["loader", ""], [3, "optionsCategories", "movie", "loadingAddMovie", "action", "addMovie"], [1, "col-md-2", "col-centered"], ["color", "primary", "diameter", "80"]], template: function AddMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddMovieComponent_ng_container_2_Template, 4, 8, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddMovieComponent_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.loadingCategories$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.loadingMovies$))("ngIfElse", _r31);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_form_movie_form_movie_component__WEBPACK_IMPORTED_MODULE_6__["FormMovieComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".col-centered[_ngcontent-%COMP%] {\n  float: none;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbnRhaW5lcnMvYWRkLW1vdmllL2FkZC1tb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9tb3ZpZXMvY29udGFpbmVycy9hZGQtbW92aWUvYWRkLW1vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLWNlbnRlcmVkIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-add-movie",
                templateUrl: "./add-movie.component.html",
                styleUrls: ["./add-movie.component.css"],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/containers/categories-list/categories-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/movies/containers/categories-list/categories-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CategoriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function() { return CategoriesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/features/movies/store/selectors/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ "./src/app/features/movies/store/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.service */ "./src/app/features/shared/shared.service.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/search/search.component */ "./src/app/features/movies/components/search/search.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_category_preview_category_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/category-preview/category-preview.component */ "./src/app/features/movies/components/category-preview/category-preview.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _pipes_title_categories_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/title-categories-filter.pipe */ "./src/app/features/movies/pipes/title-categories-filter.pipe.ts");












function CategoriesListComponent_div_4_ng_container_1_app_category_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-category-preview", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("goToMovies", function CategoriesListComponent_div_4_ng_container_1_app_category_preview_1_Template_app_category_preview_goToMovies_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.onGoToMovies($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r10);
} }
function CategoriesListComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoriesListComponent_div_4_ng_container_1_app_category_preview_1_Template, 1, 1, "app-category-preview", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titleCategoriesFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const categories_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, categories_r7, ctx_r8.searchValue));
} }
function CategoriesListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoriesListComponent_div_4_ng_container_1_Template, 3, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r4.loadingCategories$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r4.loadingMovies$))("ngIfElse", _r5);
} }
function CategoriesListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CategoriesListComponent {
    constructor(store, router, shared) {
        this.store = store;
        this.router = router;
        this.shared = shared;
    }
    ngOnInit() {
        this.categories$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getAllCategories"]);
        this.loadingCategories$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsCategoriesLoading"]);
        this.loadingMovies$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingAllMovies"]);
        this.searchValue$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getSearchValue"]);
        this.searchValue$.subscribe((searchValue) => {
            this.searchValue = searchValue;
        });
    }
    search(searchValue) {
        this.searchValue = searchValue;
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["GET_SEARCH"]({ searchValue: this.searchValue }));
    }
    onGoToMovies(categoryId) {
        this.shared.test = 'mon teste';
        this.router.navigate([`movies/category/${categoryId}`]);
    }
}
CategoriesListComponent.ɵfac = function CategoriesListComponent_Factory(t) { return new (t || CategoriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"])); };
CategoriesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesListComponent, selectors: [["app-categories-list"]], decls: 9, vars: 7, consts: [[1, "row"], [1, "col-md-2", "col-centered"], [3, "searchName", "searchValue", "search"], ["class", "row", 4, "ngIf"], ["loader", ""], [4, "ngIf", "ngIfElse"], [3, "category", "goToMovies", 4, "ngFor", "ngForOf"], [3, "category", "goToMovies"], ["color", "primary", "diameter", "80"]], template: function CategoriesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function CategoriesListComponent_Template_app_search_search_2_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoriesListComponent_div_4_Template, 4, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoriesListComponent_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchName", "search category")("searchValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.searchValue$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.categories$));
    } }, directives: [_components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_category_preview_category_preview_component__WEBPACK_IMPORTED_MODULE_8__["CategoryPreviewComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _pipes_title_categories_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["TitleCategoriesFilterPipe"]], styles: [".col-centered[_ngcontent-%COMP%] {\n  float: none;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbnRhaW5lcnMvY2F0ZWdvcmllcy1saXN0L2NhdGVnb3JpZXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9tb3ZpZXMvY29udGFpbmVycy9jYXRlZ29yaWVzLWxpc3QvY2F0ZWdvcmllcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLWNlbnRlcmVkIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-categories-list",
                templateUrl: "./categories-list.component.html",
                styleUrls: ["./categories-list.component.css"],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/containers/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/movies/containers/index.ts ***!
  \*****************************************************/
/*! exports provided: TemplateComponent, CategoriesListComponent, MoviesListComponent, AddMovieComponent, UpdateMovieComponent, MoviesCollectionComponent, MovieDetailsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/template.component */ "./src/app/features/movies/containers/template/template.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return _template_template_component__WEBPACK_IMPORTED_MODULE_0__["TemplateComponent"]; });

/* harmony import */ var _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories-list/categories-list.component */ "./src/app/features/movies/containers/categories-list/categories-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function() { return _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_1__["CategoriesListComponent"]; });

/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "./src/app/features/movies/containers/movies-list/movies-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesListComponent"]; });

/* harmony import */ var _add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-movie/add-movie.component */ "./src/app/features/movies/containers/add-movie/add-movie.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddMovieComponent", function() { return _add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_3__["AddMovieComponent"]; });

/* harmony import */ var _update_movie_update_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-movie/update-movie.component */ "./src/app/features/movies/containers/update-movie/update-movie.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateMovieComponent", function() { return _update_movie_update_movie_component__WEBPACK_IMPORTED_MODULE_4__["UpdateMovieComponent"]; });

/* harmony import */ var _movies_collection_movies_collection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies-collection/movies-collection.component */ "./src/app/features/movies/containers/movies-collection/movies-collection.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoviesCollectionComponent", function() { return _movies_collection_movies_collection_component__WEBPACK_IMPORTED_MODULE_5__["MoviesCollectionComponent"]; });

/* harmony import */ var _movie_details_container_movie_details_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-details-container/movie-details-container.component */ "./src/app/features/movies/containers/movie-details-container/movie-details-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsContainerComponent", function() { return _movie_details_container_movie_details_container_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailsContainerComponent"]; });










/***/ }),

/***/ "./src/app/features/movies/containers/movie-details-container/movie-details-container.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/movies/containers/movie-details-container/movie-details-container.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MovieDetailsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsContainerComponent", function() { return MovieDetailsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/features/movies/store/selectors/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ "./src/app/features/movies/store/actions/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/movie-details/movie-details.component */ "./src/app/features/movies/components/movie-details/movie-details.component.ts");
/* harmony import */ var _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/add-comment/add-comment.component */ "./src/app/features/movies/components/add-comment/add-comment.component.ts");
/* harmony import */ var _components_preview_comment_preview_comment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/preview-comment/preview-comment.component */ "./src/app/features/movies/components/preview-comment/preview-comment.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");













function MovieDetailsContainerComponent_div_0_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-preview-comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieDetailsContainerComponent_div_0_div_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieDetailsContainerComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieDetailsContainerComponent_div_0_div_2_div_2_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MovieDetailsContainerComponent_div_0_div_2_ng_template_5_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-add-comment", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r59.loadingComments$))("ngIfElse", _r61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r59.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controlText", ctx_r59.form.controls.text);
} }
function MovieDetailsContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieDetailsContainerComponent_div_0_div_2_Template, 10, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-movie-details", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addOrDeleteToMyCollection", function MovieDetailsContainerComponent_div_0_Template_app_movie_details_addOrDeleteToMyCollection_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.OnAddOrDeleteToMyCollection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r56.movie$).selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r56.movie$))("loadingAddOrDeleteMovieToMycollection", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, ctx_r56.loadingAddOrDeleteMovieToMycollection$));
} }
function MovieDetailsContainerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MovieDetailsContainerComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
        //this.moviesService.getCategoriesAndMoviesAfterRefreshPage();
    }
    ngOnInit() {
        this.movie$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getMovieById"]);
        this.loadingCategories$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsCategoriesLoading"]);
        this.loadingMovies$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingAllMovies"]);
        this.loadingAddOrDeleteMovieToMycollection$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingActionMovie"]);
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMMENTS_BY_ID_MOVIE"]({ movieId: parseInt(this.route.snapshot.paramMap.get('movieId')) }));
        this.comments$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getAllComments"]);
        this.comments$.subscribe(data => console.log(data));
        this.loadingComments$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsCommentsLoading"]);
        this.createForm();
    }
    OnAddOrDeleteToMyCollection(movieId) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_OR_DELETE_MOVIE_COLLECTION"]({ movieId: movieId }));
    }
    createForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)),
        });
    }
}
MovieDetailsContainerComponent.ɵfac = function MovieDetailsContainerComponent_Factory(t) { return new (t || MovieDetailsContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
MovieDetailsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailsContainerComponent, selectors: [["app-movie-details-container"]], decls: 6, vars: 6, consts: [["style", "width: 100%;", 4, "ngIf", "ngIfElse"], ["loader", ""], [2, "width", "100%"], ["class", "col-md-4 col-left", 4, "ngIf"], [1, "col-md-6", "col-centered"], [1, "card"], [3, "movie", "loadingAddOrDeleteMovieToMycollection", "addOrDeleteToMyCollection"], [1, "col-md-4", "col-left"], [4, "ngIf", "ngIfElse"], ["loaderComments", ""], [3, "formGroup"], [3, "controlText"], [1, "col-md-2", "col-centered"], ["color", "primary", "diameter", "80"]], template: function MovieDetailsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailsContainerComponent_div_0_Template, 9, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovieDetailsContainerComponent_ng_template_4_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.loadingCategories$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.loadingMovies$))("ngIfElse", _r57);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_8__["AddCommentComponent"], _components_preview_comment_preview_comment_component__WEBPACK_IMPORTED_MODULE_9__["PreviewCommentComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".col-centered[_ngcontent-%COMP%] {\n  float: none;\n  margin: 0 auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  min-height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbnRhaW5lcnMvbW92aWUtZGV0YWlscy1jb250YWluZXIvbW92aWUtZGV0YWlscy1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21vdmllcy9jb250YWluZXJzL21vdmllLWRldGFpbHMtY29udGFpbmVyL21vdmllLWRldGFpbHMtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLWNlbnRlcmVkIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-movie-details-container",
                templateUrl: "./movie-details-container.component.html",
                styleUrls: ["./movie-details-container.component.css"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/containers/movies-collection/movies-collection.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/movies/containers/movies-collection/movies-collection.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MoviesCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesCollectionComponent", function() { return MoviesCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/features/movies/store/selectors/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/features/movies/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/search/search.component */ "./src/app/features/movies/components/search/search.component.ts");
/* harmony import */ var _components_movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/movie-preview/movie-preview.component */ "./src/app/features/movies/components/movie-preview/movie-preview.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _pipes_title_movies_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/title-movies-filter.pipe */ "./src/app/features/movies/pipes/title-movies-filter.pipe.ts");












function MoviesCollectionComponent_div_0_div_5_ng_container_1_app_movie_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-movie-preview", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("detailsMovie", function MoviesCollectionComponent_div_0_div_5_ng_container_1_app_movie_preview_1_Template_app_movie_preview_detailsMovie_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r50.onDetailsMovie($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r49)("parent", "collection");
} }
function MoviesCollectionComponent_div_0_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesCollectionComponent_div_0_div_5_ng_container_1_app_movie_preview_1_Template, 1, 2, "app-movie-preview", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titleMoviesFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movies_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, movies_r41, ctx_r47.searchValue));
} }
function MoviesCollectionComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesCollectionComponent_div_0_div_5_ng_container_1_Template, 3, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movies_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movies_r41.length > 0)("ngIfElse", _r45);
} }
function MoviesCollectionComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoviesCollectionComponent_div_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No movie is in your collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoviesCollectionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-search", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function MoviesCollectionComponent_div_0_Template_app_search_search_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.search($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MoviesCollectionComponent_div_0_div_5_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MoviesCollectionComponent_div_0_ng_template_9_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MoviesCollectionComponent_div_0_ng_template_12_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchName", "search movie")("searchValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r40.searchValue$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx_r40.loadingCategories$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, ctx_r40.loadingMovies$))("ngIfElse", _r43);
} }
class MoviesCollectionComponent {
    constructor(store, moviesService, router) {
        this.store = store;
        this.moviesService = moviesService;
        this.router = router;
        this.searchValue$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("");
        //this.moviesService.getCategoriesAndMoviesAfterRefreshPage();
    }
    ngOnInit() {
        this.movies$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getMyCollectionMovies"]);
        this.loadingCategories$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsCategoriesLoading"]);
        this.loadingMovies$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingAllMovies"]);
        this.loadingDeleteMovieToMycollection$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingActionMovie"]);
    }
    search(searchValue) {
        this.searchValue = searchValue;
    }
    onDetailsMovie(movieId) {
        this.router.navigate([`movies/movie-details/${movieId}`]);
    }
}
MoviesCollectionComponent.ɵfac = function MoviesCollectionComponent_Factory(t) { return new (t || MoviesCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
MoviesCollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesCollectionComponent, selectors: [["app-movies-collection"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "row"], [1, "col-md-2", "col-centered"], [3, "searchName", "searchValue", "search"], ["class", "row", 4, "ngIf", "ngIfElse"], ["loader", ""], ["noMovie", ""], [4, "ngIf", "ngIfElse"], [3, "movie", "parent", "detailsMovie", 4, "ngFor", "ngForOf"], [3, "movie", "parent", "detailsMovie"], ["color", "primary", "diameter", "80"]], template: function MoviesCollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MoviesCollectionComponent_div_0_Template, 14, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.movies$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_8__["MoviePreviewComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _pipes_title_movies_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["TitleMoviesFilterPipe"]], styles: [".col-centered[_ngcontent-%COMP%] {\n  float: none;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbnRhaW5lcnMvbW92aWVzLWNvbGxlY3Rpb24vbW92aWVzLWNvbGxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbnRhaW5lcnMvbW92aWVzLWNvbGxlY3Rpb24vbW92aWVzLWNvbGxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtY2VudGVyZWQge1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesCollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-movies-collection",
                templateUrl: "./movies-collection.component.html",
                styleUrls: ["./movies-collection.component.css"],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["MoviesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/containers/movies-list/movies-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/movies/containers/movies-list/movies-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/features/movies/store/selectors/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./src/app/features/movies/store/actions/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services */ "./src/app/features/movies/services/index.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/search/search.component */ "./src/app/features/movies/components/search/search.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/movie-preview/movie-preview.component */ "./src/app/features/movies/components/movie-preview/movie-preview.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _pipes_title_movies_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/title-movies-filter.pipe */ "./src/app/features/movies/pipes/title-movies-filter.pipe.ts");

















function MoviesListComponent_div_4_div_1_ng_container_1_app_movie_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-movie-preview", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateMovie", function MoviesListComponent_div_4_div_1_ng_container_1_app_movie_preview_1_Template_app_movie_preview_updateMovie_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r25.onUpdateMovie($event); })("deleteMovie", function MoviesListComponent_div_4_div_1_ng_container_1_app_movie_preview_1_Template_app_movie_preview_deleteMovie_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r27.onDeleteMovie($event); })("detailsMovie", function MoviesListComponent_div_4_div_1_ng_container_1_app_movie_preview_1_Template_app_movie_preview_detailsMovie_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r28.onDetailsMovie($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r24);
} }
function MoviesListComponent_div_4_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesListComponent_div_4_div_1_ng_container_1_app_movie_preview_1_Template, 1, 1, "app-movie-preview", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titleMoviesFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r22.obs), ctx_r22.searchValue));
} }
function MoviesListComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesListComponent_div_4_div_1_ng_container_1_Template, 4, 6, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movies_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movies_r20.length > 0)("ngIfElse", _r18);
} }
function MoviesListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesListComponent_div_4_div_1_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r14.loadingCategories$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r14.loadingMovies$))("ngIfElse", _r16);
} }
function MoviesListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoviesListComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoviesListComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No movie is associated with this category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [6, 9, 12, 18]; };
class MoviesListComponent {
    constructor(store, router, changeDetectorRef, moviesService) {
        this.store = store;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.moviesService = moviesService;
        this.searchValue$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])("");
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        //this.moviesService.getCategoriesAndMoviesAfterRefreshPage();
    }
    ngOnInit() {
        console.log("aaaa");
        this.movies$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["getSelectedMoviesByIdCategory"]);
        this.loadingMovies$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["getIsLoadingAllMovies"]);
        this.loadingCategories$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["getIsCategoriesLoading"]);
        this.loadingAction$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["getIsLoadingActionMovie"]);
        this.changeDetectorRef.detectChanges();
        this.movies$.subscribe((movies) => {
            this.dataSource.data = movies;
            this.dataSource.paginator = this.paginator;
        });
        this.obs = this.dataSource.connect();
    }
    ngOnDestroy() {
        if (this.dataSource) {
            this.dataSource.disconnect();
        }
    }
    search(searchValue) {
        this.searchValue = searchValue;
    }
    onUpdateMovie(movieId) {
        this.router.navigate([`movies/movie/${movieId}`]);
    }
    onDeleteMovie(movieId) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["DELETE_MOVIE"]({ movieId: movieId }));
    }
    onDetailsMovie(movieId) {
        this.router.navigate([`movies/movie-details/${movieId}`]);
    }
}
MoviesListComponent.ɵfac = function MoviesListComponent_Factory(t) { return new (t || MoviesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["MoviesService"])); };
MoviesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesListComponent, selectors: [["app-movies-list"]], viewQuery: function MoviesListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 16, vars: 12, consts: [[1, "row"], [1, "col-md-2", "col-centered"], [3, "searchName", "searchValue", "search"], ["class", "row", 4, "ngIf"], [3, "pageSizeOptions"], ["loader", ""], ["noMovie", ""], [4, "ngIf", "ngIfElse"], [3, "movie", "updateMovie", "deleteMovie", "detailsMovie", 4, "ngFor", "ngForOf"], [3, "movie", "updateMovie", "deleteMovie", "detailsMovie"], ["mode", "indeterminate"], ["color", "primary", "diameter", "80"]], template: function MoviesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function MoviesListComponent_Template_app_search_search_2_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MoviesListComponent_div_4_Template, 4, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MoviesListComponent_div_6_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MoviesListComponent_ng_template_11_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MoviesListComponent_ng_template_14_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchName", "search movie")("searchValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.searchValue$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.movies$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx.loadingAction$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_11__["MoviePreviewComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _pipes_title_movies_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["TitleMoviesFilterPipe"]], styles: [".col-centered[_ngcontent-%COMP%] {\n  float: none;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbnRhaW5lcnMvbW92aWVzLWxpc3QvbW92aWVzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbnRhaW5lcnMvbW92aWVzLWxpc3QvbW92aWVzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtY2VudGVyZWQge1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-movies-list",
                templateUrl: "./movies-list.component.html",
                styleUrls: ["./movies-list.component.css"],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["MoviesService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/features/movies/containers/template/template.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/movies/containers/template/template.component.ts ***!
  \***************************************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ "./src/app/features/movies/store/actions/index.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











const _c0 = function (a0) { return { "sidenav-collapsed": a0 }; };
class TemplateComponent {
    constructor(changeDetectorRef, media, store) {
        this.store = store;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnInit() {
        console.log("appel back........");
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_CATEGORIES"]());
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES"]());
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
TemplateComponent.ɵfac = function TemplateComponent_Factory(t) { return new (t || TemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
TemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateComponent, selectors: [["app-template"]], decls: 34, vars: 9, consts: [[3, "mode", "opened", "ngClass"], ["snav", ""], [1, "sidenav-header"], ["routerLink", "/"], ["routerLink", "/movies"], ["routerLink", "/movies/add-movie"], ["routerLink", "/movies/my-collection"], [3, "ngClass"], ["mat-icon-button", "", 3, "click"], [1, "container-fluid"]], template: function TemplateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Categories movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "local_movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "movie_creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "My collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "collections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-drawer-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.mobileQuery.matches ? _r2.toggle() : ctx.collapsedNav = !ctx.collapsedNav; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("opened", !ctx.mobileQuery.matches)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.collapsedNav && !ctx.mobileQuery.matches));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.collapsedNav && !ctx.mobileQuery.matches ? "M" : "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.collapsedNav && !ctx.mobileQuery.matches));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");.mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%]{font:400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.05em;margin:0 0 56px}.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.02em;margin:0 0 64px}.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.005em;margin:0 0 64px}.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-button-toggle[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-card[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]{font-size:14px}.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%]{font-size:18px}.mat-table[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(0.75);width:133.3333333333%}.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(0.75);width:133.3333433333%}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-0.84375em;padding-top:.84375em}.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.7916666667em)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);-ms-transform:translateY(-1.28125em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);-ms-transform:translateY(-1.28124em) scale(0.75);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);-ms-transform:translateY(-1.28123em) scale(0.75);width:133.3333533333%}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.5416666667em;top:calc(100% - 1.6666666667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(0.75)}}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-0.5em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59375em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59374em) scale(0.75);width:133.3333433333%}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0 1em 0}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-0.25em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(0.75);width:133.3333433333%}.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]{font-size:14px}.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}input.mat-input-element[_ngcontent-%COMP%]{margin-top:-0.0625em}.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:400}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px}.mat-radio-button[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-select[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}.mat-slide-toggle-content[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:normal}.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-tab-group[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0}.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-list-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}.mat-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:16px}.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px}.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(0)}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}@media screen and (-ms-high-contrast: active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{}@keyframes cdk-text-field-autofill-start{}@-webkit-keyframes cdk-text-field-autofill-end{}@keyframes cdk-text-field-autofill-end{}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}textarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}.mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}.mat-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#3f51b5}.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#ff4081}.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox[_ngcontent-%COMP%]::after{color:#fafafa}.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{color:#b0b0b0}.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#3f51b5}.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#ff4081}.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{background:#b0b0b0}.mat-elevation-z0[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z1[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z2[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z3[_ngcontent-%COMP%]{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z4[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z5[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z6[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z7[_ngcontent-%COMP%]{box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mat-elevation-z9[_ngcontent-%COMP%]{box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)}.mat-elevation-z10[_ngcontent-%COMP%]{box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)}.mat-elevation-z11[_ngcontent-%COMP%]{box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)}.mat-elevation-z12[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z13[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z14[_ngcontent-%COMP%]{box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z15[_ngcontent-%COMP%]{box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z16[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z17[_ngcontent-%COMP%]{box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z18[_ngcontent-%COMP%]{box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)}.mat-elevation-z19[_ngcontent-%COMP%]{box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)}.mat-elevation-z20[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z21[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z22[_ngcontent-%COMP%]{box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z23[_ngcontent-%COMP%]{box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)}.mat-elevation-z24[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)}.mat-app-background[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker[_ngcontent-%COMP%]{display:none}.mat-autocomplete-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#3f51b5}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{outline:solid 1px;border-radius:0}.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#ff4081;color:#fff}.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#f44336}.mat-badge[_ngcontent-%COMP%]{position:relative}.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{display:none}.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content[_ngcontent-%COMP%]{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%]{transition:none}.mat-badge-content.mat-badge-active[_ngcontent-%COMP%]{transform:none}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-8px}.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-8px}.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-16px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-16px}.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-16px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-8px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-8px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-8px}.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-11px}.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-11px}.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-22px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-22px}.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-22px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-11px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-11px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-11px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-14px}.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-14px}.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-28px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-28px}.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-28px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-14px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-14px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-14px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{color:inherit;background:transparent}.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]{color:#3f51b5}.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-button[disabled][disabled][_ngcontent-%COMP%], .mat-icon-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-icon-button[disabled][disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-stroked-button[disabled][disabled][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#ff4081}.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#f44336}.mat-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:transparent}.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{opacity:.1;background-color:currentColor}.mat-button-focus-overlay[_ngcontent-%COMP%]{background:#000}.mat-stroked-button[_ngcontent-%COMP%]:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background-color:#fff}.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{color:#fff}.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{color:#fff}.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{color:#fff}.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081}.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-raised-button[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mat-raised-button[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mat-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{box-shadow:none}.mat-button-toggle[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:#000}.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#bdbdbd}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{border:solid 1px rgba(0,0,0,.12)}.mat-card[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-card-subtitle[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-checkbox-frame[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark[_ngcontent-%COMP%]{fill:#fafafa}.mat-checkbox-checkmark-path[_ngcontent-%COMP%]{stroke:#fafafa !important}.mat-checkbox-mixedmark[_ngcontent-%COMP%]{background-color:#fafafa}.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#ff4081}.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#b0b0b0}.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%]{border-color:#b0b0b0}.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%]{background:#3f51b5}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%]{background:#ff4081}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%]{background:#f44336}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%]{opacity:.4}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-table[_ngcontent-%COMP%]{background:#fff}.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%]{background:inherit}mat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-calendar-arrow[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-calendar-table-header[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.4)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-datepicker-toggle-active[_ngcontent-%COMP%]{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-dialog-container[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical[_ngcontent-%COMP%]{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-action-row[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]){background:rgba(0,0,0,.04)}@media(hover: none){.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#fff}}.mat-expansion-panel-header-title[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{color:inherit}.mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#3f51b5}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#3f51b5}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#ff4081}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#f44336}.mat-error[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:transparent}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.06)}.mat-icon.mat-primary[_ngcontent-%COMP%]{color:#3f51b5}.mat-icon.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-icon.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}.mat-input-element[_ngcontent-%COMP%]{caret-color:#3f51b5}.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#ff4081}.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-list-item-disabled[_ngcontent-%COMP%]{background-color:#eee}.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.04)}.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.12)}.mat-menu-panel[_ngcontent-%COMP%]{background:#fff}.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-menu-item[_ngcontent-%COMP%]{background:transparent;color:rgba(0,0,0,.87)}.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator[_ngcontent-%COMP%]{background:#fff}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background[_ngcontent-%COMP%]{fill:#c5cae9}.mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#c5cae9}.mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#3f51b5}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ff80ab}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ff80ab}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#ff4081}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ffcdd2}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ffcdd2}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#f44336}.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#3f51b5}.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#ff4081}.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f44336}.mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#3f51b5}.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#ff4081}.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#ff4081}.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#f44336}.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#f44336}.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-select-placeholder[_ngcontent-%COMP%]{color:rgba(0,0,0,.42)}.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-select-panel[_ngcontent-%COMP%]{background:#fff}.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#3f51b5}.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-drawer-container[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push[_ngcontent-%COMP%]{background-color:#fff}.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side){box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}.mat-drawer-side[_ngcontent-%COMP%]{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#ff4081}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.54)}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#ff4081}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(63,81,181,.54)}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#f44336}.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-slide-toggle-thumb[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12);background-color:#fafafa}.mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#ff4081}.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#f44336}.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}.mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.2)}.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);background-image:-moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.04)}@media(hover: none){.mat-step-header[_ngcontent-%COMP%]:hover{background:none}}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%]{background-color:transparent;color:#f44336}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%]{color:#f44336}.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{background-color:#fff}.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow[_ngcontent-%COMP%]{color:#757575}.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#ff4081}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#f44336}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}.mat-toolbar[_ngcontent-%COMP%]{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent[_ngcontent-%COMP%]{background:#ff4081;color:#fff}.mat-toolbar.mat-warn[_ngcontent-%COMP%]{background:#f44336;color:#fff}.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:currentColor}.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:inherit}.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:currentColor}.mat-tooltip[_ngcontent-%COMP%]{background:rgba(97,97,97,.9)}.mat-tree[_ngcontent-%COMP%]{background:#fff}.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-snack-bar-container[_ngcontent-%COMP%]{color:rgba(255,255,255,.7);background:#323232;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#ff4081}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}mat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}mat-drawer[_ngcontent-%COMP%], mat-drawer-content[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}mat-drawer[_ngcontent-%COMP%] {\n  width: 250px;\n  background-color: #8ca5ff;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%2373adff' stroke-width='100' stroke-opacity='0' %3E%3Ccircle fill='%238ca5ff' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23859cf2' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%237e93e5' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23768ad8' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%236f81cb' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%236879bf' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%236170b2' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%235a67a5' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23535e98' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%234b558b' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23444c7e' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%233d4371' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23363a64' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%232f3258' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2328294b' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%2320203e' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23191731' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23120e24' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  transition-property: width;\n}mat-drawer.sidenav-collapsed[_ngcontent-%COMP%] {\n  width: 100px;\n}mat-drawer[_ngcontent-%COMP%]   .sidenav-header[_ngcontent-%COMP%] {\n  background-color: #000;\n  height: 64px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}mat-drawer[_ngcontent-%COMP%]   .sidenav-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: #fff;\n}mat-drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n}mat-drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  list-style: none;\n  cursor: pointer;\n  margin: 10px;\n  padding: 10px;\n  background-color: #000;\n  border-radius: 5px;\n}mat-drawer-content[_ngcontent-%COMP%] {\n  transition-property: transform, margin-left, margin-right;\n}mat-drawer-content.sidenav-collapsed[_ngcontent-%COMP%] {\n  margin-left: 100px !important;\n}.container-fluid[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}@media (max-width: 600px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    flex-direction: row-reverse !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbnRhaW5lcnMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzRUFBc0UsQ0NEdEUsbUJBQW1CLGVBQWUsQ0FBQyxjQUFjLENBQUMsZ0RBQWdELENBQUMsb0NBQW9DLGFBQWEsQ0FBQyxvQ0FBb0MsY0FBYyxDQUFDLHlDQUF5Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsc0NBQXNDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyw2Q0FBNkMsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLDZDQUE2Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLG9FQUFvRSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsb0VBQW9FLENBQUMsZUFBZSxDQUFDLDZCQUE2Qix1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxzQ0FBc0MsdURBQXVELENBQUMscUJBQXFCLENBQUMsNENBQTRDLGVBQWUsQ0FBQyx3QkFBd0IsdURBQXVELENBQUMscUJBQXFCLENBQUMsOENBQThDLHlEQUF5RCxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyw4Q0FBOEMsdURBQXVELENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLDhDQUE4Qyx1REFBdUQsQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUMsOENBQThDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsdURBQXVELENBQUMscUJBQXFCLENBQUMsNEdBQTRHLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLGdEQUFnRCxDQUFDLFVBQVUsZ0RBQWdELENBQUMsZ0JBQWdCLGNBQWMsQ0FBQyxlQUFlLENBQUMsaUNBQWlDLGNBQWMsQ0FBQyxxQ0FBcUMsY0FBYyxDQUFDLGNBQWMsZ0RBQWdELENBQUMseUNBQXlDLGdCQUFnQixDQUFDLFVBQVUsY0FBYyxDQUFDLGVBQWUsQ0FBQywrRUFBK0UsY0FBYyxDQUFDLFdBQVcsZ0RBQWdELENBQUMsaUJBQWlCLGNBQWMsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLGNBQWMsQ0FBQyxjQUFjLGdEQUFnRCxDQUFDLG1CQUFtQixjQUFjLENBQUMscURBQXFELGNBQWMsQ0FBQyxlQUFlLENBQUMsOEJBQThCLGNBQWMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLDRCQUE0QixnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDZCQUE2Qix1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGdEQUFnRCxDQUFDLHFCQUFxQixDQUFDLHdCQUF3Qix3QkFBd0IsQ0FBQyxrRUFBa0UsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGdGQUFnRixZQUFZLENBQUMsV0FBVyxDQUFDLG9HQUFvRyxjQUFjLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLGNBQWMsQ0FBQyxxQ0FBcUMsQ0FBQyxrTEFBa0wsNENBQTRDLENBQUMscUJBQXFCLENBQUMseUhBQXlILDRDQUE0QyxDQUFDLHFCQUFxQixDQUFDLDhCQUE4QixjQUFjLENBQUMsb0JBQW9CLENBQUMsc0JBQXNCLGFBQWEsQ0FBQywwQkFBMEIsZ0JBQWdCLENBQUMsa0NBQWtDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQywrQkFBK0IsQ0FBQywwREFBMEQscUJBQXFCLENBQUMsd0RBQXdELGlCQUFpQixDQUFDLG9QQUFvUCxtRkFBbUYsQ0FBQyxnREFBZ0QsQ0FBQyxxQkFBcUIsQ0FBQyxpS0FBaUsscUZBQXFGLENBQUMsZ0RBQWdELENBQUMscUJBQXFCLENBQUMsMEpBQTBKLHFGQUFxRixDQUFDLGdEQUFnRCxDQUFDLHFCQUFxQixDQUFDLHdEQUF3RCxhQUFhLENBQUMsNERBQTRELGFBQWEsQ0FBQyxvRUFBb0Usd0JBQXdCLENBQUMsK0JBQStCLENBQUMsYUFBYSxvUEFBb1AsNENBQTRDLENBQUMsaUtBQWlLLDRDQUE0QyxDQUFDLDBKQUEwSiwyQ0FBMkMsQ0FBQyxDQUFDLHNEQUFzRCx1QkFBdUIsQ0FBQyxzREFBc0QsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGdQQUFnUCw0Q0FBNEMsQ0FBQyxxQkFBcUIsQ0FBQyx3SkFBd0osNENBQTRDLENBQUMscUJBQXFCLENBQUMseURBQXlELG1CQUFtQixDQUFDLHlEQUF5RCxhQUFhLENBQUMsa0JBQWtCLENBQUMsc1BBQXNQLDRDQUE0QyxDQUFDLHFCQUFxQixDQUFDLDJKQUEySiw0Q0FBNEMsQ0FBQyxxQkFBcUIsQ0FBQyw0Q0FBNEMsY0FBYyxDQUFDLGdFQUFnRSxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLDhGQUE4RixjQUFjLENBQUMsd0JBQXdCLG9CQUFvQixDQUFDLGVBQWUsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyw0REFBNEQsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGtCQUFrQixnREFBZ0QsQ0FBQyxZQUFZLGdEQUFnRCxDQUFDLG9CQUFvQixjQUFjLENBQUMsMEJBQTBCLGdEQUFnRCxDQUFDLDZCQUE2QixnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDhDQUE4QyxnREFBZ0QsQ0FBQyxnQkFBZ0IsY0FBYyxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsa0JBQWtCLENBQUMsc0JBQXNCLGNBQWMsQ0FBQyx5QkFBeUIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxlQUFlLGdEQUFnRCxDQUFDLDZCQUE2QixnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDZHQUE2Ryx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixjQUFjLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsZ0RBQWdELENBQUMsaUJBQWlCLGdEQUFnRCxDQUFDLDhCQUE4QixjQUFjLENBQUMsd0NBQXdDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsdURBQXVELGNBQWMsQ0FBQyxnQ0FBZ0MsY0FBYyxDQUFDLDBDQUEwQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLHlEQUF5RCxjQUFjLENBQUMsOEJBQThCLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMscUNBQXFDLGNBQWMsQ0FBQywrQ0FBK0Msa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyw4REFBOEQsY0FBYyxDQUFDLHVDQUF1QyxjQUFjLENBQUMsaURBQWlELGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsZ0VBQWdFLGNBQWMsQ0FBQyxxQ0FBcUMsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxZQUFZLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsdURBQXVELENBQUMscUJBQXFCLENBQUMscUJBQXFCLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxVQUFVLGdEQUFnRCxDQUFDLHFDQUFxQyxlQUFlLENBQUMsY0FBYyxDQUFDLFlBQVksZUFBZSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3Qix1QkFBdUIsQ0FBQyxpQ0FBaUMsZ0JBQWdCLENBQUMsb0JBQW9CLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLDJEQUEyRCxDQUFDLGtCQUFrQixDQUFDLDhDQUE4QyxZQUFZLENBQUMscUJBQXFCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxtREFBbUQsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLHVCQUF1QixjQUFjLENBQUMsWUFBWSxDQUFDLDZCQUE2QixZQUFZLENBQUMsNEJBQTRCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyx5REFBeUQsQ0FBQyxTQUFTLENBQUMsbURBQW1ELFNBQVMsQ0FBQyw4Q0FBOEMsbURBQW1ELFVBQVUsQ0FBQyxDQUFDLDJCQUEyQiwwQkFBMEIsQ0FBQyxpR0FBaUcsU0FBUyxDQUFDLDZDQUE2QyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLGNBQWMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsaURBQXlDLElBQUksQ0FBQyxDQUE5Qyx5Q0FBeUMsSUFBSSxDQUFDLENBQUMsK0NBQXVDLElBQUksQ0FBQyxDQUE1Qyx1Q0FBdUMsSUFBSSxDQUFDLENBQUMsb0RBQW9ELHNEQUE2QyxDQUE3Qyw4Q0FBOEMsQ0FBQywwREFBMEQsb0RBQTJDLENBQTNDLDRDQUE0QyxDQUFDLCtCQUErQixXQUFXLENBQUMseUNBQXlDLHdCQUF3QixDQUFDLGlDQUFpQyxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLGlEQUFpRCx3QkFBd0IsQ0FBQyxpQ0FBaUMsQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsK0JBQStCLENBQUMsWUFBWSxxQkFBcUIsQ0FBQyx3RkFBd0YsMEJBQTBCLENBQUMsNkVBQTZFLDBCQUEwQixDQUFDLHVCQUF1QiwwQkFBMEIsQ0FBQyxxQkFBcUIsQ0FBQyxnQ0FBZ0MscUJBQXFCLENBQUMsZ0VBQWdFLGFBQWEsQ0FBQywrREFBK0QsYUFBYSxDQUFDLDZEQUE2RCxhQUFhLENBQUMsb0JBQW9CLHFCQUFxQixDQUFDLDJDQUEyQyxxQkFBcUIsQ0FBQyxxQkFBcUIscUJBQXFCLENBQUMsNEJBQTRCLGFBQWEsQ0FBQyw4QkFBOEIsYUFBYSxDQUFDLDBGQUEwRixrQkFBa0IsQ0FBQyx3SkFBd0osa0JBQWtCLENBQUMsb0ZBQW9GLGtCQUFrQixDQUFDLDBIQUEwSCxrQkFBa0IsQ0FBQyxrQkFBa0IscUhBQXFILENBQUMsa0JBQWtCLHNIQUFzSCxDQUFDLGtCQUFrQixzSEFBc0gsQ0FBQyxrQkFBa0Isc0hBQXNILENBQUMsa0JBQWtCLHVIQUF1SCxDQUFDLGtCQUFrQix1SEFBdUgsQ0FBQyxrQkFBa0Isd0hBQXdILENBQUMsa0JBQWtCLHdIQUF3SCxDQUFDLGtCQUFrQix3SEFBd0gsQ0FBQyxrQkFBa0Isd0hBQXdILENBQUMsbUJBQW1CLHlIQUF5SCxDQUFDLG1CQUFtQix5SEFBeUgsQ0FBQyxtQkFBbUIseUhBQXlILENBQUMsbUJBQW1CLHlIQUF5SCxDQUFDLG1CQUFtQix5SEFBeUgsQ0FBQyxtQkFBbUIseUhBQXlILENBQUMsbUJBQW1CLDBIQUEwSCxDQUFDLG1CQUFtQiwwSEFBMEgsQ0FBQyxtQkFBbUIsMEhBQTBILENBQUMsbUJBQW1CLDBIQUEwSCxDQUFDLG1CQUFtQiwySEFBMkgsQ0FBQyxtQkFBbUIsMkhBQTJILENBQUMsbUJBQW1CLDJIQUEySCxDQUFDLG1CQUFtQiwySEFBMkgsQ0FBQyxtQkFBbUIsMkhBQTJILENBQUMsb0JBQW9CLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixZQUFZLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxzREFBc0QsdUhBQXVILENBQUMsOEVBQThFLGVBQWUsQ0FBQyx3R0FBd0cscUJBQXFCLENBQUMsbUJBQW1CLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyw2Q0FBNkMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLHFDQUFxQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsbUNBQW1DLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLGlCQUFpQixDQUFDLHFDQUFxQyxZQUFZLENBQUMsdUNBQXVDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxzQ0FBc0MsQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsbUZBQW1GLGVBQWUsQ0FBQyxvQ0FBb0MsY0FBYyxDQUFDLG9DQUFvQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9EQUFvRCxRQUFRLENBQUMsb0RBQW9ELFdBQVcsQ0FBQyxxREFBcUQsVUFBVSxDQUFDLCtEQUErRCxTQUFTLENBQUMsV0FBVyxDQUFDLG9EQUFvRCxXQUFXLENBQUMsOERBQThELFVBQVUsQ0FBQyxVQUFVLENBQUMsdUVBQXVFLFNBQVMsQ0FBQyxpRkFBaUYsU0FBUyxDQUFDLFVBQVUsQ0FBQyxzRUFBc0UsVUFBVSxDQUFDLGdGQUFnRixVQUFVLENBQUMsU0FBUyxDQUFDLHFDQUFxQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLHFEQUFxRCxTQUFTLENBQUMscURBQXFELFlBQVksQ0FBQyxzREFBc0QsVUFBVSxDQUFDLGdFQUFnRSxTQUFTLENBQUMsV0FBVyxDQUFDLHFEQUFxRCxXQUFXLENBQUMsK0RBQStELFVBQVUsQ0FBQyxVQUFVLENBQUMsd0VBQXdFLFVBQVUsQ0FBQyxrRkFBa0YsU0FBUyxDQUFDLFdBQVcsQ0FBQyx1RUFBdUUsV0FBVyxDQUFDLGlGQUFpRixVQUFVLENBQUMsVUFBVSxDQUFDLG9DQUFvQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9EQUFvRCxTQUFTLENBQUMsb0RBQW9ELFlBQVksQ0FBQyxxREFBcUQsVUFBVSxDQUFDLCtEQUErRCxTQUFTLENBQUMsV0FBVyxDQUFDLG9EQUFvRCxXQUFXLENBQUMsOERBQThELFVBQVUsQ0FBQyxVQUFVLENBQUMsdUVBQXVFLFVBQVUsQ0FBQyxpRkFBaUYsU0FBUyxDQUFDLFdBQVcsQ0FBQyxzRUFBc0UsV0FBVyxDQUFDLGdGQUFnRixVQUFVLENBQUMsVUFBVSxDQUFDLDRCQUE0QiwwSEFBMEgsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsaURBQWlELGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxxRkFBcUYsYUFBYSxDQUFDLGtGQUFrRixhQUFhLENBQUMsNEVBQTRFLGFBQWEsQ0FBQywwYkFBMGIscUJBQXFCLENBQUMsbUtBQW1LLHdCQUF3QixDQUFDLGdLQUFnSyx3QkFBd0IsQ0FBQywwSkFBMEosd0JBQXdCLENBQUMsNkpBQTZKLDRCQUE0QixDQUFDLDZHQUE2RyxVQUFVLENBQUMsNkJBQTZCLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyxvQ0FBb0MsNEJBQTRCLENBQUMsMkRBQTJELHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLDJHQUEyRyxVQUFVLENBQUMsdUdBQXVHLFVBQVUsQ0FBQywrRkFBK0YsVUFBVSxDQUFDLG9qQkFBb2pCLHFCQUFxQixDQUFDLDJHQUEyRyx3QkFBd0IsQ0FBQyx1R0FBdUcsd0JBQXdCLENBQUMsK0ZBQStGLHdCQUF3QixDQUFDLG9qQkFBb2pCLGdDQUFnQyxDQUFDLDJMQUEyTCxxQ0FBcUMsQ0FBQyx1TEFBdUwscUNBQXFDLENBQUMsK0tBQStLLHFDQUFxQyxDQUFDLGlHQUFpRyxxSEFBcUgsQ0FBQyxpREFBaUQsc0hBQXNILENBQUMsd0VBQXdFLHdIQUF3SCxDQUFDLDJEQUEyRCxxSEFBcUgsQ0FBQyxtRkFBbUYsd0hBQXdILENBQUMsaUlBQWlJLHlIQUF5SCxDQUFDLHVHQUF1RyxxSEFBcUgsQ0FBQyx1REFBdUQsc0hBQXNILENBQUMsaUhBQWlILGVBQWUsQ0FBQyxtQkFBbUIscUJBQXFCLENBQUMsb0RBQW9ELGdDQUFnQyxDQUFDLHVDQUF1QyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsd0VBQXdFLHFCQUFxQixDQUFDLG1GQUFtRixxQ0FBcUMsQ0FBQyw2RkFBNkYsZ0JBQWdCLENBQUMsc0NBQXNDLENBQUMsOEdBQThHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLG9DQUFvQyxDQUFDLDJCQUEyQix3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxpRUFBaUUscUJBQXFCLENBQUMsNEJBQTRCLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLGtFQUFrRSxlQUFlLENBQUMsc0RBQXNELHdCQUF3QixDQUFDLGlIQUFpSCxnQ0FBZ0MsQ0FBQyxVQUFVLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyx3Q0FBd0Msc0hBQXNILENBQUMsc0RBQXNELHFIQUFxSCxDQUFDLG1CQUFtQixxQkFBcUIsQ0FBQyxvQkFBb0IsNEJBQTRCLENBQUMsd0JBQXdCLFlBQVksQ0FBQyw2QkFBNkIseUJBQXlCLENBQUMsd0JBQXdCLHdCQUF3QixDQUFDLDRIQUE0SCx3QkFBd0IsQ0FBQywwSEFBMEgsd0JBQXdCLENBQUMsc0hBQXNILHdCQUF3QixDQUFDLGdKQUFnSix3QkFBd0IsQ0FBQyxzRUFBc0Usb0JBQW9CLENBQUMsMkNBQTJDLHFCQUFxQixDQUFDLGtDQUFrQyxxQkFBcUIsQ0FBQyxtS0FBbUssa0JBQWtCLENBQUMsaUtBQWlLLGtCQUFrQixDQUFDLDZKQUE2SixrQkFBa0IsQ0FBQyw0QkFBNEIsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsNkNBQTZDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQywyREFBMkQsc0hBQXNILENBQUMsMkVBQTJFLFdBQVcsQ0FBQyw4Q0FBOEMsVUFBVSxDQUFDLG1DQUFtQyxlQUFlLENBQUMsMERBQTBELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywyRUFBMkUsVUFBVSxDQUFDLFVBQVUsQ0FBQyw4RUFBOEUscUNBQXFDLENBQUMsdURBQXVELHdCQUF3QixDQUFDLFVBQVUsQ0FBQyx3RUFBd0UsVUFBVSxDQUFDLFVBQVUsQ0FBQywyRUFBMkUscUNBQXFDLENBQUMseURBQXlELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywwRUFBMEUsVUFBVSxDQUFDLFVBQVUsQ0FBQyw2RUFBNkUscUNBQXFDLENBQUMsV0FBVyxlQUFlLENBQUMsdUpBQXVKLGtCQUFrQixDQUFDLHdGQUF3RixtQ0FBbUMsQ0FBQyxpQkFBaUIscUJBQXFCLENBQUMsMkJBQTJCLHFCQUFxQixDQUFDLG9CQUFvQixnQ0FBZ0MsQ0FBQywrSEFBK0gscUJBQXFCLENBQUMsMkJBQTJCLHFCQUFxQixDQUFDLDBDQUEwQywwQkFBMEIsQ0FBQyx5QkFBeUIscUJBQXFCLENBQUMsZ0NBQWdDLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLDZGQUE2RixxQkFBcUIsQ0FBQyxpV0FBaVcsZ0NBQWdDLENBQUMsMERBQTBELDRCQUE0QixDQUFDLHNGQUFzRiw0QkFBNEIsQ0FBQyw0QkFBNEIsd0JBQXdCLENBQUMsVUFBVSxDQUFDLHdEQUF3RCxtQ0FBbUMsQ0FBQyxvREFBb0QsK0JBQStCLENBQUMsd0JBQXdCLHVIQUF1SCxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLCtEQUErRCx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsMkZBQTJGLG9DQUFvQyxDQUFDLHVGQUF1RiwrQkFBK0IsQ0FBQyw2REFBNkQsd0JBQXdCLENBQUMsVUFBVSxDQUFDLHlGQUF5RixtQ0FBbUMsQ0FBQyxxRkFBcUYsK0JBQStCLENBQUMsOEJBQThCLHFIQUFxSCxDQUFDLDhCQUE4QixhQUFhLENBQUMseUNBQXlDLGFBQWEsQ0FBQyx1Q0FBdUMsYUFBYSxDQUFDLHNCQUFzQiwySEFBMkgsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsYUFBYSxnQ0FBZ0MsQ0FBQyxzQkFBc0Isa0NBQWtDLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxtREFBbUQsc0hBQXNILENBQUMsZ0JBQWdCLGdDQUFnQyxDQUFDLG1TQUFtUywwQkFBMEIsQ0FBQyxvQkFBb0Isb0dBQW9HLGVBQWUsQ0FBQyxDQUFDLGtDQUFrQyxxQkFBcUIsQ0FBQyx3RUFBd0UscUJBQXFCLENBQUMsZ0RBQWdELHFCQUFxQixDQUFDLDBLQUEwSyxhQUFhLENBQUMsc0JBQXNCLG9CQUFvQixDQUFDLFVBQVUsb0JBQW9CLENBQUMsa0RBQWtELGFBQWEsQ0FBQyw2REFBNkQsYUFBYSxDQUFDLDJEQUEyRCxhQUFhLENBQUMsNkNBQTZDLGFBQWEsQ0FBQyx1QkFBdUIsZ0NBQWdDLENBQUMsbURBQW1ELHdCQUF3QixDQUFDLDhEQUE4RCx3QkFBd0IsQ0FBQyw0REFBNEQsd0JBQXdCLENBQUMsNkdBQTZHLGFBQWEsQ0FBQyx3SEFBd0gsYUFBYSxDQUFDLHNIQUFzSCxhQUFhLENBQUMsNkRBQTZELGFBQWEsQ0FBQyxxS0FBcUssYUFBYSxDQUFDLHVJQUF1SSx3QkFBd0IsQ0FBQyxXQUFXLGFBQWEsQ0FBQyx3REFBd0QscUJBQXFCLENBQUMsNENBQTRDLHFCQUFxQixDQUFDLDREQUE0RCxnQ0FBZ0MsQ0FBQyxvRkFBb0YsMkdBQTJHLENBQUMsd0JBQXdCLENBQUMsMEJBQTBCLENBQUMsOERBQThELGdDQUFnQyxDQUFDLHNGQUFzRiwyR0FBMkcsQ0FBQyx3QkFBd0IsQ0FBQywwQkFBMEIsQ0FBQyxxREFBcUQsZ0NBQWdDLENBQUMsNkVBQTZFLGdDQUFnQyxDQUFDLGtFQUFrRSxnQ0FBZ0MsQ0FBQyw4RUFBOEUscUJBQXFCLENBQUMsMEZBQTBGLDRCQUE0QixDQUFDLDJEQUEyRCxxQkFBcUIsQ0FBQyxpRUFBaUUscUJBQXFCLENBQUMsNkVBQTZFLGFBQWEsQ0FBQyx3RkFBd0YsYUFBYSxDQUFDLHNGQUFzRixhQUFhLENBQUMsK0dBQStHLGFBQWEsQ0FBQyxpRkFBaUYscUJBQXFCLENBQUMsbUZBQW1GLHFCQUFxQixDQUFDLHNCQUFzQixhQUFhLENBQUMscUJBQXFCLGFBQWEsQ0FBQyxtQkFBbUIsYUFBYSxDQUFDLG9FQUFvRSxxQkFBcUIsQ0FBQyx3SEFBd0gscUJBQXFCLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFDQUFnQyxxQkFBcUIsQ0FBckQsZ0NBQWdDLHFCQUFxQixDQUFDLHFDQUFxQyxxQkFBcUIsQ0FBQyw4Q0FBOEMscUJBQXFCLENBQUMseUNBQXlDLHFCQUFxQixDQUFDLCtCQUErQixtQkFBbUIsQ0FBQyx3RUFBd0UsbUJBQW1CLENBQUMsMkZBQTJGLGFBQWEsQ0FBQyw4QkFBOEIscUJBQXFCLENBQUMsZ0NBQWdDLHFCQUFxQixDQUFDLDhCQUE4QixxQkFBcUIsQ0FBQyx3QkFBd0IscUJBQXFCLENBQUMsZ01BQWdNLDBCQUEwQixDQUFDLCtHQUErRywwQkFBMEIsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLDhDQUE4Qyx1SEFBdUgsQ0FBQyxlQUFlLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDLHlEQUF5RCxxQkFBcUIsQ0FBQyx3RUFBd0UscUJBQXFCLENBQUMsdUxBQXVMLDBCQUEwQixDQUFDLGVBQWUsZUFBZSxDQUFDLDREQUE0RCxxQkFBcUIsQ0FBQyxrREFBa0Qsb0NBQW9DLENBQUMsc0NBQXNDLENBQUMseUNBQXlDLG9DQUFvQyxDQUFDLHVNQUF1TSw0QkFBNEIsQ0FBQyw2QkFBNkIsWUFBWSxDQUFDLHlCQUF5Qix3QkFBd0IsQ0FBQyw4QkFBOEIsd0JBQXdCLENBQUMsMERBQTBELFlBQVksQ0FBQyxzREFBc0Qsd0JBQXdCLENBQUMsMkRBQTJELHdCQUF3QixDQUFDLHdEQUF3RCxZQUFZLENBQUMsb0RBQW9ELHdCQUF3QixDQUFDLHlEQUF5RCx3QkFBd0IsQ0FBQyxpREFBaUQsY0FBYyxDQUFDLHVFQUF1RSxjQUFjLENBQUMsbUVBQW1FLGNBQWMsQ0FBQyx3QkFBd0IsNEJBQTRCLENBQUMsd0VBQXdFLG9CQUFvQixDQUFDLDJTQUEyUyx3QkFBd0IsQ0FBQyx1RUFBdUUsb0JBQW9CLENBQUMsdVNBQXVTLHdCQUF3QixDQUFDLHFFQUFxRSxvQkFBb0IsQ0FBQywrUkFBK1Isd0JBQXdCLENBQUMsNElBQTRJLDRCQUE0QixDQUFDLHdJQUF3SSxnQ0FBZ0MsQ0FBQyw4REFBOEQscUJBQXFCLENBQUMsc0NBQXNDLHFCQUFxQixDQUFDLGtCQUFrQixxQkFBcUIsQ0FBQyx3QkFBd0IscUJBQXFCLENBQUMsdUNBQXVDLHFCQUFxQixDQUFDLGtCQUFrQixxQkFBcUIsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGdEQUFnRCx1SEFBdUgsQ0FBQyxxRUFBcUUsMEJBQTBCLENBQUMsMERBQTBELGFBQWEsQ0FBQyx5REFBeUQsYUFBYSxDQUFDLHVEQUF1RCxhQUFhLENBQUMsaUVBQWlFLGFBQWEsQ0FBQyxrRUFBa0UscUJBQXFCLENBQUMsc0JBQXNCLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLFlBQVkscUJBQXFCLENBQUMscUJBQXFCLENBQUMsNEJBQTRCLHFCQUFxQixDQUFDLGtDQUFrQywwSEFBMEgsQ0FBQyxpQkFBaUIsc0NBQXNDLENBQUMsZ0NBQWdDLHFDQUFxQyxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixxQ0FBcUMsQ0FBQyxpQkFBaUIsQ0FBQywwQ0FBMEMsZ0JBQWdCLENBQUMsc0NBQXNDLENBQUMsc0NBQXNDLCtCQUErQixDQUFDLHNEQUFzRCx3QkFBd0IsQ0FBQyxvREFBb0QscUNBQXFDLENBQUMsa0RBQWtELHdCQUF3QixDQUFDLGtFQUFrRSx3QkFBd0IsQ0FBQyxnRUFBZ0Usb0NBQW9DLENBQUMsOERBQThELHdCQUF3QixDQUFDLCtEQUErRCx3QkFBd0IsQ0FBQyw2REFBNkQsb0NBQW9DLENBQUMsMkRBQTJELHdCQUF3QixDQUFDLHdEQUF3RCxxQkFBcUIsQ0FBQyx3QkFBd0Isc0hBQXNILENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLGdDQUFnQyxDQUFDLDZCQUE2QixnQ0FBZ0MsQ0FBQyx3R0FBd0csd0JBQXdCLENBQUMsMENBQTBDLFVBQVUsQ0FBQyxxR0FBcUcsd0JBQXdCLENBQUMseUNBQXlDLFVBQVUsQ0FBQywrRkFBK0Ysd0JBQXdCLENBQUMsdUNBQXVDLFVBQVUsQ0FBQyx1QkFBdUIsb0NBQW9DLENBQUMseUZBQXlGLGdDQUFnQyxDQUFDLHFJQUFxSSxnQ0FBZ0MsQ0FBQyx3REFBd0QsZ0NBQWdDLENBQUMsNkNBQTZDLGdDQUFnQyxDQUFDLG9KQUFvSixnQ0FBZ0MsQ0FBQyw0S0FBNEssZ0NBQWdDLENBQUMsNkVBQTZFLDRCQUE0QixDQUFDLDRCQUE0QixDQUFDLDRLQUE0Syw0QkFBNEIsQ0FBQyxvTkFBb04sNEJBQTRCLENBQUMsaURBQWlELDJCQUEyQixDQUFDLHlDQUF5Qyw0SEFBNEgsQ0FBQyxrSUFBa0ksQ0FBQyx1Q0FBdUMsNkhBQTZILENBQUMsa0dBQWtHLGdDQUFnQyxDQUFDLG9CQUFvQix1QkFBdUIsZUFBZSxDQUFDLENBQUMscUVBQXFFLHFCQUFxQixDQUFDLGdDQUFnQyxnQ0FBZ0MsQ0FBQyxVQUFVLENBQUMsK0hBQStILHdCQUF3QixDQUFDLFVBQVUsQ0FBQyw0Q0FBNEMsNEJBQTRCLENBQUMsYUFBYSxDQUFDLHVEQUF1RCxxQkFBcUIsQ0FBQyxzREFBc0QsYUFBYSxDQUFDLDhDQUE4QyxxQkFBcUIsQ0FBQyxtQ0FBbUMsaUNBQWlDLENBQUMsMEdBQTBHLGdDQUFnQyxDQUFDLHVCQUF1QixhQUFhLENBQUMsaUNBQWlDLHVDQUF1QyxDQUFDLCtGQUErRixvQ0FBb0MsQ0FBQyxrQkFBa0IsQ0FBQyw2QkFBNkIscUJBQXFCLENBQUMsK0RBQStELHFCQUFxQixDQUFDLG1DQUFtQyw0QkFBNEIsQ0FBQyx1RUFBdUUsNEJBQTRCLENBQUMsZ0dBQWdHLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxnckJBQWdyQixxQ0FBcUMsQ0FBQyxrRkFBa0Ysd0JBQXdCLENBQUMsZ0lBQWdJLHFCQUFxQixDQUFDLHdxQkFBd3FCLHFDQUFxQyxDQUFDLGdGQUFnRix3QkFBd0IsQ0FBQyw0SEFBNEgscUJBQXFCLENBQUMsd3BCQUF3cEIscUNBQXFDLENBQUMsNEVBQTRFLHdCQUF3QixDQUFDLG9IQUFvSCxxQkFBcUIsQ0FBQyx3d0JBQXd3QixxQ0FBcUMsQ0FBQyw4VkFBOFYsd0JBQXdCLENBQUMsc05BQXNOLFVBQVUsQ0FBQywwUkFBMFIsMEJBQTBCLENBQUMsb0pBQW9KLGlCQUFpQixDQUFDLDROQUE0TixpQ0FBaUMsQ0FBQyxzSEFBc0gsc0NBQXNDLENBQUMsZ3dCQUFnd0IscUNBQXFDLENBQUMsd1ZBQXdWLHdCQUF3QixDQUFDLGtOQUFrTixVQUFVLENBQUMsc1JBQXNSLDBCQUEwQixDQUFDLGtKQUFrSixpQkFBaUIsQ0FBQywwTkFBME4saUNBQWlDLENBQUMsb0hBQW9ILHNDQUFzQyxDQUFDLGd2QkFBZ3ZCLHFDQUFxQyxDQUFDLDRVQUE0VSx3QkFBd0IsQ0FBQywwTUFBME0sVUFBVSxDQUFDLDhRQUE4USwwQkFBMEIsQ0FBQyw4SUFBOEksaUJBQWlCLENBQUMsc05BQXNOLGlDQUFpQyxDQUFDLGdIQUFnSCxzQ0FBc0MsQ0FBQyxhQUFhLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxzQkFBc0Isa0JBQWtCLENBQUMsVUFBVSxDQUFDLDRIQUE0SCw2QkFBNkIsQ0FBQyw0TUFBNE0sYUFBYSxDQUFDLGdDQUFnQyx3QkFBd0IsQ0FBQyxhQUFhLDRCQUE0QixDQUFDLFVBQVUsZUFBZSxDQUFDLHFDQUFxQyxxQkFBcUIsQ0FBQyx5QkFBeUIsMEJBQTBCLENBQUMsa0JBQWtCLENBQUMsd0hBQXdILENBQUMsNEJBQTRCLGFBQWEsQ0RFN3AvRDs7RUFFRSxZQUFZO0VBQ1osU0FBUztFQUNULGlEQUFpRDtBQUNuRCxDQUNBO0VBQ0UsWUFBWTtBQUNkLENBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLDREQUE0RDtBQUM5RCxDQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrcENBQWtwQztFQUNscEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsMEJBQTBCO0FBQzVCLENBQ0E7RUFDRSxZQUFZO0FBQ2QsQ0FDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckIsQ0FDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2IsQ0FDQTtFQUNFLFVBQVU7QUFDWixDQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCLENBQ0E7RUFDRSx5REFBeUQ7QUFDM0QsQ0FDQTtFQUNFLDZCQUE2QjtBQUMvQixDQUNBO0VBQ0UseUJBQXlCO0FBQzNCLENBRUE7RUFDRTtJQUNFLHNDQUFzQztFQUN4QztBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbnRhaW5lcnMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2luZGlnby1waW5rLmNzc1wiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIpO1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5tYXQtZHJhd2VyLFxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xufVxubWF0LWRyYXdlciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjYTVmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyB2aWV3Qm94PScwIDAgMTYwMCA4MDAnJTNFJTNDZyBzdHJva2U9JyUyMzczYWRmZicgc3Ryb2tlLXdpZHRoPScxMDAnIHN0cm9rZS1vcGFjaXR5PScwJyAlM0UlM0NjaXJjbGUgZmlsbD0nJTIzOGNhNWZmJyBjeD0nMCcgY3k9JzAnIHI9JzE4MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjM4NTljZjInIGN4PScwJyBjeT0nMCcgcj0nMTcwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzdlOTNlNScgY3g9JzAnIGN5PScwJyByPScxNjAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzNzY4YWQ4JyBjeD0nMCcgY3k9JzAnIHI9JzE1MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjM2ZjgxY2InIGN4PScwJyBjeT0nMCcgcj0nMTQwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzY4NzliZicgY3g9JzAnIGN5PScwJyByPScxMzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjE3MGIyJyBjeD0nMCcgY3k9JzAnIHI9JzEyMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjM1YTY3YTUnIGN4PScwJyBjeT0nMCcgcj0nMTEwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzUzNWU5OCcgY3g9JzAnIGN5PScwJyByPScxMDAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzNGI1NThiJyBjeD0nMCcgY3k9JzAnIHI9JzkwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzQ0NGM3ZScgY3g9JzAnIGN5PScwJyByPSc4MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMzZDQzNzEnIGN4PScwJyBjeT0nMCcgcj0nNzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMzYzYTY0JyBjeD0nMCcgY3k9JzAnIHI9JzYwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzJmMzI1OCcgY3g9JzAnIGN5PScwJyByPSc1MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMyODI5NGInIGN4PScwJyBjeT0nMCcgcj0nNDAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMjAyMDNlJyBjeD0nMCcgY3k9JzAnIHI9JzMwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzE5MTczMScgY3g9JzAnIGN5PScwJyByPScyMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMxMjBlMjQnIGN4PScwJyBjeT0nMCcgcj0nMTAwJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG59XG5tYXQtZHJhd2VyLnNpZGVuYXYtY29sbGFwc2VkIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxubWF0LWRyYXdlciAuc2lkZW5hdi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWF0LWRyYXdlciAuc2lkZW5hdi1oZWFkZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cbm1hdC1kcmF3ZXIgdWwge1xuICBwYWRkaW5nOiAwO1xufVxubWF0LWRyYXdlciB1bCBsaSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgbWFyZ2luLWxlZnQsIG1hcmdpbi1yaWdodDtcbn1cbm1hdC1kcmF3ZXItY29udGVudC5zaWRlbmF2LWNvbGxhcHNlZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBtYXQtdG9vbGJhciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIi5tYXQtYmFkZ2UtY29udGVudHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjlweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6MjRweH0ubWF0LWgxLC5tYXQtaGVhZGxpbmUsLm1hdC10eXBvZ3JhcGh5IGgxe2ZvbnQ6NDAwIDI0cHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDIsLm1hdC10aXRsZSwubWF0LXR5cG9ncmFwaHkgaDJ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMywubWF0LXN1YmhlYWRpbmctMiwubWF0LXR5cG9ncmFwaHkgaDN7Zm9udDo0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNCwubWF0LXN1YmhlYWRpbmctMSwubWF0LXR5cG9ncmFwaHkgaDR7Zm9udDo0MDAgMTVweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNSwubWF0LXR5cG9ncmFwaHkgaDV7Zm9udDo0MDAgY2FsYygxNHB4ICogMC44MykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1oNiwubWF0LXR5cG9ncmFwaHkgaDZ7Zm9udDo0MDAgY2FsYygxNHB4ICogMC42NykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1ib2R5LXN0cm9uZywubWF0LWJvZHktMntmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtYm9keSwubWF0LWJvZHktMSwubWF0LXR5cG9ncmFwaHl7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJvZHkgcCwubWF0LWJvZHktMSBwLC5tYXQtdHlwb2dyYXBoeSBwe21hcmdpbjowIDAgMTJweH0ubWF0LXNtYWxsLC5tYXQtY2FwdGlvbntmb250OjQwMCAxMnB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZGlzcGxheS00LC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktNHtmb250OjMwMCAxMTJweC8xMTJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotMC4wNWVtO21hcmdpbjowIDAgNTZweH0ubWF0LWRpc3BsYXktMywubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTN7Zm9udDo0MDAgNTZweC81NnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0wLjAyZW07bWFyZ2luOjAgMCA2NHB4fS5tYXQtZGlzcGxheS0yLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMntmb250OjQwMCA0NXB4LzQ4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LTAuMDA1ZW07bWFyZ2luOjAgMCA2NHB4fS5tYXQtZGlzcGxheS0xLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtmb250OjQwMCAzNHB4LzQwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgNjRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJ1dHRvbiwubWF0LXJhaXNlZC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9uLC5tYXQtZmxhdC1idXR0b24sLm1hdC1mYWIsLm1hdC1taW5pLWZhYntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1idXR0b24tdG9nZ2xle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2FyZHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjI0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyMHB4fS5tYXQtY2FyZC1zdWJ0aXRsZSwubWF0LWNhcmQtY29udGVudHtmb250LXNpemU6MTRweH0ubWF0LWNoZWNrYm94e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWx7bGluZS1oZWlnaHQ6MjRweH0ubWF0LWNoaXB7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2hpcCAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbiwubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbntmb250LXNpemU6MThweH0ubWF0LXRhYmxle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtaGVhZGVyLWNlbGx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2FsZW5kYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZToxM3B4fS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCwubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b257Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoe2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWRpYWxvZy10aXRsZXtmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo0MDB9Lm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudHtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS4xMjU7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbntmb250LXNpemU6MTUwJTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9ue2hlaWdodDoxLjVlbTt3aWR0aDoxLjVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb257aGVpZ2h0OjEuMTI1ZW07bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjVlbSAwO2JvcmRlci10b3A6Ljg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc1ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzMzMzMzMzJX0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye3RvcDotMC44NDM3NWVtO3BhZGRpbmctdG9wOi44NDM3NWVtfS5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7Zm9udC1zaXplOjc1JTttYXJnaW4tdG9wOi42NjY2NjY2NjY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNzkxNjY2NjY2N2VtKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNDM3NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxMDJweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIzZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzNTMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjI4MTI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye21hcmdpbi10b3A6LjU0MTY2NjY2NjdlbTt0b3A6Y2FsYygxMDAlIC0gMS42NjY2NjY2NjY3ZW0pfUBtZWRpYSBwcmludHsubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoMC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyMWVtKSBzY2FsZSgwLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMmVtKSBzY2FsZSgwLjc1KX19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouMjVlbSAwIC43NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMDkzNzVlbTttYXJnaW4tdG9wOi0wLjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41OTM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41OTM3NGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzoxZW0gMCAxZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS44NDM3NWVtO21hcmdpbi10b3A6LTAuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1ncmlkLXRpbGUtaGVhZGVyLC5tYXQtZ3JpZC10aWxlLWZvb3Rlcntmb250LXNpemU6MTRweH0ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lLC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH1pbnB1dC5tYXQtaW5wdXQtZWxlbWVudHttYXJnaW4tdG9wOi0wLjA2MjVlbX0ubWF0LW1lbnUtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1wYWdpbmF0b3IsLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHh9Lm1hdC1yYWRpby1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3R7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3QtdHJpZ2dlcntoZWlnaHQ6MS4xMjVlbX0ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtc3RlcHBlci12ZXJ0aWNhbCwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXN0ZXAtbGFiZWx7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3J7Zm9udC13ZWlnaHQ6bm9ybWFsfS5tYXQtc3RlcC1sYWJlbC1lcnJvcntmb250LXNpemU6MTRweH0ubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWR7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdGFiLWdyb3Vwe2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdG9vbGJhciwubWF0LXRvb2xiYXIgaDEsLm1hdC10b29sYmFyIGgyLC5tYXQtdG9vbGJhciBoMywubWF0LXRvb2xiYXIgaDQsLm1hdC10b29sYmFyIGg1LC5tYXQtdG9vbGJhciBoNntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowfS5tYXQtdG9vbHRpcHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206NnB4fS5tYXQtdG9vbHRpcC1oYW5kc2V0e2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHh9Lm1hdC1saXN0LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1saXN0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweH0ubWF0LW9wdGdyb3VwLWxhYmVse2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1zaW1wbGUtc25hY2tiYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2xpbmUtaGVpZ2h0OjE7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo1MDB9Lm1hdC10cmVle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtdHJlZS1ub2RlLC5tYXQtbmVzdGVkLXRyZWUtbm9kZXtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjE0cHh9Lm1hdC1yaXBwbGV7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtcmlwcGxlOm5vdCg6ZW1wdHkpe3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVke292ZXJmbG93OnZpc2libGV9Lm1hdC1yaXBwbGUtZWxlbWVudHtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSx0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO3RyYW5zZm9ybTpzY2FsZSgwKX0uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnR7ZGlzcGxheTpub25lfS5jZGstdmlzdWFsbHktaGlkZGVue2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O291dGxpbmU6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX0uY2RrLW92ZXJsYXktY29udGFpbmVyLC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO29wYWNpdHk6MH0uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjF9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpey5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMzIpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnR7LyohKi99QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR7LyohKi99LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxse2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXN9LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpe2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZXtyZXNpemU6bm9uZX10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5ne3BhZGRpbmc6MnB4IDAgIWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG8gIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudH10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3h7cGFkZGluZzoycHggMCAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ggIWltcG9ydGFudDtoZWlnaHQ6MCAhaW1wb3J0YW50fS5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb246aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSwubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LWFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiMzZjUxYjV9Lm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2ZmNDA4MX0ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2Y0NDMzNn0ubWF0LW9wdGdyb3VwLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHNldWRvLWNoZWNrYm94e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBzZXVkby1jaGVja2JveDo6YWZ0ZXJ7Y29sb3I6I2ZhZmFmYX0ubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtjb2xvcjojYjBiMGIwfS5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6IzNmNTFiNX0ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2ZmNDA4MX0ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNiMGIwYjB9Lm1hdC1lbGV2YXRpb24tejB7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxe2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejJ7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16M3tib3gtc2hhZG93OjBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo0e2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo1e2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo2e2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16N3tib3gtc2hhZG93OjBweCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMnB4IDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejh7Ym94LXNoYWRvdzowcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo5e2JveC1zaGFkb3c6MHB4IDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTB7Ym94LXNoYWRvdzowcHggNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA0cHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTF7Ym94LXNoYWRvdzowcHggNnB4IDdweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA0cHggMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTJ7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTN7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTR7Ym94LXNoYWRvdzowcHggN3B4IDlweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjZweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTV7Ym94LXNoYWRvdzowcHggOHB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMjhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTZ7Ym94LXNoYWRvdzowcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE3e2JveC1zaGFkb3c6MHB4IDhweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxOHtib3gtc2hhZG93OjBweCA5cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA3cHggMzRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTl7Ym94LXNoYWRvdzowcHggOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggN3B4IDM2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIwe2JveC1zaGFkb3c6MHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjF7Ym94LXNoYWRvdzowcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDhweCA0MHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyMntib3gtc2hhZG93OjBweCAxMHB4IDE0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOHB4IDQycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIze2JveC1zaGFkb3c6MHB4IDExcHggMTRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA5cHggNDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjR7Ym94LXNoYWRvdzowcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYXBwLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXJ7ZGlzcGxheTpub25lfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcil7YmFja2dyb3VuZDojZmZmfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYmFkZ2UtY29udGVudHtjb2xvcjojZmZmO2JhY2tncm91bmQ6IzNmNTFiNX0uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9Lm1hdC1iYWRnZS1hY2NlbnQgLm1hdC1iYWRnZS1jb250ZW50e2JhY2tncm91bmQ6I2ZmNDA4MTtjb2xvcjojZmZmfS5tYXQtYmFkZ2Utd2FybiAubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1iYWRnZXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LWJhZGdlLWhpZGRlbiAubWF0LWJhZGdlLWNvbnRlbnR7ZGlzcGxheTpub25lfS5tYXQtYmFkZ2UtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50e2JhY2tncm91bmQ6I2I5YjliOTtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1iYWRnZS1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zaXRpb246dHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O3RyYW5zZm9ybTpzY2FsZSgwLjYpO292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztwb2ludGVyLWV2ZW50czpub25lfS5uZy1hbmltYXRlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCwubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGV7dHJhbnNpdGlvbjpub25lfS5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZle3RyYW5zZm9ybTpub25lfS5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bGluZS1oZWlnaHQ6MTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi04cHh9Lm1hdC1iYWRnZS1tZWRpdW0gLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjIycHg7aGVpZ2h0OjIycHg7bGluZS1oZWlnaHQ6MjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0yMnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTFweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xMXB4fS5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7bGluZS1oZWlnaHQ6MjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTI4cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTE0cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTE0cHh9Lm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVye2JveC1zaGFkb3c6MHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9ue2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnl7Y29sb3I6IzNmNTFiNX0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1pY29uLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtc3Ryb2tlZC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtvcGFjaXR5Oi4xO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZDojMDAwfS5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mbGF0LWJ1dHRvbiwubWF0LXJhaXNlZC1idXR0b24sLm1hdC1mYWIsLm1hdC1taW5pLWZhYntjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7Y29sb3I6I2ZmZn0ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1mYWIubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnR7Y29sb3I6I2ZmZn0ubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiwubWF0LWZhYi5tYXQtd2FybiwubWF0LW1pbmktZmFiLm1hdC13YXJue2NvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLm1hdC1mYWIubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtZmxhdC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWZhYjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsLm1hdC1idXR0b24tdG9nZ2xlLWdyb3Vwe2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3gtc2hhZG93Om5vbmV9Lm1hdC1idXR0b24tdG9nZ2xle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfVtkaXI9cnRsXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpub25lO2JvcmRlci10b3A6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNiZGJkYmR9Lm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3JkZXI6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhcmR7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWNhcmQubWF0LWNhcmQtZmxhdDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1jYXJkLXN1YnRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1jaGVja21hcmt7ZmlsbDojZmFmYWZhfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGh7c3Ryb2tlOiNmYWZhZmEgIWltcG9ydGFudH0ubWF0LWNoZWNrYm94LW1peGVkbWFya3tiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWNoZWNrZWQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2IwYjBiMH0ubWF0LWNoZWNrYm94LWRpc2FibGVkOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIC5tYXQtY2hlY2tib3gtZnJhbWV7Ym9yZGVyLWNvbG9yOiNiMGIwYjB9Lm1hdC1jaGVja2JveC1kaXNhYmxlZCAubWF0LWNoZWNrYm94LWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNoZWNrYm94IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiMzZjUxYjV9Lm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiNmZjQwODF9Lm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6I2Y0NDMzNn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXB7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCk6YWN0aXZle2JveC1zaGFkb3c6MHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXJ7b3BhY2l0eTouNTR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLWRpc2FibGVke29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOjphZnRlcntiYWNrZ3JvdW5kOiMwMDB9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC10YWJsZXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC10YWJsZSB0aGVhZCwubWF0LXRhYmxlIHRib2R5LC5tYXQtdGFibGUgdGZvb3QsbWF0LWhlYWRlci1yb3csbWF0LXJvdyxtYXQtZm9vdGVyLXJvdyxbbWF0LWhlYWRlci1yb3ddLFttYXQtcm93XSxbbWF0LWZvb3Rlci1yb3ddLC5tYXQtdGFibGUtc3RpY2t5e2JhY2tncm91bmQ6aW5oZXJpdH1tYXQtcm93LG1hdC1oZWFkZXItcm93LG1hdC1mb290ZXItcm93LHRoLm1hdC1oZWFkZXItY2VsbCx0ZC5tYXQtY2VsbCx0ZC5tYXQtZm9vdGVyLWNlbGx7Ym9yZGVyLWJvdHRvbS1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1oZWFkZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jZWxsLC5tYXQtZm9vdGVyLWNlbGx7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2FsZW5kYXItYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZSwubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9ue2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYWxlbmRhci1ib2R5LWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSwuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7Y29sb3I6I2ZmZn0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSg2Myw4MSwxODEsLjQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50e2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsNjQsMTI5LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZXtjb2xvcjojM2Y1MWI1fS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZGlhbG9nLWNvbnRhaW5lcntib3gtc2hhZG93OjBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRpdmlkZXJ7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1kaXZpZGVyLXZlcnRpY2Fse2JvcmRlci1yaWdodC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYWN0aW9uLXJvd3tib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX1AbWVkaWEoaG92ZXI6IG5vbmUpey5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9fS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9ue2NvbG9yOmluaGVyaXR9Lm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50e2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnQsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MikgMCUsIHJnYmEoMCwgMCwgMCwgMC40MikgMzMlLCB0cmFuc3BhcmVudCAwJSk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjAyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7Y29sb3I6cmdiYSgwLDAsMCwuMDYpfS5tYXQtaWNvbi5tYXQtcHJpbWFyeXtjb2xvcjojM2Y1MWI1fS5tYXQtaWNvbi5tYXQtYWNjZW50e2NvbG9yOiNmZjQwODF9Lm1hdC1pY29uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojM2Y1MWI1fS5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2ZmNDA4MX0ubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVte2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1saXN0LWl0ZW0tZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtbGlzdC1vcHRpb246aG92ZXIsLm1hdC1saXN0LW9wdGlvbjpmb2N1cywubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMsLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciwubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3Vze2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uLC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmhvdmVyLC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmZvY3Vze2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtbWVudS1wYW5lbHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1tZW51LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtbWVudS1pdGVte2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSwubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF06OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1tZW51LWl0ZW06aG92ZXI6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZDpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1wYWdpbmF0b3J7YmFja2dyb3VuZDojZmZmfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KTtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2M1Y2FlOX0ubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojYzVjYWU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmY4MGFifS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmODBhYn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLC5tYXQtc3Bpbm5lciBjaXJjbGV7c3Ryb2tlOiMzZjUxYjV9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZXtzdHJva2U6I2ZmNDA4MX0ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGV7c3Ryb2tlOiNmNDQzMzZ9Lm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6IzNmNTFiNX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZmY0MDgxfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudDphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1zZWxlY3QtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtc2VsZWN0LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWRyYXdlci1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRyYXdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItcHVzaHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpe2JveC1zaGFkb3c6MHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3due2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYzLDgxLDE4MSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYiwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYiwubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuMil9Lm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhKGhvdmVyOiBub25lKXsubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6bm9uZX19Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtb3B0aW9uYWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZXtib3JkZXItbGVmdC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlciwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5le2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtc29ydC1oZWFkZXItYXJyb3d7Y29sb3I6Izc1NzU3NX0ubWF0LXRhYi1uYXYtYmFyLC5tYXQtdGFiLWhlYWRlcntib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMil9Lm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLW5hdi1iYXIsLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLWhlYWRlcntib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLWJvdHRvbTpub25lfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWdyb3VwW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1dIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1de2JvcmRlci1ib3R0b206bm9uZTtib3JkZXItdG9wOm5vbmV9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgxOTcsMjAyLDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMTI4LDE3MSwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMDUsMjEwLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5NywyMDIsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9ue2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwxMjgsMTcxLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rcywubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9ue2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMDUsMjEwLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9ue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10b29sYmFye2JhY2tncm91bmQ6I2Y1ZjVmNTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10b29sYmFyLm1hdC1wcmltYXJ5e2JhY2tncm91bmQ6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtdG9vbGJhci5tYXQtYWNjZW50e2JhY2tncm91bmQ6I2ZmNDA4MTtjb2xvcjojZmZmfS5tYXQtdG9vbGJhci5tYXQtd2FybntiYWNrZ3JvdW5kOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtdmFsdWUsLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LWFycm93LC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6aW5oZXJpdH0ubWF0LXRvb2xiYXIgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2x0aXB7YmFja2dyb3VuZDpyZ2JhKDk3LDk3LDk3LC45KX0ubWF0LXRyZWV7YmFja2dyb3VuZDojZmZmfS5tYXQtdHJlZS1ub2RlLC5tYXQtbmVzdGVkLXRyZWUtbm9kZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbmFjay1iYXItY29udGFpbmVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpO2JhY2tncm91bmQ6IzMyMzIzMjtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2NvbG9yOiNmZjQwODF9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-template',
                templateUrl: './template.component.html',
                styleUrls: ['./template.component.css'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/containers/update-movie/update-movie.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/movies/containers/update-movie/update-movie.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UpdateMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMovieComponent", function() { return UpdateMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/features/movies/store/selectors/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ "./src/app/features/movies/store/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/features/movies/services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_form_movie_form_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form-movie/form-movie.component */ "./src/app/features/movies/components/form-movie/form-movie.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");









function UpdateMovieComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form-movie", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addMovie", function UpdateMovieComponent_ng_container_2_Template_app_form_movie_addMovie_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.onUpdateMovie($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionsCategories", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r35.optionsCategories$))("movie", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r35.movie$))("loadingAddMovie", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx_r35.loadingUpdateMovie$))("action", "update movie");
} }
function UpdateMovieComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UpdateMovieComponent {
    constructor(store, moviesService) {
        this.store = store;
        this.moviesService = moviesService;
        //this.moviesService.getCategoriesAndMoviesAfterRefreshPage();
    }
    ngOnInit() {
        this.movie$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getMovieById"]);
        this.loadingCategories$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsCategoriesLoading"]);
        this.loadingMovies$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingAllMovies"]);
        this.optionsCategories$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getAllCategories"]);
        this.loadingUpdateMovie$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingActionMovie"]);
    }
    onUpdateMovie(movie) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_MOVIE"]({ movie: movie }));
    }
}
UpdateMovieComponent.ɵfac = function UpdateMovieComponent_Factory(t) { return new (t || UpdateMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["MoviesService"])); };
UpdateMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateMovieComponent, selectors: [["app-update-movie"]], decls: 8, vars: 6, consts: [[1, "row"], [1, "col-md-offset-1"], [4, "ngIf", "ngIfElse"], ["loader", ""], [3, "optionsCategories", "movie", "loadingAddMovie", "action", "addMovie"], [1, "col-md-2", "col-centered"], ["color", "primary", "diameter", "80"]], template: function UpdateMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UpdateMovieComponent_ng_container_2_Template, 5, 10, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateMovieComponent_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.loadingCategories$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.loadingMovies$))("ngIfElse", _r36);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_form_movie_form_movie_component__WEBPACK_IMPORTED_MODULE_6__["FormMovieComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".col-centered[_ngcontent-%COMP%] {\n  float: none;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbW92aWVzL2NvbnRhaW5lcnMvdXBkYXRlLW1vdmllL3VwZGF0ZS1tb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9tb3ZpZXMvY29udGFpbmVycy91cGRhdGUtbW92aWUvdXBkYXRlLW1vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLWNlbnRlcmVkIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-update-movie",
                templateUrl: "./update-movie.component.html",
                styleUrls: ["./update-movie.component.css"],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/index.ts":
/*!******************************************!*\
  !*** ./src/app/features/movies/index.ts ***!
  \******************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movies_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies.module */ "./src/app/features/movies/movies.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return _movies_module__WEBPACK_IMPORTED_MODULE_0__["MoviesModule"]; });




/***/ }),

/***/ "./src/app/features/movies/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/movies/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! mat-progress-buttons */ "./node_modules/mat-progress-buttons/__ivy_ngcc__/esm2015/mat-progress-buttons.js");




















const MaterialModules = [
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
    mat_progress_buttons__WEBPACK_IMPORTED_MODULE_18__["MatProgressButtonsModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [MaterialModules,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        mat_progress_buttons__WEBPACK_IMPORTED_MODULE_18__["MatProgressButtonsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        mat_progress_buttons__WEBPACK_IMPORTED_MODULE_18__["MatProgressButtonsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"]], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        mat_progress_buttons__WEBPACK_IMPORTED_MODULE_18__["MatProgressButtonsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: MaterialModules,
                exports: MaterialModules,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/movies/mocks/fake-backend.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/movies/mocks/fake-backend.service.ts ***!
  \***************************************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// array in local storage for registered users
let categoriesStorage = JSON.parse(sessionStorage.getItem("categories")) || [];
let moviesStorage = JSON.parse(sessionStorage.getItem("movies")) || [];
let commentsStorage = JSON.parse(sessionStorage.getItem("comments")) || [];
class FakeBackendInterceptor {
    constructor() {
        let movies = [
            {
                id: 1,
                categoryId: 1,
                language: "Japanese",
                recordedYear: 2016,
                title: "君の名は",
                image: "https://www.flagsonline.fr/uploads/2016-6-6/420-272/japan.jpg",
                specialMention: {
                    firstName: "makoto",
                    lastName: "shinkai",
                },
                description: "説明：「映画、または映画は、動画や音声を使用して物語を語ったり、人々に何かを教えたりする一種の視覚的コミュニケーションです。ほとんどの人は、一種の娯楽または楽しみの方法として映画を見る（見る）」、",
                selected: false,
            },
            {
                id: 4,
                categoryId: 1,
                language: "Japanese",
                recordedYear: 2017,
                title: "打ち上げ花火",
                image: "https://www.flagsonline.fr/uploads/2016-6-6/420-272/japan.jpg",
                specialMention: {
                    firstName: "Nobuyuki",
                    lastName: "Takeuchi",
                },
                description: "説明：「映画、または映画は、動画や音声を使用して物語を語ったり、人々に何かを教えたりする一種の視覚的コミュニケーションです。ほとんどの人は、一種の娯楽または楽しみの方法として映画を見る（見る）」、",
                selected: false,
            },
            {
                id: 5,
                categoryId: 1,
                language: "Japanese",
                recordedYear: 2018,
                title: "あの花",
                image: "https://www.flagsonline.fr/uploads/2016-6-6/420-272/japan.jpg",
                specialMention: {
                    firstName: "Tatsuyuki",
                    lastName: "Nagai",
                },
                description: "説明：「映画、または映画は、動画や音声を使用して物語を語ったり、人々に何かを教えたりする一種の視覚的コミュニケーションです。ほとんどの人は、一種の娯楽または楽しみの方法として映画を見る（見る）」、",
                selected: false,
            },
            {
                id: 6,
                categoryId: 1,
                language: "Japanese",
                recordedYear: 2019,
                title: "エンジェルビーツ",
                image: "https://www.flagsonline.fr/uploads/2016-6-6/420-272/japan.jpg",
                specialMention: {
                    firstName: "Hiro",
                    lastName: "Maruyama",
                },
                description: "説明：「映画、または映画は、動画や音声を使用して物語を語ったり、人々に何かを教えたりする一種の視覚的コミュニケーションです。ほとんどの人は、一種の娯楽または楽しみの方法として映画を見る（見る）」、",
                selected: true,
            },
            {
                id: 2,
                categoryId: 2,
                language: "English",
                recordedYear: 2017,
                title: "Wayne's world",
                image: "https://i.ebayimg.com/images/g/LmIAAOSw3YNXYwX-/s-l300.jpg",
                specialMention: {
                    firstName: "Mike",
                    lastName: "Myers",
                },
                description: "Movies, or films, are a type of visual communication which uses moving pictures and sound to tell stories or teach people something. Most people watch (view) movies as a type of entertainment or a way to have fun",
                selected: false,
            },
            {
                id: 7,
                categoryId: 2,
                language: "English",
                recordedYear: 2019,
                title: "Beavis & Butt-head do America",
                image: "https://i.ebayimg.com/images/g/LmIAAOSw3YNXYwX-/s-l300.jpg",
                specialMention: {
                    firstName: "Mike",
                    lastName: "Judge",
                },
                description: "Movies, or films, are a type of visual communication which uses moving pictures and sound to tell stories or teach people something. Most people watch (view) movies as a type of entertainment or a way to have fun",
                selected: true,
            },
            {
                id: 8,
                categoryId: 2,
                language: "English",
                recordedYear: 2020,
                title: "Human traffic",
                image: "https://i.ebayimg.com/images/g/LmIAAOSw3YNXYwX-/s-l300.jpg",
                specialMention: {
                    firstName: "John",
                    lastName: "Simm",
                },
                description: "Movies, or films, are a type of visual communication which uses moving pictures and sound to tell stories or teach people something. Most people watch (view) movies as a type of entertainment or a way to have fun",
                selected: false,
            },
            {
                id: 9,
                categoryId: 2,
                language: "English",
                recordedYear: 2019,
                title: "Ted",
                image: "https://i.ebayimg.com/images/g/LmIAAOSw3YNXYwX-/s-l300.jpg",
                specialMention: {
                    firstName: "Seth",
                    lastName: "MacFarlane",
                },
                description: "Movies, or films, are a type of visual communication which uses moving pictures and sound to tell stories or teach people something. Most people watch (view) movies as a type of entertainment or a way to have fun",
                selected: false,
            },
            {
                id: 13,
                categoryId: 2,
                language: "English",
                recordedYear: 2016,
                title: "Harold & Kumar",
                image: "https://i.ebayimg.com/images/g/LmIAAOSw3YNXYwX-/s-l300.jpg",
                specialMention: {
                    firstName: "John",
                    lastName: "Cho",
                },
                description: "Movies, or films, are a type of visual communication which uses moving pictures and sound to tell stories or teach people something. Most people watch (view) movies as a type of entertainment or a way to have fun",
                selected: true,
            },
            {
                id: 10,
                categoryId: 2,
                language: "English",
                recordedYear: 2020,
                title: "The big lebowski",
                image: "https://i.ebayimg.com/images/g/LmIAAOSw3YNXYwX-/s-l300.jpg",
                specialMention: {
                    firstName: "Steve",
                    lastName: "Buscemi",
                },
                description: "Movies, or films, are a type of visual communication which uses moving pictures and sound to tell stories or teach people something. Most people watch (view) movies as a type of entertainment or a way to have fun",
                selected: false,
            },
            {
                id: 3,
                categoryId: 3,
                language: "English",
                recordedYear: 2018,
                title: "Whiplash",
                image: "https://i.ebayimg.com/images/g/LmIAAOSw3YNXYwX-/s-l300.jpg",
                specialMention: {
                    firstName: "J.K.",
                    lastName: "Simmons",
                },
                description: "Movies, or films, are a type of visual communication which uses moving pictures and sound to tell stories or teach people something. Most people watch (view) movies as a type of entertainment or a way to have fun",
                selected: false,
            },
            {
                id: 11,
                categoryId: 3,
                language: "English",
                recordedYear: 2019,
                title: "The Filth And The Fury",
                image: "https://i.ebayimg.com/images/g/LmIAAOSw3YNXYwX-/s-l300.jpg",
                specialMention: {
                    firstName: "John",
                    lastName: "Lydon",
                },
                description: "Movies, or films, are a type of visual communication which uses moving pictures and sound to tell stories or teach people something. Most people watch (view) movies as a type of entertainment or a way to have fun",
                selected: false,
            },
            {
                id: 12,
                categoryId: 3,
                language: "English",
                recordedYear: 2020,
                title: "The blues brothers",
                image: "https://i.ebayimg.com/images/g/LmIAAOSw3YNXYwX-/s-l300.jpg",
                specialMention: {
                    firstName: "Dan",
                    lastName: "Aykroyd",
                },
                description: "Movies, or films, are a type of visual communication which uses moving pictures and sound to tell stories or teach people something. Most people watch (view) movies as a type of entertainment or a way to have fun",
                selected: false,
            },
        ];
        let categories = [
            {
                id: 1,
                title: " Japanese anime",
                emoji: "👨‍👩‍👧‍👦",
                emojiStyle: "emoji-simple-swell",
            },
            {
                id: 2,
                title: "Crazy movies",
                emoji: "🐱‍🐉🐱‍🐉",
                emojiStyle: "emoji-swell",
            },
            {
                id: 3,
                title: "Music themed",
                emoji: "🎵🎵🎵🎵",
                emojiStyle: "emoji-rotate",
            },
            {
                id: 4,
                title: "Father’s Day",
                emoji: "👨👨👨👨",
                emojiStyle: "emoji-swell",
            },
        ];
        let comments = [{
                id: 1,
                idMovie: 2,
                text: "Jolie filme je le recommande"
            },
            {
                id: 2,
                idMovie: 2,
                text: "The best ..."
            },
            {
                id: 3,
                idMovie: 2,
                text: "Je le recommande"
            },
        ];
        sessionStorage.setItem("categories", JSON.stringify(categories));
        sessionStorage.setItem("movies", JSON.stringify(movies));
        sessionStorage.setItem("comments", JSON.stringify(comments));
    }
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith("/categories") && method === "GET":
                    return getCategories();
                case url.endsWith("/movies") && method === "GET":
                    return getMovies();
                case url.endsWith("/movie") && method === "POST":
                    return saveMovie();
                case url.match(/\/movie\/\d+$/) && method === "PUT":
                    return updateMovie();
                case url.match(/\/movie\/\d+$/) && method === "DELETE":
                    return deleteMovie();
                case url.match(/\/movie\/\d+$/) && method === "POST":
                    return addMovieToMyCollection();
                case url.match(/\/comments\/\d+$/) && method === "GET":
                    return getCommentsByIdMovie();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function getCategories() {
            return ok(categoriesStorage);
        }
        function getMovies() {
            console.log(moviesStorage);
            return ok(moviesStorage);
        }
        function getCommentsByIdMovie() {
            return ok(commentsStorage.reduce((data, comment) => {
                if (comment.idMovie === idFromUrl()) {
                    data.push(comment);
                }
                return data;
            }, []));
        }
        function saveMovie() {
            const movieSaved = {
                id: Math.floor(Math.random() * 1000),
                categoryId: body.categoryId,
                title: body.title,
                language: body.language,
                recordedYear: body.recordedYear,
                image: body.image,
                specialMention: {
                    lastName: body.specialMention.lastName,
                    firstName: body.specialMention.firstName,
                },
                description: body.description,
                selected: body.selected,
            };
            if (moviesStorage.find((movie) => movie.title === movieSaved.title)) {
                return error("movie  " + movieSaved.title + "  is already taken");
            }
            moviesStorage = [...moviesStorage];
            moviesStorage.push(movieSaved);
            sessionStorage.setItem("movies", JSON.stringify(moviesStorage));
            return ok(movieSaved);
        }
        function updateMovie() {
            const movieSaved = body;
            moviesStorage = moviesStorage.filter((movie) => movie.id !== idFromUrl());
            moviesStorage.push(movieSaved);
            sessionStorage.setItem("movies", JSON.stringify(moviesStorage));
            return ok("movie  " + movieSaved.title + "  successfully updated");
        }
        function addMovieToMyCollection() {
            let currentMovie = moviesStorage.find((movie) => movie.id == idFromUrl());
            moviesStorage = moviesStorage.filter((movie) => movie.id !== currentMovie.id);
            currentMovie = Object.assign({}, currentMovie);
            currentMovie.selected = !currentMovie.selected;
            moviesStorage.push(currentMovie);
            sessionStorage.setItem("movies", JSON.stringify(moviesStorage));
            if (currentMovie.selected == true) {
                return ok("movie  " + currentMovie.title + "  successfully added to collection");
            }
            else
                return ok("movie  " + currentMovie.title + "  successfully remove to collection");
        }
        function deleteMovie() {
            moviesStorage = moviesStorage.filter((movie) => movie.id !== idFromUrl());
            sessionStorage.setItem("movies", JSON.stringify(moviesStorage));
            return ok("movie successfully deleted");
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body }));
        }
        function serverError() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                status: 500,
                error: { message: "An error occured" },
            });
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message } });
        }
        function idFromUrl() {
            const urlParts = url.split("/");
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true,
};


/***/ }),

/***/ "./src/app/features/movies/mocks/index.ts":
/*!************************************************!*\
  !*** ./src/app/features/movies/mocks/index.ts ***!
  \************************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake-backend.service */ "./src/app/features/movies/mocks/fake-backend.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend_service__WEBPACK_IMPORTED_MODULE_0__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend_service__WEBPACK_IMPORTED_MODULE_0__["fakeBackendProvider"]; });




/***/ }),

/***/ "./src/app/features/movies/movies-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/movies/movies-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: MoviesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesRoutingModule", function() { return MoviesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _movies_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.routes */ "./src/app/features/movies/movies.routes.ts");





class MoviesRoutingModule {
}
MoviesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesRoutingModule });
MoviesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesRoutingModule_Factory(t) { return new (t || MoviesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_movies_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_movies_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/movies/movies.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/movies/movies.module.ts ***!
  \**************************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ "./src/app/features/movies/containers/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/features/movies/components/index.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/features/movies/material.module.ts");
/* harmony import */ var _movies_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies-routing.module */ "./src/app/features/movies/movies-routing.module.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./src/app/features/movies/services/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/reducers */ "./src/app/features/movies/store/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/effects */ "./src/app/features/movies/store/effects/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes */ "./src/app/features/movies/pipes/index.ts");
/* harmony import */ var _mocks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mocks */ "./src/app/features/movies/mocks/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");



















class MoviesModule {
}
MoviesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesModule });
MoviesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesModule_Factory(t) { return new (t || MoviesModule)(); }, providers: [_services__WEBPACK_IMPORTED_MODULE_6__["MoviesService"], _mocks__WEBPACK_IMPORTED_MODULE_12__["fakeBackendProvider"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _movies_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoviesRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            //SharedModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({}),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature("elements", _store_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot(),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature(_store_effects__WEBPACK_IMPORTED_MODULE_10__["effects"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesModule, { declarations: [_containers__WEBPACK_IMPORTED_MODULE_2__["TemplateComponent"],
        _containers__WEBPACK_IMPORTED_MODULE_2__["CategoriesListComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["CategoryPreviewComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
        _pipes__WEBPACK_IMPORTED_MODULE_11__["TitleCategoriesFilterPipe"],
        _containers__WEBPACK_IMPORTED_MODULE_2__["MoviesListComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["MoviePreviewComponent"],
        _pipes__WEBPACK_IMPORTED_MODULE_11__["TitleMoviesFilterPipe"],
        _containers__WEBPACK_IMPORTED_MODULE_2__["AddMovieComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["FormMovieComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["SelectTabObjectComponent"],
        _containers__WEBPACK_IMPORTED_MODULE_2__["UpdateMovieComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"],
        _containers__WEBPACK_IMPORTED_MODULE_2__["MoviesCollectionComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"],
        _containers__WEBPACK_IMPORTED_MODULE_2__["MovieDetailsContainerComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["AddCommentComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["PreviewCommentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _movies_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoviesRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _containers__WEBPACK_IMPORTED_MODULE_2__["TemplateComponent"],
                    _containers__WEBPACK_IMPORTED_MODULE_2__["CategoriesListComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["CategoryPreviewComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
                    _pipes__WEBPACK_IMPORTED_MODULE_11__["TitleCategoriesFilterPipe"],
                    _containers__WEBPACK_IMPORTED_MODULE_2__["MoviesListComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["MoviePreviewComponent"],
                    _pipes__WEBPACK_IMPORTED_MODULE_11__["TitleMoviesFilterPipe"],
                    _containers__WEBPACK_IMPORTED_MODULE_2__["AddMovieComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["FormMovieComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["SelectTabObjectComponent"],
                    _containers__WEBPACK_IMPORTED_MODULE_2__["UpdateMovieComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"],
                    _containers__WEBPACK_IMPORTED_MODULE_2__["MoviesCollectionComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"],
                    _containers__WEBPACK_IMPORTED_MODULE_2__["MovieDetailsContainerComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["AddCommentComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["PreviewCommentComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _movies_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoviesRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    //SharedModule,
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({}),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature("elements", _store_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot(),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature(_store_effects__WEBPACK_IMPORTED_MODULE_10__["effects"]),
                ],
                providers: [_services__WEBPACK_IMPORTED_MODULE_6__["MoviesService"], _mocks__WEBPACK_IMPORTED_MODULE_12__["fakeBackendProvider"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"]],
                entryComponents: [_components__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/movies/movies.routes.ts":
/*!**************************************************!*\
  !*** ./src/app/features/movies/movies.routes.ts ***!
  \**************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ "./src/app/features/movies/containers/index.ts");

const routes = [
    {
        path: "",
        component: _containers__WEBPACK_IMPORTED_MODULE_0__["TemplateComponent"],
        children: [
            {
                path: "",
                component: _containers__WEBPACK_IMPORTED_MODULE_0__["CategoriesListComponent"],
            },
            {
                path: "category/:categoryId",
                component: _containers__WEBPACK_IMPORTED_MODULE_0__["MoviesListComponent"],
            },
            {
                path: "add-movie",
                component: _containers__WEBPACK_IMPORTED_MODULE_0__["AddMovieComponent"],
            },
            {
                path: "movie/:movieId",
                component: _containers__WEBPACK_IMPORTED_MODULE_0__["UpdateMovieComponent"],
            },
            {
                path: "movie-details/:movieId",
                component: _containers__WEBPACK_IMPORTED_MODULE_0__["MovieDetailsContainerComponent"],
            },
            {
                path: "my-collection",
                component: _containers__WEBPACK_IMPORTED_MODULE_0__["MoviesCollectionComponent"],
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/features/movies/pipes/index.ts":
/*!************************************************!*\
  !*** ./src/app/features/movies/pipes/index.ts ***!
  \************************************************/
/*! exports provided: TitleCategoriesFilterPipe, TitleMoviesFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _title_categories_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title-categories-filter.pipe */ "./src/app/features/movies/pipes/title-categories-filter.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleCategoriesFilterPipe", function() { return _title_categories_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["TitleCategoriesFilterPipe"]; });

/* harmony import */ var _title_movies_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title-movies-filter.pipe */ "./src/app/features/movies/pipes/title-movies-filter.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleMoviesFilterPipe", function() { return _title_movies_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["TitleMoviesFilterPipe"]; });





/***/ }),

/***/ "./src/app/features/movies/pipes/title-categories-filter.pipe.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/movies/pipes/title-categories-filter.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: TitleCategoriesFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCategoriesFilterPipe", function() { return TitleCategoriesFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TitleCategoriesFilterPipe {
    constructor() {
        this.categories = [];
    }
    transform(categories, searchValue) {
        if (!searchValue)
            return categories;
        /**
         * filtrer les categories par titres
         */
        this.categories = categories.filter((category) => category.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
        return this.categories;
    }
}
TitleCategoriesFilterPipe.ɵfac = function TitleCategoriesFilterPipe_Factory(t) { return new (t || TitleCategoriesFilterPipe)(); };
TitleCategoriesFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "titleCategoriesFilter", type: TitleCategoriesFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleCategoriesFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "titleCategoriesFilter",
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/movies/pipes/title-movies-filter.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/movies/pipes/title-movies-filter.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: TitleMoviesFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleMoviesFilterPipe", function() { return TitleMoviesFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TitleMoviesFilterPipe {
    constructor() {
        this.movies = [];
    }
    transform(movies, searchValue) {
        if (!searchValue)
            return movies;
        /**
         * filtrer les movies par titres
         */
        this.movies = movies.filter((movie) => movie.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
        return this.movies;
    }
}
TitleMoviesFilterPipe.ɵfac = function TitleMoviesFilterPipe_Factory(t) { return new (t || TitleMoviesFilterPipe)(); };
TitleMoviesFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "titleMoviesFilter", type: TitleMoviesFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleMoviesFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "titleMoviesFilter",
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/movies/services/index.ts":
/*!***************************************************!*\
  !*** ./src/app/features/movies/services/index.ts ***!
  \***************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies.service */ "./src/app/features/movies/services/movies.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return _movies_service__WEBPACK_IMPORTED_MODULE_0__["MoviesService"]; });




/***/ }),

/***/ "./src/app/features/movies/services/movies.service.ts":
/*!************************************************************!*\
  !*** ./src/app/features/movies/services/movies.service.ts ***!
  \************************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");





class MoviesService {
    constructor(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
    }
    getCategories() {
        return this.http.get("http://localhost:4200:/categories");
    }
    getMovies() {
        return this.http.get("http://localhost:4200:/movies");
    }
    getCommentsByIdMovie(movieId) {
        return this.http.get("http://localhost:4200:/comments/" + movieId);
    }
    addMovie(movie) {
        return this.http.post("http://localhost:4200:/movie", movie);
    }
    updateMovie(movie) {
        return this.http.put("http://localhost:4200:/movie/" + movie.id, movie);
    }
    deleteMovie(movieId) {
        return this.http.delete("http://localhost:4200:/movie/" + movieId);
    }
    addMovieToMyCollection(movieId) {
        return this.http.post("http://localhost:4200:/movie/" + movieId, {});
    }
}
MoviesService.ɵfac = function MoviesService_Factory(t) { return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
MoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesService, factory: MoviesService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/store/actions/categories.action.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/movies/store/actions/categories.action.ts ***!
  \********************************************************************/
/*! exports provided: GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR, GET_SEARCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES", function() { return GET_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_SUCCESS", function() { return GET_CATEGORIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_ERROR", function() { return GET_CATEGORIES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEARCH", function() { return GET_SEARCH; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const GET_CATEGORIES = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Category] Get_Categories");
const GET_CATEGORIES_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Category] Get_Categories_success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GET_CATEGORIES_ERROR = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Category] Get_Categories_error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GET_SEARCH = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Category] Get_Search", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/movies/store/actions/comments.action.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/movies/store/actions/comments.action.ts ***!
  \******************************************************************/
/*! exports provided: GET_COMMENTS_BY_ID_MOVIE, GET_COMMENTS_BY_ID_MOVIE_SUCCESS, GET_COMMENTS_BY_ID_MOVIE_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMENTS_BY_ID_MOVIE", function() { return GET_COMMENTS_BY_ID_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMENTS_BY_ID_MOVIE_SUCCESS", function() { return GET_COMMENTS_BY_ID_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMENTS_BY_ID_MOVIE_ERROR", function() { return GET_COMMENTS_BY_ID_MOVIE_ERROR; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const GET_COMMENTS_BY_ID_MOVIE = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Comment] Get_Comments_By_Id_Movie", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GET_COMMENTS_BY_ID_MOVIE_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Comment] Get_Comments_By_Id_Movie_Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GET_COMMENTS_BY_ID_MOVIE_ERROR = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Comment] Get_Comments_By_Id_Movie_Error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/movies/store/actions/index.ts":
/*!********************************************************!*\
  !*** ./src/app/features/movies/store/actions/index.ts ***!
  \********************************************************/
/*! exports provided: GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR, GET_SEARCH, GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, ADD_MOVIE, ADD_MOVIE_SUCCESS, ADD_MOVIE_ERROR, UPDATE_MOVIE, UPDATE_MOVIE_SUCCESS, UPDATE_MOVIE_ERROR, DELETE_MOVIE, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_ERROR, ADD_OR_DELETE_MOVIE_COLLECTION, ADD_OR_DELETE_MOVIE_COLLECTION_SUCCESS, ADD_OR_DELETE_MOVIE_COLLECTION_ERROR, GET_COMMENTS_BY_ID_MOVIE, GET_COMMENTS_BY_ID_MOVIE_SUCCESS, GET_COMMENTS_BY_ID_MOVIE_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.action */ "./src/app/features/movies/store/actions/categories.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES", function() { return _categories_action__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_SUCCESS", function() { return _categories_action__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_ERROR", function() { return _categories_action__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_SEARCH", function() { return _categories_action__WEBPACK_IMPORTED_MODULE_0__["GET_SEARCH"]; });

/* harmony import */ var _movies_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.actions */ "./src/app/features/movies/store/actions/movies.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES_SUCCESS", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES_ERROR", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_MOVIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_SUCCESS", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_MOVIE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_ERROR", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_MOVIE_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MOVIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE_SUCCESS", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MOVIE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE_ERROR", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MOVIE_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_MOVIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE_SUCCESS", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_MOVIE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE_ERROR", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_MOVIE_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_OR_DELETE_MOVIE_COLLECTION", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_OR_DELETE_MOVIE_COLLECTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_OR_DELETE_MOVIE_COLLECTION_SUCCESS", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_OR_DELETE_MOVIE_COLLECTION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_OR_DELETE_MOVIE_COLLECTION_ERROR", function() { return _movies_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_OR_DELETE_MOVIE_COLLECTION_ERROR"]; });

/* harmony import */ var _comments_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.action */ "./src/app/features/movies/store/actions/comments.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_COMMENTS_BY_ID_MOVIE", function() { return _comments_action__WEBPACK_IMPORTED_MODULE_2__["GET_COMMENTS_BY_ID_MOVIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_COMMENTS_BY_ID_MOVIE_SUCCESS", function() { return _comments_action__WEBPACK_IMPORTED_MODULE_2__["GET_COMMENTS_BY_ID_MOVIE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_COMMENTS_BY_ID_MOVIE_ERROR", function() { return _comments_action__WEBPACK_IMPORTED_MODULE_2__["GET_COMMENTS_BY_ID_MOVIE_ERROR"]; });






/***/ }),

/***/ "./src/app/features/movies/store/actions/movies.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/movies/store/actions/movies.actions.ts ***!
  \*****************************************************************/
/*! exports provided: GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, ADD_MOVIE, ADD_MOVIE_SUCCESS, ADD_MOVIE_ERROR, UPDATE_MOVIE, UPDATE_MOVIE_SUCCESS, UPDATE_MOVIE_ERROR, DELETE_MOVIE, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_ERROR, ADD_OR_DELETE_MOVIE_COLLECTION, ADD_OR_DELETE_MOVIE_COLLECTION_SUCCESS, ADD_OR_DELETE_MOVIE_COLLECTION_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES", function() { return GET_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES_SUCCESS", function() { return GET_MOVIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES_ERROR", function() { return GET_MOVIES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE", function() { return ADD_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_SUCCESS", function() { return ADD_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_ERROR", function() { return ADD_MOVIE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE", function() { return UPDATE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE_SUCCESS", function() { return UPDATE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE_ERROR", function() { return UPDATE_MOVIE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE", function() { return DELETE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE_SUCCESS", function() { return DELETE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE_ERROR", function() { return DELETE_MOVIE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_OR_DELETE_MOVIE_COLLECTION", function() { return ADD_OR_DELETE_MOVIE_COLLECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_OR_DELETE_MOVIE_COLLECTION_SUCCESS", function() { return ADD_OR_DELETE_MOVIE_COLLECTION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_OR_DELETE_MOVIE_COLLECTION_ERROR", function() { return ADD_OR_DELETE_MOVIE_COLLECTION_ERROR; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const GET_MOVIES = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Get_Movies");
const GET_MOVIES_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Get_Movies_success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GET_MOVIES_ERROR = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Get_Movies_error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const ADD_MOVIE = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Add_Movie", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const ADD_MOVIE_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Add_Movie_success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const ADD_MOVIE_ERROR = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Add_Movie_error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const UPDATE_MOVIE = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Update_Movie", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const UPDATE_MOVIE_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Update_Movie_success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const UPDATE_MOVIE_ERROR = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Update_Movie_error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DELETE_MOVIE = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Delete_Movie", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DELETE_MOVIE_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Delete_Movie_success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DELETE_MOVIE_ERROR = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Delete_Movie_error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const ADD_OR_DELETE_MOVIE_COLLECTION = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Add_Or_Delete_Movie_Collection", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const ADD_OR_DELETE_MOVIE_COLLECTION_SUCCESS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Add_Or_Delete_Movie_Collection_success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const ADD_OR_DELETE_MOVIE_COLLECTION_ERROR = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Movie] Add_Or_Delete_Movie_Collection_error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/movies/store/effects/categories.effect.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/movies/store/effects/categories.effect.ts ***!
  \********************************************************************/
/*! exports provided: CategoriesEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesEffect", function() { return CategoriesEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/app/features/movies/store/actions/index.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/features/movies/services/movies.service.ts");








class CategoriesEffect {
    constructor(actions$, moviesService) {
        this.actions$ = actions$;
        this.moviesService = moviesService;
        this.loadCategories$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["GET_CATEGORIES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.moviesService.getCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((categories) => (console.log(categories),
            _actions__WEBPACK_IMPORTED_MODULE_4__["GET_CATEGORIES_SUCCESS"]({
                categories: categories,
            }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["GET_CATEGORIES_ERROR"]({
            error: err.error.message,
        })))))));
    }
}
CategoriesEffect.ɵfac = function CategoriesEffect_Factory(t) { return new (t || CategoriesEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_movies_service__WEBPACK_IMPORTED_MODULE_5__["MoviesService"])); };
CategoriesEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesEffect, factory: CategoriesEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_5__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/store/effects/comments.effect.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/movies/store/effects/comments.effect.ts ***!
  \******************************************************************/
/*! exports provided: CommentsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsEffect", function() { return CommentsEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/app/features/movies/store/actions/index.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/features/movies/services/movies.service.ts");








class CommentsEffect {
    constructor(actions$, moviesService) {
        this.actions$ = actions$;
        this.moviesService = moviesService;
        this.loadCommentsByIdMovie$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["GET_COMMENTS_BY_ID_MOVIE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((data) => this.moviesService.getCommentsByIdMovie(data.movieId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((comments) => (_actions__WEBPACK_IMPORTED_MODULE_4__["GET_COMMENTS_BY_ID_MOVIE_SUCCESS"]({
            comments: comments,
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["GET_COMMENTS_BY_ID_MOVIE_ERROR"]({
            error: err.error.message,
        })))))));
    }
}
CommentsEffect.ɵfac = function CommentsEffect_Factory(t) { return new (t || CommentsEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_movies_service__WEBPACK_IMPORTED_MODULE_5__["MoviesService"])); };
CommentsEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentsEffect, factory: CommentsEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_5__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/store/effects/effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/movies/store/effects/effects.ts ***!
  \**********************************************************/
/*! exports provided: effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _categories_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.effect */ "./src/app/features/movies/store/effects/categories.effect.ts");
/* harmony import */ var _movies_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.effects */ "./src/app/features/movies/store/effects/movies.effects.ts");
/* harmony import */ var _comments_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.effect */ "./src/app/features/movies/store/effects/comments.effect.ts");



const effects = [_categories_effect__WEBPACK_IMPORTED_MODULE_0__["CategoriesEffect"], _movies_effects__WEBPACK_IMPORTED_MODULE_1__["MoviesEffect"], _comments_effect__WEBPACK_IMPORTED_MODULE_2__["CommentsEffect"]];


/***/ }),

/***/ "./src/app/features/movies/store/effects/index.ts":
/*!********************************************************!*\
  !*** ./src/app/features/movies/store/effects/index.ts ***!
  \********************************************************/
/*! exports provided: effects, CategoriesEffect, MoviesEffect, CommentsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./effects */ "./src/app/features/movies/store/effects/effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_0__["effects"]; });

/* harmony import */ var _categories_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.effect */ "./src/app/features/movies/store/effects/categories.effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesEffect", function() { return _categories_effect__WEBPACK_IMPORTED_MODULE_1__["CategoriesEffect"]; });

/* harmony import */ var _movies_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.effects */ "./src/app/features/movies/store/effects/movies.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoviesEffect", function() { return _movies_effects__WEBPACK_IMPORTED_MODULE_2__["MoviesEffect"]; });

/* harmony import */ var _comments_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.effect */ "./src/app/features/movies/store/effects/comments.effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsEffect", function() { return _comments_effect__WEBPACK_IMPORTED_MODULE_3__["CommentsEffect"]; });







/***/ }),

/***/ "./src/app/features/movies/store/effects/movies.effects.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/movies/store/effects/movies.effects.ts ***!
  \*****************************************************************/
/*! exports provided: MoviesEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesEffect", function() { return MoviesEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/app/features/movies/store/actions/index.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/features/movies/services/movies.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










class MoviesEffect {
    constructor(actions$, moviesService, snackBar, router) {
        this.actions$ = actions$;
        this.moviesService = moviesService;
        this.snackBar = snackBar;
        this.router = router;
        this.loadMovies$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["GET_MOVIES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.moviesService.getMovies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((movies) => (console.log(movies),
            _actions__WEBPACK_IMPORTED_MODULE_4__["GET_MOVIES_SUCCESS"]({
                movies: movies,
            }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["GET_MOVIES_ERROR"]({ error: err.error.message })))))));
        this.addMovies$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ADD_MOVIE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((data) => (console.log(data),
            this.moviesService.addMovie(data.movie).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((movie) => (this.snackBar.open("movie  " + movie.title + "  successfully added", undefined, {
                duration: 5000,
                horizontalPosition: "end",
                verticalPosition: "bottom",
            }),
                console.log(movie),
                _actions__WEBPACK_IMPORTED_MODULE_4__["ADD_MOVIE_SUCCESS"]({
                    movie: movie,
                }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.router.navigate([`movies/category/${data.movie.categoryId}`])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => (console.log(err),
                this.snackBar.open(err.error.message, undefined, {
                    duration: 5000,
                    horizontalPosition: "end",
                    verticalPosition: "bottom",
                }),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ADD_MOVIE_ERROR"]({ error: err.error.message })))))))));
        this.updateMovies$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_MOVIE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((data) => (console.log(data),
            this.moviesService.updateMovie(data.movie).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((reply) => (this.snackBar.open(reply, undefined, {
                duration: 5000,
                horizontalPosition: "end",
                verticalPosition: "bottom",
            }),
                console.log(reply),
                _actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_MOVIE_SUCCESS"]({
                    reply: reply,
                }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => (console.log(err),
                this.snackBar.open(err.error.message, undefined, {
                    duration: 5000,
                    horizontalPosition: "end",
                    verticalPosition: "bottom",
                }),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_MOVIE_ERROR"]({ error: err.error.message })))))))));
        this.deleteMovies$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["DELETE_MOVIE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((data) => this.moviesService.deleteMovie(data.movieId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((reply) => (this.snackBar.open(reply, undefined, {
            duration: 5000,
            horizontalPosition: "end",
            verticalPosition: "bottom",
        }),
            console.log(reply),
            _actions__WEBPACK_IMPORTED_MODULE_4__["DELETE_MOVIE_SUCCESS"]({
                reply: reply,
            }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => (console.log(err),
            this.snackBar.open(err.error.message, undefined, {
                duration: 5000,
                horizontalPosition: "end",
                verticalPosition: "bottom",
            }),
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["DELETE_MOVIE_ERROR"]({ error: err.error.message }))))))));
        this.addMovieToMyCollection$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ADD_OR_DELETE_MOVIE_COLLECTION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((data) => (console.log(data),
            this.moviesService.addMovieToMyCollection(data.movieId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((reply) => (this.snackBar.open(reply, undefined, {
                duration: 5000,
                horizontalPosition: "end",
                verticalPosition: "bottom",
            }),
                console.log(reply),
                _actions__WEBPACK_IMPORTED_MODULE_4__["ADD_OR_DELETE_MOVIE_COLLECTION_SUCCESS"]({
                    reply: reply,
                }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => (console.log(err),
                this.snackBar.open(err.error.message, undefined, {
                    duration: 5000,
                    horizontalPosition: "end",
                    verticalPosition: "bottom",
                }),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ADD_OR_DELETE_MOVIE_COLLECTION_ERROR"]({
                    error: err.error.message,
                })))))))));
    }
}
MoviesEffect.ɵfac = function MoviesEffect_Factory(t) { return new (t || MoviesEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_movies_service__WEBPACK_IMPORTED_MODULE_5__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
MoviesEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesEffect, factory: MoviesEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_5__["MoviesService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/movies/store/reducers/categories.reducer.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/movies/store/reducers/categories.reducer.ts ***!
  \**********************************************************************/
/*! exports provided: categoriesReducer, searchReducer, getAllCategories, getIsCategoriesLoading, getIsErrorLoadCategories, getSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesReducer", function() { return categoriesReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchReducer", function() { return searchReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCategories", function() { return getAllCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCategoriesLoading", function() { return getIsCategoriesLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsErrorLoadCategories", function() { return getIsErrorLoadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearch", function() { return getSearch; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/features/movies/store/actions/index.ts");


const initCategoriesState = {
    categories: [],
    loading: false,
    error: "",
};
const initSearchState = {
    serachValue: "",
};
const newStateSearch = (state, newData) => {
    return Object.assign({}, state, newData);
};
const reducerCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initCategoriesState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_CATEGORIES"], (state) => (Object.assign(Object.assign({}, state), { loading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_CATEGORIES_SUCCESS"], (state, { categories }) => (Object.assign(Object.assign({}, state), { categories: categories, loading: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_CATEGORIES_ERROR"], (state, { error }) => (Object.assign(Object.assign({}, state), { loading: false, error: error }))));
const reducerSearch = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initSearchState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_SEARCH"], (state, { searchValue }) => (Object.assign(Object.assign({}, state), { serachValue: searchValue }))));
function categoriesReducer(state, action) {
    return reducerCategories(state, action);
}
function searchReducer(state, action) {
    return reducerSearch(state, action);
}
const getAllCategories = (state) => state.categories;
const getIsCategoriesLoading = (state) => state.loading;
const getIsErrorLoadCategories = (state) => state.error;
const getSearch = (state) => state.serachValue;


/***/ }),

/***/ "./src/app/features/movies/store/reducers/comments.reducer.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/movies/store/reducers/comments.reducer.ts ***!
  \********************************************************************/
/*! exports provided: commentsReducer, getAllComments, getIsCommentsLoading, getIsErrorLoadComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsReducer", function() { return commentsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllComments", function() { return getAllComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCommentsLoading", function() { return getIsCommentsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsErrorLoadComments", function() { return getIsErrorLoadComments; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/features/movies/store/actions/index.ts");


const initCommentsState = {
    comments: [],
    loading: false,
    error: ""
};
const reducerComments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initCommentsState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_COMMENTS_BY_ID_MOVIE"], (state, { movieId }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_COMMENTS_BY_ID_MOVIE_SUCCESS"], (state, { comments }) => {
    return Object.assign(Object.assign({}, state), { comments: comments, loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_COMMENTS_BY_ID_MOVIE_ERROR"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, error: error });
}));
function commentsReducer(state, action) {
    return reducerComments(state, action);
}
const getAllComments = (state) => state.comments;
const getIsCommentsLoading = (state) => state.loading;
const getIsErrorLoadComments = (state) => state.error;


/***/ }),

/***/ "./src/app/features/movies/store/reducers/elements.reducer.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/movies/store/reducers/elements.reducer.ts ***!
  \********************************************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _categories_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.reducer */ "./src/app/features/movies/store/reducers/categories.reducer.ts");
/* harmony import */ var _movies_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.reducer */ "./src/app/features/movies/store/reducers/movies.reducer.ts");
/* harmony import */ var _comments_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.reducer */ "./src/app/features/movies/store/reducers/comments.reducer.ts");



// Reducers pour notre state
const reducers = {
    categories: _categories_reducer__WEBPACK_IMPORTED_MODULE_0__["categoriesReducer"],
    searchCategory: _categories_reducer__WEBPACK_IMPORTED_MODULE_0__["searchReducer"],
    movies: _movies_reducer__WEBPACK_IMPORTED_MODULE_1__["moviesReducer"],
    comments: _comments_reducer__WEBPACK_IMPORTED_MODULE_2__["commentsReducer"]
};


/***/ }),

/***/ "./src/app/features/movies/store/reducers/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/movies/store/reducers/index.ts ***!
  \*********************************************************/
/*! exports provided: categoriesReducer, searchReducer, getAllCategories, getIsCategoriesLoading, getIsErrorLoadCategories, getSearch, reducers, moviesReducer, getAllMovies, getIsLoadingAllMovies, getIsLoadingActionMovie, getError, getSuccess, commentsReducer, getAllComments, getIsCommentsLoading, getIsErrorLoadComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.reducer */ "./src/app/features/movies/store/reducers/categories.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categoriesReducer", function() { return _categories_reducer__WEBPACK_IMPORTED_MODULE_0__["categoriesReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchReducer", function() { return _categories_reducer__WEBPACK_IMPORTED_MODULE_0__["searchReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllCategories", function() { return _categories_reducer__WEBPACK_IMPORTED_MODULE_0__["getAllCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsCategoriesLoading", function() { return _categories_reducer__WEBPACK_IMPORTED_MODULE_0__["getIsCategoriesLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsErrorLoadCategories", function() { return _categories_reducer__WEBPACK_IMPORTED_MODULE_0__["getIsErrorLoadCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearch", function() { return _categories_reducer__WEBPACK_IMPORTED_MODULE_0__["getSearch"]; });

/* harmony import */ var _elements_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.reducer */ "./src/app/features/movies/store/reducers/elements.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _elements_reducer__WEBPACK_IMPORTED_MODULE_1__["reducers"]; });

/* harmony import */ var _movies_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.reducer */ "./src/app/features/movies/store/reducers/movies.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moviesReducer", function() { return _movies_reducer__WEBPACK_IMPORTED_MODULE_2__["moviesReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllMovies", function() { return _movies_reducer__WEBPACK_IMPORTED_MODULE_2__["getAllMovies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingAllMovies", function() { return _movies_reducer__WEBPACK_IMPORTED_MODULE_2__["getIsLoadingAllMovies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingActionMovie", function() { return _movies_reducer__WEBPACK_IMPORTED_MODULE_2__["getIsLoadingActionMovie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return _movies_reducer__WEBPACK_IMPORTED_MODULE_2__["getError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSuccess", function() { return _movies_reducer__WEBPACK_IMPORTED_MODULE_2__["getSuccess"]; });

/* harmony import */ var _comments_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.reducer */ "./src/app/features/movies/store/reducers/comments.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commentsReducer", function() { return _comments_reducer__WEBPACK_IMPORTED_MODULE_3__["commentsReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllComments", function() { return _comments_reducer__WEBPACK_IMPORTED_MODULE_3__["getAllComments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsCommentsLoading", function() { return _comments_reducer__WEBPACK_IMPORTED_MODULE_3__["getIsCommentsLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsErrorLoadComments", function() { return _comments_reducer__WEBPACK_IMPORTED_MODULE_3__["getIsErrorLoadComments"]; });







/***/ }),

/***/ "./src/app/features/movies/store/reducers/movies.reducer.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/movies/store/reducers/movies.reducer.ts ***!
  \******************************************************************/
/*! exports provided: moviesReducer, getAllMovies, getIsLoadingAllMovies, getIsLoadingActionMovie, getError, getSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moviesReducer", function() { return moviesReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMovies", function() { return getAllMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingAllMovies", function() { return getIsLoadingAllMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingActionMovie", function() { return getIsLoadingActionMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuccess", function() { return getSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/features/movies/store/actions/index.ts");


const initMoviesState = {
    movies: [],
    currentMovie: null,
    movieId: null,
    loadingAllMovies: false,
    loadingActionMovie: false,
    error: "",
    success: "",
};
const reducerMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initMoviesState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES"], (state) => {
    return Object.assign(Object.assign({}, state), { loadingAllMovies: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES_SUCCESS"], (state, { movies }) => {
    return Object.assign(Object.assign({}, state), { movies: movies, loadingAllMovies: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES_ERROR"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingAllMovies: false, error: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_MOVIE"], (state, { movie }) => {
    return Object.assign(Object.assign({}, state), { currentMovie: movie, loadingActionMovie: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_MOVIE_SUCCESS"], (state, { movie }) => {
    const currentMovies = [...state.movies];
    currentMovies.push(movie);
    return Object.assign(Object.assign({}, state), { movies: currentMovies, loadingActionMovie: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_MOVIE_ERROR"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingActionMovie: false, error: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MOVIE"], (state, { movie }) => {
    return Object.assign(Object.assign({}, state), { currentMovie: movie, loadingActionMovie: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MOVIE_SUCCESS"], (state, { reply }) => {
    const indexMovieUpdated = state.movies.findIndex((movie) => movie.id === state.currentMovie.id);
    let currentMovies = [...state.movies];
    currentMovies[indexMovieUpdated] = state.currentMovie;
    return Object.assign(Object.assign({}, state), { movies: currentMovies, success: reply, loadingActionMovie: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MOVIE_ERROR"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingActionMovie: false, error: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_MOVIE"], (state, { movieId }) => {
    return Object.assign(Object.assign({}, state), { movieId: movieId, loadingActionMovie: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_MOVIE_SUCCESS"], (state, { reply }) => {
    const currentMovies = state.movies.filter((movie) => movie.id !== state.movieId);
    return Object.assign(Object.assign({}, state), { movies: currentMovies, success: reply, loadingActionMovie: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_MOVIE_ERROR"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingActionMovie: false, error: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_OR_DELETE_MOVIE_COLLECTION"], (state, { movieId }) => {
    return Object.assign(Object.assign({}, state), { movieId: movieId, loadingActionMovie: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_OR_DELETE_MOVIE_COLLECTION_SUCCESS"], (state, { reply }) => {
    let currentMovie = state.movies.find((movie) => movie.id == state.movieId);
    currentMovie = Object.assign({}, currentMovie);
    currentMovie.selected = !currentMovie.selected;
    const currentMovies = state.movies.map((movie) => {
        if (movie.id === currentMovie.id) {
            movie = currentMovie;
        }
        return movie;
    });
    return Object.assign(Object.assign({}, state), { movies: currentMovies, success: reply, loadingActionMovie: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_OR_DELETE_MOVIE_COLLECTION_ERROR"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loadingActionMovie: false, error: error });
}));
function moviesReducer(state, action) {
    return reducerMovies(state, action);
}
const getAllMovies = (state) => state.movies;
const getIsLoadingAllMovies = (state) => state.loadingAllMovies;
const getIsLoadingActionMovie = (state) => state.loadingActionMovie;
const getError = (state) => state.error;
const getSuccess = (state) => state.success;


/***/ }),

/***/ "./src/app/features/movies/store/selectors/categories.selector.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/movies/store/selectors/categories.selector.ts ***!
  \************************************************************************/
/*! exports provided: getAllCategories, getIsCategoriesLoading, getIsErrorLoadCategories, getSearchValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCategories", function() { return getAllCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCategoriesLoading", function() { return getIsCategoriesLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsErrorLoadCategories", function() { return getIsErrorLoadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchValue", function() { return getSearchValue; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _reducers_categories_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/categories.reducer */ "./src/app/features/movies/store/reducers/categories.reducer.ts");
/* harmony import */ var _elements_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.selector */ "./src/app/features/movies/store/selectors/elements.selector.ts");



const getCategoriesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_elements_selector__WEBPACK_IMPORTED_MODULE_2__["getElementsState"], (state) => state.categories);
const getSearchState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_elements_selector__WEBPACK_IMPORTED_MODULE_2__["getElementsState"], (state) => state.searchCategory);
const getAllCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCategoriesState, _reducers_categories_reducer__WEBPACK_IMPORTED_MODULE_1__["getAllCategories"]);
const getIsCategoriesLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCategoriesState, _reducers_categories_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsCategoriesLoading"]);
const getIsErrorLoadCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCategoriesState, _reducers_categories_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsErrorLoadCategories"]);
const getSearchValue = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSearchState, _reducers_categories_reducer__WEBPACK_IMPORTED_MODULE_1__["getSearch"]);


/***/ }),

/***/ "./src/app/features/movies/store/selectors/comments.selector.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/movies/store/selectors/comments.selector.ts ***!
  \**********************************************************************/
/*! exports provided: getAllComments, getIsCommentsLoading, getIsErrorLoadComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllComments", function() { return getAllComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCommentsLoading", function() { return getIsCommentsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsErrorLoadComments", function() { return getIsErrorLoadComments; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _reducers_comments_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/comments.reducer */ "./src/app/features/movies/store/reducers/comments.reducer.ts");
/* harmony import */ var _elements_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.selector */ "./src/app/features/movies/store/selectors/elements.selector.ts");



const getCommentsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_elements_selector__WEBPACK_IMPORTED_MODULE_2__["getElementsState"], (state) => state.comments);
const getAllComments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCommentsState, _reducers_comments_reducer__WEBPACK_IMPORTED_MODULE_1__["getAllComments"]);
const getIsCommentsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCommentsState, _reducers_comments_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsCommentsLoading"]);
const getIsErrorLoadComments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCommentsState, _reducers_comments_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsErrorLoadComments"]);


/***/ }),

/***/ "./src/app/features/movies/store/selectors/elements.selector.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/movies/store/selectors/elements.selector.ts ***!
  \**********************************************************************/
/*! exports provided: getElementsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementsState", function() { return getElementsState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

// globalState
const getElementsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("elements");


/***/ }),

/***/ "./src/app/features/movies/store/selectors/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/movies/store/selectors/index.ts ***!
  \**********************************************************/
/*! exports provided: getAllCategories, getIsCategoriesLoading, getIsErrorLoadCategories, getSearchValue, getAllMovies, getSelectedMoviesByIdCategory, getMovieById, getMyCollectionMovies, getIsLoadingAllMovies, getIsLoadingActionMovie, getError, getSuccess, getAllComments, getIsCommentsLoading, getIsErrorLoadComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.selector */ "./src/app/features/movies/store/selectors/categories.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllCategories", function() { return _categories_selector__WEBPACK_IMPORTED_MODULE_0__["getAllCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsCategoriesLoading", function() { return _categories_selector__WEBPACK_IMPORTED_MODULE_0__["getIsCategoriesLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsErrorLoadCategories", function() { return _categories_selector__WEBPACK_IMPORTED_MODULE_0__["getIsErrorLoadCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchValue", function() { return _categories_selector__WEBPACK_IMPORTED_MODULE_0__["getSearchValue"]; });

/* harmony import */ var _movies_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.selector */ "./src/app/features/movies/store/selectors/movies.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllMovies", function() { return _movies_selector__WEBPACK_IMPORTED_MODULE_1__["getAllMovies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedMoviesByIdCategory", function() { return _movies_selector__WEBPACK_IMPORTED_MODULE_1__["getSelectedMoviesByIdCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMovieById", function() { return _movies_selector__WEBPACK_IMPORTED_MODULE_1__["getMovieById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMyCollectionMovies", function() { return _movies_selector__WEBPACK_IMPORTED_MODULE_1__["getMyCollectionMovies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingAllMovies", function() { return _movies_selector__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingAllMovies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingActionMovie", function() { return _movies_selector__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingActionMovie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return _movies_selector__WEBPACK_IMPORTED_MODULE_1__["getError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSuccess", function() { return _movies_selector__WEBPACK_IMPORTED_MODULE_1__["getSuccess"]; });

/* harmony import */ var _comments_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.selector */ "./src/app/features/movies/store/selectors/comments.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllComments", function() { return _comments_selector__WEBPACK_IMPORTED_MODULE_2__["getAllComments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsCommentsLoading", function() { return _comments_selector__WEBPACK_IMPORTED_MODULE_2__["getIsCommentsLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsErrorLoadComments", function() { return _comments_selector__WEBPACK_IMPORTED_MODULE_2__["getIsErrorLoadComments"]; });






/***/ }),

/***/ "./src/app/features/movies/store/selectors/movies.selector.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/movies/store/selectors/movies.selector.ts ***!
  \********************************************************************/
/*! exports provided: getAllMovies, getSelectedMoviesByIdCategory, getMovieById, getMyCollectionMovies, getIsLoadingAllMovies, getIsLoadingActionMovie, getError, getSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMovies", function() { return getAllMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedMoviesByIdCategory", function() { return getSelectedMoviesByIdCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieById", function() { return getMovieById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyCollectionMovies", function() { return getMyCollectionMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingAllMovies", function() { return getIsLoadingAllMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingActionMovie", function() { return getIsLoadingActionMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuccess", function() { return getSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _reducers_movies_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/movies.reducer */ "./src/app/features/movies/store/reducers/movies.reducer.ts");
/* harmony import */ var _elements_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.selector */ "./src/app/features/movies/store/selectors/elements.selector.ts");
/* harmony import */ var _shared_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/router-store */ "./src/app/features/shared/router-store/index.ts");




const getMoviesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_elements_selector__WEBPACK_IMPORTED_MODULE_2__["getElementsState"], (state) => state.movies);
const getAllMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMoviesState, _reducers_movies_reducer__WEBPACK_IMPORTED_MODULE_1__["getAllMovies"]);
const getSelectedMoviesByIdCategory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_shared_router_store__WEBPACK_IMPORTED_MODULE_3__["getRouter"], getAllMovies, (router, movies) => {
    return movies.reduce((data, movie) => {
        if (movie.categoryId == router.params["categoryId"]) {
            data.push(movie);
        }
        return data;
    }, []);
});
const getMovieById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_shared_router_store__WEBPACK_IMPORTED_MODULE_3__["getRouter"], getAllMovies, (router, movies) => {
    return movies.find((movie) => movie.id == router.params["movieId"]);
});
const getMyCollectionMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllMovies, (movies) => {
    return movies.filter((movie) => movie.selected == true);
});
const getIsLoadingAllMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMoviesState, _reducers_movies_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingAllMovies"]);
const getIsLoadingActionMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMoviesState, _reducers_movies_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsLoadingActionMovie"]);
const getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMoviesState, _reducers_movies_reducer__WEBPACK_IMPORTED_MODULE_1__["getError"]);
const getSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMoviesState, _reducers_movies_reducer__WEBPACK_IMPORTED_MODULE_1__["getSuccess"]);


/***/ }),

/***/ "./src/app/features/shared/router-store/custom-router-state.serializer.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/shared/router-store/custom-router-state.serializer.ts ***!
  \********************************************************************************/
/*! exports provided: CustomRouterStateSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouterStateSerializer", function() { return CustomRouterStateSerializer; });
class CustomRouterStateSerializer {
    serialize(routerState) {
        const routerStateSnapshot = {
            url: routerState.url,
            params: null,
            queryParams: null
        };
        let childRoute = routerState.root;
        while (childRoute.firstChild) {
            childRoute = childRoute.firstChild;
        }
        routerStateSnapshot.params = childRoute.params;
        routerStateSnapshot.queryParams = childRoute.queryParams;
        return routerStateSnapshot;
    }
}


/***/ }),

/***/ "./src/app/features/shared/router-store/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/shared/router-store/index.ts ***!
  \*******************************************************/
/*! exports provided: routerReducers, getRouterState, getRouter, CustomRouterStateSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.state */ "./src/app/features/shared/router-store/router.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routerReducers", function() { return _router_state__WEBPACK_IMPORTED_MODULE_0__["routerReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return _router_state__WEBPACK_IMPORTED_MODULE_0__["getRouterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRouter", function() { return _router_state__WEBPACK_IMPORTED_MODULE_0__["getRouter"]; });

/* harmony import */ var _custom_router_state_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-router-state.serializer */ "./src/app/features/shared/router-store/custom-router-state.serializer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomRouterStateSerializer", function() { return _custom_router_state_serializer__WEBPACK_IMPORTED_MODULE_1__["CustomRouterStateSerializer"]; });





/***/ }),

/***/ "./src/app/features/shared/router-store/router.state.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/shared/router-store/router.state.ts ***!
  \**************************************************************/
/*! exports provided: routerReducers, getRouterState, getRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerReducers", function() { return routerReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return getRouterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouter", function() { return getRouter; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");


const routerReducers = {
    routerReducerState: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
};
const getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("router");
const getRouter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getRouterState, (routerState) => routerState.routerReducerState.state);


/***/ })

}]);
//# sourceMappingURL=movies-es2015.js.map