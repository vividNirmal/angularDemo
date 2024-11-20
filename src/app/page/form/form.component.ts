import { Component } from '@angular/core';
import { FormModule } from '../../components/form/form.module';
import { ReactiveComponent } from "../../components/form/reactive/reactive.component";
import { TemplateDrivenComponent } from "../../components/form/template-driven/template-driven.component";


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormModule, ReactiveComponent, TemplateDrivenComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
