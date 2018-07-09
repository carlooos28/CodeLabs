// funciones

function greeting(name) {
  return `Hello ${name} !`;
}
// alert(greeting("Carlos")); 


// Arrow Functions

/*

let greeting = (name) => `Hello ${name} !`
greeting("Carlos");

 */

// Scope de las variables

/*

var name = "Carlos"; 
function greeting() {
  return `Hello ${name} !`;
}
greeting();

 */


/* 

var name = "Carlos"; 
function greeting(name) {
  return `Hello ${name} !`;
}
greeting("Fedesoft"); 

*/  


/* 

var name = "Carlos"; 
function greeting() {
var name = "Joel"; 
  return `Hello ${name} !`;
}
greeting(); 



*/  


/* 

function greeting() {
var item; 
for (item = 0; item < 5; item++) {
      console.log(`Item ${item} !`);
  }
return `Value: ${item}`;
}
greeting(); 


*/
