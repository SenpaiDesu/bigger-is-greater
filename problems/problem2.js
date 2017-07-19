const solveProblem = () => {
    let prev = 1, curr = 2, i = 1;
    let sum = curr;
    while (curr < 4 * Math.pow(10, 6)) {
        let memory = curr;
        curr = prev + curr;
        prev = memory;
        if (i % 2 == 0) sum += curr;
        i++;
    }
    return sum;
}