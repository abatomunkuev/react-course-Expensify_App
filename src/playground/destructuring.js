// OBJECT DESTRUCTURING

const person = {
    name: 'Andrei',
    age: 19,
    location: {
        city: 'Toronto',
        temp: 30
    }
};
// we can set default values 
const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}`);

// we renamed the temp variable by using renaming syntax in destructuring
const { city, temp: temperature } = person.location

if(city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}



const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, noName: Self-Published



// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street','Toronto','Ontario','12956'];
// skipping the first item by using comma down below
const [,addressCity,state = 'New York'] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];
const [itemName,,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);