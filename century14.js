const biggerIsGreater = (w) => {
    if (typeof w !== 'string' || !w.match(/[a-zA-Z]/g)) return null;
    let input = w.toLowerCase().split("");
    for (let j = input.length - 1; j > 0; j--){
        if (input[j] > input[j - 1]){
            let n = j;
            for (let l = input.length - 1; l >= j; l--){
                if (input[l] > input[j - 1]){
                    n = l;
                    break;
                } 
            }
            let bubble = input[n];
            input[n] = input[j - 1];
            input[j - 1] = bubble;
            return input.splice(0, j).concat(input.reverse()).join("");
        }
    }
    return 'no answer';
}

let inputs = ['5', 'ab', 'bb', 'hefg', 'dhck', 'dkhc'];

inputs.map(item => {
    let result = biggerIsGreater(item);
    if (result) console.log(result);
});