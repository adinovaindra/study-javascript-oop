class Customer {
  firstName;
  lastName;
  balance = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}


const dino = new Customer("Adinova", "Indra")

console.log(dino)
