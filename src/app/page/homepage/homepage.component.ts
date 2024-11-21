import { Component, OnInit, SimpleChange } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from '../../components/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { JokesServiceService } from '../../server/jokes-service.service';
import { CustomInputComponent } from '../../components/formInput/custom-input/custom-input.component';
import { ComponentsModule } from "../../components/components.module";
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, TodolistComponent, FormsModule, CustomInputComponent, ComponentsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  todos: Todo[] = [];
  joke: any = [];
  nameInput: object = {};
  checkInput: object = {};
  constructor(private jokeservice: JokesServiceService) {
    this.todos = [
      {
        id: 1,
        title: 'Learn Angular1',
        description: 'new project to angular to worck on it',
        completed: true,
      },
      {
        id: 2,
        title: 'Learn Angular',
        description: 'new project to angular to worck on it',
        completed: true,
      },
      {
        id: 3,
        title: 'Learn Angular 3',
        description: 'new project to angular to worck on it 3',
        completed: true,
      },
    ];
    this.nameInput = {
      name: 'name',
      type: 'text',
      value: 'nirmal',
    };
    this.checkInput = {
      name: 'check',
      type: 'checkbox',
      value: 'nirmal',
    };
  }

  ngOnInit(): void {
    this.fetchapi();
  }

  deleteTodo(event: Todo) {
    const index = this.todos.indexOf(event);
    index !== -1 && this.todos.splice(index, 1);
  }

  addtodo(todo: Todo) {
    this.todos.push(todo);
  }

  fetchapi(): void {
    this.jokeservice.getItem().subscribe({
      next: (data: any) => {
        this.joke = data;
      },
    });
  }
}
