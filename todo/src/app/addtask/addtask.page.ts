import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import { Router } from '@angular/router';
import {Addclass} from '../addclass';
import { Titletask } from '../titletask';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.page.html',
  styleUrls: ['./addtask.page.scss'],
})
export class AddtaskPage implements OnInit {
data1:any;
title:any;
  constructor(private service:MainService,private router:Router) {
    this.title="";
   }
  task($second){
    if(!$second.value)
    {
      alert('not entered any task');
    }
    else{
    let data=new Titletask(this.title,$second.value);
    this.service.task(data);
  }
}
  ngOnInit() {
  }

}
