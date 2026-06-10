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

console.log(MathUtil.sum());