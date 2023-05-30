const nombres = ['jose','Carlos', 'Christian', 'Christoher', 'Estefania', 'Erika', 'Manuel', 'Diego','Daniel'];
// nombres.forEach((nombre) => {
// 	console.log(nombre);
// });

/* 
	📌 Ciclo For
	Repite un bloque de código mientras se cumpla una condición.

	Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
	Expresión 2: Una condicion, mientras se cumpla se ejecutara el bloque de código.
	Expresión 3: Esta expresion se ejecuta siempre y despues de que se ejecute el bloque de código.
*/

for (let numero = 0; numero < nombres.length;numero++) {
	
    console.log(numero,nombres[numero]);
}
/*
📌 Ciclo While
	Es similar a for, pero con la diferencia de que se puede colocar varias condiciones.
	Mientras se cumpla el condicional se ejecutara el ciclo.
*/
 let contador = 1;
 while (contador <= 10 && contador%5!=0) {
 	console.log(contador);
 	contador++;
 }

/* 
	📌 Ciclo Do While
	Es similar al ciclo while, con la diferencia de que ejecuta el bloque de código al menos una vez.
*/
let i = 1;
do {
	console.log(i);
	i++;
} while (i <= 10);