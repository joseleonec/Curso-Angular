import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get tagsSearchHistory() {
    return this.gifsService.tagsSearchHistory;
  }

  searchTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }

}
