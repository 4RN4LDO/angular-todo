import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  todos: Todo[] = [];

  constructor(
    private api: ApiService
  ) { }

  // Simulate POST /todos Without API
  // addTodo(todo: Todo): TodoDataService {
  //   if (!todo.id) {
  //     todo.id = ++this.lastId;
  //   }
  //   this.todos.push(todo);
  //   return this;
  // }
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id Without API
  // deleteTodoById(id: number): TodoDataService {
  //   this.todos = this.todos
  //     .filter(todo => todo.id !== id);

  //   return this;
  // }
  deleteTodoById(todoId: number): Observable<Todo> {
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id Without API
  // updateTodoById(id: number, values: Object = {}): Todo {
  //   let todo = this.getTodoById(id);
  //   if (!todo) {
  //     return null;
  //   }
  //   Object.assign(todo, values);
  //   return todo;
  // }
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos Without API
  // getAllTodos(): Todo[] {
  //   return this.todos;
  // }
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // Simluate GET /todos/:id Without API
  // getTodoById(id: number): Todo {
  //   return this.todos
  //     .filter(todo => todo.id === id)
  //     .pop();
  // }
  getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

  // Toggle todo complete Without API
  // toggleTodoComplete(todo: Todo){
  //   let updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}
