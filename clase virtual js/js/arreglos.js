// const arreglo = ['Texto', 456.1, false, { propiedad: 'valor' }, [1, 2, 3]];
// console.log(arreglo);

// const amigos = ['Alejandro', 'Manuel', 'Cesar'];
// console.log(amigos[0]);

// const colores = [];
// colores[0] = 'Rojo';
// colores[1] = 'Verde';
// colores[3] = 'Blanco';
// colores[3] = 'Amarillo';

// console.log('El arreglo colores tiene: ' + colores.length + ' colores');

// colores.push('Azul');
// console.log(colores);

// metodos de los arreglos
const colores = ['Rojo', 'Verde', 'Azul'];
/* 
	📌 .length 
	(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/
//console.log(colores.length);

/*
	📌 .toString() 
	Nos permite transformar un arreglo a una cadena de texto.
	Por ejemplo para poder mostrarlo en el navegador.
*/
//console.log(document.body.innerHTML)
//console.log(document.body.innerText)
//document.body.innerHTML = colores.toString();
//console.log(document.body.innerText)

/*
	📌 .join()
	Nos permite transformar un arreglo a una cadena de texto y separar cada elemento. 
*/

//console.log(colores);
//console.log(colores.join(';'));
let cadena = "hola;como;estas"
let mensaje = cadena.split(";")
//console.log(cadena)
//console.log(mensaje)
/*
	📌 .sort()
	Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/
const letras = ['c', 'b', 'd', 'a'];
//console.log(letras.sort());
//console.log(letras)
// const numeros = [3, 2, 4, 1];
// console.log(numeros.sort());

/*
	📌 .reverse()
	Nos permite ordenar un arreglo de forma descendente. 
*/
//console.log(letras.reverse());
// console.log(numeros.reverse());

/*
	📌 .concat()
	Nos permite juntar dos arreglos en uno solo. 
*/
//const arreglo1 = [1, 2, 3];
//let arreglo2 = ['A', 'B', 'C'];
//arreglo2 = arreglo2.concat(arreglo1);

//console.log(arreglo2);

/* 
	📌 .push()
	Nos permite agregar un elemento al final de un arreglo.
*/
colores.push('Amarillo');
//console.log(colores);

// /*
// 	📌 .pop()
// 	Nos permite eliminar el ultimo elemento de un arrreglo. 
// */
colores.pop();
//console.log(colores);

// /* 
// 	📌 .shift()
// 	Elimina el primer elemento de un arreglo y recorre los elementos.
// */
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
const diaEliminado = dias.shift();
// console.log(dias)
// console.log(diaEliminado);
// console.log(dias[0]);

// /*
// 	📌 .unshift()
// 	Agrega un elemento al inicio del arreglo y empuja los elementos.
// */
dias.unshift('Carlos');
// console.log(dias);
// // /* 
// 	📌 .splice()
// 	Nos permite insertar elementos a un arreglo donde le especifiquemos.
// 	- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
// 	- 2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada.
// 	- Resto de parametros - Los elementos a insertar.
// */

const amigos = ['Alejandro', 'Cesar', 'Manuel'];
// console.log(amigos)
// amigos.splice(0, 2);
// console.log(amigos);

// /* 📌 .slice()
// 	Nos permite copiar una parte de un arreglo a otro.
// 	- 1er parametro - Posición desde donde queremos copiar.
// 	- 2do parametro - Hasta antes de que elemento copiar.
// */
const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];
console.log(frutas)
const frutasFavoritas = frutas.slice(1, 4);
console.log(frutasFavoritas);