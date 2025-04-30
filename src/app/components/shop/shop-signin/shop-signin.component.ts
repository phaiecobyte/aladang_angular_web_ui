import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../services/shop.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-signin',
  imports: [ReactiveFormsModule],
  template: `
    <div class="container mt-5">
      <form [formGroup]="frm" class="form shadow-lg p-3 mb-5 bg-white rounded">
        <h2 class="text-center">Sign In</h2>
        <div class="form-group mb-3">
          <label for="username">Username</label>
          <input formControlName="phone" type="text" id="username" class="form-control" placeholder="Enter your phone or email" required />
        </div>
        <div class="form-group mb-3">
          <label for="password">Password</label>
          <input formControlName="password" type="password" id="password" class="form-control" placeholder="Enter your password" required />
        </div>
        <div class="form-group mb-3">
          <label for="rememberMe">
            <input type="checkbox" id="rememberMe" /> Remember Me
          </label>
        </div>
        <button type="submit" class="btn btn-primary btn-block" (click)="onSubmit()">Sign In</button>
      </form>
    </div>
  `,
  styles: [`
    .form {
      max-width: 400px;
      margin: auto;
      padding: 20px;
      border-radius: 5px;
      background-color: #f8f9fa;
    }
  `],
  styleUrl: './shop-signin.component.scss'
})
export class ShopSigninComponent implements OnInit {
  frm!:FormGroup;
  data:any;
  constructor(private service:ShopService, private fb:FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.initFrm();
  }
  
  initFrm(){
    this.frm = this.fb.group({
      phone: [''],
      password: [''],
      usertype: ['shop'],
      ostype: [''],
    });
  }

  onSubmit(){
    this.data = this.frm.value;
    console.log(this.data);
    this.service.signIn(this.data).subscribe((res:any)=>{
      if(res.code == 200){
        alert("Login Success!");
        localStorage.setItem('token', res.data.token);
        this.router.navigate(['/shop-profile']);
      }else{
        alert("Login Failed!");
      }
      console.log(res);
    });
    this.frm.reset();
  }

}
