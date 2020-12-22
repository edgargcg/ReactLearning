describe('Test on demo.test.js', () => {
    
    test("THE STRINGS MUST BE EQUALS", () => {
        // 1. Initializing
        const message = 'Hola Mundo';
    
        // 2. Stimulus
        const message2 = `Hola Mundo`;
    
        // 3. Observe behavior
        expect(message).toBe(message2);
    });

})

