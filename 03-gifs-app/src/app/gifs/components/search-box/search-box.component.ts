import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Search</h5>
  <input 
  class="form-control"
  type="text" placeholder="Search..." />
  `,
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent { }
