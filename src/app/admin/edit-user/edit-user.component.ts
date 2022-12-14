import { Inter } from './../interface';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
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
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getbyid(id);
    });
  }
  getbyid(id: number) {
    this.userService.getbyid(id).subscribe((data) => {
      this.userForm = data;
    });
  }
  update() {
    this.userService.update(this.userForm).subscribe({
      next: (data) => {
        this.router.navigate(['admin/profiles']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
