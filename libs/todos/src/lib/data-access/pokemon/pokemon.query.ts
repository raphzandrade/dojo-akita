import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';
import { PokemonStore, PokemonState } from './pokemon.store';

@Injectable({ providedIn: 'root' })
export class PokemonQuery extends QueryEntity<PokemonState> {
  readonly pokemons$: Observable<Pokemon[]>;
  readonly isLoading$: Observable<Boolean>;

  constructor(protected store: PokemonStore) {
    super(store);

    this.pokemons$ = this.selectAll();
    this.isLoading$ = this.selectLoading();
  }
}
