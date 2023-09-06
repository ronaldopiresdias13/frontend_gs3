import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user: any;

  constructor() {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      // Caso 'user' não exista no localStorage, você pode definir um valor padrão ou realizar outra ação apropriada.
      console.error("Dados do usuário não encontrados no localStorage.");
    }
  }

}
