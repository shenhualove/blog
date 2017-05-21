/**
 * Created by apple on 17/4/19.
 *
 * 后台应用路由
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute,Route,Router,browserHistory} from 'react-router';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';

import Index from './components/admin';
import admin from './reducers/admin';

const store = createStore(
    admin,
    applyMiddleware(
        thunkMiddleware
    )
);

const historys = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={historys}>
            <Route path='/admin' component={Index}>
                //栏目管理
                <Route path='column'>
                    <Route path='list' getComponent={(location, cb) => {
                        require(['./containers/admin/column/list'], function (columnList) {
                            cb(null, columnList);
                        });
                    }}/>
                    <Route path='add' getComponent={(location, cb) => {
                        require(['./containers/admin/column/add'], function (columnAdd) {
                            cb(null, columnAdd);
                        });
                    }}/>
                    <Route path='update/:id' getComponent={(location, cb) => {
                        require(['./containers/admin/column/update'], function (columnUpdate) {
                            cb(null, columnUpdate);
                        });
                    }}/>
                </Route>

                //文章管理
                <Route path='article'>
                    <Route path='list' getComponent={(location, cb) => {
                        require(['./containers/admin/article/list'], function (articleList) {
                            cb(null, articleList);
                        });
                    }}/>
                    <Route path='add' getComponent={(location, cb) => {
                        require(['./containers/admin/article/add'], function (articleAdd) {
                            cb(null, articleAdd);
                        });
                    }}/>
                    <Route path='update/:id' getComponent={(location, cb) => {
                        require(['./containers/admin/article/update'], function (articleUpdate) {
                            cb(null, articleUpdate);
                        });
                    }}/>
                </Route>

                //链接管理
                <Route path='link'>
                    <Route path='list' getComponent={(location, cb) => {
                        require(['./containers/admin/link/list'], function (linkList) {
                            cb(null, linkList);
                        });
                    }}/>
                    <Route path='add' getComponent={(location, cb) => {
                        require(['./containers/admin/link/add'], function (linkAdd) {
                            cb(null, linkAdd);
                        });
                    }}/>
                    <Route path='update/:id' getComponent={(location, cb) => {
                        require(['./containers/admin/link/update'], function (linkUpdate) {
                            cb(null, linkUpdate);
                        });
                    }}/>
                </Route>
            </Route>
        </Router>
    </Provider>
),document.getElementById("container"));