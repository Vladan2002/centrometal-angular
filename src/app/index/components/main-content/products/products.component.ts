import { Component, OnInit } from '@angular/core';
import {SectionsService} from '../../../../../services/section.service';
import{Section} from "./interfaces/products.interface";

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public sections: Section[] = [];

  constructor(private sectionsService: SectionsService) {}

  ngOnInit() {
   this.loadContent()
  }

  private loadContent():void {
  this.sectionsService.getSections().subscribe(sections => {
  this.sections = sections;
});
}
}
