class MathUtil {
    static sum(...values) {
        let total = 0
        for (const num of values) {
            total += num
        }
        return total
    }
}


console.log(MathUtil.sum(1,1,1,1,1))