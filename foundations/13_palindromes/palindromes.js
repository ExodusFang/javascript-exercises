const palindromes = function (str) {
    const strArr = str.toLowerCase().split("");
    return strArr.every((item, index) => item === strArr.at(-(index + 1)));
};

// Do not edit below this line
module.exports = palindromes;
