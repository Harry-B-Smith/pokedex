import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testcomponent',
  standalone: true,
  templateUrl: './testcomponent.component.html',
  styleUrl: './testcomponent.component.css',
  imports: [FormsModule]
})
export class TestcomponentComponent implements OnInit {

  public inputBox = "pikachu";
  public timer: any;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.search("ditto");
  }

   search(pokemon: String){
    console.log(pokemon);
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .subscribe(value => console.log(value));
  }

  log(value: String) {
    console.log(value);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.search(value), 3000);
  }


}
