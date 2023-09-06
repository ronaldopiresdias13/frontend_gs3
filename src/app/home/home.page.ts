import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      // Caso 'user' não exista no localStorage, você pode definir um valor padrão ou realizar outra ação apropriada.
      console.error("Dados do usuário não encontrados no localStorage.");
    }
  }

  logout() {
    // Limpe quaisquer dados de sessão ou tokens de autenticação, se necessário.
    localStorage.removeItem('user');
    // Redirecione o usuário para a tela de login ou outra tela apropriada.
    this.router.navigate(['/login']); // Substitua '/login' pela rota apropriada.
  }

}
