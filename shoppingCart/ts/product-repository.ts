import {Product} from "./product";


export class ProductPepository{
	private products: Product[] = [];

	constructor(){

	}
	public addItem(product: Product){

	}
	public getItem() : Product[]{
		console.log("hell");
		return [];
	} 
	public getItemByID(id: number) : Product{
		return new Product();
	}
	public showItemHTML(): string{
		return "ABC";
	}

}