const personOne = {
    'name': 'John Doe',
    'age': 32,
    'dob': '20-9-1990',
    'coursesEnrolledIn': ['DevOps', 'Software Engineering'],
    'school': 'Moringa',
};

// Methods
// 1. Retrieve a value given the key
const name = personOne.name;
console.log('Name =', name);

const age = personOne['age'];
console.log('Age =', age);

// 2. Add to the object
personOne['placeOfBirth'] = 'Nairobi';
console.log(personOne);

personOne.hospitalOfBirth = 'Nairobi Hospital';
console.log(personOne);