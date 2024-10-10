import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QueryService } from './services/query.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pokedex';
    public inputBox = "pikach";
    public timer: any;

  constructor(public queryService: QueryService) {}

  ngOnInit(): void {
    
  }

}
