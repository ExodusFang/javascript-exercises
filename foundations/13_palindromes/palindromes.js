const palindromes = function (str) {
    return !str.split("")
               .some(
                    (item, index) => strArr[index] != strArr[-(index + 1)]
                );
};

// Do not edit below this line
module.exports = palindromes;
