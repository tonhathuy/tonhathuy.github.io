"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
class ProductPepository {
    constructor() {
        this.products = [];
    }
    addItem(product) {
    }
    getItem() {
        console.log("hell");
        return [];
    }
    getItemByID(id) {
        return new product_1.Product();
    }
    showItemHTML() {
        return "ABC";
    }
}
exports.ProductPepository = ProductPepository;
