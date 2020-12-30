import { useFetchGifs } from "../../Hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('Test on useFetchGifs Hook', () => {
    const category = 'BATMAN';

    test('should return initial state', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    
    test('should return an image array and loading set to false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) );
        await waitForNextUpdate();

        const { data, loading } = result.current;
        
        expect(data.length).toBe(5);        
    })
    
    

})
