import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()

export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(PokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == PokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'feu', 
      'Eau', 
      'Insecte', 
      'Electrik', 
      'Normal', 
      'Poison', 
      'Fée', 
      'Combat', 
      'Psy'
    ];
  }
}
