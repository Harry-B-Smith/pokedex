import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestcomponentComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex';
}
