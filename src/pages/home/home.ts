import { Component, ViewChild, ElementRef ,NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


declare var google;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  grid: Array<any>;
  list: Array<any>;
  showbtn: boolean=true;
  markerBounds
  currentBar
  showslider
  directionsDisplay = new google.maps.DirectionsRenderer;
  markers=[{id:1,lat:-23.540525,lng:-46.866305},{id:2,lat:-23.540443,lng:-46.866225}]
  constructor(public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public geolocation: Geolocation,
    public ngZOne:NgZone, 
    public modalCtrl: ModalController) {
      this. grid = [{id:1,img:'assets/img/img1.png'},{id:2,img:'assets/img/img2.png'},{img:'assets/img/img1.png'},{img:'assets/img/img2.png'},{img:'assets/img/img1.png'},{img:'assets/img/img2.png'},
      {img:'assets/img/img1.png'},{img:'assets/img/img2.png'},{img:'assets/img/img1.png'},{img:'assets/img/img2.png'}];

       this.list = [{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'}];
    }

  ionViewDidLoad(){
    this.toggleshowbtn()
  }
     
   toggleshowbtn(){
     setTimeout(() => {
        if(this.showbtn) this.loadMap();
     }, 500);
   }
    loadMap(){
      this.markerBounds = new google.maps.LatLngBounds();
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 7,
        center: {lat:-23.540176,lng:-46.864415}
      });
      this.directionsDisplay.setMap(this.map);
      this.addMarker()// current
      this.addMarkersToMap()
    }
    
    addMarker(){
      var icon = {
        url: "assets/img/pin.png", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      var markerdata ={
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.map.getCenter()
          ,icon:icon 
      }
      let marker = new google.maps.Marker(markerdata);
      marker.setMap(this.map);
      this.markerBounds.extend( this.map.getCenter());
    }
  
    addMarkersToMap() {
        for(let item of this.markers) {
            var icon = {
                url: "assets/img/marker.png", // url
                scaledSize: new google.maps.Size(20, 20), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            var position = new google.maps.LatLng(item.lat, item.lng); 
            var markerdata={position: position,icon:icon, title: item.id.toString()}
            var marker = new google.maps.Marker(markerdata);
            marker.setMap(this.map);
            this.markerBounds.extend(position);
            this.addInfoWindowToMarker(marker)
        }
        this.map.fitBounds(this.markerBounds);
        this.map.setCenter(this.markerBounds.getCenter());
    }
 
   addInfoWindowToMarker(marker){
      marker.addListener('click', () => {
        
         this.ngZOne.run(()=>{
         if(!this.showslider)this.showslider=true
         this.currentBar=marker.title
        });         
      })
    }

// like function
  like(item){
    item.activeLike=!item.activeLike;
  }  

  like2(item){
    item.activeLike2=!item.activeLike2;
  }

// Saved function
  SaveBar(item){
    item.save = !item.save;
  }

  SaveBar2(item){
    item.save2 = !item.save2;
  }

// social media modal
  presentshareModal() {
   let shareModal = this.modalCtrl.create('ShareModal', { userId: 8675309 });
   shareModal.present();
 }  

//goTo function
  goTo(page){
    this.navCtrl.push(page);
  }

}