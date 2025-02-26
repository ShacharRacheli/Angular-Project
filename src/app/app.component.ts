import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "../components/register/register.component";
import { LoginComponent } from "../components/login/login.component";
import { HomePageComponent } from "../components/home-page/home-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterComponent, LoginComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CoursesOnlineProject';
}
