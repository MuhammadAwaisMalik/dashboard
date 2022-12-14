import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { FormsModule } from '@angular/forms';
import { SuperAdminComponent } from './super-admin/super-admin.component';
// import {
//   NgbAlertModule,
//   NgbPaginationModule,
// } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfilesComponent,

    EditUserComponent,
    CreatUserComponent,
    SuperAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    // NgbPaginationModule,
    // NgbAlertModule,
  ],
})
export class AdminModule {}
