const palindromes = function (str) {
    const strArr = str.split("");
    return !strArr.some((item, index) => strArr[index] != strArr[-(index + 1)]);
};

// Do not edit below this line
module.exports = palindromes;
