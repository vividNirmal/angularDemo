import { Component, Input, input } from '@angular/core';
import { cosutomInput } from '../../../todo';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [NgSwitch,NgSwitchCase],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
})
export class CustomInputComponent {
  @Input() costomInput: any = cosutomInput;
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() inputType: string = '';
  @Input() placeholder: string = '';
  @Input() errormassege: string = '';

  constructor() {}
}
