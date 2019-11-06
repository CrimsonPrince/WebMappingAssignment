import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'build'
  ];
  public items: Array<{ }> = [];

  constructor(public http: HttpClient,
    public plt: Platform,
    public router: Router) {
        this.http.get('https://web.r4.ie/planning').subscribe(planning => this.items.push(planning));
        console.log(this.items);
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
