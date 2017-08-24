import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("map") mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
   this.currentPosition();
  }

  loadMap(lat, lng){
    let latlng = new google.maps.LatLng(lat, lng);
    let mapOptions = {
      center: latlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker(this.map, latlng);

    google.maps.event.addListener(this.map, 'click', (event) => {
       let LatLng = event.latLng;
       let pos = {
         lat: LatLng.lat(),
         lng: LatLng.lng()
       }
        let myLatlng = new google.maps.LatLng(pos.lat, pos.lng);
        this.addMarker(this.map, myLatlng);
       console.log(pos);
    });

  }
  addMarker(map, position){
    let marker = new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP,
      draggable: true
    });
    this.findPlace(position).then((address) => {
      this.addWindowInfo(marker, address);
    });

  }
  addWindowInfo(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

    google.maps.event.addListener(marker, 'dragend', (marker) => {
      let LatLng = marker.latLng;
      let lat = LatLng.lat();
      let lng = LatLng.lng();
      this.loadMap(lat, lng);
    });

  }

  currentPosition(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.loadMap(pos.lat, pos.lng);
      })
    }
  }

  findPlace(position){
    return new Promise((resolve, reject) => {
      let pos = {
        lat: position.lat(),
        lng: position.lng()
      }
      let _geodeocder = new google.maps.Geocoder();
      _geodeocder.geocode({'location': pos}, (result, status) => {
        let address = result[0].formatted_address;
        resolve(address);
      })
    });


  }

}
