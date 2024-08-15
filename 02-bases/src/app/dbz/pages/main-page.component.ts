import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Vegeta',
      power: 9000
    },
    {
      name: 'Trunks',
      power: 8500
    }
  ];

  addCharacter = (newCharacter: Character): void => {
    this.characters.push(newCharacter);
  }

  deleteCharacter = (index: number): void => {
    console.log('Deleting character', index);
    console.log('Deleting character', this.characters[index]);
    this.characters.splice(index, 1);
  }
    
}
