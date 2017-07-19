const solveProblem = () => {
    for (let i = 999; i > 0; i--){
        let result = Math.pow(i, 2).toString().split("");
        let memory = result.join("");
        result.reverse();
        result = result.join("");
        if (result == memory) return [i, i];
        result = i * (i - 1);
        result = result.toString().split("");
        memory = result.join("");
        result.reverse();
        result = result.join("");
        if (result == memory) return [i, i - 1];
    }
}