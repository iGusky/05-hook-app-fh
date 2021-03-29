import { TodoListItem } from "../../../components/08-useReducer/components/TodoListItem"
import { shallow } from 'enzyme';
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoListItem />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem
        todo = { demoTodos[0] }
        index = { demoTodos[0].id }
        handleDelete = { handleDelete }
        handleToggle = { handleToggle }
    />);

    test('debe mostrarse correctamente', () => {
        expect ( wrapper ).toMatchSnapshot();
    });

    test('debe de llamar la función handleDelete', () => {

        wrapper.find('button').simulate('click')
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('debe de llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('debe mostrar el texto correctamente', () => {
        const test = wrapper.find('p').text();
        expect( test ).toBe(`${demoTodos[0].id}. ${demoTodos[0].todo}`);
    });

    test('debe tener la clase COMPLETE si el TODO.DONE es TRUE', () => {
        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(<TodoListItem todo={todo}/>);
        expect( wrapper.find('p').hasClass('complete') ).toBe(true);
    })
    
    
    
    
    

})
