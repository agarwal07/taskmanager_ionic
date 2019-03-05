import { Injectable } from '@angular/core';
import { getInjectionTokens } from '@angular/core/src/render3/discovery_utils';
import {  HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {Userpage} from './userpage';
import { from, Observable } from 'rxjs';
import { Remindersetclass } from './remindersetclass';
import { Addclass } from './addclass';
import{Titletask} from './titletask';
import {Contactpage} from './contactpage';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url="http://192.168.137.1:3000";
  data1:any;
  dataofany:any;
  dataoftitle:any;
  title:any;

  constructor(private http: HttpClient,private router:Router) { 
    
  }


  //contact page
//   goto(data){
//     console.log(data);
//     let params:HttpParams=new HttpParams().set('contact',data);
//     return this.http.get(this.url+'/login',{params}).subscribe(res=>{ 
//       console.log(res);
//       this.router.navigate(['./user']);
     
//   });
// }

goto(data:Contactpage)
{
  
  return this.http.post(this.url+'/login',data);
}

//user register
user(data1:Userpage)
{
  
    console.log(data1);
   return this.http.post(this.url+'/info',data1);
   }
setoken(d){
  localStorage.setItem('x-token',d);
}
getoken(){
  return localStorage.getItem('x-token');
}


//get data
data(token){
  let params:HttpParams=new HttpParams().set('tokens',token);
  return this.http.get(this.url+'/dataretrive',{params});
}

//set reminder
set(data:Remindersetclass){
  console.log(data);
  return this.http.post(this.url+'/reminder',data).subscribe(res=>{ 
    console.log(res);
    this.router.navigate(['./reminder']);
 });
}

//add task
task(data1:Titletask){
  
  console.log(data1);
  return this.http.post(this.url+'/addtask',data1).subscribe(res=>{ 
    console.log(res);
    
    this.router.navigate(['./todo']);
 });
}

//create a new list 
search(){
  return this.http.get(this.url+'/search');
}
search1(){
  return this.http.get(this.url+'/search1');
}
//new list
 create(data){
  console.log(data);
  this.title=data;
    
    this.router.navigate(['./todo']);

 }
//send title todo page
send(data){
  this.title=data;
  this.router.navigate(['./addtask']);
}
search2(){
  return this.http.get(this.url+'/search2');
}

}

