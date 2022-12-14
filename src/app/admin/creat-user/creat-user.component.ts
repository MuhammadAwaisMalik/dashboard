import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Inter } from '../interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.css'],
})
export class CreatUserComponent implements OnInit {
  userForm: Inter = {
    id: 0,
    fullName: '',
    userName: '',
    vanueName: '',
    venueAddress: '',
    status: true,
    date: '',
    email: '',
    password: '',
    payment: '',
  };
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
  creat() {
    this.userService.creat(this.userForm).subscribe({
      next: (data) => {
        this.router.navigate(['admin/profiles']);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
