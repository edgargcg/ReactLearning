import { getHeroeById } from './08-imports-exports';

// const promise = new Promise(
//     (resolve, reject) => {
//         setTimeout(
//             () => {
//                 const heroe = getHeroeById(2);
//                 resolve(heroe);
//                 reject(heroe);
//             }, 
//             2000
//         );
//     }
// );

// promise
//     .then(
//         (heroe) =>
//         {
//             console.log(`Promise's then`, heroe);
//         }
//     )
//     .catch(
//         err => console.warn(err)
//     )
//     .finally(
//         () =>
//         {
//             console.log("Promise's finally")
//         }
//     );

export const getHeroeByIdAsyn = (id) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    const heroe = getHeroeById(id);
                    if (heroe)
                        resolve(heroe);
                    else
                        reject(`Not heroe found with Id ${id}`);
                }, 
                1500
            );
        }
    );
}

// getHeroeByIdAsyn(10)
//     .then(console.log)
//     .catch(console.warn);