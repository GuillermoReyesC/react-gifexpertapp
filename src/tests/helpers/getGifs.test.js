import { getGifs } from "./getGifs";




describe('Pruebas en getGifs << fetch >>', () => {

    test('debe traer 10 elementos', async() => {
        
        const gifs = await getGifs('one punch man')

        expect(gifs.length).toBe( 10 );        

        
    });

    test('debe traer 10 elementos', async() => {
        
        const gifs = await getGifs('')

        expect(gifs.length).toBe( 0 );        

        
        
    });


});