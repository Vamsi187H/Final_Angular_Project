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

const route: Routes = [
  { path: 'detailsbox/:id', component: DetailsBoxComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: UserhomeComponent,
      },
      { path: 'menu', component: MenuComponent },
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
