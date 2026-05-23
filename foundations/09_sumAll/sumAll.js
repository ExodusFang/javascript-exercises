const sumAll = function(start, end) {
    let trueStart = start;
    let sum = 0;

    if (typeof start !== "number" ||
        typeof end !== "number" ||
        start < 0 ||
        end < 0 ||
        !Number.isInteger(start) ||
        !Number.isInteger(end)
    ) return "ERROR";

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
