import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.page.html',
  styleUrls: ['./add-edit-user.page.scss'],
})
export class AddEditUserPage implements OnInit {
  user: any = {};
  isEditing = false;
  profiles: any = [];
  subscription = new Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService,
    private profileService: ProfileService,
  ) { this.getAllProfiles()}

  ngOnInit() {
    const profileId = this.route.snapshot.paramMap.get('id');
    if (profileId) {
      this.isEditing = true;
      this.subscription = this.authService.getUserById(profileId).subscribe(res => {
        this.user = res;
      });
    }
  }

  saveUser(){
    if (this.isEditing) {
      console.log("EDITAR")
      this.subscription = this.authService.update(this.user.id, this.user).subscribe(() => {
        this.navCtrl.navigateRoot('/list-usuarios');
      });
    } else {
      console.log("SALVAR NOVO")
      this.subscription = this.authService.create(this.user).subscribe(() => {
        this.navCtrl.navigateRoot('/list-usuarios');
      });
    }
  }

  getAllProfiles() {
    this.subscription.unsubscribe();
    this.subscription = this.subscription = this.profileService.getAll().subscribe(res => {
      this.profiles = res;
      console.log(res)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
