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
                        } })
                )
            )
        )
    )
), document.getElementById("container"));
//# sourceMappingURL=/js/admin-router.js.map
