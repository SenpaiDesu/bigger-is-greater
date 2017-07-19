const solveProblem = (num) => {
    let largestPrimeFactor = 1;
    for (let i = 2; i <= Math.sqrt(num); i++){
        let rest = num % i;
        if (rest == 0) largestPrimeFactor = i;
    }
    return 
}