import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormComponent } from '../page/form/form.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule, ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';
import { TodoaddformComponent } from './todoaddform/todoaddform.component';



@NgModule({
  declarations: [TemplateDrivenComponent,ReactiveComponent,TodoaddformComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FormComponent,
    TodolistComponent,
  ],
  exports: [TemplateDrivenComponent,ReactiveComponent,TodoaddformComponent]
})
export class ComponentsModule { }
