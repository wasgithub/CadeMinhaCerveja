import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-rate-modal',
  templateUrl: 'rate-modal.html',
})
export class RateModalPage {

  classification: any;
  rate= 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  this.classification = this.navParams.get('classification');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
