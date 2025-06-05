import{NgModule} from '@angular/core';
import {SideBarComponent} from './side-bar.component';
import {NewsletterModule} from "../../../../../shared/newsletter/newsletter.module";

@NgModule({
  declarations: [SideBarComponent],
    imports: [
        NewsletterModule
    ],
  exports: [SideBarComponent]
})
export class SideBarModule {}
