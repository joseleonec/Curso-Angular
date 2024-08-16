import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
    
    private _tagsSearchHistory: string[] = [];
    
    constructor() { }

    get tagsSearchHistory(): string[] {
        return [...this._tagsSearchHistory];
    }

    searchTag(tag: string) {
        if (!tag) {
            return;
          }
        this._tagsSearchHistory.unshift(tag);
        console.log('Searching... ' + tag);
    }
    
}