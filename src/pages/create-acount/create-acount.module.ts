import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAcountPage } from './create-acount';

@NgModule({
  declarations: [
    CreateAcountPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAcountPage),
  ],
})
export class CreateAcountPageModule {}
