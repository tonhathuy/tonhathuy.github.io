import {Product} from "./product";
import {CartItem} from "./cart-item";

export class Cart{
	private cartItem: CartItem[] = []; 
	public addProduct(product: Product, quantity: number = 1): void{

	}
	public updateProduct(product: Product, quantity: number = 1): void{

	}
	public removeProduct(product: Product): void{

	}
	public isEmpty(): boolean{
		return true;
	}
	public getTotalQuantity(): number{
		return 20;
	}
	public getTotalPrice(): number{
		return 20;
	}
	public showCartBodyInHTML(): string{
		return "abs";
	}
	public showCartFooterInHTML(): string{
		return "abs";
	} 

}