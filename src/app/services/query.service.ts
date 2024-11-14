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

    // recent search results
  // search caching
  // auto completion

  constructor(private http:HttpClient, ) {
 
   }
  
  ngOnInit(): void {
    
  }


  onSearchChange(pokemon: string | null) {
    if(!pokemon) {
      return;
    }
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).subscribe(res => {
      this.pokemon_type = res.types[0].type.name;
      this.imageUrl = res.sprites.front_default;
      this.pokemon = res.name;
      this.height = res.height;
      this.weight = res.weight;
      console.log(res);
      });
    }
 

}
