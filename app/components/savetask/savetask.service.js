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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/operator/toPromise');
var SaveTaskService = (function () {
    function SaveTaskService(http) {
        this.http = http;
        this.taskUrl = 'app/todayTasks';
    }
    SaveTaskService.prototype.getTask = function (id) {
        return this.getTasks().then(function (tasks) { return tasks.find(function (task) { return task.id === id; }); });
    };
    SaveTaskService.prototype.getTasks = function () {
        return this.http.get(this.taskUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SaveTaskService.prototype.save = function (task) {
        if (task.id) {
            return this.put(task);
        }
        return this.post(task);
    };
    SaveTaskService.prototype.post = function (task) {
        var headers = new http_1.Headers({
            'Content-type': 'application/json'
        });
        return this.http
            .post(this.taskUrl, JSON.stringify(task), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SaveTaskService.prototype.put = function (task) {
        var headers = new http_1.Headers({
            'Content-type': 'application/json'
        });
        var url = this.taskUrl + '/' + task.id;
        return this.http
            .put(url, JSON.stringify(task), { headers: headers })
            .toPromise()
            .then(function () { return task; })
            .catch(this.handleError);
    };
    SaveTaskService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    SaveTaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SaveTaskService);
    return SaveTaskService;
}());
exports.SaveTaskService = SaveTaskService;
//# sourceMappingURL=savetask.service.js.map