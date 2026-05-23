const sumAll = function(start, end) {
    let trueStart = start;
    let sum = 0;

    if (start > end) {
        trueStart = end;
        end = start;
    }

    for (let i = trueStart; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
