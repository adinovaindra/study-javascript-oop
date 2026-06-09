class Person {
    constructor(name) {
        this.name = name
    }

    sayHello(nama) {
        return `Hello ${nama}, my name is ${this.name}`
    }
}


const dino = new Person("dino")

console.log(dino)
console.log(dino.name)
console.log(dino.sayHello('David'))
