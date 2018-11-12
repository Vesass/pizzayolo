import { Component, OnInit } from '@angular/core';

import { Validators, FormControl } from '@angular/forms';
import { ApiService } from './../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnURL: string;

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);


  getErrorMessage() {
    return this.email.hasError('required') ? 'Vous devez entrer une valeur' :
      this.email.hasError('email') ? 'E-mail non valide' :
        '';
  }

  constructor(private apiService: ApiService, private router: Router, private location: ActivatedRoute) { }

  ngOnInit() {
  }

  onLogin(user) {
    this.apiService.loginUser(user);
    console.log(user)

    this.apiService.isLogged()
    this.isLoggedIn(user)



    // this.location.replaceState('/'); // clears browser history so they can't navigate with back button
    //           this.router.navigate(['LoggedoutPage']);


  }
  isLoggedIn(user) {
    this.apiService.isLogged()
    // setTimeout(this.apiService.isLogged(), 5000);
    if (this.apiService.isLogged()) {
      console.log("ok")
      // this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      // this.router.navigate(['LoggedoutPage']);
      // window.location.replace("/");


    }
    // this.router.navigateByUrl(this.returnURL)


  }

  // isLogged(user) {
  //   console.log("dragon")
  //   this.apiService.isLogged(user)
  // }
}
