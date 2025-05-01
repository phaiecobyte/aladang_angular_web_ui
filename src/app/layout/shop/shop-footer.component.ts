import { Component } from "@angular/core";

@Component({
    selector: 'app-shop-footer',
    template:`
    `,
    styles: []
})

export class ShopFooterComponent {
    constructor() { }
    ngOnInit() {
        console.log('Shop Navbar Component Initialized');
    }
    ngOnDestroy() {
        console.log('Shop Navbar Component Destroyed');
    }
}