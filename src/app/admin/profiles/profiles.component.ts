import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Inter } from '../interface';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
})
export class ProfilesComponent implements OnInit {
  allUsers: Inter[] = [];
  constructor(private userServices: UserService) {}

  idtodel: number = 0;
  ngOnInit(): void {
    this.get();
  }
  get() {
    this.userServices.get().subscribe((data) => {
      this.allUsers = data;
    });
  }
  opendeleteMOdal(id: number) {
    this.idtodel = id;
  }
  delete() {
    this.userServices.delete(this.idtodel).subscribe((data) => {
      this.allUsers = this.allUsers.filter((_) => _.id !== this.idtodel);
    });
  }
}
