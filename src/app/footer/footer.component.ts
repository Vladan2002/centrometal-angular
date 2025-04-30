import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../services/footer.service';
import { FooterContainer, FooterSection, Copyright } from './interfaces/footer.interface';
import { map } from 'rxjs/operators';

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
    this.fetchFooterData();
  }

  fetchFooterData(): void {
    this.footerService.getFooterData().pipe(
      map((data) => this.mapFooterDataToInterfaces(data))
    ).subscribe({
      next: (mappedData) => {
        this.footerData = mappedData;
        console.log(mappedData);
      },
      error: (error) => {
        console.error('Error in component:', error);
      }
    });
  }

  private mapFooterDataToInterfaces(data: any): FooterContainer {
    if (!data || !data.container) {
      console.warn('Invalid footer data format:', data);
      return {
        container: {
          footer: [],
          copyright: { text: '', link: '', href: '' }
        }
      };
    }

    const footerSections: FooterSection[] = data.container.footer?.map((section: any) => ({
      title: section.title,
      items: section.items || []
    })) || [];

    const copyright: Copyright = {
      text: data.container.copyright?.text || '',
      link: data.container.copyright?.link || '',
      href: data.container.copyright?.href || ''
    };

    return {
      container: {
        footer: footerSections,
        copyright
      }
    };
  }

}
