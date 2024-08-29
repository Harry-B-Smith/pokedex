import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testcomponent',
  standalone: true,
  templateUrl: './testcomponent.component.html',
  styleUrl: './testcomponent.component.css'
})
export class TestcomponentComponent implements OnInit {


  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<any>("https://pokeapi.co/api/v2/pokemon/ditto").subscribe(value => console.log(value));
  }


}
