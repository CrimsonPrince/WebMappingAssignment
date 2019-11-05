import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  PlanningApplication;

  constructor(private activatedRoute: ActivatedRoute, public http: HttpClient, public plt: Platform) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
        if (!paramMap.has('planningId')) {
            console.log("exit");
          return;
        }
        this.http.get('https://web.r4.ie/planning/' + paramMap.get('planningId'))
        .subscribe(planningApps => this.PlanningApplication = planningApps);
        console.log(this.PlanningApplication);
    });
    }





}
