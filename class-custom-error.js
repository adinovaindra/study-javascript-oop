class ValidationError extends Error {
  constructor(message, fields) {
    super(message);
    this.fields = fields;
  }
}

class MathUtil {
  static sum(...values) {
    if (values.length === 0) {
      throw new ValidationError(
        "Parameter must be included min of 1 number",
        "values",
      );
    }
    let total = 0;
    for (const num of values) {
      total += num;
    }
    return total;
  }
}

try {
  console.log(MathUtil.sum());
  console.log("kode akan dijalankan"); // hanya dijalankan apabila MathUtil.sum() tidak menghasilkan error
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Error berasal dari ${error.fields} dengan pesan ${error.message}`);
  } else {
    console.log(error.fields);
  }
} finally {
  console.log("Program selesai.");
}
