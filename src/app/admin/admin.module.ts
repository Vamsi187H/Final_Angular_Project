import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DietplanBoxComponent } from './dietplan-box/dietplan-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from '../shared/shared.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../materials/materials.module';
import { ForumboxComComponent } from './forumbox-com/forumbox-com.component';
import { CompForumComponent } from './forumbox-com/comp-forum/comp-forum.component';
import { ComplaintsboxComponent } from './complaintsbox/complaintsbox.component';
import { CompComponent } from './complaintsbox/comp/comp.component';

const route: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'forum',
    component: ForumboxComComponent,
  },
  {
    path: 'add-diet-plan',
    component: DietplanBoxComponent,
  },
  {
    path: 'delete-diet-plan',
    component: DietplanBoxComponent,
  },
  {
    path: 'complaints',
    component: ComplaintsboxComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    DietplanBoxComponent,
    AdminHomeComponent,
    ForumboxComComponent,
    CompForumComponent,
    ComplaintsboxComponent,
    CompComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(route),
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    Ng2SearchPipeModule,
  ],
})
export class AdminModule {}
