// apenas o reducer pode alterar o state

// o nome do reducer é o nome da variável do estado
export default function todos(state = [], action) {
    switch (action.type) {
        
        // adicionar novo todo
        case 'ADD_TODO':
            return [...state, { 
                id: Math.random(), 
                text: action.text
            }]

        default:
            return state;
    }
};