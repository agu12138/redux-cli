import { render } from "react-dom";
import React from "react";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Reducers from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);



  export default (Index:any)=>{
    render(
        <Provider store={createStoreWithMiddleware(Reducers)}>
           <Index/>
         </Provider>,
          document.getElementById("app")
        );
  }