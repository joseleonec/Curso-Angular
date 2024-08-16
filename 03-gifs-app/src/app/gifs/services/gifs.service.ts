import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
    
    private _tagsSearchHistory: string[] = [];
    private giphyApiKey = "8T49dC11lCYhpAmkb2nKmieYHS1MmM2z";
    private giphyApiUrl = "https://api.giphy.com/v1/gifs/search";
    
    constructor(private http: HttpClient) { }

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

    searchTag(tag: string): void {
        if (!tag) {
            return;
        }
        this.orginizeTagsSearchHistory(tag);
        const params = new HttpParams();
        params.set('api_key', this.giphyApiKey);
        params.set('q', tag);
        params.set('limit', '10');
        
        // fetch the gifs
        this.http.get(this.giphyApiUrl, { params })
        .subscribe((response) => {
            console.log(response);
        }
        );


        

    }


}