import { Component } from '@angular/core';
import {IonApp, IonContent, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel} from '@ionic/angular/standalone';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, CommonModule],
})
export class AppComponent {
  constructor() {}
}
