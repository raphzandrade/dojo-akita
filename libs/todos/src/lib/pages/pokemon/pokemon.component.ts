import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonItem } from '../../data-access/pokemon/pokemon.model';
import { PokemonQuery } from '../../data-access/pokemon/pokemon.query';
import { PokemonService } from '../../data-access/pokemon/pokemon.service';

@Component({
  selector: 'dojo-akita-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  readonly activePokemon$: Observable<Pokemon[]>;
  readonly pokemons$: Observable<Pokemon[]>;
  readonly pokemonList$: Observable<PokemonItem[]>;
  readonly isLoading$: Observable<Boolean>;

  constructor(
    private pokemonService: PokemonService,
    public pokemonQuery: PokemonQuery
  ) {
    this.pokemons$ = this.pokemonQuery.pokemons$;
    this.pokemonList$ = this.pokemonQuery.pokemonList$;
    this.isLoading$ = this.pokemonQuery.isLoading$;
    this.activePokemon$ = this.pokemonQuery.activePokemon$;
  }

  ngOnInit(): void {}

  public getPokemon(name: string): void {
    this.pokemonService.getPokemon(name);
  }

  public getPokemons(): void {
    this.pokemonService.getPokemons();
  }

  public setActivePokemon(name: string): void{
    this.pokemonService.setActivePokemon(name);
  }

  public cleanStore(): void {
    this.pokemonService.cleanStore();
  }
}
