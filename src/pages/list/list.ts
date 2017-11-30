import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {BrowserPage} from '../browser/browser'

import { ItemDetailsPage } from '../item-details/item-details';
import { FileChooser } from '@ionic-native/file-chooser';
//import { FileChooser } from '@ionic-native/file-chooser';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { PhotoLibrary } from '@ionic-native/photo-library';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController,private photoLibrary: PhotoLibrary,private file: File,public navParams: NavParams,private fileChooser: FileChooser) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.items = [];
    this.items.push({
      title: "ss",
      note: "D:/ShortSem/Project/MyIonicProject/resources/icon.png",
      icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    });
      this.file.listDir("file:///storage/emulated/0/DCIM","Camera").then((results) => {
        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
            this.items.push({
              title: results[i].name,
              note: results[i].nativeURL,
              icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
      }, (err) => { 
      });

      this.photoLibrary.requestAuthorization().then(() => {
        this.photoLibrary.getLibrary().subscribe({
          next: library => {
            library.forEach(function(libraryItem) { 
              this.items.push({
                title: libraryItem.photoURL,
                note: libraryItem.id,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
              });   // Cross-platform access to photo
                 // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
            });
          },
          error: err => { 
            this.items.push({
              title: err,
              note: "couldNotGet Libry",
              icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            }); 
           },
          complete: () => { 
            this.items.push({
              title: "Done",
              note: "couldNotGet Libry",
              icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            }); 
           }
        });
      })
      .catch(err => 
        this.items.push({
          title: "No permitions",
          note: err,
          icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        })
      );
     

  }


  addDir(){
    //this.openGallery();
    this.fileChooser.open()
    .then(uri => {
      this.items.push({
        title: uri,
        note: uri,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      
    })
    .catch(e =>  this.items.push()
  );
  }
  
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
      
    });
  }

}

