import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';
import { PokemonStore } from './pokemon.store';

describe('PokemonService', () => {
  let pokemonService: PokemonService;
  let pokemonStore: PokemonStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonService, PokemonStore],
      imports: [ HttpClientTestingModule ]
    });

    pokemonService = TestBed.get(PokemonService);
    pokemonStore = TestBed.get(PokemonStore);
  });

  it('should be created', () => {
    expect(pokemonService).toBeDefined();
  });

});
