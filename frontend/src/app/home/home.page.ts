import { Component } from '@angular/core';
import {Map,tileLayer,marker} from 'leaflet';
import * as L from "leaflet";
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http: HttpClient,
    public plt: Platform) {

  }



  ionViewDidEnter()
  {
    this.plt.ready().then(() => {
        this.http.get('https://api.r4.ie/state?format=json')
        .subscribe(statesData => this.initMap(statesData));
      });
  }


  initMap(statesData) {

    console.log(statesData);

    let map = new Map("map").setView([37.8, -96], 4);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);

    function getColor(d) {
        return d > 1000 ? '#016450' :
               d > 500  ? '#02818a' :
               d > 200  ? '#3690c0' :
               d > 100  ? '#67a9cf' :
               d > 50   ? '#a6bddb' :
               d > 20   ? '#d0d1e6' :
               d > 10   ? '#ece2f0' :
                          '#fff7fb';
    }

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.density),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    }
    let geojson;

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight
        });
    }

    geojson = L.geoJSON(statesData, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);

  }

}
