import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuidv4} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[] = [
        {
          id: uuidv4(),  
          name: 'Goku',
          power: 10000
        },
        {
          id: uuidv4(),  
          name: 'Vegeta',
          power: 9000
        },
        {
          id: uuidv4(),  
          name: 'Trunks',
          power: 8500
        }
      ];
    
      addCharacter = (newCharacter: Character): void => {
        
        const character: Character = {
            id: uuidv4(),
            ...newCharacter
        }
        this.characters.push(character);
      }
    
      public deleteCharacterById = (id: string): void => {
        this.characters = this.characters.filter(character => character.id !== id);
      }
    
}