import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-leak-handler',
  templateUrl: './memory-leak-handler.component.html',
  styleUrls: ['./memory-leak-handler.component.css']
})
export class MemoryLeakHandlerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('memory leak works!');
  }

}