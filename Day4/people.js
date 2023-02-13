const person = {
    firstName: 'Camila',
    lastName: 'Guillan',
    email: 'camiguillan@gmail.com',
    age: '22',

    fullName(){ return this.firstName + ' ' + this.lastName;}
};



console.log(person.fullName());
const keys = Object.keys(person);
console.log(keys.join(', '));

val = [];
values = Object.keys(person).forEach(key => val.push(person[key]));
console.log(val.join(', '));