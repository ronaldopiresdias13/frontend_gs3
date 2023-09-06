import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user: any;
  constructor(private router: Router,     private navCtrl: NavController,  
    private storage: Storage) { }

   async ngOnInit() {
    await this.getUser()
  }

  async getUser() {
    try {
      this.user = await this.storage.get('user');
      console.log(this.user);
    } catch (storageError) {
      console.log(storageError);
    }
  }
  

  async logout() {
    await this.storage.remove('user');
    this.navCtrl.navigateRoot('/login');
    
  }


}
