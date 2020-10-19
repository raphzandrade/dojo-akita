import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { NgEntityService } from '@datorama/akita-ng-entity-service';

// rxjs
import { Subject } from 'rxjs';
import { finalize, map, pluck, takeUntil } from 'rxjs/operators';

// interfaces
import { Pokemon } from './pokemon.model';

// store
import { PokemonStore, PokemonState } from './pokemon.store';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/';

  private unsubscribe$: Subject<void>;

  constructor(protected store: PokemonStore, private http: HttpClient) {
    this.unsubscribe$ = new Subject();
  }

  getPokemons(limit: number): void {
    const url = this.apiUrl + `pokemon?limit=${limit}`;

    this.startRequest();

    // this.http
    //   .get(url)
    //   .pipe(
    //     pluck('results'),
    //     map((pokemon: PokemonItem) => ({
    //       ...pokemon,
    //       id: pokemon.name,
    //     })),
    //     takeUntil(this.unsubscribe$),
    //     finalize(() => this.closeRequest)
    //   )
    //   .subscribe((results: PokemonItem[]) => {
    //     console.log(results);
    //     this.store.set(results);
    //   });
  }

  getPokemon(name: string) {
    const url = this.apiUrl + `pokemon/${name}`;

    this.http
      .get(url)
      .pipe(
        takeUntil(this.unsubscribe$),
        finalize(() => this.closeRequest)
      )
      .subscribe((response: Pokemon) => {
        this.store.add(response);
      });
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
