const array = new Array(100);
array.push(1);

const array2 = [1, 2, 3, 4];
// array2.push(1);
// array2.push(2);
// array2.push(3);

// let array3 = array2;
// array3.push(5);

let array3 = [...array2, 5];
const array4 = array3.map( num => { return num * 2; });

console.log(array2)
console.log(array3)
console.log(array4)