import { PokemonStore } from './pokemon.store';

describe('PokemonStore', () => {
  let store: PokemonStore;

  beforeEach(() => {
    store = new PokemonStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
