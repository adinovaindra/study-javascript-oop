class Employee {

}

class Manager extends Employee{

}


const dino = new Employee()


const indra = new Manager()

console.log(dino instanceof Manager) // false
console.log(dino instanceof Employee) // true
console.log(Employee instanceof Manager) // false
console.log(Manager instanceof Employee) // false