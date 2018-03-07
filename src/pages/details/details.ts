import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {

  save= false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  saveDoctor(){
    this.save = !this.save;
  }

// Map modal
  presentMapModal() {
   let mapModal = this.modalCtrl.create('MapModalPage', { userId: 8675309 });
   mapModal.present();
 } 

 // rate modal
  presentRateModal() {
   let rateModal = this.modalCtrl.create('RateModalPage', { userId: 8675309 });
   rateModal.present();
 } 

}