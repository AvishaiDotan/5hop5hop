import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UserMessageService {

	constructor() { }

	showMessage(message: any) {
		alert(message);
	}
}
