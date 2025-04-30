import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../services/footer.service';
import {FooterContainer} from './interfaces/footer.interface';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerData: FooterContainer = {
    container: {
      footer: [],
      copyright: { text: '', link: '', href: '' }
    }
  };
  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
    this.footerService.getFooterData().subscribe({
      next: (data) => {
        this.footerData = data;
      },
      error: (error) => {
        console.error('Error in component:', error);
      }
    });
  }
}
