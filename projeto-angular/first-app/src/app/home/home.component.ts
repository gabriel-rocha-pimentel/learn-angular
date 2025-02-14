import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  imports: [
    HousingLocationComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" required>
        <button class="primary" type="submit">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent { }
