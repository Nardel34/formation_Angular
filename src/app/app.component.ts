import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  pokemons_list: Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon|undefined;
  
  ngOnInit(): void{
    console.table(this.pokemons_list);
  }

  selectPokemon(pokemonId: string){
    
    //const index: number = +(event.target as HTMLInputElement).value; // number(...) ou +
    const i = +pokemonId;
    const pokemon: Pokemon|undefined = this.pokemons_list.find(pokemon => pokemon.id == +pokemonId);

    if(pokemon){
      console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`)
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un Pokémon qui n'existe pas !`)
      this.pokemonSelected = pokemon;
    }
  }
}