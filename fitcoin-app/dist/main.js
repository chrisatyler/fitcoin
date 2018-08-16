(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n\theight: 90px;\n\tbackground-color: rgb(40,129,184);\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><img alt=\"Brand\" src=\"/assets/img/FitnessClubUSALogo.png\" style=\"height: 60px; width: 100px;\"></a>\n    </div>\n\n  </div><!-- /.container-fluid -->\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./member-detail/member-detail.component */ "./src/app/member-detail/member-detail.component.ts");
/* harmony import */ var _redeem_fitcoins_form_redeem_fitcoins_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redeem-fitcoins-form/redeem-fitcoins-form.component */ "./src/app/redeem-fitcoins-form/redeem-fitcoins-form.component.ts");
/* harmony import */ var _member_activity_history_member_activity_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./member-activity-history/member-activity-history.component */ "./src/app/member-activity-history/member-activity-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Define the routes
var ROUTES = [
    {
        path: '',
        redirectTo: 'members',
        pathMatch: 'full'
    },
    {
        path: 'members',
        component: _members_members_component__WEBPACK_IMPORTED_MODULE_6__["MembersComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _members_members_component__WEBPACK_IMPORTED_MODULE_6__["MembersComponent"],
                _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_7__["MemberDetailComponent"],
                _redeem_fitcoins_form_redeem_fitcoins_form_component__WEBPACK_IMPORTED_MODULE_8__["RedeemFitcoinsFormComponent"],
                _member_activity_history_member_activity_history_component__WEBPACK_IMPORTED_MODULE_9__["MemberActivityHistoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES) // Add routes to the app
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/member-activity-history/member-activity-history.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/member-activity-history/member-activity-history.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n\twidth: 100%;\n}"

/***/ }),

/***/ "./src/app/member-activity-history/member-activity-history.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/member-activity-history/member-activity-history.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \t<!-- Modal -->\n\t<div class=\"modal fade\" aria-hidden=\"true\" id=\"memberHistoryShow\" role=\"dialog\">\n\t  <div class=\"modal-dialog\" role=\"document\">\n\t    <div class=\"modal-content\">\n\t      <div class=\"modal-header\">\n\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t        <h4 class=\"modal-title\" id=\"myModalLabel\">Activity History</h4>\n\t      </div>\n\t      <div class=\"modal-body\">\n\t\t\t<div class=\"container scrollableContent\">\n\t\t\t  <table class=\"table table-hover\">\n\t\t\t  <thead>\n\t\t\t  \t<tr>\n\t\t\t  \t\t<td>Activity Date</td>\n\t\t\t  \t\t<td>Action</td>\n\t\t\t  \t</tr>\n\t\t\t  </thead>\n\t\t\t  <tbody>\n\t\t\t  <tr *ngFor=\"let activity of activityHistory\">\n\t\t\t  \t<td>{{ activity.activityDate | date }}{{ activity.redeemedDate | date }}</td>\n\t\t\t  \t<td>\n\t\t\t  \t\t<span *ngIf=\"activity.$class=='org.fitclub.fitcoin.RedeemFitCoins'\">Redeemed </span>\n\t\t\t  \t\t<span *ngIf=\"activity.$class=='org.fitclub.fitcoin.ReceiveFitCoins'\">Received </span>\n\t\t\t  \t\t{{ activity.fitCoinQuantity }} FitCoins for \n\t\t\t  \t\t{{ activity.activity }}{{ activity.redeemedFor }}\n\t\t\t  \t\t<span *ngIf=\"activity.$class=='org.fitclub.fitcoin.RedeemFitCoins'\"> from {{ activity.storeOwner | slice:40 }} </span>\n\t\t\t\t</td>\n\t\t\t  </tr>\n\t\t\t  </tbody>\n\t\t\t  </table>\n\t\t\t</div>\t\t\n\t      </div>\n\t      <div class=\"modal-footer\">\n\t        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</div>\n\t<!-- Modal -->\n\t\n"

/***/ }),

/***/ "./src/app/member-activity-history/member-activity-history.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/member-activity-history/member-activity-history.component.ts ***!
  \******************************************************************************/
