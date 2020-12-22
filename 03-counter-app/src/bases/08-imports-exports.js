import  heroes, { owners }  from "../data/heroes";

export const getHeroeById = (id) => {
    return heroes.find(h => h.id === id);
}
// console.log(getHeroeById(3));

export const getHeroByOwner = (owner) => {
    return heroes.filter(h => h.owner === owner);
};
// console.log(getHeroByOwner('Marvel'))
// console.log(owners);