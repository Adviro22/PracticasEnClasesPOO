// Default export is a4 paper, portrait, using milimeters for units
/*var doc = new jsPDF();
doc.text('Hello world!', 10, 10)
doc.save('a4.pdf')*/

//Variables
let nombre = "Josue";
let parrafo = "Este es un 'parrafo'";
let parrafo2 = 'Este es otro "Parrafo"'

// Numero
let numero = 4;
let numero2 = -4.123

// Booleano
let usuarioConectado = false;
let mayorQue = 10 > 2;
const PI = 3.1416;
console.log(PI)
console.log(PI, typeof(PI))
if(typeof(nombre) == 'string'){
    console.log("Esto es un string")
}
console.log(mayorQue)

//Arreglos
const arreglo = ['texto', 456, true, { propiedad: 'valor'}];
arreglo[1] = 400;
console.log(arreglo[1])
let x = arreglo[1]
console.log(x, arreglo[3].propiedad, arreglo[3]['propiedad'])

//Objeto
const persona = {
    nombre: "Josue",
    edad: 21,
    carro: {
        marca: '...',
        color: ['rojo', 'azul', 'negro'],
    },
}
console.log(persona)
persona.carro.color[1] = "amarillo";
console.log(persona.carro.color[1])

// Function
function hola(){
    console.log('Hola');
}

hola();

//Null
let miVariable = null;

//Undefined
let miVariable2 = undefined;

console.log(miVariable)
console.log(miVariable2)

let nombres = "Josue Ortiz";
let edad = 21;
let pais = "Ecuador";

//template strings
console.log(`Me llamo ${nombre}, tengo ${edad} años de edad y vivo en ${pais}`)
