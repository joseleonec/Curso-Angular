import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  @Output()
  public onDeleteEventEmitter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characters: Character[] = [
  ];

  onDeleteCharacter(id?: string): void {

    if (!id) {
      return;
    }

    this.onDeleteEventEmitter.emit(id);
  }

}
