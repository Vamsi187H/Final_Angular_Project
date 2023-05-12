import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ForumboxComComponent } from '../admin/forumbox-com/forumbox-com.component';
import { MainPageboxComponent } from './main-pagebox/main-pagebox.component';

@NgModule({
  declarations: [MainpageComponent, MainPageboxComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  exports: [MainpageComponent, MainPageboxComponent],
})
export class SharedModule {}
