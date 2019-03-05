import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import { Router } from '@angular/router';
import { getInjectionTokens } from '@angular/core/src/render3/discovery_utils';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Contactpage} from '../contactpage';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
data:any;
name:any;
  constructor(private service:MainService,private router:Router,private fcm:FCM) 
  
  {
    localStorage.clear();
    this.fcm.getToken().then(token => {
     this.temptoken=token;
    });
  }
  
temptoken:any;
  goto($contact){
    if(!$contact.value || $contact.value.length!=10){
      alert("contact is required");
    }
    else{
    this.data= new Contactpage($contact.value);
    this.service.goto(this.data).subscribe((res)=>{ 
      // console.log(res[0].contact);
      if($contact.value==res[0].contact)
      {
      console.log(this.temptoken);
        this.service.setoken(this.temptoken);
      this.router.navigate(['./todo']);
      }
   },
   
   ()=>{
     console.log("user data checks out");
   }
   );

  }
}
details(){
  this.router.navigate(['/user']);
}
   
  ngOnInit() {
  }

  

}
