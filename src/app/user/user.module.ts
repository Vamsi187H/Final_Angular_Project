import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../materials/materials.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MenuComponent } from './userhome/menu/menu.component';
import { MenuBoxComponent } from './userhome/menu/menu-box/menu-box.component';
import { FiltertypePipe } from '../pipes/filtertype.pipe';
import { DetailsBoxComponent } from './userhome/menu/menu-box/details-box/details-box.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ForumBoxComponent } from './userhome/forum-box/forum-box.component';
import { ComplaintBoxComponent } from './userhome/complaint-box/complaint-box.component';

import { DietplanBoxComponent } from '../admin/dietplan-box/dietplan-box.component';
import { SupportedDietboxComponent } from './userhome/supported-dietbox/supported-dietbox.component';
import { DietboxBoxComponent } from './userhome/supported-dietbox/dietbox-box/dietbox-box.component';
import { DetailsboxBoxComponent } from './userhome/supported-dietbox/dietbox-box/detailsbox-box/detailsbox-box.component';
import { DietfilterPipe } from '../pipes/dietfilter.pipe';
import { ForumboxComponent } from './userhome/forum-box/forumbox/forumbox.component';
import { CreateDietplanComponent } from './userhome/create-dietplan/create-dietplan.component';

const route: Routes = [
  { path: 'detailsbox/:id', component: DetailsBoxComponent },
  { path: 'detailsbox-box/:id', component: DetailsboxBoxComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: UserhomeComponent,
      },
      { path: 'menu', component: MenuComponent },
      { path: 'forum', component: ForumBoxComponent },
      { path: 'comp', component: ComplaintBoxComponent },
      { path: 'dietp', component: SupportedDietboxComponent },
      { path: 'create', component: CreateDietplanComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    MenuComponent,
    MenuBoxComponent,
    FiltertypePipe,
    DetailsBoxComponent,
    ForumBoxComponent,
    ComplaintBoxComponent,
    SupportedDietboxComponent,
    DietboxBoxComponent,
    DetailsboxBoxComponent,
    DietfilterPipe,
    ForumboxComponent,
    CreateDietplanComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
})
export class UserModule {}
