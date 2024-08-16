import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListComponent } from './components/list/gifs-list.coponent';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    
  ]
    
})
export class GifsModule { }
