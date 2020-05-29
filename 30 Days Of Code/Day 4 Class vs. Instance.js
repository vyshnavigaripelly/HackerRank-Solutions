function Person(initialAge) {
    var age = initialAge;
    this.amIOld = function () {
        if (age < 13 && age > -1)
            console.log("You are young.");
        else if (age < 18 && age > 12)
            console.log("You are a teenager.");
        else if (age > 17)
            console.log("You are old.");
        else {
            console.log("Age is not valid, setting age to 0.")
            age = 0;
            this.amIOld();
        }
    };
    this.yearPasses = function () {
        age++;
    };
}