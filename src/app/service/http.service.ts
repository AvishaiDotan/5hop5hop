import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	http: HttpClient;
	baseUrl = 'https://fakestoreapi.com/';
	constructor(http: HttpClient) {
		this.http = http;
	}

	get(url: string) {
		return this.http.get(`${this.baseUrl}${url}`);
	}

	post(url: string, data: any) {
		return this.http.post(`${this.baseUrl}${url}`, data);
	}

	put(url: string, data: any) {
		return this.http.put(`${this.baseUrl}${url}`, data);
	}

	delete(url: string) {
		return this.http.delete(`${this.baseUrl}${url}`);
	}
}
