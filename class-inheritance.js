class Employee {
    sayHello(nama) {
        return `Hello ${nama}, my name is employee ${this.name}`
    }
}

class Manager extends Employee {
    sayHello(nama) {
        return `Hello ${nama}, my name is manager ${this.name}`
    }
}

const budi = new Employee()
budi.name = "Budi"

console.log(budi.sayHello("Pram"))

const eko = new Manager()
eko.name = "Eko"

console.log(eko.sayHello("Pram"))