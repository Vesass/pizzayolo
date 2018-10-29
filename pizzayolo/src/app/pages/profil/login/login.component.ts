import { Component, OnInit } from '@angular/core';

import { Validators, FormControl } from '@angular/forms';
import { ApiService } from './../../../services/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onLogin(user) {
    this.apiService.loginUser(user);
    console.log(user)
  }
  isLogged() {
    console.log("dragon")
    this.apiService.isLogged().subscribe((reponse) => {
      //  console.log(reponse);
    });
  }
}
