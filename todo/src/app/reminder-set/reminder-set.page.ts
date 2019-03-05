import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import { Remindersetclass } from '../remindersetclass';

@Component({
  selector: 'app-reminder-set',
  templateUrl: './reminder-set.page.html',
  styleUrls: ['./reminder-set.page.scss'],
})
export class ReminderSetPage implements OnInit {
data:any;
  constructor(private service:MainService) { }
set($title,$date,$time){
let data=new Remindersetclass($title.value,$date.value,$time.value);
this.service.set(data);
}
  ngOnInit() {
  }

}
