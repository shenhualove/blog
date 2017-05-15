/**
 * Created by apple on 17/4/19.
 *
 * 后台应用路由
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('node_modules/react/react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('node_modules/react-dom/index');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('node_modules/react-router/lib/index');

var _redux = require('node_modules/redux/lib/index');

var _reactRedux = require('node_modules/react-redux/lib/index');

var _reduxThunk = require('node_modules/redux-thunk/lib/index');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = require('node_modules/react-router-redux/lib/index');

var _componentsAdmin = require('src/js/components/admin/index');

var _componentsAdmin2 = _interopRequireDefault(_componentsAdmin);

var _reducersAdmin = require('src/js/reducers/admin/index');

var _reducersAdmin2 = _interopRequireDefault(_reducersAdmin);

var store = (0, _redux.createStore)(_reducersAdmin2['default'], (0, _redux.applyMiddleware)(_reduxThunk2['default']));

var historys = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

_reactDom2['default'].render(_react2['default'].createElement(
    _reactRedux.Provider,
    { store: store },
    _react2['default'].createElement(
        _reactRouter.Router,
        { history: historys },
        _react2['default'].createElement(
            _reactRouter.Route,
            { path: '/admin', component: _componentsAdmin2['default'] },
            _react2['default'].createElement(_reactRouter.IndexRoute, { getComponent: function (location, cb) {
                    require(['src/js/containers/admin/home/index'], function (Home) {
                        cb(null, Home);
                    });
                } }),
            '//系统管理',
            _react2['default'].createElement(
                _reactRouter.Route,
                { path: 'System' },
                '// 角色管理',
                _react2['default'].createElement(_reactRouter.Route, { path: 'RoleManager', getComponent: function (location, cb) {
                        require(['./containers/roles/index'], function (RoleManager) {
                            cb(null, RoleManager);
                        });
                    } }),
                '// 角色管理--新增角色',
                _react2['default'].createElement(_reactRouter.Route, { path: 'AddRole/:roleCode', getComponent: function (location, cb) {
                        require(['./containers/roles/add'], function (addRole) {
                            cb(null, addRole);
                        });
                    } }),
                '//用户管理',
                _react2['default'].createElement(_reactRouter.Route, { path: 'UserManager', getComponent: function (location, cb) {
                        require(['src/js/containers/user/index'], function (UserManager) {
                            cb(null, UserManager);
                        });
                    } }),
                '//站点申请审核',
                _react2['default'].createElement(_reactRouter.Route, { path: 'UserManager', getComponent: function (location, cb) {
                        require(['./containers/helpLoan/qualExam/siteAppication'], function (UserManager) {
                            cb(null, UserManager);
                        });
                    } })
            ),
            '//报表路由',
            _react2['default'].createElement(
                _reactRouter.Route,
                { path: 'ReportForm' },
                '//银行业务日报',
                _react2['default'].createElement(
                    _reactRouter.Route,
                    { path: 'bankData' },
                    '//全辖银行业务常规数据汇总报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankAllDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankAllDataDay'], function (bankAllDataDay) {
                                cb(null, bankAllDataDay);
                            });
                        } }),
                    '//全辖银行业务全量银行数据汇总报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankRoutineDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankRoutineDataDay'], function (bankRoutineDataDay) {
                                cb(null, bankRoutineDataDay);
                            });
                        } }),
                    '//全辖银行业务待处理异常数据汇总报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankErrorDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankErrorDataDay'], function (bankErrorDataDay) {
                                cb(null, bankErrorDataDay);
                            });
                        } }),
                    '//双零站点明细报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'zeroSiteDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/zeroSiteDataDay'], function (zeroSiteDataDay) {
                                cb(null, zeroSiteDataDay);
                            });
                        } }),
                    '//无匹配的银行数据明细报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankNoMatchDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankNoMatchDataDay'], function (bankNoMatchDataDay) {
                                cb(null, bankNoMatchDataDay);
                            });
                        } }),
                    '//银行业务暂停站点明细报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankPauseDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankPauseDataDay'], function (bankPauseDataDay) {
                                cb(null, bankPauseDataDay);
                            });
                        } }),
                    '//银行业务未开展站点明细报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankNoOpenDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankNoOpenDataDay'], function (bankNoOpenDataDay) {
                                cb(null, bankNoOpenDataDay);
                            });
                        } }),
                    '//全辖站点增量日报（签约、数据、落地情况）-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'siteAddDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/siteAddDataDay'], function (siteAddDataDay) {
                                cb(null, siteAddDataDay);
                            });
                        } }),
                    '//月新增签约站点明细报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'siteSignDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/siteSignDataDay'], function (siteSignDataDay) {
                                cb(null, siteSignDataDay);
                            });
                        } }),
                    '//月新增数据站点明细报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'siteNewAddDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/siteNewAddDataDay'], function (siteNewAddDataDay) {
                                cb(null, siteNewAddDataDay);
                            });
                        } }),
                    '//月新增落地站点明细报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'siteNewFinishDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/siteNewFinishDataDay'], function (siteNewFinishDataDay) {
                                cb(null, siteNewFinishDataDay);
                            });
                        } })
                ),
                '//巡查日报',
                _react2['default'].createElement(
                    _reactRouter.Route,
                    { path: 'patrolData' },
                    '//每日站点巡查汇总报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'sitePatrolAllDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/sitePatrolAllDataDay'], function (sitePatrolAllDataDay) {
                                cb(null, sitePatrolAllDataDay);
                            });
                        } }),
                    '//每日站点巡查明细报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'siteDetailsDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/siteDetailsDataDay'], function (siteDetailsDataDay) {
                                cb(null, siteDetailsDataDay);
                            });
                        } })
                ),
                '//其他日报',
                _react2['default'].createElement(
                    _reactRouter.Route,
                    { path: 'otherData' },
                    '//站长交易录入明细报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'masterBusinessDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/masterBusinessDataDay'], function (masterBusinessDataDay) {
                                cb(null, masterBusinessDataDay);
                            });
                        } })
                ),
                '//银行业务月报',
                _react2['default'].createElement(
                    _reactRouter.Route,
                    { path: 'bankMonth' },
                    '//全辖银行业务常规数据汇总报表-月',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankAllDataMonth', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankAllDataMonth'], function (bankAllDataMonth) {
                                cb(null, bankAllDataMonth);
                            });
                        } }),
                    '//全辖银行业务全量银行数据汇总报表-月',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankRoutineDataMonth', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankRoutineDataMonth'], function (bankRoutineDataMonth) {
                                cb(null, bankRoutineDataMonth);
                            });
                        } }),
                    '//全辖银行业务待处理异常数据汇总报表-月',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankErrorDataMonth', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankErrorDataMonth'], function (bankErrorDataMonth) {
                                cb(null, bankErrorDataMonth);
                            });
                        } }),
                    '//双零站点明细报表-月',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'zeroSiteDataMonth', getComponent: function (location, cb) {
                            require(['./containers/reportForm/zeroSiteDataMonth'], function (zeroSiteDataMonth) {
                                cb(null, zeroSiteDataMonth);
                            });
                        } }),
                    '//无匹配的银行数据明细报表-月',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankNoMatchDataMonth', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankNoMatchDataMonth'], function (bankNoMatchDataMonth) {
                                cb(null, bankNoMatchDataMonth);
                            });
                        } }),
                    '//银行业务暂停站点明细报表-月',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankPauseDataMonth', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankPauseDataMonth'], function (bankPauseDataMonth) {
                                cb(null, bankPauseDataMonth);
                            });
                        } }),
                    '//银行业务未开展站点明细报表-月',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankNoOpenDataMonth', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankNoOpenDataMonth'], function (bankNoOpenDataMonth) {
                                cb(null, bankNoOpenDataMonth);
                            });
                        } }),
                    '//全辖站点增量日报（签约、数据、落地情况）-月',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'siteAddDataMonth', getComponent: function (location, cb) {
                            require(['./containers/reportForm/siteAddDataMonth'], function (siteAddDataMonth) {
                                cb(null, siteAddDataMonth);
                            });
                        } }),
                    '//月新增数据站点明细报表-月',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'siteNewAddDataMonth', getComponent: function (location, cb) {
                            require(['./containers/reportForm/siteNewAddDataMonth'], function (siteNewAddDataMonth) {
                                cb(null, siteNewAddDataMonth);
                            });
                        } }),
                    '//月新增落地站点明细报表-月',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'siteNewFinishDataMonth', getComponent: function (location, cb) {
                            require(['./containers/reportForm/siteNewFinishDataMonth'], function (siteNewFinishDataMonth) {
                                cb(null, siteNewFinishDataMonth);
                            });
                        } })
                )
            )
        )
    )
), document.getElementById("myBlog"));
//# sourceMappingURL=/js/admin-router.js.map
