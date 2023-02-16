//USING TEST
let pattern = /[a-m]/;
let text = 'Hello, happy wednesday, hope you are having a great day ';
let text2 = 'wxyz';
let testResult = pattern.test(text);
console.log("Testing a regular expression object:", 
            testResult? 'Test completed successfully':'Test failed');

/* USING EXEC -> 
It searches a string for a specified pattern, and returns the found text as an object. */
let pattern2 = /a/;
let execResult = pattern2.exec(text);
console.log( "Searching for an a, I found it in position:" , execResult.index);
console.log(Object.keys(pattern2));