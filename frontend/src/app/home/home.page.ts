import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon, geoJson } from 'leaflet';
import * as L from "leaflet";
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

    var data =

    ngAfterViewInit() {
        // this.plt.ready().then(() => {
        //   this.http.get('https://web.r4.ie/planning')
        //   .subscribe(planningApps => this.initMap(planningApps));
        // });
        this.initMap();
      }

      initMap() {
        const map = new Map('map').setView([53.3498, -6.2603], 12);

        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            useCache: true,
            crossOrigin: true,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        geoJson(data).addTo(map)
    //     planningApps.features.forEach((planning) => {
    //    marker([planning.geometry.coordinates[1], planning.geometry.coordinates[0]])
    //         .bindPopup(`<b>${planning.properties.Planning_Reference}</b>`, { autoClose: false })
    //         .on('click', () => this.router.navigate(['/details/' + planning.id]))
    //         .addTo(map); } );
      }



}
