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
          this.http.get('https://web.r4.ie/planning')
          .subscribe(planningApps => this.initMap(planningApps));
        });
      }

      initMap(planningApps) {
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

        console.log(planningApps)
        planningApps.forEach((planning) => {
            console.log(planning)
          marker([planning.geometry.coordinates[0], planning.geometry.coordinates[1]], {icon: customMarkerIcon})
          .bindPopup(`<b>${planning.properties.name}</b>`, { autoClose: false })
          .on('click', () => this.router.navigateByUrl('/planning'))
          .addTo(map).openPopup();
        });
      }

}
