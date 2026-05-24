const findTheOldest = function(personArr) {
    const CURRENT_YEAR = new Date().getFullYear();
    const calculateAge = person => "yearOfDeath" in person ? person.yearOfDeath - person.yearOfBirth : CURRENT_YEAR - person.yearOfBirth;
    return personArr.reduce((prev, curr) => calculateAge(curr) > calculateAge(prev) ? curr : prev);
};

// Do not edit below this line
module.exports = findTheOldest;
