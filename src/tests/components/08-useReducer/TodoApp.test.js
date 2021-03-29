
import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn( () => { } );

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();    
    });

    test('debe agregar un TODO', () => {
        const wrapper = mount( <TodoApp />);

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect( wrapper.find('h1').text().trim() ).toBe('Todo App (2)');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    });
    
    test('debe de mandarse a llamar el HandleDelete', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect( wrapper.find('h1').text().trim() ).toBe('Todo App (0)');

    })
    
    
})
