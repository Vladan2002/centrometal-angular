import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../interfaces/products.interface';
import {SectionsService} from '../../../../../../services/section.service';

@Component({
  selector: 'app-section',
  standalone: false,
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent implements OnInit {
  @Input() public section!: Section;
  public limit:number[]=[];
  public loader:boolean = false;

  constructor(private sectionService:SectionsService) {}


  public ngOnInit(): void {
   this.loadCards()
  }

  private loadCards(): void {
    this.limit = Array.from({ length: this.section.limit }, (_, i) => i);
    this.loader = true;
    setTimeout(() => this.fetchCards(), 1500);
  }

  private fetchCards(): void {
    this.sectionService.populateSectionCards(this.section).subscribe(
      (res) => {
        this.section = res;
      },
      (err) => {
        console.error('Error', err);
        this.loader = false;
      }
    );
  }

}
