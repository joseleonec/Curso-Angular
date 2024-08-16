import { Component } from "@angular/core";

@Component({
    selector: "gifs-list",
    templateUrl: "./gifs-list.component.html",
    })
export class ListComponent {
    gifs = [
        { title: "gif 1",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2_ic9HG6nFg4C35nlJ7uk72olY042sivWQ&s"
         },
        { title: "gif 2",
        url: "https://media.giphy.com/media/3o7TKz9b0f6JU"
         },
        { title: "gif 3",
        url: "https://media.giphy.com/media/3o7TKz9b0f6JU"
         },
    ];

    printGifsTitles() {
        this.gifs.forEach(gif => {
            console.log(gif.title);
        });
        
        
    }
}
