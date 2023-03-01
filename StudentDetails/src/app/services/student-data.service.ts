import { Injectable } from '@angular/core';
import { Subjects } from '../add-student/add-student.component';
import { Student } from '../student';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  constructor() {}

  updateStudent(id: string, student: any) {
    let existingStudentIndex = this.studentList.findIndex((i) => id == i.id);
    delete this.studentList[existingStudentIndex];
    this.studentList.splice(existingStudentIndex, 1, student);
  }

  studentList: Student[] = [
    {
      id: '1',
      firstName: 'bharath',
      lastName: 'bharath',
      subject: 'Maths',
      grade: 'A',
    },
    {
      id: '2',
      firstName: 'john A',
      lastName: 'john A',
      subject: 'Physics',
      grade: 'B',
    },
    {
      id: '3',
      firstName: 'john B',
      lastName: 'john B',
      subject: 'Chemistry',
      grade: 'A',
    },
    {
      id: '4',
      firstName: 'john C',
      lastName: 'john C',
      subject: 'History',
      grade: 'B',
    },
    {
      id: '5',
      firstName: 'john D',
      lastName: 'john D',
      subject: 'Physics',
      grade: 'C',
    },
    {
      id: '6',
      firstName: 'john leo',
      lastName: 'john ',
      subject: 'Chemistry',
      grade: 'B',
    },
    {
      id: '7',
      firstName: 'john E',
      lastName: 'john E',
      subject: 'History',
      grade: 'B',
    },
    {
      id: '8',
      firstName: 'john F',
      lastName: 'john F',
      subject: 'Physics',
      grade: 'A',
    },
    {
      id: '9',
      firstName: 'john G',
      lastName: 'john G',
      subject: 'Chemistry',
      grade: 'B',
    },
    {
      id: '10',
      firstName: 'john H',
      lastName: 'john H',
      subject: 'Physics',
      grade: 'C',
    },
    {
      id: '11',
      firstName: 'john J',
      lastName: 'john J',
      subject: 'Chemistry',
      grade: 'B',
    },
    {
      id: '12',
      firstName: 'john K',
      lastName: 'john K',
      subject: 'History',
      grade: 'C',
    },
    {
      id: '13',
      firstName: 'john L',
      lastName: 'john L',
      subject: 'Physics',
      grade: 'B',
    },
  ];

  getAll() {
    return this.studentList;
  }

  getUser(id: string) {
    return this.studentList.find((student) => student.id == id);
  }

  subjectList: Subjects[] = [
    new Subjects('1', 'Maths'),
    new Subjects('2', 'English'),
    new Subjects('3', 'Chemistry'),
    new Subjects('4', 'Physics'),
    new Subjects('5', 'History'),
  ];
}
