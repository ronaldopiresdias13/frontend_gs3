import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.page.html',
  styleUrls: ['./meu-perfil.page.scss'],
})
export class MeuPerfilPage implements OnInit {
  user: any = {};
  subscription = new Subscription;

  constructor(
    private storage: Storage,
    private authService: AuthService,
    private alertController: AlertController
  ) { }

  async ngOnInit() {
    this.user = await this.storage.get('user')
  }

  updatePerfil(){
    console.log(this.user)
    this.subscription = this.authService.update(this.user.id, this.user).subscribe(() => {
      this.storage.set('user', this.user)
      // this.navCtrl.navigateRoot('/list-usuarios');
      this.presentAlert('Dados Atualizados com sucesso', 'Sucesso')
    });
  }

  async presentAlert(message: string, title: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
