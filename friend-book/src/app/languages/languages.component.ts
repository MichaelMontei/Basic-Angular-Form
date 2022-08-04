import { Component, OnInit } from '@angular/core';
import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

  languages = [
    "Html",
    "Css",
    "Js",
    "Php",
    "C++",
    "Typescript",
    "Java",
  ]
  selected = "----"

  // @ts-ignore
  update(e){
    this.selected = e.target.value
  }
}
