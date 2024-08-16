import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Search</h5>
  <input 
    class="form-control"
    type="text" 
    placeholder="Search..." 
    (keyup.enter)="searchTag()"
    #searchInputTxt
    />
  `,
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent { 

  @ViewChild('searchInputTxt') 
  public searchInputTxt!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    let searchValue = this.searchInputTxt.nativeElement.value;
    this.gifsService.searchTag(searchValue);
    // clear the input
    this.searchInputTxt.nativeElement.value = '';
  }
}
