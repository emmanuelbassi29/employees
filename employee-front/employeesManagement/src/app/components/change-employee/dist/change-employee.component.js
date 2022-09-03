"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChangeEmployeeComponent = void 0;
var core_1 = require("@angular/core");
var ChangeEmployeeComponent = /** @class */ (function () {
    function ChangeEmployeeComponent(fb, route, employeeService, router) {
        this.fb = fb;
        this.route = route;
        this.employeeService = employeeService;
        this.router = router;
        this.editFormEmployee = this.fb.group({
            id: [''],
            name: [''],
            email: [''],
            phone: [0],
            salary: [0],
            department: ['']
        });
        this.employeeDetails = {
            id: "",
            name: "",
            email: "",
            phone: 0,
            salary: 0,
            department: ""
        };
    }
    ChangeEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe({
            next: function (params) {
                var Id = params.get('id');
                if (Id) {
                    _this.employeeService.getEmployee(Id).subscribe(function (employee) {
                        _this.employeeDetails = employee;
                    });
                }
            }
        });
    };
    ChangeEmployeeComponent.prototype.editEmployee = function () {
        var _this = this;
        this.editFormEmployee.patchValue({
            id: this.employeeDetails.id
        });
        this.employeeService.editEmployee(this.employeeDetails.id, this.editFormEmployee.value).subscribe(function (employee) {
            _this.router.navigate(['/']);
        });
    };
    ChangeEmployeeComponent.prototype.deleteEmployee = function () {
        var _this = this;
        this.employeeService.deleteEmployee(this.employeeDetails.id).subscribe(function (employee) {
            _this.router.navigate(['/']);
        });
    };
    ChangeEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-change-employee',
            templateUrl: './change-employee.component.html',
            styleUrls: ['./change-employee.component.scss']
        })
    ], ChangeEmployeeComponent);
    return ChangeEmployeeComponent;
}());
exports.ChangeEmployeeComponent = ChangeEmployeeComponent;
