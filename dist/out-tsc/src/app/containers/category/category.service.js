import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
    }
    getCategoryList() {
        return this.http.get('http://localhost:9090/categorias');
    }
    postCategory(category) {
        return this.http.post('http://localhost:9090/categorias', category);
    }
};
CategoryService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map