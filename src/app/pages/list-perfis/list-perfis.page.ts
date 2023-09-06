import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-list-perfis',
  templateUrl: './list-perfis.page.html',
  styleUrls: ['./list-perfis.page.scss'],
})
export class ListPerfisPage implements OnInit {
  profiles: any = []
 
  constructor(
    private profileService: ProfileService

  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers(){
    this.profileService.getAll().subscribe(res => {
      this.profiles = res;
      console.log(res)
    })
  }

}
