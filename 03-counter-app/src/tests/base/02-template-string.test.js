import '@testing-library/jest-dom';
import { getGreeting  } from "../../bases/02-template-string";

describe('Tests on 02-template-string', () => {
    
    test('Test getGreeting to get Hello <name> with name', () => {
        const name = 'Edgar';

        const greeting = getGreeting(name);
        
        expect(greeting).toBe(`Hello ${name}`);   
    })

    test('Test getGreeting to get Hello <name> without name', () => {
        const greeting = getGreeting();

        expect(greeting).toBe(`Hello Carlos`);
    })
    
    

})
