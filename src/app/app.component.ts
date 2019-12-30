import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  todos =[
    
  ];

  addTodo(newTodoLabel, todoPriority) {
    var newTodo = {
      label: newTodoLabel,
      priority: todoPriority,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }
  setDone(todo) {
    if (todo.done == false) {
      todo.done = true;
    } else {
      todo.done = false;
    }
    
}

}
