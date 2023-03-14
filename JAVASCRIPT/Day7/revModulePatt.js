/*The Revealing Module Pattern: is an improvement made to the module pattern where we write the entire object
 logic in the private scope of the module and the public parts are exposed by returning an anonymous object.
The purpose of the revealing module pattern is to maintain encapsulation 
and reveal certain variables and methods returned in an object literal
 */


const createPet = (function(){
    const sp = "Dog";
    const nam = "Max";
    const age = 2;
    const colours = ["brown", "white"];

    const getSpecie = () => sp;
    const getName = () => nam;
    const getAge =() => age;
    const getColour = () => colours.join(', ').toUpperCase();

    return{
        specie : getSpecie(),
        name: getName(),
        age: getAge(),
        colors: getColour(),
    }

})();

console.log(Object.values(createPet));