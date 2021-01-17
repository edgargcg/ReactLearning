import { heroes } from '../Data/heroes';

export const getHeroesById = ( id: string ): any => heroes.find( hero => hero.id === id );