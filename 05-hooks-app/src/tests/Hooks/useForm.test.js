import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../Hooks/useForm'

describe('Test on useForm Hook', () => {
    const initialForm = {
        name: 'Edgar',
        email: 'edgargcg@gmail.com'
    }

    test('Should return a default form ', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset] = result.current;
        
        expect( formValues ).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    })
    
    test('Should change form value (only name changes)', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;
        
        act(() => {
            handleInputChange(
                {
                    target:{
                        name: 'name',
                        value: 'Pad'
                    }
                }
            );
        })

        const [ formValues ] = result.current;
        expect( formValues.name ).toBe('Pad')
    })
    
    test('Should reset form', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        
        act(() => {
            result.current[1](
                {
                    target:{
                        name: 'name',
                        value: 'Pad'
                    }
                }
            );
            result.current[2]();
        })
    
        expect( result.current[0].name ).toBe(initialForm.name);
        
    })
    
    

})
