import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {
    
    private _tagsSearchHistory: string[] = [];
    // private giphyApiKey = "8T49dC11lCYhpAmkb2nKmieYHS1MmM2z";
    private giphyApiKey = "Tr1151uIB5EEIUC7zoLWq46HeSv5U6Tc";
    private giphyApiUrl = "https://api.giphy.com/v1/gifs/search";
    public gifList: Gif[] = [];


    constructor(private http: HttpClient) { 
        this.loadSearchHistoryFromLocalStorage();
        this.iniciar();
    }

    private iniciar(): void{
        const historyLength = this._tagsSearchHistory.length;
        if (historyLength > 0) {
            this.searchTag(this._tagsSearchHistory[0]);
        }
    }

    get tagsSearchHistory(): string[] {
        // return the first 10 elements
        return [...this._tagsSearchHistory];
    }

    private saveOnLocalStorage(): void {
        localStorage.setItem('tagsSearchHistory', JSON.stringify(this._tagsSearchHistory));
    }

    private loadSearchHistoryFromLocalStorage(): void {
        const tags = localStorage.getItem('tagsSearchHistory');
        if (tags) {
            this._tagsSearchHistory = JSON.parse(tags);
        }
    }



    private orginizeTagsSearchHistory(tag: string) {
        tag = tag.trim().toLowerCase();
        if (this._tagsSearchHistory.includes(tag)) {
            this._tagsSearchHistory = this._tagsSearchHistory.filter(t => t !== tag);
        }
        this._tagsSearchHistory.unshift(tag);
        this._tagsSearchHistory = this._tagsSearchHistory.slice(0, 10);
        this.saveOnLocalStorage();
    }

    searchTag(tag: string): void {
        if (!tag) {
            return;
        }
        this.orginizeTagsSearchHistory(tag);
        const params = new HttpParams()
        .set('api_key', this.giphyApiKey)
        .set('q', tag)
        .set('limit', '10');
        
        // fetch the gifs
        this.http.get<SearchResponse>(this.giphyApiUrl, { params })
        .subscribe((response) => {
            this.gifList = response.data;
            console.log(response.data);
        }
        );


        

    }


}