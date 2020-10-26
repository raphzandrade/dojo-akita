import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Pokemon, PokemonItem } from './pokemon.model';
import { PokemonStore, PokemonState } from './pokemon.store';

@Injectable({ providedIn: 'root' })
export class PokemonQuery extends QueryEntity<PokemonState> {
  readonly activePokemon$: Observable<Pokemon[]>;
  readonly pokemons$: Observable<Pokemon[]>;
  readonly pokemonList$: Observable<PokemonItem[]>;
  readonly isLoading$: Observable<Boolean>;
  readonly getParameters$: Observable<{offset: number, limit: number}>;

  constructor(protected store: PokemonStore) {
    super(store);

    this.pokemons$ = this.selectAll();
    this.activePokemon$ = this.selectActive();
    this.pokemonList$ = this.select('pokemonList');
    this.isLoading$ = this.selectLoading();
    this.getParameters$ = this.select(['offset', 'limit']);
  }
}
