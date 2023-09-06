import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.page.html',
  styleUrls: ['./list-usuarios.page.scss'],
})
export class ListUsuariosPage implements OnInit {
  users: any = [];
  subscription = new Subscription;
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers(){
    this.subscription = this.authService.getAll().subscribe(res => {
      this.users = res;
      console.log(res)
    })
  }

  addUser() {
    this.router.navigate(['/add-edit-user']);
  }

  editUser(userId: string) {
    this.router.navigate(['/add-edit-user', userId]);
  }

  deleteUser(userId: string) {
    this.subscription = this.authService.delete(userId).subscribe(() => {
      this.getAllUsers();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
