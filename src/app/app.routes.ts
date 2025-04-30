import { Routes } from '@angular/router';
import { ShopSigninComponent } from './components/shop/shop-signin/shop-signin.component';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { MasterLayoutComponent } from './layout/master-layout.component';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { ShopProfileComponent } from './components/shop/shop-profile/shop-profile.component';

export const routes: Routes = [
    {
        path: '', component: MasterLayoutComponent
    },
    {
        path: 'shop-home', component: ShopHomeComponent
    },
    {
        path:'shop-signin',component:ShopSigninComponent
    },
    {
        path:'shop-profile',component:ShopProfileComponent
    }
];
