import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Subscription } from 'rxjs';
import { CartItems } from '../../models';
import { UserMessageService } from '../../services/user-message.service';

@Component({
    selector: 'my-cart',
    templateUrl: './my-cart.component.html',
    styleUrl: './my-cart.component.scss'
})
export class MyCartComponent implements OnInit, OnDestroy {

    customerSubscription!: Subscription;
    cart: CartItems | null = null;


    constructor(private customerService: CustomerService, private userMessageService: UserMessageService) {}

    ngOnInit(): void {
        this.customerSubscription = this.customerService.customer$.subscribe({
            next: (customer) => {
                this.cart = customer?.cartItems || null;
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
}
