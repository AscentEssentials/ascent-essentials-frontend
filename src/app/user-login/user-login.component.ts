import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {UserService} from "../user.service";
import {HttpClientModule} from "@angular/common/http";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {User} from "../user";
import {Router} from "@angular/router";
import {PermissionService} from "../permission.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  providers: [UserService, PermissionService],
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

  constructor(private router: Router, private userService: UserService, private permissionService: PermissionService, private snackBar: MatSnackBar) { }

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
      this.userService.getUserDetails(token.token).subscribe(user => {
        this.permissionService.registerPermission(token, user.isAdmin)
        this.router.navigate(["/user/account"]).then(_ => {
          window.location.reload()
        })
      })
    })
  }

  login() {
    this.userService.loginUser({
      email: this.loginUserName.value,
      password: this.loginUserPassword.value,
    }).subscribe(token => {
      this.userService.getUserDetails(token.token).subscribe(user => {
        this.permissionService.registerPermission(token, user.isAdmin)
        this.router.navigate(["/user/account"]).then(_ => {
          window.location.reload()
        })
      })
    }, _ => {
      this.snackBar.open("Error! Wrong credentials!", 'Close', {
        duration: 5000,
        verticalPosition: 'bottom',
        panelClass: ['custom-snackbar']
      })
    })
  }
}
