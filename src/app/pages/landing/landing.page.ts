import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

// import { RegisterPage } from '../auth/register/register.page';
// import { LoginPage } from '../auth/login/login.page';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    // private authService: AuthService,
    private router : Router,
   
  ) 
  
  { 
    this.menu.enable(false);
  }

  // ionViewWillEnter() {
  //   this.authService.getToken().then(() => {
  //     if(this.authService.isLoggedIn) {
  //       this.navCtrl.navigateRoot('/dashboard');
  //     }
  //   });
  // }

  ngOnInit() {
    
  }

  async login() {
    this.router.navigate(['login']);
  }

  async register() {    
    this.router.navigate(['registration']);
  }

  
}