import { Component } from '@angular/core';
import {IonApp, IonContent, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel} from '@ionic/angular/standalone';
import {CommonModule} from "@angular/common";
import {addIcons} from "ionicons";
import { film, time, disc  } from 'ionicons/icons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, CommonModule],
})
export class AppComponent {
  constructor() {
    addIcons({ film, time, disc });
  }
}
