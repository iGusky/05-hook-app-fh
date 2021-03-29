
// * Este será el estado inicial
const tareaInitial = [{
    id: 1,
    todo: 'Comprar queso',
    done: false,
}];

const todoReducer = ( state = tareaInitial, action ) => {
    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer();

const nuevaTarea = {
    id: 2,
    todo: 'Comprar tortillas',
    done: false,
}
const action = {
    type: 'agregar',
    payload: nuevaTarea,
}

todos = todoReducer( todos, action); 

console.log(todos);