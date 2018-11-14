import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from './../services/api.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {



  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    console.log(this.apiService.loggedIn);



  }

  onLogout(e) {
    e.preventDefault();
    this.apiService.logout();
    console.log('on logout')
    this.router.navigateByUrl("/")

  }
}


