import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
// provider is going to keep track of that store which is there at global state and allows us to access that store anywhere inside of the app. we do not have to be in the exact parent or child component to access the state
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers'
import App from './App';
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>, 
document.getElementById('root'));
