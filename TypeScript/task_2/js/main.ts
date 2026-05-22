// Task 5

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return("Working from home");
    }
    getCoffeeBreak() {
        return("Getting a coffee break");
    }
    workDirectorTasks() {
        return("Getting to director tasks")
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return("Cannot work from home");
    }
    getCoffeeBreak() {
        return("Cannot have a break");
    }
    workTeacherTasks() {
        return("Getting to work");
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Task 6
type Employee = Teacher | Director;

function isDirector(employee: Employee): employee is Director {
    return "workDirectorTasks" in employee;
}

function executeWork(employee: Employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// Task 7
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if(todayClass === "Math") {
        return("Teaching Math")
    } else {
        return("Teaching History")
    }
}


// TESTS 5
console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));

// TESTS 6
console.log(executeWork(createEmployee(200)));

console.log(executeWork(createEmployee(1000)));

// TESTS 7
console.log(teachClass('Math'));

console.log(teachClass('History'));
