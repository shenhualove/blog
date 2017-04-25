/**
 * Created by apple on 17/4/19.
 *
 * 前台应用路由
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute,Route,Router,browserHistory} from 'react-router';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';
import blog from './reducers/user/index';
import Index from './containers/user';
import Home from './containers/user/home';
import List from './containers/user/list';
import Page from './containers/user/page';

const store = createStore(
    blog,
    applyMiddleware(
        thunkMiddleware
    )
);

const historys = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={historys}>
            <Route  path="/"  component={Index}>
                <IndexRoute  component={Home} />
                <Route path="list/:id" component={List} />
                <Route path="page/:id" component={Page} />
            </Route>
        </Router>
    </Provider>
),document.getElementById("myBlog"));
