// logicos

/* 
Uno de los operadores lógicos más utilizados es el de la negación. 
Se utiliza para obtener el valor contrario al valor de la variable:
*/

var visible = true;
// alert(!visible);  // Muestra "false" y no "true"

// AND 

var valor1 = true;
var valor2 = false;
resultado2 = valor1 && valor2; // resultado = false
// alert(resultado2) 

valor1 = true;
valor2 = true;
resultado2 = valor1 && valor2; // resultado = true
// alert(resultado2) 

// OR 

var valor1 = true;
var valor2 = false;
resultado = valor1 || valor2; // resultado = true
 
valor1 = false;
valor2 = false;
resultado = valor1 || valor2; // resultado = false

// matématicos 

var numero1 = 10;
var numero2 = 5;
 
resultado = numero1 / numero2;  // resultado = 2
resultado = 3 + numero1;        // resultado = 13
resultado = numero2 - 4;        // resultado = 1
resultado = numero1 * numero2; // resultado = 50

// relacionales 

/* 

Los operadores relacionales definidos por JavaScript son idénticos a los que definen
las matemáticas: mayor que (>), menor que (<), mayor o igual (>=), menor o 
igual (<=), igual que (==) y distinto de (!=).

*/


var numero1 = 3;
var numero2 = 5;

resultado = numero1 > numero2; // resultado = false
resultado = numero1 < numero2; // resultado = true
 
numero1 = 5;
numero2 = 5;

resultado = numero1 >= numero2; // resultado = true
resultado = numero1 <= numero2; // resultado = true
resultado = numero1 == numero2; // resultado = true
resultado = numero1 != numero2; // resultado = false

// tipo cadena 

var texto1 = "hola";
var texto2 = "hola";
var texto3 = "adios";
 
resultado = texto1 == texto3; // resultado = false
resultado = texto1 != texto2; // resultado = false
resultado = texto3 >= texto2; // resultado = false
// console.log(resultado);

