import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  @Input() todo: any = Todo;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();

  OnClick(id:Todo) {
    this.todoDelete.emit(id);    
  }
  
}
