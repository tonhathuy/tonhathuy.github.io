"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get img() {
        return this._img;
    }
    set img(v) {
        this._img = v;
    }
    get summary() {
        return this._summary;
    }
    set summary(v) {
        this._summary = v;
    }
    get price() {
        return this._price;
    }
    set price(v) {
        this._price = v;
    }
    get canBuy() {
        return this._canBuy;
    }
    set canBuy(v) {
        this._canBuy = v;
    }
}
exports.Product = Product;
