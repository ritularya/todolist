import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  activity = ["Hunting", "Homework"];
  sub = ["Maths", "OS", "Computer Networks"];
  animals = ["Bear", "Boar", "Tiger"];
  message: string = "Hello!!";
  inputValue : string = "Initial String";
  checked = false;
  indeterminate = false;
}