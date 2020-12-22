function Saludar(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(Saludar);
console.log(Saludar('Edgar Campos'));
console.log(saludar2('Edgar Campos'));
console.log(saludar3('Edgar Campos'));

// const getUser = () => {
//     return {
//         uid: 'ABCD',
//         username: 'hermit0'
//     };
// }

const getUser = () => ({
    uid: 'ABCD',
    username: 'hermit0'
});

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid: 'ABCD567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('fernando');
console.log(usuarioActivo);