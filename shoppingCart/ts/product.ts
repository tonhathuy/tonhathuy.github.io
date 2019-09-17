export class Product{
	private _id: string;
	private _name: string;
	private _img: string;
	private _summary: string;
	private _price: number;
	private _canBuy: boolean;

	public get id() : string {
		return this._id;
	}
	public set id(v : string) {
		this._id = v;
	}
	public get name() : string {
		return this._name;
	}
	public set name(v : string) {
		this._name = v;
	}
	public get img() : string {
		return this._img;
	}
	public set img(v : string) {
		this._img = v;
	}
	public get summary() : string {
		return this._summary;
	}
	public set summary(v : string) {
		this._summary = v;
	}
	public get price() : number {
		return this._price;
	}
	public set price(v : number) {
		this._price = v;
	}
	public get canBuy() : boolean {
		return this._canBuy;
	}
	public set canBuy(v : boolean) {
		this._canBuy = v;
	} 
}