import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormComponent } from '../page/form/form.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoaddformComponent } from './todoaddform/todoaddform.component';
import { ReactiveComponent } from './reactive/reactive.component';



@NgModule({
  declarations: [TemplateDrivenComponent,ReactiveComponent],
  imports: [
    CommonModule,
    HeaderComponent,
    FormComponent,
    TodolistComponent,
    TodoaddformComponent,
  ],
  exports: [TemplateDrivenComponent,ReactiveComponent]
})
export class ComponentsModule { }
