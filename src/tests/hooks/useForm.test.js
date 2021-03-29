import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Pruebas de useForm', () => {

    const initialForm = {
        name: 'Kiki',
        email: 'deliveryservice@example.com'
    };

    test('debe regresar el formulario inicial', () => {

        const response = renderHook( () => useForm( initialForm ));
        const [ values, handleInputChange, reset ] = response.result.current;
        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset).toBe( 'function' );
    });

    test('debe cambiar el valor de forumario "name"', () => {
        const response = renderHook( () => useForm( initialForm ));
        const [,handleInputChange] = response.result.current;

        const data = {
            target:{
                name: 'name',
                value: 'Jiji'
            }
        };

        act(() => {
            handleInputChange( data );
        });
        
        const [ values ] = response.result.current;
        expect( values ).toEqual( {...initialForm, name:'Jiji'} );
        
    });
    
    test('debe reestablecer el formulario', () => {
        const response = renderHook( () => useForm( initialForm ));
        const [,handleInputChange,reset] = response.result.current;

        const data = {
            target:{
                name: 'name',
                value: 'Jiji'
            }
        };

        act(() => {
            handleInputChange( data );
            reset();
        });
        
        const [values] = response.result.current;
        expect( values ).toEqual( initialForm );
        
    });
    
    
})