import { getHeroeByIdAsyn }  from '../../bases/09-promises';
import heroes from '../../data/heroes';

describe('Test on 09-promises', () => {
    
    test('Should get a heroe async', (done) => {
        const id = 1;

        getHeroeByIdAsyn(id)
            .then(
                heroe => {
                    expect(heroe).toBe(heroes[0]);
                    done();
                }
            );
    })

    test('Should get not heroe found message on id does not exists', (done) => {
        const id = 100;

        getHeroeByIdAsyn(id)
            .catch(
                error => {
                    expect(typeof error).toBe('string');
                    done();
                }
            );
    })
    
    

})
