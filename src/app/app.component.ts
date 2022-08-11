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

  selectPokemon(pokemon: Pokemon){

    //const index: number = +(event.target as HTMLInputElement).value; // number(...) ou +
    const pokemonFund: Pokemon|undefined = this.pokemons_list.find(pokemonSearch => pokemonSearch.id == pokemon.id);

    if(pokemonFund){
      console.log(`Vous avez cliqué sur le pokemon ${pokemonFund.name}`)
      this.pokemonSelected = pokemonFund;
    } else {
      console.log(`Vous avez demandé un Pokémon qui n'existe pas !`)
      this.pokemonSelected = pokemonFund;
    }
  }
}