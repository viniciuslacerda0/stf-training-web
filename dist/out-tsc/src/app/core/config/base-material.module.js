import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
let BaseMaterialModule = class BaseMaterialModule {
};
BaseMaterialModule = tslib_1.__decorate([
    NgModule({
        declarations: [],
        exports: [
            MatToolbarModule,
            MatListModule,
            MatIconModule,
            MatInputModule,
            MatButtonModule
        ]
    })
], BaseMaterialModule);
export { BaseMaterialModule };
//# sourceMappingURL=base-material.module.js.map