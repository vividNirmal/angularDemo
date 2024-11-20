
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css',
})
export class TemplateDrivenComponent {
  constructor() {}
  title: string = '';
  description: string = '';
  username: string = '';

  TemplateDrivenForm(): void {
    const todo = {
      title: this.title,
      description: this.description,
      username: this.username,
    };
    console.log(todo);
  }
}
