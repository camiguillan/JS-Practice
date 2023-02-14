const person = {
    firstName: 'Camila',
    lastName: 'Guillan',
    email: 'camiguillan@gmail.com',
    age: '22',

    fullName(){ return this.firstName + ' ' + this.lastName;}
};

console.log(person.fullName());

//Getting the properties of a certain object
const keys = Object.keys(person);
console.log( "Person properties:", keys.join(', '));

//Getting the properties' values of a certain object
val = [];
keys.forEach(key => val.push(person[key]));
console.log( "Person properties; values:",val.join(', '));

//Another way to get properties' values
values = Object.values(person);
//console.log(values.join(', '));

