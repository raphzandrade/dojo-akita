import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Pokemon } from './pokemon.model';

export interface PokemonState extends EntityState<Pokemon, string>, ActiveState<string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'pokemon', resettable: true, idKey: 'name' })
export class PokemonStore extends EntityStore<PokemonState> {

  constructor() {
    super();
  }

}
