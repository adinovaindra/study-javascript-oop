class Person {
    say(name) {
        if(name) {
            return this.#sayWithName(name)
        } else {
            return this.#sayWithoutName()
        }
    }

    #sayWithoutName() {
        return `Hello`
    }

    #sayWithName(name) {
        return `Hello ${name}`
    }   
}


const dino = new Person()

console.log(dino.say('David'))