import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public id: number;
  public name: string;
  public power: string;
  public alterEgo: string;

  get fullName(): string {
    return `${this.name} - ${this.alterEgo}`;
  }

  constructor() {
    this.id = 1;
    this.name = 'Spiderman';
    this.power = 'Spider';
    this.alterEgo = 'Peter Parker';
  }

  public changeName(): void {
    this.name = 'Batman';
  }

  public changePower(): void {
    this.power = 'Money';
  }

  public changeAlterEgo(): void {
    this.alterEgo = 'Bruce Wayne';
  }

  public reset(): void {
    this.name = 'Spiderman';
    this.power = 'Spider';
    this.alterEgo = 'Peter Parker';
  }


}
