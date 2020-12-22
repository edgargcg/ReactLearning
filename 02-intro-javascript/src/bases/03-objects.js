const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        calle: 'Lejos',
        numero: '56'
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log({persona});
console.log({persona2});