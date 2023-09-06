import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-add-edit-profile',
  templateUrl: './add-edit-profile.page.html',
  styleUrls: ['./add-edit-profile.page.scss'],
})
export class AddEditProfilePage implements OnInit {

  profile: any = {};
  isEditing = false;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const profileId = this.route.snapshot.paramMap.get('id');
    if (profileId) {
      this.isEditing = true;
      this.profileService.getProfileById(profileId).subscribe(res => {
        this.profile = res;
      });
    }
  }

  saveProfile() {
    if (this.isEditing) {
      console.log("EDITAR")
      this.profileService.update(this.profile.id, this.profile).subscribe(() => {
        this.navCtrl.navigateRoot('/list-perfis');
      });
    } else {
      console.log("SALVAR NOVO")
      this.profileService.create(this.profile).subscribe(() => {
        this.navCtrl.navigateRoot('/list-perfis');
      });
    }
  }

}
