import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {UserService} from "../user.service";
import {HttpClientModule} from "@angular/common/http";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Token, User} from "../user";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.sass'
})
export class UserLoginComponent {
  loginUserName: FormControl = new FormControl('')
  loginUserPassword: FormControl = new FormControl('')

  registerUserName: FormControl = new FormControl('')
  registerUserSurname: FormControl = new FormControl('')
  registerUserEmail: FormControl = new FormControl('')
  registerUserPassword: FormControl = new FormControl('')
  registerUserAddress: FormControl = new FormControl('')
  registerUserAddressNumber: FormControl = new FormControl('')
  registerUserZipCode: FormControl = new FormControl('')
  registerUserTelephoneNumber: FormControl = new FormControl('')

  constructor(private router: Router, private userService: UserService, private cookieService: CookieService) { }

  registerUser() {
    let user: User = {
      name: this.registerUserName.value,
      surname: this.registerUserSurname.value,
      email: this.registerUserEmail.value,
      password: this.registerUserPassword.value,
      address: this.registerUserAddress.value,
      addressNumber: this.registerUserAddressNumber.value,
      zipCode: this.registerUserZipCode.value,
      telephoneNumber: this.registerUserTelephoneNumber.value,
      isAdmin: false,
    }
    this.userService.registerUser(user).subscribe(token => {
      this.cookieService.set("accessToken", token.token)
      this.manageAccess(token)
    })
  }

  login() {
    this.userService.loginUser({
      email: this.loginUserName.value,
      password: this.loginUserPassword.value,
    }).subscribe(token => {
      this.cookieService.set("accessToken", token.token)
      this.manageAccess(token)
    })
  }

  manageAccess(token: Token) {
    this.userService.getUserDetails(token.token).subscribe(user => {
      if(user.isAdmin){
        this.router.navigate(["/supplier-account"])
      } else {
        this.router.navigate(["/customer-account"])
      }
    })
  }
}
