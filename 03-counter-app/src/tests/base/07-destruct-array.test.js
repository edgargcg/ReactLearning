import { getArray } from '../../bases/07-destruct-arrays';

describe('Testing 07-destruct-array', () => {

    test('Should return an string and number', () => {
        
        const [ letters, numbers ] = getArray();

        // expect(arr).toEqual(['ABC', 123]);

        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');

        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    })
    
    
})
