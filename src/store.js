// responsável por inicializar o redux
import { createStore } from 'redux';

import reducers from './reducers';

// cria um novo store
const store = createStore(reducers);

// nos argumentos é passada uma lista de reducers

export default store;