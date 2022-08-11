import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Bonjour {{pokemons_list[1]}}</h1>`
})
export class AppComponent implements OnInit{
  pokemons_list = ['Bulbizarre', 'Salamèche', 'Carapuce'];
  
  ngOnInit(): void{
    console.table(this.pokemons_list);
  }
}