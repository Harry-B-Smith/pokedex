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
  public imageUrl = "";
  public height = '';
  public weight = '';

  constructor(private http:HttpClient, ) {
    this.searchSubject.pipe(
      debounceTime(3000),
      switchMap(pokemon => {
        console.log("hello fucker");
        let res = this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        return res;
      })
    ).subscribe(res => {
      // handle errors
      this.pokemon_type = res.types[0].type.name;
      this.imageUrl = res.sprites.front_default;
      this.pokemon = res.name;
      this.height = res.height;
      this.weight = res.weight;
      console.log(res);
    });  
   }

  private searchSubject = new Subject<string>();
  
  ngOnInit(): void {
    
  }

  onSearchChange(pokemon: string) {
    console.log(pokemon);
    this.searchSubject.next(pokemon);
  }

}
