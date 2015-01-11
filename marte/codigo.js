var peso;
var pesoEnMarte; //CamelCase

alert("¿Quieres saber tu peso en marte?")
peso = prompt("¿Cuál es tu peso en kg?", "25");
peso = parseInt(peso);

pesoEnMarte = (peso/ 9.81) * 3.711;

alert( "Tu peso en Marte es: " + pesoEnMarte + " Kg.");

//alert: Función
// () : Parámetros de la función
// "" : Cadenas de texto
//var nombre = "Miguh";
//var apellido = "Ruiz";
//var edad = 3;

//alert(nombre + " " + apellido + "\n" + edad + " " + "años.");
//alert( "2" + 5 * 8 );