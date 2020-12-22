const nombre = 'Edgar';
const apellido = 'Campos';

const nombreCompleto = nombre + ' ' + apellido;
const nombreCompletoTemplateString = `${nombre} ${apellido}`;

// console.log(nombre, apellido, nombreCompleto, nombreCompletoTemplateString);

export function getGreeting(nombre = 'Carlos'){
    return 'Hello ' + nombre;
}