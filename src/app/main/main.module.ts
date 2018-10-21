import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './containers/page/page.component';
import { ImagesComponent } from './components/images/images.component';
import { WittyQuoteComponent } from './components/witty-comparison/witty-quote.component';
import { InfoComponent } from './components/info/info.component';
import { CampSelectorComponent } from './components/camp-selector/camp-selector.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent
  ],
  declarations: [PageComponent, ImagesComponent, WittyQuoteComponent, InfoComponent, CampSelectorComponent, SafePipe]
})
export class MainModule { }
