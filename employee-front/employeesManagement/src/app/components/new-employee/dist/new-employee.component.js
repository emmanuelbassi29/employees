"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewEmployeeComponent = void 0;
var core_1 = require("@angular/core");
var NewEmployeeComponent = /** @class */ (function () {
    function NewEmployeeComponent(fb, employeeService, router) {
        this.fb = fb;
        this.employeeService = employeeService;
        this.router = router;
        this.newFormEmployee = this.fb.group({
            name: [''],
            email: [''],
            phone: [0],
            salary: [0],
            department: ['']
        });
    }
    NewEmployeeComponent.prototype.ngOnInit = function () {
    };
    NewEmployeeComponent.prototype.addEmployee = function () {
        var _this = this;
        console.log(this.newFormEmployee.value);
        this.employeeService.addEmployee(this.newFormEmployee.value).subscribe(function (employee) {
            _this.router.navigate(['/']);
        });
    };
    NewEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-new-employee',
            templateUrl: './new-employee.component.html',
            styleUrls: ['./new-employee.component.scss']
        })
    ], NewEmployeeComponent);
    return NewEmployeeComponent;
}());
exports.NewEmployeeComponent = NewEmployeeComponent;
