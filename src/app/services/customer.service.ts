import { HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject, Observable, lastValueFrom, of, tap } from 'rxjs';
import { Customer } from '../models';

@Injectable({
	providedIn: 'root'
})
export class CustomerService {

	private customerDbKey: string = "customerDb";


	private _customer$ = new BehaviorSubject<Customer | null>(null);
    public customer$ = this._customer$.asObservable();

	constructor(private http: HttpService, private localStorage: LocalStorageService) {}

	async getCustomer() : Promise<Customer>{
		try {
			let customer = this.localStorage.get<Customer>(this.customerDbKey);

			if (customer) {
				this._customer$.next(customer);
				return Promise.resolve(customer);
			}

			customer = await lastValueFrom(this.http.get<Customer>('customer'));
			if (!customer) {
				throw new Error("No customer found");
			}

			this.localStorage.set(this.customerDbKey, customer);
			this._customer$.next(customer);
			return customer;
		}
		catch (error :any) {
			return Promise.reject(error);
		}
	}

	async updateCustomer(customer: Customer) {
		try {
			this.localStorage.set(this.customerDbKey, customer);
			this._customer$.next(customer);
			return Promise.resolve();
		}
		catch (error :any) {
			return Promise.reject(error);
		}
	}

	
}
