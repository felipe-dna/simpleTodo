import React from 'react';

// responsável por atualizar os componentes 
// quando houver uma alteração no estado da app
import { Provider } from 'react-redux'; 

import store from './store';

import TodoList from './components/TodoList';
import Counter from './components/Counter';

import './styles.css';

function App() {
	return (
		<Provider store={store}> {/* recebe como parametro o store */}
			<TodoList />
			{/* <Counter /> */}
		</Provider>
	)
}

export default App;