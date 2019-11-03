import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http: HttpClient,
    public plt: Platform,
    public router: Router) {}

    ngAfterViewInit() {
        this.plt.ready().then(() => {
          this.http.get('http://localhost:3000/locations')
          .subscribe(restaurants => this.initMap(restaurants));
        });
      }

      initMap(restaurants) {
        const map = new Map('map').setView([53.3498, -6.2603], 12);

        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            useCache: true,
            crossOrigin: true,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const customMarkerIcon = icon({
          iconUrl: 'assets/images/custom-marker-icon.png',
          iconSize: [64, 64],
          popupAnchor: [0, -20]
        });

        console.log(restaurants)
        restaurants.forEach((restaurant) => {
            console.log(restaurant)
          marker([restaurant.geometry.coordinates[0], restaurant.geometry.coordinates[1]], {icon: customMarkerIcon})
          .bindPopup(`<b>${restaurant.properties.name}</b>`, { autoClose: false })
          .on('click', () => this.router.navigateByUrl('/restaurant'))
          .addTo(map).openPopup();
        });
      }

}
