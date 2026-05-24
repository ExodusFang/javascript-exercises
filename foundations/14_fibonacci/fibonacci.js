const fibonacci = function(num) {
    let prev = 0;
    let curr = 1;
    let placeholder;

    num = +num;

    for (let i = 1; i < num; i++) {
        placeholder = curr;
        curr += prev;
        prev = placeholder;
    }

    if (num === 0) curr = prev;
    else if (num < 0) return "OOPS";

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
