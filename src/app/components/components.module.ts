import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TemplateDrivenComponent } from './form/template-driven/template-driven.component';
import { FormComponent } from '../page/form/form.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoaddformComponent } from './todoaddform/todoaddform.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,    
    FormComponent,
    TodolistComponent,
    TodoaddformComponent

  ]
})
export class ComponentsModule { }
