import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'



describe('pruebas en el hook', () => {

    test('debe de retornar el estado inicial', async()  => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));   
        const { data, loading } = result.current;

        //console.log(data, loading)

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
        
    });

    test('debe de retornar un arreglo de imágenes y el loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));   
        await waitForNextUpdate();

        const { data, loading } = result.current;

        //console.log(data, loading)

        
        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
        
    })
    
});