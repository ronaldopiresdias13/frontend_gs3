import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.page.html',
  styleUrls: ['./list-usuarios.page.scss'],
})
export class ListUsuariosPage implements OnInit {
  users: any = [];
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers(){
    this.authService.getAll().subscribe(res => {
      this.users = res;
      console.log(res)
    })
  }

}
