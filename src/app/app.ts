import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnitList } from './unit-list/unit-list';

@Component({
  imports: [RouterOutlet, UnitList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mesbg-web');
}
