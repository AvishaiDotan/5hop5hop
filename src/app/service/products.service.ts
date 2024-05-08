import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	http: HttpService;
	localStorage: LocalStorageService;
	constructor(http: HttpService, localStorage: LocalStorageService) {
		this.http = http;
		this.localStorage = localStorage;
	}

	getProducts(): Observable<any> {
		return this.http.get('products');
	}
}
