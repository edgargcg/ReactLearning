import {  getUser, getUsuarioActivo } from "../../bases/05-functions";

describe('Test on 05-functions', () => {
    
    test('getUser - Should return an object', () => {
        
        const userTest = {
            uid: 'ABCD',
            username: 'hermit0'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUserActive - Should return an object', () => {
        const name = 'Edgar';

        const userTest = {
            uid: 'ABCD567',
            username: name
        }

        const user = getUsuarioActivo(name);

        expect(user).toEqual(userTest);
    })
    
})
