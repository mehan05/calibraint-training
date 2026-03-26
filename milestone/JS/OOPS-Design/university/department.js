import { Student } from "./students.js";

export class Department {
  constructor(name, maxStudentCount) {
    this.name = name;
    this.maxStudentCount = maxStudentCount;
    this.students = [];
  }

  addStudents(...students) {
    if (students.length > this.maxStudentCount) {
      return (
        "Department cannot have more than " + this.maxStudentCount + " students"
      );
    }
    for (let student of students) {
      let studentObj = new Student(student.name, student.dob, student.department);
      this.students.push(studentObj);
    }
  }
}
