import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import {CreateAcountPage } from '../create-acount/create-acount';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username = '';
  password = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private http: HTTP) {
  }

  login(age){
   
    if( this.username!=''){
     


    this.http.post('http://localhost/227/', 
    { 
      cardToken : "token",
      amount: 500
    }, 
    {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(data => {
      console.log(data.data);
    }).catch(error => {
      console.log(error.status);
    });
  }
  }


  createAcount(){
    this.navCtrl.setRoot(CreateAcountPage);
  }
ionViewDidLoad() {
    
}

}
