import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { RouteReuseStrategy, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
data:any;
data1:any;
color1="#B00020";
  constructor(private service:MainService,private router:Router,public actionSheetController: ActionSheetController) {
  
      
  
  }
  ionViewDidEnter(){
    let tok=this.service.getoken();
   
    if(!tok)
    {
     this.router.navigate(['/contact']);
    }   
   
   
   this.service.search1().subscribe(res=>{
        console.log(res);
        this.data1=res;
        });
  }
  // time:Date=new Date();
  today: number = Date.now();
  send(title){
this.service.send(title);
  }
       sort(){
         this.router.navigate(['/more']);
       }



       async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
          header: 'Add Task',
          buttons: [ ]
        });
        await actionSheet.present();
      }

      async taskActionSheet() {
        const actionSheet = await this.actionSheetController.create({
          header: 'Completed Task',
          buttons: [ ]
        });
        await actionSheet.present();
      }
  ngOnInit() {
    
  }

}
