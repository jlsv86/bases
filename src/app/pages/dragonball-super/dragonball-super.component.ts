import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragon-ball/dragonball-character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperComponent {
  public dragonballService = inject(DragonballService);
}
