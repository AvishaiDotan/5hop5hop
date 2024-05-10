import { Injectable } from '@angular/core';
import { Customer, Item, Produce } from '../models';
import { Observable, of, from, filter, map } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DBService {

	constructor() { }

	produce: Produce = [
		{
			id: 1,
			name: "מלפפון בייבי",
			price: 17.90,
			amount: "מארז",
			imgUrl: "https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/902157ceef795e13ebf7b418fa2c4cbd.jpg",
			category: ["ירוק", "ירק", "קטן", "סלט"],
		},
		{
			id: 2,
			name: "פלפל טינקרבל מתוק קטנטן",
			price: 17.90,
			amount: "מארז",
			imgUrl: "https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/ba6958293ce19578fcf53f902c44d13b.jpg",
			category: ["אדום", "צהוב","ירק", "קטן", "סלט"],
		},
		{
			id: 3,
			name:"אספרגוס",
			price: 34.90,
			amount: "צרור",
			imgUrl: "https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/eede6e2dca89a497e2fe9174f5218afc.jpg",
			category: ["ירוק","ירק", "מרק"],
		},
		{
			id: 4,
			name:"ברוקולי",
			price: 17.90,
			amount: "ק\"ג",
			imgUrl: "https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/dfe608c03b5e5b2d4334e0b93c3753de.jpg",
			category: ["ירוק","ירק", "מרק"],
		},
		{
			id: 5,
			name:"דלעת ספגטי",
			price: 19.90,
			amount: "ק\"ג",
			imgUrl: "https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/c8e6fe82eb1fe02841b727c7c8bdd8c4.jpg",
			category: ["כתום","ירק", "מרק"],
		},
		{
			id: 6,
			name:"דלעת ארמונים",
			price: 22.90,
			amount: "ק\"ג",
			imgUrl: "https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/df39bbb8655edbd7f922867d71beacd6.jpg",
			category: ["שחור","ירק", "מרק"],
		},
		{
			id: 7,
			name:"פלפל ירוק",
			price: 11.90,
			amount: "ק\"ג",
			imgUrl: "https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/88ccea3cb5b0d4443e8d12307038f091.jpg",
			category: ["ירוק","ירק", "סלט"],
		},
		{
			id: 8,
			name:"בצל סגול",
			price: 9.90,
			amount: "ק\"ג",
			imgUrl: "https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/f4a0ec48aa6dabf6949d1627f1d6319c.jpg",
			category: ["ירוק","ירק", "סלט"],
		},
		{
			id: 8,
			name:"פלפל שושקה אדום מתוק",
			price: 22.90,
			amount: "ק\"ג",
			imgUrl: "https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/2d6da45e63a04a27bbb1372ecea6e00d.jpg",
			category: ["אדום","ירק", "סלט"],
		},
		{
			id: 9,
			name:"תירס סוויטי ארוז",
			price: 24.90,
			amount: "מארז",
			imgUrl: "https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/2d6da45e63a04a27bbb1372ecea6e00d.jpg",
			category: ["אדום","ירק", "סלט"],
		},
		{
			id: 10,
			name:"חציל",
			price: 9.90,
			amount: "ק\"ג",
			imgUrl: "https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/45a38bcacfc0b4ff14a0a0056cc19c88.jpg",
			category: ["אדום","ירק", "סלט"],
		},
	]

	customer: Customer = {
		cartItems: [],
		cash: 1000,
		imgUrl: './assets/images/customer.png',
		name: 'גיל'
	}

	fetchProduce(): Observable<Produce> {
		return from(this.getAsPromise<Produce>(this.produce));
	}

	fetchProduceAndFilter(filterBy: string): Observable<Produce> {
		
		return from(this.getAsPromise<Produce>(this.produce)).pipe(map(items => items.filter(item => item.category.includes(filterBy))))
	}

	fetchCustomer(): Observable<Customer> {
		return from(this.getAsPromise<Customer>(this.customer));
	}

	async getAsPromise<T>(data: T): Promise<T> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				return resolve(data)
			}, this.getRandomDelay())
		})
	}

	getRandomDelay(max: number = 1000, min: number = 150): number {	
		return Math.floor(Math.random() * max) + min;
	}


}
