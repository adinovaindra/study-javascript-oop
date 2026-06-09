class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(nama) {
    return `Hello ${nama}, my name is employee ${this.firstName}`;
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }

  sayHello(nama) {
    return `Hello ${nama}, my name is manager ${this.firstName} ${this.lastName}`;
  }
}

const budi = new Employee("Budi");

console.log(budi.sayHello("Pram"));

const eko = new Manager("Eko", "Khannedy");

console.log(eko.sayHello("Pram"));
