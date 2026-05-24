const palindromes = function (str) {
    const strArr = str.toLowerCase().match(/[a-z0-9]/g);
    return strArr.join("") === strArr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
