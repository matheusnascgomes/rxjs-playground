import { Component, OnInit } from '@angular/core';
import { from } from "rxjs";
import {
  tap,
  map,
  debounceTime,
  distinctUntilChanged,
  distinctUntilKeyChanged
} from "rxjs/operators";

@Component({
  selector: 'app-until-key-changed',
  templateUrl: './until-key-changed.component.html',
  styleUrls: ['./until-key-changed.component.css']
})
export class UntilKeyChangedComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const names = [
      { name: "Bruna Gabrielly Catarina Lopes" },
      { name: "João Antonio Edson Viana" },
      { name: "Victor Raul Nicolas da Luz" },
      { name: "Maitê Helena Silveira" },      
      { name: "Maitê Helena Silveira" },      
      { name: "Maitê Helena Silveira" },      
      { name: "Maitê Helena Silveira" },      
    ];

    const source$ = from(names);

    source$
      .pipe(
        // Emite apenas valores cuja chave 'name' é destinta
        distinctUntilKeyChanged("name")
      )
      .subscribe(console.log);
  }

}