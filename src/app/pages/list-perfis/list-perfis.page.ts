import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-list-perfis',
  templateUrl: './list-perfis.page.html',
  styleUrls: ['./list-perfis.page.scss'],
})
export class ListPerfisPage implements OnInit {
  profiles: any = []
  subscription = new Subscription;
  constructor(
    private profileService: ProfileService,
    private router: Router

  ) { this.getAllProfiles() }

  ngOnInit() {

  }

  getAllProfiles() {
    this.subscription.unsubscribe();
    this.subscription = this.profileService.getAll().subscribe(res => {
      this.profiles = res;
      console.log(res)
    })
  }

  addProfile() {
    this.router.navigate(['/add-edit-profile']);
  }

  editProfile(profileId: string) {
    this.router.navigate(['/add-edit-profile', profileId]);
  }

  deleteProfile(profileId: string) {
    this.subscription = this.profileService.delete(profileId).subscribe(() => {
      this.getAllProfiles();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
