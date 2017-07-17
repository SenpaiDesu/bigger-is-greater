const biggerIsGreater = (w) => {
    if (typeof w !== 'string') return 'need string..';
    for (var i = w.length - 1; i > 0; i--){
        if (w.charCodeAt(i) > w.charCodeAt(i - 1)) 
            return w.substr(0, i - 1) + w.charAt(i) + w.charAt(i - 1) + w.substr(i + 1); 
    }
    return 'no answer';
}