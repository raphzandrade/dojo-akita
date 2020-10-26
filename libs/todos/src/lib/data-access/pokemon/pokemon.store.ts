import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  StoreConfig,
  ActiveState,
  MultiActiveState,
} from '@datorama/akita';
import { Pokemon, PokemonItem } from './pokemon.model';

export interface PokemonState
  extends EntityState<Pokemon, string>,
    MultiActiveState<string> {
  pokemonList: PokemonItem[];
  limit: number;
  offset: number;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'pokemon',
  resettable: true,
  idKey: 'name',
  cache: {
    ttl: 1000,
  },
})
export class PokemonStore extends EntityStore<PokemonState> {
  constructor() {
    const defaults = { pokemonList: [], limit: 10, offset: 0 };
    super(defaults);
  }
}
