/*
	📌 .toString()
*/
let numero = 10;
console.log(numero, typeof numero);

let texto = numero.toString();
console.log(texto, typeof texto);

/*
	📌 .toFixed()
	Permite obtener un numero con la cantidad de decimales especificados
*/
numero = 3.1415;
texto=numero.toFixed(2)
console.log(texto, typeof(texto));

/*
	📌 parseInt()
	Intenta transformar un valor a un entero.
*/
// let numero1 = parseInt(prompt('Escribe un numero'));
// let numero2 = parseInt(prompt('Escribe un numero'));
// console.log(numero1 + numero2);

/*
	📌 .parseFloat()
	Intenta transformar un valor a un numero con decimales.
*/
// numero1 = parseFloat(prompt('Escribe un numero'));
// numero2 = parseFloat(prompt('Escribe un numero'));
// console.log(numero1 + numero2);

/*
	📌 Math.random()
	Genera un numero al azar entre 0 y 1
*/
numero = Math.ceil(Math.random()*10);
console.log(numero);

/*
	📌 Math.floor()
	Redondea hacia abajo un numero.
*/
console.log(Math.floor('10.1'));
console.log(Math.floor('10.99'));

// /*
// 	📌 Math.ceil()
// 	Redondea hacia arriba un numero.
// */
console.log(Math.ceil('10.1'));
console.log(Math.ceil('10.99'));

// /*
// 	📌 Math.round()
// 	Redondea hacia el entero mas cercano
// */
console.log(Math.round('10.1'));
console.log(Math.round('10.99'));

// /*
// 	📌 Ejemplo de numero al azar de 0 a 500
// */
numero = Math.random();
console.log(Math.floor(numero * 501));