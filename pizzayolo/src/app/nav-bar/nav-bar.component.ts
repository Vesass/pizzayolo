import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from './../services/api.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {



  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log(this.apiService.loggedIn);


  }
}


