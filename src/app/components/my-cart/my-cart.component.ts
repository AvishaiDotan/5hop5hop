import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Subscription } from 'rxjs';
import { CartItems, Customer, Item } from '../../models';
import { UserMessageService } from '../../services/user-message.service';

@Component({
    selector: 'my-cart',
    templateUrl: './my-cart.component.html',
    styleUrl: './my-cart.component.scss'
})
export class MyCartComponent implements OnInit, OnDestroy {

    customerSubscription!: Subscription;
    cart: CartItems | null = null;
    customer: Customer | null = null;
    isPayMenuOpen = false;

    constructor(private customerService: CustomerService, private userMessageService: UserMessageService) {}

    ngOnInit(): void {
        this.customerSubscription = this.customerService.customer$.subscribe({
            next: (customer) => {
                console.log(customer?.cartItems);
                console.log(this.cart);
                
                this.cart = customer?.cartItems || null;
                this.customer = customer;
            },
            error: (error) => {
                this.userMessageService.showMessage(error);
            }
        })
    }

    ngOnDestroy(): void {
        this.customerSubscription.unsubscribe();
    }

    getItemsPrice(): number {
        if (!this.cart) return 0;
        return this.cart.reduce((acc, item) => acc + item.price, 0);
    }

    addOrRemoveFromCart(payload: {item: Item, add: boolean}) {
        const {add, item} = payload;

        const updatedCustomer: Customer = {
            cartItems: add ? [...this.customer?.cartItems || [], item] : this.removeOneItemAndReturnList(item) || [],
            cash: this.customer?.cash || 0,
            imgUrl: this.customer?.imgUrl || '',
            name: this.customer?.name || ''
        }
        this.customerService.updateCustomer(updatedCustomer);
    }

    removeOneItemAndReturnList(item: Item) {
        const cart = JSON.parse(JSON.stringify(this.customer?.cartItems)) as CartItems;
        if (cart.some(i => i.id === item.id) ?? false) {
            var firstAppearanceIndex = cart.findIndex(i => i.id === item.id) ;
            if (firstAppearanceIndex !== null && firstAppearanceIndex !== -1)
                {
                    console.log("firstAppearanceIndex: " + firstAppearanceIndex);
                    cart.splice(firstAppearanceIndex, 1);
                }
            
        }
        return cart;
    }

    togglePayMenu() {
        this.isPayMenuOpen = !this.isPayMenuOpen;
    }
}
