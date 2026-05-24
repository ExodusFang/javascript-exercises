const findTheOldest = function(personArr) {
    const calculateAge = person => person.yearOfDeath - person.yearOfBirth;
    return personArr.reduce((prev, curr) => calculateAge(curr) > calculateAge(prev) ? curr : prev);
};

// Do not edit below this line
module.exports = findTheOldest;
