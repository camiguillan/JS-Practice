//creating a json -> JSON is often used when data is sent from a server to a web page.
// "people": [
//     {"firstName":"John", "lastName":"Doe"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Peter", "lastName":"Jones"}
// ] 

let jsonText =  '{"people": [' +
      '{"firstName":"John", "lastName":"Doe"},' +
      '{"firstName":"Anna", "lastName":"Smith"},' +
     ' {"firstName":"Peter", "lastName":"Jones"} ]}'

// changing a Json to a JS object
let json = JSON.parse(jsonText);
console.log("Converted a json to a JS object:", json);

// changin a JS json object to text again 
let jsonString = JSON.stringify(json);
console.log("Converted the Js json object to text again using stringify:",jsonString, '\n');
let jsonEval = eval("(" + jsonString + ")");
console.log(jsonEval);