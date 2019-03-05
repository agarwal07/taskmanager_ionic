import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.page.html',
  styleUrls: ['./new-list.page.scss'],
})
export class NewListPage implements OnInit {
data:any;
  constructor(private service:MainService,private router:Router) { }
create($title){
  if($title.value ){
    alert("title is added");
  }
  else{
this.data=$title.value;
this.service.create(this.data);
}
}
//  this.service.search(this.data);

  ngOnInit() {
  
  }

}
