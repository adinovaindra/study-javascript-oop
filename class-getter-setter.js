class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const arrayName = value.split(" ");
    this.firstName = arrayName[0];
    this.lastName = arrayName[1];
  }
}

const person = new Person("Eko", "Khannedy");

person.fullName = "Adinova Indra"

console.log(person.fullName)
