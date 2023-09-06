import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Subscription, first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  mostrarSenha = false;
  subscription = new Subscription;
  constructor(
    private navCtrl: NavController,  
    private router: Router,  
    private authService: AuthService,
    private fb: FormBuilder,
    private alertController: AlertController,
    private storage: Storage
    ) {}


    async login() {
      this.subscription = this.authService.login(this.form.value).subscribe(
        async (res: any) => {
          await this.storage.remove('user')
          await this.storage.set('user', res); // Espera a conclusão da operação de armazenamento
          this.navCtrl.navigateRoot('/home');
        },
        (error: any) => {
          this.presentAlert('Erro ao fazer login', "erro");
          return;
        }
      );
    }
    

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  changeMostrarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  async presentAlert(message: string, title: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
