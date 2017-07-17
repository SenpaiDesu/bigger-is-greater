const biggerIsGreater = (w) => {
    if (typeof w !== 'string' || !w.match(/[a-zA-Z]/g)) break;
    for (var i = w.length - 1; i > 0; i--){
        if (w.charCodeAt(i) > w.charCodeAt(i - 1)) 
            return w.substr(0, i - 1) + w.charAt(i) + w.charAt(i - 1) + w.substr(i + 1); 
    }
    return 'no answer';
}

let inputs = ['5', 'ab', 'bb', 'hefg', 'dhck', 'dkhc'];

inputs.map(item => {
    console.log(biggerIsGreater(item));
})