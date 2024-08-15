import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  @Output()
  public onDeleteEventEmitter: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public characters: Character[] = [
  ];

  onDeleteCharacter(index: number): void {
    console.log('Deleting character', index);
    console.log('Deleting character', this.characters[index]);
    // this.characters.splice(index, 1);
    this.onDeleteEventEmitter.emit(index);
  }

}
