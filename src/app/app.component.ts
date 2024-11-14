import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { QueryService } from './services/query.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    title = 'pokedex';
    public inputBox = "pikach";
    public timer: any;
    testFormControl = new FormControl('');
    
  constructor(public queryService: QueryService) {}

  ngOnInit(): void {

    //TODO add debounce back
    
    this.testFormControl.valueChanges.subscribe(
      value => {
        console.log(value);
        this.queryService.onSearchChange(value);
      }
    );
  }

}

