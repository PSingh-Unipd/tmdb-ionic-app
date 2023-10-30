import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule, NgOptimizedImage]
})
export class ExploreComponent implements OnInit {
  selected:any = 'movie';
  exploreData: any  = null;
  data: any[] = [];
  shallowData: any[] = [];
  loading = false;
  searchResults: any[] = [];
  queryField: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {}

}
