import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { AuthService } from '../../services/auth.service';
import { Course } from '../../models/course';
import { response } from 'express';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{

 public allCourses:any
constructor(private coursesService:CoursesService){}
ngOnInit(): void {
  this.coursesService.getCourses().subscribe({
    next: response => {
      this.allCourses = response; // Assign the response to allCourses
      console.log(this.allCourses);
      
    },
    error: e => {
      console.error(e.error.message);
    }
  });
  }

}
// Authorization: Bearer <your_token>
// intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   const token = this.authService.getToken();

//   // אם יש טוקן, נוסיף אותו ל-Authorization Header
//   if (token) {
//     request = request.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}` // ככה שולחים את הטוקן
//       }
//     });
//   }

//   return next.handle(request);
// }
