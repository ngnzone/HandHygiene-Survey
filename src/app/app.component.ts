import { Component, Inject, ViewChild } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth'; 
import { Platform, NavController, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { rootRenderNodes } from '@angular/core/src/view';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html', 
  styleUrls: ['app.component.scss']
})
export class AppComponent { 
  @ViewChild('myNav')nav: NavController
  public rootPage:string = 'LoginPage';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private angularFireAuth: AngularFireAuth
  ) {
    //  this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.angularFireAuth.onAuthStateChanged(function(user)
      {
        if(user){
          this.rootPage = 'HomePage';
        }
        else{
          this.rootPage = 'LoginPage';

        }

      });
    });

   

  }
}
