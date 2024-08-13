import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Batman', 'Superman', 'Wonder'] 
  public deletedHero?: string;
  borrarUltimoHeroe(): void {
    this.deletedHero = this.heroes.pop();
  }
}
