class Shape {
  paint() {
    console.log(`Paint shape`)
  }
}


class Circle extends Shape {
  paint() {
    super.paint()
    console.log(`Paint circle`)
  }
}


const coba1 = new Shape()

coba1.paint()

const coba2 = new Circle()

coba2.paint()