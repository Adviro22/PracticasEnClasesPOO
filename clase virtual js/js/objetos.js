const usuario = {
	nombre: 'Carlos',
	edad: 27,
	amigos: ['Alejandro', 'Cesar', 'Manuel'],
	
};


/*
	📌 Object.keys()
	Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
const resultados = Object.keys(usuario);

/*
	📌 Object.values()
	Nos devuelve un arreglo con los valores (values) del objeto.
*/
const resultados2 = Object.values(usuario);
console.log(resultados2)
/*
	📌 Object.entries()
	Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/
const resultados3 = Object.entries(usuario);

console.log(resultados3);
console.log(resultados);

console.log(`El objeto tiene ${resultados.length} propiedades`);
