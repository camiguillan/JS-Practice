const vehicle = {
    vehicleType: "car",
    colour: "red",

}

const hasColour = vehicle.hasOwnProperty('colour');
console.log("Has object property 'colour'?", hasColour ? "Yes, it has it" : "No, it hasn't" );


//Creating another object based on the one already created (prototype)
const object2 = Object.create(vehicle);
console.log( "Prototype of object2:" , Object.getPrototypeOf(object2));
console.log("Prototype of object1:" ,Object.getPrototypeOf(vehicle));

//Changing properties' values from object 2
object2.vehicleType = "bus";
object2.colour = "green"; 

//Returns the reference to the constructor function that created the object 
console.log( `The object2.constructor is:`, object2.constructor);


//cheking the type of an object
var vehicleType = vehicle instanceof Object;
console.log("Is it an object? (using instanceof)", vehicleType ? "Yes, it is an object" : "No, it is not an object");

// Comparing both objects 
function compareObjects(obj1, obj2){
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2); 

    const len1 = keys1.length;
    const len2 = keys2.length;

    let result = '';

    let n = 0; // amount of equal properties

    if (len1 == len2){
        for(i = 0; i < len1; i++ ){
            prop1 = keys1[i];
            prop2 = keys2[i];
            if(prop1 != prop2)
                result = "THE OBJECTS HAVE NOT GOT THE SAME PROPERTIES"
            else 
                n ++;
        }

        // if the amount of equal properties is equal to the amount of properties of both objects, they are almost equal objects
        if(n == len1) 
            result = "The objects have equal properties"
    }
    else
        result = "The objects are different, they do not have the same amount of properties";
    
    return result; 
}

compar = compareObjects(vehicle,object2);
console.log("Comparing both objects:", compar);

       


