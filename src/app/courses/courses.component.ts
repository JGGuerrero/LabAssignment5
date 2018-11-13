import { Component, OnInit } from '@angular/core';
interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  students: Array<IStudent> = [];

  editMode: boolean = false;

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Joshuah',
      lastName: 'Guerrero',
      course: 'Programming',
    }
    this.students[1] = {
      id: 1,
      firstName: 'Tom',
      lastName: 'Bray',
      course: 'Swimming',
    }
    this.students[2] = {
      id: 1,
      firstName: 'Mark',
      lastName: 'Zuc',
      course: 'Business',
    }
    this.students[3] = {
      id: 1,
      firstName: 'Joe',
      lastName: 'Biden',
      course: 'Politics',
    }
  }

  ngOnInit() {
  }

  addStudent() {
    this.editMode = true;
    const student: IStudent = {
      id: null,
      firstName: null,
      lastName: null,
      course: null
    };
    // this.students.push(student);
    this.students.unshift(student);
  }

  removeStudent(index: number) {
    console.log('from removeStudent function index: ', index);
    this.students.splice(index, 1);
  }

  saveStudent(index: number) {
    this.editMode = false;
  }
}
