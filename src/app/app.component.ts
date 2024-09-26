import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pokedex';

  public inputBox = "pikachu";
  public timer: any;
  public pokemon = '';
  public pokemon_type = '';
  public imageUrl = "";
  public height = '';
  public weight = '';

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    
  }

   search(pokemon: String){
    console.log(pokemon);
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .subscribe(res => {
      this.pokemon_type = res.types[0].type.name;
      this.imageUrl = res.sprites.front_default;
      this.pokemon = res.name;
      this.height = res.height;
      this.weight = res.weight;
      console.log(res);
    });
  }

  log(value: String) {
    console.log(value);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.search(value), 3000);

    // result.sprites.front_default

    // result.types[0].type.name
  }

}
