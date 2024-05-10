import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrl: './filter-side-bar.component.scss'
})
export class FilterSideBarComponent {

	constructor(private productsService: ProductsService) { }

	filters: string[] = [
		"ירוק", 
		"ירק", 
		"קטן", 
		"סלט",
		"אדום", 
		"צהוב",
		"מרק",
		"כתום",
		"שחור",
		"אדום"
	]

	async onFilterProduce(filter: string) {
		await this.productsService.filterProduce(filter);
	}
}
