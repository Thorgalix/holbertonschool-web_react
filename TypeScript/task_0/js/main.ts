interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Lucas",
    lastName: "Podevin",
    age: 32,
    location: "Dijon"
}

const student2: Student = {
    firstName: "Mahmoud",
    lastName: "Bouate",
    age: 22,
    location: "Chalon-sur-Saone"
}

const studentsList: Student[] = [student1, student2]
