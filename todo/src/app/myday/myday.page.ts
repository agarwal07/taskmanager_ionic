import { Component, OnInit } from '@angular/core';
import {  HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import {MainService} from '../main.service';
@Component({
  selector: 'app-myday',
  templateUrl: './myday.page.html',
  styleUrls: ['./myday.page.scss'],
})
export class MydayPage implements OnInit {

  constructor(private service:MainService,private router:Router) {
    this.router.navigate(['./todo']);
   }
  
  ngOnInit() {
  }

}