/*! exports provided: MemberActivityHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberActivityHistoryComponent", function() { return MemberActivityHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Response } from '@angular/http';
//import { DatePipe, SlicePipe } from '@angular/common';
//import { map } from 'rxjs/add/operators';

var MemberActivityHistoryComponent = /** @class */ (function () {
    function MemberActivityHistoryComponent(http) {
        this.http = http;
        this.activityHistory = [];
        this.apiBaseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseURL;
    }
    MemberActivityHistoryComponent.prototype.getFitCoinsReceived = function (personId) {
        var _this = this;
        var data;
        var apiURL = this.apiBaseURL + "queries/FindFitCoinsReceivedByMember?member=resource%3Aorg.fitclub.fitcoin.Member%23" + personId;
        try {
            this.http.get(apiURL).subscribe(function (data) {
                _this.activityHistory = data;
                _this.getFitCoinsRedeemed(personId);
            });
        }
        catch (err) {
            console.log('Error: ' + err);
        }
    };
    MemberActivityHistoryComponent.prototype.getFitCoinsRedeemed = function (personId) {
        var _this = this;
        var data;
        var apiURL = this.apiBaseURL + "queries/FindFitCoinRedemptionsByMember?member=resource%3Aorg.fitclub.fitcoin.Member%23" + personId;
        try {
            this.http.get(apiURL)
                .subscribe(function (data) {
                var received = _this.activityHistory;
                var redeemed = data;
                _this.activityHistory = received.concat(redeemed);
                _this.activityHistory.sort(function (a, b) {
                    var value1 = a.transactionDate;
                    var value2 = b.transactionDate;
                    if (value1 < value2) {
                        return -1;
                    }
                    else if (value2 > value1) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                console.log('activity history');
                console.log(_this.activityHistory);
            });
        }
        catch (err) {
            console.log('Error: ' + err);
        }
    };
    MemberActivityHistoryComponent.prototype.getActivityHistory = function (personId) {
        this.activityHistory = [];
        this.getFitCoinsReceived(personId);
    };
    MemberActivityHistoryComponent.prototype.ngOnChanges = function (changes) {
        this.personId = changes["personId"].currentValue;
        this.getActivityHistory(this.personId);
    };
    MemberActivityHistoryComponent.prototype.ngOnInit = function () {
        //this.getActivityHistory(this.personId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MemberActivityHistoryComponent.prototype, "personId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MemberActivityHistoryComponent.prototype, "memberHistoryShow", void 0);
    MemberActivityHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-activity-history',
            template: __webpack_require__(/*! ./member-activity-history.component.html */ "./src/app/member-activity-history/member-activity-history.component.html"),
            styles: [__webpack_require__(/*! ./member-activity-history.component.css */ "./src/app/member-activity-history/member-activity-history.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemberActivityHistoryComponent);
    return MemberActivityHistoryComponent;
}());



/***/ }),

/***/ "./src/app/member-detail/member-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/member-detail/member-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member-detail/member-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/member-detail/member-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <span data-toggle=\"modal\" data-target=\"#memberHistoryShow\"><button class=\"btn btn-primary {{ this.inactivateMemberButton }}\" (click)=\"showMemberActivityHistory(this.personId)\" data-toggle=\"tooltip\" title=\"Member Balance\" style=\"width:75px;\"><span class=\"badge\">{{ fitCoinBalance }}</span></button></span>\n <span data-toggle=\"modal\" data-target=\"#redeemFitCoinsShow\"><button class=\"btn btn-primary {{ this.inactivateMemberButton }}\" (click)=\"redeemFitCoins(this.personId)\" data-toggle=\"tooltip\" title=\"Redeem FitCoins\"><span class=\"glyphicon glyphicon-bitcoin\" aria-hidden=\"true\"></span></button></span>\n <button class=\"btn btn-primary {{ this.inactivateMemberButton }}\" (click)=\"addFitCoins(this.personId,25)\" data-toggle=\"tooltip\" title=\"Register Workout\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></button>\n <button class=\"btn btn-primary {{ this.inactivateMemberButton }}\" (click)=\"inactivateMember(this.personId)\" data-toggle=\"tooltip\" title=\"Inactivate Member\"><span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span></button>\n "

/***/ }),

/***/ "./src/app/member-detail/member-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/member-detail/member-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { MemberDetailService } from '../member-detail.service';

//import { Response } from '@angular/http';

var MemberDetailComponent = /** @class */ (function () {
    //	private redeemFitCoinsShow: boolean;
    function MemberDetailComponent(http) {
        this.http = http;
        //instantiate the members
        this.member = [];
        this.redeemFitCoinsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showMemberActivityHistoryEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.apiBaseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseURL;
        this.fitCoinBalance = 0;
        this.inactivateMemberButton = 'disabled';
        this.stores = [];
    }
    MemberDetailComponent.prototype.redeemFitCoins = function (personId) {
        this.redeemFitCoinsEvent.emit(personId);
    };
    MemberDetailComponent.prototype.showMemberActivityHistory = function (personId) {
        this.showMemberActivityHistoryEvent.emit(personId);
    };
    MemberDetailComponent.prototype.getFitCoinBalance = function (personId) {
        var data;
        var apiURL = this.apiBaseURL + "FitCoinWallet/" + personId;
        try {
            data = this.http.get(apiURL);
        }
        catch (err) {
            console.log('Error: ' + err);
            data = {
                "fitCoinBalance": 0
            };
        }
        return data;
    };
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFitCoinBalance(this.personId).subscribe(function (data) {
            _this.fitCoinBalance = Number(data.fitCoinBalance);
        }, function (error) {
            _this.fitCoinBalance = 0;
        });
        if (this.memberStatus === 'INACTIVE') {
            this.inactivateMemberButton = 'disabled';
        }
        else {
            this.inactivateMemberButton = 'enabled';
        }
        ;
    };
    MemberDetailComponent.prototype.inactivateMember = function (personId) {
        var _this = this;
        var apiURL = this.apiBaseURL + "InactivateMember";
        var data = { member: this.personId };
        this.http.post(apiURL, data)
            .subscribe(function (res) {
            _this.inactivateMemberButton = 'disabled';
            _this.memberStatus = 'INACTIVE';
        }, function (err) {
            console.log("Error Occurred" + err);
        });
        this.ngOnInit();
    };
    MemberDetailComponent.prototype.addFitCoins = function (personId, fitCoinsToAdd) {
        var _this = this;
        var apiURL = this.apiBaseURL + "ReceiveFitCoins";
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var ddString = dd.toString();
        var mmString = mm.toString();
        var yyyy = today.getFullYear().toString();
        if (dd < 10) {
            ddString = '0' + dd.toString();
        }
        if (mm < 10) {
            mmString = '0' + mm.toString();
        }
        var todayFormatted = yyyy + '-' + mmString + '-' + ddString;
        var data = { member: this.personId,
            activity: "Checked In",
            activityDate: todayFormatted,
            fitCoinQuantity: fitCoinsToAdd };
        this.http.post(apiURL, data)
            .subscribe(function (res) {
            _this.getFitCoinBalance(_this.personId).subscribe(function (data) {
                _this.fitCoinBalance = Number(data.fitCoinBalance);
            }, function (error) {
                _this.fitCoinBalance = 0;
            });
        }, function (err) {
            console.log("Error Occurred" + err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MemberDetailComponent.prototype, "personId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MemberDetailComponent.prototype, "memberStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MemberDetailComponent.prototype, "redeemFitCoinsEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MemberDetailComponent.prototype, "showMemberActivityHistoryEvent", void 0);
    MemberDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__(/*! ./member-detail.component.html */ "./src/app/member-detail/member-detail.component.html"),
            styles: [__webpack_require__(/*! ./member-detail.component.css */ "./src/app/member-detail/member-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "./src/app/members/members.component.css":
/*!***********************************************!*\
  !*** ./src/app/members/members.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\ndiv.content {\n\tposition: absolute;\n\ttop: 140px;\n\tleft: 50px;\n}\n*/\ndiv.scrollableContent {\n\toverflow: scroll;\n\theight: 60%;\n\tleft: 50px;\n}"

/***/ }),

/***/ "./src/app/members/members.component.html":
/*!************************************************!*\
  !*** ./src/app/members/members.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n\t<div class=\"jumbotron\">\n\t  <h1>{{ this.clubName }}</h1>\n\t  <h3>{{ this.clubOwnerFirstName }} {{this.clubOwnerLastName }}</h3>\n\t  <div class=\"row\">\n\t    <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">Create a New Member</button>\n\t  </div>\n \t</div>\n\n\t<!-- Modal -->\n\t<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t  <div class=\"modal-dialog\" role=\"document\">\n\t    <div class=\"modal-content\">\n\t      <div class=\"modal-header\">\n\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t        <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n\t      </div>\n\t      <div class=\"modal-body\">\n\t       <form novalidate #newMemberForm=\"ngForm\">\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"memberFirstName\">Member First Name</label>\n\t\t\t    <input name=\"memberFirstName\" [(ngModel)]=\"this.memberFirstName\" type=\"text\" class=\"form-control\" id=\"memberFirstName\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"memberLastName\">Member Last Name</label>\n\t\t\t    <input name=\"memberLastName\" [(ngModel)]=\"this.memberLastName\" type=\"text\" class=\"form-control\" id=\"memberLastName\">\n\t\t\t  </div>\n\t\t\t</form>\n\t      </div>\n\t      <div class=\"modal-footer\">\n\t        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\t        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewMember()\" data-dismiss=\"modal\">Add Member</button>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</div>\n\t<!-- Modal -->\n\t\n\t<app-redeem-fitcoins-form [redeemFitCoinsShow]=\"this.redeemFitCoinsShow\" [personId]=\"this.personId\" (closeRedeemFitCoinsFormEvent)=\"closeRedeemFitCoinsFormMessage($event)\"></app-redeem-fitcoins-form>\n\t<app-member-activity-history [memberHistoryShow]=\"this.memberHistoryShow\" [personId]=\"this.personId\"></app-member-activity-history>\n\t\n\t<div class=\"container scrollableContent\">\n\t  <table class=\"table table-hover\">\n\t  <thead>\n\t  \t<tr>\n\t  \t\t<td>Member First Name</td>\n\t  \t\t<td>Member Last Name</td>\n\t  \t\t<td>Member Actions</td>\n\t  \t</tr>\n\t  </thead>\n\t  <tbody>\n\t  <tr *ngFor=\"let member of members\">\n\t  \t<td>{{ member.personFirstName }}</td>\n\t  \t<td>{{ member.personLastName }}</td>\n\t  \t<td><app-member-detail [personId]=\"member.personId\" [memberStatus]=\"member.memberStatus\" (showMemberActivityHistoryEvent)=\"showMemberActivityHistoryMessage($event)\" (redeemFitCoinsEvent)=\"redeemFitCoinsMessage($event)\"></app-member-detail></td>\n\t  </tr>\n\t  </tbody>\n\t  </table>\n\t</div>\n\t\n\n</div>\n"

/***/ }),

/***/ "./src/app/members/members.component.ts":
/*!**********************************************!*\
  !*** ./src/app/members/members.component.ts ***!
  \**********************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Response } from '@angular/http';
//import { FormGroup, FormControl, NgForm } from '@angular/forms';
//import 'rxjs/add/operator/map';

var MembersComponent = /** @class */ (function () {
    function MembersComponent(http) {
        this.http = http;
        //instantiate the members
        this.members = [];
        this.apiBaseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseURL;
        this.redeemFitCoinsShow = false;
        this.memberHistoryShow = false;
    }
    MembersComponent.prototype.showMemberActivityHistoryMessage = function ($event) {
        this.memberHistoryShow = true;
        this.personId = $event;
    };
    MembersComponent.prototype.redeemFitCoinsMessage = function ($event) {
        this.redeemFitCoinsShow = true;
        this.personId = $event;
    };
    MembersComponent.prototype.closeRedeemFitCoinsFormMessage = function ($event) {
        this.redeemFitCoinsShow = false;
        this.getAllMembers();
    };
    MembersComponent.prototype.getClub = function () {
        var data;
        var apiURL = this.apiBaseURL + "Club/CLUB_001";
        try {
            data = this.http.get(apiURL);
        }
        catch (err) {
            console.log('Error: ' + err);
        }
        return data;
    };
    MembersComponent.prototype.getClubOwner = function () {
        var data;
        var apiURL = this.apiBaseURL + "ClubOwner/" + this.clubOwnerId;
        try {
            data = this.http.get(apiURL);
        }
        catch (err) {
            console.log('Error: ' + err);
        }
        return data;
    };
    MembersComponent.prototype.getClubData = function () {
        var _this = this;
        this.getClub().subscribe(function (data) {
            _this.clubId = data.clubId;
            _this.clubName = data.clubName;
            _this.clubOwnerId = data.clubOwner.split('#')[1];
            //this.clubOwnerId = data.clubOwner.personId;
            _this.getClubOwner().subscribe(function (data) {
                _this.clubOwnerFirstName = data.personFirstName;
                _this.clubOwnerLastName = data.personLastName;
            });
        });
    };
    MembersComponent.prototype.getAllMembers = function () {
        var _this = this;
        var data;
        var apiURL = this.apiBaseURL + "queries/ActiveMembers";
        try {
            this.http.get(apiURL).subscribe(function (data) {
                _this.members = data;
            });
        }
        catch (err) {
            console.log('Error: ' + err);
        }
    };
    MembersComponent.prototype.ngOnInit = function () {
        // retrieve all Members from API
        this.getClubData();
        this.getAllMembers();
    };
    MembersComponent.prototype.addNewMember = function () {
        var _this = this;
        var apiURL = this.apiBaseURL + "AddMember";
        var memberId = "MEMBER_" + Math.floor(Math.random() * 2000000).toString();
        var data = { memberId: memberId,
            memberFirstName: this.memberFirstName,
            memberLastName: this.memberLastName,
            club: this.clubId };
        this.http.post(apiURL, data)
            .subscribe(function (res) {
            _this.getAllMembers();
        }, function (err) {
            console.log("Error Occurred" + err);
        });
    };
    MembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! ./members.component.html */ "./src/app/members/members.component.html"),
            styles: [__webpack_require__(/*! ./members.component.css */ "./src/app/members/members.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "./src/app/redeem-fitcoins-form/redeem-fitcoins-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/redeem-fitcoins-form/redeem-fitcoins-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/redeem-fitcoins-form/redeem-fitcoins-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/redeem-fitcoins-form/redeem-fitcoins-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \t<!-- Modal -->\n\t<div class=\"modal fade\" aria-hidden=\"true\" id=\"redeemFitCoinsShow\" role=\"dialog\">\n\t  <div class=\"modal-dialog\" role=\"document\">\n\t    <div class=\"modal-content\">\n\t      <div class=\"modal-header\">\n\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t        <h4 class=\"modal-title\" id=\"myModalLabel\">Redeem FitCoins</h4>\n\t      </div>\n\t      <div class=\"modal-body\">\n\t       <form novalidate #redeemFitCoinsForm=\"ngForm\">\n\t       \t  <input name=\"memberId\" [(ngModel)]=\"this.personId\" type=\"text\" class=\"form-control\">\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"store\">Store</label>\n\t\t\t    <select class=\"form-control\" name=\"store\" [(ngModel)]=\"this.store\" required>\n\t\t\t   \t \t<option *ngFor=\"let store of stores\" [value]=\"store.personId\">{{store.storeName}}</option>\n\t\t\t\t</select>\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"redeemedFor\">Redeeming for What</label>\n\t\t\t    <select name=\"redeemedFor\" [(ngModel)]=\"this.redeemedFor\" class=\"form-control\" id=\"redeemedFor\" required>\n\t\t\t    \t\t<option value=\"T-Shirt\">T-Shirt</option>\n\t\t\t    \t\t<option value=\"Protein Drink\">Protein Drink</option>\n\t\t\t    \t\t<option value=\"Power Bar\">Power Bar</option>\n\t\t\t    </select>\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"fitCoinsToRedeem\">Amount to Redeem</label>\n\t\t\t    <input name=\"fitCoinsToRedeem\" [(ngModel)]=\"this.fitCoinsToRedeem\" type=\"text\" class=\"form-control\" id=\"fitCoinsToRedeem\" required>\n\t\t\t  </div>\n\t\t\t</form>\n\t      </div>\n\t      <div class=\"modal-footer\">\n\t        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeForm()\">Close</button>\n\t        <button type=\"button\" class=\"btn btn-primary\" (click)=\"redeemFitCoins()\" data-dismiss=\"modal\">Redeem FitCoins</button>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</div>\n\t<!-- Modal -->\n\t\n"

/***/ }),

/***/ "./src/app/redeem-fitcoins-form/redeem-fitcoins-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/redeem-fitcoins-form/redeem-fitcoins-form.component.ts ***!
  \************************************************************************/
/*! exports provided: RedeemFitcoinsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemFitcoinsFormComponent", function() { return RedeemFitcoinsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Response } from '@angular/http';

var RedeemFitcoinsFormComponent = /** @class */ (function () {
    function RedeemFitcoinsFormComponent(http) {
        this.http = http;
        this.closeRedeemFitCoinsFormEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.apiBaseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseURL;
        this.stores = [];
        this.fitCoinBalance = 0;
    }
    RedeemFitcoinsFormComponent.prototype.getStores = function () {
        var _this = this;
        var data;
        var apiURL = this.apiBaseURL + "StoreOwner";
        try {
            this.http.get(apiURL).subscribe(function (data) {
                _this.stores = data;
            });
        }
        catch (err) {
            console.log('Error: ' + err);
        }
    };
    RedeemFitcoinsFormComponent.prototype.getFitCoinBalance = function (personId) {
        var data;
        var apiURL = this.apiBaseURL + "FitCoinWallet/" + personId;
        try {
            data = this.http.get(apiURL);
        }
        catch (err) {
            console.log('Error: ' + err);
            data = {
                "fitCoinBalance": 0
            };
        }
        return data;
    };
    RedeemFitcoinsFormComponent.prototype.ngOnChanges = function (changes) {
    };
    RedeemFitcoinsFormComponent.prototype.ngOnInit = function () {
        this.getStores();
    };
    RedeemFitcoinsFormComponent.prototype.closeForm = function () {
        this.closeRedeemFitCoinsFormEvent.emit(false);
    };
    RedeemFitcoinsFormComponent.prototype.redeemFitCoins = function (personId) {
        var _this = this;
        var apiURL = this.apiBaseURL + "RedeemFitCoins";
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var ddString = dd.toString();
        var mmString = mm.toString();
        var yyyy = today.getFullYear().toString();
        if (dd < 10) {
            ddString = '0' + dd.toString();
        }
        if (mm < 10) {
            mmString = '0' + mm.toString();
        }
        var todayFormatted = yyyy + '-' + mmString + '-' + ddString;
        var data = { member: this.personId,
            storeOwner: this.store,
            redeemedFor: this.redeemedFor,
            redeemedDate: todayFormatted,
            fitCoinQuantity: Number(this.fitCoinsToRedeem) };
        this.http.post(apiURL, data)
            .subscribe(function (res) {
            _this.getFitCoinBalance(_this.personId).subscribe(function (data) {
                _this.fitCoinBalance = Number(data.fitCoinBalance);
            }, function (error) {
                _this.fitCoinBalance = 0;
            });
            _this.closeRedeemFitCoinsFormEvent.emit(false);
        }, function (err) {
            console.log("Error Occurred" + err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RedeemFitcoinsFormComponent.prototype, "personId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RedeemFitcoinsFormComponent.prototype, "redeemFitCoinsShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RedeemFitcoinsFormComponent.prototype, "closeRedeemFitCoinsFormEvent", void 0);
    RedeemFitcoinsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redeem-fitcoins-form',
            template: __webpack_require__(/*! ./redeem-fitcoins-form.component.html */ "./src/app/redeem-fitcoins-form/redeem-fitcoins-form.component.html"),
            styles: [__webpack_require__(/*! ./redeem-fitcoins-form.component.css */ "./src/app/redeem-fitcoins-form/redeem-fitcoins-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RedeemFitcoinsFormComponent);
    return RedeemFitcoinsFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    apiBaseURL: 'http://173.193.105.238:31090/api/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ctylerus.ibm.com/eclipse-workspace/fitcoin-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map