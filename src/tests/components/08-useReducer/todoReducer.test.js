import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas con todoReducer', () => {

    test('debe retornar estado por defecto', () => {
        const state = todoReducer( demoTodos, {});
        expect( state ).toEqual(demoTodos);
    });

    test('Debe agregar un nuevo TODO', () => {
        const action = {
            type: 'add',
            payload: {
                id:3,
                todo: 'Aprender MERN',
                done: false
            }
        }
        const state = todoReducer( demoTodos, action );
        expect ( state ).toEqual( [...demoTodos, action.payload] );
    });

    test('debe borrar un TODO', () => {
        const action = {
            type: 'delete',
            payload: 2
        }
        const state = todoReducer( demoTodos, action );
        expect( state.length ).toBe(1);
    });

    test('debe borrar un TODO', () => {
        const action = {
            type: 'delete',
            payload: 2
        }
        const state = todoReducer( demoTodos, action );
        expect( state.length ).toBe(1);
        expect( state ).toEqual( [demoTodos[0]] );
    });

    test('debe cambiar el TOGGLE del TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1
        }
        const state = todoReducer( demoTodos, action );
        expect(state[0].done).toBe(true);
    })
    
    
    
    
})
