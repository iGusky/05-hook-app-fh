import { act, renderHook } from "@testing-library/react-hooks"
import useCounter from "../../hooks/useCounter"

describe('Pruebas de useCounter...', () => {
    test('debe retornar valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );

        // .current nos muestra lo que retorna el custom hook.
        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    });

    test('debe retornar valores asignado', () => {
        const { result } = renderHook( () => useCounter(1313) );
        expect( result.current.counter ).toBe(1313);
    });

    test('debe incrementar en uno', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        // act sirve para ejecutar funciones, en este caso del hook
        act( () => increment() );
        
        const { counter } = result.current;
        expect( counter ).toBe(101);
    });
    
    test('debe decrementar en uno', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        // act sirve para ejecutar funciones, en este caso del hook
        act( () => decrement() );
        
        const { counter } = result.current;
        expect( counter ).toBe(99);
    });

    test('debe reiniciar a 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment, reset } = result.current;

        // act sirve para ejecutar funciones, en este caso del hook
        act( () => {
            increment();
            reset();
        } );
        
        const { counter } = result.current;
        expect( counter ).toBe(100);
    });

    
})