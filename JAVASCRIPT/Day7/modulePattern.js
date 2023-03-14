/*The Module Pattern: design pattern used for improving the maintainability and reusability 
of the code by creating public and private access levels. Sometimes called encapsulation, 
it protects the value inside a module from being accessed from other scopes.
The module pattern is quite similar to an IIFE (immediately invoked functional expression), 
but a module always returns an object instead of a function.
 */


const createPerson = (function(){
    const name = 'Camila';
    const surname = 'Guillan';
    const age = 22;

    const getfullname = () => name + ' ' + surname;

    return{
        name, 
        surname,
        fullname : getfullname(), 
        age,
    }
})();

console.log(Object.values(createPerson));