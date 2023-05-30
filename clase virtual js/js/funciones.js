// 📌 Forma #1
// function saludo() {
// 	console.log('Hola!');
// }
// //const variable = saludo;
//variable();
// 📌 Forma #2 - Asignando una función a una variable.
// const saludo = function () {
// 	console.log('Hola desde variable!');
// };

// 📌 Forma #3 - Función de tipo flecha.
const saludo = () => {
    console.log('Hola!');
}
//saludo();

function suma(n1, n2){
    return n1 + n2
}

// const suma2 = (n1, n2) => n1+n2
// console.log(suma(5,4))
// console.log(suma2(5,4))

const obtenerPostsDeUsuario = (usuario, callback) => {
	console.log(`Obteniendo los post de ${usuario} ...`);
    // let posts = ['Post1', 'Post2', 'Post3'];
    // callback(posts);

	setTimeout(() => {
		let posts = ['Post1', 'Post2', 'Post3'];
		callback(posts);
	}, 2000);
};

obtenerPostsDeUsuario('carlos', (posts) => {
	console.log(posts);
});




