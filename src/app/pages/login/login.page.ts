import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  mostrarSenha = false;
  constructor(private navCtrl: NavController,  
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,) {}

    login() {
      this.authService.login(this.form.value).subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['/home'] || '/';
          console.log("login bem sucedido")
          this.router.navigateByUrl(returnUrl);
        },
        error: (error: any) => {
          console.log("error", error)
        }
      })
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

}
