import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopLayoutComponent } from './layout/shop/shop-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ShopLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alandang_angular_web_ui';
}
