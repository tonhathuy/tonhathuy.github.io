"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this.cartItem = [];
    }
    addProduct(product, quantity = 1) {
    }
    updateProduct(product, quantity = 1) {
    }
    removeProduct(product) {
    }
    isEmpty() {
        return true;
    }
    getTotalQuantity() {
        return 20;
    }
    getTotalPrice() {
        return 20;
    }
    showCartBodyInHTML() {
        return "abs";
    }
    showCartFooterInHTML() {
        return "abs";
    }
}
exports.Cart = Cart;
