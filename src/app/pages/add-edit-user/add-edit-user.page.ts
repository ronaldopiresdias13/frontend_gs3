import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.page.html',
  styleUrls: ['./add-edit-user.page.scss'],
})
export class AddEditUserPage implements OnInit {
  user: any = {};
  isEditing = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    const profileId = this.route.snapshot.paramMap.get('id');
    if (profileId) {
      this.isEditing = true;
      this.authService.getUserById(profileId).subscribe(res => {
        this.user = res;
      });
    }
  }

  saveUser(){

  }

}
