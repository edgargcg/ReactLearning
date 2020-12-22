import * as h  from '../../bases/08-imports-exports';
import heroes from '../../data/heroes';

describe('Test on 08-imports-exports', () => {
    
    test('Shoudl get a heroe by id', () => {
        
        const id = 1;

        const heroe = h.getHeroeById(id);
        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('Should get a undefined if id does not exists', () => {
        
        const id = 10;

        const heroe = h.getHeroeById(id);
        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);
    })
    
    test('Should get all DCs heroes', () => {
        const owner = 'DC';

        const heroesExpect = h.getHeroByOwner(owner);

        const heroesData = heroes.filter(heroe => heroe.owner === owner);

        expect(heroesExpect).toEqual(heroesData);
    })

    test('Should get total Marvels heroes', () => {
        const owner = 'Marvel';

        const heroesExpect = h.getHeroByOwner(owner);
        
        const heroesData = heroes.filter(heroe => heroe.owner === owner);

        expect(heroesExpect.length).toBe(heroesData.length);
    })
    
    


})
