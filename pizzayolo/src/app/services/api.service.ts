import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiHost = 'http://localhost:3000/';


  loggedIn: any = false;

  constructor(private http: HttpClient, private location: Location, private router: Router) { }


  registerUser(user) {
    this.http.post('http://localhost:3000/register', user).subscribe(res => {
      console.log(res);
    })
  }
  getUserDetails() {
    //va envoyer les donnée de l'utilisateur en api vers le back

  }

  loginUser(user) {
    this.http.post('http://localhost:3000/login', user).subscribe(res => {
      console.log(res);
      this.loggedIn = res;
      // console.log(this.loggedIn)
      if (res === true) {
        console.log("oka")
      }
      // window.location.NavigateTo("/");
      this.router.navigate(['homePage'])
      return res;
      // console.log(this.dragon)
    })
    console.log(this.loggedIn + "ok")
  }

  isLogged() {
    return this.loggedIn

  }

}
