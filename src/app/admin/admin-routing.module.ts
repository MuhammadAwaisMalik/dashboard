import { SuperAdminComponent } from './super-admin/super-admin.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/profiles', component: ProfilesComponent },
  { path: 'admin/creat', component: CreatUserComponent },
  { path: 'admin/edit/:id', component: EditUserComponent },
  { path: 'admin/superAdmin', component: SuperAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
