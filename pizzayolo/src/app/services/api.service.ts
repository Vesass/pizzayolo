import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiHost = 'http://localhost:3000/';

  response;
  loggedIn: any = false;

  constructor(private http: HttpClient) { }


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
      return res;
      // console.log(this.dragon)
    })
    console.log(this.loggedIn + "ok")
  }

  isLogged() {
    return this.loggedIn


  }


}
