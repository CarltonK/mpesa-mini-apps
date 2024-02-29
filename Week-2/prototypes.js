const myFirstString = 'Hello';
const mySecondString = 'World';

myFirstString.toUpperCase();
mySecondString.toUpperCase();

// Custom Constructor
function Vehicle(color, is4WD) {
    this.color = color;
    this.is4WD = is4WD;

    this.stop = () => {
        console.log('The car has stopped');
    }
}

// Custom Method for the Vehicle object
Vehicle.prototype.moveForward = function () {
    console.log('The car is moving forward now');
}

// Custom Method for the Vehicle object
Vehicle.prototype.reverse = function () {
    console.log('The car is in reverse now');
}

const premio = new Vehicle('red', false);
premio.reverse();
premio.stop();


String.prototype.punctuation = function () {
    return this + '!!!!!!!!!!';
}

const myString = 'Hello';
console.log(myString.punctuation());

Number.prototype.halve = function() {
    return this / 2;
}

const myNumber = 10;
console.log(myNumber.halve());