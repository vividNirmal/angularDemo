import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css"
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: [""],
    password: [""]
  });
  onSubmit() {
    console.log(this.loginForm.value);
  }

  constructor(private fb: FormBuilder) {}
}
