import {Product} from "./product";

export class CartItem{
	private product: Product;
	private quantity: number;

	constructor (product: Product, quantity: number = 1){

	}
	public showCartItemInHTML(): string{
		return "123";
	}
	public getSubtotal() : number{
		return 123;
	}
}