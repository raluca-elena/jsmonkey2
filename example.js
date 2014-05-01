console.log("ahadjkshajkdh");
function f1(){ return true; } 
var canFly = function(){ return true; }; 
window.isDeadly = function(){ return false; }; 
console.log(f1() , "bla");
console.log(canFly);
console.log("nothing left ", f1() && canFly() && isDeadly());
var personObject = {
    firstName : "John",
    lastName : "Smith"
}
personObject.age = 23;
personObject["salary"] = 14000;
//console.log("iaca", personObject.age);
//console.log(typeof f1());
console.log("blabla//////////////////");
function ralu(){
	console.log("here we are");
};
ralu.call();

var person = Object.create(null);
Object.defineProperty(person, 'fullName', function() {
  return this.firstName + ' ' + this.lastName;
});
 
// this time, let's make man's prototype person, so all
// men share the fullName function
var man = Object.create(person);
Object.defineProperty(man, 'sex', "male");

var ninja = function myNinja(){ 
	console.log("----------i am a function");
}; 
ninja(); 
