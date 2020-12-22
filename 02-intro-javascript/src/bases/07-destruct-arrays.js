const personajes = ['Goku', 'Vegeta', 'Trunks'];

/// Ignores first position
const [ , p2, p3 ] = personajes;
console.log(p2, p3);

const getArray = () => {
    return ["ABC", 123];
};

const [ letters, numbers] = getArray();
console.log(letters, numbers);

// Homework

const getState = (value) => {
    return [value, () => { console.log('Hola Mundo') }];
};

const [ nombre, specialFunction] = getState(1);
console.log(nombre, specialFunction);
specialFunction();