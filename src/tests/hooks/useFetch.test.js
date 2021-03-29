const { renderHook } = require("@testing-library/react-hooks");
const { useFetch } = require("../../hooks/useFetch");


describe('pruebas de useFetch', () => {
   
    test('debe retnornar valores por defecto', () => {
        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const { data, loading, error } = result.current;
        expect( data ).toBe( null );
        expect( loading).toBe( true );
        expect( error ).toBe( null );
    });

    test('debe manejar el error', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
        
        await waitForNextUpdate();

        const { data, loading, error } = result.current;
       
        expect( data ).toBe( null );
        expect( loading ).toBe( false );
        expect( error ).toBe( 'No se pudo cargar la data' );
    })
    

});