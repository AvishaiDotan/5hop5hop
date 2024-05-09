import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { IconModule } from '@ant-design/icons-angular';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { AppComponent } from './root-app/app.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { StoreComponent } from './components/store/store.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { FilterSideBarComponent } from './components/filter-side-bar/filter-side-bar.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { BuyButtonComponent } from './components/buttons/buy-button/buy-button.component';
import { RouterLink } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ProductListComponent,
    StoreComponent,
    MainViewComponent,
    MyCartComponent,
    FilterSideBarComponent,
    ItemListComponent,
    BuyButtonComponent,
    ItemComponent,
    ProductComponent
  ],
  imports: [
    // RouterLink
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    IconModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [provideClientHydration(), AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
