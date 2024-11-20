import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
  constructor(){}
  @Input() counter:number=0;
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  clear(){
    this.counter=0;  
  }
}
