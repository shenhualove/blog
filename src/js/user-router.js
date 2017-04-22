/**
 * Created by apple on 17/4/19.
 *
 * 前台应用路由
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';
import blog from './reducers/user/index';
import Index from './containers/user';

const store = createStore(
    blog,
    applyMiddleware(
        thunkMiddleware
    )
);

//const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Index />
        </BrowserRouter>
    </Provider>
),document.getElementById("myBlog"));