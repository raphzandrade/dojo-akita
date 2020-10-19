import { PokemonQuery } from './pokemon.query';
import { PokemonStore } from './pokemon.store';

describe('PokemonQuery', () => {
  let query: PokemonQuery;

  beforeEach(() => {
    query = new PokemonQuery(new PokemonStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});
