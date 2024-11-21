import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JokesServiceService } from './server/jokes-service.service';
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FormsModule, HeaderComponent,ReactiveFormsModule,CommonModule,ComponentsModule ],
})
export class AppComponent {
  title = 'routdemo';
  constructor(private jsonservice: JokesServiceService) {}

  fetch(): void {
    this.jsonservice.getItem().subscribe((data) => {
      console.log(data);
    });
  }
}
