/* 📌 Tipos de datos que podemos guardar en las variables:
	string - Cadena de Texto
	number(intero, decimales) - Numero
	boolean - Booleano (verdadero o falso)
	object - Objeto
	function - Funciones

	null - Valor nulo
	undefined - Valor sin definir
*/
// 📌 Cadena de Texto
// con let de declara variables
let nombre = 'Daniel';
let parrafo = "Este es un 'parrafo'";
let parrafo2 = 'Este es un "parrafo"';
// 📌 Numero
let numero = 4;
let numero2 = -4.123;

// 📌 Boleano
let usuarioConectado = false;
let mayorQue = 10 > 20;
const PI = 3.1416
// PI = 3
console.log(PI,typeof(PI))
if (typeof(nombre) == ''){
    console.log("esto es una cadena")
}
console.log(mayorQue)
// 📌 Arrays - Arreglos
const arreglo = ['texto', 456, true, { propiedad: 'valor' }, [1, 2, 3]];
arreglo[1]=400
let x = arreglo[1]
console.log(x, arreglo[3]['propiedad'],arreglo[3].propiedad)

console.log(arreglo, typeof(arreglo));

// 📌 Objeto
const persona = {
	nombre: 'Carlos',
	edad: 27,
	carro: {
		marca: '...',
		color: ['rojo','azul','negro'],
	},
};
console.log(persona)
persona.carro.color[1] = "amarillo"
console.log(persona.carro.color[1])
// 📌 Function
function hola() {
	console.log('Hola');
}
hola();
// 📌 Null
// Normalmente lo usamos cuando queremos especificar que un valor sea nulo.
let miVariable = null;
console.log(miVariable)
// 📌 Undefined
// Undefined se usa para indicarnos que un valor no esta definido.
let miVariable2 = undefined;
let miVariable3;
console.log(miVariable2)
console.log(miVariable3)
console.warn('tipos de datos')
let nombres = 'Daniel Vera';
let edad = 54;
let pais = 'Ecuador';

console.log('La persona es ' + nombres + ' tiene ' + edad + ' años y es de ' + pais);
// template strings
console.log(`La persona es ${nombres} tiene ${edad} años y es de ${pais}`);

/* 📌 Operadores Aritmeticos
	=	Operador de asignación. Se usa para asignar valores a una variable
	+	Suma
	-	Resta
	*	Multiplicación
	/	Division
	%	Modulo
	++	Aumento
	--	Disminución
*/

// const resultado = 10 + 10;
// const resultado2 = 10 - 10;
// const resultado3 = 10 % 3;

// let numero = 1;
// numero--;

/*📌 Operadores de Asignación
	+=	Suma un numero al valor de una variable.
	-=	Resta un numero al valor de una variable.
	*=	Resta un numero al valor de una variable.
	/=	Resta un numero al valor de una variable.
	%=	Obtiene el sobrante de una division y lo asigna a la variable.
*/

let numero1 = 10;
// numero = numero + 5;
numero1 -= 5;

/* 📌 Operadores de Comparación:
Nos permiten comparar valores
	==		Igual que   5=5=verdadero o 5='5'=verdadero
	===		Igual en valor y tipo de valor 5=5 verdadero 5='5'=false
	!=		Diferente
	!==		Diferente en valor y diferente en typo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario
*/

// const resultado = 5 > 1; // true
// const resultado = 20 <= 20; // true
// const resultado = 10 == 10; // True (Solo compara el valor)
// const resultado = 10 === '10'; // false (compara si el valor es igual y si el tipo es igual)
const resultado = 7 > 10 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero';
console.log(resultado)
/* 📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

nombre = 'Daniel';
edad = 17;
let tieneEntrada = true;
let tienePermiso = true;

// Ejemplo #1 - &&
let permitirAcceso = edad >= 18 && tieneEntrada;
console.log('Acceso permitido al concierto: ' + permitirAcceso);

// Ejemplo #2 - OR
permitirAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
console.log('Acceso permitido al concierto: ' + permitirAcceso);

// 


