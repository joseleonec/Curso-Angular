import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
    
    private _tagsSearchHistory: string[] = [];
    
    constructor() { }

    get tagsSearchHistory(): string[] {
        // return the first 10 elements
        return [...this._tagsSearchHistory];
    }

    private orginizeTagsSearchHistory(tag: string) {
        tag = tag.trim().toLowerCase();
        if (this._tagsSearchHistory.includes(tag)) {
            this._tagsSearchHistory = this._tagsSearchHistory.filter(t => t !== tag);
        }
        this._tagsSearchHistory.unshift(tag);
        this._tagsSearchHistory = this._tagsSearchHistory.slice(0, 10);
    }

    searchTag(tag: string) {
        if (!tag) {
            return;
        }
        this.orginizeTagsSearchHistory(tag);
        console.log('Searching... ' + tag);
    }
}