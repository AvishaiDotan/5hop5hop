import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable, of, tap } from 'rxjs';
import { HttpService } from './http.service';
import { Produce } from '../models';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	produce: Produce | null = null;

	http: HttpService;
	localStorage: LocalStorageService;
	constructor(http: HttpService, localStorage: LocalStorageService) {
		this.http = http;
		this.localStorage = localStorage;
	}

	getProduce(): Observable<Produce> {
		if (this.produce) {
			return of(this.produce);
		}
		return this.http.get<Produce>('produce').pipe(tap(produce => this.produce = produce));
	}
}
