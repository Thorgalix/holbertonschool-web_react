// Task 1
interface Teacher{
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any;
}
// Task 2
interface Directors extends Teacher{
    numberOfReports: number
}
// Task 3
interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}
// Task 4
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}


// Tests
// Test 1
const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "Paris",
  contract: false
};
console.log(teacher);
// Test 2
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
// Test 3
console.log(printTeacher("Lucas", "Podevin"))
// Test 4
const student = new StudentClass("Jean", "Neige")
console.log(student)
