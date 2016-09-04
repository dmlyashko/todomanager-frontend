"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var today_service_1 = require("./today.service");
var TodayComponent = (function () {
    function TodayComponent(todayService) {
        this.todayService = todayService;
    }
    TodayComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TodayComponent.prototype.getTasks = function () {
        var _this = this;
        this.todayService.getTasks()
            .subscribe(function (tasks) { return _this.tasks = tasks; }, function (error) { return _this.errorMessage = error; });
    };
    TodayComponent.prototype.onSelect = function (task) { this.selectedTask = task; };
    TodayComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/components/today/today.component.html',
            selector: 'scheduled'
        }), 
        __metadata('design:paramtypes', [today_service_1.TodayService])
    ], TodayComponent);
    return TodayComponent;
}());
exports.TodayComponent = TodayComponent;
//# sourceMappingURL=today.component.js.map