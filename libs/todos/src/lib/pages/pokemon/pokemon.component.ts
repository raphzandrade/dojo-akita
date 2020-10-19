import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../data-access/pokemon/pokemon.model';
import { PokemonQuery } from '../../data-access/pokemon/pokemon.query';
import { PokemonService } from '../../data-access/pokemon/pokemon.service';

@Component({
  selector: 'dojo-akita-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  readonly pokemons$: Observable<Pokemon[]>;
  readonly isLoading$: Observable<Boolean>;

  constructor(
    private pokemonService: PokemonService,
    public pokemonQuery: PokemonQuery
  ) {
    this.pokemons$ = this.pokemonQuery.pokemons$;
    this.isLoading$ = this.pokemonQuery.isLoading$;
  }

  ngOnInit(): void {}

  public getPokemon(): void {
    this.pokemonService.getPokemon('1');
  }

  public getPokemons(): void {
    this.pokemonService.getPokemons(151);
  }

  public cleanStore(): void {
    this.pokemonService.cleanStore();
  }
}
