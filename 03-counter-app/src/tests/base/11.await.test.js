import { getImage } from '../../bases/11-await'

describe('Tests in 11.Await', () => {
    
    test('Should return an url', async() => {
        
        const url = await getImage();
        
        expect(url.includes('https://')).toBe(true);
    })
    

})
