import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-app';
  todos = [
    { id: Math.random(), name: 'Task 1', done: false },
    { id: Math.random(), name: 'Task 2', done: true },
    { id: Math.random(), name: 'Task 3', done: false },
    { id: Math.random(), name: 'Task 4', done: true },
    { id: Math.random(), name: 'Task 5', done: false },
    { id: Math.random(), name: 'Task 6', done: true },
  ];

  addTodo(name = '') {
    this.todos.push({ id: Math.random(), name, done: false });
  }

  add1000Todos() {
    for (let i = 0; i < 1000; i++) {
      this.addTodo(`New task ${i}`);
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
