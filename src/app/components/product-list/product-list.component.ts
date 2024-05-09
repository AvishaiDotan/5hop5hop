import { Component, OnInit } from '@angular/core';
import { Produce } from '../../models';
import { ProductsService } from '../../services/products.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
	productsService: ProductsService;


	produce!: Produce;
	constructor(productsService: ProductsService) {
		this.productsService = productsService;
	}

	ngOnInit(): void {
		this.productsService.getProduce().subscribe({
			next: (data) => {
			  this.produce = data; // Handle the data received
			},
			error: (error) => {
			  console.error('There was an error!', error);
			}
		  });
	}
}
