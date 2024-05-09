import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { UserMessageService } from '../services/user-message.service';
import { ProductsService } from '../services/products.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {


	constructor(
		private customerService: CustomerService, 
		private userMessage: UserMessageService,
		private productService: ProductsService) {}

	ngOnInit(): void {
        this.loadCustomerAsync();
		this.loadProducts();	
	}

	async loadCustomerAsync() {
		try {
			let customer = await this.customerService.getCustomer();
		}
		catch (error) {
			this.userMessage.showMessage(error);
		}
	}

	async loadProducts() {
		try {
			let customer = await this.productService.getProduce();
		}
		catch (error) {
			this.userMessage.showMessage(error);
		}
	}
}
