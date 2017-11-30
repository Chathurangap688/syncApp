import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { SettingPage } from '../pages/setting/setting';
import {LoginPage} from '../pages/login/login'
import {CreateAcountPage } from '../pages/create-acount/create-acount';
import {BrowserPage} from '../pages/browser/browser'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PhotoLibrary } from '@ionic-native/photo-library';
import { IonicStorageModule } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SettingPage,
    LoginPage,
    CreateAcountPage,
    BrowserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SettingPage,
    LoginPage,
    CreateAcountPage,
    BrowserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    File,
    PhotoLibrary,
    ImagePicker,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
