import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit{
  
  @Input()
  public src!: string;
  
  @Input()
  public alt: string = '';

  private _hasLoaded: boolean = false;

  public get hasLoaded(): boolean {
    return this._hasLoaded;
  }
  
  ngOnInit(): void {

      if (!this.src) {
        throw new Error('src is required');
      }
  }

  onLoad() {
    setTimeout(() => {
      this._hasLoaded = true;
    }, 1000);

  }
  

}
