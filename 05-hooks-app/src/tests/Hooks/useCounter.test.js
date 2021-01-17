import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../Hooks/useCounter';

describe('Test on useCounter Hook', () => {
    
    test('Should return default values', () => {
        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
        
    })

    test('Should counter value must be 100', () => {
        const { result } = renderHook( () => useCounter(100) );

        expect( result.current.counter ).toBe(100);
    })
    
    test('Should increment counter value by 1', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => {
            increment();
        })

        const { counter } = result.current;
        expect( counter ).toBe(101);
    })
    
    test('Should decrement counter value by 1', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();
        })

        const { counter } = result.current;
        expect( counter ).toBe(99);
    })
    
    test('Should reset counter value by 1', () => {
        const initialValue = 100;
        const { result } = renderHook( () => useCounter(initialValue) );
        const { decrement, reset } = result.current;

        act( () => {
            decrement();
            reset();
        })

        const { counter } = result.current;
        expect( counter ).toBe(initialValue);
    })
    
    

})
