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
                </Route>
                //系统管理
                <Route path='System'>
                    // 角色管理
                    <Route path='RoleManager' getComponent={(location, cb) => {
                        require(['./containers/roles/index'], function (RoleManager) {
                            cb(null, RoleManager);
                        });
                    }}/>
                    // 角色管理--新增角色
                    <Route path='AddRole/:roleCode' getComponent={(location, cb) => {
                        require(['./containers/roles/add'], function (addRole) {
                            cb(null, addRole);
                        });
                    }}/>
                    //用户管理
                    <Route path='UserManager' getComponent={(location, cb) => {
                        require(['./containers/user/index'], function (UserManager) {
                            cb(null, UserManager);
                        });
                    }}/>
                    //站点申请审核
                    <Route path='UserManager' getComponent={(location, cb) => {
                        require(['./containers/helpLoan/qualExam/siteAppication'], function (UserManager) {
                            cb(null, UserManager);
                        });
                    }}/>
                </Route>


                //报表路由
                <Route path='ReportForm'>
                    //银行业务日报
                    <Route path='bankData'>
                        //全辖银行业务常规数据汇总报表-日
                        <Route path='bankAllDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankAllDataDay'], function (bankAllDataDay) {
                                cb(null, bankAllDataDay);
                            });
                        }}/>
                    </Route>


                </Route>

            </Route>
        </Router>
    </Provider>
),document.getElementById("container"));