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

/**Créer un tableau html*/

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
