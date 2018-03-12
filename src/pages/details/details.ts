import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Classification } from '../../model/classification';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {

  save= false;
  classification: Classification;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  saveBar(){
    this.save = !this.save;
  }

// Map modal
  presentMapModal() {
   let mapModal = this.modalCtrl.create('MapModalPage', { userId: 8675309 });
   mapModal.present();
 } 

 // rate modal
  presentRateModal(option) {
    if (option === 'price') {
      this.classification = {titulo: 'Opine sobre o preço!', icon: 'logo-usd'}
    } else {
      this.classification = {titulo: 'Dê sua opnião!', icon: 'beer'}
    }
   let rateModal = this.modalCtrl.create('RateModalPage', { userId: 8675309, classification: this.classification });
   rateModal.present();
 } 

}