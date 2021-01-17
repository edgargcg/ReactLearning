import { heroes } from "../Data/heroes"

export const getHeroesByName = ( name: string ) => {
    if (name === '')
        return [];

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name?.toString().toLowerCase()))
}
