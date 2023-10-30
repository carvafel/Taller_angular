import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './dataCourses';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }
  courses: Array<Course> = [];
  promedioCourse: number = 1;

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
}
getList(): Array<Course> {
  return dataCourses;
}

getpromedioCourse(courses: Course[]): number {
  let series: number = 0;
  let temporadas: number = 0;
  courses.forEach((course) => temporadas = temporadas + course.seasons);
  courses.forEach((course) => series = series + 1);
  const promedio: number = temporadas / series;
  console.log(promedio);
  return promedio;
}

  ngOnInit() {
    this.getCourses();
  }

}
