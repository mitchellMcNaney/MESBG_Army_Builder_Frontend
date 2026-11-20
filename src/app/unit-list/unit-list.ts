import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { unit } from './unit';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-unit-list',
  styleUrl: './unit-list.css',
  templateUrl: './unit-list.html',
})
export class UnitList {

  units = signal<unit[]>([]);
  selectedUnits = signal<unit[]>([]);

  URL = "http://localhost:5116/api/units";

  constructor(private http: HttpClient){}


  public loadUnits(){
    this.http.get<unit[]>(this.URL).subscribe(data => {this.units.set(data); console.log(this.units())});
  }

  public ngOnInit(){
    this.loadUnits();
  }

  @Component({
    selector: 'unit-list',
    template: '<button (click)="handleClick($event)"<'
  })
  public addUnit(unitToAdd: unit){
    this.selectedUnits.update(current => [...current, unitToAdd]);
    
  }
}
