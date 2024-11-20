import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todoaddform',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './todoaddform.component.html',
  styleUrl: './todoaddform.component.css',
})
export class TodoaddformComponent {  
  constructor(private fb:FormBuilder) {}
  todoForm = this.fb.group({
    title: ['', Validators.required],
    description: ['',Validators.required],
    username: ['',Validators.required]
  });
  
  
  // props pass child to parnt
  @Output() todoadd: EventEmitter<{
    id: number;
    title: any;
    description: any;
    username: any;
    completed: boolean ;
  }> = new EventEmitter();

  // props pass parnt to child
  @Input() formname: string = '';

  OnSubmit():void {
    const values = this.todoForm.value;
    
    const todo = {
      id: Math.random(),
      title: values.title,
      description: values.description,
      username: values.username,
      completed: true,
    };
    this.todoadd.emit(todo);    
    this.todoForm.reset();      
  }
}
