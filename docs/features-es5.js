function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features"], {
  /***/
  "./src/app/features/index.ts":
  /*!***********************************!*\
    !*** ./src/app/features/index.ts ***!
    \***********************************/

  /*! exports provided: WorkspaceModule */

  /***/
  function srcAppFeaturesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./workspace */
    "./src/app/features/workspace/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WorkspaceModule", function () {
      return _workspace__WEBPACK_IMPORTED_MODULE_0__["WorkspaceModule"];
    });
    /***/

  },

  /***/
  "./src/app/features/workspace/components/header/header.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/features/workspace/components/header/header.component.ts ***!
    \**************************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppFeaturesWorkspaceComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 6,
      vars: 0,
      consts: [[1, "header"], [1, "container"], ["src", "https://static.formation.tech/formations/logos/f73301734464e8c21e35331156aa9b06.svg", 1, "logo", "img-responsive", "pull-left"], [1, "content", "pull-left"], [1, "name"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ngrx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".header[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  background: #211424;\n  border-top: 5px solid #a829c3;\n  box-shadow: 0 2px 5px 0 #fc9b2d;\n  margin-top: 15px;\n}\n\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 5px 0 #fc9b2d, 0 2px 10px 0 #fc9b2d;\n  height: 60px;\n  border-radius: 50%;\n}\n\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #fc9b2d;\n  font-size: 30px;\n  margin-bottom: 5px;\n  margin-left: 15px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvd29ya3NwYWNlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3dvcmtzcGFjZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJhY2tncm91bmQ6ICMyMTE0MjQ7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjYTgyOWMzO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCAjZmM5YjJkO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uaGVhZGVyIC5sb2dvIHtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgI2ZjOWIyZCwgMCAycHggMTBweCAwICNmYzliMmQ7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmhlYWRlciAuY29udGVudCAubmFtZSB7XG4gIGNvbG9yOiAjZmM5YjJkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-header",
          templateUrl: "./header.component.html",
          styleUrls: ["./header.component.css"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/workspace/components/index.ts":
  /*!********************************************************!*\
    !*** ./src/app/features/workspace/components/index.ts ***!
    \********************************************************/

  /*! exports provided: HeaderComponent, PanelComponent */

  /***/
  function srcAppFeaturesWorkspaceComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/features/workspace/components/header/header.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"];
    });
    /* harmony import */


    var _panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./panel/panel.component */
    "./src/app/features/workspace/components/panel/panel.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PanelComponent", function () {
      return _panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"];
    });
    /***/

  },

  /***/
  "./src/app/features/workspace/components/panel/panel.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/features/workspace/components/panel/panel.component.ts ***!
    \************************************************************************/

  /*! exports provided: PanelComponent */

  /***/
  function srcAppFeaturesWorkspaceComponentsPanelPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelComponent", function () {
      return PanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PanelComponent =
    /*#__PURE__*/
    function () {
      function PanelComponent() {
        _classCallCheck(this, PanelComponent);
      }

      _createClass(PanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PanelComponent;
    }();

    PanelComponent.ɵfac = function PanelComponent_Factory(t) {
      return new (t || PanelComponent)();
    };

    PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelComponent,
      selectors: [["app-panel"]],
      inputs: {
        panel: "panel"
      },
      decls: 8,
      vars: 3,
      consts: [[1, "d-inline"], [3, "routerLink"], [1, "col-xs-12", "col-sm-4", "col-md-4", "col-lg-4"], [1, "panel", "panel-info"], [1, "panel-heading"], [1, "panel-body"], [1, "product_listing_img", "img-responsive", 2, "height", "200px", 3, "src"]],
      template: function PanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.panel.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.panel.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.panel.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.panel-info[_ngcontent-%COMP%]    > .panel-heading[_ngcontent-%COMP%] {\n  color: #fc9b2d !important;\n  background-color: #211424 !important;\n  border-color: #fc9b2d !important;\n}\n.panel-info[_ngcontent-%COMP%]    > .panel-body[_ngcontent-%COMP%] {\n  background-color: #211424 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvd29ya3NwYWNlL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3dvcmtzcGFjZS9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wYW5lbC1pbmZvID4gLnBhbmVsLWhlYWRpbmcge1xuICBjb2xvcjogI2ZjOWIyZCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjExNDI0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZjOWIyZCAhaW1wb3J0YW50O1xufVxuLnBhbmVsLWluZm8gPiAucGFuZWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTE0MjQgIWltcG9ydGFudDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-panel",
          templateUrl: "./panel.component.html",
          styleUrls: ["./panel.component.css"]
        }]
      }], function () {
        return [];
      }, {
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/features/workspace/containers/index.ts":
  /*!********************************************************!*\
    !*** ./src/app/features/workspace/containers/index.ts ***!
    \********************************************************/

  /*! exports provided: TemplateComponent */

  /***/
  function srcAppFeaturesWorkspaceContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _template_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./template/template.component */
    "./src/app/features/workspace/containers/template/template.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TemplateComponent", function () {
      return _template_template_component__WEBPACK_IMPORTED_MODULE_0__["TemplateComponent"];
    });
    /***/

  },

  /***/
  "./src/app/features/workspace/containers/template/template.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/features/workspace/containers/template/template.component.ts ***!
    \******************************************************************************/

  /*! exports provided: TemplateComponent */

  /***/
  function srcAppFeaturesWorkspaceContainersTemplateTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    function TemplateComponent_app_panel_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel", 2);
      }

      if (rf & 2) {
        var panel_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panel", panel_r1);
      }
    }

    var TemplateComponent =
    /*#__PURE__*/
    function () {
      function TemplateComponent() {
        _classCallCheck(this, TemplateComponent);

        this.panels = [{
          name: "Movies module",
          link: "movies",
          image: "https://img.favpng.com/18/17/18/popcorn-cinema-film-reel-clip-art-png-favpng-rnbc7vFwt5fwwFAaX0bYTibhq.jpg"
        }, {
          name: "Carrousel module",
          link: "carrousel",
          image: "https://www.textbroker.fr/wp-content/uploads/sites/4/2018/12/picture_297648-750x447.jpg"
        }];
      }

      _createClass(TemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TemplateComponent;
    }();

    TemplateComponent.ɵfac = function TemplateComponent_Factory(t) {
      return new (t || TemplateComponent)();
    };

    TemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TemplateComponent,
      selectors: [["app-template"]],
      decls: 3,
      vars: 1,
      consts: [[1, "container"], [3, "panel", 4, "ngFor", "ngForOf"], [3, "panel"]],
      template: function TemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TemplateComponent_app_panel_2_Template, 1, 1, "app-panel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvd29ya3NwYWNlL2NvbnRhaW5lcnMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3dvcmtzcGFjZS9jb250YWluZXJzL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiJdfQ== */"]
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
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/workspace/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/features/workspace/index.ts ***!
    \*********************************************/

  /*! exports provided: WorkspaceModule */

  /***/
  function srcAppFeaturesWorkspaceIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _workspace_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./workspace.module */
    "./src/app/features/workspace/workspace.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WorkspaceModule", function () {
      return _workspace_module__WEBPACK_IMPORTED_MODULE_0__["WorkspaceModule"];
    });
    /***/

  },

  /***/
  "./src/app/features/workspace/workspace-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/features/workspace/workspace-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: WorkspaceRoutingModule */

  /***/
  function srcAppFeaturesWorkspaceWorkspaceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkspaceRoutingModule", function () {
      return WorkspaceRoutingModule;
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


    var _workspace_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./workspace.routes */
    "./src/app/features/workspace/workspace.routes.ts");

    var WorkspaceRoutingModule = function WorkspaceRoutingModule() {
      _classCallCheck(this, WorkspaceRoutingModule);
    };

    WorkspaceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WorkspaceRoutingModule
    });
    WorkspaceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WorkspaceRoutingModule_Factory(t) {
        return new (t || WorkspaceRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_workspace_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkspaceRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkspaceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_workspace_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/workspace/workspace.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/features/workspace/workspace.module.ts ***!
    \********************************************************/

  /*! exports provided: WorkspaceModule */

  /***/
  function srcAppFeaturesWorkspaceWorkspaceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkspaceModule", function () {
      return WorkspaceModule;
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


    var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./containers */
    "./src/app/features/workspace/containers/index.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components */
    "./src/app/features/workspace/components/index.ts");
    /* harmony import */


    var _workspace_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./workspace-routing.module */
    "./src/app/features/workspace/workspace-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var WorkspaceModule = function WorkspaceModule() {
      _classCallCheck(this, WorkspaceModule);
    };

    WorkspaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WorkspaceModule
    });
    WorkspaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WorkspaceModule_Factory(t) {
        return new (t || WorkspaceModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _workspace_routing_module__WEBPACK_IMPORTED_MODULE_4__["WorkspaceRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkspaceModule, {
        declarations: [_containers__WEBPACK_IMPORTED_MODULE_2__["TemplateComponent"], _components__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _workspace_routing_module__WEBPACK_IMPORTED_MODULE_4__["WorkspaceRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkspaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_containers__WEBPACK_IMPORTED_MODULE_2__["TemplateComponent"], _components__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _workspace_routing_module__WEBPACK_IMPORTED_MODULE_4__["WorkspaceRoutingModule"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_containers__WEBPACK_IMPORTED_MODULE_2__["TemplateComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_l"], _containers__WEBPACK_IMPORTED_MODULE_2__["TemplateComponent"], _components__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/features/workspace/workspace.routes.ts":
  /*!********************************************************!*\
    !*** ./src/app/features/workspace/workspace.routes.ts ***!
    \********************************************************/

  /*! exports provided: routes */

  /***/
  function srcAppFeaturesWorkspaceWorkspaceRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./containers */
    "./src/app/features/workspace/containers/index.ts");

    var routes = [{
      path: "",
      component: _containers__WEBPACK_IMPORTED_MODULE_0__["TemplateComponent"]
    }, {
      path: "movies",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | movies */
        [__webpack_require__.e("default~carrousel~movies"), __webpack_require__.e("movies")]).then(__webpack_require__.bind(null,
        /*! ../movies */
        "./src/app/features/movies/index.ts")).then(function (m) {
          return m.MoviesModule;
        });
      }
    }, {
      path: "carrousel",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | carrousel */
        [__webpack_require__.e("default~carrousel~movies"), __webpack_require__.e("carrousel")]).then(__webpack_require__.bind(null,
        /*! ../carrousel */
        "./src/app/features/carrousel/index.ts")).then(function (m) {
          return m.CarrouselModule;
        });
      }
    }];
    /***/
  }
}]);
//# sourceMappingURL=features-es5.js.map