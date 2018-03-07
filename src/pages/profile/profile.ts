import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  public isDisabled:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  changeData(input){
    this.isDisabled =! this.isDisabled;
  }

}