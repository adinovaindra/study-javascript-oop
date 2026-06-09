class Configuration {
    static name = "Belajar JavaScript OOP"
    static version = 1.0
    static author = "Adinova Indra Permana"
}


const config = new Configuration()

console.log(config)

console.log(config.name) // undefined karena fields tersebut sekarang milik class, bukan instancenya
console.log(Configuration.name) // ini baru dia keluar "Belajar JavaScript OOP"