import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger('fade', [

      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)'}))
      ]),

      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
      ]),

    ])
  ]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  beforeEditCache: string;
  filter: string;  
  anyRemainingModel: boolean;

  group: string;
  deadline :string;


  constructor() { }

  ngOnInit() {
    this.anyRemainingModel = true;
    this.filter = 'all';
    this.beforeEditCache = '';
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
        'id': 1,
        'title': 'Pahtelda elutuba.',
        'completed': false,
        'editing': false,

        'homeRenovation': true,
        'schoolwork'    : false,
        'projects'      : false,

        'deadline'      : "2019-10-30",
      },
      {
        'id': 2,
        'title': 'Lõpeta C++ kodused ülesanded.',
        'completed': false,
        'editing': false,

        'homeRenovation': false,
        'schoolwork'    : true,
        'projects'      : false,

        'deadline'      : "2019-10-30",
      },
      {
        'id': 3,
        'title': 'Tee Windowsi puhas paigaldus.',
        'completed': false,
        'editing': false,

        'homeRenovation': false,
        'schoolwork'    : false,
        'projects'      : true,

        'deadline'      : "2019-10-30",
      },
    ];
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0 || 
        this.deadline.trim().length === 0) 
    {
      return;
    }

    this.todos.push(
    {
      id            : this.idForTodo,
      title         : this.todoTitle,
      completed     : false,
      editing       : false,
      
      homeRenovation: (this.group === 'homeRenovation'),
      schoolwork    : (this.group === 'schoolwork'),
      projects      : (this.group === 'projects'),

      deadline      : this.deadline,
    })

    this.todoTitle = '';
    this.idForTodo++;
  }

  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }

    this.anyRemainingModel = this.anyRemaining();
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  checkAllTodos(): void {
    this.todos.forEach(todo => todo.completed = (<HTMLInputElement>event.target).checked)
    this.anyRemainingModel = this.anyRemaining();
  }

  anyRemaining(): boolean {
    return this.remaining() !== 0;
  }

  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }
    return this.todos;
  }

  todosGrouped(x:Todo[]): Todo[]
  {
    if (this.group ==='all')
    {
      return x;
    }
    else if (this.group === 'homeRenovation') 
    {
      return x.filter(todo => todo.homeRenovation);
    }
    else if (this.group === 'schoolwork') 
    {
      return x.filter(todo => todo.schoolwork);
    }
    else if (this.group === 'projects') 
    {
      return x.filter(todo => todo.projects);
    }
    return x;
  }

}

