/*
	📌 API para trabajar con fechas 
	Javascript expone su API para que podamos trabajar con fechas.

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/*
	📌 Crear un objeto de fecha
	Para poder trabajar con fechas primero tenemos que crear un objeto de fecha.
*/
// Fecha actual
let fechaActual = new Date();
// // console.log(fechaActual);

// const cumpleaños = new Date('1969-05-21T12:05:03');
// console.log(cumpleaños);

/*
	📌 Metodos para trabajar con fechas
*/
console.log(fechaActual.toString());
console.log(fechaActual.toDateString());
console.log(fechaActual.toTimeString());
console.log(fechaActual.toLocaleDateString());
// Obtener mes
console.log(fechaActual.getMonth()+1);
// Obtener día
console.log(fechaActual.getDate());
// Obtener año
console.log(fechaActual.getFullYear());
console.log(fechaActual.toLocaleTimeString());

let tiempo,c=0


const hora= setInterval(()=>{
    c=c+1
    fechaActual = new Date();
    let hh = fechaActual.getHours()
    let mm = fechaActual.getMinutes()
    let ss = fechaActual.getSeconds()
    tiempo= `${hh}:${mm<10 ? 0: ""}${mm}:${ss<10 ? 0: ""}${ss}`
    console.log(tiempo)

    //if (c==5) clearInterval(hora);
},1000)