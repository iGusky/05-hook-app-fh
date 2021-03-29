import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/components/TodoList"
import { TodoListItem } from "../../../components/08-useReducer/components/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoList />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoList
        todos = { demoTodos }
        handleDelete = { handleDelete }
        handleToggle = { handleToggle }
        />);

    test('debe de mostrarse correctamente', () => {
        expect ( wrapper ).toMatchSnapshot();
    });
    
    test('debe tener 2 <TodoListItem />', () => {
        const items = wrapper.find('TodoListItem');
        expect( items.length ).toBe( demoTodos.length );
        expect( items.at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
    })
    
    
})
