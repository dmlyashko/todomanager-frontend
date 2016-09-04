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
var core_1 = require("@angular/core");
var savetask_service_1 = require("./savetask.service");
var task_class_1 = require("../../classes/task.class");
var router_1 = require("@angular/router");
var SaveTaskComponent = (function () {
    function SaveTaskComponent(route, saveService) {
        this.route = route;
        this.saveService = saveService;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    SaveTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task = new task_class_1.Task();
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.saveService.getTask(id)
                    .then(function (task) { return _this.task = task; });
            }
            else {
                _this.navigated = false;
            }
        });
    };
    SaveTaskComponent.prototype.save = function () {
        var _this = this;
        this.saveService.save(this.task)
            .then(function (task) {
            _this.task = task;
            _this.goBack(task);
        });
        this.message = 'Task ' + this.task.name + ' saved';
        this.task = new task_class_1.Task();
    };
    SaveTaskComponent.prototype.goBack = function (savedTask) {
        if (savedTask === void 0) { savedTask = null; }
        this.close.emit(savedTask);
        if (this.navigated) {
            window.history.back();
        }
        ;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_class_1.Task)
    ], SaveTaskComponent.prototype, "task", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SaveTaskComponent.prototype, "close", void 0);
    SaveTaskComponent = __decorate([
        core_1.Component({
            selector: 'task-detail',
            templateUrl: 'app/components/savetask/savetask.component.html',
            providers: [savetask_service_1.SaveTaskService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, savetask_service_1.SaveTaskService])
    ], SaveTaskComponent);
    return SaveTaskComponent;
}());
exports.SaveTaskComponent = SaveTaskComponent;
//# sourceMappingURL=savetask.component.js.map