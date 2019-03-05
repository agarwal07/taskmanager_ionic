import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {
data1:any;
  constructor(private router:Router,private service:MainService) { 
    // this.service.search2().subscribe(res=>{
    //   console.log(res);
    //   this.data1=res;
    //   });
  }
ionViewDidEnter(){
  this.service.search2().subscribe(res=>{
    console.log(res);
    this.data1=res;
    });
}
  ngOnInit() {
  }

}
