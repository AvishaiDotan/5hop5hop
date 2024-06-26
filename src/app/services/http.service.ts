import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DBService } from './db.service';
import { Observable } from 'rxjs';
import { Produce } from '../models';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	http: HttpClient;
	dbService: DBService;
	baseUrl = 'https://fakestoreapi.com/';
	constructor(http: HttpClient, dbService: DBService) {
		this.http = http;
		this.dbService = dbService;
	}

	get<T>(url: string): Observable<T> {
		let data: Observable<any>;
		switch (url) {
			case 'produce':
				data = this.dbService.fetchProduce()
				break
			case "customer":
				data = this.dbService.fetchCustomer()
				break
			default:
				throw new Error('Invalid URL');
		}
		return data as Observable<T>;
	}

	post(url: string, data: any = null): any {
		// return this.http.post(`${this.baseUrl}${url}`, data);
		if (url.startsWith('produce&filter=')) {
			const filter = url.split('=')[1];
			const res = this.dbService.fetchProduceAndFilter(filter)
			return res as Observable<Produce>;
		}
	}

	put(url: string, data: any) {
		return this.http.put(`${this.baseUrl}${url}`, data);
	}

	delete(url: string) {
		return this.http.delete(`${this.baseUrl}${url}`);
	}
}
