//MODIFIERS REGULAR EXPRESSIONS
let text = "Hello world, my name is CAMILA";
let posMatch = text.search(/camila/i); //Using a regular expression to do an case-insensitive search
console.log('Text',text, '\n', "The word camila starts at position:", posMatch);

//Finding and replaicing a word using regular expressions
let newText = text.replace(/camila/i, "Javascript");
console.log("New text:", newText, '\n' );


//g is for global match
let text2 = "Hello, good morning! Hope you had a good weekend";
let newText2=  text2.replace(/good/g, "happy");
console.log("Using regular expressions with g \n Text2:",text2,
    "\n Replace good with happy:", newText2, '\n'  );

//BRACKETS
let matchResult = text.match(/[a-l]/g);
console.log("Using complex Regular Expression with brackets : ",matchResult.join(', '));

//METACHARACTERS
let metaS = text.match(/\s/g);
console.log("Using complex Regular Expression with METACHARACTERS :", metaS.length);

//QUANTIFIERS
let quanti = text.match(/,+/g);
console.log("Using complex Regular Expression with QUANTIFIERS:", quanti.length);