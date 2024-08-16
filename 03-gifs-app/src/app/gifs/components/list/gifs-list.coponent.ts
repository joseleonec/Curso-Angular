import { Component, Input} from "@angular/core";
import { Gif } from "../../interfaces/gifs.interfaces";

@Component({
    selector: "gifs-list",
    templateUrl: "./gifs-list.component.html",
    })
export class ListComponent {

    @Input()
    gifs: Gif[] = [

    ];

    printGifsTitles() {
        this.gifs.forEach(gif => {
            console.log(gif.title);
        });
        
        
    }
}
