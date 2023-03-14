const movies = ["The God Father", "Star Wars", "Lord of de Rings", 
                "Terminator",
                "The Lion King"]; 

console.log("Most aclaimed movies:", movies.toString());
console.log("Most aclaimed movies:", movies.join(", "),'\n');

movies.push("Toy story");
console.log("Toy Story was added at the end:", movies.join(", "),'\n');

movies.unshift("Titanic");
console.log("Titanic was added at the beginning:", movies.join(", "),'\n');

console.log("So there are", movies.length, "movies \n");

const moviesAlph = movies.sort();
console.log("The movies where sort alphabetically:", movies.join(", "));


