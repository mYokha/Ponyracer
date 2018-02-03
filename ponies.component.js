"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PoniesComponent = /** @class */ (function () {
    function PoniesComponent() {
        this.ponies = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];
    }
    PoniesComponent.prototype.refreshPonies = function () {
        this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
    };
    PoniesComponent = __decorate([
        core_1.Component({
            selector: 'ns-ponies',
            template: "\n  <button (click)=\"refreshPonies()\">Refresh</button>\n  <ul>\n    <li\n      *ngFor=\"let pony of ponies; even as isEven\"\n      [style.color]=\"isEven ? 'green' : 'black'\"\n    >\n      {{ pony.name }}\n    </li>\n  </ul>\n  "
        })
    ], PoniesComponent);
    return PoniesComponent;
}());
exports.PoniesComponent = PoniesComponent;
//# sourceMappingURL=ponies.component.js.map