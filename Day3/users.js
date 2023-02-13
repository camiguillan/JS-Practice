const month = ["January", "February", "March", "April", "May",
                "June", "July", "August", "September", "October",
                "November", "December"];

const user = {
    userName: "camiguillan" ,
    password: "12345678", 
    email:  "camiguillan@gmail.com", 
    firstName: "Camila",
    lastName: "Guillan",
    age: 22,
    registerFullDate: new Date(),
    
   fullName(){
     return firstName + ' ' + lastName;
   },

   isAnAdult(){
    return this.age > 18;
   },

   registerDay(){
    return this.registerFullDate.getDate();
   },

   registerMonth(){
    return month[this.registerFullDate.getMonth()]; //getMonth returns 0-11 value
   },

   registerYear(){
    return this.registerFullDate.getFullYear();
   }


}; 

console.log(user.registerFullDate);
console.log(user.registerDay());
console.log(user.registerMonth());
console.log(user.registerYear());


console.log('The user',user.userName, 'was registered on',
             user.registerMonth(),  user.registerDay(),
             "th", "in", user.registerYear())