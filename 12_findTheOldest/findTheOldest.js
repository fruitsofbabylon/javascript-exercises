const findTheOldest = function(peopleArr) {
    return peopleArr.reduce((oldest, current) => {
        if (!oldest.yearOfDeath) {
            oldest.yearOfDeath = new Date().getFullYear();
        } else if (!current.yearOfDeath) {
            current.yearOfDeath = new Date().getFullYear();
        }
        let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let currentAge = current.yearOfDeath - current.yearOfBirth;
        return oldestAge < currentAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
