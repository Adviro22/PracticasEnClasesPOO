//BOM
//Permite acceder y modificar las propiedades de las ventanas del propio navegador.
// Crear, mover, redimensionar y cerrar ventanas de navegador.
// Obtener información sobre el propio navegador.
// Propiedades de la página actual y de la pantalla del usuario.
// Gestión de cookies.
// href - Retorna la URL de la página actual
console.log(location.href);

// hostname - Retorna el host de la página actual
console.log(location.hostname);

// pathname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);
// procotol - Retorna el protocolo utilizado
console.log(location.protocol)
// cargar documento
const cargarDocumento = () => {
	location.assign('https://google.com');
};
//cargarDocumento()
const irAdelante = () => {
	history.forward();
};
//irAdelante()
console.log('Cookies activadas:', navigator.cookieEnabled);

console.log(navigator.userAgent);

console.log(navigator.language);
console.log(navigator.onLine);
// la pantalla del  usuario
console.log('Ancho de pantalla:', window.screen.width);
console.log('Alto de pantalla:', window.screen.height);

console.log('Ancho de pantalla sin barra de Windows:', window.screen.availWidth);
console.log('Alto de pantalla sin barra de Windows:', window.screen.availHeight);