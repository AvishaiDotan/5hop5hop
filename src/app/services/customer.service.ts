import { HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';
import { Observable, of, tap } from 'rxjs';
import { Customer } from '../models';

@Injectable({
	providedIn: 'root'
})
export class CustomerService {

	customer: Customer | null = null

	http: HttpService;
	localStorage: LocalStorageService;
	constructor(http: HttpService, localStorage: LocalStorageService) {
		this.http = http;
		this.localStorage = localStorage;
	}

	getCustomer(): Observable<Customer> {
		if (this.customer) {
			return of(this.customer);
		}

		return this.http.get<Customer>('customer').pipe(
			tap(customer => this.customer = customer) // 
		);
	}
}
