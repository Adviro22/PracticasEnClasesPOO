const nombres = ['Carlos', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara', 'Rafael', 'Josue', 'Esmerlada'];
console.log(nombres.indexOf('Rafael'));

console.log(nombres.lastIndexOf('Rafael'));

nombres.forEach((nombre, index) => {
	console.log(`Nombre: ${nombre}, Posición: (${index})`);
});

const resultado = nombres.find((nombre) => {
	if (nombre[0] === 'J') {
		return nombre;
	}
});
console.log(resultado);

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});

console.log(numbers);
console.log(doubles);