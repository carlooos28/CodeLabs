// logicos
/* 
 las estructuras de control de flujo, que son instrucciones del 
 tipo "si se cumple esta condición, hazlo; si no se cumple, haz esto otro". 
 También existen instrucciones del tipo "repite esto mientras se cumpla esta condición".
*/

var mostrarMensaje = true;
 
if(mostrarMensaje) {
  // alert("Hola Mundo");
}

var edad = 18;
 
if(edad >= 18) {
  // alert("Eres mayor de edad");
}
else {
  // alert("Todavía eres menor de edad");
}

// if anidados
/* 
if(edad < 12) {
  alert("Todavía eres muy pequeño");
}
else if(edad < 19) {
  alert("Eres un adolescente");
}
else if(edad < 35) {
  alert("Aun sigues siendo joven");
}
else {
  alert("Piensa en cuidarte un poco más");
}
*/

// for 

// inicialización 
// condición
// actualización

for(var i = 0; i < 5; i++) {
  // alert("Ciclo For item "+i);
}

/*
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
 
for(var i=0; i<7; i++) {
  alert(dias[i]);
}

 */

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
 
for(i in dias) {
  // console.log(dias[i]);
}

// switch 

let pais = "Colombia";

switch(pais) {
    case "Argentina":
        alert("Campeón "+pais);
        break;
    case "Colombia":
        alert("Campeón "+pais);
        break;
    default:
        alert("Campeón Rusia");
}

let item = 0;
let text = "";

// while
while (item < 10) {
    console.log("The number is " + item);
    item++;
}

