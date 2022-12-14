"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmployeeService = void 0;
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = 'https://localhost:7001/api/employees/';
    }
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.post(this.url + "new", employee);
    };
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.url);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get(this.url + id);
    };
    EmployeeService.prototype.editEmployee = function (id, employee) {
        return this.http.put(this.url + id, employee);
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http["delete"](this.url + id);
    };
    EmployeeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
