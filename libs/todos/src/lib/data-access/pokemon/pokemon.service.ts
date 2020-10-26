import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { NgEntityService } from '@datorama/akita-ng-entity-service';

// rxjs
import { Subject } from 'rxjs';
import {
  finalize,
  map,
  pluck,
  switchMap,
  take,
  takeUntil,
} from 'rxjs/operators';

// interfaces
import { Pokemon, PokemonItem } from './pokemon.model';
import { PokemonQuery } from './pokemon.query';

// store
import { PokemonStore, PokemonState } from './pokemon.store';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/';

  private unsubscribe$: Subject<void>;

  constructor(
    protected store: PokemonStore,
    protected query: PokemonQuery,
    private http: HttpClient
  ) {
    this.unsubscribe$ = new Subject();
  }

  getPokemons(): void {
    this.startRequest();

    this.query.getParameters$
      .pipe(
        take(1),
        switchMap((parameters) => {
          const url =
            this.apiUrl +
            `pokemon?limit=${parameters.limit}&offset=${parameters.offset}`;

          return this.http.get(url);
        }),
        pluck('results'),
        takeUntil(this.unsubscribe$),
        finalize(() => this.closeRequest())
      )
      .subscribe((results: PokemonItem[]) => {
        this.store.update((state) => ({
          ...state,
          offset: state.offset + state.limit,
          pokemonList: [...state.pokemonList, ...results],
        }));
      });
  }

  getPokemon(name: string) {
    const url = this.apiUrl + `pokemon/${name}`;

    this.http
      .get(url)
      .pipe(
        takeUntil(this.unsubscribe$),
        finalize(() => this.closeRequest())
      )
      .subscribe((response: Pokemon) => {
        this.store.add(response);
      });
  }

  setActivePokemon(name: string) {
    this.store.addActive(name);
  }

  cleanStore(): void {
    this.store.reset();
  }

  // helpers

  private startRequest(): void {
    this.unsubscribe$.next();

    this.store.setLoading(true);
  }

  private closeRequest(): void {
    this.unsubscribe$.next();

    this.store.setLoading(false);
  }
}
