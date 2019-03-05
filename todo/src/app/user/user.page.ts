import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { RouteReuseStrategy, Router } from '@angular/router';
import {Userpage} from '../userpage';
import { FCM } from '@ionic-native/fcm/ngx';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
data1:any;
toke:any;
  constructor(private service:MainService,private router:Router,private fcm:FCM) {
    this.fcm.getToken().then(token => {
     this.toke=token;
    });
  //   let tok=this.service.getoken();
   
  //  if(!tok)
  //  {
  //    this.router.navigate(['/contact']);
  //  } 
   }
  
  user($contact,$name,$password1,$gender){
    if(!$contact.value || !$name.value || !$password1.value || !$gender.value || $contact.value.length!=10){
      alert("fill all fields");
    }
    else{
    this.data1=new Userpage($contact.value,$name.value,$password1.value,$gender.value,this.toke);
    this.service.user(this.data1).subscribe((res)=>{ 
      console.log(this.toke);
      this.service.setoken(this.toke);
      this.router.navigate(['./todo']);
   });
  }
}
arrow(){
  this.router.navigate(['./contact']);
}

  ngOnInit() {
  }

}
