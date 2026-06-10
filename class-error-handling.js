class MathUtil {
  static sum(...values) {
    if (values.length === 0) {
      throw new Error("Paramater must be included min of 1 number");
    }
    let total = 0;
    for (const num of values) {
      total += num;
    }
    return total;
  }
}

// console.log(MathUtil.sum())

try {
  console.log(MathUtil.sum());
  console.log("kode akan dijalankan");
} catch (error) {
  console.log(error.message);
}

console.log("Program selesai.");

class Counter {
  #counter = 1;

  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}

const counter = new Counter();

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());