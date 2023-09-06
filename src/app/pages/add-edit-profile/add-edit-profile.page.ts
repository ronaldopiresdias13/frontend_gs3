import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-add-edit-profile',
  templateUrl: './add-edit-profile.page.html',
  styleUrls: ['./add-edit-profile.page.scss'],
})
export class AddEditProfilePage implements OnInit {

  profile: any = {};
  isEditing = false;
  subscription = new Subscription;

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
      this.subscription = this.profileService.getProfileById(profileId).subscribe(res => {
        this.profile = res;
      });
    }
  }

  saveProfile() {
    if (this.isEditing) {
      console.log("EDITAR")
      this.subscription = this.profileService.update(this.profile.id, this.profile).subscribe(() => {
        this.navCtrl.navigateRoot('/list-perfis');
      });
    } else {
      console.log("SALVAR NOVO")
      this.subscription = this.profileService.create(this.profile).subscribe(() => {
        this.navCtrl.navigateRoot('/list-perfis');
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
