import { getGifs } from "../../../Helpers/Gifs/getGifs"

describe('Test getGifs', () => {
    
    test('should have 5 items', async() => {
        const gifs = await getGifs('Batman');

        expect(gifs.length).toBe(5);
    })

    test('should have 0 items with empty category', async() => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })
    

})
