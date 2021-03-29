import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/08-useReducer/components/TodoAdd"

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow( <TodoAdd handleAddTodo = { handleAddTodo } />)

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('no debe de llamar el HandleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit( { preventDefault(){} } );
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    });

    test('se debe de llamar el HandleAddTodo', () => {

        const value = 'Aprender Express';
        wrapper.find('input').simulate('change',{
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit( { preventDefault(){} } );
        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( {
            id: expect.any(Number),
            desc:value,
            done: false
        } );
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
    
    
})
