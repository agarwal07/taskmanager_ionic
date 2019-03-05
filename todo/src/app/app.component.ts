import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {MainService} from './main.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'My Day',
      url: '/myday',
      icon: 'sunny'
    },
    {
      title: 'Importance',
      url: '/important',
      icon: 'star-outline'
    },
    {
      title: 'Task',
      url: '/addtask',
      icon: 'checkmark-circle'
    },
    {
      title: 'Reminder',
      url: '/reminder',
      icon: 'stopwatch'
    },
    {
      title: 'Basic Details',
      url: '/basicdetails',
      icon: 'list'
    },
    {
      title: 'New List',
      url: '/newlist',
      icon: 'add'
    },
    {
      title: 'Log Out',
      url: '/contact',
      icon: 'arrow-round-back'
    },
    {
      title: 'geolocation',
      url: '/googlemap',
      icon: 'arrow-round-back'
    }

    
  ];
 data:any;
 name:any;
 contact:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private service: MainService
  ) {
    
  }
  ngAfterViewInit(){
    this.initializeApp();
    let token=this.service.getoken();
    this.service.data(token).subscribe(res=>{
      this.data=res[0];
      this.contact=this.data.contact;
      this.name=this.data.name;
       
    });
  }
  



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
