import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem('characters');

  if (characters){

  }

  return JSON.parse(localStorage.getItem('characters') || '[]');
}

@Injectable({ providedIn: 'root' })
export class DragonballService {
  constructor() {}

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character): void {
    this.characters.update((list) => [...list, character]);
  }


}
