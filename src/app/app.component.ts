import { Component, OnInit} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit{

  // No longer needed, now handled by TodoListHeaderComponent
  // newTodo: Todo = new Todo();

  todos: Todo[] = [];

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
  }

  public ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      )
  }

  // No longer needed, now handled by TodoListHeaderComponent
  // addTodo() {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

  // Add new method to handle event emitted by TodoListHeaderComponent Without API
  // onAddTodo(todo: Todo) {
  //   this.todoDataService.addTodo(todo);
  // }
  onAddTodo(todo) {
    this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      )
  }

  // // rename from toggleTodoComplete Without API
  // onToggleTodoComplete(todo: Todo) {
  //   this.todoDataService.toggleTodoComplete(todo);
  // }
  onToggleTodoComplete(todo) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(
        (updatedTodo) => {
          todo = updatedTodo;
        }
      )
  }

  // // rename from removeTodo Without API
  // onRemoveTodo(todo: Todo) {
  //   this.todoDataService.deleteTodoById(todo.id);
  // }
  onRemoveTodo(todo) {
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      )
  }

  // get todos() {
  //   return this.todoDataService.getAllTodos();
  // }

}