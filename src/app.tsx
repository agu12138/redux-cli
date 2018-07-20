import * as React from 'react';

import * as reactDom from 'react-dom';

import * as romise  from 'redux-promise';

import {Provider} from 'react-redux';

import {createStore,applyMiddleware} from 'redux';

import {App} from './components/index';

import reducers from './reducers/index';

const initValue={
    'First':0,
    'Second':10,
    'Third':20,
    'abc':"我是大笨蛋"
}
//console.log(romise)
//const createStoreWithMiddleware = applyMiddleware(romise)(createStore);

reactDom.render(
    <Provider store={createStore(reducers,initValue)}>
        <App />
    </Provider>,
    document.body
)