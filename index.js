const biggerIsGreater = (w) => {
    if (typeof w !== 'string' || !w.match(/[a-zA-Z]/g)) return null;
    var input = w.split("");
    for (var i = input.length - 1; i > 0; i--){
        if (input[i] > input[i - 1]){
            var minDiff = input[i].charCodeAt(0) - input[i - 1].charCodeAt(0);
            var n = i;
            for (var j = input.length - 1; j >= i; j--){
                let diff = input[j].charCodeAt(0) - input[i - 1].charCodeAt(0);
                if (diff > 0 && diff < minDiff){
                    minDiff = diff;
                    n = j;
                }
            }
            let bubble = input[n];
            input[n] = input[i - 1];
            input[i - 1] = bubble;

            let swapped;
            do {
                swapped = false;
                for (var y = i; y < input.length - 1; y++){
                    if (input[y] > input[y + 1]){
                        let bubble = input[y];
                        input[y] = input[y + 1];
                        input[y + 1] = bubble;
                        swapped = true;
                    }
                }
            } while (swapped);
            
            return input.join("");
        }
    }
    return 'no answer';
}

let inputs = ['5', 'ab', 'bb', 'hefg', 'dhck', 'dkhc'];

inputs.map(item => {
    let result = biggerIsGreater(item);
    if (result) console.log(result);
});


