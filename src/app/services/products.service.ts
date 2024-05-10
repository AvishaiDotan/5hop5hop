import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject, Observable, lastValueFrom, of, tap } from 'rxjs';
import { HttpService } from './http.service';
import { Produce } from '../models';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	private produceDbKey: string = "produceDb";

	private _produce$ = new BehaviorSubject<Produce | null>(null);
	public produce$ = this._produce$.asObservable();


	constructor(private http: HttpService, private localStorage: LocalStorageService) {
		this.http = http;
		this.localStorage = localStorage;
	}

	async getProduce(): Promise<Produce> {
		try {
			let produce = this.localStorage.get<Produce>('produceDbKey');

			if (produce) {
				this._produce$.next(produce);
				return Promise.resolve(produce);
			}

			produce = await lastValueFrom(this.http.get<Produce>('produce'));
			if (!produce) {
				throw new Error("No produce found");
			}

			this.localStorage.set(this.produceDbKey, produce);
			this._produce$.next(produce);
			return Promise.resolve(produce);
		}
		catch (error: any) {
			return Promise.reject(error);
		}
	}

	async filterProduce(filter: string): Promise<Produce> {
		try {
			const produce = await lastValueFrom(this.http.post(`produce&filter=${filter}`)) as Produce;
			if (!produce) {
				throw new Error("No produce found");
			}
			this._produce$.next(produce);
			return Promise.resolve(produce);
		}
		catch (error: any) {
			return Promise.reject(error);
		}
	}
}
