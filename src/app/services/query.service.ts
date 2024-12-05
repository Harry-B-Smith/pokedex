import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { debounceTime, map, Subject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService implements OnInit
{

  public pokemon = '';
  public pokemon_type = '';
  public imageUrl = '';
  public height = '';
  public weight = '';

  private cacheMap: Map<String, any> = new Map([]);
  private pokemonList:Array<String> = [];

  // auto completion

  constructor(private http:HttpClient) {
    this.http.get<any>("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").subscribe(res => {
      res.results.forEach((element:any) => {
        this.pokemonList.push(element.name as string);
      });
      console.log(this.pokemonList);
    });
   }
  
  ngOnInit(): void {
    
  }


  onSearchChange(pokemon: string) {
    if(!this.pokemonList.includes(pokemon)) {
      return;
    }
    if(this.cacheMap.has(pokemon)){ 
      let res = this.cacheMap.get(pokemon);
      this.pokemon_type = res.types[0].type.name;
      this.imageUrl = res.sprites.front_default;
      this.pokemon = res.name;
      this.height = res.height;
      this.weight = res.weight;
      console.log("Cache Hit!")
      return;
    }
    
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).subscribe(res => {
      this.pokemon_type = res.types[0].type.name;
      this.imageUrl = res.sprites.front_default;
      this.pokemon = res.name;
      this.height = res.height;
      this.weight = res.weight;
      this.cacheMap.set(pokemon, res);
      console.log(this.getRecentSearchResults());
      });
    }
 
    getRecentSearchResults() {

      return Array.from(this.cacheMap.keys());
    }

}
