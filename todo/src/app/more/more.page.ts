import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(private router:Router) { }
share(){
  this.router.navigate(['/sort']);
}
  ngOnInit() {
  }

}
