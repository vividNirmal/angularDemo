import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {}
