import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateDrivenComponent,ReactiveComponent],
  imports: [CommonModule,FormsModule],
  exports :[TemplateDrivenComponent,ReactiveComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormModule {}
