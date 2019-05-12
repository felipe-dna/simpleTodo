// 1. as actions são funções puras
// 2. type define a ação da função, o identificador da action


export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text,
    }
};