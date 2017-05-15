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
                <IndexRoute getComponent={(location, cb) => {
                    require(['./containers/admin/home/index'], function (Home) {
                        cb(null, Home);
                    });
                }}/>

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
                        //全辖银行业务全量银行数据汇总报表-日
                        <Route path='bankRoutineDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankRoutineDataDay'], function (bankRoutineDataDay) {
                                cb(null, bankRoutineDataDay);
                            });
                        }}/>
                        //全辖银行业务待处理异常数据汇总报表-日
                        <Route path='bankErrorDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankErrorDataDay'], function (bankErrorDataDay) {
                                cb(null, bankErrorDataDay);
                            });
                        }}/>
                        //双零站点明细报表-日
                        <Route path='zeroSiteDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/zeroSiteDataDay'], function (zeroSiteDataDay) {
                                cb(null, zeroSiteDataDay);
                            });
                        }}/>
                        //无匹配的银行数据明细报表-日
                        <Route path='bankNoMatchDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankNoMatchDataDay'], function (bankNoMatchDataDay) {
                                cb(null, bankNoMatchDataDay);
                            });
                        }}/>
                        //银行业务暂停站点明细报表-日
                        <Route path='bankPauseDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankPauseDataDay'], function (bankPauseDataDay) {
                                cb(null, bankPauseDataDay);
                            });
                        }}/>
                        //银行业务未开展站点明细报表-日
                        <Route path='bankNoOpenDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankNoOpenDataDay'], function (bankNoOpenDataDay) {
                                cb(null, bankNoOpenDataDay);
                            });
                        }}/>
                        //全辖站点增量日报（签约、数据、落地情况）-日
                        <Route path='siteAddDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/siteAddDataDay'], function (siteAddDataDay) {
                                cb(null, siteAddDataDay);
                            });
                        }}/>
                        //月新增签约站点明细报表-日
                        <Route path='siteSignDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/siteSignDataDay'], function (siteSignDataDay) {
                                cb(null, siteSignDataDay);
                            });
                        }}/>
                        //月新增数据站点明细报表-日
                        <Route path='siteNewAddDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/siteNewAddDataDay'], function (siteNewAddDataDay) {
                                cb(null, siteNewAddDataDay);
                            });
                        }}/>
                        //月新增落地站点明细报表-日
                        <Route path='siteNewFinishDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/siteNewFinishDataDay'], function (siteNewFinishDataDay) {
                                cb(null, siteNewFinishDataDay);
                            });
                        }}/>
                    </Route>

                    //巡查日报
                    <Route path='patrolData'>
                        //每日站点巡查汇总报表-日
                        <Route path='sitePatrolAllDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/sitePatrolAllDataDay'], function (sitePatrolAllDataDay) {
                                cb(null, sitePatrolAllDataDay);
                            });
                        }}/>
                        //每日站点巡查明细报表-日
                        <Route path='siteDetailsDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/siteDetailsDataDay'], function (siteDetailsDataDay) {
                                cb(null, siteDetailsDataDay);
                            });
                        }}/>
                    </Route>

                    //其他日报
                    <Route path='otherData'>
                        //站长交易录入明细报表-日
                        <Route path='masterBusinessDataDay' getComponent={(location, cb) => {
                            require(['./containers/reportForm/masterBusinessDataDay'], function (masterBusinessDataDay) {
                                cb(null, masterBusinessDataDay);
                            });
                        }}/>
                    </Route>

                    //银行业务月报
                    <Route path='bankMonth'>
                        //全辖银行业务常规数据汇总报表-月
                        <Route path='bankAllDataMonth' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankAllDataMonth'], function (bankAllDataMonth) {
                                cb(null, bankAllDataMonth);
                            });
                        }}/>
                        //全辖银行业务全量银行数据汇总报表-月
                        <Route path='bankRoutineDataMonth' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankRoutineDataMonth'], function (bankRoutineDataMonth) {
                                cb(null, bankRoutineDataMonth);
                            });
                        }}/>
                        //全辖银行业务待处理异常数据汇总报表-月
                        <Route path='bankErrorDataMonth' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankErrorDataMonth'], function (bankErrorDataMonth) {
                                cb(null, bankErrorDataMonth);
                            });
                        }}/>
                        //双零站点明细报表-月
                        <Route path='zeroSiteDataMonth' getComponent={(location, cb) => {
                            require(['./containers/reportForm/zeroSiteDataMonth'], function (zeroSiteDataMonth) {
                                cb(null, zeroSiteDataMonth);
                            });
                        }}/>
                        //无匹配的银行数据明细报表-月
                        <Route path='bankNoMatchDataMonth' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankNoMatchDataMonth'], function (bankNoMatchDataMonth) {
                                cb(null, bankNoMatchDataMonth);
                            });
                        }}/>
                        //银行业务暂停站点明细报表-月
                        <Route path='bankPauseDataMonth' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankPauseDataMonth'], function (bankPauseDataMonth) {
                                cb(null, bankPauseDataMonth);
                            });
                        }}/>
                        //银行业务未开展站点明细报表-月
                        <Route path='bankNoOpenDataMonth' getComponent={(location, cb) => {
                            require(['./containers/reportForm/bankNoOpenDataMonth'], function (bankNoOpenDataMonth) {
                                cb(null, bankNoOpenDataMonth);
                            });
                        }}/>
                        //全辖站点增量日报（签约、数据、落地情况）-月
                        <Route path='siteAddDataMonth' getComponent={(location, cb) => {
                            require(['./containers/reportForm/siteAddDataMonth'], function (siteAddDataMonth) {
                                cb(null, siteAddDataMonth);
                            });
                        }}/>
                        //月新增数据站点明细报表-月
                        <Route path='siteNewAddDataMonth' getComponent={(location, cb) => {
                            require(['./containers/reportForm/siteNewAddDataMonth'], function (siteNewAddDataMonth) {
                                cb(null, siteNewAddDataMonth);
                            });
                        }}/>
                        //月新增落地站点明细报表-月
                        <Route path='siteNewFinishDataMonth' getComponent={(location, cb) => {
                            require(['./containers/reportForm/siteNewFinishDataMonth'], function (siteNewFinishDataMonth) {
                                cb(null, siteNewFinishDataMonth);
                            });
                        }}/>
                    </Route>

                </Route>

            </Route>
        </Router>
    </Provider>
),document.getElementById("myBlog"));