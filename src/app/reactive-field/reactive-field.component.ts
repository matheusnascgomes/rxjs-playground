import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {
  tap,
  map,
  debounceTime,
  distinctUntilChanged,
  distinctUntilKeyChanged
} from "rxjs/operators";
@Component({
  selector: 'app-reactive-field',
  templateUrl: './reactive-field.component.html',
  styleUrls: ['./reactive-field.component.css']
})
export class ReactiveFieldComponent implements OnInit {

  search = new FormControl("");

  constructor() { }

  ngOnInit() {
      this.search.valueChanges
      .pipe(
        // Evita a emissão de valores dentro de um
        // tempo especificado
        debounceTime(300),
        // Evite a emissão de valores repetidos
        distinctUntilChanged(),
        // Imprime valor em tela
        tap(value => {
          console.log(`API Request`);
        })
      )
      .subscribe();
  }

}